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

export default function StartupCostCalculator() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [legalFees, setLegalFees] = useState(5000);
  const [equipment, setEquipment] = useState(10000);
  const [officeSpace, setOfficeSpace] = useState(3000);
  const [marketing, setMarketing] = useState(5000);
  const [inventory, setInventory] = useState(8000);
  const [website, setWebsite] = useState(2000);
  const [otherCosts, setOtherCosts] = useState(3000);

  const calculations = useMemo(() => {
    const totalStartupCosts = legalFees + equipment + officeSpace + marketing + inventory + website + otherCosts;

    return {
      totalStartupCosts,
    };
  }, [legalFees, equipment, officeSpace, marketing, inventory, website, otherCosts]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* ── Main Grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Inputs */}
          <div className="space-y-4">
            <SectionCard>
              <SectionHead icon="💰" title="Startup Costs" color="indigo" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="legalFees"
                    label="Legal Fees"
                    value={legalFees}
                    onChange={setLegalFees}
                    prefix={symbol}
                    step="500"
                    min="0"
                    sub="registration, permits"
                  />
                  <NumInput
                    id="equipment"
                    label="Equipment"
                    value={equipment}
                    onChange={setEquipment}
                    prefix={symbol}
                    step="1000"
                    min="0"
                    sub="hardware, tools"
                  />
                  <NumInput
                    id="officeSpace"
                    label="Office Space"
                    value={officeSpace}
                    onChange={setOfficeSpace}
                    prefix={symbol}
                    step="500"
                    min="0"
                    sub="rent, deposit"
                  />
                  <NumInput
                    id="marketing"
                    label="Marketing"
                    value={marketing}
                    onChange={setMarketing}
                    prefix={symbol}
                    step="500"
                    min="0"
                    sub="launch campaign"
                  />
                  <NumInput
                    id="inventory"
                    label="Inventory"
                    value={inventory}
                    onChange={setInventory}
                    prefix={symbol}
                    step="1000"
                    min="0"
                    sub="initial stock"
                  />
                  <NumInput
                    id="website"
                    label="Website"
                    value={website}
                    onChange={setWebsite}
                    prefix={symbol}
                    step="500"
                    min="0"
                    sub="development, hosting"
                  />
                  <NumInput
                    id="otherCosts"
                    label="Other Costs"
                    value={otherCosts}
                    onChange={setOtherCosts}
                    prefix={symbol}
                    step="500"
                    min="0"
                    sub="miscellaneous"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="flex justify-between items-center text-xs px-3 py-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                      Total Startup Costs
                    </span>
                    <span className="font-bold text-indigo-700 dark:text-indigo-300 tabular-nums">
                      {fmt(calculations.totalStartupCosts)}
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
                Total Startup Costs
              </div>
              <div className="text-4xl font-bold tabular-nums tracking-tight mb-0.5">
                {fmt(calculations.totalStartupCosts)}
              </div>
              <div className="text-indigo-200 text-xs">
                initial investment needed
              </div>
            </div>

            <SectionCard>
              <SectionHead icon="📈" title="Key Metrics" color="emerald" />
              <div className="p-5 space-y-3">
                <StatPill
                  label="Total Costs"
                  value={fmt(calculations.totalStartupCosts)}
                  sub="startup investment"
                  accent
                />
                <StatPill
                  label="Legal Fees"
                  value={fmt(legalFees)}
                  sub="registration"
                />
                <StatPill
                  label="Equipment"
                  value={fmt(equipment)}
                  sub="hardware"
                />
              </div>
            </SectionCard>

            <SectionCard>
              <SectionHead icon="ℹ️" title="Cost Breakdown" color="indigo" />
              <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {[
                  { label: "Legal Fees", value: fmt(legalFees, 0) },
                  { label: "Equipment", value: fmt(equipment, 0) },
                  { label: "Office Space", value: fmt(officeSpace, 0) },
                  { label: "Marketing", value: fmt(marketing, 0) },
                  { label: "Inventory", value: fmt(inventory, 0) },
                  { label: "Website", value: fmt(website, 0) },
                  { label: "Other Costs", value: fmt(otherCosts, 0) },
                  { label: "Total", value: fmt(calculations.totalStartupCosts, 0), bold: true },
                ].map(({ label, value, bold }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center px-5 py-2.5 text-sm"
                  >
                    <span className="text-slate-500 dark:text-slate-400">
                      {label}
                    </span>
                    <span className={`font-semibold tabular-nums ${bold ? "text-indigo-600 dark:text-indigo-400" : "text-slate-800 dark:text-slate-100"}`}>
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
            Startup cost calculations are estimates for planning purposes. Actual costs may vary based on location, business type, and market conditions. Consult with a financial advisor for accurate budget planning.
          </p>
        </footer>
      </div>
    </div>
  );
}
