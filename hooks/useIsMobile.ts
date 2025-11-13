"use client";

import { useState, useEffect } from "react";

// You can adjust this breakpoint to your liking. 768px is a common cutoff for tablets.
const MOBILE_BREAKPOINT = 768;

export const useIsMobile = (): boolean => {
  // Initialize state based on the current window width
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This effect should only run on the client side where `window` is available.
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      };

      // Set the initial value on mount
      handleResize();

      // Add event listener to update state on window resize
      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return isMobile;
};
