"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── tax calculation utilities ───────────────────────────────────────────────────

// 2024 Payroll Tax Constants
const SOCIAL_SECURITY_RATE = 0.062; // 6.2% employee portion
const MEDICARE_RATE = 0.0145; // 1.45% employee portion
const ADDITIONAL_MEDICARE_RATE = 0.009; // 0.9%
const SOCIAL_SECURITY_WAGE_BASE = 168600;
const ADDITIONAL_MEDICARE_THRESHOLD = {
  single: 200000,
  married: 250000,
};

// Supplemental Withholding Rates (IRS flat rate method)
const SUPPLEMENTAL_WITHHOLDING_RATE = 0.22; // 22% for bonuses under $1M
const SUPPLEMENTAL_WITHHOLDING_RATE_HIGH = 0.37; // 37% for bonuses over $1M

function calculatePayrollTaxes(
  bonusAmount: number,
  annualSalary: number,
  ytdWages: number,
  filingStatus: "single" | "married",
  stateTaxRate: number
) {
  // Calculate total wages for the year
  const totalWages = ytdWages + bonusAmount;

  // Social Security tax (only on wages up to wage base)
  const ssTaxableWages = Math.min(totalWages, SOCIAL_SECURITY_WAGE_BASE);
  const ssTaxableBonus = Math.max(0, ssTaxableWages - ytdWages);
  const socialSecurityTax = ssTaxableBonus * SOCIAL_SECURITY_RATE;

  // Medicare tax (on all wages)
  const medicareTax = bonusAmount * MEDICARE_RATE;

  // Additional Medicare tax (0.9% on wages above threshold)
  const additionalMedicareThreshold =
    filingStatus === "single"
      ? ADDITIONAL_MEDICARE_THRESHOLD.single
      : ADDITIONAL_MEDICARE_THRESHOLD.married;
  const additionalMedicareTaxable = Math.max(0, totalWages - additionalMedicareThreshold);
  const additionalMedicareTaxableBonus = Math.max(0, additionalMedicareTaxable - Math.max(0, ytdWages - additionalMedicareThreshold));
  const additionalMedicareTax = additionalMedicareTaxableBonus * ADDITIONAL_MEDICARE_RATE;

  // Federal withholding using flat supplemental rate
  const federalWithholdingRate = bonusAmount >= 1000000 ? SUPPLEMENTAL_WITHHOLDING_RATE_HIGH : SUPPLEMENTAL_WITHHOLDING_RATE;
  const federalWithholding = bonusAmount * federalWithholdingRate;

  // State tax withholding
  const stateWithholding = bonusAmount * stateTaxRate;

  // Total taxes withheld
  const totalTaxes = socialSecurityTax + medicareTax + additionalMedicareTax + federalWithholding + stateWithholding;

  // Net bonus (take-home)
  const netBonus = bonusAmount - totalTaxes;

  // Effective tax rate
  const effectiveTaxRate = bonusAmount > 0 ? (totalTaxes / bonusAmount) * 100 : 0;

  // Marginal tax rate (highest rate applied)
  const marginalRate = Math.max(
    federalWithholdingRate,
    SOCIAL_SECURITY_RATE + MEDICARE_RATE + ADDITIONAL_MEDICARE_RATE,
    stateTaxRate
  ) * 100;

  return {
    bonusAmount,
    annualSalary,
    ytdWages,
    totalWages,
    socialSecurityTax,
    medicareTax,
    additionalMedicareTax,
    federalWithholding,
    federalWithholdingRate,
    stateWithholding,
    stateTaxRate,
    totalTaxes,
    netBonus,
    effectiveTaxRate,
    marginalRate,
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

export default function BonusTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [bonusAmount, setBonusAmount] = useState(10000);
  const [annualSalary, setAnnualSalary] = useState(75000);
  const [ytdWages, setYtdWages] = useState(50000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
  const [stateTaxRate, setStateTaxRate] = useState(5);

  const taxResults = useMemo(
    () => calculatePayrollTaxes(bonusAmount, annualSalary, ytdWages, filingStatus, stateTaxRate / 100),
    [bonusAmount, annualSalary, ytdWages, filingStatus, stateTaxRate]
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
          {/* Bonus Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="bonus-details-heading"
          >
            <h2
              id="bonus-details-heading"
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
              Bonus Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Bonus Amount"
                value={bonusAmount}
                onChange={setBonusAmount}
                prefix={symbol}
                step="1000"
                min="0"
              />
              <InputField
                label="Annual Salary"
                value={annualSalary}
                onChange={setAnnualSalary}
                prefix={symbol}
                step="5000"
                min="0"
                helper="base salary"
              />
              <InputField
                label="Year-to-Date Wages"
                value={ytdWages}
                onChange={setYtdWages}
                prefix={symbol}
                step="1000"
                min="0"
                helper="before this bonus"
              />
              <InputField
                label="State Tax Rate"
                value={stateTaxRate}
                onChange={setStateTaxRate}
                suffix="%"
                step="0.1"
                min="0"
                helper="optional"
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
                  Federal Withholding
                </span>
                <div className="text-right">
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    {fmt(taxResults.federalWithholding)}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                    ({fmtPct(taxResults.federalWithholdingRate * 100)})
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Social Security Tax
                </span>
                <div className="text-right">
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    {fmt(taxResults.socialSecurityTax)}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                    ({fmtPct(SOCIAL_SECURITY_RATE * 100)})
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Medicare Tax
                </span>
                <div className="text-right">
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    {fmt(taxResults.medicareTax)}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                    ({fmtPct(MEDICARE_RATE * 100)})
                  </span>
                </div>
              </div>
              {taxResults.additionalMedicareTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    Additional Medicare Tax
                  </span>
                  <div className="text-right">
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {fmt(taxResults.additionalMedicareTax)}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                      ({fmtPct(ADDITIONAL_MEDICARE_RATE * 100)})
                    </span>
                  </div>
                </div>
              )}
              {taxResults.stateWithholding > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    State Tax Withholding
                  </span>
                  <div className="text-right">
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {fmt(taxResults.stateWithholding)}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                      ({fmtPct(taxResults.stateTaxRate * 100)})
                    </span>
                  </div>
                </div>
              )}
              <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Total Taxes Withheld
                </span>
                <span className="font-bold text-lg text-red-600 dark:text-red-400">
                  {fmt(taxResults.totalTaxes)}
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
                  Net Bonus (Take-Home)
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.netBonus)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  after all withholdings
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
                    Marginal Tax Rate
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmtPct(taxResults.marginalRate)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Withholding Method Notice */}
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
                  Supplemental Withholding
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  Your bonus is taxed at a flat <strong>{fmtPct(taxResults.federalWithholdingRate * 100)}</strong> federal rate using the IRS supplemental withholding method. This is separate from your regular paycheck withholding and may result in a tax refund or additional tax due when filing.
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
                <span>The flat 22% rate is for bonuses under $1M. Bonuses over $1M are taxed at 37%.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>You may request a different withholding method if it better matches your tax situation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consider adjusting your W-4 allowances if you consistently receive large bonuses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult your HR department about your employer&apos;s specific bonus withholding policy.</span>
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
          This bonus tax calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 IRS supplemental
          withholding rates and assume standard payroll tax treatment. Actual
          withholding may vary based on your employer&apos;s payroll system, your W-4
          elections, state-specific rules, and changes in tax laws. Always consult
          with a qualified tax professional or HR representative for accurate
          withholding information.
        </p>
      </footer>
    </div>
  );
}
