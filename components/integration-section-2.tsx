"use client"

import { Zap, Settings2, Rocket } from 'lucide-react'

export function IntegrationSection2() {
    const steps = [
        {
            icon: Zap,
            title: "Connect",
            description: "Link your existing phone number and CRM with one click."
        },
        {
            icon: Settings2,
            title: "Configure",
            description: "Upload your pricing and business rules for the AI to learn."
        },
        {
            icon: Rocket,
            title: "Go Live",
            description: "Turn it on and watch your AI handle calls 24/7."
        }
    ]

    return (
        <section className="py-24 bg-background border-t border-neutral-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
                        Plug and Play Setup
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Get started in minutes, not months. No complex coding required.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-[2px] bg-neutral-100 z-0">
                        <div className="absolute inset-0 bg-neutral-200 w-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-neutral-100 shadow-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-black/10 group-hover:scale-105 group-hover:shadow-md">
                                    <step.icon className="w-8 h-8 text-neutral-400 group-hover:text-black transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-medium text-foreground mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
