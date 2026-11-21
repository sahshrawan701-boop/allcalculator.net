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
  | "rose";

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
  data: { label: string; val: number; color: string }[];
  total: number;
}

function PremiumDonut({ data, total }: PremiumDonutProps) {
  const { fmt, fmtShort } = useCurrency();
  const activeData = data.filter((d) => d.val > 0);

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
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Total Paid
          </span>
          <span className="text-base font-bold text-slate-800 dark:text-slate-100 tabular-nums">
            {fmtShort(total)}
          </span>
        </div>
      </div>
      <div className="space-y-3 flex-1 min-w-0 w-full">
        {slices.map((slice) => (
          <div key={slice.label}>
            <div className="flex justify-between text-xs mb-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-800 dark:text-slate-400 font-medium">
                  {slice.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-400">
                  {slice.p.toFixed(0)}%
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                  {fmt(slice.val, 2)}
                </span>
              </div>
            </div>
            <div className="h-1 rounded-full bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 absolute top-0 left-0"
                style={{ width: `${slice.p}%`, backgroundColor: slice.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function CreditCardPayoffCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.balance !== undefined) setBalance(data.balance);
          if (data.interestRate !== undefined) setInterestRate(data.interestRate);
          if (data.mode !== undefined) setMode(data.mode);
          if (data.monthlyPayment !== undefined) setMonthlyPayment(data.monthlyPayment);
          if (data.targetMonths !== undefined) setTargetMonths(data.targetMonths);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, symbol } = useCurrency();

  const [balance, setBalance] = useState(5000);
  const [interestRate, setInterestRate] = useState(19.9);

  // Two modes: "fixed-payment" or "fixed-time"
  const [mode, setMode] = useState<"fixed-payment" | "fixed-time">(
    "fixed-payment",
  );
  const [monthlyPayment, setMonthlyPayment] = useState(250);
  const [targetMonths, setTargetMonths] = useState(24);

  const result = useMemo(() => {
    const r = interestRate / 100 / 12; // monthly rate
    let calculatedPayment = 0;
    let calculatedMonths = 0;
    let totalInterest = 0;

    const minPaymentAllowed = balance * r; // If payment is less than interest, debt grows forever.

    if (mode === "fixed-payment") {
      calculatedPayment = monthlyPayment;

      if (monthlyPayment <= minPaymentAllowed) {
        // Debt will never be paid off
        return { isInfinite: true, minPaymentAllowed };
      }

      // Calculate months using formula: n = -log(1 - (B * r) / P) / log(1 + r)
      const n =
        -Math.log(1 - (balance * r) / calculatedPayment) / Math.log(1 + r);
      calculatedMonths = Math.ceil(n);

      // Calculate actual total interest using an amortization loop to be perfectly exact
      let remaining = balance;
      for (let i = 0; i < calculatedMonths; i++) {
        const int = remaining * r;
        totalInterest += int;
        const principal =
          i === calculatedMonths - 1 ? remaining : calculatedPayment - int;
        remaining -= principal;
      }
    } else {
      calculatedMonths = targetMonths;

      // Calculate required payment using PMT formula: P = B * (r * (1+r)^n) / ((1+r)^n - 1)
      if (r === 0) {
        calculatedPayment = balance / targetMonths;
      } else {
        const factor = Math.pow(1 + r, targetMonths);
        calculatedPayment = (balance * (r * factor)) / (factor - 1);
      }

      let remaining = balance;
      for (let i = 0; i < calculatedMonths; i++) {
        const int = remaining * r;
        totalInterest += int;
        const principal =
          i === calculatedMonths - 1 ? remaining : calculatedPayment - int;
        remaining -= principal;
      }
    }

    const totalPaid = balance + totalInterest;

    return {
      isInfinite: false,
      monthlyPayment: calculatedPayment,
      months: calculatedMonths,
      years: calculatedMonths / 12,
      totalInterest,
      totalPaid,
    };
  }, [balance, interestRate, mode, monthlyPayment, targetMonths]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top Dashboard */}
        <div className="mb-6 space-y-5">
          <SectionCard className="border-rose-500/20 dark:border-rose-400/20">
            {result.isInfinite ? (
              <div className="bg-rose-600 dark:bg-rose-900/60 p-6 text-white text-center rounded-xl">
                <i className="fas fa-exclamation-triangle text-3xl mb-3" />
                <h2 className="text-xl font-bold mb-2">
                  Warning: Infinite Debt Trap
                </h2>
                <p className="text-rose-100 max-w-lg mx-auto">
                  Your monthly payment of {symbol}
                  {fmt(monthlyPayment)} is less than or equal to the monthly
                  interest charge of {symbol}
                  {fmt(result.minPaymentAllowed!)}. You will never pay off this
                  credit card.
                </p>
              </div>
            ) : (
              <>
                <div className="bg-rose-600 dark:bg-rose-900/60 p-5 text-white flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-rose-200 mb-1">
                      {mode === "fixed-payment"
                        ? "Time to Payoff"
                        : "Required Monthly Payment"}
                    </div>
                    <div className="text-4xl font-black tabular-nums tracking-tight">
                      {mode === "fixed-payment"
                        ? `${result.months} Months`
                        : `${symbol}${fmt(result.monthlyPayment!)}`}
                    </div>
                  </div>
                  <div className="bg-rose-700/50 dark:bg-rose-800/50 rounded-xl p-4 min-w-[200px]">
                    <div className="text-xs font-semibold uppercase tracking-wider text-rose-300 mb-1">
                      Total Interest Paid
                    </div>
                    <div className="text-2xl font-bold">
                      {symbol}
                      {fmt(result.totalInterest!)}
                    </div>
                  </div>
                </div>

                <PremiumDonut
                  data={[
                    {
                      label: "Principal (Balance)",
                      val: balance,
                      color: "#3b82f6",
                    }, // Blue
                    {
                      label: "Interest Charges",
                      val: result.totalInterest!,
                      color: "#ef4444",
                    }, // Rose
                  ]}
                  total={result.totalPaid!}
                />

                <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-4 flex flex-col items-center text-center">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                      Total Paid
                    </div>
                    <div className="text-lg font-bold text-slate-800 dark:text-slate-100">
                      {fmt(result.totalPaid!)}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col items-center text-center">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                      Years to Payoff
                    </div>
                    <div className="text-lg font-bold text-slate-800 dark:text-slate-100">
                      {fmt(result.years!, 1)} yrs
                    </div>
                  </div>
                  <div className="p-4 flex flex-col items-center text-center">
                    <div className="text-xs font-semibold uppercase tracking-wide text-rose-500 dark:text-rose-400 mb-1">
                      Monthly Payment
                    </div>
                    <div className="text-lg font-bold text-rose-600 dark:text-rose-400">
                      {fmt(result.monthlyPayment!)}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col items-center text-center">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                      Original Balance
                    </div>
                    <div className="text-lg font-bold text-slate-800 dark:text-slate-100">
                      {fmt(balance)}
                    </div>
                  </div>
                </div>
              </>
            )}
          </SectionCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Card Details */}
          <SectionCard>
            <SectionHead icon="💳" title="Credit Card Details" color="indigo" />
            <div className="p-5 space-y-6">
              <NumInput
                id="balance"
                label="Current Balance"
                value={balance}
                onChange={setBalance}
                prefix={symbol}
                min="0"
              />
              <Slider
                id="interestRate"
                label="Interest Rate (APR)"
                value={interestRate}
                onChange={setInterestRate}
                min={0}
                max={39.99}
                step={0.1}
                format={(v) => `${v.toFixed(1)}%`}
              />
            </div>
          </SectionCard>

          {/* Payment Strategy */}
          <SectionCard>
            <SectionHead icon="🎯" title="Payment Strategy" color="emerald" />
            <div className="p-5 space-y-6">
              <div>
                <Label>What is your goal?</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <button
                    onClick={() => setMode("fixed-payment")}
                    className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                      mode === "fixed-payment"
                        ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    I have a fixed monthly budget
                  </button>
                  <button
                    onClick={() => setMode("fixed-time")}
                    className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                      mode === "fixed-time"
                        ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    I want to be debt-free by a certain time
                  </button>
                </div>
              </div>

              {mode === "fixed-payment" ? (
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
                  <NumInput
                    id="monthlyPayment"
                    label="Monthly Payment Budget"
                    value={monthlyPayment}
                    onChange={setMonthlyPayment}
                    prefix={symbol}
                    min="1"
                    sub="Amount you can afford to pay each month"
                  />
                </div>
              ) : (
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
                  <Slider
                    id="targetMonths"
                    label="Target Payoff Time (Months)"
                    value={targetMonths}
                    onChange={setTargetMonths}
                    min={1}
                    max={120}
                    step={1}
                    format={(v) => `${v} months (${(v / 12).toFixed(1)} yrs)`}
                  />
                </div>
              )}
            </div>
          </SectionCard>
        </div>
      
        <CalculatorActions
          calculatorId="credit-card-payoff-calculator"
          calculatorName="Credit Card Payoff Calculator"
          inputData={{ balance, interestRate, mode, monthlyPayment, targetMonths }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}