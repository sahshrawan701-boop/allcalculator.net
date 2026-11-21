"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── tax calculation utilities ───────────────────────────────────────────────────

// 2024 Tax Brackets (Single Filer)
const TAX_BRACKETS_SINGLE = [
  { min: 0, max: 11600, rate: 0.10 },
  { min: 11600, max: 47150, rate: 0.12 },
  { min: 47150, max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
];

// 2024 Tax Brackets (Married Filing Jointly)
const TAX_BRACKETS_MARRIED = [
  { min: 0, max: 23200, rate: 0.10 },
  { min: 23200, max: 94300, rate: 0.12 },
  { min: 94300, max: 201050, rate: 0.22 },
  { min: 201050, max: 383900, rate: 0.24 },
  { min: 383900, max: 487450, rate: 0.32 },
  { min: 487450, max: 731200, rate: 0.35 },
  { min: 731200, max: Infinity, rate: 0.37 },
];

// Standard Deductions 2024
const STANDARD_DEDUCTION = {
  single: 14600,
  married: 29200,
};

// Self-Employment Tax Constants 2024
const SOCIAL_SECURITY_RATE = 0.124; // 12.4%
const MEDICARE_RATE = 0.029; // 2.9%
const ADDITIONAL_MEDICARE_RATE = 0.009; // 0.9%
const SOCIAL_SECURITY_WAGE_BASE = 168600;
const ADDITIONAL_MEDICARE_THRESHOLD = {
  single: 200000,
  married: 250000,
};

function calculateFederalIncomeTax(
  taxableIncome: number,
  filingStatus: "single" | "married"
): number {
  if (taxableIncome <= 0) return 0;

  const brackets =
    filingStatus === "single" ? TAX_BRACKETS_SINGLE : TAX_BRACKETS_MARRIED;
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

function calculateSelfEmploymentTax(netEarnings: number, filingStatus: "single" | "married"): number {
  if (netEarnings <= 0) return 0;

  // Only 92.35% of net earnings are subject to self-employment tax
  const subjectToSE = netEarnings * 0.9235;

  // Social Security tax (12.4% on first $168,600)
  const socialSecurityWageBase = Math.min(subjectToSE, SOCIAL_SECURITY_WAGE_BASE);
  const socialSecurityTax = socialSecurityWageBase * SOCIAL_SECURITY_RATE;

  // Medicare tax (2.9% on all earnings)
  const medicareTax = subjectToSE * MEDICARE_RATE;

  // Additional Medicare tax (0.9% on income above threshold)
  const additionalMedicareThreshold =
    filingStatus === "single"
      ? ADDITIONAL_MEDICARE_THRESHOLD.single
      : ADDITIONAL_MEDICARE_THRESHOLD.married;
  const additionalMedicareTax =
    subjectToSE > additionalMedicareThreshold
      ? (subjectToSE - additionalMedicareThreshold) * ADDITIONAL_MEDICARE_RATE
      : 0;

  return socialSecurityTax + medicareTax + additionalMedicareTax;
}

function calculateTaxes(
  grossIncome: number,
  businessExpenses: number,
  filingStatus: "single" | "married"
) {
  // Calculate net earnings
  const netEarnings = Math.max(0, grossIncome - businessExpenses);

  // Calculate self-employment tax
  const selfEmploymentTax = calculateSelfEmploymentTax(netEarnings, filingStatus);

  // Calculate taxable income for federal income tax
  // Standard deduction applies to net earnings
  const standardDeduction =
    filingStatus === "single"
      ? STANDARD_DEDUCTION.single
      : STANDARD_DEDUCTION.married;
  const taxableIncome = Math.max(0, netEarnings - standardDeduction);

  // Calculate federal income tax
  const federalIncomeTax = calculateFederalIncomeTax(taxableIncome, filingStatus);

  // Total tax liability
  const totalTax = selfEmploymentTax + federalIncomeTax;

  // Effective tax rate
  const effectiveTaxRate = netEarnings > 0 ? (totalTax / netEarnings) * 100 : 0;

  // Take-home pay
  const takeHomePay = netEarnings - totalTax;

  // Estimated quarterly payments (90% of total tax divided by 4)
  const quarterlyPayment = totalTax * 0.9 / 4;

  // Self-employment tax deduction (you can deduct 50% of SE tax from income tax)
  const seTaxDeduction = selfEmploymentTax * 0.5;

  return {
    grossIncome,
    businessExpenses,
    netEarnings,
    selfEmploymentTax,
    federalIncomeTax,
    totalTax,
    effectiveTaxRate,
    takeHomePay,
    quarterlyPayment,
    seTaxDeduction,
    taxableIncome,
    standardDeduction,
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

export default function TaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [grossIncome, setGrossIncome] = useState(75000);
  const [businessExpenses, setBusinessExpenses] = useState(5000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");

  const taxResults = useMemo(
    () => calculateTaxes(grossIncome, businessExpenses, filingStatus),
    [grossIncome, businessExpenses, filingStatus]
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
                label="Gross 1099 Income"
                value={grossIncome}
                onChange={setGrossIncome}
                prefix={symbol}
                step="1000"
                min="0"
                helper="total from 1099s"
              />
              <InputField
                label="Business Expenses"
                value={businessExpenses}
                onChange={setBusinessExpenses}
                prefix={symbol}
                step="500"
                min="0"
                helper="deductible expenses"
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
                  Net Earnings
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.netEarnings)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Standard Deduction
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.standardDeduction)}
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
                  Self-Employment Tax
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.selfEmploymentTax)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Federal Income Tax
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.federalIncomeTax)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Total Tax Liability
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
                  Take-Home Pay
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.takeHomePay)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  after all taxes
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
                    Quarterly Payment
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(taxResults.quarterlyPayment)}
                  </div>
                  <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                    estimated (90% rule)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SE Tax Deduction Notice */}
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
                  Self-Employment Tax Deduction
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  You can deduct <strong>{fmt(taxResults.seTaxDeduction)}</strong> (50% of your self-employment tax) from your federal income tax. This is already reflected in your calculations.
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
                <span>Track all business expenses throughout the year to maximize deductions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Pay estimated quarterly taxes to avoid penalties and interest.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consider opening a solo 401(k) or SEP IRA for tax-advantaged retirement savings.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult a tax professional for personalized advice on your specific situation.</span>
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
          This 1099 tax calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 tax rates and
          assume no state taxes, no other income sources, and standard deduction
          only. Actual tax liability may vary based on individual circumstances,
          deductions, credits, and changes in tax laws. Always consult with a
          qualified tax professional before making tax decisions.
        </p>
      </footer>
    </div>
  );
}
