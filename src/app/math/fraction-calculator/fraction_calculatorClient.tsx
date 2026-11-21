'use client';
import { useState } from 'react';
import Link from 'next/link';

function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }

interface Frac { n: number; d: number; }

function parseFrac(s: string): Frac | null {
  const parts = s.trim().split('/');
  if (parts.length === 1) {
    const n = parseInt(parts[0]);
    return isNaN(n) ? null : { n, d: 1 };
  }
  const n = parseInt(parts[0]), d = parseInt(parts[1]);
  if (isNaN(n) || isNaN(d) || d === 0) return null;
  return { n, d };
}

function simplify(n: number, d: number): Frac {
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(Math.abs(n), Math.abs(d));
  return { n: n / g, d: d / g };
}

function fracToStr(f: Frac): string {
  return f.d === 1 ? `${f.n}` : `${f.n}/${f.d}`;
}

type Op = '+' | '-' | '×' | '÷';

function compute(a: Frac, b: Frac, op: Op): Frac | null {
  let n: number, d: number;
  if (op === '+') { n = a.n * b.d + b.n * a.d; d = a.d * b.d; }
  else if (op === '-') { n = a.n * b.d - b.n * a.d; d = a.d * b.d; }
  else if (op === '×') { n = a.n * b.n; d = a.d * b.d; }
  else { if (b.n === 0) return null; n = a.n * b.d; d = a.d * b.n; }
  return simplify(n, d);
}

export default function FractionCalculatorPage() {
  const [fracA, setFracA] = useState('1/2');
  const [fracB, setFracB] = useState('1/3');
  const [op, setOp] = useState<Op>('+');
  const [result, setResult] = useState<Frac | null>(null);
  const [error, setError] = useState('');

  function calculate() {
    const a = parseFrac(fracA), b = parseFrac(fracB);
    if (!a || !b) { setError('Invalid fraction format. Use "a/b" or just "a".'); return; }
    const r = compute(a, b, op);
    if (!r) { setError('Division by zero.'); return; }
    setError('');
    setResult(r);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-5">
          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-slate-400 mb-1">Fraction A</label>
            <input value={fracA} onChange={e => setFracA(e.target.value)} placeholder="e.g. 3/4"
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-base sm:text-lg text-center font-mono focus:outline-none focus:border-amber-400" />
          </div>
          <div className="flex flex-row sm:flex-col gap-1 mt-4 sm:mt-4">
            {(['+', '-', '×', '÷'] as Op[]).map(o => (
              <button key={o} onClick={() => setOp(o)}
                className={`w-10 h-8 sm:h-8 rounded-lg text-xs sm:text-sm font-bold transition-all ${op === o ? 'bg-amber-500 text-white' : 'bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-amber-100'}`}>
                {o}
              </button>
            ))}
          </div>
          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-slate-400 mb-1">Fraction B</label>
            <input value={fracB} onChange={e => setFracB(e.target.value)} placeholder="e.g. 2/3"
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-base sm:text-lg text-center font-mono focus:outline-none focus:border-amber-400" />
          </div>
        </div>
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-amber-400 to-amber-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
          <i className="fas fa-equals" /> Calculate
        </button>
      </div>
      {result && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 text-center">
          <div className="text-xs text-slate-400 mb-2">{fracA} {op} {fracB} =</div>
          <div className="text-4xl sm:text-5xl font-extrabold text-amber-500 font-mono mb-2">{fracToStr(result)}</div>
          {result.d !== 1 && (
            <div className="text-slate-400 text-sm">≈ {(result.n / result.d).toFixed(6)}</div>
          )}
        </div>
      )}
      <div className="mt-8 text-center">
        <Link href="/math" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Math Calculators
        </Link>
      </div>
    </div>
  );
}
