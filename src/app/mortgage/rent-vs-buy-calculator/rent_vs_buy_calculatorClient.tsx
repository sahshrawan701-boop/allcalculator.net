'use client';
import { useState } from 'react';
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function RentVsBuyCalculatorPage() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(20);
  const [mortgageRate, setMortgageRate] = useState(6.5);
  const [rentAmount, setRentAmount] = useState(2000);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState<null | { 
    monthlyMortgage: number; 
    totalRent: number; 
    totalMortgage: number;
    difference: number;
  }>(null);

  function calculate() {
    const downPaymentAmount = homePrice * (downPayment / 100);
    const loanAmount = homePrice - downPaymentAmount;
    const r = mortgageRate / 100 / 12;
    const n = years * 12;
    const monthlyMortgage = r === 0 ? loanAmount / n : (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    const totalRent = rentAmount * n;
    const totalMortgage = monthlyMortgage * n;
    const difference = totalRent - totalMortgage;
    
    setResult({
      monthlyMortgage,
      totalRent,
      totalMortgage,
      difference,
    });
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
   
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Home Price</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={homePrice} min={0} step={10000} onChange={e => setHomePrice(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Down Payment</label>
          <div className="flex flex-wrap gap-2">
            {[5, 10, 15, 20].map(p => (
              <button key={p} onClick={() => setDownPayment(p)}
                className={`py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all ${downPayment === p ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {p}%
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Mortgage Rate (APR)</label>
          <div className="relative">
            <input type="number" value={mortgageRate} min={0} step={0.1} onChange={e => setMortgageRate(Number(e.target.value))}
              className="w-full px-4 py-3 pr-10 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Monthly Rent</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={rentAmount} min={0} step={50} onChange={e => setRentAmount(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Time Period</label>
          <div className="flex flex-wrap gap-2">
            {[5, 10, 15, 20, 30].map(y => (
              <button key={y} onClick={() => setYears(y)}
                className={`py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all ${years === y ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {y} yr
              </button>
            ))}
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Comparison
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: 'Monthly Mortgage', value: `${symbol}${fmt(result.monthlyMortgage)}`, bg: 'from-blue-500 to-blue-700' },
            { label: 'Total Rent', value: `${symbol}${fmt(result.totalRent)}`, bg: 'from-red-500 to-red-700' },
            { label: 'Total Mortgage', value: `${symbol}${fmt(result.totalMortgage)}`, bg: 'from-green-500 to-green-700' },
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
      </div>
    </div>
  );
}
