"use client"

import { useEffect, useRef, useState } from "react"

const features = [
  {
    title: "Boosts your sales",
    description:
      "Focused on customer satisfaction and driving sales, our AI Employee increases your bottom line by up to 30%.",
    image: "/neucler-sale.jpg",
  },
  {
    title: "Knows your industry",
    description:
      "Our AI has been built with 10+ years of industry expertise. Our AI Employee boosts customer engagement rates by 52%.",
    image: "/neucler-industry.jpg",
  },
  {
    title: "Sets up quickly",
    description:
      "Customized to your policies and services, our AI Employee is ready in only 48 hours to your standards and your guidelines.",
    image: "/neucler-setup.jpg",
  },
]

export function AIEmployeeSection() {
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
    <section ref={sectionRef} className="py-20 bg-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-sm font-medium text-terracotta tracking-wider uppercase mb-4">AI EMPLOYEE</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Expand your team exponentially with
            <br />
            Neucler&apos;s AI Employee
          </h2>
        </div>

        {/* Feature Cards with staggered animation */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="rounded-2xl overflow-hidden mb-6 shadow-lg card-hover">
                <div className="relative overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-terracotta transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
