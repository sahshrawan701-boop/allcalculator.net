'use client';
import { useState } from 'react';
import Link from 'next/link';

function fmt(n: number) { return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

export default function AlimonyCalculatorPage() {
  const [spouse1Income, setSpouse1Income] = useState(5000);
  const [spouse2Income, setSpouse2Income] = useState(3000);
  const [marriageLength, setMarriageLength] = useState(5);
  const [result, setResult] = useState<null | {
    monthlyPayment: number;
    percentage: number;
    duration: string;
  }>(null);

  function calculate() {
    const higherIncome = Math.max(spouse1Income, spouse2Income);
    const lowerIncome = Math.min(spouse1Income, spouse2Income);
    const incomeDifference = higherIncome - lowerIncome;
    
    // Simplified calculation for estimation purposes
    // This is a rough estimate and not legal advice
    let percentage = 0.25; // Base 25% of income difference
    if (marriageLength < 5) percentage = 0.20;
    else if (marriageLength >= 5 && marriageLength < 10) percentage = 0.25;
    else if (marriageLength >= 10 && marriageLength < 20) percentage = 0.30;
    else if (marriageLength >= 20) percentage = 0.35;
    
    const monthlyPayment = incomeDifference * percentage;
    
    let duration = '';
    if (marriageLength < 5) duration = 'Up to 50% of marriage length';
    else if (marriageLength >= 5 && marriageLength < 10) duration = 'Up to 60% of marriage length';
    else if (marriageLength >= 10 && marriageLength < 20) duration = 'Up to 70% of marriage length';
    else if (marriageLength >= 20) duration = 'Long-term or permanent';
    
    setResult({
      monthlyPayment,
      percentage: percentage * 100,
      duration,
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Spouse 1 Monthly Income</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={spouse1Income} min={0} step={100} onChange={e => setSpouse1Income(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500" />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Spouse 2 Monthly Income</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={spouse2Income} min={0} step={100} onChange={e => setSpouse2Income(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500" />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Length of Marriage (Years)</label>
          <input type="number" value={marriageLength} min={0} step={1} onChange={e => setMarriageLength(Number(e.target.value))}
            className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500" />
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-violet-500 to-violet-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
          <i className="fas fa-gavel" /> Calculate Alimony Estimate
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-gradient-to-br from-violet-500 to-violet-700 rounded-xl p-4 sm:p-5 text-white text-center">
              <div className="text-xs opacity-80 mb-1">Estimated Monthly Payment</div>
              <div className="text-2xl sm:text-3xl font-extrabold">${fmt(result.monthlyPayment)}</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl p-4 sm:p-5 text-white text-center">
              <div className="text-xs opacity-80 mb-1">Income Difference Applied</div>
              <div className="text-2xl sm:text-3xl font-extrabold">{result.percentage.toFixed(0)}%</div>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
            <div className="text-sm text-slate-400 mb-1">Estimated Duration</div>
            <div className="text-lg font-bold text-slate-800 dark:text-slate-100">{result.duration}</div>
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
