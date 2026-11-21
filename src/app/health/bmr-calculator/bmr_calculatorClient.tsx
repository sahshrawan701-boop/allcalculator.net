'use client';
import { useState } from 'react';
import Link from 'next/link';

type Gender = 'male' | 'female';
type Formula = 'mifflin' | 'harris';

export default function BMRCalculatorPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  const [formula, setFormula] = useState<Formula>('mifflin');
  const [result, setResult] = useState<null | { bmr: number; formula: string; dailyCalories: number }>(null);

  function calculate() {
    let bmr: number;
    if (formula === 'mifflin') {
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
    } else {
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
    }
    setResult({
      bmr: Math.round(bmr),
      formula: formula === 'mifflin' ? 'Mifflin-St Jeor' : 'Harris-Benedict',
      dailyCalories: Math.round(bmr * 1.2),
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
                className={`py-3 rounded-xl border-2 font-medium text-sm flex items-center justify-center gap-2 transition-all ${gender === g ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
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
                  className="w-full px-3 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-blue-500" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">{f.suffix}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Formula */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Formula</label>
          <div className="grid grid-cols-2 gap-3">
            {(['mifflin', 'harris'] as const).map(f => (
              <button key={f} onClick={() => setFormula(f)}
                className={`py-3 rounded-xl border-2 text-sm font-medium transition-all ${formula === f ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                {f === 'mifflin' ? 'Mifflin-St Jeor' : 'Harris-Benedict'}
              </button>
            ))}
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-cyan-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-fire" /> Calculate BMR
        </button>
      </div>

      {result && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              { label: 'BMR', value: `${result.bmr} kcal`, desc: 'Calories burned at rest', color: 'from-blue-500 to-blue-700' },
              { label: 'Sedentary Daily', value: `${result.dailyCalories} kcal`, desc: 'With minimal activity', color: 'from-cyan-500 to-cyan-700' },
            ].map(s => (
              <div key={s.label} className={`rounded-2xl p-6 bg-gradient-to-br ${s.color} text-white text-center shadow-lg`}>
                <div className="text-sm font-medium opacity-80 mb-1">{s.label}</div>
                <div className="text-2xl font-extrabold mb-1">{s.value}</div>
                <div className="text-xs opacity-70">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Formula Used: {result.formula}</h3>
            <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              <p className="mb-2">
                <strong className="text-slate-800 dark:text-slate-100">Mifflin-St Jeor:</strong> Considered more accurate for modern populations. Accounts for differences in body composition.
              </p>
              <p>
                <strong className="text-slate-800 dark:text-slate-100">Harris-Benedict:</strong> Older formula, may overestimate BMR by 5% in some cases. Still widely used as a reference.
              </p>
            </div>
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Medical Disclaimer:</strong> BMR calculators provide estimates. Individual metabolism varies based on genetics, muscle mass, and health conditions. Consult a healthcare provider for personalized advice.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
