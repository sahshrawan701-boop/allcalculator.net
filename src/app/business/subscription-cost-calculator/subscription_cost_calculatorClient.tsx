'use client';
import { useState } from 'react';
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function SubscriptionCostCalculatorPage() {
  const { fmt, fmtShort, symbol } = useCurrency();
  const [netflix, setNetflix] = useState(15.99);
  const [spotify, setSpotify] = useState(9.99);
  const [amazon, setAmazon] = useState(14.99);
  const [youtube, setYoutube] = useState(11.99);
  const [disney, setDisney] = useState(7.99);
  const [apple, setApple] = useState(9.99);
  const [other, setOther] = useState(0);
  const [result, setResult] = useState<null | { 
    totalMonthly: number; 
    totalAnnual: number; 
    breakdown: { category: string; amount: number; percentage: number }[];
  }>(null);

  function calculate() {
    const subscriptions = [
      { category: 'Netflix', amount: netflix },
      { category: 'Spotify', amount: spotify },
      { category: 'Amazon Prime', amount: amazon },
      { category: 'YouTube Premium', amount: youtube },
      { category: 'Disney+', amount: disney },
      { category: 'Apple Music', amount: apple },
      { category: 'Other', amount: other },
    ];
    
    const totalMonthly = subscriptions.reduce((sum, item) => sum + item.amount, 0);
    const totalAnnual = totalMonthly * 12;
    const breakdown = subscriptions.map(item => ({
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
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
          <i className="fas fa-tv text-red-500" /> Monthly Subscriptions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            { label: 'Netflix', value: netflix, set: setNetflix, icon: 'fa-film' },
            { label: 'Spotify', value: spotify, set: setSpotify, icon: 'fa-music' },
            { label: 'Amazon Prime', value: amazon, set: setAmazon, icon: 'fa-shopping-cart' },
            { label: 'YouTube Premium', value: youtube, set: setYoutube, icon: 'fa-youtube' },
            { label: 'Disney+', value: disney, set: setDisney, icon: 'fa-magic' },
            { label: 'Apple Music', value: apple, set: setApple, icon: 'fa-headphones' },
            { label: 'Other', value: other, set: setOther, icon: 'fa-ellipsis-h' },
          ].map(sub => (
            <div key={sub.label}>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
                <i className={`fas ${sub.icon} text-slate-400 text-xs`} /> {sub.label}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                <input type="number" value={sub.value} min={0} step={0.01} onChange={e => sub.set(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
              </div>
            </div>
          ))}
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Subscriptions
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Subscription Summary</h2>
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
          
          <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-3">Subscription Breakdown</h3>
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
