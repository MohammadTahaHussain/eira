import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react';
export default function Header() {
 return (
 <header className="fixed top-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
 <div className="bg-on-surface text-surface-dim text-label-sm border-b border-tertiary/20">
 <div className="max-w-7xl mx-auto px-gutter h-8 flex items-center justify-between">
 <div className="flex items-center gap-space-sm">
 <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
 <span className="tracking-wide uppercase text-surface-container-high">Forklift Solutions for Pakistan — Sourcing &amp; Engineering direct from Karachi &amp; Shanghai</span>
 </div>
 <div className="hidden lg:flex items-center gap-space-md text-surface-variant">
 <span className="flex items-center gap-space-xs hover:text-surface-container-lowest transition-colors">
 <Phone className="text-[13px]" />Karachi: +92 21 3456 7890
 </span>
 <span className="text-tertiary">|</span>
 <a className="flex items-center gap-space-xs text-primary-fixed hover:text-surface-container-lowest transition-colors" data-path="contact" href="#">
 <MessageCircle className="text-[13px]" />WhatsApp Sales
 </a>
 <span className="text-tertiary">|</span>
 <span className="flex items-center gap-space-xs hover:text-surface-container-lowest transition-colors">
 <Mail className="text-[13px]" />support@eiraforklifts.com.pk
 </span>
 </div>
 </div>
 </div>
 <div className="h-20 bg-surface/95 backdrop-blur-md">
 <div className="max-w-7xl mx-auto px-gutter h-full flex items-center justify-between gap-space-md">
 <div className="flex items-center gap-space-lg">
 <a className="flex items-center gap-space-sm focus:outline-none" data-path="home" href="#">
 <div className="flex flex-col">
 <div className="flex items-center gap-space-xs">
 <span className="text-headline-md font-extrabold tracking-tight text-on-surface">EIRA</span>
 <span className="px-space-xs py-0.5 bg-on-surface text-primary-container text-[10px] rounded tracking-widest uppercase font-bold">PAKISTAN</span>
 </div>
 <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">Industrial Material Handling</span>
 </div>
 </a>
 <nav className="hidden xl:flex items-center gap-1" data-active-classes="text-primary font-semibold bg-surface-container-high/50">
 <a aria-current="page" className="px-3 py-2 rounded transition-colors text-primary font-semibold bg-surface-container-high/50" data-path="home" href="#">Home</a>
 <a className="px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors text-body-md flex items-center gap-1" data-path="forklifts-catalog" href="#">Forklifts</a>
 <a className="px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors text-body-md" data-path="about-eira" href="#">About EIRA</a>
 <a className="px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors text-body-md" data-path="industries" href="#">Industries</a>
 <a className="px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors text-body-md" data-path="support-services" href="#">Support</a>
 <a className="px-3 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors text-body-md" data-path="contact" href="#">Contact</a>
 </nav>
 </div>
 <div className="flex items-center gap-space-sm">
 <a className="hidden sm:inline-flex items-center gap-space-xs px-3.5 py-2.5 rounded bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-label-md transition-all shadow-sm" data-path="contact" href="#">
 <MessageCircle className="text-[18px]" /><span>WhatsApp Sales</span>
 </a>
 <a className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-label-md uppercase tracking-wider font-bold transition-all transform hover:-translate-y-0.5 shadow-sm" data-path="request-a-quote" href="#">
 <span>Request a Quote</span><ArrowRight className="text-[16px]" />
 </a>
 <div className="pl-space-xs border-l border-surface-container-highest flex items-center">
 <img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container-highest" src="/images/profile.jpg" />
 </div>
 </div>
 </div>
 </div>
 </header>
 );
}
