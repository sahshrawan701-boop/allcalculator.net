"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import CalculatorActions from "@/components/CalculatorActions";
import { useCurrency } from "@/hooks/useCurrency";

// ─── math helpers ─────────────────────────────────────────────────────────────

function fmtPct(n: number, dp = 2) {
  if (!isFinite(n) || isNaN(n)) return "0%";
  return n.toFixed(dp) + "%";
}

// ─── sub-components ───────────────────────────────────────────────────────────

function Label({
  children,
  htmlFor,
  sub,
}: {
  children: React.ReactNode;
  htmlFor?: string;
  sub?: string;
}) {
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

function SectionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHead({
  icon,
  title,
  color = "indigo",
}: {
  icon: string;
  title: string;
  color?: "indigo" | "amber" | "emerald";
}) {
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

function StatPill({
  label,
  value,
  sub,
  accent = false,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
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

import CostOfLivingCalculatorArticle from "./cost_of_living_calculator_article";

// ─── main export ──────────────────────────────────────────────────────────────

export default function CostOfLivingCalculator() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.currentSalary !== undefined) setCurrentSalary(data.currentSalary);
          if (data.currentCityIndex !== undefined) setCurrentCityIndex(data.currentCityIndex);
          if (data.targetCityIndex !== undefined) setTargetCityIndex(data.targetCityIndex);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [currentSalary, setCurrentSalary] = useState(75000);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [targetCityIndex, setTargetCityIndex] = useState(1);

  const cities = useMemo(
    () => [
      { name: "National Average", index: 100.0 },
      { name: "New York, NY (Manhattan)", index: 222.0 },
      { name: "San Francisco, CA", index: 169.3 },
      { name: "Honolulu, HI", index: 179.2 },
      { name: "Boston, MA", index: 148.4 },
      { name: "Washington, DC", index: 148.1 },
      { name: "Los Angeles, CA", index: 148.0 },
      { name: "Seattle, WA", index: 144.3 },
      { name: "San Diego, CA", index: 136.2 },
      { name: "Miami, FL", index: 118.9 },
      { name: "Chicago, IL", index: 117.3 },
      { name: "Denver, CO", index: 110.8 },
      { name: "Portland, OR", index: 114.2 },
      { name: "Philadelphia, PA", index: 104.5 },
      { name: "Phoenix, AZ", index: 104.3 },
      { name: "Dallas, TX", index: 102.6 },
      { name: "Las Vegas, NV", index: 102.1 },
      { name: "Atlanta, GA", index: 101.6 },
      { name: "Austin, TX", index: 100.3 },
      { name: "Orlando, FL", index: 99.4 },
      { name: "Charlotte, NC", index: 97.6 },
      { name: "Houston, TX", index: 95.8 },
      { name: "Tampa, FL", index: 95.6 },
      { name: "Kansas City, MO", index: 93.3 },
      { name: "San Antonio, TX", index: 91.5 },
      { name: "Columbus, OH", index: 91.3 },
      { name: "Indianapolis, IN", index: 89.2 },
      { name: "Cincinnati, OH", index: 87.5 },
      { name: "St. Louis, MO", index: 87.1 },
      { name: "Memphis, TN", index: 85.0 },
      { name: "Oklahoma City, OK", index: 84.1 },
    ],
    [],
  );

  const calculations = useMemo(() => {
    const currentCity = cities[currentCityIndex];
    const targetCity = cities[targetCityIndex];

    const costOfLivingRatio = targetCity.index / currentCity.index;
    const equivalentSalary = currentSalary * costOfLivingRatio;
    const salaryDifference = equivalentSalary - currentSalary;
    const percentageDifference =
      ((equivalentSalary - currentSalary) / currentSalary) * 100;

    return {
      currentCity: currentCity.name,
      targetCity: targetCity.name,
      currentCityIndex: currentCity.index,
      targetCityIndex: targetCity.index,
      costOfLivingRatio,
      equivalentSalary,
      salaryDifference,
      percentageDifference,
    };
  }, [currentSalary, currentCityIndex, targetCityIndex, cities]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* ── Main Grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Inputs */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="💰" title="Salary & Location" color="indigo" />
              <div className="p-5 space-y-5">
                <NumInput
                  id="currentSalary"
                  label="Current Annual Salary"
                  value={currentSalary}
                  onChange={setCurrentSalary}
                  prefix={symbol}
                  step="1000"
                  min="0"
                  sub="before taxes"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currentCity">Current City</Label>
                    <select
                      id="currentCity"
                      value={currentCityIndex}
                      onChange={(e) =>
                        setCurrentCityIndex(Number(e.target.value))
                      }
                      className="w-full h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 hover:border-slate-200 dark:hover:border-slate-600 px-3"
                    >
                      {cities.map((city, index) => (
                        <option key={index} value={index}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="targetCity">Target City</Label>
                    <select
                      id="targetCity"
                      value={targetCityIndex}
                      onChange={(e) =>
                        setTargetCityIndex(Number(e.target.value))
                      }
                      className="w-full h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 hover:border-slate-200 dark:hover:border-slate-600 px-3"
                    >
                      {cities.map((city, index) => (
                        <option key={index} value={index}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="flex justify-between items-center text-xs px-3 py-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                      Cost of Living Ratio
                    </span>
                    <span className="font-bold text-indigo-700 dark:text-indigo-300 tabular-nums">
                      {calculations.costOfLivingRatio.toFixed(2)}x
                    </span>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="📊" title="Cost Comparison" color="amber" />
              <div className="p-5">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Current City Index
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {calculations.currentCityIndex}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Target City Index
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {calculations.targetCityIndex}
                    </span>
                  </div>
                  {calculations.percentageDifference > 0 && (
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50">
                      <span className="text-rose-500 text-base flex-shrink-0 mt-px">
                        ⚠
                      </span>
                      <p className="text-xs text-rose-700 dark:text-rose-400 leading-relaxed">
                        {calculations.targetCity} has a higher cost of living.
                        You&apos;ll need{" "}
                        {fmtPct(calculations.percentageDifference)} more income
                        to maintain your lifestyle.
                      </p>
                    </div>
                  )}
                  {calculations.percentageDifference < 0 && (
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50">
                      <span className="text-emerald-500 text-base flex-shrink-0 mt-px">
                        ✓
                      </span>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
                        {calculations.targetCity} has a lower cost of living.
                        You could maintain your lifestyle with{" "}
                        {fmtPct(Math.abs(calculations.percentageDifference))}{" "}
                        less income.
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
                Equivalent Salary
              </div>
              <div className="text-4xl font-bold tabular-nums tracking-tight mb-0.5">
                {fmt(calculations.equivalentSalary)}
              </div>
              <div className="text-indigo-200 text-xs">
                needed in {calculations.targetCity}
              </div>

              <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                    Difference
                  </div>
                  <div className="text-lg font-bold tabular-nums">
                    {fmt(calculations.salaryDifference)}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                    Percentage
                  </div>
                  <div className="text-lg font-bold tabular-nums">
                    {fmtPct(calculations.percentageDifference)}
                  </div>
                </div>
              </div>
            </div>

            <SectionCard>
              <SectionHead icon="📈" title="Key Metrics" color="emerald" />
              <div className="p-5 space-y-3">
                <StatPill
                  label="Current Salary"
                  value={fmt(currentSalary)}
                  sub="annual income"
                  accent
                />
                <StatPill
                  label="Equivalent Salary"
                  value={fmt(calculations.equivalentSalary)}
                  sub="in target city"
                />
                <StatPill
                  label="Salary Difference"
                  value={fmt(calculations.salaryDifference)}
                  sub="adjustment needed"
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="ℹ️" title="Summary" color="indigo" />
              <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {[
                  { label: "Current City", value: calculations.currentCity },
                  { label: "Target City", value: calculations.targetCity },
                  { label: "Current Salary", value: fmt(currentSalary) },
                  {
                    label: "Equivalent Salary",
                    value: fmt(calculations.equivalentSalary),
                  },
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

        {/* ── Article ───────────────────────────────────────────── */}
        <div className="mt-8">
          <CostOfLivingCalculatorArticle />
        </div>

        {/* ── Disclaimer ───────────────────────────────────────────── */}
        <footer className="mt-6 px-5 py-4 bg-slate-50/60 dark:bg-slate-900/40 rounded-2xl border border-slate-200/60 dark:border-slate-800">
          <p className="text-[11px] text-slate-400 dark:text-slate-400 leading-relaxed">
            <strong className="text-slate-500 dark:text-slate-400 font-semibold">
              Disclaimer:
            </strong>{" "}
            Cost of living indices are estimates based on national averages and
            may vary based on lifestyle, housing choices, and personal spending
            habits. Use these calculations as a general reference when
            considering relocation.
          </p>
        </footer>
      
        <CalculatorActions
          calculatorId="cost-of-living-calculator"
          calculatorName="Cost Of Living Calculator"
          inputData={{ currentSalary, currentCityIndex, targetCityIndex }}
          resultData={{}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}