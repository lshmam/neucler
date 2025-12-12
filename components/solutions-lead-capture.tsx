"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function SolutionsLeadCapture() {
  const [phone, setPhone] = useState("")

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Respond to leads instantly, beat your competition.
          </h2>
          <p className="text-muted-foreground">93% of buyers go with the first 5 retailers.</p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <div className="flex gap-2">
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
            <Button className="bg-terracotta hover:bg-terracotta/90 text-white rounded-full px-6">
              Get a text back
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-terracotta text-white rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">We texted your business.</h3>
            <p className="text-white/80 text-sm">Enter the phone number where you receive customer inquiries.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
