"use client"

import { Calendar, Clock, MessageSquare } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { icon: Calendar, label: "APPOINTMENTS BOOKED", value: 500, suffix: "+" },
  { icon: Clock, label: "HOURS SAVED", value: 800, suffix: "+" },
  { icon: MessageSquare, label: "AFTER-HOURS MESSAGES", value: 100000, suffix: "+" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  const formatNumber = (num: number) => {
    if (num >= 100000) return `${Math.floor(num / 1000)}K`
    return num.toLocaleString()
  }

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {formatNumber(count)}
      {suffix}
    </motion.span>
  )
}

function AnimatedMainNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {count}
      {suffix}
    </motion.span>
  )
}

export function SolutionsStats() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Neucler&apos;s AI in Action</p>
        <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-2">
          <AnimatedMainNumber value={60} suffix="+" />
        </h2>
        <p className="text-xl text-muted-foreground mb-2">AI Employees deployed</p>
        <p className="text-sm text-muted-foreground italic mb-12">Based on a survey of 45 AI Employee users</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 text-muted-foreground mx-auto mb-3" strokeWidth={1.5} />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
