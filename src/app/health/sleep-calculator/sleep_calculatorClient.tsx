'use client';
import { useState } from 'react';
import Link from 'next/link';

interface SleepResult {
  bedtime: string;
  wakeTime: string;
  sleepDuration: string;
  sleepCycles: number;
  optimalWakeTimes: string[];
}

function calculateOptimalWakeTimes(bedtime: string, cycles: number): string[] {
  const [hours, minutes] = bedtime.split(':').map(Number);
  const bedDate = new Date();
  bedDate.setHours(hours, minutes, 0, 0);
  
  const wakeTimes: string[] = [];
  for (let i = 1; i <= cycles; i++) {
    const wakeDate = new Date(bedDate.getTime() + (i * 90 + 15) * 60000);
    const wakeHours = wakeDate.getHours();
    const wakeMins = wakeDate.getMinutes();
    wakeTimes.push(`${wakeHours.toString().padStart(2, '0')}:${wakeMins.toString().padStart(2, '0')}`);
  }
  return wakeTimes;
}

function calculateBedtime(wakeTime: string, cycles: number): string {
  const [hours, minutes] = wakeTime.split(':').map(Number);
  const wakeDate = new Date();
  wakeDate.setHours(hours, minutes, 0, 0);
  
  const bedDate = new Date(wakeDate.getTime() - (cycles * 90 + 15) * 60000);
  const bedHours = bedDate.getHours();
  const bedMins = bedDate.getMinutes();
  return `${bedHours.toString().padStart(2, '0')}:${bedMins.toString().padStart(2, '0')}`;
}

export default function SleepCalculatorPage() {
  const [mode, setMode] = useState<'bedtime' | 'waketime'>('bedtime');
  const [bedtime, setBedtime] = useState('22:00');
  const [wakeTime, setWakeTime] = useState('07:00');
  const [cycles, setCycles] = useState(5);
  const [result, setResult] = useState<SleepResult | null>(null);

  function calculate() {
    if (mode === 'bedtime') {
      const optimalWakeTimes = calculateOptimalWakeTimes(bedtime, 6);
      const wakeDate = new Date();
      const [hours, minutes] = bedtime.split(':').map(Number);
      wakeDate.setHours(hours, minutes, 0, 0);
      const sleepDuration = (cycles * 90 + 15) / 60;
      
      setResult({
        bedtime,
        wakeTime: calculateBedtime(bedtime, cycles),
        sleepDuration: `${Math.floor(sleepDuration)}h ${Math.round((sleepDuration % 1) * 60)}m`,
        sleepCycles: cycles,
        optimalWakeTimes,
      });
    } else {
      const bedtime = calculateBedtime(wakeTime, cycles);
      const sleepDuration = (cycles * 90 + 15) / 60;
      
      setResult({
        bedtime,
        wakeTime,
        sleepDuration: `${Math.floor(sleepDuration)}h ${Math.round((sleepDuration % 1) * 60)}m`,
        sleepCycles: cycles,
        optimalWakeTimes: calculateOptimalWakeTimes(bedtime, 6),
      });
    }
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        {/* Mode Toggle */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Calculate By</label>
          <div className="grid grid-cols-2 gap-3">
            {(['bedtime', 'waketime'] as const).map(m => (
              <button key={m} onClick={() => setMode(m)}
                className={`py-3 rounded-xl border-2 font-medium text-sm transition-all ${mode === m ? 'bg-indigo-500 border-indigo-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                {m === 'bedtime' ? 'I go to bed at...' : 'I need to wake up at...'}
              </button>
            ))}
          </div>
        </div>

        {/* Time Input */}
        {mode === 'bedtime' ? (
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Bedtime</label>
            <input type="time" value={bedtime} onChange={e => setBedtime(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-indigo-500" />
          </div>
        ) : (
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Wake Time</label>
            <input type="time" value={wakeTime} onChange={e => setWakeTime(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-indigo-500" />
          </div>
        )}

        {/* Sleep Cycles */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Sleep Cycles: <span className="text-indigo-500">{cycles}</span></label>
          <input type="range" min={3} max={6} value={cycles} onChange={e => setCycles(Number(e.target.value))} className="w-full accent-indigo-500" />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>3 cycles (4.5h)</span>
            <span>4 cycles (6h)</span>
            <span>5 cycles (7.5h)</span>
            <span>6 cycles (9h)</span>
          </div>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-moon" /> Calculate Sleep
        </button>
      </div>

      {result && (
        <>
          <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl p-7 text-white shadow-xl mb-4">
            <div className="text-sm font-medium opacity-80 mb-1">{mode === 'bedtime' ? 'Recommended Wake Time' : 'Recommended Bedtime'}</div>
            <div className="text-5xl font-extrabold mb-3">{mode === 'bedtime' ? result.wakeTime : result.bedtime}</div>
            <div className="grid grid-cols-2 gap-3 border-t border-white/20 pt-3">
              <div className="text-center">
                <div className="text-2xl font-extrabold">{result.sleepDuration}</div>
                <div className="text-xs opacity-70">Sleep Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold">{result.sleepCycles}</div>
                <div className="text-xs opacity-70">Sleep Cycles</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4">Optimal Wake Times (90-min cycles)</h3>
            <div className="grid grid-cols-3 gap-2">
              {result.optimalWakeTimes.map((time, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 text-center border border-slate-200 dark:border-slate-600">
                  <div className="text-lg font-bold text-slate-800 dark:text-slate-100">{time}</div>
                  <div className="text-xs text-slate-400">{index + 1} cycles</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Note:</strong> Each sleep cycle lasts approximately 90 minutes. Waking up at the end of a cycle helps you feel more refreshed. Allow 15 minutes to fall asleep.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
