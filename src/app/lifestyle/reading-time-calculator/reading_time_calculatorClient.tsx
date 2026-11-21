'use client';
import { useState } from 'react';
import Link from 'next/link';

function fmt(n: number) { return n.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }); }

export default function ReadingTimeCalculatorPage() {
  const [wordCount, setWordCount] = useState(1000);
  const [readingSpeed, setReadingSpeed] = useState(200);
  const [result, setResult] = useState<null | {
    minutes: number;
    hours: number;
    pages: number;
  }>(null);

  function calculate() {
    const minutes = wordCount / readingSpeed;
    const hours = minutes / 60;
    const pages = Math.ceil(wordCount / 250); // Average 250 words per page
    
    setResult({
      minutes,
      hours,
      pages,
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Word Count</label>
          <input type="number" value={wordCount} min={0} step={100} onChange={e => setWordCount(Number(e.target.value))}
            className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500" />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Reading Speed (Words per Minute)</label>
          <div className="flex flex-wrap gap-2">
            {[150, 200, 250, 300, 350, 400].map(speed => (
              <button key={speed} onClick={() => setReadingSpeed(speed)}
                className={`py-2 px-3 sm:px-4 rounded-lg border-2 text-xs sm:text-sm font-medium transition-all ${readingSpeed === speed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-emerald-300'}`}>
                {speed} wpm
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-2">Average: 200-250 wpm | Fast: 300+ wpm</p>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
          <i className="fas fa-book-open" /> Calculate Reading Time
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-5">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl p-4 sm:p-5 text-white text-center">
              <div className="text-xs opacity-80 mb-1">Reading Time</div>
              <div className="text-2xl sm:text-3xl font-extrabold">{fmt(result.minutes)} min</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl p-4 sm:p-5 text-white text-center">
              <div className="text-xs opacity-80 mb-1">In Hours</div>
              <div className="text-2xl sm:text-3xl font-extrabold">{fmt(result.hours)} hrs</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-4 sm:p-5 text-white text-center">
              <div className="text-xs opacity-80 mb-1">Estimated Pages</div>
              <div className="text-2xl sm:text-3xl font-extrabold">{result.pages}</div>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
            <div className="text-sm text-slate-400 mb-1">At {readingSpeed} words per minute</div>
            <div className="text-lg font-bold text-slate-800 dark:text-slate-100">{wordCount.toLocaleString()} words will take approximately {fmt(result.minutes)} minutes to read</div>
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <Link href="/lifestyle" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Lifestyle Calculators
        </Link>
      </div>
    </div>
  );
}
