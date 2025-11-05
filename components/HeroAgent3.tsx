// @ts-nocheck
"use client";

import React, { useCallback, useState, useEffect } from "react";
// REMOVED: No longer need to import ShaderGradient components here
// import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { useConversation } from "@elevenlabs/react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2Icon, PhoneIcon, PhoneOffIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Orb } from "@/components/ui/orb";

// REMOVED: The GradientBackground component definition has been moved to a global file
// like `src/components/ui/gradient-background.tsx`.

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
      // Note: The text color here is white. If your global background is very light,
      // you may need to change this text to a darker color for it to be visible.
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

export const HeroAgent3 = () => {
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
    // This container no longer needs the `relative` class for the background.
    // It's just a flex container to center your card on the page.
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      {/* REMOVED: The local background instance is no longer needed. */}
      {/* <div className="absolute inset-0 z-0"><GradientBackground /></div> */}

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
            {/* The rest of the component's internal structure remains exactly the same */}
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
