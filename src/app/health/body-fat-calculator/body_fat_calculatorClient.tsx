'use client';
import { useState } from 'react';
import Link from 'next/link';

type Gender = 'male' | 'female';
type Method = 'navy' | 'bmi';

interface BodyFatResult {
  bodyFat: number;
  category: string;
  color: string;
  leanMass: number;
  fatMass: number;
}

function getBodyFatCategory(bodyFat: number, gender: Gender): { category: string; color: string } {
  if (gender === 'male') {
    if (bodyFat < 6) return { category: 'Essential Fat', color: '#ef4444' };
    if (bodyFat < 14) return { category: 'Athletes', color: '#10b981' };
    if (bodyFat < 18) return { category: 'Fitness', color: '#3b82f6' };
    if (bodyFat < 25) return { category: 'Average', color: '#f59e0b' };
    return { category: 'Obese', color: '#dc2626' };
  } else {
    if (bodyFat < 14) return { category: 'Essential Fat', color: '#ef4444' };
    if (bodyFat < 21) return { category: 'Athletes', color: '#10b981' };
    if (bodyFat < 25) return { category: 'Fitness', color: '#3b82f6' };
    if (bodyFat < 32) return { category: 'Average', color: '#f59e0b' };
    return { category: 'Obese', color: '#dc2626' };
  }
}

export default function BodyFatCalculatorPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [method, setMethod] = useState<Method>('navy');
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  const [neck, setNeck] = useState(38);
  const [waist, setWaist] = useState(85);
  const [hip, setHip] = useState(100);
  const [result, setResult] = useState<BodyFatResult | null>(null);

  function calculate() {
    let bodyFat: number;
    const heightCm = height;
    const weightKg = weight;

    if (method === 'navy') {
      if (gender === 'male') {
        bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(heightCm)) - 450;
      } else {
        bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(heightCm)) - 450;
      }
    } else {
      const bmi = weightKg / ((heightCm / 100) ** 2);
      if (gender === 'male') {
        bodyFat = (1.20 * bmi) + (0.23 * age) - 16.2;
      } else {
        bodyFat = (1.20 * bmi) + (0.23 * age) - 5.4;
      }
    }

    bodyFat = Math.max(0, Math.min(100, bodyFat));
    const category = getBodyFatCategory(bodyFat, gender);
    const fatMass = (bodyFat / 100) * weightKg;
    const leanMass = weightKg - fatMass;

    setResult({
      bodyFat: Math.round(bodyFat * 10) / 10,
      category: category.category,
      color: category.color,
      leanMass: Math.round(leanMass),
      fatMass: Math.round(fatMass),
    });
  }

  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-8 py-8 pb-16">

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
        {/* Input */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 self-start">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-5 flex items-center gap-2">
            <i className="fas fa-ruler-combined text-violet-500" /> Your Measurements
          </h2>

          {/* Gender */}
          <div className="mb-5">
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

          {/* Method */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Calculation Method</label>
            <div className="grid grid-cols-2 gap-3">
              {(['navy', 'bmi'] as const).map(m => (
                <button key={m} onClick={() => setMethod(m)}
                  className={`py-3 rounded-xl border-2 text-sm font-medium transition-all ${method === m ? 'bg-violet-500 border-violet-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                  {m === 'navy' ? 'Navy Tape Measure' : 'BMI-Based'}
                </button>
              ))}
            </div>
          </div>

          {/* Basic Measurements */}
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
                    className="w-full px-3 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-violet-500" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">{f.suffix}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tape Measurements */}
          {method === 'navy' && (
            <div className="space-y-4 mb-5">
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Neck Circumference</label>
                <div className="relative">
                  <input type="number" value={neck} min={20} max={60} onChange={e => setNeck(Number(e.target.value))}
                    className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">cm</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Waist Circumference</label>
                <div className="relative">
                  <input type="number" value={waist} min={50} max={150} onChange={e => setWaist(Number(e.target.value))}
                    className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">cm</span>
                </div>
              </div>
              {gender === 'female' && (
                <div>
                  <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Hip Circumference</label>
                  <div className="relative">
                    <input type="number" value={hip} min={70} max={180} onChange={e => setHip(Number(e.target.value))}
                      className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-violet-500" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">cm</span>
                  </div>
                </div>
              )}
            </div>
          )}

          <button onClick={calculate}
            className="w-full py-4 bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-200">
            <i className="fas fa-calculator" /> Calculate Body Fat
          </button>
        </section>

        {/* Results */}
        {result ? (
          <section className="space-y-4">
            {/* Body Fat Display */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800">
              <div className="text-center mb-6">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">Body Fat Percentage</div>
                <div className="text-6xl font-extrabold mb-2" style={{ color: result.color }}>
                  {result.bodyFat.toFixed(1)}%
                </div>
                <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">{result.category}</div>
              </div>

              {/* Body Composition */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                  <div className="text-xs text-slate-400 mb-1">Lean Mass</div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">{result.leanMass} kg</div>
                  <div className="text-xs text-slate-400">{((result.leanMass / weight) * 100).toFixed(1)}% of body weight</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                  <div className="text-xs text-slate-400 mb-1">Fat Mass</div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">{result.fatMass} kg</div>
                  <div className="text-xs text-slate-400">{result.bodyFat.toFixed(1)}% of body weight</div>
                </div>
              </div>

              {/* Visual Bar */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4">
                <div className="h-6 bg-gradient-to-r from-emerald-400 via-blue-400 via-amber-400 to-red-500 rounded-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-slate-800/20 transition-all duration-500"
                    style={{ width: `${result.bodyFat}%` }} />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-2">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            {/* Category Reference */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3">Body Fat Categories ({gender === 'male' ? 'Men' : 'Women'})</h3>
              <div className="space-y-2 text-xs">
                {gender === 'male' ? (
                  <>
                    <div className="flex justify-between"><span className="text-red-500 font-semibold">Essential Fat:</span><span className="text-slate-600 dark:text-slate-400">2-5%</span></div>
                    <div className="flex justify-between"><span className="text-emerald-500 font-semibold">Athletes:</span><span className="text-slate-600 dark:text-slate-400">6-13%</span></div>
                    <div className="flex justify-between"><span className="text-blue-500 font-semibold">Fitness:</span><span className="text-slate-600 dark:text-slate-400">14-17%</span></div>
                    <div className="flex justify-between"><span className="text-amber-500 font-semibold">Average:</span><span className="text-slate-600 dark:text-slate-400">18-24%</span></div>
                    <div className="flex justify-between"><span className="text-red-600 font-semibold">Obese:</span><span className="text-slate-600 dark:text-slate-400">25%+</span></div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between"><span className="text-red-500 font-semibold">Essential Fat:</span><span className="text-slate-600 dark:text-slate-400">10-13%</span></div>
                    <div className="flex justify-between"><span className="text-emerald-500 font-semibold">Athletes:</span><span className="text-slate-600 dark:text-slate-400">14-20%</span></div>
                    <div className="flex justify-between"><span className="text-blue-500 font-semibold">Fitness:</span><span className="text-slate-600 dark:text-slate-400">21-24%</span></div>
                    <div className="flex justify-between"><span className="text-amber-500 font-semibold">Average:</span><span className="text-slate-600 dark:text-slate-400">25-31%</span></div>
                    <div className="flex justify-between"><span className="text-red-600 font-semibold">Obese:</span><span className="text-slate-600 dark:text-slate-400">32%+</span></div>
                  </>
                )}
              </div>
            </div>
          </section>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center text-violet-400 text-2xl mb-4">
              <i className="fas fa-percentage" />
            </div>
            <p className="text-slate-400 dark:text-slate-400 text-sm max-w-xs">Enter your measurements and click Calculate to estimate your body fat percentage.</p>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Medical Disclaimer:</strong> This calculator provides estimates. For accurate body fat measurement, consult a healthcare professional or use specialized equipment like DEXA scans.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
