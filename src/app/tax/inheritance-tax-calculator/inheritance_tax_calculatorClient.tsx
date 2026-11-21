"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── inheritance tax calculation utilities ─────────────────────────────────────

// 2024 Federal Estate Tax Exemption
const FEDERAL_EXEMPTION = {
  individual: 13610000,
  married: 27220000,
};

// Federal Estate Tax Rate
const ESTATE_TAX_RATE = 0.40; // 40%

// State Inheritance Tax Rates (simplified - some states have inheritance tax)
const STATE_INHERITANCE_TAX_RATES: Record<string, number> = {
  "none": 0,
  "iowa": 0.10, // Up to 10% depending on relationship
  "kentucky": 0.16, // Up to 16% depending on relationship
  "maryland": 0.10, // Up to 10% depending on relationship
  "nebraska": 0.18, // Up to 18% depending on relationship
  "new-jersey": 0.16, // Up to 16% depending on relationship
  "pennsylvania": 0.15, // Up to 15% depending on relationship
  "custom": 0.10,
};

// Relationship-based tax multipliers (simplified)
const RELATIONSHIP_MULTIPLIERS: Record<string, number> = {
  spouse: 0, // Spouses typically exempt
  child: 1.0, // Full rate for children
  sibling: 1.0, // Full rate for siblings
  parent: 1.0, // Full rate for parents
  other: 1.0, // Full rate for others
};

function calculateInheritanceTax(
  estateValue: number,
  maritalStatus: "single" | "married",
  relationship: "spouse" | "child" | "sibling" | "parent" | "other",
  state: string,
  customStateRate: number,
  deductions: number
) {
  // Determine federal exemption
  const exemption = maritalStatus === "married" ? FEDERAL_EXEMPTION.married : FEDERAL_EXEMPTION.individual;

  // Calculate taxable estate (federal)
  const taxableEstate = Math.max(0, estateValue - deductions - exemption);

  // Calculate federal estate tax
  const federalEstateTax = taxableEstate * ESTATE_TAX_RATE;

  // Calculate state inheritance tax
  const stateTaxRate = state === "custom" ? customStateRate / 100 : STATE_INHERITANCE_TAX_RATES[state];
  const relationshipMultiplier = RELATIONSHIP_MULTIPLIERS[relationship];
  const stateInheritanceTax = estateValue * stateTaxRate * relationshipMultiplier;

  // Total inheritance tax
  const totalTax = federalEstateTax + stateInheritanceTax;

  // Net inheritance to heirs
  const netInheritance = estateValue - deductions - totalTax;

  // Effective tax rate
  const effectiveTaxRate = estateValue > 0 ? (totalTax / estateValue) * 100 : 0;

  // Taxable percentage
  const taxablePercentage = estateValue > 0 ? (taxableEstate / estateValue) * 100 : 0;

  return {
    estateValue,
    maritalStatus,
    relationship,
    exemption,
    deductions,
    taxableEstate,
    federalEstateTax,
    state,
    stateTaxRate,
    relationshipMultiplier,
    stateInheritanceTax,
    totalTax,
    netInheritance,
    effectiveTaxRate,
    taxablePercentage,
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

export default function InheritanceTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [estateValue, setEstateValue] = useState(15000000);
  const [maritalStatus, setMaritalStatus] = useState<"single" | "married">("single");
  const [relationship, setRelationship] = useState<"spouse" | "child" | "sibling" | "parent" | "other">("child");
  const [state, setState] = useState("none");
  const [customStateRate, setCustomStateRate] = useState(10);
  const [deductions, setDeductions] = useState(500000);

  const taxResults = useMemo(
    () => calculateInheritanceTax(estateValue, maritalStatus, relationship, state, customStateRate, deductions),
    [estateValue, maritalStatus, relationship, state, customStateRate, deductions]
  );

  const STATE_OPTIONS = [
    { value: "none", label: "No State Tax", rate: "0%" },
    { value: "iowa", label: "Iowa", rate: "Up to 10%" },
    { value: "kentucky", label: "Kentucky", rate: "Up to 16%" },
    { value: "maryland", label: "Maryland", rate: "Up to 10%" },
    { value: "nebraska", label: "Nebraska", rate: "Up to 18%" },
    { value: "new-jersey", label: "New Jersey", rate: "Up to 16%" },
    { value: "pennsylvania", label: "Pennsylvania", rate: "Up to 15%" },
    { value: "custom", label: "Custom Rate", rate: "Variable" },
  ];

  const RELATIONSHIP_OPTIONS = [
    { value: "spouse", label: "Spouse", icon: "💑" },
    { value: "child", label: "Child", icon: "👶" },
    { value: "sibling", label: "Sibling", icon: "👫" },
    { value: "parent", label: "Parent", icon: "👴" },
    { value: "other", label: "Other", icon: "👥" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
   

      {/* Marital Status Selector */}
      <section
        className="bg-white dark:bg-slate-900 rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 border border-slate-200 dark:border-slate-800 shadow-sm"
        aria-label="Marital status selection"
      >
        <label className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide mb-2 sm:mb-3 block">
          Marital Status
        </label>
        <div
          className="grid grid-cols-2 gap-2"
          role="radiogroup"
          aria-label="Select marital status"
        >
          {(["single", "married"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setMaritalStatus(status)}
              role="radio"
              aria-checked={maritalStatus === status}
              aria-label={`${status === "single" ? "Single" : "Married"} marital status`}
              className={`flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                maritalStatus === status
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-600"
              }`}
            >
              <span className="text-xl sm:text-2xl" aria-hidden="true">
                {status === "single" ? "👤" : "👫"}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-800 dark:text-slate-100">
                {status === "single" ? "Single" : "Married"}
              </span>
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Estate Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="estate-details-heading"
          >
            <h2
              id="estate-details-heading"
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
              Estate Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Estate Value"
                value={estateValue}
                onChange={setEstateValue}
                prefix={symbol}
                step="100000"
                min="0"
                helper="total assets"
              />
              <InputField
                label="Deductions"
                value={deductions}
                onChange={setDeductions}
                prefix={symbol}
                step="50000"
                min="0"
                helper="debts, expenses"
              />
            </div>
          </section>

          {/* Relationship Selector */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="relationship-heading"
          >
            <h2
              id="relationship-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                >
                  👥
                </span>
              </span>
              Relationship to Deceased
            </h2>

            <div className="grid grid-cols-5 gap-2">
              {RELATIONSHIP_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setRelationship(option.value as typeof relationship)}
                  className={`flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    relationship === option.value
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                      : "border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-600"
                  }`}
                >
                  <span className="text-lg sm:text-xl" aria-hidden="true">
                    {option.icon}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-slate-800 dark:text-slate-100">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* State Selection */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="state-heading"
          >
            <h2
              id="state-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-purple-600 dark:text-purple-400"
                  aria-hidden="true"
                >
                  🗺️
                </span>
              </span>
              State Inheritance Tax
            </h2>

            <div>
              <label className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide mb-2 block">
                State
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              >
                {STATE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label} ({option.rate})
                  </option>
                ))}
              </select>
            </div>

            {state === "custom" && (
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800">
                <InputField
                  label="Custom State Rate"
                  value={customStateRate}
                  onChange={setCustomStateRate}
                  suffix="%"
                  step="0.1"
                  min="0"
                  helper="enter your rate"
                />
              </div>
            )}
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
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-amber-600 dark:text-amber-400"
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
                  Exemption
                </span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  {fmt(taxResults.exemption)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Taxable Estate
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.taxableEstate)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Federal Estate Tax (40%)
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.federalEstateTax)}
                </span>
              </div>
              {taxResults.stateInheritanceTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    State Inheritance Tax
                  </span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {fmt(taxResults.stateInheritanceTax)}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Total Inheritance Tax
                </span>
                <span className="font-bold text-lg text-red-600 dark:text-red-400">
                  {fmt(taxResults.totalTax)}
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
                  Net Inheritance
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.netInheritance)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  to heirs
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Effective Tax Rate
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmtPct(taxResults.effectiveTaxRate)}
                  </div>
                </div>
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Taxable Estate
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(taxResults.taxableEstate)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Exemption Info */}
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
                  Federal Exemption
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  Your {maritalStatus === "married" ? "married" : "single"} exemption is <strong>{fmt(taxResults.exemption)}</strong>. 
                  Only amounts above this threshold are subject to the 40% federal estate tax.
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
                <span>Spouses are typically exempt from both federal and state inheritance taxes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Only 6 states and DC have inheritance taxes (separate from estate tax).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Relationship to the deceased affects state inheritance tax rates.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult an estate planning attorney for comprehensive strategies.</span>
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
          This inheritance tax calculator is for educational purposes only and does not
          constitute tax or legal advice. Calculations are based on 2024 federal estate tax rules and simplified
          state inheritance tax assumptions. Actual tax liability may vary based on estate structure,
          state-specific rules, relationship classifications, and changes in tax laws. Always consult with a
          qualified estate planning attorney or tax professional for accurate inheritance tax planning.
        </p>
      </footer>
    </div>
  );
}
