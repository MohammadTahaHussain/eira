import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | EIRA Forklifts Pakistan",
  description:
    "How EIRA Forklifts Pakistan collects, uses and protects your personal information when you request a quote or contact us.",
  alternates: { canonical: "https://eiraforklifts.com.pk/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: "Information we collect",
    p: "When you use our quote or contact forms, we collect the details you provide: your name, company name, phone/WhatsApp number, city, the forklift model you are interested in, and any notes you write. If you contact us on WhatsApp, we receive whatever information you share in that chat.",
  },
  {
    h: "How we use it",
    p: "We use your details only to respond to your enquiry — to prepare quotations, share specifications, arrange demonstrations or deliveries, and follow up on your request. We do not sell your information and we do not share it with third parties for marketing.",
  },
  {
    h: "Emails and messages",
    p: "Form submissions are emailed to our sales team over an encrypted connection. Your phone number may be used to call you or message you on WhatsApp about your enquiry.",
  },
  {
    h: "Analytics",
    p: "We may use privacy-friendly website analytics (such as Google Analytics) to understand which pages visitors find useful. This data is aggregated and does not identify you personally. You can block analytics with any standard ad-blocker or browser setting.",
  },
  {
    h: "Data retention",
    p: "We keep enquiry records only as long as needed to serve you and meet legal obligations. You can ask us to delete your details at any time.",
  },
  {
    h: "Your rights",
    p: "You may request a copy of the information we hold about you, ask us to correct it, or ask us to delete it. Contact us on WhatsApp at +92 300 0214188 and we will act promptly.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="pt-28 bg-surface min-h-screen">
      <section className="max-w-3xl mx-auto px-gutter py-space-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container text-secondary text-label-sm font-bold uppercase tracking-widest mb-space-md">
          <ShieldCheck size={16} className="text-primary" /> Privacy Policy
        </div>
        <h1 className="text-display-hero-mobile lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-[1.08] mb-space-md">
          Your information stays <span className="text-primary-container">yours.</span>
        </h1>
        <p className="text-body-lg text-secondary leading-relaxed mb-space-lg">
          EIRA Forklifts Pakistan collects the minimum information needed to answer your
          enquiry and serve you well. Here is exactly what happens with it.
        </p>
        <div className="space-y-space-md mb-space-xl">
          {sections.map((s) => (
            <div key={s.h} className="bg-surface-container-lowest rounded-2xl p-space-md card-3d">
              <h2 className="text-headline-sm font-bold text-on-surface mb-2">{s.h}</h2>
              <p className="text-body-md text-secondary leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container hover:bg-primary-fixed btn-3d text-on-primary-container text-headline-sm font-bold transition-all"
        >
          Contact Us <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
