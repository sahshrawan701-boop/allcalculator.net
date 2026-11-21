'use client';
import { useEffect, useRef, useState } from 'react';
import CalculatorActions from "@/components/CalculatorActions";
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function PaydayLoanCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.loanAmount !== undefined) setLoanAmount(data.loanAmount);
          if (data.fee !== undefined) setFee(data.fee);
          if (data.loanTerm !== undefined) setLoanTerm(data.loanTerm);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [loanAmount, setLoanAmount] = useState(500);
  const [fee, setFee] = useState(50);
  const [loanTerm, setLoanTerm] = useState(14);
  const [result, setResult] = useState<null | { 
    apr: number; 
    totalRepayment: number; 
    totalCost: number;
  }>(null);

  function calculate() {
    const totalRepayment = loanAmount + fee;
    const totalCost = fee;
    const days = loanTerm;
    const apr = ((totalCost / loanAmount) * (365 / days)) * 100;
    
    setResult({
      apr,
      totalRepayment,
      totalCost,
    });
  }

  return (
    <div ref={resultRef} className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
    
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={loanAmount} min={0} step={50} onChange={e => setLoanAmount(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Fee</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={fee} min={0} step={5} onChange={e => setFee(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Term (Days)</label>
          <div className="flex flex-wrap gap-2">
            {[7, 14, 21, 30].map(d => (
              <button key={d} onClick={() => setLoanTerm(d)}
                className={`py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all ${loanTerm === d ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {d} days
              </button>
            ))}
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate APR
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: 'True APR', value: `${fmt(result.apr)}%`, bg: 'from-red-500 to-red-700' },
            { label: 'Total Repayment', value: `${symbol}${fmt(result.totalRepayment)}`, bg: 'from-blue-500 to-blue-700' },
            { label: 'Total Cost', value: `${symbol}${fmt(result.totalCost)}`, bg: 'from-amber-400 to-amber-600' },
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
      
        <CalculatorActions
          calculatorId="payday-loan-calculator"
          calculatorName="Payday Loan Calculator"
          inputData={{ loanAmount, fee, loanTerm }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}