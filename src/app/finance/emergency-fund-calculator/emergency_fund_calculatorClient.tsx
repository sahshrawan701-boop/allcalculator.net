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

export default function EmergencyFundCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.monthlyExpenses !== undefined) setMonthlyExpenses(data.monthlyExpenses);
          if (data.months !== undefined) setMonths(data.months);
          if (data.currentSavings !== undefined) setCurrentSavings(data.currentSavings);
          if (data.timelineMonths !== undefined) setTimelineMonths(data.timelineMonths);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, symbol } = useCurrency();

  const [monthlyExpenses, setMonthlyExpenses] = useState(4000);
  const [months, setMonths] = useState(6);
  const [currentSavings, setCurrentSavings] = useState(5000);
  const [timelineMonths, setTimelineMonths] = useState(12);

  const result = useMemo(() => {
    const targetFund = monthlyExpenses * months;
    const remainingNeeded = Math.max(0, targetFund - currentSavings);
    const percentageComplete =
      targetFund > 0 ? Math.min(100, (currentSavings / targetFund) * 100) : 0;
    const monthlySavingTarget =
      timelineMonths > 0 ? remainingNeeded / timelineMonths : 0;

    const isComplete = remainingNeeded <= 0;
    let status = "";
    let colors = { border: "", bg: "", text: "" };

    if (percentageComplete >= 100) {
      status = "Goal Reached!";
      colors = {
        border: "border-emerald-500/20 dark:border-emerald-400/20",
        bg: "bg-emerald-600 dark:bg-emerald-900/60",
        text: "text-emerald-200",
      };
    } else if (percentageComplete >= 50) {
      status = "On Track";
      colors = {
        border: "border-lime-500/20 dark:border-lime-400/20",
        bg: "bg-lime-600 dark:bg-lime-900/60",
        text: "text-lime-200",
      };
    } else if (percentageComplete >= 20) {
      status = "Making Progress";
      colors = {
        border: "border-amber-500/20 dark:border-amber-400/20",
        bg: "bg-amber-500 dark:bg-amber-900/60",
        text: "text-amber-200",
      };
    } else {
      status = "Getting Started";
      colors = {
        border: "border-indigo-500/20 dark:border-indigo-400/20",
        bg: "bg-indigo-600 dark:bg-indigo-900/60",
        text: "text-indigo-200",
      };
    }

    return {
      targetFund,
      remainingNeeded,
      percentageComplete,
      monthlySavingTarget,
      isComplete,
      status,
      colors,
    };
  }, [monthlyExpenses, months, currentSavings, timelineMonths]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top Dashboard */}
        <div className="mb-6 space-y-5">
          <SectionCard className={`border ${result.colors.border}`}>
            <div
              className={`p-6 sm:flex sm:justify-between sm:items-center sm:text-left sm:px-8 text-white ${result.colors.bg}`}
            >
              <div>
                <div
                  className={`text-xs font-semibold uppercase tracking-wider mb-1 ${result.colors.text}`}
                >
                  Target Emergency Fund
                </div>
                <div className="text-5xl font-black tabular-nums tracking-tight">
                  {symbol}
                  {fmt(result.targetFund)}
                </div>
              </div>

              <div className="flex gap-4 mt-4 sm:mt-0 justify-center">
                <div
                  className={`rounded-xl p-4 min-w-[140px] text-center bg-black/10 dark:bg-black/20`}
                >
                  <div
                    className={`text-[10px] font-semibold uppercase tracking-wider mb-1 ${result.colors.text}`}
                  >
                    Progress
                  </div>
                  <div className="text-xl font-bold tabular-nums tracking-wider">
                    {result.percentageComplete.toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                  Current Savings
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {symbol}
                  {fmt(currentSavings)}
                </div>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-amber-500 dark:text-amber-400 mb-1">
                  Amount Still Needed
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {symbol}
                  {fmt(result.remainingNeeded)}
                </div>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-indigo-500 dark:text-indigo-400 mb-1">
                  Monthly Goal (to hit in {timelineMonths} mo)
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {result.isComplete
                    ? "Done!"
                    : `${symbol}${fmt(result.monthlySavingTarget)}/mo`}
                </div>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                  Target Coverage
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {months} Months
                </div>
              </div>
            </div>
          </SectionCard>

          <div className="relative h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
            <div
              className={`absolute top-0 left-0 h-full transition-all duration-700 ease-out ${result.isComplete ? "bg-emerald-500" : result.percentageComplete >= 50 ? "bg-lime-500" : "bg-indigo-500"}`}
              style={{ width: `${result.percentageComplete}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
          <SectionCard>
            <SectionHead icon="🛡️" title="Your Fund Details" color="indigo" />
            <div className="p-5 space-y-6">
              <NumInput
                id="monthlyExpenses"
                label="Monthly Living Expenses"
                sub="Rent, food, utilities, etc."
                value={monthlyExpenses}
                onChange={setMonthlyExpenses}
                prefix={symbol}
                min="0"
                step="100"
              />
              <Slider
                id="months"
                label="Coverage Period"
                value={months}
                onChange={setMonths}
                min={1}
                max={24}
                step={1}
                format={(v) => `${v} months`}
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {[3, 6, 9, 12, 24].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMonths(m)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                      months === m
                        ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-500"
                        : "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {m} mo
                  </button>
                ))}
              </div>
            </div>
          </SectionCard>

          <SectionCard>
            <SectionHead icon="🎯" title="Savings Strategy" color="emerald" />
            <div className="p-5 space-y-6">
              <NumInput
                id="currentSavings"
                label="Current Emergency Savings"
                value={currentSavings}
                onChange={setCurrentSavings}
                prefix={symbol}
                min="0"
                step="100"
              />

              <Slider
                id="timelineMonths"
                label="Timeline to Reach Goal"
                value={timelineMonths}
                onChange={setTimelineMonths}
                min={1}
                max={60}
                step={1}
                format={(v) => `${v} months (${(v / 12).toFixed(1)} yrs)`}
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {[6, 12, 24, 36, 60].map((m) => (
                  <button
                    key={m}
                    onClick={() => setTimelineMonths(m)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                      timelineMonths === m
                        ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500"
                        : "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {m} mo
                  </button>
                ))}
              </div>

              {result.remainingNeeded > 0 && (
                <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800/50">
                  <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                    <i className="fas fa-arrow-trend-up mr-2" />
                    To fully fund your {months}-month reserve in{" "}
                    {timelineMonths} months, you need to save{" "}
                    <strong className="font-black text-emerald-800 dark:text-emerald-200">
                      {symbol}
                      {fmt(result.monthlySavingTarget)}
                    </strong>{" "}
                    per month.
                  </p>
                </div>
              )}
            </div>
          </SectionCard>
        </div>
      
        <CalculatorActions
          calculatorId="emergency-fund-calculator"
          calculatorName="Emergency Fund Calculator"
          inputData={{ monthlyExpenses, months, currentSavings, timelineMonths }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}