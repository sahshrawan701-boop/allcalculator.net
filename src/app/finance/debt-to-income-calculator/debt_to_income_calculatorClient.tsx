"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import CalculatorActions from "@/components/CalculatorActions";
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
          max={max}
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

type SectionHeadColor =
  | "indigo"
  | "amber"
  | "emerald"
  | "violet"
  | "rose"
  | "teal"
  | "blue"
  | "slate";

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
    teal: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    slate:
      "bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400",
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
  value: React.ReactNode;
  sub?: string;
  accent?: boolean;
}

function StatPill({ label, value, sub, accent }: StatPillProps) {
  return (
    <div
      className={`rounded-xl px-4 py-3 ${
        accent
          ? "bg-indigo-50 dark:bg-indigo-900/20"
          : "bg-slate-50 dark:bg-slate-900/40"
      }`}
    >
      <div className="text-[10px] font-semibold uppercase tracking-[0.09em] text-slate-500 dark:text-slate-400 mb-0.5">
        {label}
      </div>
      <div
        className={`text-lg font-bold tabular-nums ${
          accent
            ? "text-indigo-600 dark:text-indigo-400"
            : "text-slate-800 dark:text-slate-100"
        }`}
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
  data: { label: string; val: number; color: string }[];
  total: number;
}

function PremiumDonut({ data, total }: PremiumDonutProps) {
  const { fmt, fmtShort, symbol } = useCurrency();
  const activeData = data.filter((d) => d.val > 0);

  if (total <= 0 || activeData.length === 0) return null;

  const r = 54;
  const circ = 2 * Math.PI * r;
  const gap = 1.5;

  let currentOffset = 0;
  const slices = activeData.map((d) => {
    const p = (d.val / total) * 100;
    const strokeDash = (p / 100) * circ;
    const slice = {
      ...d,
      p,
      strokeDash: Math.max(0, strokeDash - gap),
      offset: -currentOffset,
    };
    currentOffset += strokeDash + gap;
    return slice;
  });

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 p-6">
      <div className="relative w-[130px] h-[130px] shrink-0">
        <svg viewBox="0 0 130 130" className="w-full h-full -rotate-90">
          <circle
            cx="65"
            cy="65"
            r={r}
            fill="none"
            strokeWidth="14"
            className="text-slate-100 dark:text-slate-800/80 stroke-current"
          />
          {slices.map((slice, i) => (
            <circle
              key={i}
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke={slice.color}
              strokeWidth="14"
              strokeDasharray={`${slice.strokeDash} ${circ}`}
              strokeDashoffset={slice.offset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            Total Debt
          </span>
          <span className="text-xl font-black text-slate-800 dark:text-slate-100 tabular-nums">
            {symbol}
            {fmtShort(total)}
          </span>
        </div>
      </div>

      <div className="flex-1 w-full space-y-4">
        {slices.map((slice, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: slice.color }}
                />
                {slice.label}
              </div>
              <div className="font-bold tabular-nums text-slate-800 dark:text-slate-100">
                {symbol}
                {fmt(slice.val)}{" "}
                <span className="text-slate-400 dark:text-slate-500 font-normal ml-1">
                  ({slice.p.toFixed(1)}%)
                </span>
              </div>
            </div>
            <div className="h-1 rounded-full bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 absolute top-0 left-0"
                style={{ width: `${slice.p}%`, backgroundColor: slice.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function DebtToIncomeCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.monthlyIncome !== undefined) setMonthlyIncome(data.monthlyIncome);
          if (data.mortgage !== undefined) setMortgage(data.mortgage);
          if (data.carLoan !== undefined) setCarLoan(data.carLoan);
          if (data.creditCards !== undefined) setCreditCards(data.creditCards);
          if (data.studentLoans !== undefined) setStudentLoans(data.studentLoans);
          if (data.otherDebt !== undefined) setOtherDebt(data.otherDebt);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, symbol } = useCurrency();

  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [mortgage, setMortgage] = useState(1500);
  const [carLoan, setCarLoan] = useState(400);
  const [creditCards, setCreditCards] = useState(300);
  const [studentLoans, setStudentLoans] = useState(200);
  const [otherDebt, setOtherDebt] = useState(100);

  const result = useMemo(() => {
    const totalDebt =
      mortgage + carLoan + creditCards + studentLoans + otherDebt;
    const dti = monthlyIncome > 0 ? (totalDebt / monthlyIncome) * 100 : 0;

    let status = "";
    let recommendation = "";
    let colors = {
      border: "border-emerald-500/20 dark:border-emerald-400/20",
      bg: "bg-emerald-600 dark:bg-emerald-900/60",
      text: "text-emerald-200",
    };

    if (dti <= 20) {
      status = "Excellent";
      recommendation =
        "Your DTI is excellent. You have a very healthy debt level and lenders will view you highly favorably.";
      colors = {
        border: "border-emerald-500/20 dark:border-emerald-400/20",
        bg: "bg-emerald-600 dark:bg-emerald-900/60",
        text: "text-emerald-200",
      };
    } else if (dti <= 35) {
      status = "Good";
      recommendation =
        "Your DTI is good. You are in a healthy range for most loans, including mortgages and auto loans.";
      colors = {
        border: "border-lime-500/20 dark:border-lime-400/20",
        bg: "bg-lime-600 dark:bg-lime-900/60",
        text: "text-lime-200",
      };
    } else if (dti <= 43) {
      status = "Fair";
      recommendation =
        "Your DTI is fair. You meet the standard maximum threshold for qualified mortgages (43%), but you may want to avoid taking on new debt.";
      colors = {
        border: "border-amber-500/20 dark:border-amber-400/20",
        bg: "bg-amber-500 dark:bg-amber-900/60",
        text: "text-amber-200",
      };
    } else if (dti <= 50) {
      status = "Poor";
      recommendation =
        "Your DTI is high. You will likely struggle to qualify for conventional loans without compensating factors like a high credit score or large down payment.";
      colors = {
        border: "border-orange-500/20 dark:border-orange-400/20",
        bg: "bg-orange-600 dark:bg-orange-900/60",
        text: "text-orange-200",
      };
    } else {
      status = "Very Poor";
      recommendation =
        "Your DTI is very high. It will be extremely difficult to qualify for new loans. Focus heavily on paying down existing debt.";
      colors = {
        border: "border-rose-500/20 dark:border-rose-400/20",
        bg: "bg-rose-600 dark:bg-rose-900/60",
        text: "text-rose-200",
      };
    }

    return {
      totalDebt,
      dti,
      status,
      recommendation,
      colors,
    };
  }, [monthlyIncome, mortgage, carLoan, creditCards, studentLoans, otherDebt]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top Dashboard */}
        <div className="mb-6 space-y-5">
          <SectionCard className={`border ${result.colors.border}`}>
            <div
              className={`p-6 sm:flex sm:justify-between sm:items-center sm:text-left sm:px-8 text-white ${result.colors.bg}`}
            >
              <div>
                <div
                  className={`text-xs font-semibold uppercase tracking-wider mb-1 ${result.colors.text}`}
                >
                  Debt-to-Income Ratio (DTI)
                </div>
                <div className="text-5xl font-black tabular-nums tracking-tight">
                  {result.dti.toFixed(1)}%
                </div>
              </div>

              <div className="flex gap-4 mt-4 sm:mt-0 justify-center">
                <div
                  className={`rounded-xl p-4 min-w-[140px] text-center bg-black/10 dark:bg-black/20`}
                >
                  <div
                    className={`text-[10px] font-semibold uppercase tracking-wider mb-1 ${result.colors.text}`}
                  >
                    Status
                  </div>
                  <div className="text-xl font-bold uppercase tracking-wider">
                    {result.status}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800">
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-emerald-500 dark:text-emerald-400 mb-1">
                  Gross Monthly Income
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {symbol}
                  {fmt(monthlyIncome)}
                </div>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-rose-500 dark:text-rose-400 mb-1">
                  Total Monthly Debt
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {symbol}
                  {fmt(result.totalDebt)}
                </div>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-indigo-500 dark:text-indigo-400 mb-1">
                  Available Income
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  {symbol}
                  {fmt(Math.max(0, monthlyIncome - result.totalDebt))}
                </div>
              </div>
              <div className="p-5 flex flex-col items-center text-center">
                <div className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
                  DTI Target Limit
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                  36%
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-5">
            <SectionCard>
              <SectionHead icon="💵" title="Income" color="emerald" />
              <div className="p-5">
                <NumInput
                  id="monthlyIncome"
                  label="Gross Monthly Income"
                  sub="Total income before taxes"
                  value={monthlyIncome}
                  onChange={setMonthlyIncome}
                  prefix={symbol}
                  min="0"
                  step="100"
                />
              </div>
            </SectionCard>

            <SectionCard className="flex-1">
              <SectionHead icon="💡" title="Analysis" color="indigo" />
              <div className="p-5 h-full flex flex-col justify-center">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                  {result.recommendation}
                </p>
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/60 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 dark:text-slate-400">
                      Excellent (≤ 20%)
                    </span>
                    <span className="font-bold text-emerald-500">
                      Very likely approval
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 dark:text-slate-400">
                      Good (21-35%)
                    </span>
                    <span className="font-bold text-lime-500">
                      Standard approval
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 dark:text-slate-400">
                      Fair (36-43%)
                    </span>
                    <span className="font-bold text-amber-500">
                      Max for qualified mortgage
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 dark:text-slate-400">
                      Poor (&gt; 43%)
                    </span>
                    <span className="font-bold text-orange-500">
                      Harder to qualify
                    </span>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>

          <div className="col-span-1 lg:col-span-7">
            <SectionCard className="h-full">
              <SectionHead
                icon="💳"
                title="Monthly Debt Payments"
                color="rose"
              />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <NumInput
                    id="mortgage"
                    label="Mortgage or Rent"
                    value={mortgage}
                    onChange={setMortgage}
                    prefix={symbol}
                    min="0"
                    step="100"
                  />
                  <NumInput
                    id="carLoan"
                    label="Auto Loans"
                    value={carLoan}
                    onChange={setCarLoan}
                    prefix={symbol}
                    min="0"
                    step="50"
                  />
                  <NumInput
                    id="creditCards"
                    label="Credit Card Minimums"
                    value={creditCards}
                    onChange={setCreditCards}
                    prefix={symbol}
                    min="0"
                    step="25"
                  />
                  <NumInput
                    id="studentLoans"
                    label="Student Loans"
                    value={studentLoans}
                    onChange={setStudentLoans}
                    prefix={symbol}
                    min="0"
                    step="50"
                  />
                  <NumInput
                    id="otherDebt"
                    label="Other Debt Payments"
                    sub="e.g. personal loans"
                    value={otherDebt}
                    onChange={setOtherDebt}
                    prefix={symbol}
                    min="0"
                    step="10"
                  />
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60">
                  <PremiumDonut
                    data={[
                      {
                        label: "Mortgage/Rent",
                        val: mortgage,
                        color: "#3b82f6",
                      }, // blue
                      { label: "Auto Loans", val: carLoan, color: "#eab308" }, // yellow
                      {
                        label: "Credit Cards",
                        val: creditCards,
                        color: "#f43f5e",
                      }, // rose
                      {
                        label: "Student Loans",
                        val: studentLoans,
                        color: "#8b5cf6",
                      }, // violet
                      { label: "Other", val: otherDebt, color: "#64748b" }, // slate
                    ]}
                    total={result.totalDebt}
                  />
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      
        <CalculatorActions
          calculatorId="debt-to-income-calculator"
          calculatorName="Debt To Income Calculator"
          inputData={{ monthlyIncome, mortgage, carLoan, creditCards, studentLoans, otherDebt }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}