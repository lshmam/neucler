"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Magnet, Heart, CheckCircle2 } from "lucide-react";
import { AppointmentShowcase } from "./AppointmentShowcase"; // Ensure this path is correct

// --- UPDATED DATA STRUCTURE ---
// Now includes a `visualType` to handle components vs. videos.
const servicesData = [
  {
    id: "agent",
    title: "AI Website Agent",
    icon: <Bot className="h-5 w-5" />,
    headline: "Convert Visitors Into Appointments, 24/7",
    description:
      "Our AI agent ensures you never miss a lead again. It engages every website visitor, answers their questions intelligently, and books them directly into your calendar.",
    stats: [
      "Capture 30%+ more leads from your current traffic",
      "Answer 80% of common questions instantly",
      "Engage 100% of leads before they go cold",
    ],
    visualType: "component",
    visualContent: <AppointmentShowcase />, // The actual React component
  },
  {
    id: "marketing",
    title: "Organic Marketing",
    icon: <Magnet className="h-5 w-5" />,
    headline: "Attract Customers Actively Looking For You",
    description:
      "Our AI-powered content strategy positions you as a market leader on Google. We fuel your funnel with high-intent organic traffic from customers who are ready to buy.",
    stats: [
      "A 14.6% close rate for high-intent SEO leads",
      "3x more leads than expensive paid advertising",
      "Build a long-term asset that generates free traffic",
    ],
    visualType: "video",
    // IMPORTANT: Path to a TRANSPARENT video in your /public folder
    visualContent: "/smm-neucler.mp4",
  },
  {
    id: "retention",
    title: "Customer Retention",
    icon: <Heart className="h-5 w-5" />,
    headline: "Turn One-Time Customers Into Repeat Business",
    description:
      "Our automated retention suite generates loyalty and brings customers back for more. We turn your happy clients into your most powerful marketing channel.",
    stats: [
      "A $42 return for every $1 spent on email marketing",
      "Increase profits by 25-95% with a 5% lift in retention",
      "67% more spending from loyal, repeat customers",
    ],
    visualType: "video",
    // IMPORTANT: Path to a TRANSPARENT video in your /public folder
    visualContent: "/loyalty-neucler.mp4",
  },
];

export const FeaturesShowcase2 = () => {
  const [activeTab, setActiveTab] = useState<string>(servicesData[0].id);
  const activeService = servicesData.find((s) => s.id === activeTab);

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-balance text-white md:text-5xl lg:tracking-tight">
            An End-to-End System for Growth
          </h2>
          <p className="text-white/80 mx-auto mt-4 max-w-2xl text-lg text-balance">
            We automate every stage of your customer journey, from first click
            to repeat business.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 min-h-[500px]">
          {/* LEFT COLUMN: Vertical Tabs */}
          <div className="flex flex-row md:flex-col gap-4 md:w-1/3">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className="relative flex w-full items-center rounded-xl p-4 text-left text-lg font-semibold transition-colors"
              >
                {activeTab === service.id && (
                  <motion.div
                    layoutId="serviceHighlight"
                    className="absolute inset-0 rounded-xl border border-white/20 bg-white/10"
                  />
                )}
                <span
                  className={`relative z-10 flex items-center transition-colors ${activeTab === service.id ? "text-white" : "text-white/60 hover:text-white"}`}
                >
                  {service.icon}
                  <span className="ml-3">{service.title}</span>
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT COLUMN: Content & Visual Pane */}
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {activeService && (
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">
                        {activeService.headline}
                      </h3>
                      <p className="mt-2 text-white/80">
                        {activeService.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {activeService.stats.map((stat, index) => (
                          <li
                            key={index}
                            className="flex items-center text-white"
                          >
                            <CheckCircle2 className="h-5 w-5 mr-3 flex-shrink-0 text-green-400" />
                            <span>{stat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual Showcase */}
                    <div className="mt-8 lg:mt-0 lg:w-2/5">
                      <div className="relative h-96 w-full rounded-3xl border border-white/20 bg-black/20 p-2 shadow-2xl backdrop-blur-lg">
                        {activeService.visualType === "video" ? (
                          <video
                            key={activeService.visualContent as string} // Add key to force re-render
                            src={activeService.visualContent as string}
                            className="h-full w-full rounded-2xl object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : (
                          <div className="h-full w-full scale-[0.8] origin-top-left transform-gpu overflow-hidden rounded-2xl">
                            {activeService.visualContent as React.ReactNode}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
