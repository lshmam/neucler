import { HeroAgent4 } from "../components/HeroAgent4";
import { ValueSection2 } from "../components/ValueSection2";
import { PricingModern2 } from "../components/PricingModern2";
import { MissedCallCalculator2 } from "../components/MissedCallCalculator2";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { RetentionSection } from "../components/RetentionSection";
import { MarketingSection } from "../components/MarketingSection";
import { AgentSection2 } from "../components/AgentSection2";

export default function Home() {
  return (
    <div>
      <HeroAgent4 />
      <ValueSection2 />
      <AgentSection2 />
      <MarketingSection />
      <RetentionSection />
      <PricingModern2 />
      <MissedCallCalculator2 />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
