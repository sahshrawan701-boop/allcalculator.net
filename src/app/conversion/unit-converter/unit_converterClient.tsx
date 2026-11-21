'use client';
import { useState } from 'react';
import Link from 'next/link';

type Category = 'length' | 'mass' | 'temperature' | 'area' | 'volume' | 'speed';

const UNITS: Record<Category, { label: string; units: { name: string; toBase: (v: number) => number; fromBase: (v: number) => number }[] }> = {
  length: {
    label: 'Length',
    units: [
      { name: 'Meter (m)', toBase: v => v, fromBase: v => v },
      { name: 'Kilometer (km)', toBase: v => v * 1000, fromBase: v => v / 1000 },
      { name: 'Centimeter (cm)', toBase: v => v / 100, fromBase: v => v * 100 },
      { name: 'Millimeter (mm)', toBase: v => v / 1000, fromBase: v => v * 1000 },
      { name: 'Mile (mi)', toBase: v => v * 1609.344, fromBase: v => v / 1609.344 },
      { name: 'Yard (yd)', toBase: v => v * 0.9144, fromBase: v => v / 0.9144 },
      { name: 'Foot (ft)', toBase: v => v * 0.3048, fromBase: v => v / 0.3048 },
      { name: 'Inch (in)', toBase: v => v * 0.0254, fromBase: v => v / 0.0254 },
    ],
  },
  mass: {
    label: 'Mass / Weight',
    units: [
      { name: 'Kilogram (kg)', toBase: v => v, fromBase: v => v },
      { name: 'Gram (g)', toBase: v => v / 1000, fromBase: v => v * 1000 },
      { name: 'Milligram (mg)', toBase: v => v / 1e6, fromBase: v => v * 1e6 },
      { name: 'Pound (lb)', toBase: v => v * 0.453592, fromBase: v => v / 0.453592 },
      { name: 'Ounce (oz)', toBase: v => v * 0.0283495, fromBase: v => v / 0.0283495 },
      { name: 'Metric Ton (t)', toBase: v => v * 1000, fromBase: v => v / 1000 },
    ],
  },
  temperature: {
    label: 'Temperature',
    units: [
      { name: 'Celsius (°C)', toBase: v => v + 273.15, fromBase: v => v - 273.15 },
      { name: 'Fahrenheit (°F)', toBase: v => (v + 459.67) * 5 / 9, fromBase: v => v * 9 / 5 - 459.67 },
      { name: 'Kelvin (K)', toBase: v => v, fromBase: v => v },
    ],
  },
  area: {
    label: 'Area',
    units: [
      { name: 'Square Meter (m²)', toBase: v => v, fromBase: v => v },
      { name: 'Square Kilometer (km²)', toBase: v => v * 1e6, fromBase: v => v / 1e6 },
      { name: 'Square Foot (ft²)', toBase: v => v * 0.0929, fromBase: v => v / 0.0929 },
      { name: 'Acre', toBase: v => v * 4046.86, fromBase: v => v / 4046.86 },
      { name: 'Hectare (ha)', toBase: v => v * 1e4, fromBase: v => v / 1e4 },
    ],
  },
  volume: {
    label: 'Volume',
    units: [
      { name: 'Liter (L)', toBase: v => v, fromBase: v => v },
      { name: 'Milliliter (mL)', toBase: v => v / 1000, fromBase: v => v * 1000 },
      { name: 'Cubic Meter (m³)', toBase: v => v * 1000, fromBase: v => v / 1000 },
      { name: 'Gallon (US)', toBase: v => v * 3.78541, fromBase: v => v / 3.78541 },
      { name: 'Fluid Ounce (fl oz)', toBase: v => v * 0.0295735, fromBase: v => v / 0.0295735 },
      { name: 'Cup (US)', toBase: v => v * 0.236588, fromBase: v => v / 0.236588 },
    ],
  },
  speed: {
    label: 'Speed',
    units: [
      { name: 'Meters/Second (m/s)', toBase: v => v, fromBase: v => v },
      { name: 'Kilometers/Hour (km/h)', toBase: v => v / 3.6, fromBase: v => v * 3.6 },
      { name: 'Miles/Hour (mph)', toBase: v => v * 0.44704, fromBase: v => v / 0.44704 },
      { name: 'Knot', toBase: v => v * 0.514444, fromBase: v => v / 0.514444 },
    ],
  },
};

export default function UnitConverterPage() {
  const [category, setCategory] = useState<Category>('length');
  const [fromUnit, setFromUnit] = useState(0);
  const [toUnit, setToUnit] = useState(1);
  const [value, setValue] = useState('1');

  const units = UNITS[category].units;
  const fromU = units[fromUnit] ?? units[0];
  const toU = units[toUnit] ?? units[1];
  const numVal = parseFloat(value);
  const result = !isNaN(numVal) ? toU.fromBase(fromU.toBase(numVal)) : null;

  function swap() { const tmp = fromUnit; setFromUnit(toUnit); setToUnit(tmp); }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {(Object.entries(UNITS) as [Category, { label: string }][]).map(([key, val]) => (
          <button key={key} onClick={() => { setCategory(key); setFromUnit(0); setToUnit(1); }}
            className={`py-2 px-3 sm:px-4 rounded-lg border-2 text-xs sm:text-sm font-medium transition-all ${category === key ? 'bg-slate-800 dark:bg-slate-200 border-slate-800 dark:border-slate-200 text-white dark:text-slate-800' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-slate-400'}`}>
            {val.label}
          </button>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-7 shadow-lg border border-slate-200 dark:border-slate-800">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Value</label>
          <input type="number" value={value} onChange={e => setValue(e.target.value)}
            className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-base sm:text-lg focus:outline-none focus:border-slate-500" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-center mb-5">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">From</label>
            <select value={fromUnit} onChange={e => setFromUnit(Number(e.target.value))}
              className="w-full px-3 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-slate-500 appearance-none">
              {units.map((u, i) => <option key={u.name} value={i}>{u.name}</option>)}
            </select>
          </div>
          <button onClick={swap} className="mt-4 sm:mt-4 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-500 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-800 transition-all">
            <i className="fas fa-exchange-alt text-sm" />
          </button>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">To</label>
            <select value={toUnit} onChange={e => setToUnit(Number(e.target.value))}
              className="w-full px-3 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-slate-500 appearance-none">
              {units.map((u, i) => <option key={u.name} value={i}>{u.name}</option>)}
            </select>
          </div>
        </div>

        {result !== null && (
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-5 sm:p-6 text-center border border-slate-200 dark:border-slate-600">
            <div className="text-xs sm:text-sm text-slate-400 mb-2">{value} {fromU.name} =</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-1">
              {result.toPrecision(8).replace(/\.?0+$/, '')}
            </div>
            <div className="text-sm text-slate-400">{toU.name}</div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <Link href="/conversion" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Conversion Calculators
        </Link>
      </div>
    </div>
  );
}
