import Link from "next/link";
import {
  ArrowRight, MessageCircle, ChevronRight, BadgeCheck, Fuel,
  BatteryCharging, Flame, Check, X, Minus,
} from "lucide-react";

export const metadata = {
  title: "Diesel vs Electric vs LPG Forklift — Which Is Best in Pakistan? | EIRA",
  description:
    "Honest comparison of diesel, electric (battery operated) and LPG forklifts for Pakistani conditions: purchase price, fuel and electricity costs, maintenance, and which suits your warehouse, factory or yard.",
  keywords: [
    "diesel vs electric forklift",
    "electric vs diesel forklift Pakistan",
    "LPG forklift vs diesel",
    "battery operated forklift Pakistan",
    "gas forklift Pakistan",
    "which forklift is best for warehouse",
  ],
  alternates: { canonical: "https://eiraforklifts.com.pk/guides/diesel-vs-electric-vs-lpg-forklifts" },
  openGraph: {
    title: "Diesel vs Electric vs LPG Forklift — Pakistan Buying Guide | EIRA",
    description:
      "Purchase price, running cost and maintenance compared for Pakistani warehouses, factories and yards.",
  },
};

const WA_LINK = "https://wa.me/923000214188?text=" + encodeURIComponent("Hello EIRA, help me choose between diesel, electric and LPG forklift for my operation");

const ROWS = [
  { label: "Purchase price", diesel: "Lowest", electric: "Highest", lpg: "Middle", d: "win", e: "", l: "" },
  { label: "Fuel / energy cost per hour", diesel: "Highest (diesel)", electric: "Lowest (electricity)", lpg: "Middle (LPG cylinders)", d: "", e: "win", l: "" },
  { label: "Indoor air quality", diesel: "Exhaust fumes", electric: "Zero emissions", lpg: "Low emissions", d: "", e: "win", l: "mid" },
  { label: "Outdoor / rough yard work", diesel: "Excellent", electric: "Limited", lpg: "Good", d: "win", e: "", l: "mid" },
  { label: "Noise level", diesel: "Loud", electric: "Near silent", lpg: "Moderate", d: "", e: "win", l: "mid" },
  { label: "Refuel / recharge downtime", diesel: "Minutes (diesel fill)", electric: "Hours (charging)", lpg: "Minutes (cylinder swap)", d: "win", e: "", l: "win" },
  { label: "Maintenance complexity", diesel: "Engine servicing", electric: "Minimal", lpg: "Engine servicing", d: "", e: "win", l: "" },
  { label: "Multi-shift operation", diesel: "Excellent", electric: "Needs battery strategy", lpg: "Excellent", d: "win", e: "", l: "win" },
  { label: "Cold storage suitability", diesel: "Poor (fumes, cold starts)", electric: "Excellent", lpg: "Fair", d: "", e: "win", l: "" },
  { label: "Heavy loads 5T and above", diesel: "Best choice", electric: "Up to 5T available", lpg: "Up to 3.5T typical", d: "win", e: "mid", l: "" },
];

function Cell({ text, tone }) {
  const icon = tone === "win" ? <Check size={15} className="text-primary-container shrink-0" />
    : tone === "mid" ? <Minus size={15} className="text-secondary shrink-0" />
    : <X size={15} className="text-secondary/50 shrink-0" />;
  return <span className="inline-flex items-center gap-1.5">{icon}{text}</span>;
}

const VERDICTS = [
  {
    icon: Fuel, title: "Choose diesel if",
    desc: "you work outdoors or in heavy yards: construction sites, steel yards, container terminals, marble depots, farm godowns. Diesel gives the lowest purchase price, refuels in minutes, and handles 5 to 10 ton loads that electric cannot touch yet.",
    link: ["/products/3-ton-diesel-forklift-cpcd30", "3 Ton Diesel CPCD30"],
  },
  {
    icon: BatteryCharging, title: "Choose electric if",
    desc: "you work indoors: warehouses, pharma plants, food factories, cold storages, textile stitching floors. Battery operated forklifts (also called battery operated fork lifters locally) cost more upfront but slash running costs and keep indoor air clean.",
    link: ["/products/electric-forklifts-cpd10-cpd50", "Electric 1 to 5 Ton"],
  },
  {
    icon: Flame, title: "Choose LPG if",
    desc: "your site is mixed: indoor production plus outdoor dispatch yards. Gas forklifts (LPG) burn cleaner than diesel for indoor stretches, swap cylinders in minutes, and avoid the charging downtime of electric.",
    link: ["/products/3-5-ton-lpg-forklift-cpg35", "3.5 Ton LPG"],
  },
];

const FAQS = [
  ["Which forklift is cheapest to run in Pakistan?",
    "Electric, by a clear margin: electricity per working hour costs far less than diesel, and electric forklifts need less maintenance with no engine oil, filters or fuel system. The catch is the higher purchase price, so electric wins for high-hour indoor operations and diesel wins for low-hour or outdoor use."],
  ["Can electric forklifts handle load-shedding?",
    "This is the key Pakistani consideration. If your site faces long power cuts, plan charging around them: charge overnight, keep a spare battery for multi-shift work, or choose diesel/LPG for critical operations. EIRA helps size the battery strategy during the quotation stage."],
  ["Is LPG (gas) forklift a good middle option?",
    "Yes for mixed sites. LPG burns cleaner than diesel, which matters when the machine regularly enters warehouses or food areas, and cylinder swaps take minutes compared to battery charging. Running cost sits between diesel and electric."],
  ["Which forklift is best for a warehouse in Pakistan?",
    "For indoor racking warehouses: electric, for clean air, low noise and tight turning. For warehouses with big outdoor yards attached: diesel or LPG. The deciding factors are indoor vs outdoor share, shift hours, and whether you have reliable charging power."],
  ["Diesel vs electric: which lasts longer?",
    "Both last long with proper maintenance, but they wear differently. Diesel engines need regular servicing (oil, filters, fuel system). Electric forklifts have fewer moving parts and the battery is the main wear item. With EIRA's maintenance contracts, either powertrain delivers a long working life."],
];

export default function PowertrainGuidePage() {
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
        <Link href="/forklift-prices" className="hover:text-primary">Forklift Prices</Link>
        <ChevronRight size={14} />
        <span className="text-on-surface font-semibold">Diesel vs Electric vs LPG</span>
      </nav>

      <section className="max-w-7xl mx-auto px-gutter pt-space-md pb-space-lg">
        <div className="max-w-4xl">
          <h1 className="text-display-hero-mobile lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-[1.08] mb-space-md">
            Diesel vs Electric vs LPG Forklift: <span className="text-primary-container">Which Is Right for You?</span>
          </h1>
          <p className="text-body-lg text-secondary leading-relaxed mb-space-md">
            This is the most common question Pakistani buyers ask, and most answers online ignore local
            realities: diesel prices, load-shedding, dusty yards, and multi-shift factories. Here is an
            honest comparison based on how forklifts actually work in Pakistan, so you can match the
            powertrain to your site instead of buying on price alone.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden card-3d">
          <div className="overflow-x-auto">
            <table className="w-full text-body-md min-w-[760px]">
              <thead>
                <tr className="bg-surface-container">
                  <th className="px-space-md py-3 text-left text-secondary font-semibold">Factor</th>
                  <th className="px-space-md py-3 text-left text-on-surface font-bold">Diesel</th>
                  <th className="px-space-md py-3 text-left text-on-surface font-bold">Electric</th>
                  <th className="px-space-md py-3 text-left text-on-surface font-bold">LPG</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={r.label} className={i % 2 === 0 ? "bg-surface-container-low/60" : ""}>
                    <td className="px-space-md py-3 text-secondary font-medium">{r.label}</td>
                    <td className="px-space-md py-3 font-semibold text-on-surface"><Cell text={r.diesel} tone={r.d} /></td>
                    <td className="px-space-md py-3 font-semibold text-on-surface"><Cell text={r.electric} tone={r.e} /></td>
                    <td className="px-space-md py-3 font-semibold text-on-surface"><Cell text={r.lpg} tone={r.l} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <h2 className="text-headline-md font-extrabold text-on-surface mb-space-md">The short verdict</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {VERDICTS.map((v) => (
            <div key={v.title} className="bg-surface-container-lowest rounded-2xl p-space-lg card-3d flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-primary-container/15 text-primary flex items-center justify-center mb-3">
                <v.icon size={24} />
              </div>
              <h3 className="text-headline-sm font-bold text-on-surface mb-2">{v.title}</h3>
              <p className="text-body-md text-secondary leading-relaxed mb-4">{v.desc}</p>
              <Link href={v.link[0]} className="mt-auto inline-flex items-center gap-1 text-label-md font-bold text-primary hover:underline">
                View {v.link[1]} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <div className="bg-on-surface text-surface-container-lowest rounded-2xl p-space-lg card-3d-dark">
          <h2 className="text-headline-md font-extrabold mb-2">Still unsure? Describe your site, get an answer.</h2>
          <p className="text-body-md text-surface-container-high max-w-3xl mb-space-md leading-relaxed">
            Tell us indoor vs outdoor work, load weights, shift hours and your city. An EIRA engineer will
            recommend the right powertrain and model, with a written quotation. No obligation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white font-bold text-label-md transition-colors">
              <MessageCircle size={16} /> Ask on WhatsApp
            </a>
            <Link href="/forklift-prices"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container font-bold text-label-md transition-colors">
              Back to Price Guide <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <h2 className="text-headline-md font-extrabold text-on-surface mb-space-md">Common questions</h2>
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
