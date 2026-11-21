'use client';
import { useEffect, useRef, useState } from 'react';
import CalculatorActions from "@/components/CalculatorActions";
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function InterestRateCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.principal !== undefined) setPrincipal(data.principal);
          if (data.monthlyPayment !== undefined) setMonthlyPayment(data.monthlyPayment);
          if (data.loanTerm !== undefined) setLoanTerm(data.loanTerm);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [principal, setPrincipal] = useState(10000);
  const [monthlyPayment, setMonthlyPayment] = useState(300);
  const [loanTerm, setLoanTerm] = useState(36);
  const [result, setResult] = useState<null | { 
    annualRate: number; 
    totalInterest: number; 
    totalCost: number;
  }>(null);

  function calculate() {
    const n = loanTerm;
    const p = principal;
    const m = monthlyPayment;
    
    // Calculate interest rate using the formula for monthly payment
    // m = P * r * (1+r)^n / ((1+r)^n - 1)
    // We need to solve for r using numerical approximation
    let r = 0.01; // Initial guess
    const maxIterations = 1000;
    const tolerance = 0.000001;
    
    for (let i = 0; i < maxIterations; i++) {
      const f = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1) - m;
      if (Math.abs(f) < tolerance) break;
      r = r - f / (p * Math.pow(1 + r, n - 1) * (Math.pow(1 + r, n) * (n * r - 1) + 1) / Math.pow(Math.pow(1 + r, n) - 1, 2));
    }
    
    const annualRate = r * 12 * 100;
    const totalCost = m * n;
    const totalInterest = totalCost - p;
    
    setResult({
      annualRate,
      totalInterest,
      totalCost,
    });
  }

  return (
    <div ref={resultRef} className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
  
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Principal Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={principal} min={0} step={100} onChange={e => setPrincipal(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Monthly Payment</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={monthlyPayment} min={0} step={10} onChange={e => setMonthlyPayment(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Term</label>
          <div className="flex flex-wrap gap-2">
            {[12, 24, 36, 48, 60, 72, 84].map(m => (
              <button key={m} onClick={() => setLoanTerm(m)}
                className={`py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all ${loanTerm === m ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {m} mo
              </button>
            ))}
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Interest Rate
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Interest Rate Analysis</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Annual Rate</div>
              <div className="text-2xl font-extrabold">{fmt(result.annualRate)}%</div>
            </div>
            <div className="rounded-2xl p-5 bg-gradient-to-br from-amber-500 to-amber-700 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Total Interest</div>
              <div className="text-2xl font-extrabold">{symbol}{fmt(result.totalInterest)}</div>
            </div>
            <div className="rounded-2xl p-5 bg-gradient-to-br from-slate-600 to-slate-800 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Total Cost</div>
              <div className="text-2xl font-extrabold">{symbol}{fmt(result.totalCost)}</div>
            </div>
          </div>
          
          <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-3">Loan Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
              <span className="text-sm text-slate-800 dark:text-slate-100">Principal Amount</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(principal)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
              <span className="text-sm text-slate-800 dark:text-slate-100">Monthly Payment</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(monthlyPayment)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
              <span className="text-sm text-slate-800 dark:text-slate-100">Loan Term</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{loanTerm} months</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
              <span className="text-sm text-red-700 dark:text-red-300">Interest Percentage</span>
              <span className="text-sm font-bold text-red-700 dark:text-red-300">{fmt((result.totalInterest / principal) * 100)}%</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/finance" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Financial Calculators
        </Link>
      
        <CalculatorActions
          calculatorId="interest-rate-calculator"
          calculatorName="Interest Rate Calculator"
          inputData={{ principal, monthlyPayment, loanTerm }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}