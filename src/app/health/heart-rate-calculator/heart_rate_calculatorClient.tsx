'use client';
import { useState } from 'react';
import Link from 'next/link';

interface HeartRateResult {
  maxHR: number;
  zones: {
    rest: { min: number; max: number; label: string; color: string };
    fatBurn: { min: number; max: number; label: string; color: string };
    cardio: { min: number; max: number; label: string; color: string };
    hard: { min: number; max: number; label: string; color: string };
    peak: { min: number; max: number; label: string; color: string };
  };
}

export default function HeartRateCalculatorPage() {
  const [age, setAge] = useState(30);
  const [restingHR, setRestingHR] = useState(70);
  const [result, setResult] = useState<HeartRateResult | null>(null);

  function calculate() {
    const maxHR = 220 - age;
    const heartRateReserve = maxHR - restingHR;
    
    setResult({
      maxHR,
      zones: {
        rest: { min: restingHR, max: Math.round(restingHR + heartRateReserve * 0.5), label: 'Rest/Warm-up', color: '#3b82f6' },
        fatBurn: { min: Math.round(restingHR + heartRateReserve * 0.5), max: Math.round(restingHR + heartRateReserve * 0.6), label: 'Fat Burn', color: '#10b981' },
        cardio: { min: Math.round(restingHR + heartRateReserve * 0.6), max: Math.round(restingHR + heartRateReserve * 0.7), label: 'Cardio', color: '#f59e0b' },
        hard: { min: Math.round(restingHR + heartRateReserve * 0.7), max: Math.round(restingHR + heartRateReserve * 0.85), label: 'Hard', color: '#f97316' },
        peak: { min: Math.round(restingHR + heartRateReserve * 0.85), max: maxHR, label: 'Peak', color: '#ef4444' },
      },
    });
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
     

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        {/* Age */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Age</label>
          <div className="relative">
            <input type="number" value={age} min={13} max={100} onChange={e => setAge(Number(e.target.value))}
              className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-red-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">years</span>
          </div>
        </div>

        {/* Resting Heart Rate */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Resting Heart Rate</label>
          <div className="relative">
            <input type="number" value={restingHR} min={40} max={120} onChange={e => setRestingHR(Number(e.target.value))}
              className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-red-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">bpm</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">Measure your pulse at rest, ideally in the morning before getting out of bed.</p>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-red-500 to-rose-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-heartbeat" /> Calculate Zones
        </button>
      </div>

      {result && (
        <>
          <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl p-7 text-white shadow-xl mb-4">
            <div className="text-sm font-medium opacity-80 mb-1">Maximum Heart Rate</div>
            <div className="text-5xl font-extrabold mb-3">{result.maxHR} bpm</div>
            <div className="text-sm opacity-70">Based on the formula: 220 - Age</div>
          </div>

          {/* Heart Rate Zones */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm mb-4">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Target Heart Rate Zones</h3>
            <div className="space-y-3">
              {Object.entries(result.zones).map(([key, zone]) => (
                <div key={key} className="flex items-center justify-between p-3 rounded-xl border-2" style={{ borderColor: zone.color + '30', backgroundColor: zone.color + '10' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: zone.color }} />
                    <div>
                      <div className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{zone.label}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{key === 'rest' ? 'Recovery & warm-up' : key === 'fatBurn' ? 'Weight loss zone' : key === 'cardio' ? 'Endurance building' : key === 'hard' ? 'Lactate threshold' : 'Maximum effort'}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-800 dark:text-slate-100">{zone.min}-{zone.max} bpm</div>
                    <div className="text-xs text-slate-400">{Math.round((zone.min / result.maxHR) * 100)}-{Math.round((zone.max / result.maxHR) * 100)}% max</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Zone Explanation */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Understanding Heart Rate Zones</h3>
            <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed space-y-2">
              <p><strong className="text-blue-500">Rest/Warm-up:</strong> Light activity, good for recovery and warm-up.</p>
              <p><strong className="text-emerald-500">Fat Burn:</strong> Moderate intensity where your body burns fat as fuel. Sustainable for longer periods.</p>
              <p><strong className="text-amber-500">Cardio:</strong> Improves cardiovascular endurance. You can still hold a conversation.</p>
              <p><strong className="text-orange-500">Hard:</strong> Vigorous intensity that improves performance. Breathing is heavy.</p>
              <p><strong className="text-red-500">Peak:</strong> Maximum effort, sustainable only for short bursts. Used for interval training.</p>
            </div>
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Medical Disclaimer:</strong> These calculations are estimates. Individual heart rate responses vary. Consult a healthcare provider before starting a new exercise program.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
