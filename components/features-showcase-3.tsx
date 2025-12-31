"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BlurReveal } from "@/components/BlurReveal"

const STEP_DURATION = 5000 // 5 seconds per step

const features = [
    {
        id: 1,
        title: "Capture & Understand",
        description: "We analyze inbound calls to understand intent, urgency and buying signals. Every conversation is transcribed, scored, and categorized automatically.",
        visual: {
            items: [
                { icon: "📞", label: "Phone Calls", detail: "24 calls today" },
                { icon: "💬", label: "Intent Analysis", detail: "High buying signal" },
                { icon: "⚡", label: "Urgency Score", detail: "8/10 priority" },
            ]
        }
    },
    {
        id: 2,
        title: "Score & Prioritize",
        description: "Every caller is scored and categorized so your team knows exactly who to follow up with first. No more guessing which leads are hot.",
        visual: {
            items: [
                { icon: "🎯", label: "Lead Score", detail: "85/100 points" },
                { icon: "📊", label: "Priority Queue", detail: "12 hot leads" },
                { icon: "🏷️", label: "Categories", detail: "Service, Sales, Support" },
            ]
        }
    },
    {
        id: 3,
        title: "Automate Follow Up",
        description: "Personalized, intent-aware follow ups continue until the lead books or clearly declines. Never let a lead slip through the cracks again.",
        visual: {
            items: [
                { icon: "🤖", label: "Auto SMS", detail: "Sent in 2 mins" },
                { icon: "📧", label: "Email Sequences", detail: "3-touch campaign" },
                { icon: "📅", label: "Booking Links", detail: "Direct scheduling" },
            ]
        }
    },
    {
        id: 4,
        title: "Train Your Front Desk",
        description: "Turn insights into coaching moments so your front desk understands how to close and convert. Real examples from real calls.",
        visual: {
            items: [
                { icon: "🎓", label: "Coaching Cards", detail: "5 new insights" },
                { icon: "💡", label: "Best Practices", detail: "Top performer tips" },
                { icon: "📈", label: "Progress", detail: "+15% this week" },
            ]
        }
    },
    {
        id: 5,
        title: "Improve Over Time",
        description: "We show where conversations break down and which behaviors actually drive bookings. Data-driven optimization for your team.",
        visual: {
            items: [
                { icon: "📉", label: "Drop-off Points", detail: "3 identified" },
                { icon: "✅", label: "Winning Phrases", detail: "12 captured" },
                { icon: "🔄", label: "A/B Tests", detail: "2 running" },
            ]
        }
    }
]

export function FeaturesShowcase3() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const activeFeature = features[activeIndex]

    // Auto-advance through steps
    useEffect(() => {
        if (isPaused) return

        // Progress animation
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    return 0
                }
                return prev + (100 / (STEP_DURATION / 50))
            })
        }, 50)

        // Step advancement
        intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % features.length)
            setProgress(0)
        }, STEP_DURATION)

        return () => {
            clearInterval(progressInterval)
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [isPaused, activeIndex])

    const handleStepClick = (index: number) => {
        setActiveIndex(index)
        setProgress(0)
        // Briefly pause then resume auto-advance
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 500)
    }

    return (
        <section
            className="py-16 md:py-24 bg-background"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16">
                {/* Section Label */}
                <div className="mb-6">
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">
                        [01] How it works
                    </span>
                </div>

                {/* Header */}
                <div className="mb-12 md:mb-16 max-w-2xl">
                    <BlurReveal delay={0} duration={0.8} yOffset={20}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight tracking-tight">
                            Don't just track calls. Convert them.
                        </h2>
                    </BlurReveal>
                    <BlurReveal delay={0.15} duration={0.8} yOffset={20}>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Neucler turns every inbound call into actionable insights,
                            automating follow-up while building a complete picture of your leads journey.
                        </p>
                    </BlurReveal>
                </div>

                {/* Main Content - Split Layout */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Side - Accordion Steps */}
                    <div className="space-y-1">
                        {features.map((feature, index) => {
                            const isActive = activeIndex === index

                            return (
                                <div
                                    key={feature.id}
                                    className={`transition-colors duration-300 relative ${isActive
                                        ? "bg-purple-50/50"
                                        : ""
                                        }`}
                                >
                                    <button
                                        onClick={() => handleStepClick(index)}
                                        className="w-full text-left px-6 py-4"
                                    >
                                        <h3 className={`text-lg font-medium transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground"
                                            }`}>
                                            {index + 1}. {feature.title}
                                        </h3>
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                    {/* Mobile Visual Cards */}
                                                    <div className="lg:hidden mt-4 space-y-2">
                                                        {feature.visual.items.map((item, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: i * 0.1 }}
                                                                className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm border border-gray-100"
                                                            >
                                                                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-lg">
                                                                    {item.icon}
                                                                </div>
                                                                <div>
                                                                    <p className="font-medium text-foreground text-sm">{item.label}</p>
                                                                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                                                                </div>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                    {/* Progress Bar - top on mobile, bottom on desktop */}
                                    {isActive && (
                                        <div className="absolute top-0 lg:top-auto lg:bottom-0 left-0 right-0 h-1 bg-gray-200 overflow-hidden">
                                            <motion.div
                                                className="h-full bg-purple-500"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${progress}%` }}
                                                transition={{ duration: 0.05, ease: "linear" }}
                                            />
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                    {/* Right Side - Visual Content */}
                    <div className="hidden lg:flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Dotted grid background */}
                            <div className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage: `radial-gradient(circle, #9ca3af 1px, transparent 1px)`,
                                    backgroundSize: '20px 20px'
                                }}
                            />

                            {/* Active indicator dot */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
                                <motion.div
                                    className="w-3 h-3 bg-red-400 rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>

                            {/* Visual Cards */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4"
                                >
                                    {activeFeature.visual.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-xl">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="font-medium text-foreground">{item.label}</p>
                                                <p className="text-sm text-muted-foreground">{item.detail}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
