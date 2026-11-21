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

type SectionHeadColor = "indigo" | "amber" | "emerald" | "violet" | "rose";

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
    rose: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400",
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

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function BalanceTransferCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.currentBalance !== undefined) setCurrentBalance(data.currentBalance);
          if (data.currentRate !== undefined) setCurrentRate(data.currentRate);
          if (data.newRate !== undefined) setNewRate(data.newRate);
          if (data.newStandardRate !== undefined) setNewStandardRate(data.newStandardRate);
          if (data.transferFee !== undefined) setTransferFee(data.transferFee);
          if (data.promoPeriod !== undefined) setPromoPeriod(data.promoPeriod);
          if (data.monthlyPayment !== undefined) setMonthlyPayment(data.monthlyPayment);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [currentBalance, setCurrentBalance] = useState(5000);
  const [currentRate, setCurrentRate] = useState(18.9);
  const [newRate, setNewRate] = useState(0);
  const [newStandardRate, setNewStandardRate] = useState(24.9);
  const [transferFee, setTransferFee] = useState(3);
  const [promoPeriod, setPromoPeriod] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState(200);

  const result = useMemo(() => {
    // Fail-safe warnings
    let infiniteDebtCurrent = false;
    let infiniteDebtNew = false;
    let monthsCurrent = 0;
    let monthsNew = 0;

    // Calculate interest costs with current card
    const monthlyRateCurrent = currentRate / 100 / 12;
    let balanceCurrent = currentBalance;
    let interestCurrent = 0;

    // Check if payment covers interest
    if (balanceCurrent * monthlyRateCurrent >= monthlyPayment) {
      infiniteDebtCurrent = true;
      monthsCurrent = 360; // Max out at 30 years for math reasons
      interestCurrent = balanceCurrent * monthlyRateCurrent * 360;
    } else {
      while (balanceCurrent > 0.01 && monthsCurrent < 360) {
        const interest = balanceCurrent * monthlyRateCurrent;
        interestCurrent += interest;
        balanceCurrent = balanceCurrent + interest - monthlyPayment;
        monthsCurrent++;
      }
    }
    const totalCostCurrent = interestCurrent + currentBalance;

    // Calculate interest costs with new card
    const monthlyRateNew = newRate / 100 / 12;
    const feeAmount = currentBalance * (transferFee / 100);
    let balanceNew = currentBalance + feeAmount;
    let interestNew = 0;

    // During promo period
    while (balanceNew > 0.01 && monthsNew < promoPeriod) {
      const interest = balanceNew * monthlyRateNew;
      interestNew += interest;
      balanceNew = balanceNew + interest - monthlyPayment;
      monthsNew++;
    }

    // After promo period
    const monthlyRateStandard = newStandardRate / 100 / 12;
    if (
      balanceNew > 0.01 &&
      balanceNew * monthlyRateStandard >= monthlyPayment
    ) {
      infiniteDebtNew = true;
      monthsNew = 360;
      interestNew += balanceNew * monthlyRateStandard * (360 - promoPeriod);
    } else {
      while (balanceNew > 0.01 && monthsNew < 360) {
        const interest = balanceNew * monthlyRateStandard;
        interestNew += interest;
        balanceNew = balanceNew + interest - monthlyPayment;
        monthsNew++;
      }
    }

    const totalCostNew = interestNew + currentBalance + feeAmount;
    const totalSavings = totalCostCurrent - totalCostNew;

    return {
      currentInterest: interestCurrent,
      newInterest: interestNew,
      transferFeeAmount: feeAmount,
      totalSavings,
      payoffTimeCurrent: monthsCurrent,
      payoffTimeNew: monthsNew,
      totalCostCurrent,
      totalCostNew,
      infiniteDebtCurrent,
      infiniteDebtNew,
    };
  }, [
    currentBalance,
    currentRate,
    newRate,
    newStandardRate,
    transferFee,
    promoPeriod,
    monthlyPayment,
  ]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* ── LEFT: Inputs ── */}
          <div className="space-y-4">
            {/* Current Card */}
            <SectionCard>
              <SectionHead icon="💳" title="Current Credit Card" color="rose" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="currentBalance"
                    label="Current Balance"
                    value={currentBalance}
                    onChange={setCurrentBalance}
                    prefix={symbol}
                    min="0"
                  />
                  <NumInput
                    id="currentRate"
                    label="Current Interest Rate"
                    value={currentRate}
                    onChange={setCurrentRate}
                    suffix="%"
                    min="0"
                    step="0.1"
                  />
                </div>
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <Slider
                    id="sl-balance"
                    label="Current Balance"
                    value={currentBalance}
                    onChange={setCurrentBalance}
                    min={100}
                    max={50000}
                    step={100}
                    format={(v) => fmt(v, 0)}
                  />
                </div>
              </div>
            </SectionCard>

            {/* New Card (Balance Transfer) */}
            <SectionCard>
              <SectionHead
                icon="🔄"
                title="New Card (Balance Transfer)"
                color="indigo"
              />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="newRate"
                    label="Promotional APR"
                    value={newRate}
                    onChange={setNewRate}
                    suffix="%"
                    min="0"
                    step="0.1"
                  />
                  <div>
                    <Label htmlFor="promoPeriod">Promo Period</Label>
                    <select
                      id="promoPeriod"
                      value={promoPeriod}
                      onChange={(e) => setPromoPeriod(Number(e.target.value))}
                      className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
                    >
                      {[6, 9, 12, 15, 18, 21, 24].map((t) => (
                        <option key={t} value={t}>
                          {t} Months
                        </option>
                      ))}
                    </select>
                  </div>
                  <NumInput
                    id="transferFee"
                    label="Transfer Fee"
                    value={transferFee}
                    onChange={setTransferFee}
                    suffix="%"
                    min="0"
                    max="10"
                    step="0.5"
                  />
                  <NumInput
                    id="newStandardRate"
                    label="Standard APR (After Promo)"
                    value={newStandardRate}
                    onChange={setNewStandardRate}
                    suffix="%"
                    min="0"
                    step="0.1"
                  />
                </div>
              </div>
            </SectionCard>

            {/* Repayment Plan */}
            <SectionCard>
              <SectionHead icon="💸" title="Repayment Plan" color="emerald" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="monthlyPayment"
                    label="Monthly Payment"
                    value={monthlyPayment}
                    onChange={setMonthlyPayment}
                    prefix={symbol}
                    min="10"
                  />
                </div>
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <Slider
                    id="sl-payment"
                    label="Monthly Payment"
                    value={monthlyPayment}
                    onChange={setMonthlyPayment}
                    min={Math.max(25, currentBalance * 0.01)}
                    max={currentBalance}
                    step={10}
                    format={(v) => fmt(v, 0)}
                  />
                </div>
              </div>
            </SectionCard>

            {/* Fail-safe Warnings */}
            {(result.infiniteDebtCurrent || result.infiniteDebtNew) && (
              <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-5 border border-rose-200 dark:border-rose-800 flex items-start gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                  <h4 className="text-sm font-bold text-rose-800 dark:text-rose-200 mb-1">
                    Infinite Debt Trap Detected
                  </h4>
                  <p className="text-xs text-rose-600 dark:text-rose-300 leading-relaxed">
                    Your monthly payment of{" "}
                    <strong>{fmt(monthlyPayment)}</strong> is too low. It does
                    not even cover the interest generated each month. Your
                    balance will grow infinitely. Please increase your monthly
                    payment.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT: Results ── */}
          <div className="space-y-5">
            <SectionCard className="border-indigo-500/20 dark:border-indigo-400/20">
              <div
                className={`p-5 text-white ${result.totalSavings > 0 ? "bg-indigo-600 dark:bg-indigo-900/60" : "bg-slate-600 dark:bg-slate-800"}`}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-200 mb-1">
                  {result.totalSavings > 0 ? "Total Savings" : "Total Loss"}
                </div>
                <div className="text-4xl font-black tabular-nums tracking-tight mb-4">
                  {result.totalSavings > 0
                    ? fmt(result.totalSavings)
                    : "-" + fmt(Math.abs(result.totalSavings))}
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/20">
                  <div>
                    <div className="text-[10px] text-white/70 uppercase font-semibold">
                      Current Cost
                    </div>
                    <div className="font-bold tabular-nums">
                      {fmt(result.totalCostCurrent)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-white/70 uppercase font-semibold">
                      New Cost
                    </div>
                    <div className="font-bold tabular-nums">
                      {fmt(result.totalCostNew)}
                    </div>
                  </div>
                </div>
              </div>
            </SectionCard>

            <div className="grid grid-cols-2 gap-3">
              <StatPill
                label="Payoff (Current)"
                value={
                  result.infiniteDebtCurrent
                    ? "Never"
                    : `${result.payoffTimeCurrent} mo`
                }
              />
              <StatPill
                label="Payoff (New)"
                value={
                  result.infiniteDebtNew
                    ? "Never"
                    : `${result.payoffTimeNew} mo`
                }
                accent
              />
            </div>

            <SectionCard>
              <SectionHead icon="📊" title="Cost Breakdown" color="indigo" />
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    Current Interest
                  </span>
                  <span className="text-sm font-bold text-rose-600 dark:text-rose-400">
                    {fmt(result.currentInterest)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    New Card Interest
                  </span>
                  <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
                    {fmt(result.newInterest)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    Transfer Fee ({transferFee}%)
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {fmt(result.transferFeeAmount)}
                  </span>
                </div>
                {result.totalSavings <= 0 && (
                  <p className="text-[10px] text-rose-500 mt-2 text-center">
                    Your transfer fee and post-promo interest outweigh the
                    benefits of switching.
                  </p>
                )}
              </div>
            </SectionCard>
          </div>
        </div>
      
        <CalculatorActions
          calculatorId="balance-transfer-calculator"
          calculatorName="Balance Transfer Calculator"
          inputData={{ currentBalance, currentRate, newRate, newStandardRate, transferFee, promoPeriod, monthlyPayment }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}