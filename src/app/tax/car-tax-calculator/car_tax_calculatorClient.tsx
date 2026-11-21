"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── car tax calculation utilities ─────────────────────────────────────────────

// Sample state sales tax rates (2024)
const STATE_SALES_TAX_RATES = [
  { state: "Alabama", rate: 0.04 },
  { state: "Alaska", rate: 0.00 },
  { state: "Arizona", rate: 0.056 },
  { state: "Arkansas", rate: 0.065 },
  { state: "California", rate: 0.0725 },
  { state: "Colorado", rate: 0.029 },
  { state: "Connecticut", rate: 0.0635 },
  { state: "Delaware", rate: 0.00 },
  { state: "Florida", rate: 0.06 },
  { state: "Georgia", rate: 0.04 },
  { state: "Hawaii", rate: 0.04 },
  { state: "Idaho", rate: 0.06 },
  { state: "Illinois", rate: 0.0625 },
  { state: "Indiana", rate: 0.07 },
  { state: "Iowa", rate: 0.06 },
  { state: "Kansas", rate: 0.065 },
  { state: "Kentucky", rate: 0.06 },
  { state: "Louisiana", rate: 0.0445 },
  { state: "Maine", rate: 0.055 },
  { state: "Maryland", rate: 0.06 },
  { state: "Massachusetts", rate: 0.0625 },
  { state: "Michigan", rate: 0.06 },
  { state: "Minnesota", rate: 0.06875 },
  { state: "Mississippi", rate: 0.07 },
  { state: "Missouri", rate: 0.04225 },
  { state: "Montana", rate: 0.00 },
  { state: "Nebraska", rate: 0.055 },
  { state: "Nevada", rate: 0.0685 },
  { state: "New Hampshire", rate: 0.00 },
  { state: "New Jersey", rate: 0.06625 },
  { state: "New Mexico", rate: 0.05125 },
  { state: "New York", rate: 0.04 },
  { state: "North Carolina", rate: 0.0475 },
  { state: "North Dakota", rate: 0.05 },
  { state: "Ohio", rate: 0.0575 },
  { state: "Oklahoma", rate: 0.045 },
  { state: "Oregon", rate: 0.00 },
  { state: "Pennsylvania", rate: 0.06 },
  { state: "Rhode Island", rate: 0.07 },
  { state: "South Carolina", rate: 0.06 },
  { state: "South Dakota", rate: 0.045 },
  { state: "Tennessee", rate: 0.07 },
  { state: "Texas", rate: 0.0625 },
  { state: "Utah", rate: 0.0595 },
  { state: "Vermont", rate: 0.06 },
  { state: "Virginia", rate: 0.043 },
  { state: "Washington", rate: 0.065 },
  { state: "West Virginia", rate: 0.06 },
  { state: "Wisconsin", rate: 0.05 },
  { state: "Wyoming", rate: 0.04 },
];

function calculateCarTaxes(
  vehiclePrice: number,
  tradeInValue: number,
  downPayment: number,
  state: string,
  localTaxRate: number,
  registrationFee: number,
  titleFee: number,
  documentationFee: number
) {
  // Find state tax rate
  const stateTaxRateObj = STATE_SALES_TAX_RATES.find((s) => s.state === state);
  const stateTaxRate = stateTaxRateObj ? stateTaxRateObj.rate : 0.06; // Default to 6%

  // Calculate taxable amount (price minus trade-in)
  const taxableAmount = Math.max(0, vehiclePrice - tradeInValue);

  // Calculate sales tax
  const totalTaxRate = stateTaxRate + localTaxRate;
  const salesTax = taxableAmount * totalTaxRate;

  // Calculate total fees
  const totalFees = registrationFee + titleFee + documentationFee;

  // Calculate total taxes and fees
  const totalTaxesAndFees = salesTax + totalFees;

  // Calculate total cost
  const totalCost = vehiclePrice + totalTaxesAndFees - tradeInValue;

  // Calculate amount to finance
  const amountToFinance = Math.max(0, totalCost - downPayment);

  // Calculate out-of-pocket (down payment + taxes/fees not financed)
  const outOfPocket = downPayment + (amountToFinance === 0 ? totalTaxesAndFees : 0);

  // Effective tax rate
  const effectiveTaxRate = vehiclePrice > 0 ? (totalTaxesAndFees / vehiclePrice) * 100 : 0;

  return {
    vehiclePrice,
    tradeInValue,
    downPayment,
    state,
    stateTaxRate,
    localTaxRate,
    totalTaxRate,
    taxableAmount,
    salesTax,
    registrationFee,
    titleFee,
    documentationFee,
    totalFees,
    totalTaxesAndFees,
    totalCost,
    amountToFinance,
    outOfPocket,
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

export default function CarTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [vehiclePrice, setVehiclePrice] = useState(35000);
  const [tradeInValue, setTradeInValue] = useState(5000);
  const [downPayment, setDownPayment] = useState(7000);
  const [state, setState] = useState("California");
  const [localTaxRate, setLocalTaxRate] = useState(1.25);
  const [registrationFee, setRegistrationFee] = useState(300);
  const [titleFee, setTitleFee] = useState(150);
  const [documentationFee, setDocumentationFee] = useState(200);

  const taxResults = useMemo(
    () => calculateCarTaxes(vehiclePrice, tradeInValue, downPayment, state, localTaxRate / 100, registrationFee, titleFee, documentationFee),
    [vehiclePrice, tradeInValue, downPayment, state, localTaxRate, registrationFee, titleFee, documentationFee]
  );

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
  

      {/* State Selector */}
      <section
        className="bg-white dark:bg-slate-900 rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 border border-slate-200 dark:border-slate-800 shadow-sm"
        aria-label="State selection"
      >
        <label className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide mb-2 sm:mb-3 block">
          Select State
        </label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          aria-label="Select state for sales tax rate"
        >
          {STATE_SALES_TAX_RATES.map((s) => (
            <option key={s.state} value={s.state}>
              {s.state} ({fmtPct(s.rate * 100)})
            </option>
          ))}
        </select>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Vehicle Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="vehicle-details-heading"
          >
            <h2
              id="vehicle-details-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                >
                  🚗
                </span>
              </span>
              Vehicle Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Vehicle Price"
                value={vehiclePrice}
                onChange={setVehiclePrice}
                prefix={symbol}
                step="1000"
                min="0"
                helper="sticker price"
              />
              <InputField
                label="Trade-In Value"
                value={tradeInValue}
                onChange={setTradeInValue}
                prefix={symbol}
                step="1000"
                min="0"
                helper="reduces taxable amount"
              />
              <InputField
                label="Down Payment"
                value={downPayment}
                onChange={setDownPayment}
                prefix={symbol}
                step="1000"
                min="0"
                helper="upfront payment"
              />
              <InputField
                label="Local Tax Rate"
                value={localTaxRate}
                onChange={setLocalTaxRate}
                suffix="%"
                step="0.1"
                min="0"
                helper="county/city tax"
              />
            </div>
          </section>

          {/* Fees Section */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="fees-heading"
          >
            <h2
              id="fees-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                >
                  📋
                </span>
              </span>
              Fees
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <InputField
                label="Registration Fee"
                value={registrationFee}
                onChange={setRegistrationFee}
                prefix={symbol}
                step="50"
                min="0"
                helper="varies by state"
              />
              <InputField
                label="Title Fee"
                value={titleFee}
                onChange={setTitleFee}
                prefix={symbol}
                step="25"
                min="0"
                helper="one-time"
              />
              <InputField
                label="Documentation Fee"
                value={documentationFee}
                onChange={setDocumentationFee}
                prefix={symbol}
                step="50"
                min="0"
                helper="dealer fee"
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
                  Taxable Amount
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.taxableAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  State Sales Tax ({fmtPct(taxResults.stateTaxRate * 100)})
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.taxableAmount * taxResults.stateTaxRate)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Local Tax ({fmtPct(taxResults.localTaxRate * 100)})
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.taxableAmount * taxResults.localTaxRate)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Total Fees
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.totalFees)}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Total Taxes & Fees
                </span>
                <span className="font-bold text-lg text-red-600 dark:text-red-400">
                  {fmt(taxResults.totalTaxesAndFees)}
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
                  Total Cost
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.totalCost)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  after trade-in
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Amount to Finance
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(taxResults.amountToFinance)}
                  </div>
                </div>
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Out-of-Pocket
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(taxResults.outOfPocket)}
                  </div>
                </div>
              </div>
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
                  {state} Sales Tax
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  {state} has a state sales tax rate of <strong>{fmtPct(taxResults.stateTaxRate * 100)}</strong>. 
                  Combined with your local tax rate of <strong>{fmtPct(taxResults.localTaxRate * 100)}</strong>, 
                  your total tax rate is <strong>{fmtPct(taxResults.totalTaxRate * 100)}</strong>.
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
                <span>Trade-in value reduces the taxable amount in most states.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Documentation fees vary by dealer and may be negotiable.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Some states have annual property taxes on vehicles.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Check with your local DMV for exact fee schedules.</span>
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
          This car tax calculator is for educational purposes only and does not constitute tax advice. 
          Calculations are based on 2024 state sales tax rates and simplified assumptions. Actual taxes 
          and fees may vary based on local tax jurisdictions, dealer fees, vehicle type, and changes in 
          tax laws. Always verify with your dealer and local DMV for accurate tax and fee information.
        </p>
      </footer>
    </div>
  );
}
