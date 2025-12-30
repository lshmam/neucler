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
      className={`fixed top-2 left-2 right-2 z-50 transition-all duration-500 rounded-2xl ${mobileMenuOpen
        ? "backdrop-blur-xl"
        : scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border border-border/50"
          : "bg-transparent"
        } ${hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-14 gap-4">
          {/* Logo and Nav grouped together on the left */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <Image
                src="/neucler-logo-new.png"
                alt="Neucler Logo"
                width={36}
                height={36}
                className={`transition-all duration-300 group-hover:scale-110 ${scrolled ? "brightness-0" : ""}`}
              />
            </Link>

            {/* Desktop Nav - closer to logo */}
            {/* <nav className="hidden lg:flex items-center gap-1">
              {["Solutions", "Pricing"].map((item, index) => (
                <Link
                  key={item}
                  href={item === "Solutions" ? "/solutions" : "/pricing"}
                  className={`relative flex items-center gap-1 px-3 py-2 text-sm transition-colors duration-300 ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </Link>
              ))}
            </nav> */}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://app.neucler.com"
              className={`text-sm transition-colors duration-300 ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`}
            >
              Sign in
            </a>
            <a href="https://cal.com/neucler/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-terracotta hover:bg-terracotta/90 text-white rounded-full px-6 py-2.5 btn-hover-lift text-sm font-medium">
                Get a Demo
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            className="lg:hidden p-2 flex-shrink-0 transition-transform duration-300 hover:scale-110"
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
      </div>

      {/* Mobile Menu with slide animation - Transparent like header */}
      <div
        className={`lg:hidden backdrop-blur-xl overflow-hidden transition-all duration-500 ease-in-out rounded-b-2xl ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="px-6 py-4 space-y-2">
          {/* {["Solutions", "Pricing"].map((item, index) => (
            <Link
              key={item}
              href={item === "Solutions" ? "/solutions" : "/pricing"}
              className={`block w-full px-4 py-3 text-right text-white/80 hover:text-white transition-all duration-300 ${mobileMenuOpen ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))} */}
          <div className="pt-4 space-y-2">
            <a href="https://app.neucler.com" className={`block px-4 py-2 text-right transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white/80"}`} >
              Sign in
            </a>
            <a href="https://cal.com/neucler/30min" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-terracotta hover:bg-terracotta/90 text-white rounded-full">
                Get a Demo
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

