"use client"

import { Button } from "@/components/ui/button"
import { BlurReveal } from "@/components/BlurReveal"

export function CTASection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background overflow-hidden relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-purple-100/30" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16 text-center relative z-10">
        <BlurReveal delay={0} duration={0.8} yOffset={30}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground mb-8 leading-tight tracking-tight">
            Turn More Calls<br />
            Into Bookings
          </h2>
        </BlurReveal>

        <BlurReveal delay={0.15} duration={0.8} yOffset={30}>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            See if your business could benefit from
            Neucler's proven conversion system
          </p>
        </BlurReveal>

        <BlurReveal delay={0.3} duration={0.8} yOffset={30}>
          <a href="https://cal.com/neucler/30min" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full px-12 py-8 text-lg md:text-xl font-medium shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
              Start your 7-day free trial today
            </Button>
          </a>
        </BlurReveal>

        {/* Trust indicators */}
        <BlurReveal delay={0.5} duration={0.8} yOffset={20}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  )
}
