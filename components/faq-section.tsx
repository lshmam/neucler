"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
    {
        question: "Does this replace my Service Advisor?",
        answer: "No, it makes them superhuman. Neucler handles the busy work—status checks, appointment confirmations, missed call follow-ups—so your Service Advisors can focus on what they do best: selling repairs and building relationships with customers.",
    },
    {
        question: "Do I need to change my phone number?",
        answer: "No, we integrate with your existing phone line. We use Twilio to seamlessly connect to your current business number, so your customers won't notice any change—except faster responses.",
    },
    {
        question: "Is it complicated to set up?",
        answer: "We do it for you. During onboarding, our team builds your SOP database by ingesting your past invoices, pricing sheets, and policies. You'll be up and running in less than a week, with zero disruption to your operations.",
    },
    {
        question: "How does the AI learn my shop's specific procedures?",
        answer: "We ingest your historical data—invoices, service menus, pricing rules, and any documentation you provide. The AI uses this to answer questions accurately with *your* information, not generic responses.",
    },
    {
        question: "What if a customer needs to speak to a real person?",
        answer: "The AI knows when to escalate. For complex issues, warranty disputes, or when a customer explicitly requests it, calls are seamlessly transferred to your team with full context of the conversation.",
    },
]

export function FAQSection() {
    const [isVisible, setIsVisible] = useState(false)
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-20 bg-background overflow-hidden" id="faq">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta px-4 py-2 rounded-full mb-6">
                        <HelpCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">Frequently Asked Questions</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Got Questions?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Here&apos;s what auto shop owners ask us most.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border-b border-border transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full py-6 text-left group"
                            >
                                <span className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? "text-terracotta" : "text-foreground group-hover:text-terracotta"
                                    }`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
