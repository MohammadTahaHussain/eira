export default function Philosophy() {
  return (
    <section className="w-full bg-surface py-space-xl lg:py-24">
    <div className="wrapper">
    <div className="max-w-3xl mb-space-xl">
    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-2">Engineering Method</span>
    <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-tight">
              Start With the Workload. Then Choose the Machine.
            </h2>
    <p className="font-body-lg text-body-lg text-secondary mt-2">
              Too many operations overpay for underutilized tonnage or destroy underspecified forklifts under brutal shifts. Our 3-step qualification ensures mechanical balance.
            </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
    {/* Step 1 */}
    <div className="p-space-lg bg-surface-container rounded-xl flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-space-sm">
    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Stage 01</span>
    <span className="material-symbols-outlined text-secondary text-[24px]">scale</span>
    </div>
    <h3 className="font-headline-md text-headline-md font-extrabold text-on-surface mb-space-xs">Capacity</h3>
    <p className="font-body-md text-body-md text-secondary mb-space-md">
                  Calculate typical vs. peak pallet weight. Ensure safety margins for dynamic axle loading when operating on gradients or uneven warehouse floors.
                </p>
    </div>
    <div className="flex flex-wrap gap-1.5 pt-space-xs">
    <span className="px-2.5 py-1 bg-surface-container-lowest rounded font-spec-numeral text-spec-numeral font-bold text-on-surface">3.0 Ton</span>
    <span className="px-2.5 py-1 bg-surface-container-lowest rounded font-spec-numeral text-spec-numeral font-bold text-on-surface">3.5 Ton</span>
    <span className="px-2.5 py-1 bg-surface-container-lowest rounded font-spec-numeral text-spec-numeral font-bold text-on-surface">5.0 Ton</span>
    <span className="px-2.5 py-1 bg-surface-container-lowest rounded font-spec-numeral text-spec-numeral font-bold text-on-surface">10.0 Ton</span>
    </div>
    </div>
    {/* Step 2 */}
    <div className="p-space-lg bg-surface-container rounded-xl flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-space-sm">
    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Stage 02</span>
    <span className="material-symbols-outlined text-secondary text-[24px]">power</span>
    </div>
    <h3 className="font-headline-md text-headline-md font-extrabold text-on-surface mb-space-xs">Power Source</h3>
    <p className="font-body-md text-body-md text-secondary mb-space-md">
                  Select power according to ventilation conditions, shift schedules, and fuel availability across your specific terminal location.
                </p>
    </div>
    <div className="space-y-1 pt-space-xs">
    <div className="p-2 bg-surface-container-lowest rounded text-on-surface font-body-md text-body-md flex items-center justify-between">
    <span className="font-semibold">Diesel</span>
    <span className="text-secondary text-[12px]">Continuous Outdoor</span>
    </div>
    <div className="p-2 bg-surface-container-lowest rounded text-on-surface font-body-md text-body-md flex items-center justify-between">
    <span className="font-semibold">Electric Li-Ion</span>
    <span className="text-secondary text-[12px]">Clean Indoor/Pharma</span>
    </div>
    <div className="p-2 bg-surface-container-lowest rounded text-on-surface font-body-md text-body-md flex items-center justify-between">
    <span className="font-semibold">LPG Dual Fuel</span>
    <span className="text-secondary text-[12px]">Indoor/Outdoor Blend</span>
    </div>
    </div>
    </div>
    {/* Step 3 */}
    <div className="p-space-lg bg-surface-container rounded-xl flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-space-sm">
    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Stage 03</span>
    <span className="material-symbols-outlined text-secondary text-[24px]">location_city</span>
    </div>
    <h3 className="font-headline-md text-headline-md font-extrabold text-on-surface mb-space-xs">Application</h3>
    <p className="font-body-md text-body-md text-secondary mb-space-md">
                  Customize attachments, container entry mast specs, solid vs. pneumatic tires, and hydraulic side-shifters for the operational task.
                </p>
    </div>
    <div className="p-space-sm bg-surface-container-lowest rounded-lg">
    <span className="font-label-sm text-label-sm text-primary font-bold block uppercase">Custom Engineering</span>
    <span className="font-body-md text-body-md text-on-surface">Container-stuffing free lift masts, paper roll clamps, push-pull attachments, &amp; bale clamps.</span>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
