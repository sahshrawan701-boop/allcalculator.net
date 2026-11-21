'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';

const DICE_TYPES = [4, 6, 8, 10, 12, 20, 100];

export default function DiceRollerPage() {
  const [sides, setSides] = useState(6);
  const [count, setCount] = useState(2);
  const [rolls, setRolls] = useState<number[]>([]);
  const [rolling, setRolling] = useState(false);

  function roll() {
    setRolling(true);
    setTimeout(() => {
      setRolls(Array.from({ length: count }, () => Math.floor(Math.random() * sides) + 1));
      setRolling(false);
    }, 500);
  }

  const total = rolls.reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
     
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Dice Type</label>
          <div className="flex flex-wrap gap-2">
            {DICE_TYPES.map(d => (
              <button key={d} onClick={() => setSides(d)}
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl font-bold text-xs sm:text-sm border-2 transition-all ${sides === d ? 'bg-violet-500 border-violet-500 text-white shadow-md' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-violet-300'}`}>
                d{d}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Number of Dice: {count}</label>
          <input type="range" min={1} max={10} value={count} onChange={e => setCount(Number(e.target.value))}
            className="w-full accent-violet-500" />
          <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1</span><span>10</span></div>
        </div>
        <button onClick={roll} disabled={rolling}
          className={`w-full py-3.5 bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 text-sm sm:text-base ${rolling ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5 hover:shadow-lg'}`}>
          <i className={`fas fa-dice${rolling ? ' fa-spin' : '-d6'}`} /> {rolling ? 'Rolling…' : `Roll ${count}d${sides}`}
        </button>
      </div>
      {rolls.length > 0 && !rolling && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 text-center">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5">
            {rolls.map((r, i) => (
              <div key={i} className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white flex items-center justify-center text-lg sm:text-xl font-extrabold shadow-md animate-fade-in-up">
                {r}
              </div>
            ))}
          </div>
          {count > 1 && (
            <div>
              <span className="text-slate-400 text-sm">Total</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-violet-500">{total}</div>
              <div className="text-xs text-slate-400">Avg: {(total / count).toFixed(1)}</div>
            </div>
          )}
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
