// src/pages/_app.tsx

import type { AppProps } from "next/app";
import "@/styles/globals.css";

// Import all the components we need
import { GradientBackground } from "@/components/ui/gradient-background";
import { FallbackGradient } from "@/components/ui/fallback-gradient";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ClientOnly } from "@/components/ui/ClientOnly"; // <-- Import our new utility

export default function MyApp({ Component, pageProps }: AppProps) {
  const isMobile = useIsMobile();

  return (
    <>
      {/* 
        This logic is now clear and robust:
        1. If it's a mobile device, render the simple CSS fallback.
        2. If it's a desktop, use the ClientOnly component to ensure
           the heavy shader only renders in the browser, never on the server.
      */}
      {/* {isMobile ? (
        <FallbackGradient />
      ) : (
        <ClientOnly>
          <GradientBackground />
        </ClientOnly>
      )} */}

      <main className="relative z-10">
        <Component {...pageProps} />
      </main>
    </>
  );
}
