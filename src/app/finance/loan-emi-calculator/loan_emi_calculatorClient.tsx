'use client';
import { useEffect, useRef, useState } from 'react';
import CalculatorActions from "@/components/CalculatorActions";
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function LoanEMICalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.principal !== undefined) setPrincipal(data.principal);
          if (data.interestRate !== undefined) setInterestRate(data.interestRate);
          if (data.tenure !== undefined) setTenure(data.tenure);
          if (data.tenureType !== undefined) setTenureType(data.tenureType);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [principal, setPrincipal] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [tenureType, setTenureType] = useState('years');
  const [result, setResult] = useState<null | { 
    emi: number; 
    totalInterest: number; 
    totalAmount: number;
  }>(null);

  function calculate() {
    const r = interestRate / 100 / 12;
    const n = tenureType === 'years' ? tenure * 12 : tenure;
    
    const emi = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - principal;
    
    setResult({
      emi,
      totalInterest,
      totalAmount,
    });
  }

  return (
    <div ref={resultRef} className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
     
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Principal Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={principal} min={0} step={1000} onChange={e => setPrincipal(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Interest Rate (Annual)</label>
          <div className="relative">
            <input type="number" value={interestRate} min={0} step={0.1} onChange={e => setInterestRate(Number(e.target.value))}
              className="w-full px-4 py-3 pr-10 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Tenure Type</label>
          <div className="flex flex-wrap gap-2">
            {[
              { value: 'years', label: 'Years' },
              { value: 'months', label: 'Months' },
            ].map(type => (
              <button key={type.value} onClick={() => setTenureType(type.value)}
                className={`py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all ${tenureType === type.value ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Tenure</label>
          <div className="relative">
            <input type="number" value={tenure} min={1} max={30} step={1} onChange={e => setTenure(Number(e.target.value))}
              className="w-full px-4 py-3 pr-20 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">{tenureType === 'years' ? 'years' : 'months'}</span>
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate EMI
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: 'Monthly EMI', value: `${symbol}${fmt(result.emi)}`, bg: 'from-blue-500 to-blue-700' },
            { label: 'Total Interest', value: `${symbol}${fmt(result.totalInterest)}`, bg: 'from-amber-400 to-amber-600' },
            { label: 'Total Amount', value: `${symbol}${fmt(result.totalAmount)}`, bg: 'from-slate-600 to-slate-800' },
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
          calculatorId="loan-emi-calculator"
          calculatorName="Loan E M I Calculator"
          inputData={{ principal, interestRate, tenure, tenureType }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}