"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

// ─── Medicare tax calculation utilities ─────────────────────────────────────

// 2024 Medicare Tax Constants
const MEDICARE_TAX_RATE = 0.0145; // 1.45% employee portion
const ADDITIONAL_MEDICARE_TAX_RATE = 0.009; // 0.9% additional tax
const NIIT_RATE = 0.038; // 3.8% Net Investment Income Tax

// Thresholds for Additional Medicare Tax
const ADDITIONAL_MEDICARE_THRESHOLDS = {
  single: 200000,
  married: 250000,
  headOfHousehold: 200000,
};

// Thresholds for NIIT
const NIIT_THRESHOLDS = {
  single: 200000,
  married: 250000,
  headOfHousehold: 200000,
};

function calculateMedicareTax(
  wages: number,
  filingStatus: "single" | "married" | "headOfHousehold",
  investmentIncome: number,
  selfEmploymentIncome: number
) {
  // Standard Medicare tax (employee portion only)
  const standardMedicareTax = wages * MEDICARE_TAX_RATE;

  // Additional Medicare Tax (0.9% on wages above threshold)
  const additionalThreshold = ADDITIONAL_MEDICARE_THRESHOLDS[filingStatus];
  const wagesAboveThreshold = Math.max(0, wages - additionalThreshold);
  const additionalMedicareTax = wagesAboveThreshold * ADDITIONAL_MEDICARE_TAX_RATE;

  // Self-employment Medicare tax (2.9% total, but we'll show employee portion)
  const selfEmploymentMedicareTax = selfEmploymentIncome * 0.9235 * 0.029;

  // Net Investment Income Tax (3.8% on investment income above threshold)
  const niitThreshold = NIIT_THRESHOLDS[filingStatus];
  const investmentAboveThreshold = Math.max(0, investmentIncome - niitThreshold);
  const niitTax = investmentAboveThreshold * NIIT_RATE;

  // Total Medicare taxes
  const totalMedicareTax = standardMedicareTax + additionalMedicareTax + selfEmploymentMedicareTax + niitTax;

  // Employer portion (for reference)
  const employerMedicareTax = wages * MEDICARE_TAX_RATE;

  return {
    wages,
    filingStatus,
    investmentIncome,
    selfEmploymentIncome,
    standardMedicareTax,
    additionalThreshold,
    wagesAboveThreshold,
    additionalMedicareTax,
    selfEmploymentMedicareTax,
    niitThreshold,
    investmentAboveThreshold,
    niitTax,
    totalMedicareTax,
    employerMedicareTax,
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

export default function MedicareTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [wages, setWages] = useState(150000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married" | "headOfHousehold">("single");
  const [investmentIncome, setInvestmentIncome] = useState(50000);
  const [selfEmploymentIncome, setSelfEmploymentIncome] = useState(0);

  const taxResults = useMemo(
    () => calculateMedicareTax(wages, filingStatus, investmentIncome, selfEmploymentIncome),
    [wages, filingStatus, investmentIncome, selfEmploymentIncome]
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <InputField
                label="Wages"
                value={wages}
                onChange={setWages}
                prefix={symbol}
                step="10000"
                min="0"
                helper="employment income"
              />
              <InputField
                label="Investment Income"
                value={investmentIncome}
                onChange={setInvestmentIncome}
                prefix={symbol}
                step="5000"
                min="0"
                helper="interest, dividends"
              />
              <InputField
                label="Self-Employment Income"
                value={selfEmploymentIncome}
                onChange={setSelfEmploymentIncome}
                prefix={symbol}
                step="5000"
                min="0"
                helper="net earnings"
              />
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
                  Standard Medicare Tax (1.45%)
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.standardMedicareTax)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Additional Medicare Tax (0.9%)
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.additionalMedicareTax)}
                </span>
              </div>
              {taxResults.selfEmploymentMedicareTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    Self-Employment Medicare Tax (2.9%)
                  </span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {fmt(taxResults.selfEmploymentMedicareTax)}
                  </span>
                </div>
              )}
              {taxResults.niitTax > 0 && (
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
                  Total Medicare Tax
                </span>
                <span className="font-bold text-lg text-red-600 dark:text-red-400">
                  {fmt(taxResults.totalMedicareTax)}
                </span>
              </div>
            </div>
          </section>

          {/* Threshold Info */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="threshold-heading"
          >
            <h2
              id="threshold-heading"
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
              Threshold Information
            </h2>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Additional Medicare Tax Threshold
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.additionalThreshold)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Wages Above Threshold
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.wagesAboveThreshold)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  NIIT Threshold
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.niitThreshold)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Investment Income Above Threshold
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.investmentAboveThreshold)}
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
                  Total Medicare Tax
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.totalMedicareTax)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  annual Medicare taxes
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Standard Medicare
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(taxResults.standardMedicareTax)}
                  </div>
                </div>
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Additional Taxes
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(taxResults.additionalMedicareTax + taxResults.niitTax + taxResults.selfEmploymentMedicareTax)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Medicare Tax Info */}
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
                  Medicare Tax Structure
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  Standard Medicare tax is <strong>1.45%</strong> on all wages. Additional Medicare tax of <strong>0.9%</strong> applies to wages above <strong>{fmt(taxResults.additionalThreshold)}</strong>.
                  NIIT of <strong>3.8%</strong> applies to investment income above <strong>{fmt(taxResults.niitThreshold)}</strong>.
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
                <span>Medicare tax has no wage base limit unlike Social Security tax.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Additional Medicare tax applies to high earners regardless of filing status.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>NIIT applies to net investment income including capital gains and dividends.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Self-employed individuals pay both employer and employee portions.</span>
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
          This Medicare tax calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 Medicare tax rules and simplified
          assumptions. Actual Medicare tax liability may vary based on individual circumstances,
          income types, deductions, and changes in tax laws. Always consult with a qualified tax
          professional for accurate Medicare tax planning.
        </p>
      </footer>
    </div>
  );
}
