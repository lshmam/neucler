"use client";

import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Customer Service",
    description: "24/7 AI-powered customer support to handle inquiries and provide instant responses.",
    position: "bottom"
  },
  {
    id: 2,
    title: "Automations",
    description: "Streamline your workflows with intelligent automation solutions.",
    position: "bottom"
  },
  {
    id: 3,
    title: "Sales",
    description: "AI-driven sales strategies to maximize conversions and revenue.",
    position: "top"
  },
  {
    id: 4,
    title: "Marketing",
    description: "Smart marketing campaigns powered by AI insights and analytics.",
    position: "top"
  }
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-center px-4 py-12 md:py-20 lg:py-32">
      <div className="flex flex-col items-center gap-2 mb-12 md:mb-16 max-w-[90%] md:max-w-[533px]">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-black text-center w-full">
          Automate your business
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 text-center w-full">
          With cutting edge AI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[90%] lg:max-w-[1000px]">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
            className="bg-gradient-to-b from-purple-300/60 to-purple-100/60 rounded-2xl h-[280px] md:h-[320px] lg:h-[339px] overflow-hidden relative hover:from-purple-400/70 hover:to-purple-200/70 transition-all duration-300 cursor-pointer group"
          >
            <div className={`absolute left-[25px] ${service.position === "bottom" ? "bottom-[25px]" : "top-[25px]"}`}>
              <p className="text-2xl md:text-3xl text-black text-left">
                {service.title}
              </p>
              {selectedService === service.id && (
                <p className="mt-3 text-base md:text-lg text-gray-700 text-left max-w-[90%] animate-in fade-in duration-300">
                  {service.description}
                </p>
              )}
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-purple-700">Click to learn more</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
