"use client";

import { useState } from "react";
import { Clock, MapPin, MessageCircle, Phone, Send, ShieldCheck, CheckCircle2, AlertTriangle } from 'lucide-react';

const WA_NUMBER = "923000214188";

const inputCls = "w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary text-body-md";
const labelCls = "block text-label-md uppercase tracking-wider text-on-surface mb-1.5";

const initial = { name: "", company: "", phone: "", city: "", product: "", message: "", website: "" };

export default function QuoteModule() {
 const [form, setForm] = useState(initial);
 const [status, setStatus] = useState("idle"); // idle | sending | sent | error
 const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

 const submit = async (e) => {
   e.preventDefault();
   setStatus("sending");
   try {
     const res = await fetch("/api/contact", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         name: form.name,
         phone: form.phone,
         city: form.city,
         product: form.product,
         message: `Company: ${form.company || "—"}\n\n${form.message || "Quotation request from homepage form."}`,
         website: form.website,
       }),
     });
     const data = await res.json();
     if (data.ok) {
       setStatus("sent");
       setForm(initial);
     } else {
       setStatus("error");
     }
   } catch {
     setStatus("error");
   }
 };

 const waFallback = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
   `Hello EIRA, I am ${form.name || ""} from ${form.company || ""} (${form.city || ""}). I need a quote for: ${form.product || "forklift"}.`
 )}`;

 return (
 <>
 {/* 10. LEAD GENERATION / QUOTATION MODULE */}
 <section className="py-space-xl bg-surface-container-low" id="quote-module">
 <div className="wrapper">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
 <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-2xl card-3d tilt-3d">
 <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded text-label-sm font-bold uppercase tracking-wider mb-2">
 Commercial Quotation Request
 </div>
 <h2 className="text-headline-lg font-bold text-on-surface tracking-tight mb-1">
 Tell Us What You Need to Lift
 </h2>
 <p className="text-body-md text-secondary mb-space-lg">
 Submit your parameters below. Our engineering sales team in Karachi will reply with official formal pricing and technical specifications within 2 business hours.
 </p>
 {status === "sent" ? (
   <div className="text-center py-10">
     <CheckCircle2 size={48} className="text-primary mx-auto mb-4" />
     <h3 className="text-headline-md font-bold text-on-surface mb-2">Quotation request received</h3>
     <p className="text-body-md text-secondary max-w-md mx-auto">
       Thank you. An EIRA specialist will contact you shortly on your phone/WhatsApp with official pricing.
     </p>
   </div>
 ) : (
 <form className="space-y-space-md" id="eira-quote-form" onSubmit={submit}>
 {/* Honeypot — invisible to humans, bots fill it */}
 <input type="text" name="website" value={form.website} onChange={update("website")} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
 <div>
 <label className={labelCls} htmlFor="qm-name">
 Full Name <span className="text-primary">*</span>
 </label>
 <input id="qm-name" className={inputCls} placeholder="e.g. Tariq Mahmood" required type="text" value={form.name} onChange={update("name")} disabled={status === "sending"} />
 </div>
 <div>
 <label className={labelCls} htmlFor="qm-company">
 Company Name <span className="text-primary">*</span>
 </label>
 <input id="qm-company" className={inputCls} placeholder="e.g. Indus Packaging Ltd." required type="text" value={form.company} onChange={update("company")} disabled={status === "sending"} />
 </div>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
 <div>
 <label className={labelCls} htmlFor="qm-phone">
 Phone / WhatsApp Number <span className="text-primary">*</span>
 </label>
 <input id="qm-phone" className={inputCls} placeholder="+92 300 0214188" required type="tel" value={form.phone} onChange={update("phone")} disabled={status === "sending"} />
 </div>
 <div>
 <label className={labelCls} htmlFor="qm-city">
 City Location <span className="text-primary">*</span>
 </label>
 <select id="qm-city" className={inputCls} required value={form.city} onChange={update("city")} disabled={status === "sending"}>
 <option disabled value="">Select Operational City</option>
 <option value="Karachi">Karachi</option>
 <option value="Lahore">Lahore</option>
 <option value="Faisalabad">Faisalabad</option>
 <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
 <option value="Multan">Multan</option>
 <option value="Gujranwala / Sialkot">Gujranwala / Sialkot</option>
 <option value="Peshawar">Peshawar</option>
 <option value="Hub / Balochistan">Hub / Balochistan</option>
 <option value="Other (Nationwide)">Other City (Nationwide Delivery)</option>
 </select>
 </div>
 </div>
 <div>
 <label className={labelCls} htmlFor="qm-product">
 Required Capacity / Power Type <span className="text-primary">*</span>
 </label>
 <select id="qm-product" className={inputCls} required value={form.product} onChange={update("product")} disabled={status === "sending"}>
 <option disabled value="">Select Tonnage Model</option>
 <option value="3.0 Ton Diesel Forklift">3.0 Ton Diesel Forklift (Standard Workhorse)</option>
 <option value="3.5 Ton Heavy Diesel Forklift">3.5 Ton Heavy Diesel Forklift</option>
 <option value="4.0 Ton Industrial Diesel Forklift">4.0 Ton Industrial Diesel Forklift</option>
 <option value="5.0 Ton High-Torque Diesel Forklift">5.0 Ton High-Torque Diesel Forklift</option>
 <option value="10.0 Ton Heavy Port & Terminal Handler">10.0 Ton Heavy Port &amp; Terminal Handler</option>
 <option value="3.5 Ton Clean LPG Dual-Fuel Unit">3.5 Ton Clean LPG Dual-Fuel Unit</option>
 <option value="1.0 - 5.0 Ton Li-Ion Electric Forklift">1.0 - 5.0 Ton Li-Ion Electric Forklift</option>
 <option value="Technical Load Assessment">Not Sure — Request Technical Load Assessment</option>
 </select>
 </div>
 <div>
 <label className={labelCls} htmlFor="qm-notes">
 Application Notes (Optional)
 </label>
 <textarea id="qm-notes" className={inputCls} placeholder="Describe lift height needed (e.g. 4.5m mast), indoor/outdoor surface, shift hours, or pallet dimensions..." rows="3" value={form.message} onChange={update("message")} disabled={status === "sending"}></textarea>
 </div>
 {status === "error" && (
   <div className="flex items-start gap-2 p-3 rounded-xl bg-error-container text-on-error-container text-body-md">
     <AlertTriangle size={18} className="shrink-0 mt-0.5" />
     <div>
       <p className="font-semibold">Could not send right now.</p>
       <a href={waFallback} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-1 font-bold underline">
         <MessageCircle size={15} /> Send your request on WhatsApp instead
       </a>
     </div>
   </div>
 )}
 <button className="w-full py-4 px-6 rounded-xl bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-headline-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2 disabled:opacity-60" type="submit" disabled={status === "sending"}>
 <span>{status === "sending" ? "Sending…" : "Get a Forklift Quote"}</span>
 <Send className="text-[20px]" />
 </button>
 </form>
 )}
 </div>
 <div className="lg:col-span-5 flex flex-col justify-between space-y-space-md">
 <div className="bg-gradient-to-br from-[#128C7E] to-[#075E54] text-white p-space-lg rounded-2xl shadow-md tilt-3d">
 <div className="flex items-center gap-2 mb-space-sm">
 <span className="w-3 h-3 rounded-full bg-[#25D366] animate-ping"></span>
 <span className="text-label-sm uppercase tracking-widest text-[#aff763] font-bold">Fast Direct Response</span>
 </div>
 <h3 className="text-headline-md font-bold mb-2">Prefer Instant WhatsApp?</h3>
 <p className="text-body-md text-surface-container-high/90 mb-space-md">
 Speak directly with our commercial sales and machinery dispatch engineers in Karachi. Receive quotes, photos, and spec catalogs in real-time.
 </p>
 <div className="bg-black/20 rounded-xl p-3 mb-space-md flex items-center justify-between">
 <div>
 <span className="text-label-sm uppercase text-surface-container-high block">Official WhatsApp Line</span>
 <span className="text-spec-numeral font-bold text-white text-[18px]">+92 300 EIRA-PK (3472-750)</span>
 </div>
 <MessageCircle className="text-[32px] text-[#25D366]" />
 </div>
 <a className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-headline-sm font-bold rounded-xl text-center block transition-colors shadow" href="https://wa.me/923000214188?text=Hello%20EIRA%20Pakistan%20Sales%20Team%2C%20I%20need%20a%20forklift%20quote." target="_blank">
 Open WhatsApp Sales Chat
 </a>
 </div>
 <div className="bg-surface-container-lowest p-space-lg rounded-2xl card-3d tilt-3d">
 <h4 className="text-headline-sm font-bold text-on-surface mb-3 flex items-center gap-2">
 <MapPin className="text-primary text-[20px]" />
 Karachi Operations Hub
 </h4>
 <p className="text-body-md text-secondary mb-3">
 Plots 14-16, Industrial Area Sector 7-A, Korangi / SITE Link, Karachi, Pakistan.
 </p>
 <div className="space-y-2 text-body-md text-on-surface">
 <div className="flex items-center gap-2">
 <Phone className="text-primary text-[18px]" />
 <span>Karachi Office: +92 300 0214188</span>
 </div>
 <div className="flex items-center gap-2">
 <Clock className="text-primary text-[18px]" />
 <span>Mon – Sat: 8:30 AM – 6:30 PM PKT</span>
 </div>
 <div className="flex items-center gap-2">
 <ShieldCheck className="text-primary text-[18px]" />
 <span>Nationwide Flatbed Delivery Available</span>
 </div>
 </div>
 </div>
 <div className="bg-surface-container p-space-md rounded-xl flex items-center justify-between">
 <div className="flex items-center gap-3">
 <img alt="EIRA Brand Mark" className="h-6 w-auto object-contain" src="/images/eira-logo.png" loading="lazy" decoding="async" />
 <span className="text-label-sm font-semibold uppercase tracking-wider text-secondary">EIRA Forklifts Pakistan</span>
 </div>
 <span className="text-label-sm text-primary font-bold">Shanghai • Karachi</span>
 </div>
 </div>
 </div>
 </div>
 </section>
 </>
 );
}
