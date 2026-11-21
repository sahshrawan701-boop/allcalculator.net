"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

// ─── EIC calculation utilities ─────────────────────────────────────────────

// 2024 Earned Income Credit Parameters
const EIC_PARAMETERS = {
  investmentIncomeLimit: 11500,
  maximumCredit: {
    0: 600,
    1: 3995,
    2: 6560,
    "3+": 7430,
  },
  creditPercentage: {
    0: 0.0765,
    1: 0.34,
    2: 0.40,
    "3+": 0.45,
  },
  phaseOutThresholds: {
    single: {
      0: { start: 9800, end: 17840 },
      1: { start: 22110, end: 46880 },
      2: { start: 22110, end: 52860 },
      "3+": { start: 22110, end: 56380 },
    },
    married: {
      0: { start: 9800, end: 17840 },
      1: { start: 22110, end: 52860 },
      2: { start: 22110, end: 59840 },
      "3+": { start: 22110, end: 63360 },
    },
    headOfHousehold: {
      0: { start: 9800, end: 17840 },
      1: { start: 22110, end: 46880 },
      2: { start: 22110, end: 52860 },
      "3+": { start: 22110, end: 56380 },
    },
  },
};

function calculateEIC(
  earnedIncome: number,
  investmentIncome: number,
  qualifyingChildren: number,
  filingStatus: "single" | "married" | "headOfHousehold"
) {
  // Check investment income limit
  if (investmentIncome > EIC_PARAMETERS.investmentIncomeLimit) {
    return {
      earnedIncome,
      investmentIncome,
      qualifyingChildren,
      filingStatus,
      eligible: false,
      reason: "Investment income exceeds limit",
      maximumCredit: 0,
      initialCredit: 0,
      phaseOutAmount: 0,
      calculatedCredit: 0,
      creditPercentage: 0,
    };
  }

  // Determine child category
  const childCategory = qualifyingChildren === 0 ? "0" : 
                        qualifyingChildren === 1 ? "1" : 
                        qualifyingChildren === 2 ? "2" : "3+";

  // Get parameters
  const maximumCredit = EIC_PARAMETERS.maximumCredit[childCategory];
  const creditPercentage = EIC_PARAMETERS.creditPercentage[childCategory];
  const phaseOutThresholds = EIC_PARAMETERS.phaseOutThresholds[filingStatus][childCategory];

  // Calculate initial credit
  let initialCredit = earnedIncome * creditPercentage;
  initialCredit = Math.min(initialCredit, maximumCredit);

  // Calculate phase-out
  let phaseOutAmount = 0;
  if (earnedIncome > phaseOutThresholds.start) {
    const excessIncome = earnedIncome - phaseOutThresholds.start;
    const phaseOutRange = phaseOutThresholds.end - phaseOutThresholds.start;
    const phaseOutRate = maximumCredit / phaseOutRange;
    phaseOutAmount = Math.min(excessIncome * phaseOutRate, maximumCredit);
  }

  // Calculate final credit
  const calculatedCredit = Math.max(0, initialCredit - phaseOutAmount);

  return {
    earnedIncome,
    investmentIncome,
    qualifyingChildren,
    filingStatus,
    childCategory,
    eligible: true,
    reason: "",
    maximumCredit,
    initialCredit,
    phaseOutAmount,
    calculatedCredit,
    creditPercentage: creditPercentage * 100,
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

export default function EarnedIncomeCreditCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [earnedIncome, setEarnedIncome] = useState(25000);
  const [investmentIncome, setInvestmentIncome] = useState(0);
  const [qualifyingChildren, setQualifyingChildren] = useState(1);
  const [filingStatus, setFilingStatus] = useState<"single" | "married" | "headOfHousehold">("single");

  const eicResults = useMemo(
    () => calculateEIC(earnedIncome, investmentIncome, qualifyingChildren, filingStatus),
    [earnedIncome, investmentIncome, qualifyingChildren, filingStatus]
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Earned Income"
                value={earnedIncome}
                onChange={setEarnedIncome}
                prefix={symbol}
                step="1000"
                min="0"
                helper="wages, self-employment"
              />
              <InputField
                label="Investment Income"
                value={investmentIncome}
                onChange={setInvestmentIncome}
                prefix={symbol}
                step="1000"
                min="0"
                helper="interest, dividends"
              />
              <InputField
                label="Qualifying Children"
                value={qualifyingChildren}
                onChange={setQualifyingChildren}
                step="1"
                min="0"
                helper="under 19 (or 24 if student)"
              />
            </div>
          </section>

          {/* Credit Breakdown */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="credit-breakdown-heading"
          >
            <h2
              id="credit-breakdown-heading"
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
              Credit Breakdown
            </h2>

            {!eicResults.eligible ? (
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-800 dark:text-red-300">
                  <strong>Not Eligible:</strong> {eicResults.reason}
                </p>
              </div>
            ) : (
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    Maximum Credit
                  </span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    {fmt(eicResults.maximumCredit)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    Initial Credit ({eicResults.creditPercentage ? eicResults.creditPercentage.toFixed(1) : "N/A"}% of earned income)
                  </span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    {fmt(eicResults.initialCredit)}
                  </span>
                </div>
                {eicResults.phaseOutAmount > 0 && (
                  <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-800 dark:text-slate-400">
                      Phase-Out Amount
                    </span>
                    <span className="font-medium text-red-600 dark:text-red-400">
                      -{fmt(eicResults.phaseOutAmount)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    Calculated Credit
                  </span>
                  <span className="font-bold text-lg text-emerald-600 dark:text-emerald-400">
                    {fmt(eicResults.calculatedCredit)}
                  </span>
                </div>
              </div>
            )}
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
                  Earned Income Credit
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(eicResults.eligible ? eicResults.calculatedCredit : 0)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  {eicResults.eligible ? "refundable credit" : "not eligible"}
                </div>
              </div>

              {eicResults.eligible && (
                <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                  <div>
                    <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                      Child Category
                    </div>
                    <div className="text-lg sm:text-xl font-bold">
                      {eicResults.childCategory} child{eicResults.childCategory === "1" ? "" : "ren"}
                    </div>
                  </div>
                  <div>
                    <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                      Maximum Possible
                    </div>
                    <div className="text-lg sm:text-xl font-bold">
                      {fmt(eicResults.maximumCredit)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Eligibility Info */}
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
                  Investment Income Limit
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  To qualify for the EIC, your investment income must be {fmt(EIC_PARAMETERS.investmentIncomeLimit)} or less. 
                  Your current investment income is {fmt(investmentIncome)}.
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
                <span>The EIC is refundable - you can receive it even if you owe no tax.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Having qualifying children increases your maximum credit amount.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Keep investment income below the limit to maintain eligibility.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult a tax professional for complex family situations.</span>
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
          This Earned Income Credit calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 tax rules and simplified
          assumptions. Actual credit amounts may vary based on individual circumstances,
          filing status, qualifying child rules, and changes in tax laws. Always consult with a
          qualified tax professional for accurate EIC calculations and tax filing.
        </p>
      </footer>
    </div>
  );
}
