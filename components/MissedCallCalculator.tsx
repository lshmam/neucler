"use client";

import React, { useState, useMemo } from "react";

// You can add a simple animation for the number if you like
// For example, using a library like 'react-countup'
// import CountUp from 'react-countup';

export const MissedCallCalculator = () => {
  // --- STATE MANAGEMENT ---
  // State for each of the user-adjustable inputs, with sensible defaults.
  const [missedCalls, setMissedCalls] = useState<number>(10);
  const [customerValue, setCustomerValue] = useState<number>(1500);
  const [conversionRate, setConversionRate] = useState<number>(25);

  // --- REAL-TIME CALCULATION ---
  // useMemo will re-calculate these values only when the inputs change, which is efficient.
  const { weeklyLost, yearlyLost } = useMemo(() => {
    const leadsLostPerWeek = missedCalls * (conversionRate / 100);
    const weeklyLostRevenue = leadsLostPerWeek * customerValue;
    const yearlyLostRevenue = weeklyLostRevenue * 52; // 52 weeks in a year

    return {
      weeklyLost: weeklyLostRevenue,
      yearlyLost: yearlyLostRevenue,
    };
  }, [missedCalls, customerValue, conversionRate]);

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
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 md:p-8 max-w-2xl mx-auto">
      {/* HEADER SECTION */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          The High Cost of a Missed Call
        </h2>
        <p className="text-gray-600 mt-2">
          Adjust the sliders to see how much potential revenue you're losing.
        </p>
      </div>

      {/* INPUTS / SLIDERS SECTION */}
      <div className="space-y-6">
        {/* Missed Calls Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="missed-calls" className="font-medium text-gray-700">
              Missed Calls Per Week
            </label>
            <span className="font-bold text-indigo-600 text-lg">
              {missedCalls} calls
            </span>
          </div>
          <input
            id="missed-calls"
            type="range"
            min="1"
            max="50"
            step="1"
            value={missedCalls}
            onChange={(e) => setMissedCalls(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
        </div>

        {/* Average Customer Value Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label
              htmlFor="customer-value"
              className="font-medium text-gray-700"
            >
              Average Customer Value
            </label>
            <span className="font-bold text-indigo-600 text-lg">
              {formatCurrency(customerValue)}
            </span>
          </div>
          <input
            id="customer-value"
            type="range"
            min="100"
            max="10000"
            step="100"
            value={customerValue}
            onChange={(e) => setCustomerValue(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
        </div>

        {/* Lead Conversion Rate Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label
              htmlFor="conversion-rate"
              className="font-medium text-gray-700"
            >
              Lead Conversion Rate
            </label>
            <span className="font-bold text-indigo-600 text-lg">
              {conversionRate}%
            </span>
          </div>
          <input
            id="conversion-rate"
            type="range"
            min="5"
            max="100"
            step="5"
            value={conversionRate}
            onChange={(e) => setConversionRate(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
        </div>
      </div>

      {/* RESULTS SECTION */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600 text-sm">You are potentially losing:</p>
          <p className="text-4xl md:text-5xl font-extrabold text-red-600 my-2">
            {formatCurrency(yearlyLost)}
          </p>
          <p className="font-medium text-gray-700">per year.</p>
          <p className="text-gray-500 text-sm mt-1">
            ({formatCurrency(weeklyLost)} per week)
          </p>
        </div>
      </div>

      {/* CALL-TO-ACTION SECTION */}
      <div className="mt-8 text-center">
        <p className="text-lg font-medium text-gray-900">
          Our AI agents answer 100% of your inquiries, 24/7.
        </p>
        <button className="mt-4 bg-black text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition-colors">
          Let's Plug The Leak
        </button>
      </div>
    </div>
  );
};

export default MissedCallCalculator;
