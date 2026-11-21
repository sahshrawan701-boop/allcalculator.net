'use client';
import { useState } from 'react';
import Link from 'next/link';

type Gender = 'male' | 'female';
type Formula = 'hamwi' | 'devine' | 'robinson';

interface HealthyWeightResult {
  idealWeight: number;
  minHealthy: number;
  maxHealthy: number;
  bmi: number;
  formula: string;
}

function calculateIdealWeight(gender: Gender, heightCm: number, formula: Formula): number {
  const heightIn = heightCm / 2.54;
  let ideal: number;
  
  if (formula === 'hamwi') {
    if (gender === 'male') {
      ideal = 48 + 2.7 * (heightIn - 60);
    } else {
      ideal = 45.5 + 2.2 * (heightIn - 60);
    }
  } else if (formula === 'devine') {
    if (gender === 'male') {
      ideal = 50 + 2.3 * (heightIn - 60);
    } else {
      ideal = 45.5 + 2.3 * (heightIn - 60);
    }
  } else {
    if (gender === 'male') {
      ideal = 52 + 1.9 * (heightIn - 60);
    } else {
      ideal = 49 + 1.7 * (heightIn - 60);
    }
  }
  
  return Math.max(ideal, 0);
}

export default function HealthyWeightCalculatorPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  const [formula, setFormula] = useState<Formula>('hamwi');
  const [result, setResult] = useState<HealthyWeightResult | null>(null);

  function calculate() {
    const idealWeight = calculateIdealWeight(gender, height, formula);
    const heightM = height / 100;
    const minHealthy = 18.5 * heightM * heightM;
    const maxHealthy = 24.9 * heightM * heightM;
    const bmi = weight / (heightM * heightM);

    setResult({
      idealWeight: Math.round(idealWeight),
      minHealthy: Math.round(minHealthy),
      maxHealthy: Math.round(maxHealthy),
      bmi: Math.round(bmi * 10) / 10,
      formula: formula === 'hamwi' ? 'Hamwi Method' : formula === 'devine' ? 'Devine Formula' : 'Robinson Formula',
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
                className={`py-3 rounded-xl border-2 font-medium text-sm flex items-center justify-center gap-2 transition-all ${gender === g ? 'bg-teal-500 border-teal-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                <i className={`fas fa-${g}`} /> {g.charAt(0).toUpperCase() + g.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Measurements */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          {[
            { label: 'Height', value: height, set: setHeight, suffix: 'cm', min: 100, max: 250 },
            { label: 'Current Weight', value: weight, set: setWeight, suffix: 'kg', min: 30, max: 300 },
          ].map(f => (
            <div key={f.label}>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">{f.label}</label>
              <div className="relative">
                <input type="number" value={f.value} min={f.min} max={f.max} onChange={e => f.set(Number(e.target.value))}
                  className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-teal-500" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">{f.suffix}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Formula */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Formula</label>
          <div className="grid grid-cols-3 gap-2">
            {(['hamwi', 'devine', 'robinson'] as const).map(f => (
              <button key={f} onClick={() => setFormula(f)}
                className={`py-3 rounded-xl border-2 text-xs font-medium transition-all ${formula === f ? 'bg-teal-500 border-teal-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                {f === 'hamwi' ? 'Hamwi' : f === 'devine' ? 'Devine' : 'Robinson'}
              </button>
            ))}
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-teal-500 to-emerald-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Healthy Weight
        </button>
      </div>

      {result && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Ideal Weight', value: `${result.idealWeight} kg`, bg: 'from-teal-500 to-teal-700', desc: result.formula },
              { label: 'Healthy Range', value: `${result.minHealthy}-${result.maxHealthy} kg`, bg: 'from-emerald-500 to-emerald-700', desc: 'BMI 18.5-24.9' },
              { label: 'Current BMI', value: result.bmi.toFixed(1), bg: result.bmi < 18.5 ? 'from-blue-500 to-blue-700' : result.bmi < 25 ? 'from-emerald-500 to-emerald-700' : result.bmi < 30 ? 'from-amber-500 to-amber-700' : 'from-red-500 to-red-700', desc: result.bmi < 18.5 ? 'Underweight' : result.bmi < 25 ? 'Normal' : result.bmi < 30 ? 'Overweight' : 'Obese' },
            ].map(s => (
              <div key={s.label} className={`rounded-2xl p-6 bg-gradient-to-br ${s.bg} text-white text-center shadow-lg`}>
                <div className="text-sm font-medium opacity-80 mb-1">{s.label}</div>
                <div className="text-2xl font-extrabold mb-1">{s.value}</div>
                <div className="text-xs opacity-70">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Weight Status */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm mb-4">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Your Weight Status</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Current Weight</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{weight} kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Difference from Ideal</span>
                <span className={`font-semibold ${weight > result.idealWeight ? 'text-red-500' : weight < result.idealWeight ? 'text-blue-500' : 'text-emerald-500'}`}>
                  {weight > result.idealWeight ? `+${(weight - result.idealWeight).toFixed(1)} kg` : weight < result.idealWeight ? `-${(result.idealWeight - weight).toFixed(1)} kg` : '0 kg'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Within Healthy Range?</span>
                <span className={`font-semibold ${weight >= result.minHealthy && weight <= result.maxHealthy ? 'text-emerald-500' : 'text-red-500'}`}>
                  {weight >= result.minHealthy && weight <= result.maxHealthy ? 'Yes ✓' : 'No ✗'}
                </span>
              </div>
            </div>
          </div>

          {/* Formula Info */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">About Formulas</h3>
            <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed space-y-2">
              <p><strong className="text-slate-800 dark:text-slate-100">Hamwi Method:</strong> Simple formula based on height and gender. Widely used for quick estimates.</p>
              <p><strong className="text-slate-800 dark:text-slate-100">Devine Formula:</strong> Originally developed for medication dosing. Provides reasonable estimates for most adults.</p>
              <p><strong className="text-slate-800 dark:text-slate-100">Robinson Formula:</strong> Modified version of the Devine formula. Slightly different weight estimates.</p>
            </div>
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Medical Disclaimer:</strong> These formulas provide estimates. Ideal weight varies based on muscle mass, bone density, and individual factors. Consult a healthcare provider for personalized advice.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
