"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Animated Audio Waveform Component
function AudioWaveform() {
    const heights = [25, 40, 30, 45, 35]
    return (
        <div className="flex items-center justify-center gap-1 h-12">
            {heights.map((height, i) => (
                <motion.div
                    key={i}
                    className="w-1.5 bg-foreground/70 rounded-full"
                    animate={{ height: [height * 0.5, height, height * 0.5] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                />
            ))}
        </div>
    )
}

// Animated Priority Queue Component
function PriorityQueue() {
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => setActiveIndex(prev => (prev + 1) % 2), 2000)
        return () => clearInterval(timer)
    }, [])
    const leads = [
        { name: "Mike Ross", subtitle: "Score: 85", active: activeIndex === 0 },
        { name: "Harvey Specter", subtitle: "Called 10 min ago", active: activeIndex === 1 }
    ]
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Priority Queue</p>
            <div className="space-y-2">
                {leads.map((lead, i) => (
                    <motion.div
                        key={i}
                        className={`flex items-center justify-between p-3 rounded-lg ${lead.active ? 'bg-purple-50' : 'bg-gray-50'}`}
                        animate={{ scale: lead.active ? 1.02 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div>
                            <p className="font-medium text-sm text-foreground">{lead.name}</p>
                            <p className="text-xs text-gray-500">{lead.subtitle}</p>
                        </div>
                        <motion.div
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${lead.active ? 'bg-purple-500' : 'bg-gray-300'}`}
                            animate={{ backgroundColor: lead.active ? '#8b5cf6' : '#d1d5db' }}
                        >
                            <span className="text-white text-xs">→</span>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Animated Chat Component
function ChatAnimation() {
    const [visibleMessages, setVisibleMessages] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => setVisibleMessages(prev => (prev + 1) % 5), 1500)
        return () => clearInterval(timer)
    }, [])
    const messages = [
        { text: "Hi! Still interested in the quote?", isAgent: true },
        { text: "Can't talk, busy", isAgent: false },
        { text: "(24h later) Just checking in?", isAgent: true },
        { text: "Yes, let's book 2pm", isAgent: false }
    ]
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
                <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs font-medium text-gray-600">Neural Agent</span>
            </div>
            <div className="space-y-2">
                {messages.map((msg, i) => (
                    <motion.div
                        key={i}
                        className={msg.isAgent ? '' : 'flex justify-end'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: i <= visibleMessages ? 1 : 0, y: i <= visibleMessages ? 0 : 10 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className={`px-3 py-2 rounded-lg text-xs max-w-[80%] ${msg.isAgent ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-700'}`}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Animated Chart Component
function ConversionChart() {
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 mb-2">Conversion Rate</p>
            <div className="flex items-end justify-between">
                <svg className="w-24 h-12" viewBox="0 0 100 40">
                    <motion.path
                        d="M 0 35 Q 25 30 50 25 T 100 10"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                    />
                </svg>
                <motion.span
                    className="text-3xl font-light text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    24%
                </motion.span>
            </div>
        </div>
    )
}

// Coaching Moment Component
function CoachingMoment() {
    const [points, setPoints] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => setPoints(prev => prev === 0 ? 10 : 0), 2000)
        return () => clearInterval(timer)
    }, [])
    return (
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Coaching Moment</span>
                <motion.span
                    className="text-xs font-medium"
                    animate={{
                        color: points > 0 ? '#22c55e' : '#9ca3af',
                        scale: points > 0 ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                >
                    +{points} pts
                </motion.span>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-xs text-purple-800 italic">"I totally understand that pricing is a concern. However, our service includes a lifetime warranty."</p>
                <div className="mt-2 flex justify-end">
                    <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">★ Value Building</span>
                </div>
            </div>
        </div>
    )
}

const features = [
    {
        title: "Capture & Understand",
        description: "We analyze inbound calls to understand intent, urgency and buying signals",
        animation: "waveform",
        badges: ["✓ Buying Signal", "⚡ Urgent"]
    },
    {
        title: "Score & Prioritize",
        description: "Every caller is scored and categorized so your team knows exactly who to follow up with first",
        animation: "queue"
    },
    {
        title: "Automate Follow Up",
        description: "Personalized, intent aware follow ups continue until the lead books or clearly declines",
        animation: "chat"
    },
    {
        title: "Improve Over Time",
        description: "We show where conversations break down and which behaviours actually drive bookings",
        animation: "chart"
    },
    {
        title: "Train your front desk",
        description: "Turn Neucler insights into call coaching moments so your front desk understand how to close and convert",
        animation: "coaching"
    }
]

export function FeaturesShowcase2() {
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const isSnapping = useRef(false)
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const snapToClosest = () => {
            if (!containerRef.current || isSnapping.current) return

            const items = containerRef.current.querySelectorAll('[data-feature-index]')
            const viewportCenter = window.innerHeight / 2

            let closestItem: HTMLElement | null = null
            let closestDistance = Infinity
            let closestIndex = 0

            const itemElements = Array.from(items) as HTMLElement[]
            for (let index = 0; index < itemElements.length; index++) {
                const item = itemElements[index]
                const rect = item.getBoundingClientRect()
                const itemCenter = rect.top + rect.height / 2
                const distance = Math.abs(itemCenter - viewportCenter)

                if (distance < closestDistance) {
                    closestDistance = distance
                    closestItem = item
                    closestIndex = index
                }
            }

            setActiveIndex(closestIndex)

            // Only snap if close enough but not already centered
            if (closestItem && closestDistance > 50 && closestDistance < 300) {
                isSnapping.current = true
                closestItem.scrollIntoView({ behavior: 'smooth', block: 'center' })
                setTimeout(() => { isSnapping.current = false }, 500)
            }
        }

        const handleScroll = () => {
            if (isSnapping.current) return

            // Clear existing timeout
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current)
            }

            // Update active index immediately
            if (containerRef.current) {
                const items = containerRef.current.querySelectorAll('[data-feature-index]')
                const viewportCenter = window.innerHeight / 2
                let closestIndex = 0
                let closestDistance = Infinity

                items.forEach((item, index) => {
                    const rect = item.getBoundingClientRect()
                    const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter)
                    if (distance < closestDistance) {
                        closestDistance = distance
                        closestIndex = index
                    }
                })
                setActiveIndex(closestIndex)
            }

            // Snap after scroll stops
            scrollTimeout.current = setTimeout(snapToClosest, 150)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
        }
    }, [])

    const activeFeature = features[activeIndex]

    const renderAnimation = (type: string, badges?: string[]) => {
        switch (type) {
            case "waveform":
                return (
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <AudioWaveform />
                        {badges && (
                            <div className="flex gap-2 mt-4 justify-center">
                                {badges.map((badge, i) => (
                                    <span key={i} className={`text-xs px-3 py-1 rounded-full ${i === 0 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                )
            case "queue": return <PriorityQueue />
            case "chat": return <ChatAnimation />
            case "chart": return <ConversionChart />
            case "coaching": return <CoachingMoment />
            default: return null
        }
    }

    return (
        <section className="py-10 md:py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
                        How it works
                    </h2>
                </div>

                {/* Scroll-driven layout */}
                <div ref={containerRef} className="lg:grid lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto">
                    {/* Left side - Text content with step indicators */}
                    <div className="space-y-4 lg:space-y-32">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                data-feature-index={index}
                                className="lg:min-h-[60vh] flex items-center"
                            >
                                {/* Mobile: Show full card */}
                                <div className="lg:hidden w-full">
                                    <div className="bg-gradient-to-br from-purple-100/60 to-purple-200/40 rounded-3xl p-6">
                                        <div className="space-y-4 text-center">
                                            <h3 className="text-xl md:text-2xl font-light text-foreground">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-foreground/70">
                                                {feature.description}
                                            </p>
                                            <div className="flex justify-center">
                                                <div className="w-full max-w-xs">
                                                    {renderAnimation(feature.animation, feature.badges)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop: Step indicator and text */}
                                <motion.div
                                    className="hidden lg:flex items-start gap-6 w-full"
                                    animate={{ opacity: activeIndex === index ? 1 : 0.4 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <motion.div
                                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                                        animate={{
                                            backgroundColor: activeIndex === index ? '#8b5cf6' : '#f3e8ff',
                                            scale: activeIndex === index ? 1.1 : 1
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <span className={`text-lg font-medium ${activeIndex === index ? 'text-white' : 'text-purple-500'}`}>
                                            {index + 1}
                                        </span>
                                    </motion.div>
                                    <div>
                                        <motion.h4
                                            className="text-xl md:text-2xl font-light text-foreground mb-2"
                                            animate={{ y: activeIndex === index ? 0 : 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {feature.title}
                                        </motion.h4>
                                        <p className="text-base text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Right side - Sticky animated card */}
                    <div className="hidden lg:block">
                        <div className="sticky top-32">
                            <div className="bg-gradient-to-br from-purple-100/60 to-purple-200/40 rounded-3xl p-8 min-h-[350px] flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        className="w-full max-w-sm"
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        {renderAnimation(activeFeature.animation, activeFeature.badges)}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

