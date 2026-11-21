'use client';
import { useEffect, useRef, useState } from 'react';
import CalculatorActions from "@/components/CalculatorActions";
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function InsurancePremiumCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.health !== undefined) setHealth(data.health);
          if (data.auto !== undefined) setAuto(data.auto);
          if (data.home !== undefined) setHome(data.home);
          if (data.life !== undefined) setLife(data.life);
          if (data.disability !== undefined) setDisability(data.disability);
          if (data.other !== undefined) setOther(data.other);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [health, setHealth] = useState(300);
  const [auto, setAuto] = useState(150);
  const [home, setHome] = useState(120);
  const [life, setLife] = useState(50);
  const [disability, setDisability] = useState(30);
  const [other, setOther] = useState(20);
  const [result, setResult] = useState<null | { 
    totalMonthly: number; 
    totalAnnual: number; 
    breakdown: { category: string; amount: number; percentage: number }[];
  }>(null);

  function calculate() {
    const premiums = [
      { category: 'Health Insurance', amount: health },
      { category: 'Auto Insurance', amount: auto },
      { category: 'Home Insurance', amount: home },
      { category: 'Life Insurance', amount: life },
      { category: 'Disability Insurance', amount: disability },
      { category: 'Other Insurance', amount: other },
    ];
    
    const totalMonthly = premiums.reduce((sum, item) => sum + item.amount, 0);
    const totalAnnual = totalMonthly * 12;
    const breakdown = premiums.map(item => ({
      category: item.category,
      amount: item.amount,
      percentage: totalMonthly > 0 ? (item.amount / totalMonthly) * 100 : 0,
    }));
    
    setResult({
      totalMonthly,
      totalAnnual,
      breakdown,
    });
  }

  return (
    <div ref={resultRef} className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
     
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
          <i className="fas fa-shield-alt text-blue-500" /> Monthly Premiums
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            { label: 'Health Insurance', value: health, set: setHealth, icon: 'fa-heartbeat' },
            { label: 'Auto Insurance', value: auto, set: setAuto, icon: 'fa-car' },
            { label: 'Home Insurance', value: home, set: setHome, icon: 'fa-home' },
            { label: 'Life Insurance', value: life, set: setLife, icon: 'fa-user-shield' },
            { label: 'Disability Insurance', value: disability, set: setDisability, icon: 'fa-wheelchair' },
            { label: 'Other Insurance', value: other, set: setOther, icon: 'fa-ellipsis-h' },
          ].map(ins => (
            <div key={ins.label}>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
                <i className={`fas ${ins.icon} text-slate-400 text-xs`} /> {ins.label}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                <input type="number" value={ins.value} min={0} step={10} onChange={e => ins.set(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
              </div>
            </div>
          ))}
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Premiums
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Premium Summary</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Monthly Total</div>
              <div className="text-2xl font-extrabold">{symbol}{fmt(result.totalMonthly)}</div>
            </div>
            <div className="rounded-2xl p-5 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Annual Total</div>
              <div className="text-2xl font-extrabold">{symbol}{fmt(result.totalAnnual)}</div>
            </div>
          </div>
          
          <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-3">Premium Breakdown</h3>
          <div className="space-y-3">
            {result.breakdown.map(item => (
              <div key={item.category} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm text-slate-800 dark:text-slate-100">{item.category}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-slate-500 dark:text-slate-400">{fmt(item.percentage)}%</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(item.amount)}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
              <i className="fas fa-info-circle mr-2" />
              Your highest insurance premium is {result.breakdown.reduce((max, item) => item.amount > max.amount ? item : max).category} at {fmt(result.breakdown.reduce((max, item) => item.amount > max.amount ? item : max).percentage)}% of your total.
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/finance" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Financial Calculators
        </Link>
      
        <CalculatorActions
          calculatorId="insurance-premium-calculator"
          calculatorName="Insurance Premium Calculator"
          inputData={{ health, auto, home, life, disability, other }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}