import { CheckCircle2 } from 'lucide-react';
export default function Footer() {
 return (
 <footer className="w-full bg-[#121417] text-surface-container-highest pt-space-xl pb-space-lg">
 <div className="max-w-7xl mx-auto px-gutter">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl border-b border-tertiary/25">
 <div className="lg:col-span-2 pr-0 lg:pr-space-lg">
 <div className="flex items-center gap-space-xs mb-space-sm">
 <span className="text-headline-md font-extrabold text-surface-container-lowest tracking-tight">EIRA</span>
 <span className="px-space-xs py-0.5 bg-primary-container text-on-primary-container text-[10px] rounded tracking-widest uppercase font-bold">HEAVY DUTY</span>
 </div>
 <p className="text-body-md text-tertiary-fixed-dim mb-space-md max-w-md leading-relaxed">
 EIRA supplies heavy-duty, reliable, and practical diesel, electric, and LPG industrial forklifts across Pakistan. Engineering excellence sourced directly from Shanghai with localized assembly, service hubs, and parts warehousing in Karachi, Lahore, Faisalabad, and Islamabad.
 </p>
 <div className="flex items-center gap-space-xs text-label-sm text-surface-dim uppercase tracking-wider">
 <CheckCircle2 className="text-primary-fixed-dim text-[16px]" />Certified ISO 9001 / CE Industrial Machinery Export Standard
 </div>
 </div>
 <div>
 <h4 className="text-headline-sm text-surface-container-lowest mb-space-md font-bold">Forklifts by Capacity</h4>
 <ul className="space-y-space-xs text-body-md text-tertiary-fixed-dim">
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">3.0 Ton Diesel Series</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">3.5 Ton Heavy Diesel</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">4.0 Ton Logistics Spec</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">5.0 Ton Yard Heavy</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">10.0 Ton Port Terminal Unit</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">3.5 Ton Clean LPG Dual-Fuel</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">1.0 - 5.0 Ton Li-Ion Electric</a></li>
 </ul>
 </div>
 <div>
 <h4 className="text-headline-sm text-surface-container-lowest mb-space-md font-bold">Power Types &amp; Fleet</h4>
 <ul className="space-y-space-xs text-body-md text-tertiary-fixed-dim">
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">Diesel Forklifts</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">Electric Li-Ion Forklifts</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="forklifts-catalog" href="#">LPG &amp; Dual Fuel Units</a></li>
 </ul>
 </div>
 <div>
 <h4 className="text-headline-sm text-surface-container-lowest mb-space-md font-bold">Support &amp; Operations</h4>
 <ul className="space-y-space-xs text-body-md text-tertiary-fixed-dim">
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="support-services" href="#">Maintenance SLA Contracts</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="support-services" href="#">Genuine Spare Parts Vault</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="support-services" href="#">Operator Safety Training</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="support-services" href="#">Karachi Hub &amp; Port Link</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="contact" href="#">Lahore Regional Office</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="contact" href="#">Shanghai Engineering Link</a></li>
 <li className="hover:text-primary-fixed-dim transition-colors"><a data-path="contact" href="#">24/7 Field Tech Dispatch</a></li>
 </ul>
 </div>
 </div>
 <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm text-label-sm text-secondary-fixed-dim">
 <p>© 2025 EIRA Forklifts Pakistan. All rights reserved. Precision Material Handling Equipment.</p>
 <div className="flex items-center gap-space-md">
 <a className="hover:text-surface-container-lowest transition-colors" data-path="commercial-terms" href="#">Commercial Quotation Terms</a>
 <span className="text-tertiary">•</span>
 <a className="hover:text-surface-container-lowest transition-colors" data-path="commercial-terms" href="#">Privacy Policy</a>
 <span className="text-tertiary">•</span>
 <a className="hover:text-surface-container-lowest transition-colors" data-path="commercial-terms" href="#">Port Delivery Protocol</a>
 </div>
 </div>
 </div>
 </footer>
 );
}
