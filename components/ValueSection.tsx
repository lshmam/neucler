// @ts-nocheck
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Data for the cards, inspired by your image and text.
// The height property allows us to mimic the bar chart effect.
const valueProps = [
  {
    metric: "+274%",
    description: "appointment bookings",
    color: "bg-emerald-800/30", // Tinted glassmorphism
    height: "h-56",
  },
  {
    metric: "50%+",
    description: "Reduction in Cost-Per-Lead",
    color: "bg-blue-800/30",
    height: "h-64",
  },
  {
    metric: "20+",
    description: "Admin hours saved",
    color: "bg-gray-600/30",
    height: "h-72", // Tallest card in the middle
  },
  {
    metric: "+25%",
    description: "Repeat Customer Rate",
    color: "bg-indigo-800/30",
    height: "h-64",
  },
  {
    metric: "+75%",
    description: "Google Reviews",
    color: "bg-orange-800/30",
    height: "h-56",
  },
];

// --- The Main Component ---
export const ValueSection = () => {
  // 1. Set up the carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true, // Enables infinite looping
      align: "center", // Aligns the slides to the center
      containScroll: false,
    },
    [Autoplay({ playOnInit: true, delay: 4000, stopOnInteraction: false })] // Autoplay plugin
  );

  // 2. State to track the selected/centered slide
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 3. Callback to update the selected index
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  // 4. Effect to listen for carousel events
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    // Section container: No background, allowing the global gradient to show through.
    <section className="py-20 sm:py-32 w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
          Proven Results for Your Business
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white/80 mb-16">
          We turn potential into profit with measurable, automated solutions
          that drive growth.
        </p>

        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Carousel Container */}
          <div className="flex">
            {valueProps.map((prop, index) => (
              // Each slide
              <div
                className="relative flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_25%] pl-4"
                key={index}
              >
                <motion.div
                  // Animate based on whether the slide is selected
                  animate={{
                    scale: index === selectedIndex ? 1.05 : 0.95,
                    opacity: index === selectedIndex ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="h-full w-full"
                >
                  <div
                    className={
                      `relative flex flex-col justify-between p-6 rounded-3xl border border-white/20 shadow-2xl
                      ${prop.height} ${prop.color} backdrop-blur-xl` // Glassmorphism + dynamic styles
                    }
                  >
                    <p className="text-4xl sm:text-5xl font-medium text-white text-left">
                      {prop.metric}
                    </p>
                    <p className="text-base font-normal text-white/90 text-left">
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
