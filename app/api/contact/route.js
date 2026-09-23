import nodemailer from "nodemailer";

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Simple in-memory rate limit: max 5 submissions per IP per hour.
// (Resets on server restart; enough for a low-traffic business site.)
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX_PER_WINDOW) return true;
  arr.push(now);
  hits.set(ip, arr);
  return false;
}

export async function POST(req) {
  try {
    const { name, phone, city, product, message, website } = await req.json();

    // Honeypot: bots fill the hidden "website" field; humans never see it.
    if (website) {
      return Response.json({ ok: true });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (rateLimited(ip)) {
      return Response.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
    }

    if (!name?.trim() || !phone?.trim()) {
      return Response.json({ ok: false, error: "Name and phone are required." }, { status: 400 });
    }

    const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_RECIPIENT, CONTACT_SENDER } = process.env;
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !CONTACT_RECIPIENT) {
      return Response.json(
        { ok: false, error: "Email is not configured on the server yet." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    });

    const subject = `New enquiry — ${product || "General enquiry"} | ${name.trim()}`;
    const html = `
      <h2>New website enquiry — EIRA Forklifts</h2>
      <table cellpadding="8" cellspacing="0" border="0">
        <tr><td><b>Name</b></td><td>${esc(name)}</td></tr>
        <tr><td><b>Phone / WhatsApp</b></td><td>${esc(phone)}</td></tr>
        <tr><td><b>City</b></td><td>${esc(city) || "—"}</td></tr>
        <tr><td><b>Interested in</b></td><td>${esc(product) || "General enquiry"}</td></tr>
      </table>
      <p><b>Message</b></p>
      <p>${esc(message).replace(/\n/g, "<br>") || "—"}</p>
      <hr><p style="color:#888;font-size:12px">Sent from eiraforklifts.com.pk</p>
    `;

    await transporter.sendMail({
      from: CONTACT_SENDER || GMAIL_USER,
      to: CONTACT_RECIPIENT,
      replyTo: undefined,
      subject,
      html,
      text: `Name: ${name}\nPhone: ${phone}\nCity: ${city || "—"}\nInterested in: ${product || "General enquiry"}\nMessage: ${message || "—"}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact email failed:", err?.message);
    return Response.json({ ok: false, error: "Could not send email. Please try WhatsApp." }, { status: 500 });
  }
}
