import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LeadStatsSection } from "@/components/lead-stats-section"
import { IntegrationSection } from "@/components/integration-section"
import { FeaturesShowcase } from "@/components/features-showcase"
import { ProblemSection } from "@/components/problem-section"
import { FeaturesGrid } from "@/components/features-grid"
import { EasyInstallSection } from "@/components/easy-install-section"
import { QuoteSection } from "@/components/quote-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LeadStatsSection />
      <FeaturesShowcase />
      <IntegrationSection />
      {/* <ProblemSection /> */}
      <FeaturesGrid />
      {/* <EasyInstallSection /> */}
      {/* <QuoteSection /> */}
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
