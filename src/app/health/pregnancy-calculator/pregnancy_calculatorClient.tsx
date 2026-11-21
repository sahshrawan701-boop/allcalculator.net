'use client';
import { useState } from 'react';
import Link from 'next/link';

function addDays(d: Date, n: number) {
  const r = new Date(d); r.setDate(r.getDate() + n); return r;
}
function fmtDate(d: Date) {
  return d.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
}

interface PregResult {
  dueDate: Date;
  conceptionDate: Date;
  weeksPregnant: number;
  daysPregnant: number;
  trimester: string;
  trimesterClass: string;
  weeksRemaining: number;
  t1End: Date;
  anatomyScan: Date;
  t3Start: Date;
  fullTerm: Date;
}

const milestones: Record<number, string> = {
  4: 'Size of a poppy seed • Heart begins forming',
  8: 'Size of a raspberry • Baby\'s organs are forming',
  12: 'Size of a lime • Fingers & toes fully formed',
  16: 'Size of an avocado • Gender may be detectable',
  20: 'Size of a banana • Baby can hear sounds',
  24: 'Size of an ear of corn • Lungs developing',
  28: 'Size of an eggplant • Eyes can open',
  32: 'Size of a squash • Bones hardening',
  36: 'Size of a papaya • Nearly full term',
  40: 'Size of a watermelon • Full term — ready!',
};

export default function PregnancyCalculatorPage() {
  const [lmp, setLmp] = useState('');
  const [cycleLen, setCycleLen] = useState(28);
  const [result, setResult] = useState<PregResult | null>(null);

  function calculate() {
    if (!lmp) return;
    const lmpDate = new Date(lmp);
    const dueDate = addDays(lmpDate, 280 + (cycleLen - 28));
    const conceptionDate = addDays(lmpDate, 14 + (cycleLen - 28));
    const today = new Date();
    const daysPregnant = Math.floor((today.getTime() - lmpDate.getTime()) / 86400000);
    const weeksPregnant = Math.floor(daysPregnant / 7);
    const weeksRemaining = Math.max(0, 40 - weeksPregnant);
    let trimester = '1st Trimester', trimesterClass = 'text-emerald-500';
    if (weeksPregnant >= 28) { trimester = '3rd Trimester'; trimesterClass = 'text-violet-500'; }
    else if (weeksPregnant >= 14) { trimester = '2nd Trimester'; trimesterClass = 'text-blue-500'; }
    setResult({
      dueDate, conceptionDate, weeksPregnant, daysPregnant, trimester, trimesterClass, weeksRemaining,
      t1End: addDays(lmpDate, 97),
      anatomyScan: addDays(lmpDate, 140),
      t3Start: addDays(lmpDate, 196),
      fullTerm: addDays(lmpDate, 259),
    });
  }

  const getMilestone = (week: number): string => {
    const keys = Object.keys(milestones).map(Number).sort((a, b) => a - b);
    for (const k of keys) { if (week <= k) return milestones[k]; }
    return milestones[40];
  };

  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-8 py-8 pb-16">
      

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8">
        {/* Input */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 self-start">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-5 flex items-center gap-2">
            <i className="fas fa-baby text-pink-400" /> Your Details
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">First Day of Last Menstrual Period (LMP)</label>
            <input type="date" value={lmp} onChange={e => setLmp(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-pink-400" />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Average Cycle Length: <span className="text-pink-500">{cycleLen} days</span></label>
            <input type="range" min={21} max={45} value={cycleLen} onChange={e => setCycleLen(Number(e.target.value))} className="w-full accent-pink-500" />
            <div className="flex justify-between text-xs text-slate-400 mt-1"><span>21 days</span><span>45 days</span></div>
          </div>
          <button onClick={calculate}
            className="w-full py-4 bg-gradient-to-br from-pink-500 to-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-200">
            <i className="fas fa-heart" /> Calculate Due Date
          </button>
        </section>

        {/* Results */}
        {result ? (
          <section className="space-y-4">
            {/* Due date hero */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-7 text-white shadow-xl">
              <div className="text-sm font-medium opacity-80 mb-1">Estimated Due Date</div>
              <div className="text-2xl font-extrabold mb-3">{fmtDate(result.dueDate)}</div>
              <div className="grid grid-cols-3 gap-3 border-t border-white/20 pt-3">
                <div className="text-center">
                  <div className="text-2xl font-extrabold">{result.weeksPregnant}</div>
                  <div className="text-xs opacity-70">Weeks Pregnant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-extrabold">{result.daysPregnant}</div>
                  <div className="text-xs opacity-70">Days Pregnant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-extrabold">{result.weeksRemaining}</div>
                  <div className="text-xs opacity-70">Weeks Left</div>
                </div>
              </div>
            </div>

            {/* Trimester + progress */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">Current Trimester</span>
                <span className={`font-bold text-sm ${result.trimesterClass}`}>{result.trimester}</span>
              </div>
              <div className="h-3 bg-slate-50 dark:bg-slate-900 rounded-full overflow-hidden mb-2">
                <div className="h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-700"
                  style={{ width: `${Math.min(100, (result.weeksPregnant / 40) * 100)}%` }} />
              </div>
              <div className="text-xs text-slate-400">Week {result.weeksPregnant} of 40 ({Math.round((result.weeksPregnant / 40) * 100)}% complete)</div>
            </div>

            {/* Key dates */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3">Key Dates</h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'Conception Date', date: result.conceptionDate, icon: 'fa-heart', color: 'text-pink-500' },
                  { label: '1st Trimester Ends', date: result.t1End, icon: 'fa-check-circle', color: 'text-emerald-500' },
                  { label: 'Anatomy Scan (20 weeks)', date: result.anatomyScan, icon: 'fa-stethoscope', color: 'text-blue-500' },
                  { label: '3rd Trimester Begins', date: result.t3Start, icon: 'fa-calendar-check', color: 'text-violet-500' },
                  { label: 'Full Term (37 weeks)', date: result.fullTerm, icon: 'fa-baby', color: 'text-amber-500' },
                ].map(r => (
                  <div key={r.label} className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-800 dark:text-slate-100">
                      <i className={`fas ${r.icon} ${r.color} text-xs`} /> {r.label}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-100 text-xs">{fmtDate(r.date)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fetal development milestone */}
            {result.weeksPregnant > 0 && (
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-2xl p-5 border border-pink-200 dark:border-pink-800">
                <h3 className="text-sm font-bold text-pink-700 dark:text-pink-300 mb-1 flex items-center gap-2">
                  <i className="fas fa-seedling" /> Week {result.weeksPregnant} Development
                </h3>
                <p className="text-sm text-pink-600 dark:text-pink-400">{getMilestone(result.weeksPregnant)}</p>
              </div>
            )}
          </section>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center text-pink-400 text-2xl mb-4">
              <i className="fas fa-baby" />
            </div>
            <p className="text-slate-400 dark:text-slate-400 text-sm max-w-xs">Enter your last menstrual period date and click Calculate to see your due date and pregnancy timeline.</p>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Medical Disclaimer:</strong> This calculator provides estimates for informational purposes only. Always consult your healthcare provider for accurate pregnancy dating and medical advice.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
