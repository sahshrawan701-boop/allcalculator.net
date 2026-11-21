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
  | "blue";

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

interface PremiumDonutProps {
  data: { label: string; val: number; color: string }[];
  totalCashBack: number;
}

function PremiumDonut({ data, totalCashBack }: PremiumDonutProps) {
  const { fmt, fmtShort } = useCurrency();
  const activeData = data.filter((d) => d.val > 0);

  if (totalCashBack <= 0 || activeData.length === 0) return null;

  const r = 54;
  const circ = 2 * Math.PI * r;
  const gap = 1.5;

  let currentOffset = 0;
  const slices = activeData.map((d) => {
    const p = (d.val / totalCashBack) * 100;
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
            Monthly Cash
          </span>
          <span className="text-base font-bold text-slate-800 dark:text-slate-100 tabular-nums">
            {fmtShort(totalCashBack)}
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

export default function CashBackCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.groceries !== undefined) setGroceries(data.groceries);
          if (data.gas !== undefined) setGas(data.gas);
          if (data.dining !== undefined) setDining(data.dining);
          if (data.travel !== undefined) setTravel(data.travel);
          if (data.onlineShopping !== undefined) setOnlineShopping(data.onlineShopping);
          if (data.other !== undefined) setOther(data.other);
          if (data.groceriesRate !== undefined) setGroceriesRate(data.groceriesRate);
          if (data.gasRate !== undefined) setGasRate(data.gasRate);
          if (data.diningRate !== undefined) setDiningRate(data.diningRate);
          if (data.travelRate !== undefined) setTravelRate(data.travelRate);
          if (data.onlineRate !== undefined) setOnlineRate(data.onlineRate);
          if (data.otherRate !== undefined) setOtherRate(data.otherRate);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, symbol } = useCurrency();

  const [groceries, setGroceries] = useState(600);
  const [gas, setGas] = useState(250);
  const [dining, setDining] = useState(400);
  const [travel, setTravel] = useState(150);
  const [onlineShopping, setOnlineShopping] = useState(300);
  const [other, setOther] = useState(500);

  const [groceriesRate, setGroceriesRate] = useState(3);
  const [gasRate, setGasRate] = useState(2);
  const [diningRate, setDiningRate] = useState(4);
  const [travelRate, setTravelRate] = useState(5);
  const [onlineRate, setOnlineRate] = useState(1.5);
  const [otherRate, setOtherRate] = useState(1);

  const result = useMemo(() => {
    const spendingData = [
      {
        category: "Groceries",
        spending: groceries,
        rate: groceriesRate,
        color: "#ef4444",
        twColor: "bg-rose-500",
      }, // Rose
      {
        category: "Gas",
        spending: gas,
        rate: gasRate,
        color: "#f59e0b",
        twColor: "bg-amber-500",
      }, // Amber
      {
        category: "Dining",
        spending: dining,
        rate: diningRate,
        color: "#10b981",
        twColor: "bg-emerald-500",
      }, // Emerald
      {
        category: "Travel",
        spending: travel,
        rate: travelRate,
        color: "#3b82f6",
        twColor: "bg-blue-500",
      }, // Blue
      {
        category: "Online Shopping",
        spending: onlineShopping,
        rate: onlineRate,
        color: "#8b5cf6",
        twColor: "bg-violet-500",
      }, // Violet
      {
        category: "Other",
        spending: other,
        rate: otherRate,
        color: "#64748b",
        twColor: "bg-slate-500",
      }, // Slate
    ];

    const totalSpending = spendingData.reduce(
      (sum, item) => sum + item.spending,
      0,
    );
    const breakdown = spendingData.map((item) => ({
      category: item.category,
      spending: item.spending,
      rate: item.rate,
      color: item.color,
      twColor: item.twColor,
      cashBack: (item.spending * item.rate) / 100,
    }));
    const totalCashBack = breakdown.reduce(
      (sum, item) => sum + item.cashBack,
      0,
    );

    return {
      totalSpending,
      totalCashBack,
      breakdown,
    };
  }, [
    groceries,
    gas,
    dining,
    travel,
    onlineShopping,
    other,
    groceriesRate,
    gasRate,
    diningRate,
    travelRate,
    onlineRate,
    otherRate,
  ]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top Dashboard */}
        <div className="mb-6 space-y-5">
          <SectionCard className="border-indigo-500/20 dark:border-indigo-400/20">
            <div className="bg-indigo-600 dark:bg-indigo-900/60 p-5 text-white flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-200 mb-1">
                  Annual Cash Back Earned
                </div>
                <div className="text-4xl font-black tabular-nums tracking-tight">
                  {fmt(result.totalCashBack * 12)}
                </div>
              </div>
              <div className="bg-indigo-700/50 dark:bg-indigo-800/50 rounded-xl p-4 min-w-[200px]">
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-1">
                  Effective Reward Rate
                </div>
                <div className="text-2xl font-bold">
                  {result.totalSpending > 0
                    ? (
                        (result.totalCashBack / result.totalSpending) *
                        100
                      ).toFixed(2)
                    : "0.00"}
                  %
                </div>
              </div>
            </div>

            <PremiumDonut
              data={result.breakdown.map((b) => ({
                label: b.category,
                val: b.cashBack,
                color: b.color,
              }))}
              totalCashBack={result.totalCashBack}
            />

            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800 border-t border-slate-100 dark:border-slate-800">
              <div className="p-4 flex flex-col items-center text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                  Monthly Spend
                </div>
                <div className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  {fmt(result.totalSpending)}
                </div>
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-emerald-500 dark:text-emerald-400 mb-1">
                  Monthly Reward
                </div>
                <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  {fmt(result.totalCashBack)}
                </div>
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                  Annual Spend
                </div>
                <div className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  {fmt(result.totalSpending * 12)}
                </div>
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <div className="text-xs font-semibold uppercase tracking-wide text-emerald-500 dark:text-emerald-400 mb-1">
                  Annual Reward
                </div>
                <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  {fmt(result.totalCashBack * 12)}
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Monthly Spending */}
          <SectionCard>
            <SectionHead
              icon="🛒"
              title="Monthly Spending By Category"
              color="blue"
            />
            <div className="p-5 space-y-4">
              <NumInput
                id="groceries"
                label="Groceries"
                value={groceries}
                onChange={setGroceries}
                prefix={symbol}
                min="0"
              />
              <NumInput
                id="gas"
                label="Gas / EV Charging"
                value={gas}
                onChange={setGas}
                prefix={symbol}
                min="0"
              />
              <NumInput
                id="dining"
                label="Dining & Takeout"
                value={dining}
                onChange={setDining}
                prefix={symbol}
                min="0"
              />
              <NumInput
                id="travel"
                label="Travel & Transit"
                value={travel}
                onChange={setTravel}
                prefix={symbol}
                min="0"
              />
              <NumInput
                id="onlineShopping"
                label="Online Shopping"
                value={onlineShopping}
                onChange={setOnlineShopping}
                prefix={symbol}
                min="0"
              />
              <NumInput
                id="other"
                label="Other Spending"
                value={other}
                onChange={setOther}
                prefix={symbol}
                min="0"
              />
            </div>
          </SectionCard>

          {/* Cash Back Rates */}
          <SectionCard>
            <SectionHead
              icon="🌟"
              title="Card Rewards Rate (%)"
              color="amber"
            />
            <div className="p-5 space-y-4">
              <NumInput
                id="groceriesRate"
                label="Groceries Rate"
                value={groceriesRate}
                onChange={setGroceriesRate}
                suffix="%"
                min="0"
                max="100"
                step="0.5"
              />
              <NumInput
                id="gasRate"
                label="Gas Rate"
                value={gasRate}
                onChange={setGasRate}
                suffix="%"
                min="0"
                max="100"
                step="0.5"
              />
              <NumInput
                id="diningRate"
                label="Dining Rate"
                value={diningRate}
                onChange={setDiningRate}
                suffix="%"
                min="0"
                max="100"
                step="0.5"
              />
              <NumInput
                id="travelRate"
                label="Travel Rate"
                value={travelRate}
                onChange={setTravelRate}
                suffix="%"
                min="0"
                max="100"
                step="0.5"
              />
              <NumInput
                id="onlineRate"
                label="Online Rate"
                value={onlineRate}
                onChange={setOnlineRate}
                suffix="%"
                min="0"
                max="100"
                step="0.5"
              />
              <NumInput
                id="otherRate"
                label="Other Base Rate"
                value={otherRate}
                onChange={setOtherRate}
                suffix="%"
                min="0"
                max="100"
                step="0.5"
              />
            </div>
          </SectionCard>
        </div>
      
        <CalculatorActions
          calculatorId="cash-back-calculator"
          calculatorName="Cash Back Calculator"
          inputData={{ groceries, gas, dining, travel, onlineShopping, other, groceriesRate, gasRate, diningRate, travelRate, onlineRate, otherRate }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}