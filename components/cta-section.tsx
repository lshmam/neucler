import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
          Turn More Calls Into Bookings
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
          See if your business could benefit from<br />
          Neucler's proven conversion system
        </p>
        <div className="mb-16">
          <a href="https://cal.com/neucler/30min" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full px-10 py-7 text-lg font-medium shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300">
              Get a free conversion audit
            </Button>
          </a>
        </div>

        {/* Dashboard Image
        <div className="relative max-w-5xl mx-auto mt-16">
          <div className="rounded-t-2xl border-x border-t border-neutral-200 shadow-2xl overflow-hidden bg-white max-h-[300px] md:max-h-[500px]">
            <Image
              src="/cta-dashboard.png"
              alt="Neucler Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto object-cover object-top"
            />
          </div>

          {/* Fade out bottom gradient - covers larger area for smooth disappearance 
          <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[300px] bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div> */}
      </div>
    </section>
  )
}
