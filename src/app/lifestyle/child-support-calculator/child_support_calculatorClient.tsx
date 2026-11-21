'use client';
import { useState } from 'react';
import Link from 'next/link';

function fmt(n: number) { return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

export default function ChildSupportCalculatorPage() {
  const [nonCustodialIncome, setNonCustodialIncome] = useState(4000);
  const [custodialIncome, setCustodialIncome] = useState(3000);
  const [numberOfChildren, setNumberOfChildren] = useState(1);
  const [result, setResult] = useState<null | {
    monthlySupport: number;
    percentage: number;
    perChild: number;
  }>(null);

  function calculate() {
    const totalIncome = nonCustodialIncome + custodialIncome;
    const incomePercentage = nonCustodialIncome / totalIncome;
    
    // Simplified calculation based on common guidelines
    // This is a rough estimate and not legal advice
    let supportPercentage = 0.17; // Base 17% for 1 child
    if (numberOfChildren === 1) supportPercentage = 0.17;
    else if (numberOfChildren === 2) supportPercentage = 0.25;
    else if (numberOfChildren === 3) supportPercentage = 0.29;
    else if (numberOfChildren === 4) supportPercentage = 0.32;
    else if (numberOfChildren >= 5) supportPercentage = 0.35;
    
    const monthlySupport = nonCustodialIncome * supportPercentage;
    const perChild = monthlySupport / numberOfChildren;
    
    setResult({
      monthlySupport,
      percentage: supportPercentage * 100,
      perChild,
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Non-Custodial Parent Monthly Income</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={nonCustodialIncome} min={0} step={100} onChange={e => setNonCustodialIncome(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Custodial Parent Monthly Income</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={custodialIncome} min={0} step={100} onChange={e => setCustodialIncome(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Number of Children</label>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <button key={n} onClick={() => setNumberOfChildren(n)}
                className={`py-2 px-4 sm:px-5 rounded-lg border-2 text-sm font-medium transition-all ${numberOfChildren === n ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {n}
              </button>
            ))}
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
          <i className="fas fa-child" /> Calculate Child Support Estimate
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 sm:p-5 text-white text-center">
              <div className="text-xs opacity-80 mb-1">Estimated Monthly Support</div>
              <div className="text-2xl sm:text-3xl font-extrabold">${fmt(result.monthlySupport)}</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-xl p-4 sm:p-5 text-white text-center">
              <div className="text-xs opacity-80 mb-1">Income Percentage Applied</div>
              <div className="text-2xl sm:text-3xl font-extrabold">{result.percentage.toFixed(0)}%</div>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
            <div className="text-sm text-slate-400 mb-1">Per Child Amount</div>
            <div className="text-lg font-bold text-slate-800 dark:text-slate-100">${fmt(result.perChild)}/month</div>
          </div>
        </div>
      )}

      <p className="text-center text-xs text-slate-400 dark:text-slate-400 mt-4">This calculator provides estimates only. Consult a legal professional for accurate calculations.</p>
      <div className="mt-6 text-center">
        <Link href="/lifestyle" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Lifestyle Calculators
        </Link>
      </div>
    </div>
  );
}
