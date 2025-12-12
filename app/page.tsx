import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LeadResponseSection } from "@/components/lead-response-section"
import { AISolutionSection } from "@/components/ai-solution-section"
import { AIEmployeeSection } from "@/components/ai-employee-section"
import { EasyInstallSection } from "@/components/easy-install-section"
import { TrustSection } from "@/components/trust-section"
import { RevenueCalculator } from "@/components/revenue-calculator"
import { QuoteSection } from "@/components/quote-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LeadResponseSection />
      <AISolutionSection />
      <AIEmployeeSection />
      <EasyInstallSection />
      <TrustSection />
      <RevenueCalculator />
      <QuoteSection />
      <CTASection />
      <Footer />
    </main>
  )
}
