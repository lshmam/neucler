"use client"

import { useState, useEffect, useRef } from "react"
import { Mail, DollarSign, RefreshCcw, Star, Settings, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    id: "capture",
    icon: Mail,
    title: "Capture every lead.",
    description:
      "Never miss a lead again—see every call, text, website chat, review, and third-party app message—all from a consolidated inbox.",
    lottieUrl: null,
  },
  {
    id: "convert",
    icon: DollarSign,
    title: "Convert more leads.",
    description:
      "Our AI Employee responds instantly to inquiries, qualifies leads, and schedules appointments automatically—converting more visitors into paying customers.",
    lottieUrl: null,
  },
  {
    id: "repeat",
    icon: RefreshCcw,
    title: "Drive repeat business.",
    description:
      "Automated follow-ups and personalized outreach keep customers coming back, increasing lifetime value and building loyalty.",
    lottieUrl: null,
  },
  {
    id: "found",
    icon: Star,
    title: "Get found. Get chosen.",
    description:
      "More reviews = more business. Our AI requests reviews at each sale and responds to customer reviews on review sites, helping you rank high on Google.",
    lottieUrl: null,
  },
  {
    id: "customized",
    icon: Settings,
    title: "AI customized to your practice.",
    description:
      "Your AI Employee learns your business, products, and processes to deliver personalized responses that match your brand voice.",
    lottieUrl: null,
  },
]

export function AISolutionSection() {
  const [openFeature, setOpenFeature] = useState("capture")
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

  const activeFeature = features.find((f) => f.id === openFeature)

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header with animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-sm font-medium text-terracotta tracking-wider uppercase mb-4">
            NEUCLER&apos;S AI SOLUTION
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            AI for automotive sales and service.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jerry is the only AI Employee that gives your dealership AI customized to your brand with the ability to
            handle any talk track for sales or service.
          </p>
        </div>

        {/* Desktop Features Grid - centered */}
        <div className="hidden lg:flex lg:justify-center">
          {/* Left - Lottie/Animation placeholder - commented out for now */}
          {/*
          <div
            className={`bg-cream rounded-2xl p-8 min-h-[400px] flex items-center justify-center shadow-lg transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="text-center transition-all duration-500">
              <div className="w-24 h-24 bg-sage/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-float shadow-lg">
                {activeFeature && <activeFeature.icon className="w-12 h-12 text-foreground" />}
              </div>
              <p className="text-muted-foreground text-sm font-medium">{activeFeature?.title}</p>
              <p className="text-muted-foreground text-xs mt-2">(Lottie animation placeholder)</p>
            </div>
          </div>
          */}

          {/* Accordion Features with staggered animation - centered */}
          <div
            className={`max-w-2xl w-full space-y-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`border-b border-border pb-4 transition-all duration-500`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFeature(openFeature === feature.id ? "" : feature.id)}
                  className="flex items-center justify-between w-full text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openFeature === feature.id ? "bg-terracotta/20 scale-110" : "bg-sage/30 group-hover:bg-sage/50"
                        }`}
                    >
                      <feature.icon
                        className={`w-5 h-5 transition-colors duration-300 ${openFeature === feature.id ? "text-terracotta" : "text-foreground"
                          }`}
                      />
                    </div>
                    <span
                      className={`font-semibold transition-colors duration-300 ${openFeature === feature.id ? "text-terracotta" : "text-foreground"
                        }`}
                    >
                      {feature.title}
                    </span>
                  </div>
                  <div
                    className={`transition-transform duration-300 ${openFeature === feature.id ? "rotate-180" : ""}`}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFeature === feature.id ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-muted-foreground pl-13">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Features */}
        <div className="lg:hidden space-y-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`border-b border-border pb-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenFeature(openFeature === feature.id ? "" : feature.id)}
                className="flex items-center justify-between w-full text-left group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openFeature === feature.id ? "bg-terracotta/20 scale-110" : "bg-sage/30"
                      }`}
                  >
                    <feature.icon
                      className={`w-5 h-5 transition-colors duration-300 ${openFeature === feature.id ? "text-terracotta" : "text-foreground"
                        }`}
                    />
                  </div>
                  <span
                    className={`font-semibold transition-colors duration-300 ${openFeature === feature.id ? "text-terracotta" : "text-foreground"
                      }`}
                  >
                    {feature.title}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openFeature === feature.id ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${openFeature === feature.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-muted-foreground mb-4 mt-4">{feature.description}</p>
                {/* Lottie animation placeholder - commented out for now */}
                {/*
                <div className="bg-cream rounded-2xl p-6 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-sage/30 rounded-full flex items-center justify-center mx-auto mb-3 animate-float">
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <p className="text-muted-foreground text-xs">(Lottie animation placeholder)</p>
                  </div>
                </div>
                */}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-full px-8 py-6 btn-hover-lift">
              Talk to Sales
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
