// components/ui/aurora-background.tsx
"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect } from "react";

// 1. Updated with various shades of light purple for a softer effect
const COLORS = ["#E6E6FA", "#D8BFD8", "#C3B1E1", "#BDB5D5"];

export function AuroraBackground() {
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 15, // Increased duration for a slower, more subtle shift
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // 2. Inverted the gradient to start from the bottom (`at 50% 100%`)
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, #ffffff 50%, ${color})`;

  return (
    <motion.div
      style={{ backgroundImage }}
      className="absolute inset-0 -z-10"
    />
  );
}
