'use client';
import { useState } from 'react';
import Link from 'next/link';

type Gender = 'male' | 'female';
type DrinkType = 'beer' | 'wine' | 'shot' | 'cocktail';

const DRINK_TYPES: Record<DrinkType, { label: string; alcohol: number; size: number }> = {
  beer: { label: 'Beer (12oz)', alcohol: 0.05, size: 12 },
  wine: { label: 'Wine (5oz)', alcohol: 0.12, size: 5 },
  shot: { label: 'Shot (1.5oz)', alcohol: 0.40, size: 1.5 },
  cocktail: { label: 'Cocktail (8oz)', alcohol: 0.15, size: 8 },
};

interface Drink {
  type: DrinkType;
  count: number;
}

interface BACResult {
  bac: number;
  status: string;
  color: string;
  timeToSober: number;
  impairment: string;
}

function getBACStatus(bac: number): { status: string; color: string; impairment: string } {
  if (bac < 0.02) return { status: 'Minimal Impairment', color: '#10b981', impairment: 'No noticeable effects' };
  if (bac < 0.05) return { status: 'Mild Impairment', color: '#3b82f6', impairment: 'Slight relaxation, mild impairment' };
  if (bac < 0.08) return { status: 'Moderate Impairment', color: '#f59e0b', impairment: 'Impaired judgment, reduced coordination' };
  if (bac < 0.10) return { status: 'Significant Impairment', color: '#f97316', impairment: 'Slowed reaction, loss of inhibition' };
  if (bac < 0.15) return { status: 'Severe Impairment', color: '#ef4444', impairment: 'Major motor impairment, nausea' };
  if (bac < 0.20) return { status: 'Dangerous', color: '#dc2626', impairment: 'Blackouts, vomiting, severe impairment' };
  if (bac < 0.30) return { status: 'Life-Threatening', color: '#991b1b', impairment: 'Loss of consciousness, coma risk' };
  return { status: 'Fatal Risk', color: '#7f1d1d', impairment: 'Danger of death, medical emergency' };
}

export default function BACCalculatorPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [weight, setWeight] = useState(160);
  const [hours, setHours] = useState(2);
  const [drinks, setDrinks] = useState<Drink[]>([{ type: 'beer', count: 1 }]);
  const [result, setResult] = useState<BACResult | null>(null);

  function calculate() {
    const totalAlcohol = drinks.reduce((sum, d) => {
      const drink = DRINK_TYPES[d.type];
      return sum + (drink.alcohol * drink.size * d.count * 0.789);
    }, 0);

    const bodyWater = gender === 'male' ? 0.58 : 0.49;
    const weightKg = weight * 0.453592;
    const bac = (totalAlcohol / (bodyWater * weightKg)) - (0.015 * hours);
    const finalBAC = Math.max(0, bac);

    const status = getBACStatus(finalBAC);
    const timeToSober = finalBAC > 0 ? Math.ceil(finalBAC / 0.015) : 0;

    setResult({
      bac: finalBAC,
      status: status.status,
      color: status.color,
      timeToSober,
      impairment: status.impairment,
    });
  }

  function addDrink() {
    setDrinks([...drinks, { type: 'beer', count: 1 }]);
  }

  function updateDrink(index: number, field: keyof Drink, value: DrinkType | number) {
    const newDrinks = [...drinks];
    newDrinks[index][field] = value as never;
    setDrinks(newDrinks);
  }

  function removeDrink(index: number) {
    if (drinks.length > 1) {
      setDrinks(drinks.filter((_, i) => i !== index));
    }
  }

  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-8 py-8 pb-16">
      

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8">
        {/* Input */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 self-start">
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-5 flex items-center gap-2">
            <i className="fas fa-user text-red-500" /> Your Details
          </h2>

          {/* Gender */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Gender</label>
            <div className="grid grid-cols-2 gap-3">
              {(['male', 'female'] as const).map(g => (
                <button key={g} onClick={() => setGender(g)}
                  className={`py-3 rounded-xl border-2 font-medium text-sm flex items-center justify-center gap-2 transition-all ${gender === g ? 'bg-red-500 border-red-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                  <i className={`fas fa-${g}`} /> {g.charAt(0).toUpperCase() + g.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Weight */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Weight</label>
            <div className="relative">
              <input type="number" value={weight} min={80} max={400} onChange={e => setWeight(Number(e.target.value))}
                className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-red-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">lbs</span>
            </div>
          </div>

          {/* Hours */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Hours Since First Drink</label>
            <div className="relative">
              <input type="number" value={hours} min={0} max={24} onChange={e => setHours(Number(e.target.value))}
                className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-red-500" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">hours</span>
            </div>
          </div>

          {/* Drinks */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Drinks Consumed</label>
            <div className="space-y-3">
              {drinks.map((drink, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <select value={drink.type} onChange={e => updateDrink(index, 'type', e.target.value as DrinkType)}
                    className="flex-1 px-3 py-2.5 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-red-500">
                    {(Object.entries(DRINK_TYPES) as [DrinkType, { label: string }][]).map(([k, v]) => (
                      <option key={k} value={k}>{v.label}</option>
                    ))}
                  </select>
                  <input type="number" value={drink.count} min={1} max={20} onChange={e => updateDrink(index, 'count', Number(e.target.value))}
                    className="w-20 px-3 py-2.5 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-red-500" />
                  {drinks.length > 1 && (
                    <button onClick={() => removeDrink(index)} className="p-2.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all">
                      <i className="fas fa-trash text-sm" />
                    </button>
                  )}
                </div>
              ))}
              <button onClick={addDrink} className="w-full py-2.5 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl text-sm font-medium text-slate-500 dark:text-slate-400 hover:border-red-400 hover:text-red-500 transition-all">
                <i className="fas fa-plus mr-1" /> Add Another Drink
              </button>
            </div>
          </div>

          <button onClick={calculate}
            className="w-full py-4 bg-gradient-to-br from-red-500 to-orange-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-200">
            <i className="fas fa-calculator" /> Calculate BAC
          </button>
        </section>

        {/* Results */}
        {result ? (
          <section className="space-y-4">
            {/* BAC Display */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800">
              <div className="text-center mb-6">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">Blood Alcohol Content</div>
                <div className="text-5xl font-extrabold mb-2" style={{ color: result.color }}>
                  {result.bac.toFixed(3)}%
                </div>
                <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">{result.status}</div>
              </div>

              {/* BAC Scale */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 mb-5">
                <div className="h-4 bg-gradient-to-r from-emerald-400 via-blue-400 via-amber-400 via-orange-400 to-red-600 rounded-full relative">
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-slate-800 rounded-full shadow-lg transition-all duration-500"
                    style={{ left: `${Math.min(100, (result.bac / 0.30) * 100)}%` }} />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-2">
                  <span>0.00%</span>
                  <span>0.08%</span>
                  <span>0.15%</span>
                  <span>0.30%</span>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                  <div className="text-xs text-slate-400 mb-1">Time to Sober</div>
                  <div className="text-lg font-bold text-slate-800 dark:text-slate-100">{result.timeToSober} hours</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                  <div className="text-xs text-slate-400 mb-1">Impairment Level</div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">{result.impairment}</div>
                </div>
              </div>
            </div>

            {/* Legal Limit Warning */}
            <div className={`rounded-2xl p-5 border-2 ${result.bac >= 0.08 ? 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700' : 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700'}`}>
              <div className="flex items-start gap-3">
                <i className={`fas ${result.bac >= 0.08 ? 'fa-exclamation-triangle text-red-500' : 'fa-check-circle text-emerald-500'} text-xl mt-0.5`} />
                <div>
                  <div className={`font-bold mb-1 ${result.bac >= 0.08 ? 'text-red-700 dark:text-red-400' : 'text-emerald-700 dark:text-emerald-400'}`}>
                    {result.bac >= 0.08 ? 'Above Legal Limit' : 'Below Legal Limit'}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {result.bac >= 0.08 
                      ? 'Your BAC is above the legal driving limit (0.08% in most US states). Do not drive.'
                      : 'Your BAC is below the legal driving limit, but impairment can still occur. Use caution.'}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center text-red-400 text-2xl mb-4">
              <i className="fas fa-wine-glass-alt" />
            </div>
            <p className="text-slate-400 dark:text-slate-400 text-sm max-w-xs">Enter your details and drinks consumed to estimate your Blood Alcohol Content.</p>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Disclaimer:</strong> This calculator provides estimates for informational purposes only. Actual BAC can vary based on metabolism, food consumption, and individual factors. Never drink and drive.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
