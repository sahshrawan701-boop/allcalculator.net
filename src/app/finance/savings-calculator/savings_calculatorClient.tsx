'use client';
import { useEffect, useRef, useState } from 'react';
import CalculatorActions from "@/components/CalculatorActions";
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function SavingsCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.initialDeposit !== undefined) setInitialDeposit(data.initialDeposit);
          if (data.monthlyContribution !== undefined) setMonthlyContribution(data.monthlyContribution);
          if (data.interestRate !== undefined) setInterestRate(data.interestRate);
          if (data.years !== undefined) setYears(data.years);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [initialDeposit, setInitialDeposit] = useState(5000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [interestRate, setInterestRate] = useState(4.5);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState<null | { 
    totalBalance: number; 
    totalContributions: number; 
    totalInterest: number;
  }>(null);

  function calculate() {
    const r = interestRate / 100 / 12;
    const n = years * 12;
    
    const futureValueInitial = initialDeposit * Math.pow(1 + r, n);
    const futureValueContributions = monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);
    const totalBalance = futureValueInitial + futureValueContributions;
    const totalContributions = initialDeposit + (monthlyContribution * n);
    const totalInterest = totalBalance - totalContributions;
    
    setResult({
      totalBalance,
      totalContributions,
      totalInterest,
    });
  }

  return (
    <div ref={resultRef} className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Initial Deposit</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={initialDeposit} min={0} step={1000} onChange={e => setInitialDeposit(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Monthly Contribution</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={monthlyContribution} min={0} step={50} onChange={e => setMonthlyContribution(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Interest Rate (APY)</label>
          <div className="relative">
            <input type="number" value={interestRate} min={0} step={0.1} onChange={e => setInterestRate(Number(e.target.value))}
              className="w-full px-4 py-3 pr-10 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Time Period</label>
          <div className="flex flex-wrap gap-2">
            {[1, 5, 10, 15, 20, 30].map(y => (
              <button key={y} onClick={() => setYears(y)}
                className={`py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all ${years === y ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {y} yr
              </button>
            ))}
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Savings
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: 'Total Balance', value: `${symbol}${fmt(result.totalBalance)}`, bg: 'from-green-500 to-green-700' },
            { label: 'Total Contributions', value: `${symbol}${fmt(result.totalContributions)}`, bg: 'from-blue-500 to-blue-700' },
            { label: 'Total Interest', value: `${symbol}${fmt(result.totalInterest)}`, bg: 'from-amber-400 to-amber-600' },
          ].map(s => (
            <div key={s.label} className={`rounded-2xl p-5 bg-gradient-to-br ${s.bg} text-white text-center shadow-lg`}>
              <div className="text-xs opacity-80 mb-1">{s.label}</div>
              <div className="text-lg font-extrabold">{s.value}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/finance" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Financial Calculators
        </Link>
      
        <CalculatorActions
          calculatorId="savings-calculator"
          calculatorName="Savings Calculator"
          inputData={{ initialDeposit, monthlyContribution, interestRate, years }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}