"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import PrismaticBurst from "@/components/PrismaticBurst"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-screen bg-background">
      {/* PrismaticBurst Background Card */}
      <div className="absolute inset-2 md:inset-2 lg:inset-2 rounded-3xl overflow-hidden bg-black">
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
          colors={['#ff9a56', '#7c5ce0', '#4a9fff', '#ffd700', '#ff6b8a']}
        />
      </div>

      <div className="container relative mx-auto px-6 md:px-12 lg:px-16 z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Main Hero Content - Centered Layout */}
        <div className="flex flex-col items-center text-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center space-y-8 max-w-4xl">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white transition-all duration-1000 leading-tight ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              Turn inbound<br />
              conversations into booked<br />
              revenue
            </h1>
            <p
              className={`text-lg md:text-xl text-white/70 max-w-xl transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              Assist your front desk, automate follow ups until the deal is closed
            </p>

            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <a href="https://cal.com/neucler/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-purple-500/80 to-purple-600/80 hover:from-purple-500 hover:to-purple-600 text-white rounded-full px-10 py-7 text-lg font-medium backdrop-blur-sm shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300">
                  Get a free conversion audit
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

