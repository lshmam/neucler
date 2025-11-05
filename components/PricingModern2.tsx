"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // Changed from "motion/react" to "framer-motion" for consistency
import { CheckIcon } from "lucide-react"; // Using a clean icon for the checkmarks

// Assuming PriceFlow is a component that animates the price change
// You can create a placeholder if you don't have it yet:
const PriceFlow = ({ value }: { value: string }) => <span>{value}</span>;

export function PricingModern2() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    // SECTION CONTAINER: Made transparent and adjusted padding
    <section className="relative py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* HEADER SECTION: Text is now white for contrast */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-balance text-white md:text-5xl lg:tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/80 mx-auto mt-4 max-w-xl text-lg text-balance">
            Choose the plan that’s right for your business today, and let's put
            your growth on autopilot.
          </p>

          {/* POLISHED MONTHLY/ANNUAL TOGGLE */}
          <div className="mt-16 flex justify-center">
            <div className="relative flex w-fit items-center rounded-full bg-white/10 p-1 border border-white/20 backdrop-blur-md">
              <button
                onClick={() => setIsAnnual(false)}
                className={`relative z-10 w-28 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  !isAnnual ? "text-black" : "text-white/80 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`relative z-10 w-40 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isAnnual ? "text-black" : "text-white/80 hover:text-white"
                }`}
              >
                Annually (Save 20%)
              </button>
              {/* Sliding background pill */}
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute h-10 rounded-full bg-white ${
                  isAnnual ? "w-40 translate-x-[7.25rem]" : "w-28 translate-x-0"
                }`}
              />
            </div>
          </div>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* TIER 1: CONVERTER */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              // Glassmorphism classes applied here
              className="relative flex flex-col rounded-3xl border border-white/20 bg-black/20 p-8 shadow-2xl backdrop-blur-lg"
            >
              <div className="flex-1">
                <h3 className="text-white mb-2 text-2xl font-bold">
                  Converter
                </h3>
                <div className="mb-8 mt-4">
                  <span className="text-white text-5xl font-semibold">
                    ${isAnnual ? "40" : "50"}
                  </span>
                  <span className="text-white/70"> / mo</span>
                </div>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  Perfect for businesses that have website traffic but need to
                  convert it into real leads and appointments.
                </p>
                <h4 className="text-white/70 text-xs font-medium tracking-wider uppercase">
                  What&apos;s included:
                </h4>
                <ul className="mt-4 space-y-3">
                  {[
                    "AI Website Agent",
                    "24/7 Lead Capture",
                    "Automated Appointment Booking",
                    "Monthly Performance Report",
                  ].map((item) => (
                    <li
                      className="flex items-center gap-3 text-sm text-white"
                      key={item}
                    >
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                        <CheckIcon className="h-3 w-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="mt-8 rounded-full bg-white/90 text-black hover:bg-white focus-visible:ring-white w-full py-3 text-sm font-semibold transition-colors focus-visible:outline-none"
              >
                Get Started
              </button>
            </motion.div>

            {/* TIER 2: GROWTH ENGINE (Featured) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              // Scaled up slightly to stand out
              className="relative flex scale-105 flex-col rounded-3xl border border-white/20 bg-black/30 p-8 shadow-2xl backdrop-blur-lg"
            >
              <div className="gradient-accent absolute top-0 right-0 h-4 w-32 rounded-bl-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />
              <div className="absolute top-6 right-6 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white">
                Most Popular
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-2 text-2xl font-bold">
                  Growth Engine
                </h3>
                <div className="mb-8 mt-4">
                  <span className="text-white text-5xl font-semibold">
                    ${isAnnual ? "100" : "125"}
                  </span>
                  <span className="text-white/70"> / mo</span>
                </div>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  The complete lead generation solution. Ready to attract a
                  wider audience and turn them into customers.
                </p>
                <h4 className="text-white/70 text-xs font-medium tracking-wider uppercase">
                  What&apos;s included:
                </h4>
                <ul className="mt-4 space-y-3">
                  {[
                    "Everything in Converter",
                    "Organic Marketing Engine",
                    "AI Content Creation",
                    "Social Media Management",
                    "Dedicated Account Manager",
                  ].map((item) => (
                    <li
                      className="flex items-center gap-3 text-sm text-white"
                      key={item}
                    >
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                        <CheckIcon className="h-3 w-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                // Button is styled to be more prominent
                className="mt-8 rounded-full bg-white text-black hover:bg-white/90 focus-visible:ring-white w-full py-3 text-sm font-semibold transition-colors focus-visible:outline-none"
              >
                Get Started
              </button>
            </motion.div>

            {/* TIER 3: AUTOPILOT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="relative flex flex-col rounded-3xl border border-white/20 bg-black/20 p-8 shadow-2xl backdrop-blur-lg"
            >
              <div className="flex-1">
                <h3 className="text-white mb-2 text-2xl font-bold">
                  Autopilot
                </h3>
                <div className="mb-8 mt-4">
                  <span className="text-white text-5xl font-semibold">
                    Custom
                  </span>
                </div>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                  The ultimate end-to-end solution for businesses that want to
                  dominate their market and maximize customer LTV.
                </p>
                <h4 className="text-white/70 text-xs font-medium tracking-wider uppercase">
                  What&apos;s included:
                </h4>
                <ul className="mt-4 space-y-3">
                  {[
                    "Everything in Growth Engine",
                    "Customer Retention Suite",
                    "Automated Loyalty Programs",
                    "Email & SMS Marketing",
                    "Quarterly Strategy Review",
                  ].map((item) => (
                    <li
                      className="flex items-center gap-3 text-sm text-white"
                      key={item}
                    >
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                        <CheckIcon className="h-3 w-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="mt-8 rounded-full bg-white/90 text-black hover:bg-white focus-visible:ring-white w-full py-3 text-sm font-semibold transition-colors focus-visible:outline-none"
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
