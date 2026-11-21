'use client';
import { useEffect, useRef, useState } from 'react';
import CalculatorActions from "@/components/CalculatorActions";
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function LoanTermCalculatorPage() {
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
          if (data.monthlyPayment !== undefined) setMonthlyPayment(data.monthlyPayment);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [loanAmount, setLoanAmount] = useState(25000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [monthlyPayment, setMonthlyPayment] = useState(500);
  const [result, setResult] = useState<null | { 
    months: number; 
    years: number; 
    totalInterest: number; 
    totalCost: number;
  }>(null);

  function calculate() {
    const r = interestRate / 100 / 12;
    const p = loanAmount;
    const m = monthlyPayment;
    
    // Calculate number of months using logarithmic formula
    // n = -log(1 - (r * P) / M) / log(1 + r)
    let months = 0;
    
    if (m <= p * r) {
      // Payment is too low to ever pay off
      setResult(null);
      return;
    }
    
    months = -Math.log(1 - (r * p) / m) / Math.log(1 + r);
    months = Math.ceil(months);
    
    const years = months / 12;
    const totalCost = m * months;
    const totalInterest = totalCost - p;
    
    setResult({
      months,
      years,
      totalInterest,
      totalCost,
    });
  }

  return (
    <div ref={resultRef} className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
    
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={loanAmount} min={0} step={1000} onChange={e => setLoanAmount(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Interest Rate (APR)</label>
          <div className="relative">
            <input type="number" value={interestRate} min={0} step={0.1} onChange={e => setInterestRate(Number(e.target.value))}
              className="w-full px-4 py-3 pr-10 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Monthly Payment</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={monthlyPayment} min={0} step={10} onChange={e => setMonthlyPayment(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Loan Term
        </button>
      </div>

      {result ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: 'Payoff Time', value: `${result.years.toFixed(1)} years`, bg: 'from-blue-500 to-blue-700' },
            { label: 'Total Interest', value: `${symbol}${fmt(result.totalInterest)}`, bg: 'from-amber-400 to-amber-600' },
            { label: 'Total Cost', value: `${symbol}${fmt(result.totalCost)}`, bg: 'from-slate-600 to-slate-800' },
          ].map(s => (
            <div key={s.label} className={`rounded-2xl p-5 bg-gradient-to-br ${s.bg} text-white text-center shadow-lg`}>
              <div className="text-xs opacity-80 mb-1">{s.label}</div>
              <div className="text-lg font-extrabold">{s.value}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-5 border border-amber-200 dark:border-amber-800">
          <p className="text-sm text-amber-700 dark:text-amber-300 text-center">
            <i className="fas fa-exclamation-triangle mr-2" />
            Monthly payment must be greater than the monthly interest charge to pay off the loan.
          </p>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/finance" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Financial Calculators
        </Link>
      
        <CalculatorActions
          calculatorId="loan-term-calculator"
          calculatorName="Loan Term Calculator"
          inputData={{ loanAmount, interestRate, monthlyPayment }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}