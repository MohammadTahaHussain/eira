export default function Support() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
    <div className="max-w-7xl mx-auto px-gutter">
    <div className="max-w-3xl mb-space-xl">
    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-2">Lifecycle Management</span>
    <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-tight">
              The Sale Is Only the Beginning.
            </h2>
    <p className="font-body-lg text-body-lg text-secondary mt-2">
              Forklifts are long-term production assets. Our support ecosystem guarantees operational readiness and eliminates costly idle hours.
            </p>
    </div>
    {/* Linear Process Bar */}
    <div className="grid grid-cols-1 md:grid-cols-5 gap-space-xs bg-surface-container-lowest p-space-md rounded-xl card-3d tilt-3d">
    <div className="p-space-sm bg-surface-container rounded-lg flex flex-col justify-between">
    <span className="font-label-sm text-label-sm font-bold text-primary">STEP 01</span>
    <div>
    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-2">Consultation</h3>
    <p className="font-body-md text-body-md text-secondary mt-1">Site review and application assessment.</p>
    </div>
    </div>
    <div className="p-space-sm bg-surface-container rounded-lg flex flex-col justify-between">
    <span className="font-label-sm text-label-sm font-bold text-primary">STEP 02</span>
    <div>
    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-2">Selection</h3>
    <p className="font-body-md text-body-md text-secondary mt-1">Precise matching of payload and mast.</p>
    </div>
    </div>
    <div className="p-space-sm bg-surface-container rounded-lg flex flex-col justify-between">
    <span className="font-label-sm text-label-sm font-bold text-primary">STEP 03</span>
    <div>
    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-2">Direct Supply</h3>
    <p className="font-body-md text-body-md text-secondary mt-1">Tested shipping and on-site delivery.</p>
    </div>
    </div>
    <div className="p-space-sm bg-surface-container rounded-lg flex flex-col justify-between">
    <span className="font-label-sm text-label-sm font-bold text-primary">STEP 04</span>
    <div>
    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-2">Preventive SLA</h3>
    <p className="font-body-md text-body-md text-secondary mt-1">Scheduled lubrication and inspection.</p>
    </div>
    </div>
    <div className="p-space-sm bg-primary-container text-on-primary-container rounded-lg flex flex-col justify-between">
    <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">STEP 05</span>
    <div>
    <h3 className="font-headline-sm text-headline-sm font-extrabold mt-2">After-Sales</h3>
    <p className="font-body-md text-body-md font-medium mt-1">Domestic spare parts and field response.</p>
    </div>
    </div>
    </div>
    {/* Metric Highlights */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mt-space-md">
    <div className="p-space-md bg-surface-container-lowest rounded-xl card-3d tilt-3d flex items-center gap-space-md">
    <span className="material-symbols-outlined text-primary text-[32px]">schedule</span>
    <div>
    <span className="font-headline-md text-headline-md font-extrabold text-on-surface block">24–48 Hr</span>
    <span className="font-body-md text-body-md text-secondary">Major Hub Service SLA Dispatch</span>
    </div>
    </div>
    <div className="p-space-md bg-surface-container-lowest rounded-xl card-3d tilt-3d flex items-center gap-space-md">
    <span className="material-symbols-outlined text-primary text-[32px]">inventory_2</span>
    <div>
    <span className="font-headline-md text-headline-md font-extrabold text-on-surface block">98% In-Stock</span>
    <span className="font-body-md text-body-md text-secondary">Common Filter &amp; Hydraulic Seals</span>
    </div>
    </div>
    <div className="p-space-md bg-surface-container-lowest rounded-xl card-3d tilt-3d flex items-center gap-space-md">
    <span className="material-symbols-outlined text-primary text-[32px]">verified_user</span>
    <div>
    <span className="font-headline-md text-headline-md font-extrabold text-on-surface block">12 Months / 2000 Hr</span>
    <span className="font-body-md text-body-md text-secondary">Factory Machinery Warranty</span>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
