import Link from "next/link";
import {
  ArrowRight, MessageCircle, ChevronRight, Warehouse, Shirt, Snowflake,
  Pill, Building2, Factory, Ship, Wheat, Package, Car, BadgeCheck, MapPin,
} from "lucide-react";
import { productUrl } from "../../lib/products";

export const metadata = {
  title: "Forklifts for Every Industry in Pakistan — Textile, Warehouse, Ports, Pharma & More | EIRA",
  description:
    "EIRA forklifts serve Pakistan's key industries: textile mills, warehouses & 3PL, food & cold chain, pharma, construction, steel, ports and agriculture. Diesel 3–10T, electric & LPG with Karachi stock.",
  keywords: [
    "forklift for textile mills Pakistan",
    "warehouse forklift Pakistan",
    "forklift for cold storage",
    "pharma forklift Pakistan",
    "construction forklift Pakistan",
    "port forklift Karachi",
    "forklift for steel industry",
    "industrial forklift applications Pakistan",
  ],
  alternates: { canonical: "https://eiraforklifts.com.pk/industries" },
  openGraph: {
    title: "Forklifts for Every Industry in Pakistan | EIRA",
    description:
      "Textile, warehousing, food, pharma, construction, steel, ports — the right EIRA forklift for every Pakistani industry.",
  },
};

const WA_LINK = "https://wa.me/923000214188?text=" + encodeURIComponent("Hello EIRA, I need a forklift recommendation for my industry");

const INDUSTRIES = [
  {
    icon: Shirt,
    title: "Textile & Garments",
    tag: "Pakistan's largest export industry",
    desc: "From spinning mills in Faisalabad to stitching units in Karachi and Lahore, textile operations move thousands of bales, fabric rolls and cartons daily. EIRA diesel forklifts handle outdoor bale yards and loading bays, while zero-emission electric models keep dyeing houses and garment floors clean and lint-safe.",
    points: ["Cotton bale & fabric roll handling", "Dyeing, stitching & finishing floors", "Export carton loading for Port Qasim"],
    models: [["3 Ton Diesel", "3-ton-diesel-forklift-cpcd30"], ["Electric 1–5T", "electric-forklifts-cpd10-cpd50"]],
  },
  {
    icon: Warehouse,
    title: "Warehousing, Logistics & 3PL",
    tag: "Karachi · Lahore · distribution hubs",
    desc: "Third-party logistics providers and distribution centres across Pakistan run on forklift uptime. EIRA K Series machines deliver fast cycle times, tight turning radii for narrow racking aisles, and multi-shift diesel endurance — with Karachi parts stock keeping your SLA commitments safe.",
    points: ["High-rack pallet putaway & retrieval", "Cross-dock and staging operations", "24/7 multi-shift fleet deployment"],
    models: [["3.5 Ton Diesel", "3-5-ton-diesel-forklift-cpc35"], ["4 Ton Diesel", "4-ton-diesel-forklift-cpc40"]],
  },
  {
    icon: Snowflake,
    title: "Food, Beverage & Cold Chain",
    tag: "Cold storages & FMCG",
    desc: "Cold storages, dairy plants and beverage distributors need forklifts that start reliably at low temperatures and never contaminate product zones. EIRA electric forklifts run clean and quiet in chillers, while LPG dual-fuel units bridge cold rooms and outdoor dispatch yards without charging downtime.",
    points: ["-25°C cold room operation", "Food-grade clean handling zones", "Beverage pallet high-cycle loading"],
    models: [["Electric 1–5T", "electric-forklifts-cpd10-cpd50"], ["3.5 Ton LPG", "3-5-ton-lpg-forklift-cpg35"]],
  },
  {
    icon: Pill,
    title: "Pharmaceuticals",
    tag: "Korangi · Lahore pharma corridor",
    desc: "Pharma manufacturing demands contamination-free material handling. EIRA AC electric forklifts produce zero exhaust and minimal noise for GMP environments — ideal for raw-material stores, production floors and finished-goods warehouses in Karachi's Korangi industrial area and Lahore.",
    points: ["GMP-compliant clean operation", "Raw material & FG warehouse handling", "Silent night-shift operation"],
    models: [["Electric 1–5T", "electric-forklifts-cpd10-cpd50"]],
  },
  {
    icon: Building2,
    title: "Construction, Cement & Marble",
    tag: "Rough yards & heavy blocks",
    desc: "Cement plants, marble processing units and construction material depots punish light machinery. EIRA's heavy-yard diesel range — up to 5 tons with dual front tyres and high ground clearance — moves cement pallets, marble slabs and precast blocks across dusty, uneven yards day after day.",
    points: ["Cement bag pallet handling", "Marble slab & block movement", "Precast concrete yard logistics"],
    models: [["5 Ton Diesel", "5-ton-diesel-forklift-cpc50"], ["4 Ton Diesel", "4-ton-diesel-forklift-cpc40"]],
  },
  {
    icon: Factory,
    title: "Steel, Metal & Engineering",
    tag: "Heavy coils, profiles & scrap",
    desc: "Steel service centres, re-rolling mills and fabrication shops need raw lifting muscle. With capacities from 3 to 10 tons, reinforced masts and high-torque diesel power, EIRA forklifts handle coils, billets, profiles and heavy machinery — indoor and out.",
    points: ["Steel coil & billet handling", "Profile and pipe yard stacking", "Heavy machinery installation support"],
    models: [["5 Ton Diesel", "5-ton-diesel-forklift-cpc50"], ["10 Ton Diesel", "10-ton-diesel-forklift-cpcd100t"]],
  },
  {
    icon: Ship,
    title: "Ports, Dry Ports & Container Terminals",
    tag: "Karachi Port · Port Qasim · dry ports",
    desc: "Container freight stations and dry ports live on turnaround time. The 10-ton EIRA CPCD100t is built for loaded container handling, heavy project cargo and bulk terminals — with turbocharged diesel power and port-grade stability for Karachi Port Trust yards and upcountry dry ports.",
    points: ["Loaded container handling", "CFS stuffing & de-stuffing", "Project cargo & break-bulk"],
    models: [["10 Ton Diesel", "10-ton-diesel-forklift-cpcd100t"], ["5 Ton Diesel", "5-ton-diesel-forklift-cpc50"]],
  },
  {
    icon: Wheat,
    title: "Agriculture, Fertilizer & Grain",
    tag: "Seasonal peaks, dusty environments",
    desc: "Fertilizer plants, grain silos and agri-processing units face seasonal peaks and corrosive, dusty air. EIRA diesel forklifts with sealed industrial components and high-torque Quanchai engines keep bagging lines, godowns and dispatch yards moving through harvest season.",
    points: ["Fertilizer bag stacking", "Grain silo & godown handling", "Agri-processing dispatch"],
    models: [["3 Ton Diesel", "3-ton-diesel-forklift-cpcd30"], ["3.5 Ton Diesel", "3-5-ton-diesel-forklift-cpc35"]],
  },
  {
    icon: Package,
    title: "Paper, Packaging & Printing",
    tag: "Reels, pallets & export cartons",
    desc: "Paper mills and packaging converters handle heavy reels and tall export pallets that punish undersized machines. EIRA 3.5–5 ton diesels with wide fork spread and stable counterweights move reels, corrugated stock and finished cartons safely — including clamp-ready configurations.",
    points: ["Paper reel handling", "Corrugated & carton warehouses", "Export pallet building"],
    models: [["4 Ton Diesel", "4-ton-diesel-forklift-cpc40"], ["3.5 Ton LPG", "3-5-ton-lpg-forklift-cpg35"]],
  },
  {
    icon: Car,
    title: "Automotive & Auto Parts",
    tag: "Just-in-time supply chains",
    desc: "Auto assemblers and parts vendors run just-in-time lines where a missed delivery stops production. EIRA forklifts keep component warehouses, line-side feeding and finished-vehicle yards on schedule — with electric options for indoor paint-shop-adjacent areas.",
    points: ["Line-side component feeding", "Parts warehouse management", "CKD & finished goods yards"],
    models: [["3 Ton Diesel", "3-ton-diesel-forklift-cpcd30"], ["Electric 1–5T", "electric-forklifts-cpd10-cpd50"]],
  },
];

const FAQS = [
  ["Which forklift is best for textile mills in Pakistan?",
    "Most textile mills use a mix: 3–3.5 ton diesel forklifts for bale yards and loading bays, plus electric models (CPD series) for dyeing and stitching floors where clean air matters. EIRA sizes the mix after a free site assessment."],
  ["Can forklifts work in cold storages in Pakistan?",
    "Yes. EIRA electric forklifts are the standard choice for cold rooms — no exhaust, reliable cold starts, and quiet operation. For sites that also load outdoors, the 3.5T LPG dual-fuel model covers both zones."],
  ["What forklift capacity do ports and dry ports need?",
    "Container handling typically needs 5–10 tons. The 10-ton CPCD100t is specified for loaded containers and project cargo at Karachi Port, Port Qasim and dry ports, while 5-ton units handle CFS stuffing work."],
  ["Do you provide industry-specific attachments?",
    "Yes — paper roll clamps, bale clamps, side shifters, fork positioners and extended forks can be configured per industry application. Mention your handling type on WhatsApp for a matched quotation."],
  ["Is service available outside Karachi?",
    "EIRA covers Karachi, Lahore, Faisalabad and Islamabad with factory-trained technicians, genuine parts warehousing and on-site maintenance contracts nationwide."],
];

export default function IndustriesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(([q, a]) => ({
      "@type": "Question", name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <main className="pt-28 bg-surface min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="max-w-7xl mx-auto px-gutter pt-space-md text-label-md text-secondary flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight size={14} />
        <span className="text-on-surface font-semibold">Industries</span>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-gutter pt-space-md pb-space-lg">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded text-label-sm font-bold uppercase tracking-wider mb-3">
            <MapPin size={14} /> Built for Pakistani industry
          </div>
          <h1 className="text-display-hero-mobile lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-[1.08] mb-space-md">
            Forklifts for Every Industry <span className="text-primary-container">in Pakistan</span>
          </h1>
          <p className="text-body-lg text-secondary leading-relaxed mb-space-md">
            A textile mill in Faisalabad, a cold storage in Lahore, a container terminal at Port Qasim —
            every industry stresses a forklift differently. EIRA matches the right machine to your
            application: diesel workhorses from 3 to 10 tons for yards and heavy loads, zero-emission
            electric forklifts for pharma, food and clean warehouses, and LPG dual-fuel units for
            mixed indoor–outdoor sites. Every model is backed by Karachi parts stock and
            factory-trained service engineers across Pakistan.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-label-md font-bold transition-all">
              <MessageCircle size={18} /> Get Industry Recommendation
            </a>
            <Link href="/#quote-module"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-headline-sm font-bold transition-all">
              Request a Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry grid */}
      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {INDUSTRIES.map((ind) => (
            <article key={ind.title} className="bg-surface-container-lowest rounded-2xl p-space-lg card-3d flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary-container/15 text-primary flex items-center justify-center shrink-0">
                  <ind.icon size={26} />
                </div>
                <div>
                  <h2 className="text-headline-md font-extrabold text-on-surface">{ind.title}</h2>
                  <p className="text-label-sm uppercase tracking-wider text-secondary">{ind.tag}</p>
                </div>
              </div>
              <p className="text-body-md text-secondary leading-relaxed mb-4">{ind.desc}</p>
              <ul className="space-y-1.5 mb-4">
                {ind.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-body-md text-on-surface">
                    <BadgeCheck size={16} className="text-primary-container shrink-0" /> {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2 border-t border-tertiary/15">
                <p className="text-label-sm uppercase tracking-wider text-secondary mb-2 mt-3">Recommended models</p>
                <div className="flex flex-wrap gap-2">
                  {ind.models.map(([label, slug]) => (
                    <Link key={slug + label} href={productUrl(slug)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-label-md font-bold text-on-surface transition-colors">
                      {label} <ArrowRight size={13} className="text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Selection strip */}
      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <div className="bg-on-surface text-surface-container-lowest rounded-2xl p-space-lg card-3d-dark">
          <h2 className="text-headline-md font-extrabold mb-2">Not sure which powertrain your industry needs?</h2>
          <p className="text-body-md text-surface-container-high max-w-3xl mb-space-md leading-relaxed">
            Rule of thumb for Pakistani operations: <strong className="text-surface-container-lowest">diesel</strong> for
            outdoor yards, ports and heavy loads · <strong className="text-surface-container-lowest">electric</strong> for
            pharma, food, cold chain and clean warehouses · <strong className="text-surface-container-lowest">LPG dual-fuel</strong> for
            sites that work both indoors and outdoors. Send us your load weights, shift hours and site
            photos — an EIRA engineer will spec the right model free of charge.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white font-bold text-label-md transition-colors">
              <MessageCircle size={16} /> WhatsApp Your Application
            </a>
            <Link href="/specifications"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container font-bold text-label-md transition-colors">
              Compare All Specifications <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <h2 className="text-headline-md font-extrabold text-on-surface mb-space-md">Industry FAQs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
          {FAQS.map(([q, a]) => (
            <div key={q} className="bg-surface-container-lowest rounded-xl p-space-md card-3d">
              <h3 className="text-body-lg font-bold text-on-surface mb-2 flex gap-2">
                <BadgeCheck size={18} className="text-primary shrink-0 mt-0.5" /> {q}
              </h3>
              <p className="text-body-md text-secondary leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
