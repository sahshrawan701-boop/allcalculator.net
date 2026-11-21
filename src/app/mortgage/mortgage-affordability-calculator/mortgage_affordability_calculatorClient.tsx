'use client';
import { useState } from 'react';
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function MortgageAffordabilityCalculatorPage() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [annualIncome, setAnnualIncome] = useState(75000);
  const [monthlyDebt, setMonthlyDebt] = useState(500);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [result, setResult] = useState<null | { 
    maxMonthlyPayment: number; 
    maxLoanAmount: number; 
    maxHomePrice: number;
  }>(null);

  function calculate() {
    const monthlyIncome = annualIncome / 12;
    const maxMonthlyPayment = monthlyIncome * 0.28; // 28% front-end ratio
    const dtiPayment = monthlyIncome * 0.36 - monthlyDebt; // 36% back-end ratio
    const affordablePayment = Math.min(maxMonthlyPayment, dtiPayment);
    
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const maxLoanAmount = r === 0 ? affordablePayment * n : (affordablePayment * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
    const maxHomePrice = maxLoanAmount + downPayment;
    
    setResult({
      maxMonthlyPayment: affordablePayment,
      maxLoanAmount,
      maxHomePrice,
    });
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Annual Income</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={annualIncome} min={0} step={5000} onChange={e => setAnnualIncome(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Monthly Debt Payments</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={monthlyDebt} min={0} step={50} onChange={e => setMonthlyDebt(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Car loans, credit cards, student loans</p>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Down Payment</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={downPayment} min={0} step={5000} onChange={e => setDownPayment(Number(e.target.value))}
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

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Affordability
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: 'Max Monthly Payment', value: `${symbol}${fmt(result.maxMonthlyPayment)}`, bg: 'from-blue-500 to-blue-700' },
            { label: 'Max Loan Amount', value: `${symbol}${fmt(result.maxLoanAmount)}`, bg: 'from-green-500 to-green-700' },
            { label: 'Max Home Price', value: `${symbol}${fmt(result.maxHomePrice)}`, bg: 'from-amber-400 to-amber-600' },
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
