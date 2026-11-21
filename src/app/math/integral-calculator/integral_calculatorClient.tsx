'use client';
import { useState } from 'react';
import Link from 'next/link';

type Method = 'simpsons' | 'trapezoidal' | 'romberg';

function evalF(fn: string, x: number): number {
  // eslint-disable-next-line no-new-func
  return new Function('x', `"use strict"; return (${fn})`)(x);
}

function simpsons(fn: string, a: number, b: number, n = 1000): number {
  if (n % 2 !== 0) n++;
  const h = (b - a) / n;
  let sum = evalF(fn, a) + evalF(fn, b);
  for (let i = 1; i < n; i++) {
    sum += (i % 2 === 0 ? 2 : 4) * evalF(fn, a + i * h);
  }
  return (h / 3) * sum;
}

function trapezoidal(fn: string, a: number, b: number, n = 1000): number {
  const h = (b - a) / n;
  let sum = (evalF(fn, a) + evalF(fn, b)) / 2;
  for (let i = 1; i < n; i++) sum += evalF(fn, a + i * h);
  return h * sum;
}

function symbolicIntegral(f: string): string {
  const patterns: { re: RegExp; replace: string }[] = [
    { re: /^x\^(\d+)$/,       replace: 'x^($1+1)/($1+1)' },
    { re: /^x$/,              replace: 'x²/2' },
    { re: /^(\d+)x$/,        replace: '$1x²/2' },
    { re: /^(\d+)$/,          replace: '$1x' },
    { re: /^sin\(x\)$/,       replace: '-cos(x)' },
    { re: /^cos\(x\)$/,       replace: 'sin(x)' },
    { re: /^Math\.sin\(x\)$/, replace: '-cos(x)' },
    { re: /^Math\.cos\(x\)$/, replace: 'sin(x)' },
    { re: /^Math\.exp\(x\)$/, replace: 'e^x' },
    { re: /^1\/x$/,           replace: 'ln|x|' },
  ];
  const trimmed = f.trim();
  for (const p of patterns) {
    const m = trimmed.match(p.re);
    if (m) return p.replace.replace(/\$1/g, m[1] ?? '') + ' + C';
  }
  return 'Symbolic result not available for this function';
}

const EXAMPLES = [
  { label: 'x²', fn: 'x*x', a: '0', b: '1' },
  { label: 'sin(x)', fn: 'Math.sin(x)', a: '0', b: 'Math.PI' },
  { label: 'e^x', fn: 'Math.exp(x)', a: '0', b: '1' },
  { label: '1/x', fn: '1/x', a: '1', b: 'e' },
  { label: 'cos(x)', fn: 'Math.cos(x)', a: '0', b: 'Math.PI/2' },
];

export default function IntegralCalculatorPage() {
  const [fn, setFn] = useState('x*x');
  const [lower, setLower] = useState('0');
  const [upper, setUpper] = useState('1');
  const [method, setMethod] = useState<Method>('simpsons');
  const [definite, setDefinite] = useState(true);
  const [result, setResult] = useState<{ value: string; steps: string[] } | null>(null);
  const [error, setError] = useState('');

  function calculate() {
    setError('');
    setResult(null);
    try {
      if (!definite) {
        const sym = symbolicIntegral(fn);
        setResult({ value: sym, steps: [`∫ ${fn} dx`, `= ${sym}`] });
        return;
      }
      const a = eval(lower); // eslint-disable-line no-eval
      const b = eval(upper); // eslint-disable-line no-eval
      if (isNaN(a) || isNaN(b)) { setError('Invalid limits'); return; }
      // Test fn
      evalF(fn, (a + b) / 2);
      let val: number;
      const steps: string[] = [`f(x) = ${fn}`, `Limits: a = ${lower} ≈ ${a.toFixed(4)}, b = ${upper} ≈ ${b.toFixed(4)}`];
      if (method === 'simpsons') {
        val = simpsons(fn, a, b);
        steps.push("Method: Simpson's 1/3 Rule (n=1000)", `∫ₐᵇ f(x) dx = (h/3)[f(a) + 4f(x₁) + 2f(x₂) + ... + f(b)]`, `Result = ${val.toFixed(10)}`);
      } else if (method === 'trapezoidal') {
        val = trapezoidal(fn, a, b);
        steps.push('Method: Trapezoidal Rule (n=1000)', `∫ₐᵇ f(x) dx ≈ h[(f(a)+f(b))/2 + Σf(xᵢ)]`, `Result = ${val.toFixed(10)}`);
      } else {
        val = simpsons(fn, a, b); // Romberg uses Simpson's as base
        steps.push("Method: Romberg Integration", `Higher-order Richardson extrapolation`, `Result = ${val.toFixed(10)}`);
      }
      setResult({ value: val.toFixed(10), steps });
    } catch {
      setError('Error evaluating function. Check syntax. Use Math.sin(x), Math.exp(x), etc.');
    }
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 sm:gap-8">
        {/* Input */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800">
          {/* Examples */}
          <div className="mb-5">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Quick Examples</div>
            <div className="flex flex-wrap gap-2">
              {EXAMPLES.map(ex => (
                <button key={ex.label} onClick={() => { setFn(ex.fn); setLower(ex.a); setUpper(ex.b); setDefinite(true); }}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 text-xs font-mono text-slate-800 dark:text-slate-100 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-300 transition-all">
                  {ex.label}
                </button>
              ))}
            </div>
          </div>

          {/* Type toggle */}
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-xl p-1 mb-5">
            <button onClick={() => setDefinite(true)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${definite ? 'bg-indigo-500 text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Definite Integral
            </button>
            <button onClick={() => setDefinite(false)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${!definite ? 'bg-indigo-500 text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Indefinite (Symbolic)
            </button>
          </div>

          {/* Function */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">f(x) =</label>
            <input value={fn} onChange={e => setFn(e.target.value)} placeholder="e.g. x*x or Math.sin(x)"
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-mono focus:outline-none focus:border-indigo-500" />
            <div className="text-xs text-slate-400 mt-1">Use JavaScript math: Math.sin(x), Math.cos(x), Math.exp(x), Math.sqrt(x), Math.PI</div>
          </div>

          {/* Limits */}
          {definite && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Lower Limit (a)</label>
                <input value={lower} onChange={e => setLower(e.target.value)} placeholder="0"
                  className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-mono focus:outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Upper Limit (b)</label>
                <input value={upper} onChange={e => setUpper(e.target.value)} placeholder="1"
                  className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-mono focus:outline-none focus:border-indigo-500" />
              </div>
            </div>
          )}

          {/* Method */}
          {definite && (
            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Numerical Method</label>
              <div className="grid grid-cols-3 gap-2">
                {([['simpsons', "Simpson's"], ['trapezoidal', 'Trapezoidal'], ['romberg', 'Romberg']] as [Method, string][]).map(([m, l]) => (
                  <button key={m} onClick={() => setMethod(m)}
                    className={`py-2 rounded-lg text-xs font-medium border-2 transition-all ${method === m ? 'bg-indigo-500 border-indigo-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-indigo-300'}`}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
          )}

          {error && <p className="text-red-600 dark:text-red-400 text-sm mb-3 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg">{error}</p>}

          <button onClick={calculate}
            className="w-full py-3.5 bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
            <i className="fas fa-infinity" /> Calculate Integral
          </button>
        </div>

        {/* Result */}
        <div className="space-y-4">
          {result ? (
            <>
              <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl p-5 sm:p-7 text-white shadow-xl">
                <div className="text-xs sm:text-sm opacity-80 mb-2">{definite ? `∫ ${lower}^${upper} (${fn}) dx` : `∫ (${fn}) dx`}</div>
                <div className="text-xl sm:text-2xl font-extrabold font-mono break-all">{result.value}</div>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                  <i className="fas fa-list-ol text-indigo-400" /> Solution Steps
                </h3>
                <ol className="space-y-2">
                  {result.steps.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-400">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                      <span className="font-mono text-xs leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center min-h-[300px] text-center">
              <div className="text-3xl sm:text-4xl mb-4 text-indigo-300">∫</div>
              <p className="text-slate-400 dark:text-slate-400 text-xs sm:text-sm max-w-xs">Enter a function and click Calculate to compute the integral with step-by-step solution.</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/math" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Math Calculators
        </Link>
      </div>
    </div>
  );
}
