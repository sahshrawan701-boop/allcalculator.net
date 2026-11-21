"use client";

import { useState } from "react";
import Link from "next/link";
import MortgageArticle from "./mortgage_article";

import { useCurrency } from '@/hooks/useCurrency';
function fmt(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

interface MortgageResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  principal: number;
  schedule: {
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }[];
}

export default function MortgageCalculatorPage() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [homePrice, setHomePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(70000);
  const [rate, setRate] = useState(6.5);
  const [termYears, setTermYears] = useState(30);
  const [result, setResult] = useState<MortgageResult | null>(null);
  const [showSchedule, setShowSchedule] = useState(false);

  function calculate() {
    const principal = homePrice - downPayment;
    const monthlyRate = rate / 100 / 12;
    const numPayments = termYears * 12;

    let monthlyPayment: number;
    if (monthlyRate === 0) {
      monthlyPayment = principal / numPayments;
    } else {
      monthlyPayment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    }

    const totalPayment = monthlyPayment * numPayments;
    const totalInterest = totalPayment - principal;

    // Amortization schedule (first 12 months for display)
    const schedule: MortgageResult["schedule"] = [];
    let balance = principal;
    for (let m = 1; m <= numPayments; m++) {
      const interest = balance * monthlyRate;
      const principalPaid = monthlyPayment - interest;
      balance -= principalPaid;
      schedule.push({
        month: m,
        payment: monthlyPayment,
        principal: principalPaid,
        interest,
        balance: Math.max(0, balance),
      });
    }

    setResult({
      monthlyPayment,
      totalPayment,
      totalInterest,
      principal,
      schedule,
    });
  }

  return (
    <div className="w-full mx-auto px-4 sm:px-8 py-8 pb-16">
      

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8">
        {/* Inputs */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 self-start">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-5 flex items-center gap-2">
            <i className="fas fa-home text-emerald-500" /> Loan Details
          </h2>

          {[
            {
              label: "Home Price",
              value: homePrice,
              set: setHomePrice,
              prefix: "$",
              step: 5000,
            },
            {
              label: "Down Payment",
              value: downPayment,
              set: setDownPayment,
              prefix: "$",
              step: 1000,
            },
          ].map((f) => (
            <div key={f.label} className="mb-4">
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {f.label}
                {f.label === "Down Payment" && homePrice > 0 && (
                  <span className="ml-2 text-xs text-slate-400 font-normal">
                    ({((downPayment / homePrice) * 100).toFixed(1)}%)
                  </span>
                )}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                  {f.prefix}
                </span>
                <input
                  type="number"
                  value={f.value}
                  min={0}
                  step={f.step}
                  onChange={(e) => f.set(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>
          ))}

          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Annual Interest Rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={rate}
                min={0}
                max={30}
                step={0.1}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-4 py-3 pr-10 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                %
              </span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Loan Term
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[10, 15, 20, 25, 30].map((y) => (
                <button
                  key={y}
                  onClick={() => setTermYears(y)}
                  className={`py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                    termYears === y
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-emerald-300"
                  }`}
                >
                  {y} yr
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full py-4 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 text-base"
          >
            <i className="fas fa-calculator" /> Calculate Mortgage
          </button>
        </section>

        {/* Results */}
        <section>
          {result ? (
            <>
              {/* Monthly payment hero */}
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-7 text-white mb-5 shadow-xl">
                <div className="text-sm font-medium text-white/80 mb-1">
                  Monthly Payment
                </div>
                <div className="text-5xl font-extrabold mb-3">
                  ${fmt(result.monthlyPayment)}
                </div>
                <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-4 mt-2">
                  <div>
                    <div className="text-white/70 text-xs mb-1">
                      Loan Amount
                    </div>
                    <div className="font-bold text-lg">
                      ${(result.principal / 1000).toFixed(0)}K
                    </div>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">
                      Total Interest
                    </div>
                    <div className="font-bold text-lg">
                      ${(result.totalInterest / 1000).toFixed(0)}K
                    </div>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">Total Cost</div>
                    <div className="font-bold text-lg">
                      ${(result.totalPayment / 1000).toFixed(0)}K
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                {[
                  {
                    label: "Loan Amount",
                    value: `${symbol}${fmt(result.principal)}`,
                    color: "text-emerald-600 dark:text-emerald-400",
                  },
                  {
                    label: "Total Payment",
                    value: `${symbol}${fmt(result.totalPayment)}`,
                    color: "text-blue-600 dark:text-blue-400",
                  },
                  {
                    label: "Total Interest",
                    value: `${symbol}${fmt(result.totalInterest)}`,
                    color: "text-amber-600 dark:text-amber-400",
                  },
                  {
                    label: "Interest %",
                    value: `${((result.totalInterest / result.totalPayment) * 100).toFixed(1)}%`,
                    color: "text-red-500",
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <div className="text-xs text-slate-400 dark:text-slate-400 mb-1">
                      {s.label}
                    </div>
                    <div className={`text-xl font-bold ${s.color}`}>
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Breakdown bar */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm mb-5">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">
                  Payment Composition
                </h3>
                <div className="flex h-6 rounded-full overflow-hidden mb-2">
                  <div
                    className="bg-emerald-500"
                    style={{
                      width: `${(result.principal / result.totalPayment) * 100}%`,
                    }}
                  />
                  <div
                    className="bg-amber-400"
                    style={{
                      width: `${(result.totalInterest / result.totalPayment) * 100}%`,
                    }}
                  />
                </div>
                <div className="flex gap-5 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                    Principal (
                    {((result.principal / result.totalPayment) * 100).toFixed(
                      1,
                    )}
                    %)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    Interest (
                    {(
                      (result.totalInterest / result.totalPayment) *
                      100
                    ).toFixed(1)}
                    %)
                  </span>
                </div>
              </div>

              {/* Amortization toggle */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <button
                  onClick={() => setShowSchedule((p) => !p)}
                  className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <i className="fas fa-table text-emerald-500" />
                    Amortization Schedule (first 24 months)
                  </span>
                  <i
                    className={`fas fa-chevron-${showSchedule ? "up" : "down"} text-slate-400`}
                  />
                </button>
                {showSchedule && (
                  <div className="overflow-x-auto border-t border-slate-200 dark:border-slate-800">
                    <table className="w-full text-xs">
                      <thead className="bg-slate-50 dark:bg-slate-900/50">
                        <tr>
                          {[
                            "Month",
                            "Payment",
                            "Principal",
                            "Interest",
                            "Balance",
                          ].map((h) => (
                            <th
                              key={h}
                              className="px-4 py-2.5 text-left font-semibold text-slate-800 dark:text-slate-100"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {result.schedule.slice(0, 24).map((row) => (
                          <tr
                            key={row.month}
                            className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors"
                          >
                            <td className="px-4 py-2 text-slate-800 dark:text-slate-400">
                              {row.month}
                            </td>
                            <td className="px-4 py-2 font-medium text-slate-800 dark:text-slate-100">
                              ${fmt(row.payment)}
                            </td>
                            <td className="px-4 py-2 text-emerald-600 dark:text-emerald-400">
                              ${fmt(row.principal)}
                            </td>
                            <td className="px-4 py-2 text-amber-600 dark:text-amber-400">
                              ${fmt(row.interest)}
                            </td>
                            <td className="px-4 py-2 text-slate-800 dark:text-slate-400">
                              ${fmt(row.balance)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-400 text-2xl mb-4">
                <i className="fas fa-home" />
              </div>
              <p className="text-slate-400 dark:text-slate-400 text-sm max-w-xs">
                Enter your home details and click &ldquo;Calculate
                Mortgage&rdquo; to see monthly payments and full amortization.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* SEO Article */}
      <MortgageArticle />

      <div className="mt-8 text-center">
        <Link
          href="/finance"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" /> All Financial Calculators
        </Link>
      </div>
    </div>
  );
}
