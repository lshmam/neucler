"use client";

import { useState, useCallback } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import { AuroraBackground } from "@/components/ui/aurora-background"; // Ensure this path is correct

// Define the shape of the data we expect from our API
interface WebCallResponse {
  call_id: string;
  access_token: string;
}

// Your Agent ID
const AGENT_ID = "agent_4ab5decc4ca15478e68f1a8ac9";

export default function HeroSection2() {
  const [isCalling, setIsCalling] = useState<boolean>(false);
  const [webClient, setWebClient] = useState<RetellWebClient | null>(null);

  // (No changes to the call handling logic - it remains the same)
  const startCall = useCallback(async () => {
    setIsCalling(true);
    try {
      const response = await fetch("/api/create-web-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agentId: AGENT_ID }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage =
          errorData.message || `API Error: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data: WebCallResponse = await response.json();
      const client = new RetellWebClient();
      setWebClient(client);

      client.startCall({ accessToken: data.access_token });

      client.on("conversationEnded", () => {
        setIsCalling(false);
        setWebClient(null);
      });
      client.on("error", (error) => {
        console.error("Call error:", error);
        setIsCalling(false);
        setWebClient(null);
      });
    } catch (error) {
      console.error("Error starting call:", error);
      setIsCalling(false);
    }
  }, []);

  const endCall = useCallback(() => {
    if (webClient) {
      webClient.stopCall();
      setIsCalling(false);
      setWebClient(null);
    }
  }, [webClient]);

  const handleButtonClick = () => {
    if (isCalling) {
      endCall();
    } else {
      startCall();
    }
  };

  const buttonClass = isCalling
    ? "bg-gradient-to-b from-red-500 to-red-700"
    : "bg-gradient-to-b from-[#A085E6] to-[#906CDD]";

  return (
    // 3. Increased border-radius for a more pronounced rounded rectangle shape
    <section className="rounded-3xl relative flex flex-col items-center justify-center px-4 pt-12 md:pt-24 lg:pt-32 pb-16 md:pb-24 overflow-hidden">
      <AuroraBackground />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-slate-900 text-center max-w-[70%] mb-8">
          Supercharge your business with AI
        </h1>
        <p className="text-base md:text-xl lg:text-2xl text-slate-700 text-center max-w-[70%] mb-16">
          Automate calls and followups, book appointments and provide customer
          support 24/7
        </p>

        <button
          onClick={handleButtonClick}
          className={`${buttonClass} rounded-2xl px-8 md:px-12 py-5 md:py-7 hover:opacity-90 transition-all duration-300 shadow-lg`}
        >
          <span className="text-xl md:text-2xl lg:text-3xl text-center text-white whitespace-nowrap">
            {isCalling ? "End Call" : "Talk to an AI specialist"}
          </span>
        </button>
      </div>
    </section>
  );
}
