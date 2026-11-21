"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import CalculatorActions from "@/components/CalculatorActions";

import { useCurrency } from "@/hooks/useCurrency";
// ─── math helpers ─────────────────────────────────────────────────────────────

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

// ─── main export ──────────────────────────────────────────────────────────────

export default function HealthInsuranceCalculator() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.monthlyPremium !== undefined) setMonthlyPremium(data.monthlyPremium);
          if (data.annualDeductible !== undefined) setAnnualDeductible(data.annualDeductible);
          if (data.outOfPocketMax !== undefined) setOutOfPocketMax(data.outOfPocketMax);
          if (data.expectedMedicalCosts !== undefined) setExpectedMedicalCosts(data.expectedMedicalCosts);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [monthlyPremium, setMonthlyPremium] = useState(400);
  const [annualDeductible, setAnnualDeductible] = useState(1500);
  const [outOfPocketMax, setOutOfPocketMax] = useState(6000);
  const [expectedMedicalCosts, setExpectedMedicalCosts] = useState(5000);

  const calculations = useMemo(() => {
    const annualPremium = monthlyPremium * 12;
    const employerContribution = annualPremium * 0.7; // Hardcoded employer contribution as per original layout
    const employeeCost = annualPremium - employerContribution;
    const coinsuranceRate = 0.2; // Hardcoded coinsurance as per original layout

    // Calculate actual out of pocket medical costs
    let deductiblePaid = 0;
    let coinsurancePaid = 0;

    if (expectedMedicalCosts <= annualDeductible) {
      deductiblePaid = expectedMedicalCosts;
    } else {
      deductiblePaid = annualDeductible;
      coinsurancePaid =
        (expectedMedicalCosts - annualDeductible) * coinsuranceRate;
    }

    let totalOutOfPocket = deductiblePaid + coinsurancePaid;

    if (totalOutOfPocket > outOfPocketMax) {
      totalOutOfPocket = outOfPocketMax;
    }

    const totalCost = annualPremium + totalOutOfPocket;

    return {
      monthlyPremium,
      annualDeductible,
      outOfPocketMax,
      expectedMedicalCosts,
      annualPremium,
      totalCost,
      employerContribution,
      employeeCost,
      coinsuranceCost: coinsurancePaid,
      totalOutOfPocket,
    };
  }, [monthlyPremium, annualDeductible, outOfPocketMax, expectedMedicalCosts]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* ── Main Grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Inputs */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="💰" title="Plan Details" color="indigo" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="monthlyPremium"
                    label="Monthly Premium"
                    value={monthlyPremium}
                    onChange={setMonthlyPremium}
                    prefix={symbol}
                    step="10"
                    min="0"
                    sub="monthly cost"
                  />
                  <NumInput
                    id="annualDeductible"
                    label="Annual Deductible"
                    value={annualDeductible}
                    onChange={setAnnualDeductible}
                    prefix={symbol}
                    step="100"
                    min="0"
                    sub="before coverage"
                  />
                  <NumInput
                    id="outOfPocketMax"
                    label="Out-of-Pocket Max"
                    value={outOfPocketMax}
                    onChange={setOutOfPocketMax}
                    prefix={symbol}
                    step="500"
                    min="0"
                    sub="maximum cost"
                  />
                  <NumInput
                    id="expectedMedicalCosts"
                    label="Expected Medical Costs"
                    value={expectedMedicalCosts}
                    onChange={setExpectedMedicalCosts}
                    prefix={symbol}
                    step="500"
                    min="0"
                    sub="annual estimate"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="flex justify-between items-center text-xs px-3 py-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                      Annual Premium
                    </span>
                    <span className="font-bold text-indigo-700 dark:text-indigo-300 tabular-nums">
                      {fmt(calculations.annualPremium)}
                    </span>
                  </div>
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="📈" title="Cost Breakdown" color="amber" />
              <div className="p-5">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Employer Contribution
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {fmt(calculations.employerContribution)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      Employee Cost
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100">
                      {fmt(calculations.employeeCost)}
                    </span>
                  </div>
                  {calculations.totalOutOfPocket >= outOfPocketMax && (
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50">
                      <span className="text-rose-500 text-base flex-shrink-0 mt-px">
                        ⚠
                      </span>
                      <p className="text-xs text-rose-700 dark:text-rose-400 leading-relaxed">
                        You&apos;ll reach your out-of-pocket maximum. Consider a
                        plan with higher coverage.
                      </p>
                    </div>
                  )}
                  {calculations.totalOutOfPocket < annualDeductible && (
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50">
                      <span className="text-emerald-500 text-base flex-shrink-0 mt-px">
                        ✓
                      </span>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
                        Good coverage! Your expected costs are below the
                        deductible.
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
                Total Annual Cost
              </div>
              <div className="text-4xl font-bold tabular-nums tracking-tight mb-0.5">
                {fmt(calculations.totalCost)}
              </div>
              <div className="text-indigo-200 text-xs">
                including premium & medical
              </div>

              <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                    Premium
                  </div>
                  <div className="text-lg font-bold tabular-nums">
                    {fmt(calculations.annualPremium)}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                    Out-of-Pocket
                  </div>
                  <div className="text-lg font-bold tabular-nums">
                    {fmt(calculations.totalOutOfPocket)}
                  </div>
                </div>
              </div>
            </div>

            <SectionCard>
              <SectionHead icon="📈" title="Key Metrics" color="emerald" />
              <div className="p-5 space-y-3">
                <StatPill
                  label="Monthly Premium"
                  value={fmt(monthlyPremium)}
                  sub="monthly cost"
                  accent
                />
                <StatPill
                  label="Deductible"
                  value={fmt(annualDeductible)}
                  sub="annual"
                />
                <StatPill
                  label="Out-of-Pocket Max"
                  value={fmt(outOfPocketMax)}
                  sub="maximum"
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="ℹ️" title="Summary" color="indigo" />
              <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {[
                  { label: "Monthly Premium", value: fmt(monthlyPremium) },
                  { label: "Annual Deductible", value: fmt(annualDeductible) },
                  { label: "Out-of-Pocket Max", value: fmt(outOfPocketMax) },
                  {
                    label: "Total Annual Cost",
                    value: fmt(calculations.totalCost),
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
      
        <CalculatorActions
          calculatorId="health-insurance-calculator"
          calculatorName="Health Insurance Calculator"
          inputData={{ monthlyPremium, annualDeductible, outOfPocketMax, expectedMedicalCosts }}
          resultData={{}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}