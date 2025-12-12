import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionsHero } from "@/components/solutions-hero"
import { SolutionsStats } from "@/components/solutions-stats"
import { SolutionsCaseStudy } from "@/components/solutions-case-study"
import { SolutionsFeatures } from "@/components/solutions-features"
import { SolutionsRoles } from "@/components/solutions-roles"
import { SolutionsCTA } from "@/components/solutions-cta"
import { SolutionsFAQ } from "@/components/solutions-faq"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SolutionsHero />
      <SolutionsStats />
      <SolutionsCaseStudy />
      <SolutionsFeatures />
      <SolutionsRoles />
      <SolutionsCTA />
      <SolutionsFAQ />
      <Footer />
    </div>
  )
}
