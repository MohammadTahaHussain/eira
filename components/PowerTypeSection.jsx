import { ArrowRight, CheckCircle, Flame, Fuel, Zap } from 'lucide-react';
export default function PowerTypeSection() {
 return (
 <>
 {/* 4. POWER TYPE SECTION */}
 <section className="py-space-xl bg-surface">
 <div className="max-w-7xl mx-auto px-gutter">
 <div className="text-center max-w-2xl mx-auto mb-space-xl">
 <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded text-label-sm font-bold uppercase tracking-wider mb-2">
 Powertrain Architecture
 </div>
 <h2 className="text-headline-lg font-bold text-on-surface">
 Engineered for Every Pakistani Facility Environment
 </h2>
 <p className="text-body-md text-secondary mt-1">
 Select between heavy outdoor diesel torque, zero-emission indoor electric power, or clean dual-fuel LPG flexibility.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
 {/* Panel 1 */}
 <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
 <div>
 <div className="w-12 h-12 rounded-xl bg-on-surface text-primary-container flex items-center justify-center mb-space-md">
 <Fuel className="text-[26px]" />
 </div>
 <span className="text-label-sm uppercase tracking-widest text-primary font-bold">POWER TYPE 01</span>
 <h3 className="text-headline-md font-bold text-on-surface mb-2">DIESEL FORKLIFTS</h3>
 <p className="text-body-md text-secondary mb-space-md italic">"For demanding industrial and outdoor operations."
 </p>
 <ul className="space-y-2.5 text-body-md text-on-surface mb-space-lg">
 <li className="flex items-start gap-2">
 <CheckCircle className="text-primary-container text-[18px] mt-0.5" />
 <span>High-output industrial torque for non-stop shift loading.</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="text-primary-container text-[18px] mt-0.5" />
 <span>Rugged all-weather yard performance on rough gravel &amp; concrete.</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="text-primary-container text-[18px] mt-0.5" />
 <span>Straightforward local diesel maintenance accessible across Pakistan.</span>
 </li>
 </ul>
 </div>
 <a className="inline-flex items-center gap-1 text-label-md font-bold text-primary hover:text-primary-container transition-colors" href="#forklifts-catalog">
 <span>Explore Diesel Forklifts</span>
 <ArrowRight className="text-[16px]" />
 </a>
 </div>
 {/* Panel 2 */}
 <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
 <div>
 <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center mb-space-md">
 <Zap className="text-[26px]" />
 </div>
 <span className="text-label-sm uppercase tracking-widest text-primary font-bold">POWER TYPE 02</span>
 <h3 className="text-headline-md font-bold text-on-surface mb-2">ELECTRIC FORKLIFTS</h3>
 <p className="text-body-md text-secondary mb-space-md italic">"Efficient material handling for warehouses and indoor environments."
 </p>
 <ul className="space-y-2.5 text-body-md text-on-surface mb-space-lg">
 <li className="flex items-start gap-2">
 <CheckCircle className="text-primary-container text-[18px] mt-0.5" />
 <span>100% zero tailpipe emissions — strictly hygienic.</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="text-primary-container text-[18px] mt-0.5" />
 <span>Ultra-low operating noise for enclosed warehouse comfort.</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="text-primary-container text-[18px] mt-0.5" />
 <span>Ideal for food processing, pharmaceuticals &amp; textile storage.</span>
 </li>
 </ul>
 </div>
 <a className="inline-flex items-center gap-1 text-label-md font-bold text-primary hover:text-primary-container transition-colors" href="#forklifts-catalog">
 <span>Explore Electric Forklifts</span>
 <ArrowRight className="text-[16px]" />
 </a>
 </div>
 {/* Panel 3 */}
 <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
 <div>
 <div className="w-12 h-12 rounded-xl bg-surface-container-highest text-on-surface flex items-center justify-center mb-space-md">
 <Flame className="text-[26px]" />
 </div>
 <span className="text-label-sm uppercase tracking-widest text-primary font-bold">POWER TYPE 03</span>
 <h3 className="text-headline-md font-bold text-on-surface mb-2">LPG FORKLIFTS</h3>
 <p className="text-body-md text-secondary mb-space-md italic">"Flexible performance for suitable industrial applications."
 </p>
 <ul className="space-y-2.5 text-body-md text-on-surface mb-space-lg">
 <li className="flex items-start gap-2">
 <CheckCircle className="text-primary-container text-[18px] mt-0.5" />
 <span>Clean combustion exhaust compliant with indoor air ventilation.</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="text-primary-container text-[18px] mt-0.5" />
 <span>Rapid 2-minute gas cylinder swaps without charging downtime.</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle className="text-primary-container text-[18px] mt-0.5" />
 <span>Seamless dual indoor/outdoor working transitions.</span>
 </li>
 </ul>
 </div>
 <a className="inline-flex items-center gap-1 text-label-md font-bold text-primary hover:text-primary-container transition-colors" href="#forklifts-catalog">
 <span>Explore LPG Forklifts</span>
 <ArrowRight className="text-[16px]" />
 </a>
 </div>
 </div>
 </div>
 </section>
 </>
 );
}
