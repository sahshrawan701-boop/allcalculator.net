"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── payroll tax calculation utilities ─────────────────────────────────────

// 2024 Payroll Tax Constants
const SOCIAL_SECURITY_RATE = 0.062; // 6.2%
const MEDICARE_RATE = 0.0145; // 1.45%
const SOCIAL_SECURITY_WAGE_BASE = 168600;
const FUTA_RATE = 0.006; // 0.6% after credit
const FUTA_WAGE_BASE = 7000;

// State Unemployment Tax Rates (simplified)
const SUTA_RATES: Record<string, number> = {
  "none": 0,
  "alabama": 0.022,
  "california": 0.034,
  "florida": 0.027,
  "new-york": 0.054,
  "texas": 0.062,
  "custom": 0.04,
};

function calculatePayrollTax(
  annualSalary: number,
  state: string,
  customSutaRate: number,
  numberOfEmployees: number
) {
  // Social Security Tax (employee + employer)
  const socialSecurityTaxable = Math.min(annualSalary, SOCIAL_SECURITY_WAGE_BASE);
  const employeeSocialSecurity = socialSecurityTaxable * SOCIAL_SECURITY_RATE;
  const employerSocialSecurity = socialSecurityTaxable * SOCIAL_SECURITY_RATE;
  const totalSocialSecurity = employeeSocialSecurity + employerSocialSecurity;

  // Medicare Tax (employee + employer) - no wage base limit
  const employeeMedicare = annualSalary * MEDICARE_RATE;
  const employerMedicare = annualSalary * MEDICARE_RATE;
  const totalMedicare = employeeMedicare + employerMedicare;

  // FUTA Tax (employer only)
  const futaTaxable = Math.min(annualSalary, FUTA_WAGE_BASE);
  const futaTax = futaTaxable * FUTA_RATE;

  // SUTA Tax (employer only)
  const sutaRate = state === "custom" ? customSutaRate / 100 : SUTA_RATES[state];
  const sutaTax = annualSalary * sutaRate;

  // Total Employee Taxes
  const totalEmployeeTaxes = employeeSocialSecurity + employeeMedicare;

  // Total Employer Taxes
  const totalEmployerTaxes = employerSocialSecurity + employerMedicare + futaTax + sutaTax;

  // Total Payroll Taxes (per employee)
  const totalPayrollTaxes = totalEmployeeTaxes + totalEmployerTaxes;

  // Net Pay (after employee taxes)
  const netPay = annualSalary - totalEmployeeTaxes;

  // Effective Tax Rate (employee)
  const effectiveEmployeeRate = annualSalary > 0 ? (totalEmployeeTaxes / annualSalary) * 100 : 0;

  // Total for all employees
  const totalForAllEmployees = totalPayrollTaxes * numberOfEmployees;
  const totalEmployerCost = (annualSalary + totalEmployerTaxes) * numberOfEmployees;

  return {
    annualSalary,
    state,
    customSutaRate,
    numberOfEmployees,
    socialSecurityTaxable,
    employeeSocialSecurity,
    employerSocialSecurity,
    totalSocialSecurity,
    employeeMedicare,
    employerMedicare,
    totalMedicare,
    futaTaxable,
    futaTax,
    sutaRate,
    sutaTax,
    totalEmployeeTaxes,
    totalEmployerTaxes,
    totalPayrollTaxes,
    netPay,
    effectiveEmployeeRate,
    totalForAllEmployees,
    totalEmployerCost,
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

export default function PayrollTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [annualSalary, setAnnualSalary] = useState(75000);
  const [state, setState] = useState("none");
  const [customSutaRate, setCustomSutaRate] = useState(4);
  const [numberOfEmployees, setNumberOfEmployees] = useState(1);

  const taxResults = useMemo(
    () => calculatePayrollTax(annualSalary, state, customSutaRate, numberOfEmployees),
    [annualSalary, state, customSutaRate, numberOfEmployees]
  );

  const STATE_OPTIONS = [
    { value: "none", label: "No State Tax", rate: "0%" },
    { value: "alabama", label: "Alabama", rate: "2.2%" },
    { value: "california", label: "California", rate: "3.4%" },
    { value: "florida", label: "Florida", rate: "2.7%" },
    { value: "new-york", label: "New York", rate: "5.4%" },
    { value: "texas", label: "Texas", rate: "6.2%" },
    { value: "custom", label: "Custom Rate", rate: "Variable" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
  

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Salary Details */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="salary-details-heading"
          >
            <h2
              id="salary-details-heading"
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
              Salary Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <InputField
                label="Annual Salary"
                value={annualSalary}
                onChange={setAnnualSalary}
                prefix={symbol}
                step="5000"
                min="0"
                helper="per employee"
              />
              <InputField
                label="Number of Employees"
                value={numberOfEmployees}
                onChange={setNumberOfEmployees}
                step="1"
                min="1"
                helper="for total cost"
              />
            </div>
          </section>

          {/* State Selection */}
          <section
            className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            aria-labelledby="state-heading"
          >
            <h2
              id="state-heading"
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span
                  className="text-sm sm:text-base text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                >
                  🗺️
                </span>
              </span>
              State Unemployment Tax (SUTA)
            </h2>

            <div>
              <label className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide mb-2 block">
                State
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              >
                {STATE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label} ({option.rate})
                  </option>
                ))}
              </select>
            </div>

            {state === "custom" && (
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800">
                <InputField
                  label="Custom SUTA Rate"
                  value={customSutaRate}
                  onChange={setCustomSutaRate}
                  suffix="%"
                  step="0.1"
                  min="0"
                  helper="enter your rate"
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
              Tax Breakdown (Per Employee)
            </h2>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Social Security (6.2%)
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.totalSocialSecurity)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  Medicare (1.45%)
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.totalMedicare)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm text-slate-800 dark:text-slate-400">
                  FUTA (0.6% on first $7,000)
                </span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  {fmt(taxResults.futaTax)}
                </span>
              </div>
              {taxResults.sutaTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    SUTA ({fmtPct(taxResults.sutaRate * 100)})
                  </span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {fmt(taxResults.sutaTax)}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl px-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  Total Payroll Taxes
                </span>
                <span className="font-bold text-lg text-red-600 dark:text-red-400">
                  {fmt(taxResults.totalPayrollTaxes)}
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
              Per Employee Results
            </h2>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                  Net Pay
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.netPay)}
                </div>
                <div className="text-emerald-200 text-[10px] sm:text-xs mt-1">
                  after employee taxes
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Employee Taxes
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(taxResults.totalEmployeeTaxes)}
                  </div>
                </div>
                <div>
                  <div className="text-emerald-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Employer Taxes
                  </div>
                  <div className="text-lg sm:text-xl font-bold">
                    {fmt(taxResults.totalEmployerTaxes)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Total for All Employees */}
          {numberOfEmployees > 1 && (
            <section
              className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 sm:p-6 text-white shadow-lg"
              aria-labelledby="total-heading"
            >
              <h2
                id="total-heading"
                className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <span className="text-sm" aria-hidden="true">
                    📊
                  </span>
                </span>
                Total for {numberOfEmployees} Employees
              </h2>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="text-blue-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                    Total Payroll Taxes
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold">
                    {fmt(taxResults.totalForAllEmployees)}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/20">
                  <div>
                    <div className="text-blue-100 text-[10px] sm:text-xs uppercase tracking-wide mb-1">
                      Total Employer Cost
                    </div>
                    <div className="text-lg sm:text-xl font-bold">
                      {fmt(taxResults.totalEmployerCost)}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

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
                <span>Social Security tax applies only to wages up to $168,600 (2024).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Medicare tax has no wage base limit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>FUTA is 0.6% on first $7,000 of wages (after state credit).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>SUTA rates vary significantly by state and experience rating.</span>
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
          This payroll tax calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 federal payroll tax rules and simplified
          state unemployment tax assumptions. Actual payroll tax liability may vary based on business type,
          state-specific rules, experience ratings, and changes in tax laws. Always consult with a qualified tax
          professional for accurate payroll tax planning.
        </p>
      </footer>
    </div>
  );
}
