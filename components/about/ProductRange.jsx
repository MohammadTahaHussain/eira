import { ArrowRight } from 'lucide-react';
export default function ProductRange() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
    <div className="wrapper">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4">
    <div>
    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-2">Our Equipment</span>
    <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-tight">
                High-Performance Machinery Fleet.
              </h2>
    </div>
    <a className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded bg-on-surface text-surface-container-lowest font-headline-sm text-body-md font-semibold hover:bg-primary transition-colors" href="/specifications">
    <span>Explore All Forklifts</span>
    <ArrowRight size={16} />
    </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
    {/* Machine 1: Diesel */}
    <div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between card-3d tilt-3d">
    <div className="space-y-space-sm">
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-high">
    <img alt="EIRA Diesel Heavy Forklift 3.0 Ton high angle view showing rugged mast system and heavy counterweight in an industrial warehouse setting" className="w-full h-full object-cover" src="/images/eira-3-ton-diesel-forklift.jpg" loading="lazy" decoding="async" />
    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold uppercase">
                    Heavy Duty
                  </span>
    </div>
    <div className="pt-2">
    <h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface">Diesel Series</h3>
    <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">3.0T | 3.5T | 4.0T | 5.0T | 10.0T</p>
    </div>
    <p className="font-body-md text-body-md text-secondary">
                  Rugged diesel power plants tailored for high-ambient heat, unpaved factory ground, and continuous 16-hour heavy lifting operations.
                </p>
    </div>
    <div className="pt-space-md mt-space-md bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between">
    <span className="font-label-sm text-label-sm text-secondary uppercase">Availability</span>
    <span className="font-label-sm text-label-sm font-bold text-primary">In Stock (Karachi Hub)</span>
    </div>
    </div>
    {/* Machine 2: Electric Li-Ion */}
    <div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between card-3d tilt-3d">
    <div className="space-y-space-sm">
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-high">
    <img className="w-full h-full object-cover" alt="Modern high performance industrial electric forklift with lime green chassis and black mast operating in a clean modern pharmaceutical and FMCG distribution warehouse, bright daylight, high precision steel engineering, crisp photo" src="/images/eira-electric-forklift-lime-warehouse.jpg" loading="lazy" decoding="async" />
    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-surface-tint text-on-primary font-label-sm text-label-sm font-bold uppercase">
                    Zero Emissions
                  </span>
    </div>
    <div className="pt-2">
    <h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface">Li-Ion Electric Series</h3>
    <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">1.0T – 5.0T · 8 Models</p>
    </div>
    <p className="font-body-md text-body-md text-secondary">
                  Fast opportunity-charging lithium technology with zero tailpipe emissions, perfect for pharmaceuticals, cold storage, and food processing.
                </p>
    </div>
    <div className="pt-space-md mt-space-md bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between">
    <span className="font-label-sm text-label-sm text-secondary uppercase">Drive Control</span>
    <span className="font-label-sm text-label-sm font-bold text-on-surface">AC</span>
    </div>
    </div>
    {/* Machine 3: LPG Dual Fuel */}
    <div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between card-3d tilt-3d">
    <div className="space-y-space-sm">
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-high">
    <img className="w-full h-full object-cover" alt="Heavy duty LPG dual-fuel industrial forklift operating seamlessly between an outdoor dispatch yard and an indoor manufacturing facility, clean green and slate colorway, high clarity industrial photograph" src="/images/eira-lpg-forklift-yard.jpg" loading="lazy" decoding="async" />
    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-secondary text-surface-container-lowest font-label-sm text-label-sm font-bold uppercase">
                    Hybrid Indoor/Outdoor
                  </span>
    </div>
    <div className="pt-2">
    <h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface">LPG &amp; Dual-Fuel Series</h3>
    <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">3.5T</p>
    </div>
    <p className="font-body-md text-body-md text-secondary">
                  Low-emission operation with the torque of an internal combustion engine. Switch seamlessly between indoor warehouse aisles and container yards.
                </p>
    </div>
    <div className="pt-space-md mt-space-md bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between">
    <span className="font-label-sm text-label-sm text-secondary uppercase">Engine</span>
    <span className="font-label-sm text-label-sm font-bold text-on-surface">Nissan K25 · 37.4 kW</span>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
