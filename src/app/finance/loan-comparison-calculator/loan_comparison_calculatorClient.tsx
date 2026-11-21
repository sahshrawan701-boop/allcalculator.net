'use client';
import { useEffect, useRef, useState } from 'react';
import CalculatorActions from "@/components/CalculatorActions";
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function LoanComparisonCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.loan1Amount !== undefined) setLoan1Amount(data.loan1Amount);
          if (data.loan1Rate !== undefined) setLoan1Rate(data.loan1Rate);
          if (data.loan1Term !== undefined) setLoan1Term(data.loan1Term);
          if (data.loan2Amount !== undefined) setLoan2Amount(data.loan2Amount);
          if (data.loan2Rate !== undefined) setLoan2Rate(data.loan2Rate);
          if (data.loan2Term !== undefined) setLoan2Term(data.loan2Term);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [loan1Amount, setLoan1Amount] = useState(25000);
  const [loan1Rate, setLoan1Rate] = useState(7.5);
  const [loan1Term, setLoan1Term] = useState(60);
  const [loan2Amount, setLoan2Amount] = useState(25000);
  const [loan2Rate, setLoan2Rate] = useState(6.5);
  const [loan2Term, setLoan2Term] = useState(60);
  const [result, setResult] = useState<null | { 
    loan1: { monthly: number; total: number; interest: number };
    loan2: { monthly: number; total: number; interest: number };
    savings: number;
  }>(null);

  function calculateLoan(amount: number, rate: number, term: number) {
    const r = rate / 100 / 12;
    const n = term;
    const monthly = r === 0 ? amount / n : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    const interest = total - amount;
    return { monthly, total, interest };
  }

  function calculate() {
    const loan1 = calculateLoan(loan1Amount, loan1Rate, loan1Term);
    const loan2 = calculateLoan(loan2Amount, loan2Rate, loan2Term);
    const savings = loan1.total - loan2.total;
    
    setResult({
      loan1,
      loan2,
      savings,
    });
  }

  return (
    <div ref={resultRef} className="max-w-[900px] mx-auto px-4 sm:px-8 py-8 pb-16">
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Loan 1 */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <i className="fas fa-1 text-blue-500" /> Loan Option 1
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
              <input type="number" value={loan1Amount} min={0} step={1000} onChange={e => setLoan1Amount(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Interest Rate (APR)</label>
            <div className="relative">
              <input type="number" value={loan1Rate} min={0} step={0.1} onChange={e => setLoan1Rate(Number(e.target.value))}
                className="w-full px-4 py-3 pr-10 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Term</label>
            <div className="flex flex-wrap gap-2">
              {[12, 24, 36, 48, 60, 72, 84].map(m => (
                <button key={m} onClick={() => setLoan1Term(m)}
                  className={`py-2 px-3 rounded-lg border-2 text-xs font-medium transition-all ${loan1Term === m ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                  {m} mo
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loan 2 */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <i className="fas fa-2 text-green-500" /> Loan Option 2
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
              <input type="number" value={loan2Amount} min={0} step={1000} onChange={e => setLoan2Amount(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Interest Rate (APR)</label>
            <div className="relative">
              <input type="number" value={loan2Rate} min={0} step={0.1} onChange={e => setLoan2Rate(Number(e.target.value))}
                className="w-full px-4 py-3 pr-10 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">%</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Term</label>
            <div className="flex flex-wrap gap-2">
              {[12, 24, 36, 48, 60, 72, 84].map(m => (
                <button key={m} onClick={() => setLoan2Term(m)}
                  className={`py-2 px-3 rounded-lg border-2 text-xs font-medium transition-all ${loan2Term === m ? 'bg-green-500 border-green-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-green-300'}`}>
                  {m} mo
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button onClick={calculate}
        className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 mb-6">
        <i className="fas fa-calculator" /> Compare Loans
      </button>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-6">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Comparison Results</h2>
          
          {result.savings > 0 ? (
            <div className="rounded-2xl p-5 bg-gradient-to-br from-green-500 to-green-700 text-white text-center shadow-lg mb-6">
              <div className="text-xs opacity-80 mb-1">Loan 2 Saves You</div>
              <div className="text-3xl font-extrabold">{symbol}{fmt(result.savings)}</div>
            </div>
          ) : (
            <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center shadow-lg mb-6">
              <div className="text-xs opacity-80 mb-1">Loan 1 Saves You</div>
              <div className="text-3xl font-extrabold">{symbol}{fmt(Math.abs(result.savings))}</div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Loan 1 Results */}
            <div className="rounded-2xl p-5 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800">
              <h3 className="text-md font-bold text-blue-700 dark:text-blue-300 mb-4">Loan Option 1</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-800 dark:text-slate-100">Monthly Payment</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(result.loan1.monthly)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-800 dark:text-slate-100">Total Interest</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(result.loan1.interest)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-800 dark:text-slate-100">Total Cost</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(result.loan1.total)}</span>
                </div>
              </div>
            </div>

            {/* Loan 2 Results */}
            <div className="rounded-2xl p-5 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-md font-bold text-green-700 dark:text-green-300 mb-4">Loan Option 2</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-800 dark:text-slate-100">Monthly Payment</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(result.loan2.monthly)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-800 dark:text-slate-100">Total Interest</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(result.loan2.interest)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-800 dark:text-slate-100">Total Cost</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(result.loan2.total)}</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-3">Key Differences</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
              <span className="text-sm text-slate-800 dark:text-slate-100">Monthly Payment Difference</span>
              <span className={`text-sm font-bold ${result.loan2.monthly < result.loan1.monthly ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                ${fmt(Math.abs(result.loan2.monthly - result.loan1.monthly))}
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
              <span className="text-sm text-slate-800 dark:text-slate-100">Interest Rate Difference</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{fmt(Math.abs(loan2Rate - loan1Rate))}%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
              <span className="text-sm text-slate-800 dark:text-slate-100">Term Difference</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{Math.abs(loan2Term - loan1Term)} months</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/finance" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Financial Calculators
        </Link>
      
        <CalculatorActions
          calculatorId="loan-comparison-calculator"
          calculatorName="Loan Comparison Calculator"
          inputData={{ loan1Amount, loan1Rate, loan1Term, loan2Amount, loan2Rate, loan2Term }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}