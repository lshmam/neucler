"use client";

import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="border-t border-white/10 py-12"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <span className="text-xl font-medium tracking-tighter text-white">
              neucler
            </span>
            <p className="mt-2 text-sm text-white/60">
              © {new Date().getFullYear()} neucler. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm font-medium text-white/80">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
