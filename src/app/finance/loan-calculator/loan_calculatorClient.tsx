"use client";

import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useSyncExternalStore,
} from "react";
import CalculatorActions from "@/components/CalculatorActions";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COMPARISON_TERMS = [24, 36, 48, 60, 72, 84];
const SIMULATOR_SCENARIOS = [25, 50, 100, 200, 500];

type AnalysisTab = "breakdown" | "schedule" | "comparison" | "simulator";

/* ——— Helper Formatters ——— */
function fmtCurrency(val: number, decimals = 2): string {
  if (isNaN(val) || !isFinite(val)) return "$0.00";
  return (
    "$" +
    val.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );
}

function fmtShort(val: number): string {
  if (isNaN(val) || !isFinite(val)) return "$0";
  if (val >= 1000000) return "$" + (val / 1000000).toFixed(2) + "M";
  if (val >= 1000) return "$" + (val / 1000).toFixed(1) + "k";
  return fmtCurrency(val, 0);
}

/* ——— Amortization Math ——— */
interface ScheduleRow {
  paymentNumber: number;
  dateStr: string;
  payment: number;
  principal: number;
  interest: number;
  extraPayment: number;
  remainingBalance: number;
  cumulativeInterest: number;
  cumulativePrincipal: number;
}

function calculateLoanAmortization(
  principal: number,
  annualInterestRate: number,
  totalMonths: number,
  extraMonthly = 0,
  extraAnnual = 0,
  lumpSum = 0,
  lumpSumMonth = 1,
  startMonthOffset = 0,
) {
  const r = annualInterestRate / 100 / 12;
  const basePayment =
    annualInterestRate === 0
      ? principal / totalMonths
      : (principal * r * Math.pow(1 + r, totalMonths)) /
        (Math.pow(1 + r, totalMonths) - 1);

  let balance = principal;
  let cumInterest = 0;
  let cumPrincipal = 0;
  const schedule: ScheduleRow[] = [];

  const startDate = new Date();
  if (startMonthOffset !== 0) {
    startDate.setMonth(startDate.getMonth() + startMonthOffset);
  }

  for (let m = 1; m <= totalMonths && balance > 0.005; m++) {
    const payDate = new Date(startDate);
    payDate.setMonth(startDate.getMonth() + m);

    const interest = balance * r;
    let extra = extraMonthly;
    if (m % 12 === 0) extra += extraAnnual;
    if (m === lumpSumMonth) extra += lumpSum;

    let principalPaid = basePayment - interest + extra;
    if (principalPaid > balance) {
      principalPaid = balance;
      extra = Math.max(0, principalPaid - (basePayment - interest));
    }

    balance = Math.max(0, balance - principalPaid);
    cumInterest += interest;
    cumPrincipal += principalPaid;

    schedule.push({
      paymentNumber: m,
      dateStr: payDate.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
      payment: principalPaid + interest,
      principal: principalPaid,
      interest: interest,
      extraPayment: extra,
      remainingBalance: balance,
      cumulativeInterest: cumInterest,
      cumulativePrincipal: cumPrincipal,
    });

    if (balance <= 0.005) break;
  }

  return {
    basePayment,
    schedule,
    totalInterest: cumInterest,
    totalPaid: cumPrincipal + cumInterest,
    actualMonths: schedule.length,
  };
}

export default function LoanCalculatorPage() {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const resultRef = useRef<HTMLDivElement>(null);

  // Core Inputs
  const [loanAmount, setLoanAmount] = useState<number>(25000);
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [termYears, setTermYears] = useState<number>(5);
  const [termMonthsInput, setTermMonthsInput] = useState<number>(60);
  const [termUnit, setTermUnit] = useState<"years" | "months">("years");
  const [paymentFrequency, setPaymentFrequency] = useState<
    "monthly" | "biweekly"
  >("monthly");

  // Optional Extra Payments
  const [showExtraPayments, setShowExtraPayments] = useState<boolean>(false);
  const [extraMonthly, setExtraMonthly] = useState<number>(0);
  const [extraAnnual, setExtraAnnual] = useState<number>(0);
  const [lumpSum, setLumpSum] = useState<number>(0);
  const [lumpSumMonth, setLumpSumMonth] = useState<number>(12);

  // Active Analysis Tab
  const [activeTab, setActiveTab] = useState<AnalysisTab>("breakdown");
  const [scheduleView, setScheduleView] = useState<"annual" | "monthly">(
    "annual",
  );
  const [schedulePage, setSchedulePage] = useState<number>(0);

  // Update total months when years or months change
  const totalMonths = useMemo(() => {
    return termUnit === "years" ? termYears * 12 : termMonthsInput;
  }, [termUnit, termYears, termMonthsInput]);

  // Base Calculation without extra payments
  const baseCalc = useMemo(() => {
    return calculateLoanAmortization(
      loanAmount,
      interestRate,
      totalMonths,
      0,
      0,
      0,
      0,
    );
  }, [loanAmount, interestRate, totalMonths]);

  // Active Calculation with extra payments
  const activeCalc = useMemo(() => {
    return calculateLoanAmortization(
      loanAmount,
      interestRate,
      totalMonths,
      extraMonthly,
      extraAnnual,
      lumpSum,
      lumpSumMonth,
    );
  }, [
    loanAmount,
    interestRate,
    totalMonths,
    extraMonthly,
    extraAnnual,
    lumpSum,
    lumpSumMonth,
  ]);

  // Bi-weekly payment calculations (26 payments per year)
  const biweeklyPayment = useMemo(() => {
    return baseCalc.basePayment / 2;
  }, [baseCalc.basePayment]);

  // Savings Summary from Extra Payments
  const extraSavings = useMemo(() => {
    const interestSaved = Math.max(
      0,
      baseCalc.totalInterest - activeCalc.totalInterest,
    );
    const monthsSaved = Math.max(
      0,
      baseCalc.actualMonths - activeCalc.actualMonths,
    );
    return {
      interestSaved,
      monthsSaved,
      hasExtra: extraMonthly > 0 || extraAnnual > 0 || lumpSum > 0,
    };
  }, [baseCalc, activeCalc, extraMonthly, extraAnnual, lumpSum]);

  // Annual Schedule Aggregation
  const annualSchedule = useMemo(() => {
    const years: {
      yearNum: number;
      principalPaid: number;
      interestPaid: number;
      totalPaid: number;
      endBalance: number;
    }[] = [];

    const fullSchedule = activeCalc.schedule;
    const totalY = Math.ceil(fullSchedule.length / 12);

    for (let y = 1; y <= totalY; y++) {
      const slice = fullSchedule.filter(
        (r) => r.paymentNumber > (y - 1) * 12 && r.paymentNumber <= y * 12,
      );
      if (!slice.length) break;

      const pPaid = slice.reduce((sum, r) => sum + r.principal, 0);
      const iPaid = slice.reduce((sum, r) => sum + r.interest, 0);
      const lastRow = slice[slice.length - 1];

      years.push({
        yearNum: y,
        principalPaid: pPaid,
        interestPaid: iPaid,
        totalPaid: pPaid + iPaid,
        endBalance: lastRow.remainingBalance,
      });
    }

    return years;
  }, [activeCalc.schedule]);

  // Chart Data: Balance & Cumulative Interest Over Time
  const balanceChartData = useMemo(() => {
    const sampleInterval = activeCalc.schedule.length > 60 ? 6 : 1;
    return activeCalc.schedule
      .filter(
        (_, idx) =>
          idx % sampleInterval === 0 || idx === activeCalc.schedule.length - 1,
      )
      .map((r) => ({
        date: r.dateStr,
        balance: Math.round(r.remainingBalance),
        interest: Math.round(r.cumulativeInterest),
        principal: Math.round(r.cumulativePrincipal),
      }));
  }, [activeCalc.schedule]);

  // Chart Data: Annual Principal vs Interest
  const annualBarData = useMemo(() => {
    return annualSchedule.map((a) => ({
      year: `Yr ${a.yearNum}`,
      Principal: Math.round(a.principalPaid),
      Interest: Math.round(a.interestPaid),
    }));
  }, [annualSchedule]);

  // Export Amortization Table to CSV
  const exportCSV = useCallback(() => {
    const headers =
      "Payment #,Date,Payment,Principal,Interest,Extra,Remaining Balance,Total Interest\n";
    const rows = activeCalc.schedule
      .map(
        (r) =>
          `${r.paymentNumber},"${r.dateStr}",${r.payment.toFixed(2)},${r.principal.toFixed(2)},${r.interest.toFixed(2)},${r.extraPayment.toFixed(2)},${r.remainingBalance.toFixed(2)},${r.cumulativeInterest.toFixed(2)}`,
      )
      .join("\n");

    const blob = new Blob([headers + rows], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `loan-amortization-${loanAmount}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [activeCalc.schedule, loanAmount]);

  // Payoff date string
  const payoffDateStr = useMemo(() => {
    if (!activeCalc.schedule.length) return "N/A";
    return activeCalc.schedule[activeCalc.schedule.length - 1].dateStr;
  }, [activeCalc.schedule]);

  // Term comparison data
  const comparisonData = useMemo(() => {
    return COMPARISON_TERMS.map((m) => {
      const calc = calculateLoanAmortization(
        loanAmount,
        interestRate,
        m,
        0,
        0,
        0,
        0,
      );
      return {
        months: m,
        years: (m / 12).toFixed(1),
        monthlyPayment: calc.basePayment,
        totalInterest: calc.totalInterest,
        totalCost: calc.totalPaid,
      };
    });
  }, [loanAmount, interestRate]);

  // Extra payment simulator scenarios
  const simulatorResults = useMemo(() => {
    return SIMULATOR_SCENARIOS.map((amt) => {
      const calc = calculateLoanAmortization(
        loanAmount,
        interestRate,
        totalMonths,
        amt,
        0,
        0,
        0,
      );
      const interestSaved = baseCalc.totalInterest - calc.totalInterest;
      const monthsSaved = baseCalc.actualMonths - calc.actualMonths;
      return {
        extraMonthly: amt,
        newPayment: baseCalc.basePayment + amt,
        interestSaved: Math.max(0, interestSaved),
        monthsSaved: Math.max(0, monthsSaved),
        payoffYears: (calc.actualMonths / 12).toFixed(1),
      };
    });
  }, [loanAmount, interestRate, totalMonths, baseCalc]);

  return (
    <div className="w-full max-w-[1300px] mx-auto space-y-8">
      {/* ——— MAIN CALCULATOR GRID ——— */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* ——— LEFT COLUMN: INPUT CONTROLS ——— */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <i
                className="fas fa-sliders text-emerald-600 dark:text-emerald-400 text-sm"
                aria-hidden="true"
              />
              Loan Parameters
            </h2>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full">
              US Standard
            </span>
          </div>

          {/* 1. Loan Amount */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="loan-amount-input"
                className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
              >
                Loan Amount ($)
              </label>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {fmtCurrency(loanAmount, 0)}
              </span>
            </div>

            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-semibold text-sm">
                $
              </span>
              <input
                id="loan-amount-input"
                type="number"
                min={500}
                max={5000000}
                step={500}
                value={loanAmount || ""}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setLoanAmount(isNaN(val) ? 0 : val);
                }}
                className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white font-semibold text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
            </div>
          </div>

          {/* 2. Interest Rate */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="interest-rate-input"
                className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
              >
                Interest Rate (Annual APR %)
              </label>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {interestRate.toFixed(2)}%
              </span>
            </div>

            <div className="relative">
              <input
                id="interest-rate-input"
                type="number"
                min={0}
                max={40}
                step={0.1}
                value={interestRate || ""}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setInterestRate(isNaN(val) ? 0 : val);
                }}
                className="w-full pl-4 pr-9 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white font-semibold text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-semibold text-sm">
                %
              </span>
            </div>
          </div>

          {/* 3. Loan Term */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="loan-term-input"
                className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
              >
                Loan Term
              </label>
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setTermUnit("years")}
                  className={`px-2.5 py-0.5 rounded-md transition-colors ${
                    termUnit === "years"
                      ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Years
                </button>
                <button
                  type="button"
                  onClick={() => setTermUnit("months")}
                  className={`px-2.5 py-0.5 rounded-md transition-colors ${
                    termUnit === "months"
                      ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                      : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Months
                </button>
              </div>
            </div>

            {termUnit === "years" ? (
              <div className="relative">
                <input
                  id="loan-term-input"
                  type="number"
                  min={1}
                  max={40}
                  step={1}
                  value={termYears || ""}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    setTermYears(isNaN(val) ? 1 : val);
                  }}
                  className="w-full pl-4 pr-16 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white font-semibold text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-semibold text-xs">
                  Years ({termYears * 12} mo)
                </span>
              </div>
            ) : (
              <div className="relative">
                <input
                  id="loan-term-input"
                  type="number"
                  min={3}
                  max={480}
                  step={1}
                  value={termMonthsInput || ""}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    setTermMonthsInput(isNaN(val) ? 1 : val);
                  }}
                  className="w-full pl-4 pr-16 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white font-semibold text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-semibold text-xs">
                  Months ({(termMonthsInput / 12).toFixed(1)} yr)
                </span>
              </div>
            )}
          </div>

          {/* 4. Payment Frequency */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block">
              Payment Frequency
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPaymentFrequency("monthly")}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                  paymentFrequency === "monthly"
                    ? "border-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 shadow-xs"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50"
                }`}
              >
                Monthly (12 / yr)
              </button>
              <button
                type="button"
                onClick={() => setPaymentFrequency("biweekly")}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                  paymentFrequency === "biweekly"
                    ? "border-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 shadow-xs"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50"
                }`}
              >
                Bi-Weekly (26 / yr)
              </button>
            </div>
          </div>

          {/* 5. Extra Payments Collapsible Accordion */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setShowExtraPayments(!showExtraPayments)}
              className="w-full flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1"
            >
              <span className="flex items-center gap-1.5">
                <i
                  className="fas fa-plus-circle text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
                Extra Payments & Accelerated Payoff
              </span>
              <i
                className={`fas fa-chevron-down text-[10px] transition-transform duration-200 ${
                  showExtraPayments ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {showExtraPayments && (
              <div className="pt-4 space-y-3.5 bg-slate-50/80 dark:bg-slate-800/40 p-3.5 rounded-xl mt-2 border border-slate-200/60 dark:border-slate-700/60">
                <div>
                  <label
                    htmlFor="extra-monthly-input"
                    className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 block mb-1"
                  >
                    Extra Monthly Payment ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                      $
                    </span>
                    <input
                      id="extra-monthly-input"
                      type="number"
                      min={0}
                      step={25}
                      value={extraMonthly || ""}
                      onChange={(e) =>
                        setExtraMonthly(
                          Math.max(0, parseFloat(e.target.value) || 0),
                        )
                      }
                      placeholder="e.g. 100"
                      className="w-full pl-7 pr-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label
                      htmlFor="extra-annual-input"
                      className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 block mb-1"
                    >
                      Annual Extra ($)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                        $
                      </span>
                      <input
                        id="extra-annual-input"
                        type="number"
                        min={0}
                        step={100}
                        value={extraAnnual || ""}
                        onChange={(e) =>
                          setExtraAnnual(
                            Math.max(0, parseFloat(e.target.value) || 0),
                          )
                        }
                        placeholder="e.g. 500"
                        className="w-full pl-7 pr-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lump-sum-input"
                      className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 block mb-1"
                    >
                      One-time Lump Sum ($)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                        $
                      </span>
                      <input
                        id="lump-sum-input"
                        type="number"
                        min={0}
                        step={500}
                        value={lumpSum || ""}
                        onChange={(e) =>
                          setLumpSum(
                            Math.max(0, parseFloat(e.target.value) || 0),
                          )
                        }
                        placeholder="e.g. 2000"
                        className="w-full pl-7 pr-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lump-sum-month-input"
                    className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 block mb-1"
                  >
                    Apply Lump Sum at Month #
                  </label>
                  <input
                    id="lump-sum-month-input"
                    type="number"
                    min={1}
                    max={totalMonths}
                    value={lumpSumMonth}
                    onChange={(e) =>
                      setLumpSumMonth(
                        Math.max(1, parseInt(e.target.value, 10) || 1),
                      )
                    }
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ——— RIGHT COLUMN: RESULTS & INTERACTIVE TABS ——— */}
        <div ref={resultRef} className="lg:col-span-7 space-y-6">
          {/* Main Hero Result Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
            {/* Ambient texture */}
            <div
              className="absolute -top-16 -right-16 w-52 h-52 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  {paymentFrequency === "monthly"
                    ? "Estimated Monthly Payment"
                    : "Bi-Weekly Payment"}
                </span>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                  Fixed Rate · Fully Amortized
                </span>
              </div>

              {/* Big Payment Output */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                  {paymentFrequency === "monthly"
                    ? fmtCurrency(activeCalc.basePayment + extraMonthly)
                    : fmtCurrency(biweeklyPayment)}
                </span>
                <span className="text-sm font-medium text-slate-400">
                  /{paymentFrequency === "monthly" ? "mo" : "2 wks"}
                </span>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 py-4 border-t border-slate-800/80">
                <div>
                  <div className="text-[11px] font-medium text-slate-400">
                    Total Principal
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {fmtCurrency(loanAmount, 0)}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-400">
                    Total Interest
                  </div>
                  <div className="text-base sm:text-lg font-bold text-emerald-400 mt-0.5">
                    {fmtCurrency(activeCalc.totalInterest, 0)}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-400">
                    Total Loan Cost
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {fmtCurrency(activeCalc.totalPaid, 0)}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-400">
                    Payoff Date
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {payoffDateStr}
                  </div>
                </div>
              </div>

              {/* Extra Payment Callout Banner */}
              {extraSavings.hasExtra && extraSavings.interestSaved > 0 && (
                <div className="mt-4 p-3 bg-emerald-950/70 border border-emerald-700/60 rounded-xl flex items-center gap-3 text-xs text-emerald-200">
                  <i
                    className="fas fa-bolt text-emerald-400 text-sm flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="font-bold text-white">
                      Accelerated Savings:{" "}
                    </span>
                    You save{" "}
                    <strong className="text-emerald-300">
                      {fmtCurrency(extraSavings.interestSaved)}
                    </strong>{" "}
                    in interest and pay off your loan{" "}
                    <strong className="text-emerald-300">
                      {Math.floor(extraSavings.monthsSaved / 12) > 0
                        ? `${Math.floor(extraSavings.monthsSaved / 12)} yr ${extraSavings.monthsSaved % 12} mo`
                        : `${extraSavings.monthsSaved} mo`}
                    </strong>{" "}
                    early!
                  </div>
                </div>
              )}

              {/* Multi-segment ratio bar */}
              <div className="mt-5 space-y-1.5">
                <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                  <span>
                    Principal:{" "}
                    {((loanAmount / activeCalc.totalPaid) * 100).toFixed(0)}%
                  </span>
                  <span>
                    Interest:{" "}
                    {(
                      (activeCalc.totalInterest / activeCalc.totalPaid) *
                      100
                    ).toFixed(0)}
                    %
                  </span>
                </div>
                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{
                      width: `${(loanAmount / activeCalc.totalPaid) * 100}%`,
                    }}
                    title={`Principal: ${fmtCurrency(loanAmount)}`}
                  />
                  <div
                    className="bg-indigo-400 h-full transition-all duration-300"
                    style={{
                      width: `${(activeCalc.totalInterest / activeCalc.totalPaid) * 100}%`,
                    }}
                    title={`Interest: ${fmtCurrency(activeCalc.totalInterest)}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Bar (Save, Share, Print) */}
          <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
            <CalculatorActions
              calculatorId="loan-calculator"
              calculatorName="Loan Calculator"
              inputData={{
                loanAmount,
                interestRate,
                termYears,
                termUnit,
                paymentFrequency,
                extraMonthly,
              }}
              resultData={{
                monthlyPayment: activeCalc.basePayment,
                totalInterest: activeCalc.totalInterest,
                totalPaid: activeCalc.totalPaid,
                payoffDate: payoffDateStr,
              }}
              resultRef={resultRef}
            />

            <button
              type="button"
              onClick={exportCSV}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <i
                className="fas fa-file-csv text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
              <span>Export CSV</span>
            </button>
          </div>

          {/* Analysis Tabs Header */}
          <div className="border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4 overflow-x-auto pb-1 scrollbar-none text-xs font-bold">
              {[
                { id: "breakdown", label: "Breakdown & Charts" },
                { id: "schedule", label: "Amortization Table" },
                { id: "comparison", label: "Compare Terms" },
                { id: "simulator", label: "Extra Savings Simulator" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as AnalysisTab)}
                  className={`pb-2.5 transition-colors whitespace-nowrap border-b-2 ${
                    activeTab === tab.id
                      ? "border-emerald-600 text-emerald-600 dark:text-emerald-400"
                      : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* ——— TAB 1: BREAKDOWN & CHARTS ——— */}
          {activeTab === "breakdown" && (
            <div className="space-y-6 pt-2">
              {/* Balance Over Time Area Chart */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Loan Balance & Cumulative Interest
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    Balance declines to $0
                  </span>
                </div>

                <div className="h-[260px] w-full">
                  {isMounted ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={balanceChartData}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient
                            id="balanceGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#10b981"
                              stopOpacity={0.4}
                            />
                            <stop
                              offset="95%"
                              stopColor="#10b981"
                              stopOpacity={0.0}
                            />
                          </linearGradient>
                          <linearGradient
                            id="interestGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#6366f1"
                              stopOpacity={0.3}
                            />
                            <stop
                              offset="95%"
                              stopColor="#6366f1"
                              stopOpacity={0.0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                        <XAxis
                          dataKey="date"
                          tick={{ fontSize: 11 }}
                          tickLine={false}
                        />
                        <YAxis
                          tickFormatter={(v) => fmtShort(v)}
                          tick={{ fontSize: 11 }}
                          tickLine={false}
                        />
                        <Tooltip
                          formatter={(
                            val:
                              | number
                              | string
                              | readonly (number | string)[]
                              | undefined,
                          ) => [
                            fmtCurrency(
                              Number(Array.isArray(val) ? val[0] : (val ?? 0)),
                              0,
                            ),
                          ]}
                          contentStyle={{
                            backgroundColor: "#0f172a",
                            borderRadius: "12px",
                            border: "none",
                            color: "#fff",
                            fontSize: "12px",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="balance"
                          name="Remaining Balance"
                          stroke="#10b981"
                          strokeWidth={2.5}
                          fillOpacity={1}
                          fill="url(#balanceGrad)"
                        />
                        <Area
                          type="monotone"
                          dataKey="interest"
                          name="Cumulative Interest"
                          stroke="#6366f1"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#interestGrad)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full flex items-center justify-center text-xs text-slate-400">
                      Loading chart...
                    </div>
                  )}
                </div>
              </div>

              {/* Annual Principal vs Interest Stacked Bar Chart */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Annual Principal vs. Interest Split
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    Notice interest decreases annually
                  </span>
                </div>

                <div className="h-[240px] w-full">
                  {isMounted ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={annualBarData}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                        <XAxis
                          dataKey="year"
                          tick={{ fontSize: 11 }}
                          tickLine={false}
                        />
                        <YAxis
                          tickFormatter={(v) => fmtShort(v)}
                          tick={{ fontSize: 11 }}
                          tickLine={false}
                        />
                        <Tooltip
                          formatter={(
                            val:
                              | number
                              | string
                              | readonly (number | string)[]
                              | undefined,
                          ) => [
                            fmtCurrency(
                              Number(Array.isArray(val) ? val[0] : (val ?? 0)),
                              0,
                            ),
                          ]}
                          contentStyle={{
                            backgroundColor: "#0f172a",
                            borderRadius: "12px",
                            border: "none",
                            color: "#fff",
                            fontSize: "12px",
                          }}
                        />
                        <Legend
                          wrapperStyle={{ fontSize: "11px", paddingTop: "8px" }}
                        />
                        <Bar
                          dataKey="Principal"
                          stackId="a"
                          fill="#10b981"
                          radius={[0, 0, 0, 0]}
                        />
                        <Bar
                          dataKey="Interest"
                          stackId="a"
                          fill="#6366f1"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full flex items-center justify-center text-xs text-slate-400">
                      Loading chart...
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ——— TAB 2: AMORTIZATION SCHEDULE ——— */}
          {activeTab === "schedule" && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    View Mode:
                  </span>
                  <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setScheduleView("annual")}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        scheduleView === "annual"
                          ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                          : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      Annual Summary
                    </button>
                    <button
                      type="button"
                      onClick={() => setScheduleView("monthly")}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        scheduleView === "monthly"
                          ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs"
                          : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      Monthly Breakdown
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={exportCSV}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors self-start sm:self-auto"
                >
                  <i
                    className="fas fa-download text-[10px]"
                    aria-hidden="true"
                  />
                  <span>Download Full Schedule (CSV)</span>
                </button>
              </div>

              {/* Table Container */}
              <div className="overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="py-2.5 px-3">
                        {scheduleView === "annual" ? "Year" : "#"}
                      </th>
                      {scheduleView === "monthly" && (
                        <th className="py-2.5 px-3">Date</th>
                      )}
                      <th className="py-2.5 px-3">Payment</th>
                      <th className="py-2.5 px-3">Principal</th>
                      <th className="py-2.5 px-3">Interest</th>
                      <th className="py-2.5 px-3">End Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium text-slate-700 dark:text-slate-300">
                    {scheduleView === "annual"
                      ? annualSchedule.map((row) => (
                          <tr
                            key={row.yearNum}
                            className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50"
                          >
                            <td className="py-2 px-3 font-bold text-slate-900 dark:text-white">
                              Year {row.yearNum}
                            </td>
                            <td className="py-2 px-3">
                              {fmtCurrency(row.totalPaid)}
                            </td>
                            <td className="py-2 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">
                              {fmtCurrency(row.principalPaid)}
                            </td>
                            <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400">
                              {fmtCurrency(row.interestPaid)}
                            </td>
                            <td className="py-2 px-3">
                              {fmtCurrency(row.endBalance)}
                            </td>
                          </tr>
                        ))
                      : activeCalc.schedule
                          .slice(schedulePage * 24, (schedulePage + 1) * 24)
                          .map((row) => (
                            <tr
                              key={row.paymentNumber}
                              className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50"
                            >
                              <td className="py-2 px-3 font-semibold text-slate-900 dark:text-white">
                                {row.paymentNumber}
                              </td>
                              <td className="py-2 px-3 text-slate-500">
                                {row.dateStr}
                              </td>
                              <td className="py-2 px-3">
                                {fmtCurrency(row.payment)}
                              </td>
                              <td className="py-2 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">
                                {fmtCurrency(row.principal)}
                              </td>
                              <td className="py-2 px-3 text-indigo-600 dark:text-indigo-400">
                                {fmtCurrency(row.interest)}
                              </td>
                              <td className="py-2 px-3">
                                {fmtCurrency(row.remainingBalance)}
                              </td>
                            </tr>
                          ))}
                  </tbody>
                </table>
              </div>

              {/* Monthly Pagination */}
              {scheduleView === "monthly" &&
                activeCalc.schedule.length > 24 && (
                  <div className="flex items-center justify-between pt-2 text-xs">
                    <span className="text-slate-500">
                      Showing {schedulePage * 24 + 1}–
                      {Math.min(
                        (schedulePage + 1) * 24,
                        activeCalc.schedule.length,
                      )}{" "}
                      of {activeCalc.schedule.length} payments
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        disabled={schedulePage === 0}
                        onClick={() =>
                          setSchedulePage((p) => Math.max(0, p - 1))
                        }
                        className="px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 disabled:opacity-30 font-semibold"
                      >
                        Prev
                      </button>
                      <span className="px-2 text-slate-600 dark:text-slate-400">
                        Page {schedulePage + 1} /{" "}
                        {Math.ceil(activeCalc.schedule.length / 24)}
                      </span>
                      <button
                        type="button"
                        disabled={
                          (schedulePage + 1) * 24 >= activeCalc.schedule.length
                        }
                        onClick={() => setSchedulePage((p) => p + 1)}
                        className="px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 disabled:opacity-30 font-semibold"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
            </div>
          )}

          {/* ——— TAB 3: TERM COMPARISON ——— */}
          {activeTab === "comparison" && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 shadow-xs space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Term Length Comparison for {fmtCurrency(loanAmount, 0)} at{" "}
                  {interestRate}% APR
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Shorter terms require higher monthly payments but drastically
                  lower overall interest cost.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="py-2.5 px-3">Term Length</th>
                      <th className="py-2.5 px-3">Monthly Payment</th>
                      <th className="py-2.5 px-3">Total Interest</th>
                      <th className="py-2.5 px-3">Total Paid</th>
                      <th className="py-2.5 px-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium text-slate-700 dark:text-slate-300">
                    {comparisonData.map((c) => {
                      const isCurrent = totalMonths === c.months;
                      return (
                        <tr
                          key={c.months}
                          className={
                            isCurrent
                              ? "bg-emerald-50/50 dark:bg-emerald-950/30 font-bold"
                              : "hover:bg-slate-50/80 dark:hover:bg-slate-800/50"
                          }
                        >
                          <td className="py-2.5 px-3 text-slate-900 dark:text-white">
                            {c.years} Years ({c.months} mo)
                            {isCurrent && (
                              <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-emerald-600 text-white font-semibold">
                                Current
                              </span>
                            )}
                          </td>
                          <td className="py-2.5 px-3 font-semibold text-emerald-600 dark:text-emerald-400">
                            {fmtCurrency(c.monthlyPayment)} /mo
                          </td>
                          <td className="py-2.5 px-3 text-indigo-600 dark:text-indigo-400">
                            {fmtCurrency(c.totalInterest, 0)}
                          </td>
                          <td className="py-2.5 px-3">
                            {fmtCurrency(c.totalCost, 0)}
                          </td>
                          <td className="py-2.5 px-3">
                            {!isCurrent && (
                              <button
                                type="button"
                                onClick={() => {
                                  setTermUnit("months");
                                  setTermMonthsInput(c.months);
                                }}
                                className="px-2.5 py-1 text-[11px] font-semibold rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                              >
                                Select
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ——— TAB 4: EXTRA PAYMENTS SIMULATOR ——— */}
          {activeTab === "simulator" && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 shadow-xs space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Extra Monthly Payment Savings Simulator
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  See how adding an extra amount each month cuts down both your
                  interest bill and repayment timeline.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3">
                {simulatorResults.map((s) => (
                  <div
                    key={s.extraMonthly}
                    className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                          +${s.extraMonthly}/month
                        </span>
                        <span className="text-[11px] font-medium text-slate-400">
                          {s.payoffYears} yrs payoff
                        </span>
                      </div>
                      <div className="text-lg font-black text-slate-900 dark:text-white mb-1">
                        Saves {fmtCurrency(s.interestSaved, 0)}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Total payment: {fmtCurrency(s.newPayment)}/mo
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
                      <span className="text-slate-500">
                        {Math.floor(s.monthsSaved / 12) > 0
                          ? `${Math.floor(s.monthsSaved / 12)} yr ${s.monthsSaved % 12} mo`
                          : `${s.monthsSaved} mo`}{" "}
                        sooner
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setShowExtraPayments(true);
                          setExtraMonthly(s.extraMonthly);
                        }}
                        className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
