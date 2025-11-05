"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What if I'm not satisfied? Can I get a refund?",
    answer:
      "Absolutely. We stand by our service with a 30-day money-back guarantee. If you're not completely satisfied with the results within the first month, we'll issue a full refund, no questions asked.",
  },
  {
    question: "What is the onboarding process like?",
    answer:
      "Our onboarding is designed to be quick and seamless. It follows four simple steps: \n1. **Discovery Call:** We learn about your business and specific needs. \n2. **AI Configuration:** We customize and train the AI agent on your business data. \n3. **Simple Integration:** We provide a single line of code to add the agent to your website. \n4. **Go-Live:** We launch the agent and begin monitoring its performance to ensure optimal results.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most clients are fully up and running within 3-5 business days. The timeline depends on the complexity of your needs, but our team is dedicated to getting you live as quickly as possible.",
  },
];

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <motion.div
    layout
    className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-lg"
  >
    <motion.button
      layout
      onClick={onClick}
      className="flex w-full items-center justify-between text-left"
    >
      <span className="text-lg font-medium text-white">{question}</span>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
        <ChevronDown className="h-5 w-5 text-white/70" />
      </motion.div>
    </motion.button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="text-white/80 whitespace-pre-line">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-balance text-white md:text-5xl lg:tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-white/80 mx-auto mt-4 max-w-2xl text-lg text-balance">
            Have questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 space-y-4"
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
