"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, Sparkles } from "lucide-react";

// --- The conversation flow remains the same ---
type Message = {
  sender: string;
  text: string;
};

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

// --- Sub-components remain the same ---
const AgentAvatar = () => (
  <div className="relative h-10 w-10 flex-shrink-0">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500" />
    <div className="absolute inset-0 flex items-center justify-center">
      <Sparkles className="h-5 w-5 text-white/80" />
    </div>
  </div>
);
const MessageBubble = ({ sender, text }: { sender: string; text: string }) => {
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

// --- MODIFIED Main Component ---
// It now accepts an `isPlaying` prop to control the animation
interface AppointmentShowcase2Props {
  isPlaying: boolean;
}

export const AppointmentShowcase2 = ({
  isPlaying,
}: AppointmentShowcase2Props) => {
  const [messages, setMessages] = useState<Message[]>([]);

  // MODIFIED useEffect: It now depends on `isPlaying` instead of its own viewport state.
  useEffect(() => {
    let timer: NodeJS.Timeout;
    // Only start the animation if isPlaying is true
    if (isPlaying) {
      // Start fresh
      setMessages([]);

      timer = setInterval(() => {
        setMessages((prev) => {
          if (prev.length < appointmentConversationFlow.length) {
            return [...prev, appointmentConversationFlow[prev.length]];
          }
          clearInterval(timer); // Stop when all messages are shown
          return prev;
        });
      }, 1800);
    } else {
      // If not playing, reset the messages
      setMessages([]);
    }

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(timer);
  }, [isPlaying]); // The hook re-runs whenever `isPlaying` changes

  return (
    // REMOVED: The outer motion.div wrapper and its trigger are gone.
    // This is now a "dumb" component that just displays the chat.
    <div className="w-full h-full">
      {/* We don't need the section/header, just the chat box itself */}
      <div className="rounded-3xl border border-white/20 bg-black/20 p-4 shadow-2xl backdrop-blur-lg h-full flex flex-col">
        {/* Conversation Area */}
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
    </div>
  );
};
