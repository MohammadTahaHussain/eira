export default function MarketHubs() {
  return (
    <section className="w-full bg-surface py-space-xl lg:py-24">
    <div className="wrapper">
    <div className="text-center max-w-3xl mx-auto mb-space-xl">
    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-2">Cross-Border Architecture</span>
    <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-tight">
              Two Markets. One Purpose.
            </h2>
    <p className="font-body-lg text-body-lg text-secondary mt-2">
              Bridging the world's most advanced manufacturing ecosystem in Shanghai directly with Pakistan's fast-growing port, manufacturing, and trade hubs.
            </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-stretch">
    {/* Left Hub: Shanghai */}
    <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg lg:p-8 rounded-xl card-3d tilt-3d flex flex-col justify-between relative overflow-hidden">
    <div className="space-y-space-md">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-primary text-[24px]">factory</span>
    <span className="font-label-md text-label-md font-bold uppercase tracking-wider text-on-surface">East Hub</span>
    </div>
    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">31°13′N, 121°28′E</span>
    </div>
    <div>
    <h3 className="font-headline-lg text-headline-lg font-extrabold text-on-surface">SHANGHAI</h3>
    <p className="font-label-md text-label-md text-primary font-bold tracking-wide uppercase mt-1">Direct Factory Sourcing &amp; Engineering Rigor</p>
    </div>
    <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  Shanghai serves as EIRA’s central manufacturing liaison. Here, industrial design choices, structural steel gauge validations, mast hydraulic tolerance checks, and battery quality audits are enforced before container vessel loading.
                </p>
    <ul className="space-y-2 pt-2">
    <li className="flex items-start gap-2 text-on-surface font-body-md text-body-md">
    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
    <span>Direct tier-one factory component supply chains</span>
    </li>
    <li className="flex items-start gap-2 text-on-surface font-body-md text-body-md">
    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
    <span>CE &amp; ISO 9001 load testing on factory floors</span>
    </li>
    <li className="flex items-start gap-2 text-on-surface font-body-md text-body-md">
    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
    <span>Optimized export freight staging for Karachi Port &amp; Port Qasim</span>
    </li>
    </ul>
    </div>
    <div className="mt-space-lg pt-space-sm bg-surface-container rounded-lg p-space-sm">
    <span className="font-label-sm text-label-sm text-secondary uppercase block font-semibold">Hub Focus</span>
    <span className="font-body-md text-body-md font-bold text-on-surface">Manufacturing Governance &amp; Quality Assurance</span>
    </div>
    </div>
    {/* Center: Route graphic connector */}
    <div className="lg:col-span-2 flex flex-col items-center justify-center p-space-md bg-surface-container rounded-xl">
    <div className="flex lg:flex-col items-center justify-between w-full h-full py-4 gap-4">
    <div className="flex flex-col items-center">
    <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
    <span className="material-symbols-outlined text-primary text-[20px]">sailing</span>
    </div>
    <span className="font-label-sm text-label-sm text-on-surface font-bold mt-1">Maritime</span>
    </div>
    {/* SVG Route Line */}
    <div className="flex-1 flex lg:flex-col items-center justify-center w-full">
    <div className="hidden lg:block w-0.5 h-32 bg-primary-container relative">
    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary animate-ping"></div>
    </div>
    <div className="lg:hidden h-0.5 w-24 bg-primary-container relative">
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary animate-ping"></div>
    </div>
    </div>
    <div className="flex flex-col items-center">
    <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
    <span className="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
    </div>
    <span className="font-label-sm text-label-sm text-on-surface font-bold mt-1">Inland Fleet</span>
    </div>
    </div>
    </div>
    {/* Right Hub: Karachi */}
    <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg lg:p-8 rounded-xl card-3d tilt-3d flex flex-col justify-between relative overflow-hidden">
    <div className="space-y-space-md">
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-primary text-[24px]">storefront</span>
    <span className="font-label-md text-label-md font-bold uppercase tracking-wider text-on-surface">West Hub</span>
    </div>
    <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">24°51′N, 67°00′E</span>
    </div>
    <div>
    <h3 className="font-headline-lg text-headline-lg font-extrabold text-on-surface">KARACHI</h3>
    <p className="font-label-md text-label-md text-primary font-bold tracking-wide uppercase mt-1">Domestic Assembly, Sales &amp; Operational SLA</p>
    </div>
    <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  Karachi operates as the national commercial command post. It houses regional stock, ready-to-dispatch 3.0T and 5.0T demo units, our centralized hydraulic spare parts vault, and the mobile field support team dispatching nationwide.
                </p>
    <ul className="space-y-2 pt-2">
    <li className="flex items-start gap-2 text-on-surface font-body-md text-body-md">
    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
    <span>Direct client site surveys and duty matching</span>
    </li>
    <li className="flex items-start gap-2 text-on-surface font-body-md text-body-md">
    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
    <span>Nationwide delivery logistics across Sindh &amp; Punjab</span>
    </li>
    <li className="flex items-start gap-2 text-on-surface font-body-md text-body-md">
    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
    <span>Genuine consumable warehousing: filters, hoses, mast rollers</span>
    </li>
    </ul>
    </div>
    <div className="mt-space-lg pt-space-sm bg-surface-container rounded-lg p-space-sm">
    <span className="font-label-sm text-label-sm text-secondary uppercase block font-semibold">Hub Focus</span>
    <span className="font-body-md text-body-md font-bold text-on-surface">Client Relationship &amp; Machine Lifecycle Support</span>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
