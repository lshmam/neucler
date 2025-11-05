// @ts-nocheck
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll"; // Import the new plugin
import CountUp from "react-countup";

// --- UPDATED DATA & STYLING ---
// New, softer colors inspired by your reference image.
// All cards are the same size for a clean aesthetic.
const valueProps = [
  {
    metric: { number: 274, prefix: "+", suffix: "%" },
    description: "appointment bookings",
    color: "bg-teal-400/20", // Muted sage/green
  },
  {
    metric: { number: 50, prefix: "", suffix: "%+" },
    description: "Reduction in Cost-Per-Lead",
    color: "bg-indigo-400/20", // Muted lavender/blue
  },
  {
    metric: { number: 20, prefix: "", suffix: "+" },
    description: "Admin hours saved",
    color: "bg-slate-400/20", // Muted stone/gray
  },
  {
    metric: { number: 25, prefix: "+", suffix: "%" },
    description: "Repeat Customer Rate",
    color: "bg-rose-400/20", // Added a soft rose for variety
  },
  {
    metric: { number: 75, prefix: "+", suffix: "%" },
    description: "Positive Google Reviews",
    color: "bg-amber-400/20", // Added a soft amber for variety
  },
];

// --- The Main Component ---
export const ValueSection2 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: false,
    },
    [
      // Use the AutoScroll plugin for a continuous marquee effect
      AutoScroll({ speed: 1, stopOnInteraction: false, playOnInit: true }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  // The onSelect callback still works perfectly with AutoScroll
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 sm:py-32 w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
          Proven Results for Your Business
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white/80 mb-16">
          We turn potential into profit with measurable, automated solutions
          that drive growth.
        </p>

        {/* --- SEAMLESS VIEWPORT --- */}
        {/* The 'mask-image' property creates the fade effect on the edges */}
        <div
          className="overflow-hidden py-4"
          ref={emblaRef}
          //   style={{
          //     maskImage:
          //       "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          //   }}
        >
          <div className="flex">
            {/* We render the slides twice to help the looping feel more natural */}
            {[...valueProps, ...valueProps].map((prop, index) => (
              <div
                className="relative flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_25%] pl-4"
                key={index}
              >
                <motion.div
                  // The scaling logic now uses the modulo operator to work with the duplicated slides
                  animate={{
                    scale:
                      index % valueProps.length === selectedIndex ? 1 : 0.9,
                    opacity:
                      index % valueProps.length === selectedIndex ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="h-full w-full"
                >
                  <div
                    className={
                      `relative flex flex-col justify-between p-8 rounded-3xl border border-white/10  h-64
                      ${prop.color} backdrop-blur-xl` // Using the new softer colors
                    }
                  >
                    <p className="text-5xl sm:text-6xl font-light text-white text-left">
                      <CountUp
                        end={prop.metric.number}
                        prefix={prop.metric.prefix}
                        suffix={prop.metric.suffix}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyDelay={300}
                      />
                    </p>
                    <p className="text-base font-normal text-white text-left">
                      {prop.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
