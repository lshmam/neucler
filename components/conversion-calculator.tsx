"use client"

import { useState } from "react"
import { Phone, TrendingUp } from "lucide-react"

export function ConversionCalculator() {
  const [callsPerMonth, setCallsPerMonth] = useState("")
  const [conversionRate, setConversionRate] = useState("")
  const [aov, setAov] = useState("")

  const calls = Number.parseInt(callsPerMonth) || 0
  const rate = Number.parseFloat(conversionRate) || 0
  const avgOrderValue = Number.parseFloat(aov) || 0

  // Calculate potential revenue from calls
  const currentConversions = Math.round(calls * (rate / 100))
  const currentRevenue = currentConversions * avgOrderValue

  // With AI Employee (assume 35% improvement in conversion rate)
  const improvedRate = Math.min(rate * 1.35, 100)
  const improvedConversions = Math.round(calls * (improvedRate / 100))
  const improvedRevenue = improvedConversions * avgOrderValue

  const additionalRevenue = improvedRevenue - currentRevenue
  const additionalConversions = improvedConversions - currentConversions

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Conversion Rate from Calls</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how much additional revenue you could generate by improving your call conversion rate with our AI
            Employee.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Calls per Month</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="number"
                    value={callsPerMonth}
                    onChange={(e) => setCallsPerMonth(e.target.value)}
                    placeholder="500"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Current Conversion Rate (%)</label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="number"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(e.target.value)}
                    placeholder="15"
                    min="0"
                    max="100"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Average Order Value ($)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    value={aov}
                    onChange={(e) => setAov(e.target.value)}
                    placeholder="350"
                    className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="border-t border-border pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-muted/50 rounded-xl p-6">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Current Performance</p>
                  <p className="text-3xl font-bold text-foreground mb-1">
                    {currentConversions.toLocaleString()} conversions
                  </p>
                  <p className="text-lg text-muted-foreground">${currentRevenue.toLocaleString()} monthly revenue</p>
                </div>

                <div className="bg-terracotta/10 rounded-xl p-6 border border-terracotta/20">
                  <p className="text-sm text-terracotta uppercase tracking-wider mb-2">With AI Employee (+35%)</p>
                  <p className="text-3xl font-bold text-foreground mb-1">
                    {improvedConversions.toLocaleString()} conversions
                  </p>
                  <p className="text-lg text-terracotta font-semibold">
                    ${improvedRevenue.toLocaleString()} monthly revenue
                  </p>
                </div>
              </div>

              {additionalRevenue > 0 && (
                <div className="mt-6 text-center bg-sage/20 rounded-xl p-6">
                  <p className="text-sm text-muted-foreground mb-2">Potential Additional Revenue</p>
                  <p className="text-4xl font-bold text-foreground">
                    +${additionalRevenue.toLocaleString()}
                    <span className="text-lg font-normal text-muted-foreground">/month</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    +{additionalConversions} additional conversions per month
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
