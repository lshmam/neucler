"use client";

import { useState } from "react";
import { motion } from "motion/react";

// Assuming PriceFlow is a component that animates the price change
import PriceFlow from "./smoothui/ui/PriceFlow";

export function PricingModern() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section>
      {/* SECTION CONTAINER */}
      <div className="bg-muted/50 relative py-16 md:py-32 section-with-overlay">
        <div className="mx-auto max-w-5xl px-6">
          {/* HEADER SECTION */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-balance md:text-4xl lg:text-5xl lg:tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-foreground/70 mx-auto mt-4 max-w-xl text-lg text-balance">
              Choose the plan that’s right for your business today, and let's
              put your growth on autopilot.
            </p>

            {/* MONTHLY/ANNUAL TOGGLE */}
            <div className="my-12">
              <div
                data-period={isAnnual ? "annually" : "monthly"}
                className="bg-background *:text-foreground relative mx-auto grid w-fit grid-cols-2 rounded-full border p-1 *:block *:h-8 *:w-24 *:rounded-full *:text-sm *:hover:opacity-75"
              >
                <div
                  aria-hidden="true"
                  className={`bg-brand ring-foreground/5 pointer-events-none absolute inset-1 w-1/2 rounded-full border border-transparent shadow ring-1 transition-transform duration-500 ease-in-out ${
                    isAnnual ? "translate-x-full" : "translate-x-0"
                  }`}
                ></div>
                <button
                  type="button"
                  onClick={() => setIsAnnual(false)}
                  data-active={!isAnnual}
                  className="relative duration-500 data-[active=true]:font-medium data-[active=true]:text-white"
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setIsAnnual(true)}
                  data-active={isAnnual}
                  className="relative duration-500 data-[active=true]:font-medium data-[active=true]:text-white"
                >
                  Annually (Save 20%)
                </button>
              </div>
            </div>
          </div>

          {/* PRICING CARDS GRID */}
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-6 *:p-8 md:grid-cols-3">
                {/* TIER 1: CONVERTER */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-background relative flex h-[650px] cursor-pointer flex-col overflow-hidden rounded-2xl border p-8"
                  data-animate-card
                >
                  <div className="card-content relative z-10 flex h-full flex-col">
                    <h3 className="text-foreground mb-4 text-2xl font-bold">
                      Converter
                    </h3>

                    <div className="mb-6">
                      <span className="text-foreground text-3xl font-semibold">
                        <PriceFlow value={isAnnual ? 400 : 500} />$
                      </span>
                      <span className="text-foreground/70"> / mo</span>
                    </div>

                    <button
                      type="button"
                      className="bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-ring mb-6 inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none"
                    >
                      Get Started
                    </button>

                    <p className="text-foreground/70 mb-6 flex-grow text-sm leading-relaxed">
                      Perfect for businesses that have website traffic but need
                      to convert it into real leads and appointments.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-foreground/70 text-xs font-medium tracking-wider uppercase">
                        What&apos;s included:
                      </h4>
                      <ul className="space-y-3">
                        {[
                          "AI Website Agent",
                          "24/7 Lead Capture",
                          "Automated Appointment Booking",
                          "Monthly Performance Report",
                        ].map((item) => (
                          <li
                            className="text-foreground flex items-center gap-3 text-sm"
                            key={item}
                          >
                            <div className="bg-foreground flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full">
                              <svg
                                className="text-background h-2 w-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  clipRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* TIER 2: GROWTH ENGINE (Featured) */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1,
                  }}
                  className="group bg-primary relative flex h-[650px] cursor-pointer flex-col overflow-hidden rounded-2xl border p-8"
                  data-animate-card
                >
                  <div className="gradient-accent absolute top-0 right-0 h-4 w-32 rounded-bl-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />
                  <div className="card-content relative z-10 flex h-full flex-col">
                    <h3 className="text-foreground mb-4 flex items-center gap-2 text-2xl font-bold">
                      Growth Engine
                      <div className="bg-brand rounded-full px-2 py-1 text-xs font-bold text-white">
                        Most Popular
                      </div>
                    </h3>

                    <div className="mb-6">
                      <span className="text-foreground text-3xl font-semibold">
                        <PriceFlow value={isAnnual ? 1000 : 1200} />$
                      </span>
                      <span className="text-foreground/70"> / mo</span>
                    </div>

                    <button
                      type="button"
                      className="bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-ring mb-6 inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none"
                    >
                      Get Started
                    </button>

                    <p className="text-foreground/70 mb-6 flex-grow text-sm leading-relaxed">
                      The complete lead generation solution. Perfect for
                      businesses ready to attract a wider audience and turn them
                      into customers.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-foreground/70 text-xs font-medium tracking-wider uppercase">
                        What&apos;s included:
                      </h4>
                      <ul className="space-y-3">
                        {[
                          "Everything in Converter",
                          "Organic Marketing Engine",
                          "AI Content Creation",
                          "Social Media Management",
                          "Dedicated Account Manager",
                        ].map((item) => (
                          <li
                            className="text-foreground flex items-center gap-3 text-sm"
                            key={item}
                          >
                            <div className="bg-foreground flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full">
                              <svg
                                className="text-background h-2 w-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  clipRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* TIER 3: AUTOPILOT */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                  }}
                  className="group bg-background relative flex h-[650px] cursor-pointer flex-col overflow-hidden rounded-2xl border p-8"
                  data-animate-card
                >
                  <div className="card-content relative z-10 flex h-full flex-col">
                    <h3 className="text-foreground mb-4 text-2xl font-bold">
                      Autopilot
                    </h3>

                    <div className="mb-6">
                      <span className="text-foreground text-3xl font-semibold">
                        Custom
                      </span>
                    </div>

                    <button
                      type="button"
                      className="bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-ring mb-6 inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none"
                    >
                      Contact Us
                    </button>

                    <p className="text-foreground/70 mb-6 flex-grow text-sm leading-relaxed">
                      The ultimate end-to-end solution for businesses that want
                      to dominate their market and maximize customer lifetime
                      value.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-foreground/70 text-xs font-medium tracking-wider uppercase">
                        What&apos;s included:
                      </h4>
                      <ul className="space-y-3">
                        {[
                          "Everything in Growth Engine",
                          "Customer Retention Suite",
                          "Automated Loyalty Programs",
                          "Email & SMS Marketing",
                          "Quarterly Strategy Review",
                        ].map((item) => (
                          <li
                            className="text-foreground flex items-center gap-3 text-sm"
                            key={item}
                          >
                            <div className="bg-foreground flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full">
                              <svg
                                className="text-background h-2 w-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  clipRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
