'use client';
import { useState } from 'react';
import Link from 'next/link';

function fmt(n: number) { return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

export default function TipCalculatorPage() {
  const [billAmount, setBillAmount] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [splitBetween, setSplitBetween] = useState(1);
  const [result, setResult] = useState<null | { 
    tipAmount: number; 
    totalAmount: number; 
    perPerson: number;
  }>(null);

  function calculate() {
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    const perPerson = totalAmount / splitBetween;
    
    setResult({
      tipAmount,
      totalAmount,
      perPerson,
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Bill Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={billAmount} min={0} step={1} onChange={e => setBillAmount(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Tip Percentage</label>
          <div className="flex flex-wrap gap-2">
            {[10, 12, 15, 18, 20, 25].map(p => (
              <button key={p} onClick={() => setTipPercentage(p)}
                className={`py-2 px-3 sm:px-4 rounded-lg border-2 text-xs sm:text-sm font-medium transition-all ${tipPercentage === p ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {p}%
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Split Between</label>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 8, 10].map(p => (
              <button key={p} onClick={() => setSplitBetween(p)}
                className={`py-2 px-3 sm:px-4 rounded-lg border-2 text-xs sm:text-sm font-medium transition-all ${splitBetween === p ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {p}
              </button>
            ))}
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
          <i className="fas fa-calculator" /> Calculate Tip
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            { label: 'Tip Amount', value: `$${fmt(result.tipAmount)}`, bg: 'from-green-500 to-green-700' },
            { label: 'Total Amount', value: `$${fmt(result.totalAmount)}`, bg: 'from-blue-500 to-blue-700' },
            { label: 'Per Person', value: `$${fmt(result.perPerson)}`, bg: 'from-amber-400 to-amber-600' },
          ].map(s => (
            <div key={s.label} className={`rounded-2xl p-4 sm:p-5 bg-gradient-to-br ${s.bg} text-white text-center shadow-lg`}>
              <div className="text-xs opacity-80 mb-1">{s.label}</div>
              <div className="text-sm sm:text-lg font-extrabold">{s.value}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/lifestyle" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Lifestyle Calculators
        </Link>
      </div>
    </div>
  );
}
