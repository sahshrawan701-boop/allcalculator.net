"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── luxury tax calculation utilities ─────────────────────────────────────

type Category = "jewelry" | "cars" | "yachts" | "watches" | "designer" | "custom";

// Luxury tax rates by category (simplified - varies by country)
const LUXURY_TAX_RATES: Record<Category, number> = {
  jewelry: 0.10, // 10%
  cars: 0.15, // 15%
  yachts: 0.20, // 20%
  watches: 0.12, // 12%
  designer: 0.08, // 8%
  custom: 0.10, // 10%
};

// Thresholds for luxury tax (minimum price to apply luxury tax)
const LUXURY_THRESHOLDS: Record<Category, number> = {
  jewelry: 5000,
  cars: 50000,
  yachts: 100000,
  watches: 3000,
  designer: 2000,
  custom: 10000,
};

function calculateLuxuryTax(
  itemPrice: number,
  category: Category,
  customRate: number,
  customThreshold: number
) {
  const taxRate = category === "custom" ? customRate / 100 : LUXURY_TAX_RATES[category];
  const threshold = category === "custom" ? customThreshold : LUXURY_THRESHOLDS[category];

  // Luxury tax only applies if price exceeds threshold
  let taxableAmount = 0;
  let luxuryTax = 0;

  if (itemPrice > threshold) {
    taxableAmount = itemPrice - threshold;
    luxuryTax = taxableAmount * taxRate;
  }

  const totalCost = itemPrice + luxuryTax;
  const effectiveTaxRate = itemPrice > 0 ? (luxuryTax / itemPrice) * 100 : 0;

  return {
    itemPrice,
    category,
    taxRate,
    threshold,
    taxableAmount,
    luxuryTax,
    totalCost,
    effectiveTaxRate,
  };
}

// ─── input components ────────────────────────────────────────────────────────────

function InputField({
  label,
  value,
  onChange,
  prefix = "",
  suffix = "",
  step = "1",
  min = "0",
  helper = "",
  type = "number",
}: {
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
  min?: string;
  helper?: string;
  type?: string;
}) {
  const inputId = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={inputId}
        className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide"
      >
        {label}
        {helper && (
          <span className="ml-2 font-normal text-slate-400 dark:text-slate-400 normal-case">
            ({helper})
          </span>
        )}
      </label>
      <div className="relative">
        {prefix && (
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-medium"
            aria-hidden="true"
          >
            {prefix}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          value={value}
          min={min}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          className={`w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all ${prefix ? "pl-8" : ""} ${suffix ? "pr-8" : ""}`}
        />
        {suffix && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-medium"
            aria-hidden="true"
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function LuxuryTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [itemPrice, setItemPrice] = useState(75000);
  const [category, setCategory] = useState<Category>("cars");
  const [customRate, setCustomRate] = useState(10);
  const [customThreshold, setCustomThreshold] = useState(10000);

  const taxResults = useMemo(
    () => calculateLuxuryTax(itemPrice, category, customRate, customThreshold),
    [itemPrice, category, customRate, customThreshold]
  );

  const CATEGORY_OPTIONS = [
    { value: "jewelry" as const, label: "Jewelry", icon: "💎", rate: "10%", threshold: "$5,000" },
    { value: "cars" as const, label: "Luxury Cars", icon: "🚗", rate: "15%", threshold: "$50,000" },
    { value: "yachts" as const, label: "Yachts", icon: "🛥️", rate: "20%", threshold: "$100,000" },
    { value: "watches" as const, label: "Luxury Watches", icon: "⌚", rate: "12%", threshold: "$3,000" },
    { value: "designer" as const, label: "Designer Goods", icon: "👜", rate: "8%", threshold: "$2,000" },
    { value: "custom" as const, label: "Custom", icon: "⚙️", rate: "Variable", threshold: "Variable" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
   

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Item Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="item-details-heading"
          >
            <h2
              id="item-details-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                >
                  💎
                </span>
              </span>
              Item Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Item Price"
                value={itemPrice}
                onChange={setItemPrice}
                prefix={symbol}
                step="1000"
                min="0"
                helper="purchase price"
              />
              <div>
                <label className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide mb-2 block">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category)}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  {CATEGORY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} ({option.rate})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {category === "custom" && (
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <InputField
                  label="Custom Tax Rate"
                  value={customRate}
                  onChange={setCustomRate}
                  suffix="%"
                  step="0.5"
                  min="0"
                  helper="luxury tax rate"
                />
                <InputField
                  label="Custom Threshold"
                  value={customThreshold}
                  onChange={setCustomThreshold}
                  prefix={symbol}
                  step="1000"
                  min="0"
                  helper="price threshold"
                />
              </div>
            )}
          </section>

          {/* Category Info */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="category-info-heading"
          >
            <h2
              id="category-info-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                >
                  📋
                </span>
              </span>
              Category Information
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CATEGORY_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setCategory(option.value)}
                  className={`p-3 sm:p-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    category === option.value
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                      : "border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-600"
                  }`}
                >
                  <div className="text-2xl sm:text-3xl mb-1" aria-hidden="true">
                    {option.icon}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                    {option.label}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {option.rate}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Tax Breakdown */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="tax-breakdown-heading"
          >
            <h2
              id="tax-breakdown-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-purple-600 dark:text-purple-400"
                  aria-hidden="true"
                >
                  📊
                </span>
              </span>
              Tax Breakdown
            </h2>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Item Price
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.itemPrice)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Luxury Tax Threshold
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.threshold)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Taxable Amount
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.taxableAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Luxury Tax Rate
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmtPct(taxResults.taxRate * 100)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Luxury Tax
                </span>
                <span className="font-bold text-lg text-red-600 dark:text-red-400">
                  {fmt(taxResults.luxuryTax)}
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Results Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Key Results */}
          <section
            className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-4 sm:p-6 text-white shadow-lg"
            aria-labelledby="results-heading"
          >
            <h2
              id="results-heading"
              className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-sm" aria-hidden="true">
                  📈
                </span>
              </span>
              Your Results
            </h2>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                  Total Cost
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.totalCost)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  including luxury tax
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Luxury Tax
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(taxResults.luxuryTax)}
                  </div>
                </div>
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Effective Tax Rate
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmtPct(taxResults.effectiveTaxRate)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Threshold Info */}
          <section
            className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4 sm:p-5 border border-amber-200 dark:border-amber-800"
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl sm:text-2xl" aria-hidden="true">
                💡
              </span>
              <div>
                <h3 className="font-bold text-amber-800 dark:text-amber-300 text-sm mb-1">
                  Luxury Tax Threshold
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  Luxury tax only applies to amounts above <strong>{fmt(taxResults.threshold)}</strong>.
                  {taxResults.itemPrice > taxResults.threshold
                    ? ` Your item qualifies for luxury tax on ${fmt(taxResults.taxableAmount)}.`
                    : " Your item is below the threshold, so no luxury tax applies."
                  }
                </p>
              </div>
            </div>
          </section>

          {/* Tax Tips */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-3 flex items-center gap-2">
              <span className="text-lg" aria-hidden="true">
                📝
              </span>
              Tax Tips
            </h3>
            <ul className="text-xs text-slate-800 dark:text-slate-400 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Luxury tax rates vary by country and product category.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Some items may be exempt from luxury tax in certain jurisdictions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Thresholds are adjusted periodically for inflation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Verify local luxury tax laws before making purchases.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Disclaimer */}
      <footer className="mt-6 sm:mt-8 p-3 sm:p-4 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-200 dark:border-slate-800">
        <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          <strong className="text-slate-800 dark:text-slate-100">
            Disclaimer:
          </strong>{" "}
          This luxury tax calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on simplified luxury tax rates and thresholds that vary by
          country, state, and jurisdiction. Actual luxury tax liability may vary based on specific product
          classifications, local regulations, and changes in tax laws. Always consult with a qualified tax
          professional for accurate luxury tax calculations.
        </p>
      </footer>
    </div>
  );
}
