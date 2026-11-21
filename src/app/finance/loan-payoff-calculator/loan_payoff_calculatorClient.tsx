'use client';
import { useEffect, useRef, useState } from 'react';
import CalculatorActions from "@/components/CalculatorActions";
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function LoanPayoffCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.loanAmount !== undefined) setLoanAmount(data.loanAmount);
          if (data.interestRate !== undefined) setInterestRate(data.interestRate);
          if (data.loanTerm !== undefined) setLoanTerm(data.loanTerm);
          if (data.monthlyPayment !== undefined) setMonthlyPayment(data.monthlyPayment);
          if (data.extraPayment !== undefined) setExtraPayment(data.extraPayment);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [loanAmount, setLoanAmount] = useState(20000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTerm, setLoanTerm] = useState(60);
  const [monthlyPayment, setMonthlyPayment] = useState(400);
  const [extraPayment, setExtraPayment] = useState(0);
  const [result, setResult] = useState<null | { 
    normalPayoffMonths: number; 
    normalTotalInterest: number;
    acceleratedPayoffMonths: number; 
    acceleratedTotalInterest: number;
    interestSaved: number;
    timeSaved: number;
  }>(null);

  function calculate() {
    const r = interestRate / 100 / 12;
    
    // Calculate normal payoff
    let balanceNormal = loanAmount;
    let interestNormal = 0;
    let monthsNormal = 0;
    
    while (balanceNormal > 0 && monthsNormal < 600) {
      const interest = balanceNormal * r;
      interestNormal += interest;
      balanceNormal = balanceNormal + interest - monthlyPayment;
      monthsNormal++;
    }
    
    // Calculate accelerated payoff with extra payment
    let balanceAccelerated = loanAmount;
    let interestAccelerated = 0;
    let monthsAccelerated = 0;
    const totalMonthly = monthlyPayment + extraPayment;
    
    while (balanceAccelerated > 0 && monthsAccelerated < 600) {
      const interest = balanceAccelerated * r;
      interestAccelerated += interest;
      balanceAccelerated = balanceAccelerated + interest - totalMonthly;
      monthsAccelerated++;
    }
    
    const interestSaved = interestNormal - interestAccelerated;
    const timeSaved = monthsNormal - monthsAccelerated;
    
    setResult({
      normalPayoffMonths: monthsNormal,
      normalTotalInterest: interestNormal,
      acceleratedPayoffMonths: monthsAccelerated,
      acceleratedTotalInterest: interestAccelerated,
      interestSaved,
      timeSaved,
    });
  }

  return (
    <div ref={resultRef} className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
    
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Loan Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={loanAmount} min={0} step={1000} onChange={e => setLoanAmount(Number(e.target.value))}
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
            {[12, 24, 36, 48, 60, 72, 84].map(m => (
              <button key={m} onClick={() => setLoanTerm(m)}
                className={`py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all ${loanTerm === m ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {m} mo
              </button>
            ))}
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
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Extra Monthly Payment (Optional)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={extraPayment} min={0} step={10} onChange={e => setExtraPayment(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            Leave at 0 to see normal payoff schedule
          </p>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Payoff
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Payoff Analysis</h2>
          
          {extraPayment > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl p-5 bg-gradient-to-br from-green-500 to-green-700 text-white text-center shadow-lg">
                <div className="text-xs opacity-80 mb-1">Interest Saved</div>
                <div className="text-2xl font-extrabold">{symbol}{fmt(result.interestSaved)}</div>
              </div>
              <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center shadow-lg">
                <div className="text-xs opacity-80 mb-1">Time Saved</div>
                <div className="text-2xl font-extrabold">{result.timeSaved} mo</div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl p-5 bg-gradient-to-br from-slate-600 to-slate-800 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Normal Payoff</div>
              <div className="text-lg font-extrabold">{result.normalPayoffMonths} mo</div>
              <div className="text-xs opacity-80 mt-1">{symbol}{fmt(result.normalTotalInterest)} interest</div>
            </div>
            <div className={`rounded-2xl p-5 bg-gradient-to-br ${extraPayment > 0 ? 'from-green-500 to-green-700' : 'from-blue-500 to-blue-700'} text-white text-center shadow-lg`}>
              <div className="text-xs opacity-80 mb-1">{extraPayment > 0 ? 'Accelerated' : 'Normal'} Payoff</div>
              <div className="text-lg font-extrabold">{result.acceleratedPayoffMonths} mo</div>
              <div className="text-xs opacity-80 mt-1">{symbol}{fmt(result.acceleratedTotalInterest)} interest</div>
            </div>
          </div>
          
          <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-3">Payment Comparison</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
              <span className="text-sm text-slate-800 dark:text-slate-100">Base Monthly Payment</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(monthlyPayment)}</span>
            </div>
            {extraPayment > 0 && (
              <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <span className="text-sm text-green-700 dark:text-green-300">Extra Monthly Payment</span>
                <span className="text-sm font-bold text-green-700 dark:text-green-300">{symbol}{fmt(extraPayment)}</span>
              </div>
            )}
            {extraPayment > 0 && (
              <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <span className="text-sm text-blue-700 dark:text-blue-300">Total Monthly Payment</span>
                <span className="text-sm font-bold text-blue-700 dark:text-blue-300">{symbol}{fmt(monthlyPayment + extraPayment)}</span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/finance" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Financial Calculators
        </Link>
      
        <CalculatorActions
          calculatorId="loan-payoff-calculator"
          calculatorName="Loan Payoff Calculator"
          inputData={{ loanAmount, interestRate, loanTerm, monthlyPayment, extraPayment }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}