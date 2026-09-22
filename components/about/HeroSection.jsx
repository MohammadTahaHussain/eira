export default function HeroSection() {
  return (
    <section className="relative w-full bg-surface-container-lowest overflow-hidden">
    <div className="max-w-7xl mx-auto px-gutter py-space-xl lg:py-24">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
    {/* Left: Text content */}
    <div className="lg:col-span-6 flex flex-col space-y-space-md z-10">
    <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 bg-surface-container-high rounded-full">
    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
    <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">About EIRA</span>
    <span className="text-secondary font-label-sm text-label-sm">• PK INDUSTRIAL</span>
    </div>
    <div className="space-y-1">
    <h1 className="font-headline-lg lg:font-display-hero text-headline-lg lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-none">
                  Global Supply.<br/>Local Understanding.
                </h1>
    <p className="font-headline-md text-headline-md text-primary font-bold tracking-tight pt-1">
                  Built Around Real Industrial Needs.
                </p>
    </div>
    <p className="font-body-lg text-body-lg text-secondary max-w-xl leading-relaxed">
                EIRA connects international forklift sourcing and manufacturing expertise with practical understanding of Pakistan's industrial environment. From warehouses and manufacturing plants to logistics and heavy material handling, EIRA focuses on providing reliable forklift solutions with practical specifications, competitive value, and dependable support.
              </p>
    {/* Technical Specs Strip */}
    <div className="grid grid-cols-3 gap-space-xs pt-2">
    <div className="p-space-sm bg-surface-container rounded-lg">
    <span className="font-label-sm text-label-sm text-secondary uppercase block">Payload Range</span>
    <span className="font-tonnage-stat text-headline-md text-on-surface font-extrabold">3–10 T</span>
    </div>
    <div className="p-space-sm bg-surface-container rounded-lg">
    <span className="font-label-sm text-label-sm text-secondary uppercase block">Standard Mast</span>
    <span className="font-tonnage-stat text-headline-md text-on-surface font-extrabold">3.0–6.0 M</span>
    </div>
    <div className="p-space-sm bg-surface-container rounded-lg">
    <span className="font-label-sm text-label-sm text-secondary uppercase block">Supply Route</span>
    <span className="font-tonnage-stat text-headline-md text-on-surface font-extrabold">Direct SHA↔KHI</span>
    </div>
    </div>
    {/* Buttons */}
    <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
    <a className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container font-headline-sm text-body-md font-bold transition-transform hover:-translate-y-0.5 shadow-sm" data-path="forklifts-catalog" href="#">
    <span>Explore Our Forklifts</span>
    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
    </a>
    <a className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-sm text-body-md font-semibold transition-colors" data-path="contact" href="#">
    <span className="material-symbols-outlined text-[18px]">engineering</span>
    <span>Talk to EIRA</span>
    </a>
    </div>
    </div>
    {/* Right: Real Machine Photographic Stage */}
    <div className="lg:col-span-6 relative flex justify-center items-center">
    <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] bg-surface-container-high rounded-xl overflow-hidden shadow-md tilt-3d">
    <img alt="EIRA 3.0 Ton Diesel Forklift side profile showing reinforced heavy duty steel chassis, all-terrain industrial tyres, and safety overhead cabin" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh8nv4USQW_KbDJ1bHe7aJrCBSjbyfkYQXMsMGpU9D5lU_QSheLqhu5dxYQcx_D_umPnD5rpguDBdAwy1c2M9AL7EJE6g1hL44Em_GwYfof6h-I239UOKnhOcjNf48wjJUnIRRTrvG73ThHmyMllOYutlMTTDBF9TnsG_SA7JC3eurcEiCciuXROKW-1C93TE45GB2XR5zY0AUKUx906P3qmv2mlVOfaf2pnP_LKnrfQLIdKgQxkm7LPB8KzIwhhptGkU"/>
    {/* Technical Overlay Badges */}
    <div className="absolute top-4 left-4 flex flex-col gap-2">
    <span className="px-3 py-1 rounded bg-on-surface/90 text-surface-container-lowest font-label-sm text-label-sm tracking-wider uppercase backdrop-blur-sm">
                    SPEC: EIRA 30-SERIES DIESEL
                  </span>
    <span className="px-3 py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold tracking-wider uppercase shadow-sm">
                    REINFORCED CHASSIS SPEC
                  </span>
    </div>
    <div className="absolute bottom-4 right-4 max-w-xs bg-surface-container-lowest/95 backdrop-blur-md p-space-sm rounded-lg shadow-md hidden sm:block">
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
    <div>
    <div className="font-label-sm text-label-sm uppercase font-bold text-on-surface">Factory Direct Inspection</div>
    <div className="font-body-md text-[11px] text-secondary">Pre-shipment Load Tested in Shanghai Facility</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
