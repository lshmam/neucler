"use-client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, Sparkles } from "lucide-react";

// --- ALL DATA AND LOGIC NOW LIVES IN ONE PLACE ---

// 1. Data for the text content
const agentData = {
  headline: "Never Miss a Lead Again, Ever",
  description:
    "Our AI agent is your ultimate front-line employee. It engages every website visitor, qualifies leads, and books appointments 24/7, so you can focus on closing deals.",
  stats: [
    { value: "30%+", label: "Increase in Lead Conversion" },
    { value: "24/7", label: "Automated Lead Capture" },
    { value: "100%", label: "Visitor Engagement Rate" },
  ],
};

// 2. Data for the conversation flow
type Message = { sender: string; text: string };
const appointmentConversationFlow: Message[] = [
  { sender: "user", text: "Hi, I'd like to book a consultation." },
  { sender: "agent", text: "Of course! Are you available anytime this week?" },
  { sender: "user", text: "Yes, I'm free on Wednesday afternoon." },
  {
    sender: "agent",
    text: "Great. I have two slots available: 2:00 PM or 4:30 PM. Which one works?",
  },
  { sender: "user", text: "4:30 PM sounds perfect." },
  {
    sender: "agent",
    text: "Excellent. You're all set for Wednesday at 4:30 PM. I've sent a calendar invite to your email!",
  },
];

// 3. Reusable sub-components for the chat bubbles
const AgentAvatar = () => (
  <div className="relative h-10 w-10 flex-shrink-0">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500" />
    <div className="absolute inset-0 flex items-center justify-center">
      <Sparkles className="h-5 w-5 text-white/80" />
    </div>
  </div>
);
const MessageBubble = ({ sender, text }: Message) => {
  const isAgent = sender === "agent";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex items-start gap-4 ${isAgent ? "" : "justify-end"}`}
    >
      {isAgent && <AgentAvatar />}
      <div
        className={`max-w-xs rounded-2xl px-4 py-3 text-sm md:max-w-sm ${isAgent ? "bg-white/10 text-white/90 rounded-bl-lg" : "bg-blue-500/30 text-white rounded-br-lg"}`}
      >
        {text}
      </div>
    </motion.div>
  );
};

// --- THE NEW UNIFIED COMPONENT ---
export const AgentSection2 = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [playAnimation, setPlayAnimation] = useState(false);

  // This useEffect is now controlled by the component's own state.
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (playAnimation) {
      setMessages([]); // Reset on play
      timer = setInterval(() => {
        setMessages((prev) => {
          if (prev.length < appointmentConversationFlow.length) {
            return [...prev, appointmentConversationFlow[prev.length]];
          }
          clearInterval(timer);
          return prev;
        });
      }, 1800);
    }
    return () => clearInterval(timer);
  }, [playAnimation]);

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          // The animation trigger is on the main container itself.
          onViewportEnter={() => setPlayAnimation(true)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
        >
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-balance text-white md:text-5xl lg:tracking-tight">
              {agentData.headline}
            </h2>
            <p className="mt-4 text-base text-white/70">
              {agentData.description}
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {agentData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Integrated Chat Showcase */}
          <div className="h-[550px] w-full">
            <div className="rounded-3xl border border-white/20 bg-black/20 p-4 shadow-2xl backdrop-blur-lg h-full flex flex-col">
              <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-6">
                  <AnimatePresence>
                    {messages.map((msg, index) => (
                      <MessageBubble
                        key={index}
                        sender={msg.sender}
                        text={msg.text}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 p-2 backdrop-blur-md">
                <span className="flex-1 pl-4 text-white/50 text-sm">
                  Enter your message...
                </span>
                <button className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors">
                  <Send size={18} />
                </button>
                <button className="rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors">
                  <Mic size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
