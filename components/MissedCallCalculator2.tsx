"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TrendingUp, Calendar, AlertTriangle } from "lucide-react";

// --- Reusable Slider Sub-component for a cleaner look ---
const CalculatorInput = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  formatValue,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  formatValue: (value: number) => string;
}) => (
  <div className="space-y-3">
    <div className="flex justify-between items-center">
      <label className="font-medium text-white/80">{label}</label>
      <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white w-28 text-center">
        {formatValue(value)}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      // Custom slider styles using Tailwind CSS
      className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer
                 [&::-webkit-slider-thumb]:appearance-none
                 [&::-webkit-slider-thumb]:h-5
                 [&::-webkit-slider-thumb]:w-5
                 [&::-webkit-slider-thumb]:rounded-full
                 [&::-webkit-slider-thumb]:bg-white
                 [&::-webkit-slider-thumb]:shadow-lg"
    />
  </div>
);

// --- The Main Calculator Component ---
export const MissedCallCalculator2 = () => {
  const [missedCalls, setMissedCalls] = useState<number>(10);
  const [customerValue, setCustomerValue] = useState<number>(1500);
  const [conversionRate, setConversionRate] = useState<number>(25);

  const { weeklyLost, yearlyLost } = useMemo(() => {
    const leadsLostPerWeek = missedCalls * (conversionRate / 100);
    const weeklyLostRevenue = leadsLostPerWeek * customerValue;
    return {
      weeklyLost: weeklyLostRevenue,
      yearlyLost: weeklyLostRevenue * 52,
    };
  }, [missedCalls, customerValue, conversionRate]);

  // --- Helper for formatting numbers ---
  const formatCurrency = (value: number) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  return (
    <section className="py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        // Main glassmorphic container
        className="relative max-w-4xl mx-auto rounded-3xl border border-white/20 bg-black/20 p-8 shadow-2xl backdrop-blur-lg"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT SIDE: INPUTS */}
          <div className="space-y-8">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                The High Cost of a Missed Call
              </h2>
              <p className="text-white/70 mt-2">
                Adjust the sliders to see how much potential revenue you're
                losing.
              </p>
            </div>
            <CalculatorInput
              label="Missed Calls Per Week"
              value={missedCalls}
              onChange={setMissedCalls}
              min={1}
              max={50}
              step={1}
              formatValue={(val) => `${val} calls`}
            />
            <CalculatorInput
              label="Average Customer Value"
              value={customerValue}
              onChange={setCustomerValue}
              min={100}
              max={10000}
              step={100}
              formatValue={formatCurrency}
            />
            <CalculatorInput
              label="Lead Conversion Rate"
              value={conversionRate}
              onChange={setConversionRate}
              min={5}
              max={100}
              step={5}
              formatValue={(val) => `${val}%`}
            />
          </div>

          {/* RIGHT SIDE: RESULTS */}
          <div className="space-y-6">
            {/* Yearly Result Card - More prominent */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="flex justify-center items-center gap-2 text-red-400">
                <AlertTriangle size={18} />
                <p className="font-semibold text-red-400">
                  Potential Yearly Loss
                </p>
              </div>
              <div className="my-2 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                <CountUp
                  start={0}
                  end={yearlyLost}
                  duration={1.5}
                  separator=","
                  prefix="$"
                  enableScrollSpy
                  scrollSpyDelay={200}
                />
              </div>
            </div>

            {/* Weekly Result Card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="flex justify-center items-center gap-2 text-white/70">
                <Calendar size={18} />
                <p className="font-semibold text-white/70">
                  Equivalent Weekly Loss
                </p>
              </div>
              <div className="my-2 text-4xl font-bold text-white">
                <CountUp
                  start={0}
                  end={weeklyLost}
                  duration={1.5}
                  separator=","
                  prefix="$"
                  enableScrollSpy
                  scrollSpyDelay={200}
                />
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-4">
              <p className="text-lg font-medium text-white">
                Our AI agents answer{" "}
                <span className="text-green-400">
                  100% of your inquiries, 24/7.
                </span>
              </p>
              <button className="mt-4 rounded-full bg-white text-black font-bold py-3 px-8 hover:bg-white/80 transition-colors text-base">
                Let's Plug The Leak
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MissedCallCalculator2;
