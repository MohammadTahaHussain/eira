import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, ChevronRight, BadgeCheck, Fuel, Zap, Flame } from "lucide-react";
import { PRODUCTS, productUrl, waLink } from "../../lib/products";

const BASE = "https://eiraforklifts.com.pk";

export const metadata = {
  title: "Forklifts for Sale in Pakistan — Diesel, Electric & LPG (3–10 Ton) | EIRA",
  description:
    "Browse all 7 EIRA forklifts for sale in Pakistan: 3–10 ton K Series diesel, 3.5 ton LPG dual-fuel and 1–5 ton electric forklifts. Specs, capacities and WhatsApp pricing: +92 300 0214188.",
  keywords: [
    "forklifts in Pakistan",
    "forklift for sale in Pakistan",
    "diesel forklift Pakistan",
    "electric forklift Pakistan",
    "LPG forklift Pakistan",
    "3 ton forklift Pakistan",
    "5 ton forklift Pakistan",
    "10 ton forklift Pakistan",
    "EIRA forklifts",
  ],
  alternates: { canonical: `${BASE}/products` },
  openGraph: {
    title: "Forklifts for Sale in Pakistan — Diesel, Electric & LPG | EIRA",
    description:
      "All 7 EIRA forklifts: 3–10 ton diesel, 3.5 ton LPG dual-fuel and 1–5 ton electric. Specs and WhatsApp pricing across Pakistan.",
    url: `${BASE}/products`,
    type: "website",
    images: [{ url: "/images/eira-3-5-ton-heavy-diesel-forklift.jpg", alt: "EIRA forklifts for sale in Pakistan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forklifts for Sale in Pakistan | EIRA",
    description: "3–10 ton diesel, LPG dual-fuel and electric forklifts with specs and WhatsApp pricing.",
    images: ["/images/eira-3-5-ton-heavy-diesel-forklift.jpg"],
  },
};

const FAQS = [
  [
    "Which forklifts does EIRA sell in Pakistan?",
    "EIRA's Pakistan lineup covers seven models: five K Series diesel forklifts (3, 3.5, 4, 5 and 10 ton), one 3.5 ton LPG dual-fuel forklift, and an electric range from 1 to 5 ton (CPD10–CPD50). Every model page lists full specifications.",
  ],
  [
    "What is the most popular forklift capacity in Pakistan?",
    "The 3 ton diesel forklift (CPCD30) is the best-selling capacity for warehouses, logistics hubs and factories, followed by the 3.5 ton diesel (CPC35) for heavier yards and the 5 ton (CPC50) for steel, timber and cement plants.",
  ],
  [
    "Should I buy a diesel, LPG or electric forklift?",
    "Diesel suits outdoor yards, construction sites and multi-shift heavy loads. LPG dual-fuel is the clean middle ground for mixed indoor/outdoor work. Electric is best for food, pharma and textile warehouses with clean-air requirements and lower running costs. Our diesel vs electric vs LPG guide compares all three in detail.",
  ],
  [
    "How do I get a forklift price in Pakistan?",
    "Tap \u201cRequest Price\u201d on any model or message us on WhatsApp at +92 300 0214188. Share your capacity, lift height and city, and our Karachi sales team replies with a formal quotation.",
  ],
  [
    "Do you deliver forklifts outside Karachi?",
    "Yes — EIRA delivers across Pakistan. Delivery, port clearance and commissioning are arranged from our Karachi operations hub; mention your city when requesting a quote.",
  ],
  [
    "Are spare parts and service available?",
    "Yes. EIRA stocks genuine spare parts and provides factory-trained technician support, maintenance contracts and operator training. See the Support page for details.",
  ],
];

const CATEGORY_COPY = {
  Diesel: {
    icon: Fuel,
    title: "Diesel Forklifts",
    blurb:
      "K Series diesel workhorses from 3 to 10 ton — Quanchai and turbo-diesel power, power-shift transmissions and reinforced masts for Pakistan's yards, ports, steel plants and construction sites.",
  },
  LPG: {
    icon: Flame,
    title: "LPG Dual-Fuel Forklifts",
    blurb:
      "The 3.5 ton CPG35 runs on LPG with dual-fuel flexibility — cleaner than diesel for indoor aisles, tougher than electric for yard work, with ~2 minute cylinder swaps.",
  },
  Electric: {
    icon: Zap,
    title: "Electric Forklifts",
    blurb:
      "Zero-emission AC electric forklifts from 1 to 5 ton (CPD10–CPD50) for pharma, food, cold chain and textile warehouses where clean air is non-negotiable.",
  },
};

function ProductCard({ p }) {
  return (
    <article className="bg-surface-container-lowest rounded-xl overflow-hidden card-3d tilt-3d flex flex-col justify-between">
      <div>
        <div className="relative bg-surface-container-high h-56 overflow-hidden">
          <Link href={productUrl(p.slug)} aria-label={`${p.name} — full specifications`}>
            <Image
              alt={p.imageAlt}
              src={p.image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </Link>
          {p.badge && (
            <div className="absolute top-3 left-3 bg-primary-container text-on-primary-container text-label-sm font-bold uppercase px-2.5 py-1 rounded">
              {p.badge}
            </div>
          )}
          <div className="absolute bottom-3 right-3 bg-on-surface/90 text-surface-container-lowest text-label-sm px-2 py-0.5 rounded">
            Model {p.model}
          </div>
        </div>
        <div className="p-space-md">
          <div className="flex items-center justify-between mb-1">
            <span className="text-label-sm uppercase tracking-wider text-secondary">{p.series}</span>
            <span className="text-label-sm text-primary font-bold">{p.powerType}</span>
          </div>
          <h3 className="text-headline-md font-bold text-on-surface mb-2">
            <Link href={productUrl(p.slug)} className="hover:text-primary-container transition-colors">
              {p.name}
            </Link>
          </h3>
          <ul className="space-y-1.5 text-body-md text-secondary mb-space-md">
            {p.highlights.slice(0, 3).map(([k, v]) => (
              <li key={k} className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                <span>{k}:</span>
                <strong className="text-spec-numeral text-on-surface">{v}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-space-md pt-0 grid grid-cols-2 gap-2">
        <a
          className="w-full py-2.5 px-3 bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-label-md font-bold text-center rounded-lg transition-colors"
          href={waLink(`Hello EIRA, I need a price quote for the ${p.name} (Model ${p.model}).`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Request Price
        </a>
        <Link
          className="w-full py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface text-label-md font-semibold text-center rounded-lg transition-colors"
          href={productUrl(p.slug)}
        >
          Full Specs
        </Link>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  const diesel = PRODUCTS.filter((p) => p.powerType === "Diesel");
  const lpg = PRODUCTS.filter((p) => p.powerType === "LPG");
  const electric = PRODUCTS.filter((p) => p.powerType === "Electric");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "EIRA Forklifts for Sale in Pakistan",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE}${productUrl(p.slug)}`,
      name: `${p.name} (${p.model})`,
      image: `${BASE}${p.image}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Forklifts", item: `${BASE}/products` },
    ],
  };

  return (
    <main className="pt-28 bg-surface min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="wrapper pt-space-md pb-space-lg">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-label-sm text-secondary mb-space-md">
          <Link href="/" className="hover:text-primary-container transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-on-surface font-semibold">Forklifts</span>
        </nav>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded text-label-sm font-bold uppercase tracking-wider mb-2">
          <BadgeCheck size={14} /> Full Lineup — 7 Models
        </div>
        <h1 className="text-display-hero-mobile lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-[1.08] mb-space-md max-w-3xl">
          Forklifts for Sale in <span className="text-primary-container">Pakistan</span>
        </h1>
        <p className="text-body-lg text-secondary leading-relaxed max-w-3xl mb-space-md">
          Every EIRA forklift available in Pakistan in one place: five{" "}
          <strong className="text-on-surface">K Series diesel forklifts (3–10 ton)</strong>, a{" "}
          <strong className="text-on-surface">3.5 ton LPG dual-fuel forklift</strong> and{" "}
          <strong className="text-on-surface">electric forklifts from 1 to 5 ton</strong>. Compare capacities,
          check full specifications and request a formal price quotation on WhatsApp —{" "}
          <a href="https://wa.me/923000214188" target="_blank" rel="noopener noreferrer" className="text-primary-container font-bold hover:underline">
            +92 300 0214188
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/923000214188?text=Hello%20EIRA%2C%20please%20send%20me%20the%20full%20forklift%20catalogue%20with%20prices."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-headline-sm font-bold transition-all"
          >
            <MessageCircle size={18} /> Get Catalogue on WhatsApp
          </a>
          <Link
            href="/forklift-prices"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface text-headline-sm font-bold transition-all"
          >
            Forklift Price Guide <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Diesel */}
      <section className="bg-surface-container-low py-space-xl">
        <div className="wrapper">
          <div className="flex items-center gap-3 mb-2">
            <span className="p-2 rounded-lg bg-surface-container text-primary"><Fuel size={22} /></span>
            <h2 className="text-headline-lg font-bold text-on-surface tracking-tight">{CATEGORY_COPY.Diesel.title} <span className="text-secondary text-body-md font-semibold">(5 models)</span></h2>
          </div>
          <p className="text-body-md text-secondary max-w-3xl mb-space-lg">{CATEGORY_COPY.Diesel.blurb}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {diesel.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* LPG + Electric */}
      <section className="py-space-xl">
        <div className="wrapper space-y-space-xl">
          {[
            { key: "LPG", items: lpg },
            { key: "Electric", items: electric },
          ].map(({ key, items }) => {
            const Cat = CATEGORY_COPY[key];
            return (
              <div key={key}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 rounded-lg bg-surface-container text-primary"><Cat.icon size={22} /></span>
                  <h2 className="text-headline-lg font-bold text-on-surface tracking-tight">{Cat.title}</h2>
                </div>
                <p className="text-body-md text-secondary max-w-3xl mb-space-lg">{Cat.blurb}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                  {items.map((p) => (
                    <ProductCard key={p.slug} p={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Buying guide */}
      <section className="bg-surface-container-low py-space-xl">
        <div className="wrapper">
          <h2 className="text-headline-lg font-bold text-on-surface tracking-tight mb-space-md">
            How to Choose the Right Forklift
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-lg">
            <div className="bg-surface-container-lowest rounded-2xl p-space-md card-3d">
              <h3 className="text-headline-sm font-bold text-on-surface mb-2">1. Match capacity to your heaviest load</h3>
              <p className="text-body-md text-secondary leading-relaxed">
                Size for the heaviest pallet you actually lift — not the average. Warehouses usually land on
                3–3.5 ton; steel, timber and cement plants need 5 ton and above; ports need the 10 ton handler.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-md card-3d">
              <h3 className="text-headline-sm font-bold text-on-surface mb-2">2. Pick diesel, LPG or electric</h3>
              <p className="text-body-md text-secondary leading-relaxed">
                Outdoor and multi-shift heavy work favours diesel; mixed indoor/outdoor favours LPG dual-fuel;
                clean-air warehouses favour electric. Read the{" "}
                <Link href="/guides/diesel-vs-electric-vs-lpg-forklifts" className="text-primary-container font-bold hover:underline">
                  diesel vs electric vs LPG comparison
                </Link>
                .
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-space-md card-3d">
              <h3 className="text-headline-sm font-bold text-on-surface mb-2">3. Budget with the price guide</h3>
              <p className="text-body-md text-secondary leading-relaxed">
                New forklift prices in Pakistan move with capacity, mast options and duties. See what drives
                cost in the{" "}
                <Link href="/forklift-prices" className="text-primary-container font-bold hover:underline">
                  forklift price guide
                </Link>{" "}
                before you request a quote.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/specifications"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-headline-sm font-bold transition-all"
            >
              Compare Full Specifications <ArrowRight size={18} />
            </Link>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface text-headline-sm font-bold transition-all"
            >
              Browse by Industry
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-space-xl">
        <div className="wrapper max-w-4xl">
          <h2 className="text-headline-lg font-bold text-on-surface tracking-tight mb-space-md">
            Forklift Buying FAQs
          </h2>
          <div className="space-y-space-sm">
            {FAQS.map(([q, a]) => (
              <details key={q} className="bg-surface-container-lowest rounded-xl p-space-md card-3d group">
                <summary className="text-headline-sm font-bold text-on-surface cursor-pointer list-none flex items-center justify-between gap-3">
                  {q}
                  <ChevronRight size={18} className="shrink-0 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-body-md text-secondary leading-relaxed mt-2">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-space-lg text-center">
            <p className="text-body-md text-secondary mb-3">Still deciding? Talk to an EIRA specialist.</p>
            <a
              href="https://wa.me/923000214188?text=Hello%20EIRA%2C%20help%20me%20choose%20the%20right%20forklift."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-headline-sm font-bold transition-all"
            >
              <MessageCircle size={18} /> WhatsApp +92 300 0214188
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
