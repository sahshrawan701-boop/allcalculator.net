'use client';
import { useState } from 'react';
import Link from 'next/link';

interface Assignment { name: string; score: string; maxScore: string; weight: string; }

export default function GradeCalculatorPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    { name: 'Midterm Exam', score: '85', maxScore: '100', weight: '40' },
    { name: 'Final Exam', score: '90', maxScore: '100', weight: '40' },
    { name: 'Homework', score: '95', maxScore: '100', weight: '20' },
  ]);
  const [result, setResult] = useState<null | { pct: number; letter: string; gpa: number }>(null);

  function addRow() { setAssignments(a => [...a, { name: '', score: '', maxScore: '100', weight: '' }]); }
  function removeRow(i: number) { setAssignments(a => a.filter((_, idx) => idx !== i)); }
  function update(i: number, field: keyof Assignment, val: string) {
    setAssignments(a => a.map((row, idx) => idx === i ? { ...row, [field]: val } : row));
  }

  function calculate() {
    let totalWeight = 0, weightedSum = 0;
    for (const a of assignments) {
      const s = parseFloat(a.score), m = parseFloat(a.maxScore), w = parseFloat(a.weight);
      if (!isNaN(s) && !isNaN(m) && m > 0 && !isNaN(w)) {
        weightedSum += (s / m) * w;
        totalWeight += w;
      }
    }
    if (totalWeight === 0) return;
    const pct = (weightedSum / totalWeight) * 100;
    const letter = pct >= 97 ? 'A+' : pct >= 93 ? 'A' : pct >= 90 ? 'A-' : pct >= 87 ? 'B+' : pct >= 83 ? 'B' : pct >= 80 ? 'B-' : pct >= 77 ? 'C+' : pct >= 73 ? 'C' : pct >= 70 ? 'C-' : pct >= 60 ? 'D' : 'F';
    const gpaMap: Record<string, number> = { 'A+': 4.0, 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D': 1.0, 'F': 0.0 };
    setResult({ pct, letter, gpa: gpaMap[letter] });
  }

  const color = result ? (result.pct >= 90 ? '#10b981' : result.pct >= 80 ? '#3b82f6' : result.pct >= 70 ? '#f59e0b' : result.pct >= 60 ? '#f97316' : '#ef4444') : '#6366f1';

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="space-y-3 mb-5">
          <div className="grid grid-cols-[1fr_80px_80px_80px_36px] gap-2 text-xs font-semibold text-slate-400 px-1">
            <span>Assignment</span><span className="text-center">Score</span><span className="text-center">Max</span><span className="text-center">Weight%</span><span></span>
          </div>
          {assignments.map((a, i) => (
            <div key={i} className="grid grid-cols-[1fr_80px_80px_80px_36px] gap-2 items-center">
              <input value={a.name} onChange={e => update(i, 'name', e.target.value)} placeholder="Name"
                className="px-3 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-indigo-400" />
              <input type="number" value={a.score} onChange={e => update(i, 'score', e.target.value)}
                className="px-2 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm text-center focus:outline-none focus:border-indigo-400" />
              <input type="number" value={a.maxScore} onChange={e => update(i, 'maxScore', e.target.value)}
                className="px-2 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm text-center focus:outline-none focus:border-indigo-400" />
              <input type="number" value={a.weight} onChange={e => update(i, 'weight', e.target.value)}
                className="px-2 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm text-center focus:outline-none focus:border-indigo-400" />
              <button onClick={() => removeRow(i)} className="w-9 h-9 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-400 hover:bg-red-100 transition-colors flex items-center justify-center text-sm">
                <i className="fas fa-times" />
              </button>
            </div>
          ))}
        </div>
        <button onClick={addRow} className="flex items-center gap-2 text-sm text-indigo-500 dark:text-indigo-400 font-semibold hover:underline mb-5">
          <i className="fas fa-plus" /> Add Assignment
        </button>
        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Grade
        </button>
      </div>
      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 text-center">
          <div className="flex justify-center gap-10 mb-4">
            <div>
              <div className="text-5xl font-extrabold" style={{ color }}>{result.pct.toFixed(2)}%</div>
              <div className="text-xs text-slate-400 mt-1">Weighted Grade</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-slate-800 dark:text-slate-100">{result.letter}</div>
              <div className="text-xs text-slate-400 mt-1">Letter Grade</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-indigo-500">{result.gpa.toFixed(1)}</div>
              <div className="text-xs text-slate-400 mt-1">GPA Points</div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-8 text-center">
        <Link href="/education" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Education Calculators
        </Link>
      </div>
    </div>
  );
}
