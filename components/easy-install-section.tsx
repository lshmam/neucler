"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Brain, Zap, Check, ArrowRight } from "lucide-react"

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Connect Your Phone Lines",
    description: "We integrate with your existing phone system. Your business number stays the same.",
  },
  {
    num: "02",
    icon: Brain,
    title: "AI Learns Your Business",
    description: "We train your AI on your services, pricing, and FAQs to handle calls like your best rep.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Never Miss a Lead",
    description: "AI answers calls 24/7, qualifies leads, and books appointments—even when you're busy.",
  },
]

export function EasyInstallSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  // Animate through steps when visible
  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveStep((prev) => (prev >= 2 ? 0 : prev + 1))
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 bg-sage/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-sm font-medium text-terracotta tracking-wider uppercase mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Up and Running in{" "}
            <em className="font-serif italic text-terracotta">One Week.</em>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No complex setup. No coding required. We handle everything.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector Line (not on last item) */}
              {index < 2 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border">
                  <ArrowRight
                    className={`absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-500 ${activeStep > index ? "text-terracotta" : "text-muted-foreground"
                      }`}
                  />
                </div>
              )}

              {/* Step Card */}
              <div
                className={`bg-background rounded-2xl p-6 lg:p-8 shadow-lg border transition-all duration-500 ${activeStep === index
                  ? "border-terracotta shadow-terracotta/10 scale-[1.02]"
                  : "border-border"
                  }`}
              >
                {/* Step Number & Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${activeStep >= index
                      ? "bg-terracotta text-white"
                      : "bg-terracotta/10 text-terracotta"
                      }`}
                  >
                    {activeStep > index ? (
                      <Check className="w-7 h-7" />
                    ) : (
                      <step.icon className="w-7 h-7" />
                    )}
                  </div>
                  <span
                    className={`text-3xl font-bold transition-colors duration-500 ${activeStep >= index ? "text-terracotta" : "text-muted-foreground/30"
                      }`}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
