import { ArrowRight, CheckCircle2, MessageCircle, Receipt, Truck, Weight } from 'lucide-react';
export default function HeroSection() {
 return (
 <>
 {/* 1. HERO SECTION */}
 <section className="relative overflow-hidden bg-surface-container-low pb-space-xl pt-space-md">
 <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#121c2a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
 <div className="wrapper relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center pt-space-sm">
 <div className="lg:col-span-6 flex flex-col items-start">
 <div className="flex items-center gap-space-sm mb-space-sm">
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-on-surface text-surface-container-lowest text-label-sm uppercase tracking-widest rounded">
 <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
 EIRA FORKLIFTS — PAKISTAN
 </span>
 <span className="text-label-sm text-on-surface-variant font-medium">HEAVY EQUIPMENT DIVISION</span>
 </div>
 <p className="text-headline-sm text-primary font-bold tracking-tight mb-space-xs">
 Reliable Forklifts for Sale in Pakistan
 </p>
 <h1 className="text-display-hero-mobile lg:text-display-hero text-on-surface font-extrabold tracking-tight leading-[1.08] mb-space-md">
 Reliable Forklifts. <br />
 <span className="text-primary-container">Practical Prices.</span> <br />
 Built for Pakistan.
 </h1>
 <p className="text-body-lg text-secondary mb-space-lg max-w-xl leading-relaxed">
 Reliable diesel, electric, and LPG forklifts for warehouses, factories, and industrial operations across Pakistan — engineered for demanding material handling without unnecessary brand premiums.
 </p>
 <div className="flex flex-wrap items-center gap-space-sm mb-space-lg w-full sm:w-auto">
 <a className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-xl bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-headline-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5" href="#forklifts-catalog">
 <span>Explore Forklifts</span>
 <ArrowRight className="text-[20px]" />
 </a>
 <a className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-xl bg-surface-container-highest hover:bg-surface-container-high text-on-surface text-headline-sm font-bold transition-colors" href="#quote-module">
 <span>Get Best Price</span>
 <Receipt className="text-[18px]" />
 </a>
 <a className="inline-flex items-center justify-center gap-space-xs px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-label-md transition-all shadow-sm" href="https://wa.me/923000214188" rel="noopener noreferrer" target="_blank">
 <MessageCircle className="text-[18px]" />
 <span>Chat on WhatsApp (+92 300 EIRA-PK)</span>
 </a>
 </div>
 <div className="w-full pt-space-md bg-surface-container/50 rounded-xl px-4 py-3 grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-on-surface">
 <div className="flex items-center gap-2">
 <Truck className="text-primary-container text-[20px]" />
 <div>
 <span className="block text-label-md uppercase tracking-wider text-secondary">Powertrains</span>
 <strong className="text-spec-numeral">Diesel • Electric • LPG</strong>
 </div>
 </div>
 <div className="flex items-center gap-2">
 <Weight className="text-primary-container text-[20px]" />
 <div>
 <span className="block text-label-md uppercase tracking-wider text-secondary">Payload Range</span>
 <strong className="text-spec-numeral">3T to 10T Heavy Duty</strong>
 </div>
 </div>
 <div className="flex items-center gap-2">
 <CheckCircle2 className="text-primary-container text-[20px]" />
 <div>
 <span className="block text-label-md uppercase tracking-wider text-secondary">Local Network</span>
 <strong className="text-spec-numeral">Karachi &amp; Nationwide</strong>
 </div>
 </div>
 </div>
 </div>
 <div className="lg:col-span-6 relative mt-space-md lg:mt-0">
 <div className="relative mx-auto max-w-[560px] lg:max-w-none">
 <div className="relative bg-surface-container rounded-xl p-3 shadow-xl overflow-hidden group tilt-3d">
 <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-on-surface/90 backdrop-blur px-3 py-1.5 rounded-lg text-surface-container-lowest">
 <img alt="EIRA Industrial Machinery" className="h-4 w-auto invert" src="/images/eira-industrial-machinery.jpg" />
 <span className="text-secondary-container text-[10px] tracking-widest uppercase">SERIES-30D SPEC</span>
 </div>
 <div className="relative rounded-lg overflow-hidden bg-surface-container-highest">
 <img alt="EIRA 3 Ton Heavy Duty Diesel Forklift Pakistan" className="w-full h-auto object-cover max-h-[540px] transform group-hover:scale-[1.01] transition-transform duration-500 ease-out" src="/images/eira-3-ton-heavy-duty-diesel-forklift-pakistan.jpg" />
 </div>
 <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
 <div className="bg-on-surface/95 text-surface-container-lowest backdrop-blur px-3 py-1.5 rounded-md shadow flex items-center gap-1.5">
 <span className="w-2 h-2 rounded-full bg-primary-container"></span>
 <span className="text-label-sm uppercase tracking-wider text-surface-variant">Rated Payload:</span>
 <span className="text-spec-numeral text-primary-fixed font-bold">3,000 KG</span>
 </div>
 <div className="bg-on-surface/95 text-surface-container-lowest backdrop-blur px-3 py-1.5 rounded-md shadow hidden sm:flex items-center gap-1.5">
 <span className="text-label-sm uppercase tracking-wider text-surface-variant">Powertrain:</span>
 <span className="text-spec-numeral font-bold">Industrial Diesel</span>
 </div>
 <div className="bg-on-surface/95 text-surface-container-lowest backdrop-blur px-3 py-1.5 rounded-md shadow flex items-center gap-1.5">
 <span className="text-label-sm uppercase tracking-wider text-surface-variant">Chassis:</span>
 <span className="text-spec-numeral font-bold">K-Series Reinforced</span>
 </div>
 </div>
 <div className="absolute top-4 right-4 z-20 bg-primary-container text-on-primary-container px-3 py-1 rounded text-label-sm font-bold uppercase tracking-wider shadow">
 In Stock Karachi
 </div>
 </div>
 <div className="mt-space-sm flex items-center justify-between px-2 text-secondary">
 <div className="flex items-center gap-2">
 <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">AUTHENTIC BRANDING:</span>
 <img alt="EIRA Forklifts" className="h-5 w-auto object-contain opacity-80" src="/images/eira-forklifts.jpg" />
 </div>
 <span className="text-label-sm text-on-surface-variant">Shanghai Engineering Link • Karachi Hub</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 </>
 );
}
