'use client';
import { useState } from 'react';
import Link from 'next/link';

const currencies = [
  { code: 'USD', name: 'US Dollar', symbol: '$', rate: 1 },
  { code: 'EUR', name: 'Euro', symbol: '€', rate: 0.92 },
  { code: 'GBP', name: 'British Pound', symbol: '£', rate: 0.79 },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', rate: 149.50 },
  { code: 'CAD', name: 'Canadian Dollar', symbol: '$', rate: 1.36 },
  { code: 'AUD', name: 'Australian Dollar', symbol: '$', rate: 1.53 },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr', rate: 0.88 },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', rate: 7.24 },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', rate: 83.50 },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$', rate: 17.15 },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', rate: 5.02 },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩', rate: 1330.50 },
  { code: 'SGD', name: 'Singapore Dollar', symbol: '$', rate: 1.34 },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: '$', rate: 7.82 },
  { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr', rate: 10.65 },
  { code: 'SEK', name: 'Swedish Krona', symbol: 'kr', rate: 10.45 },
  { code: 'DKK', name: 'Danish Krone', symbol: 'kr', rate: 6.85 },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: '$', rate: 1.64 },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', rate: 18.95 },
  { code: 'RUB', name: 'Russian Ruble', symbol: '₽', rate: 92.50 },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺', rate: 32.15 },
  { code: 'PLN', name: 'Polish Zloty', symbol: 'zł', rate: 3.95 },
  { code: 'THB', name: 'Thai Baht', symbol: '฿', rate: 35.80 },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', rate: 15650 },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', rate: 4.72 },
  { code: 'PHP', name: 'Philippine Peso', symbol: '₱', rate: 56.20 },
  { code: 'VND', name: 'Vietnamese Dong', symbol: '₫', rate: 24350 },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', rate: 3.67 },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', rate: 3.75 },
  { code: 'EGP', name: 'Egyptian Pound', symbol: '£', rate: 30.90 },
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', rate: 1550 },
  { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨', rate: 278.50 },
  { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', rate: 109.80 },
  { code: 'CLP', name: 'Chilean Peso', symbol: '$', rate: 878.50 },
  { code: 'COP', name: 'Colombian Peso', symbol: '$', rate: 3950 },
  { code: 'PEN', name: 'Peruvian Sol', symbol: 'S/', rate: 3.72 },
  { code: 'ARS', name: 'Argentine Peso', symbol: '$', rate: 850.50 },
  { code: 'ILS', name: 'Israeli Shekel', symbol: '₪', rate: 3.65 },
  { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč', rate: 22.15 },
  { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft', rate: 345.50 },
  { code: 'RON', name: 'Romanian Leu', symbol: 'lei', rate: 4.55 },
  { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв', rate: 1.78 },
];

function fmt(n: number) { return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

export default function CurrencyExchangeCalculatorPage() {
  const [amount, setAmount] = useState(1000);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState<null | { 
    convertedAmount: number; 
    rate: number;
    inverseRate: number;
  }>(null);

  function calculate() {
    const fromRate = currencies.find(c => c.code === fromCurrency)?.rate || 1;
    const toRate = currencies.find(c => c.code === toCurrency)?.rate || 1;
    const rate = toRate / fromRate;
    const convertedAmount = amount * rate;
    const inverseRate = fromRate / toRate;
    
    setResult({
      convertedAmount,
      rate,
      inverseRate,
    });
  }

  const fromCurrencyData = currencies.find(c => c.code === fromCurrency);
  const toCurrencyData = currencies.find(c => c.code === toCurrency);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Amount</label>
          <div className="relative">
            <input type="number" value={amount} min={0} step={1} onChange={e => setAmount(Number(e.target.value))}
              className="w-full pl-4 pr-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">From</label>
            <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500">
              {currencies.map(c => (
                <option key={c.code} value={c.code}>{c.code} - {c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">To</label>
            <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-blue-500">
              {currencies.map(c => (
                <option key={c.code} value={c.code}>{c.code} - {c.name}</option>
              ))}
            </select>
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
          <i className="fas fa-exchange-alt" /> Convert Currency
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Exchange Result</h2>
          
          <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-green-500 to-green-700 text-white text-center shadow-lg mb-6">
            <div className="text-xs sm:text-sm opacity-80 mb-2">{fromCurrencyData?.symbol}{fmt(amount)} {fromCurrency} =</div>
            <div className="text-3xl sm:text-4xl font-extrabold">{toCurrencyData?.symbol}{fmt(result.convertedAmount)} {toCurrency}</div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Exchange Rate</div>
              <div className="text-lg sm:text-xl font-extrabold">1 {fromCurrency} = {fmt(result.rate)} {toCurrency}</div>
            </div>
            <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white text-center shadow-lg">
              <div className="text-xs opacity-80 mb-1">Inverse Rate</div>
              <div className="text-lg sm:text-xl font-extrabold">1 {toCurrency} = {fmt(result.inverseRate)} {fromCurrency}</div>
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 text-center">
              <i className="fas fa-info-circle mr-2" />
              Exchange rates are approximate and should be verified with a financial institution for actual transactions.
            </p>
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
