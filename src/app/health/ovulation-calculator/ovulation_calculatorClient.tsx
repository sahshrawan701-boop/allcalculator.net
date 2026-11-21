'use client';
import { useState } from 'react';
import Link from 'next/link';

function addDays(d: Date, n: number) {
  const r = new Date(d); r.setDate(r.getDate() + n); return r;
}
function fmtDate(d: Date) {
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}
function diffDays(a: Date, b: Date) {
  return Math.floor((b.getTime() - a.getTime()) / 86400000);
}

interface OvResult {
  ovulationDate: Date;
  fertileStart: Date;
  fertileEnd: Date;
  nextPeriod: Date;
  pregnancyTestDay: Date;
  cycleDay: number;
  cyclePhase: string;
  phaseColor: string;
  conceptionChance: string;
  calendar: { date: Date; type: 'period' | 'fertile' | 'ovulation' | 'normal' }[];
}

export default function OvulationCalculatorPage() {
  const [lastPeriod, setLastPeriod] = useState('');
  const [cycleLen, setCycleLen] = useState(28);
  const [lutealLen, setLutealLen] = useState(14);
  const [result, setResult] = useState<OvResult | null>(null);

  function calculate() {
    if (!lastPeriod) return;
    const periodStart = new Date(lastPeriod);
    const ovulationDay = cycleLen - lutealLen;
    const ovulationDate = addDays(periodStart, ovulationDay);
    const fertileStart = addDays(ovulationDate, -5);
    const fertileEnd = addDays(ovulationDate, 1);
    const nextPeriod = addDays(periodStart, cycleLen);
    const pregnancyTestDay = addDays(ovulationDate, 14);

    const today = new Date();
    const cycleDay = Math.max(1, diffDays(periodStart, today) + 1);
    let cyclePhase = 'Menstrual', phaseColor = 'text-red-500';
    let conceptionChance = 'Very Low';
    if (cycleDay > cycleLen) { cyclePhase = 'Post-Ovulation'; phaseColor = 'text-slate-500'; }
    else if (cycleDay >= ovulationDay) { cyclePhase = 'Ovulation Phase'; phaseColor = 'text-purple-500'; conceptionChance = 'Very High'; }
    else if (cycleDay >= ovulationDay - 5) { cyclePhase = 'Fertile Window'; phaseColor = 'text-emerald-500'; conceptionChance = 'High'; }
    else if (cycleDay > 5) { cyclePhase = 'Follicular Phase'; phaseColor = 'text-blue-500'; conceptionChance = 'Low'; }

    // Build 35-day calendar
    const calendar: OvResult['calendar'] = [];
    for (let i = 0; i < 35; i++) {
      const date = addDays(periodStart, i);
      let type: OvResult['calendar'][0]['type'] = 'normal';
      if (i < 5) type = 'period';
      else if (i === ovulationDay) type = 'ovulation';
      else if (i >= ovulationDay - 5 && i <= ovulationDay + 1) type = 'fertile';
      calendar.push({ date, type });
    }

    setResult({ ovulationDate, fertileStart, fertileEnd, nextPeriod, pregnancyTestDay, cycleDay, cyclePhase, phaseColor, conceptionChance, calendar });
  }

  const typeStyles = {
    period: 'bg-red-400 text-white',
    ovulation: 'bg-purple-500 text-white ring-2 ring-purple-300',
    fertile: 'bg-emerald-400 text-white',
    normal: 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-600',
  };

  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-8 py-8 pb-16">
      

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8">
        {/* Input */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 self-start">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-5 flex items-center gap-2">
            <i className="fas fa-calendar-alt text-emerald-500" /> Cycle Details
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">First Day of Last Period</label>
            <input type="date" value={lastPeriod} onChange={e => setLastPeriod(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-400" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Cycle Length: <span className="text-emerald-500">{cycleLen} days</span></label>
            <input type="range" min={21} max={45} value={cycleLen} onChange={e => setCycleLen(Number(e.target.value))} className="w-full accent-emerald-500" />
            <div className="flex justify-between text-xs text-slate-400 mt-1"><span>21</span><span>45 days</span></div>
          </div>
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Luteal Phase: <span className="text-violet-500">{lutealLen} days</span></label>
            <input type="range" min={10} max={16} value={lutealLen} onChange={e => setLutealLen(Number(e.target.value))} className="w-full accent-violet-500" />
            <div className="flex justify-between text-xs text-slate-400 mt-1"><span>10</span><span>16 days</span></div>
          </div>
          <button onClick={calculate}
            className="w-full py-4 bg-gradient-to-br from-emerald-500 to-violet-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
            <i className="fas fa-heartbeat" /> Calculate Ovulation
          </button>

          {/* Legend */}
          <div className="mt-5 grid grid-cols-2 gap-2">
            {[
              { color: 'bg-red-400', label: 'Period' },
              { color: 'bg-emerald-400', label: 'Fertile Window' },
              { color: 'bg-purple-500', label: 'Ovulation Day' },
              { color: 'bg-slate-200 dark:bg-slate-900', label: 'Regular Day' },
            ].map(l => (
              <div key={l.label} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className={`w-3 h-3 rounded-full ${l.color} flex-shrink-0`} />
                {l.label}
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        {result ? (
          <section className="space-y-4">
            {/* Key stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Ovulation Date', value: fmtDate(result.ovulationDate), icon: 'fa-star', color: 'text-purple-500' },
                { label: 'Fertile Window', value: `${fmtDate(result.fertileStart).split(',')[0]} – ${fmtDate(result.fertileEnd).split(',')[0]}`, icon: 'fa-seedling', color: 'text-emerald-500' },
                { label: 'Next Period', value: fmtDate(result.nextPeriod), icon: 'fa-calendar', color: 'text-red-400' },
                { label: 'Pregnancy Test', value: fmtDate(result.pregnancyTestDay), icon: 'fa-vial', color: 'text-blue-500' },
              ].map(s => (
                <div key={s.label} className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <i className={`fas ${s.icon} ${s.color}`} /> {s.label}
                  </div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-100">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Phase + chance */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Today — Day {result.cycleDay} of cycle</div>
                  <div className={`text-lg font-bold ${result.phaseColor}`}>{result.cyclePhase}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 mb-1">Conception Chance</div>
                  <div className={`text-lg font-bold ${result.phaseColor}`}>{result.conceptionChance}</div>
                </div>
              </div>
            </div>

            {/* 5-week calendar */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3">5-Week Cycle Calendar</h3>
              <div className="grid grid-cols-7 gap-1">
                {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                  <div key={d} className="text-center text-[10px] font-semibold text-slate-400 py-1">{d}</div>
                ))}
                {/* offset for first day of week */}
                {Array.from({ length: result.calendar[0].date.getDay() }).map((_, i) => <div key={`e${i}`} />)}
                {result.calendar.map((c, i) => (
                  <div key={i} className={`aspect-square rounded-lg flex flex-col items-center justify-center text-[11px] font-bold ${typeStyles[c.type]}`}>
                    <span>{c.date.getDate()}</span>
                    {c.type === 'ovulation' && <span className="text-[8px] opacity-80">OV</span>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-400 text-2xl mb-4">
              <i className="fas fa-calendar-alt" />
            </div>
            <p className="text-slate-400 dark:text-slate-400 text-sm max-w-xs">Enter your cycle details and click Calculate to see your fertile window, ovulation date, and cycle calendar.</p>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Medical Disclaimer:</strong> This tool provides estimates based on a standard 28-day cycle. Individual cycles vary. Consult a healthcare provider for fertility advice.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
