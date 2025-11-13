// components/ui/floating-form-button.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FileTextIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// 🎯 Your Tally form ID

export function FloatingForm() {
  return (
    // 3. This button is fixed to the viewport and has a high z-index
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      className="fixed top-6 left-6 z-50"
    >
      <Button
        data-tally-open="Pdj7x0" // <-- Add this: Your Form ID
        data-tally-layout="modal" // <-- Add this: To open as a popup
        data-tally-width="700" // <-- Optional: Set a width
        data-tally-hide-title="1" // <-- Optional: Hide the form title
        className="bg-blue-600 hover:bg-blue-700 rounded-full h-12 px-6 shadow-lg"
      >
        <FileTextIcon className="h-5 w-5 mr-2" />
        <span className="text-md font-semibold">Fill Form</span>
      </Button>
    </motion.div>
  );
}
