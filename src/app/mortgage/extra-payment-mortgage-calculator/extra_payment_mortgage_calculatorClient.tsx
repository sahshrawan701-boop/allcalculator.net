'use client';
import { useState } from 'react';
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function ExtraPaymentMortgageCalculatorPage() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [extraPayment, setExtraPayment] = useState(500);
  const [result, setResult] = useState<null | { 
    normalMonthly: number; 
    normalTotalInterest: number;
    acceleratedTotalInterest: number;
    interestSaved: number;
    timeSaved: number;
  }>(null);

  function calculate() {
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    
    // Normal payment calculation
    const normalMonthly = r === 0 ? loanAmount / n : (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const normalTotalCost = normalMonthly * n;
    const normalTotalInterest = normalTotalCost - loanAmount;
    
    // Accelerated payment calculation
    let balance = loanAmount;
    let interestAccelerated = 0;
    let monthsAccelerated = 0;
    const totalMonthly = normalMonthly + extraPayment;
    
    while (balance > 0 && monthsAccelerated < 600) {
      const interest = balance * r;
      interestAccelerated += interest;
      balance = balance + interest - totalMonthly;
      monthsAccelerated++;
    }
    
    const acceleratedTotalInterest = interestAccelerated;
    const interestSaved = normalTotalInterest - acceleratedTotalInterest;
    const timeSaved = n - monthsAccelerated;
    
    setResult({
      normalMonthly,
      normalTotalInterest,
      acceleratedTotalInterest,
      interestSaved,
      timeSaved,
    });
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={loanAmount} min={0} step={10000} onChange={e => setLoanAmount(Number(e.target.value))}
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
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Term</label>
          <div className="flex flex-wrap gap-2">
            {[15, 20, 30].map(y => (
              <button key={y} onClick={() => setLoanTerm(y)}
                className={`py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all ${loanTerm === y ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {y} yr
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Extra Monthly Payment</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={extraPayment} min={0} step={50} onChange={e => setExtraPayment(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Extra Payment
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Extra Payment Savings</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl p-5 bg-gradient-to-br from-green-500 to-green-700 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Interest Saved</div>
              <div className="text-2xl font-extrabold">{symbol}{fmt(result.interestSaved)}</div>
            </div>
            <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Time Saved</div>
              <div className="text-2xl font-extrabold">{Math.floor(result.timeSaved / 12)} yr</div>
            </div>
          </div>
          
          <div className="rounded-2xl p-5 bg-gradient-to-br from-slate-600 to-slate-800 text-white text-center shadow-lg mb-6">
            <div className="text-xs opacity-80 mb-1">Normal Monthly Payment</div>
            <div className="text-2xl font-extrabold">{symbol}{fmt(result.normalMonthly)}</div>
          </div>
          
          <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-3">Interest Comparison</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
              <span className="text-sm text-red-700 dark:text-red-300">Normal Total Interest</span>
              <span className="text-sm font-bold text-red-700 dark:text-red-300">{symbol}{fmt(result.normalTotalInterest)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <span className="text-sm text-green-700 dark:text-green-300">Accelerated Total Interest</span>
              <span className="text-sm font-bold text-green-700 dark:text-green-300">{symbol}{fmt(result.acceleratedTotalInterest)}</span>
            </div>
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
