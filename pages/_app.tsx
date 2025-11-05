// src/pages/_app.tsx

import type { AppProps } from "next/app";
import "@/styles/globals.css";

// ✅ CORRECT: Import with curly braces {} because it's a named export.
// ✅ ALSO: Double-check that this path is 100% correct.
import { GradientBackground } from "@/components/ui/gradient-background";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GradientBackground />
      <main className="relative z-10">
        <Component {...pageProps} />
      </main>
    </>
  );
}
