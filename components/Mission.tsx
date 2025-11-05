"use client";

import React from "react";
import { motion } from "framer-motion";

const missionStatement =
  "Our mission is to equip businesses with the tools of the future.";

export const Mission = () => {
  return (
    <section className="py-20 sm:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="container mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-balance text-white leading-tight tracking-tight">
          {missionStatement.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  delay: i * 0.05,
                  duration: 0.5,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true }}
              className="inline-block"
              style={{ marginRight: "0.25em" }} // Adjust space between words
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </motion.div>
    </section>
  );
};
