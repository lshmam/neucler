"use client";

import dynamic from "next/dynamic";
import { useIsMobile } from "@/hooks/useIsMobile";
import { FallbackGradient2 } from "@/components/ui/fallback-gradient2";
import React from "react";

// 1. Dynamically import the heavy shader component
//    The { ssr: false } option is the most important part.
const GradientBackground = dynamic(
  () => import('./gradient-background').then(mod => mod.GradientBackground),
  {
    ssr: false,
    // Optional: Add a loading component while the shader is loading
    loading: () => <div style={{ background: '#f7f8fa', position: 'fixed', inset: 0, zIndex: -1 }} />,
  }
);

export const DynamicBackground = () => {
  const isMobile = useIsMobile();

  // 2. Render the correct background based on the device
  return isMobile ? <FallbackGradient2 /> : <GradientBackground />;
};