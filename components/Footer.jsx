import { CheckCircle2 } from 'lucide-react';
export default function Footer() {
 return (
 <footer className="w-full bg-[#121417] text-surface-container-highest pt-space-xl pb-space-lg">
 <div className="wrapper">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl border-b border-tertiary/25">
 <div className="lg:col-span-2 pr-0 lg:pr-space-lg">
 <div className="flex items-center gap-space-xs mb-space-sm">
 <span className="text-headline-md font-extrabold text-surface-container-lowest tracking-tight">EIRA</span>
 <span className="px-space-xs py-0.5 bg-primary-container text-on-primary-container text-[10px] rounded tracking-widest uppercase font-bold">HEAVY DUTY</span>
 </div>
 <p className="text-body-md text-tertiary-fixed-dim mb-space-md max-w-md leading-relaxed">
 EIRA supplies heavy-duty, reliable, and practical diesel, electric, and LPG industrial forklifts across Pakistan. Engineering excellence sourced directly from Shanghai with localized assembly, service hubs, and parts warehousing in Karachi, Lahore, Faisalabad, and Islamabad.
 </p>
 <p className="text-body-md text-tertiary-fixed-dim mb-space-sm max-w-md leading-relaxed">
 <span className="text-surface-container-lowest font-bold">Shanghai Zhuojing Trading Co., Ltd. (EIRA)</span><br />
 WhatsApp Business — Ali Raj: <a className="text-primary-fixed-dim hover:text-surface-container-lowest transition-colors" href="https://wa.me/923000214188" target="_blank" rel="noopener noreferrer">+92 300 0214188</a> (Pakistan) · <span className="text-surface-container-lowest">+86 18516005027</span> (Shanghai)
 </p>
 <div className="flex items-center gap-space-xs text-label-sm text-surface-dim uppercase tracking-wider">
 <CheckCircle2 className="text-primary-fixed-dim text-[16px]" />Certified ISO 9001 / CE Industrial Machinery Export Standard
 </div>
 </div>
 <div>
 <h4 className="text-headline-sm text-surface-container-lowest mb-space-md font-bold">Forklifts by Capacity</h4>
 <ul className="space-y-space-xs text-body-md text-tertiary-fixed-dim">
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/products/3-ton-diesel-forklift-cpcd30">3.0 Ton Diesel Series</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/products/3-5-ton-diesel-forklift-cpc35">3.5 Ton Heavy Diesel</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/products/4-ton-diesel-forklift-cpc40">4.0 Ton Logistics Spec</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/products/5-ton-diesel-forklift-cpc50">5.0 Ton Yard Heavy</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/products/10-ton-diesel-forklift-cpcd100t">10.0 Ton Port Terminal Unit</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/products/3-5-ton-lpg-forklift-cpg35">3.5 Ton Clean LPG Dual-Fuel</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/products/electric-forklifts-cpd10-cpd50">1.0 - 5.0 Ton Li-Ion Electric</a></li>
 </ul>
 </div>
 <div>
 <h4 className="text-headline-sm text-surface-container-lowest mb-space-md font-bold">Power Types &amp; Fleet</h4>
 <ul className="space-y-space-xs text-body-md text-tertiary-fixed-dim">
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/#forklifts-catalog">Diesel Forklifts</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/products/electric-forklifts-cpd10-cpd50">Electric Li-Ion Forklifts</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/products/3-5-ton-lpg-forklift-cpg35">LPG &amp; Dual Fuel Units</a></li>
 </ul>
 </div>
 <div>
 <h4 className="text-headline-sm text-surface-container-lowest mb-space-md font-bold">Support &amp; Operations</h4>
 <ul className="space-y-space-xs text-body-md text-tertiary-fixed-dim">
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/support">Maintenance SLA Contracts</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/support">Genuine Spare Parts Vault</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/support">Operator Safety Training</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/support">Karachi Hub &amp; Port Link</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/#quote-module">Lahore Regional Office</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/about">Shanghai Engineering Link</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a href="/#quote-module">24/7 Field Tech Dispatch</a></li>
 </ul>
 </div>
 </div>
 <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm text-label-sm text-secondary-fixed-dim">
 <p>© 2025 EIRA Forklifts Pakistan. All rights reserved. Precision Material Handling Equipment.</p>
 <div className="flex items-center gap-space-md">
 <a className="hover:text-surface-container-lowest transition-colors" href="/about">Commercial Quotation Terms</a>
 <span className="text-tertiary">•</span>
 <a className="hover:text-surface-container-lowest transition-colors" href="/about">Privacy Policy</a>
 <span className="text-tertiary">•</span>
 <a className="hover:text-surface-container-lowest transition-colors" href="/about">Port Delivery Protocol</a>
 </div>
 </div>
 </div>
 </footer>
 );
}
