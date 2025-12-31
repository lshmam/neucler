"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if scrolled past threshold
      setScrolled(currentScrollY > 20)

      // Hide on scroll down, show on scroll up (only after scrolling past 100px)
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setHidden(true)
        } else {
          // Scrolling up
          setHidden(false)
        }
      } else {
        setHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div className="flex items-center justify-between h-14">
        {/* Logo with shadow */}
        <Link
          href="/"
          className="flex items-center group flex-shrink-0"
        >
          <Image
            src="/neucler-logo-new.png"
            alt="Neucler Logo"
            width={36}
            height={36}
            className={`transition-all duration-300 group-hover:scale-110 drop-shadow-lg ${scrolled ? "brightness-0" : ""}`}
          />
        </Link>

        {/* Right side - Sign in + Sign up button with pill background */}
        <div
          className={`hidden lg:flex items-center gap-4 px-4 py-2 rounded-full transition-all duration-300 ${scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg border border-border/50"
            : "bg-white/10 backdrop-blur-sm"
            }`}
        >
          <a
            href="https://app.neucler.com"
            className={`text-sm transition-colors duration-300 ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`}
          >
            Sign in
          </a>
          <a href="https://app.neucler.com" rel="noopener noreferrer">
            <Button className="bg-terracotta hover:bg-terracotta/90 text-white rounded-full px-6 py-2.5 btn-hover-lift text-sm font-medium">
              Sign up
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-3 flex-shrink-0 transition-all duration-300 hover:scale-110 rounded-full ${scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg border border-border/50"
            : "bg-white/10 backdrop-blur-sm"
            }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`w-6 h-6 absolute transition-all duration-300 ${scrolled ? "text-foreground" : "text-white"} ${mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
            />
            <X
              className={`w-6 h-6 absolute transition-all duration-300 ${scrolled ? "text-foreground" : "text-white"} ${mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu with slide animation */}
      <div
        className={`lg:hidden mt-2 bg-background/95 backdrop-blur-xl overflow-hidden transition-all duration-500 ease-in-out rounded-2xl shadow-lg border border-border/50 ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-0"
          }`}
      >
        <nav className="px-6 py-4 space-y-2">
          <div className="space-y-2">
            <a href="https://app.neucler.com" className="block px-4 py-2 text-right text-foreground hover:text-muted-foreground transition-colors duration-300">
              Sign in
            </a>
            <a href="https://app.neucler.com" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-white rounded-full">
                Sign up
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
