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

export default function Home() {
 return (
 <main className="w-full pt-28 bg-surface min-h-screen">
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
