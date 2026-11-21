'use client';
import { useEffect, useRef, useState } from 'react';
import CalculatorActions from "@/components/CalculatorActions";
import Link from 'next/link';

import { useCurrency } from '@/hooks/useCurrency';

export default function NetWorthCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.cash !== undefined) setCash(data.cash);
          if (data.investments !== undefined) setInvestments(data.investments);
          if (data.realEstate !== undefined) setRealEstate(data.realEstate);
          if (data.vehicles !== undefined) setVehicles(data.vehicles);
          if (data.otherAssets !== undefined) setOtherAssets(data.otherAssets);
          if (data.mortgage !== undefined) setMortgage(data.mortgage);
          if (data.loans !== undefined) setLoans(data.loans);
          if (data.creditCards !== undefined) setCreditCards(data.creditCards);
          if (data.otherLiabilities !== undefined) setOtherLiabilities(data.otherLiabilities);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [cash, setCash] = useState(15000);
  const [investments, setInvestments] = useState(50000);
  const [realEstate, setRealEstate] = useState(300000);
  const [vehicles, setVehicles] = useState(25000);
  const [otherAssets, setOtherAssets] = useState(10000);
  const [mortgage, setMortgage] = useState(200000);
  const [loans, setLoans] = useState(15000);
  const [creditCards, setCreditCards] = useState(5000);
  const [otherLiabilities, setOtherLiabilities] = useState(3000);
  const [result, setResult] = useState<null | { 
    totalAssets: number; 
    totalLiabilities: number; 
    netWorth: number;
  }>(null);

  function calculate() {
    const totalAssets = cash + investments + realEstate + vehicles + otherAssets;
    const totalLiabilities = mortgage + loans + creditCards + otherLiabilities;
    const netWorth = totalAssets - totalLiabilities;
    
    setResult({
      totalAssets,
      totalLiabilities,
      netWorth,
    });
  }

  return (
    <div ref={resultRef} className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Assets */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <i className="fas fa-plus-circle text-green-500" /> Assets
          </h2>
          <div className="space-y-4">
            {[
              { label: 'Cash & Bank Accounts', value: cash, set: setCash, icon: 'fa-money-bill-wave' },
              { label: 'Investments', value: investments, set: setInvestments, icon: 'fa-chart-line' },
              { label: 'Real Estate', value: realEstate, set: setRealEstate, icon: 'fa-home' },
              { label: 'Vehicles', value: vehicles, set: setVehicles, icon: 'fa-car' },
              { label: 'Other Assets', value: otherAssets, set: setOtherAssets, icon: 'fa-ellipsis-h' },
            ].map(asset => (
              <div key={asset.label}>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
                  <i className={`fas ${asset.icon} text-slate-400 text-xs`} /> {asset.label}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                  <input type="number" value={asset.value} min={0} step={1000} onChange={e => asset.set(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Liabilities */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <i className="fas fa-minus-circle text-red-500" /> Liabilities
          </h2>
          <div className="space-y-4">
            {[
              { label: 'Mortgage', value: mortgage, set: setMortgage, icon: 'fa-home' },
              { label: 'Loans', value: loans, set: setLoans, icon: 'fa-file-invoice-dollar' },
              { label: 'Credit Cards', value: creditCards, set: setCreditCards, icon: 'fa-credit-card' },
              { label: 'Other Liabilities', value: otherLiabilities, set: setOtherLiabilities, icon: 'fa-ellipsis-h' },
            ].map(liability => (
              <div key={liability.label}>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
                  <i className={`fas ${liability.icon} text-slate-400 text-xs`} /> {liability.label}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                  <input type="number" value={liability.value} min={0} step={1000} onChange={e => liability.set(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button onClick={calculate}
        className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 mb-6">
        <i className="fas fa-calculator" /> Calculate Net Worth
      </button>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-6">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Net Worth Summary</h2>
          <div className={`rounded-2xl p-5 bg-gradient-to-br ${result.netWorth >= 0 ? 'from-green-500 to-green-700' : 'from-red-500 to-red-700'} text-white text-center shadow-lg mb-6`}>
            <div className="text-xs opacity-80 mb-1">Net Worth</div>
            <div className="text-4xl font-extrabold">{symbol}{fmt(result.netWorth)}</div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl p-5 bg-gradient-to-br from-green-500 to-green-700 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Total Assets</div>
              <div className="text-2xl font-extrabold">{symbol}{fmt(result.totalAssets)}</div>
            </div>
            <div className="rounded-2xl p-5 bg-gradient-to-br from-red-500 to-red-700 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Total Liabilities</div>
              <div className="text-2xl font-extrabold">{symbol}{fmt(result.totalLiabilities)}</div>
            </div>
          </div>
          
          <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-3">Asset Breakdown</h3>
          <div className="space-y-2 mb-6">
            {[
              { label: 'Cash & Bank Accounts', value: cash },
              { label: 'Investments', value: investments },
              { label: 'Real Estate', value: realEstate },
              { label: 'Vehicles', value: vehicles },
              { label: 'Other Assets', value: otherAssets },
            ].map(asset => (
              <div key={asset.label} className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-sm text-slate-800 dark:text-slate-100">{asset.label}</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(asset.value)}</span>
              </div>
            ))}
          </div>
          
          <h3 className="text-md font-semibold text-slate-800 dark:text-slate-100 mb-3">Liability Breakdown</h3>
          <div className="space-y-2">
            {[
              { label: 'Mortgage', value: mortgage },
              { label: 'Loans', value: loans },
              { label: 'Credit Cards', value: creditCards },
              { label: 'Other Liabilities', value: otherLiabilities },
            ].map(liability => (
              <div key={liability.label} className="flex justify-between items-center p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="text-sm text-slate-800 dark:text-slate-100">{liability.label}</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{symbol}{fmt(liability.value)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/finance" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Financial Calculators
        </Link>
      
        <CalculatorActions
          calculatorId="net-worth-calculator"
          calculatorName="Net Worth Calculator"
          inputData={{ cash, investments, realEstate, vehicles, otherAssets, mortgage, loans, creditCards, otherLiabilities }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}