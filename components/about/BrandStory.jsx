import { Clock, Warehouse, Weight, Zap } from 'lucide-react';
export default function BrandStory() {
  return (
    <section className="w-full bg-surface-container py-space-xl lg:py-24">
    <div className="wrapper">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
    {/* Left narrative */}
    <div className="lg:col-span-5 flex flex-col space-y-space-md">
    <div>
    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-2">Our Story</span>
    <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-tight">
                  Built to Make Industrial Equipment More Practical.
                </h2>
    </div>
    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Industrial equipment purchasing across South Asia has grown needlessly convoluted. Fleet procurement managers are constantly bombarded by vague alphanumeric codes, hidden markups, and inflated brand premiums that don't add a single kilogram of genuine lifting capacity.
              </p>
    <p className="font-body-md text-body-md text-secondary leading-relaxed">
                EIRA was founded on a simple mechanical principle: industrial buyers need reliable payload, robust hydraulic cylinders, straightforward diesel or battery powertrains, and transparent domestic pricing backed by local Pakistani field technicians.
              </p>
    <div className="p-space-md bg-surface-container-lowest rounded-lg card-3d tilt-3d">
    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-xs">Our Equipment Selection Matrix</h4>
    <p className="font-body-md text-body-md text-secondary mb-space-sm">We strip away speculation and build exact proposals based on four baseline operational realities:</p>
    <div className="grid grid-cols-2 gap-2">
    <div className="flex items-center gap-2 p-2 bg-surface-container rounded">
    <Weight size={18} className="text-primary" />
    <span className="font-label-md text-label-md font-semibold text-on-surface">Load Capacity</span>
    </div>
    <div className="flex items-center gap-2 p-2 bg-surface-container rounded">
    <Zap size={18} className="text-primary" />
    <span className="font-label-md text-label-md font-semibold text-on-surface">Power Type</span>
    </div>
    <div className="flex items-center gap-2 p-2 bg-surface-container rounded">
    <Warehouse size={18} className="text-primary" />
    <span className="font-label-md text-label-md font-semibold text-on-surface">Environment</span>
    </div>
    <div className="flex items-center gap-2 p-2 bg-surface-container rounded">
    <Clock size={18} className="text-primary" />
    <span className="font-label-md text-label-md font-semibold text-on-surface">Daily Cycles</span>
    </div>
    </div>
    </div>
    </div>
    {/* Right graphic tonnage layout */}
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
    <div className="bg-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d flex flex-col justify-between">
    <div>
    <div className="flex items-baseline justify-between mb-space-sm">
    <span className="font-tonnage-stat text-[52px] leading-none font-extrabold text-on-surface tracking-tighter">03<span className="text-primary text-headline-md">TON</span></span>
    <span className="px-2 py-0.5 bg-surface-container-high text-on-surface font-label-sm text-label-sm rounded uppercase font-semibold">Standard Duty</span>
    </div>
    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">High-Turnover Logistics</h3>
    <p className="font-body-md text-body-md text-secondary">Engineered for fast-paced inland dry ports, cross-docking warehouses, and textile pallet dispatch across Karachi, Lahore, and Faisalabad.</p>
    </div>
    <div className="pt-space-md mt-space-md bg-surface-container rounded-lg p-space-sm">
    <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-bold">Standard Spec</span>
    <span className="font-spec-numeral text-spec-numeral text-on-surface">Triplex 4.5m Free-Lift Mast • Side Shifter</span>
    </div>
    </div>
    <div className="bg-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d flex flex-col justify-between">
    <div>
    <div className="flex items-baseline justify-between mb-space-sm">
    <span className="font-tonnage-stat text-[52px] leading-none font-extrabold text-on-surface tracking-tighter">05<span className="text-primary text-headline-md">TON</span></span>
    <span className="px-2 py-0.5 bg-on-surface text-surface-container-lowest font-label-sm text-label-sm rounded uppercase font-semibold">Heavy Duty</span>
    </div>
    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">Primary Manufacturing Yards</h3>
    <p className="font-body-md text-body-md text-secondary">Built for high ambient heat, unpaved surfaces, steel tube handling, and heavy chemical drum transport in industrial clusters.</p>
    </div>
    <div className="pt-space-md mt-space-md bg-surface-container rounded-lg p-space-sm">
    <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase font-bold">Standard Spec</span>
    <span className="font-spec-numeral text-spec-numeral text-on-surface">Dual Front Pneumatics • Heavy Counterweight</span>
    </div>
    </div>
    {/* Wide highlight bar */}
    <div className="sm:col-span-2 bg-on-surface text-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
    <div className="space-y-1">
    <div className="flex items-center gap-2">
    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim font-bold">Brand Mark Heritage</span>
    </div>
    <h4 className="font-headline-md text-headline-md font-bold text-surface-container-lowest">Direct OEM Manufacturing Integration</h4>
    <p className="font-body-md text-body-md text-surface-variant max-w-lg">Every machine rolling off the line carries structural certification, CE stamp compliance, and tested hydraulic manifolds engineered for 45°C+ continuous duty.</p>
    </div>
    <div className="p-space-sm bg-surface-container-highest/10 rounded-lg self-stretch sm:self-center flex items-center justify-center min-w-[140px]">
    <img alt="Official EIRA Logo Emblem" className="h-10 w-auto object-contain filter invert opacity-90" src="/images/eira-logo.png" loading="lazy" decoding="async" />
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
