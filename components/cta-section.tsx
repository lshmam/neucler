"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-sage/30 text-foreground px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-terracotta" />
            <span className="text-sm font-medium">Ready to transform your business?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Get started today.</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Grow and scale your business with an all-in-one lead conversion platform.
          </p>
          <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 text-lg btn-hover-lift shadow-lg hover:shadow-xl transition-all duration-300 group">
              Talk to Sales
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
