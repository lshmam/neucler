"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const footerLinks = {
  "AI Employee": ["AI Employee Overview", "AI Agents", "Live Answering", "AI Voice", "Automations"],
  Solutions: ["Website Chat", "Inbox", "Messaging", "Email Marketing"],
  Company: ["About Us", "Careers", "Press", "Contact", "Partners"],
}

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="bg-foreground text-background pt-8 pb-6 md:py-16 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div
              key={category}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h4 className="font-semibold mb-4 text-background">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li
                    key={link}
                    className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                    style={{ transitionDelay: `${categoryIndex * 100 + linkIndex * 50}ms` }}
                  >
                    <Link
                      href="#"
                      className="text-sm text-background/70 hover:text-background transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t border-background/20 pt-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/neucler-logo-new.png"
                alt="Neucler Logo"
                width={36}
                height={36}
                className="transition-transform duration-300 group-hover:scale-110 brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-background/70">© Neucler Corp. 2025</p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-background/70 hover:text-background transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-background/70 hover:text-background transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Large Brand Logo with reveal animation */}

      </div>
    </footer>
  )
}
