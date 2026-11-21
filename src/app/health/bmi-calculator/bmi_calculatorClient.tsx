"use client";

import { useState } from "react";
import Link from "next/link";

type UnitSystem = "imperial" | "metric";
type Gender = "male" | "female";

interface BMIResult {
  bmi: number;
  category: string;
  risk: string;
  color: string;
  idealWeight: string;
  healthyRange: string;
}

function getBMICategory(bmi: number): {
  name: string;
  risk: string;
  color: string;
} {
  if (bmi < 18.5)
    return {
      name: "Underweight",
      risk: "Low (health risks from underweight)",
      color: "#3b82f6",
    };
  if (bmi < 25)
    return { name: "Normal Weight", risk: "Very Low", color: "#10b981" };
  if (bmi < 30)
    return { name: "Overweight", risk: "Moderate", color: "#f59e0b" };
  return { name: "Obese", risk: "High", color: "#ef4444" };
}

function getNeedleAngle(bmi: number): number {
  const min = 15,
    max = 40;
  const clamped = Math.max(min, Math.min(max, bmi));
  return ((clamped - min) / (max - min)) * 180 - 90;
}

export default function BMICalculatorPage() {
  const [unit, setUnit] = useState<UnitSystem>("imperial");
  const [gender, setGender] = useState<Gender>("male");
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(9);
  const [heightCm, setHeightCm] = useState(175);
  const [weight, setWeight] = useState(160);
  const [age, setAge] = useState(30);
  const [result, setResult] = useState<BMIResult | null>(null);

  function calculate() {
    let bmi: number;
    let idealW: string, healthyR: string;

    if (unit === "imperial") {
      const totalIn = heightFt * 12 + heightIn;
      if (!totalIn) return;
      bmi = (weight / (totalIn * totalIn)) * 703;
      const minW = (18.5 * totalIn * totalIn) / 703;
      const maxW = (24.9 * totalIn * totalIn) / 703;
      const idealWV = (21.7 * totalIn * totalIn) / 703;
      idealW = `${Math.round(idealWV)} lbs`;
      healthyR = `${Math.round(minW)} – ${Math.round(maxW)} lbs`;
    } else {
      const hm = heightCm / 100;
      if (!hm) return;
      bmi = weight / (hm * hm);
      const minW = 18.5 * hm * hm;
      const maxW = 24.9 * hm * hm;
      const idealWV = 21.7 * hm * hm;
      idealW = `${Math.round(idealWV)} kg`;
      healthyR = `${Math.round(minW)} – ${Math.round(maxW)} kg`;
    }

    bmi = Math.round(bmi * 10) / 10;
    const cat = getBMICategory(bmi);
    setResult({
      bmi,
      category: cat.name,
      risk: cat.risk,
      color: cat.color,
      idealWeight: idealW,
      healthyRange: healthyR,
    });
  }

  const needleAngle = result ? getNeedleAngle(result.bmi) : -90;

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8 pb-16">
    

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Input Panel */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
            <i className="fas fa-edit text-emerald-500" aria-hidden="true" />{" "}
            Enter Your Details
          </h2>

          {/* Unit Toggle */}
          <div className="flex bg-slate-50 dark:bg-slate-900 rounded-xl p-1 mb-6">
            {(["imperial", "metric"] as const).map((u) => (
              <button
                key={u}
                onClick={() => {
                  setUnit(u);
                  setResult(null);
                }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  unit === u
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                {u === "imperial" ? "US Units (ft/in, lbs)" : "Metric (cm, kg)"}
              </button>
            ))}
          </div>

          {/* Height */}
          {unit === "imperial" ? (
            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Height
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <input
                    type="number"
                    value={heightFt}
                    min={2}
                    max={8}
                    onChange={(e) => setHeightFt(Number(e.target.value))}
                    className="w-full px-4 py-3 pr-12 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                    ft
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={heightIn}
                    min={0}
                    max={11}
                    onChange={(e) => setHeightIn(Number(e.target.value))}
                    className="w-full px-4 py-3 pr-12 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                    in
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-5">
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Height
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={heightCm}
                  min={100}
                  max={250}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full px-4 py-3 pr-12 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  cm
                </span>
              </div>
            </div>
          )}

          {/* Weight */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Weight
            </label>
            <div className="relative">
              <input
                type="number"
                value={weight}
                min={30}
                max={700}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                {unit === "imperial" ? "lbs" : "kg"}
              </span>
            </div>
          </div>

          {/* Gender */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Gender
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(["male", "female"] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`py-3 px-4 rounded-xl border-2 font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                    gender === g
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-emerald-300"
                  }`}
                >
                  <i className={`fas fa-${g}`} aria-hidden="true" />
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Age */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Age
            </label>
            <div className="relative">
              <input
                type="number"
                value={age}
                min={18}
                max={120}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-4 py-3 pr-16 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                years
              </span>
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full py-4 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 text-base"
          >
            <i className="fas fa-calculator" aria-hidden="true" /> Calculate BMI
          </button>
        </section>

        {/* Results Panel */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
            <i
              className="fas fa-chart-line text-emerald-500"
              aria-hidden="true"
            />{" "}
            BMI Results
          </h2>

          {/* BMI Value Display */}
          <div className="text-center mb-6">
            <div
              className="text-6xl font-extrabold mb-1"
              style={{
                background: "linear-gradient(135deg, #059669, #2563eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {result ? result.bmi.toFixed(1) : "--.--"}
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">
              Body Mass Index
            </div>
            <div
              className="text-lg font-semibold"
              style={{ color: result?.color ?? "#64748b" }}
            >
              {result ? result.category : "Enter details to calculate"}
            </div>
          </div>

          {/* Semi-circular scale */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 mb-5 border-2 border-slate-200 dark:border-slate-800">
            <div className="text-center text-sm font-semibold text-slate-800 dark:text-slate-400 mb-3">
              Weighing Machine Scale
            </div>
            <div
              className="relative mx-auto"
              style={{ width: 280, height: 160 }}
            >
              {/* Arc background */}
              <div
                className="absolute"
                style={{
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 280,
                  height: 140,
                  borderRadius: "140px 140px 0 0",
                  background:
                    "conic-gradient(from -90deg at 50% 100%, #3b82f6 0deg 63deg, #10b981 63deg 126deg, #f59e0b 126deg 189deg, #ef4444 189deg 252deg, transparent 252deg 360deg)",
                }}
              />
              {/* Inner cutout */}
              <div
                className="absolute bg-slate-50 dark:bg-slate-900"
                style={{
                  top: 15,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 240,
                  height: 120,
                  borderRadius: "120px 120px 0 0",
                  background: "inherit",
                }}
              />
              {/* Needle */}
              <div
                className="absolute"
                style={{
                  bottom: 0,
                  left: "50%",
                  width: 3,
                  height: 120,
                  background: "#dc2626",
                  borderRadius: 2,
                  transformOrigin: "bottom center",
                  transform: `translateX(-50%) rotate(${needleAngle}deg)`,
                  transition: "transform 0.8s cubic-bezier(0.34,1.56,0.64,1)",
                  zIndex: 2,
                }}
              />
              {/* Pivot */}
              <div
                className="absolute"
                style={{
                  bottom: -6,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 14,
                  height: 14,
                  background: "#dc2626",
                  borderRadius: "50%",
                  zIndex: 3,
                  border: "2px solid #f8fafc",
                }}
              />
            </div>

            {/* Category labels */}
            <div className="grid grid-cols-4 gap-1 mt-3 text-center">
              {[
                { label: "Underweight", range: "< 18.5", color: "#3b82f6" },
                { label: "Normal", range: "18.5-24.9", color: "#10b981" },
                { label: "Overweight", range: "25-29.9", color: "#f59e0b" },
                { label: "Obese", range: "30+", color: "#ef4444" },
              ].map((c) => (
                <div key={c.label}>
                  <span
                    className="block text-[10px] font-bold"
                    style={{ color: c.color }}
                  >
                    {c.label}
                  </span>
                  <span className="block text-[10px] text-slate-400">
                    {c.range}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                {result ? result.bmi.toFixed(1) : "--"}
              </div>
              <div className="text-xs text-slate-400">Current BMI Value</div>
            </div>
          </div>

          {/* Health Info */}
          {result && (
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Healthy Weight Range",
                  items: [
                    { label: "Ideal Weight", value: result.idealWeight },
                    { label: "Healthy Range", value: result.healthyRange },
                  ],
                },
                {
                  title: "Health Status",
                  items: [
                    { label: "Category", value: result.category },
                    { label: "Risk Level", value: result.risk },
                  ],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600"
                >
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">
                    {card.title}
                  </h3>
                  {card.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center mb-1"
                    >
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {item.label}:
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Info section */}
      <article className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-800 mb-8">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          About BMI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
              What is BMI?
            </h3>
            <p>
              BMI (Body Mass Index) is calculated as weight divided by height
              squared. For US units: BMI = (weight in lbs × 703) ÷ (height in
              inches)². It&apos;s a screening tool used by the CDC to assess
              weight categories.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
              CDC Categories
            </h3>
            <ul className="space-y-1">
              <li>
                <span className="text-blue-500 font-semibold">
                  Underweight:
                </span>{" "}
                BMI &lt; 18.5
              </li>
              <li>
                <span className="text-emerald-500 font-semibold">Normal:</span>{" "}
                BMI 18.5 – 24.9
              </li>
              <li>
                <span className="text-amber-500 font-semibold">
                  Overweight:
                </span>{" "}
                BMI 25 – 29.9
              </li>
              <li>
                <span className="text-red-500 font-semibold">Obese:</span> BMI ≥
                30
              </li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-400 dark:text-slate-400 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <strong>Disclaimer:</strong> This BMI calculator provides estimates
          for informational purposes only. Consult a healthcare professional for
          medical advice.
        </p>
      </article>

      <div className="text-center">
        <Link
          href="/health"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
