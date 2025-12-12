"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "What is Neucler's AI Employee?",
    answer:
      "Neucler's AI Employee is an advanced AI-powered assistant that handles customer interactions, lead conversion, and business operations 24/7. It understands your business context and can respond to inquiries, schedule appointments, and drive revenue automatically.",
  },
  {
    question: "Why is Neucler's AI Employee the best on the market?",
    answer:
      "Our patent-pending AI architecture is built specifically for local businesses, with deep integration into your existing systems and the ability to learn your specific business context for more accurate and personalized responses.",
  },
  {
    question: "Who is Neucler's AI Employee for?",
    answer:
      "Neucler's AI Employee is designed for local businesses of all sizes, including automotive dealerships, home services, healthcare providers, retail stores, and professional services firms.",
  },
  {
    question: "What does Neucler's AI Employee do?",
    answer:
      "The AI Employee handles lead capture, customer inquiries, appointment scheduling, review management, and follow-up communications. It works 24/7 to ensure no lead is missed.",
  },
  {
    question: "What are the benefits of using an AI Employee?",
    answer:
      "Benefits include 24/7 availability, faster response times, increased lead conversion rates, reduced operational costs, and the ability to scale customer service without adding headcount.",
  },
  {
    question: "How do I customize Neucler's AI Employee to my needs?",
    answer:
      "You can customize the AI Employee through our intuitive dashboard, setting up custom responses, workflows, and integrations with your existing tools.",
  },
  {
    question: "How much does Neucler's AI Employee cost?",
    answer:
      "Pricing varies based on your business needs and the plan you choose. We offer Core, Pro, and Signature tiers. Contact our sales team for a personalized quote.",
  },
  {
    question: "What is the difference between an AI Chatbot and an AI Employee?",
    answer:
      "While chatbots typically provide scripted responses, an AI Employee understands context, learns from interactions, integrates with your systems, and handles complex tasks like scheduling and lead qualification.",
  },
]

export function SolutionsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full text-left group"
              >
                <span className="text-terracotta font-medium pr-4">{faq.question}</span>
                <Plus
                  className={`w-5 h-5 text-terracotta flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed pr-10">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
