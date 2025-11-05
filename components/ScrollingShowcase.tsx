"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, Magnet, Heart, CheckCircle2 } from "lucide-react";

// --- DATA STRUCTURE ---
// We define the "chapters" of our story here for easy updates.
const storyData = [
  {
    id: "convert",
    icon: <Bot className="w-8 h-8 text-white" />,
    title: "First, We Convert Your Existing Traffic",
    description:
      "Our AI agent is the foundation. It instantly engages every visitor, ensuring no lead ever falls through the cracks. This immediately plugs the biggest leak in your sales funnel.",
    stat: "Capture 30%+ more leads from your current traffic.",
  },
  {
    id: "attract",
    icon: <Magnet className="w-8 h-8 text-white" />,
    title: "Then, We Attract a New Audience",
    description:
      "With your conversion machine in place, we fuel it with high-intent organic traffic. Our AI-powered content positions you as a market leader on Google, attracting customers who are ready to buy.",
    stat: "SEO leads have a proven 14.6% close rate.",
  },
  {
    id: "retain",
    icon: <Heart className="w-8 h-8 text-white" />,
    title: "Finally, We Maximize Your Profitability",
    description:
      "We turn your new customers into repeat business. Our automated retention suite generates loyalty and brings customers back, dramatically increasing your lifetime value.",
    stat: "A 5% lift in retention can increase profits by up to 95%.",
  },
];

// --- THE STICKY VISUAL COMPONENT (Left Column) ---
// This component will stay fixed while the text on the right scrolls.
const StickyVisual = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      {/* You can replace this with any visual: a Lottie animation, a 3D model, or just an image. */}
      <div className="relative w-64 h-64">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-4 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center">
          <p className="text-white font-bold text-2xl">AcquiredAI</p>
        </div>
      </div>
    </div>
  );
};

// --- THE SCROLLING TEXT COMPONENT (Right Column) ---
// We create a sub-component for each "step" to handle its own animation.
const StoryStep = ({
  title,
  description,
  stat,
  icon,
  progress,
  index,
  totalSteps,
}: {
  title: string;
  description: string;
  stat: string;
  icon: React.ReactNode;
  progress: any;
  index: number;
  totalSteps: number;
}) => {
  // This hook transforms the overall scroll progress (0 to 1) into an opacity value for this specific step.
  // It will be fully opaque when its "turn" comes in the scroll sequence.
  const opacity = useTransform(
    progress,
    [
      (index - 0.5) / totalSteps,
      index / totalSteps,
      (index + 0.5) / totalSteps,
    ],
    [0.3, 1, 0.3]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="h-screen flex flex-col justify-center p-8 md:p-12"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h3>
      </div>
      <p className="text-lg text-gray-600 mb-6">{description}</p>
      <div className="flex items-center gap-3 text-lg font-semibold text-black">
        <CheckCircle2 className="w-6 h-6 text-green-500" />
        <span>{stat}</span>
      </div>
    </motion.div>
  );
};

// --- THE MAIN COMPONENT ---
export const ScrollingShowcase = () => {
  // We need a ref to the main container to track scroll progress within it.
  const targetRef = useRef<HTMLDivElement | null>(null);

  // This hook tracks the scroll progress of the targetRef.
  // It returns a MotionValue (a special state) that goes from 0 to 1.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], // Track from the moment the top of the container hits the top of the viewport, until the bottom hits the bottom.
  });

  return (
    <section ref={targetRef} className="relative bg-white h-[300vh]">
      {" "}
      {/* The container needs to be tall to allow for scrolling. */}
      <div className="w-full h-full">
        {/* We use `sticky` to keep the two-column layout in place for the duration of the scroll. */}
        <div className="sticky top-0 h-screen grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column (The Visual) */}
          <div className="hidden md:flex bg-black">
            <StickyVisual />
          </div>

          {/* Right Column (The Story) */}
          <div className="overflow-y-auto">
            {storyData.map((step, index) => (
              <StoryStep
                key={step.id}
                {...step}
                index={index + 1}
                totalSteps={storyData.length + 1}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingShowcase;
