import { Banknote, Gauge, LayoutGrid, Network, Settings, Wrench } from 'lucide-react';
export default function WhyEiraSection() {
 return (
 <>
 {/* 6. WHY EIRA */}
 <section className="py-space-xl bg-surface-container-low">
 <div className="wrapper">
 <div className="max-w-3xl mb-space-lg">
 <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded text-label-sm font-bold uppercase tracking-wider mb-2">
 The EIRA Advantage
 </div>
 <h2 className="text-headline-lg font-bold text-on-surface">
 Industrial Performance Without the Premium Markup
 </h2>
 <p className="text-body-md text-secondary mt-1">
 Eliminating inflated dealer overheads through streamlined engineering sourcing direct from Shanghai into Karachi.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
 <div className="bg-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d">
 <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
 <Banknote className="text-[22px]" />
 </div>
 <h3 className="text-headline-sm font-bold text-on-surface mb-2">Competitive Direct Pricing</h3>
 <p className="text-body-md text-secondary leading-relaxed">
 By operating direct supply lines between production engineering and local Pakistan distribution, we strip away redundant intermediaries and brand markups.
 </p>
 </div>
 <div className="bg-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d">
 <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
 <Wrench className="text-[22px]" />
 </div>
 <h3 className="text-headline-sm font-bold text-on-surface mb-2">Reliable Industrial Engineering</h3>
 <p className="text-body-md text-secondary leading-relaxed">
 Rigid high-tensile steel masts, reinforced chassis frames, and heavy-duty hydraulic valves proven in extreme heat and dusty industrial environments.
 </p>
 </div>
 <div className="bg-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d">
 <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
 <LayoutGrid className="text-[22px]" />
 </div>
 <h3 className="text-headline-sm font-bold text-on-surface mb-2">Multiple Load Capacities</h3>
 <p className="text-body-md text-secondary leading-relaxed">
 From agile 3-ton warehouse units up to massive 10-ton K Series diesel workhorses, plus electric AC and dual-fuel LPG variations tailored to your facility.
 </p>
 </div>
 <div className="bg-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d">
 <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
 <Settings className="text-[22px]" />
 </div>
 <h3 className="text-headline-sm font-bold text-on-surface mb-2">Professional After-Sales Support</h3>
 <p className="text-body-md text-secondary leading-relaxed">
 Dedicated service mechanics in Karachi, scheduled preventative maintenance SLAs, and ready stock of critical wear-and-tear spares across Pakistan.
 </p>
 </div>
 <div className="bg-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d">
 <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
 <Network className="text-[22px]" />
 </div>
 <h3 className="text-headline-sm font-bold text-on-surface mb-2">Direct Engineering Sourcing</h3>
 <p className="text-body-md text-secondary leading-relaxed">
 Directly connected with advanced Shanghai heavy equipment manufacturing clusters, ensuring world-class CE/ISO quality controls on every single unit.
 </p>
 </div>
 <div className="bg-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d">
 <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary-container flex items-center justify-center mb-space-md">
 <Gauge className="text-[22px]" />
 </div>
 <h3 className="text-headline-sm font-bold text-on-surface mb-2">High Uptime Guarantee</h3>
 <p className="text-body-md text-secondary leading-relaxed">
 Designed for low complexity maintenance so your in-house plant mechanics can inspect filters, fluids, and hydraulics without proprietary lockout tools.
 </p>
 </div>
 </div>
 </div>
 </section>
 </>
 );
}
