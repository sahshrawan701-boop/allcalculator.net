'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function KineticEnergyPage() {
  const [mass, setMass] = useState(10);
  const [velocity, setVelocity] = useState(5);
  const [result, setResult] = useState<number | null>(null);

  function calculate() { setResult(0.5 * mass * velocity * velocity); }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        {[{ label: 'Mass (kg)', value: mass, set: setMass }, { label: 'Velocity (m/s)', value: velocity, set: setVelocity }].map(f => (
          <div key={f.label} className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">{f.label}</label>
            <input type="number" value={f.value} min={0} step={0.1} onChange={e => f.set(Number(e.target.value))}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500" />
          </div>
        ))}
        <button onClick={calculate} className="w-full py-3.5 bg-gradient-to-br from-violet-500 to-violet-700 text-white font-bold rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 text-sm sm:text-base">
          <i className="fas fa-bolt mr-2" />Calculate KE
        </button>
      </div>
      {result !== null && (
        <div className="bg-gradient-to-br from-violet-500 to-violet-700 rounded-2xl p-5 sm:p-7 text-white text-center shadow-xl">
          <div className="text-xs sm:text-sm opacity-80 mb-1">Kinetic Energy</div>
          <div className="text-3xl sm:text-4xl font-extrabold mb-1">{result.toFixed(4)} J</div>
          <div className="text-xs sm:text-sm opacity-70">{(result / 1000).toFixed(6)} kJ</div>
        </div>
      )}
      <div className="mt-8 text-center">
        <Link href="/science" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Science Calculators
        </Link>
      </div>
    </div>
  );
}
