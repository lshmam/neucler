import { Header } from "@/components/header"
import { PricingHero } from "@/components/pricing-hero"
import { AIFeaturesGrid } from "@/components/ai-features-grid"
import { PricingTiers } from "@/components/pricing-tiers"
import { ConversionCalculator } from "@/components/conversion-calculator"
import { SupportSection } from "@/components/support-section"
import { PricingCTA } from "@/components/pricing-cta"
import { PricingFAQ } from "@/components/pricing-faq"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PricingHero />
      <AIFeaturesGrid />
      <PricingTiers />
      <ConversionCalculator />
      <SupportSection />
      <PricingCTA />
      <PricingFAQ />
      <Footer />
    </main>
  )
}
