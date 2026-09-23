import Link from "next/link";
import { ArrowRight, Home, MessageCircle, SearchX, Forklift } from "lucide-react";
import { PRODUCTS, productUrl } from "../lib/products";

export const metadata = {
  title: "Page Not Found (404)",
  description: "The page you are looking for does not exist. Explore EIRA forklifts for sale in Pakistan.",
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { label: "Forklift Catalogue", href: "/#forklifts-catalog" },
  { label: "Technical Specifications", href: "/specifications" },
  { label: "About EIRA", href: "/about" },
  { label: "Request a Quote", href: "/#quote-module" },
];

export default function NotFound() {
  const popular = PRODUCTS.slice(0, 4);
  return (
    <main className="pt-28 bg-surface min-h-screen flex items-center">
      <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container text-secondary text-label-sm font-bold uppercase tracking-widest mb-space-md">
              <SearchX size={16} className="text-primary" /> Error 404
            </div>
            <h1 className="text-display-hero-mobile lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-[1.08] mb-space-md">
              This page took a <span className="text-primary-container">wrong turn.</span>
            </h1>
            <p className="text-body-lg text-secondary leading-relaxed mb-space-lg max-w-lg">
              The page you are looking for does not exist or was moved. Let&apos;s get you back
              on track — browse our forklift range or talk to an EIRA specialist.
            </p>
            <div className="flex flex-wrap gap-3 mb-space-lg">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-headline-sm font-bold transition-all"
              >
                <Home size={18} /> Back to Home
              </Link>
              <Link
                href="/#forklifts-catalog"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-highest hover:bg-surface-container-high text-on-surface text-headline-sm font-bold transition-colors"
              >
                <Forklift size={18} /> Browse Forklifts
              </Link>
              <a
                href="https://wa.me/923000214188?text=Hello%20EIRA%2C%20I%20need%20help%20finding%20a%20forklift"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] btn-3d text-white text-label-md font-bold transition-all"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {QUICK_LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-surface-container-lowest card-3d text-label-md font-semibold text-secondary hover:text-primary transition-colors"
                >
                  {l.label} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-headline-md font-extrabold text-on-surface mb-space-md">
              Popular forklifts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              {popular.map((p) => (
                <Link
                  key={p.slug}
                  href={productUrl(p.slug)}
                  className="bg-surface-container-lowest rounded-xl overflow-hidden card-3d tilt-3d block"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy" decoding="async" />
                  </div>
                  <div className="p-space-md">
                    <div className="text-label-sm uppercase tracking-wider text-secondary mb-1">
                      Model {p.model}
                    </div>
                    <div className="text-headline-sm font-bold text-on-surface">{p.name}</div>
                    <span className="inline-flex items-center gap-1 text-label-md font-bold text-primary mt-2">
                      View details <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
