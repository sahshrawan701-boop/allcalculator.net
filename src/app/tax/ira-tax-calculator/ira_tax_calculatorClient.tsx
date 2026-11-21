"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── IRA tax calculation utilities ─────────────────────────────────────

// 2024 IRA Contribution Limits
const CONTRIBUTION_LIMITS = {
  under50: 7000,
  over50: 8000,
};

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

function calculateTaxOnWithdrawal(withdrawal: number, otherIncome: number): number {
  const totalIncome = withdrawal + otherIncome;
  if (totalIncome <= 0) return 0;

  let tax = 0;
  let remainingIncome = totalIncome;

  for (const bracket of TAX_BRACKETS) {
    if (remainingIncome <= 0) break;

    const taxableInBracket = Math.min(
      remainingIncome,
      bracket.max - bracket.min
    );
    tax += taxableInBracket * bracket.rate;
    remainingIncome -= taxableInBracket;
  }

  // Calculate tax on other income only
  let taxOnOtherIncome = 0;
  let remainingOtherIncome = otherIncome;

  for (const bracket of TAX_BRACKETS) {
    if (remainingOtherIncome <= 0) break;

    const taxableInBracket = Math.min(
      remainingOtherIncome,
      bracket.max - bracket.min
    );
    taxOnOtherIncome += taxableInBracket * bracket.rate;
    remainingOtherIncome -= taxableInBracket;
  }

  // Tax attributable to withdrawal
  return tax - taxOnOtherIncome;
}

function calculateIRATax(
  annualContribution: number,
  age: number,
  currentBalance: number,
  yearsToGrow: number,
  annualReturn: number,
  iraType: "traditional" | "roth",
  withdrawalAmount: number,
  otherIncome: number
) {
  // Determine contribution limit
  const contributionLimit = age >= 50 ? CONTRIBUTION_LIMITS.over50 : CONTRIBUTION_LIMITS.under50;
  const maxContribution = Math.min(annualContribution, contributionLimit);

  // Calculate future value with compound interest
  const futureValue = currentBalance * Math.pow(1 + annualReturn / 100, yearsToGrow) +
                      maxContribution * ((Math.pow(1 + annualReturn / 100, yearsToGrow) - 1) / (annualReturn / 100));

  // Calculate tax benefits
  let taxBenefit = 0;
  let taxOnWithdrawal = 0;
  let netWithdrawal = 0;

  if (iraType === "traditional") {
    // Traditional IRA: Tax deduction on contribution, taxed on withdrawal
    const marginalRate = 0.22; // Simplified average rate
    taxBenefit = maxContribution * marginalRate;
    taxOnWithdrawal = calculateTaxOnWithdrawal(withdrawalAmount, otherIncome);
    netWithdrawal = withdrawalAmount - taxOnWithdrawal;
  } else {
    // Roth IRA: No tax deduction on contribution, tax-free withdrawal
    taxBenefit = 0;
    taxOnWithdrawal = 0;
    netWithdrawal = withdrawalAmount;
  }

  // Effective tax rate on withdrawal (traditional only)
  const effectiveTaxRate = withdrawalAmount > 0 ? (taxOnWithdrawal / withdrawalAmount) * 100 : 0;

  return {
    annualContribution,
    maxContribution,
    contributionLimit,
    age,
    currentBalance,
    yearsToGrow,
    annualReturn,
    iraType,
    futureValue,
    withdrawalAmount,
    otherIncome,
    taxBenefit,
    taxOnWithdrawal,
    netWithdrawal,
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

export default function IRATaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [annualContribution, setAnnualContribution] = useState(7000);
  const [age, setAge] = useState(35);
  const [currentBalance, setCurrentBalance] = useState(50000);
  const [yearsToGrow, setYearsToGrow] = useState(30);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [iraType, setIraType] = useState<"traditional" | "roth">("traditional");
  const [withdrawalAmount, setWithdrawalAmount] = useState(50000);
  const [otherIncome, setOtherIncome] = useState(75000);

  const taxResults = useMemo(
    () => calculateIRATax(annualContribution, age, currentBalance, yearsToGrow, annualReturn, iraType, withdrawalAmount, otherIncome),
    [annualContribution, age, currentBalance, yearsToGrow, annualReturn, iraType, withdrawalAmount, otherIncome]
  );

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
      

      {/* IRA Type Selector */}
      <section
        className="bg-white dark:bg-slate-900 rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 border border-slate-200 dark:border-slate-800 shadow-sm"
        aria-label="IRA type selection"
      >
        <label className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide mb-2 sm:mb-3 block">
          IRA Type
        </label>
        <div
          className="grid grid-cols-2 gap-2"
          role="radiogroup"
          aria-label="Select IRA type"
        >
          {(["traditional", "roth"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setIraType(type)}
              role="radio"
              aria-checked={iraType === type}
              aria-label={`${type === "traditional" ? "Traditional IRA" : "Roth IRA"} type`}
              className={`flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                iraType === type
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-600"
              }`}
            >
              <span className="text-xl sm:text-2xl" aria-hidden="true">
                {type === "traditional" ? "📊" : "🚀"}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-800 dark:text-slate-100">
                {type === "traditional" ? "Traditional IRA" : "Roth IRA"}
              </span>
            </button>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Contribution Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="contribution-heading"
          >
            <h2
              id="contribution-heading"
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
              Contribution Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Annual Contribution"
                value={annualContribution}
                onChange={setAnnualContribution}
                prefix={symbol}
                step="1000"
                min="0"
                helper="per year"
              />
              <InputField
                label="Your Age"
                value={age}
                onChange={setAge}
                step="1"
                min="0"
                helper="for catch-up limit"
              />
              <InputField
                label="Current Balance"
                value={currentBalance}
                onChange={setCurrentBalance}
                prefix={symbol}
                step="5000"
                min="0"
                helper="existing balance"
              />
              <InputField
                label="Years to Grow"
                value={yearsToGrow}
                onChange={setYearsToGrow}
                step="1"
                min="0"
                helper="investment period"
              />
            </div>

            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800">
              <InputField
                label="Expected Annual Return"
                value={annualReturn}
                onChange={setAnnualReturn}
                suffix="%"
                step="0.5"
                min="0"
                helper="average return"
              />
            </div>
          </section>

          {/* Withdrawal Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="withdrawal-heading"
          >
            <h2
              id="withdrawal-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                >
                  📤
                </span>
              </span>
              Withdrawal Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Withdrawal Amount"
                value={withdrawalAmount}
                onChange={setWithdrawalAmount}
                prefix={symbol}
                step="5000"
                min="0"
                helper="planned withdrawal"
              />
              <InputField
                label="Other Annual Income"
                value={otherIncome}
                onChange={setOtherIncome}
                prefix={symbol}
                step="5000"
                min="0"
                helper="for tax calculation"
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
                  Contribution Limit
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.contributionLimit)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Max Contribution
                </span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  {fmt(taxResults.maxContribution)}
                </span>
              </div>
              {iraType === "traditional" && (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-800 dark:text-slate-400">
                      Tax Benefit (Current)
                    </span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      {fmt(taxResults.taxBenefit)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-800 dark:text-slate-400">
                      Tax on Withdrawal
                    </span>
                    <span className="font-medium text-red-600 dark:text-red-400">
                      {fmt(taxResults.taxOnWithdrawal)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-800 dark:text-slate-400">
                      Effective Tax Rate
                    </span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {fmtPct(taxResults.effectiveTaxRate)}
                    </span>
                  </div>
                </>
              )}
              <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Net Withdrawal
                </span>
                <span className="font-bold text-lg text-emerald-600 dark:text-emerald-400">
                  {fmt(taxResults.netWithdrawal)}
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
                  Projected Future Value
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.futureValue)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  after {yearsToGrow} years
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Net Withdrawal
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(taxResults.netWithdrawal)}
                  </div>
                </div>
                {iraType === "traditional" && (
                  <div>
                    <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                      Tax Benefit
                    </div>
                    <div className="text-lg sm:text-xl font-bold">
                      {fmt(taxResults.taxBenefit)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* IRA Type Info */}
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
                  {iraType === "traditional" ? "Traditional IRA" : "Roth IRA"}
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  {iraType === "traditional" 
                    ? "Contributions are tax-deductible now, but withdrawals are taxed as ordinary income. Best if you expect lower taxes in retirement."
                    : "Contributions are made with after-tax dollars, but withdrawals are tax-free. Best if you expect higher taxes in retirement."
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
                <span>Maximize contributions to take full advantage of tax benefits.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>If age 50+, use catch-up contributions to add $1,000 more.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consider your expected tax rate in retirement when choosing IRA type.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>RMDs are required from Traditional IRAs starting at age 73.</span>
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
          This IRA tax calculator is for educational purposes only and does not
          constitute tax or financial advice. Calculations are based on 2024 contribution limits and simplified
          tax assumptions. Actual tax liability and investment returns may vary based on individual circumstances,
          income levels, tax brackets, and changes in tax laws. Always consult with a qualified tax
          professional or financial advisor for accurate IRA planning.
        </p>
      </footer>
    </div>
  );
}
