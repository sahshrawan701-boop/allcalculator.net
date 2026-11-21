"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import CalculatorActions from "@/components/CalculatorActions";
import Link from "next/link";
import { useCurrency } from "@/hooks/useCurrency";

// ─── Shared Components ────────────────────────────────────────────────────────

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  sub?: string;
}

function Label({ children, htmlFor, sub }: LabelProps) {
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

interface NumInputProps {
  id: string;
  label: string;
  sub?: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
  min?: string;
  max?: string;
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
  max,
}: NumInputProps) {
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
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            if (!isNaN(v)) onChange(v);
          }}
          className={`w-full h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 hover:border-slate-200 dark:hover:border-slate-600 ${prefix ? "pl-8" : "pl-3"} ${suffix ? "pr-10" : "pr-3"}`}
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

interface SliderProps {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format?: (v: number) => string;
}

function Slider({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: SliderProps) {
  const raw = Math.min(Math.max(value, min), max);
  const pct = max > min ? ((raw - min) / (max - min)) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5">
        <Label htmlFor={id}>{label}</Label>
        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
          {format ? format(raw) : raw}
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
          value={raw}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-valuenow={raw}
          aria-valuemin={min}
          aria-valuemax={max}
        />
        <div
          className="absolute w-4 h-4 rounded-full bg-indigo-500 shadow-md border-2 border-white dark:border-slate-900 pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
    </div>
  );
}

interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
}

function SectionCard({ children, className = "" }: SectionCardProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

type SectionHeadColor = "indigo" | "amber" | "emerald" | "violet";

interface SectionHeadProps {
  icon: string;
  title: string;
  color?: SectionHeadColor;
}

function SectionHead({ icon, title, color = "indigo" }: SectionHeadProps) {
  const colors: Record<SectionHeadColor, string> = {
    indigo:
      "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
    amber:
      "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    emerald:
      "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    violet:
      "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400",
  };
  return (
    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-100 dark:border-slate-800/60">
      <span
        className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${colors[color]}`}
      >
        {icon}
      </span>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        {title}
      </span>
    </div>
  );
}

interface StatPillProps {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}

function StatPill({ label, value, sub, accent = false }: StatPillProps) {
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

interface PremiumDonutProps {
  principal: number;
  interest: number;
  taxes: number;
  fees: number;
}

function PremiumDonut({ principal, interest, taxes, fees }: PremiumDonutProps) {
  const { fmt, fmtShort } = useCurrency();
  const total = principal + interest + taxes + fees;
  if (total <= 0) return null;
  const p1 = (principal / total) * 100;
  const p2 = (interest / total) * 100;
  const p3 = (taxes / total) * 100;
  const p4 = (fees / total) * 100;

  const r = 54;
  const circ = 2 * Math.PI * r;
  const gap = 1.5;
  const d1 = (p1 / 100) * circ;
  const d2 = (p2 / 100) * circ;
  const d3 = (p3 / 100) * circ;
  const d4 = (p4 / 100) * circ;

  const off1 = 0;
  const off2 = -(d1 + gap * 1.5);
  const off3 = -(d1 + d2 + gap * 2.5);
  const off4 = -(d1 + d2 + d3 + gap * 3.5);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-5">
      <div
        className="relative flex-shrink-0"
        style={{ width: 140, height: 140 }}
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
              strokeDasharray={`${d1 - gap} ${circ - d1 + gap}`}
              strokeDashoffset={off1}
            />
          )}
          {p2 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#10b981"
              strokeWidth="14"
              strokeDasharray={`${d2 - gap} ${circ - d2 + gap}`}
              strokeDashoffset={off2}
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
              strokeDasharray={`${d3 - gap} ${circ - d3 + gap}`}
              strokeDashoffset={off3}
            />
          )}
          {p4 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="14"
              strokeDasharray={`${d4 - gap} ${circ - d4 + gap}`}
              strokeDashoffset={off4}
            />
          )}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Total Cost
          </span>
          <span className="text-base font-bold text-slate-800 dark:text-slate-100 tabular-nums">
            {fmtShort(total)}
          </span>
        </div>
      </div>
      <div className="space-y-3 flex-1 min-w-0 w-full">
        {[
          {
            color: "bg-indigo-500",
            label: "Vehicle Cost",
            val: principal,
            pct: p1,
          },
          {
            color: "bg-emerald-500",
            label: "Total Interest",
            val: interest,
            pct: p2,
          },
          { color: "bg-amber-400", label: "Sales Tax", val: taxes, pct: p3 },
          { color: "bg-violet-500", label: "Total Fees", val: fees, pct: p4 },
        ]
          .filter((x) => x.pct > 0)
          .map(({ color, label, val, pct }) => (
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

// ─── AMORTIZATION TABLE ───────────────────────────────────────────────────────
interface AmortRow {
  num: number;
  date: string;
  begBal: number;
  payment: number;
  principal: number;
  interest: number;
  extra: number;
  endBal: number;
  cumInt: number;
  cumPrin: number;
}

function AmortTable({ schedule }: { schedule: AmortRow[] }) {
  const { fmt } = useCurrency();
  const [page, setPage] = useState(0);
  const PAGE = 12;
  const total = schedule.length;
  const rows = schedule.slice(page * PAGE, page * PAGE + PAGE);

  return (
    <div className="mt-6">
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              {[
                "#",
                "Date",
                "Beginning Bal",
                "Payment",
                "Principal",
                "Interest",
                "Ending Bal",
                "Cum. Interest",
              ].map((h) => (
                <th
                  key={h}
                  className="py-3 px-4 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400 whitespace-nowrap text-right first:text-left"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {rows.map((r) => (
              <tr
                key={r.num}
                className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
              >
                <td className="py-3 px-4 text-xs text-slate-500 dark:text-slate-400 text-left">
                  {r.num}
                </td>
                <td className="py-3 px-4 text-xs text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap text-right">
                  {r.date}
                </td>
                <td className="py-3 px-4 text-xs text-slate-700 dark:text-slate-200 tabular-nums text-right">
                  {fmt(r.begBal)}
                </td>
                <td className="py-3 px-4 text-xs font-semibold text-indigo-600 dark:text-indigo-400 tabular-nums text-right">
                  {fmt(r.payment)}
                </td>
                <td className="py-3 px-4 text-xs text-emerald-600 dark:text-emerald-400 tabular-nums text-right">
                  {fmt(r.principal)}
                </td>
                <td className="py-3 px-4 text-xs text-amber-600 dark:text-amber-400 tabular-nums text-right">
                  {fmt(r.interest)}
                </td>
                <td className="py-3 px-4 text-xs text-slate-700 dark:text-slate-200 tabular-nums text-right">
                  {fmt(r.endBal)}
                </td>
                <td className="py-3 px-4 text-xs text-slate-500 dark:text-slate-400 tabular-nums text-right">
                  {fmt(r.cumInt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4 px-2">
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          Showing {page * PAGE + 1}–{Math.min((page + 1) * PAGE, total)} of{" "}
          {total} payments
        </span>
        <div className="flex gap-2">
          <button
            disabled={page === 0}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Prev
          </button>
          <button
            disabled={(page + 1) * PAGE >= total}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function AutoLoanCalculator() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.vehiclePrice !== undefined) setVehiclePrice(data.vehiclePrice);
          if (data.downPayment !== undefined) setDownPayment(data.downPayment);
          if (data.tradeInValue !== undefined) setTradeInValue(data.tradeInValue);
          if (data.tradeInBalance !== undefined) setTradeInBalance(data.tradeInBalance);
          if (data.tradeInTaxDeductible !== undefined) setTradeInTaxDeductible(data.tradeInTaxDeductible);
          if (data.rebate !== undefined) setRebate(data.rebate);
          if (data.salesTaxRate !== undefined) setSalesTaxRate(data.salesTaxRate);
          if (data.docFee !== undefined) setDocFee(data.docFee);
          if (data.titleFee !== undefined) setTitleFee(data.titleFee);
          if (data.regFee !== undefined) setRegFee(data.regFee);
          if (data.gapInsurance !== undefined) setGapInsurance(data.gapInsurance);
          if (data.extWarranty !== undefined) setExtWarranty(data.extWarranty);
          if (data.apr !== undefined) setApr(data.apr);
          if (data.termMonths !== undefined) setTermMonths(data.termMonths);
          if (data.extraMonthly !== undefined) setExtraMonthly(data.extraMonthly);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();

  const [vehiclePrice, setVehiclePrice] = useState(42000);
  const [downPayment, setDownPayment] = useState(8000);
  const [tradeInValue, setTradeInValue] = useState(6000);
  const [tradeInBalance, setTradeInBalance] = useState(2500);
  const [tradeInTaxDeductible, setTradeInTaxDeductible] = useState(true);
  const [rebate, setRebate] = useState(1500);
  const [salesTaxRate, setSalesTaxRate] = useState(8.5);
  const [docFee, setDocFee] = useState(499);
  const [titleFee, setTitleFee] = useState(75);
  const [regFee, setRegFee] = useState(250);
  const [gapInsurance, setGapInsurance] = useState(0);
  const [extWarranty, setExtWarranty] = useState(0);
  const [apr, setApr] = useState(6.9);
  const [termMonths, setTermMonths] = useState(60);
  const [extraMonthly, setExtraMonthly] = useState(0);
  const [activeTab, setActiveTab] = useState<"summary" | "amort">("summary");

  const result = useMemo(() => {
    const netTradeEquity = tradeInValue - tradeInBalance;

    // US Sales Tax nuance: Is Trade-In tax deductible?
    const taxableAmount = tradeInTaxDeductible
      ? Math.max(0, vehiclePrice - tradeInValue)
      : vehiclePrice;
    const taxAmount = taxableAmount * (salesTaxRate / 100);

    const totalFees = docFee + titleFee + regFee + gapInsurance + extWarranty;
    const loanAmount = Math.max(
      0,
      vehiclePrice -
        downPayment -
        Math.max(0, netTradeEquity) -
        rebate +
        taxAmount +
        totalFees -
        Math.min(0, netTradeEquity),
    );

    const r = apr / 100 / 12;
    const n = termMonths;
    const baseMonthly =
      r === 0
        ? loanAmount / n
        : (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    const schedule: AmortRow[] = [];
    let bal = loanAmount;
    let cumInt = 0,
      cumPrin = 0;
    const startDate = new Date();
    let paymentNum = 0;
    let effectivePayoff = 0;

    while (bal > 0.01 && paymentNum < 360) {
      paymentNum++;
      const intCharge = bal * r;
      let prin = Math.min(bal, baseMonthly - intCharge + extraMonthly);
      if (prin < 0) prin = 0;
      const payment = Math.min(bal + intCharge, baseMonthly + extraMonthly);
      const endBal = Math.max(0, bal - prin);
      cumInt += intCharge;
      cumPrin += prin;

      const d = new Date(startDate);
      d.setMonth(d.getMonth() + paymentNum);

      schedule.push({
        num: paymentNum,
        date: d.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        }),
        begBal: bal,
        payment,
        principal: prin,
        interest: intCharge,
        extra: extraMonthly,
        endBal,
        cumInt,
        cumPrin,
      });
      bal = endBal;
      effectivePayoff = paymentNum;
      if (bal <= 0.01) break;
    }

    const totalPayments = schedule.reduce((s, r) => s + r.payment, 0);
    const totalInterest = schedule.reduce((s, r) => s + r.interest, 0);
    const payoffD = new Date(startDate);
    payoffD.setMonth(payoffD.getMonth() + effectivePayoff);
    const payoffDate = payoffD.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    return {
      loanAmount,
      taxAmount,
      totalFees,
      monthlyPayment: baseMonthly,
      totalPayments,
      totalInterest,
      payoffDate,
      effectivePayoff,
      schedule,
      netTradeEquity,
    };
  }, [
    vehiclePrice,
    downPayment,
    tradeInValue,
    tradeInBalance,
    tradeInTaxDeductible,
    rebate,
    salesTaxRate,
    docFee,
    titleFee,
    regFee,
    gapInsurance,
    extWarranty,
    apr,
    termMonths,
    extraMonthly,
  ]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* ── LEFT: Inputs ── */}
          <div className="space-y-4">
            {/* Vehicle Details */}
            <SectionCard>
              <SectionHead icon="🚗" title="Vehicle Details" color="indigo" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="vehiclePrice"
                    label="Vehicle Price"
                    value={vehiclePrice}
                    onChange={setVehiclePrice}
                    prefix={symbol}
                    min="0"
                  />
                  <NumInput
                    id="rebate"
                    label="Dealer Rebates"
                    value={rebate}
                    onChange={setRebate}
                    prefix={symbol}
                    min="0"
                  />
                </div>
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <Slider
                    id="sl-price"
                    label="Vehicle Price"
                    value={vehiclePrice}
                    onChange={setVehiclePrice}
                    min={5000}
                    max={150000}
                    step={1000}
                    format={(v) => fmt(v, 0)}
                  />
                </div>
              </div>
            </SectionCard>

            {/* Financing */}
            <SectionCard>
              <SectionHead icon="💳" title="Financing" color="emerald" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="downPayment"
                    label="Down Payment"
                    value={downPayment}
                    onChange={setDownPayment}
                    prefix={symbol}
                    min="0"
                  />
                  <NumInput
                    id="apr"
                    label="Interest Rate (APR)"
                    value={apr}
                    onChange={setApr}
                    suffix="%"
                    min="0"
                    step="0.1"
                  />
                </div>
                <div>
                  <Label htmlFor="termMonths">Loan Term</Label>
                  <select
                    id="termMonths"
                    value={termMonths}
                    onChange={(e) => setTermMonths(Number(e.target.value))}
                    className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                  >
                    {[24, 36, 48, 60, 72, 84, 96].map((t) => (
                      <option key={t} value={t}>
                        {t} Months
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <Slider
                    id="sl-down"
                    label="Down Payment"
                    value={downPayment}
                    onChange={setDownPayment}
                    min={0}
                    max={vehiclePrice}
                    step={500}
                    format={(v) => fmt(v, 0)}
                  />
                  <Slider
                    id="sl-apr"
                    label="APR"
                    value={apr}
                    onChange={setApr}
                    min={0}
                    max={25}
                    step={0.1}
                    format={(v) => v.toFixed(1) + "%"}
                  />
                </div>
              </div>
            </SectionCard>

            {/* Trade-In */}
            <SectionCard>
              <SectionHead icon="🔄" title="Trade-In" color="amber" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="tradeInValue"
                    label="Trade-In Value"
                    value={tradeInValue}
                    onChange={setTradeInValue}
                    prefix={symbol}
                    min="0"
                  />
                  <NumInput
                    id="tradeInBalance"
                    label="Outstanding Balance"
                    value={tradeInBalance}
                    onChange={setTradeInBalance}
                    prefix={symbol}
                    min="0"
                    sub="(Amount Owed)"
                  />
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="taxDeductible"
                    checked={tradeInTaxDeductible}
                    onChange={(e) => setTradeInTaxDeductible(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500 dark:border-slate-700 dark:bg-slate-900"
                  />
                  <Label htmlFor="taxDeductible">
                    Trade-In is Tax Deductible
                  </Label>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0 pt-0">
                  Most US states deduct your trade-in value from the vehicle
                  price before calculating sales tax. Uncheck if your state
                  (e.g. CA, VA) does not allow this.
                </p>
              </div>
            </SectionCard>

            {/* Taxes & Fees */}
            <SectionCard>
              <SectionHead icon="📋" title="Taxes & Fees" color="violet" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="salesTaxRate"
                    label="Sales Tax Rate"
                    value={salesTaxRate}
                    onChange={setSalesTaxRate}
                    suffix="%"
                    min="0"
                    step="0.1"
                  />
                  <NumInput
                    id="docFee"
                    label="Doc Fee"
                    value={docFee}
                    onChange={setDocFee}
                    prefix={symbol}
                    min="0"
                  />
                  <NumInput
                    id="titleFee"
                    label="Title/Reg Fees"
                    value={titleFee + regFee}
                    onChange={(v) => {
                      setTitleFee(v / 2);
                      setRegFee(v / 2);
                    }}
                    prefix={symbol}
                    min="0"
                  />
                  <NumInput
                    id="gapInsurance"
                    label="GAP Insurance / Ext. Warranty"
                    value={gapInsurance + extWarranty}
                    onChange={(v) => {
                      setGapInsurance(v / 2);
                      setExtWarranty(v / 2);
                    }}
                    prefix={symbol}
                    min="0"
                  />
                </div>
              </div>
            </SectionCard>

            {/* Extra Payments */}
            <SectionCard>
              <SectionHead icon="⏱️" title="Extra Payments" color="emerald" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="extraMonthly"
                    label="Extra Monthly Payment"
                    value={extraMonthly}
                    onChange={setExtraMonthly}
                    prefix={symbol}
                    min="0"
                  />
                </div>
              </div>
            </SectionCard>
          </div>

          {/* ── RIGHT: Results ── */}
          <div className="space-y-5">
            <SectionCard className="border-indigo-500/20 dark:border-indigo-400/20">
              <div className="bg-indigo-600 dark:bg-indigo-900/60 p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-200 mb-1">
                  Estimated Monthly Payment
                </div>
                <div className="text-4xl font-black tabular-nums tracking-tight mb-4">
                  {fmt(result.monthlyPayment)}
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-indigo-500 dark:border-indigo-800/60">
                  <div>
                    <div className="text-[10px] text-indigo-200 uppercase font-semibold">
                      Amount Financed
                    </div>
                    <div className="font-bold tabular-nums">
                      {fmt(result.loanAmount)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-indigo-200 uppercase font-semibold">
                      Payoff Date
                    </div>
                    <div className="font-bold">{result.payoffDate}</div>
                  </div>
                </div>
              </div>
              <PremiumDonut
                principal={vehiclePrice}
                interest={result.totalInterest}
                taxes={result.taxAmount}
                fees={result.totalFees}
              />
            </SectionCard>

            <div className="grid grid-cols-2 gap-3">
              <StatPill
                label="Total Interest"
                value={fmt(result.totalInterest, 0)}
                accent
              />
              <StatPill label="Total Taxes" value={fmt(result.taxAmount, 0)} />
              <StatPill
                label="Net Trade Equity"
                value={
                  (result.netTradeEquity >= 0 ? "+" : "-") +
                  fmt(Math.abs(result.netTradeEquity), 0)
                }
              />
              <StatPill
                label="Total Cost"
                value={fmt(
                  vehiclePrice +
                    result.totalInterest +
                    result.taxAmount +
                    result.totalFees,
                  0,
                )}
              />
            </div>

            <footer className="px-5 py-4 bg-slate-50/60 dark:bg-slate-900/40 rounded-2xl border border-slate-200/60 dark:border-slate-800">
              <p className="text-[11px] text-slate-400 dark:text-slate-400 leading-relaxed">
                <strong className="text-slate-500 dark:text-slate-400 font-semibold">
                  Note:
                </strong>{" "}
                Calculations are strictly estimates. Your actual APR, term, and
                down payment requirements will depend on your credit score and
                the lender's policies. State tax rules (like trade-in
                deductibility) vary heavily.
              </p>
            </footer>
          </div>
        </div>

        {/* ── TABS FOR AMORTIZATION ── */}
        <div className="mt-8">
          <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab("summary")}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "summary"
                  ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Summary
            </button>
            <button
              onClick={() => setActiveTab("amort")}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "amort"
                  ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Amortization Schedule
            </button>
          </div>

          <div className="py-6">
            {activeTab === "summary" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SectionCard>
                  <SectionHead
                    icon="📊"
                    title="Payment Breakdown"
                    color="indigo"
                  />
                  <div className="p-5">
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">
                          Vehicle Price
                        </span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {fmt(vehiclePrice)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-emerald-600 dark:text-emerald-400">
                        <span>Down Payment</span>
                        <span className="font-semibold">
                          - {fmt(downPayment)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-emerald-600 dark:text-emerald-400">
                        <span>Dealer Rebates</span>
                        <span className="font-semibold">- {fmt(rebate)}</span>
                      </div>
                      <div
                        className={`flex justify-between text-sm ${result.netTradeEquity >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}
                      >
                        <span>Net Trade Equity</span>
                        <span className="font-semibold">
                          {result.netTradeEquity >= 0 ? "- " : "+ "}
                          {fmt(Math.abs(result.netTradeEquity))}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-amber-600 dark:text-amber-400">
                        <span>Taxes & Fees</span>
                        <span className="font-semibold">
                          + {fmt(result.taxAmount + result.totalFees)}
                        </span>
                      </div>
                      <div className="border-t border-slate-200 dark:border-slate-800 pt-3 flex justify-between text-sm font-bold text-slate-800 dark:text-slate-200">
                        <span>Amount Financed</span>
                        <span>{fmt(result.loanAmount)}</span>
                      </div>
                    </div>
                  </div>
                </SectionCard>

                <SectionCard>
                  <SectionHead
                    icon="💡"
                    title="Interest Insights"
                    color="amber"
                  />
                  <div className="p-5 space-y-4">
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Over the life of this{" "}
                      <span className="font-semibold">{termMonths}-month</span>{" "}
                      loan, you will pay{" "}
                      <span className="font-semibold text-rose-500">
                        {fmt(result.totalInterest)}
                      </span>{" "}
                      in interest.
                    </p>
                    {extraMonthly > 0 && (
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        By paying an extra{" "}
                        <span className="font-semibold text-emerald-500">
                          {fmt(extraMonthly)}
                        </span>{" "}
                        per month, you are paying off the loan in{" "}
                        <span className="font-semibold">
                          {result.effectivePayoff} months
                        </span>{" "}
                        instead of {termMonths} months.
                      </p>
                    )}
                    {result.netTradeEquity < 0 && (
                      <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-4 border border-rose-100 dark:border-rose-900/30">
                        <p className="text-xs text-rose-700 dark:text-rose-300 font-medium">
                          <strong>Negative Equity Warning:</strong> You have{" "}
                          {fmt(Math.abs(result.netTradeEquity))} of negative
                          equity on your trade-in, which is being rolled into
                          your new loan, increasing your amount financed and
                          monthly payment.
                        </p>
                      </div>
                    )}
                  </div>
                </SectionCard>
              </div>
            )}
            {activeTab === "amort" && <AmortTable schedule={result.schedule} />}
          </div>
        </div>
      
        <CalculatorActions
          calculatorId="car-loan-calculator"
          calculatorName="Auto Loan Calculator"
          inputData={{ vehiclePrice, downPayment, tradeInValue, tradeInBalance, tradeInTaxDeductible, rebate, salesTaxRate, docFee, titleFee, regFee, gapInsurance, extWarranty, apr, termMonths, extraMonthly }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}