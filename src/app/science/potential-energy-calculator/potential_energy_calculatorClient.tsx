'use client';
import { useState } from 'react';
import Link from 'next/link';

function SciCalc({ title, subtitle, href, catHref, gradient, fields, formula, onCalc }:{
  title: string; subtitle: string; href: string; catHref: string; gradient: string;
  fields: { label: string; value: number; set: (v: number) => void; unit: string }[];
  formula: string; onCalc: () => number | null;
}) {
  const [result, setResult] = useState<number | null>(null);
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl px-4 sm:px-5 py-3 font-mono text-center text-violet-600 dark:text-violet-400 font-bold mb-5 text-xs sm:text-sm">{formula}</div>
        {fields.map(f => (
          <div key={f.label} className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">{f.label}</label>
            <div className="relative">
              <input type="number" value={f.value} min={0} step={0.1} onChange={e => f.set(Number(e.target.value))}
                className="w-full px-4 py-3 pr-16 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">{f.unit}</span>
            </div>
          </div>
        ))}
        <button onClick={() => setResult(onCalc())}
          className="w-full py-3.5 font-bold text-white rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm sm:text-base" style={{ background: gradient }}>
          <i className="fas fa-calculator mr-2" />Calculate
        </button>
      </div>
      {result !== null && (
        <div className="rounded-2xl p-5 sm:p-7 text-white text-center shadow-xl" style={{ background: gradient }}>
          <div className="text-xs sm:text-sm opacity-80 mb-1">Result</div>
          <div className="text-3xl sm:text-4xl font-extrabold">{result.toFixed(4)}</div>
        </div>
      )}
      <div className="mt-8 text-center">
        <Link href={catHref} className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> Back
        </Link>
      </div>
    </div>
  );
}

// ——— Potential Energy ———
export function PotentialEnergyPage() {
  const [mass, setMass] = useState(10);
  const [height, setHeight] = useState(5);
  const g = 9.81;
  return <SciCalc title="Potential Energy Calculator" subtitle="PE = mgh — Gravitational potential energy." href="/science/potential-energy-calculator" catHref="/science"
    gradient="linear-gradient(135deg, #8b5cf6, #6d28d9)" formula="PE = m × g × h"
    fields={[{ label: 'Mass', value: mass, set: setMass, unit: 'kg' }, { label: 'Height', value: height, set: setHeight, unit: 'm' }]}
    onCalc={() => mass * g * height} />;
}
export default PotentialEnergyPage;
