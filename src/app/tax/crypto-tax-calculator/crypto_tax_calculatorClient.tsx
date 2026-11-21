"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── crypto tax calculation utilities ─────────────────────────────────────────

// 2024 Long-Term Capital Gains Tax Rates
const LTGC_RATES_SINGLE = [
  { min: 0, max: 47025, rate: 0 },
  { min: 47025, max: 518900, rate: 0.15 },
  { min: 518900, max: Infinity, rate: 0.20 },
];

const LTGC_RATES_MARRIED = [
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

// 2024 Ordinary Income Tax Brackets (for short-term gains)
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

function calculateLongTermCapitalGainsTax(
  capitalGain: number,
  taxableIncome: number,
  filingStatus: "single" | "married"
): number {
  if (capitalGain <= 0) return 0;

  const brackets =
    filingStatus === "single" ? LTGC_RATES_SINGLE : LTGC_RATES_MARRIED;
  let tax = 0;
  let remainingGain = capitalGain;

  for (const bracket of brackets) {
    if (remainingGain <= 0) break;

    const incomeInBracket = Math.min(
      Math.max(0, taxableIncome - bracket.min),
      bracket.max - bracket.min
    );
    
    const gainInBracket = Math.min(
      remainingGain,
      Math.max(0, bracket.max - bracket.min - incomeInBracket)
    );
    
    tax += gainInBracket * bracket.rate;
    remainingGain -= gainInBracket;
  }

  if (remainingGain > 0) {
    tax += remainingGain * brackets[brackets.length - 1].rate;
  }

  return tax;
}

function calculateCryptoTaxes(
  purchasePrice: number,
  salePrice: number,
  holdingPeriod: number,
  annualIncome: number,
  filingStatus: "single" | "married",
  otherDeductions: number,
  includeNIIT: boolean
) {
  // Calculate capital gain/loss
  const capitalGain = salePrice - purchasePrice;
  const isLoss = capitalGain < 0;
  const absoluteGain = Math.abs(capitalGain);

  // Determine if short-term or long-term
  const isLongTerm = holdingPeriod >= 12; // months
  const isShortTerm = holdingPeriod < 12;

  // Calculate taxable income (simplified)
  const taxableIncome = Math.max(0, annualIncome - otherDeductions);

  // Calculate NIIT (Net Investment Income Tax)
  let niitTax = 0;
  if (includeNIIT && !isLoss) {
    const niitThreshold =
      filingStatus === "single"
        ? NIIT_THRESHOLD.single
        : NIIT_THRESHOLD.married;
    const niitTaxableIncome = Math.max(0, taxableIncome - niitThreshold);
    niitTax = Math.min(capitalGain, niitTaxableIncome) * NIIT_RATE;
  }

  let capitalGainsTax = 0;
  let effectiveRate = 0;

  if (isLoss) {
    capitalGainsTax = 0;
    effectiveRate = 0;
  } else if (isShortTerm) {
    // Short-term gains taxed at ordinary income rates
    const totalTaxableIncome = taxableIncome + capitalGain;
    const taxOnIncome = calculateOrdinaryIncomeTax(taxableIncome, filingStatus);
    const taxOnTotal = calculateOrdinaryIncomeTax(totalTaxableIncome, filingStatus);
    capitalGainsTax = taxOnTotal - taxOnIncome;
    effectiveRate = capitalGain > 0 ? (capitalGainsTax / capitalGain) * 100 : 0;
  } else {
    // Long-term gains taxed at preferential rates
    capitalGainsTax = calculateLongTermCapitalGainsTax(
      capitalGain,
      taxableIncome,
      filingStatus
    );
    effectiveRate = capitalGain > 0 ? (capitalGainsTax / capitalGain) * 100 : 0;
  }

  // Total tax including NIIT
  const totalTax = capitalGainsTax + niitTax;

  // Net proceeds
  const netProceeds = salePrice - totalTax;

  // Total effective rate
  const totalEffectiveRate = capitalGain > 0 ? (totalTax / capitalGain) * 100 : 0;

  return {
    purchasePrice,
    salePrice,
    capitalGain,
    isLoss,
    absoluteGain,
    holdingPeriod,
    isLongTerm,
    isShortTerm,
    annualIncome,
    taxableIncome,
    capitalGainsTax,
    niitTax,
    totalTax,
    effectiveRate,
    totalEffectiveRate,
    netProceeds,
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

export default function CryptoTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [purchasePrice, setPurchasePrice] = useState(10000);
  const [salePrice, setSalePrice] = useState(25000);
  const [holdingPeriod, setHoldingPeriod] = useState(18);
  const [annualIncome, setAnnualIncome] = useState(75000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
  const [otherDeductions, setOtherDeductions] = useState(12000);
  const [includeNIIT, setIncludeNIIT] = useState(true);

  const taxResults = useMemo(
    () => calculateCryptoTaxes(purchasePrice, salePrice, holdingPeriod, annualIncome, filingStatus, otherDeductions, includeNIIT),
    [purchasePrice, salePrice, holdingPeriod, annualIncome, filingStatus, otherDeductions, includeNIIT]
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
          {/* Transaction Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="transaction-details-heading"
          >
            <h2
              id="transaction-details-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                >
                  ₿
                </span>
              </span>
              Transaction Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Purchase Price"
                value={purchasePrice}
                onChange={setPurchasePrice}
                prefix={symbol}
                step="1000"
                min="0"
                helper="cost basis"
              />
              <InputField
                label="Sale Price"
                value={salePrice}
                onChange={setSalePrice}
                prefix={symbol}
                step="1000"
                min="0"
                helper="proceeds"
              />
              <InputField
                label="Holding Period"
                value={holdingPeriod}
                onChange={setHoldingPeriod}
                suffix="months"
                step="1"
                min="0"
                helper="time held"
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
                  Capital Gain/Loss
                </span>
                <span className={`font-medium ${taxResults.isLoss ? "text-green-600 dark:text-green-400" : "text-slate-900 dark:text-slate-100"}`}>
                  {taxResults.isLoss ? "-" : ""}{fmt(taxResults.absoluteGain)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Holding Period
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {taxResults.holdingPeriod} months ({taxResults.isLongTerm ? "Long-term" : "Short-term"})
                </span>
              </div>
              {!taxResults.isLoss && (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-800 dark:text-slate-400">
                      Capital Gains Tax
                    </span>
                    <span className="font-medium text-red-600 dark:text-red-400">
                      {fmt(taxResults.capitalGainsTax)}
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
                </>
              )}
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
                  Net Proceeds
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.netProceeds)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  after taxes
                </div>
              </div>

              {!taxResults.isLoss && (
                <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                  <div>
                    <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                      Effective Tax Rate
                    </div>
                    <div className="text-lg sm:text-xl font-bold">
                      {fmtPct(taxResults.totalEffectiveRate)}
                    </div>
                  </div>
                  <div>
                    <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                      Tax Type
                    </div>
                    <div className="text-lg sm:text-xl font-bold">
                      {taxResults.isShortTerm ? "Short-term" : "Long-term"}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Tax Rate Info */}
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
                  {taxResults.isShortTerm ? "Short-Term Crypto Gains" : "Long-Term Crypto Gains"}
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  {taxResults.isShortTerm
                    ? "Held less than 12 months. Taxed at ordinary income rates (10%-37%) based on your tax bracket."
                    : "Held 12+ months. Taxed at preferential rates (0%, 15%, or 20%) based on your income level."
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
                <span>Hold crypto longer than 12 months to qualify for lower long-term capital gains rates.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Harvest losses to offset gains and reduce your tax liability.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Track all transactions accurately for proper cost basis calculation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult a tax professional familiar with cryptocurrency taxation.</span>
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
          This crypto tax calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 tax rates and simplified
          assumptions using FIFO method. Actual tax liability may vary based on transaction
          history, cost basis method, wash sale rules, state taxes, and changes in tax laws.
          Always consult with a qualified tax professional for accurate crypto tax reporting
          and compliance.
        </p>
      </footer>
    </div>
  );
}
