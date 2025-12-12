"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { DollarSign, PhoneIncoming, PhoneMissed, Clock, Users, TrendingUp } from "lucide-react"

export function RevenueCalculator() {
  const [inboundCalls, setInboundCalls] = useState(50)
  const [missedCalls, setMissedCalls] = useState(15)
  const [conversionRate, setConversionRate] = useState(25) // Percentage of calls that convert to sales
  const [aov, setAov] = useState(250)
  const [employees, setEmployees] = useState(2)
  const [avgCallTime, setAvgCallTime] = useState(5)
  const hourlyWage = 18

  const [calculations, setCalculations] = useState({
    lostConversions: 0,
    dailyRevenueLoss: 0,
    monthlyRevenueLoss: 0,
    monthlyLaborCost: 0,
    potentialSavings: 0,
  })

  useEffect(() => {
    // Calculate lost conversions based on conversion rate
    const lostConversions = missedCalls * (conversionRate / 100)
    const dailyRevenueLoss = lostConversions * aov
    const monthlyRevenueLoss = dailyRevenueLoss * 22 // 22 working days
    const dailyCallMinutes = inboundCalls * avgCallTime
    const dailyLaborHours = (dailyCallMinutes / 60) * employees
    const monthlyLaborCost = dailyLaborHours * hourlyWage * 22
    const potentialSavings = monthlyRevenueLoss + monthlyLaborCost * 0.4 // 40% labor reduction

    setCalculations({
      lostConversions,
      dailyRevenueLoss,
      monthlyRevenueLoss,
      monthlyLaborCost,
      potentialSavings,
    })
  }, [inboundCalls, missedCalls, conversionRate, aov, employees, avgCallTime])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How much revenue are you losing to missed calls?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your potential revenue leakage and see how much you could save with AI-powered communication
            automation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6">Your Business Metrics</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <PhoneIncoming className="w-4 h-4 text-terracotta" />
                    <Label className="text-sm font-medium">Total inbound calls per day</Label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[inboundCalls]}
                      onValueChange={(value) => setInboundCalls(value[0])}
                      max={200}
                      min={1}
                      step={1}
                      className="flex-1"
                    />
                    <span className="text-lg font-semibold w-12 text-right">{inboundCalls}</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <PhoneMissed className="w-4 h-4 text-terracotta" />
                    <Label className="text-sm font-medium">Average missed calls per day</Label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[missedCalls]}
                      onValueChange={(value) => setMissedCalls(value[0])}
                      max={100}
                      min={0}
                      step={1}
                      className="flex-1"
                    />
                    <span className="text-lg font-semibold w-12 text-right">{missedCalls}</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-terracotta" />
                    <Label className="text-sm font-medium">Average conversion rate (%)</Label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[conversionRate]}
                      onValueChange={(value) => setConversionRate(value[0])}
                      max={100}
                      min={1}
                      step={1}
                      className="flex-1"
                    />
                    <span className="text-lg font-semibold w-12 text-right">{conversionRate}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Percentage of answered calls that convert to sales</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-terracotta" />
                    <Label className="text-sm font-medium">Average order value (AOV)</Label>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">$</span>
                    <Input
                      type="number"
                      value={aov}
                      onChange={(e) => setAov(Number(e.target.value))}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-terracotta" />
                    <Label className="text-sm font-medium">Front-desk employees handling calls</Label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[employees]}
                      onValueChange={(value) => setEmployees(value[0])}
                      max={10}
                      min={1}
                      step={1}
                      className="flex-1"
                    />
                    <span className="text-lg font-semibold w-12 text-right">{employees}</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-terracotta" />
                    <Label className="text-sm font-medium">Average time per call (minutes)</Label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[avgCallTime]}
                      onValueChange={(value) => setAvgCallTime(value[0])}
                      max={20}
                      min={1}
                      step={1}
                      className="flex-1"
                    />
                    <span className="text-lg font-semibold w-12 text-right">{avgCallTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <h4 className="text-sm font-medium text-red-600 uppercase tracking-wider mb-4">Revenue Leakage</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lost sales per day</span>
                    <span className="text-xl font-bold text-red-600">
                      {calculations.lostConversions.toFixed(1)} sales
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Daily revenue loss</span>
                    <span className="text-2xl font-bold text-red-600">
                      {formatCurrency(calculations.dailyRevenueLoss)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-red-200">
                    <span className="text-muted-foreground">Monthly revenue loss</span>
                    <span className="text-3xl font-bold text-red-600">
                      {formatCurrency(calculations.monthlyRevenueLoss)}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-red-500 mt-3">
                  Based on {missedCalls} missed calls × {conversionRate}% conversion rate = {calculations.lostConversions.toFixed(1)} lost sales/day
                </p>
              </div>

              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <h4 className="text-sm font-medium text-amber-600 uppercase tracking-wider mb-4">Labor Costs</h4>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monthly labor cost for calls</span>
                  <span className="text-2xl font-bold text-amber-600">
                    {formatCurrency(calculations.monthlyLaborCost)}
                  </span>
                </div>
              </div>

              <div className="bg-sage/30 rounded-2xl p-6 border border-sage">
                <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">With Neucler AI</h4>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projected monthly savings + recovered revenue</span>
                  <span className="text-4xl font-bold text-terracotta">
                    {formatCurrency(calculations.potentialSavings)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  By automating missed-call capture and reducing front-desk workload by 40%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
