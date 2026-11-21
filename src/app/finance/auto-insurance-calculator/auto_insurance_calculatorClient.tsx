"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import CalculatorActions from "@/components/CalculatorActions";
import Link from "next/link";
import { useCurrency } from "@/hooks/useCurrency";

// ─── shared sub-components (mirrored from other calculators) ─────────────────

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  sub?: string;
}

function Label({ children, htmlFor, sub }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-slate-500 dark:text-slate-400 mb-1.5"
    >
      {children}
      {sub && (
        <span className="ml-1.5 font-normal normal-case text-slate-400 dark:text-slate-400">
          {sub}
        </span>
      )}
    </label>
  );
}

interface NumInputProps {
  id: string;
  label: string;
  sub?: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
  min?: string;
  max?: string;
}

function NumInput({
  id,
  label,
  sub,
  value,
  onChange,
  prefix,
  suffix,
  step = "any",
  min = "0",
  max,
}: NumInputProps) {
  return (
    <div>
      <Label htmlFor={id} sub={sub}>
        {label}
      </Label>
      <div className="relative group">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-sm font-semibold text-slate-400 dark:text-slate-400 group-focus-within:text-indigo-500 transition-colors">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            if (!isNaN(v)) onChange(v);
          }}
          className={`w-full h-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 hover:border-slate-200 dark:hover:border-slate-600 ${prefix ? "pl-8" : "pl-3"} ${suffix ? "pr-10" : "pr-3"}`}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-sm font-medium text-slate-400 dark:text-slate-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

interface SliderProps {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format?: (v: number) => string;
}

function Slider({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: SliderProps) {
  const raw = Math.min(Math.max(value, min), max);
  const pct = max > min ? ((raw - min) / (max - min)) * 100 : 0;
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5">
        <Label htmlFor={id}>{label}</Label>
        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tabular-nums">
          {format ? format(raw) : raw}
        </span>
      </div>
      <div className="relative h-5 flex items-center">
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-slate-200 dark:bg-slate-900" />
        <div
          className="absolute left-0 h-1.5 rounded-full bg-indigo-500"
          style={{ width: `${pct}%` }}
        />
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={raw}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-valuenow={raw}
          aria-valuemin={min}
          aria-valuemax={max}
        />
        <div
          className="absolute w-4 h-4 rounded-full bg-indigo-500 shadow-md border-2 border-white dark:border-slate-900 pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
    </div>
  );
}

interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
}

function SectionCard({ children, className = "" }: SectionCardProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

type SectionHeadColor = "indigo" | "amber" | "emerald" | "violet";

interface SectionHeadProps {
  icon: string;
  title: string;
  color?: SectionHeadColor;
}

function SectionHead({ icon, title, color = "indigo" }: SectionHeadProps) {
  const colors: Record<SectionHeadColor, string> = {
    indigo:
      "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
    amber:
      "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    emerald:
      "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    violet:
      "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400",
  };
  return (
    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-100 dark:border-slate-800/60">
      <span
        className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${colors[color]}`}
      >
        {icon}
      </span>
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        {title}
      </span>
    </div>
  );
}

interface StatPillProps {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}

function StatPill({ label, value, sub, accent = false }: StatPillProps) {
  return (
    <div
      className={`rounded-xl px-4 py-3 ${accent ? "bg-indigo-50 dark:bg-indigo-900/20" : "bg-slate-50 dark:bg-slate-900/40"}`}
    >
      <div className="text-[10px] font-semibold uppercase tracking-[0.09em] text-slate-500 dark:text-slate-400 mb-0.5">
        {label}
      </div>
      <div
        className={`text-lg font-bold tabular-nums ${accent ? "text-indigo-600 dark:text-indigo-400" : "text-slate-800 dark:text-slate-100"}`}
      >
        {value}
      </div>
      {sub && (
        <div className="text-[10px] text-slate-400 dark:text-slate-400 mt-0.5">
          {sub}
        </div>
      )}
    </div>
  );
}

interface PremiumDonutProps {
  liability: number;
  collision: number;
  comprehensive: number;
  uninsured: number;
}

function PremiumDonut({
  liability,
  collision,
  comprehensive,
  uninsured,
}: PremiumDonutProps) {
  const { fmt, fmtShort } = useCurrency();
  const total = liability + collision + comprehensive + uninsured;
  if (total <= 0) return null;
  const p1 = (liability / total) * 100;
  const p2 = (collision / total) * 100;
  const p3 = (comprehensive / total) * 100;
  const p4 = (uninsured / total) * 100;

  const r = 54;
  const circ = 2 * Math.PI * r;
  const gap = 1.5;
  const d1 = (p1 / 100) * circ;
  const d2 = (p2 / 100) * circ;
  const d3 = (p3 / 100) * circ;
  const d4 = (p4 / 100) * circ;

  const off1 = 0;
  const off2 = -(d1 + gap * 1.5);
  const off3 = -(d1 + d2 + gap * 2.5);
  const off4 = -(d1 + d2 + d3 + gap * 3.5);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-5">
      <div
        className="relative flex-shrink-0"
        style={{ width: 140, height: 140 }}
      >
        <svg viewBox="0 0 130 130" className="w-full h-full -rotate-90">
          <circle
            cx="65"
            cy="65"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="14"
            className="text-slate-100 dark:text-slate-800"
          />
          {p1 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#6366f1"
              strokeWidth="14"
              strokeDasharray={`${d1 - gap} ${circ - d1 + gap}`}
              strokeDashoffset={off1}
            />
          )}
          {p2 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#10b981"
              strokeWidth="14"
              strokeDasharray={`${d2 - gap} ${circ - d2 + gap}`}
              strokeDashoffset={off2}
            />
          )}
          {p3 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="14"
              strokeDasharray={`${d3 - gap} ${circ - d3 + gap}`}
              strokeDashoffset={off3}
            />
          )}
          {p4 > 0 && (
            <circle
              cx="65"
              cy="65"
              r={r}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="14"
              strokeDasharray={`${d4 - gap} ${circ - d4 + gap}`}
              strokeDashoffset={off4}
            />
          )}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Total Annual
          </span>
          <span className="text-base font-bold text-slate-800 dark:text-slate-100 tabular-nums">
            {fmtShort(total)}
          </span>
        </div>
      </div>
      <div className="space-y-3 flex-1 min-w-0 w-full">
        {[
          {
            color: "bg-indigo-500",
            label: "Liability",
            val: liability,
            pct: p1,
          },
          {
            color: "bg-emerald-500",
            label: "Collision",
            val: collision,
            pct: p2,
          },
          {
            color: "bg-amber-400",
            label: "Comprehensive",
            val: comprehensive,
            pct: p3,
          },
          {
            color: "bg-violet-500",
            label: "Uninsured Motorist",
            val: uninsured,
            pct: p4,
          },
        ]
          .filter((x) => x.pct > 0)
          .map(({ color, label, val, pct }) => (
            <div key={label}>
              <div className="flex justify-between text-xs mb-0.5">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${color}`}
                  />
                  <span className="text-slate-800 dark:text-slate-400 font-medium">
                    {label}
                  </span>
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-100 tabular-nums">
                  {fmt(val, 0)}
                </span>
              </div>
              <div className="h-1 rounded-full bg-slate-50 dark:bg-slate-900">
                <div
                  className={`h-full rounded-full ${color} transition-all duration-500`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

// ─── main export ──────────────────────────────────────────────────────────────

export default function AutoInsuranceCalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.driverAge !== undefined) setDriverAge(data.driverAge);
          if (data.drivingExperience !== undefined) setDrivingExperience(data.drivingExperience);
          if (data.creditScore !== undefined) setCreditScore(data.creditScore);
          if (data.vehicleYear !== undefined) setVehicleYear(data.vehicleYear);
          if (data.vehicleType !== undefined) setVehicleType(data.vehicleType);
          if (data.annualMileage !== undefined) setAnnualMileage(data.annualMileage);
          if (data.coverageLevel !== undefined) setCoverageLevel(data.coverageLevel);
          if (data.deductible !== undefined) setDeductible(data.deductible);
          if (data.accidents !== undefined) setAccidents(data.accidents);
          if (data.violations !== undefined) setViolations(data.violations);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [driverAge, setDriverAge] = useState(30);
  const [drivingExperience, setDrivingExperience] = useState(10);
  const [creditScore, setCreditScore] = useState("good");
  const [vehicleYear, setVehicleYear] = useState(new Date().getFullYear());
  const [vehicleType, setVehicleType] = useState("sedan");
  const [annualMileage, setAnnualMileage] = useState(12000);
  const [coverageLevel, setCoverageLevel] = useState("standard");
  const [deductible, setDeductible] = useState(500);
  const [accidents, setAccidents] = useState(0);
  const [violations, setViolations] = useState(0);

  // Reactive calculation using useMemo
  const result = useMemo(() => {
    // US national average base rate for full coverage (standardized baseline)
    const baseRate = 1200;

    // Age factor
    const ageFactor =
      driverAge < 21
        ? 2.2
        : driverAge < 25
          ? 1.6
          : driverAge < 35
            ? 1.2
            : driverAge < 65
              ? 1.0
              : 1.15;

    // Experience factor
    const experienceFactor =
      drivingExperience < 3 ? 1.4 : drivingExperience < 5 ? 1.2 : 1.0;

    // Credit Score factor (Huge impact in the US)
    const creditFactors: Record<string, number> = {
      excellent: 0.8,
      good: 1.0,
      fair: 1.3,
      poor: 1.7,
    };
    const creditFactor = creditFactors[creditScore] || 1.0;

    // Vehicle type factor
    const vehicleFactors: Record<string, number> = {
      sedan: 1.0,
      suv: 1.1,
      truck: 1.15,
      sports: 1.6,
      luxury: 1.5,
      hybrid: 1.1,
      electric: 1.25, // EVs generally have higher repair costs in the US
    };
    const vehicleFactor = vehicleFactors[vehicleType] || 1.0;

    // Mileage factor
    const mileageFactor =
      annualMileage > 20000
        ? 1.25
        : annualMileage > 15000
          ? 1.1
          : annualMileage > 7500
            ? 1.0
            : 0.9;

    // Coverage level factor
    const coverageFactors: Record<string, number> = {
      minimum: 0.55, // Liability only
      standard: 1.0, // 50/100/50 + Comp/Coll
      premium: 1.4, // 100/300/100 + Comp/Coll
    };
    const coverageFactor = coverageFactors[coverageLevel] || 1.0;

    // Deductible factor (higher deductible = lower premium, only applies to collision/comp)
    const deductibleFactor =
      coverageLevel === "minimum"
        ? 1.0
        : deductible >= 1000
          ? 0.9
          : deductible >= 500
            ? 1.0
            : 1.1;

    // Accident/violation surcharge
    const incidentFactor = 1 + accidents * 0.4 + violations * 0.25;

    // Calculate un-discounted annual premium
    const rawAnnual =
      baseRate *
      ageFactor *
      experienceFactor *
      creditFactor *
      vehicleFactor *
      mileageFactor *
      coverageFactor *
      deductibleFactor *
      incidentFactor;

    // Apply safe driver discounts
    let discountPct = 0;
    if (drivingExperience > 5 && accidents === 0 && violations === 0)
      discountPct += 0.1;
    if (driverAge > 50 && driverAge < 70) discountPct += 0.05;

    const annualPremium = rawAnnual * (1 - discountPct);
    const monthlyPremium = annualPremium / 12;

    // Breakdown approximation (typical US breakdown)
    let liability = 0,
      collision = 0,
      comprehensive = 0,
      uninsured = 0;
    if (coverageLevel === "minimum") {
      liability = annualPremium * 0.9;
      uninsured = annualPremium * 0.1;
    } else {
      liability = annualPremium * 0.45;
      collision = annualPremium * 0.35;
      comprehensive = annualPremium * 0.12;
      uninsured = annualPremium * 0.08;
    }

    return {
      monthly: monthlyPremium,
      annual: annualPremium,
      breakdown: { liability, collision, comprehensive, uninsured },
      discounts: rawAnnual * discountPct,
    };
  }, [
    driverAge,
    drivingExperience,
    creditScore,
    vehicleYear,
    vehicleType,
    annualMileage,
    coverageLevel,
    deductible,
    accidents,
    violations,
  ]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* ── LEFT: Inputs ── */}
          <div className="space-y-4">
            {/* Driver Profile */}
            <SectionCard>
              <SectionHead icon="👤" title="Driver Profile" color="indigo" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <NumInput
                    id="driverAge"
                    label="Driver Age"
                    value={driverAge}
                    onChange={setDriverAge}
                    min="16"
                    max="100"
                    suffix="yrs"
                  />
                  <NumInput
                    id="drivingExperience"
                    label="Driving Experience"
                    value={drivingExperience}
                    onChange={setDrivingExperience}
                    min="0"
                    max="84"
                    suffix="yrs"
                  />
                  <div>
                    <Label
                      htmlFor="creditScore"
                      sub="(Highly impacts US rates)"
                    >
                      Credit Score
                    </Label>
                    <select
                      id="creditScore"
                      value={creditScore}
                      onChange={(e) => setCreditScore(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
                    >
                      <option value="excellent">Excellent (740-850)</option>
                      <option value="good">Good (670-739)</option>
                      <option value="fair">Fair (580-669)</option>
                      <option value="poor">Poor (300-579)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <Slider
                    id="sl-age"
                    label="Driver Age"
                    value={driverAge}
                    onChange={setDriverAge}
                    min={16}
                    max={80}
                    step={1}
                  />
                </div>
              </div>
            </SectionCard>

            {/* Vehicle Details */}
            <SectionCard>
              <SectionHead icon="🚗" title="Vehicle Details" color="emerald" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vehicleType">Vehicle Type</Label>
                    <select
                      id="vehicleType"
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                    >
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="truck">Pickup Truck</option>
                      <option value="sports">Sports Car</option>
                      <option value="luxury">Luxury Vehicle</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="electric">Electric (EV)</option>
                    </select>
                  </div>
                  <NumInput
                    id="vehicleYear"
                    label="Vehicle Year"
                    value={vehicleYear}
                    onChange={setVehicleYear}
                    min="1990"
                    max={(new Date().getFullYear() + 1).toString()}
                  />
                  <NumInput
                    id="annualMileage"
                    label="Annual Mileage"
                    value={annualMileage}
                    onChange={setAnnualMileage}
                    min="1000"
                    step="1000"
                    suffix="mi"
                  />
                </div>
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <Slider
                    id="sl-mileage"
                    label="Annual Mileage"
                    value={annualMileage}
                    onChange={setAnnualMileage}
                    min={2000}
                    max={30000}
                    step={1000}
                    format={(v) => v.toLocaleString() + " mi"}
                  />
                </div>
              </div>
            </SectionCard>

            {/* Coverage & History */}
            <SectionCard>
              <SectionHead icon="🛡️" title="Coverage & History" color="amber" />
              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="coverageLevel">Coverage Level</Label>
                    <select
                      id="coverageLevel"
                      value={coverageLevel}
                      onChange={(e) => setCoverageLevel(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                    >
                      <option value="minimum">
                        State Minimum (Liability Only)
                      </option>
                      <option value="standard">
                        Standard (50/100/50 + Full Cov)
                      </option>
                      <option value="premium">
                        Premium (100/300/100 + Full Cov)
                      </option>
                    </select>
                  </div>
                  {coverageLevel !== "minimum" && (
                    <div>
                      <Label htmlFor="deductible" sub="(Collision/Comp)">
                        Deductible
                      </Label>
                      <select
                        id="deductible"
                        value={deductible}
                        onChange={(e) => setDeductible(Number(e.target.value))}
                        className="w-full h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium text-slate-800 dark:text-slate-100 outline-none transition-all focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                      >
                        <option value="250">$250</option>
                        <option value="500">$500</option>
                        <option value="1000">$1,000</option>
                        <option value="2000">$2,000</option>
                      </select>
                    </div>
                  )}
                  <NumInput
                    id="accidents"
                    label="At-Fault Accidents"
                    sub="(Last 3 Years)"
                    value={accidents}
                    onChange={setAccidents}
                    min="0"
                    max="10"
                    step="1"
                  />
                  <NumInput
                    id="violations"
                    label="Traffic Violations"
                    sub="(Last 3 Years)"
                    value={violations}
                    onChange={setViolations}
                    min="0"
                    max="10"
                    step="1"
                  />
                </div>
              </div>
            </SectionCard>
          </div>

          {/* ── RIGHT: Results ── */}
          <div className="space-y-5">
            <SectionCard className="border-indigo-500/20 dark:border-indigo-400/20">
              <div className="bg-indigo-600 dark:bg-indigo-900/60 p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-200 mb-1">
                  Estimated Monthly Premium
                </div>
                <div className="text-4xl font-black tabular-nums tracking-tight mb-4">
                  {fmt(result.monthly)}
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-indigo-500 dark:border-indigo-800/60">
                  <div>
                    <div className="text-[10px] text-indigo-200 uppercase font-semibold">
                      Annual Total
                    </div>
                    <div className="font-bold tabular-nums">
                      {fmt(result.annual)}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-indigo-200 uppercase font-semibold">
                      Discounts Applied
                    </div>
                    <div className="font-bold tabular-nums">
                      {fmt(result.discounts)}
                    </div>
                  </div>
                </div>
              </div>
              <PremiumDonut
                liability={result.breakdown.liability}
                collision={result.breakdown.collision}
                comprehensive={result.breakdown.comprehensive}
                uninsured={result.breakdown.uninsured}
              />
            </SectionCard>

            <footer className="px-5 py-4 bg-slate-50/60 dark:bg-slate-900/40 rounded-2xl border border-slate-200/60 dark:border-slate-800">
              <p className="text-[11px] text-slate-400 dark:text-slate-400 leading-relaxed">
                <strong className="text-slate-500 dark:text-slate-400 font-semibold">
                  Disclaimer:
                </strong>{" "}
                For educational purposes only. Not a quote. Estimates are based
                on national US actuarial averages. Actual premiums vary heavily
                by state, zip code, and individual insurance providers. Note
                that certain US states (e.g., CA, HI, MA, MI) prohibit the use
                of credit scores in determining auto insurance rates. Consult
                licensed insurance agents for exact quotes.
              </p>
            </footer>
          </div>
        </div>
      
        <CalculatorActions
          calculatorId="auto-insurance-calculator"
          calculatorName="Auto Insurance Calculator"
          inputData={{ driverAge, drivingExperience, creditScore, vehicleYear, vehicleType, annualMileage, coverageLevel, deductible, accidents, violations }}
          resultData={result || {}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}