import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us — WhatsApp, Phone & Email | EIRA Forklifts Pakistan",
  description:
    "Contact EIRA Forklifts Pakistan: WhatsApp Ali Raj +92 300 0214188, Shanghai +86 18516005027, rajputbrotherstradingco@gmail.com. Karachi hub, nationwide service.",
  alternates: { canonical: "https://eiraforklifts.com.pk/contact" },
  openGraph: {
    title: "Contact EIRA Forklifts Pakistan",
    description: "WhatsApp, phone & email — Karachi hub with nationwide forklift sales and service.",
  },
};

const WA_NUMBER = "923000214188";

const cards = [
  {
    icon: MessageCircle,
    title: "WhatsApp Sales — Pakistan",
    lines: ["Ali Raj", "+92 300 0214188"],
    href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello EIRA, I need forklift pricing")}`,
    cta: "Chat on WhatsApp",
    green: true,
  },
  {
    icon: Phone,
    title: "Shanghai Head Office",
    lines: ["Shanghai Zhuojing Trading Co., Ltd.", "+86 18516005027"],
    href: "tel:+8618516005027",
    cta: "Call Shanghai",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["Sales & Support", "rajputbrotherstradingco@gmail.com"],
    href: "mailto:rajputbrotherstradingco@gmail.com",
    cta: "Send Email",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Sat", "9:00 AM – 7:00 PM (PKT)"],
    href: `https://wa.me/${WA_NUMBER}`,
    cta: "Message Anytime",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-28 bg-surface min-h-screen">
      <nav className="max-w-7xl mx-auto px-gutter pt-space-md text-label-md text-secondary flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight size={14} />
        <span className="text-on-surface font-semibold">Contact</span>
      </nav>

      <section className="max-w-7xl mx-auto px-gutter pt-space-md pb-space-lg">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 text-primary rounded text-label-sm font-bold uppercase tracking-wider mb-3">
            <MapPin size={14} /> Karachi · Lahore · Faisalabad · Islamabad
          </div>
          <h1 className="text-headline-lg font-extrabold text-on-surface tracking-tight mb-3">
            Contact EIRA Forklifts Pakistan
          </h1>
          <p className="text-body-lg text-secondary leading-relaxed">
            Pricing, Karachi stock availability, spare parts or service — message us on WhatsApp
            for the fastest response, or send the form below and an EIRA specialist will call you back.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {cards.map((c) => (
            <div key={c.title} className="bg-surface-container-lowest rounded-xl p-space-md card-3d flex flex-col">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${c.green ? "bg-[#25D366]/15 text-[#128C7E]" : "bg-primary-container/15 text-primary"}`}>
                <c.icon size={22} />
              </div>
              <h2 className="text-headline-sm font-bold text-on-surface mb-1">{c.title}</h2>
              {c.lines.map((l) => (
                <p key={l} className="text-body-md text-secondary">{l}</p>
              ))}
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-label-md font-bold transition-all w-fit btn-3d ${
                  c.green ? "bg-[#25D366] hover:bg-[#20ba59] text-white" : "bg-primary-container hover:bg-primary-fixed text-on-primary-container"
                }`}
              >
                {c.cta} <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg card-3d">
            <h2 className="text-headline-md font-extrabold text-on-surface mb-2">Request a Callback</h2>
            <p className="text-body-md text-secondary mb-space-md">
              Fill this in — your enquiry lands directly in our inbox, and a specialist calls you back.
            </p>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-space-md">
            <div className="rounded-2xl overflow-hidden card-3d h-72">
              <iframe
                title="EIRA Forklifts — Karachi, Pakistan"
                src="https://www.openstreetmap.org/export/embed.html?bbox=66.95%2C24.75%2C67.25%2C25.05&layer=mapnik&marker=24.8607%2C67.0011"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <div className="bg-on-surface text-surface-container-lowest rounded-2xl p-space-lg card-3d-dark">
              <h2 className="text-headline-md font-extrabold mb-2">Karachi Hub &amp; Port Link</h2>
              <p className="text-body-md text-surface-container-high leading-relaxed mb-4">
                Parts warehousing, pre-delivery inspection and port clearance support at Karachi —
                with service coverage in Lahore, Faisalabad and Islamabad, and engineering linkage
                to Shanghai.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-label-md font-bold text-primary-fixed hover:underline">
                More about EIRA <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-gutter pb-space-xl">
        <h2 className="text-headline-md font-extrabold text-on-surface mb-2">Forklift Delivery &amp; Service Areas</h2>
        <p className="text-body-md text-secondary mb-space-md max-w-3xl leading-relaxed">
          EIRA delivers forklifts and dispatches service technicians across Pakistan from its Karachi
          hub. Key coverage cities include:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
          {[
            ["Karachi", "Stock & parts hub"],
            ["Lahore", "Delivery & service"],
            ["Faisalabad", "Textile belt coverage"],
            ["Islamabad", "Delivery & service"],
            ["Sialkot", "Delivery on order"],
            ["Multan", "Delivery on order"],
          ].map(([city, note]) => (
            <div key={city} className="bg-surface-container-lowest rounded-xl p-space-md card-3d">
              <div className="text-headline-sm font-bold text-on-surface">{city}</div>
              <div className="text-label-md text-secondary">{note}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
