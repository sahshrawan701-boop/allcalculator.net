"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import CalculatorActions from "@/components/CalculatorActions";

import { useCurrency } from '@/hooks/useCurrency';
// ─── math helpers ─────────────────────────────────────────────────────────────

function calcAPY(nominalRatePct: number, n: number): number {
  if (n <= 0 || nominalRatePct <= 0) return nominalRatePct;
  const r = nominalRatePct / 100;
  return (Math.pow(1 + r / n, n) - 1) * 100;
}

interface ScheduleRow {
  period: number;
  month: number;
  year: number;
  balance: number;
  totalContributed: number;
  totalInterest: number;
  interestThisPeriod: number;
}

function buildGrowthSchedule(
  principal: number,
  apyPct: number,
  years: number,
  monthlyContrib: number,
  n: number,
): ScheduleRow[] {
  const rows: ScheduleRow[] = [];
  const apy = apyPct / 100;
  // The effective monthly rate that perfectly matches the stated APY
  const rMo = Math.pow(1 + apy, 1 / 12) - 1;
  const totalMonths = Math.round(years * 12);
  let balance = principal;
  let totalContributed = principal;
  let totalInterest = 0;

  for (let m = 1; m <= totalMonths; m++) {
    const interestEarned = balance * rMo;
    balance = balance + interestEarned + monthlyContrib;
    totalContributed += monthlyContrib;
    totalInterest += interestEarned;

    rows.push({
      period: m,
      month: m,
      year: Math.ceil(m / 12),
      balance,
      totalContributed,
      totalInterest,
      interestThisPeriod: interestEarned,
    });
  }
  return rows;
}

function fmtPct(n: number, dp = 3): string {
  if (!isFinite(n) || isNaN(n)) return "0.000%";
  return n.toFixed(dp) + "%";
}

// ─── account type presets ─────────────────────────────────────────────────────

interface AccountType {
  key: string;
  label: string;
  icon: string;
  balance: number;
  apy: number;
  years: number;
  contrib: number;
  n: number;
  fixedRate: boolean;
}

const ACCOUNT_TYPES: AccountType[] = [
  {
    key: "hysa",
    label: "High-Yield Savings",
    icon: "💰",
    balance: 10000,
    apy: 4.75,
    years: 2,
    contrib: 200,
    n: 365,
    fixedRate: false,
  },
  {
    key: "cd",
    label: "Certificate (CD)",
    icon: "🏦",
    balance: 25000,
    apy: 5.25,
    years: 1,
    contrib: 0,
    n: 12,
    fixedRate: true,
  },
  {
    key: "money",
    label: "Money Market",
    icon: "📈",
    balance: 50000,
    apy: 4.5,
    years: 5,
    contrib: 500,
    n: 12,
    fixedRate: false,
  },
  {
    key: "retire",
    label: "Retirement Fund",
    icon: "🎯",
    balance: 25000,
    apy: 7.0,
    years: 25,
    contrib: 500,
    n: 12,
    fixedRate: false,
  },
  {
    key: "custom",
    label: "Custom",
    icon: "⚙️",
    balance: 5000,
    apy: 5.0,
    years: 3,
    contrib: 100,
    n: 365,
    fixedRate: false,
  },
];

interface CompoundOption {
  label: string;
  n: number;
}

const COMPOUND_OPTIONS: CompoundOption[] = [
  { label: "Daily", n: 365 },
  { label: "Monthly", n: 12 },
  { label: "Quarterly", n: 4 },
  { label: "Annually", n: 1 },
];

// ─── shared sub-components (same as APR calculator) ───────────────────────────

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

type SectionHeadColor = "indigo" | "amber" | "emerald" | "violet";

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

// ─── growth donut (mirrors APR donut) ─────────────────────────────────────────

interface GrowthDonutProps {
  principal: number;
  contributions: number;
  interest: number;
}

function GrowthDonut({ principal, contributions, interest }: GrowthDonutProps) {
  const { fmt, fmtShort } = useCurrency();
  const total = principal + contributions + interest;
  if (total <= 0) return null;
  const p1 = (principal / total) * 100;
  const p2 = (contributions / total) * 100;
  const p3 = (interest / total) * 100;

  const r = 54;
  const circ = 2 * Math.PI * r;
  const gap = 1.5;
  const d1 = (p1 / 100) * circ;
  const d2 = (p2 / 100) * circ;
  const d3 = (p3 / 100) * circ;
  const off1 = 0;
  const off2 = -(d1 + gap * 1.5);
  const off3 = -(d1 + d2 + gap * 2.5);

  return (
    <div className="flex items-center gap-5">
      <div
        className="relative flex-shrink-0"
        style={{ width: 130, height: 130 }}
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
              stroke="#6366f1"
              strokeWidth="14"
              strokeDasharray={`${d1 - gap} ${circ - d1 + gap}`}
              strokeDashoffset={off1}
            />
          )}
          {p2 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#10b981"
              strokeWidth="14"
              strokeDasharray={`${d2 - gap} ${circ - d2 + gap}`}
              strokeDashoffset={off2}
            />
          )}
          {p3 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="14"
              strokeDasharray={`${d3 - gap} ${circ - d3 + gap}`}
              strokeDashoffset={off3}
            />
          )}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Total
          </span>
          <span className="text-base font-bold text-slate-800 dark:text-slate-100 tabular-nums">
            {fmtShort(total)}
          </span>
        </div>
      </div>
      <div className="space-y-2 flex-1 min-w-0">
        {[
          {
            color: "bg-indigo-500",
            label: "Starting Balance",
            val: principal,
            pct: p1,
          },
          {
            color: "bg-emerald-500",
            label: "Contributions",
            val: contributions,
            pct: p2,
          },
          {
            color: "bg-amber-400",
            label: "Interest Earned",
            val: interest,
            pct: p3,
          },
        ].map(({ color, label, val, pct }) => (
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
              <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                {fmt(val, 0)}
              </span>
            </div>
            <div className="h-1 rounded-full bg-slate-50 dark:bg-slate-900">
              <div
                className={`h-full rounded-full ${color} transition-all duration-500`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── yearly growth bar chart ──────────────────────────────────────────────────

interface GrowthChartProps {
  schedule: ScheduleRow[];
  years: number;
}

function GrowthChart({ schedule }: GrowthChartProps) {
  const { fmtShort } = useCurrency();
  const yearly = useMemo(() => {
    const map: Record<
      number,
      { balance: number; contributed: number; interest: number }
    > = {};
    schedule.forEach((r) => {
      const yr = r.year;
      if (!map[yr]) map[yr] = { balance: 0, contributed: 0, interest: 0 };
      map[yr].balance = r.balance;
      map[yr].contributed = r.totalContributed;
      map[yr].interest = r.totalInterest;
    });
    return Object.entries(map)
      .map(([yr, d]) => ({ yr: Number(yr), ...d }))
      .filter((_, i, arr) => {
        // for long terms, sample every N years so chart doesn't get crushed
        if (arr.length <= 20) return true;
        const step = Math.ceil(arr.length / 20);
        return i % step === 0 || i === arr.length - 1;
      });
  }, [schedule]);

  if (yearly.length === 0) return null;
  const maxBal = Math.max(...yearly.map((y) => y.balance));

  return (
    <div>
      <div className="flex items-center gap-5 mb-4">
        {[
          { color: "bg-indigo-500", label: "Initial" },
          { color: "bg-emerald-500", label: "Contributions" },
          { color: "bg-amber-400", label: "Interest" },
        ].map(({ color, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
          >
            <span className={`w-3 h-2 rounded-sm ${color} inline-block`} />
            {label}
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1" style={{ height: 160 }}>
        {yearly.map(({ yr, balance, contributed, interest }) => {
          const hTotal = maxBal > 0 ? (balance / maxBal) * 140 : 0;
          // stacked: initial (indigo), contributions (emerald), interest (amber)
          // split proportionally within the bar height
          const hInterest = hTotal * (interest / balance);
          const hContrib =
            hTotal * ((contributed - yearly[0]?.contributed || 0) / balance);
          const hInitial = hTotal - hInterest - hContrib;
          return (
            <div
              key={yr}
              className="flex-1 flex flex-col items-center gap-px group relative"
            >
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center pointer-events-none z-10">
                <div className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 text-[9px] font-semibold px-1.5 py-1 rounded whitespace-nowrap">
                  Yr {yr}: {fmtShort(balance)}
                </div>
                <div className="w-1.5 h-1.5 bg-slate-800 dark:bg-slate-200 rotate-45 -mt-0.5" />
              </div>
              <div
                className="w-full flex flex-col-reverse"
                style={{ height: 140 }}
              >
                <div
                  className="w-full bg-indigo-500 rounded-b-sm"
                  style={{ height: Math.max(hInitial, 1) }}
                />
                <div
                  className="w-full bg-emerald-500"
                  style={{ height: Math.max(hContrib, 0) }}
                />
                <div
                  className="w-full bg-amber-400 rounded-t-sm"
                  style={{ height: Math.max(hInterest, 0) }}
                />
              </div>
              {(yr === 1 ||
                yr % 5 === 0 ||
                yr === yearly[yearly.length - 1].yr) && (
                <span className="text-[9px] text-slate-400 dark:text-slate-400 mt-1">
                  Y{yr}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── main export ──────────────────────────────────────────────────────────────

export default function APYCalculator() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.activeType !== undefined) setActiveType(data.activeType);
          if (data.balance !== undefined) setBalance(data.balance);
          if (data.apyInput !== undefined) setApyInput(data.apyInput);
          if (data.years !== undefined) setYears(data.years);
          if (data.contrib !== undefined) setContrib(data.contrib);
          if (data.compoundN !== undefined) setCompoundN(data.compoundN);
          if (data.showSchedule !== undefined) setShowSchedule(data.showSchedule);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [activeType, setActiveType] = useState("hysa");
  const [balance, setBalance] = useState(10000);
  const [apyInput, setApyInput] = useState(4.75);
  const [isAPY, setIsAPY] = useState(true); // toggle: entering APY or nominal rate
  const [years, setYears] = useState(2);
  const [contrib, setContrib] = useState(200);
  const [compoundN, setCompoundN] = useState(365); // periods/year
  const [showSchedule, setShowSchedule] = useState(false);
  const [scheduleTab, setScheduleTab] = useState("chart");

  const applyPreset = (key: string) => {
    const p = ACCOUNT_TYPES.find((t) => t.key === key);
    if (!p) return;
    setActiveType(key);
    setBalance(p.balance);
    setApyInput(p.apy);
    setYears(p.years);
    setContrib(p.contrib);
    setCompoundN(p.n);
    setIsAPY(true);
  };

  // Resolve effective APY
  const effectiveAPY = useMemo(() => {
    if (isAPY) return apyInput; // user entered APY directly
    return calcAPY(apyInput, compoundN);
  }, [apyInput, isAPY, compoundN]);

  // Calculate nominal rate from APY (used for display/debugging)
  const nominalRate = useMemo(() => {
    if (!isAPY) return apyInput;
    // back-solve nominal from APY: r = n × ((1+APY)^(1/n) - 1)
    const apy = apyInput / 100;
    return compoundN * (Math.pow(1 + apy, 1 / compoundN) - 1) * 100;
  }, [apyInput, isAPY, compoundN]);

  // Use nominalRate for display purposes (e.g., in tooltips or debug info)
  void nominalRate; // Suppress unused variable warning

  const totalYears = Math.max(0.25, years);
  const schedule = useMemo(
    () =>
      buildGrowthSchedule(
        balance,
        effectiveAPY,
        totalYears,
        contrib,
        compoundN,
      ),
    [balance, effectiveAPY, totalYears, contrib, compoundN],
  );
  const lastRow = schedule[schedule.length - 1];
  const endBalance = lastRow?.balance ?? balance;
  const totalInterest = lastRow?.totalInterest ?? 0;
  const totalContrib = lastRow ? lastRow.totalContributed - balance : 0;
  const totalDeposited = balance + totalContrib;

  const dailyEarning =
    (endBalance - balance - totalContrib) / (totalYears * 365);
  const compoundLabel =
    COMPOUND_OPTIONS.find((o) => o.n === compoundN)?.label ?? "Monthly";

  // Yearly summary rows (one row per calendar year, de-duplicated)
  const yearlyRows = useMemo(() => {
    const map: Record<number, ScheduleRow> = {};
    schedule.forEach((r) => {
      map[r.year] = r;
    });
    return Object.values(map);
  }, [schedule]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">


        {/* ── Account Type Tabs ── */}
        <div className="mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {ACCOUNT_TYPES.map((t) => (
              <button
                key={t.key}
                onClick={() => applyPreset(t.key)}
                aria-pressed={activeType === t.key}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  activeType === t.key
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/40"
                    : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600"
                }`}
              >
                <span>{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* ── LEFT: Inputs ── */}
          <div className="space-y-4">
            {/* Savings Details */}
            <SectionCard>
              <SectionHead icon="💰" title="Savings Details" color="indigo" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="balance"
                    label="Starting Balance"
                    value={balance}
                    onChange={setBalance}
                    prefix={symbol}
                    step="500"
                    min="0"
                    sub="initial deposit"
                  />
                  <NumInput
                    id="contrib"
                    label="Monthly Contribution"
                    value={contrib}
                    onChange={setContrib}
                    prefix={symbol}
                    step="50"
                    min="0"
                    sub="optional"
                  />
                  <NumInput
                    id="apy"
                    label={isAPY ? "APY" : "Nominal Rate"}
                    value={apyInput}
                    onChange={setApyInput}
                    suffix="%"
                    step="0.05"
                    min="0"
                    sub={
                      isAPY ? "annual percentage yield" : "before compounding"
                    }
                  />
                  <NumInput
                    id="years"
                    label="Time Period"
                    value={years}
                    onChange={setYears}
                    suffix="yrs"
                    step="0.5"
                    min="0.25"
                  />
                </div>

                {/* APY / Nominal Rate toggle */}
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">
                    Rate type:
                  </span>
                  <div className="flex rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 text-xs font-semibold">
                    <button
                      onClick={() => setIsAPY(true)}
                      className={`px-3 py-1.5 transition-colors ${isAPY ? "bg-indigo-600 text-white" : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700"}`}
                    >
                      APY
                    </button>
                    <button
                      onClick={() => setIsAPY(false)}
                      className={`px-3 py-1.5 transition-colors ${!isAPY ? "bg-indigo-600 text-white" : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700"}`}
                    >
                      Nominal Rate
                    </button>
                  </div>
                  {!isAPY && (
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                      → APY: {fmtPct(effectiveAPY, 3)}
                    </span>
                  )}
                </div>

                {/* Sliders */}
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <Slider
                    id="sl-balance"
                    label="Starting Balance"
                    value={Math.min(balance, 1000000)}
                    onChange={setBalance}
                    min={0}
                    max={
                      activeType === "retire"
                        ? 500000
                        : activeType === "money"
                          ? 500000
                          : 100000
                    }
                    step={500}
                    format={(v) => fmtShort(v)}
                  />
                  <Slider
                    id="sl-apy"
                    label={isAPY ? "APY" : "Nominal Rate"}
                    value={apyInput}
                    onChange={setApyInput}
                    min={0.1}
                    max={15}
                    step={0.05}
                    format={(v) => v.toFixed(2) + "%"}
                  />
                  <Slider
                    id="sl-years"
                    label="Time Period"
                    value={years}
                    onChange={setYears}
                    min={0.25}
                    max={40}
                    step={0.25}
                    format={(v) => v + " yr"}
                  />
                  <Slider
                    id="sl-contrib"
                    label="Monthly Contribution"
                    value={contrib}
                    onChange={setContrib}
                    min={0}
                    max={5000}
                    step={50}
                    format={(v) => fmtShort(v) + "/mo"}
                  />
                </div>
              </div>
            </SectionCard>

            {/* Compounding Settings */}
            <SectionCard>
              <SectionHead
                icon="🔁"
                title="Compounding Settings"
                color="amber"
              />
              <div className="p-5">
                <Label htmlFor="compound-select">Compounding Frequency</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1">
                  {COMPOUND_OPTIONS.map(({ label, n }) => (
                    <button
                      key={n}
                      onClick={() => setCompoundN(n)}
                      aria-pressed={compoundN === n}
                      className={`py-2.5 rounded-lg text-xs font-semibold border transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                        compoundN === n
                          ? "bg-amber-500 border-amber-500 text-white shadow-sm"
                          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 hover:border-amber-300 dark:hover:border-amber-600"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Compounding impact strip */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                    APY for {apyInput.toFixed(2)}% nominal rate across
                    frequencies
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {COMPOUND_OPTIONS.map(({ label, n: cn }) => {
                      const a = isAPY ? apyInput : calcAPY(apyInput, cn);
                      const isSelected = cn === compoundN;
                      return (
                        <div
                          key={cn}
                          className={`rounded-lg px-2.5 py-2 text-center text-xs border ${
                            isSelected
                              ? "border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20"
                              : "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40"
                          }`}
                        >
                          <div className="text-slate-500 dark:text-slate-400 text-[10px] mb-0.5">
                            {label}
                          </div>
                          <div
                            className={`font-bold tabular-nums ${isSelected ? "text-amber-700 dark:text-amber-400" : "text-slate-800 dark:text-slate-100"}`}
                          >
                            {fmtPct(a, 3)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* APY vs APR comparison mini-panel */}
            <SectionCard>
              <SectionHead icon="📊" title="Rate Breakdown" color="emerald" />
              <div className="p-5">
                <div className="grid grid-cols-3 gap-3">
                  <StatPill
                    label={isAPY ? "APY (entered)" : "Nominal Rate"}
                    value={fmtPct(apyInput, 2)}
                    sub={isAPY ? "with compounding" : "before compounding"}
                  />
                  <StatPill
                    label="Effective APY"
                    value={fmtPct(effectiveAPY, 3)}
                    sub={compoundLabel + " compound"}
                    accent
                  />
                  <StatPill
                    label="Daily Rate"
                    value={(effectiveAPY / 365).toFixed(4) + "%"}
                    sub="per calendar day"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs px-3 py-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40">
                  <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                    Est. daily earnings on {fmt(balance, 0)}
                  </span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-300 tabular-nums">
                    {fmt(dailyEarning < 0 ? 0 : dailyEarning, 2)}/day
                  </span>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* ── RIGHT: Results ── */}
          <div className="space-y-4">
            {/* Hero result card */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-5 text-white shadow-xl shadow-indigo-200 dark:shadow-indigo-950">
              <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-1">
                Ending Balance
              </div>
              <div className="text-4xl font-bold tabular-nums tracking-tight mb-0.5">
                {fmt(endBalance, 2)}
              </div>
              <div className="text-indigo-200 text-xs">
                after {totalYears} {totalYears === 1 ? "year" : "years"} ·{" "}
                {compoundLabel.toLowerCase()} compounding
              </div>

              <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                    Interest Earned
                  </div>
                  <div className="text-2xl font-bold tabular-nums">
                    {fmtShort(totalInterest)}
                  </div>
                  <div className="text-indigo-200 text-[10px]">
                    {totalDeposited > 0
                      ? ((totalInterest / totalDeposited) * 100).toFixed(1) +
                        "% of deposits"
                      : "—"}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                    Effective APY
                  </div>
                  <div className="text-2xl font-bold tabular-nums">
                    {fmtPct(effectiveAPY, 2)}
                  </div>
                  <div className="text-indigo-200 text-[10px]">
                    {compoundLabel} compounding
                  </div>
                </div>
              </div>
            </div>

            {/* Growth donut */}
            <SectionCard>
              <SectionHead icon="🥧" title="Balance Breakdown" color="indigo" />
              <div className="p-5">
                <GrowthDonut
                  principal={balance}
                  contributions={totalContrib}
                  interest={totalInterest}
                />
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Final Balance
                  </span>
                  <span className="text-base font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                    {fmt(endBalance, 0)}
                  </span>
                </div>
              </div>
            </SectionCard>

            {/* Key metrics */}
            <SectionCard>
              <SectionHead icon="📐" title="Savings Metrics" color="emerald" />
              <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {[
                  { label: "Starting Balance", value: fmt(balance, 0) },
                  { label: "Total Contributions", value: fmt(totalContrib, 0) },
                  { label: "Total Deposited", value: fmt(totalDeposited, 0) },
                  { label: "Interest Earned", value: fmt(totalInterest, 0) },
                  {
                    label: "Return on Deposits",
                    value:
                      totalDeposited > 0
                        ? ((totalInterest / totalDeposited) * 100).toFixed(2) +
                          "%"
                        : "—",
                  },
                  {
                    label: "Ending Balance",
                    value: fmt(endBalance, 0),
                    bold: true,
                  },
                ].map(({ label, value, bold }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center px-5 py-2.5 text-sm"
                  >
                    <span className="text-slate-500 dark:text-slate-400">
                      {label}
                    </span>
                    <span
                      className={
                        bold
                          ? "font-bold text-indigo-600 dark:text-indigo-400 tabular-nums"
                          : "font-semibold text-slate-800 dark:text-slate-100 tabular-nums"
                      }
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>

        {/* ── Growth Schedule ── */}
        <div className="mt-5">
          <button
            onClick={() => setShowSchedule((v) => !v)}
            aria-expanded={showSchedule}
            className="w-full flex items-center justify-between px-5 py-3.5 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800/80 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span className="flex items-center gap-2">
              <span className="text-indigo-500">◈</span>
              Growth Schedule
              <span className="text-xs font-normal text-slate-400">
                ({yearlyRows.length} year{yearlyRows.length !== 1 ? "s" : ""})
              </span>
            </span>
            <span
              className={`text-slate-400 text-xs transition-transform duration-200 ${showSchedule ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>

          {showSchedule && (
            <div className="mt-2 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-slate-100 dark:border-slate-800/60">
                {[
                  { key: "chart", label: "Growth Chart" },
                  { key: "yearly", label: "Yearly Summary" },
                  { key: "monthly", label: "Monthly Detail" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setScheduleTab(key)}
                    role="tab"
                    aria-selected={scheduleTab === key}
                    className={`flex-1 px-4 py-3 text-xs font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500 ${
                      scheduleTab === key
                        ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500 bg-indigo-50/60 dark:bg-indigo-900/15"
                        : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/40"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Growth Chart */}
              {scheduleTab === "chart" && (
                <div className="p-5">
                  <GrowthChart schedule={schedule} years={totalYears} />
                  <p className="mt-3 text-xs text-slate-400 dark:text-slate-400 italic">
                    Hover bars for annual balances. The amber band (interest)
                    grows faster each year as compounding accelerates.
                  </p>
                </div>
              )}

              {/* Yearly Summary */}
              {scheduleTab === "yearly" && (
                <div className="overflow-auto max-h-80">
                  <table className="w-full text-xs min-w-[520px]">
                    <thead className="sticky top-0 bg-slate-50 dark:bg-slate-900/70">
                      <tr>
                        {[
                          "Year",
                          "Balance",
                          "Deposited",
                          "Interest (YTD)",
                          "Return",
                        ].map((h, i) => (
                          <th
                            key={h}
                            className={`px-4 py-2.5 font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase text-[10px] ${i === 0 ? "text-left" : "text-right"}`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                      {yearlyRows.map((row, i) => {
                        const returnPct =
                          row.totalContributed > 0
                            ? (
                                (row.totalInterest / row.totalContributed) *
                                100
                              ).toFixed(2) + "%"
                            : "—";
                        return (
                          <tr
                            key={row.year}
                            className={
                              i % 2 === 1
                                ? "bg-slate-50/60 dark:bg-slate-900/20"
                                : ""
                            }
                          >
                            <td className="px-4 py-2 text-left font-semibold text-slate-800 dark:text-slate-100">
                              Year {row.year}
                            </td>
                            <td className="px-4 py-2 text-right font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
                              {fmt(row.balance, 0)}
                            </td>
                            <td className="px-4 py-2 text-right text-emerald-600 dark:text-emerald-400 tabular-nums">
                              {fmt(row.totalContributed, 0)}
                            </td>
                            <td className="px-4 py-2 text-right text-amber-600 dark:text-amber-400 tabular-nums">
                              {fmt(row.totalInterest, 0)}
                            </td>
                            <td className="px-4 py-2 text-right text-slate-500 dark:text-slate-400 tabular-nums">
                              {returnPct}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Monthly Detail */}
              {scheduleTab === "monthly" && (
                <div className="overflow-auto max-h-80">
                  <table className="w-full text-xs min-w-[520px]">
                    <thead className="sticky top-0 bg-slate-50 dark:bg-slate-900/70">
                      <tr>
                        {[
                          "Month",
                          "Balance",
                          "Interest (Period)",
                          "Total Interest",
                          "Total Deposited",
                        ].map((h, i) => (
                          <th
                            key={h}
                            className={`px-4 py-2.5 font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase text-[10px] ${i === 0 ? "text-left" : "text-right"}`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                      {schedule.map((row, i) => (
                          <tr
                            key={row.period}
                            className={
                              i % 2 === 1
                                ? "bg-slate-50/60 dark:bg-slate-900/20"
                                : ""
                            }
                          >
                            <td className="px-4 py-2 text-left text-slate-400">
                              Mo {row.month}
                            </td>
                            <td className="px-4 py-2 text-right font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
                              {fmt(row.balance, 2)}
                            </td>
                            <td className="px-4 py-2 text-right text-amber-600 dark:text-amber-400 tabular-nums">
                              {fmt(row.interestThisPeriod, 2)}
                            </td>
                            <td className="px-4 py-2 text-right text-amber-500 dark:text-amber-400 tabular-nums">
                              {fmt(row.totalInterest, 2)}
                            </td>
                            <td className="px-4 py-2 text-right text-emerald-600 dark:text-emerald-400 tabular-nums">
                              {fmt(row.totalContributed, 2)}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Disclaimer ── */}
        <footer className="mt-6 px-5 py-4 bg-slate-50/60 dark:bg-slate-900/40 rounded-2xl border border-slate-200/60 dark:border-slate-800">
          <p className="text-[11px] text-slate-400 dark:text-slate-400 leading-relaxed">
            <strong className="text-slate-500 dark:text-slate-400 font-semibold">
              Disclaimer:
            </strong>{" "}
            For educational purposes only. Not financial advice. Calculations are 
            modeled on standard US banking practices (Truth in Savings Act - TISA), 
            assuming end-of-month contributions. Variable-rate accounts
            (HYSAs, money markets) may adjust APY without notice. FDIC insurance
            covers up to $250,000 per depositor per bank. Consult a licensed
            financial professional before making savings decisions.
          </p>
        </footer>
      
        <CalculatorActions
          calculatorId="apy-calculator"
          calculatorName="A P Y Calculator"
          inputData={{ activeType, balance, apyInput, years, contrib, compoundN, showSchedule }}
          resultData={{}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}