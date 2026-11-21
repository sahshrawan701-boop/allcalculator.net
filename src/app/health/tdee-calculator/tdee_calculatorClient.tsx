'use client';
import { useState } from 'react';
import Link from 'next/link';

type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
type Goal = 'lose' | 'maintain' | 'gain';

const ACTIVITY_LABELS: Record<ActivityLevel, { label: string; multiplier: number; desc: string }> = {
  sedentary:   { label: 'Sedentary',    multiplier: 1.2,  desc: 'Little to no exercise' },
  light:       { label: 'Lightly Active', multiplier: 1.375, desc: '1-3 days/week' },
  moderate:    { label: 'Moderately Active', multiplier: 1.55, desc: '3-5 days/week' },
  active:      { label: 'Very Active',  multiplier: 1.725, desc: '6-7 days/week' },
  very_active: { label: 'Extra Active', multiplier: 1.9,  desc: 'Athlete / hard labor' },
};

export default function TDEECalculatorPage() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState(25);
  const [heightCm, setHeightCm] = useState(175);
  const [weightKg, setWeightKg] = useState(75);
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [goal, setGoal] = useState<Goal>('maintain');
  const [result, setResult] = useState<null | { bmr: number; tdee: number; target: number }>(null);

  function calculate() {
    // Mifflin-St Jeor formula
    let bmr: number;
    if (gender === 'male') bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    else bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    const tdee = bmr * ACTIVITY_LABELS[activity].multiplier;
    const target = goal === 'lose' ? tdee - 500 : goal === 'gain' ? tdee + 500 : tdee;
    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee), target: Math.round(target) });
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
                className={`py-3 rounded-xl border-2 font-medium text-sm flex items-center justify-center gap-2 transition-all ${gender === g ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                <i className={`fas fa-${g}`} /> {g.charAt(0).toUpperCase() + g.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Measurements */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          {[
            { label: 'Age', value: age, set: setAge, suffix: 'years', min: 15, max: 100 },
            { label: 'Height', value: heightCm, set: setHeightCm, suffix: 'cm', min: 100, max: 250 },
            { label: 'Weight', value: weightKg, set: setWeightKg, suffix: 'kg', min: 30, max: 300 },
          ].map(f => (
            <div key={f.label}>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">{f.label}</label>
              <div className="relative">
                <input type="number" value={f.value} min={f.min} max={f.max} onChange={e => f.set(Number(e.target.value))}
                  className="w-full px-3 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-emerald-500" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">{f.suffix}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Activity */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Activity Level</label>
          <div className="space-y-2">
            {(Object.entries(ACTIVITY_LABELS) as [ActivityLevel, { label: string; multiplier: number; desc: string }][]).map(([key, val]) => (
              <button key={key} onClick={() => setActivity(key)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border-2 text-sm transition-all ${activity === key ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-400 dark:border-emerald-600' : 'border-slate-200 dark:border-slate-600 hover:border-emerald-200'}`}>
                <span className="font-medium text-slate-800 dark:text-slate-100">{val.label}</span>
                <span className="text-slate-400 dark:text-slate-400 text-xs">{val.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Goal */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Goal</label>
          <div className="grid grid-cols-3 gap-2">
            {([['lose', 'Lose Weight', '−500 kcal'], ['maintain', 'Maintain', '= TDEE'], ['gain', 'Gain Muscle', '+500 kcal']] as const).map(([key, label, diff]) => (
              <button key={key} onClick={() => setGoal(key)}
                className={`py-2.5 rounded-xl border-2 text-xs font-medium transition-all ${goal === key ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                <div>{label}</div>
                <div className="opacity-70">{diff}</div>
              </button>
            ))}
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-fire" /> Calculate TDEE
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'BMR', value: `${result.bmr} kcal`, desc: 'Basal metabolic rate', color: 'from-blue-400 to-blue-600' },
            { label: 'TDEE', value: `${result.tdee} kcal`, desc: 'Total daily expenditure', color: 'from-emerald-400 to-emerald-700' },
            { label: 'Daily Target', value: `${result.target} kcal`, desc: goal === 'lose' ? 'For weight loss' : goal === 'gain' ? 'For muscle gain' : 'Maintenance', color: 'from-violet-400 to-violet-700' },
          ].map(s => (
            <div key={s.label} className={`rounded-2xl p-6 bg-gradient-to-br ${s.color} text-white text-center shadow-lg`}>
              <div className="text-sm font-medium opacity-80 mb-1">{s.label}</div>
              <div className="text-2xl font-extrabold mb-1">{s.value}</div>
              <div className="text-xs opacity-70">{s.desc}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
