"use client";

import { useState, useMemo } from "react";
import { useCurrency } from '@/hooks/useCurrency';


function fmtPct(n: number, dp = 2) {
  if (!isFinite(n) || isNaN(n)) return "0.00%";
  return n.toFixed(dp) + "%";
}

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

export default function RealEstateTaxCalculatorPage() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [purchasePrice, setPurchasePrice] = useState(400000);
  const [salePrice, setSalePrice] = useState(550000);
  const [holdingYears, setHoldingYears] = useState(5);
  const [improvements, setImprovements] = useState(30000);
  const [sellingCosts, setSellingCosts] = useState(25000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");

  const { capitalGains, taxableGain, longTermRate, shortTermRate } = useMemo(() => {
    const adjustedBasis = purchasePrice + improvements;
    const grossGain = salePrice - adjustedBasis - sellingCosts;
    const isLongTerm = holdingYears >= 1;
    const longTermRate = isLongTerm ? 0.15 : 0;
    const shortTermRate = isLongTerm ? 0 : 0.24;
    const taxableGain = Math.max(0, grossGain);
    const capitalGains = taxableGain * (isLongTerm ? longTermRate : shortTermRate);
    return { capitalGains, taxableGain, longTermRate, shortTermRate };
  }, [purchasePrice, salePrice, holdingYears, improvements, sellingCosts]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Inputs */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="🏠" title="Property Details" color="indigo" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="purchase"
                    label="Purchase Price"
                    value={purchasePrice}
                    onChange={setPurchasePrice}
                    prefix={symbol}
                    step="5000"
                    min="0"
                    sub="original cost"
                  />
                  <NumInput
                    id="sale"
                    label="Sale Price"
                    value={salePrice}
                    onChange={setSalePrice}
                    prefix={symbol}
                    step="5000"
                    min="0"
                    sub="selling price"
                  />
                  <NumInput
                    id="years"
                    label="Holding Period"
                    value={holdingYears}
                    onChange={setHoldingYears}
                    suffix="years"
                    step="0.5"
                    min="0"
                    sub="duration owned"
                  />
                  <NumInput
                    id="improvements"
                    label="Improvements"
                    value={improvements}
                    onChange={setImprovements}
                    prefix={symbol}
                    step="1000"
                    min="0"
                    sub="capital improvements"
                  />
                </div>

                <NumInput
                  id="costs"
                  label="Selling Costs"
                  value={sellingCosts}
                  onChange={setSellingCosts}
                  prefix={symbol}
                  step="1000"
                  min="0"
                  sub="commissions, fees..."
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="👤" title="Tax Status" color="amber" />
              <div className="p-5">
                <Label htmlFor="status" sub="">Filing Status</Label>
                <div className="grid grid-cols-2 gap-3">
                  {(["single", "married"] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilingStatus(status)}
                      className={`py-3 rounded-xl border-2 font-medium text-sm transition-all ${
                        filingStatus === status
                          ? "bg-indigo-500 border-indigo-500 text-white"
                          : "border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {status === "single" ? "Single" : "Married Filing Jointly"}
                    </button>
                  ))}
                </div>
              </div>
            </SectionCard>
          </div>

          {/* RIGHT — Results */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="📊" title="Capital Gains" color="emerald" />
              <div className="p-5">
                <div className="space-y-3">
                  <StatPill
                    label="Capital Gains"
                    value={fmt(capitalGains)}
                    sub="tax owed"
                    accent
                  />
                  <StatPill
                    label="Taxable Gain"
                    value={fmt(taxableGain)}
                    sub="after costs"
                  />
                  <StatPill
                    label="Tax Rate"
                    value={fmtPct(holdingYears >= 1 ? longTermRate * 100 : shortTermRate * 100)}
                    sub={holdingYears >= 1 ? "long-term" : "short-term"}
                  />
                </div>

                {holdingYears >= 1 && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50">
                      <span className="text-emerald-500 text-base flex-shrink-0 mt-px">
                        💡
                      </span>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
                        Your property qualifies for long-term capital gains treatment at <strong>{fmtPct(longTermRate * 100)}</strong>, which is lower than ordinary income tax rates.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="ℹ️" title="Gain Breakdown" color="indigo" />
              <div className="p-5">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Sale Price</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                      {fmt(salePrice, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Adjusted Basis</span>
                    <span className="font-semibold text-rose-500 dark:text-rose-400 tabular-nums">
                      -{fmt(purchasePrice + improvements, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Selling Costs</span>
                    <span className="font-semibold text-rose-500 dark:text-rose-400 tabular-nums">
                      -{fmt(sellingCosts, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Taxable Gain</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
                      {fmt(taxableGain, 0)}
                    </span>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
