"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    quote: "[Our AI Employee] is excellent. We were going to hire a customer service rep, but now we don't have to.",
    author: "Sarah Johnson",
    company: "Apex Auto Group",
  },
  {
    stat: "72%",
    description: "Percent Neucler's AI cut their median response time from over 5 minutes to under 1 minute",
  },
  {
    quote: "Neucler AI has our best lead response and lead closing rates.",
    author: "Michael Chen",
    company: "Premier Ford Lincoln",
  },
  {
    quote:
      "The AI Employee can start and end the conversation and actually book an appointment into ServiceTitan. It's doing almost all of the work.",
    author: "David Martinez",
    company: "Home Service Pros",
  },
]

function AnimatedStat({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)
  const numericValue = Number.parseInt(value.replace(/\D/g, ""))

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const increment = numericValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setDisplayValue(numericValue)
          clearInterval(timer)
        } else {
          setDisplayValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, numericValue])

  return <span>{displayValue}%</span>
}

export function TrustSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4">GROW WITH US</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            See how we&apos;ve helped businesses
            <br />
            <span className="text-terracotta">just like yours.</span>
          </h2>
        </div>

        {/* Testimonials Grid with staggered animation */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-cream rounded-2xl p-8 card-hover transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {item.stat ? (
                <div className="text-center">
                  <p className="text-5xl font-bold text-terracotta mb-4">
                    <AnimatedStat value={item.stat} isVisible={isVisible} />
                  </p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ) : (
                <>
                  <p className="text-lg text-foreground mb-6 font-serif italic">&ldquo;{item.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-foreground">{item.author}</p>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
