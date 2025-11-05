"use client";

import React, { useState, useMemo } from "react";
import { Bot, Magnet, Heart, Info } from "lucide-react"; // Added Info icon for tooltips

// Define the tiers and their impact multipliers.
const tiers = {
  converter: {
    name: "Converter",
    icon: Bot,
    recoveryMultiplier: 0.8, // Recovers 80% of missed leads
    growthMultiplier: 1, // No new lead growth
    ltvMultiplier: 1, // No increase in customer value
    benefit: "Recovers missed leads with our 24/7 AI Agent.",
  },
  growthEngine: {
    name: "Growth Engine",
    icon: Magnet,
    recoveryMultiplier: 1, // Recovers 100% of missed leads
    growthMultiplier: 1.3, // Adds 30% new organic leads
    ltvMultiplier: 1, // No increase in customer value
    benefit: "Recovers missed leads AND attracts new organic traffic.",
  },
  autopilot: {
    name: "Autopilot",
    icon: Heart,
    recoveryMultiplier: 1,
    growthMultiplier: 1.3,
    ltvMultiplier: 1.25, // Increases the value of each customer by 25%
    benefit:
      "Recovers leads, attracts new traffic, AND increases Customer Lifetime Value.",
  },
};

// A simple tooltip component for explanations
const ExplainerTooltip = ({ text }: { text: string }) => (
  <div className="relative group">
    <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
      {text}
    </div>
  </div>
);

export const RevenueRecoveryCalculator = () => {
  // --- STATE MANAGEMENT ---
  const [missedLeads, setMissedLeads] = useState<number>(10);
  const [customerValue, setCustomerValue] = useState<number>(1500);
  const [leadToCustomerRate, setLeadToCustomerRate] = useState<number>(25);
  const [selectedTier, setSelectedTier] = useState<
    "converter" | "growthEngine" | "autopilot"
  >("growthEngine");

  // --- REAL-TIME CALCULATION (Now with a detailed breakdown) ---
  const {
    totalGain,
    recoveredValue,
    growthValue,
    ltvValue,
    benefitDescription,
  } = useMemo(() => {
    const tier = tiers[selectedTier];

    // 1. Calculate the total annual revenue currently being lost
    const leadsLostPerWeek = missedLeads * (leadToCustomerRate / 100);
    const totalLostRevenue = leadsLostPerWeek * customerValue * 52;

    // 2. Calculate the value from just recovering those lost leads
    const recoveredValue = totalLostRevenue * tier.recoveryMultiplier;

    // 3. Calculate the ADDITIONAL value from new organic growth
    const growthValue = recoveredValue * tier.growthMultiplier - recoveredValue;

    // 4. Calculate the ADDITIONAL value from increasing the LTV of all customers
    const totalBeforeLTV = recoveredValue + growthValue;
    const ltvValue = totalBeforeLTV * tier.ltvMultiplier - totalBeforeLTV;

    // 5. Sum it all up
    const totalGain = recoveredValue + growthValue + ltvValue;

    return {
      totalGain,
      recoveredValue,
      growthValue,
      ltvValue,
      benefitDescription: tier.benefit,
    };
  }, [missedLeads, customerValue, leadToCustomerRate, selectedTier]);

  // --- HELPER FOR CURRENCY FORMATTING ---
  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 md:p-8 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Revenue Recovery Calculator
        </h2>
        <p className="text-gray-600 mt-2">
          See the potential revenue you could gain with our services.
        </p>
      </div>

      {/* INPUTS / SLIDERS SECTION (No changes here) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Sliders for Missed Leads, Customer Value, Conversion Rate */}
      </div>

      {/* TIER SELECTOR (No changes here) */}
      <div className="mb-8">{/* Tier selection buttons */}</div>

      {/* --- NEW TRANSPARENT RESULTS SECTION --- */}
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-600 text-sm">
          Potential Annual Gain with the{" "}
          <span className="font-bold">{tiers[selectedTier].name}</span> plan:
        </p>
        <p className="text-4xl md:text-6xl font-extrabold text-green-600 my-2">
          {formatCurrency(totalGain)}
        </p>
        <p className="font-medium text-gray-700 mb-6">{benefitDescription}</p>

        {/* The Transparent Breakdown */}
        <div className="border-t border-gray-200 pt-4 space-y-3 text-left max-w-md mx-auto">
          <h4 className="font-semibold text-center text-gray-800 mb-2">
            How we calculated this:
          </h4>

          {/* 1. Recovered Revenue */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-700">From Recovered Leads</span>
              <ExplainerTooltip text="This is the estimated value of the leads you're currently missing that our AI Agent will now capture and convert." />
            </div>
            <span className="font-semibold text-gray-900">
              {formatCurrency(recoveredValue)}
            </span>
          </div>

          {/* 2. New Growth Revenue (Conditional) */}
          {growthValue > 0 && (
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">From New Organic Growth</span>
                <ExplainerTooltip text="This is the estimated value of new leads generated by our Content & SMM services, attracting customers who weren't finding you before." />
              </div>
              <span className="font-semibold text-gray-900">
                {" "}
                + {formatCurrency(growthValue)}
              </span>
            </div>
          )}

          {/* 3. Increased LTV Revenue (Conditional) */}
          {ltvValue > 0 && (
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">
                  From Increased Customer Value
                </span>
                <ExplainerTooltip text="This is the estimated lift in total revenue from our Retention Suite, which increases repeat business and the lifetime value (LTV) of every customer." />
              </div>
              <span className="font-semibold text-gray-900">
                {" "}
                + {formatCurrency(ltvValue)}
              </span>
            </div>
          )}

          {/* Divider and Total */}
          <div className="border-t border-gray-300 my-2"></div>
          <div className="flex justify-between items-center font-bold text-base">
            <span className="text-gray-900">Total Estimated Gain</span>
            <span className="text-green-600">{formatCurrency(totalGain)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueRecoveryCalculator;
