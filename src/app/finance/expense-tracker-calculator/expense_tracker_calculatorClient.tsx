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

interface PremiumDonutProps {
  data: { label: string; val: number; color: string }[];
  total: number;
}

function PremiumDonut({ data, total }: PremiumDonutProps) {
  const { fmtShort } = useCurrency();
  const activeData = data
    .filter((d) => d.val > 0)
    .sort((a, b) => b.val - a.val);

  if (total <= 0 || activeData.length === 0) return null;

  const r = 54;
  const circ = 2 * Math.PI * r;
  const gap = 1.5;

  let currentOffset = 0;
  const slices = activeData.map((d) => {
    const p = (d.val / total) * 100;
    const strokeDash = (p / 100) * circ;
    const slice = {
      ...d,
      p,
      strokeDash: Math.max(0, strokeDash - gap),
      offset: -currentOffset,
    };
    currentOffset += strokeDash + gap;
    return slice;
  });

  return (
    <div className="flex flex-col items-center gap-8 p-6">
      <div className="relative w-[130px] h-[130px] shrink-0">
        <svg viewBox="0 0 130 130" className="w-full h-full -rotate-90">
          <circle
            cx="65"
            cy="65"
            r={r}
            fill="none"
            strokeWidth="14"
            className="text-slate-100 dark:text-slate-800/80 stroke-current"
          />
          {slices.map((slice, i) => (
            <circle
              key={i}
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke={slice.color}
              strokeWidth="14"
              strokeDasharray={`${slice.strokeDash} ${circ}`}
              strokeDashoffset={slice.offset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            Total
          </span>
          <span className="text-xl font-black text-slate-800 dark:text-slate-100 tabular-nums">
            {fmtShort(total)}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function ExpenseTrackerCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.monthlyIncome !== undefined) setMonthlyIncome(data.monthlyIncome);
          if (data.housing !== undefined) setHousing(data.housing);
          if (data.utilities !== undefined) setUtilities(data.utilities);
          if (data.food !== undefined) setFood(data.food);
          if (data.transportation !== undefined) setTransportation(data.transportation);
          if (data.entertainment !== undefined) setEntertainment(data.entertainment);
          if (data.shopping !== undefined) setShopping(data.shopping);
          if (data.healthcare !== undefined) setHealthcare(data.healthcare);
          if (data.other !== undefined) setOther(data.other);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, symbol } = useCurrency();

  const [monthlyIncome, setMonthlyIncome] = useState(6000);
  const [housing, setHousing] = useState(1500);
  const [utilities, setUtilities] = useState(200);
  const [food, setFood] = useState(600);
  const [transportation, setTransportation] = useState(400);
  const [entertainment, setEntertainment] = useState(300);
  const [shopping, setShopping] = useState(250);
  const [healthcare, setHealthcare] = useState(150);
  const [other, setOther] = useState(200);

  const result = useMemo(() => {
    const expenses = [
      { label: "Housing", val: housing, color: "#3b82f6" }, // blue
      { label: "Utilities", val: utilities, color: "#06b6d4" }, // cyan
      { label: "Food", val: food, color: "#10b981" }, // emerald
      { label: "Transportation", val: transportation, color: "#eab308" }, // yellow
      { label: "Entertainment", val: entertainment, color: "#f97316" }, // orange
      { label: "Shopping", val: shopping, color: "#ec4899" }, // pink
      { label: "Healthcare", val: healthcare, color: "#ef4444" }, // red
      { label: "Other", val: other, color: "#64748b" }, // slate
    ];

    const total = expenses.reduce((sum, item) => sum + item.val, 0);
    const leftOver = Math.max(0, monthlyIncome - total);
    const overBudget = total > monthlyIncome && monthlyIncome > 0;

    let highestExpense = expenses[0];
    expenses.forEach((item) => {
      if (item.val > highestExpense.val) {
        highestExpense = item;
      }
    });

    return {
      expenses,
      total,
      leftOver,
      overBudget,
      highestExpense,
    };
  }, [
    monthlyIncome,
    housing,
    utilities,
    food,
    transportation,
    entertainment,
    shopping,
    healthcare,
    other,
  ]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900/50">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Mobile Summary - Only visible on small screens */}
        <div className="xl:hidden mb-6">
          <div
            className={`rounded-2xl bg-gradient-to-br ${result.overBudget ? "from-rose-600 via-rose-600 to-red-700" : "from-indigo-600 via-indigo-600 to-violet-700"} p-5 text-white shadow-xl`}
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/80 mb-1">
              Total Monthly Expenses
            </div>
            <div className="text-4xl font-bold tabular-nums tracking-tight">
              {fmt(result.total)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Inputs */}
          <div className="space-y-5">
            <SectionCard>
              <SectionHead icon="💵" title="Income Setup" color="emerald" />
              <div className="p-5">
                <NumInput
                  id="monthlyIncome"
                  label="Monthly Income (Optional)"
                  sub="Used to calculate remaining budget"
                  value={monthlyIncome}
                  onChange={setMonthlyIncome}
                  prefix={symbol}
                  min="0"
                  step="100"
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="💳" title="Expense Categories" color="rose" />
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <NumInput
                  id="housing"
                  label="Housing"
                  sub="Rent/Mortgage"
                  value={housing}
                  onChange={setHousing}
                  prefix={symbol}
                  min="0"
                  step="50"
                />
                <NumInput
                  id="utilities"
                  label="Utilities"
                  sub="Water, Gas, Electric"
                  value={utilities}
                  onChange={setUtilities}
                  prefix={symbol}
                  min="0"
                  step="10"
                />
                <NumInput
                  id="food"
                  label="Food"
                  sub="Groceries & Dining"
                  value={food}
                  onChange={setFood}
                  prefix={symbol}
                  min="0"
                  step="50"
                />
                <NumInput
                  id="transportation"
                  label="Transportation"
                  sub="Gas, Transit, Car"
                  value={transportation}
                  onChange={setTransportation}
                  prefix={symbol}
                  min="0"
                  step="50"
                />
                <NumInput
                  id="entertainment"
                  label="Entertainment"
                  sub="Movies, Games, Fun"
                  value={entertainment}
                  onChange={setEntertainment}
                  prefix={symbol}
                  min="0"
                  step="20"
                />
                <NumInput
                  id="shopping"
                  label="Shopping"
                  sub="Clothes, Goods"
                  value={shopping}
                  onChange={setShopping}
                  prefix={symbol}
                  min="0"
                  step="20"
                />
                <NumInput
                  id="healthcare"
                  label="Healthcare"
                  sub="Medical, Insurance"
                  value={healthcare}
                  onChange={setHealthcare}
                  prefix={symbol}
                  min="0"
                  step="20"
                />
                <NumInput
                  id="other"
                  label="Other"
                  sub="Misc. Expenses"
                  value={other}
                  onChange={setOther}
                  prefix={symbol}
                  min="0"
                  step="20"
                />
              </div>
            </SectionCard>
          </div>

          {/* RIGHT — Results */}
          <div className="space-y-4">
            <div
              className={`rounded-2xl bg-gradient-to-br ${
                result.overBudget
                  ? "from-rose-600 via-rose-600 to-red-700 shadow-rose-200 dark:shadow-rose-950"
                  : "from-indigo-600 via-indigo-600 to-violet-700 shadow-indigo-200 dark:shadow-indigo-950"
              } p-5 text-white shadow-xl`}
            >
              <div
                className={`text-[10px] font-semibold uppercase tracking-[0.1em] mb-1 ${
                  result.overBudget ? "text-rose-200" : "text-indigo-200"
                }`}
              >
                Total Monthly Expenses
              </div>
              <div className="text-4xl font-bold tabular-nums tracking-tight mb-0.5">
                {fmt(result.total)}
              </div>
              <div
                className={`text-xs ${
                  result.overBudget ? "text-rose-200" : "text-indigo-200"
                }`}
              >
                across all categories
              </div>

              <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-2 gap-3">
                <div>
                  <div
                    className={`text-[9px] font-semibold uppercase tracking-[0.1em] mb-0.5 ${
                      result.overBudget ? "text-rose-200" : "text-indigo-200"
                    }`}
                  >
                    Monthly Income
                  </div>
                  <div className="text-lg font-bold tabular-nums">
                    {fmt(monthlyIncome)}
                  </div>
                </div>
                <div>
                  <div
                    className={`text-[9px] font-semibold uppercase tracking-[0.1em] mb-0.5 ${
                      result.overBudget ? "text-rose-200" : "text-indigo-200"
                    }`}
                  >
                    {result.overBudget ? "Deficit" : "Remaining"}
                  </div>
                  <div className="text-lg font-bold tabular-nums">
                    {result.overBudget ? "-" : ""}
                    {fmt(Math.abs(monthlyIncome - result.total))}
                  </div>
                </div>
              </div>
            </div>

            <SectionCard>
              <SectionHead icon="📈" title="Key Metrics" color="emerald" />
              <div className="p-5 space-y-3">
                <StatPill
                  label="Highest Expense"
                  value={fmt(result.highestExpense.val)}
                  sub={result.highestExpense.label}
                  accent
                />
                <StatPill
                  label="Leftover Budget"
                  value={fmt(result.leftOver)}
                  sub="after expenses"
                />
                <StatPill
                  label="Budget Status"
                  value={result.overBudget ? "Over Budget" : "Under Budget"}
                  sub={result.overBudget ? "Warning" : "Good Standing"}
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="📊" title="Expense Breakdown" color="indigo" />
              <div className="p-0">
                <PremiumDonut data={result.expenses} total={result.total} />
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-700/60 max-h-[300px] overflow-y-auto">
                {result.expenses
                  .filter((e) => e.val > 0)
                  .sort((a, b) => b.val - a.val)
                  .map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center px-5 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-slate-600 dark:text-slate-300 font-medium">
                          {item.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                          {((item.val / result.total) * 100).toFixed(1)}%
                        </span>
                        <span className="font-bold text-slate-800 dark:text-slate-100 tabular-nums min-w-[70px] text-right">
                          {symbol}
                          {fmt(item.val)}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </SectionCard>
          </div>
        </div>
      
        <CalculatorActions
          calculatorId="expense-tracker-calculator"
          calculatorName="Expense Tracker Calculator"
          inputData={{ monthlyIncome, housing, utilities, food, transportation, entertainment, shopping, healthcare, other }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}