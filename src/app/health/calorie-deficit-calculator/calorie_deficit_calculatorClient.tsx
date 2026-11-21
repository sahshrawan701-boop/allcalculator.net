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

export default function CalorieDeficitCalculatorPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  const [targetWeight, setTargetWeight] = useState(65);
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [weeklyGoal, setWeeklyGoal] = useState(0.5);
  const [result, setResult] = useState<null | { bmr: number; tdee: number; deficit: number; dailyCalories: number; weeksToGoal: number }>(null);

  function calculate() {
    let bmr: number;
    if (gender === 'male') bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    else bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    const tdee = bmr * ACTIVITY[activity].multiplier;
    const weightToLose = weight - targetWeight;
    const deficit = (weeklyGoal * 7700) / 7;
    const dailyCalories = tdee - deficit;
    const weeksToGoal = weightToLose / weeklyGoal;

    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      deficit: Math.round(deficit),
      dailyCalories: Math.round(dailyCalories),
      weeksToGoal: Math.ceil(weeksToGoal),
    });
  }

  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-8 py-8 pb-16">
      

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
        {/* Input */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 self-start">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-5 flex items-center gap-2">
            <i className="fas fa-bullseye text-orange-500" /> Your Details
          </h2>

          {/* Gender */}
          <div className="mb-5">
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

          {/* Measurements */}
          <div className="grid grid-cols-3 gap-4 mb-5">
            {[
              { label: 'Age', value: age, set: setAge, suffix: 'years', min: 15, max: 100 },
              { label: 'Height', value: height, set: setHeight, suffix: 'cm', min: 100, max: 250 },
              { label: 'Weight', value: weight, set: setWeight, suffix: 'kg', min: 30, max: 300 },
            ].map(f => (
              <div key={f.label}>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">{f.label}</label>
                <div className="relative">
                  <input type="number" value={f.value} min={f.min} max={f.max} onChange={e => f.set(Number(e.target.value))}
                    className="w-full px-3 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-orange-500" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">{f.suffix}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Target Weight */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Target Weight</label>
            <div className="relative">
              <input type="number" value={targetWeight} min={30} max={300} onChange={e => setTargetWeight(Number(e.target.value))}
                className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-orange-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">kg</span>
            </div>
          </div>

          {/* Activity */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Activity Level</label>
            <select value={activity} onChange={e => setActivity(e.target.value as ActivityLevel)}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-orange-500 appearance-none">
              {(Object.entries(ACTIVITY) as [ActivityLevel, { label: string }][]).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>

          {/* Weekly Goal */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Weekly Weight Loss Goal: <span className="text-orange-500">{weeklyGoal} kg</span></label>
            <input type="range" min={0.25} max={1.5} step={0.25} value={weeklyGoal} onChange={e => setWeeklyGoal(Number(e.target.value))} className="w-full accent-orange-500" />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>0.25 kg</span>
              <span>0.5 kg</span>
              <span>0.75 kg</span>
              <span>1 kg</span>
              <span>1.5 kg</span>
            </div>
          </div>

          <button onClick={calculate}
            className="w-full py-4 bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200">
            <i className="fas fa-calculator" /> Calculate Deficit
          </button>
        </section>

        {/* Results */}
        {result ? (
          <section className="space-y-4">
            {/* Daily Calories */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-7 text-white shadow-xl">
              <div className="text-sm font-medium opacity-80 mb-1">Daily Calorie Target</div>
              <div className="text-4xl font-extrabold mb-3">{result.dailyCalories} kcal</div>
              <div className="grid grid-cols-2 gap-3 border-t border-white/20 pt-3">
                <div className="text-center">
                  <div className="text-xl font-extrabold">{result.tdee} kcal</div>
                  <div className="text-xs opacity-70">Maintenance</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-extrabold">-{result.deficit} kcal</div>
                  <div className="text-xs opacity-70">Daily Deficit</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'BMR', value: `${result.bmr} kcal`, icon: 'fa-fire', color: 'text-blue-500' },
                { label: 'TDEE', value: `${result.tdee} kcal`, icon: 'fa-bolt', color: 'text-emerald-500' },
                { label: 'Weight to Lose', value: `${weight - targetWeight} kg`, icon: 'fa-weight', color: 'text-orange-500' },
                { label: 'Time to Goal', value: `${result.weeksToGoal} weeks`, icon: 'fa-calendar', color: 'text-violet-500' },
              ].map(s => (
                <div key={s.label} className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <i className={`fas ${s.icon} ${s.color}`} /> {s.label}
                  </div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-100">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Safe Weight Loss Info */}
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-start gap-3">
                <i className="fas fa-shield-alt text-emerald-500 text-xl mt-0.5" />
                <div>
                  <div className="font-bold text-emerald-700 dark:text-emerald-400 mb-1">Safe Weight Loss</div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400">
                    A weekly loss of 0.5-1 kg is considered safe and sustainable. Losing more than 1.5 kg per week is not recommended without medical supervision.
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-400 text-2xl mb-4">
              <i className="fas fa-bullseye" />
            </div>
            <p className="text-slate-400 dark:text-slate-400 text-sm max-w-xs">Enter your details and weight loss goal to calculate your required daily calorie deficit.</p>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Medical Disclaimer:</strong> This calculator provides estimates for informational purposes only. Consult a healthcare professional before starting any weight loss program.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
