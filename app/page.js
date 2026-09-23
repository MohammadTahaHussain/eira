import HeroSection from"../components/HeroSection";
import CapacitySelector from"../components/CapacitySelector";
import ProductRange from"../components/ProductRange";
import PowerTypeSection from"../components/PowerTypeSection";
import SpotlightSection from"../components/SpotlightSection";
import WhyEiraSection from"../components/WhyEiraSection";
import ApplicationsSection from"../components/ApplicationsSection";
import SupportSection from"../components/SupportSection";
import AboutSection from"../components/AboutSection";
import QuoteModule from"../components/QuoteModule";

export const metadata = {
  title: "Forklifts for Sale in Pakistan (3–10 Ton Diesel, Electric, LPG) | EIRA",
  description:
    "Buy reliable forklifts in Pakistan — 3 to 10 ton diesel, 1–5 ton electric & 3.5 ton LPG. K Series with Quanchai engines, Karachi stock, nationwide service. WhatsApp +92 300 0214188.",
  alternates: { canonical: "https://eiraforklifts.com.pk/" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EIRA Forklifts Pakistan",
  legalName: "Shanghai Zhuojing Trading Co., Ltd. (EIRA)",
  url: "https://eiraforklifts.com.pk",
  logo: "https://eiraforklifts.com.pk/images/eira-logo.jpg",
  description:
    "Supplier of heavy-duty diesel, electric and LPG forklifts (3–10 ton) across Pakistan with Karachi stock and nationwide after-sales service.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+92 300 0214188",
      contactType: "sales",
      areaServed: "PK",
      availableLanguage: ["en", "ur"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [],
};

export default function Home() {
 return (
 <main className="w-full pt-28 bg-surface min-h-screen">
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
 <div className="flex flex-col w-full text-on-surface">
 <HeroSection />
 <CapacitySelector />
 <ProductRange />
 <PowerTypeSection />
 <SpotlightSection />
 <WhyEiraSection />
 <ApplicationsSection />
 <SupportSection />
 <AboutSection />
 <QuoteModule />
 </div>
 </main>
 );
}
