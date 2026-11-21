"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

// ─── child tax credit calculation utilities ───────────────────────────────────

// 2024 Child Tax Credit Rules
const BASE_CREDIT = 2000; // $2,000 per qualifying child
const ADDITIONAL_CREDIT_UNDER_6 = 1600; // Additional $1,600 for children under 6
const MAX_REFUNDABLE_PER_CHILD = 1600; // Maximum refundable amount per child

// Phase-out thresholds (2024)
const PHASEOUT_THRESHOLDS = {
  single: { start: 200000, end: 240000 },
  married: { start: 400000, end: 480000 },
  headOfHousehold: { start: 200000, end: 240000 },
};

function calculateChildTaxCredit(
  childrenUnder6: number,
  children6To16: number,
  agi: number,
  filingStatus: "single" | "married" | "headOfHousehold",
  taxLiability: number
) {
  // Calculate total qualifying children
  const totalChildren = childrenUnder6 + children6To16;

  // Calculate base credit
  const baseCredit = totalChildren * BASE_CREDIT;

  // Calculate additional credit for children under 6
  const additionalCredit = childrenUnder6 * ADDITIONAL_CREDIT_UNDER_6;

  // Calculate total credit before phase-out
  const totalCreditBeforePhaseOut = baseCredit + additionalCredit;

  // Calculate phase-out
  const thresholds = PHASEOUT_THRESHOLDS[filingStatus];
  let phaseOutAmount = 0;

  if (agi > thresholds.start) {
    const excessIncome = Math.max(0, agi - thresholds.start);
    const phaseOutRange = thresholds.end - thresholds.start;
    const phaseOutRatio = Math.min(1, excessIncome / phaseOutRange);
    phaseOutAmount = totalCreditBeforePhaseOut * phaseOutRatio;
  }

  // Calculate credit after phase-out
  const creditAfterPhaseOut = Math.max(0, totalCreditBeforePhaseOut - phaseOutAmount);

  // Calculate refundable portion
  const maxRefundable = totalChildren * MAX_REFUNDABLE_PER_CHILD;
  const refundablePortion = Math.min(creditAfterPhaseOut, maxRefundable);

  // Calculate non-refundable portion
  const nonRefundablePortion = creditAfterPhaseOut - refundablePortion;

  // Calculate how much of non-refundable can be used against tax liability
  const usableNonRefundable = Math.min(nonRefundablePortion, taxLiability);

  // Calculate total benefit
  const totalBenefit = refundablePortion + usableNonRefundable;

  // Calculate unused credit (if any)
  const unusedCredit = nonRefundablePortion - usableNonRefundable;

  // Calculate effective credit rate
  const effectiveRate = totalChildren > 0 ? (creditAfterPhaseOut / totalChildren) : 0;

  return {
    childrenUnder6,
    children6To16,
    totalChildren,
    baseCredit,
    additionalCredit,
    totalCreditBeforePhaseOut,
    agi,
    filingStatus,
    thresholds,
    phaseOutAmount,
    creditAfterPhaseOut,
    refundablePortion,
    nonRefundablePortion,
    taxLiability,
    usableNonRefundable,
    totalBenefit,
    unusedCredit,
    effectiveRate,
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

export default function ChildTaxCreditCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [childrenUnder6, setChildrenUnder6] = useState(1);
  const [children6To16, setChildren6To16] = useState(1);
  const [agi, setAgi] = useState(75000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married" | "headOfHousehold">("single");
  const [taxLiability, setTaxLiability] = useState(5000);

  const creditResults = useMemo(
    () => calculateChildTaxCredit(childrenUnder6, children6To16, agi, filingStatus, taxLiability),
    [childrenUnder6, children6To16, agi, filingStatus, taxLiability]
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
          {/* Children Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="children-details-heading"
          >
            <h2
              id="children-details-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                >
                  👶
                </span>
              </span>
              Children Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Children Under 6"
                value={childrenUnder6}
                onChange={setChildrenUnder6}
                step="1"
                min="0"
                helper="qualifies for additional credit"
              />
              <InputField
                label="Children Age 6-16"
                value={children6To16}
                onChange={setChildren6To16}
                step="1"
                min="0"
                helper="qualifying dependents"
              />
            </div>
          </section>

          {/* Income Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="income-details-heading"
          >
            <h2
              id="income-details-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                >
                  💰
                </span>
              </span>
              Income Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Adjusted Gross Income"
                value={agi}
                onChange={setAgi}
                prefix={symbol}
                step="5000"
                min="0"
                helper="annual AGI"
              />
              <InputField
                label="Tax Liability"
                value={taxLiability}
                onChange={setTaxLiability}
                prefix={symbol}
                step="1000"
                min="0"
                helper="before credits"
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
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-purple-600 dark:text-purple-400"
                  aria-hidden="true"
                >
                  📊
                </span>
              </span>
              Credit Breakdown
            </h2>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Base Credit ({creditResults.totalChildren} × {fmt(BASE_CREDIT)})
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(creditResults.baseCredit)}
                </span>
              </div>
              {creditResults.additionalCredit > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    Additional Credit (Under 6)
                  </span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    {fmt(creditResults.additionalCredit)}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Total Credit Before Phase-Out
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(creditResults.totalCreditBeforePhaseOut)}
                </span>
              </div>
              {creditResults.phaseOutAmount > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    Phase-Out Amount
                  </span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    -{fmt(creditResults.phaseOutAmount)}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Credit After Phase-Out
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(creditResults.creditAfterPhaseOut)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Refundable Portion
                </span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  {fmt(creditResults.refundablePortion)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Non-Refundable Portion
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(creditResults.nonRefundablePortion)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Total Benefit
                </span>
                <span className="font-bold text-lg text-emerald-600 dark:text-emerald-400">
                  {fmt(creditResults.totalBenefit)}
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
                  Total Child Tax Credit
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(creditResults.creditAfterPhaseOut)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  {creditResults.totalChildren} qualifying child{creditResults.totalChildren !== 1 ? "ren" : ""}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Refundable Amount
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(creditResults.refundablePortion)}
                  </div>
                </div>
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Effective Credit per Child
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(creditResults.effectiveRate)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Phase-Out Info */}
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
                  Phase-Out Threshold
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  Your credit begins to phase out at <strong>{fmt(creditResults.thresholds.start)}</strong> 
                  and is fully phased out at <strong>{fmt(creditResults.thresholds.end)}</strong>. 
                  {creditResults.agi > creditResults.thresholds.start 
                    ? ` Your income of ${fmt(creditResults.agi)} is above the threshold, reducing your credit by ${fmt(creditResults.phaseOutAmount)}.`
                    : ` Your income of ${fmt(creditResults.agi)} is below the threshold, so you receive the full credit.`
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
                <span>Children under 6 qualify for an additional $1,600 credit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>The credit is partially refundable up to $1,600 per child.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Phase-out rules apply based on your AGI and filing status.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult a tax professional for personalized advice.</span>
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
          This Child Tax Credit calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 tax rules and simplified
          assumptions. Actual credit amounts may vary based on individual circumstances,
          changes in tax laws, and other factors. Always consult with a qualified tax
          professional for accurate tax planning and filing.
        </p>
      </footer>
    </div>
  );
}
