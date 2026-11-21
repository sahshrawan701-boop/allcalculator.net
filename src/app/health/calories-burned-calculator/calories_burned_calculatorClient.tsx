'use client';
import { useState } from 'react';
import Link from 'next/link';

type Activity = 'walking' | 'running' | 'cycling' | 'swimming' | 'gym' | 'yoga' | 'hiit' | 'dancing';

const ACTIVITIES: Record<Activity, { label: string; met: number; icon: string }> = {
  walking: { label: 'Walking (3.5 mph)', met: 4.3, icon: 'fa-walking' },
  running: { label: 'Running (6 mph)', met: 9.8, icon: 'fa-running' },
  cycling: { label: 'Cycling (12-14 mph)', met: 8.0, icon: 'fa-bicycle' },
  swimming: { label: 'Swimming (moderate)', met: 6.0, icon: 'fa-swimmer' },
  gym: { label: 'Weight Training', met: 5.0, icon: 'fa-dumbbell' },
  yoga: { label: 'Yoga', met: 2.5, icon: 'fa-spa' },
  hiit: { label: 'HIIT Workout', met: 11.0, icon: 'fa-bolt' },
  dancing: { label: 'Dancing', met: 4.8, icon: 'fa-music' },
};

export default function CaloriesBurnedCalculatorPage() {
  const [weight, setWeight] = useState(75);
  const [activity, setActivity] = useState<Activity>('running');
  const [duration, setDuration] = useState(30);
  const [result, setResult] = useState<null | { calories: number; caloriesPerMin: number; equivalent: string }>(null);

  function calculate() {
    const met = ACTIVITIES[activity].met;
    const calories = met * weight * (duration / 60);
    const caloriesPerMin = calories / duration;
    
    const equivalents = [
      { activity: 'Walking', calories: 4.3 * weight * (1/60) },
      { activity: 'Running', calories: 9.8 * weight * (1/60) },
      { activity: 'Cycling', calories: 8.0 * weight * (1/60) },
    ];
    
    const equivalent = equivalents[0].activity;
    
    setResult({
      calories: Math.round(calories),
      caloriesPerMin: Math.round(caloriesPerMin * 10) / 10,
      equivalent,
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
              className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-pink-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">kg</span>
          </div>
        </div>

        {/* Activity */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Activity Type</label>
          <div className="grid grid-cols-2 gap-2">
            {(Object.entries(ACTIVITIES) as [Activity, { label: string; icon: string }][]).map(([key, val]) => (
              <button key={key} onClick={() => setActivity(key)}
                className={`py-3 rounded-xl border-2 text-sm font-medium flex items-center justify-center gap-2 transition-all ${activity === key ? 'bg-pink-500 border-pink-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                <i className={`fas ${val.icon}`} /> {val.label}
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Duration: <span className="text-pink-500">{duration} minutes</span></label>
          <input type="range" min={5} max={180} step={5} value={duration} onChange={e => setDuration(Number(e.target.value))} className="w-full accent-pink-500" />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>5 min</span>
            <span>30 min</span>
            <span>60 min</span>
            <span>120 min</span>
            <span>180 min</span>
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-fire" /> Calculate Calories
        </button>
      </div>

      {result && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Total Burned', value: `${result.calories} kcal`, bg: 'from-pink-500 to-rose-600', desc: 'For this session' },
              { label: 'Per Minute', value: `${result.caloriesPerMin} kcal`, bg: 'from-rose-500 to-red-600', desc: 'Average burn rate' },
              { label: 'Per Hour', value: `${Math.round(result.caloriesPerMin * 60)} kcal`, bg: 'from-red-500 to-orange-600', desc: 'If continued' },
            ].map(s => (
              <div key={s.label} className={`rounded-2xl p-6 bg-gradient-to-br ${s.bg} text-white text-center shadow-lg`}>
                <div className="text-sm font-medium opacity-80 mb-1">{s.label}</div>
                <div className="text-2xl font-extrabold mb-1">{s.value}</div>
                <div className="text-xs opacity-70">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Activity Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Activity</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{ACTIVITIES[activity].label}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">MET Value</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{ACTIVITIES[activity].met}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Duration</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{duration} minutes</span>
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
        <strong>Note:</strong> Calories burned are estimates based on MET (Metabolic Equivalent of Task) values. Actual calories burned may vary based on intensity, fitness level, and individual metabolism.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
