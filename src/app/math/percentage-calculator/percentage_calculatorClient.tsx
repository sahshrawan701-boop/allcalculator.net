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
  | 'pct-of'
  | 'pct-change'
  | 'pct-diff'
  | 'what-pct'
  | 'increase'
  | 'decrease';

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
    key: 'pct-of',
    label: 'X% of Y',
    shortLabel: 'X% of Y',
    description: 'Find the value that equals a given percentage of a number.',
    icon: '%',
    fields: [
      { id: 'a', label: 'Percentage (%)', placeholder: '25', hint: 'e.g. 25 for 25%' },
      { id: 'b', label: 'Of value', placeholder: '200', hint: 'The base number' },
    ],
    calc({ a, b }) {
      if (a === null || b === null) return null;
      const r = (a / 100) * b;
      return {
        value: fmt(r),
        label: 'Result',
        formula: `${fmt(a)}% × ${fmt(b)} = ${fmt(r)}`,
        breakdown: [
          { label: 'Percentage', value: fmt(a) + '%' },
          { label: 'Base value', value: fmt(b) },
          { label: 'Result', value: fmt(r), highlight: true },
          { label: 'Remaining', value: fmt(b - r) },
        ],
      };
    },
  },
  {
    key: 'pct-change',
    label: '% Change',
    shortLabel: '% Change',
    description: 'Calculate the percentage increase or decrease between two values.',
    icon: '↑↓',
    fields: [
      { id: 'a', label: 'Original value', placeholder: '80' },
      { id: 'b', label: 'New value', placeholder: '100' },
    ],
    calc({ a, b }) {
      if (a === null || b === null) return null;
      if (a === 0) return { error: 'Original value cannot be zero — division by zero.' };
      const r = ((b - a) / Math.abs(a)) * 100;
      const direction: 'up' | 'down' | 'neutral' =
        r > 0 ? 'up' : r < 0 ? 'down' : 'neutral';
      return {
        value: (r > 0 ? '+' : '') + fmt2(r) + '%',
        label: r > 0 ? 'Percentage increase' : r < 0 ? 'Percentage decrease' : 'No change',
        formula: `((${fmt(b)} − ${fmt(a)}) ÷ |${fmt(a)}|) × 100 = ${(r > 0 ? '+' : '')}${fmt2(r)}%`,
        direction,
        breakdown: [
          { label: 'Original', value: fmt(a) },
          { label: 'New value', value: fmt(b) },
          { label: 'Absolute change', value: (b - a >= 0 ? '+' : '') + fmt(b - a) },
          { label: '% change', value: (r > 0 ? '+' : '') + fmt2(r) + '%', highlight: true },
        ],
      };
    },
  },
  {
    key: 'pct-diff',
    label: '% Difference',
    shortLabel: '% Diff',
    description: 'Symmetric percentage difference between two values — order doesn\'t matter.',
    icon: '⇄',
    fields: [
      { id: 'a', label: 'Value A', placeholder: '90' },
      { id: 'b', label: 'Value B', placeholder: '110' },
    ],
    calc({ a, b }) {
      if (a === null || b === null) return null;
      if (a + b === 0) return { error: 'Sum of both values cannot be zero.' };
      const r = (Math.abs(a - b) / ((a + b) / 2)) * 100;
      return {
        value: fmt2(r) + '%',
        label: 'Percentage difference',
        formula: `|${fmt(a)} − ${fmt(b)}| ÷ ((${fmt(a)} + ${fmt(b)}) ÷ 2) × 100 = ${fmt2(r)}%`,
        breakdown: [
          { label: 'Value A', value: fmt(a) },
          { label: 'Value B', value: fmt(b) },
          { label: 'Absolute diff', value: fmt(Math.abs(a - b)) },
          { label: 'Average', value: fmt((a + b) / 2) },
          { label: '% difference', value: fmt2(r) + '%', highlight: true },
        ],
      };
    },
  },
  {
    key: 'what-pct',
    label: 'X is what % of Y',
    shortLabel: 'X of Y = ?%',
    description: 'Find what percentage one number is of another.',
    icon: '÷',
    fields: [
      { id: 'a', label: 'Part (X)', placeholder: '45', hint: 'The smaller part' },
      { id: 'b', label: 'Whole (Y)', placeholder: '180', hint: 'The total/whole' },
    ],
    calc({ a, b }) {
      if (a === null || b === null) return null;
      if (b === 0) return { error: 'Whole value (Y) cannot be zero.' };
      const r = (a / b) * 100;
      return {
        value: fmt2(r) + '%',
        label: 'Percentage',
        formula: `(${fmt(a)} ÷ ${fmt(b)}) × 100 = ${fmt2(r)}%`,
        breakdown: [
          { label: 'Part (X)', value: fmt(a) },
          { label: 'Whole (Y)', value: fmt(b) },
          { label: 'Percentage', value: fmt2(r) + '%', highlight: true },
          { label: 'Remainder', value: fmt2(100 - r) + '%' },
        ],
      };
    },
  },
  {
    key: 'increase',
    label: 'Increase by %',
    shortLabel: 'Increase',
    description: 'Calculate the new value after applying a percentage increase.',
    icon: '+%',
    fields: [
      { id: 'a', label: 'Original value', placeholder: '250' },
      { id: 'b', label: 'Increase by (%)', placeholder: '15', hint: 'e.g. 15 for +15%' },
    ],
    calc({ a, b }) {
      if (a === null || b === null) return null;
      if (b < 0) return { error: 'Use the "Decrease by %" mode for negative percentages.' };
      const added = (b / 100) * a;
      const r = a + added;
      return {
        value: fmt(r),
        label: 'New value',
        formula: `${fmt(a)} + (${fmt(b)}% × ${fmt(a)}) = ${fmt(r)}`,
        direction: 'up',
        breakdown: [
          { label: 'Original', value: fmt(a) },
          { label: 'Rate', value: '+' + fmt(b) + '%' },
          { label: 'Amount added', value: '+' + fmt(added) },
          { label: 'New value', value: fmt(r), highlight: true },
        ],
      };
    },
  },
  {
    key: 'decrease',
    label: 'Decrease by %',
    shortLabel: 'Decrease',
    description: 'Calculate the new value after applying a percentage decrease.',
    icon: '−%',
    fields: [
      { id: 'a', label: 'Original value', placeholder: '250' },
      { id: 'b', label: 'Decrease by (%)', placeholder: '15', hint: 'e.g. 15 for −15%' },
    ],
    calc({ a, b }) {
      if (a === null || b === null) return null;
      if (b < 0) return { error: 'Enter a positive percentage to decrease by.' };
      if (b > 100) return { error: 'Cannot decrease by more than 100% — result would be negative.' };
      const removed = (b / 100) * a;
      const r = a - removed;
      return {
        value: fmt(r),
        label: 'New value',
        formula: `${fmt(a)} − (${fmt(b)}% × ${fmt(a)}) = ${fmt(r)}`,
        direction: 'down',
        breakdown: [
          { label: 'Original', value: fmt(a) },
          { label: 'Rate', value: '−' + fmt(b) + '%' },
          { label: 'Amount removed', value: '−' + fmt(removed) },
          { label: 'New value', value: fmt(r), highlight: true },
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
export default function PercentageCalculatorPage() {
  const [mode, setMode] = useState<Mode>('pct-of');
  const [values, setValues] = useState<Record<Mode, { a: string; b: string }>>({
    'pct-of':    { a: '25',  b: '200' },
    'pct-change':{ a: '80',  b: '100' },
    'pct-diff':  { a: '90',  b: '110' },
    'what-pct':  { a: '45',  b: '180' },
    'increase':  { a: '250', b: '15'  },
    'decrease':  { a: '250', b: '15'  },
  });

  const currentMode = MODES.find((m) => m.key === mode)!;
  const currentValues = values[mode];

  // Derived state - calculate result on every render
  const result: CalcOutput = (() => {
    const a = currentValues.a === '' ? null : parseFloat(currentValues.a);
    const b = currentValues.b === '' ? null : parseFloat(currentValues.b);
    const av = a !== null && isNaN(a) ? null : a;
    const bv = b !== null && isNaN(b) ? null : b;
    return currentMode.calc({ a: av, b: bv });
  })();

  function setField(field: 'a' | 'b', val: string) {
    setValues((prev) => ({ ...prev, [mode]: { ...prev[mode], [field]: val } }));
  }

  const hasResult = result && !('error' in result) && result.value !== undefined;
  const hasError  = result && 'error' in result;

  /* direction badge colours */
  const directionStyles = {
    up:      'text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-900/30',
    down:    'text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-900/30',
    neutral: 'text-slate-600 bg-slate-100 dark:text-slate-300 dark:bg-slate-800',
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* ── Mode Tabs ─────────────────────────────────────── */}
      <div className="bg-slate-100 dark:bg-slate-800/60 rounded-2xl p-1.5 mb-6 flex flex-wrap gap-1">
        {MODES.map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            className={`flex-1 min-w-[calc(33.333%-4px)] sm:min-w-0 py-2 px-2 rounded-xl text-xs font-semibold
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
            <NumberInput
              label={currentMode.fields[0].label}
              value={currentValues.a}
              onChange={(v) => setField('a', v)}
              placeholder={currentMode.fields[0].placeholder}
              hint={currentMode.fields[0].hint}
            />
            <NumberInput
              label={currentMode.fields[1].label}
              value={currentValues.b}
              onChange={(v) => setField('b', v)}
              placeholder={currentMode.fields[1].placeholder}
              hint={currentMode.fields[1].hint}
            />
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
                  className="rounded-2xl px-5 sm:px-6 py-4 sm:py-5 mb-5 flex items-center justify-between gap-4 bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700"
                >
                  <div>
                    <div className="text-white/75 text-xs font-semibold uppercase tracking-widest mb-1">
                      {r.label}
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {r.value}
                    </div>
                    {r.direction && r.direction !== 'neutral' && (
                      <span
                        className={`inline-flex items-center gap-1 mt-2 text-xs font-bold px-2 py-0.5 rounded-full
                          ${r.direction === 'up'
                            ? 'bg-white/25 text-white'
                            : 'bg-white/25 text-white'
                          }`}
                      >
                        {r.direction === 'up' ? '▲ Increase' : '▼ Decrease'}
                      </span>
                    )}
                  </div>
                  <div className="text-5xl sm:text-6xl font-black text-white/15 select-none leading-none">
                    %
                  </div>
                </div>

                {/* Formula */}
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 px-4 py-3 mb-5">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Formula</div>
                  <code className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono leading-relaxed break-all">
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
                <span className="text-indigo-500 text-xl font-bold">%</span>
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
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-4 sm:p-5">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3">
            Quick Reference
          </h2>
          <ul className="space-y-2">
            {[
              ['X% of Y',      'Discount, tip, tax calculations'],
              ['% Change',     'Price changes, growth rates'],
              ['% Difference', 'Comparing two independent values'],
              ['X of Y = ?%',  'Score out of total, market share'],
              ['Increase',     'Markup, salary raise, price hike'],
              ['Decrease',     'Sale price, reduction, markdown'],
            ].map(([term, def]) => (
              <li key={term} className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="text-amber-500 font-bold shrink-0 w-[90px]">{term}</span>
                <span className="text-slate-500 dark:text-slate-400">{def}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-4 sm:p-5">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3">
            Common Formulas
          </h2>
          <ul className="space-y-2.5">
            {[
              ['X% of Y',          '(X ÷ 100) × Y'],
              ['% Change',         '((New − Old) ÷ |Old|) × 100'],
              ['% Difference',     '|A − B| ÷ ((A + B) ÷ 2) × 100'],
              ['Part of Whole',    '(Part ÷ Whole) × 100'],
              ['After increase',   'Value × (1 + Rate ÷ 100)'],
              ['After decrease',   'Value × (1 − Rate ÷ 100)'],
            ].map(([label, formula]) => (
              <li key={label} className="text-xs sm:text-sm">
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