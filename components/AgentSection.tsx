"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AppointmentShowcase2 } from "./AppointmentShowcase2"; // Ensure this path is correct

// --- Data Structure remains the same ---
const agentData = {
  headline: "Never Miss a Lead Again, Ever",
  description:
    "Our AI agent is your ultimate front-line employee. It engages every website visitor, qualifies leads, and books appointments 24/7, so you can focus on closing deals.",
  stats: [
    { value: "30%+", label: "Increase in Lead Conversion" },
    { value: "24/7", label: "Automated Lead Capture" },
    { value: "100%", label: "Visitor Engagement Rate" },
  ],
};

export const AgentSection = () => {
  // NEW: State to control the child animation
  const [playShowcase, setPlayShowcase] = useState(false);

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          // MODIFIED: Added viewport triggers to control the state
          onViewportEnter={() => setPlayShowcase(true)}
          onViewportLeave={() => setPlayShowcase(false)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
        >
          {/* Left Column: Text Content (no changes here) */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-balance text-white md:text-5xl lg:tracking-tight">
              {agentData.headline}
            </h2>
            <p className="mt-4 text-base text-white/70">
              {agentData.description}
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {agentData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Component Showcase */}
          <div className="relative flex h-[550px] w-full items-center justify-center rounded-3xl border border-white/20 bg-black/20 p-4 shadow-2xl backdrop-blur-lg">
            <div className="h-full w-full scale-[0.85] transform-gpu overflow-hidden rounded-2xl">
              {/* The AppointmentShowcase component no longer receives an isPlaying prop */}
              <AppointmentShowcase2 isPlaying={false} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
