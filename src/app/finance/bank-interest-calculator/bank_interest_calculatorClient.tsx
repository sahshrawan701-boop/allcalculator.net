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

type SectionHeadColor = "indigo" | "amber" | "emerald" | "violet" | "rose";

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
  principal: number;
  contributions: number;
  interest: number;
}

function PremiumDonut({
  principal,
  contributions,
  interest,
}: PremiumDonutProps) {
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
              stroke="#6366f1"
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
              stroke="#10b981"
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
              stroke="#f59e0b"
              strokeWidth="14"
              strokeDasharray={`${Math.max(0, d3 - gap)} ${circ}`}
              strokeDashoffset={off3}
            />
          )}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Total Balance
          </span>
          <span className="text-base font-bold text-slate-800 dark:text-slate-100 tabular-nums">
            {fmtShort(total)}
          </span>
        </div>
      </div>
      <div className="space-y-3 flex-1 min-w-0 w-full">
        {[
          {
            color: "bg-indigo-500",
            label: "Initial Deposit",
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
            color: "bg-amber-500",
            label: "Total Interest",
            val: interest,
            pct: p3,
          },
        ]
          .filter((x) => x.pct > 0)
          .map(({ color, label, val, pct }) => (
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

// ─── GROWTH TABLE ─────────────────────────────────────────────────────────────
interface GrowthRow {
  year: number;
  begBal: number;
  contributions: number;
  interest: number;
  endBal: number;
  cumInt: number;
}

function GrowthTable({ schedule }: { schedule: GrowthRow[] }) {
  const { fmt } = useCurrency();
  const [page, setPage] = useState(0);
  const PAGE = 10;
  const total = schedule.length;
  const rows = schedule.slice(page * PAGE, page * PAGE + PAGE);

  return (
    <div className="mt-6">
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              {[
                "Year",
                "Beginning Bal",
                "Contributions",
                "Interest",
                "Ending Bal",
                "Cum. Interest",
              ].map((h) => (
                <th
                  key={h}
                  className="py-3 px-4 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400 whitespace-nowrap text-right first:text-left"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {rows.map((r) => (
              <tr
                key={r.year}
                className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
              >
                <td className="py-3 px-4 text-xs font-semibold text-slate-600 dark:text-slate-300 text-left">
                  Year {r.year}
                </td>
                <td className="py-3 px-4 text-xs text-slate-700 dark:text-slate-200 tabular-nums text-right">
                  {fmt(r.begBal)}
                </td>
                <td className="py-3 px-4 text-xs text-emerald-600 dark:text-emerald-400 tabular-nums text-right">
                  {fmt(r.contributions)}
                </td>
                <td className="py-3 px-4 text-xs text-amber-600 dark:text-amber-400 tabular-nums text-right">
                  {fmt(r.interest)}
                </td>
                <td className="py-3 px-4 text-xs font-semibold text-indigo-600 dark:text-indigo-400 tabular-nums text-right">
                  {fmt(r.endBal)}
                </td>
                <td className="py-3 px-4 text-xs text-slate-500 dark:text-slate-400 tabular-nums text-right">
                  {fmt(r.cumInt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {total > PAGE && (
        <div className="flex justify-between items-center mt-4 px-2">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Showing {page * PAGE + 1}–{Math.min((page + 1) * PAGE, total)} of{" "}
            {total} years
          </span>
          <div className="flex gap-2">
            <button
              disabled={page === 0}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Prev
            </button>
            <button
              disabled={(page + 1) * PAGE >= total}
              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function BankInterestCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.principal !== undefined) setPrincipal(data.principal);
          if (data.interestRate !== undefined) setInterestRate(data.interestRate);
          if (data.compounding !== undefined) setCompounding(data.compounding);
          if (data.years !== undefined) setYears(data.years);
          if (data.monthlyContribution !== undefined) setMonthlyContribution(data.monthlyContribution);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, symbol } = useCurrency();
  const [principal, setPrincipal] = useState(10000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [compounding, setCompounding] = useState("monthly");
  const [years, setYears] = useState(10);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [activeTab, setActiveTab] = useState<"summary" | "growth">("summary");

  const result = useMemo(() => {
    const r = interestRate / 100;
    const n =
      compounding === "daily"
        ? 365
        : compounding === "monthly"
          ? 12
          : compounding === "quarterly"
            ? 4
            : 1;
    const t = years;

    // Effective monthly rate correctly derived from the nominal rate and compounding frequency
    const r_mo = Math.pow(1 + r / n, n / 12) - 1;

    let totalBalance = principal;
    let totalContributions = 0;

    // Calculate effective annual rate (APY)
    const effectiveRate = Math.pow(1 + r / n, n) - 1;

    const schedule: GrowthRow[] = [];
    let cumInt = 0;
    let currentBal = principal;

    for (let y = 1; y <= t; y++) {
      const begBal = currentBal;
      let yearlyContributions = 0;

      // Step through 12 months for accuracy on monthly end-of-period deposits
      for (let m = 1; m <= 12; m++) {
        const interest = currentBal * r_mo;
        currentBal = currentBal + interest + monthlyContribution;
        cumInt += interest;
        yearlyContributions += monthlyContribution;
      }

      totalContributions += yearlyContributions;

      schedule.push({
        year: y,
        begBal,
        contributions: yearlyContributions,
        interest: currentBal - begBal - yearlyContributions, // Interest earned in this specific year
        endBal: currentBal,
        cumInt,
      });
    }

    totalBalance = currentBal;
    const totalInterest = totalBalance - (principal + totalContributions);

    return {
      totalInterest,
      totalBalance,
      totalContributions,
      effectiveRate: effectiveRate * 100,
      schedule,
    };
  }, [principal, interestRate, compounding, years, monthlyContribution]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* ── LEFT: Inputs ── */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead
                icon="🏦"
                title="Bank Account Details"
                color="indigo"
              />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="principal"
                    label="Initial Deposit"
                    value={principal}
                    onChange={setPrincipal}
                    prefix={symbol}
                    min="0"
                  />
                  <NumInput
                    id="interestRate"
                    label="Interest Rate"
                    value={interestRate}
                    onChange={setInterestRate}
                    suffix="%"
                    min="0"
                    step="0.1"
                  />
                  <div>
                    <Label htmlFor="compounding">Compounding Frequency</Label>
                    <select
                      id="compounding"
                      value={compounding}
                      onChange={(e) => setCompounding(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
                    >
                      <option value="daily">Daily (Standard)</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="annually">Annually</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <Slider
                    id="sl-principal"
                    label="Initial Deposit"
                    value={principal}
                    onChange={setPrincipal}
                    min={0}
                    max={100000}
                    step={500}
                    format={(v) => fmt(v, 0)}
                  />
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="📈" title="Growth Plan" color="emerald" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="monthlyContribution"
                    label="Monthly Contribution"
                    value={monthlyContribution}
                    onChange={setMonthlyContribution}
                    prefix={symbol}
                    min="0"
                  />
                  <div>
                    <Label htmlFor="years">Time Period</Label>
                    <select
                      id="years"
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                    >
                      {[1, 2, 3, 5, 10, 15, 20, 30].map((y) => (
                        <option key={y} value={y}>
                          {y} Years
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <Slider
                    id="sl-monthly"
                    label="Monthly Contribution"
                    value={monthlyContribution}
                    onChange={setMonthlyContribution}
                    min={0}
                    max={5000}
                    step={50}
                    format={(v) => fmt(v, 0)}
                  />
                </div>
              </div>
            </SectionCard>
          </div>

          {/* ── RIGHT: Results ── */}
          <div className="space-y-5">
            <SectionCard className="border-indigo-500/20 dark:border-indigo-400/20">
              <div className="bg-indigo-600 dark:bg-indigo-900/60 p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-200 mb-1">
                  Total Balance
                </div>
                <div className="text-4xl font-black tabular-nums tracking-tight mb-4">
                  {fmt(result.totalBalance)}
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-indigo-500 dark:border-indigo-800/60">
                  <div>
                    <div className="text-[10px] text-indigo-200 uppercase font-semibold">
                      Total Deposits
                    </div>
                    <div className="font-bold tabular-nums text-emerald-300">
                      {fmt(principal + result.totalContributions)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-indigo-200 uppercase font-semibold">
                      Total Interest
                    </div>
                    <div className="font-bold tabular-nums text-amber-300">
                      {fmt(result.totalInterest)}
                    </div>
                  </div>
                </div>
              </div>
              <PremiumDonut
                principal={principal}
                contributions={result.totalContributions}
                interest={result.totalInterest}
              />
            </SectionCard>

            <div className="grid grid-cols-2 gap-3">
              <StatPill
                label="Effective APY"
                value={`${result.effectiveRate.toFixed(2)}%`}
                accent
              />
              <StatPill
                label="Total Interest"
                value={fmt(result.totalInterest, 0)}
              />
            </div>

            <footer className="px-5 py-4 bg-slate-50/60 dark:bg-slate-900/40 rounded-2xl border border-slate-200/60 dark:border-slate-800">
              <p className="text-[11px] text-slate-400 dark:text-slate-400 leading-relaxed">
                <strong className="text-slate-500 dark:text-slate-400 font-semibold">
                  Note:
                </strong>{" "}
                This calculator models monthly contributions as deposits made at
                the end of each month, matching US bank accounting standards.
              </p>
            </footer>
          </div>
        </div>

        {/* ── TABS FOR GROWTH SCHEDULE ── */}
        <div className="mt-8">
          <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab("summary")}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "summary"
                  ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Growth Summary
            </button>
            <button
              onClick={() => setActiveTab("growth")}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "growth"
                  ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Growth Schedule
            </button>
          </div>

          <div className="py-6">
            {activeTab === "summary" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SectionCard>
                  <SectionHead
                    icon="📊"
                    title="Account Summary"
                    color="indigo"
                  />
                  <div className="p-5">
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">
                          Initial Deposit
                        </span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {fmt(principal)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-emerald-600 dark:text-emerald-400">
                        <span>Total Monthly Contributions</span>
                        <span className="font-semibold">
                          {fmt(result.totalContributions)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-amber-600 dark:text-amber-400">
                        <span>Total Interest Earned</span>
                        <span className="font-semibold">
                          +{fmt(result.totalInterest)}
                        </span>
                      </div>
                      <div className="border-t border-slate-200 dark:border-slate-800 pt-3 flex justify-between text-sm font-bold text-slate-800 dark:text-slate-200">
                        <span>Final Balance (After {years} years)</span>
                        <span>{fmt(result.totalBalance)}</span>
                      </div>
                    </div>
                  </div>
                </SectionCard>

                <SectionCard>
                  <SectionHead
                    icon="📈"
                    title="The Power of Compounding"
                    color="amber"
                  />
                  <div className="p-5 space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      By saving{" "}
                      <span className="font-semibold">
                        {fmt(monthlyContribution)}
                      </span>{" "}
                      every month at{" "}
                      <span className="font-semibold">{interestRate}%</span>,
                      your money earns its own money.
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Over <span className="font-semibold">{years} years</span>,
                      you will contribute a total of{" "}
                      <span className="font-semibold">
                        {fmt(principal + result.totalContributions)}
                      </span>{" "}
                      out of pocket.
                    </p>
                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-100 dark:border-amber-900/30">
                      <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">
                        <strong>The Result:</strong> Your bank will pay you{" "}
                        {fmt(result.totalInterest)} in completely passive
                        income, thanks to compounding interest.
                      </p>
                    </div>
                  </div>
                </SectionCard>
              </div>
            )}
            {activeTab === "growth" && (
              <GrowthTable schedule={result.schedule} />
            )}
          </div>
        </div>
      
        <CalculatorActions
          calculatorId="bank-interest-calculator"
          calculatorName="Bank Interest Calculator"
          inputData={{ principal, interestRate, compounding, years, monthlyContribution }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}