'use client';
import { useState } from 'react';
import Link from 'next/link';

/* ─── Helpers ─────────────────────────────────────────────── */
function fmt(n: number, decimals = 4): string {
  if (!isFinite(n)) return '—';
  const abs = Math.abs(n);
  if (abs === 0) return '0';
  if (abs >= 1_000_000) return n.toLocaleString('en-US', { maximumFractionDigits: 2 });
  if (abs >= 1)
    return parseFloat(n.toFixed(decimals)).toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimals,
    });
  return parseFloat(n.toPrecision(6)).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 6,
  });
}

function fmt2(n: number): string {
  return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/* ─── Types ───────────────────────────────────────────────── */
type Mode =
  | 'remaining'
  | 'initial'
  | 'time'
  | 'half-life';

interface BreakdownItem {
  label: string;
  value: string;
  highlight?: boolean;
}

interface CalcResult {
  value: string;
  label: string;
  formula: string;
  breakdown: BreakdownItem[];
  direction?: 'up' | 'down' | 'neutral';
  error?: never;
}

interface CalcError {
  error: string;
  value?: never;
}

type CalcOutput = CalcResult | CalcError | null;

/* ─── Mode Config ─────────────────────────────────────────── */
const MODES: {
  key: Mode;
  label: string;
  shortLabel: string;
  description: string;
  fields: { id: string; label: string; placeholder: string; hint?: string }[];
  icon: string;
  calc: (vals: Record<string, number | null>) => CalcOutput;
}[] = [
  {
    key: 'remaining',
    label: 'Remaining Quantity',
    shortLabel: 'Remaining',
    description: 'Calculate the remaining quantity of a substance after a certain time.',
    icon: '◒',
    fields: [
      { id: 'n0', label: 'Initial Quantity (N₀)', placeholder: '100', hint: 'Starting amount' },
      { id: 't', label: 'Elapsed Time (t)', placeholder: '10', hint: 'Time passed' },
      { id: 'h', label: 'Half-Life (t₁/₂)', placeholder: '5', hint: 'Half-life of substance' },
    ],
    calc({ n0, t, h }) {
      if (n0 === null || t === null || h === null) return null;
      if (h <= 0) return { error: 'Half-life must be greater than zero.' };
      if (n0 < 0) return { error: 'Initial quantity cannot be negative.' };
      if (t < 0) return { error: 'Elapsed time cannot be negative.' };
      
      const r = n0 * Math.pow(0.5, t / h);
      return {
        value: fmt(r),
        label: 'Remaining Quantity',
        formula: `${fmt(n0)} × (1/2)^(${fmt(t)} ÷ ${fmt(h)}) = ${fmt(r)}`,
        breakdown: [
          { label: 'Initial', value: fmt(n0) },
          { label: 'Elapsed time', value: fmt(t) },
          { label: 'Half-life', value: fmt(h) },
          { label: 'Remaining', value: fmt(r), highlight: true },
        ],
      };
    },
  },
  {
    key: 'initial',
    label: 'Initial Quantity',
    shortLabel: 'Initial',
    description: 'Determine the initial quantity of a substance based on what remains.',
    icon: '◉',
    fields: [
      { id: 'nt', label: 'Remaining Quantity (N(t))', placeholder: '25', hint: 'Amount left' },
      { id: 't', label: 'Elapsed Time (t)', placeholder: '10', hint: 'Time passed' },
      { id: 'h', label: 'Half-Life (t₁/₂)', placeholder: '5', hint: 'Half-life of substance' },
    ],
    calc({ nt, t, h }) {
      if (nt === null || t === null || h === null) return null;
      if (h <= 0) return { error: 'Half-life must be greater than zero.' };
      if (nt < 0) return { error: 'Remaining quantity cannot be negative.' };
      if (t < 0) return { error: 'Elapsed time cannot be negative.' };
      
      const r = nt / Math.pow(0.5, t / h);
      return {
        value: fmt(r),
        label: 'Initial Quantity',
        formula: `${fmt(nt)} ÷ (1/2)^(${fmt(t)} ÷ ${fmt(h)}) = ${fmt(r)}`,
        breakdown: [
          { label: 'Remaining', value: fmt(nt) },
          { label: 'Elapsed time', value: fmt(t) },
          { label: 'Half-life', value: fmt(h) },
          { label: 'Initial', value: fmt(r), highlight: true },
        ],
      };
    },
  },
  {
    key: 'time',
    label: 'Elapsed Time',
    shortLabel: 'Time',
    description: 'Calculate how much time has passed for a substance to decay.',
    icon: '⏱',
    fields: [
      { id: 'n0', label: 'Initial Quantity (N₀)', placeholder: '100', hint: 'Starting amount' },
      { id: 'nt', label: 'Remaining Quantity (N(t))', placeholder: '25', hint: 'Amount left' },
      { id: 'h', label: 'Half-Life (t₁/₂)', placeholder: '5', hint: 'Half-life of substance' },
    ],
    calc({ n0, nt, h }) {
      if (n0 === null || nt === null || h === null) return null;
      if (h <= 0) return { error: 'Half-life must be greater than zero.' };
      if (n0 <= 0) return { error: 'Initial quantity must be greater than zero.' };
      if (nt <= 0) return { error: 'Remaining quantity must be greater than zero.' };
      if (nt > n0) return { error: 'Remaining quantity cannot be greater than initial quantity.' };
      
      const r = -h * (Math.log(nt / n0) / Math.LN2);
      return {
        value: fmt(r),
        label: 'Elapsed Time',
        formula: `−${fmt(h)} × (ln(${fmt(nt)} ÷ ${fmt(n0)}) ÷ ln(2)) = ${fmt(r)}`,
        breakdown: [
          { label: 'Initial', value: fmt(n0) },
          { label: 'Remaining', value: fmt(nt) },
          { label: 'Half-life', value: fmt(h) },
          { label: 'Elapsed time', value: fmt(r), highlight: true },
        ],
      };
    },
  },
  {
    key: 'half-life',
    label: 'Half-Life',
    shortLabel: 'Half-Life',
    description: 'Find the half-life of a substance based on its decay over time.',
    icon: '◭',
    fields: [
      { id: 'n0', label: 'Initial Quantity (N₀)', placeholder: '100', hint: 'Starting amount' },
      { id: 'nt', label: 'Remaining Quantity (N(t))', placeholder: '25', hint: 'Amount left' },
      { id: 't', label: 'Elapsed Time (t)', placeholder: '10', hint: 'Time passed' },
    ],
    calc({ n0, nt, t }) {
      if (n0 === null || nt === null || t === null) return null;
      if (t <= 0) return { error: 'Elapsed time must be greater than zero.' };
      if (n0 <= 0) return { error: 'Initial quantity must be greater than zero.' };
      if (nt <= 0) return { error: 'Remaining quantity must be greater than zero.' };
      if (nt >= n0) return { error: 'Remaining quantity must be strictly less than initial quantity to calculate half-life.' };
      
      const r = -t * (Math.LN2 / Math.log(nt / n0));
      return {
        value: fmt(r),
        label: 'Half-Life',
        formula: `−${fmt(t)} × (ln(2) ÷ ln(${fmt(nt)} ÷ ${fmt(n0)})) = ${fmt(r)}`,
        breakdown: [
          { label: 'Initial', value: fmt(n0) },
          { label: 'Remaining', value: fmt(nt) },
          { label: 'Elapsed time', value: fmt(t) },
          { label: 'Half-life', value: fmt(r), highlight: true },
        ],
      };
    },
  },
];

/* ─── Field Input ─────────────────────────────────────────── */
function NumberInput({
  label,
  value,
  onChange,
  placeholder,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl
          bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100
          text-base font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600
          focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400
          transition-colors duration-150"
      />
      {hint && <span className="text-xs text-slate-400 dark:text-slate-500 pl-1">{hint}</span>}
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────── */
export default function HalfLifeCalculatorClient() {
  const [mode, setMode] = useState<Mode>('remaining');
  const [values, setValues] = useState<Record<Mode, { n0?: string; nt?: string; t?: string; h?: string }>>({
    'remaining': { n0: '100', t: '10', h: '5' },
    'initial':   { nt: '25', t: '10', h: '5' },
    'time':      { n0: '100', nt: '25', h: '5' },
    'half-life': { n0: '100', nt: '25', t: '10' },
  });

  const currentMode = MODES.find((m) => m.key === mode)!;
  const currentValues = values[mode];

  // Derived state - calculate result on every render
  const result: CalcOutput = (() => {
    const vals: Record<string, number | null> = {};
    for (const field of currentMode.fields) {
      const valStr = currentValues[field.id as keyof typeof currentValues] || '';
      const num = valStr === '' ? null : parseFloat(valStr);
      vals[field.id] = num !== null && isNaN(num) ? null : num;
    }
    return currentMode.calc(vals);
  })();

  function setField(field: string, val: string) {
    setValues((prev) => ({ ...prev, [mode]: { ...prev[mode], [field]: val } }));
  }

  const hasResult = result && !('error' in result) && result.value !== undefined;
  const hasError  = result && 'error' in result;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-16 sm:pb-20">


      {/* ── Mode Tabs ─────────────────────────────────────── */}
      <div className="bg-slate-100 dark:bg-slate-800/60 rounded-2xl p-1.5 mb-6 flex flex-wrap gap-1">
        {MODES.map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            className={`flex-1 min-w-[calc(25%-4px)] sm:min-w-0 py-2 px-2 rounded-xl text-xs font-semibold
              transition-all duration-150 text-center whitespace-nowrap
              ${mode === m.key
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/40'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-700/60'
              }`}
          >
            {m.shortLabel}
          </button>
        ))}
      </div>

      {/* ── Calculator Card ────────────────────────────────── */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/60 overflow-hidden">

        {/* Mode description */}
        <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-0">
          <div className="flex items-start gap-3 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200/70 dark:border-indigo-700/40 rounded-xl px-4 py-3 mb-6">
            <span className="text-indigo-500 mt-0.5 shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </span>
            <p className="text-sm text-indigo-800 dark:text-indigo-300 leading-relaxed">
              {currentMode.description}
            </p>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {currentMode.fields.map((field) => (
              <NumberInput
                key={field.id}
                label={field.label}
                value={currentValues[field.id as keyof typeof currentValues] || ''}
                onChange={(v) => setField(field.id, v)}
                placeholder={field.placeholder}
                hint={field.hint}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100 dark:bg-slate-800 mx-0 mb-0" />

        {/* Result area */}
        <div className="px-5 sm:px-7 py-5 sm:py-6">

          {/* Error state */}
          {hasError && (
            <div className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/40 rounded-xl px-4 py-3 mb-5">
              <span className="text-red-500 mt-0.5 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </span>
              <p className="text-sm text-red-700 dark:text-red-300">
                {(result as CalcError).error}
              </p>
            </div>
          )}

          {/* Result display */}
          {hasResult && (result as CalcResult) && (() => {
            const r = result as CalcResult;
            return (
              <>
                {/* Main result */}
                <div
                  className="rounded-2xl px-6 py-5 mb-5 flex items-center justify-between gap-4 bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700"
                >
                  <div>
                    <div className="text-white/75 text-xs font-semibold uppercase tracking-widest mb-1">
                      {r.label}
                    </div>
                    <div className="text-4xl font-extrabold text-white tracking-tight">
                      {r.value}
                    </div>
                  </div>
                  <div className="text-6xl font-black text-white/15 select-none leading-none">
                    {currentMode.icon}
                  </div>
                </div>

                {/* Formula */}
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 px-4 py-3 mb-5">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Formula</div>
                  <code className="text-sm text-slate-700 dark:text-slate-300 font-mono leading-relaxed break-all">
                    {r.formula}
                  </code>
                </div>

                {/* Breakdown grid */}
                {r.breakdown.length > 0 && (
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Breakdown</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {r.breakdown.map((item) => (
                        <div
                          key={item.label}
                          className={`rounded-xl px-3.5 py-3 border transition-all
                            ${item.highlight
                              ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-700/40'
                              : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/50'
                            }`}
                        >
                          <div className={`text-[10px] font-semibold uppercase tracking-wide mb-1
                            ${item.highlight ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`}>
                            {item.label}
                          </div>
                          <div className={`text-xs sm:text-sm font-bold tabular-nums
                            ${item.highlight ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-700 dark:text-slate-200'}`}>
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            );
          })()}

          {/* Empty state */}
          {!hasResult && !hasError && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-3">
                <span className="text-indigo-500 text-xl font-bold">◒</span>
              </div>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                Enter values above to see the result
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Reference Cards ───────────────────────────────── */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-5">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3">
            Quick Reference
          </h2>
          <ul className="space-y-2">
            {[
              ['N₀', 'Initial Quantity (amount before decay)'],
              ['N(t)', 'Remaining Quantity (amount after time t)'],
              ['t', 'Elapsed Time'],
              ['t₁/₂', 'Half-Life (time for quantity to halve)'],
            ].map(([term, def]) => (
              <li key={term} className="flex items-start gap-2 text-sm">
                <span className="text-indigo-500 font-bold shrink-0 w-[40px]">{term}</span>
                <span className="text-slate-500 dark:text-slate-400">{def}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-5">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3">
            Common Formulas
          </h2>
          <ul className="space-y-2.5">
            {[
              ['Remaining', 'N(t) = N₀ × (1/2)^(t / t₁/₂)'],
              ['Initial', 'N₀ = N(t) / (1/2)^(t / t₁/₂)'],
              ['Time', 't = −t₁/₂ × ln(N(t)/N₀) / ln(2)'],
              ['Half-Life', 't₁/₂ = −t × ln(2) / ln(N(t)/N₀)'],
            ].map(([label, formula]) => (
              <li key={label} className="text-sm">
                <span className="text-slate-500 dark:text-slate-400">{label}:</span>{' '}
                <code className="text-indigo-700 dark:text-indigo-400 font-mono text-xs bg-indigo-50 dark:bg-indigo-900/20 px-1.5 py-0.5 rounded">
                  {formula}
                </code>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Back link ─────────────────────────────────────── */}
      <div className="mt-8 text-center">
        <Link
          href="/math"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          All Math Calculators
        </Link>
      </div>
    </div>
  );
}
