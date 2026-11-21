'use client';
import { useEffect, useRef, useState } from 'react';
import CalculatorActions from "@/components/CalculatorActions";
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function SavingsGoalCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.goalAmount !== undefined) setGoalAmount(data.goalAmount);
          if (data.currentSavings !== undefined) setCurrentSavings(data.currentSavings);
          if (data.interestRate !== undefined) setInterestRate(data.interestRate);
          if (data.targetDate !== undefined) setTargetDate(data.targetDate);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [goalAmount, setGoalAmount] = useState(50000);
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [targetDate, setTargetDate] = useState(5);
  const [result, setResult] = useState<null | { 
    monthlySavings: number; 
    totalInterest: number; 
    totalContributions: number;
  }>(null);

  function calculate() {
    const r = interestRate / 100 / 12;
    const n = targetDate * 12;
    const pv = currentSavings;
    const fv = goalAmount;
    
    // Calculate monthly savings needed using future value formula
    // FV = PV * (1+r)^n + PMT * ((1+r)^n - 1) / r
    // PMT = (FV - PV * (1+r)^n) * r / ((1+r)^n - 1)
    const monthlySavings = (fv - pv * Math.pow(1 + r, n)) * r / (Math.pow(1 + r, n) - 1);
    const totalContributions = pv + (monthlySavings * n);
    const totalInterest = fv - totalContributions;
    
    setResult({
      monthlySavings,
      totalInterest,
      totalContributions,
    });
  }

  return (
    <div ref={resultRef} className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Goal Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={goalAmount} min={0} step={1000} onChange={e => setGoalAmount(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Current Savings</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={currentSavings} min={0} step={1000} onChange={e => setCurrentSavings(Number(e.target.value))}
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
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Target Date (Years)</label>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 5, 10, 15, 20].map(y => (
              <button key={y} onClick={() => setTargetDate(y)}
                className={`py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all ${targetDate === y ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {y} yr
              </button>
            ))}
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Monthly Savings
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: 'Monthly Savings', value: `${symbol}${fmt(result.monthlySavings)}`, bg: 'from-blue-500 to-blue-700' },
            { label: 'Total Interest', value: `${symbol}${fmt(result.totalInterest)}`, bg: 'from-green-500 to-green-700' },
            { label: 'Total Contributions', value: `${symbol}${fmt(result.totalContributions)}`, bg: 'from-slate-600 to-slate-800' },
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
          calculatorId="savings-goal-calculator"
          calculatorName="Savings Goal Calculator"
          inputData={{ goalAmount, currentSavings, interestRate, targetDate }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}