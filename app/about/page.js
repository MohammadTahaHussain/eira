import HeroSection from "../../components/about/HeroSection";
import BrandStory from "../../components/about/BrandStory";
import MarketHubs from "../../components/about/MarketHubs";
import ServicePillars from "../../components/about/ServicePillars";
import Philosophy from "../../components/about/Philosophy";
import ProductRange from "../../components/about/ProductRange";
import ValuePositioning from "../../components/about/ValuePositioning";
import EngineeringDetails from "../../components/about/EngineeringDetails";
import Industries from "../../components/about/Industries";
import Support from "../../components/about/Support";
import BrandStatement from "../../components/about/BrandStatement";
import ContactCta from "../../components/about/ContactCta";

export const metadata = {
  title: "About EIRA Forklifts Pakistan — Shanghai Engineering, Karachi Service Hub",
  description:
    "EIRA (Shanghai Zhuojing Trading Co., Ltd.) supplies K Series diesel, electric & LPG forklifts across Pakistan with Karachi parts warehousing and factory-trained technicians.",
  alternates: { canonical: "https://eiraforklifts.com.pk/about" },
  openGraph: {
    title: "About EIRA Forklifts Pakistan",
    description:
      "Shanghai engineering, Karachi service hub — heavy-duty forklifts (3–10 ton) with genuine parts and nationwide support.",
  },
};

export default function About() {
  return (
    <main className="w-full pt-28 bg-surface min-h-screen">
      {/* Scoped radius tokens for the about-page design; the rest of the site keeps Tailwind defaults */}
      <div
        className="flex flex-col w-full font-body-md"
        style={{
          "--radius": "0.125rem",
          "--radius-lg": "0.25rem",
          "--radius-xl": "0.5rem",
          "--radius-full": "0.75rem",
        }}
      >
        <HeroSection />
        <BrandStory />
        <MarketHubs />
        <ServicePillars />
        <Philosophy />
        <ProductRange />
        <ValuePositioning />
        <EngineeringDetails />
        <Industries />
        <Support />
        <BrandStatement />
        <ContactCta />
      </div>
    </main>
  );
}
