'use client';
import { useState } from 'react';
import Link from 'next/link';

type Gender = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'extra';

const ACTIVITY: Record<ActivityLevel, { label: string; multiplier: number }> = {
  sedentary: { label: 'Sedentary (no exercise)', multiplier: 1.0 },
  light: { label: 'Light (1–3 days/week)', multiplier: 1.2 },
  moderate: { label: 'Moderate (3–5 days/week)', multiplier: 1.4 },
  active: { label: 'Active (6–7 days/week)', multiplier: 1.6 },
  extra: { label: 'Extra Active (athlete)', multiplier: 1.8 },
};

export default function WaterIntakeCalculatorPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [weight, setWeight] = useState(75);
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [climate, setClimate] = useState('normal');
  const [result, setResult] = useState<null | { dailyWater: number; glasses: number; perHour: number }>(null);

  function calculate() {
    let baseWater: number;
    if (gender === 'male') {
      baseWater = weight * 35;
    } else {
      baseWater = weight * 31;
    }
    
    const activityMultiplier = ACTIVITY[activity].multiplier;
    const climateMultiplier = climate === 'hot' ? 1.2 : climate === 'cold' ? 0.9 : 1.0;
    
    const dailyWater = baseWater * activityMultiplier * climateMultiplier;
    const glasses = Math.round(dailyWater / 250);
    const perHour = dailyWater / 16;
    
    setResult({
      dailyWater: Math.round(dailyWater),
      glasses,
      perHour: Math.round(perHour * 10) / 10,
    });
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        {/* Gender */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Gender</label>
          <div className="grid grid-cols-2 gap-3">
            {(['male', 'female'] as const).map(g => (
              <button key={g} onClick={() => setGender(g)}
                className={`py-3 rounded-xl border-2 font-medium text-sm flex items-center justify-center gap-2 transition-all ${gender === g ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                <i className={`fas fa-${g}`} /> {g.charAt(0).toUpperCase() + g.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Weight */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Weight</label>
          <div className="relative">
            <input type="number" value={weight} min={30} max={300} onChange={e => setWeight(Number(e.target.value))}
              className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">kg</span>
          </div>
        </div>

        {/* Activity */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Activity Level</label>
          <select value={activity} onChange={e => setActivity(e.target.value as ActivityLevel)}
            className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-sky-500 appearance-none">
            {(Object.entries(ACTIVITY) as [ActivityLevel, { label: string }][]).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>

        {/* Climate */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Climate</label>
          <div className="grid grid-cols-3 gap-2">
            {(['cold', 'normal', 'hot'] as const).map(c => (
              <button key={c} onClick={() => setClimate(c)}
                className={`py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${climate === c ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                {c === 'cold' ? 'Cold' : c === 'normal' ? 'Normal' : 'Hot'}
              </button>
            ))}
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-tint" /> Calculate Water Intake
        </button>
      </div>

      {result && (
        <>
          <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-7 text-white shadow-xl mb-4">
            <div className="text-sm font-medium opacity-80 mb-1">Daily Water Intake</div>
            <div className="text-5xl font-extrabold mb-3">{result.dailyWater} ml</div>
            <div className="grid grid-cols-2 gap-3 border-t border-white/20 pt-3">
              <div className="text-center">
                <div className="text-2xl font-extrabold">{result.glasses}</div>
                <div className="text-xs opacity-70">Glasses (250ml)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold">{result.perHour} ml</div>
                <div className="text-xs opacity-70">Per Hour (16h)</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Water Sources</h3>
            <div className="space-y-2 text-xs">
              {[
                { source: 'Plain water', amount: '~80%' },
                { source: 'Food (fruits, vegetables)', amount: '~20%' },
                { source: 'Other beverages', amount: 'Varies' },
              ].map(s => (
                <div key={s.source} className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">{s.source}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{s.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Note:</strong> Individual water needs vary based on health conditions, medications, and personal factors. Listen to your body and drink when thirsty. Consult a healthcare provider for personalized advice.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
