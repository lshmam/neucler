"use client"

import Image from 'next/image'
import { Inbox, BookOpen, BarChart3, PhoneMissed, Shield, CalendarCheck, LucideIcon } from 'lucide-react'
import { BlurReveal } from "@/components/BlurReveal"

interface FeatureCardData {
    title: string
    description: string
    label: string
    image?: string
}

const features: FeatureCardData[] = [
    {
        title: "Post-Call Performance Scoring",
        description: "Every call is graded on 17+ different metrics such as speed, knowledge, closing ability.",
        label: "Analytics",
        image: "/call-center-1.jpg"
    },
    {
        title: "Unified Support Inbox",
        description: "Consolidate SMS, Email, and Calls. Prioritize urgent inquiries over routine status checks.",
        label: "Communication"
    },
    {
        title: "Automated SOP Playbook",
        description: "Turn your tribal knowledge into a searchable digital brain with your own pricing rules.",
        label: "Knowledge"
    },
    {
        title: "Missed Call Rescue",
        description: "Instantly text back missed calls to capture the lead before they go elsewhere.",
        label: "Recovery",
        image: "/call-center-2.jpg"
    },
    {
        title: "Dispute Protection",
        description: "Searchable transcripts and audio logs to resolve disputes instantly.",
        label: "Security"
    },
    {
        title: "Smart Waitlist",
        description: "Auto-fill cancelled slots by texting your waitlist. Keep your schedule full.",
        label: "Scheduling"
    }
]

export function FeaturesGrid() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16">
                {/* Section Label */}
                <div className="mb-6">
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">
                        [02] Features
                    </span>
                </div>

                {/* Section Header - Left aligned */}
                <div className="text-left mb-12 md:mb-16 max-w-2xl">
                    <BlurReveal delay={0} duration={0.8} yOffset={20}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight tracking-tight">
                            Everything Your Team Needs
                        </h2>
                    </BlurReveal>
                    <BlurReveal delay={0.15} duration={0.8} yOffset={20}>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Six powerful tools that work together to automate your customer service and improve results.
                        </p>
                    </BlurReveal>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
                    {features.map((feature, index) => {
                        // Bento layout - items with images are larger
                        const isLarge = !!feature.image
                        const gridClass = isLarge
                            ? 'lg:col-span-2 lg:row-span-2'
                            : ''

                        return (
                            <div
                                key={index}
                                className={`
                                    group ${gridClass}
                                    relative flex flex-col justify-between overflow-hidden
                                    ${isLarge ? 'min-h-[300px] lg:min-h-[400px]' : 'min-h-[200px]'}
                                    p-6 rounded-2xl
                                    bg-neutral-100
                                    border-2 border-slate-200
                                    transition-all duration-300 ease-out
                                    hover:scale-[1.02]
                                    hover:bg-neutral-50
                                `}
                            >
                                {/* Background Image for large cards */}
                                {feature.image && (
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover opacity-100 group-hover:opacity-100 transition-opacity"
                                        />
                                        {/* Dark gradient starting from halfway down for text contrast */}
                                        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    </div>
                                )}

                                {/* Header */}
                                <div className="flex items-center justify-between mb-4 relative z-10">
                                    <span className={`text-xs font-medium uppercase tracking-wider ${feature.image ? 'text-neutral-300' : 'text-neutral-500'}`}>
                                        {feature.label}
                                    </span>

                                </div>

                                {/* Content */}
                                <div className="mt-auto relative z-10">
                                    <h3 className={`font-medium mb-2 ${isLarge ? 'text-xl lg:text-2xl' : 'text-lg'} ${feature.image ? 'text-white' : 'text-black'}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`leading-relaxed ${isLarge ? 'text-base' : 'text-sm'} ${feature.image ? 'text-neutral-200' : 'text-neutral-600'}`}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
