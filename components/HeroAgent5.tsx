// @ts-nocheck
"use client";

import React, { useCallback, useState, useEffect } from "react";
import { useConversation } from "@elevenlabs/react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2Icon, PhoneIcon, PhoneOffIcon } from "lucide-react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Orb } from "@/components/ui/orb";

// --- LoadingScreen component (no changes) ---
const LoadingScreen = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoaded, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-transparent text-gray-800"
    >
      <div className="w-1/4 max-w-xs">
        <p className="text-center text-lg mb-2">Initializing Agent...</p>
        <div className="w-full bg-black/20 rounded-full h-2.5">
          <motion.div
            className="bg-black h-2.5 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Hero Component ---
const ACQUIRED_AI_AGENT = {
  agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!,
  name: "Aiden",
};

// A more descriptive state type for clarity
type AgentState = "idle" | "connecting" | "connected" | "disconnecting";

export const HeroAgent5 = () => {
  const [agentState, setAgentState] = useState<AgentState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { startSession, endSession, getInputVolume, getOutputVolume } =
    useConversation({
      agentId: ACQUIRED_AI_AGENT.agentId,
    });

  // --- ROBUST LOGIC FOR MOBILE ---
  const startConversation = useCallback(async () => {
    // Prevent starting if not idle
    if (agentState !== "idle") return;

    setAgentState("connecting");
    setErrorMessage(null);
    try {
      // This is the critical step. It's called only after a user clicks,
      // which is required by mobile browsers to access the microphone.
      await startSession();
      setAgentState("connected");
    } catch (error) {
      console.error("Microphone or Connection Error:", error);
      // Handle the specific error when a user denies microphone permission on mobile
      if (error.name === "NotAllowedError") {
        setErrorMessage(
          "Microphone access was denied. Please allow it in your browser settings to talk to the agent."
        );
      } else {
        setErrorMessage(
          "Failed to connect. Please check your connection and try again."
        );
      }
      setAgentState("idle"); // Return to idle state on failure
    }
  }, [startSession, agentState]);

  const isCallActive = agentState === "connected";
  const isTransitioning =
    agentState === "connecting" || agentState === "disconnecting";

  // This function is the single, safe entry point for the user's click
  const handleCall = useCallback(() => {
    if (isTransitioning) return; // Prevent multiple clicks

    if (isCallActive) {
      setAgentState("disconnecting");
      endSession();
      setAgentState("idle"); // Reset to idle after ending the call
    } else {
      startConversation(); // Trigger the connection process
    }
  }, [isCallActive, isTransitioning, startConversation, endSession]);

  // --- Text for the animated headline ---
  const headlineLine1 = [
    <span key="supercharge" className="font-medium italic">
      Supercharge
    </span>,
    "your",
  ];
  const headlineLine2 = ["business", "with", "AI"];

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 w-full max-w-5xl"
          >
            <div className="relative z-10 flex w-full flex-col text-white bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl min-h-[85vh] overflow-hidden">
              {/* --- GRADIENT BACKGROUND --- */}
              <ShaderGradientCanvas
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                }}
                pixelDensity={0.1}
                precision="low" // <--- FIX APPLIED HERE
              >
                <ShaderGradient
                  grain="off"
                  color1="#ff5005"
                  color2="#dbba95"
                  color3="#d0bce1"
                />
              </ShaderGradientCanvas>

              {/* --- HERO CONTENT --- */}
              <header className="flex items-center justify-between p-6 md:p-8 z-10">
                <span className="text-xl font-medium tracking-tighter text-white">
                  neucler
                </span>
                <Button
                  onClick={handleCall}
                  variant="default"
                  className="rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20"
                >
                  {isCallActive ? "End Call" : "Call Us"}
                </Button>
              </header>

              <main className="flex flex-1 flex-col items-center justify-center gap-8 text-center p-6 z-10">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white">
                  {/* --- ANIMATED HEADLINE --- */}
                  <div>
                    {headlineLine1.map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        whileInView={{
                          opacity: 1,
                          filter: "blur(0px)",
                          transition: { delay: i * 0.1 + 0.5, duration: 0.5 },
                        }}
                        viewport={{ once: true }}
                        className="inline-block mr-4"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                  <div>
                    {headlineLine2.map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        whileInView={{
                          opacity: 1,
                          filter: "blur(0px)",
                          transition: {
                            delay: (i + headlineLine1.length) * 0.1 + 0.5,
                            duration: 0.5,
                          },
                        }}
                        viewport={{ once: true }}
                        className="inline-block mr-4"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                </h1>

                <div className="relative size-40">
                  <div className="bg-white/10 relative h-full w-full rounded-full p-1 shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)]">
                    <div className="bg-white/5 h-full w-full overflow-hidden rounded-full shadow-[inset_0_0_12px_rgba(0,0,0,0.05)]">
                      <Orb
                        className="h-full w-full"
                        volumeMode="manual"
                        getInputVolume={getInputVolume}
                        getOutputVolume={getOutputVolume}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <p className="text-lg text-white/80">
                    Talk to our {ACQUIRED_AI_AGENT.name}, our voice agent
                  </p>

                  {/* --- Your styled, visible button --- */}
                  <Button
                    onClick={handleCall}
                    disabled={isTransitioning}
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30
                               hover:opacity-90 transition-all duration-300 transform hover:scale-105
                               flex items-center gap-2 px-8 py-7 text-lg font-bold"
                  >
                    <AnimatePresence mode="wait">
                      {isTransitioning ? (
                        <motion.div key="loading" exit={{ opacity: 0 }}>
                          <Loader2Icon className="h-6 w-6 animate-spin" />
                        </motion.div>
                      ) : isCallActive ? (
                        <motion.div
                          key="end"
                          className="flex items-center gap-2"
                        >
                          <PhoneOffIcon className="h-6 w-6" />
                          <span>End Call</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="start"
                          className="flex items-center gap-2"
                        >
                          <PhoneIcon className="h-6 w-6" />
                          <span>Call Our Agent</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>

                  {errorMessage && (
                    <p className="text-red-400 text-sm mt-2 max-w-xs mx-auto">
                      {errorMessage}
                    </p>
                  )}
                </div>
              </main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
