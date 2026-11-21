'use client';
import { useState } from 'react';
import Link from 'next/link';

type DistanceUnit = 'km' | 'mi';
type PaceInput = 'pace' | 'speed';

function parsePace(paceStr: string): number {
  const parts = paceStr.split(':').map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  return 0;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

interface RunningCalorieResult {
  calories: number;
  caloriesPerKm: number;
  caloriesPerMi: number;
  duration: string;
}

export default function RunningCalorieCalculatorPage() {
  const [weight, setWeight] = useState(75);
  const [distance, setDistance] = useState(5);
  const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>('km');
  const [pace, setPace] = useState('6:00');
  const [speed, setSpeed] = useState(10);
  const [paceInput, setPaceInput] = useState<PaceInput>('pace');
  const [result, setResult] = useState<RunningCalorieResult | null>(null);

  function calculate() {
    const distanceKm = distanceUnit === 'km' ? distance : distance * 1.60934;
    let durationMin: number;
    
    if (paceInput === 'pace') {
      const paceSeconds = parsePace(pace);
      durationMin = (paceSeconds * distanceKm) / 60;
    } else {
      durationMin = distanceKm / speed * 60;
    }
    
    const met = 9.8;
    const calories = met * weight * (durationMin / 60);
    const caloriesPerKm = calories / distanceKm;
    const caloriesPerMi = caloriesPerKm * 1.60934;
    
    setResult({
      calories: Math.round(calories),
      caloriesPerKm: Math.round(caloriesPerKm),
      caloriesPerMi: Math.round(caloriesPerMi),
      duration: formatTime(durationMin * 60),
    });
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        {/* Weight */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Your Weight</label>
          <div className="relative">
            <input type="number" value={weight} min={30} max={300} onChange={e => setWeight(Number(e.target.value))}
              className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">kg</span>
          </div>
        </div>

        {/* Distance */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Distance</label>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <input type="number" value={distance} min={0.1} step={0.1} onChange={e => setDistance(Number(e.target.value))}
                className="w-full px-4 py-3 pr-16 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">value</span>
            </div>
            <div className="flex gap-2">
              {(['km', 'mi'] as DistanceUnit[]).map(u => (
                <button key={u} onClick={() => setDistanceUnit(u)}
                  className={`px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all ${distanceUnit === u ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                  {u.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pace Input Toggle */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Input By</label>
          <div className="grid grid-cols-2 gap-3">
            {(['pace', 'speed'] as PaceInput[]).map(m => (
              <button key={m} onClick={() => setPaceInput(m)}
                className={`py-3 rounded-xl border-2 font-medium text-sm transition-all ${paceInput === m ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                {m === 'pace' ? 'Pace (min/km)' : 'Speed (km/h)'}
              </button>
            ))}
          </div>
        </div>

        {/* Pace or Speed Input */}
        {paceInput === 'pace' ? (
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Pace (mm:ss per km)</label>
            <input type="text" value={pace} onChange={e => setPace(e.target.value)} placeholder="6:00"
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500" />
          </div>
        ) : (
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Speed (km/h)</label>
            <input type="number" value={speed} min={1} max={30} step={0.1} onChange={e => setSpeed(Number(e.target.value))}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500" />
          </div>
        )}

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-emerald-500 to-green-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-fire" /> Calculate Calories
        </button>
      </div>

      {result && (
        <>
          <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-7 text-white shadow-xl mb-4">
            <div className="text-sm font-medium opacity-80 mb-1">Calories Burned</div>
            <div className="text-5xl font-extrabold mb-3">{result.calories} kcal</div>
            <div className="grid grid-cols-2 gap-3 border-t border-white/20 pt-3">
              <div className="text-center">
                <div className="text-xl font-extrabold">{result.caloriesPerKm} kcal</div>
                <div className="text-xs opacity-70">per km</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-extrabold">{result.caloriesPerMi} kcal</div>
                <div className="text-xs opacity-70">per mile</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Run Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Distance</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{distance} {distanceUnit}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Duration</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{result.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Your Weight</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{weight} kg</span>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Note:</strong> Calorie burn estimates are based on running at ~6 mph (9.8 MET). Actual calories burned may vary based on running efficiency, terrain, and individual metabolism.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
