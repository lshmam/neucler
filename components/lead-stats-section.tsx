"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
    end: number
    duration?: number
    suffix?: string
}

function AnimatedCounter({ end, duration = 2000, suffix = "%" }: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    let start = 0
                    const increment = end / (duration / 16)
                    const timer = setInterval(() => {
                        start += increment
                        if (start >= end) {
                            setCount(end)
                            clearInterval(timer)
                        } else {
                            setCount(Math.floor(start))
                        }
                    }, 16)
                    return () => clearInterval(timer)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [end, duration, hasAnimated])

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    )
}

const stats = [
    {
        value: 80,
        description: "of leads require 5 follow ups before closing"
    },
    {
        value: 48,
        description: "of sales teams never follow up after the first contact"
    },
    {
        value: 70,
        description: "of leads are lost due to poor nurturing"
    }
]

export function LeadStatsSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
                        You're paying for leads that never convert
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Inbound calls are your most valuable leads, but many are mishandled, under followed, or forgotten entirely.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-purple-200/80 to-purple-300/60 rounded-2xl p-6 md:p-8"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 items-center">
                                <div className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground md:mb-4">
                                    <AnimatedCounter end={stat.value} />
                                </div>
                                <p className="text-base md:text-lg text-foreground/80">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Text */}
                <div className="text-center">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground">
                        CRMs track contacts They don't explain conversations
                    </p>
                </div>
            </div>
        </section>
    )
}
