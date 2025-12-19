"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, GraduationCap, PhoneMissed, DollarSign } from "lucide-react"

const painPoints = [
    {
        icon: Phone,
        title: "The Phone Chaos",
        stat: "4 hours/day",
        description: "Service Advisors spend 4 hours a day answering 'Is my car ready?' instead of selling repairs.",
        color: "bg-red-500/10 text-red-600",
    },
    {
        icon: GraduationCap,
        title: "The Training Gap",
        stat: "6 months",
        description: "New hires take 6 months to learn your pricing and policies. One mistake costs you thousands.",
        color: "bg-yellow-500/10 text-yellow-600",
    },
    {
        icon: PhoneMissed,
        title: "The Missed Leads",
        stat: "$150k/year",
        description: "30% of calls go to voicemail while your team is under a car. That's $150k/year in lost revenue.",
        color: "bg-orange-500/10 text-orange-600",
    },
]

export function ProblemSection() {
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
        <section ref={sectionRef} className="py-20 bg-sage/20 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full mb-6">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm font-medium">The Problem</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Your Front Desk is{" "}
                        <em className="font-serif italic text-red-600">Leaking Money.</em>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Every unanswered call, untrained employee, and missed follow-up is costing you revenue.
                    </p>
                </div>

                {/* Pain Point Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {painPoints.map((point, index) => (
                        <div
                            key={point.title}
                            className={`bg-background rounded-2xl p-6 lg:p-8 shadow-lg border border-border card-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl ${point.color} flex items-center justify-center mb-4`}>
                                <point.icon className="w-7 h-7" />
                            </div>

                            {/* Title & Stat */}
                            <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
                            <p className="text-3xl font-bold text-terracotta mb-3">{point.stat}</p>

                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
