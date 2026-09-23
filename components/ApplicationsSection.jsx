import { Factory, FlaskConical, Landmark, Shirt, UtensilsCrossed, Warehouse } from 'lucide-react';
export default function ApplicationsSection() {
 return (
 <>
 {/* 7. PAKISTANI INDUSTRIAL APPLICATIONS */}
 <section className="py-space-xl bg-surface" id="industries">
 <div className="wrapper">
 <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
 <div>
 <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded text-label-sm font-bold uppercase tracking-wider mb-2">
 Target Industries
 </div>
 <h2 className="text-headline-lg font-bold text-on-surface">
 Built for Pakistan's Working Industries
 </h2>
 <p className="text-body-md text-secondary mt-1">
 Engineered to thrive in Pakistan's demanding operational climates, ports, and manufacturing zones.
 </p>
 </div>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
 <div className="bg-surface-container-lowest rounded-xl p-space-md card-3d tilt-3d">
 <div className="flex items-center gap-3 mb-2">
 <Warehouse size={24} className="p-2 rounded-lg bg-surface-container text-primary" />
 <h3 className="text-headline-sm font-bold text-on-surface">Warehouses &amp; Logistics Hubs</h3>
 </div>
 <p className="text-body-md text-secondary mb-2">
 Heavy pallet cycling in Port Qasim, SITE Area Karachi, Sundar Industrial Estate Lahore, and M-3 Industrial City.
 </p>
 <span className="text-label-sm font-bold text-primary">Key Match: 3.0T Diesel &amp; 2.5T Electric</span>
 </div>
 <div className="bg-surface-container-lowest rounded-xl p-space-md card-3d tilt-3d">
 <div className="flex items-center gap-3 mb-2">
 <Shirt size={24} className="p-2 rounded-lg bg-surface-container text-primary" />
 <h3 className="text-headline-sm font-bold text-on-surface">Textile &amp; Garment Mills</h3>
 </div>
 <p className="text-body-md text-secondary mb-2">
 Handling yarn bales, fabric rolls, and shipping containers across Faisalabad, Multan, and Karachi textile zones.
 </p>
 <span className="text-label-sm font-bold text-primary">Key Match: 3.0T – 3.5T Diesel &amp; LPG</span>
 </div>
 <div className="bg-surface-container-lowest rounded-xl p-space-md card-3d tilt-3d">
 <div className="flex items-center gap-3 mb-2">
 <Factory size={24} className="p-2 rounded-lg bg-surface-container text-primary" />
 <h3 className="text-headline-sm font-bold text-on-surface">Manufacturing &amp; Assembly</h3>
 </div>
 <p className="text-body-md text-secondary mb-2">
 Automotive part feeding, metal fabrication yards, and heavy assembly line material distribution.
 </p>
 <span className="text-label-sm font-bold text-primary">Key Match: 3.5T – 5.0T Heavy Diesel</span>
 </div>
 <div className="bg-surface-container-lowest rounded-xl p-space-md card-3d tilt-3d">
 <div className="flex items-center gap-3 mb-2">
 <UtensilsCrossed size={24} className="p-2 rounded-lg bg-surface-container text-primary" />
 <h3 className="text-headline-sm font-bold text-on-surface">Food &amp; Beverage Distribution</h3>
 </div>
 <p className="text-body-md text-secondary mb-2">
 Zero-emission indoor handling inside FMCG cold storage, confectionery warehouses, and packaging floors.
 </p>
 <span className="text-label-sm font-bold text-primary">Key Match: 1.5T – 3.5T Li-Ion Electric</span>
 </div>
 <div className="bg-surface-container-lowest rounded-xl p-space-md card-3d tilt-3d">
 <div className="flex items-center gap-3 mb-2">
 <Landmark size={24} className="p-2 rounded-lg bg-surface-container text-primary" />
 <h3 className="text-headline-sm font-bold text-on-surface">Cement &amp; Construction Depots</h3>
 </div>
 <p className="text-body-md text-secondary mb-2">
 High-dust, outdoor concrete block handling, palletized cement bags, and structural rebar transportation.
 </p>
 <span className="text-label-sm font-bold text-primary">Key Match: 4.0T – 5.0T High-Torque Diesel</span>
 </div>
 <div className="bg-surface-container-lowest rounded-xl p-space-md card-3d tilt-3d">
 <div className="flex items-center gap-3 mb-2">
 <FlaskConical size={24} className="p-2 rounded-lg bg-surface-container text-primary" />
 <h3 className="text-headline-sm font-bold text-on-surface">Chemical &amp; Bulk Storage</h3>
 </div>
 <p className="text-body-md text-secondary mb-2">
 Handling IBC totes, fertilizer bags, and chemical drums with optional explosion-proof / spark-resistant options.
 </p>
 <span className="text-label-sm font-bold text-primary">Key Match: 3.5T LPG / Clean Electric</span>
 </div>
 </div>
 </div>
 </section>
 </>
 );
}
