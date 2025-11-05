"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

// IMPORTANT: Place your 'neucler-smm.json' file in your /public/animations/ folder
import marketingLottie from "../public/neucler-smm.json";

// --- Data Structure with emphasis on stats ---
// We've separated the 'value' from the 'label' to style them differently.
const marketingData = {
  headline: "Attract Customers Actively Looking For You",
  description:
    "Our AI-powered content strategy positions you as a market leader on Google. We fuel your funnel with high-intent organic traffic from customers who are ready to buy.",
  stats: [
    {
      value: "14.6%",
      label: "Close Rate for SEO Leads",
    },
    {
      value: "3x",
      label: "More Leads Than Paid Ads",
    },
    {
      value: "100%",
      label: "Organic, Long-Term Traffic",
    },
  ],
};

export const MarketingSection = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
        >
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-balance text-white md:text-5xl lg:tracking-tight">
              {marketingData.headline}
            </h2>
            {/* Descriptive text is now smaller */}
            <p className="mt-4 text-base text-white/70">
              {marketingData.description}
            </p>

            {/* NEW Stats Grid - Emphasizing the numbers */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {marketingData.stats.map((stat, index) => (
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
              animationData={marketingLottie}
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
