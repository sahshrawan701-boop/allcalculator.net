"use client";
import { useEffect, useRef, useState } from "react";
import CalculatorActions from "@/components/CalculatorActions";
import Link from "next/link";

function fmt(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function StudentLoanCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.loanAmount !== undefined) setLoanAmount(data.loanAmount);
          if (data.interestRate !== undefined) setInterestRate(data.interestRate);
          if (data.loanTerm !== undefined) setLoanTerm(data.loanTerm);
          if (data.extraPayment !== undefined) setExtraPayment(data.extraPayment);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const [loanAmount, setLoanAmount] = useState(30000);
  const [interestRate, setInterestRate] = useState(6.8);
  const [loanTerm, setLoanTerm] = useState(120);
  const [extraPayment, setExtraPayment] = useState(0);
  const [result, setResult] = useState<null | {
    monthly: number;
    totalInterest: number;
    totalCost: number;
    timeSaved: number;
    interestSaved: number;
  }>(null);

  function calculate() {
    const r = interestRate / 100 / 12;
    const n = loanTerm;
    const monthly =
      r === 0
        ? loanAmount / n
        : (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalCost = monthly * n;
    const totalInterest = totalCost - loanAmount;

    // Calculate with extra payment
    let balance = loanAmount;
    let interestWithExtra = 0;
    let monthsWithExtra = 0;
    const totalMonthly = monthly + extraPayment;

    while (balance > 0 && monthsWithExtra < 600) {
      const interest = balance * r;
      interestWithExtra += interest;
      balance = balance + interest - totalMonthly;
      monthsWithExtra++;
    }

    const timeSaved = n - monthsWithExtra;
    const interestSaved = totalInterest - interestWithExtra;

    setResult({
      monthly,
      totalInterest,
      totalCost,
      timeSaved,
      interestSaved,
    });
  }

  return (
    <div ref={resultRef} className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Loan Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
              $
            </span>
            <input
              type="number"
              value={loanAmount}
              min={0}
              step={1000}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Interest Rate (APR)
          </label>
          <div className="relative">
            <input
              type="number"
              value={interestRate}
              min={0}
              step={0.1}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-4 py-3 pr-10 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              %
            </span>
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Loan Term
          </label>
          <div className="flex flex-wrap gap-2">
            {[60, 84, 120, 180, 240].map((m) => (
              <button
                key={m}
                onClick={() => setLoanTerm(m)}
                className={`py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all ${loanTerm === m ? "bg-blue-500 border-blue-500 text-white" : "border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300"}`}
              >
                {m} mo
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Extra Monthly Payment (Optional)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
              $
            </span>
            <input
              type="number"
              value={extraPayment}
              min={0}
              step={10}
              onChange={(e) => setExtraPayment(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <button
          onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
        >
          <i className="fas fa-calculator" /> Calculate Loan
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            {
              label: "Monthly Payment",
              value: `$${fmt(result.monthly)}`,
              bg: "from-blue-500 to-blue-700",
            },
            {
              label: "Total Interest",
              value: `$${fmt(result.totalInterest)}`,
              bg: "from-amber-400 to-amber-600",
            },
            {
              label: "Total Cost",
              value: `$${fmt(result.totalCost)}`,
              bg: "from-slate-600 to-slate-800",
            },
          ].map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl p-5 bg-gradient-to-br ${s.bg} text-white text-center shadow-lg`}
            >
              <div className="text-xs opacity-80 mb-1">{s.label}</div>
              <div className="text-lg font-extrabold">{s.value}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link
          href="/finance"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" /> All Financial Calculators
        </Link>
      
        <CalculatorActions
          calculatorId="student-loan-calculator"
          calculatorName="Student Loan Calculator"
          inputData={{ loanAmount, interestRate, loanTerm, extraPayment }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}