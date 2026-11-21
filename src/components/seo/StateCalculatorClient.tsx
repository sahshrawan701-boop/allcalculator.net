"use client";

import React, { useState, useMemo } from "react";
import { StateData } from "@/data/states";
import { StateCalculatorTemplate } from "@/data/stateCalculators";

// ─── math & currency helpers ──────────────────────────────────────────────────

function fmt(n: number, dp = 2) {
  if (!isFinite(n) || isNaN(n)) return "$0";
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  });
}

function fmtPct(n: number, dp = 1) {
  if (!isFinite(n) || isNaN(n)) return "0%";
  return `${n.toFixed(dp)}%`;
}

// ─── reusable UI sub-components ───────────────────────────────────────────────

function SectionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden ${className}`}
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
  color?: "indigo" | "amber" | "emerald" | "violet" | "sky";
}) {
  const colors = {
    indigo: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    amber: "bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    emerald: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    violet: "bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400",
    sky: "bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400",
  };
  const isFontAwesome = icon.startsWith("fa-");

  return (
    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-100 dark:border-slate-800">
      <span
        className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${colors[color]}`}
      >
        {isFontAwesome ? <i className={`fas ${icon}`} /> : icon}
      </span>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        {title}
      </span>
    </div>
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
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1.5"
      >
        {label}
        {sub && <span className="ml-1.5 font-normal normal-case text-slate-400">{sub}</span>}
      </label>
      <div className="relative group">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-sm font-semibold text-slate-400 group-focus-within:text-indigo-500 transition-colors">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={isNaN(value) ? "" : value}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            onChange(isNaN(v) ? 0 : v);
          }}
          className={`w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 hover:border-slate-300 dark:hover:border-slate-600 ${prefix ? "pl-8" : "pl-3.5"} ${suffix ? "pr-10" : "pr-3.5"}`}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-sm font-medium text-slate-400">
            {suffix}
          </span>
        )}
      </div>
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
      className={`rounded-xl p-3.5 border transition-all ${
        accent
          ? "bg-indigo-50/70 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800/50"
          : "bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800"
      }`}
    >
      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">
        {label}
      </div>
      <div
        className={`text-lg font-bold tabular-nums tracking-tight ${
          accent ? "text-indigo-600 dark:text-indigo-400" : "text-slate-900 dark:text-slate-100"
        }`}
      >
        {value}
      </div>
      {sub && <div className="text-[10px] text-slate-400 mt-0.5">{sub}</div>}
    </div>
  );
}

// ─── 1. Paycheck & Salary Engine ──────────────────────────────────────────────

function PaycheckEngine({ state, isHourly }: { state: StateData; isHourly?: boolean }) {
  const [wage, setWage] = useState(isHourly ? 35 : 75000);
  const [payFreq, setPayFreq] = useState<26 | 52 | 24 | 12>(26); // 26 = bi-weekly
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
  const [preTaxDeductionPct, setPreTaxDeductionPct] = useState(5); // 401k
  const [copied, setCopied] = useState(false);

  const freqLabels: Record<number, string> = {
    52: "Weekly",
    26: "Bi-Weekly",
    24: "Semi-Monthly",
    12: "Monthly",
  };

  const calc = useMemo(() => {
    const annualGross = isHourly ? wage * 2080 : wage;
    const grossPerPeriod = annualGross / payFreq;

    // Pre-tax 401(k) / benefits
    const preTaxAnnual = annualGross * (preTaxDeductionPct / 100);
    const preTaxPerPeriod = grossPerPeriod * (preTaxDeductionPct / 100);

    const federalTaxable = Math.max(
      0,
      annualGross - preTaxAnnual - (filingStatus === "single" ? 14600 : 29200)
    );

    // Progressive Federal 2026 approximation
    let fedTaxAnnual = 0;
    if (filingStatus === "single") {
      if (federalTaxable <= 11600) fedTaxAnnual = federalTaxable * 0.10;
      else if (federalTaxable <= 47150) fedTaxAnnual = 1160 + (federalTaxable - 11600) * 0.12;
      else if (federalTaxable <= 100525) fedTaxAnnual = 5426 + (federalTaxable - 47150) * 0.22;
      else if (federalTaxable <= 191950) fedTaxAnnual = 17168.50 + (federalTaxable - 100525) * 0.24;
      else fedTaxAnnual = 39110.50 + (federalTaxable - 191950) * 0.32;
    } else {
      if (federalTaxable <= 23200) fedTaxAnnual = federalTaxable * 0.10;
      else if (federalTaxable <= 94300) fedTaxAnnual = 2320 + (federalTaxable - 23200) * 0.12;
      else if (federalTaxable <= 201050) fedTaxAnnual = 10852 + (federalTaxable - 94300) * 0.22;
      else fedTaxAnnual = 34337 + (federalTaxable - 201050) * 0.24;
    }

    // FICA
    const ssWageBase = 176100;
    const ssAnnual = Math.min(annualGross, ssWageBase) * 0.062;
    const medicareAnnual = annualGross * 0.0145;
    const ficaAnnual = ssAnnual + medicareAnnual;

    // State Tax
    let stateTaxAnnual = 0;
    if (state.hasIncomeTax) {
      const stateTaxable = Math.max(
        0,
        annualGross - preTaxAnnual - (filingStatus === "single" ? state.standardDeductionSingle : state.standardDeductionMarried)
      );
      if (state.taxSystem === "flat") {
        stateTaxAnnual = stateTaxable * (state.topIncomeTaxRate / 100);
      } else {
        // progressive approximation: effective rate scales to top rate
        const effectiveRate = Math.min(state.topIncomeTaxRate, Math.max(state.lowestIncomeTaxRate, (state.topIncomeTaxRate * 0.75)));
        stateTaxAnnual = stateTaxable * (effectiveRate / 100);
      }
    }

    const totalTaxAnnual = fedTaxAnnual + ficaAnnual + stateTaxAnnual;
    const netAnnual = annualGross - preTaxAnnual - totalTaxAnnual;
    const netPerPeriod = netAnnual / payFreq;

    const fedPerPeriod = fedTaxAnnual / payFreq;
    const ficaPerPeriod = ficaAnnual / payFreq;
    const statePerPeriod = stateTaxAnnual / payFreq;
    const totalTaxPerPeriod = totalTaxAnnual / payFreq;

    const effectiveTaxRate = annualGross > 0 ? (totalTaxAnnual / annualGross) * 100 : 0;
    const netPct = annualGross > 0 ? (netAnnual / annualGross) * 100 : 0;

    return {
      annualGross,
      grossPerPeriod,
      preTaxPerPeriod,
      preTaxAnnual,
      fedPerPeriod,
      fedTaxAnnual,
      ficaPerPeriod,
      ficaAnnual,
      statePerPeriod,
      stateTaxAnnual,
      totalTaxPerPeriod,
      totalTaxAnnual,
      netPerPeriod,
      netAnnual,
      effectiveTaxRate,
      netPct,
    };
  }, [wage, payFreq, filingStatus, preTaxDeductionPct, isHourly, state]);

  const copyBreakdown = () => {
    const text = `${state.name} Paycheck Summary (2026):\nGross Pay: ${fmt(calc.grossPerPeriod)} (${freqLabels[payFreq]})\nFederal Withholding: ${fmt(calc.fedPerPeriod)}\nFICA (Social Security & Medicare): ${fmt(calc.ficaPerPeriod)}\n${state.name} State Tax: ${fmt(calc.statePerPeriod)}\nNet Take-Home Pay: ${fmt(calc.netPerPeriod)}\nAnnual Net: ${fmt(calc.netAnnual)}\nCalculated via allcalculator.net`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_390px] gap-6">
      {/* Inputs */}
      <div className="space-y-5">
        <SectionCard>
          <SectionHead icon="fa-calculator" title={`${state.name} Earnings & Deductions`} color="indigo" />
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NumInput
                id="wageInput"
                label={isHourly ? "Hourly Wage" : "Annual Gross Salary"}
                sub={isHourly ? `min $${state.minWage.toFixed(2)}` : "before taxes"}
                value={wage}
                onChange={setWage}
                prefix="$"
                step={isHourly ? "1" : "1000"}
              />
              <div>
                <label className="block text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                  Pay Frequency
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 26, label: "Bi-Weekly (26)" },
                    { id: 52, label: "Weekly (52)" },
                    { id: 24, label: "Semi-Monthly (24)" },
                    { id: 12, label: "Monthly (12)" },
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setPayFreq(f.id as any)}
                      className={`h-11 rounded-xl text-xs font-bold transition-all border ${
                        payFreq === f.id
                          ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mr-1">
                Presets:
              </span>
              {(isHourly ? [20, 30, 45, 60] : [50000, 75000, 100000, 150000]).map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setWage(amt)}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 transition-colors"
                >
                  {isHourly ? `$${amt}/hr` : `$${(amt / 1000).toFixed(0)}k`}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div>
                <label className="block text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                  Filing Status (W-4)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFilingStatus("single")}
                    className={`h-10 rounded-xl text-xs font-bold transition-all border ${
                      filingStatus === "single"
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white"
                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    Single
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilingStatus("married")}
                    className={`h-10 rounded-xl text-xs font-bold transition-all border ${
                      filingStatus === "married"
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white"
                        : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    Married Joint
                  </button>
                </div>
              </div>

              <NumInput
                id="preTaxDeduction"
                label="Pre-Tax 401(k) / Deferral"
                sub="% of salary"
                value={preTaxDeductionPct}
                onChange={setPreTaxDeductionPct}
                suffix="%"
                step="1"
              />
            </div>
          </div>
        </SectionCard>

        {/* State statutory highlight banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/40 border border-indigo-100 dark:border-indigo-900/50 flex items-start gap-3.5">
          <span className="text-xl">🏛️</span>
          <div>
            <div className="text-xs font-bold text-indigo-950 dark:text-indigo-200">
              {state.name} Income Tax Rule: {state.hasIncomeTax ? state.incomeTaxRate : "0% (No State Income Tax)"}
            </div>
            <div className="text-xs text-indigo-800/80 dark:text-indigo-300/80 mt-0.5 leading-relaxed">
              {state.hasIncomeTax
                ? `${state.name} taxes income using a ${state.taxSystem} system with standard deductions of $${state.standardDeductionSingle.toLocaleString()} (single). Administered by ${state.agencyName}.`
                : `${state.name} does not tax earned wages or salaries, allowing workers to retain a higher percentage of gross pay.`}
            </div>
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-6 text-white shadow-xl shadow-indigo-600/15">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-200">
              Take-Home Pay ({freqLabels[payFreq]})
            </span>
            <button
              onClick={copyBreakdown}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/15 hover:bg-white/25 transition-all flex items-center gap-1.5"
            >
              <i className={`fas ${copied ? "fa-check text-emerald-300" : "fa-copy"}`} />
              <span>{copied ? "Copied!" : "Copy"}</span>
            </button>
          </div>
          <div className="text-4xl font-extrabold tracking-tight tabular-nums mb-1">
            {fmt(calc.netPerPeriod)}
          </div>
          <div className="text-xs text-indigo-200 flex items-center gap-2">
            <span>Annual: {fmt(calc.netAnnual)}</span>
            <span>•</span>
            <span>{calc.netPct.toFixed(1)}% kept</span>
          </div>

          {/* Visual Bar */}
          <div className="mt-5 pt-4 border-t border-white/20">
            <div className="h-2.5 w-full bg-black/20 rounded-full overflow-hidden flex">
              <div
                style={{ width: `${calc.netPct}%` }}
                className="bg-emerald-400 h-full"
                title={`Net Pay: ${calc.netPct.toFixed(1)}%`}
              />
              <div
                style={{ width: `${calc.effectiveTaxRate}%` }}
                className="bg-rose-400 h-full"
                title={`Taxes: ${calc.effectiveTaxRate.toFixed(1)}%`}
              />
            </div>
            <div className="flex justify-between text-[11px] text-indigo-100 mt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Net Pay ({calc.netPct.toFixed(0)}%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" /> Taxes ({calc.effectiveTaxRate.toFixed(0)}%)
              </span>
            </div>
          </div>
        </div>

        {/* Breakdown details */}
        <SectionCard>
          <SectionHead icon="fa-list" title="Paycheck Line-Item Deductions" color="emerald" />
          <div className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
            <div className="flex justify-between items-center px-5 py-3">
              <span className="font-medium text-slate-700 dark:text-slate-300">Gross Pay</span>
              <span className="font-bold text-slate-900 dark:text-slate-100 tabular-nums">{fmt(calc.grossPerPeriod)}</span>
            </div>
            {calc.preTaxPerPeriod > 0 && (
              <div className="flex justify-between items-center px-5 py-3 text-indigo-600 dark:text-indigo-400">
                <span className="flex items-center gap-1.5">
                  <i className="fas fa-piggy-bank text-xs" /> Pre-Tax 401(k)
                </span>
                <span className="font-semibold tabular-nums">-{fmt(calc.preTaxPerPeriod)}</span>
              </div>
            )}
            <div className="flex justify-between items-center px-5 py-3">
              <span className="text-slate-600 dark:text-slate-400">Federal Income Tax</span>
              <span className="font-semibold text-rose-600 dark:text-rose-400 tabular-nums">-{fmt(calc.fedPerPeriod)}</span>
            </div>
            <div className="flex justify-between items-center px-5 py-3">
              <span className="text-slate-600 dark:text-slate-400">FICA (SS + Medicare)</span>
              <span className="font-semibold text-rose-600 dark:text-rose-400 tabular-nums">-{fmt(calc.ficaPerPeriod)}</span>
            </div>
            <div className="flex justify-between items-center px-5 py-3">
              <span className="text-slate-600 dark:text-slate-400">{state.name} State Tax</span>
              <span className="font-semibold text-rose-600 dark:text-rose-400 tabular-nums">
                {state.hasIncomeTax ? `-${fmt(calc.statePerPeriod)}` : "$0.00 (None)"}
              </span>
            </div>
            <div className="flex justify-between items-center px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 font-bold">
              <span className="text-slate-900 dark:text-slate-100">Total Deductions</span>
              <span className="text-rose-600 dark:text-rose-400 tabular-nums">
                -{fmt(calc.totalTaxPerPeriod + calc.preTaxPerPeriod)}
              </span>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

// ─── 2. Income Tax & General Tax Engine ────────────────────────────────────────

function IncomeTaxEngine({ state }: { state: StateData }) {
  const [grossIncome, setGrossIncome] = useState(85000);
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");
  const [hsa401k, setHsa401k] = useState(6000);

  const calc = useMemo(() => {
    const fedStd = filingStatus === "single" ? 14600 : 29200;
    const stateStd = filingStatus === "single" ? state.standardDeductionSingle : state.standardDeductionMarried;

    const fedTaxable = Math.max(0, grossIncome - hsa401k - fedStd);
    const stateTaxable = Math.max(0, grossIncome - hsa401k - stateStd);

    // Federal Tax
    let fedTax = 0;
    if (filingStatus === "single") {
      if (fedTaxable <= 11600) fedTax = fedTaxable * 0.10;
      else if (fedTaxable <= 47150) fedTax = 1160 + (fedTaxable - 11600) * 0.12;
      else if (fedTaxable <= 100525) fedTax = 5426 + (fedTaxable - 47150) * 0.22;
      else fedTax = 17168.50 + (fedTaxable - 100525) * 0.24;
    } else {
      if (fedTaxable <= 23200) fedTax = fedTaxable * 0.10;
      else if (fedTaxable <= 94300) fedTax = 2320 + (fedTaxable - 23200) * 0.12;
      else fedTax = 10852 + (fedTaxable - 94300) * 0.22;
    }

    // FICA
    const fica = Math.min(grossIncome, 176100) * 0.062 + grossIncome * 0.0145;

    // State Tax
    let stateTax = 0;
    if (state.hasIncomeTax) {
      if (state.taxSystem === "flat") {
        stateTax = stateTaxable * (state.topIncomeTaxRate / 100);
      } else {
        const effRate = Math.min(state.topIncomeTaxRate, state.topIncomeTaxRate * 0.72);
        stateTax = stateTaxable * (effRate / 100);
      }
    }

    const totalTax = fedTax + fica + stateTax;
    const netIncome = grossIncome - totalTax;
    const effRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;
    const stateEffRate = grossIncome > 0 ? (stateTax / grossIncome) * 100 : 0;

    return {
      fedTax,
      fica,
      stateTax,
      totalTax,
      netIncome,
      effRate,
      stateEffRate,
    };
  }, [grossIncome, filingStatus, hsa401k, state]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_390px] gap-6">
      <div className="space-y-5">
        <SectionCard>
          <SectionHead icon="fa-coins" title={`${state.name} Tax Modeling`} color="indigo" />
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NumInput
                id="grossIncomeInput"
                label="Annual Gross Income"
                value={grossIncome}
                onChange={setGrossIncome}
                prefix="$"
                step="5000"
              />
              <NumInput
                id="hsa401kInput"
                label="Pre-Tax Deductions (401k / HSA)"
                value={hsa401k}
                onChange={setHsa401k}
                prefix="$"
                step="500"
              />
            </div>

            <div className="pt-2">
              <label className="block text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                Filing Status
              </label>
              <div className="grid grid-cols-2 gap-3 max-w-md">
                <button
                  type="button"
                  onClick={() => setFilingStatus("single")}
                  className={`h-11 rounded-xl text-xs font-bold transition-all border ${
                    filingStatus === "single"
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  Single Filer
                </button>
                <button
                  type="button"
                  onClick={() => setFilingStatus("married")}
                  className={`h-11 rounded-xl text-xs font-bold transition-all border ${
                    filingStatus === "married"
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                  }`}
                >
                  Married Filing Jointly
                </button>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-6 text-white shadow-xl shadow-indigo-600/15">
          <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-200 mb-1">
            Total Tax Liability in {state.name}
          </div>
          <div className="text-4xl font-extrabold tracking-tight tabular-nums mb-1">
            {fmt(calc.totalTax)}
          </div>
          <div className="text-xs text-indigo-200">
            Effective Total Tax Rate: {calc.effRate.toFixed(1)}%
          </div>

          <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] uppercase text-indigo-200">State Tax</div>
              <div className="text-lg font-bold">{state.hasIncomeTax ? fmt(calc.stateTax) : "$0 (None)"}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-indigo-200">Net Income</div>
              <div className="text-lg font-bold">{fmt(calc.netIncome)}</div>
            </div>
          </div>
        </div>

        <SectionCard>
          <SectionHead icon="fa-chart-pie" title="Tax Distribution" color="emerald" />
          <div className="p-4 space-y-3">
            <StatPill label="Federal Income Tax" value={fmt(calc.fedTax)} sub="federal tax" />
            <StatPill label="FICA Payroll Taxes" value={fmt(calc.fica)} sub="Social Security + Medicare" />
            <StatPill
              label={`${state.name} State Tax`}
              value={state.hasIncomeTax ? fmt(calc.stateTax) : "$0.00"}
              sub={`${calc.stateEffRate.toFixed(1)}% state effective`}
              accent
            />
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

// ─── 3. Sales Tax Engine ──────────────────────────────────────────────────────

function SalesTaxEngine({ state }: { state: StateData }) {
  const [purchaseAmt, setPurchaseAmt] = useState(500);
  const [localTaxPct, setLocalTaxPct] = useState(state.avgLocalSalesTax);
  const [category, setCategory] = useState<"general" | "groceries" | "rx">("general");

  const calc = useMemo(() => {
    let stateRate = state.baseSalesTax;
    let localRate = localTaxPct;

    if (category === "rx") {
      stateRate = 0;
      localRate = 0;
    } else if (category === "groceries") {
      if (state.grocerySalesTax.toLowerCase().includes("exempt")) {
        stateRate = 0;
      } else if (state.grocerySalesTax.toLowerCase().includes("reduced")) {
        stateRate = Math.min(2.0, state.baseSalesTax);
      }
    }

    const combinedRate = stateRate + localRate;
    const stateTax = purchaseAmt * (stateRate / 100);
    const localTax = purchaseAmt * (localRate / 100);
    const totalTax = stateTax + localTax;
    const totalCost = purchaseAmt + totalTax;

    return {
      stateRate,
      localRate,
      combinedRate,
      stateTax,
      localTax,
      totalTax,
      totalCost,
    };
  }, [purchaseAmt, localTaxPct, category, state]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_390px] gap-6">
      <div className="space-y-5">
        <SectionCard>
          <SectionHead icon="fa-shopping-cart" title={`${state.name} Sales Tax Calculator`} color="indigo" />
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NumInput
                id="purchaseAmtInput"
                label="Purchase Amount"
                value={purchaseAmt}
                onChange={setPurchaseAmt}
                prefix="$"
                step="50"
              />
              <NumInput
                id="localTaxInput"
                label="Local City/County Tax"
                sub={`avg ${state.avgLocalSalesTax}%`}
                value={localTaxPct}
                onChange={setLocalTaxPct}
                suffix="%"
                step="0.25"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                Product Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "general", label: "General Goods" },
                  { id: "groceries", label: "Groceries (Food)" },
                  { id: "rx", label: "Prescription Rx" },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCategory(c.id as any)}
                    className={`h-11 rounded-xl text-xs font-bold transition-all border ${
                      category === c.id
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-6 text-white shadow-xl shadow-indigo-600/15">
          <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-200 mb-1">
            Total Purchase Price (Out-of-Pocket)
          </div>
          <div className="text-4xl font-extrabold tracking-tight tabular-nums mb-1">
            {fmt(calc.totalCost)}
          </div>
          <div className="text-xs text-indigo-200">
            Combined Sales Tax Rate: {calc.combinedRate.toFixed(2)}%
          </div>
        </div>

        <SectionCard>
          <SectionHead icon="fa-receipt" title="Tax Breakdown" color="emerald" />
          <div className="p-4 space-y-3">
            <StatPill label={`${state.name} Base Tax (${calc.stateRate}%)`} value={fmt(calc.stateTax)} />
            <StatPill label={`Local Municipal Tax (${calc.localRate}%)`} value={fmt(calc.localTax)} />
            <StatPill label="Total Sales Tax" value={fmt(calc.totalTax)} accent />
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

// ─── 4. Property Tax Engine ───────────────────────────────────────────────────

function PropertyTaxEngine({ state }: { state: StateData }) {
  const [homeValue, setHomeValue] = useState(state.medianHomeValue || 350000);
  const [taxRate, setTaxRate] = useState(state.effectivePropertyTaxRate);
  const [homestead, setHomestead] = useState(true);

  const calc = useMemo(() => {
    const exemptionAmt = homestead ? 25000 : 0;
    const taxableValue = Math.max(0, homeValue - exemptionAmt);
    const annualTax = taxableValue * (taxRate / 100);
    const monthlyEscrow = annualTax / 12;

    const usAvgTax = homeValue * 0.0099;
    const diff = annualTax - usAvgTax;

    return {
      taxableValue,
      annualTax,
      monthlyEscrow,
      usAvgTax,
      diff,
    };
  }, [homeValue, taxRate, homestead]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_390px] gap-6">
      <div className="space-y-5">
        <SectionCard>
          <SectionHead icon="fa-home" title={`${state.name} Property Tax Valuation`} color="indigo" />
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NumInput
                id="homeValueInput"
                label="Home Market Value"
                value={homeValue}
                onChange={setHomeValue}
                prefix="$"
                step="10000"
              />
              <NumInput
                id="propertyTaxRateInput"
                label="Effective Tax Rate"
                sub={`avg ${state.effectivePropertyTaxRate}%`}
                value={taxRate}
                onChange={setTaxRate}
                suffix="%"
                step="0.05"
              />
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Apply Primary Residence Homestead Exemption
                </div>
                <div className="text-[11px] text-slate-500">Exempts estimated $25,000 from taxable assessed value</div>
              </div>
              <input
                type="checkbox"
                checked={homestead}
                onChange={(e) => setHomestead(e.target.checked)}
                className="w-5 h-5 accent-indigo-600 rounded cursor-pointer"
              />
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-6 text-white shadow-xl shadow-indigo-600/15">
          <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-200 mb-1">
            Annual Property Tax Bill
          </div>
          <div className="text-4xl font-extrabold tracking-tight tabular-nums mb-1">
            {fmt(calc.annualTax)}
          </div>
          <div className="text-xs text-indigo-200">
            Monthly Escrow: {fmt(calc.monthlyEscrow)} / month
          </div>
        </div>

        <SectionCard>
          <SectionHead icon="fa-chart-line" title="Assessment Details" color="emerald" />
          <div className="p-4 space-y-3">
            <StatPill label="Taxable Valuation" value={fmt(calc.taxableValue)} />
            <StatPill label="Monthly Property Tax Escrow" value={fmt(calc.monthlyEscrow)} accent />
            <StatPill
              label="US National Benchmark (0.99%)"
              value={fmt(calc.usAvgTax)}
              sub={calc.diff >= 0 ? `+${fmt(calc.diff)} higher than US avg` : `${fmt(Math.abs(calc.diff))} lower than US avg`}
            />
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

// ─── 5. Mortgage Engine ───────────────────────────────────────────────────────

function MortgageEngine({ state }: { state: StateData }) {
  const [homePrice, setHomePrice] = useState(state.medianHomeValue || 400000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.75);
  const [loanTermYears, setLoanTermYears] = useState(30);

  const calc = useMemo(() => {
    const downPayment = homePrice * (downPaymentPct / 100);
    const principal = homePrice - downPayment;
    const r = interestRate / 100 / 12;
    const n = loanTermYears * 12;

    const monthlyPI = r > 0 ? (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1) : principal / n;
    const monthlyTaxes = (homePrice * (state.effectivePropertyTaxRate / 100)) / 12;
    const monthlyInsurance = 125;
    const monthlyPMI = downPaymentPct < 20 ? (principal * 0.0075) / 12 : 0;

    const totalMonthlyPITI = monthlyPI + monthlyTaxes + monthlyInsurance + monthlyPMI;
    const totalInterestPaid = monthlyPI * n - principal;

    return {
      downPayment,
      principal,
      monthlyPI,
      monthlyTaxes,
      monthlyInsurance,
      monthlyPMI,
      totalMonthlyPITI,
      totalInterestPaid,
    };
  }, [homePrice, downPaymentPct, interestRate, loanTermYears, state]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_390px] gap-6">
      <div className="space-y-5">
        <SectionCard>
          <SectionHead icon="fa-house-user" title={`${state.name} Mortgage Loan Inputs`} color="indigo" />
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NumInput
                id="homePriceInput"
                label="Home Purchase Price"
                value={homePrice}
                onChange={setHomePrice}
                prefix="$"
                step="10000"
              />
              <NumInput
                id="downPaymentPctInput"
                label="Down Payment"
                sub={fmt(calc.downPayment)}
                value={downPaymentPct}
                onChange={setDownPaymentPct}
                suffix="%"
                step="5"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NumInput
                id="interestRateInput"
                label="Interest Rate"
                value={interestRate}
                onChange={setInterestRate}
                suffix="%"
                step="0.125"
              />
              <div>
                <label className="block text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                  Loan Term
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[30, 15].map((y) => (
                    <button
                      key={y}
                      type="button"
                      onClick={() => setLoanTermYears(y)}
                      className={`h-11 rounded-xl text-xs font-bold transition-all border ${
                        loanTermYears === y
                          ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      {y}-Year Fixed
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-6 text-white shadow-xl shadow-indigo-600/15">
          <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-200 mb-1">
            Total Monthly Mortgage (PITI)
          </div>
          <div className="text-4xl font-extrabold tracking-tight tabular-nums mb-1">
            {fmt(calc.totalMonthlyPITI)}
          </div>
          <div className="text-xs text-indigo-200">
            Principal & Interest: {fmt(calc.monthlyPI)}/mo
          </div>
        </div>

        <SectionCard>
          <SectionHead icon="fa-list-check" title="Payment Breakdown" color="emerald" />
          <div className="p-4 space-y-3">
            <StatPill label="Principal & Interest" value={fmt(calc.monthlyPI)} />
            <StatPill label={`${state.name} Property Taxes`} value={fmt(calc.monthlyTaxes)} sub={`${state.effectivePropertyTaxRate}% rate`} />
            <StatPill label="Homeowners Insurance" value={fmt(calc.monthlyInsurance)} />
            {calc.monthlyPMI > 0 && <StatPill label="Private Mortgage Insurance (PMI)" value={fmt(calc.monthlyPMI)} accent />}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

// ─── 6. Auto Loan Engine ──────────────────────────────────────────────────────

function AutoLoanEngine({ state }: { state: StateData }) {
  const [vehiclePrice, setVehiclePrice] = useState(38000);
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeIn, setTradeIn] = useState(4000);
  const [termMonths, setTermMonths] = useState(60);
  const [rate, setRate] = useState(6.5);

  const calc = useMemo(() => {
    const taxableBase = Math.max(0, vehiclePrice - tradeIn);
    const salesTax = taxableBase * (state.autoSalesTaxRate / 100);
    const fees = state.avgAutoRegistrationFee + 250;
    const financed = Math.max(0, vehiclePrice - tradeIn + salesTax + fees - downPayment);

    const r = rate / 100 / 12;
    const n = termMonths;
    const monthlyPayment = r > 0 ? (financed * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1) : financed / n;
    const totalInterest = monthlyPayment * n - financed;

    return {
      taxableBase,
      salesTax,
      financed,
      monthlyPayment,
      totalInterest,
      totalCost: financed + totalInterest + downPayment + tradeIn,
    };
  }, [vehiclePrice, downPayment, tradeIn, termMonths, rate, state]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_390px] gap-6">
      <div className="space-y-5">
        <SectionCard>
          <SectionHead icon="fa-car" title={`${state.name} Auto Loan Calculator`} color="indigo" />
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NumInput id="carPrice" label="Vehicle Price" value={vehiclePrice} onChange={setVehiclePrice} prefix="$" step="1000" />
              <NumInput id="downPay" label="Down Payment" value={downPayment} onChange={setDownPayment} prefix="$" step="500" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NumInput id="tradeInVal" label="Trade-In Credit" value={tradeIn} onChange={setTradeIn} prefix="$" step="500" />
              <NumInput id="interestRate" label="Interest Rate" value={rate} onChange={setRate} suffix="%" step="0.25" />
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                Loan Term (Months)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[36, 48, 60, 72].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setTermMonths(m)}
                    className={`h-11 rounded-xl text-xs font-bold transition-all border ${
                      termMonths === m
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20"
                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    {m} Mos
                  </button>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-6 text-white shadow-xl shadow-indigo-600/15">
          <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-200 mb-1">
            Monthly Auto Payment
          </div>
          <div className="text-4xl font-extrabold tracking-tight tabular-nums mb-1">
            {fmt(calc.monthlyPayment)}
          </div>
          <div className="text-xs text-indigo-200">
            Total Financed: {fmt(calc.financed)}
          </div>
        </div>

        <SectionCard>
          <SectionHead icon="fa-file-invoice" title="Cost Summary" color="emerald" />
          <div className="p-4 space-y-3">
            <StatPill label={`${state.name} Vehicle Tax (${state.autoSalesTaxRate}%)`} value={fmt(calc.salesTax)} />
            <StatPill label="Total Loan Interest" value={fmt(calc.totalInterest)} />
            <StatPill label="Total Vehicle Purchase Cost" value={fmt(calc.totalCost)} accent />
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

// ─── 7. Payroll & Business Engines ────────────────────────────────────────────

function BusinessEngine({ state, isPayroll }: { state: StateData; isPayroll?: boolean }) {
  const [revenueOrSalary, setRevenueOrSalary] = useState(isPayroll ? 65000 : 150000);
  const [expenseOrSuta, setExpenseOrSuta] = useState(isPayroll ? state.sutaRate : 50000);

  const calc = useMemo(() => {
    if (isPayroll) {
      const gross = revenueOrSalary;
      const ssMatch = Math.min(gross, 176100) * 0.062;
      const medMatch = gross * 0.0145;
      const futa = Math.min(gross, 7000) * 0.006;
      const suta = Math.min(gross, 10000) * (expenseOrSuta / 100);
      const totalTaxes = ssMatch + medMatch + futa + suta;
      const totalCost = gross + totalTaxes;
      return { totalTaxes, totalCost, multiplier: totalCost / gross };
    } else {
      const netProfit = Math.max(0, revenueOrSalary - expenseOrSuta);
      const seTax = netProfit * 0.153;
      const stateTax = state.hasIncomeTax ? netProfit * (state.topIncomeTaxRate / 100) : 0;
      const fedTax = netProfit * 0.22;
      const totalTax = seTax + stateTax + fedTax;
      const netAfterTax = netProfit - totalTax;
      return { totalTaxes: totalTax, totalCost: netAfterTax, multiplier: 0 };
    }
  }, [revenueOrSalary, expenseOrSuta, isPayroll, state]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_390px] gap-6">
      <div className="space-y-5">
        <SectionCard>
          <SectionHead
            icon={isPayroll ? "fa-money-check-alt" : "fa-building"}
            title={isPayroll ? `${state.name} Employer Payroll Costs` : `${state.name} Business Entity Tax`}
            color="indigo"
          />
          <div className="p-5 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NumInput
                id="bizInput1"
                label={isPayroll ? "Employee Gross Wage" : "Gross Business Revenue"}
                value={revenueOrSalary}
                onChange={setRevenueOrSalary}
                prefix="$"
                step="5000"
              />
              <NumInput
                id="bizInput2"
                label={isPayroll ? "State SUTA Tax Rate" : "Deductible Business Expenses"}
                value={expenseOrSuta}
                onChange={setExpenseOrSuta}
                prefix={isPayroll ? undefined : "$"}
                suffix={isPayroll ? "%" : undefined}
                step={isPayroll ? "0.1" : "5000"}
              />
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-6 text-white shadow-xl shadow-indigo-600/15">
          <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-200 mb-1">
            {isPayroll ? "Total Cost to Employer" : "Net Profit After Taxes"}
          </div>
          <div className="text-4xl font-extrabold tracking-tight tabular-nums mb-1">
            {fmt(calc.totalCost)}
          </div>
          <div className="text-xs text-indigo-200">
            {isPayroll ? `Labor Multiplier: ${calc.multiplier.toFixed(2)}x salary` : `Total Taxes: ${fmt(calc.totalTaxes)}`}
          </div>
        </div>

        <SectionCard>
          <SectionHead icon="fa-chart-pie" title="Tax Overview" color="emerald" />
          <div className="p-4 space-y-3">
            <StatPill label={isPayroll ? "Employer Payroll Taxes" : "Total Business Taxes"} value={fmt(calc.totalTaxes)} accent />
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

// ─── Main Router Component ────────────────────────────────────────────────────

export default function StateCalculatorClient({
  state,
  template,
}: {
  state: StateData;
  template: StateCalculatorTemplate;
}) {
  switch (template.id) {
    case "paycheck-calculator":
      return <PaycheckEngine state={state} isHourly={false} />;
    case "salary-calculator":
      return <PaycheckEngine state={state} isHourly={true} />;
    case "income-tax-calculator":
    case "tax-calculator":
      return <IncomeTaxEngine state={state} />;
    case "sales-tax-calculator":
      return <SalesTaxEngine state={state} />;
    case "property-tax-calculator":
      return <PropertyTaxEngine state={state} />;
    case "mortgage-calculator":
      return <MortgageEngine state={state} />;
    case "auto-loan-calculator":
      return <AutoLoanEngine state={state} />;
    case "payroll-calculator":
      return <BusinessEngine state={state} isPayroll={true} />;
    case "business-tax-calculator":
      return <BusinessEngine state={state} isPayroll={false} />;
    default:
      return <PaycheckEngine state={state} />;
  }
}
