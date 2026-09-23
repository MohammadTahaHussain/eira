import { ArrowRight, MessageCircle } from 'lucide-react';
export default function ContactCta() {
  return (
    <section className="w-full bg-surface-container-high py-space-xl lg:py-24">
    <div className="wrapper">
    <div className="bg-surface-container-lowest rounded-2xl p-space-lg lg:p-12 card-3d tilt-3d">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
    <div className="lg:col-span-7 space-y-space-sm">
    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block">Next Step</span>
    <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-tight">
                  Let’s Find the Right Forklift for Your Operation.
                </h2>
    <p className="font-body-lg text-body-lg text-secondary max-w-xl leading-relaxed">
                  Connect directly with our equipment engineers in Karachi. We will review your load specifications, aisle constraints, and operational schedule to prepare a comprehensive technical proposal.
                </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
    <div className="p-space-sm bg-surface-container rounded-lg">
    <span className="font-label-sm text-label-sm text-secondary uppercase block font-semibold">Karachi Central Hub</span>
    <span className="font-body-md text-body-md font-bold text-on-surface">Industrial Area, Karachi, Pakistan</span>
    </div>
    <div className="p-space-sm bg-surface-container rounded-lg">
    <span className="font-label-sm text-label-sm text-secondary uppercase block font-semibold">WhatsApp Business — Ali Raj</span>
    <span className="font-body-md text-body-md font-bold text-on-surface">+92 300 0214188</span>
    </div>
    <div className="p-space-sm bg-surface-container rounded-lg">
    <span className="font-label-sm text-label-sm text-secondary uppercase block font-semibold">Shanghai Factory Link</span>
    <span className="font-body-md text-body-md font-bold text-on-surface">+86 18516005027</span>
    </div>
    </div>
    </div>
    <div className="lg:col-span-5 flex flex-col space-y-space-sm">
    <a className="w-full inline-flex items-center justify-center gap-space-xs px-space-lg py-4 rounded-lg bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container font-headline-sm text-body-md font-bold transition-all shadow-sm" href="/#quote-module">
    <span>Request a Formal Technical Quote</span>
    <ArrowRight size={20} />
    </a>
    <a className="w-full inline-flex items-center justify-center gap-space-xs px-space-lg py-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white font-headline-sm text-body-md font-bold transition-all shadow-sm" href="https://wa.me/923000214188" target="_blank" rel="noopener noreferrer">
    <MessageCircle size={20} />
    <span>Connect via WhatsApp Sales</span>
    </a>
    <div className="text-center pt-2">
    <span className="font-label-sm text-label-sm text-secondary">
                    Direct factory sourcing link: Shanghai Engineering Facility
                  </span>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
