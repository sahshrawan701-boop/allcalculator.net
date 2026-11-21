'use client';
import { useState } from 'react';
import Link from 'next/link';

function analyzePassword(pw: string) {
  const len = pw.length;
  let score = 0;
  const checks = {
    length: len >= 8,
    longLength: len >= 12,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    digit: /[0-9]/.test(pw),
    special: /[^A-Za-z0-9]/.test(pw),
  };
  if (checks.length) score += 20;
  if (checks.longLength) score += 10;
  if (checks.upper) score += 15;
  if (checks.lower) score += 15;
  if (checks.digit) score += 20;
  if (checks.special) score += 20;
  score = Math.min(100, score);
  const strength = score < 30 ? 'Very Weak' : score < 50 ? 'Weak' : score < 70 ? 'Fair' : score < 90 ? 'Strong' : 'Very Strong';
  const color = score < 30 ? '#ef4444' : score < 50 ? '#f97316' : score < 70 ? '#f59e0b' : score < 90 ? '#22c55e' : '#10b981';
  return { score, strength, color, checks };
}

export default function PasswordStrengthPage() {
  const [pw, setPw] = useState('');
  const [show, setShow] = useState(false);
  const a = pw ? analyzePassword(pw) : null;

  const criteria = [
    { label: 'At least 8 characters', ok: (pw.length >= 8) },
    { label: 'At least 12 characters', ok: (pw.length >= 12) },
    { label: 'Uppercase letters (A-Z)', ok: /[A-Z]/.test(pw) },
    { label: 'Lowercase letters (a-z)', ok: /[a-z]/.test(pw) },
    { label: 'Numbers (0-9)', ok: /[0-9]/.test(pw) },
    { label: 'Special characters (!@#…)', ok: /[^A-Za-z0-9]/.test(pw) },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Enter Password</label>
        <div className="relative mb-4">
          <input type={show ? 'text' : 'password'} value={pw} onChange={e => setPw(e.target.value)} placeholder="Type your password here…"
            className="w-full px-4 py-3 pr-12 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-slate-500 font-mono" />
          <button onClick={() => setShow(s => !s)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800 transition-colors">
            <i className={`fas fa-eye${show ? '-slash' : ''}`} />
          </button>
        </div>

        {a && (
          <>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-bold" style={{ color: a.color }}>{a.strength}</span>
              <span className="text-sm text-slate-400">{a.score}/100</span>
            </div>
            <div className="h-3 bg-slate-50 dark:bg-slate-900 rounded-full overflow-hidden mb-5">
              <div className="h-3 rounded-full transition-all duration-500" style={{ width: `${a.score}%`, backgroundColor: a.color }} />
            </div>
            <ul className="space-y-2">
              {criteria.map(c => (
                <li key={c.label} className="flex items-center gap-2 text-sm">
                  <i className={`fas fa-${c.ok ? 'check-circle text-emerald-500' : 'times-circle text-red-400'} text-sm`} />
                  <span className={c.ok ? 'text-slate-800 dark:text-slate-100' : 'text-slate-400 dark:text-slate-400'}>{c.label}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="mt-6 text-center">
        <Link href="/technology" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Technology Calculators
        </Link>
      </div>
    </div>
  );
}
