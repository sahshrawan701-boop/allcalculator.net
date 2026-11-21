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

const STATES = [
  { name: "California", incomeTax: 9.3, salesTax: 7.25, propertyTax: 0.76 },
  { name: "Texas", incomeTax: 0, salesTax: 6.25, propertyTax: 1.69 },
  { name: "Florida", incomeTax: 0, salesTax: 6, propertyTax: 0.83 },
  { name: "New York", incomeTax: 6.85, salesTax: 4, propertyTax: 1.92 },
  { name: "Washington", incomeTax: 0, salesTax: 6.5, propertyTax: 0.92 },
];

export default function StateTaxComparisonCalculatorPage() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [income, setIncome] = useState(100000);
  const [spending, setSpending] = useState(30000);
  const [homeValue, setHomeValue] = useState(400000);

  const { comparisons } = useMemo(() => {
    const comparisons = STATES.map((state) => {
      const incomeTax = income * (state.incomeTax / 100);
      const salesTax = spending * (state.salesTax / 100);
      const propertyTax = homeValue * (state.propertyTax / 100);
      const totalTax = incomeTax + salesTax + propertyTax;
      return { ...state, incomeTax, salesTax, propertyTax, totalTax };
    }).sort((a, b) => a.totalTax - b.totalTax);
    return { comparisons };
  }, [income, spending, homeValue]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Inputs */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="💰" title="Your Finances" color="indigo" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="income"
                    label="Annual Income"
                    value={income}
                    onChange={setIncome}
                    prefix={symbol}
                    step="5000"
                    min="0"
                    sub="taxable income"
                  />
                  <NumInput
                    id="spending"
                    label="Annual Spending"
                    value={spending}
                    onChange={setSpending}
                    prefix={symbol}
                    step="1000"
                    min="0"
                    sub="on taxable goods"
                  />
                </div>
                <NumInput
                  id="home"
                  label="Home Value"
                  value={homeValue}
                  onChange={setHomeValue}
                  prefix={symbol}
                  step="10000"
                  min="0"
                  sub="assessed value"
                />
              </div>
            </SectionCard>
          </div>

          {/* RIGHT — Results */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="📊" title="State Comparison" color="emerald" />
              <div className="p-5">
                <div className="space-y-3">
                  {comparisons.slice(0, 3).map((state, idx) => (
                    <div
                      key={state.name}
                      className={`p-3 rounded-lg border ${
                        idx === 0
                          ? "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800/50"
                          : "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                          {state.name}
                        </span>
                        <span className={`text-sm font-bold tabular-nums ${idx === 0 ? "text-emerald-600 dark:text-emerald-400" : "text-slate-800 dark:text-slate-100"}`}>
                          {fmt(state.totalTax)}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-500 dark:text-slate-400">
                        <div>
                          <div>Income</div>
                          <div className="font-medium text-slate-700 dark:text-slate-300">{fmtPct(state.incomeTax)}</div>
                        </div>
                        <div>
                          <div>Sales</div>
                          <div className="font-medium text-slate-700 dark:text-slate-300">{fmtPct(state.salesTax)}</div>
                        </div>
                        <div>
                          <div>Property</div>
                          <div className="font-medium text-slate-700 dark:text-slate-300">{fmtPct(state.propertyTax)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="ℹ️" title="Tax Breakdown" color="indigo" />
              <div className="p-5">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Lowest Tax State</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">
                      {comparisons[0]?.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Annual Tax</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                      {fmt(comparisons[0]?.totalTax || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Highest Tax State</span>
                    <span className="font-semibold text-rose-500 dark:text-rose-400 tabular-nums">
                      {comparisons[comparisons.length - 1]?.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Annual Tax</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                      {fmt(comparisons[comparisons.length - 1]?.totalTax || 0)}
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
