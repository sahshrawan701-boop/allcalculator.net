"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── corporate tax calculation utilities ─────────────────────────────────────

// 2024 Corporate Tax Constants
const CORPORATE_TAX_RATE = 0.21; // 21% flat rate (TCJA)

function calculateCorporateTax(
  grossRevenue: number,
  operatingExpenses: number,
  costOfGoodsSold: number,
  depreciation: number,
  otherDeductions: number,
  stateTaxRate: number
) {
  // Calculate total deductions
  const totalDeductions = costOfGoodsSold + operatingExpenses + depreciation + otherDeductions;

  // Calculate taxable income
  const taxableIncome = Math.max(0, grossRevenue - totalDeductions);

  // Calculate federal corporate tax
  const federalTax = taxableIncome * CORPORATE_TAX_RATE;

  // Calculate state corporate tax
  const stateTax = taxableIncome * stateTaxRate;

  // Calculate total tax
  const totalTax = federalTax + stateTax;

  // Calculate net income
  const netIncome = taxableIncome - totalTax;

  // Calculate profit margin
  const profitMargin = grossRevenue > 0 ? (netIncome / grossRevenue) * 100 : 0;

  // Calculate effective tax rate
  const effectiveTaxRate = taxableIncome > 0 ? (totalTax / taxableIncome) * 100 : 0;

  // Calculate estimated quarterly payments (90% of total tax divided by 4)
  const quarterlyPayment = totalTax * 0.9 / 4;

  return {
    grossRevenue,
    costOfGoodsSold,
    operatingExpenses,
    depreciation,
    otherDeductions,
    totalDeductions,
    taxableIncome,
    federalTax,
    stateTax,
    totalTax,
    netIncome,
    profitMargin,
    effectiveTaxRate,
    quarterlyPayment,
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

export default function CorporateTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [grossRevenue, setGrossRevenue] = useState(1000000);
  const [costOfGoodsSold, setCostOfGoodsSold] = useState(400000);
  const [operatingExpenses, setOperatingExpenses] = useState(300000);
  const [depreciation, setDepreciation] = useState(50000);
  const [otherDeductions, setOtherDeductions] = useState(0);
  const [stateTaxRate, setStateTaxRate] = useState(5);

  const taxResults = useMemo(
    () => calculateCorporateTax(grossRevenue, operatingExpenses, costOfGoodsSold, depreciation, otherDeductions, stateTaxRate / 100),
    [grossRevenue, operatingExpenses, costOfGoodsSold, depreciation, otherDeductions, stateTaxRate]
  );

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
    

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Revenue Section */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="revenue-heading"
          >
            <h2
              id="revenue-heading"
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
              Revenue & Expenses
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Gross Revenue"
                value={grossRevenue}
                onChange={setGrossRevenue}
                prefix={symbol}
                step="10000"
                min="0"
                helper="total sales"
              />
              <InputField
                label="Cost of Goods Sold"
                value={costOfGoodsSold}
                onChange={setCostOfGoodsSold}
                prefix={symbol}
                step="5000"
                min="0"
                helper="COGS"
              />
              <InputField
                label="Operating Expenses"
                value={operatingExpenses}
                onChange={setOperatingExpenses}
                prefix={symbol}
                step="5000"
                min="0"
                helper="rent, utilities, etc."
              />
              <InputField
                label="Depreciation"
                value={depreciation}
                onChange={setDepreciation}
                prefix={symbol}
                step="1000"
                min="0"
                helper="asset depreciation"
              />
              <InputField
                label="Other Deductions"
                value={otherDeductions}
                onChange={setOtherDeductions}
                prefix={symbol}
                step="1000"
                min="0"
                helper="additional deductions"
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
                  Total Deductions
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.totalDeductions)}
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
                  Federal Corporate Tax
                </span>
                <div className="text-right">
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {fmt(taxResults.federalTax)}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                    ({fmtPct(CORPORATE_TAX_RATE * 100)})
                  </span>
                </div>
              </div>
              {taxResults.stateTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    State Corporate Tax
                  </span>
                  <div className="text-right">
                    <span className="font-medium text-red-600 dark:text-red-400">
                      {fmt(taxResults.stateTax)}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                      ({fmtPct(stateTaxRate)})
                    </span>
                  </div>
                </div>
              )}
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
                    Profit Margin
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmtPct(taxResults.profitMargin)}
                  </div>
                </div>
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Effective Tax Rate
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmtPct(taxResults.effectiveTaxRate)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quarterly Payment */}
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
                  Estimated Quarterly Payment
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  Based on the 90% safe harbor rule, your estimated quarterly payment is <strong>{fmt(taxResults.quarterlyPayment)}</strong>. 
                  Corporations must pay estimated taxes quarterly to avoid penalties.
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
                <span>The 21% flat corporate tax rate applies to all C-Corporations regardless of income level.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Maximize deductions by tracking all legitimate business expenses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consider depreciation strategies to optimize tax timing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult a tax professional for corporate tax planning strategies.</span>
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
          This corporate tax calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 tax rates and simplified
          assumptions. Actual tax liability may vary based on business structure,
          state-specific rules, deductions, credits, and changes in tax laws. Always consult
          with a qualified tax professional or CPA for accurate corporate tax planning and
          compliance.
        </p>
      </footer>
    </div>
  );
}
