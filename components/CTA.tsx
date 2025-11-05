"use client";

import React from "react";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-12 text-center shadow-2xl backdrop-blur-xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-white tracking-tight">
            Ready to Future-Proof Your Business?
          </h2>
          <p className="text-white/80 mx-auto mt-4 max-w-2xl text-lg text-balance">
            Stop losing leads and start maximizing your potential. Let our AI
            work for you 24/7. Schedule a free, no-obligation demo today.
          </p>
          <button className="mt-8 rounded-full bg-white text-black font-bold py-4 px-10 hover:bg-white/80 transition-colors text-base">
            Book a Free Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};
