"use client"

import { Button } from "@/components/ui/button"
import PrismaticBurst from "@/components/PrismaticBurst"
import { BlurReveal } from "@/components/BlurReveal"

export function HeroSection() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl font-light tracking-tight text-white leading-tight">
              <BlurReveal delay={0} duration={0.8} yOffset={20}>
                <span>Turn inbound conversations</span>
              </BlurReveal>
              <BlurReveal delay={0.15} duration={0.8} yOffset={20}>
                <span>
                  into booked <span className="font-serif italic">revenue</span>
                </span>
              </BlurReveal>
            </h1>

            <BlurReveal delay={0.4} duration={0.8} yOffset={20}>
              <p className="text-lg md:text-xl text-white/70 max-w-xl">
                Systemize your front desk & automate follow ups until the appointment is booked
              </p>
            </BlurReveal>

            <BlurReveal delay={0.6} duration={0.8} yOffset={20}>
              <a href="https://cal.com/neucler/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-purple-500/80 to-purple-600/80 hover:from-purple-500 hover:to-purple-600 text-white rounded-full px-10 py-7 text-lg font-medium backdrop-blur-sm shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300">
                  Start your free trial today
                </Button>
              </a>
            </BlurReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
