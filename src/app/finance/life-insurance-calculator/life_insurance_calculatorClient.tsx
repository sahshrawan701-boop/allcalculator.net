'use client';
import { useEffect, useRef, useState } from 'react';
import CalculatorActions from "@/components/CalculatorActions";
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function LifeInsuranceCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.annualIncome !== undefined) setAnnualIncome(data.annualIncome);
          if (data.yearsOfCoverage !== undefined) setYearsOfCoverage(data.yearsOfCoverage);
          if (data.outstandingDebt !== undefined) setOutstandingDebt(data.outstandingDebt);
          if (data.finalExpenses !== undefined) setFinalExpenses(data.finalExpenses);
          if (data.collegeFund !== undefined) setCollegeFund(data.collegeFund);
          if (data.existingInsurance !== undefined) setExistingInsurance(data.existingInsurance);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [annualIncome, setAnnualIncome] = useState(75000);
  const [yearsOfCoverage, setYearsOfCoverage] = useState(10);
  const [outstandingDebt, setOutstandingDebt] = useState(150000);
  const [finalExpenses, setFinalExpenses] = useState(20000);
  const [collegeFund, setCollegeFund] = useState(50000);
  const [existingInsurance, setExistingInsurance] = useState(0);
  const [result, setResult] = useState<null | { 
    totalNeed: number; 
    additionalCoverage: number;
    breakdown: { category: string; amount: number }[];
  }>(null);

  function calculate() {
    const incomeReplacement = annualIncome * yearsOfCoverage;
    const totalNeed = incomeReplacement + outstandingDebt + finalExpenses + collegeFund;
    const additionalCoverage = totalNeed - existingInsurance;
    
    const breakdown = [
      { category: 'Income Replacement', amount: incomeReplacement },
      { category: 'Outstanding Debt', amount: outstandingDebt },
      { category: 'Final Expenses', amount: finalExpenses },
      { category: 'College Fund', amount: collegeFund },
    ];
    
    setResult({
      totalNeed,
      additionalCoverage,
      breakdown,
    });
  }

  return (
    <div ref={resultRef} className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
    
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Annual Income</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input type="number" value={annualIncome} min={0} step={1000} onChange={e => setAnnualIncome(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Years of Coverage Needed</label>
          <div className="flex flex-wrap gap-2">
            {[5, 10, 15, 20, 25, 30].map(y => (
              <button key={y} onClick={() => setYearsOfCoverage(y)}
                className={`py-2 px-4 rounded-lg border-2 text-sm font-medium transition-all ${yearsOfCoverage === y ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-blue-300'}`}>
                {y} years
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Outstanding Debt</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
              <input type="number" value={outstandingDebt} min={0} step={1000} onChange={e => setOutstandingDebt(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Mortgage, loans, credit cards</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Final Expenses</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
              <input type="number" value={finalExpenses} min={0} step={1000} onChange={e => setFinalExpenses(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Funeral, medical, legal</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">College Fund</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
              <input type="number" value={collegeFund} min={0} step={5000} onChange={e => setCollegeFund(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Existing Insurance</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
              <input type="number" value={existingInsurance} min={0} step={1000} onChange={e => setExistingInsurance(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
            </div>
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Coverage Needed
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Coverage Analysis</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Total Coverage Needed</div>
              <div className="text-2xl font-extrabold">{symbol}{fmt(result.totalNeed)}</div>
            </div>
            <div className={`rounded-2xl p-5 bg-gradient-to-br ${result.additionalCoverage > 0 ? 'from-orange-500 to-orange-700' : 'from-green-500 to-green-700'} text-white text-center shadow-lg`}>
              <div className="text-xs opacity-80 mb-1">{result.additionalCoverage > 0 ? 'Additional Coverage Needed' : 'Coverage Sufficient'}</div>
              <div className="text-2xl font-extrabold">${result.additionalCoverage > 0 ? fmt(result.additionalCoverage) : '0'}</div>
            </div>
          </div>
          
          <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-3">Coverage Breakdown</h3>
          <div className="space-y-3">
            {result.breakdown.map(item => (
              <div key={item.category} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                <span className="text-sm text-slate-800 dark:text-slate-100">{item.category}</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(item.amount)}</span>
              </div>
            ))}
            <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <span className="text-sm text-green-700 dark:text-green-300">Existing Insurance</span>
              <span className="text-sm font-bold text-green-700 dark:text-green-300">-${fmt(existingInsurance)}</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/finance" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Financial Calculators
        </Link>
      
        <CalculatorActions
          calculatorId="life-insurance-calculator"
          calculatorName="Life Insurance Calculator"
          inputData={{ annualIncome, yearsOfCoverage, outstandingDebt, finalExpenses, collegeFund, existingInsurance }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}