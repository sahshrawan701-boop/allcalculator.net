'use client';
import { useState } from 'react';
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function InvestmentCalculatorClient() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [initial, setInitial] = useState(10000);
  const [monthly, setMonthly] = useState(500);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(20);
  const [result, setResult] = useState<null | { fv: number; contributed: number; interest: number }>(null);

  function calculate() {
    const r = rate / 100 / 12;
    const n = years * 12;
    const fvPrincipal = initial * Math.pow(1 + r, n);
    const fvMonthly = r > 0 ? monthly * ((Math.pow(1 + r, n) - 1) / r) : monthly * n;
    const fv = fvPrincipal + fvMonthly;
    const contributed = initial + monthly * n;
    setResult({ fv, contributed, interest: fv - contributed });
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
    
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {[
            { label: 'Initial Investment', value: initial, set: setInitial, prefix: '$' },
            { label: 'Monthly Contribution', value: monthly, set: setMonthly, prefix: '$' },
          ].map(f => (
            <div key={f.label}>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">{f.label}</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">{f.prefix}</span>
                <input type="number" value={f.value} min={0} onChange={e => f.set(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500" />
              </div>
            </div>
          ))}
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Expected Annual Return</label>
            <div className="relative">
              <input type="number" value={rate} min={0} step={0.5} onChange={e => setRate(Number(e.target.value))}
                className="w-full px-4 py-3 pr-10 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Investment Period</label>
            <div className="relative">
              <input type="number" value={years} min={1} max={50} onChange={e => setYears(Number(e.target.value))}
                className="w-full px-4 py-3 pr-16 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">years</span>
            </div>
          </div>
        </div>
        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-emerald-500 to-cyan-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-chart-line" /> Calculate Returns
        </button>
      </div>
      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Future Value', value: `${symbol}${fmt(result.fv)}`, bg: 'from-emerald-500 to-cyan-600' },
            { label: 'Total Contributed', value: `${symbol}${fmt(result.contributed)}`, bg: 'from-blue-500 to-blue-700' },
            { label: 'Investment Returns', value: `${symbol}${fmt(result.interest)}`, bg: 'from-violet-500 to-violet-700' },
          ].map(s => (
            <div key={s.label} className={`rounded-2xl p-6 bg-gradient-to-br ${s.bg} text-white text-center shadow-lg`}>
              <div className="text-sm opacity-80 mb-1">{s.label}</div>
              <div className="text-xl font-extrabold">{s.value}</div>
            </div>
          ))}
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
