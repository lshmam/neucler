"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { QuoteModal } from "@/components/quote-modal"

const tiers = [
  {
    name: "Starter",
    price: "$79",
    period: "/mo",
    description: "Essential tools to streamline your shop's customer service.",
    popular: false,
    features: [
      "Unified Support Inbox: Consolidate your SMS, Business Email, and Web Chat into one prioritized view.",
      "Operational Playbook: Build your shop's digital brain by centralizing your pricing, warranties, and service protocols.",
      "Post-Call Performance Scoring: Get an automated 0-100 grade and coaching tips for every customer interaction.",
      "Dispute Protection Vault: Access timestamped transcripts and audio recordings to win chargebacks and resolve \"he-said, she-said\" issues.",
      "Essential Insights Dashboard: Track your team's response times, hospitality trends, and shop capacity in real-time.",
    ],
  },
  {
    name: "Pro",
    price: "$149",
    period: "/mo",
    description: "Everything in Starter, plus advanced AI automation.",
    popular: true,
    features: [
      "AI Smart-Filter Call Routing: Let the AI answer, identify the customer's intent, and only ring your phone for revenue-generating opportunities.",
      "Active Agent Copilot: Real-time AI \"whispers\" provide your staff with the correct SOP answers and pricing while they are live on a call.",
      "Automated Missed Call Rescue: Instantly text back every missed call to capture leads and book appointments before they call the competitor.",
      "Smart Capacity Waitlist: Automatically fill last-minute cancellations by texting your waitlist to ensure your bays are never empty.",
      "AI Voice Receptionists: AI Receptionists that can take inbound calls & collect information when you are away from the front desk.",
    ],
  },
]

export function PricingTiers() {
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  return (
    <>
      <section ref={sectionRef} className="py-16 md:py-24 bg-cream overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`bg-card rounded-2xl p-8 border flex flex-col transition-all duration-700 card-hover max-w-lg w-full ${tier.popular
                  ? "border-terracotta ring-2 ring-terracotta shadow-xl shadow-terracotta/10"
                  : "border-border"
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                    {tier.popular && (
                      <span className="bg-terracotta text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-lg text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                {/* CTA */}
                <Button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full rounded-full mb-6 btn-hover-lift ${tier.popular
                    ? "bg-terracotta hover:bg-terracotta/90 text-white shadow-lg shadow-terracotta/25"
                    : "bg-foreground hover:bg-foreground/90 text-background"
                    }`}
                >
                  Sign up today
                </Button>

                {/* Features */}
                <div className="border-t border-border pt-6">
                  <p className="text-sm font-semibold text-foreground mb-4">Plan details</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-start gap-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                          }`}
                        style={{ transitionDelay: `${index * 150 + featureIndex * 30}ms` }}
                      >
                        <Check className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
