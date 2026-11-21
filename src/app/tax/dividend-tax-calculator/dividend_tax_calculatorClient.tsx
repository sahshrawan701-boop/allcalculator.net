"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── dividend tax calculation utilities ─────────────────────────────────────

// 2024 Qualified Dividend Tax Rates (same as long-term capital gains)
const QUALIFIED_DIVIDEND_RATES_SINGLE = [
  { min: 0, max: 47025, rate: 0 },
  { min: 47025, max: 518900, rate: 0.15 },
  { min: 518900, max: Infinity, rate: 0.20 },
];

const QUALIFIED_DIVIDEND_RATES_MARRIED = [
  { min: 0, max: 94050, rate: 0 },
  { min: 94050, max: 583750, rate: 0.15 },
  { min: 583750, max: Infinity, rate: 0.20 },
];

// Net Investment Income Tax (NIIT) thresholds
const NIIT_THRESHOLD = {
  single: 200000,
  married: 250000,
};
const NIIT_RATE = 0.038; // 3.8%

// 2024 Ordinary Income Tax Brackets (for non-qualified dividends)
const ORDINARY_BRACKETS_SINGLE = [
  { min: 0, max: 11600, rate: 0.10 },
  { min: 11600, max: 47150, rate: 0.12 },
  { min: 47150, max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
];

const ORDINARY_BRACKETS_MARRIED = [
  { min: 0, max: 23200, rate: 0.10 },
  { min: 23200, max: 94300, rate: 0.12 },
  { min: 94300, max: 201050, rate: 0.22 },
  { min: 201050, max: 383900, rate: 0.24 },
  { min: 383900, max: 487450, rate: 0.32 },
  { min: 487450, max: 731200, rate: 0.35 },
  { min: 731200, max: Infinity, rate: 0.37 },
];

function calculateOrdinaryIncomeTax(
  taxableIncome: number,
  filingStatus: "single" | "married"
): number {
  if (taxableIncome <= 0) return 0;

  const brackets =
    filingStatus === "single"
      ? ORDINARY_BRACKETS_SINGLE
      : ORDINARY_BRACKETS_MARRIED;
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

function calculateQualifiedDividendTax(
  dividendAmount: number,
  taxableIncome: number,
  filingStatus: "single" | "married"
): number {
  if (dividendAmount <= 0) return 0;

  const brackets =
    filingStatus === "single"
      ? QUALIFIED_DIVIDEND_RATES_SINGLE
      : QUALIFIED_DIVIDEND_RATES_MARRIED;
  let tax = 0;
  let remainingDividend = dividendAmount;

  for (const bracket of brackets) {
    if (remainingDividend <= 0) break;

    const incomeInBracket = Math.min(
      Math.max(0, taxableIncome - bracket.min),
      bracket.max - bracket.min
    );
    
    const dividendInBracket = Math.min(
      remainingDividend,
      Math.max(0, bracket.max - bracket.min - incomeInBracket)
    );
    
    tax += dividendInBracket * bracket.rate;
    remainingDividend -= dividendInBracket;
  }

  if (remainingDividend > 0) {
    tax += remainingDividend * brackets[brackets.length - 1].rate;
  }

  return tax;
}

function calculateDividendTaxes(
  qualifiedDividends: number,
  nonQualifiedDividends: number,
  annualIncome: number,
  filingStatus: "single" | "married",
  otherDeductions: number,
  includeNIIT: boolean
) {
  const totalDividends = qualifiedDividends + nonQualifiedDividends;

  // Calculate taxable income (simplified)
  const taxableIncome = Math.max(0, annualIncome - otherDeductions);

  // Calculate tax on qualified dividends
  const qualifiedDividendTax = calculateQualifiedDividendTax(
    qualifiedDividends,
    taxableIncome,
    filingStatus
  );

  // Calculate tax on non-qualified dividends (ordinary income rates)
  const totalTaxableIncome = taxableIncome + nonQualifiedDividends;
  const taxOnIncome = calculateOrdinaryIncomeTax(taxableIncome, filingStatus);
  const taxOnTotal = calculateOrdinaryIncomeTax(totalTaxableIncome, filingStatus);
  const nonQualifiedDividendTax = taxOnTotal - taxOnIncome;

  // Calculate NIIT (Net Investment Income Tax)
  let niitTax = 0;
  if (includeNIIT) {
    const niitThreshold =
      filingStatus === "single"
        ? NIIT_THRESHOLD.single
        : NIIT_THRESHOLD.married;
    const niitTaxableIncome = Math.max(0, taxableIncome - niitThreshold);
    niitTax = Math.min(totalDividends, niitTaxableIncome) * NIIT_RATE;
  }

  // Total tax
  const totalTax = qualifiedDividendTax + nonQualifiedDividendTax + niitTax;

  // After-tax dividends
  const afterTaxDividends = totalDividends - totalTax;

  // Effective tax rate
  const effectiveTaxRate = totalDividends > 0 ? (totalTax / totalDividends) * 100 : 0;

  // Tax savings from qualified vs non-qualified
  const ifAllNonQualified = calculateOrdinaryIncomeTax(taxableIncome + totalDividends, filingStatus) - taxOnIncome;
  const taxSavings = ifAllNonQualified - totalTax;

  return {
    qualifiedDividends,
    nonQualifiedDividends,
    totalDividends,
    annualIncome,
    taxableIncome,
    qualifiedDividendTax,
    nonQualifiedDividendTax,
    niitTax,
    totalTax,
    afterTaxDividends,
    effectiveTaxRate,
    taxSavings,
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

export default function DividendTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [qualifiedDividends, setQualifiedDividends] = useState(5000);
  const [nonQualifiedDividends, setNonQualifiedDividends] = useState(2000);
  const [annualIncome, setAnnualIncome] = useState(75000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
  const [otherDeductions, setOtherDeductions] = useState(12000);
  const [includeNIIT, setIncludeNIIT] = useState(true);

  const taxResults = useMemo(
    () => calculateDividendTaxes(qualifiedDividends, nonQualifiedDividends, annualIncome, filingStatus, otherDeductions, includeNIIT),
    [qualifiedDividends, nonQualifiedDividends, annualIncome, filingStatus, otherDeductions, includeNIIT]
  );

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
          className="grid grid-cols-2 gap-2"
          role="radiogroup"
          aria-label="Select filing status"
        >
          {(["single", "married"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilingStatus(status)}
              role="radio"
              aria-checked={filingStatus === status}
              aria-label={`${status === "single" ? "Single" : "Married Filing Jointly"} filing status`}
              className={`flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                filingStatus === status
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-600"
              }`}
            >
              <span className="text-xl sm:text-2xl" aria-hidden="true">
                {status === "single" ? "👤" : "👫"}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-800 dark:text-slate-100">
                {status === "single" ? "Single" : "Married Filing Jointly"}
              </span>
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Dividend Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="dividend-details-heading"
          >
            <h2
              id="dividend-details-heading"
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
              Dividend Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Qualified Dividends"
                value={qualifiedDividends}
                onChange={setQualifiedDividends}
                prefix={symbol}
                step="500"
                min="0"
                helper="lower tax rates"
              />
              <InputField
                label="Non-Qualified Dividends"
                value={nonQualifiedDividends}
                onChange={setNonQualifiedDividends}
                prefix={symbol}
                step="500"
                min="0"
                helper="ordinary income rates"
              />
              <InputField
                label="Annual Income"
                value={annualIncome}
                onChange={setAnnualIncome}
                prefix={symbol}
                step="5000"
                min="0"
                helper="for tax bracket"
              />
              <InputField
                label="Other Deductions"
                value={otherDeductions}
                onChange={setOtherDeductions}
                prefix={symbol}
                step="1000"
                min="0"
                helper="standard deduction, etc."
              />
            </div>

            {/* NIIT Toggle */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeNIIT}
                  onChange={(e) => setIncludeNIIT(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-200 text-emerald-600 focus:ring-emerald-500"
                />
                <div>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
                    Include NIIT (Net Investment Income Tax)
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {fmtPct(NIIT_RATE * 100)} on investment income above threshold
                  </p>
                </div>
              </label>
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
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400"
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
                  Total Dividends
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.totalDividends)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Qualified Dividend Tax
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.qualifiedDividendTax)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Non-Qualified Dividend Tax
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.nonQualifiedDividendTax)}
                </span>
              </div>
              {includeNIIT && taxResults.niitTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    NIIT (3.8%)
                  </span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {fmt(taxResults.niitTax)}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Total Tax
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
                  After-Tax Dividends
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.afterTaxDividends)}
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
                {taxResults.taxSavings > 0 && (
                  <div>
                    <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                      Tax Savings
                    </div>
                    <div className="text-lg sm:text-xl font-bold">
                      {fmt(taxResults.taxSavings)}
                    </div>
                    <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                      vs all non-qualified
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Qualified Dividend Info */}
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
                  Qualified Dividends
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  Qualified dividends are taxed at preferential rates (0%, 15%, or 20%) instead of ordinary income rates. 
                  To qualify, you must hold the stock for more than 60 days during the 121-day period that begins 60 days before the ex-dividend date.
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
                <span>Hold stocks for the required period to qualify for lower dividend tax rates.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Focus on qualified dividend-paying stocks for tax-efficient income.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consider holding dividend stocks in tax-advantaged accounts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult a tax professional for personalized investment tax advice.</span>
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
          This dividend tax calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 tax rates and simplified
          assumptions. Actual tax liability may vary based on individual circumstances,
          holding periods, state taxes, and changes in tax laws. Always consult with a
          qualified tax professional for accurate tax planning and investment advice.
        </p>
      </footer>
    </div>
  );
}
