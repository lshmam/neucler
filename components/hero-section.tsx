"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Calculator } from "lucide-react"
import PrismaticBurst from "@/components/PrismaticBurst"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-[90vh]">
      {/* PrismaticBurst Background */}
      <div className="absolute inset-0 bg-black">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
          colors={['#ffffff', '#888888', '#333333']}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <div className="container relative mx-auto px-6 md:px-12 lg:px-16 pt-40 pb-16 z-10">
        {/* Main Hero Content - Centered Layout */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center space-y-6 max-w-4xl">
            {/* Trust Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full w-fit transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Built for Call-Heavy Businesses</span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              Turn missed calls into{" "}
              <em className="font-serif italic text-white relative inline-block">
                booked meetings.
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-white/30 rounded-full" />
              </em>
            </h1>
            <p
              className={`text-lg md:text-xl text-white/80 max-w-2xl transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              Our Neural Agent scores leads instantly and automates the follow-up until the appointment is booked.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <a href="https://cal.com/neucler/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white hover:bg-white/90 text-black rounded-full px-8 py-6 text-lg btn-hover-lift shadow-lg shadow-white/25 hover:shadow-xl hover:shadow-white/30 transition-all duration-300">
                  Get a Demo
                </Button>
              </a>
              <a href="#calculator">
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-2 border-white/50 text-white hover:bg-white/10 btn-hover-lift">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Your ROI
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
