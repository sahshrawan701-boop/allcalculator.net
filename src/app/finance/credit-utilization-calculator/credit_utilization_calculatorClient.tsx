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
  id?: string;
  label?: string;
  sub?: string;
  value: number | "";
  onChange: (v: number | "") => void;
  prefix?: string;
  suffix?: string;
  min?: string;
  placeholder?: string;
}

function NumInput({
  id,
  label,
  sub,
  value,
  onChange,
  prefix,
  suffix,
  min = "0",
  placeholder,
}: NumInputProps) {
  const [local, setLocal] = useState(value === "" ? "" : String(value));
  return (
    <div>
      {label && (
        <Label htmlFor={id} sub={sub}>
          {label}
        </Label>
      )}
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
          value={local}
          placeholder={placeholder}
          onChange={(e) => {
            setLocal(e.target.value);
            if (e.target.value === "") {
              onChange("");
            } else {
              const v = parseFloat(e.target.value);
              if (!isNaN(v)) onChange(v);
            }
          }}
          onBlur={() => {
            if (local === "") {
              onChange("");
            } else {
              const v = parseFloat(local);
              if (!isNaN(v)) {
                onChange(v);
                setLocal(String(v));
              } else {
                setLocal(value === "" ? "" : String(value));
              }
            }
          }}
          className={`w-full h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 hover:border-slate-200 dark:hover:border-slate-600 ${
            prefix ? "pl-8" : "pl-3"
          } ${suffix ? "pr-10" : "pr-3"}`}
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

function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 placeholder-slate-300 dark:placeholder-slate-700 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 hover:border-slate-200 dark:hover:border-slate-600 pl-3 pr-3"
    />
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

interface StatPillProps {
  label: string;
  value: React.ReactNode;
  sub?: string;
  accent?: boolean;
}

function StatPill({ label, value, sub, accent }: StatPillProps) {
  return (
    <div
      className={`rounded-xl px-4 py-3 ${
        accent
          ? "bg-indigo-50 dark:bg-indigo-900/20"
          : "bg-slate-50 dark:bg-slate-900/40"
      }`}
    >
      <div className="text-[10px] font-semibold uppercase tracking-[0.09em] text-slate-500 dark:text-slate-400 mb-0.5">
        {label}
      </div>
      <div
        className={`text-lg font-bold tabular-nums ${
          accent
            ? "text-indigo-600 dark:text-indigo-400"
            : "text-slate-800 dark:text-slate-100"
        }`}
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
  const { fmt, fmtShort, symbol } = useCurrency();
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
    <div className="flex flex-col sm:flex-row items-center gap-8 p-6">
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
            Utilization
          </span>
          <span className="text-xl font-black text-slate-800 dark:text-slate-100 tabular-nums">
            {slices[0] && slices[0].label === "Balance"
              ? slices[0].p.toFixed(1)
              : "0.0"}
            %
          </span>
        </div>
      </div>

      <div className="flex-1 w-full space-y-4">
        {slices.map((slice, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: slice.color }}
                />
                {slice.label}
              </div>
              <div className="font-bold tabular-nums text-slate-800 dark:text-slate-100">
                {symbol}
                {fmt(slice.val)}{" "}
                <span className="text-slate-400 dark:text-slate-500 font-normal ml-1">
                  ({slice.p.toFixed(1)}%)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type UtilizationStatus = "Excellent" | "Good" | "Fair" | "Poor" | "Very Poor";

function getStatus(pct: number): UtilizationStatus {
  if (pct <= 10) return "Excellent";
  if (pct <= 30) return "Good";
  if (pct <= 50) return "Fair";
  if (pct <= 75) return "Poor";
  return "Very Poor";
}

function getStatusColors(status: UtilizationStatus): {
  bg: string;
  text: string;
  border: string;
} {
  switch (status) {
    case "Excellent":
      return {
        bg: "bg-emerald-50 dark:bg-emerald-900/20",
        text: "text-emerald-700 dark:text-emerald-400",
        border: "border-emerald-200 dark:border-emerald-800/50",
      };
    case "Good":
      return {
        bg: "bg-lime-50 dark:bg-lime-900/20",
        text: "text-lime-700 dark:text-lime-400",
        border: "border-lime-200 dark:border-lime-800/50",
      };
    case "Fair":
      return {
        bg: "bg-amber-50 dark:bg-amber-900/20",
        text: "text-amber-700 dark:text-amber-400",
        border: "border-amber-200 dark:border-amber-800/50",
      };
    case "Poor":
      return {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        text: "text-orange-700 dark:text-orange-400",
        border: "border-orange-200 dark:border-orange-800/50",
      };
    case "Very Poor":
      return {
        bg: "bg-rose-50 dark:bg-rose-900/20",
        text: "text-rose-700 dark:text-rose-400",
        border: "border-rose-200 dark:border-rose-800/50",
      };
  }
}

function getRecommendation(pct: number): string {
  if (pct <= 10)
    return "Outstanding! Your utilization is in the optimal range. This has a very positive impact on your credit score.";
  if (pct <= 30)
    return "Great work! You're in the healthy range lenders and bureaus like to see. Keep balances here or lower.";
  if (pct <= 50)
    return "Your utilization is moderate. Paying down balances toward 30% will meaningfully lift your credit score.";
  if (pct <= 75)
    return "Your utilization is high and likely hurting your credit score. Focus on paying down the highest-utilization cards first.";
  return "Critical: very high utilization significantly damages your credit score. Pay down balances as soon as possible.";
}

interface CardEntry {
  id: string;
  name: string;
  limit: number | "";
  balance: number | "";
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function CreditUtilizationCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.cards !== undefined) setCards(data.cards);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, symbol } = useCurrency();

  const [cards, setCards] = useState<CardEntry[]>([
    { id: "1", name: "Card 1", limit: 10000, balance: 3000 },
    { id: "2", name: "Card 2", limit: 5000, balance: 1500 },
  ]);

  const addCard = () => {
    setCards((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: `Card ${prev.length + 1}`,
        limit: 0,
        balance: 0,
      },
    ]);
  };

  const removeCard = (id: string) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  const updateCard = (id: string, field: keyof CardEntry, value: any) => {
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    );
  };

  const result = useMemo(() => {
    let totalLimit = 0;
    let totalBalance = 0;
    const activeCards = cards.map((c) => ({
      ...c,
      safeLimit: c.limit === "" ? 0 : c.limit,
      safeBalance: c.balance === "" ? 0 : c.balance,
    }));

    activeCards.forEach((c) => {
      totalLimit += c.safeLimit;
      totalBalance += c.safeBalance;
    });

    const totalAvailable = Math.max(0, totalLimit - totalBalance);
    const overallPct = totalLimit > 0 ? (totalBalance / totalLimit) * 100 : 0;
    const status = getStatus(overallPct);

    const toReachGood = Math.max(0, totalBalance - totalLimit * 0.3);
    const toReachExcellent = Math.max(0, totalBalance - totalLimit * 0.1);

    return {
      totalLimit,
      totalBalance,
      totalAvailable,
      overallPct,
      status,
      recommendation: getRecommendation(overallPct),
      toReachGood,
      toReachExcellent,
      activeCards,
    };
  }, [cards]);

  const statusColors = getStatusColors(result.status);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top Dashboard */}
        <div className="mb-6 space-y-5">
          <SectionCard className={`border ${statusColors.border}`}>
            <div
              className={`p-6 sm:flex sm:justify-between sm:items-center sm:px-8 border-b ${statusColors.border} ${statusColors.bg}`}
            >
              <div>
                <div
                  className={`text-xs font-semibold uppercase tracking-wider mb-1 ${statusColors.text}`}
                >
                  Overall Credit Utilization
                </div>
                <div
                  className={`text-4xl font-black tabular-nums tracking-tight ${statusColors.text}`}
                >
                  {result.overallPct.toFixed(1)}%
                </div>
              </div>
              <div className="mt-4 sm:mt-0 text-center sm:text-right">
                <div
                  className={`text-xs font-semibold uppercase tracking-wider mb-1 ${statusColors.text} opacity-80`}
                >
                  Status
                </div>
                <div
                  className={`text-2xl font-bold uppercase tracking-widest ${statusColors.text}`}
                >
                  {result.status}
                </div>
              </div>
            </div>

            <PremiumDonut
              data={[
                {
                  label: "Balance",
                  val: result.totalBalance,
                  color: "#f43f5e",
                }, // Rose
                {
                  label: "Available",
                  val: result.totalAvailable,
                  color: "#10b981",
                }, // Emerald
              ]}
              total={result.totalLimit}
            />

            <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-800/60 border-t border-slate-100 dark:border-slate-800/60">
              <div className="p-4 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                  Total Limit
                </div>
                <div className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  {symbol}
                  {fmt(result.totalLimit)}
                </div>
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-rose-500 dark:text-rose-400 mb-1">
                  Total Balance
                </div>
                <div className="text-lg font-bold text-rose-600 dark:text-rose-400">
                  {symbol}
                  {fmt(result.totalBalance)}
                </div>
              </div>
              <div className="p-4 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-emerald-500 dark:text-emerald-400 mb-1">
                  Total Available
                </div>
                <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  {symbol}
                  {fmt(result.totalAvailable)}
                </div>
              </div>
            </div>
          </SectionCard>

          {/* Advice & Paydown Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SectionCard className={`border ${statusColors.border}`}>
              <SectionHead
                icon="💡"
                title="Analysis & Recommendation"
                color="indigo"
              />
              <div className="p-5">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {result.recommendation}
                </p>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="🎯" title="Paydown Targets" color="emerald" />
              <div className="p-5 grid grid-cols-2 gap-4">
                <StatPill
                  label="To reach Good (<30%)"
                  value={
                    result.toReachGood > 0
                      ? `${symbol}${fmt(result.toReachGood)}`
                      : "Already Achieved!"
                  }
                  sub={result.toReachGood > 0 ? "Amount to pay off" : ""}
                />
                <StatPill
                  label="To reach Excellent (<10%)"
                  value={
                    result.toReachExcellent > 0
                      ? `${symbol}${fmt(result.toReachExcellent)}`
                      : "Already Achieved!"
                  }
                  sub={result.toReachExcellent > 0 ? "Amount to pay off" : ""}
                  accent
                />
              </div>
            </SectionCard>
          </div>
        </div>

        {/* Card Inputs */}
        <div className="mb-6">
          <SectionCard>
            <SectionHead icon="💳" title="Your Credit Cards" color="blue" />
            <div className="p-5 space-y-4">
              {/* Desktop Headers */}
              <div className="hidden sm:grid grid-cols-12 gap-4 px-2">
                <div className="col-span-4 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                  Card Name
                </div>
                <div className="col-span-3 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                  Credit Limit
                </div>
                <div className="col-span-3 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                  Current Balance
                </div>
                <div className="col-span-2"></div>
              </div>

              <div className="space-y-4">
                {cards.map((c, i) => (
                  <div
                    key={c.id}
                    className="bg-slate-50 dark:bg-slate-900/40 p-4 sm:p-2 rounded-xl sm:rounded-none sm:bg-transparent border border-slate-200 dark:border-slate-800 sm:border-none flex flex-col sm:grid sm:grid-cols-12 gap-4 relative group"
                  >
                    <div className="col-span-4">
                      <div className="sm:hidden text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                        Card Name
                      </div>
                      <TextInput
                        placeholder={`Card ${i + 1}`}
                        value={c.name}
                        onChange={(v) => updateCard(c.id, "name", v)}
                      />
                    </div>
                    <div className="col-span-3">
                      <div className="sm:hidden text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                        Credit Limit
                      </div>
                      <NumInput
                        value={c.limit}
                        onChange={(v) => updateCard(c.id, "limit", v)}
                        prefix={symbol}
                        placeholder="0"
                      />
                    </div>
                    <div className="col-span-3">
                      <div className="sm:hidden text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                        Current Balance
                      </div>
                      <NumInput
                        value={c.balance}
                        onChange={(v) => updateCard(c.id, "balance", v)}
                        prefix={symbol}
                        placeholder="0"
                      />
                    </div>
                    <div className="col-span-2 flex items-center justify-end sm:justify-start">
                      {cards.length > 1 && (
                        <button
                          onClick={() => removeCard(c.id)}
                          className="w-10 h-10 flex items-center justify-center rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
                          title="Remove Card"
                        >
                          <i className="fas fa-trash-alt" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={addCard}
                className="mt-4 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-semibold text-sm rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors flex items-center gap-2"
              >
                <i className="fas fa-plus" /> Add Another Card
              </button>
            </div>
          </SectionCard>
        </div>

        {/* Utilization Reference Table */}
        <SectionCard>
          <SectionHead icon="ℹ️" title="Utilization Reference" color="slate" />
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-4 font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                    Range
                  </th>
                  <th className="p-4 font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                    Status
                  </th>
                  <th className="p-4 font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                    Impact on Score
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 text-slate-700 dark:text-slate-300">
                <tr
                  className={
                    result.status === "Excellent"
                      ? "bg-emerald-50/50 dark:bg-emerald-900/10"
                      : ""
                  }
                >
                  <td className="p-4 font-mono font-medium">0% – 10%</td>
                  <td className="p-4">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      Excellent
                    </span>
                  </td>
                  <td className="p-4">Very positive</td>
                </tr>
                <tr
                  className={
                    result.status === "Good"
                      ? "bg-lime-50/50 dark:bg-lime-900/10"
                      : ""
                  }
                >
                  <td className="p-4 font-mono font-medium">11% – 30%</td>
                  <td className="p-4">
                    <span className="text-lime-600 dark:text-lime-400 font-bold">
                      Good
                    </span>
                  </td>
                  <td className="p-4">Positive</td>
                </tr>
                <tr
                  className={
                    result.status === "Fair"
                      ? "bg-amber-50/50 dark:bg-amber-900/10"
                      : ""
                  }
                >
                  <td className="p-4 font-mono font-medium">31% – 50%</td>
                  <td className="p-4">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">
                      Fair
                    </span>
                  </td>
                  <td className="p-4">Slightly negative</td>
                </tr>
                <tr
                  className={
                    result.status === "Poor"
                      ? "bg-orange-50/50 dark:bg-orange-900/10"
                      : ""
                  }
                >
                  <td className="p-4 font-mono font-medium">51% – 75%</td>
                  <td className="p-4">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">
                      Poor
                    </span>
                  </td>
                  <td className="p-4">Negative</td>
                </tr>
                <tr
                  className={
                    result.status === "Very Poor"
                      ? "bg-rose-50/50 dark:bg-rose-900/10"
                      : ""
                  }
                >
                  <td className="p-4 font-mono font-medium">76% – 100%</td>
                  <td className="p-4">
                    <span className="text-rose-600 dark:text-rose-400 font-bold">
                      Very Poor
                    </span>
                  </td>
                  <td className="p-4">Very negative</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionCard>
      
        <CalculatorActions
          calculatorId="credit-utilization-calculator"
          calculatorName="Credit Utilization Calculator"
          inputData={{ cards }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}