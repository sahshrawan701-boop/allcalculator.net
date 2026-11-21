'use client';
import { useState } from 'react';
import Link from 'next/link';

type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'extra';
type Goal = 'lose' | 'maintain' | 'gain';

const ACTIVITY: Record<ActivityLevel, { label: string; multiplier: number }> = {
  sedentary: { label: 'Sedentary (no exercise)', multiplier: 1.2 },
  light:     { label: 'Light (1–3 days/week)', multiplier: 1.375 },
  moderate:  { label: 'Moderate (3–5 days/week)', multiplier: 1.55 },
  active:    { label: 'Active (6–7 days/week)', multiplier: 1.725 },
  extra:     { label: 'Extra Active (athlete)', multiplier: 1.9 },
};

export default function CalorieCalculatorPage() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [goal, setGoal] = useState<Goal>('maintain');
  const [result, setResult] = useState<null | { bmr: number; maintenance: number; target: number; protein: number; carbs: number; fats: number }>(null);

  function calculate() {
    let bmr: number;
    if (gender === 'male') bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    else bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    const maintenance = bmr * ACTIVITY[activity].multiplier;
    const target = goal === 'lose' ? maintenance - 500 : goal === 'gain' ? maintenance + 500 : maintenance;
    setResult({ bmr: Math.round(bmr), maintenance: Math.round(maintenance), target: Math.round(target), protein: Math.round((target * 0.3) / 4), carbs: Math.round((target * 0.45) / 4), fats: Math.round((target * 0.25) / 9) });
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Gender</label>
          <div className="grid grid-cols-2 gap-3">
            {(['male', 'female'] as const).map(g => (
              <button key={g} onClick={() => setGender(g)}
                className={`py-3 rounded-xl border-2 font-medium text-sm flex items-center justify-center gap-2 transition-all ${gender === g ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                <i className={`fas fa-${g}`} /> {g.charAt(0).toUpperCase() + g.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[
            { label: 'Age', value: age, set: setAge, suffix: 'years' },
            { label: 'Height', value: height, set: setHeight, suffix: 'cm' },
            { label: 'Weight', value: weight, set: setWeight, suffix: 'kg' },
          ].map(f => (
            <div key={f.label}>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">{f.label}</label>
              <div className="relative">
                <input type="number" value={f.value} min={1} onChange={e => f.set(Number(e.target.value))}
                  className="w-full px-3 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-orange-400" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">{f.suffix}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Activity Level</label>
          <select value={activity} onChange={e => setActivity(e.target.value as ActivityLevel)}
            className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-orange-400 appearance-none">
            {(Object.entries(ACTIVITY) as [ActivityLevel, { label: string }][]).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Goal</label>
          <div className="grid grid-cols-3 gap-2">
            {([['lose', 'Lose Weight'], ['maintain', 'Maintain'], ['gain', 'Build Muscle']] as const).map(([k, l]) => (
              <button key={k} onClick={() => setGoal(k)}
                className={`py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${goal === k ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                {l}
              </button>
            ))}
          </div>
        </div>
        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-fire" /> Calculate Calories
        </button>
      </div>
      {result && (
        <>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[
              { label: 'BMR', value: `${result.bmr} kcal`, bg: 'from-blue-500 to-blue-700', desc: 'Base metabolic rate' },
              { label: 'Maintenance', value: `${result.maintenance} kcal`, bg: 'from-emerald-500 to-emerald-700', desc: 'To maintain weight' },
              { label: 'Daily Target', value: `${result.target} kcal`, bg: 'from-orange-500 to-red-600', desc: goal === 'lose' ? 'For weight loss' : goal === 'gain' ? 'For muscle gain' : 'Maintenance' },
            ].map(s => (
              <div key={s.label} className={`rounded-2xl p-5 bg-gradient-to-br ${s.bg} text-white text-center shadow-lg`}>
                <div className="text-xs opacity-80 mb-1">{s.label}</div>
                <div className="text-xl font-extrabold mb-1">{s.value}</div>
                <div className="text-[10px] opacity-70">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Macronutrient Targets</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Protein', value: `${result.protein}g`, color: 'text-blue-500', pct: '30%' },
                { label: 'Carbs', value: `${result.carbs}g`, color: 'text-amber-500', pct: '45%' },
                { label: 'Fats', value: `${result.fats}g`, color: 'text-rose-500', pct: '25%' },
              ].map(m => (
                <div key={m.label}>
                  <div className={`text-2xl font-extrabold ${m.color}`}>{m.value}</div>
                  <div className="text-xs text-slate-400">{m.label} ({m.pct})</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <div className="mt-8 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
