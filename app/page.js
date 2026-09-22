import HeroSection from "../components/homepage/HeroSection";
import BrandStory from "../components/homepage/BrandStory";
import MarketHubs from "../components/homepage/MarketHubs";
import ServicePillars from "../components/homepage/ServicePillars";
import Philosophy from "../components/homepage/Philosophy";
import ProductRange from "../components/homepage/ProductRange";
import ValuePositioning from "../components/homepage/ValuePositioning";
import EngineeringDetails from "../components/homepage/EngineeringDetails";
import Industries from "../components/homepage/Industries";
import Support from "../components/homepage/Support";
import BrandStatement from "../components/homepage/BrandStatement";
import ContactCta from "../components/homepage/ContactCta";

export default function Home() {
  return (
    <main className="w-full pt-28 bg-surface min-h-screen">
      <div className="flex flex-col w-full">
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
