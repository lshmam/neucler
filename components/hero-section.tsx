"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Wrench, Calculator } from "lucide-react"

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
          {/* Trust Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <Wrench className="w-4 h-4" />
            <span className="text-sm font-medium">Built for Auto Repair Professionals</span>
          </div>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            The{" "}
            <em className="font-serif italic text-terracotta relative inline-block">
              Automated Service Advisor
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-terracotta/30 rounded-full" />
            </em>
            <br />
            for High-Volume Auto Shops.
          </h1>
          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Stop missing calls. Automate status updates. Train your staff with AI.
            The all-in-one platform that turns your front desk into a profit center.
          </p>
          <p
            className={`text-base text-terracotta font-medium mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Stop the chaos. Automate your front desk. Train your staff.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <a href="https://cal.com/neucler/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-terracotta hover:bg-terracotta/90 text-white rounded-full px-8 py-6 text-lg btn-hover-lift shadow-lg shadow-terracotta/25 hover:shadow-xl hover:shadow-terracotta/30 transition-all duration-300">
                Get a Demo
              </Button>
            </a>
            <a href="#calculator">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-2 btn-hover-lift">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Your ROI
              </Button>
            </a>
          </div>
        </div>

        {/* Dashboard Preview Mock */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 border border-border shadow-2xl p-6">
            {/* Mock Dashboard Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="ml-4 text-sm text-muted-foreground">Neucler Dashboard</span>
            </div>

            {/* Vehicle Booking Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-background rounded-xl p-4 border border-border shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">2018 Ford F-150</h4>
                    <p className="text-sm text-muted-foreground">Customer: Mike Johnson</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    In Progress
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Wrench className="w-4 h-4 text-terracotta" />
                  <span className="text-foreground">Brakes Squeaking - Front pads replacement</span>
                </div>
                <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Est. Ready: 3:00 PM</span>
                  <span className="text-terracotta font-medium">$485.00</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-background rounded-xl p-4 border border-border shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">2021 Toyota Camry</h4>
                    <p className="text-sm text-muted-foreground">Customer: Sarah Chen</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Ready
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Wrench className="w-4 h-4 text-terracotta" />
                  <span className="text-foreground">Oil Change + Tire Rotation</span>
                </div>
                <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Notified: 5 min ago</span>
                  <span className="text-terracotta font-medium">$129.00</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-terracotta/20 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-terracotta/20 rounded-bl-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
