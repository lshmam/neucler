"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

// IMPORTANT: Ensure your '9_16.json' file is in your /public/animations/ folder
import retentionLottie from "../public/9_16.json";

// --- Data Structure with emphasis on stats ---
// We've split the stats into 'value' and 'label' for distinct styling.
const retentionData = {
  headline: "Turn One-Time Customers Into Repeat Business",
  description:
    "Our automated retention suite generates loyalty and brings customers back for more. We turn your happy clients into your most powerful marketing channel.",
  stats: [
    {
      value: "$42",
      label: "Return for Every $1 Spent",
    },
    {
      value: "25-95%",
      label: "Profit Increase from 5% Retention Lift",
    },
    {
      value: "67%",
      label: "More Spent by Repeat Customers",
    },
  ],
};

export const RetentionSection = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          // The layout is identical to the MarketingSection for consistency
          className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
        >
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-balance text-white md:text-5xl lg:tracking-tight">
              {retentionData.headline}
            </h2>
            <p className="mt-4 text-base text-white/70">
              {retentionData.description}
            </p>

            {/* Stats Grid - Emphasizing the numbers */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {retentionData.stats.map((stat, index) => (
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

          {/* Right Column: Lottie Animation in a glassmorphic container */}
          <div className="relative flex h-[500px] w-full items-center justify-center rounded-3xl border border-white/20 bg-black/20 p-4 shadow-2xl backdrop-blur-lg">
            <Lottie
              animationData={retentionLottie}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
