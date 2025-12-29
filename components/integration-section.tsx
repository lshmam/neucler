"use client"

import { useEffect, useRef, useState } from "react"

// Integration icons with orbital animation
function IntegrationOrbit() {
    const integrations = [
        { name: "CDK Global", icon: "📊", position: "top-left" },
        { name: "Zapier", icon: "⚡", position: "top" },
        { name: "Slack", icon: "💬", position: "top-right" },
        { name: "HubSpot", icon: "🔶", position: "left" },
        { name: "CRM", icon: "📁", position: "bottom-left" },
        { name: "Reynolds", icon: "📂", position: "right" },
        { name: "Twilio", icon: "📱", position: "bottom" },
    ]

    return (
        <div className="relative w-full max-w-md h-64 mx-auto">
            {/* Center brain/core icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 z-10">
                <span className="text-3xl">🧠</span>
            </div>

            {/* Orbiting integrations */}
            {integrations.map((integration, index) => {
                const angle = (index * 360) / integrations.length
                const radius = 100
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                return (
                    <div
                        key={integration.name}
                        className="absolute top-1/2 left-1/2 animate-pulse"
                        style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                            animationDelay: `${index * 0.2}s`,
                        }}
                    >
                        <div className="bg-white rounded-xl p-3 shadow-md border border-gray-100 flex flex-col items-center gap-1 hover:scale-110 transition-transform">
                            <span className="text-xl">{integration.icon}</span>
                            <span className="text-[10px] text-gray-500 whitespace-nowrap">{integration.name}</span>
                        </div>
                    </div>
                )
            })}

            {/* Connecting lines (subtle) */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <circle
                    cx="50%"
                    cy="50%"
                    r="100"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="animate-spin"
                    style={{ animationDuration: "20s" }}
                />
            </svg>
        </div>
    )
}

// Google Maps Business Card
function GoogleMapsCard() {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div ref={ref} className="relative">
            {/* Map grid background */}
            <div className="bg-gray-100 rounded-2xl p-4 md:p-8">
                <div
                    className="grid grid-cols-6 gap-px bg-gray-200 rounded-xl overflow-hidden"
                    style={{ aspectRatio: "4/3" }}
                >
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className="bg-gray-50" />
                    ))}
                </div>

                {/* Business card overlay */}
                <div
                    className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white rounded-xl shadow-xl p-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    {/* Business icon */}
                    <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🏢</span>
                        </div>
                    </div>

                    {/* Business name & rating */}
                    <h4 className="text-lg font-semibold text-center text-gray-900">Lawson Automotive Group</h4>
                    <div className="flex items-center justify-center gap-1 mt-1 mb-3">
                        <span className="text-sm font-medium text-gray-700">4.8</span>
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-sm text-gray-500">(128 reviews)</span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex justify-center gap-2 mb-4">
                        {["Website", "Directions", "Save", "Call"].map((action) => (
                            <button
                                key={action}
                                className="px-3 py-1.5 text-xs font-medium text-blue-600 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
                            >
                                {action}
                            </button>
                        ))}
                    </div>

                    {/* Business details */}
                    <div className="border-t border-gray-100 pt-3 space-y-2">
                        <p className="text-xs font-medium text-gray-600">Business Profile</p>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-blue-500">📍</span>
                            1234 Main St, Metropolis
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-green-500">📞</span>
                            (555) 999-0000
                            <span className="text-gray-400 text-xs">✏️</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-gray-400">🕐</span>
                            <span className="text-green-600">Open</span> · Closes 6PM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function IntegrationSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* 2 Column Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Integration Stack Section */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="text-center lg:text-left mb-8">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-4">
                                Designed to work with your existing stack
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground">
                                We sit on top of your existing CRM, scheduling and phone system
                            </p>
                        </div>

                        {/* Integration orbit with purple gradient background */}
                        <div className="bg-gradient-to-br from-purple-100/60 to-purple-200/40 rounded-3xl p-6 md:p-8">
                            <IntegrationOrbit />
                        </div>
                    </div>

                    {/* Google Maps Setup Section */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="text-center lg:text-left mb-8">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-4">
                                Easy setup, just change your phone number on Google Maps
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground">
                                Don't worry, all calls are still forwarded to your business phone
                            </p>
                        </div>

                        {/* Google Maps mockup */}
                        <GoogleMapsCard />
                    </div>
                </div>
            </div>
        </section>
    )
}
