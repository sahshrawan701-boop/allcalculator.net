"use client";

import { useState, useMemo } from "react";
import { useCurrency } from '@/hooks/useCurrency';


function fmtPct(n: number, dp = 2) {
  if (!isFinite(n) || isNaN(n)) return "0.00%";
  return n.toFixed(dp) + "%";
}

function Label({ children, htmlFor, sub }: { children: React.ReactNode; htmlFor?: string; sub?: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-slate-500 dark:text-slate-400 mb-1.5"
    >
      {children}
      {sub && (
        <span className="ml-1.5 font-normal normal-case text-slate-400 dark:text-slate-400">
          {sub}
        </span>
      )}
    </label>
  );
}

function NumInput({
  id,
  label,
  sub,
  value,
  onChange,
  prefix,
  suffix,
  step = "any",
  min = "0",
}: {
  id: string;
  label: string;
  sub?: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
  min?: string;
}) {
  const [local, setLocal] = useState(String(value));
  return (
    <div>
      <Label htmlFor={id} sub={sub}>
        {label}
      </Label>
      <div className="relative group">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-sm font-semibold text-slate-400 dark:text-slate-400 group-focus-within:text-indigo-500 transition-colors">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={local}
          onChange={(e) => {
            setLocal(e.target.value);
            const v = parseFloat(e.target.value);
            if (!isNaN(v)) onChange(v);
          }}
          onBlur={() => {
            const v = parseFloat(local);
            if (!isNaN(v)) {
              onChange(v);
              setLocal(String(v));
            } else setLocal(String(value));
          }}
          className={`w-full h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 placeholder-slate-300 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 hover:border-slate-200 dark:hover:border-slate-600 ${prefix ? "pl-8" : "pl-3"} ${suffix ? "pr-10" : "pr-3"}`}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-sm font-medium text-slate-400 dark:text-slate-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function SectionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHead({ icon, title, color = "indigo" }: { icon: string; title: string; color?: "indigo" | "amber" | "emerald" }) {
  const colors = {
    indigo:
      "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
    amber:
      "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    emerald:
      "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
  };
  return (
    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-100 dark:border-slate-800/60">
      <span
        className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${colors[color as keyof typeof colors]}`}
      >
        {icon}
      </span>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        {title}
      </span>
    </div>
  );
}

function StatPill({ label, value, sub, accent = false }: { label: string; value: string; sub?: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-xl px-4 py-3 ${accent ? "bg-indigo-50 dark:bg-indigo-900/20" : "bg-slate-50 dark:bg-slate-900/40"}`}
    >
      <div className="text-[10px] font-semibold uppercase tracking-[0.09em] text-slate-500 dark:text-slate-400 mb-0.5">
        {label}
      </div>
      <div
        className={`text-lg font-bold tabular-nums ${accent ? "text-indigo-600 dark:text-indigo-400" : "text-slate-800 dark:text-slate-100"}`}
      >
        {value}
      </div>
      {sub && (
        <div className="text-[10px] text-slate-400 dark:text-slate-400 mt-0.5">
          {sub}
        </div>
      )}
    </div>
  );
}

export default function TaxableIncomeCalculatorPage() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [grossIncome, setGrossIncome] = useState(75000);
  const [traditionalIra, setTraditionalIra] = useState(6000);
  const [studentLoanInterest, setStudentLoanInterest] = useState(1000);
  const [hsaContributions, setHsaContributions] = useState(3500);
  const [standardDeduction, setStandardDeduction] = useState(13850);

  const { agi, taxableIncome, effectiveRate } = useMemo(() => {
    const aboveLineDeductions = traditionalIra + studentLoanInterest + hsaContributions;
    const agi = Math.max(0, grossIncome - aboveLineDeductions);
    const taxableIncome = Math.max(0, agi - standardDeduction);
    const effectiveRate = grossIncome > 0 ? (taxableIncome / grossIncome) * 100 : 0;
    return { agi, taxableIncome, effectiveRate };
  }, [grossIncome, traditionalIra, studentLoanInterest, hsaContributions, standardDeduction]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Inputs */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="💰" title="Income" color="indigo" />
              <div className="p-5 space-y-5">
                <NumInput
                  id="gross"
                  label="Gross Income"
                  value={grossIncome}
                  onChange={setGrossIncome}
                  prefix={symbol}
                  step="1000"
                  min="0"
                  sub="all income sources"
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="📋" title="Above-the-Line Deductions" color="amber" />
              <div className="p-5 space-y-4">
                <NumInput
                  id="ira"
                  label="Traditional IRA"
                  value={traditionalIra}
                  onChange={setTraditionalIra}
                  prefix={symbol}
                  step="500"
                  min="0"
                  sub="max $7,000"
                />
                <NumInput
                  id="student"
                  label="Student Loan Interest"
                  value={studentLoanInterest}
                  onChange={setStudentLoanInterest}
                  prefix={symbol}
                  step="100"
                  min="0"
                  sub="max $2,500"
                />
                <NumInput
                  id="hsa"
                  label="HSA Contributions"
                  value={hsaContributions}
                  onChange={setHsaContributions}
                  prefix={symbol}
                  step="100"
                  min="0"
                  sub="pre-tax"
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="📝" title="Standard Deduction" color="emerald" />
              <div className="p-5">
                <NumInput
                  id="deduction"
                  label="Standard Deduction"
                  value={standardDeduction}
                  onChange={setStandardDeduction}
                  prefix={symbol}
                  step="500"
                  min="0"
                  sub="2024 amount"
                />
              </div>
            </SectionCard>
          </div>

          {/* RIGHT — Results */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="📊" title="Income Summary" color="emerald" />
              <div className="p-5">
                <div className="space-y-3">
                  <StatPill
                    label="Taxable Income"
                    value={fmt(taxableIncome)}
                    sub="after deductions"
                    accent
                  />
                  <StatPill
                    label="Adjusted Gross Income"
                    value={fmt(agi)}
                    sub="AGI"
                  />
                  <StatPill
                    label="Effective Rate"
                    value={fmtPct(effectiveRate)}
                    sub="of gross income"
                  />
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="ℹ️" title="Income Breakdown" color="indigo" />
              <div className="p-5">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Gross Income</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                      {fmt(grossIncome)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Above-Line Deductions</span>
                    <span className="font-semibold text-rose-500 dark:text-rose-400 tabular-nums">
                      -{fmt(traditionalIra + studentLoanInterest + hsaContributions)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">AGI</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
                      {fmt(agi)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Standard Deduction</span>
                    <span className="font-semibold text-rose-500 dark:text-rose-400 tabular-nums">
                      -{fmt(standardDeduction)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Taxable Income</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                      {fmt(taxableIncome)}
                    </span>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
