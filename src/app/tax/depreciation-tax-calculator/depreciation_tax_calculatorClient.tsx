"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── depreciation calculation utilities ─────────────────────────────────────

type DepreciationMethod = "straight-line" | "double-declining" | "macrs";
type AssetClass = "3-year" | "5-year" | "7-year" | "10-year" | "15-year" | "20-year" | "27.5-year" | "39-year";

// MACRS recovery periods and conventions
const MACRS_PERIODS: Record<AssetClass, number> = {
  "3-year": 3,
  "5-year": 5,
  "7-year": 7,
  "10-year": 10,
  "15-year": 15,
  "20-year": 20,
  "27.5-year": 27.5,
  "39-year": 39,
};

// MACRS depreciation percentages (half-year convention)
const MACRS_PERCENTAGES = {
  "3-year": [33.33, 44.45, 14.81, 7.41],
  "5-year": [20.00, 32.00, 19.20, 11.52, 11.52, 5.76],
  "7-year": [14.29, 24.49, 17.49, 12.49, 8.93, 8.92, 8.93, 4.46],
  "10-year": [10.00, 18.00, 14.40, 11.52, 9.22, 7.37, 6.55, 6.55, 6.56, 6.55, 3.28],
  "15-year": [5.00, 9.50, 8.55, 7.70, 6.93, 6.23, 5.90, 5.90, 5.91, 5.90, 5.91, 5.90, 5.91, 5.90, 5.91, 2.95],
  "20-year": [3.75, 7.22, 6.68, 6.18, 5.71, 5.28, 4.89, 4.52, 4.46, 4.46, 4.46, 4.46, 4.46, 4.46, 4.46, 4.46, 4.46, 4.46, 4.46, 4.46, 2.23],
};

function calculateStraightLineDepreciation(
  cost: number,
  salvageValue: number,
  usefulLife: number
): number {
  const depreciableAmount = cost - salvageValue;
  const annualDepreciation = depreciableAmount / usefulLife;
  return Math.min(annualDepreciation, depreciableAmount);
}

function calculateDoubleDecliningDepreciation(
  cost: number,
  salvageValue: number,
  usefulLife: number,
  year: number,
  previousAccumulatedDepreciation: number
): number {
  const bookValue = cost - previousAccumulatedDepreciation;
  const depreciationRate = 2 / usefulLife;
  const depreciation = bookValue * depreciationRate;
  
  // Don't depreciate below salvage value
  const remainingDepreciable = cost - salvageValue - previousAccumulatedDepreciation;
  return Math.min(Math.max(0, depreciation), remainingDepreciable);
}

function calculateMACRSDepreciation(
  cost: number,
  assetClass: AssetClass,
  year: number
): number {
  if (assetClass === "27.5-year" || assetClass === "39-year") {
    // Residential and nonresidential real property use straight-line with mid-month convention
    const period = MACRS_PERIODS[assetClass];
    return cost / period;
  }
  
  const percentages = MACRS_PERCENTAGES[assetClass];
  if (!percentages || year > percentages.length) return 0;
  
  return cost * (percentages[year - 1] / 100);
}

function calculateDepreciationSchedule(
  cost: number,
  salvageValue: number,
  usefulLife: number,
  method: DepreciationMethod,
  assetClass: AssetClass,
  section179: number,
  bonusDepreciation: number
) {
  // Apply Section 179 expensing (immediate deduction)
  const section179Deduction = Math.min(section179, cost);
  const remainingAfterSection179 = cost - section179Deduction;
  
  // Apply bonus depreciation (percentage of remaining cost)
  const bonusDepreciationAmount = remainingAfterSection179 * (bonusDepreciation / 100);
  const remainingAfterBonus = remainingAfterSection179 - bonusDepreciationAmount;
  
  // Calculate depreciation schedule
  const schedule = [];
  let accumulatedDepreciation = section179Deduction + bonusDepreciationAmount;
  let bookValue = cost - accumulatedDepreciation;
  
  const yearsToCalculate = method === "macrs" ? 
    (assetClass === "27.5-year" || assetClass === "39-year" ? Math.ceil(usefulLife) : MACRS_PERCENTAGES[assetClass]?.length || usefulLife) :
    Math.ceil(usefulLife);
  
  for (let year = 1; year <= yearsToCalculate; year++) {
    let depreciation = 0;
    
    if (method === "straight-line") {
      depreciation = calculateStraightLineDepreciation(remainingAfterBonus, salvageValue, usefulLife);
    } else if (method === "double-declining") {
      depreciation = calculateDoubleDecliningDepreciation(
        remainingAfterBonus,
        salvageValue,
        usefulLife,
        year,
        accumulatedDepreciation - section179Deduction - bonusDepreciationAmount
      );
    } else if (method === "macrs") {
      depreciation = calculateMACRSDepreciation(remainingAfterBonus, assetClass, year);
    }
    
    // Don't depreciate below salvage value
    const remainingDepreciable = remainingAfterBonus - salvageValue - (accumulatedDepreciation - section179Deduction - bonusDepreciationAmount);
    depreciation = Math.min(Math.max(0, depreciation), remainingDepreciable);
    
    accumulatedDepreciation += depreciation;
    bookValue = cost - accumulatedDepreciation;
    
    schedule.push({
      year,
      depreciation,
      accumulatedDepreciation,
      bookValue: Math.max(salvageValue, bookValue),
    });
    
    // Stop if fully depreciated
    if (bookValue <= salvageValue + 1) break;
  }
  
  // Calculate first year tax benefit (assuming 21% corporate tax rate)
  const corporateTaxRate = 0.21;
  const firstYearTaxBenefit = schedule[0]?.depreciation * corporateTaxRate || 0;
  
  // Total depreciation over life
  const totalDepreciation = accumulatedDepreciation;
  
  return {
    cost,
    salvageValue,
    usefulLife,
    method,
    assetClass,
    section179Deduction,
    bonusDepreciationAmount,
    remainingAfterBonus,
    schedule,
    totalDepreciation,
    firstYearTaxBenefit,
    corporateTaxRate,
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

export default function DepreciationTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [cost, setCost] = useState(50000);
  const [salvageValue, setSalvageValue] = useState(5000);
  const [usefulLife, setUsefulLife] = useState(5);
  const [method, setMethod] = useState<DepreciationMethod>("macrs");
  const [assetClass, setAssetClass] = useState<AssetClass>("5-year");
  const [section179, setSection179] = useState(0);
  const [bonusDepreciation, setBonusDepreciation] = useState(0);

  const depreciationResults = useMemo(
    () => calculateDepreciationSchedule(cost, salvageValue, usefulLife, method, assetClass, section179, bonusDepreciation),
    [cost, salvageValue, usefulLife, method, assetClass, section179, bonusDepreciation]
  );

  const ASSET_CLASS_OPTIONS = [
    { value: "3-year" as const, label: "3-Year", description: "Tractors, racehorses" },
    { value: "5-year" as const, label: "5-Year", description: "Cars, computers, equipment" },
    { value: "7-year" as const, label: "7-Year", description: "Office furniture, fixtures" },
    { value: "10-year" as const, label: "10-Year", description: "Vessels, agricultural structures" },
    { value: "15-year" as const, label: "15-Year", description: "Land improvements, fences" },
    { value: "20-year" as const, label: "20-Year", description: "Farm buildings" },
    { value: "27.5-year" as const, label: "27.5-Year", description: "Residential rental property" },
    { value: "39-year" as const, label: "39-Year", description: "Nonresidential real property" },
  ];

  const METHOD_OPTIONS = [
    { value: "straight-line" as const, label: "Straight-Line", description: "Equal annual depreciation" },
    { value: "double-declining" as const, label: "Double Declining Balance", description: "Accelerated depreciation" },
    { value: "macrs" as const, label: "MACRS", description: "IRS standard method" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Asset Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="asset-details-heading"
          >
            <h2
              id="asset-details-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                >
                  🏢
                </span>
              </span>
              Asset Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Asset Cost"
                value={cost}
                onChange={setCost}
                prefix={symbol}
                step="1000"
                min="0"
                helper="purchase price"
              />
              <InputField
                label="Salvage Value"
                value={salvageValue}
                onChange={setSalvageValue}
                prefix={symbol}
                step="500"
                min="0"
                helper="end value"
              />
              <InputField
                label="Useful Life"
                value={usefulLife}
                onChange={setUsefulLife}
                suffix="years"
                step="1"
                min="1"
                helper="for straight-line"
              />
              <InputField
                label="Section 179"
                value={section179}
                onChange={setSection179}
                prefix={symbol}
                step="1000"
                min="0"
                helper="immediate deduction"
              />
              <InputField
                label="Bonus Depreciation"
                value={bonusDepreciation}
                onChange={setBonusDepreciation}
                suffix="%"
                step="10"
                min="0"
                helper="of remaining cost"
              />
            </div>
          </section>

          {/* Method Selection */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="method-heading"
          >
            <h2
              id="method-heading"
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
              Depreciation Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
              {METHOD_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setMethod(option.value)}
                  className={`p-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    method === option.value
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                      : "border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-600"
                  }`}
                >
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                    {option.label}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                    {option.description}
                  </div>
                </button>
              ))}
            </div>

            {method === "macrs" && (
              <div>
                <label className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide mb-2 block">
                  Asset Class
                </label>
                <select
                  value={assetClass}
                  onChange={(e) => setAssetClass(e.target.value as AssetClass)}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  {ASSET_CLASS_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} - {option.description}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </section>

          {/* Depreciation Schedule */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="schedule-heading"
          >
            <h2
              id="schedule-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-purple-600 dark:text-purple-400"
                  aria-hidden="true"
                >
                  📅
                </span>
              </span>
              Depreciation Schedule
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="text-left py-2 px-3 font-semibold text-slate-800 dark:text-slate-100">Year</th>
                    <th className="text-right py-2 px-3 font-semibold text-slate-800 dark:text-slate-100">Depreciation</th>
                    <th className="text-right py-2 px-3 font-semibold text-slate-800 dark:text-slate-100">Accumulated</th>
                    <th className="text-right py-2 px-3 font-semibold text-slate-800 dark:text-slate-100">Book Value</th>
                  </tr>
                </thead>
                <tbody>
                  {depreciationResults.schedule.map((item) => (
                    <tr key={item.year} className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-2 px-3 text-slate-800 dark:text-slate-400">{item.year}</td>
                      <td className="py-2 px-3 text-right text-slate-900 dark:text-slate-100">{fmt(item.depreciation)}</td>
                      <td className="py-2 px-3 text-right text-slate-900 dark:text-slate-100">{fmt(item.accumulatedDepreciation)}</td>
                      <td className="py-2 px-3 text-right text-slate-900 dark:text-slate-100">{fmt(item.bookValue)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  Total Depreciation
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(depreciationResults.totalDepreciation)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  over asset life
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    First Year Tax Benefit
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(depreciationResults.firstYearTaxBenefit)}
                  </div>
                  <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                    at {fmtPct(depreciationResults.corporateTaxRate * 100)} rate
                  </div>
                </div>
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Section 179 Deduction
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(depreciationResults.section179Deduction)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deduction Breakdown */}
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
                  Deduction Breakdown
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  <strong>Section 179:</strong> {fmt(depreciationResults.section179Deduction)} immediate deduction<br />
                  <strong>Bonus Depreciation:</strong> {fmt(depreciationResults.bonusDepreciationAmount)} ({bonusDepreciation}% of remaining)<br />
                  <strong>Regular Depreciation:</strong> {fmt(depreciationResults.totalDepreciation - depreciationResults.section179Deduction - depreciationResults.bonusDepreciationAmount)}
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
                <span>MACRS is the IRS standard method for most business assets.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Section 179 allows immediate expensing up to the deduction limit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Bonus depreciation provides additional first-year deductions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult a tax professional for complex depreciation scenarios.</span>
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
          This depreciation calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 tax rules and simplified
          assumptions. Actual depreciation may vary based on asset type, placed-in-service date,
          convention used, and changes in tax laws. Always consult with a qualified tax
          professional for accurate depreciation calculations and tax planning.
        </p>
      </footer>
    </div>
  );
}
