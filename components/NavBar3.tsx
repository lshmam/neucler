"use client";

import * as React from "react";
import Link from "next/link";
import { BlocksIcon, ContactIcon, MenuIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// --- Your navigation links data (no changes here) ---
const navLinks = [
  { title: "Solutions", href: "/solutions" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Industries", href: "/industries" },
];

// 🎯 IMPORTANT: Add your Tally form ID here
const TALLY_FORM_ID = "Pdj7x0";

export function NavBar3() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  // --- Logic to hide/show navbar on scroll (no changes here) ---
  const controlNavbar = React.useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        >
          {/* --- 2. Widened navbar and updated styling --- */}
          <div className="flex items-center justify-between w-full max-w-7xl px-4 py-2 bg-slate-100/50 border border-purple-200/30 rounded-full shadow-lg backdrop-blur-lg">
            {/* Leftmost Icon */}
            <Link href="/" className="flex items-center gap-2">
              <BlocksIcon className="h-6 w-6 text-purple-700" />
              <span className="font-bold text-lg text-slate-800 hidden sm:inline">
                MyBrand
              </span>
            </Link>

            {/* --- 3. Right-aligned group for hamburger and contact button --- */}
            <div className="flex items-center gap-4">
              {/* Hamburger Menu (using Sheet component) */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MenuIcon className="h-6 w-6 text-slate-800" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="text-lg font-semibold text-slate-700 hover:text-purple-700 transition-colors"
                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>

              {/* --- 4. Updated Contact button --- */}
              <Button
                data-tally-open="Pdj7x0" // <-- Add this: Your Form ID
                data-tally-layout="modal" // <-- Add this: To open as a popup
                data-tally-width="700" // <-- Optional: Set a width
                data-tally-hide-title="1" // <-- Optional: Hide the form title
                className="bg-gradient-to-b from-[#E6E6FA] to-[#D8BFD8] text-purple-800 font-bold hover:opacity-90 transition-opacity shadow-md"
              >
                <ContactIcon className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
