"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, Sparkles } from "lucide-react";

// --- The conversation data ---
const conversationFlow = [
  { sender: "user", text: "Hello, can I check my order status?" },
  {
    sender: "agent",
    text: "Your order is on its way with FedEx! It should arrive tomorrow by 8pm.",
  },
  { sender: "agent", text: "Would you like me to text you the tracking link?" },
];

// --- Sub-components for clarity ---

const AgentAvatar = () => (
  <div className="relative h-10 w-10 flex-shrink-0">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500" />
    <div className="absolute inset-0 flex items-center justify-center">
      <Sparkles className="h-5 w-5 text-white/80" />
    </div>
  </div>
);

const MessageBubble = ({ sender, text }) => {
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
        className={`max-w-xs rounded-2xl px-4 py-3 text-sm md:max-w-sm ${
          isAgent
            ? "bg-white/10 text-white/90 rounded-bl-lg"
            : "bg-blue-500/30 text-white rounded-br-lg"
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
};

// --- Main Showcase Component ---

export const ConversationShowcase = () => {
  const [messages, setMessages] = useState([]);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView && messages.length < conversationFlow.length) {
      const timer = setInterval(() => {
        setMessages((prev) => {
          if (prev.length < conversationFlow.length) {
            return [...prev, conversationFlow[prev.length]];
          }
          clearInterval(timer);
          return prev;
        });
      }, 1500); // 1.5-second delay between messages

      return () => clearInterval(timer);
    }
  }, [isInView, messages]);

  return (
    <section className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-balance text-white md:text-5xl lg:tracking-tight">
          See It In Action
        </h2>
        <p className="text-white/80 mx-auto mt-4 max-w-2xl text-lg text-balance">
          Our AI handles customer inquiries intelligently, 24/7.
        </p>
      </motion.div>
      <motion.div
        onViewportEnter={() => setIsInView(true)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-lg mx-auto"
      >
        {/* Main glassmorphic container */}
        <div className="rounded-3xl border border-white/20 bg-black/20 p-4 shadow-2xl backdrop-blur-lg">
          {/* Conversation Area */}
          <div className="h-[24rem] overflow-y-auto p-4">
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
          {/* Input Bar */}
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
      </motion.div>
    </section>
  );
};
