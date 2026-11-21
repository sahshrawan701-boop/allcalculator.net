"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import CalculatorActions from "@/components/CalculatorActions";
import Link from "next/link";
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
          value={value}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            if (!isNaN(v)) onChange(v);
          }}
          className={`w-full h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 hover:border-slate-200 dark:hover:border-slate-600 ${prefix ? "pl-8" : "pl-3"} ${suffix ? "pr-10" : "pr-3"}`}
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
  | "teal";

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

interface StatPillProps {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}

function StatPill({ label, value, sub, accent = false }: StatPillProps) {
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

interface PremiumDonutProps {
  needs: number;
  wants: number;
  savings: number;
  income: number;
}

function PremiumDonut({ needs, wants, savings, income }: PremiumDonutProps) {
  const { fmt, fmtShort } = useCurrency();
  const totalAllocated = needs + wants + savings;
  // If income is 0, chart is empty
  if (income <= 0) return null;

  // Calculate raw percentages based on income (what 50/30/20 rule dictates)
  // For the chart, we want to show proportion of *income*, so if they spent 40% needs, 20% wants, 10% savings,
  // there is 30% "unallocated".
  const unallocated = Math.max(0, income - totalAllocated);
  const total = Math.max(income, totalAllocated); // If they overspent, chart scales to total spent

  const p1 = (needs / total) * 100;
  const p2 = (wants / total) * 100;
  const p3 = (savings / total) * 100;
  const p4 = (unallocated / total) * 100;

  const r = 54;
  const circ = 2 * Math.PI * r;
  const gap = 1.5;
  const d1 = (p1 / 100) * circ;
  const d2 = (p2 / 100) * circ;
  const d3 = (p3 / 100) * circ;
  const d4 = (p4 / 100) * circ;

  const off1 = 0;
  const off2 = -(d1 + (d1 > 0 ? gap * 1.5 : 0));
  const off3 = -(d1 + d2 + (d1 > 0 || d2 > 0 ? gap * 2.5 : 0));
  const off4 = -(d1 + d2 + d3 + (d1 > 0 || d2 > 0 || d3 > 0 ? gap * 3.5 : 0));

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-5">
      <div
        className="relative flex-shrink-0"
        style={{ width: 140, height: 140 }}
      >
        <svg viewBox="0 0 130 130" className="w-full h-full -rotate-90">
          <circle
            cx="65"
            cy="65"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="14"
            className="text-slate-100 dark:text-slate-800"
          />
          {p1 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#ef4444"
              strokeWidth="14"
              strokeDasharray={`${Math.max(0, d1 - gap)} ${circ}`}
              strokeDashoffset={off1}
            />
          )}
          {p2 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="14"
              strokeDasharray={`${Math.max(0, d2 - gap)} ${circ}`}
              strokeDashoffset={off2}
            />
          )}
          {p3 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#10b981"
              strokeWidth="14"
              strokeDasharray={`${Math.max(0, d3 - gap)} ${circ}`}
              strokeDashoffset={off3}
            />
          )}
          {p4 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#94a3b8"
              strokeWidth="14"
              strokeDasharray={`${Math.max(0, d4 - gap)} ${circ}`}
              strokeDashoffset={off4}
            />
          )}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Total Spent
          </span>
          <span className="text-base font-bold text-slate-800 dark:text-slate-100 tabular-nums">
            {fmtShort(totalAllocated)}
          </span>
        </div>
      </div>
      <div className="space-y-3 flex-1 min-w-0 w-full">
        {[
          {
            color: "bg-rose-500",
            label: "Needs",
            val: needs,
            pct: p1,
            target: 50,
          },
          {
            color: "bg-amber-500",
            label: "Wants",
            val: wants,
            pct: p2,
            target: 30,
          },
          {
            color: "bg-emerald-500",
            label: "Savings/Debt",
            val: savings,
            pct: p3,
            target: 20,
          },
        ]
          .filter((x) => x.pct > 0)
          .map(({ color, label, val, pct, target }) => (
            <div key={label}>
              <div className="flex justify-between text-xs mb-0.5">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${color}`}
                  />
                  <span className="text-slate-800 dark:text-slate-400 font-medium">
                    {label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] ${pct > target ? "text-rose-500 font-bold" : "text-slate-400"}`}
                  >
                    {pct.toFixed(0)}% (Target {target}%)
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                    {fmt(val, 0)}
                  </span>
                </div>
              </div>
              <div className="h-1 rounded-full bg-slate-50 dark:bg-slate-900 relative">
                <div
                  className={`h-full rounded-full ${color} transition-all duration-500`}
                  style={{ width: `${pct}%` }}
                />
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-slate-800 dark:bg-white z-10"
                  style={{ left: `${target}%` }}
                  title={`Target: ${target}%`}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function BudgetCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.income !== undefined) setIncome(data.income);
          if (data.housing !== undefined) setHousing(data.housing);
          if (data.utilities !== undefined) setUtilities(data.utilities);
          if (data.transportation !== undefined) setTransportation(data.transportation);
          if (data.groceries !== undefined) setGroceries(data.groceries);
          if (data.entertainment !== undefined) setEntertainment(data.entertainment);
          if (data.diningOut !== undefined) setDiningOut(data.diningOut);
          if (data.otherWants !== undefined) setOtherWants(data.otherWants);
          if (data.savings !== undefined) setSavings(data.savings);
          if (data.investments !== undefined) setInvestments(data.investments);
          if (data.debtPayoff !== undefined) setDebtPayoff(data.debtPayoff);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, symbol } = useCurrency();

  // Income
  const [income, setIncome] = useState(5000);

  // Needs
  const [housing, setHousing] = useState(1500);
  const [utilities, setUtilities] = useState(250);
  const [transportation, setTransportation] = useState(450);
  const [groceries, setGroceries] = useState(600);

  // Wants
  const [entertainment, setEntertainment] = useState(300);
  const [diningOut, setDiningOut] = useState(250);
  const [otherWants, setOtherWants] = useState(150);

  // Savings / Debt Payoff
  const [savings, setSavings] = useState(500);
  const [investments, setInvestments] = useState(250);
  const [debtPayoff, setDebtPayoff] = useState(200);

  const result = useMemo(() => {
    const totalNeeds = housing + utilities + transportation + groceries;
    const totalWants = entertainment + diningOut + otherWants;
    const totalSavings = savings + investments + debtPayoff;

    const totalExpenses = totalNeeds + totalWants + totalSavings;
    const remaining = income - totalExpenses;

    const needsPct = income > 0 ? (totalNeeds / income) * 100 : 0;
    const wantsPct = income > 0 ? (totalWants / income) * 100 : 0;
    const savingsPct = income > 0 ? (totalSavings / income) * 100 : 0;

    const isNeedsOver = needsPct > 50;
    const isWantsOver = wantsPct > 30;
    const isSavingsUnder = savingsPct < 20;

    return {
      totalNeeds,
      totalWants,
      totalSavings,
      totalExpenses,
      remaining,
      needsPct,
      wantsPct,
      savingsPct,
      isNeedsOver,
      isWantsOver,
      isSavingsUnder,
    };
  }, [
    income,
    housing,
    utilities,
    transportation,
    groceries,
    entertainment,
    diningOut,
    otherWants,
    savings,
    investments,
    debtPayoff,
  ]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top: 50/30/20 Dashboard */}
        <div className="mb-6 space-y-5">
          <SectionCard className="border-indigo-500/20 dark:border-indigo-400/20">
            <div className="bg-indigo-600 dark:bg-indigo-900/60 p-5 text-white flex flex-col sm:flex-row justify-between sm:items-end gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-200 mb-1">
                  Monthly After-Tax Income
                </div>
                <div className="text-4xl font-black tabular-nums tracking-tight">
                  {fmt(income)}
                </div>
              </div>
              <div className="w-full sm:w-1/3">
                <Slider
                  id="sl-income"
                  label="Adjust Income"
                  value={income}
                  onChange={setIncome}
                  min={0}
                  max={20000}
                  step={100}
                  format={(v) => fmt(v, 0)}
                />
              </div>
            </div>

            <PremiumDonut
              needs={result.totalNeeds}
              wants={result.totalWants}
              savings={result.totalSavings}
              income={income}
            />

            {/* Benchmark Feedback */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800 border-t border-slate-100 dark:border-slate-800">
              <div className="p-4 flex flex-col items-center text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-rose-500 dark:text-rose-400 mb-1">
                  Needs (Target 50%)
                </div>
                <div
                  className={`text-2xl font-bold ${result.isNeedsOver ? "text-rose-600" : "text-slate-800 dark:text-slate-100"}`}
                >
                  {result.needsPct.toFixed(1)}%
                </div>
                {result.isNeedsOver && (
                  <p className="text-[10px] text-rose-500 mt-1">
                    You are spending too much on necessities.
                  </p>
                )}
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-amber-500 dark:text-amber-400 mb-1">
                  Wants (Target 30%)
                </div>
                <div
                  className={`text-2xl font-bold ${result.isWantsOver ? "text-amber-600" : "text-slate-800 dark:text-slate-100"}`}
                >
                  {result.wantsPct.toFixed(1)}%
                </div>
                {result.isWantsOver && (
                  <p className="text-[10px] text-amber-600 mt-1">
                    Cut back on discretionary spending.
                  </p>
                )}
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-emerald-500 dark:text-emerald-400 mb-1">
                  Savings (Target 20%)
                </div>
                <div
                  className={`text-2xl font-bold ${result.isSavingsUnder ? "text-slate-400" : "text-emerald-600 dark:text-emerald-400"}`}
                >
                  {result.savingsPct.toFixed(1)}%
                </div>
                {result.isSavingsUnder && (
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                    Try to boost your savings rate.
                  </p>
                )}
              </div>
            </div>
          </SectionCard>

          {/* Over/Under Budget Status */}
          {result.remaining < 0 ? (
            <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-5 border border-rose-200 dark:border-rose-800 flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <h4 className="text-sm font-bold text-rose-800 dark:text-rose-200 mb-1">
                  Budget Deficit of {fmt(Math.abs(result.remaining))}
                </h4>
                <p className="text-xs text-rose-600 dark:text-rose-300 leading-relaxed">
                  You are spending more than you earn. This will lead to credit
                  card debt. You must reduce your "Wants" or "Needs" to balance
                  your budget.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-5 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
              <span className="text-xl">🎉</span>
              <div>
                <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-200 mb-1">
                  Budget Surplus of {fmt(result.remaining)}
                </h4>
                <p className="text-xs text-emerald-600 dark:text-emerald-300 leading-relaxed">
                  You have unallocated income left over! Consider assigning
                  these dollars to an extra Debt Payoff or Investment bucket to
                  maximize your wealth.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Needs */}
          <SectionCard>
            <SectionHead icon="🏠" title="Needs (50%)" color="rose" />
            <div className="p-5 space-y-4">
              <NumInput
                id="housing"
                label="Housing"
                sub="(Rent/Mortgage)"
                value={housing}
                onChange={setHousing}
                prefix={symbol}
                min="0"
              />
              <NumInput
                id="utilities"
                label="Utilities"
                sub="(Water/Electric/Internet)"
                value={utilities}
                onChange={setUtilities}
                prefix={symbol}
                min="0"
              />
              <NumInput
                id="transportation"
                label="Transportation"
                sub="(Gas/Transit/Insurance)"
                value={transportation}
                onChange={setTransportation}
                prefix={symbol}
                min="0"
              />
              <NumInput
                id="groceries"
                label="Groceries"
                value={groceries}
                onChange={setGroceries}
                prefix={symbol}
                min="0"
              />
            </div>
            <div className="bg-rose-50/50 dark:bg-rose-900/10 p-4 border-t border-rose-100 dark:border-rose-900/30 flex justify-between items-center">
              <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wide">
                Total Needs
              </span>
              <span className="text-lg font-bold text-rose-700 dark:text-rose-300 tabular-nums">
                {fmt(result.totalNeeds)}
              </span>
            </div>
          </SectionCard>

          {/* Wants */}
          <SectionCard>
            <SectionHead icon="🛍️" title="Wants (30%)" color="amber" />
            <div className="p-5 space-y-4">
              <NumInput
                id="entertainment"
                label="Entertainment"
                sub="(Subscriptions/Hobbies)"
                value={entertainment}
                onChange={setEntertainment}
                prefix={symbol}
                min="0"
              />
              <NumInput
                id="diningOut"
                label="Dining Out"
                value={diningOut}
                onChange={setDiningOut}
                prefix={symbol}
                min="0"
              />
              <NumInput
                id="otherWants"
                label="Other Discretionary"
                value={otherWants}
                onChange={setOtherWants}
                prefix={symbol}
                min="0"
              />
            </div>
            <div className="bg-amber-50/50 dark:bg-amber-900/10 p-4 border-t border-amber-100 dark:border-amber-900/30 flex justify-between items-center mt-auto">
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                Total Wants
              </span>
              <span className="text-lg font-bold text-amber-700 dark:text-amber-300 tabular-nums">
                {fmt(result.totalWants)}
              </span>
            </div>
          </SectionCard>

          {/* Savings */}
          <SectionCard>
            <SectionHead
              icon="🌱"
              title="Savings & Debt (20%)"
              color="emerald"
            />
            <div className="p-5 space-y-4">
              <NumInput
                id="savings"
                label="Savings Account"
                value={savings}
                onChange={setSavings}
                prefix={symbol}
                min="0"
              />
              <NumInput
                id="investments"
                label="Investments"
                sub="(401k/IRA/Stocks)"
                value={investments}
                onChange={setInvestments}
                prefix={symbol}
                min="0"
              />
              <NumInput
                id="debtPayoff"
                label="Extra Debt Payoff"
                sub="(Credit Cards/Student Loans)"
                value={debtPayoff}
                onChange={setDebtPayoff}
                prefix={symbol}
                min="0"
              />
            </div>
            <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-4 border-t border-emerald-100 dark:border-emerald-900/30 flex justify-between items-center mt-auto">
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                Total Savings
              </span>
              <span className="text-lg font-bold text-emerald-700 dark:text-emerald-300 tabular-nums">
                {fmt(result.totalSavings)}
              </span>
            </div>
          </SectionCard>
        </div>
      
        <CalculatorActions
          calculatorId="budget-calculator"
          calculatorName="Budget Calculator"
          inputData={{ income, housing, utilities, transportation, groceries, entertainment, diningOut, otherWants, savings, investments, debtPayoff }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}