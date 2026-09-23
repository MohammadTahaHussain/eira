import { MoveRight } from 'lucide-react';
export default function ServicePillars() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24">
    <div className="wrapper">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-4">
    <div>
    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-2">Scope of Operations</span>
    <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface tracking-tight">
                A Complete Forklift Relationship.
              </h2>
    </div>
    <p className="font-body-md text-body-md text-secondary max-w-md">
              From initial workload estimation to multi-year maintenance agreements, EIRA ensures dependable material handling from day one.
            </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
    {/* Pillar 01 */}
    <div className="bg-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d flex flex-col justify-between">
    <div className="space-y-space-sm">
    <span className="font-spec-numeral text-headline-md font-extrabold text-primary block">01</span>
    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Product Consultation</h3>
    <p className="font-body-md text-body-md text-secondary">
                  We help plant engineers analyze exact aisle dimensions, floor slopes, maximum lift heights, and duty cycles before purchasing.
                </p>
    </div>
    <div className="pt-space-md mt-space-md flex items-center gap-2 text-primary font-label-md text-label-md uppercase font-bold">
    <span>Capacity Audits</span>
    <MoveRight size={16} />
    </div>
    </div>
    {/* Pillar 02 */}
    <div className="bg-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d flex flex-col justify-between">
    <div className="space-y-space-sm">
    <span className="font-spec-numeral text-headline-md font-extrabold text-primary block">02</span>
    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Forklift Supply</h3>
    <p className="font-body-md text-body-md text-secondary">
                  Robust diesel, Li-ion electric, and dual-fuel LPG forklifts configured precisely for industrial conditions across Pakistan.
                </p>
    </div>
    <div className="pt-space-md mt-space-md flex items-center gap-2 text-primary font-label-md text-label-md uppercase font-bold">
    <span>Ready Inventory</span>
    <MoveRight size={16} />
    </div>
    </div>
    {/* Pillar 03 */}
    <div className="bg-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d flex flex-col justify-between">
    <div className="space-y-space-sm">
    <span className="font-spec-numeral text-headline-md font-extrabold text-primary block">03</span>
    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Maintenance SLAs</h3>
    <p className="font-body-md text-body-md text-secondary">
                  Structured maintenance SLAs designed to prevent downtime. Field mechanics dispatched directly to your manufacturing premises.
                </p>
    </div>
    <div className="pt-space-md mt-space-md flex items-center gap-2 text-primary font-label-md text-label-md uppercase font-bold">
    <span>Scheduled Servicing</span>
    <MoveRight size={16} />
    </div>
    </div>
    {/* Pillar 04 */}
    <div className="bg-surface-container-lowest p-space-lg rounded-xl card-3d tilt-3d flex flex-col justify-between">
    <div className="space-y-space-sm">
    <span className="font-spec-numeral text-headline-md font-extrabold text-primary block">04</span>
    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">After-Sales Assistance</h3>
    <p className="font-body-md text-body-md text-secondary">
                  Long-term commitment with direct spare parts availability, emergency hydraulic rebuilds, and dedicated fleet operator training.
                </p>
    </div>
    <div className="pt-space-md mt-space-md flex items-center gap-2 text-primary font-label-md text-label-md uppercase font-bold">
    <span>Lifecycle Guarantee</span>
    <MoveRight size={16} />
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
