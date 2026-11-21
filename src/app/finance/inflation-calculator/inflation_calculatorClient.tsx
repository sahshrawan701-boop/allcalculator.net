"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { useCurrency } from "@/hooks/useCurrency";
import CalculatorActions from "@/components/CalculatorActions";
// ─── Shared Components ────────────────────────────────────────────────────────

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  sub?: string;
}

function Label({ children, htmlFor, sub }: LabelProps) {
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

interface NumInputProps {
  id: string;
  label: string;
  sub?: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
  min?: string;
  max?: string;
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
  max,
}: NumInputProps) {
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
          max={max}
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

interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
}

function SectionCard({ children, className = "" }: SectionCardProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

type SectionHeadColor =
  | "indigo"
  | "amber"
  | "emerald"
  | "violet"
  | "rose"
  | "teal"
  | "blue"
  | "slate";

interface SectionHeadProps {
  icon: string;
  title: string;
  color?: SectionHeadColor;
}

function SectionHead({ icon, title, color = "indigo" }: SectionHeadProps) {
  const colors: Record<SectionHeadColor, string> = {
    indigo:
      "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
    amber:
      "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    emerald:
      "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    violet:
      "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400",
    rose: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400",
    teal: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    slate:
      "bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400",
  };
  return (
    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-100 dark:border-slate-800/60">
      <span
        className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${colors[color]}`}
      >
        {icon}
      </span>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        {title}
      </span>
    </div>
  );
}

function StatPill({
  label,
  value,
  sub,
  accent = false,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-xl border ${
        accent
          ? "bg-indigo-50/50 dark:bg-indigo-900/10 border-indigo-100 dark:border-indigo-500/20"
          : "bg-slate-50 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-700/50"
      }`}
    >
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {label}
        </div>
        {sub && (
          <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {sub}
          </div>
        )}
      </div>
      <div
        className={`text-base font-bold tabular-nums ${
          accent
            ? "text-indigo-700 dark:text-indigo-400"
            : "text-slate-800 dark:text-slate-100"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function InflationCalculatorPage() {
  const { fmt, symbol } = useCurrency();

  const [amount, setAmount] = useState(1000);
  const [startYear, setStartYear] = useState(2020);
  const [endYear, setEndYear] = useState(2024);
  const [inflationRate, setInflationRate] = useState(3.5);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.amount !== undefined) setAmount(data.amount);
          if (data.startYear !== undefined) setStartYear(data.startYear);
          if (data.endYear !== undefined) setEndYear(data.endYear);
          if (data.inflationRate !== undefined) setInflationRate(data.inflationRate);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);


  const result = useMemo(() => {
    const years = endYear - startYear;

    // Avoid calculations for negative or zero years
    if (years <= 0) {
      return {
        adjustedAmount: amount,
        inflationImpact: 0,
        purchasingPower: 100,
        years: 0,
      };
    }

    const adjustedAmount = amount * Math.pow(1 + inflationRate / 100, years);
    const inflationImpact = adjustedAmount - amount;
    const purchasingPower = (amount / adjustedAmount) * 100;

    return {
      adjustedAmount,
      inflationImpact,
      purchasingPower,
      years,
    };
  }, [amount, startYear, endYear, inflationRate]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Mobile Summary - Only visible on small screens */}
        <div className="xl:hidden mb-6">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-5 text-white shadow-xl">
            <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/80 mb-1">
              Adjusted Amount
            </div>
            <div className="text-4xl font-bold tabular-nums tracking-tight">
              {symbol}
              {fmt(result.adjustedAmount)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Inputs */}
          <div className="space-y-5">
            <SectionCard>
              <SectionHead icon="💵" title="Inflation Setup" color="emerald" />
              <div className="p-5">
                <NumInput
                  id="amount"
                  label="Amount"
                  sub="Original value"
                  value={amount}
                  onChange={setAmount}
                  prefix={symbol}
                  min="0"
                  step="100"
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="📅" title="Time Period" color="indigo" />
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <NumInput
                  id="startYear"
                  label="Start Year"
                  sub="Initial year"
                  value={startYear}
                  onChange={setStartYear}
                  min="1900"
                  max="2100"
                  step="1"
                />
                <NumInput
                  id="endYear"
                  label="End Year"
                  sub="Target year"
                  value={endYear}
                  onChange={setEndYear}
                  min="1900"
                  max="2100"
                  step="1"
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="📈" title="Inflation Rate" color="rose" />
              <div className="p-5">
                <NumInput
                  id="inflationRate"
                  label="Average Annual Inflation Rate"
                  sub="Historical average is around 3-4%"
                  value={inflationRate}
                  onChange={setInflationRate}
                  suffix="%"
                  min="0"
                  max="50"
                  step="0.1"
                />
              </div>
            </SectionCard>
          </div>

          {/* RIGHT — Results */}
          <div className="space-y-4">
            <div ref={resultRef} className="space-y-4 bg-white dark:bg-slate-900/50 p-1 -m-1 rounded-3xl">
              <div className="hidden xl:block rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-5 text-white shadow-xl shadow-indigo-200 dark:shadow-indigo-950">
                <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-1">
                  Adjusted Amount
                </div>
                <div className="text-4xl font-bold tabular-nums tracking-tight mb-0.5">
                  {symbol}
                  {fmt(result.adjustedAmount)}
                </div>
                <div className="text-xs text-indigo-200">
                  money needed today to match value
                </div>

                <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                      Original Amount
                    </div>
                    <div className="text-lg font-bold tabular-nums">
                      {symbol}
                      {fmt(amount)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                      Years Elapsed
                    </div>
                    <div className="text-lg font-bold tabular-nums">
                      {result.years} years
                    </div>
                  </div>
                </div>
              </div>

              <SectionCard>
                <SectionHead icon="📊" title="Key Metrics" color="amber" />
                <div className="p-5 space-y-3">
                  <StatPill
                    label="Inflation Impact"
                    value={`${symbol}${fmt(result.inflationImpact)}`}
                    sub={`loss in value over ${result.years} years`}
                    accent
                  />
                  <StatPill
                    label="Purchasing Power"
                    value={`${fmt(result.purchasingPower)}%`}
                    sub="of original value retained"
                  />
                  <StatPill
                    label="Original Value Today"
                    value={`${symbol}${fmt((result.purchasingPower * amount) / 100)}`}
                    sub="what the original amount buys now"
                  />
                </div>
              </SectionCard>
            </div>
            
            <CalculatorActions
              calculatorId="inflation-calculator"
              calculatorName="Inflation Calculator"
              inputData={{ amount, startYear, endYear, inflationRate }}
              resultData={{ 
                adjustedAmount: result.adjustedAmount, 
                inflationImpact: result.inflationImpact, 
                purchasingPower: result.purchasingPower, 
                years: result.years 
              }}
              resultRef={resultRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
