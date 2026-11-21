'use client';
import { useState } from 'react';
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function RetirementCalculatorPage() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContrib, setMonthlyContrib] = useState(500);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [result, setResult] = useState<null | { fv: number; contributed: number; interest: number; years: number }>(null);

  function calculate() {
    const years = retirementAge - currentAge;
    if (years <= 0) return;
    const r = expectedReturn / 100 / 12;
    const n = years * 12;
    const fvSavings = currentSavings * Math.pow(1 + r, n);
    const fvContrib = r > 0 ? monthlyContrib * ((Math.pow(1 + r, n) - 1) / r) : monthlyContrib * n;
    const fv = fvSavings + fvContrib;
    setResult({ fv, contributed: currentSavings + monthlyContrib * n, interest: fv - currentSavings - monthlyContrib * n, years });
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
     
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {[
            { label: 'Current Age', value: currentAge, set: setCurrentAge, suffix: 'years' },
            { label: 'Retirement Age', value: retirementAge, set: setRetirementAge, suffix: 'years' },
          ].map(f => (
            <div key={f.label}>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">{f.label}</label>
              <div className="relative">
                <input type="number" value={f.value} min={18} max={100} onChange={e => f.set(Number(e.target.value))}
                  className="w-full px-4 py-3 pr-16 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-amber-500" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">{f.suffix}</span>
              </div>
            </div>
          ))}
          {[
            { label: 'Current Savings', value: currentSavings, set: setCurrentSavings },
            { label: 'Monthly Contribution', value: monthlyContrib, set: setMonthlyContrib },
          ].map(f => (
            <div key={f.label}>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">{f.label}</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                <input type="number" value={f.value} min={0} onChange={e => f.set(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-amber-500" />
              </div>
            </div>
          ))}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Expected Annual Return</label>
            <div className="relative">
              <input type="number" value={expectedReturn} min={0} step={0.5} onChange={e => setExpectedReturn(Number(e.target.value))}
                className="w-full px-4 py-3 pr-10 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-amber-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            </div>
          </div>
        </div>
        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-amber-400 to-amber-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-piggy-bank" /> Calculate Retirement Savings
        </button>
      </div>
      {result && (
        <>
          <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-7 text-white text-center shadow-xl mb-4">
            <div className="text-sm opacity-80 mb-1">Estimated Retirement Savings (in {result.years} years)</div>
            <div className="text-5xl font-extrabold">{symbol}{fmt(result.fv)}</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Total Contributed', value: `${symbol}${fmt(result.contributed)}`, color: 'text-blue-600 dark:text-blue-400' },
              { label: 'Investment Returns', value: `${symbol}${fmt(result.interest)}`, color: 'text-emerald-600 dark:text-emerald-400' },
            ].map(s => (
              <div key={s.label} className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 text-center">
                <div className="text-xs text-slate-400 mb-1">{s.label}</div>
                <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="mt-8 text-center">
        <Link href="/finance" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Financial Calculators
        </Link>
      </div>
    </div>
  );
}
