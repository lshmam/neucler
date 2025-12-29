"use client"

import { Inbox, BookOpen, BarChart3, PhoneMissed, Shield, CalendarCheck } from "lucide-react"

const features = [
    {
        icon: Inbox,
        title: "Unified Support Inbox",
        description: "Consolidate SMS, Email, and Calls. Prioritize urgent inquiries over routine status checks.",
    },
    {
        icon: BookOpen,
        title: "Automated SOP Playbook",
        description: "Turn your tribal knowledge into a searchable digital brain with your own pricing rules.",
    },
    {
        icon: BarChart3,
        title: "Post-Call Performance Scoring",
        description: "Every call is graded on Speed, Knowledge, and Closing ability.",
    },
    {
        icon: PhoneMissed,
        title: "Missed Call Rescue",
        description: "Instantly text back missed calls to capture the lead before they go elsewhere.",
    },
    {
        icon: Shield,
        title: "Dispute Protection",
        description: "Searchable transcripts and audio logs to resolve disputes instantly.",
    },
    {
        icon: CalendarCheck,
        title: "Smart Waitlist",
        description: "Auto-fill cancelled slots by texting your waitlist. Keep your schedule full.",
    },
]

export function FeaturesGrid() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
                        Everything Your Team Needs
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Six powerful tools that work together to automate your customer service and improve results.
                    </p>
                </div>

                {/* Features Grid - 2x3 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-gradient-to-br from-purple-100/40 to-purple-200/30 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:from-purple-100/60 hover:to-purple-200/50"
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center mb-5">
                                <feature.icon className="w-5 h-5 text-purple-600" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-medium text-foreground mb-2">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

