"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { PRODUCTS } from "../../lib/products";

const WA_NUMBER = "923000214188";
const inputCls =
  "w-full px-4 py-3 rounded-xl bg-surface-container-lowest border border-tertiary/25 text-on-surface text-body-md placeholder:text-secondary/70 focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", product: "", message: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const text =
      `Hello EIRA,%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}` +
      `%0ACity: ${encodeURIComponent(form.city)}%0AInterested in: ${encodeURIComponent(form.product || "General enquiry")}` +
      `%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <form onSubmit={submit} className="space-y-space-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <input required value={form.name} onChange={update("name")} placeholder="Your name *" className={inputCls} aria-label="Your name" />
        <input required value={form.phone} onChange={update("phone")} placeholder="Phone / WhatsApp *" className={inputCls} aria-label="Phone or WhatsApp" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <input value={form.city} onChange={update("city")} placeholder="City" className={inputCls} aria-label="City" />
        <select value={form.product} onChange={update("product")} className={inputCls} aria-label="Product of interest">
          <option value="">Interested in…</option>
          {PRODUCTS.map((p) => (
            <option key={p.slug} value={`${p.name} (${p.model})`}>{p.name} ({p.model})</option>
          ))}
          <option value="Spare parts">Spare parts</option>
          <option value="Service / maintenance">Service / maintenance</option>
        </select>
      </div>
      <textarea value={form.message} onChange={update("message")} placeholder="Your message" rows={4} className={inputCls} aria-label="Your message" />
      <button type="submit" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-label-md font-bold transition-all">
        <Send size={16} /> Send via WhatsApp
      </button>
    </form>
  );
}
