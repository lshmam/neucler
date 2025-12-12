"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { QuoteModal } from "@/components/quote-modal"

const tiers = [
  {
    name: "Core",
    description: "With essential AI features, respond to and convert more leads faster.",
    popular: false,
    features: [
      "Centralized Lead Conversion Platform: forms, texts, calls, and emails all in one place",
      "AI-Powered Responses Suggestions",
      "Basic Automations",
      "Basic Reporting",
      "Basic Lead Automations, Labeling",
      "Custom Website App",
      "Private Business Admin Available",
      "Dedicated Customer Success Manager",
      "Chat, Phone, Email Support",
      "Fast Personalized Onboarding",
    ],
  },
  {
    name: "Pro",
    description: "Maximize your lead conversion with advanced AI and automations.",
    popular: true,
    features: [
      "Everything in Core, plus:",
      "AI Speech Analytics",
      "AI Review Responses",
      "AI Phone Call Summaries",
      "Automatic Lead Routing",
      "Advanced Lead Nurturing",
      "Lead Capture Forms",
      "Text Send Feature",
      "Text Marketing with Images and GIFs",
      "Advanced Customer Segmentation",
      "High-Volume Carrier Verified Messaging",
      "Lower Payment Processing Fees",
    ],
  },
  {
    name: "Signature",
    description: "Build a custom plan for your established, multi-location business.",
    popular: false,
    features: [
      "Everything in Pro, plus:",
      "Advanced Multi-Location Management",
      "Advanced Reporting with on-Demand Availability",
      "Advanced branding and customization",
      "Discount on Promo Plans",
      "Discount on Basic Phone",
      "Discount on One of Core Purchases",
      "Discount on Upgrade plan and add-ons",
      "Convenient Account Migration",
      "Quarterly Business Reviews",
      "Personalized Success Plans",
      "Priority Phone Plus Support",
      "Priority Project Team Spin Up",
      "Custom Setup Availability",
      "Custom Pricing with Rates Primary Exclusive",
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
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`bg-card rounded-2xl p-6 border flex flex-col transition-all duration-700 card-hover ${
                  tier.popular
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
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                {/* CTA */}
                <Button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full rounded-full mb-6 btn-hover-lift ${
                    tier.popular
                      ? "bg-terracotta hover:bg-terracotta/90 text-white shadow-lg shadow-terracotta/25"
                      : "bg-foreground hover:bg-foreground/90 text-background"
                  }`}
                >
                  Get a quote
                </Button>

                {/* Features */}
                <div className="border-t border-border pt-6">
                  <p className="text-sm font-semibold text-foreground mb-4">Plan details</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-start gap-2 transition-all duration-500 ${
                          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
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
