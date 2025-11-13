"use client";

import * as React from "react";
import Link from "next/link";
import { BlocksIcon, ContactIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

// --- Content for the dropdowns ---
const solutions: { title: string; href: string; description: string }[] = [
  {
    title: "AI Voice Agents",
    href: "/solutions/voice-agents",
    description:
      "Automate inbound and outbound calls with human-like voice AI.",
  },
  {
    title: "Appointment Booking",
    href: "/solutions/appointment-booking",
    description: "24/7 automated scheduling and calendar management.",
  },
  {
    title: "Customer Support AI",
    href: "/solutions/customer-support",
    description:
      "Provide instant, intelligent support to your customers anytime.",
  },
];

// --- 1. Mock data for the new "Case Studies" dropdown ---
const caseStudies: { title: string; href: string; description: string }[] = [
  {
    title: "E-commerce Sales Boost",
    href: "/case-studies/ecommerce-boost",
    description:
      "Discover how our AI automated follow-ups and increased conversion rates by 25%.",
  },
  {
    title: "Real Estate Lead Conversion",
    href: "/case-studies/real-estate-leads",
    description:
      "See how an AI agent qualified and booked appointments 24/7 for a top real estate firm.",
  },
  {
    title: "Healthcare Patient Outreach",
    href: "/case-studies/healthcare-outreach",
    description:
      "Automating patient reminders and follow-ups, which reduced appointment no-shows by 40%.",
  },
];

const industries: { title: string; href: string }[] = [
  { title: "Real Estate", href: "/industries/real-estate" },
  { title: "Healthcare", href: "/industries/healthcare" },
  { title: "E-commerce", href: "/industries/e-commerce" },
  { title: "Financial Services", href: "/industries/financial-services" },
];

export function NavBar2() {
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

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
          className="fixed top-4 left-0 right-0 z-50 flex justify-center"
        >
          {/* --- 2. Updated styling for the light purple, transparent "pill" look --- */}
          <div className="flex items-center justify-between w-full max-w-5xl mx-auto px-4 py-2 bg-slate-100/50 border border-purple-200/30 rounded-full shadow-lg backdrop-blur-lg">
            <Link href="/" className="flex items-center gap-2">
              <BlocksIcon className="h-6 w-6 text-purple-700" />
              <span className="font-bold text-lg text-slate-800 hidden sm:inline">
                MyBrand
              </span>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                {/* Solutions Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] lg:w-[500px]">
                      {solutions.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* --- 3. "Case Studies" is now a dropdown menu --- */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Case Studies</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] lg:w-[500px]">
                      {caseStudies.map((study) => (
                        <ListItem
                          key={study.title}
                          title={study.title}
                          href={study.href}
                        >
                          {study.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Industries Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[400px]">
                      {industries.map((industry) => (
                        <li key={industry.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={industry.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {industry.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/contact">
                <ContactIcon className="h-4 w-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Re-usable ListItem component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none text-slate-800">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
