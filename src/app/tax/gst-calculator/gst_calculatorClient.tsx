"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── GST calculation utilities ─────────────────────────────────────────────

type Country = "canada" | "india" | "australia" | "new-zealand" | "singapore" | "custom";

const GST_RATES: Record<Country, number> = {
  canada: 0.05, // 5%
  india: 0.18, // 18%
  australia: 0.10, // 10%
  "new-zealand": 0.15, // 15%
  singapore: 0.09, // 9%
  custom: 0.10, // Default custom rate
};

function calculateGST(
  amount: number,
  country: Country,
  customRate: number,
  isInclusive: boolean
) {
  const gstRate = country === "custom" ? customRate / 100 : GST_RATES[country];

  let baseAmount = 0;
  let gstAmount = 0;
  let totalAmount = 0;

  if (isInclusive) {
    // GST is already included in the amount
    totalAmount = amount;
    baseAmount = amount / (1 + gstRate);
    gstAmount = totalAmount - baseAmount;
  } else {
    // GST is not included in the amount
    baseAmount = amount;
    gstAmount = amount * gstRate;
    totalAmount = baseAmount + gstAmount;
  }

  return {
    amount,
    country,
    gstRate,
    customRate,
    isInclusive,
    baseAmount,
    gstAmount,
    totalAmount,
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

export default function GSTCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [amount, setAmount] = useState(1000);
  const [country, setCountry] = useState<Country>("canada");
  const [customRate, setCustomRate] = useState(10);
  const [isInclusive, setIsInclusive] = useState(false);

  const gstResults = useMemo(
    () => calculateGST(amount, country, customRate, isInclusive),
    [amount, country, customRate, isInclusive]
  );

  const COUNTRY_OPTIONS = [
    { value: "canada" as const, label: "Canada", rate: "5%" },
    { value: "india" as const, label: "India", rate: "18%" },
    { value: "australia" as const, label: "Australia", rate: "10%" },
    { value: "new-zealand" as const, label: "New Zealand", rate: "15%" },
    { value: "singapore" as const, label: "Singapore", rate: "9%" },
    { value: "custom" as const, label: "Custom Rate", rate: "Variable" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Amount and Country */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="amount-heading"
          >
            <h2
              id="amount-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                >
                  💰
                </span>
              </span>
              Amount & Country
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Amount"
                value={amount}
                onChange={setAmount}
                prefix={symbol}
                step="10"
                min="0"
                helper="price or total"
              />
              <div>
                <label className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide mb-2 block">
                  Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value as Country)}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  {COUNTRY_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} ({option.rate})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {country === "custom" && (
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800">
                <InputField
                  label="Custom GST Rate"
                  value={customRate}
                  onChange={setCustomRate}
                  suffix="%"
                  step="0.1"
                  min="0"
                  helper="enter your rate"
                />
              </div>
            )}
          </section>

          {/* Calculation Type */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="calculation-heading"
          >
            <h2
              id="calculation-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                >
                  📊
                </span>
              </span>
              Calculation Type
            </h2>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setIsInclusive(false)}
                className={`p-3 sm:p-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  !isInclusive
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                    : "border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-600"
                }`}
              >
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">
                  Add GST
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Amount excludes GST
                </div>
              </button>
              <button
                onClick={() => setIsInclusive(true)}
                className={`p-3 sm:p-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  isInclusive
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                    : "border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-600"
                }`}
              >
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">
                  Extract GST
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Amount includes GST
                </div>
              </button>
            </div>
          </section>

          {/* Breakdown */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="breakdown-heading"
          >
            <h2
              id="breakdown-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-purple-600 dark:text-purple-400"
                  aria-hidden="true"
                >
                  📋
                </span>
              </span>
              GST Breakdown
            </h2>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  {isInclusive ? "Original Amount (GST Inclusive)" : "Original Amount (GST Exclusive)"}
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(amount)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  GST Rate
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmtPct(gstResults.gstRate * 100)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  GST Amount
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(gstResults.gstAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Net Amount (Without GST)
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(gstResults.baseAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Total Amount
                </span>
                <span className="font-bold text-lg text-emerald-600 dark:text-emerald-400">
                  {fmt(gstResults.totalAmount)}
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
                  GST Amount
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(gstResults.gstAmount)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  at {fmtPct(gstResults.gstRate * 100)} rate
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Net Amount
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(gstResults.baseAmount)}
                  </div>
                </div>
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Total Amount
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(gstResults.totalAmount)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Country Info */}
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
                  GST Rate Info
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  <strong>{COUNTRY_OPTIONS.find((c) => c.value === country)?.label}</strong> has a GST rate of <strong>{fmtPct(gstResults.gstRate * 100)}</strong>.
                  {isInclusive ? " GST is already included in your amount." : " GST will be added to your amount."}
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
              GST Tips
            </h3>
            <ul className="text-xs text-slate-800 dark:text-slate-400 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Always verify the correct GST rate for your specific country.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Some items may be exempt or have reduced GST rates.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Keep accurate records for GST filing and refunds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult tax authorities for official GST regulations.</span>
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
          This GST calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on current GST rates and simplified
          assumptions. Actual GST liability may vary based on specific goods, exemptions,
          location, and changes in tax laws. Always consult with a qualified tax
          professional for accurate GST calculations and compliance.
        </p>
      </footer>
    </div>
  );
}
