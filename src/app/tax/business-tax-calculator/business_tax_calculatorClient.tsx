"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── formatting utilities ───────────────────────────────────────────────────────

const fmtPct = (n: number, decimals = 2) => `${n.toFixed(decimals)}%`;

// ─── tax calculation utilities ───────────────────────────────────────────────────

// 2024 Tax Constants
const CORPORATE_TAX_RATE = 0.21; // 21% flat rate for C-Corps

// Self-Employment Tax (for pass-through entities)
const SOCIAL_SECURITY_RATE = 0.124; // 12.4% (employer + employee)
const MEDICARE_RATE = 0.029; // 2.9%
const ADDITIONAL_MEDICARE_RATE = 0.009; // 0.9%
const SOCIAL_SECURITY_WAGE_BASE = 168600;
const ADDITIONAL_MEDICARE_THRESHOLD = {
  single: 200000,
  married: 250000,
};

// Payroll Tax (Employer portion only)
const EMPLOYER_SS_RATE = 0.062; // 6.2%
const EMPLOYER_MEDICARE_RATE = 0.0145; // 1.45%

// 2024 Tax Brackets (Single Filer) - for pass-through income
const TAX_BRACKETS_SINGLE = [
  { min: 0, max: 11600, rate: 0.10 },
  { min: 11600, max: 47150, rate: 0.12 },
  { min: 47150, max: 100525, rate: 0.22 },
  { min: 100525, max: 191950, rate: 0.24 },
  { min: 191950, max: 243725, rate: 0.32 },
  { min: 243725, max: 609350, rate: 0.35 },
  { min: 609350, max: Infinity, rate: 0.37 },
];

// Standard Deductions 2024
const STANDARD_DEDUCTION = {
  single: 14600,
  married: 29200,
};

type BusinessEntityType = "sole-proprietorship" | "llc" | "s-corp" | "c-corp" | "partnership";

function calculateFederalIncomeTax(
  taxableIncome: number,
  filingStatus: "single" | "married"
): number {
  if (taxableIncome <= 0) return 0;

  const brackets =
    filingStatus === "single" ? TAX_BRACKETS_SINGLE : TAX_BRACKETS_SINGLE;
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

function calculateSelfEmploymentTax(
  netIncome: number,
  filingStatus: "single" | "married"
): number {
  if (netIncome <= 0) return 0;

  const subjectToSE = netIncome * 0.9235;

  const socialSecurityWageBase = Math.min(subjectToSE, SOCIAL_SECURITY_WAGE_BASE);
  const socialSecurityTax = socialSecurityWageBase * SOCIAL_SECURITY_RATE;

  const medicareTax = subjectToSE * MEDICARE_RATE;

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

function calculateBusinessTaxes(
  businessIncome: number,
  businessExpenses: number,
  ownerSalary: number,
  entityType: BusinessEntityType,
  filingStatus: "single" | "married",
  stateTaxRate: number,
  employeePayroll: number
) {
  const netBusinessIncome = Math.max(0, businessIncome - businessExpenses);

  let corporateTax = 0;
  let selfEmploymentTax = 0;
  let federalIncomeTax = 0;
  let payrollTax = 0;
  let totalTax = 0;
  let netIncome = 0;
  let ownerTakeHome = 0;

  // C-Corp: Corporate tax on business income, then dividends taxed at capital gains rates
  if (entityType === "c-corp") {
    corporateTax = netBusinessIncome * CORPORATE_TAX_RATE;
    const afterTaxIncome = netBusinessIncome - corporateTax;
    netIncome = afterTaxIncome;
    totalTax = corporateTax;
    ownerTakeHome = afterTaxIncome; // Simplified - assumes all distributed as dividends
  }
  // S-Corp: Owner salary subject to payroll tax, remaining income passes through
  else if (entityType === "s-corp") {
    const passThroughIncome = Math.max(0, netBusinessIncome - ownerSalary);
    
    // Payroll tax on owner salary (employer portion)
    const employerSSTax = Math.min(ownerSalary, SOCIAL_SECURITY_WAGE_BASE) * EMPLOYER_SS_RATE;
    const employerMedicareTax = ownerSalary * EMPLOYER_MEDICARE_RATE;
    payrollTax = employerSSTax + employerMedicareTax;

    // Self-employment tax on pass-through income (only Medicare portion for S-Corp)
    const medicareTax = passThroughIncome * 0.029; // 2.9% Medicare only
    selfEmploymentTax = medicareTax;

    // Federal income tax on total income (salary + pass-through)
    const totalOwnerIncome = ownerSalary + passThroughIncome;
    const standardDeduction =
      filingStatus === "single"
        ? STANDARD_DEDUCTION.single
        : STANDARD_DEDUCTION.married;
    const taxableIncome = Math.max(0, totalOwnerIncome - standardDeduction);
    federalIncomeTax = calculateFederalIncomeTax(taxableIncome, filingStatus);

    totalTax = corporateTax + selfEmploymentTax + federalIncomeTax + payrollTax;
    netIncome = netBusinessIncome;
    ownerTakeHome = totalOwnerIncome - federalIncomeTax - (selfEmploymentTax * 0.5); // 50% SE tax deduction
  }
  // Sole Proprietorship, LLC, Partnership: All income passes through, subject to SE tax
  else {
    selfEmploymentTax = calculateSelfEmploymentTax(netBusinessIncome, filingStatus);

    const standardDeduction =
      filingStatus === "single"
        ? STANDARD_DEDUCTION.single
        : STANDARD_DEDUCTION.married;
    const taxableIncome = Math.max(0, netBusinessIncome - standardDeduction);
    federalIncomeTax = calculateFederalIncomeTax(taxableIncome, filingStatus);

    totalTax = selfEmploymentTax + federalIncomeTax;
    netIncome = netBusinessIncome;
    ownerTakeHome = netBusinessIncome - selfEmploymentTax - federalIncomeTax + (selfEmploymentTax * 0.5); // 50% SE tax deduction
  }

  // State tax
  const stateTax = netIncome * stateTaxRate;
  totalTax += stateTax;
  ownerTakeHome -= stateTax;

  // Payroll tax on employees (employer portion)
  if (employeePayroll > 0) {
    const employeeSSTax = Math.min(employeePayroll, SOCIAL_SECURITY_WAGE_BASE) * EMPLOYER_SS_RATE;
    const employeeMedicareTax = employeePayroll * EMPLOYER_MEDICARE_RATE;
    const employeePayrollTax = employeeSSTax + employeeMedicareTax;
    payrollTax += employeePayrollTax;
    totalTax += employeePayrollTax;
  }

  // Effective tax rate
  const effectiveTaxRate = netBusinessIncome > 0 ? (totalTax / netBusinessIncome) * 100 : 0;

  // Estimated quarterly payments (for pass-through entities)
  const quarterlyPayment = entityType !== "c-corp" ? (selfEmploymentTax + federalIncomeTax) * 0.9 / 4 : 0;

  return {
    businessIncome,
    businessExpenses,
    netBusinessIncome,
    ownerSalary,
    entityType,
    corporateTax,
    selfEmploymentTax,
    federalIncomeTax,
    payrollTax,
    stateTax,
    totalTax,
    netIncome,
    ownerTakeHome,
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

export default function BusinessTaxCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [businessIncome, setBusinessIncome] = useState(150000);
  const [businessExpenses, setBusinessExpenses] = useState(30000);
  const [ownerSalary, setOwnerSalary] = useState(60000);
  const [entityType, setEntityType] = useState<BusinessEntityType>("sole-proprietorship");
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
  const [stateTaxRate, setStateTaxRate] = useState(5);
  const [employeePayroll, setEmployeePayroll] = useState(0);

  const taxResults = useMemo(
    () => calculateBusinessTaxes(businessIncome, businessExpenses, ownerSalary, entityType, filingStatus, stateTaxRate / 100, employeePayroll),
    [businessIncome, businessExpenses, ownerSalary, entityType, filingStatus, stateTaxRate, employeePayroll]
  );

  const ENTITY_OPTIONS = [
    { value: "sole-proprietorship" as const, label: "Sole Proprietorship", icon: "👤" },
    { value: "llc" as const, label: "LLC", icon: "🏢" },
    { value: "s-corp" as const, label: "S-Corporation", icon: "📋" },
    { value: "c-corp" as const, label: "C-Corporation", icon: "🏛️" },
    { value: "partnership" as const, label: "Partnership", icon: "🤝" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8">
     

      {/* Entity Type Selector */}
      <section
        className="bg-white dark:bg-slate-900 rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 border border-slate-200 dark:border-slate-800 shadow-sm"
        aria-label="Business entity type selection"
      >
        <label className="text-xs font-semibold text-slate-800 dark:text-slate-400 uppercase tracking-wide mb-2 sm:mb-3 block">
          Business Entity Type
        </label>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2"
          role="radiogroup"
          aria-label="Select business entity type"
        >
          {ENTITY_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => setEntityType(option.value)}
              role="radio"
              aria-checked={entityType === option.value}
              aria-label={`${option.label} business entity`}
              className={`flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                entityType === option.value
                  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-600"
              }`}
            >
              <span className="text-xl sm:text-2xl" aria-hidden="true">
                {option.icon}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-slate-800 dark:text-slate-100">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </section>

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
                  💰
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
                step="5000"
                min="0"
                helper="gross revenue"
              />
              <InputField
                label="Business Expenses"
                value={businessExpenses}
                onChange={setBusinessExpenses}
                prefix={symbol}
                step="1000"
                min="0"
                helper="deductible"
              />
              {(entityType === "s-corp") && (
                <InputField
                  label="Owner Salary"
                  value={ownerSalary}
                  onChange={setOwnerSalary}
                  prefix={symbol}
                  step="5000"
                  min="0"
                  helper="reasonable compensation"
                />
              )}
              <InputField
                label="Employee Payroll"
                value={employeePayroll}
                onChange={setEmployeePayroll}
                prefix={symbol}
                step="5000"
                min="0"
                helper="optional"
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
                  Net Business Income
                </span>
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {fmt(taxResults.netBusinessIncome)}
                </span>
              </div>
              {taxResults.corporateTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    Corporate Tax
                  </span>
                  <div className="text-right">
                    <span className="font-medium text-slate-900 dark:text-slate-100">
                      {fmt(taxResults.corporateTax)}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
                      ({fmtPct(CORPORATE_TAX_RATE * 100)})
                    </span>
                  </div>
                </div>
              )}
              {taxResults.selfEmploymentTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    Self-Employment Tax
                  </span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {fmt(taxResults.selfEmploymentTax)}
                  </span>
                </div>
              )}
              {taxResults.payrollTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    Payroll Tax
                  </span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {fmt(taxResults.payrollTax)}
                  </span>
                </div>
              )}
              {taxResults.federalIncomeTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    Federal Income Tax
                  </span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {fmt(taxResults.federalIncomeTax)}
                  </span>
                </div>
              )}
              {taxResults.stateTax > 0 && (
                <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm text-slate-800 dark:text-slate-400">
                    State Tax
                  </span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    {fmt(taxResults.stateTax)}
                  </span>
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
                  Owner Take-Home
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {fmt(taxResults.ownerTakeHome)}
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
                {taxResults.quarterlyPayment > 0 && (
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
                )}
              </div>
            </div>
          </section>

          {/* Entity Type Notice */}
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
                  {entityType === "c-corp" ? "C-Corporation" : 
                   entityType === "s-corp" ? "S-Corporation" :
                   entityType === "llc" ? "LLC" :
                   entityType === "partnership" ? "Partnership" : "Sole Proprietorship"}
                </h3>
                <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  {entityType === "c-corp" 
                    ? "C-Corps pay a flat 21% corporate tax. Profits are taxed again when distributed as dividends (double taxation)."
                    : entityType === "s-corp"
                    ? "S-Corps avoid double taxation. Owner salary is subject to payroll tax, but remaining profits pass through to your personal tax return."
                    : "Pass-through entities avoid corporate tax. All business income passes through to your personal tax return and is subject to self-employment tax."
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
                <span>Track all business expenses throughout the year to maximize deductions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consider forming an S-Corp if your business income exceeds reasonable compensation thresholds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Pay estimated quarterly taxes to avoid penalties and interest.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5">•</span>
                <span>Consult a tax professional to determine the best entity structure for your situation.</span>
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
          This business tax calculator is for educational purposes only and does not
          constitute tax advice. Calculations are based on 2024 tax rates and
          simplified assumptions. Actual tax liability may vary based on business
          structure, state-specific rules, deductions, credits, and changes in tax laws.
          Always consult with a qualified tax professional or CPA for accurate tax
          planning and compliance.
        </p>
      </footer>
    </div>
  );
}
