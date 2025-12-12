"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Play } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sage/20 via-sage/10 to-background" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-sage/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container relative mx-auto px-6 md:px-12 lg:px-16 pt-40 pb-16">
        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            AI that{" "}
            <em className="font-serif italic text-terracotta relative inline-block">
              converts
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-terracotta/30 rounded-full" />
            </em>{" "}
            leads
            <br />
            and{" "}
            <em className="font-serif italic text-terracotta relative inline-block">
              makes
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-terracotta/30 rounded-full" />
            </em>{" "}
            you money.
          </h1>
          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            An AI Employee that puts in the work 24/7, turning leads into loyal customers and messages into
            revenue—around the clock.
          </p>
          <p
            className={`text-base text-terracotta font-medium mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Installation is as easy as just changing your business number on Google Maps.
          </p>

          <div
            className={`flex flex-col items-center justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-terracotta hover:bg-terracotta/90 text-white rounded-full px-8 py-6 text-lg btn-hover-lift shadow-lg shadow-terracotta/25 hover:shadow-xl hover:shadow-terracotta/30 transition-all duration-300">
                Get a Demo
              </Button>
            </a>
          </div>
        </div>

        {/* Demo Video - commented out for now */}
        {/*
        <div
          className={`max-w-4xl mx-auto mb-8 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 aspect-video flex items-center justify-center border border-border shadow-2xl group cursor-pointer hover:shadow-3xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="text-center relative z-10">
              <div className="w-20 h-20 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-terracotta/20 transition-all duration-500 backdrop-blur-sm">
                <Play className="w-10 h-10 text-foreground group-hover:text-terracotta transition-colors duration-300 ml-1" />
              </div>
              <p className="text-foreground font-medium group-hover:text-terracotta transition-colors duration-300">
                Demo Video
              </p>
              <p className="text-sm text-muted-foreground">Click to watch</p>
            </div>

            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-terracotta/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-terracotta/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        */}
      </div>
    </section>
  )
}
