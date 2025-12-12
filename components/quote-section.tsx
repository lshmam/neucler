"use client"

import { useEffect, useRef, useState } from "react"

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
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed mb-8">
            <span className="inline-block transition-all duration-700" style={{ transitionDelay: "0ms" }}>
              &ldquo;AI is here to stay and
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "100ms" }}
            >
              it&apos;s only going to get
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "200ms" }}
            >
              more powerful. Our
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "300ms" }}
            >
              vision is to keep you
            </span>
            <br />
            <span
              className={`inline-block bg-terracotta/20 px-3 py-1 rounded transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              at the forefront of this
            </span>
            <br />
            <span
              className={`inline-block bg-terracotta/20 px-3 py-1 rounded transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              style={{ transitionDelay: "500ms" }}
            >
              innovation...
            </span>
            &rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
