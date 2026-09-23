import nodemailer from "nodemailer";

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function POST(req) {
  try {
    const { name, phone, city, product, message } = await req.json();

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
      <hr><p style="color:#888;font-size:12px">Sent from eiraforklifts.com.pk/contact</p>
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
