'use client';
import { useState } from 'react';
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function RefinanceCalculatorPage() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [currentBalance, setCurrentBalance] = useState(250000);
  const [currentRate, setCurrentRate] = useState(7.5);
  const [currentTerm, setCurrentTerm] = useState(30);
  const [newRate, setNewRate] = useState(6.0);
  const [newTerm, setNewTerm] = useState(30);
  const [result, setResult] = useState<null | { 
    currentMonthly: number; 
    newMonthly: number; 
    monthlySavings: number;
    totalSavings: number;
  }>(null);

  function calculate() {
    const r1 = currentRate / 100 / 12;
    const n1 = currentTerm * 12;
    const currentMonthly = r1 === 0 ? currentBalance / n1 : (currentBalance * r1 * Math.pow(1 + r1, n1)) / (Math.pow(1 + r1, n1) - 1);
    
    const r2 = newRate / 100 / 12;
    const n2 = newTerm * 12;
    const newMonthly = r2 === 0 ? currentBalance / n2 : (currentBalance * r2 * Math.pow(1 + r2, n2)) / (Math.pow(1 + r2, n2) - 1);
    
    const monthlySavings = currentMonthly - newMonthly;
    const totalSavings = monthlySavings * n2;
    
    setResult({
      currentMonthly,
      newMonthly,
      monthlySavings,
      totalSavings,
    });
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
   
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Current Loan */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <i className="fas fa-1 text-blue-500" /> Current Loan
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Balance</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
              <input type="number" value={currentBalance} min={0} step={10000} onChange={e => setCurrentBalance(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Interest Rate (APR)</label>
            <div className="relative">
              <input type="number" value={currentRate} min={0} step={0.1} onChange={e => setCurrentRate(Number(e.target.value))}
                className="w-full px-4 py-3 pr-10 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Remaining Term</label>
            <div className="flex flex-wrap gap-2">
              {[15, 20, 30].map(y => (
                <button key={y} onClick={() => setCurrentTerm(y)}
                  className={`py-2 px-3 rounded-lg border-2 text-xs font-medium transition-all ${currentTerm === y ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                  {y} yr
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* New Loan */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <i className="fas fa-2 text-green-500" /> New Loan
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">New Interest Rate (APR)</label>
            <div className="relative">
              <input type="number" value={newRate} min={0} step={0.1} onChange={e => setNewRate(Number(e.target.value))}
                className="w-full px-4 py-3 pr-10 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">New Loan Term</label>
            <div className="flex flex-wrap gap-2">
              {[15, 20, 30].map(y => (
                <button key={y} onClick={() => setNewTerm(y)}
                  className={`py-2 px-3 rounded-lg border-2 text-xs font-medium transition-all ${newTerm === y ? 'bg-green-500 border-green-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-green-300'}`}>
                  {y} yr
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button onClick={calculate}
        className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 mb-6">
        <i className="fas fa-calculator" /> Calculate Refinance
      </button>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-6">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Refinance Savings</h2>
          
          {result.monthlySavings > 0 ? (
            <div className="rounded-2xl p-5 bg-gradient-to-br from-green-500 to-green-700 text-white text-center shadow-lg mb-6">
              <div className="text-xs opacity-80 mb-1">Total Savings</div>
              <div className="text-3xl font-extrabold">{symbol}{fmt(result.totalSavings)}</div>
            </div>
          ) : (
            <div className="rounded-2xl p-5 bg-gradient-to-br from-red-500 to-red-700 text-white text-center shadow-lg mb-6">
              <div className="text-xs opacity-80 mb-1">No Savings</div>
              <div className="text-2xl font-extrabold">Refinancing costs more</div>
            </div>
          )}
          
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl p-5 bg-gradient-to-br from-slate-600 to-slate-800 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Current Monthly</div>
              <div className="text-2xl font-extrabold">{symbol}{fmt(result.currentMonthly)}</div>
            </div>
            <div className="rounded-2xl p-5 bg-gradient-to-br from-green-500 to-green-700 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">New Monthly</div>
              <div className="text-2xl font-extrabold">{symbol}{fmt(result.newMonthly)}</div>
            </div>
          </div>
          
          <div className="rounded-2xl p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
              <i className="fas fa-lightbulb mr-2" />
              Monthly savings: ${fmt(result.monthlySavings)}
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/finance" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Financial Calculators
        </Link>
      </div>
    </div>
  );
}
