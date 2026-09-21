export default function PowerTypeSection() {
  return (
    <>
      {/* 4. POWER TYPE SECTION */}
          <section className="py-space-xl bg-surface">
            <div className="max-w-7xl mx-auto px-gutter">
              <div className="text-center max-w-2xl mx-auto mb-space-xl">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded font-label-sm text-label-sm font-bold uppercase tracking-wider mb-2">
                  Powertrain Architecture
                </div>
                <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                  Engineered for Every Pakistani Facility Environment
                </h2>
                <p className="font-body-md text-body-md text-secondary mt-1">
                  Select between heavy outdoor diesel torque, zero-emission indoor electric power, or clean dual-fuel LPG flexibility.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                {/* Panel 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-on-surface text-primary-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[26px]">local_gas_station</span>
                    </div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">POWER TYPE 01</span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">DIESEL FORKLIFTS</h3>
                    <p className="font-body-md text-body-md text-secondary mb-space-md italic">
                      "For demanding industrial and outdoor operations."
                    </p>
                    <ul className="space-y-2.5 font-body-md text-body-md text-on-surface mb-space-lg">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>High-output industrial torque for non-stop shift loading.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Rugged all-weather yard performance on rough gravel &amp; concrete.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Straightforward local diesel maintenance accessible across Pakistan.</span>
                      </li>
                    </ul>
                  </div>
                  <a className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-primary hover:text-primary-container transition-colors" href="#forklifts-catalog">
                    <span>Explore Diesel Forklifts</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
                {/* Panel 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[26px]">bolt</span>
                    </div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">POWER TYPE 02</span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">ELECTRIC FORKLIFTS</h3>
                    <p className="font-body-md text-body-md text-secondary mb-space-md italic">
                      "Efficient material handling for warehouses and indoor environments."
                    </p>
                    <ul className="space-y-2.5 font-body-md text-body-md text-on-surface mb-space-lg">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>100% zero tailpipe emissions — strictly hygienic.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Ultra-low operating noise for enclosed warehouse comfort.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Ideal for food processing, pharmaceuticals &amp; textile storage.</span>
                      </li>
                    </ul>
                  </div>
                  <a className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-primary hover:text-primary-container transition-colors" href="#forklifts-catalog">
                    <span>Explore Electric Forklifts</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
                {/* Panel 3 */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest text-on-surface flex items-center justify-center mb-space-md">
                      <span className="material-symbols-outlined text-[26px]">propane_tank</span>
                    </div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">POWER TYPE 03</span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">LPG FORKLIFTS</h3>
                    <p className="font-body-md text-body-md text-secondary mb-space-md italic">
                      "Flexible performance for suitable industrial applications."
                    </p>
                    <ul className="space-y-2.5 font-body-md text-body-md text-on-surface mb-space-lg">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Clean combustion exhaust compliant with indoor air ventilation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Rapid 2-minute gas cylinder swaps without charging downtime.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">check_circle</span>
                        <span>Seamless dual indoor/outdoor working transitions.</span>
                      </li>
                    </ul>
                  </div>
                  <a className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-primary hover:text-primary-container transition-colors" href="#forklifts-catalog">
                    <span>Explore LPG Forklifts</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
