"use client";

import { Download, FileText, MessageCircle, Settings } from 'lucide-react';
export default function SpotlightSection() {
 return (
 <>
 {/* 5. 3 TON FEATURE SPOTLIGHT */}
 <section className="py-space-xl bg-on-surface text-surface-container-lowest relative overflow-hidden" id="spotlight-section">
 <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#aff763 1px, transparent 1px), linear-gradient(90deg, #aff763 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
 <div className="max-w-7xl mx-auto px-gutter relative z-10">
 <div className="text-center max-w-3xl mx-auto mb-space-lg">
 <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container text-on-primary-container text-label-sm font-bold uppercase tracking-widest rounded mb-3">
 Engineering Showcase
 </div>
 <h2 className="text-display-hero-mobile lg:text-[40px] font-extrabold tracking-tight text-white mb-2">
 3 Ton EIRA Forklift
 </h2>
 <p className="text-body-lg text-surface-dim">
 A practical capacity for everyday industrial material handling. Precision engineered chassis with rugged localized components.
 </p>
 </div>
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
 <div className="lg:col-span-3 space-y-space-sm order-2 lg:order-1">
 <div className="bg-inverse-surface p-space-md rounded-xl">
 <span className="text-label-sm uppercase tracking-wider text-primary-fixed block">Metric 01</span>
 <span className="text-body-md text-surface-dim">Rated Load</span>
 <strong className="text-[22px] text-white block mt-0.5">3,000 kg (3.0 Ton)</strong>
 </div>
 <div className="bg-inverse-surface p-space-md rounded-xl">
 <span className="text-label-sm uppercase tracking-wider text-primary-fixed block">Metric 02</span>
 <span className="text-body-md text-surface-dim">Power Architecture</span>
 <strong className="text-[22px] text-white block mt-0.5">High-Torque Diesel</strong>
 </div>
 <div className="bg-inverse-surface p-space-md rounded-xl">
 <span className="text-label-sm uppercase tracking-wider text-primary-fixed block">Metric 03</span>
 <span className="text-body-md text-surface-dim">Standard Lift Height</span>
 <strong className="text-[22px] text-white block mt-0.5">3,000 – 4,500 mm</strong>
 </div>
 </div>
 <div className="lg:col-span-6 relative order-1 lg:order-2 flex flex-col items-center">
 <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-inverse-surface/40 p-2 tilt-3d">
 <img alt="EIRA 3 Ton Detailed Industrial Mast and Cabin View" className="w-full h-auto object-cover rounded-xl" src="/images/eira-3-ton-detailed-industrial-mast-and-cabin-view.jpg" />
 <div className="absolute top-8 left-8 bg-on-surface/90 backdrop-blur px-3 py-1.5 rounded-lg flex items-center gap-2">
 <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
 <span className="text-label-sm font-semibold text-white uppercase tracking-wider">Reinforced Triplex Mast</span>
 </div>
 <div className="absolute bottom-6 right-6 bg-on-surface/90 backdrop-blur px-3 py-1.5 rounded-lg flex items-center gap-2">
 <Settings className="text-primary-container text-[16px]" />
 <span className="text-label-sm font-semibold text-white uppercase tracking-wider">Heavy Deep-Lug Tyres</span>
 </div>
 </div>
 <div className="mt-space-md flex items-center gap-3">
 <img alt="EIRA" className="h-6 w-auto invert opacity-75" src="/images/eira.jpg" />
 <span className="text-label-sm text-surface-dim uppercase tracking-widest">SERIES 30 INDUSTRIAL CHASSIS</span>
 </div>
 </div>
 <div className="lg:col-span-3 space-y-space-sm order-3">
 <div className="bg-inverse-surface p-space-md rounded-xl">
 <span className="text-label-sm uppercase tracking-wider text-primary-fixed block">Metric 04</span>
 <span className="text-body-md text-surface-dim">Load Centre</span>
 <strong className="text-[22px] text-white block mt-0.5">500 mm Standard</strong>
 </div>
 <div className="bg-inverse-surface p-space-md rounded-xl">
 <span className="text-label-sm uppercase tracking-wider text-primary-fixed block">Metric 05</span>
 <span className="text-body-md text-surface-dim">Turning Radius</span>
 <strong className="text-[22px] text-white block mt-0.5">Compact 2,420 mm</strong>
 </div>
 <div className="bg-inverse-surface p-space-md rounded-xl">
 <span className="text-label-sm uppercase tracking-wider text-primary-fixed block">Metric 06</span>
 <span className="text-body-md text-surface-dim">Fork Dimensions</span>
 <strong className="text-[18px] text-white block mt-0.5">1,070 × 125 × 45 mm</strong>
 </div>
 </div>
 </div>
 <div className="mt-space-xl pt-space-lg flex flex-wrap items-center justify-center gap-space-md bg-inverse-surface/60 rounded-xl p-space-md">
 <a className="px-6 py-3 bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-headline-sm font-bold rounded-lg transition-colors flex items-center gap-2" href="#quote-module">
 <span>Request 3 Ton Price</span>
 <FileText className="text-[18px]" />
 </a>
 <a className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-headline-sm font-bold rounded-lg transition-colors flex items-center gap-2" href="https://wa.me/923000214188?text=Please%20send%203%20Ton%20EIRA%20Spec%20Sheet%20PDF" target="_blank">
 <MessageCircle className="text-[18px]" />
 <span>WhatsApp Consultation</span>
 </a>
 <button className="px-6 py-3 bg-surface-container-high/10 hover:bg-surface-container-high/20 text-white text-headline-sm font-semibold rounded-lg transition-colors flex items-center gap-2" onClick={() => alert('Downloading 3-Ton EIRA Technical Data Sheet (PDF)...')} type="button">
 <Download className="text-[18px]" />
 <span>Download PDF Spec Sheet</span>
 </button>
 </div>
 </div>
 </section>
 </>
 );
}
