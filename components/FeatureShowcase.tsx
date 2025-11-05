"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConversationShowcase } from "./ConversationShowcase"; // Ensure this path is correct

// --- DATA STRUCTURE FOR FEATURES ---
// This is where you define the content for each feature.
// It's designed to be easily updated.
const featuresData = [
  {
    id: "workflows",
    category: "Workflows & Testing",
    title: "Build advanced workflows",
    description:
      "Design multi-agent flows with intuitive tools. Combine scripted steps with dynamic AI behavior for precise control across voice and chat.",
    tag: "Coming soon",
    visualType: "component",
    visualContent: <ConversationShowcase />, // Your component goes here
  },
  {
    id: "simulation",
    category: "Workflows & Testing",
    title: "Simulate before launch",
    description:
      "Test your conversational flows in a secure sandbox environment. Identify potential issues and refine the user experience before deploying to your customers.",
    tag: null,
    visualType: "video",
    visualContent: "/loyalty-neucler.mp4", // Path to video in your /public folder
  },
  {
    id: "monitoring",
    category: "Workflows & Testing",
    title: "Monitor live performance",
    description:
      "Gain real-time insights into your agent's performance. Track key metrics, review conversation transcripts, and continuously improve your automation.",
    tag: null,
    visualType: "video",
    visualContent: "/smm-neucler.mp4", // Path to another video
  },
];

// --- MAIN COMPONENT ---
export const FeatureShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = featuresData[activeIndex];

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column: Feature Selection */}
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-sm font-medium text-white/70">
                {activeFeature.category}
              </p>
              <h2 className="mt-2 text-4xl font-bold text-balance text-white md:text-5xl lg:tracking-tight">
                Design, orchestrate, and monitor
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {featuresData.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  className="relative rounded-xl p-6 text-left transition-colors"
                >
                  {/* Animated highlight using Framer Motion's layoutId */}
                  {activeIndex === index && (
                    <motion.div
                      layoutId="highlight"
                      className="absolute inset-0 rounded-2xl border border-white/20 bg-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      {feature.tag && (
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                          {feature.tag}
                        </span>
                      )}
                    </div>
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: activeIndex === index ? "auto" : 0,
                        opacity: activeIndex === index ? 1 : 0,
                      }}
                      className="mt-2 text-sm text-white/70 overflow-hidden"
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative h-[70vh] w-full rounded-3xl border border-white/20 bg-black/20 p-2 shadow-2xl backdrop-blur-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-2"
              >
                {activeFeature.visualType === "video" ? (
                  <video
                    src={activeFeature.visualContent as string}
                    className="h-full w-full rounded-2xl object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <div className="h-full w-full scale-[0.85] transform-gpu overflow-hidden rounded-2xl">
                    {activeFeature.visualContent as React.ReactNode}
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
