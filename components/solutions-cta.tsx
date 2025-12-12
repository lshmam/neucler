import { Button } from "@/components/ui/button"

export function SolutionsCTA() {
  return (
    <section className="py-16 md:py-20 bg-foreground">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <p className="text-sm text-background/60 uppercase tracking-wider mb-4">Get Started Today</p>
        <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">Boost your sales and make more money.</h2>
        <p className="text-background/70 mb-8 max-w-lg mx-auto">
          Your new AI Employee wants to get in touch to find a plan for you.
        </p>
        <a href="https://cal.com/neucler/30min" target="_blank" rel="noopener noreferrer">
          <Button className="bg-terracotta hover:bg-terracotta/90 text-white rounded-full px-8 py-6 text-lg">
            Talk to Sales
          </Button>
        </a>
      </div>
    </section>
  )
}
