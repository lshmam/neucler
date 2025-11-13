// components/NavBar.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { BlocksIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// --- Your navigation data ---
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

export function NavBar4() {
  return (
    // 1. This header is "sticky" and will stay at the top of the viewport
    <header className="sticky top-0 left-0 right-0 z-40 flex justify-center p-4">
      {/* The pill design with glassy, light purple background */}
      <div className="flex items-center justify-between w-full max-w-5xl px-4 py-2 bg-slate-100/50 border border-purple-200/30 rounded-full shadow-lg backdrop-blur-lg">
        {/* Leftmost Icon */}
        <Link href="/" className="flex items-center gap-2">
          <BlocksIcon className="h-6 w-6 text-purple-700" />
          <span className="font-bold text-lg text-slate-800 hidden sm:inline">
            MyBrand
          </span>
        </Link>

        {/* Center Navigation with Dropdowns */}
        <NavigationMenu>
          <NavigationMenuList>
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

            <NavigationMenuItem>
              <NavigationMenuTrigger>Case Studies</NavigationMenuTrigger>
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

            <NavigationMenuItem>
              <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
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
          </NavigationMenuList>
        </NavigationMenu>

        {/* A simple placeholder or a small button on the right if needed */}
        {/* We removed the main contact button from here to avoid redundancy */}
        <div className="w-24 h-8" />
      </div>
    </header>
  );
}
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
