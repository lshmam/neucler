"use client"

import { useEffect, useRef, useState } from "react"

// Animated Audio Waveform Component
function AudioWaveform() {
    // Fixed heights to avoid hydration mismatch (no Math.random)
    const heights = [25, 40, 30, 45, 35]

    return (
        <div className="flex items-center justify-center gap-1 h-12">
            {heights.map((height, i) => (
                <div
                    key={i}
                    className="w-1.5 bg-foreground/70 rounded-full animate-pulse"
                    style={{
                        height: `${height}px`,
                        animationDelay: `${i * 0.15}s`,
                        animationDuration: '0.8s'
                    }}
                />
            ))}
        </div>
    )
}

// Animated Priority Queue Component
function PriorityQueue() {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % 2)
        }, 2000)
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
                    <div
                        key={i}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all duration-500 ${lead.active ? 'bg-purple-50 scale-[1.02]' : 'bg-gray-50'}`}
                    >
                        <div>
                            <p className="font-medium text-sm text-foreground">{lead.name}</p>
                            <p className="text-xs text-gray-500">{lead.subtitle}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${lead.active ? 'bg-purple-500' : 'bg-gray-300'}`}>
                            <span className="text-white text-xs">→</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Animated Chat Component
function ChatAnimation() {
    const [visibleMessages, setVisibleMessages] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleMessages(prev => (prev + 1) % 5)
        }, 1500)
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
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-gray-600">Neural Agent</span>
            </div>
            <div className="space-y-2">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`transition-all duration-500 ${i <= visibleMessages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} ${msg.isAgent ? '' : 'flex justify-end'}`}
                    >
                        <div className={`px-3 py-2 rounded-lg text-xs max-w-[80%] ${msg.isAgent ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-700'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Animated Chart Component
function ConversionChart() {
    const [percentage, setPercentage] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    let start = 0
                    const timer = setInterval(() => {
                        start += 1
                        if (start >= 24) {
                            setPercentage(24)
                            clearInterval(timer)
                        } else {
                            setPercentage(start)
                        }
                    }, 50)
                }
            },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [hasAnimated])

    return (
        <div ref={ref} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-400 mb-2">Conversion Rate</p>
            <div className="flex items-end justify-between">
                <svg className="w-24 h-12" viewBox="0 0 100 40">
                    <path
                        d="M 0 35 Q 25 30 50 25 T 100 10"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        className="animate-pulse"
                    />
                </svg>
                <span className="text-3xl font-light text-foreground">{percentage}%</span>
            </div>
        </div>
    )
}

// Coaching Moment Component
function CoachingMoment() {
    const [points, setPoints] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setPoints(prev => prev === 0 ? 10 : 0)
        }, 2000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Coaching Moment</span>
                <span className={`text-xs font-medium transition-all duration-500 ${points > 0 ? 'text-green-500 scale-110' : 'text-gray-400'}`}>
                    +{points} pts
                </span>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-xs text-purple-800 italic">
                    "I totally understand that pricing is a concern. However, our service includes a lifetime warranty."
                </p>
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
        badges: ["✓ Buying Signal", "⚡ Urgent"],
        reverse: false
    },
    {
        title: "Score & Prioritize",
        description: "Every caller is scored and categorized so your team knows exactly who to follow up with first",
        animation: "queue",
        reverse: true
    },
    {
        title: "Automate Follow Up",
        description: "Personalized, intent aware follow ups continue until the lead books or clearly declines",
        animation: "chat",
        reverse: false
    },
    {
        title: "Improve Over Time",
        description: "We show where conversations break down and which behaviours actually drive bookings, so performance improves month over month",
        animation: "chart",
        reverse: true
    },
    {
        title: "Train your front desk",
        description: "Turn Neucler insights into call coaching moments so your front desk understand how to close and convert",
        animation: "coaching",
        reverse: false
    }
]

export function FeaturesShowcase() {
    // Define grid positions for bento layout
    const gridClasses = [
        "md:col-span-2", // First item spans full width
        "md:col-span-1", // Second item
        "md:col-span-1", // Third item
        "md:col-span-1", // Fourth item
        "md:col-span-1", // Fifth item
    ]

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
                        How it works
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br from-purple-100/60 to-purple-200/40 rounded-3xl p-6 md:p-8 ${gridClasses[index]}`}
                        >
                            <div className={`flex flex-col h-full ${index === 0 ? 'md:flex-row md:items-center md:gap-8' : 'gap-6'}`}>
                                {/* Text Content */}
                                <div className={`space-y-3 ${index === 0 ? 'md:flex-1 text-center md:text-left' : 'text-center'}`}>
                                    <h3 className={`font-light text-foreground ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-foreground/70 ${index === 0 ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Animation */}
                                <div className={`flex justify-center ${index === 0 ? 'md:flex-1' : ''}`}>
                                    <div className={`w-full ${index === 0 ? 'max-w-sm' : 'max-w-xs'}`}>
                                        {feature.animation === "waveform" && (
                                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                                <AudioWaveform />
                                                {feature.badges && (
                                                    <div className="flex gap-2 mt-4 justify-center">
                                                        {feature.badges.map((badge, i) => (
                                                            <span key={i} className={`text-xs px-3 py-1 rounded-full ${i === 0 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                                                                {badge}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {feature.animation === "queue" && <PriorityQueue />}
                                        {feature.animation === "chat" && <ChatAnimation />}
                                        {feature.animation === "chart" && <ConversionChart />}
                                        {feature.animation === "coaching" && <CoachingMoment />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
