"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertTriangle, MessageCircle } from "lucide-react";
import { PRODUCTS } from "../../lib/products";

const WA_NUMBER = "923000214188";
const inputCls =
  "w-full px-4 py-3 rounded-xl bg-surface-container-lowest border border-tertiary/25 text-on-surface text-body-md placeholder:text-secondary/70 focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", product: "", message: "", website: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [sentName, setSentName] = useState("");
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setSentName(form.name.trim());
        setStatus("sent");
        setForm({ name: "", phone: "", city: "", product: "", message: "", website: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="text-center py-10">
        <CheckCircle2 size={48} className="text-primary-container mx-auto mb-4" />
        <h3 className="text-headline-md font-extrabold text-on-surface mb-2">Enquiry sent!</h3>
        <p className="text-body-md text-secondary max-w-sm mx-auto mb-6">
          Thank you, {sentName || "friend"}. An EIRA specialist will contact you shortly on your phone/WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-label-md font-bold text-primary hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-space-md">
      {/* Honeypot — invisible to humans, bots fill it */}
      <input type="text" value={form.website} onChange={update("website")} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <input required value={form.name} onChange={update("name")} placeholder="Your name *" className={inputCls} aria-label="Your name" disabled={status === "sending"} />
        <input required value={form.phone} onChange={update("phone")} placeholder="Phone / WhatsApp *" className={inputCls} aria-label="Phone or WhatsApp" disabled={status === "sending"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <input value={form.city} onChange={update("city")} placeholder="City" className={inputCls} aria-label="City" disabled={status === "sending"} />
        <select value={form.product} onChange={update("product")} className={inputCls} aria-label="Product of interest" disabled={status === "sending"}>
          <option value="">Interested in…</option>
          {PRODUCTS.map((p) => (
            <option key={p.slug} value={`${p.name} (${p.model})`}>{p.name} ({p.model})</option>
          ))}
          <option value="Spare parts">Spare parts</option>
          <option value="Service / maintenance">Service / maintenance</option>
        </select>
      </div>
      <textarea value={form.message} onChange={update("message")} placeholder="Your message" rows={4} className={inputCls} aria-label="Your message" disabled={status === "sending"} />

      {status === "error" && (
        <div className="flex items-start gap-2 p-3 rounded-xl bg-error-container text-on-error-container text-body-md">
          <AlertTriangle size={18} className="shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Email could not be sent right now.</p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hello EIRA, I am ${form.name}. ${form.message}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-1 font-bold underline"
            >
              <MessageCircle size={15} /> Send it on WhatsApp instead
            </a>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-label-md font-bold transition-all disabled:opacity-60"
      >
        <Send size={16} /> {status === "sending" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
