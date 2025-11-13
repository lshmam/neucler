"use client";

import React from "react";

export const FallbackGradient = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        // A simple, beautiful CSS gradient that mimics your shader's colors
        background:
          "radial-gradient(circle at center, #8da0ce, #73bfc4, #ff810a)",
        zIndex: -1,
      }}
    />
  );
};
