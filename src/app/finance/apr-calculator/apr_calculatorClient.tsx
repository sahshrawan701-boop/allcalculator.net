"use client";

import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import CalculatorActions from "@/components/CalculatorActions";

import { useCurrency } from '@/hooks/useCurrency';
// ─── math helpers ─────────────────────────────────────────────────────────────

function calcMonthlyPayment(principal: number, annualRatePct: number, months: number) {
  if (months <= 0 || principal <= 0) return 0;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}

function solveAPR(principal: number, fees: number, amort: any[]) {
  if (amort.length <= 0 || principal - fees <= 0) return 0;
  const pvTarget = principal - fees;
  let lo = 0,
    hi = 500;
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    const r = mid / 100 / 12;
    let pv = 0;
    for (let k = 1; k <= amort.length; k++) pv += amort[k-1].payment / Math.pow(1 + r, k);
    if (pv > pvTarget) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return (lo + hi) / 2;
}

function buildAmortization(principal: number, annualRatePct: number, months: number, homeValue: number = 0, monthlyPmi: number = 0) {
  const rows = [];
  const r = annualRatePct / 100 / 12;
  const pmt = calcMonthlyPayment(principal, annualRatePct, months);
  let balance = principal;
  for (let m = 1; m <= months; m++) {
    const interest = balance * r;
    const principalPaid = Math.min(pmt - interest, balance);
    balance = Math.max(0, balance - principalPaid);
    
    const isPmiActive = homeValue > 0 && ((balance + principalPaid) / homeValue > 0.78);
    const pmiPaid = isPmiActive ? monthlyPmi : 0;

    rows.push({
      month: m,
      year: Math.ceil(m / 12),
      payment: pmt + pmiPaid,
      principal: principalPaid,
      interest,
      pmi: pmiPaid,
      balance,
    });
  }
  return rows;
}

function fmtPct(n: number, dp = 3) {
  if (!isFinite(n) || isNaN(n)) return "0.000%";
  return n.toFixed(dp) + "%";
}

// ─── loan type presets ────────────────────────────────────────────────────────

const LOAN_TYPES = [
  {
    key: "personal",
    label: "Personal",
    icon: "👤",
    amount: 10000,
    rate: 11.5,
    years: 3,
    downPayment: 0,
    origFee: 250,
    points: 0,
    closing: 0,
    pmi: 0,
    hasDp: false,
    hasPMI: false,
  },
  {
    key: "auto",
    label: "Auto",
    icon: "🚗",
    amount: 32000,
    rate: 6.9,
    years: 5,
    downPayment: 5000,
    origFee: 0,
    points: 0,
    closing: 0,
    pmi: 0,
    hasDp: true,
    hasPMI: false,
  },
  {
    key: "mortgage",
    label: "Mortgage",
    icon: "🏠",
    amount: 400000,
    rate: 7.25,
    years: 30,
    downPayment: 80000,
    origFee: 3500,
    points: 1,
    closing: 5000,
    pmi: 150,
    hasDp: true,
    hasPMI: true,
  },
  {
    key: "equity",
    label: "Home Equity",
    icon: "🏡",
    amount: 75000,
    rate: 8.25,
    years: 10,
    downPayment: 0,
    origFee: 500,
    points: 0,
    closing: 0,
    pmi: 0,
    hasDp: false,
    hasPMI: false,
  },
  {
    key: "student",
    label: "Student",
    icon: "🎓",
    amount: 35000,
    rate: 5.5,
    years: 10,
    downPayment: 0,
    origFee: 0,
    points: 0,
    closing: 0,
    pmi: 0,
    hasDp: false,
    hasPMI: false,
  },
];

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
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setLocal(String(value));
  }, [value]);
  /* eslint-enable react-hooks/set-state-in-effect */
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

function DonutChart({ principal, interest, fees }: { principal: number; interest: number; fees: number }) {
  const { fmt, fmtShort } = useCurrency();
  const total = principal + interest + fees;
  if (total <= 0) return null;
  const p1 = (principal / total) * 100;
  const p2 = (interest / total) * 100;
  const p3 = (fees / total) * 100;

  const r = 54;
  const circ = 2 * Math.PI * r;
  const dash1 = (p1 / 100) * circ;
  const dash2 = (p2 / 100) * circ;
  const dash3 = (p3 / 100) * circ;
  const gap = 1.5;
  const off1 = -gap / 2;
  const off2 = -(dash1 + gap * 1.5);
  const off3 = -(dash1 + dash2 + gap * 2.5);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
      <div
        className="relative flex-shrink-0"
        style={{ width: 130, height: 130 }}
      >
        <svg viewBox="0 0 130 130" className="w-full h-full -rotate-90">
          <circle
            cx="65"
            cy="65"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="14"
            className="text-slate-100 dark:text-slate-800"
          />
          {p1 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#6366f1"
              strokeWidth="14"
              strokeDasharray={`${dash1 - gap} ${circ - dash1 + gap}`}
              strokeDashoffset={off1}
              strokeLinecap="butt"
            />
          )}
          {p2 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#f43f5e"
              strokeWidth="14"
              strokeDasharray={`${dash2 - gap} ${circ - dash2 + gap}`}
              strokeDashoffset={off2}
              strokeLinecap="butt"
            />
          )}
          {p3 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="14"
              strokeDasharray={`${dash3 - gap} ${circ - dash3 + gap}`}
              strokeDashoffset={off3}
              strokeLinecap="butt"
            />
          )}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Total
          </span>
          <span className="text-base font-bold text-slate-800 dark:text-slate-100 tabular-nums">
            {fmtShort(total)}
          </span>
        </div>
      </div>
      <div className="space-y-2 flex-1 min-w-0 w-full">
        {[
          {
            color: "bg-indigo-500",
            label: "Principal",
            val: principal,
            pct: p1,
          },
          { color: "bg-rose-500", label: "Interest", val: interest, pct: p2 },
          { color: "bg-amber-400", label: "Fees", val: fees, pct: p3 },
        ].map(({ color, label, val, pct }) => (
          <div key={label}>
            <div className="flex justify-between text-xs mb-0.5">
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${color}`}
                />
                <span className="text-slate-800 dark:text-slate-400 font-medium">
                  {label}
                </span>
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                {fmt(val, 0)}
              </span>
            </div>
            <div className="h-1 rounded-full bg-slate-50 dark:bg-slate-900">
              <div
                className={`h-full rounded-full ${color} transition-all duration-500`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function YearlyChart({ amort }: { amort: Array<{ year: number; principal: number; interest: number; balance: number }> }) {
  const { fmtShort } = useCurrency();
  const yearly = useMemo(() => {
    const map: Record<number, { p: number; i: number; bal: number }> = {};
    amort.forEach((r) => {
      if (!map[r.year]) map[r.year] = { p: 0, i: 0, bal: 0 };
      map[r.year].p += r.principal;
      map[r.year].i += r.interest;
      map[r.year].bal = r.balance;
    });
    return Object.entries(map).map(([yr, d]) => ({ yr: Number(yr), ...d }));
  }, [amort]);

  if (yearly.length === 0) return null;
  const maxVal = Math.max(...yearly.map((y) => y.p + y.i));

  return (
    <div>
      <div className="flex items-center gap-5 mb-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="w-3 h-2 rounded-sm bg-indigo-500 inline-block" />
          Principal
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="w-3 h-2 rounded-sm bg-rose-400 inline-block" />
          Interest
        </div>
      </div>
      <div className="flex items-end gap-1" style={{ height: 140 }}>
        {yearly.map(({ yr, p, i }) => {
          const hP = maxVal > 0 ? (p / maxVal) * 120 : 0;
          const hI = maxVal > 0 ? (i / maxVal) * 120 : 0;
          return (
            <div
              key={yr}
              className="flex-1 flex flex-col items-center gap-px group relative"
            >
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center pointer-events-none z-10">
                <div className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 text-[9px] font-semibold px-1.5 py-1 rounded whitespace-nowrap">
                  Y{yr}: {fmtShort(p + i)}
                </div>
                <div className="w-1.5 h-1.5 bg-slate-800 dark:bg-slate-200 rotate-45 -mt-0.5" />
              </div>
              <div className="w-full flex flex-col">
                <div
                  className="w-full bg-rose-400 rounded-t-sm transition-all"
                  style={{ height: hI }}
                />
                <div
                  className="w-full bg-indigo-500 transition-all"
                  style={{ height: hP }}
                />
              </div>
              {(yr === 1 ||
                yr % 5 === 0 ||
                yr === yearly[yearly.length - 1].yr) && (
                <span className="text-[9px] text-slate-400 dark:text-slate-400 mt-1">
                  Y{yr}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── main export ──────────────────────────────────────────────────────────────

export default function APRCalculator() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.activeType !== undefined) setActiveType(data.activeType);
          if (data.amount !== undefined) setAmount(data.amount);
          if (data.downPayment !== undefined) setDownPayment(data.downPayment);
          if (data.nomRate !== undefined) setNomRate(data.nomRate);
          if (data.years !== undefined) setYears(data.years);
          if (data.origFee !== undefined) setOrigFee(data.origFee);
          if (data.points !== undefined) setPoints(data.points);
          if (data.closing !== undefined) setClosing(data.closing);
          if (data.pmi !== undefined) setPmi(data.pmi);
          if (data.showAmort !== undefined) setShowAmort(data.showAmort);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [activeType, setActiveType] = useState("personal");
  const [amount, setAmount] = useState(10000);
  const [downPayment, setDownPayment] = useState(0);
  const [nomRate, setNomRate] = useState(11.5);
  const [years, setYears] = useState(3);
  const [origFee, setOrigFee] = useState(250);
  const [points, setPoints] = useState(0);
  const [closing, setClosing] = useState(0);
  const [pmi, setPmi] = useState(0);
  const [showAmort, setShowAmort] = useState(false);
  const [amortTab, setAmortTab] = useState("chart");

  const applyPreset = useCallback((key: string) => {
    const p = LOAN_TYPES.find((t) => t.key === key);
    if (!p) return;
    setActiveType(key);
    setAmount(p.amount);
    setDownPayment(p.downPayment);
    setNomRate(p.rate);
    setYears(p.years);
    setOrigFee(p.origFee);
    setPoints(p.points);
    setClosing(p.closing);
    setPmi(p.pmi);
  }, []);

  const loan = LOAN_TYPES.find((t) => t.key === activeType);
  const principal = Math.max(0, amount - downPayment);
  const pointsFee = (principal * points) / 100;
  const totalFees = origFee + pointsFee + closing;
  const months = Math.max(1, Math.round(years * 12));

  const monthlyPmi = loan?.hasPMI ? pmi : 0;

  const { payment, apr, totalInterest, totalPaid, amort, totalPmi } = useMemo(() => {
    const payment = calcMonthlyPayment(principal, nomRate, months);
    const amort = buildAmortization(principal, nomRate, months, amount, monthlyPmi);
    const apr = solveAPR(principal, totalFees, amort);
    
    // totalInterest is sum of all interest paid in amort
    const totalInterest = amort.reduce((sum, row) => sum + row.interest, 0);
    const totalPmi = amort.reduce((sum, row) => sum + row.pmi, 0);
    // totalPaid is all payments plus upfront fees and downpayment
    const totalPaid = amort.reduce((sum, row) => sum + row.payment, 0) + totalFees + downPayment;
    
    return { payment, apr, totalInterest, totalPaid, amort, totalPmi };
  }, [principal, nomRate, months, totalFees, downPayment, amount, monthlyPmi]);

  const aprDiff = apr - nomRate;
  const effectiveMo = apr / 100 / 12;
  const fullPayment = payment + monthlyPmi;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* ── Loan Type Tabs ────────────────────────────────────────── */}
        <div className="mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {LOAN_TYPES.map((t) => (
              <button
                key={t.key}
                onClick={() => applyPreset(t.key)}
                aria-pressed={activeType === t.key}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  activeType === t.key
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/40"
                    : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600"
                }`}
              >
                <span aria-hidden="true">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main Grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Inputs */}
          <div className="space-y-4">
            {/* Loan Basics */}
            <SectionCard>
              <SectionHead icon="💰" title="Loan Details" color="indigo" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="amount"
                    label="Loan Amount"
                    value={amount}
                    onChange={setAmount}
                    prefix={symbol}
                    suffix=""
                    sub=""
                    step="500"
                    min="100"
                  />
                  {loan?.hasDp && (
                    <NumInput
                      id="dp"
                      label="Down Payment"
                      value={downPayment}
                      onChange={setDownPayment}
                      prefix={symbol}
                      suffix=""
                      step="500"
                      min="0"
                      sub="optional"
                    />
                  )}
                  <NumInput
                    id="rate"
                    label="Interest Rate"
                    value={nomRate}
                    onChange={setNomRate}
                    suffix="%"
                    prefix=""
                    step="0.05"
                    min="0"
                    sub="nominal annual"
                  />
                  <NumInput
                    id="years"
                    label="Loan Term"
                    value={years}
                    onChange={setYears}
                    suffix="yrs"
                    prefix=""
                    sub=""
                    step="0.5"
                    min="0.25"
                  />
                </div>

                {/* Visual loan sliders */}
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <Slider
                    id="sl-amount"
                    label="Loan Amount"
                    value={Math.min(amount, 1000000)}
                    onChange={setAmount}
                    min={1000}
                    max={
                      activeType === "mortgage"
                        ? 1000000
                        : activeType === "auto"
                          ? 100000
                          : 100000
                    }
                    step={activeType === "mortgage" ? 5000 : 500}
                    format={(v: number) => fmtShort(v)}
                  />
                  <Slider
                    id="sl-rate"
                    label="Interest Rate"
                    value={nomRate}
                    onChange={setNomRate}
                    min={0.5}
                    max={36}
                    step={0.05}
                    format={(v: number) => v.toFixed(2) + "%"}
                  />
                  <Slider
                    id="sl-term"
                    label="Loan Term"
                    value={years}
                    onChange={setYears}
                    min={0.25}
                    max={30}
                    step={0.25}
                    format={(v: number) => v + " yr"}
                  />
                </div>

                {/* Principal display */}
                {loan?.hasDp && downPayment > 0 && (
                  <div className="flex items-center justify-between text-xs px-3 py-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/40">
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                      Financed (principal)
                    </span>
                    <span className="font-bold text-indigo-700 dark:text-indigo-300 tabular-nums">
                      {fmt(principal, 0)}
                    </span>
                  </div>
                )}
              </div>
            </SectionCard>

            {/* Fees & Costs */}
            <SectionCard>
              <SectionHead
                icon="📋"
                title="Fees & Closing Costs"
                color="amber"
              />
              <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="origfee"
                    label="Origination Fee"
                    value={origFee}
                    onChange={setOrigFee}
                    prefix={symbol}
                    suffix=""
                    step="50"
                    min="0"
                    sub="lender charge"
                  />
                  <NumInput
                    id="points"
                    label="Discount Points"
                    value={points}
                    onChange={setPoints}
                    suffix="%"
                    prefix=""
                    step="0.125"
                    min="0"
                    sub="of principal"
                  />
                  <NumInput
                    id="closing"
                    label="Closing Costs"
                    value={closing}
                    onChange={setClosing}
                    prefix={symbol}
                    suffix=""
                    step="100"
                    min="0"
                    sub="appraisal, title…"
                  />
                  {loan?.hasPMI && (
                    <NumInput
                      id="pmi"
                      label="PMI"
                      value={pmi}
                      onChange={setPmi}
                      prefix={symbol}
                      suffix=""
                      step="10"
                      min="0"
                      sub="monthly insurance"
                    />
                  )}
                </div>

                {/* Fee breakdown bar */}
                {totalFees > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                      <span>Upfront fees total</span>
                      <span className="text-amber-600 dark:text-amber-400 font-bold tabular-nums">
                        {fmt(totalFees, 0)}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-50 dark:bg-slate-900 overflow-hidden">
                      {[
                        { val: origFee, color: "bg-amber-400" },
                        { val: pointsFee, color: "bg-amber-600" },
                        {
                          val: closing,
                          color: "bg-amber-200 dark:bg-amber-800",
                        },
                      ].reduce((acc: React.ReactElement[], item, i) => {
                        const segments = [...acc];
                        if (item.val > 0) {
                          const pct = (item.val / totalFees) * 100;
                          segments.push(
                            <div
                              key={i}
                              className={`h-full ${item.color} float-left`}
                              style={{ width: `${pct}%` }}
                            />,
                          );
                        }
                        return segments;
                      }, [])}
                    </div>
                    <div className="flex gap-4 mt-1.5 flex-wrap">
                      {[
                        {
                          label: "Origination",
                          val: origFee,
                          color: "bg-amber-400",
                        },
                        {
                          label: "Points",
                          val: pointsFee,
                          color: "bg-amber-600",
                        },
                        {
                          label: "Closing",
                          val: closing,
                          color: "bg-amber-200 dark:bg-amber-700",
                        },
                      ]
                        .filter((f) => f.val > 0)
                        .map(({ label, val, color }) => (
                          <div
                            key={label}
                            className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400"
                          >
                            <span className={`w-2 h-2 rounded-sm ${color}`} />
                            {label}: {fmt(val, 0)}
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </SectionCard>

            {/* APR rate comparison mini-table */}
            <SectionCard>
              <SectionHead icon="📊" title="Rate Comparison" color="emerald" />
              <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <StatPill
                    label="Nominal Rate"
                    value={fmtPct(nomRate, 2)}
                    sub="as advertised"
                  />
                  <StatPill
                    label="True APR"
                    value={fmtPct(apr)}
                    sub="with all fees"
                    accent
                  />
                  <StatPill
                    label="APR Difference"
                    value={"+" + aprDiff.toFixed(3) + "%"}
                    sub="fee impact"
                  />
                </div>
                {aprDiff > 0.1 && (
                  <div className="mt-3 flex items-start gap-2.5 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50">
                    <span className="text-amber-500 text-base flex-shrink-0 mt-px">
                      ⚠
                    </span>
                    <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                      Upfront fees of <strong>{fmt(totalFees, 0)}</strong> raise
                      your effective cost from{" "}
                      <strong>{fmtPct(nomRate, 2)}</strong> to{" "}
                      <strong>{fmtPct(apr)}</strong>. Always compare APR — not
                      just the stated rate — when evaluating loan offers.
                    </p>
                  </div>
                )}
              </div>
            </SectionCard>
          </div>

          {/* RIGHT — Results */}
          <div className="space-y-4">
            {/* Hero result card */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-5 text-white shadow-xl shadow-indigo-200 dark:shadow-indigo-950">
              <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-1">
                Monthly Payment
              </div>
              <div className="text-4xl font-bold tabular-nums tracking-tight mb-0.5">
                {fmt(fullPayment)}
              </div>
              {monthlyPmi > 0 && (
                <div className="text-indigo-200 text-xs">
                  incl. {fmt(monthlyPmi, 0)}/mo PMI · base {fmt(payment)}
                </div>
              )}
              <div className="text-indigo-200 text-xs">
                {months} payments · {years} {years === 1 ? "year" : "years"}
              </div>

              <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                    APR
                  </div>
                  <div className="text-2xl font-bold tabular-nums">
                    {fmtPct(apr, 2)}
                  </div>
                  {aprDiff > 0.005 && (
                    <div className="text-indigo-200 text-[10px]">
                      +{aprDiff.toFixed(2)}% vs rate
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                    Total Interest
                  </div>
                  <div className="text-2xl font-bold tabular-nums">
                    {fmtShort(totalInterest)}
                  </div>
                  <div className="text-indigo-200 text-[10px]">
                    {((totalInterest / principal) * 100).toFixed(1)}% of
                    principal
                  </div>
                </div>
              </div>
            </div>

            {/* Donut cost breakdown */}
            <SectionCard>
              <SectionHead
                icon="🥧"
                title="Total Cost Breakdown"
                color="indigo"
              />
              <div className="p-5">
                <DonutChart
                  principal={principal}
                  interest={totalInterest}
                  fees={totalFees + downPayment + totalPmi}
                />
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Grand Total
                  </span>
                  <span className="text-base font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                    {fmt(totalPaid, 0)}
                  </span>
                </div>
              </div>
            </SectionCard>

            {/* Key financial metrics */}
            <SectionCard>
              <SectionHead icon="📐" title="Loan Metrics" color="emerald" />
              <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {[
                  { label: "Amount Financed", value: fmt(Math.max(0, principal - totalFees), 0) },
                  { label: "Principal", value: fmt(principal, 0) },
                  {
                    label: "Monthly Rate",
                    value: (effectiveMo * 100).toFixed(4) + "%",
                  },
                  { label: "Total Payments", value: months.toLocaleString() },
                  { label: "Upfront Fees", value: fmt(totalFees, 0) },
                  { label: "Total PMI", value: fmt(totalPmi, 0) },
                  {
                    label: "Interest-to-Principal",
                    value:
                      ((totalInterest / Math.max(1, principal)) * 100).toFixed(
                        1,
                      ) + "%",
                  },
                  { label: "Total Paid", value: fmt(totalPaid, 0), bold: true },
                ].filter(item => item.label !== "Total PMI" || totalPmi > 0).map(({ label, value, bold }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center px-5 py-2.5 text-sm"
                  >
                    <span className="text-slate-500 dark:text-slate-400">
                      {label}
                    </span>
                    <span
                      className={
                        bold
                          ? "font-bold text-indigo-600 dark:text-indigo-400 tabular-nums"
                          : "font-semibold text-slate-800 dark:text-slate-100 tabular-nums"
                      }
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>

        {/* ── Amortization ─────────────────────────────────────────── */}
        <div className="mt-5">
          <button
            onClick={() => setShowAmort((v) => !v)}
            aria-expanded={showAmort}
            className="w-full flex items-center justify-between px-5 py-3.5 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800/80 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span className="flex items-center gap-2">
              <span className="text-indigo-500">◈</span>
              Amortization Schedule
              <span className="text-xs font-normal text-slate-400">
                ({months} payments)
              </span>
            </span>
            <span
              className={`text-slate-400 text-xs transition-transform duration-200 ${showAmort ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>

          {showAmort && (
            <div className="mt-2 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-slate-100 dark:border-slate-800/60">
                {[
                  { key: "chart", label: "Bar Chart" },
                  { key: "table", label: "Payment Table" },
                  { key: "summary", label: "Yearly Summary" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setAmortTab(key)}
                    role="tab"
                    aria-selected={amortTab === key}
                    className={`flex-1 px-4 py-3 text-xs font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500 ${
                      amortTab === key
                        ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500 bg-indigo-50/60 dark:bg-indigo-900/15"
                        : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/40"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Chart */}
              {amortTab === "chart" && (
                <div className="p-5">
                  <YearlyChart amort={amort} />
                  <p className="mt-3 text-xs text-slate-400 dark:text-slate-400 italic">
                    Hover bars for annual totals. In the early years, most of
                    each payment covers interest — this flips over time.
                  </p>
                </div>
              )}

              {/* Table */}
              {amortTab === "table" && (
                <div className="overflow-auto max-h-80">
                  <table className="w-full text-xs min-w-[520px]">
                    <thead className="sticky top-0 bg-slate-50 dark:bg-slate-900/70">
                      <tr>
                        {[
                          "Mo",
                          "Payment",
                          "Principal",
                          "Interest",
                          totalPmi > 0 ? "PMI" : null,
                          "Balance",
                        ].filter(Boolean).map((h, i) => (
                          <th
                            key={h as string}
                            className={`px-4 py-2.5 font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase text-[10px] ${i === 0 ? "text-left" : "text-right"}`}
                          >
                            {h as string}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                      {amort.map((row, i) => (
                        <tr
                          key={row.month}
                          className={
                            i % 2 === 1
                              ? "bg-slate-50/60 dark:bg-slate-900/20"
                              : ""
                          }
                        >
                          <td className="px-4 py-2 text-left text-slate-400">
                            {row.month}
                          </td>
                          <td className="px-4 py-2 text-right font-medium text-slate-800 dark:text-slate-100 tabular-nums">
                            {fmt(row.payment)}
                          </td>
                          <td className="px-4 py-2 text-right text-indigo-600 dark:text-indigo-400 tabular-nums">
                            {fmt(row.principal)}
                          </td>
                          <td className="px-4 py-2 text-right text-rose-500 dark:text-rose-400 tabular-nums">
                            {fmt(row.interest)}
                          </td>
                          {totalPmi > 0 && (
                            <td className="px-4 py-2 text-right text-amber-500 dark:text-amber-400 tabular-nums">
                              {fmt(row.pmi)}
                            </td>
                          )}
                          <td className="px-4 py-2 text-right text-slate-800 dark:text-slate-400 tabular-nums">
                            {fmt(row.balance)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Yearly summary */}
              {amortTab === "summary" && (
                <div className="overflow-auto max-h-80">
                  <table className="w-full text-xs min-w-[480px]">
                    <thead className="sticky top-0 bg-slate-50 dark:bg-slate-900/70">
                      <tr>
                        {[
                          "Year",
                          "Total Paid",
                          "Principal",
                          "Interest",
                          totalPmi > 0 ? "PMI" : null,
                          "Balance",
                        ].filter(Boolean).map((h, i) => (
                          <th
                            key={h as string}
                            className={`px-4 py-2.5 font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase text-[10px] ${i === 0 ? "text-left" : "text-right"}`}
                          >
                            {h as string}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                      {(() => {
                        const yrMap: Record<number, { p: number; i: number; bal: number; pmt: number; pmi: number }> = {};
                        amort.forEach((r) => {
                          if (!yrMap[r.year])
                            yrMap[r.year] = { p: 0, i: 0, bal: 0, pmt: 0, pmi: 0 };
                          yrMap[r.year].p += r.principal;
                          yrMap[r.year].i += r.interest;
                          yrMap[r.year].bal = r.balance;
                          yrMap[r.year].pmt += r.payment;
                          yrMap[r.year].pmi += r.pmi;
                        });
                        return Object.entries(yrMap).map(([yr, d], idx) => (
                          <tr
                            key={yr}
                            className={
                              idx % 2 === 1
                                ? "bg-slate-50/60 dark:bg-slate-900/20"
                                : ""
                            }
                          >
                            <td className="px-4 py-2 text-left font-semibold text-slate-800 dark:text-slate-100">
                              Year {yr}
                            </td>
                            <td className="px-4 py-2 text-right font-medium text-slate-800 dark:text-slate-100 tabular-nums">
                              {fmt(d.pmt, 0)}
                            </td>
                            <td className="px-4 py-2 text-right text-indigo-600 dark:text-indigo-400 tabular-nums">
                              {fmt(d.p, 0)}
                            </td>
                            <td className="px-4 py-2 text-right text-rose-500 dark:text-rose-400 tabular-nums">
                              {fmt(d.i, 0)}
                            </td>
                            {totalPmi > 0 && (
                              <td className="px-4 py-2 text-right text-amber-500 dark:text-amber-400 tabular-nums">
                                {fmt(d.pmi, 0)}
                              </td>
                            )}
                            <td className="px-4 py-2 text-right text-slate-500 dark:text-slate-400 tabular-nums">
                              {fmt(d.bal, 0)}
                            </td>
                          </tr>
                        ));
                      })()}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Disclaimer ───────────────────────────────────────────── */}
        <footer className="mt-6 px-5 py-4 bg-slate-50/60 dark:bg-slate-900/40 rounded-2xl border border-slate-200/60 dark:border-slate-800">
          <p className="text-[11px] text-slate-400 dark:text-slate-400 leading-relaxed">
            <strong className="text-slate-500 dark:text-slate-400 font-semibold">
              Disclaimer:
            </strong>{" "}
            For educational use only. Not financial advice. Calculations assume
            fixed monthly payments and upfront fees, consistent with US Truth in
            Lending Act (TILA / Regulation Z). Actual APR may vary. Consult a
            licensed financial professional before borrowing.
          </p>
        </footer>
      
        <CalculatorActions
          calculatorId="apr-calculator"
          calculatorName="A P R Calculator"
          inputData={{ activeType, amount, downPayment, nomRate, years, origFee, points, closing, pmi, showAmort }}
          resultData={{}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}