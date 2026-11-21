"use client";

import { useState } from "react";
import Link from "next/link";

type TempUnit = "Celsius" | "Fahrenheit" | "Kelvin";

function convertTemp(value: number, from: TempUnit, to: TempUnit): number {
  if (from === to) return value;

  let c: number;
  // Convert 'from' to Celsius
  if (from === "Celsius") c = value;
  else if (from === "Fahrenheit") c = ((value - 32) * 5) / 9;
  else c = value - 273.15; // Kelvin

  // Convert Celsius to 'to'
  if (to === "Celsius") return c;
  else if (to === "Fahrenheit") return (c * 9) / 5 + 32;
  else return c + 273.15; // Kelvin
}

export default function TemperatureConverterPage() {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<TempUnit>("Celsius");
  const [toUnit, setToUnit] = useState<TempUnit>("Fahrenheit");
  const [result, setResult] = useState<number | null>(32); // 0 C = 32 F initial

  function calculate() {
    const res = convertTemp(value, fromUnit, toUnit);
    setResult(Math.round(res * 1000) / 1000);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10">
        {/* Input Panel */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 sm:mb-6 flex items-center gap-2">
            <i className="fas fa-edit text-orange-500" aria-hidden="true" />{" "}
            Enter Temperature
          </h2>

          {/* Temperature Value */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Value to Convert
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* From Unit */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                From
              </label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value as TempUnit)}
                className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-orange-500"
              >
                <option value="Celsius">Celsius (°C)</option>
                <option value="Fahrenheit">Fahrenheit (°F)</option>
                <option value="Kelvin">Kelvin (K)</option>
              </select>
            </div>

            {/* To Unit */}
            <div>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                To
              </label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value as TempUnit)}
                className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-orange-500"
              >
                <option value="Celsius">Celsius (°C)</option>
                <option value="Fahrenheit">Fahrenheit (°F)</option>
                <option value="Kelvin">Kelvin (K)</option>
              </select>
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full py-3.5 sm:py-4 bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200 text-sm sm:text-base"
          >
            <i className="fas fa-calculator" aria-hidden="true" /> Convert
          </button>
        </section>

        {/* Results Panel */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center">
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 sm:mb-6 flex items-center justify-center gap-2">
            <i
              className="fas fa-thermometer-half text-orange-500"
              aria-hidden="true"
            />{" "}
            Result
          </h2>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 sm:p-8 border-2 border-slate-200 dark:border-slate-800 mb-5">
            <div
              className="text-4xl sm:text-5xl font-extrabold mb-4"
              style={{ color: "#ef4444" }}
            >
              {result !== null ? result : "--"}{" "}
              {toUnit === "Kelvin" ? "K" : `°${toUnit.charAt(0)}`}
            </div>
            <div className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
              {value} {fromUnit === "Kelvin" ? "K" : `°${fromUnit.charAt(0)}`} ={" "}
              {result} {toUnit === "Kelvin" ? "K" : `°${toUnit.charAt(0)}`}
            </div>
          </div>
        </section>
      </div>

      {/* Info section */}
      <article className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800 mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          About Temperature Conversion
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Celsius (°C)
            </h3>
            <p>
              The degree Celsius is a unit of temperature on the Celsius scale,
              originally known as the centigrade scale. Water freezes at 0°C and
              boils at 100°C.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Fahrenheit (°F)
            </h3>
            <p>
              The Fahrenheit scale is a temperature scale based on one proposed
              in 1724 by the physicist Daniel Gabriel Fahrenheit. Water freezes
              at 32°F and boils at 212°F.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Kelvin (K)
            </h3>
            <p>
              The Kelvin is the base unit of temperature in the International
              System of Units. 0 K is absolute zero, the lowest possible
              temperature.
            </p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Common Formulas
          </h3>
          <ul className="list-disc list-inside text-sm text-slate-500 dark:text-slate-400 space-y-1">
            <li>
              <strong>Celsius to Fahrenheit:</strong> (°C × 9/5) + 32 = °F
            </li>
            <li>
              <strong>Fahrenheit to Celsius:</strong> (°F - 32) × 5/9 = °C
            </li>
            <li>
              <strong>Celsius to Kelvin:</strong> °C + 273.15 = K
            </li>
            <li>
              <strong>Kelvin to Celsius:</strong> K - 273.15 = °C
            </li>
          </ul>
        </div>
      </article>

      <div className="text-center">
        <Link
          href="/conversion"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" /> All Conversion Calculators
        </Link>
      </div>
    </div>
  );
}
