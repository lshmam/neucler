"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, Magnet, Heart, CheckCircle2 } from "lucide-react";
import { AppointmentShowcase } from "./AppointmentShowcase"; // Ensure this path is correct

// --- DATA STRUCTURE ---
const storyData = [
  {
    id: "convert",
    icon: <Bot className="h-8 w-8 text-white" />,
    title: "First, We Convert",
    description:
      "Our AI agent instantly engages every visitor, ensuring no lead falls through the cracks. This immediately plugs the biggest leak in your sales funnel.",
    stat: "Capture 30%+ more leads from your current traffic.",
    visualType: "component",
    visual: <AppointmentShowcase />,
  },
  {
    id: "attract",
    icon: <Magnet className="h-8 w-8 text-white" />,
    title: "Then, We Attract",
    description:
      "With your conversion machine in place, we fuel it with high-intent organic traffic. Our AI-powered content positions you as a market leader, attracting customers ready to buy.",
    stat: "SEO leads have a proven 14.6% close rate.",
    visualType: "video",
    videoSrc:
      "https://videos.pexels.com/video-files/5942465/5942465-hd_1920_1080_25fps.mp4",
  },
  {
    id: "retain",
    icon: <Heart className="h-8 w-8 text-white" />,
    title: "Finally, We Retain",
    description:
      "We turn new customers into repeat business. Our automated retention suite brings customers back, dramatically increasing their lifetime value and your profitability.",
    stat: "A 5% lift in retention can increase profits by up to 95%.",
    visualType: "video",
    videoSrc:
      "https://videos.pexels.com/video-files/4901323/4901323-hd_1920_1080_30fps.mp4",
  },
];

// --- Main Component ---
export const ScrollingShowcase2 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to the active card index
  const activeCardIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, storyData.length - 1]
  );

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-balance text-white md:text-5xl lg:tracking-tight">
            Our 3-Step Growth Flywheel
          </h2>
          <p className="text-white/80 mx-auto mt-4 max-w-2xl text-lg text-balance">
            We don't just add a tool; we implement a complete system for
            sustainable growth.
          </p>
        </motion.div>

        {/* --- DESKTOP SCROLLYTELLING LAYOUT --- */}
        <div ref={targetRef} className="hidden md:block h-[300vh] relative">
          <div className="sticky top-20 grid grid-cols-2 gap-16 h-screen items-center">
            {/* Left Column: Scrolling Text */}
            <div className="flex flex-col gap-16">
              {storyData.map((step, index) => (
                <motion.div
                  key={step.id}
                  style={{
                    opacity: useTransform(
                      activeCardIndex,
                      [index - 0.5, index, index + 0.5],
                      [0.3, 1, 0.3]
                    ),
                    scale: useTransform(
                      activeCardIndex,
                      [index - 0.5, index, index + 0.5],
                      [0.9, 1, 0.9]
                    ),
                  }}
                  className="p-8 rounded-2xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 border border-white/20">
                      {step.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-white/80 mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-3 text-lg font-semibold text-white">
                    <CheckCircle2 className="h-6 w-6 text-green-400" />
                    <span>{step.stat}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Sticky Visuals */}
            <div className="h-[80vh] w-full rounded-3xl border border-white/20 bg-black/20 p-2 shadow-2xl backdrop-blur-lg">
              {storyData.map((step, index) => (
                <motion.div
                  key={step.id}
                  style={{
                    opacity: useTransform(
                      activeCardIndex,
                      [index - 0.2, index, index + 0.2],
                      [0, 1, 0]
                    ),
                  }}
                  className="absolute inset-2"
                >
                  {step.visualType === "video" ? (
                    <video
                      src={step.videoSrc}
                      className="h-full w-full rounded-2xl object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <div className="h-full w-full scale-[0.8] transform-gpu overflow-hidden rounded-2xl">
                      {step.visual}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* --- MOBILE STACKED LAYOUT --- */}
        <div className="block md:hidden">
          <div className="flex flex-col gap-16">
            {storyData.map((step) => (
              <div key={step.id}>
                {/* Visual */}
                <div className="h-[70vh] rounded-3xl border border-white/20 bg-black/20 p-2 shadow-2xl backdrop-blur-lg">
                  {step.visualType === "video" ? (
                    <video
                      src={step.videoSrc}
                      className="h-full w-full rounded-2xl object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <div className="h-full w-full scale-[0.8] transform-gpu overflow-hidden rounded-2xl">
                      {step.visual}
                    </div>
                  )}
                </div>
                {/* Text */}
                <div className="mt-8 p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-white/80 mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-3 text-lg font-semibold text-white">
                    <CheckCircle2 className="h-6 w-6 text-green-400" />
                    <span>{step.stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
