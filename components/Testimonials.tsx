"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Testimonial Data ---
const testimonials = [
  {
    quote:
      "The AI agent booked 15 new consultations in its first month—most of them outside of our normal business hours. It paid for itself in the first week.",
    author: "Maria R",
    title: "COO, BrainSuite",
  },
  {
    quote:
      "We had a list of hundreds of past customers we never contacted. The automated loyalty campaign brought back clients we hadn't seen in over a year. Our repeat business is the highest it's ever been, and it all runs on autopilot.",
    author: "Pratik K.",
    title: "CEO, MatterAI",
  },
];

// --- The Main Component ---
export const Testimonials = () => {
  // Framer Motion variants for the container.
  // This will orchestrate the animation of its children.
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
      },
    },
  };

  // Framer Motion variants for each testimonial card.
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-balance text-white md:text-5xl lg:tracking-tight">
            Trusted by Industry Innovators
          </h2>
          <p className="text-white/80 mx-auto mt-4 max-w-2xl text-lg text-balance">
            See how our AI solutions are creating tangible results for
            businesses.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // The animation starts when the component is in view
          viewport={{ once: true, amount: 0.2 }} // `amount: 0.2` means 20% of the element needs to be visible
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // Main glassmorphic card styling
              className="rounded-3xl border border-white/20 bg-white/5 p-8 shadow-2xl backdrop-blur-lg"
            >
              <div className="text-white text-lg leading-relaxed font-light">
                {/* This is where the magic happens. We split the quote into words. */}
                {testimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    // Stagger the animation of each word
                    custom={i}
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    // Animate to full opacity and no blur
                    whileInView={{
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: {
                        delay: i * 0.04, // Each word appears 40ms after the previous one
                        duration: 0.4,
                        ease: "easeOut",
                      },
                    }}
                    viewport={{ once: true }}
                    className="inline-block mr-[0.5em]" // Add space between words
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-white/70">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
