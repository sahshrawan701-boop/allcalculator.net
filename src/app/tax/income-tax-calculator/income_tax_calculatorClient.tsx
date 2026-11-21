"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── income tax calculation utilities ─────────────────────────────────────

// 2024 Standard Deductions
const STANDARD_DEDUCTIONS = {
  single: 14600,
  married: 29200,
  headOfHousehold: 21900,
};

// 2024 Federal Tax Brackets
const FEDERAL_BRACKETS = {
  single: [
    { min: 0, max: 11600, rate: 0.10 },
    { min: 11600, max: 47150, rate: 0.12 },
    { min: 47150, max: 100525, rate: 0.22 },
    { min: 100525, max: 191950, rate: 0.24 },
    { min: 191950, max: 243725, rate: 0.32 },
    { min: 243725, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 },
  ],
  married: [
    { min: 0, max: 23200, rate: 0.10 },
    { min: 23200, max: 94300, rate: 0.12 },
    { min: 94300, max: 201050, rate: 0.22 },
    { min: 201050, max: 383900, rate: 0.24 },
    { min: 383900, max: 487450, rate: 0.32 },
    { min: 487450, max: 731200, rate: 0.35 },
    { min: 731200, max: Infinity, rate: 0.37 },
  ],
  headOfHousehold: [
    { min: 0, max: 16550, rate: 0.10 },
    { min: 16550, max: 63100, rate: 0.12 },
    { min: 63100, max: 100500, rate: 0.22 },
    { min: 100500, max: 191950, rate: 0.24 },
    { min: 191950, max: 243700, rate: 0.32 },
    { min: 243700, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 },
  ],
};

// State Tax Rates (simplified - flat rates for major states)
const STATE_TAX_RATES: Record<string, number> = {
  "none": 0,
  "california": 0.093, // Top rate
  "new-york": 0.0685, // Top rate
  "texas": 0,
  "florida": 0,
  "illinois": 0.0495,
  "custom": 0.05,
};

function calculateTaxUsingBrackets(taxableIncome: number, brackets: typeof FEDERAL_BRACKETS.single): number {
  if (taxableIncome <= 0) return 0;

  let tax = 0;
  let remainingIncome = taxableIncome;

  for (const bracket of brackets) {
    if (remainingIncome <= 0) break;

    const taxableInBracket = Math.min(
      remainingIncome,
      bracket.max - bracket.min
    );
    tax += taxableInBracket * bracket.rate;
    remainingIncome -= taxableInBracket;
  }

  return tax;
}

function calculateIncomeTax(
  grossIncome: number,
  filingStatus: "single" | "married" | "headOfHousehold",
  deductions: number,
  useStandardDeduction: boolean,
  state: string,
  customStateRate: number
) {
  // Determine deduction
  let totalDeduction = 0;
  if (useStandardDeduction) {
    totalDeduction = STANDARD_DEDUCTIONS[filingStatus];
  } else {
    totalDeduction = deductions;
  }

  // Calculate taxable income
  const taxableIncome = Math.max(0, grossIncome - totalDeduction);

  // Calculate federal tax
  const federalBrackets = FEDERAL_BRACKETS[filingStatus];
  const federalTax = calculateTaxUsingBrackets(taxableIncome, federalBrackets);

  // Calculate state tax
  const stateTaxRate = state === "custom" ? customStateRate / 100 : STATE_TAX_RATES[state];
  const stateTax = taxableIncome * stateTaxRate;

  // Total tax
  const totalTax = federalTax + stateTax;

  // Effective tax rate
  const effectiveTaxRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;

  // After-tax income
  const afterTaxIncome = grossIncome - totalTax;

  // Marginal federal rate
  let marginalFederalRate = 0;
  for (const bracket of federalBrackets) {
    if (taxableIncome > bracket.min) {
      marginalFederalRate = bracket.rate;
    }
  }

  return {
    grossIncome,
    filingStatus,
    standardDeduction: STANDARD_DEDUCTIONS[filingStatus],
    itemizedDeduction: deductions,
    useStandardDeduction,
    totalDeduction,
    taxableIncome,
    federalTax,
    stateTaxRate,
    stateTax,
    totalTax,
    effectiveTaxRate,
    afterTaxIncome,
    marginalFederalRate,
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

export default function IncomeTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [grossIncome, setGrossIncome] = useState(75000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married" | "headOfHousehold">("single");
  const [deductions, setDeductions] = useState(12000);
  const [useStandardDeduction, setUseStandardDeduction] = useState(true);
  const [state, setState] = useState("none");
  const [customStateRate, setCustomStateRate] = useState(5);

  const taxResults = useMemo(
    () => calculateIncomeTax(grossIncome, filingStatus, deductions, useStandardDeduction, state, customStateRate),
    [grossIncome, filingStatus, deductions, useStandardDeduction, state, customStateRate]
  );

  const STATE_OPTIONS = [
    { value: "none", label: "No State Tax", rate: "0%" },
    { value: "california", label: "California", rate: "~9.3%" },
    { value: "new-york", label: "New York", rate: "~6.85%" },
    { value: "texas", label: "Texas", rate: "0%" },
    { value: "florida", label: "Florida", rate: "0%" },
    { value: "illinois", label: "Illinois", rate: "4.95%" },
    { value: "custom", label: "Custom Rate", rate: "Variable" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
     

      {/* Filing Status Selector */}
      <section
        className="bg-white dark:bg-slate-900 rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 border border-slate-200 dark:border-slate-800 shadow-sm"
        aria-label="Filing status selection"
      >
        <label className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide mb-2 sm:mb-3 block">
          Filing Status
        </label>
        <div
          className="grid grid-cols-3 gap-2"
          role="radiogroup"
          aria-label="Select filing status"
        >
          {(["single", "married", "headOfHousehold"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilingStatus(status)}
              role="radio"
              aria-checked={filingStatus === status}
              aria-label={`${status === "single" ? "Single" : status === "married" ? "Married Filing Jointly" : "Head of Household"} filing status`}
              className={`flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                filingStatus === status
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-600"
              }`}
            >
              <span className="text-xl sm:text-2xl" aria-hidden="true">
                {status === "single" ? "👤" : status === "married" ? "👫" : "🏠"}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-800 dark:text-slate-100">
                {status === "single" ? "Single" : status === "married" ? "Married" : "Head of Household"}
              </span>
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Income Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="income-details-heading"
          >
            <h2
              id="income-details-heading"
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
              Income Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Gross Income"
                value={grossIncome}
                onChange={setGrossIncome}
                prefix={symbol}
                step="5000"
                min="0"
                helper="annual income"
              />
              <InputField
                label="Itemized Deductions"
                value={deductions}
                onChange={setDeductions}
                prefix={symbol}
                step="1000"
                min="0"
                helper="if not using standard"
              />
            </div>

            {/* Deduction Toggle */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={useStandardDeduction}
                  onChange={(e) => setUseStandardDeduction(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-200 text-emerald-600 focus:ring-emerald-500"
                />
                <div>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                    Use Standard Deduction
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {fmt(STANDARD_DEDUCTIONS[filingStatus])} for {filingStatus === "single" ? "Single" : filingStatus === "married" ? "Married" : "Head of Household"}
                  </p>
                </div>
              </label>
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
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                >
                  🗺️
                </span>
              </span>
              State Tax
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
                  Total Deduction
                </span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  {fmt(taxResults.totalDeduction)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Taxable Income
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.taxableIncome)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Federal Income Tax
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.federalTax)}
                </span>
              </div>
              {taxResults.stateTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    State Income Tax
                  </span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {fmt(taxResults.stateTax)}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Total Income Tax
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
                  After-Tax Income
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.afterTaxIncome)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  net income
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
                    Marginal Federal Rate
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmtPct(taxResults.marginalFederalRate * 100)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deduction Info */}
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
                  Deduction Comparison
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  Standard deduction: <strong>{fmt(taxResults.standardDeduction)}</strong><br />
                  Your itemized: <strong>{fmt(taxResults.itemizedDeduction)}</strong><br />
                  Using: <strong>{useStandardDeduction ? "Standard" : "Itemized"}</strong>
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
                <span>Itemize deductions only if they exceed the standard deduction.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Your marginal rate is the tax on your last dollar of income.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consider tax-advantaged accounts to reduce taxable income.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult a tax professional for personalized tax planning.</span>
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
          This income tax calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 tax brackets and simplified
          assumptions. Actual tax liability may vary based on individual circumstances,
          state-specific rules, credits, deductions, and changes in tax laws. Always consult with a
          qualified tax professional for accurate tax planning and filing.
        </p>
      </footer>
    </div>
  );
}
