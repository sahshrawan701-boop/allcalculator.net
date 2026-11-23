"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import CalculatorActions from "@/components/CalculatorActions";
import { useCurrency } from "@/hooks/useCurrency";

// ─── Shared Input Components ──────────────────────────────────────────────────

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

function Label({ children, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
    >
      {children}
    </label>
  );
}

interface NumInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
  min?: string;
  max?: string;
  placeholder?: string;
}

function NumInput({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  step = "any",
  min = "0",
  max,
  placeholder,
}: NumInputProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative group">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-sm font-semibold text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors">
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
          placeholder={placeholder}
          value={isNaN(value) ? "" : value}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            onChange(isNaN(v) ? 0 : v);
          }}
          className={`w-full h-10.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 text-sm font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all duration-200 focus:bg-white dark:focus:bg-slate-850 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 ${
            prefix ? "pl-8" : "pl-3.5"
          } ${suffix ? (suffix.length > 2 ? "pr-16" : "pr-10") : "pr-3.5"}`}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-xs font-semibold text-slate-400 dark:text-slate-500 group-focus-within:text-indigo-600 dark:group-focus-within:text-indigo-400 transition-colors">
            {suffix}
          </span>
        )}
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
      className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

type SectionHeadColor = "indigo" | "amber" | "emerald" | "violet";

interface SectionHeadProps {
  iconClass: string;
  title: string;
  badge?: string;
  color?: SectionHeadColor;
}

function SectionHead({
  iconClass,
  title,
  badge,
  color = "indigo",
}: SectionHeadProps) {
  const colors: Record<SectionHeadColor, string> = {
    indigo:
      "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400",
    amber:
      "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400",
    emerald:
      "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400",
    violet:
      "bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400",
  };
  return (
    <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 dark:border-slate-800">
      <div className="flex items-center gap-2.5">
        <span
          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs ${colors[color]}`}
        >
          <i className={`fas ${iconClass}`} aria-hidden="true" />
        </span>
        <span className="text-sm font-bold text-slate-900 dark:text-white">
          {title}
        </span>
      </div>
      {badge && (
        <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
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
      className={`rounded-xl px-4 py-3 border ${
        accent
          ? "bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/60"
          : "bg-slate-50 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800"
      }`}
    >
      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">
        {label}
      </div>
      <div
        className={`text-lg font-bold tabular-nums ${
          accent
            ? "text-indigo-600 dark:text-indigo-400"
            : "text-slate-900 dark:text-white"
        }`}
      >
        {value}
      </div>
      {sub && (
        <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
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
  const [scheduleView, setScheduleView] = useState<"monthly" | "annual">(
    "monthly",
  );

  const annualData = useMemo(() => {
    const years = Math.ceil(schedule.length / 12);
    const result: AmortRow[] = [];
    for (let year = 1; year <= years; year++) {
      const start = (year - 1) * 12;
      const end = Math.min(start + 11, schedule.length - 1);
      if (start >= schedule.length) break;
      const first = schedule[start];
      const last = schedule[end];
      let annPayment = 0;
      let annPrin = 0;
      let annInt = 0;
      for (let i = start; i <= end; i++) {
        annPayment += schedule[i].payment;
        annPrin += schedule[i].principal;
        annInt += schedule[i].interest;
      }
      result.push({
        num: year,
        date: `Year ${year}`,
        begBal: first.begBal,
        payment: annPayment,
        principal: annPrin,
        interest: annInt,
        extra: 0,
        endBal: last.endBal,
        cumInt: last.cumInt,
        cumPrin: last.cumPrin,
      });
    }
    return result;
  }, [schedule]);

  const tableData = scheduleView === "monthly" ? schedule : annualData;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
          Loan Amortization Schedule
        </h4>
        <div className="flex gap-2">
          {(["monthly", "annual"] as const).map((view) => (
            <button
              key={view}
              type="button"
              onClick={() => setScheduleView(view)}
              className={`px-4 py-2 rounded-lg border-2 text-sm font-medium cursor-pointer transition-all min-h-[40px] capitalize ${
                scheduleView === view
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:border-indigo-300"
              }`}
            >
              {view.charAt(0).toUpperCase() + view.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div
        className="overflow-x-auto max-h-[600px] overflow-y-auto mt-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm min-w-0 w-full max-w-full [-webkit-overflow-scrolling:touch]"
      >
        <table className="w-full border-collapse min-w-[640px] text-sm">
          <thead>
            <tr>
              {[
                "Period",
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
                  className="sticky top-0 bg-indigo-700 dark:bg-slate-950 text-white px-3 py-3
                    text-left font-semibold border-r border-slate-300/30 last:border-r-0
                    whitespace-nowrap text-xs tracking-wide z-10"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {tableData.map((item, i) => (
              <tr
                key={`${item.num}-${item.date}-${i}`}
                className="bg-white dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 transition-colors"
              >
                <td className="px-3 py-3 border-r border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-300 whitespace-nowrap text-xs sm:text-sm">
                  {scheduleView === "monthly"
                    ? `Month ${item.num}`
                    : `Year ${item.num}`}
                </td>
                <td className="px-3 py-3 border-r border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-300 whitespace-nowrap text-xs sm:text-sm">
                  {item.date}
                </td>
                <td className="px-3 py-3 border-r border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 whitespace-nowrap tabular-nums text-xs sm:text-sm">
                  {fmt(item.begBal)}
                </td>
                <td className="px-3 py-3 border-r border-b border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold whitespace-nowrap tabular-nums text-xs sm:text-sm">
                  {fmt(item.payment)}
                </td>
                <td className="px-3 py-3 border-r border-b border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 whitespace-nowrap tabular-nums text-xs sm:text-sm">
                  {fmt(item.principal)}
                </td>
                <td className="px-3 py-3 border-r border-b border-slate-200 dark:border-slate-800 text-amber-600 dark:text-amber-400 whitespace-nowrap tabular-nums text-xs sm:text-sm">
                  {fmt(item.interest)}
                </td>
                <td className="px-3 py-3 border-r border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 whitespace-nowrap tabular-nums text-xs sm:text-sm">
                  {fmt(item.endBal)}
                </td>
                <td className="px-3 py-3 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 whitespace-nowrap tabular-nums text-xs sm:text-sm">
                  {fmt(item.cumInt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function AutoLoanCalculator() {
  const resultRef = useRef<HTMLDivElement>(null);
  const { fmt, symbol } = useCurrency();

  // All state declared first to comply with React hook ordering rules
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

  // Read URL query parameters after state is initialized
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get("data");
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          setTimeout(() => {
            if (data.vehiclePrice !== undefined)
              setVehiclePrice(data.vehiclePrice);
            if (data.downPayment !== undefined)
              setDownPayment(data.downPayment);
            if (data.tradeInValue !== undefined)
              setTradeInValue(data.tradeInValue);
            if (data.tradeInBalance !== undefined)
              setTradeInBalance(data.tradeInBalance);
            if (data.tradeInTaxDeductible !== undefined)
              setTradeInTaxDeductible(data.tradeInTaxDeductible);
            if (data.rebate !== undefined) setRebate(data.rebate);
            if (data.salesTaxRate !== undefined)
              setSalesTaxRate(data.salesTaxRate);
            if (data.docFee !== undefined) setDocFee(data.docFee);
            if (data.titleFee !== undefined) setTitleFee(data.titleFee);
            if (data.regFee !== undefined) setRegFee(data.regFee);
            if (data.gapInsurance !== undefined)
              setGapInsurance(data.gapInsurance);
            if (data.extWarranty !== undefined)
              setExtWarranty(data.extWarranty);
            if (data.apr !== undefined) setApr(data.apr);
            if (data.termMonths !== undefined) setTermMonths(data.termMonths);
            if (data.extraMonthly !== undefined)
              setExtraMonthly(data.extraMonthly);
          }, 0);
          window.history.replaceState({}, "", window.location.pathname);
        } catch {
          // Ignore invalid URL parameters safely
        }
      }
    }
  }, []);

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
    <div className="w-full">
      <div ref={resultRef} className="w-full min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[380px_1fr] gap-6 items-start w-full min-w-0">
          {/* ── LEFT: Single Parent Container for All Inputs (Decreased width, clean & uncluttered) ── */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-4 w-full min-w-0">
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm shadow-sm">
                  <i className="fas fa-car" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                    Auto Loan Parameters
                  </h2>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Enter vehicle price, financing terms, and fees
                  </p>
                </div>
              </div>
            </div>

            {/* 1. Vehicle Price */}
            <NumInput
              id="vehiclePrice"
              label="Vehicle Price"
              value={vehiclePrice}
              onChange={setVehiclePrice}
              prefix={symbol}
              min="0"
              step="500"
            />

            {/* 2. Dealer Rebates */}
            <NumInput
              id="rebate"
              label="Dealer Rebates & Incentives"
              value={rebate}
              onChange={setRebate}
              prefix={symbol}
              min="0"
              step="250"
            />

            {/* 3. Down Payment */}
            <NumInput
              id="downPayment"
              label="Cash Down Payment"
              value={downPayment}
              onChange={setDownPayment}
              prefix={symbol}
              min="0"
              step="500"
            />

            {/* 4. Trade-In Value */}
            <NumInput
              id="tradeInValue"
              label="Trade-In Vehicle Value"
              value={tradeInValue}
              onChange={setTradeInValue}
              prefix={symbol}
              min="0"
              step="500"
            />

            {/* 5. Trade-In Balance */}
            <NumInput
              id="tradeInBalance"
              label="Amount Owed on Trade-In"
              value={tradeInBalance}
              onChange={setTradeInBalance}
              prefix={symbol}
              min="0"
              step="500"
            />

            {/* Net Equity Feedback Pill */}
            <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <i
                  className={`fas ${
                    result.netTradeEquity >= 0
                      ? "fa-arrow-trend-up text-emerald-500"
                      : "fa-arrow-trend-down text-rose-500"
                  } text-xs`}
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Net Trade Equity:
                </span>
              </div>
              <span
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  result.netTradeEquity >= 0
                    ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300"
                    : "bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300"
                }`}
              >
                {result.netTradeEquity >= 0 ? "+" : "-"}
                {fmt(Math.abs(result.netTradeEquity), 0)}{" "}
                {result.netTradeEquity >= 0 ? "Equity" : "Negative Equity"}
              </span>
            </div>

            {/* Trade-In Tax Deductible Checkbox */}
            <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <label
                htmlFor="taxDeductible"
                className="flex items-start gap-2.5 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  id="taxDeductible"
                  checked={tradeInTaxDeductible}
                  onChange={(e) => setTradeInTaxDeductible(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-indigo-600 rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-indigo-500 cursor-pointer"
                />
                <div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    Trade-in reduces sales tax (Standard in 42+ US states)
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    Taxes only the net purchase difference. Uncheck if buying in
                    CA, VA, MD, MI, HI, DC, or KY.
                  </p>
                </div>
              </label>
            </div>

            {/* 6. Interest Rate (APR) */}
            <NumInput
              id="apr"
              label="Interest Rate (APR)"
              value={apr}
              onChange={setApr}
              suffix="%"
              min="0"
              step="0.1"
            />

            {/* 7. Loan Term */}
            <NumInput
              id="customTerm"
              label="Loan Term"
              value={termMonths}
              onChange={(v) => setTermMonths(Math.max(1, Math.round(v)))}
              suffix={`${(termMonths / 12).toFixed(1)} yrs`}
              min="12"
              max="120"
              step="12"
            />

            {/* 8. State Sales Tax */}
            <NumInput
              id="salesTaxRate"
              label="State & Local Sales Tax"
              value={salesTaxRate}
              onChange={setSalesTaxRate}
              suffix="%"
              min="0"
              step="0.1"
            />

            {/* 9. Dealer Doc Fee */}
            <NumInput
              id="docFee"
              label="Dealer Documentation Fee"
              value={docFee}
              onChange={setDocFee}
              prefix={symbol}
              min="0"
              step="50"
            />

            {/* 10. Title & Registration Fees */}
            <NumInput
              id="titleFee"
              label="Title & Registration Fees"
              value={titleFee + regFee}
              onChange={(v) => {
                setTitleFee(v / 2);
                setRegFee(v / 2);
              }}
              prefix={symbol}
              min="0"
              step="25"
            />

            {/* 11. Optional GAP & Warranty */}
            <NumInput
              id="gapInsurance"
              label="Optional GAP & Warranty Add-ons"
              value={gapInsurance + extWarranty}
              onChange={(v) => {
                setGapInsurance(v / 2);
                setExtWarranty(v / 2);
              }}
              prefix={symbol}
              min="0"
              step="100"
            />

            {/* 12. Extra Monthly Payment */}
            <NumInput
              id="extraMonthly"
              label="Extra Monthly Payment"
              value={extraMonthly}
              onChange={setExtraMonthly}
              prefix={symbol}
              min="0"
              step="25"
            />
          </div>

          {/* ── RIGHT: Results (Preserved 100% as requested) ── */}
          <div className="space-y-5 w-full min-w-0">
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
                the lender&apos;s policies. State tax rules (like trade-in
                deductibility) vary heavily.
              </p>
            </footer>

            {/* ── TABS FOR SUMMARY & AMORTIZATION (Directly below results at the right of input container) ── */}
            <div className="pt-2 w-full min-w-0">
              <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800">
                <button
                  type="button"
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
                  type="button"
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

              <div className="py-5 w-full min-w-0">
                {activeTab === "summary" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <SectionCard>
                      <SectionHead
                        iconClass="fa-chart-pie"
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
                            <span className="font-semibold">
                              - {fmt(rebate)}
                            </span>
                          </div>
                          <div
                            className={`flex justify-between text-sm ${
                              result.netTradeEquity >= 0
                                ? "text-emerald-600 dark:text-emerald-400"
                                : "text-rose-600 dark:text-rose-400"
                            }`}
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
                        iconClass="fa-lightbulb"
                        title="Interest Insights"
                        color="amber"
                      />
                      <div className="p-5 space-y-4">
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          Over the life of this{" "}
                          <span className="font-semibold">
                            {termMonths}-month
                          </span>{" "}
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
                              equity on your trade-in, which is being rolled
                              into your new loan, increasing your amount
                              financed and monthly payment.
                            </p>
                          </div>
                        )}
                      </div>
                    </SectionCard>
                  </div>
                )}
                {activeTab === "amort" && (
                  <AmortTable schedule={result.schedule} />
                )}
              </div>
            </div>
          </div>
        </div>

        <CalculatorActions
          calculatorId="auto-loan-calculator"
          calculatorName="Auto Loan Calculator"
          inputData={{
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
          }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}
