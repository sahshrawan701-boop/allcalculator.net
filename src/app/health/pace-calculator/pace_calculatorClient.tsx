'use client';
import { useState } from 'react';
import Link from 'next/link';

type DistanceUnit = 'km' | 'mi';
type TimeInput = 'time' | 'pace';

function formatTime(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function parseTime(timeStr: string): number {
  const parts = timeStr.split(':').map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return 0;
}

interface PaceResult {
  pace: string;
  paceKm: string;
  paceMi: string;
  speed: number;
  time: string;
}

export default function PaceCalculatorPage() {
  const [distance, setDistance] = useState(5);
  const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>('km');
  const [time, setTime] = useState('30:00');
  const [pace, setPace] = useState('6:00');
  const [inputMode, setInputMode] = useState<TimeInput>('time');
  const [result, setResult] = useState<PaceResult | null>(null);

  function calculate() {
    const distanceKm = distanceUnit === 'km' ? distance : distance * 1.60934;
    let totalSeconds: number;
    
    if (inputMode === 'time') {
      totalSeconds = parseTime(time);
      const paceSeconds = totalSeconds / distanceKm;
      const paceKm = formatTime(paceSeconds);
      const paceMi = formatTime(paceSeconds * 1.60934);
      const speed = (distanceKm / (totalSeconds / 3600)).toFixed(2);
      
      setResult({
        pace: paceKm,
        paceKm,
        paceMi,
        speed: parseFloat(speed),
        time: formatTime(totalSeconds),
      });
    } else {
      const paceSeconds = parseTime(pace);
      totalSeconds = paceSeconds * distanceKm;
      const paceKm = formatTime(paceSeconds);
      const paceMi = formatTime(paceSeconds * 1.60934);
      const speed = (distanceKm / (totalSeconds / 3600)).toFixed(2);
      
      setResult({
        pace: paceKm,
        paceKm,
        paceMi,
        speed: parseFloat(speed),
        time: formatTime(totalSeconds),
      });
    }
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        {/* Distance */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Distance</label>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <input type="number" value={distance} min={0.1} step={0.1} onChange={e => setDistance(Number(e.target.value))}
                className="w-full px-4 py-3 pr-16 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">value</span>
            </div>
            <div className="flex gap-2">
              {(['km', 'mi'] as DistanceUnit[]).map(u => (
                <button key={u} onClick={() => setDistanceUnit(u)}
                  className={`px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all ${distanceUnit === u ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                  {u.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Mode Toggle */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Calculate By</label>
          <div className="grid grid-cols-2 gap-3">
            {(['time', 'pace'] as TimeInput[]).map(m => (
              <button key={m} onClick={() => setInputMode(m)}
                className={`py-3 rounded-xl border-2 font-medium text-sm transition-all ${inputMode === m ? 'bg-sky-500 border-sky-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                {m === 'time' ? 'Time' : 'Pace'}
              </button>
            ))}
          </div>
        </div>

        {/* Time or Pace Input */}
        {inputMode === 'time' ? (
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Time (hh:mm:ss or mm:ss)</label>
            <input type="text" value={time} onChange={e => setTime(e.target.value)} placeholder="30:00"
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500" />
          </div>
        ) : (
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Pace per km (mm:ss)</label>
            <input type="text" value={pace} onChange={e => setPace(e.target.value)} placeholder="6:00"
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500" />
          </div>
        )}

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate
        </button>
      </div>

      {result && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Pace (per km)', value: result.paceKm, bg: 'from-sky-500 to-sky-700', desc: 'Time per kilometer' },
              { label: 'Pace (per mi)', value: result.paceMi, bg: 'from-blue-500 to-blue-700', desc: 'Time per mile' },
              { label: 'Speed', value: `${result.speed} km/h`, bg: 'from-cyan-500 to-cyan-700', desc: 'Average speed' },
            ].map(s => (
              <div key={s.label} className={`rounded-2xl p-6 bg-gradient-to-br ${s.bg} text-white text-center shadow-lg`}>
                <div className="text-sm font-medium opacity-80 mb-1">{s.label}</div>
                <div className="text-2xl font-extrabold mb-1">{s.value}</div>
                <div className="text-xs opacity-70">{s.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Finish Time</h3>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-sky-500 mb-2">{result.time}</div>
              <div className="text-sm text-slate-400">Total time to complete {distance} {distanceUnit}</div>
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
