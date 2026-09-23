import Link from "next/link";
import { ArrowRight, MessageCircle, ChevronRight, BadgeCheck } from "lucide-react";
import { PRODUCTS, ELECTRIC_MODELS, ELECTRIC_ROWS, getProduct, productUrl, waLink } from "../../../lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  if (!p) return { title: "Product not found | EIRA Forklifts Pakistan" };
  const url = `https://eiraforklifts.com.pk${productUrl(p.slug)}`;
  return {
    title: p.seo.title,
    description: p.seo.description,
    keywords: `${p.model} forklift, ${p.name.toLowerCase()} price Pakistan, EIRA ${p.powerType.toLowerCase()} forklift, forklift for sale Karachi, ${p.series} forklift specifications`,
    openGraph: {
      title: p.seo.title,
      description: p.seo.description,
      type: "article",
      url,
      images: [{ url: p.image, alt: p.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: p.seo.title,
      description: p.seo.description,
      images: [p.image],
    },
    alternates: { canonical: url },
  };
}

function SpecTable({ groups }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md">
      {groups.map((g) => (
        <div key={g.title} className="bg-surface-container-lowest rounded-xl overflow-hidden card-3d">
          <div className="px-space-md py-3 bg-surface-container border-b border-tertiary/20">
            <h3 className="text-headline-sm font-bold text-on-surface">{g.title}</h3>
          </div>
          <table className="w-full text-body-md">
            <tbody>
              {g.rows.map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-surface-container-low/60" : ""}>
                  <td className="px-space-md py-2.5 text-secondary w-1/2">{label}</td>
                  <td className="px-space-md py-2.5 font-semibold text-on-surface text-right">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

function ElectricTable() {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden card-3d">
      <div className="overflow-x-auto">
        <table className="w-full text-body-md min-w-[900px]">
          <thead>
            <tr className="bg-surface-container">
              <th className="px-space-md py-3 text-left text-secondary font-semibold">Specification</th>
              {ELECTRIC_MODELS.map((m) => (
                <th key={m} className="px-3 py-3 text-center text-on-surface font-bold">{m}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ELECTRIC_ROWS.map(([label, vals], i) => (
              <tr key={label} className={i % 2 === 0 ? "bg-surface-container-low/60" : ""}>
                <td className="px-space-md py-2.5 text-secondary font-medium">{label}</td>
                {vals.map((v, j) => (
                  <td key={j} className="px-3 py-2.5 text-center font-semibold text-on-surface whitespace-nowrap">{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ProductPage({ params }) {
  const p = getProduct(params.slug);
  if (!p) return <main className="pt-40 pb-24 text-center">Product not found.</main>;

  const isElectric = p.id === "electric";
  const related = PRODUCTS.filter((r) => r.slug !== p.slug).slice(0, 3);
  const quoteText = `Hello EIRA, I need a quote for the ${p.name} (Model ${p.model}).`;
  const url = `https://eiraforklifts.com.pk${productUrl(p.slug)}`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `EIRA ${p.name} (${p.model})`,
    image: p.image,
    description: p.seo.description,
    brand: { "@type": "Brand", name: "EIRA — Shanghai Zhuojing Trading Co., Ltd." },
    model: p.model,
    category: "Forklift",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "PKR",
      seller: { "@type": "Organization", name: "EIRA Forklifts Pakistan", telephone: "+92 300 0214188" },
    },
  };
  const sharedFaqs = [
    [
      `What is the price of the ${p.name} in Pakistan?`,
      `Pricing depends on mast height, tyres and attachments. EIRA provides a free written quotation for the ${p.model} on WhatsApp, usually the same day. See our forklift price guide for what drives prices in Pakistan.`,
    ],
    [
      `Do you deliver the ${p.model} outside Karachi?`,
      "Yes. Machines are dispatched from Karachi stock and delivered by road to Lahore, Faisalabad, Islamabad and other cities across Pakistan.",
    ],
  ];
  const allFaqs = [...p.faqs, ...sharedFaqs];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eiraforklifts.com.pk/" },
      { "@type": "ListItem", position: 2, name: "Specifications", item: "https://eiraforklifts.com.pk/specifications" },
      { "@type": "ListItem", position: 3, name: p.name, item: url },
    ],
  };

  return (
    <main className="pt-28 bg-surface min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="wrapper pt-space-md text-label-md text-secondary flex items-center gap-1.5 flex-wrap" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="text-[14px]" />
        <Link href="/specifications" className="hover:text-primary">Specifications</Link>
        <ChevronRight className="text-[14px]" />
        <span className="text-on-surface font-semibold">{p.name}</span>
      </nav>

      {/* Hero */}
      <section className="wrapper pt-space-md pb-space-lg grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container text-label-sm font-bold uppercase">
              Model {p.model}
            </span>
            <span className="px-2.5 py-1 rounded bg-surface-container-high text-secondary text-label-sm font-bold uppercase">
              {p.badge}
            </span>
            <span className="px-2.5 py-1 rounded bg-surface-container-high text-secondary text-label-sm font-bold uppercase">
              {p.powerType}
            </span>
          </div>
          <h1 className="text-headline-lg font-extrabold text-on-surface tracking-tight mb-4">{p.seo.h1}</h1>
          {p.seo.intro.map((para, i) => (
            <p key={i} className="text-body-lg text-secondary leading-relaxed mb-4">{para}</p>
          ))}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="/#quote-module"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container font-bold text-label-md transition-colors"
            >
              Request Price Quote <ArrowRight className="text-[16px]" />
            </a>
            <a
              href={waLink(quoteText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white font-bold text-label-md transition-colors"
            >
              <MessageCircle className="text-[16px]" /> WhatsApp +92 300 0214188
            </a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden card-3d tilt-3d">
          <img src={p.image} alt={p.imageAlt} className="w-full h-full object-cover aspect-[4/3]" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* Highlights */}
      <section className="wrapper pb-space-lg">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-sm">
          {p.highlights.map(([label, value]) => (
            <div key={label} className="bg-surface-container-lowest rounded-xl p-space-md card-3d text-center">
              <div className="text-label-sm uppercase tracking-wider text-secondary mb-1">{label}</div>
              <div className="text-headline-sm font-extrabold text-on-surface">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section className="wrapper pb-space-xl">
        <h2 className="text-headline-md font-extrabold text-on-surface mb-2">
          {p.name} — Full Technical Specifications
        </h2>
        <p className="text-body-md text-secondary mb-space-md max-w-3xl">
          Factory catalogue data for model {p.model}. Supplied in Pakistan by Shanghai Zhuojing
          Trading Co., Ltd. (EIRA) with Karachi stock, genuine parts and after-sales service.
        </p>
        {isElectric ? <ElectricTable /> : <SpecTable groups={p.groups} />}
      </section>

      {/* FAQs */}
      <section className="wrapper pb-space-xl">
        <h2 className="text-headline-md font-extrabold text-on-surface mb-space-md">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
          {allFaqs.map(([q, a], fi) => (
            <div key={q} className="bg-surface-container-lowest rounded-xl p-space-md card-3d">
              <h3 className="text-body-lg font-bold text-on-surface mb-2 flex gap-2">
                <BadgeCheck className="text-primary shrink-0 mt-0.5" size={18} /> {q}
              </h3>
              <p className="text-body-md text-secondary leading-relaxed">
                {a}
                {fi === p.faqs.length && (
                  <> <Link href="/forklift-prices" className="text-primary font-bold hover:underline">Read the price guide</Link>.</>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="wrapper pb-space-xl">
        <h2 className="text-headline-md font-extrabold text-on-surface mb-space-md">Related EIRA Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {related.map((r) => (
            <Link key={r.slug} href={productUrl(r.slug)} className="bg-surface-container-lowest rounded-xl overflow-hidden card-3d tilt-3d block">
              <div className="h-40 overflow-hidden">
                <img src={r.image} alt={r.imageAlt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
              </div>
              <div className="p-space-md">
                <div className="text-label-sm uppercase tracking-wider text-secondary mb-1">Model {r.model}</div>
                <div className="text-headline-sm font-bold text-on-surface">{r.name}</div>
                <span className="inline-flex items-center gap-1 text-label-md font-bold text-primary mt-2">
                  View details <ArrowRight className="text-[14px]" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="wrapper pb-space-xl">
        <div className="bg-on-surface text-surface-container-lowest rounded-2xl p-space-lg card-3d-dark flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div>
            <h2 className="text-headline-md font-extrabold mb-2">Get the {p.name} price in Pakistan</h2>
            <p className="text-body-md text-surface-container-high max-w-xl">
              Karachi stock availability, formal quotation and port delivery anywhere in Pakistan —
              reply within business hours on WhatsApp.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/#quote-module"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container font-bold text-label-md transition-colors"
            >
              Request a Quote <ArrowRight className="text-[16px]" />
            </a>
            <a
              href={waLink(quoteText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white font-bold text-label-md transition-colors"
            >
              <MessageCircle className="text-[16px]" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
