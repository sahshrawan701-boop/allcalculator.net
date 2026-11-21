'use client';
import { useState } from 'react';
import Link from 'next/link';

function addDays(d: Date, n: number) {
  const r = new Date(d); r.setDate(r.getDate() + n); return r;
}
function fmtDate(d: Date) {
  return d.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
}

interface PregnancyDueDateResult {
  dueDate: Date;
  conceptionDate: Date;
  weeksPregnant: number;
  daysPregnant: number;
  trimester: string;
  weeksRemaining: number;
}

export default function PregnancyDueDateCalculatorPage() {
  const [lmp, setLmp] = useState('');
  const [cycleLen, setCycleLen] = useState(28);
  const [result, setResult] = useState<PregnancyDueDateResult | null>(null);

  function calculate() {
    if (!lmp) return;
    const lmpDate = new Date(lmp);
    const dueDate = addDays(lmpDate, 280 + (cycleLen - 28));
    const conceptionDate = addDays(lmpDate, 14 + (cycleLen - 28));
    const today = new Date();
    const daysPregnant = Math.floor((today.getTime() - lmpDate.getTime()) / 86400000);
    const weeksPregnant = Math.floor(daysPregnant / 7);
    const weeksRemaining = Math.max(0, 40 - weeksPregnant);
    let trimester = '1st Trimester';
    if (weeksPregnant >= 28) trimester = '3rd Trimester';
    else if (weeksPregnant >= 14) trimester = '2nd Trimester';
    
    setResult({
      dueDate,
      conceptionDate,
      weeksPregnant,
      daysPregnant,
      trimester,
      weeksRemaining,
    });
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">First Day of Last Period</label>
          <input type="date" value={lmp} onChange={e => setLmp(e.target.value)}
            className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-pink-500" />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Average Cycle Length: <span className="text-pink-500">{cycleLen} days</span></label>
          <input type="range" min={21} max={45} value={cycleLen} onChange={e => setCycleLen(Number(e.target.value))} className="w-full accent-pink-500" />
          <div className="flex justify-between text-xs text-slate-400 mt-1"><span>21 days</span><span>45 days</span></div>
        </div>

        <button onClick={calculate}
          className="w-full py-4 bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-200">
          <i className="fas fa-heart" /> Calculate Due Date
        </button>
      </div>

      {result && (
        <>
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-7 text-white shadow-xl mb-4">
            <div className="text-sm font-medium opacity-80 mb-1">Estimated Due Date</div>
            <div className="text-3xl font-extrabold mb-3">{fmtDate(result.dueDate)}</div>
            <div className="grid grid-cols-3 gap-3 border-t border-white/20 pt-3">
              <div className="text-center">
                <div className="text-2xl font-extrabold">{result.weeksPregnant}</div>
                <div className="text-xs opacity-70">Weeks Pregnant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold">{result.daysPregnant}</div>
                <div className="text-xs opacity-70">Days Pregnant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold">{result.weeksRemaining}</div>
                <div className="text-xs opacity-70">Weeks Left</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {[
              { label: 'Conception Date', value: fmtDate(result.conceptionDate), icon: 'fa-heart', color: 'text-pink-500' },
              { label: 'Current Trimester', value: result.trimester, icon: 'fa-calendar-check', color: 'text-rose-500' },
            ].map(s => (
              <div key={s.label} className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <i className={`fas ${s.icon} ${s.color}`} /> {s.label}
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Important Dates</h3>
            <div className="space-y-2 text-sm">
              {[
                { label: 'First Trimester Ends', date: addDays(new Date(lmp), 97) },
                { label: 'Second Trimester Ends', date: addDays(new Date(lmp), 196) },
                { label: 'Full Term (37 weeks)', date: addDays(new Date(lmp), 259) },
              ].map(r => (
                <div key={r.label} className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">{r.label}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{fmtDate(r.date)}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Medical Disclaimer:</strong> This calculator provides estimates for informational purposes only. Only 5% of babies are born on their exact due date. Always consult your healthcare provider for accurate pregnancy dating and medical advice.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
