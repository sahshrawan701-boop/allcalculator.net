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

function Slider({ id, label, value, onChange, min, max, step, format }: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format?: (v: number) => string;
}) {
  const pct = Math.round(((value - min) / (max - min)) * 100);
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5">
        <Label htmlFor={id} sub="">{label}</Label>
        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
          {format ? format(value) : value}
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
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
        />
        <div
          className="absolute w-4 h-4 rounded-full bg-indigo-500 shadow-md border-2 border-white dark:border-slate-900 pointer-events-none transition-transform"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
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

export default function PropertyTaxCalculatorPage() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [assessedValue, setAssessedValue] = useState(350000);
  const [taxRate, setTaxRate] = useState(1.2);
  const [exemption, setExemption] = useState(0);
  const [assessmentRatio, setAssessmentRatio] = useState(100);

  const { taxableValue, annualTax, monthlyTax, effectiveRate } = useMemo(() => {
    const taxableValue = Math.max(0, assessedValue * (assessmentRatio / 100) - exemption);
    const annualTax = taxableValue * (taxRate / 100);
    const monthlyTax = annualTax / 12;
    const effectiveRate = assessedValue > 0 ? (annualTax / assessedValue) * 100 : 0;
    return { taxableValue, annualTax, monthlyTax, effectiveRate };
  }, [assessedValue, taxRate, exemption, assessmentRatio]);

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
                    id="assessed"
                    label="Assessed Value"
                    value={assessedValue}
                    onChange={setAssessedValue}
                    prefix={symbol}
                    step="1000"
                    min="0"
                    sub="market value"
                  />
                  <NumInput
                    id="exemption"
                    label="Exemption Amount"
                    value={exemption}
                    onChange={setExemption}
                    prefix={symbol}
                    step="1000"
                    min="0"
                    sub="homestead, senior..."
                  />
                  <NumInput
                    id="rate"
                    label="Tax Rate"
                    value={taxRate}
                    onChange={setTaxRate}
                    suffix="%"
                    step="0.01"
                    min="0"
                    sub="per $100 assessed"
                  />
                  <NumInput
                    id="ratio"
                    label="Assessment Ratio"
                    value={assessmentRatio}
                    onChange={setAssessmentRatio}
                    suffix="%"
                    step="1"
                    min="0"
                    sub="of market value"
                  />
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <Slider
                    id="sl-assessed"
                    label="Assessed Value"
                    value={assessedValue}
                    onChange={setAssessedValue}
                    min={50000}
                    max={2000000}
                    step={5000}
                    format={(v: number) => fmt(v, 0)}
                  />
                  <Slider
                    id="sl-rate"
                    label="Tax Rate"
                    value={taxRate}
                    onChange={setTaxRate}
                    min={0.1}
                    max={5}
                    step={0.01}
                    format={(v: number) => v.toFixed(2) + "%"}
                  />
                </div>

                {exemption > 0 && (
                  <div className="flex items-center justify-between text-xs px-3 py-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40">
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      Taxable Value
                    </span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-300 tabular-nums">
                      {fmt(taxableValue, 0)}
                    </span>
                  </div>
                )}
              </div>
            </SectionCard>
          </div>

          {/* RIGHT — Results */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="📊" title="Tax Summary" color="emerald" />
              <div className="p-5">
                <div className="space-y-3">
                  <StatPill
                    label="Annual Tax"
                    value={fmt(annualTax)}
                    sub="per year"
                    accent
                  />
                  <StatPill
                    label="Monthly Tax"
                    value={fmt(monthlyTax)}
                    sub="in escrow"
                  />
                  <StatPill
                    label="Effective Rate"
                    value={fmtPct(effectiveRate)}
                    sub="of market value"
                  />
                </div>

                {exemption > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50">
                      <span className="text-emerald-500 text-base flex-shrink-0 mt-px">
                        💡
                      </span>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed">
                        Your exemption of <strong>{fmt(exemption, 0)}</strong> reduces your
                        annual tax by approximately <strong>{fmt(exemption * (taxRate / 100))}</strong>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="ℹ️" title="Tax Breakdown" color="amber" />
              <div className="p-5">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Assessed Value</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                      {fmt(assessedValue, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Assessment Ratio</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                      {assessmentRatio}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Exemption</span>
                    <span className="font-semibold text-rose-500 dark:text-rose-400 tabular-nums">
                      -{fmt(exemption, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Taxable Value</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
                      {fmt(taxableValue, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Tax Rate</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                      {taxRate}%
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
