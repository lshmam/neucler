"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Magnet, Heart, CheckCircle2 } from "lucide-react";

// --- DATA STRUCTURE ---
// We define our data in an array of objects. This makes the component clean and easy to update.
const servicesData = [
  {
    id: "agent",
    title: "AI Website Agent",
    icon: <Bot className="w-5 h-5 mr-3" />,
    headline: "Convert Visitors Into Appointments, 24/7",
    description:
      "Our AI agent ensures you never miss a lead again. It engages every visitor, answers their questions, and books them directly into your calendar.",
    stats: [
      "30%+ Increase in Website Conversion Rates",
      "Answer 80% of Common Questions Instantly",
      "Engage 100% of Leads Before They Go Cold",
    ],
    visual: "https://placehold.co/600x400/0A2540/FFFFFF?text=Chatbot+UI", // Replace with your image/mockup URL
  },
  {
    id: "marketing",
    title: "Organic Marketing",
    icon: <Magnet className="w-5 h-5 mr-3" />,
    headline: "Attract Customers Actively Looking For You",
    description:
      "Our AI-powered content positions you as a market leader on Google. We fuel your funnel with high-intent organic traffic from customers who are ready to buy.",
    stats: [
      "14.6% Close Rate for High-Intent SEO Leads",
      "3x More Leads than Expensive Paid Ads",
      "Build a Long-Term Asset that Generates Free Traffic",
    ],
    visual: "https://placehold.co/600x400/005246/FFFFFF?text=Growth+Chart", // Replace with your image/mockup URL
  },
  {
    id: "retention",
    title: "Customer Retention",
    icon: <Heart className="w-5 h-5 mr-3" />,
    headline: "Turn One-Time Customers into Repeat Business",
    description:
      "Our automated retention suite generates loyalty and brings customers back. We turn your happy clients into your most powerful marketing channel.",
    stats: [
      "$42 Return for Every $1 Spent on Email",
      "Increase Profits by 25-95% with a 5% Lift in Retention",
      "67% More Spending from Loyal, Repeat Customers",
    ],
    visual: "https://placehold.co/600x400/322F3D/FFFFFF?text=Loyalty+Card", // Replace with your image/mockup URL
  },
];

export const ServicesShowcase = () => {
  // --- STATE MANAGEMENT ---
  // We use the 'id' of the service to track the active tab.
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  // Find the full service object that is currently active.
  const activeService = servicesData.find(
    (service) => service.id === activeTab
  );

  return (
    <div className="bg-white p-4 md:p-8 rounded-2xl max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          An End-to-End System for Growth
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Click a service to see how we automate every stage of your customer
          journey.
        </p>
      </div>

      {/* --- MAIN COMPONENT LAYOUT --- */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 min-h-[480px]">
        {/* LEFT COLUMN: Vertical Tabs */}
        <div className="flex flex-row md:flex-col gap-4 md:w-1/3">
          {servicesData.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`flex items-center text-left w-full p-4 rounded-lg text-lg font-bold transition-all duration-300 ease-in-out
                ${
                  activeTab === service.id
                    ? "bg-black text-white shadow-lg" // Active state
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200" // Inactive state
                }`}
            >
              {service.icon}
              {service.title}
            </button>
          ))}
        </div>

        {/* RIGHT COLUMN: Content Pane */}
        <div className="md:w-2/3">
          <AnimatePresence mode="wait">
            {/* The 'key' is crucial. It tells AnimatePresence that the component has changed. */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {activeService && (
                <div>
                  {/* Headline */}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {activeService.headline}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-gray-600">
                    {activeService.description}
                  </p>

                  {/* Stats / Benefits List */}
                  <ul className="mt-6 space-y-3">
                    {activeService.stats.map((stat, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-800"
                      >
                        <CheckCircle2 className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                        <span>{stat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Visual Mockup */}
                  <div className="mt-8">
                    <img
                      src={activeService.visual}
                      alt={`${activeService.title} visual representation`}
                      className="w-full h-auto rounded-lg shadow-xl object-cover"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;
