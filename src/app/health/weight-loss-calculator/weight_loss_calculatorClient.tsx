'use client';
import { useState } from 'react';
import Link from 'next/link';

type Gender = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'extra';

const ACTIVITY: Record<ActivityLevel, { label: string; multiplier: number }> = {
  sedentary: { label: 'Sedentary (no exercise)', multiplier: 1.2 },
  light: { label: 'Light (1–3 days/week)', multiplier: 1.375 },
  moderate: { label: 'Moderate (3–5 days/week)', multiplier: 1.55 },
  active: { label: 'Active (6–7 days/week)', multiplier: 1.725 },
  extra: { label: 'Extra Active (athlete)', multiplier: 1.9 },
};

interface WeightLossResult {
  bmr: number;
  tdee: number;
  dailyCalories: number;
  weeklyLoss: number;
  monthsToGoal: number;
  totalCalories: number;
}

export default function WeightLossCalculatorPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState(175);
  const [currentWeight, setCurrentWeight] = useState(90);
  const [targetWeight, setTargetWeight] = useState(75);
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [weeklyGoal, setWeeklyGoal] = useState(0.5);
  const [result, setResult] = useState<WeightLossResult | null>(null);

  function calculate() {
    let bmr: number;
    if (gender === 'male') bmr = 10 * currentWeight + 6.25 * height - 5 * age + 5;
    else bmr = 10 * currentWeight + 6.25 * height - 5 * age - 161;
    
    const tdee = bmr * ACTIVITY[activity].multiplier;
    const dailyDeficit = (weeklyGoal * 7700) / 7;
    const dailyCalories = tdee - dailyDeficit;
    const weightToLose = currentWeight - targetWeight;
    const weeksToGoal = weightToLose / weeklyGoal;
    const monthsToGoal = weeksToGoal / 4.345;
    const totalCalories = weightToLose * 7700;
    
    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      dailyCalories: Math.round(dailyCalories),
      weeklyLoss: weeklyGoal,
      monthsToGoal: Math.ceil(monthsToGoal),
      totalCalories: Math.round(totalCalories),
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
            { label: 'Current Weight', value: currentWeight, set: setCurrentWeight, suffix: 'kg' },
          ].map(f => (
            <div key={f.label}>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">{f.label}</label>
              <div className="relative">
                <input type="number" value={f.value} min={1} onChange={e => f.set(Number(e.target.value))}
                  className="w-full px-3 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-orange-500" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">{f.suffix}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Target Weight</label>
          <div className="relative">
            <input type="number" value={targetWeight} min={30} max={300} onChange={e => setTargetWeight(Number(e.target.value))}
              className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-orange-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">kg</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Activity Level</label>
          <select value={activity} onChange={e => setActivity(e.target.value as ActivityLevel)}
            className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-orange-500 appearance-none">
            {(Object.entries(ACTIVITY) as [ActivityLevel, { label: string }][]).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>

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
          className="w-full py-3.5 bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Weight Loss
        </button>
      </div>

      {result && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Daily Calories', value: `${result.dailyCalories} kcal`, bg: 'from-orange-500 to-orange-700', desc: 'To reach your goal' },
              { label: 'Time to Goal', value: `${result.monthsToGoal} months`, bg: 'from-red-500 to-red-700', desc: 'Estimated duration' },
              { label: 'Total Deficit', value: `${result.totalCalories.toLocaleString()} kcal`, bg: 'from-rose-500 to-rose-700', desc: 'Calories to burn' },
            ].map(s => (
              <div key={s.label} className={`rounded-2xl p-6 bg-gradient-to-br ${s.bg} text-white text-center shadow-lg`}>
                <div className="text-sm font-medium opacity-80 mb-1">{s.label}</div>
                <div className="text-2xl font-extrabold mb-1">{s.value}</div>
                <div className="text-xs opacity-70">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm mb-4">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Metabolic Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">BMR (Base Metabolic Rate)</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{result.bmr} kcal/day</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">TDEE (Total Daily Energy)</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{result.tdee} kcal/day</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Daily Calorie Deficit</span>
                <span className="font-semibold text-orange-500">{result.tdee - result.dailyCalories} kcal</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Weight to Lose</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{currentWeight - targetWeight} kg</span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-5 border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-start gap-3">
              <i className="fas fa-lightbulb text-emerald-500 text-xl mt-0.5" />
              <div>
                <div className="font-bold text-emerald-700 dark:text-emerald-400 mb-1">Tips for Success</div>
                <div className="text-sm text-emerald-600 dark:text-emerald-400">
                  Combine calorie deficit with regular exercise and balanced nutrition. A loss of 0.5-1 kg per week is considered safe and sustainable. Stay hydrated and get adequate sleep.
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Medical Disclaimer:</strong> This calculator provides estimates for informational purposes only. Consult a healthcare professional before starting any weight loss program, especially if you have underlying health conditions.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
