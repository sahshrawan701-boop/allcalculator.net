"use client";

import { useState, useMemo } from "react";

import { useCurrency } from '@/hooks/useCurrency';
// ─── math helpers ─────────────────────────────────────────────────────────────

// ─── sub-components ───────────────────────────────────────────────────────────

function Label({ children, htmlFor, sub }: { children: React.ReactNode; htmlFor?: string; sub?: string }) {
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
}: {
  id: string;
  label: string;
  sub?: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
  min?: string;
}) {
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

function SectionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHead({ icon, title, color = "indigo" }: { icon: string; title: string; color?: "indigo" | "amber" | "emerald" }) {
  const colors = {
    indigo:
      "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
    amber:
      "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    emerald:
      "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
  };
  return (
    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-100 dark:border-slate-800/60">
      <span
        className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${colors[color as keyof typeof colors]}`}
      >
        {icon}
      </span>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        {title}
      </span>
    </div>
  );
}

function StatPill({ label, value, sub, accent = false }: { label: string; value: string; sub?: string; accent?: boolean }) {
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

// ─── main export ──────────────────────────────────────────────────────────────

export default function BusinessValuationCalculator() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [revenue, setRevenue] = useState(1000000);
  const [ebitda, setEbitda] = useState(150000);
  const [growthRate, setGrowthRate] = useState(15);
  const [industry, setIndustry] = useState("saaS");

  const INDUSTRIES = [
    { key: "saaS", label: "SaaS", revenueMultiple: [5, 10], ebitdaMultiple: [15, 25] },
    { key: "ecommerce", label: "E-commerce", revenueMultiple: [0.5, 3], ebitdaMultiple: [8, 15] },
    { key: "service", label: "Service Business", revenueMultiple: [1, 3], ebitdaMultiple: [4, 8] },
    { key: "manufacturing", label: "Manufacturing", revenueMultiple: [0.8, 2.5], ebitdaMultiple: [6, 12] },
    { key: "retail", label: "Retail", revenueMultiple: [0.5, 2], ebitdaMultiple: [4, 10] },
  ];

  const selectedIndustry = INDUSTRIES.find((i) => i.key === industry) || INDUSTRIES[0];

  const valuations = useMemo(() => {
    const revenueLow = revenue * selectedIndustry.revenueMultiple[0];
    const revenueHigh = revenue * selectedIndustry.revenueMultiple[1];
    const ebitdaLow = ebitda * selectedIndustry.ebitdaMultiple[0];
    const ebitdaHigh = ebitda * selectedIndustry.ebitdaMultiple[1];
    const avgRevenueVal = (revenueLow + revenueHigh) / 2;
    const avgEbitdaVal = (ebitdaLow + ebitdaHigh) / 2;
    const overallLow = Math.min(revenueLow, ebitdaLow);
    const overallHigh = Math.max(revenueHigh, ebitdaHigh);
    const overallAvg = (overallLow + overallHigh) / 2;

    return {
      revenueLow,
      revenueHigh,
      ebitdaLow,
      ebitdaHigh,
      avgRevenueVal,
      avgEbitdaVal,
      overallLow,
      overallHigh,
      overallAvg,
    };
  }, [revenue, ebitda, selectedIndustry]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* ── Industry Tabs ────────────────────────────────────────── */}
        <div className="mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.key}
                onClick={() => setIndustry(ind.key)}
                aria-pressed={industry === ind.key}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  industry === ind.key
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/40"
                    : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600"
                }`}
              >
                {ind.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main Grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Inputs */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="💰" title="Financial Metrics" color="indigo" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="revenue"
                    label="Annual Revenue"
                    value={revenue}
                    onChange={setRevenue}
                    prefix={symbol}
                    step="10000"
                    min="0"
                    sub="total sales per year"
                  />
                  <NumInput
                    id="ebitda"
                    label="EBITDA"
                    value={ebitda}
                    onChange={setEbitda}
                    prefix={symbol}
                    step="5000"
                    min="0"
                    sub="earnings before interest, taxes, depreciation, amortization"
                  />
                  <NumInput
                    id="growth"
                    label="Growth Rate"
                    value={growthRate}
                    onChange={setGrowthRate}
                    suffix="%"
                    step="1"
                    min="0"
                    sub="year-over-year revenue growth"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="flex items-center justify-between text-xs px-3 py-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                      Profit Margin
                    </span>
                    <span className="font-bold text-indigo-700 dark:text-indigo-300 tabular-nums">
                      {((ebitda / revenue) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="📊" title="Industry Multiples" color="amber" />
              <div className="p-5">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Revenue Multiple</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {selectedIndustry.revenueMultiple[0]}x - {selectedIndustry.revenueMultiple[1]}x
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 dark:text-slate-400">EBITDA Multiple</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {selectedIndustry.ebitdaMultiple[0]}x - {selectedIndustry.ebitdaMultiple[1]}x
                    </span>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* RIGHT — Results */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-5 text-white shadow-xl shadow-indigo-200 dark:shadow-indigo-950">
              <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-1">
                Estimated Valuation Range
              </div>
              <div className="text-3xl font-bold tabular-nums tracking-tight mb-0.5">
                {fmt(valuations.overallLow)} - {fmt(valuations.overallHigh)}
              </div>
              <div className="text-indigo-200 text-xs">
                Based on {selectedIndustry.label} industry multiples
              </div>

              <div className="mt-4 pt-4 border-t border-white/15">
                <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                  Average Valuation
                </div>
                <div className="text-2xl font-bold tabular-nums">
                  {fmt(valuations.overallAvg)}
                </div>
              </div>
            </div>

            <SectionCard>
              <SectionHead icon="📈" title="Valuation Breakdown" color="emerald" />
              <div className="p-5 space-y-3">
                <StatPill
                  label="Revenue-Based"
                  value={fmt(valuations.avgRevenueVal)}
                  sub={`${selectedIndustry.revenueMultiple[0]}x-${selectedIndustry.revenueMultiple[1]}x multiple`}
                />
                <StatPill
                  label="EBITDA-Based"
                  value={fmt(valuations.avgEbitdaVal)}
                  sub={`${selectedIndustry.ebitdaMultiple[0]}x-${selectedIndustry.ebitdaMultiple[1]}x multiple`}
                  accent
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="ℹ️" title="Key Metrics" color="indigo" />
              <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {[
                  { label: "Annual Revenue", value: fmt(revenue, 0) },
                  { label: "EBITDA", value: fmt(ebitda, 0) },
                  { label: "Growth Rate", value: growthRate + "%" },
                  { label: "EBITDA Margin", value: ((ebitda / revenue) * 100).toFixed(1) + "%" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center px-5 py-2.5 text-sm"
                  >
                    <span className="text-slate-500 dark:text-slate-400">
                      {label}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>

        {/* ── Disclaimer ───────────────────────────────────────────── */}
        <footer className="mt-6 px-5 py-4 bg-slate-50/60 dark:bg-slate-900/40 rounded-2xl border border-slate-200/60 dark:border-slate-800">
          <p className="text-[11px] text-slate-400 dark:text-slate-400 leading-relaxed">
            <strong className="text-slate-500 dark:text-slate-400 font-semibold">
              Disclaimer:
            </strong>{" "}
            Valuation estimates are for educational purposes only and should not be considered professional financial advice. Actual business valuations depend on many factors including market conditions, competitive landscape, and intangible assets. Consult a qualified business appraiser for accurate valuations.
          </p>
        </footer>
      </div>
    </div>
  );
}
