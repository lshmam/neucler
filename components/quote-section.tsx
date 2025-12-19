"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote, Wrench } from "lucide-react"

export function QuoteSection() {
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
    <section ref={sectionRef} className="py-20 bg-sage/40 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-terracotta" />
            </div>
          </div>

          {/* Quote Text */}
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed mb-8">
              &ldquo;My phone used to ring non-stop. Now it&apos;s quiet, and my{" "}
              <em className="font-serif italic text-terracotta">bay utilization is up 15%</em>.
              This software runs the shop for me.&rdquo;
            </p>

            {/* Attribution */}
            <div className="flex flex-col items-center gap-4">
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Shop Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-terracotta/20 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-terracotta" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Jim Patterson</p>
                  <p className="text-sm text-muted-foreground">Owner, Jim&apos;s Automotive</p>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
