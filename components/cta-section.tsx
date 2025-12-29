"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
          Turn More Calls Into Bookings
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
          See if your business could benefit from<br />
          Neucler's proven conversion system
        </p>
        <a href="https://cal.com/neucler/30min" target="_blank" rel="noopener noreferrer">
          <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full px-10 py-7 text-lg font-medium shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300">
            Get a free conversion audit
          </Button>
        </a>
      </div>
    </section>
  )
}

