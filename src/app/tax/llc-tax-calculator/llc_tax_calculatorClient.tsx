"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── LLC tax calculation utilities ─────────────────────────────────────

// 2024 Tax Constants
const SOCIAL_SECURITY_WAGE_BASE = 168600;
const STANDARD_DEDUCTION = 14600;
const QBI_DEDUCTION_RATE = 0.20; // 20% pass-through deduction

// 2024 Federal Income Tax Brackets (Single)
const TAX_BRACKETS = [
  { min: 0, max: 11600, rate: 0.10 },
  { min: 11600, max: 47150, rate: 0.12 },
  { min: 47150, max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
];

function calculateFederalIncomeTax(taxableIncome: number): number {
  if (taxableIncome <= 0) return 0;

  let tax = 0;
  let remainingIncome = taxableIncome;

  for (const bracket of TAX_BRACKETS) {
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

function calculateLLCTax(
  businessIncome: number,
  businessExpenses: number,
  filingStatus: "single" | "married",
  taxStructure: "pass-through" | "s-corp" | "c-corp",
  salary: number
) {
  // Calculate net business income
  const netBusinessIncome = Math.max(0, businessIncome - businessExpenses);

  let selfEmploymentTax = 0;
  let deductibleSETax = 0;
  let qbiDeduction = 0;
  let federalIncomeTax = 0;
  let corporateTax = 0;
  let totalTax = 0;
  let netIncome = 0;

  if (taxStructure === "pass-through") {
    // Pass-through taxation (default LLC)
    const netEarnings = netBusinessIncome * 0.9235; // 92.35% of net income

    // Self-employment tax
    const socialSecurityTaxable = Math.min(netEarnings, SOCIAL_SECURITY_WAGE_BASE);
    const socialSecurityTax = socialSecurityTaxable * 0.124;
    const medicareTax = netEarnings * 0.029;
    selfEmploymentTax = socialSecurityTax + medicareTax;
    deductibleSETax = selfEmploymentTax * 0.5;

    // QBI deduction (20% of qualified business income, simplified)
    const qbiEligible = netBusinessIncome;
    qbiDeduction = qbiEligible * QBI_DEDUCTION_RATE;

    // Taxable income for federal tax
    const taxableIncome = Math.max(0, netBusinessIncome - deductibleSETax - qbiDeduction - STANDARD_DEDUCTION);

    // Federal income tax
    federalIncomeTax = calculateFederalIncomeTax(taxableIncome);

    totalTax = selfEmploymentTax + federalIncomeTax;
    netIncome = netBusinessIncome - totalTax;

  } else if (taxStructure === "s-corp") {
    // S-Corp taxation
    const salaryTaxable = Math.min(salary, SOCIAL_SECURITY_WAGE_BASE);
    const salarySETax = salaryTaxable * 0.124 + salary * 0.029;
    const deductibleSalarySETax = salarySETax * 0.5;

    const dividendIncome = Math.max(0, netBusinessIncome - salary);
    qbiDeduction = dividendIncome * QBI_DEDUCTION_RATE;

    const taxableIncome = Math.max(0, salary - deductibleSalarySETax + dividendIncome - qbiDeduction - STANDARD_DEDUCTION);
    federalIncomeTax = calculateFederalIncomeTax(taxableIncome);

    totalTax = salarySETax + federalIncomeTax;
    netIncome = netBusinessIncome - totalTax;

  } else if (taxStructure === "c-corp") {
    // C-Corp taxation
    const corporateTaxRate = 0.21; // 21% flat rate
    const corporateTaxableIncome = netBusinessIncome;
    corporateTax = corporateTaxableIncome * corporateTaxRate;

    const afterTaxCorporateIncome = netBusinessIncome - corporateTax;
    
    // Assume owner takes all as dividends (qualified)
    const dividendTaxRate = 0.15; // 15% qualified dividend rate
    const dividendTax = afterTaxCorporateIncome * dividendTaxRate;

    totalTax = corporateTax + dividendTax;
    netIncome = netBusinessIncome - totalTax;
  }

  // Effective tax rate
  const effectiveTaxRate = netBusinessIncome > 0 ? (totalTax / netBusinessIncome) * 100 : 0;

  return {
    businessIncome,
    businessExpenses,
    netBusinessIncome,
    filingStatus,
    taxStructure,
    salary,
    selfEmploymentTax,
    deductibleSETax,
    qbiDeduction,
    federalIncomeTax,
    corporateTax,
    totalTax,
    netIncome,
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

export default function LLCTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [businessIncome, setBusinessIncome] = useState(150000);
  const [businessExpenses, setBusinessExpenses] = useState(50000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
  const [taxStructure, setTaxStructure] = useState<"pass-through" | "s-corp" | "c-corp">("pass-through");
  const [salary, setSalary] = useState(60000);

  const taxResults = useMemo(
    () => calculateLLCTax(businessIncome, businessExpenses, filingStatus, taxStructure, salary),
    [businessIncome, businessExpenses, filingStatus, taxStructure, salary]
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
          {/* Business Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="business-details-heading"
          >
            <h2
              id="business-details-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                >
                  💼
                </span>
              </span>
              Business Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Business Income"
                value={businessIncome}
                onChange={setBusinessIncome}
                prefix={symbol}
                step="10000"
                min="0"
                helper="annual revenue"
              />
              <InputField
                label="Business Expenses"
                value={businessExpenses}
                onChange={setBusinessExpenses}
                prefix={symbol}
                step="5000"
                min="0"
                helper="deductible costs"
              />
            </div>
          </section>

          {/* Tax Structure Selector */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="structure-heading"
          >
            <h2
              id="structure-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                >
                  🏢
                </span>
              </span>
              Tax Structure
            </h2>

            <div className="grid grid-cols-3 gap-2">
              {(["pass-through", "s-corp", "c-corp"] as const).map((structure) => (
                <button
                  key={structure}
                  onClick={() => setTaxStructure(structure)}
                  className={`p-3 sm:p-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    taxStructure === structure
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                      : "border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-600"
                  }`}
                >
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    {structure === "pass-through" ? "Pass-Through" : structure === "s-corp" ? "S-Corp" : "C-Corp"}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {structure === "pass-through" ? "Default LLC" : structure === "s-corp" ? "Election" : "Corporate"}
                  </div>
                </button>
              ))}
            </div>

            {taxStructure !== "pass-through" && (
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800">
                <InputField
                  label="Owner Salary"
                  value={salary}
                  onChange={setSalary}
                  prefix={symbol}
                  step="5000"
                  min="0"
                  helper="reasonable salary"
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
                  Net Business Income
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.netBusinessIncome)}
                </span>
              </div>
              {taxStructure === "pass-through" && (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-800 dark:text-slate-400">
                      Self-Employment Tax (15.3%)
                    </span>
                    <span className="font-medium text-red-600 dark:text-red-400">
                      {fmt(taxResults.selfEmploymentTax)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-800 dark:text-slate-400">
                      QBI Deduction (20%)
                    </span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      {fmt(taxResults.qbiDeduction)}
                    </span>
                  </div>
                </>
              )}
              {taxStructure === "s-corp" && (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-800 dark:text-slate-400">
                      Payroll Tax on Salary
                    </span>
                    <span className="font-medium text-red-600 dark:text-red-400">
                      {fmt(taxResults.selfEmploymentTax)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-800 dark:text-slate-400">
                      QBI Deduction (20%)
                    </span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      {fmt(taxResults.qbiDeduction)}
                    </span>
                  </div>
                </>
              )}
              {taxStructure === "c-corp" && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    Corporate Tax (21%)
                  </span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {fmt(taxResults.corporateTax)}
                  </span>
                </div>
              )}
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
                  Net Income
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.netIncome)}
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
                    Total Tax
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(taxResults.totalTax)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Structure Info */}
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
                  {taxStructure === "pass-through" ? "Pass-Through" : taxStructure === "s-corp" ? "S-Corp Election" : "C-Corp"}
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  {taxStructure === "pass-through" 
                    ? "Default LLC taxation. All income passes through to your personal tax return with self-employment tax. Simple but may have higher taxes at high income levels."
                    : taxStructure === "s-corp"
                    ? "Elect S-Corp status to save on self-employment tax. Must pay yourself a reasonable salary. Best for LLCs with substantial profits."
                    : "C-Corp taxation. Corporate tax at 21% plus dividend tax on distributions. Double taxation but may benefit from retained earnings."
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
                <span>Pass-through is simplest but may cost more in self-employment tax.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>S-Corp election can save taxes if profits exceed reasonable salary.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>QBI deduction provides 20% pass-through deduction on qualified income.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult a tax professional for LLC election decisions.</span>
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
          This LLC tax calculator is for educational purposes only and does not
          constitute tax or legal advice. Calculations are based on 2024 tax rules and simplified
          assumptions. Actual tax liability may vary based on business structure,
          state-specific rules, deductions, credits, and changes in tax laws. Always consult with a
          qualified tax professional for accurate LLC tax planning.
        </p>
      </footer>
    </div>
  );
}
