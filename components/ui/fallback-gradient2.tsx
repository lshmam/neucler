"use client";

import React from "react";

export const FallbackGradient2 = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        // A near-white to a very light gray. The angle makes it feel more dynamic.
        background: "linear-gradient(170deg, #f0f2f5 0%, #e6e9ef 100%)",
        zIndex: -1,
      }}
    />
  );
};
