'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AgeCalculatorPage() {
  const [dob, setDob] = useState('1995-01-15');
  const [toDate, setToDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [result, setResult] = useState<null | { years: number; months: number; days: number; totalDays: number; nextBirthday: number }>(null);

  function calculate() {
    const birth = new Date(dob);
    const to = new Date(toDate);
    if (isNaN(birth.getTime()) || isNaN(to.getTime()) || birth > to) return;

    let years = to.getFullYear() - birth.getFullYear();
    let months = to.getMonth() - birth.getMonth();
    let days = to.getDate() - birth.getDate();

    if (days < 0) { months--; const prev = new Date(to.getFullYear(), to.getMonth(), 0); days += prev.getDate(); }
    if (months < 0) { years--; months += 12; }

    const totalDays = Math.floor((to.getTime() - birth.getTime()) / 86400000);

    const next = new Date(to.getFullYear(), birth.getMonth(), birth.getDate());
    if (next <= to) next.setFullYear(next.getFullYear() + 1);
    const nextBirthday = Math.ceil((next.getTime() - to.getTime()) / 86400000);

    setResult({ years, months, days, totalDays, nextBirthday });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
   

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Date of Birth</label>
            <input type="date" value={dob} onChange={e => setDob(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Calculate Age On</label>
            <input type="date" value={toDate} onChange={e => setToDate(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500" />
          </div>
        </div>
        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-violet-500 to-violet-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
          <i className="fas fa-birthday-cake" /> Calculate Age
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-5">
            {[
              { label: 'Years', value: result.years, color: 'from-violet-500 to-violet-700' },
              { label: 'Months', value: result.months, color: 'from-indigo-400 to-indigo-600' },
              { label: 'Days', value: result.days, color: 'from-blue-400 to-blue-600' },
            ].map(s => (
              <div key={s.label} className={`rounded-xl p-4 sm:p-5 bg-gradient-to-br ${s.color} text-white text-center`}>
                <div className="text-2xl sm:text-3xl font-extrabold">{s.value}</div>
                <div className="text-xs sm:text-sm opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-600">
              <div className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">{result.totalDays.toLocaleString()}</div>
              <div className="text-xs text-slate-400 mt-1">Total Days Lived</div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-600">
              <div className="text-xl sm:text-2xl font-bold text-violet-500">{result.nextBirthday}</div>
              <div className="text-xs text-slate-400 mt-1">Days to Next Birthday 🎂</div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/lifestyle" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Lifestyle Calculators
        </Link>
      </div>
    </div>
  );
}
