"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-16 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full ${scrolled
        ? "bg-background/80 backdrop-blur-xl shadow-lg border border-border/50"
        : "bg-background/60 backdrop-blur-md border border-transparent"
        }`}
    >
      <div className="px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo with hover animation */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <Image
              src="/neucler-logo.png"
              alt="Neucler Logo"
              width={32}
              height={32}
              className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <Image
              src="/neucler-type.svg"
              alt="Neucler"
              width={100}
              height={24}
              className="hidden sm:block transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {["Solutions", "Pricing"].map((item, index) => (
              <Link
                key={item}
                href={item === "Solutions" ? "/solutions" : "/pricing"}
                className="relative flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://app.neucler.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
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
                className={`w-6 h-6 absolute transition-all duration-300 ${mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
              />
              <X
                className={`w-6 h-6 absolute transition-all duration-300 ${mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      <div
        className={`lg:hidden bg-background/90 backdrop-blur-xl border-t border-border/50 overflow-hidden transition-all duration-500 ease-in-out rounded-b-3xl ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="px-6 py-4 space-y-2">
          {["Solutions", "Pricing"].map((item, index) => (
            <Link
              key={item}
              href={item === "Solutions" ? "/solutions" : "/pricing"}
              className={`flex items-center justify-between w-full px-4 py-3 text-left text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-300 ${mobileMenuOpen ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="pt-4 border-t border-border space-y-2">
            <a href="https://app.neucler.com" className="block px-4 py-2 text-muted-foreground">
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
