import Link from "next/link";
import {
  ArrowRight, MessageCircle, ChevronRight, Wrench, Package, GraduationCap,
  Siren, ShieldCheck, ClipboardCheck, BadgeCheck, MapPin, Phone,
} from "lucide-react";

export const metadata = {
  title: "Forklift Service, Maintenance & Genuine Spare Parts in Pakistan | EIRA Support",
  description:
    "EIRA after-sales support: forklift maintenance contracts, genuine spare parts, operator training & 24/7 field repair across Pakistan. Karachi parts hub — WhatsApp +92 300 0214188.",
  keywords: [
    "forklift maintenance Pakistan",
    "forklift spare parts Karachi",
    "forklift repair service Pakistan",
    "forklift AMC contract",
    "forklift operator training Pakistan",
    "forklift breakdown service Karachi",
  ],
  alternates: { canonical: "https://eiraforklifts.com.pk/support" },
  openGraph: {
    title: "EIRA Forklift Support — Service, Parts & Training Across Pakistan",
    description:
      "Maintenance contracts, genuine spare parts, operator training and 24/7 field dispatch for your forklift fleet.",
  },
};

const WA_LINK = "https://wa.me/923000214188?text=" + encodeURIComponent("Hello EIRA, I need forklift service / spare parts support");

const SERVICES = [
  {
    icon: Wrench,
    title: "Maintenance SLA Contracts",
    desc: "Annual maintenance contracts with scheduled preventive visits, priority breakdown response and documented service history — built for fleets that cannot afford unplanned downtime in warehouses, mills and ports.",
    points: ["Scheduled preventive maintenance", "Priority breakdown response", "Service history documentation"],
  },
  {
    icon: Package,
    title: "Genuine Spare Parts Vault",
    desc: "Factory-genuine filters, seals, forks, tyres, chains and electricals stocked at our Karachi parts hub — matched to your exact K Series or CPD model so repairs use the right part the first time.",
    points: ["Karachi parts warehousing", "Model-matched genuine parts", "Fast dispatch nationwide"],
  },
  {
    icon: GraduationCap,
    title: "Operator Safety Training",
    desc: "On-site operator training covering safe load handling, daily inspection checklists, battery care and yard safety — reducing accidents, tyre wear and mast damage while extending machine life.",
    points: ["On-site certified training", "Daily inspection checklists", "Safety compliance for audits"],
  },
  {
    icon: Siren,
    title: "24/7 Field Tech Dispatch",
    desc: "Breakdown in the middle of a night shift at Port Qasim or a Faisalabad mill? Our field technicians deploy with diagnostic tools and fast-moving spares to get your forklift running with minimum downtime.",
    points: ["Round-the-clock dispatch", "On-site diagnostics & repair", "Coverage: KHI · LHR · FSD · ISB"],
  },
  {
    icon: ShieldCheck,
    title: "Warranty Support",
    desc: "Every new EIRA forklift ships with factory warranty backed locally — no chasing overseas suppliers. Claims are assessed by our own engineers and resolved from Karachi stock wherever possible.",
    points: ["Factory warranty, handled locally", "Engineer-assessed claims", "Loaner guidance for critical fleets"],
  },
  {
    icon: ClipboardCheck,
    title: "Pre-Delivery Inspection & Commissioning",
    desc: "Before handover, each machine passes a multi-point inspection — hydraulics, mast, brakes, electrics — then is commissioned at your site with operator familiarisation, so day one is productive day one.",
    points: ["Multi-point PDI checklist", "On-site commissioning", "Operator familiarisation included"],
  },
];

const STEPS = [
  { n: "01", title: "Raise a request", desc: "WhatsApp, call or use the contact form — share your model, location and the issue or service needed." },
  { n: "02", title: "Diagnosis & quote", desc: "An engineer assesses the requirement — on call for simple jobs, on-site for breakdowns — and shares a transparent quote." },
  { n: "03", title: "Genuine parts & repair", desc: "Work is done with factory-genuine parts from Karachi stock, documented with a service report." },
  { n: "04", title: "Handover & follow-up", desc: "Machine tested under load, operator briefed, and a follow-up scheduled to confirm everything holds." },
];

const FAQS = [
  ["Do you service forklifts bought from other suppliers?",
    "Yes — our technicians service most diesel, electric and LPG counterbalance forklifts, though genuine-parts availability is fastest for EIRA K Series and CPD models. Share your make and model on WhatsApp for confirmation."],
  ["How fast is breakdown response in Karachi vs other cities?",
    "Karachi breakdowns are typically attended the same day. Lahore, Faisalabad and Islamabad are covered through scheduled dispatches and SLA fleets get priority slots nationwide."],
  ["What does a maintenance contract (AMC) include?",
    "Scheduled preventive visits, consumables replacement per checklist, breakdown labour coverage, priority response times and a documented service history for every machine under contract."],
  ["Are spare parts readily available in Pakistan?",
    "Fast-moving parts for all catalogue models are stocked at our Karachi hub. Slow-moving or model-specific parts are air-freighted from Shanghai with committed lead times quoted upfront."],
  ["Do you train our in-house operators?",
    "Yes — on-site operator safety training is available as a standalone service or bundled with new machine delivery and AMC contracts."],
];

export default function SupportPage() {
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
        <span className="text-on-surface font-semibold">Support</span>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-gutter pt-space-md pb-space-lg">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded text-label-sm font-bold uppercase tracking-wider mb-3">
            <Wrench size={14} /> After-sales, done properly
          </div>
          <h1 className="text-display-hero-mobile lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-[1.08] mb-space-md">
            Forklift Service, Parts & Support <span className="text-primary-container">Across Pakistan</span>
          </h1>
          <p className="text-body-lg text-secondary leading-relaxed mb-space-md">
            A forklift is only as reliable as the support behind it. EIRA backs every machine with
            factory-trained technicians, a genuine spare parts hub in Karachi, maintenance contracts
            for fleets, operator safety training and 24/7 breakdown dispatch — in Karachi, Lahore,
            Faisalabad and Islamabad. One call, one team, zero finger-pointing.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-label-md font-bold transition-all">
              <MessageCircle size={18} /> Request Service on WhatsApp
            </a>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-headline-sm font-bold transition-all">
              Contact Support Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {SERVICES.map((s) => (
            <article key={s.title} className="bg-surface-container-lowest rounded-2xl p-space-lg card-3d flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary-container/15 text-primary flex items-center justify-center mb-4">
                <s.icon size={26} />
              </div>
              <h2 className="text-headline-md font-extrabold text-on-surface mb-2">{s.title}</h2>
              <p className="text-body-md text-secondary leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-1.5 mt-auto">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-body-md text-on-surface">
                    <BadgeCheck size={16} className="text-primary-container shrink-0" /> {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <h2 className="text-headline-md font-extrabold text-on-surface mb-space-md">How service works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {STEPS.map((st) => (
            <div key={st.n} className="bg-surface-container-lowest rounded-xl p-space-md card-3d">
              <div className="text-tonnage-stat font-extrabold text-primary-container/30 mb-2">{st.n}</div>
              <h3 className="text-headline-sm font-bold text-on-surface mb-1">{st.title}</h3>
              <p className="text-body-md text-secondary leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage + CTA */}
      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <div className="bg-on-surface text-surface-container-lowest rounded-2xl p-space-lg card-3d-dark">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary-container/20 text-primary-fixed rounded text-label-sm font-bold uppercase tracking-wider mb-3">
                <MapPin size={14} /> Karachi · Lahore · Faisalabad · Islamabad
              </div>
              <h2 className="text-headline-md font-extrabold mb-2">Machine down? Don't wait.</h2>
              <p className="text-body-md text-surface-container-high max-w-2xl leading-relaxed">
                Message us the model, your location and a photo or video of the issue — most
                breakdowns are diagnosed on the first call. For fleets, ask about annual
                maintenance contracts with priority response.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white font-bold text-label-md transition-colors">
                <MessageCircle size={16} /> WhatsApp +92 300 0214188
              </a>
              <a href="tel:+923000214188"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container font-bold text-label-md transition-colors">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <h2 className="text-headline-md font-extrabold text-on-surface mb-space-md">Support FAQs</h2>
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
