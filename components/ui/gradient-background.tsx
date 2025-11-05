// src/components/ui/gradient-background.tsx

"use client";

import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export const GradientBackground = () => {
  return (
    <ShaderGradientCanvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#ffffff",
      }}
      pixelDensity={1}
      pointerEvents="none"
    >
      <ShaderGradient
        // ... (keep all your shader props here)
        grain="off"
        color1="#ff5005"
        color2="#dbba95"
        color3="#d0bce1"
      />
    </ShaderGradientCanvas>
  );
};
