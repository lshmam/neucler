"use client"

import { useEffect, useRef, useState } from "react"
import { Inbox, BookOpen, BarChart3, PhoneMissed, Shield, CalendarCheck } from "lucide-react"

const features = [
    {
        icon: Inbox,
        title: "Unified Support Inbox",
        description: "Consolidate SMS, Email, and Calls. Prioritize urgent 'Brake Jobs' over 'Status Checks'.",
    },
    {
        icon: BookOpen,
        title: "Automated SOP Playbook",
        description: "Turn your tribal knowledge into a searchable digital brain. The AI answers questions using *your* pricing rules.",
    },
    {
        icon: BarChart3,
        title: "Post-Call Performance Scoring",
        description: "Like 'Gong' for mechanics. Every call is graded 0-100 on Speed, Knowledge, and Closing.",
    },
    {
        icon: PhoneMissed,
        title: "Missed Call Rescue",
        description: "Instantly text back missed calls to capture the lead before they call the shop down the street.",
    },
    {
        icon: Shield,
        title: "Dispute Protection",
        description: "Searchable transcripts and audio logs to win 'he-said, she-said' arguments instantly.",
    },
    {
        icon: CalendarCheck,
        title: "Smart Waitlist",
        description: "Auto-fill cancelled slots by texting your waitlist. Keep your bays full.",
    },
]

export function FeaturesGrid() {
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
        <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <p className="text-sm font-medium text-terracotta tracking-wider uppercase mb-4">
                        THE SOLUTION
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Everything Your Front Desk Needs.
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Six powerful tools that work together to automate your customer service,
                        train your team, and protect your reputation.
                    </p>
                </div>

                {/* Features Grid - 2x3 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`group bg-sage/20 hover:bg-sage/40 rounded-2xl p-6 lg:p-8 transition-all duration-700 card-hover ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-terracotta/10 group-hover:bg-terracotta/20 flex items-center justify-center mb-4 transition-all duration-300">
                                <feature.icon className="w-6 h-6 text-terracotta" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-terracotta transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
