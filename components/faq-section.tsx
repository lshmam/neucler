"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "How does Neucler help train my front desk or sales team?",
        answer: "Neucler identifies where conversations succeed or break down, highlights the language and behaviors used in high-converting calls, and turns real conversations into actionable coaching insights. This allows teams to improve performance using actual data, not scripts or guesswork.",
    },
    {
        question: "Will Neucler work if my business has multiple locations or teams?",
        answer: "Yes. Neucler supports multi-location businesses and distributed teams by standardizing conversation scoring, follow-up quality, and performance insights across all locations, while still providing location-level and staff-level visibility.",
    },
    {
        question: "How long does it take to see results?",
        answer: "Most businesses see improvements in follow-up consistency and booking rates within the first few weeks. As Neucler continues to analyze conversations, coaching insights and conversion performance improve month over month.",
    },
    {
        question: "What insights does Neucler give managers and owners?",
        answer: "Neucler provides clear visibility into what actually happens on inbound calls. You can see which conversations lead to bookings, where calls lose momentum, and which behaviors consistently drive revenue—making it easier to coach teams and improve outcomes.",
    },
    {
        question: "How does Neucler ensure no qualified lead falls through the cracks?",
        answer: "Neucler automatically scores every inbound conversation and tracks follow-up outcomes. High-intent callers are prioritized and followed up with until they book or explicitly decline, eliminating missed opportunities caused by manual processes.",
    },
]

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="py-20 bg-background" id="faq">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-border/50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full py-6 text-left group"
                            >
                                <span className="text-lg md:text-xl font-medium text-foreground pr-8">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

