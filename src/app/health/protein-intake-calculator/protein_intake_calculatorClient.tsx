'use client';
import { useState } from 'react';
import Link from 'next/link';

type Gender = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'athlete';
type Goal = 'maintain' | 'build' | 'lose';

const ACTIVITY: Record<ActivityLevel, { label: string; multiplier: number }> = {
  sedentary: { label: 'Sedentary (no exercise)', multiplier: 0.8 },
  light: { label: 'Light (1–3 days/week)', multiplier: 1.0 },
  moderate: { label: 'Moderate (3–5 days/week)', multiplier: 1.2 },
  active: { label: 'Active (6–7 days/week)', multiplier: 1.4 },
  athlete: { label: 'Athlete (intense training)', multiplier: 1.6 },
};

export default function ProteinIntakeCalculatorPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [weight, setWeight] = useState(75);
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [goal, setGoal] = useState<Goal>('maintain');
  const [result, setResult] = useState<null | { dailyProtein: number; proteinPerKg: number; proteinPerLb: number }>(null);

  function calculate() {
    let proteinPerKg: number;
    
    if (goal === 'maintain') {
      proteinPerKg = 1.2 * ACTIVITY[activity].multiplier;
    } else if (goal === 'build') {
      proteinPerKg = 1.6 * ACTIVITY[activity].multiplier;
    } else {
      proteinPerKg = 1.8 * ACTIVITY[activity].multiplier;
    }
    
    const dailyProtein = weight * proteinPerKg;
    const proteinPerLb = proteinPerKg * 0.453592;
    
    setResult({
      dailyProtein: Math.round(dailyProtein),
      proteinPerKg: Math.round(proteinPerKg * 10) / 10,
      proteinPerLb: Math.round(proteinPerLb * 10) / 10,
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
                className={`py-3 rounded-xl border-2 font-medium text-sm flex items-center justify-center gap-2 transition-all ${gender === g ? 'bg-amber-500 border-amber-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
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
              className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-amber-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">kg</span>
          </div>
        </div>

        {/* Activity */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Activity Level</label>
          <select value={activity} onChange={e => setActivity(e.target.value as ActivityLevel)}
            className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-amber-500 appearance-none">
            {(Object.entries(ACTIVITY) as [ActivityLevel, { label: string }][]).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>

        {/* Goal */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Goal</label>
          <div className="grid grid-cols-3 gap-2">
            {(['maintain', 'build', 'lose'] as const).map(g => (
              <button key={g} onClick={() => setGoal(g)}
                className={`py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${goal === g ? 'bg-amber-500 border-amber-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                {g === 'maintain' ? 'Maintain' : g === 'build' ? 'Build Muscle' : 'Lose Fat'}
              </button>
            ))}
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Protein
        </button>
      </div>

      {result && (
        <>
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-7 text-white shadow-xl mb-4">
            <div className="text-sm font-medium opacity-80 mb-1">Daily Protein Target</div>
            <div className="text-5xl font-extrabold mb-3">{result.dailyProtein}g</div>
            <div className="grid grid-cols-2 gap-3 border-t border-white/20 pt-3">
              <div className="text-center">
                <div className="text-2xl font-extrabold">{result.proteinPerKg}g</div>
                <div className="text-xs opacity-70">per kg body weight</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold">{result.proteinPerLb}g</div>
                <div className="text-xs opacity-70">per lb body weight</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Protein Sources</h3>
            <div className="space-y-2 text-xs">
              {[
                { food: 'Chicken Breast (100g)', protein: '31g' },
                { food: 'Salmon (100g)', protein: '25g' },
                { food: 'Eggs (1 large)', protein: '6g' },
                { food: 'Greek Yogurt (100g)', protein: '10g' },
                { food: 'Lentils (100g cooked)', protein: '9g' },
                { food: 'Whey Protein (1 scoop)', protein: '25g' },
              ].map(s => (
                <div key={s.food} className="flex justify-between items-center">
                  <span className="text-slate-600 dark:text-slate-400">{s.food}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-100">{s.protein}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Note:</strong> Protein needs vary based on individual factors. Athletes and those building muscle may need higher intake. Consult a nutritionist for personalized advice.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
