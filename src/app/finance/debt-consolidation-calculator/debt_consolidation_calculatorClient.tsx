"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import CalculatorActions from "@/components/CalculatorActions";
import { useCurrency } from "@/hooks/useCurrency";

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

interface SliderProps {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format?: (v: number) => string;
}

function Slider({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: SliderProps) {
  const raw = Math.min(Math.max(value, min), max);
  const pct = max > min ? ((raw - min) / (max - min)) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5">
        <Label htmlFor={id}>{label}</Label>
        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
          {format ? format(raw) : raw}
        </span>
      </div>
      <div className="relative h-5 flex items-center">
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-slate-200 dark:bg-slate-900" />
        <div
          className="absolute left-0 h-1.5 rounded-full bg-indigo-500"
          style={{ width: `${pct}%` }}
        />
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={raw}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-valuenow={raw}
          aria-valuemin={min}
          aria-valuemax={max}
        />
        <div
          className="absolute w-4 h-4 rounded-full bg-indigo-500 shadow-md border-2 border-white dark:border-slate-900 pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
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

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function DebtConsolidationCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.totalDebt !== undefined) setTotalDebt(data.totalDebt);
          if (data.currentRate !== undefined) setCurrentRate(data.currentRate);
          if (data.currentMonthly !== undefined) setCurrentMonthly(data.currentMonthly);
          if (data.newRate !== undefined) setNewRate(data.newRate);
          if (data.newTerm !== undefined) setNewTerm(data.newTerm);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, symbol } = useCurrency();

  const [totalDebt, setTotalDebt] = useState(15000);
  const [currentRate, setCurrentRate] = useState(18.9);
  const [currentMonthly, setCurrentMonthly] = useState(450);

  const [newRate, setNewRate] = useState(8.5);
  const [newTerm, setNewTerm] = useState(36);

  const result = useMemo(() => {
    const rCurrent = currentRate / 100 / 12;
    let currentMonths = 0;
    let currentTotalInterest = 0;
    let currentTotalPaid = 0;
    let isInfinite = false;
    let minPaymentAllowed = totalDebt * rCurrent;

    if (rCurrent === 0) {
      currentMonths = Math.ceil(totalDebt / currentMonthly);
      currentTotalPaid = totalDebt;
    } else if (currentMonthly <= minPaymentAllowed) {
      isInfinite = true;
    } else {
      const n =
        -Math.log(1 - (totalDebt * rCurrent) / currentMonthly) /
        Math.log(1 + rCurrent);
      currentMonths = Math.ceil(n);
      let remaining = totalDebt;
      for (let i = 0; i < currentMonths; i++) {
        const int = remaining * rCurrent;
        currentTotalInterest += int;
        const pmt = i === currentMonths - 1 ? remaining + int : currentMonthly;
        currentTotalPaid += pmt;
        remaining -= pmt - int;
      }
    }

    const rNew = newRate / 100 / 12;
    const nNew = newTerm;
    let newMonthly = 0;
    let newTotalInterest = 0;
    let newTotalPaid = 0;

    if (rNew === 0) {
      newMonthly = totalDebt / nNew;
      newTotalPaid = totalDebt;
    } else {
      const factor = Math.pow(1 + rNew, nNew);
      newMonthly = (totalDebt * rNew * factor) / (factor - 1);
      let remaining = totalDebt;
      for (let i = 0; i < nNew; i++) {
        const int = remaining * rNew;
        newTotalInterest += int;
        const pmt = i === nNew - 1 ? remaining + int : newMonthly;
        newTotalPaid += pmt;
        remaining -= pmt - int;
      }
    }

    const totalSavings = isInfinite
      ? Infinity
      : currentTotalPaid - newTotalPaid;
    const monthlySavings = currentMonthly - newMonthly;
    const timeSavings = isInfinite ? Infinity : currentMonths - nNew;

    return {
      isInfinite,
      minPaymentAllowed,
      currentMonths,
      currentTotalInterest,
      currentTotalPaid,
      newMonthly,
      newTotalInterest,
      newTotalPaid,
      totalSavings,
      monthlySavings,
      timeSavings,
    };
  }, [totalDebt, currentRate, currentMonthly, newRate, newTerm]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top Dashboard */}
        <div className="mb-6 space-y-5">
          {result.isInfinite && (
            <SectionCard className="border-rose-500/20 dark:border-rose-400/20">
              <div className="bg-rose-600 dark:bg-rose-900/60 p-6 text-white text-center rounded-xl">
                <i className="fas fa-exclamation-triangle text-3xl mb-3" />
                <h2 className="text-xl font-bold mb-2">
                  Warning: Infinite Debt Trap
                </h2>
                <p className="text-rose-100 max-w-lg mx-auto">
                  Your current monthly payment of {symbol}
                  {fmt(currentMonthly)} is less than or equal to the monthly
                  interest charge of {symbol}
                  {fmt(result.minPaymentAllowed)}. You will never pay off this
                  debt on your current path. Consolidation is highly
                  recommended!
                </p>
              </div>
            </SectionCard>
          )}

          <SectionCard
            className={`border ${result.totalSavings > 0 ? "border-emerald-500/20 dark:border-emerald-400/20" : "border-rose-500/20 dark:border-rose-400/20"}`}
          >
            <div
              className={`p-6 sm:flex sm:justify-between sm:items-center sm:text-left sm:px-8 text-white ${result.totalSavings > 0 ? "bg-emerald-600 dark:bg-emerald-900/60" : "bg-rose-600 dark:bg-rose-900/60"}`}
            >
              <div>
                <div
                  className={`text-xs font-semibold uppercase tracking-wider mb-1 ${result.totalSavings > 0 ? "text-emerald-200" : "text-rose-200"}`}
                >
                  Lifetime Savings
                </div>
                <div className="text-4xl font-black tabular-nums tracking-tight">
                  {result.isInfinite
                    ? "Infinite"
                    : result.totalSavings > 0
                      ? `${symbol}${fmt(result.totalSavings)}`
                      : `-${symbol}${fmt(Math.abs(result.totalSavings))}`}
                </div>
              </div>

              <div className="flex gap-4 mt-4 sm:mt-0 justify-center">
                <div
                  className={`rounded-xl p-4 min-w-[140px] text-center ${result.totalSavings > 0 ? "bg-emerald-700/50 dark:bg-emerald-800/50" : "bg-rose-700/50 dark:bg-rose-800/50"}`}
                >
                  <div
                    className={`text-[10px] font-semibold uppercase tracking-wider mb-1 ${result.totalSavings > 0 ? "text-emerald-300" : "text-rose-300"}`}
                  >
                    Monthly Diff
                  </div>
                  <div className="text-xl font-bold tabular-nums">
                    {result.monthlySavings > 0 ? "+" : ""}
                    {symbol}
                    {fmt(result.monthlySavings)}/mo
                  </div>
                </div>

                <div
                  className={`rounded-xl p-4 min-w-[140px] text-center ${result.totalSavings > 0 ? "bg-emerald-700/50 dark:bg-emerald-800/50" : "bg-rose-700/50 dark:bg-rose-800/50"}`}
                >
                  <div
                    className={`text-[10px] font-semibold uppercase tracking-wider mb-1 ${result.totalSavings > 0 ? "text-emerald-300" : "text-rose-300"}`}
                  >
                    Time Saved
                  </div>
                  <div className="text-xl font-bold tabular-nums">
                    {result.isInfinite
                      ? "Forever"
                      : result.timeSavings > 0
                        ? `${result.timeSavings} months`
                        : `${result.timeSavings} months`}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-rose-500 dark:text-rose-400 mb-1">
                  Current Total Paid
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {result.isInfinite
                    ? "Infinite"
                    : `${symbol}${fmt(result.currentTotalPaid)}`}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {result.isInfinite
                    ? "N/A"
                    : `over ${result.currentMonths} months`}
                </div>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-emerald-500 dark:text-emerald-400 mb-1">
                  New Total Paid
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {symbol}
                  {fmt(result.newTotalPaid)}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  over {newTerm} months
                </div>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-rose-500 dark:text-rose-400 mb-1">
                  Current Interest
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {result.isInfinite
                    ? "Infinite"
                    : `${symbol}${fmt(result.currentTotalInterest)}`}
                </div>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-emerald-500 dark:text-emerald-400 mb-1">
                  New Interest
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {symbol}
                  {fmt(result.newTotalInterest)}
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Current Debt Input */}
          <SectionCard>
            <SectionHead icon="💳" title="Current Debt" color="rose" />
            <div className="p-5 space-y-6">
              <NumInput
                id="totalDebt"
                label="Total Debt Amount"
                value={totalDebt}
                onChange={setTotalDebt}
                prefix={symbol}
                min="0"
                step="100"
              />
              <Slider
                id="currentRate"
                label="Current Interest Rate"
                value={currentRate}
                onChange={setCurrentRate}
                min={0}
                max={39.99}
                step={0.1}
                format={(v) => `${v.toFixed(1)}%`}
              />
              <NumInput
                id="currentMonthly"
                label="Current Monthly Payment"
                value={currentMonthly}
                onChange={setCurrentMonthly}
                prefix={symbol}
                min="0"
                step="10"
                sub="What you currently pay across all debts combined"
              />
            </div>
          </SectionCard>

          {/* New Loan Input */}
          <SectionCard>
            <SectionHead icon="🤝" title="Consolidation Loan" color="emerald" />
            <div className="p-5 space-y-6">
              <Slider
                id="newRate"
                label="New Interest Rate"
                value={newRate}
                onChange={setNewRate}
                min={0}
                max={29.99}
                step={0.1}
                format={(v) => `${v.toFixed(1)}%`}
              />
              <Slider
                id="newTerm"
                label="New Loan Term (Months)"
                value={newTerm}
                onChange={setNewTerm}
                min={12}
                max={120}
                step={1}
                format={(v) => `${v} mo (${(v / 12).toFixed(1)} yrs)`}
              />

              <div className="flex flex-wrap gap-2 mt-2">
                {[12, 24, 36, 48, 60, 72].map((m) => (
                  <button
                    key={m}
                    onClick={() => setNewTerm(m)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                      newTerm === m
                        ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500"
                        : "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {m} mo
                  </button>
                ))}
              </div>
            </div>
          </SectionCard>
        </div>
      
        <CalculatorActions
          calculatorId="debt-consolidation-calculator"
          calculatorName="Debt Consolidation Calculator"
          inputData={{ totalDebt, currentRate, currentMonthly, newRate, newTerm }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}