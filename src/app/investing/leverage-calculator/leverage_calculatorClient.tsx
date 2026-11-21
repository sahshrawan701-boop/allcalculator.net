"use client";

import { useState, useMemo } from "react";
import { useCurrency } from '@/hooks/useCurrency';

// ─── math helpers ─────────────────────────────────────────────────────────────


function fmtPct(n: number, dp = 2) {
  if (!isFinite(n) || isNaN(n)) return "0%";
  return n.toFixed(dp) + "%";
}

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

export default function LeverageCalculator() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [leverageRatio, setLeverageRatio] = useState(2);
  const [assetReturn, setAssetReturn] = useState(10);
  const [borrowingCost, setBorrowingCost] = useState(5);

  const calculations = useMemo(() => {
    const borrowedAmount = initialInvestment * (leverageRatio - 1);
    const totalPosition = initialInvestment * leverageRatio;
    const assetProfit = totalPosition * (assetReturn / 100);
    const borrowingCostAmount = borrowedAmount * (borrowingCost / 100);
    const netProfit = assetProfit - borrowingCostAmount;
    const roi = initialInvestment > 0 ? (netProfit / initialInvestment) * 100 : 0;
    const unleveragedProfit = initialInvestment * (assetReturn / 100);
    const leverageEffect = netProfit - unleveragedProfit;
    
    return {
      initialInvestment,
      leverageRatio,
      assetReturn,
      borrowingCost,
      borrowedAmount,
      totalPosition,
      assetProfit,
      borrowingCostAmount,
      netProfit,
      roi,
      unleveragedProfit,
      leverageEffect,
    };
  }, [initialInvestment, leverageRatio, assetReturn, borrowingCost]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* ── Main Grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Inputs */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="⚡" title="Leverage Setup" color="indigo" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="initialInvestment"
                    label="Initial Investment"
                    value={initialInvestment}
                    onChange={setInitialInvestment}
                    prefix={symbol}
                    step="1000"
                    min="0"
                    sub="your capital"
                  />
                  <NumInput
                    id="leverageRatio"
                    label="Leverage Ratio"
                    value={leverageRatio}
                    onChange={setLeverageRatio}
                    suffix=":1"
                    step="1"
                    min="1"
                    sub="multiplier"
                  />
                  <NumInput
                    id="assetReturn"
                    label="Asset Return"
                    value={assetReturn}
                    onChange={setAssetReturn}
                    suffix="%"
                    step="1"
                    sub="expected return"
                  />
                  <NumInput
                    id="borrowingCost"
                    label="Borrowing Cost"
                    value={borrowingCost}
                    onChange={setBorrowingCost}
                    suffix="%"
                    step="0.5"
                    min="0"
                    sub="interest rate"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="flex justify-between items-center text-xs px-3 py-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                      Total Position
                    </span>
                    <span className="font-bold text-indigo-700 dark:text-indigo-300 tabular-nums">
                      {fmt(calculations.totalPosition)}
                    </span>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="📈" title="Risk Analysis" color="amber" />
              <div className="p-5">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Borrowed Amount</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {fmt(calculations.borrowedAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Borrowing Cost</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {fmt(calculations.borrowingCostAmount)}
                    </span>
                  </div>
                  {calculations.roi > 0 && calculations.leverageEffect > 0 && (
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50">
                      <span className="text-emerald-500 text-base flex-shrink-0 mt-px">
                        ✓
                      </span>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
                        Positive leverage! ROI: {fmtPct(calculations.roi)}.
                      </p>
                    </div>
                  )}
                  {calculations.roi < 0 && (
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50">
                      <span className="text-rose-500 text-base flex-shrink-0 mt-px">
                        ⚠
                      </span>
                      <p className="text-xs text-rose-700 dark:text-rose-400 leading-relaxed">
                        Negative leverage! Losses are magnified. Reduce leverage.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </SectionCard>
          </div>

          {/* RIGHT — Results */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-5 text-white shadow-xl shadow-indigo-200 dark:shadow-indigo-950">
              <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-1">
                Net Profit
              </div>
              <div className="text-4xl font-bold tabular-nums tracking-tight mb-0.5">
                {fmt(calculations.netProfit)}
              </div>
              <div className="text-indigo-200 text-xs">
                after costs
              </div>

              <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                    ROI
                  </div>
                  <div className="text-lg font-bold tabular-nums">
                    {fmtPct(calculations.roi)}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                    Leverage Effect
                  </div>
                  <div className="text-lg font-bold tabular-nums">
                    {fmt(calculations.leverageEffect)}
                  </div>
                </div>
              </div>
            </div>

            <SectionCard>
              <SectionHead icon="📈" title="Key Metrics" color="emerald" />
              <div className="p-5 space-y-3">
                <StatPill
                  label="Net Profit"
                  value={fmt(calculations.netProfit)}
                  sub="after costs"
                  accent
                />
                <StatPill
                  label="Total Position"
                  value={fmt(calculations.totalPosition)}
                  sub="exposure"
                />
                <StatPill
                  label="Leverage Ratio"
                  value={`${leverageRatio}:1`}
                  sub="multiplier"
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="ℹ️" title="Summary" color="indigo" />
              <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {[
                  { label: "Initial Investment", value: fmt(initialInvestment) },
                  { label: "Leverage Ratio", value: `${leverageRatio}:1` },
                  { label: "Asset Return", value: fmtPct(assetReturn) },
                  { label: "Net Profit", value: fmt(calculations.netProfit) },
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
      </div>
    </div>
  );
}
