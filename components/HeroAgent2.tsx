// @ts-nocheck
"use client";

import React, { useCallback, useState, useEffect } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { useConversation } from "@elevenlabs/react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2Icon, PhoneIcon, PhoneOffIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Orb } from "@/components/ui/orb";

// This is the new, self-contained background component
const GradientBackground = () => {
  return (
    <ShaderGradientCanvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#ffffff", // Set a white background color
      }}
      pixelDensity={1}
      pointerEvents="none"
    >
      <ShaderGradient
        animate="on"
        type="sphere"
        wireframe={false}
        shader="defaults"
        uTime={0}
        uSpeed={0.3}
        uStrength={2.5} // Adjusted for a smoother look
        uDensity={0.6} // Adjusted for a smoother look
        uFrequency={5.5}
        uAmplitude={3.2}
        positionX={-0.1}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={130}
        rotationZ={70}
        color1="#f0f0f0" // Near-white colors for a white background
        color2="#e0e0e0"
        color3="#d0d0d0"
        reflection={0.4}
        cAzimuthAngle={270}
        cPolarAngle={180}
        cDistance={0.5}
        cameraZoom={15.1}
        lightType="env"
        brightness={0.8}
        envPreset="city"
        grain="off" // Grain removed for a smooth effect
      />
    </ShaderGradientCanvas>
  );
};

const LoadingScreen = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoaded, 500); // Wait for half a second before fading out
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Adjust the interval for loading speed

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-transparent text-white"
    >
      <div className="w-1/4 max-w-xs">
        <p className="text-center text-lg mb-2">Initializing Agent...</p>
        <div className="w-full bg-white/20 rounded-full h-2.5">
          <motion.div
            className="bg-white h-2.5 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ACQUIRED_AI_AGENT = {
  agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!,
  name: "Aiden",
};
type AgentState =
  | "disconnected"
  | "connecting"
  | "connected"
  | "disconnecting"
  | null;

export const HeroAgent2 = () => {
  const [agentState, setAgentState] = useState<AgentState>("disconnected");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { startSession, endSession, getInputVolume, getOutputVolume } =
    useConversation({
      // ... (no changes in the hook setup)
    });

  const startConversation = useCallback(async () => {
    // ... (no changes in this function)
  }, [startSession]);

  const handleCall = useCallback(() => {
    // ... (no changes in this function)
  }, [agentState, startConversation, endSession]);

  const isCallActive = agentState === "connected";
  const isTransitioning =
    agentState === "connecting" || agentState === "disconnecting";

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="absolute inset-0 z-0">
        <GradientBackground />
      </div>

      <AnimatePresence>
        {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl"
          >
            <div className="relative z-10 flex flex-col w-full text-white bg-transparent min-h-[80vh]">
              <header className="flex items-center justify-between p-6 md:p-8">
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

              <main className="flex flex-1 flex-col items-center justify-center gap-8 text-center p-6">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white">
                  <span className="font-medium italic">Supercharge</span> your
                  <br />
                  business with AI
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

                  <Button
                    onClick={handleCall}
                    disabled={isTransitioning}
                    size="lg"
                    className="rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 flex items-center gap-2 px-6 py-6 text-base"
                  >
                    <AnimatePresence mode="wait">
                      {isTransitioning ? (
                        <motion.div
                          key="loading"
                          //...
                        >
                          <Loader2Icon className="h-5 w-5" />
                        </motion.div>
                      ) : isCallActive ? (
                        <motion.div
                          key="end"
                          className="flex items-center gap-2"
                        >
                          <PhoneOffIcon className="h-5 w-5" />
                          <span>End Call</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="start"
                          className="flex items-center gap-2"
                        >
                          <PhoneIcon className="h-5 w-5" />
                          <span>Call Us</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>

                  {errorMessage && (
                    <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
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
