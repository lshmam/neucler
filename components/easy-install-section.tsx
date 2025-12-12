"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, ArrowRight, Check } from "lucide-react"

export function EasyInstallSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [step, setStep] = useState(0)
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
        setStep((prev) => (prev >= 3 ? 0 : prev + 1))
      }, 2000)
      return () => clearInterval(timer)
    }
  }, [isVisible])

  const steps = [
    { num: "1", text: "Get your Neucler number" },
    { num: "2", text: "Update Google Maps" },
    { num: "3", text: "Start converting" },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-sage/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Installation is as easy as
              <br />
              <em className="font-serif italic text-terracotta">changing one number.</em>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Simply update your business phone number on Google Maps to your Neucler number. That&apos;s it. No complex
              integrations, no technical setup, no downtime.
            </p>

            {/* Animated steps */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {steps.map((s, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      step > index
                        ? "bg-terracotta text-white scale-110"
                        : step === index
                          ? "bg-terracotta/20 text-terracotta animate-pulse"
                          : "bg-terracotta/10 text-terracotta"
                    }`}
                  >
                    {step > index ? <Check className="w-4 h-4" /> : <span className="font-bold text-xs">{s.num}</span>}
                  </div>
                  <span
                    className={`transition-colors duration-300 ${
                      step >= index ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {s.text}
                  </span>
                  {index < 2 && (
                    <ArrowRight
                      className={`w-4 h-4 mx-2 transition-colors duration-300 ${
                        step > index ? "text-terracotta" : "text-muted-foreground"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Graphic with floating animation */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-background rounded-2xl shadow-2xl p-6 max-w-md mx-auto animate-float">
              {/* Mock Google Maps Business Card */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-sage/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Your Auto Shop</h3>
                  <div className="flex items-center gap-1 text-sm text-yellow-500 mb-1">
                    {"★★★★★"}
                    <span className="text-muted-foreground ml-1">(127)</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Auto repair shop</p>
                </div>
              </div>

              {/* Phone Number Field with pulse animation */}
              <div
                className={`border-2 rounded-lg p-3 transition-all duration-500 ${
                  step >= 1 ? "border-terracotta bg-terracotta/5" : "border-border bg-muted/30"
                }`}
              >
                <p className="text-xs text-muted-foreground mb-1">Phone number</p>
                <div className="flex items-center justify-between">
                  <span
                    className={`font-medium transition-all duration-500 ${
                      step >= 1 ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    +1 778 800 4188
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full transition-all duration-500 ${
                      step >= 1 ? "bg-terracotta text-white scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  >
                    Neucler
                  </span>
                </div>
              </div>

              {/* Other Fields */}
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>📍</span>
                  <span>123 Main Street, Vancouver, BC</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>🕐</span>
                  <span>Open · Closes 6 PM</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-terracotta/20 rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-sage/40 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
