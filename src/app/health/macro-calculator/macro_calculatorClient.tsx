'use client';
import { useState } from 'react';
import Link from 'next/link';

type Gender = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'extra';
type Goal = 'lose' | 'maintain' | 'gain';

const ACTIVITY: Record<ActivityLevel, { label: string; multiplier: number }> = {
  sedentary: { label: 'Sedentary (no exercise)', multiplier: 1.2 },
  light: { label: 'Light (1–3 days/week)', multiplier: 1.375 },
  moderate: { label: 'Moderate (3–5 days/week)', multiplier: 1.55 },
  active: { label: 'Active (6–7 days/week)', multiplier: 1.725 },
  extra: { label: 'Extra Active (athlete)', multiplier: 1.9 },
};

export default function MacroCalculatorPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [goal, setGoal] = useState<Goal>('maintain');
  const [proteinPct, setProteinPct] = useState(30);
  const [carbsPct, setCarbsPct] = useState(45);
  const [result, setResult] = useState<null | { bmr: number; tdee: number; target: number; protein: number; carbs: number; fats: number }>(null);

  function calculate() {
    let bmr: number;
    if (gender === 'male') bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    else bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    const tdee = bmr * ACTIVITY[activity].multiplier;
    const target = goal === 'lose' ? tdee - 500 : goal === 'gain' ? tdee + 500 : tdee;
    const fatsPct = 100 - proteinPct - carbsPct;
    
    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      target: Math.round(target),
      protein: Math.round((target * proteinPct / 100) / 4),
      carbs: Math.round((target * carbsPct / 100) / 4),
      fats: Math.round((target * fatsPct / 100) / 9),
    });
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
                className={`py-3 rounded-xl border-2 font-medium text-sm flex items-center justify-center gap-2 transition-all ${gender === g ? 'bg-violet-500 border-violet-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
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
                  className="w-full px-3 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-violet-500" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">{f.suffix}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Activity Level</label>
          <select value={activity} onChange={e => setActivity(e.target.value as ActivityLevel)}
            className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-violet-500 appearance-none">
            {(Object.entries(ACTIVITY) as [ActivityLevel, { label: string }][]).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Goal</label>
          <div className="grid grid-cols-3 gap-2">
            {(['lose', 'maintain', 'gain'] as const).map(g => (
              <button key={g} onClick={() => setGoal(g)}
                className={`py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${goal === g ? 'bg-violet-500 border-violet-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                {g === 'lose' ? 'Lose Weight' : g === 'maintain' ? 'Maintain' : 'Build Muscle'}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Macro Split</label>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Protein: <span className="text-violet-500">{proteinPct}%</span></label>
              <input type="range" min={10} max={50} value={proteinPct} onChange={e => setProteinPct(Number(e.target.value))} className="w-full accent-violet-500" />
            </div>
            <div>
              <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Carbs: <span className="text-violet-500">{carbsPct}%</span></label>
              <input type="range" min={10} max={70} value={carbsPct} onChange={e => setCarbsPct(Number(e.target.value))} className="w-full accent-violet-500" />
            </div>
            <div className="text-xs text-slate-400">Fats: {100 - proteinPct - carbsPct}% (auto-calculated)</div>
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-violet-500 to-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Macros
        </button>
      </div>

      {result && (
        <>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[
              { label: 'BMR', value: `${result.bmr} kcal`, bg: 'from-blue-500 to-blue-700', desc: 'Base metabolic rate' },
              { label: 'TDEE', value: `${result.tdee} kcal`, bg: 'from-emerald-500 to-emerald-700', desc: 'Total daily expenditure' },
              { label: 'Daily Target', value: `${result.target} kcal`, bg: 'from-violet-500 to-purple-700', desc: goal === 'lose' ? 'For weight loss' : goal === 'gain' ? 'For muscle gain' : 'Maintenance' },
            ].map(s => (
              <div key={s.label} className={`rounded-2xl p-5 bg-gradient-to-br ${s.bg} text-white text-center shadow-lg`}>
                <div className="text-xs opacity-80 mb-1">{s.label}</div>
                <div className="text-xl font-extrabold mb-1">{s.value}</div>
                <div className="text-[10px] opacity-70">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Daily Macronutrient Targets</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: 'Protein', value: `${result.protein}g`, color: 'text-blue-500', pct: `${proteinPct}%`, kcal: `${result.protein * 4} kcal` },
                { label: 'Carbs', value: `${result.carbs}g`, color: 'text-amber-500', pct: `${carbsPct}%`, kcal: `${result.carbs * 4} kcal` },
                { label: 'Fats', value: `${result.fats}g`, color: 'text-rose-500', pct: `${100 - proteinPct - carbsPct}%`, kcal: `${result.fats * 9} kcal` },
              ].map(m => (
                <div key={m.label}>
                  <div className={`text-2xl font-extrabold ${m.color}`}>{m.value}</div>
                  <div className="text-xs text-slate-400">{m.label} ({m.pct})</div>
                  <div className="text-[10px] text-slate-400">{m.kcal}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
