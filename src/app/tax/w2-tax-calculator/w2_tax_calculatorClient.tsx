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

export default function W2TaxCalculatorPage() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [grossWages, setGrossWages] = useState(75000);
  const [federalWithheld, setFederalWithheld] = useState(12000);
  const [stateWithheld, setStateWithheld] = useState(3000);
  const [socialSecurityWages, setSocialSecurityWages] = useState(75000);
  const [medicareWages, setMedicareWages] = useState(75000);

  const { federalTax, stateTax, socialSecurityTax, medicareTax, totalTax, netPay, effectiveRate } = useMemo(() => {
    const socialSecurityTax = Math.min(socialSecurityWages * 0.062, 160200 * 0.062);
    const medicareTax = medicareWages * 0.0145;
    const federalTax = grossWages * 0.22;
    const stateTax = grossWages * 0.05;
    const totalTax = federalTax + stateTax + socialSecurityTax + medicareTax;
    const netPay = grossWages - totalTax;
    const effectiveRate = grossWages > 0 ? (totalTax / grossWages) * 100 : 0;
    return { federalTax, stateTax, socialSecurityTax, medicareTax, totalTax, netPay, effectiveRate };
  }, [grossWages, federalWithheld, stateWithheld, socialSecurityWages, medicareWages]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Inputs */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="💰" title="W-2 Income" color="indigo" />
              <div className="p-5 space-y-5">
                <NumInput
                  id="gross"
                  label="Gross Wages"
                  value={grossWages}
                  onChange={setGrossWages}
                  prefix={symbol}
                  step="1000"
                  min="0"
                  sub="Box 1"
                />
                <NumInput
                  id="ss"
                  label="Social Security Wages"
                  value={socialSecurityWages}
                  onChange={setSocialSecurityWages}
                  prefix={symbol}
                  step="1000"
                  min="0"
                  sub="Box 3"
                />
                <NumInput
                  id="medicare"
                  label="Medicare Wages"
                  value={medicareWages}
                  onChange={setMedicareWages}
                  prefix={symbol}
                  step="1000"
                  min="0"
                  sub="Box 5"
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="📋" title="Tax Withheld" color="amber" />
              <div className="p-5 space-y-4">
                <NumInput
                  id="federal"
                  label="Federal Income Tax"
                  value={federalWithheld}
                  onChange={setFederalWithheld}
                  prefix={symbol}
                  step="500"
                  min="0"
                  sub="Box 2"
                />
                <NumInput
                  id="state"
                  label="State Income Tax"
                  value={stateWithheld}
                  onChange={setStateWithheld}
                  prefix={symbol}
                  step="500"
                  min="0"
                  sub="Box 17"
                />
              </div>
            </SectionCard>
          </div>

          {/* RIGHT — Results */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="📊" title="W-2 Summary" color="emerald" />
              <div className="p-5">
                <div className="space-y-3">
                  <StatPill
                    label="Net Pay"
                    value={fmt(netPay)}
                    sub="take-home pay"
                    accent
                  />
                  <StatPill
                    label="Total Tax"
                    value={fmt(totalTax)}
                    sub="all withholdings"
                  />
                  <StatPill
                    label="Effective Rate"
                    value={fmtPct(effectiveRate)}
                    sub="of gross wages"
                  />
                </div>
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="ℹ️" title="Tax Breakdown" color="indigo" />
              <div className="p-5">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Gross Wages</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                      {fmt(grossWages)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Federal Tax</span>
                    <span className="font-semibold text-rose-500 dark:text-rose-400 tabular-nums">
                      -{fmt(federalTax)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">State Tax</span>
                    <span className="font-semibold text-rose-500 dark:text-rose-400 tabular-nums">
                      -{fmt(stateTax)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Social Security</span>
                    <span className="font-semibold text-rose-500 dark:text-rose-400 tabular-nums">
                      -{fmt(socialSecurityTax)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">Medicare</span>
                    <span className="font-semibold text-rose-500 dark:text-rose-400 tabular-nums">
                      -{fmt(medicareTax)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Net Pay</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                      {fmt(netPay)}
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
