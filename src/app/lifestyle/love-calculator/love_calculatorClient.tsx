'use client';
import { useState } from 'react';
import Link from 'next/link';

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) & 0xffffffff;
  return Math.abs(h);
}

export default function LoveCalculatorPage() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [pct, setPct] = useState<number | null>(null);

  function calculate() {
    if (!name1.trim() || !name2.trim()) return;
    const combined = (name1 + name2).toLowerCase().replace(/\s/g, '');
    setPct(30 + (hash(combined) % 71));
  }

  const color = pct === null ? '#6366f1' : pct >= 80 ? '#ec4899' : pct >= 50 ? '#f59e0b' : '#94a3b8';
  const msg = pct === null ? '' : pct >= 90 ? '💑 Soulmates! Perfect match!' : pct >= 70 ? '❤️ Great compatibility!' : pct >= 50 ? '🙂 Good match with effort!' : '💔 Might be a challenge...';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        {[{ label: 'Your Name', value: name1, set: setName1, placeholder: 'Enter your name' }, { label: "Partner's Name", value: name2, set: setName2, placeholder: "Enter partner's name" }].map(f => (
          <div key={f.label} className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">{f.label}</label>
            <input type="text" value={f.value} placeholder={f.placeholder} onChange={e => f.set(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-pink-400" />
          </div>
        ))}
        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
          <i className="fas fa-heart" /> Calculate Love Score
        </button>
      </div>
      {pct !== null && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800 text-center">
          <div className="text-5xl sm:text-6xl mb-2" role="img">❤️</div>
          <div className="text-5xl sm:text-6xl font-extrabold mb-3" style={{ color }}>{pct}%</div>
          <div className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">{msg}</div>
          <div className="h-3 bg-slate-50 dark:bg-slate-900 rounded-full overflow-hidden mx-auto max-w-xs">
            <div className="h-3 rounded-full transition-all duration-1000" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #f43f5e, #ec4899)' }} />
          </div>
        </div>
      )}
      <p className="text-center text-xs text-slate-400 dark:text-slate-400 mt-4">This is purely for fun and entertainment purposes only.</p>
      <div className="mt-6 text-center">
        <Link href="/lifestyle" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Lifestyle Calculators
        </Link>
      </div>
    </div>
  );
}
