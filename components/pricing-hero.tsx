"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function PricingHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-20 pb-16 md:py-24 bg-background overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-sage/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center relative z-10">
        <div
          className={`inline-flex items-center gap-2 bg-sage/30 text-foreground px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <Sparkles className="w-4 h-4 text-terracotta" />
          <span className="text-sm font-medium">Simple, transparent pricing</span>
        </div>

        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight text-balance transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          AI is only <em className="font-serif italic font-normal text-terracotta">as good</em> as the platform it's{" "}
          <em className="font-serif italic font-normal text-terracotta">built into.</em>
        </h1>
        <p
          className={`mt-6 text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Maximize lead conversion with advanced AI and automation that helps your business grow. Start converting 30%
          more leads today.
        </p>
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button className="mt-8 bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-lg btn-hover-lift shadow-lg hover:shadow-xl group">
            Get a quote
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
