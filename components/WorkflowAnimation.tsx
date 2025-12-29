"use client"

import { useEffect, useState } from "react"
import { Phone, PhoneMissed, CalendarCheck, MessageSquare, UserCheck, ArrowRight } from "lucide-react"

export default function WorkflowAnimation() {
    const [currentStep, setCurrentStep] = useState(0)

    const steps = [
        {
            icon: PhoneMissed,
            label: "Missed Call",
            description: "Call comes in",
            color: "text-red-500",
            bgColor: "bg-red-50",
            borderColor: "border-red-200",
        },
        {
            icon: MessageSquare,
            label: "Neural Agent",
            description: "AI scores lead",
            color: "text-terracotta",
            bgColor: "bg-terracotta/10",
            borderColor: "border-terracotta/30",
        },
        {
            icon: UserCheck,
            label: "Follow-up",
            description: "Automated outreach",
            color: "text-blue-500",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
        },
        {
            icon: CalendarCheck,
            label: "Booked",
            description: "Meeting scheduled",
            color: "text-green-500",
            bgColor: "bg-green-50",
            borderColor: "border-green-200",
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % (steps.length + 1))
        }, 2000)

        return () => clearInterval(interval)
    }, [steps.length])

    return (
        <div className="relative w-full max-w-md mx-auto">
            {/* Main container with subtle glow */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-border shadow-xl p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta/10">
                        <Phone className="w-5 h-5 text-terracotta" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Lead Automation</h3>
                        <p className="text-sm text-muted-foreground">Real-time workflow</p>
                    </div>
                </div>

                {/* Workflow Steps */}
                <div className="space-y-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        const isActive = currentStep === index
                        const isCompleted = currentStep > index
                        const isPending = currentStep < index

                        return (
                            <div key={index} className="relative">
                                {/* Connection line to next step */}
                                {index < steps.length - 1 && (
                                    <div className="absolute left-6 top-12 w-0.5 h-6 -translate-x-1/2">
                                        <div
                                            className={`h-full transition-all duration-500 ${isCompleted
                                                    ? "bg-terracotta"
                                                    : isActive
                                                        ? "bg-gradient-to-b from-terracotta to-muted"
                                                        : "bg-muted"
                                                }`}
                                        />
                                    </div>
                                )}

                                {/* Step card */}
                                <div
                                    className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-500 ${isActive
                                            ? `${step.bgColor} ${step.borderColor} border-2 shadow-md scale-[1.02]`
                                            : isCompleted
                                                ? "bg-muted/30 border border-border"
                                                : "bg-muted/20 border border-transparent"
                                        }`}
                                >
                                    {/* Icon container */}
                                    <div
                                        className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${isActive
                                                ? `${step.bgColor} ${step.color}`
                                                : isCompleted
                                                    ? "bg-green-100 text-green-500"
                                                    : "bg-muted text-muted-foreground"
                                            }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        {isActive && (
                                            <span className="absolute inset-0 rounded-full animate-ping bg-current opacity-20" />
                                        )}
                                    </div>

                                    {/* Text content */}
                                    <div className="flex-1">
                                        <p
                                            className={`font-medium transition-colors duration-300 ${isActive || isCompleted ? "text-foreground" : "text-muted-foreground"
                                                }`}
                                        >
                                            {step.label}
                                        </p>
                                        <p
                                            className={`text-sm transition-colors duration-300 ${isActive ? step.color : "text-muted-foreground"
                                                }`}
                                        >
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Status indicator */}
                                    <div className="flex items-center">
                                        {isCompleted && (
                                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        )}
                                        {isActive && (
                                            <div className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Success message */}
                <div
                    className={`mt-6 pt-4 border-t border-border transition-all duration-500 ${currentStep === steps.length ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        }`}
                >
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
                            <CalendarCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-medium text-green-800">Meeting Booked!</p>
                            <p className="text-sm text-green-600">Lead converted successfully</p>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-terracotta/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-sage/20 rounded-full blur-2xl" />
            </div>
        </div>
    )
}
