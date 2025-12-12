"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect, useRef } from "react"
import { Send, Zap } from "lucide-react"

export function LeadResponseSection() {
  const [phone, setPhone] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Lightning Fast Response</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Respond to leads instantly, beat your competition.
          </h2>
          <p className="text-lg text-muted-foreground">93% of buyers go with the first 5 retailers.</p>
        </div>

        <div
          className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div
            className={`bg-sage/30 rounded-2xl p-8 transition-all duration-500 ${
              isFocused ? "shadow-2xl shadow-sage/30 scale-[1.02]" : "shadow-lg"
            }`}
          >
            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-foreground mb-2">Get a text back</p>
              <p className="text-sm text-muted-foreground">Enter your phone number to see how fast our AI responds</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="rounded-full bg-white border-border px-6 py-6 transition-all duration-300 focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta"
                />
              </div>
              <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 btn-hover-lift group">
                Get a text back
                <Send className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
