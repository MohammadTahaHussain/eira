"use client";

import { Clock, MapPin, MessageCircle, Phone, Send, ShieldCheck } from 'lucide-react';
export default function QuoteModule() {
 return (
 <>
 {/* 10. LEAD GENERATION / QUOTATION MODULE */}
 <section className="py-space-xl bg-surface-container-low" id="quote-module">
 <div className="max-w-7xl mx-auto px-gutter">
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
 <form className="space-y-space-md" id="eira-quote-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you. Your quotation request has been registered. An EIRA specialist will contact your WhatsApp/Phone shortly.'); }}>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
 <div>
 <label className="block text-label-md uppercase tracking-wider text-on-surface mb-1.5">
 Full Name <span className="text-primary">*</span>
 </label>
 <input className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary text-body-md" placeholder="e.g. Tariq Mahmood" required type="text" />
 </div>
 <div>
 <label className="block text-label-md uppercase tracking-wider text-on-surface mb-1.5">
 Company Name <span className="text-primary">*</span>
 </label>
 <input className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary text-body-md" placeholder="e.g. Indus Packaging Ltd." required type="text" />
 </div>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
 <div>
 <label className="block text-label-md uppercase tracking-wider text-on-surface mb-1.5">
 Phone / WhatsApp Number <span className="text-primary">*</span>
 </label>
 <input className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary text-body-md" placeholder="+92 300 1234567" required type="tel" />
 </div>
 <div>
 <label className="block text-label-md uppercase tracking-wider text-on-surface mb-1.5">
 City Location <span className="text-primary">*</span>
 </label>
 <select className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary text-body-md" required defaultValue="">
 <option disabled value="">Select Operational City</option>
 <option value="Karachi">Karachi</option>
 <option value="Lahore">Lahore</option>
 <option value="Faisalabad">Faisalabad</option>
 <option value="Islamabad">Islamabad / Rawalpindi</option>
 <option value="Multan">Multan</option>
 <option value="Gujranwala">Gujranwala / Sialkot</option>
 <option value="Peshawar">Peshawar</option>
 <option value="Hub">Hub / Balochistan</option>
 <option value="Other">Other City (Nationwide Delivery)</option>
 </select>
 </div>
 </div>
 <div>
 <label className="block text-label-md uppercase tracking-wider text-on-surface mb-1.5">
 Required Capacity / Power Type <span className="text-primary">*</span>
 </label>
 <select className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary text-body-md" required defaultValue="">
 <option disabled value="">Select Tonnage Model</option>
 <option value="3ton-diesel">3.0 Ton Diesel Forklift (Standard Workhorse)</option>
 <option value="35ton-diesel">3.5 Ton Heavy Diesel Forklift</option>
 <option value="4ton-diesel">4.0 Ton Industrial Diesel Forklift</option>
 <option value="5ton-diesel">5.0 Ton High-Torque Diesel Forklift</option>
 <option value="10ton-diesel">10.0 Ton Heavy Port &amp; Terminal Handler</option>
 <option value="35ton-lpg">3.5 Ton Clean LPG Dual-Fuel Unit</option>
 <option value="electric-range">1.0 - 5.0 Ton Li-Ion Electric Forklift</option>
 <option value="not-sure">Not Sure — Request Technical Load Assessment</option>
 </select>
 </div>
 <div>
 <label className="block text-label-md uppercase tracking-wider text-on-surface mb-1.5">
 Application Notes (Optional)
 </label>
 <textarea className="w-full px-3.5 py-2.5 rounded-lg bg-surface border border-secondary-container focus:outline-none focus:border-primary text-body-md" placeholder="Describe lift height needed (e.g. 4.5m mast), indoor/outdoor surface, shift hours, or pallet dimensions..." rows="3"></textarea>
 </div>
 <button className="w-full py-4 px-6 rounded-xl bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-headline-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2" type="submit">
 <span>Get a Forklift Quote</span>
 <Send className="text-[20px]" />
 </button>
 </form>
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
 <img alt="EIRA Brand Mark" className="h-6 w-auto object-contain" src="/images/eira-brand-mark.jpg" />
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
