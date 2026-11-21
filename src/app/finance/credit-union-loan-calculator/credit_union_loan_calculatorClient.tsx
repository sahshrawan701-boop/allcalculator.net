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

export default function CreditUnionLoanCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.loanAmount !== undefined) setLoanAmount(data.loanAmount);
          if (data.loanTerm !== undefined) setLoanTerm(data.loanTerm);
          if (data.cuRate !== undefined) setCuRate(data.cuRate);
          if (data.bankRate !== undefined) setBankRate(data.bankRate);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, symbol } = useCurrency();

  const [loanAmount, setLoanAmount] = useState(25000);
  const [loanTerm, setLoanTerm] = useState(60);

  const [cuRate, setCuRate] = useState(5.25);
  const [bankRate, setBankRate] = useState(7.5);

  const result = useMemo(() => {
    // CU calculations
    const rCU = cuRate / 100 / 12;
    const cuMonthly =
      rCU === 0
        ? loanAmount / loanTerm
        : (loanAmount * rCU * Math.pow(1 + rCU, loanTerm)) /
          (Math.pow(1 + rCU, loanTerm) - 1);
    const cuTotal = cuMonthly * loanTerm;
    const cuInterest = cuTotal - loanAmount;

    // Bank calculations
    const rBank = bankRate / 100 / 12;
    const bankMonthly =
      rBank === 0
        ? loanAmount / loanTerm
        : (loanAmount * rBank * Math.pow(1 + rBank, loanTerm)) /
          (Math.pow(1 + rBank, loanTerm) - 1);
    const bankTotal = bankMonthly * loanTerm;
    const bankInterest = bankTotal - loanAmount;

    return {
      cuMonthly,
      cuTotal,
      cuInterest,
      bankMonthly,
      bankTotal,
      bankInterest,
      monthlySavings: Math.max(0, bankMonthly - cuMonthly),
      totalSavings: Math.max(0, bankTotal - cuTotal),
    };
  }, [loanAmount, loanTerm, cuRate, bankRate]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top Dashboard */}
        <div className="mb-6">
          <SectionCard className="border-emerald-500/20 dark:border-emerald-400/20">
            <div className="bg-emerald-600 dark:bg-emerald-900/60 p-6 text-white text-center rounded-t-xl sm:flex sm:justify-between sm:items-center sm:text-left sm:px-8">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-1">
                  Total Savings vs Bank
                </div>
                <div className="text-4xl font-black tabular-nums tracking-tight">
                  {symbol}
                  {fmt(result.totalSavings)}
                </div>
              </div>
              <div className="mt-4 sm:mt-0 bg-emerald-700/50 dark:bg-emerald-800/50 rounded-xl p-4 min-w-[200px] text-center sm:text-right">
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-1">
                  Monthly Savings
                </div>
                <div className="text-2xl font-bold tabular-nums">
                  {symbol}
                  {fmt(result.monthlySavings)} / mo
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-indigo-500 dark:text-indigo-400 mb-1">
                  Credit Union Payment
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {symbol}
                  {fmt(result.cuMonthly)}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">per month</div>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                  Bank Payment
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {symbol}
                  {fmt(result.bankMonthly)}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">per month</div>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-indigo-500 dark:text-indigo-400 mb-1">
                  Credit Union Interest
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {symbol}
                  {fmt(result.cuInterest)}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">lifetime</div>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                  Bank Interest
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {symbol}
                  {fmt(result.bankInterest)}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">lifetime</div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Loan Details Input */}
          <SectionCard>
            <SectionHead icon="📝" title="Loan Details" color="indigo" />
            <div className="p-5 space-y-6">
              <NumInput
                id="loanAmount"
                label="Loan Amount"
                value={loanAmount}
                onChange={setLoanAmount}
                prefix={symbol}
                min="0"
                step="1000"
              />
              <Slider
                id="loanTerm"
                label="Loan Term (Months)"
                value={loanTerm}
                onChange={setLoanTerm}
                min={12}
                max={120}
                step={1}
                format={(v) => `${v} mo (${(v / 12).toFixed(1)} yrs)`}
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {[12, 24, 36, 48, 60, 72, 84].map((m) => (
                  <button
                    key={m}
                    onClick={() => setLoanTerm(m)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all ${
                      loanTerm === m
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

          {/* Rate Comparison Input */}
          <SectionCard>
            <SectionHead icon="⚖️" title="Compare Rates (APR)" color="amber" />
            <div className="p-5 space-y-6">
              <div className="p-4 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
                <Slider
                  id="cuRate"
                  label="Credit Union Rate"
                  value={cuRate}
                  onChange={setCuRate}
                  min={0}
                  max={25}
                  step={0.1}
                  format={(v) => `${v.toFixed(2)}%`}
                />
              </div>
              <div className="p-4 bg-slate-50/50 dark:bg-slate-900/20 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                <Slider
                  id="bankRate"
                  label="Bank Rate"
                  value={bankRate}
                  onChange={setBankRate}
                  min={0}
                  max={25}
                  step={0.1}
                  format={(v) => `${v.toFixed(2)}%`}
                />
              </div>

              <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-800/40 rounded-lg text-sm">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  Rate Difference
                </span>
                <span className="font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {Math.abs(bankRate - cuRate).toFixed(2)}%
                </span>
              </div>
            </div>
          </SectionCard>
        </div>
      
        <CalculatorActions
          calculatorId="credit-union-loan-calculator"
          calculatorName="Credit Union Loan Calculator"
          inputData={{ loanAmount, loanTerm, cuRate, bankRate }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}