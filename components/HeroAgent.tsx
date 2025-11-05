// @ts-nocheck
"use client";

import React, { useCallback, useState } from "react";
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
      }}
      pixelDensity={1}
      pointerEvents="none" // Crucial: allows clicks to pass through to the UI
    >
      <ShaderGradient
        animate="on"
        type="sphere"
        wireframe={false}
        shader="defaults"
        uTime={0}
        uSpeed={0.3}
        uStrength={0.3}
        uDensity={0.8}
        uFrequency={5.5}
        uAmplitude={3.2}
        positionX={-0.1}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={130}
        rotationZ={70}
        color1="#73bfc4"
        color2="#ff810a"
        color3="#8da0ce"
        reflection={0.4}
        cAzimuthAngle={270}
        cPolarAngle={180}
        cDistance={0.5}
        cameraZoom={15.1}
        lightType="env"
        brightness={0.8}
        envPreset="city"
        grain="on"
      />
    </ShaderGradientCanvas>
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

export const HeroAgent = () => {
  const [agentState, setAgentState] = useState<AgentState>("disconnected");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    // CHANGE 1: Main container is now relative for positioning the background
    <div className="relative flex min-h-screen w-full flex-col">
      {/* CHANGE 2: Add the GradientBackground component as the bottom layer */}
      <div className="absolute inset-0 z-0">
        <GradientBackground />
      </div>

      {/* CHANGE 3: The entire UI is now in a new container on top (z-10) with a transparent background */}
      <div className="relative z-10 flex min-h-screen w-full flex-col bg-transparent text-white">
        {/* CHANGE 4: Header text is now white */}
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

          {/* CHANGE 5: Orb container is now semi-transparent */}
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

            {/* CHANGE 6: Button is styled for a dark, transparent background */}
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
                  <motion.div key="end" className="flex items-center gap-2">
                    <PhoneOffIcon className="h-5 w-5" />
                    <span>End Call</span>
                  </motion.div>
                ) : (
                  <motion.div key="start" className="flex items-center gap-2">
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
    </div>
  );
};
