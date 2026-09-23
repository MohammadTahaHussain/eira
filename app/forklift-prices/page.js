import Link from "next/link";
import {
  ArrowRight, MessageCircle, ChevronRight, BadgeCheck, Tag, Scale,
  Fuel, BatteryCharging, Flame, Truck,
} from "lucide-react";
import { PRODUCTS, productUrl } from "../../lib/products";

export const metadata = {
  title: "Forklift Price in Pakistan 2026 — New Forklift Price Guide | EIRA",
  description:
    "How much does a forklift cost in Pakistan? Price factors for 3 to 10 ton diesel, electric and LPG forklifts, new vs used comparison, and how to get the best price from EIRA.",
  keywords: [
    "forklift price in Pakistan",
    "new forklift price in Pakistan",
    "3 ton forklift price in Pakistan",
    "5 ton forklift price in Pakistan",
    "diesel forklift price in Pakistan",
    "electric forklift price in Pakistan",
    "best forklift price in Pakistan",
    "forklift for sale in Pakistan",
  ],
  alternates: { canonical: "https://eiraforklifts.com.pk/forklift-prices" },
  openGraph: {
    title: "Forklift Price in Pakistan — 2026 Buying Guide | EIRA",
    description:
      "What drives forklift prices in Pakistan, what to budget per tonnage, and how to get an accurate quote.",
  },
};

const WA_QUOTE = "https://wa.me/923000214188?text=" + encodeURIComponent("Hello EIRA, please share your best price for a forklift");

const FACTORS = [
  {
    icon: Scale,
    title: "Rated capacity",
    desc: "The single biggest price driver. A 3 ton machine costs far less than a 10 ton unit because the chassis, mast, counterweight, engine and tyres all scale up. Buy the capacity your heaviest regular load needs, not the heaviest load you have ever lifted once.",
  },
  {
    icon: Fuel,
    title: "Powertrain: diesel, LPG or electric",
    desc: "Diesel forklifts are the most affordable to buy and dominate outdoor work in Pakistan. LPG dual-fuel sits in the middle. Electric models cost more upfront but run far cheaper per hour, which matters for multi-shift warehouses.",
  },
  {
    icon: Tag,
    title: "Mast and attachments",
    desc: "A standard 3 metre duplex mast is the baseline. Triplex masts for high racking, side shifters, fork positioners and clamps (bale, paper roll) add to the price but can be essential for your application.",
  },
  {
    icon: Truck,
    title: "Import, duties and delivery",
    desc: "New forklifts in Pakistan are imported, so customs duty, port handling at Karachi and inland transport to Lahore, Faisalabad or Islamabad all sit inside the final price. Buying from Karachi stock avoids the wait and uncertainty of a fresh import order.",
  },
];

const CATEGORIES = [
  {
    icon: Fuel,
    title: "Diesel forklifts (3 to 10 ton)",
    desc: "The volume choice for Pakistani yards, factories and ports. 3 and 3.5 ton models suit warehouses and loading bays; 5 ton handles heavy yards; 10 ton is specified for container terminals and project cargo.",
    links: ["3-ton-diesel-forklift-cpcd30", "3-5-ton-diesel-forklift-cpc35", "5-ton-diesel-forklift-cpc50", "10-ton-diesel-forklift-cpcd100t"],
  },
  {
    icon: BatteryCharging,
    title: "Electric forklifts (1 to 5 ton)",
    desc: "Higher purchase price, lowest running cost. Ideal for warehouses, pharma, food and cold storage where clean air and low noise matter. Battery operated models also dodge diesel price swings.",
    links: ["electric-forklifts-cpd10-cpd50"],
  },
  {
    icon: Flame,
    title: "LPG dual-fuel forklifts (3.5 ton)",
    desc: "The middle path for sites that work both indoors and outdoors. Lower emissions than diesel, no charging downtime like electric, and quick cylinder swaps keep shifts moving.",
    links: ["3-5-ton-lpg-forklift-cpg35"],
  },
];

const FAQS = [
  ["What is the price of a new forklift in Pakistan?",
    "It depends on capacity, powertrain and configuration. As a rough market picture, new 3 to 3.5 ton diesel forklifts are typically quoted in the tens of lacs, while 10 ton container-yard machines cost several times more. The only accurate price is a written quotation for your exact specification, which EIRA provides free on WhatsApp."],
  ["What is the price of a 3 ton diesel forklift in Pakistan?",
    "The 3 ton diesel is the most common forklift sold in Pakistan and therefore the most price-competitive. Final pricing depends on mast height, tyres and attachments. Message EIRA with your application and get a same-day quote for the CPCD30."],
  ["Is it better to buy a new or used forklift in Pakistan?",
    "A used forklift looks cheaper until you add up overhauls, parts hunting and downtime. New machines come with warranty, known service history from hour zero, and genuine parts support. For single-shift light use a good used unit can work; for daily production work, new usually costs less per year of service."],
  ["Why do forklift prices vary so much between dealers in Pakistan?",
    "Because quotations hide different things: engine brand, mast type, tyre quality, warranty length, and whether after-sales service actually exists. Compare written quotations line by line, and ask every dealer the same three questions: what engine, what warranty, and where is your parts stock."],
  ["Do you offer forklifts on installment in Pakistan?",
    "EIRA sells on standard commercial terms. If you need financing, talk to us on WhatsApp and we can discuss what payment structures are workable for your order."],
  ["How long does delivery take within Pakistan?",
    "Machines in Karachi stock can be dispatched quickly after order confirmation. Deliveries to Lahore, Faisalabad, Islamabad and other cities are arranged by road transport; timelines depend on the route and machine size."],
];

export default function ForkliftPricesPage() {
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
        <span className="text-on-surface font-semibold">Forklift Prices</span>
      </nav>

      <section className="max-w-7xl mx-auto px-gutter pt-space-md pb-space-lg">
        <div className="max-w-4xl">
          <h1 className="text-display-hero-mobile lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-[1.08] mb-space-md">
            Forklift Price in Pakistan: <span className="text-primary-container">2026 Buying Guide</span>
          </h1>
          <p className="text-body-lg text-secondary leading-relaxed mb-space-md">
            Searching for the price of a forklift in Pakistan quickly shows a problem: classifieds list
            used machines with no warranty, dealers hide prices behind phone calls, and no two quotations
            seem comparable. This guide explains what actually drives new forklift prices in Pakistan,
            what to budget for each tonnage and powertrain, and how to get an accurate, comparable quote.
            EIRA supplies new diesel (3 to 10 ton), LPG dual-fuel (3.5 ton) and electric (1 to 5 ton)
            forklifts from Karachi stock with nationwide delivery.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA_QUOTE} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-label-md font-bold transition-all">
              <MessageCircle size={18} /> Get Best Price on WhatsApp
            </a>
            <Link href="/#quote-module"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-headline-sm font-bold transition-all">
              Request Written Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <h2 className="text-headline-md font-extrabold text-on-surface mb-space-md">What decides the price of a forklift in Pakistan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {FACTORS.map((f) => (
            <div key={f.title} className="bg-surface-container-lowest rounded-2xl p-space-lg card-3d">
              <div className="w-11 h-11 rounded-xl bg-primary-container/15 text-primary flex items-center justify-center mb-3">
                <f.icon size={24} />
              </div>
              <h3 className="text-headline-sm font-bold text-on-surface mb-2">{f.title}</h3>
              <p className="text-body-md text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <h2 className="text-headline-md font-extrabold text-on-surface mb-2">Price guidance by category</h2>
        <p className="text-body-md text-secondary mb-space-md max-w-3xl leading-relaxed">
          Exact prices move with configuration and import costs, so treat this as a budgeting guide.
          For a firm figure, request a written quote: it takes one WhatsApp message and costs nothing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {CATEGORIES.map((c) => (
            <div key={c.title} className="bg-surface-container-lowest rounded-2xl p-space-lg card-3d flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-primary-container/15 text-primary flex items-center justify-center mb-3">
                <c.icon size={24} />
              </div>
              <h3 className="text-headline-sm font-bold text-on-surface mb-2">{c.title}</h3>
              <p className="text-body-md text-secondary leading-relaxed mb-4">{c.desc}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {c.links.map((slug) => {
                  const prod = PRODUCTS.find((p) => p.slug === slug);
                  return (
                    <Link key={slug} href={productUrl(slug)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-label-md font-bold text-on-surface transition-colors">
                      {prod ? `${prod.tab} — Get Price` : "Get Price"} <ArrowRight size={13} className="text-primary" />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <div className="bg-on-surface text-surface-container-lowest rounded-2xl p-space-lg card-3d-dark">
          <h2 className="text-headline-md font-extrabold mb-2">New vs used: the honest maths</h2>
          <p className="text-body-md text-surface-container-high leading-relaxed max-w-4xl mb-space-md">
            Pakistan has a large used forklift market, and a used Japanese machine can look like a bargain.
            But price the full picture: engine overhauls, hydraulic reseals, tyre sets, and the weeks spent
            hunting parts for a discontinued model. A new forklift starts its hour meter at zero, carries a
            factory warranty, and its parts are on a shelf in Karachi, not on a ship. For occasional light
            use, used can make sense. For daily production, warehousing or port work, buyers in Pakistan
            consistently find that new costs less per working year.
          </p>
          <Link href="/guides/diesel-vs-electric-vs-lpg-forklifts"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container font-bold text-label-md transition-colors">
            Read: Diesel vs Electric vs LPG Guide <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <h2 className="text-headline-md font-extrabold text-on-surface mb-space-md">Forklift price FAQs</h2>
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
