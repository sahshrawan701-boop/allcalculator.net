"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { useCurrency } from "@/hooks/useCurrency";

// ─── Number Formatting Helpers ────────────────────────────────────────────────

function fmtNum(n: number, dp = 0): string {
  if (!isFinite(n) || isNaN(n)) return "0";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  });
}

function fmtPct(n: number, dp = 1): string {
  if (!isFinite(n) || isNaN(n)) return "0%";
  return n.toFixed(dp) + "%";
}

// ─── Industry Presets ─────────────────────────────────────────────────────────

interface Preset {
  id: string;
  name: string;
  icon: string;
  fixedCosts: number;
  variableCostPerUnit: number;
  sellingPricePerUnit: number;
  targetProfit: number;
  salesQuantity: number;
  unitLabel: string;
}

const PRESETS: Preset[] = [
  {
    id: "custom",
    name: "Default Example",
    icon: "fa-sliders",
    fixedCosts: 5000,
    variableCostPerUnit: 25,
    sellingPricePerUnit: 50,
    targetProfit: 2500,
    salesQuantity: 250,
    unitLabel: "units",
  },
  {
    id: "cafe",
    name: "Coffee Shop",
    icon: "fa-mug-hot",
    fixedCosts: 4500,
    variableCostPerUnit: 1.25,
    sellingPricePerUnit: 4.75,
    targetProfit: 3000,
    salesQuantity: 2000,
    unitLabel: "cups",
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: "fa-cart-shopping",
    fixedCosts: 3200,
    variableCostPerUnit: 16,
    sellingPricePerUnit: 48,
    targetProfit: 4000,
    salesQuantity: 200,
    unitLabel: "orders",
  },
  {
    id: "saas",
    name: "SaaS / Software",
    icon: "fa-cloud",
    fixedCosts: 12000,
    variableCostPerUnit: 2.5,
    sellingPricePerUnit: 29,
    targetProfit: 10000,
    salesQuantity: 800,
    unitLabel: "subscribers",
  },
  {
    id: "consulting",
    name: "Consulting",
    icon: "fa-user-tie",
    fixedCosts: 4000,
    variableCostPerUnit: 20,
    sellingPricePerUnit: 125,
    targetProfit: 8000,
    salesQuantity: 80,
    unitLabel: "hours",
  },
  {
    id: "bakery",
    name: "Bakery",
    icon: "fa-cake-candles",
    fixedCosts: 2800,
    variableCostPerUnit: 2.2,
    sellingPricePerUnit: 6,
    targetProfit: 2000,
    salesQuantity: 1200,
    unitLabel: "items",
  },
];

// ─── Sub-Components ───────────────────────────────────────────────────────────

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-all duration-200 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

function CardHead({
  icon,
  title,
  subtitle,
  badge,
  color = "indigo",
}: {
  icon: string;
  title: string;
  subtitle?: string;
  badge?: string;
  color?: "indigo" | "emerald" | "amber" | "violet" | "rose";
}) {
  const colors = {
    indigo:
      "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-800/50",
    emerald:
      "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800/50",
    amber:
      "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800/50",
    violet:
      "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-800/50",
    rose:
      "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-800/50",
  };

  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800/70">
      <div className="flex items-center gap-3">
        <span
          className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm border ${colors[color]}`}
        >
          <i className={`fas ${icon}`} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {badge && (
        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
          {badge}
        </span>
      )}
    </div>
  );
}

function DualInput({
  id,
  label,
  sub,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
  max = 100000,
  step = 1,
  sliderStep = 1,
  error,
}: {
  id: string;
  label: string;
  sub?: string;
  value: number | "";
  onChange: (v: number | "") => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  sliderStep?: number;
  error?: string;
}) {
  const [local, setLocal] = useState(value === "" ? "" : String(value));

  useEffect(() => {
    setLocal(value === "" ? "" : String(value));
  }, [value]);

  const numVal = typeof value === "number" ? value : 0;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="text-xs font-semibold text-slate-700 dark:text-slate-200"
        >
          {label}
        </label>
        {sub && (
          <span className="text-[11px] text-slate-400 dark:text-slate-400">
            {sub}
          </span>
        )}
      </div>

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
          step={step}
          value={local}
          onChange={(e) => {
            const text = e.target.value;
            setLocal(text);
            if (text === "") {
              onChange("");
            } else {
              const v = parseFloat(text);
              if (!isNaN(v)) onChange(v);
            }
          }}
          onBlur={() => {
            if (local === "") {
              if (id === "salesQuantity" || id === "targetProfit") {
                onChange(id === "salesQuantity" ? "" : 0);
              } else {
                onChange(min);
                setLocal(String(min));
              }
              return;
            }
            const v = parseFloat(local);
            if (!isNaN(v)) {
              onChange(v);
              setLocal(String(v));
            } else {
              setLocal(value === "" ? "" : String(value));
            }
          }}
          className={`w-full h-11 rounded-xl border ${
            error
              ? "border-rose-300 dark:border-rose-700 focus:ring-rose-500/20 focus:border-rose-500"
              : "border-slate-200 dark:border-slate-700/80 focus:ring-indigo-500/20 focus:border-indigo-500"
          } bg-white dark:bg-slate-900 text-sm font-semibold text-slate-900 dark:text-slate-100 placeholder-slate-400 outline-none transition-all focus:ring-4 hover:border-slate-300 dark:hover:border-slate-600 ${
            prefix ? "pl-8" : "pl-3.5"
          } ${suffix ? "pr-12" : "pr-3.5"}`}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-xs font-medium text-slate-400 dark:text-slate-400">
            {suffix}
          </span>
        )}
      </div>

      {/* Synchronized Range Slider */}
      <div className="pt-1 px-1">
        <input
          type="range"
          min={min}
          max={max}
          step={sliderStep}
          value={Math.min(Math.max(numVal, min), max)}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            onChange(v);
          }}
          className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:accent-indigo-500 focus:outline-none"
        />
      </div>

      {error && (
        <p className="text-[11px] text-rose-500 dark:text-rose-400 flex items-center gap-1 pt-0.5">
          <i className="fas fa-circle-exclamation text-[10px]" />
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Interactive SVG Break-Even Chart ─────────────────────────────────────────

function BreakEvenChart({
  fixedCosts,
  variableCostPerUnit,
  sellingPricePerUnit,
  breakEvenUnits,
  salesQuantity,
  symbol,
}: {
  fixedCosts: number;
  variableCostPerUnit: number;
  sellingPricePerUnit: number;
  breakEvenUnits: number;
  salesQuantity: number | "";
  symbol: string;
}) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Compute maximum units on X-axis (at least 2x BEP or 1.5x sales quantity)
  const userQty = typeof salesQuantity === "number" && salesQuantity > 0 ? salesQuantity : 0;
  const maxUnits = Math.max(breakEvenUnits * 2, userQty * 1.3, 100);
  const maxRevenue = maxUnits * sellingPricePerUnit;

  // Chart Dimensions
  const width = 640;
  const height = 300;
  const padL = 60;
  const padR = 30;
  const padT = 30;
  const padB = 40;

  const innerW = width - padL - padR;
  const innerH = height - padT - padB;

  const toX = (units: number) => padL + (units / maxUnits) * innerW;
  const toY = (val: number) => padT + innerH - (val / (maxRevenue || 1)) * innerH;

  // Points for curves
  const x0 = toX(0);
  const xMax = toX(maxUnits);

  // Fixed Costs line: horizontal from (0, FC) to (maxUnits, FC)
  const yFC = toY(fixedCosts);

  // Total Costs line: from (0, FC) to (maxUnits, FC + VC * maxUnits)
  const yTC_Start = toY(fixedCosts);
  const yTC_End = toY(fixedCosts + variableCostPerUnit * maxUnits);

  // Total Revenue line: from (0, 0) to (maxUnits, Price * maxUnits)
  const yTR_Start = toY(0);
  const yTR_End = toY(maxRevenue);

  // Break-even intersection point
  const xBEP = toX(breakEvenUnits);
  const yBEP = toY(breakEvenUnits * sellingPricePerUnit);

  // User planned volume marker
  const hasUserMarker = userQty > 0 && userQty <= maxUnits;
  const xUser = toX(userQty);
  const yUserRevenue = toY(userQty * sellingPricePerUnit);
  const yUserCost = toY(fixedCosts + userQty * variableCostPerUnit);

  // Loss polygon: triangle (0, FC) -> BEP -> (0, 0)
  const lossPoly = `${x0},${yFC} ${xBEP},${yBEP} ${x0},${yTR_Start}`;

  // Profit polygon: triangle BEP -> (xMax, yTR_End) -> (xMax, yTC_End)
  const profitPoly = `${xBEP},${yBEP} ${xMax},${yTR_End} ${xMax},${yTC_End}`;

  // Hover simulation
  const hoverUnits = hoverIndex !== null ? (hoverIndex / 100) * maxUnits : null;
  const hoverRev = hoverUnits !== null ? hoverUnits * sellingPricePerUnit : 0;
  const hoverCost = hoverUnits !== null ? fixedCosts + hoverUnits * variableCostPerUnit : 0;
  const hoverProfit = hoverRev - hoverCost;

  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-3">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1.5 font-medium text-indigo-600 dark:text-indigo-400">
            <span className="w-3 h-0.5 bg-indigo-500 rounded" /> Total Revenue
          </span>
          <span className="flex items-center gap-1.5 font-medium text-amber-600 dark:text-amber-400">
            <span className="w-3 h-0.5 bg-amber-500 rounded" /> Total Costs
          </span>
          <span className="flex items-center gap-1.5 font-medium text-slate-400 dark:text-slate-500">
            <span className="w-3 h-0.5 bg-slate-400 dark:bg-slate-500 border-dashed rounded" /> Fixed Costs
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-semibold">
          <span className="px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/50">
            Loss Area
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50">
            Profit Area
          </span>
        </div>
      </div>

      <div className="relative rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-2">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto select-none"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const relX = e.clientX - rect.left;
            const ratio = (relX - (padL / width) * rect.width) / ((innerW / width) * rect.width);
            if (ratio >= 0 && ratio <= 1) {
              setHoverIndex(Math.round(ratio * 100));
            } else {
              setHoverIndex(null);
            }
          }}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <defs>
            <linearGradient id="lossGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="profitGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct) => {
            const y = padT + innerH * pct;
            const revVal = (1 - pct) * maxRevenue;
            return (
              <g key={pct}>
                <line
                  x1={padL}
                  y1={y}
                  x2={width - padR}
                  y2={y}
                  stroke="currentColor"
                  className="text-slate-200 dark:text-slate-800"
                  strokeDasharray="3 3"
                />
                <text
                  x={padL - 8}
                  y={y + 4}
                  textAnchor="end"
                  className="text-[9px] fill-slate-400 dark:fill-slate-500 font-mono"
                >
                  {symbol}
                  {fmtNum(revVal >= 1000 ? Math.round(revVal / 1000) * 1000 : Math.round(revVal))}
                </text>
              </g>
            );
          })}

          {/* Shaded Areas */}
          <polygon points={lossPoly} fill="url(#lossGrad)" />
          <polygon points={profitPoly} fill="url(#profitGrad)" />

          {/* Fixed Cost Line */}
          <line
            x1={x0}
            y1={yFC}
            x2={xMax}
            y2={yFC}
            stroke="#94a3b8"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Total Cost Line */}
          <line
            x1={x0}
            y1={yTC_Start}
            x2={xMax}
            y2={yTC_End}
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Total Revenue Line */}
          <line
            x1={x0}
            y1={yTR_Start}
            x2={xMax}
            y2={yTR_End}
            stroke="#6366f1"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Break-Even Intersection Dot */}
          <g>
            <circle
              cx={xBEP}
              cy={yBEP}
              r="7"
              className="fill-indigo-600 dark:fill-indigo-400 stroke-white dark:stroke-slate-900"
              strokeWidth="2.5"
            />
            <circle
              cx={xBEP}
              cy={yBEP}
              r="12"
              className="stroke-indigo-500/40 fill-none animate-ping"
              strokeWidth="1.5"
            />
            {/* Label callout */}
            <rect
              x={Math.min(xBEP - 55, width - padR - 110)}
              y={Math.max(yBEP - 32, padT)}
              width="110"
              height="22"
              rx="6"
              className="fill-slate-900 dark:fill-white"
            />
            <text
              x={Math.min(xBEP, width - padR - 55)}
              y={Math.max(yBEP - 18, padT + 14)}
              textAnchor="middle"
              className="text-[10px] font-bold fill-white dark:fill-slate-900 font-mono"
            >
              BEP: {fmtNum(breakEvenUnits, 0)} units
            </text>
          </g>

          {/* Planned Quantity Marker */}
          {hasUserMarker && (
            <g>
              <line
                x1={xUser}
                y1={padT}
                x2={xUser}
                y2={padT + innerH}
                stroke="#10b981"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              <circle
                cx={xUser}
                cy={yUserRevenue}
                r="4.5"
                className="fill-emerald-500 stroke-white"
                strokeWidth="1.5"
              />
              <circle
                cx={xUser}
                cy={yUserCost}
                r="4.5"
                className="fill-amber-500 stroke-white"
                strokeWidth="1.5"
              />
              <text
                x={xUser}
                y={padT + innerH + 16}
                textAnchor="middle"
                className="text-[10px] font-bold fill-emerald-600 dark:fill-emerald-400"
              >
                Plan: {fmtNum(userQty)}
              </text>
            </g>
          )}

          {/* X Axis base */}
          <line
            x1={padL}
            y1={padT + innerH}
            x2={width - padR}
            y2={padT + innerH}
            stroke="currentColor"
            className="text-slate-300 dark:text-slate-700"
            strokeWidth="1.5"
          />

          {/* X Axis Labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct) => {
            const u = Math.round(pct * maxUnits);
            const x = padL + pct * innerW;
            return (
              <text
                key={pct}
                x={x}
                y={padT + innerH + 16}
                textAnchor="middle"
                className="text-[9px] fill-slate-400 dark:fill-slate-500 font-mono"
              >
                {fmtNum(u)}
              </text>
            );
          })}
        </svg>

        {hoverUnits !== null && (
          <div className="absolute top-3 right-3 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-md text-xs space-y-1">
            <div className="font-semibold text-slate-700 dark:text-slate-200">
              Volume: {fmtNum(hoverUnits, 0)} units
            </div>
            <div className="flex items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
              <span>Revenue:</span>
              <span className="font-mono font-medium text-slate-900 dark:text-slate-100">
                {symbol}
                {fmtNum(hoverRev, 2)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
              <span>Total Cost:</span>
              <span className="font-mono font-medium text-slate-900 dark:text-slate-100">
                {symbol}
                {fmtNum(hoverCost, 2)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 text-[11px] pt-1 border-t border-slate-200 dark:border-slate-700">
              <span>P/L:</span>
              <span
                className={`font-mono font-bold ${
                  hoverProfit > 0
                    ? "text-emerald-600 dark:text-emerald-400"
                    : hoverProfit < 0
                    ? "text-rose-600 dark:text-rose-400"
                    : "text-slate-500"
                }`}
              >
                {hoverProfit >= 0 ? "+" : "−"}
                {symbol}
                {fmtNum(Math.abs(hoverProfit), 2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BreakEvenCalculator() {
  const { fmt, symbol } = useCurrency();

  // Active preset & mode
  const [activePreset, setActivePreset] = useState<string>("custom");
  const [activeTab, setActiveTab] = useState<"standard" | "milestones">("standard");

  // Core Inputs
  const [fixedCosts, setFixedCosts] = useState<number>(5000);
  const [variableCostPerUnit, setVariableCostPerUnit] = useState<number>(25);
  const [sellingPricePerUnit, setSellingPricePerUnit] = useState<number>(50);
  const [targetProfit, setTargetProfit] = useState<number>(0);
  const [salesQuantity, setSalesQuantity] = useState<number | "">("");

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  }, []);

  // Preset Applicator
  const applyPreset = useCallback((p: Preset) => {
    setActivePreset(p.id);
    setFixedCosts(p.fixedCosts);
    setVariableCostPerUnit(p.variableCostPerUnit);
    setSellingPricePerUnit(p.sellingPricePerUnit);
    setTargetProfit(p.targetProfit);
    setSalesQuantity(p.salesQuantity);
  }, []);

  // Reset to default
  const handleReset = useCallback(() => {
    const d = PRESETS[0];
    applyPreset(d);
    showToast("Calculator reset to defaults");
  }, [applyPreset, showToast]);

  // Validation
  const validation = useMemo(() => {
    if (fixedCosts < 0) return { valid: false, error: "Fixed costs cannot be negative." };
    if (variableCostPerUnit < 0) return { valid: false, error: "Variable cost cannot be negative." };
    if (sellingPricePerUnit < 0) return { valid: false, error: "Selling price cannot be negative." };
    if (sellingPricePerUnit === 0) return { valid: false, error: "Selling price must be greater than zero." };
    if (sellingPricePerUnit <= variableCostPerUnit) {
      return {
        valid: false,
        error: `Selling price (${symbol}${sellingPricePerUnit}) must be higher than variable cost (${symbol}${variableCostPerUnit}) to cover costs.`,
      };
    }
    return { valid: true, error: null };
  }, [fixedCosts, variableCostPerUnit, sellingPricePerUnit, symbol]);

  // Core Financial Calculations
  const calc = useMemo(() => {
    const contributionMargin = sellingPricePerUnit - variableCostPerUnit;

    if (!validation.valid || contributionMargin <= 0 || sellingPricePerUnit <= 0) {
      return {
        valid: false,
        contributionMargin: Math.max(0, contributionMargin),
        contributionMarginRatio: 0,
        breakEvenUnits: 0,
        breakEvenRevenue: 0,
        totalVariableCostsAtBE: 0,
        targetUnits: 0,
        targetRevenue: 0,
        salesRevenue: 0,
        salesVariableCosts: 0,
        salesTotalCosts: 0,
        profitLoss: 0,
        marginOfSafetyUnits: 0,
        marginOfSafetyRevenue: 0,
        marginOfSafetyRatio: 0,
      };
    }

    const contributionMarginRatio = (contributionMargin / sellingPricePerUnit) * 100;
    const breakEvenUnits = fixedCosts / contributionMargin;
    const breakEvenRevenue = breakEvenUnits * sellingPricePerUnit;
    const totalVariableCostsAtBE = breakEvenUnits * variableCostPerUnit;

    // Target Profit calculations
    const targetUnits = (fixedCosts + (targetProfit > 0 ? targetProfit : 0)) / contributionMargin;
    const targetRevenue = targetUnits * sellingPricePerUnit;

    // User Planned Volume Analysis
    const q = typeof salesQuantity === "number" && salesQuantity >= 0 ? salesQuantity : 0;
    const salesRevenue = q * sellingPricePerUnit;
    const salesVariableCosts = q * variableCostPerUnit;
    const salesTotalCosts = fixedCosts + salesVariableCosts;
    const profitLoss = salesRevenue - salesTotalCosts;

    // Margin of Safety (if planned sales entered)
    const marginOfSafetyUnits = q - breakEvenUnits;
    const marginOfSafetyRevenue = marginOfSafetyUnits * sellingPricePerUnit;
    const marginOfSafetyRatio = q > 0 ? (marginOfSafetyUnits / q) * 100 : 0;

    return {
      valid: true,
      contributionMargin,
      contributionMarginRatio,
      breakEvenUnits,
      breakEvenRevenue,
      totalVariableCostsAtBE,
      targetUnits,
      targetRevenue,
      salesRevenue,
      salesVariableCosts,
      salesTotalCosts,
      profitLoss,
      marginOfSafetyUnits,
      marginOfSafetyRevenue,
      marginOfSafetyRatio,
    };
  }, [fixedCosts, variableCostPerUnit, sellingPricePerUnit, targetProfit, salesQuantity, validation.valid]);

  // Copy Summary to Clipboard
  const handleCopySummary = useCallback(() => {
    if (!calc.valid) {
      showToast("Cannot copy: check input values.");
      return;
    }

    const text = [
      "=== BREAK-EVEN ANALYSIS SUMMARY ===",
      `Fixed Costs: ${fmt(fixedCosts)}`,
      `Variable Cost Per Unit: ${fmt(variableCostPerUnit)}`,
      `Selling Price Per Unit: ${fmt(sellingPricePerUnit)}`,
      `Unit Contribution Margin: ${fmt(calc.contributionMargin)} (${fmtPct(calc.contributionMarginRatio)})`,
      `Break-Even Point: ${fmtNum(calc.breakEvenUnits, 2)} units`,
      `Break-Even Revenue: ${fmt(calc.breakEvenRevenue)}`,
      ...(targetProfit > 0
        ? [
            `Target Profit: ${fmt(targetProfit)}`,
            `Required Units for Target: ${fmtNum(calc.targetUnits, 2)} units`,
            `Required Target Revenue: ${fmt(calc.targetRevenue)}`,
          ]
        : []),
      ...(typeof salesQuantity === "number" && salesQuantity > 0
        ? [
            `Planned Sales Volume: ${fmtNum(salesQuantity)} units`,
            `Projected Revenue: ${fmt(calc.salesRevenue)}`,
            `Projected Net ${calc.profitLoss >= 0 ? "Profit" : "Loss"}: ${fmt(Math.abs(calc.profitLoss))}`,
          ]
        : []),
      "Generated on allcalculator.net",
    ].join("\n");

    navigator.clipboard.writeText(text).then(
      () => showToast("Analysis copied to clipboard!"),
      () => showToast("Failed to copy.")
    );
  }, [calc, fixedCosts, variableCostPerUnit, sellingPricePerUnit, targetProfit, salesQuantity, fmt, showToast]);

  // Sensitivity milestone schedule
  const milestones = useMemo(() => {
    if (!calc.valid || calc.breakEvenUnits <= 0) return [];
    const ratios = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 2.0];
    return ratios.map((r) => {
      const units = Math.round(calc.breakEvenUnits * r);
      const rev = units * sellingPricePerUnit;
      const vc = units * variableCostPerUnit;
      const tc = fixedCosts + vc;
      const pl = rev - tc;
      return {
        percentOfBE: r * 100,
        units,
        revenue: rev,
        totalCost: tc,
        profitLoss: pl,
        isBE: r === 1.0,
      };
    });
  }, [calc, sellingPricePerUnit, variableCostPerUnit, fixedCosts]);

  return (
    <div className="w-full">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold shadow-2xl animate-fade-in">
          <i className="fas fa-check-circle text-emerald-400 dark:text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ── Industry Quick Presets Bar ────────────────────────────────────────── */}
      <div className="mb-6 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm shadow-sm">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Industry Benchmarks &amp; Scenarios
            </span>
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500">
            Click to load realistic data
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {PRESETS.map((p) => {
            const isSelected = activePreset === p.id;
            return (
              <button
                key={p.id}
                onClick={() => applyPreset(p)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all border ${
                  isSelected
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-200 dark:shadow-indigo-950"
                    : "bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                <i className={`fas ${p.icon} text-xs`} />
                <span>{p.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Main Workspace Grid ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* ── LEFT COLUMN: Input Forms (7 Cols) ─────────────────────────────────── */}
        <div className="lg:col-span-7 space-y-5">
          {/* Main Parameters Card */}
          <Card>
            <CardHead
              icon="fa-coins"
              title="Cost & Pricing Structure"
              subtitle="Enter your monthly fixed expenses and per-unit metrics"
              badge="Required"
              color="indigo"
            />

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <DualInput
                  id="fixedCosts"
                  label="Total Fixed Costs"
                  sub="Monthly overhead"
                  value={fixedCosts}
                  onChange={(v) => {
                    setActivePreset("custom");
                    setFixedCosts(typeof v === "number" ? v : 0);
                  }}
                  prefix={symbol}
                  min={0}
                  max={50000}
                  step={100}
                  sliderStep={250}
                  error={fixedCosts < 0 ? "Cannot be negative" : undefined}
                />

                <DualInput
                  id="variableCostPerUnit"
                  label="Variable Cost Per Unit"
                  sub="Direct material & labor"
                  value={variableCostPerUnit}
                  onChange={(v) => {
                    setActivePreset("custom");
                    setVariableCostPerUnit(typeof v === "number" ? v : 0);
                  }}
                  prefix={symbol}
                  min={0}
                  max={500}
                  step={0.5}
                  sliderStep={1}
                  error={variableCostPerUnit < 0 ? "Cannot be negative" : undefined}
                />

                <DualInput
                  id="sellingPricePerUnit"
                  label="Selling Price Per Unit"
                  sub="Customer retail price"
                  value={sellingPricePerUnit}
                  onChange={(v) => {
                    setActivePreset("custom");
                    setSellingPricePerUnit(typeof v === "number" ? v : 0);
                  }}
                  prefix={symbol}
                  min={0}
                  max={1000}
                  step={0.5}
                  sliderStep={1}
                  error={
                    sellingPricePerUnit <= 0
                      ? "Must be greater than 0"
                      : sellingPricePerUnit <= variableCostPerUnit
                      ? "Must exceed variable cost"
                      : undefined
                  }
                />

                <DualInput
                  id="targetProfit"
                  label="Target Net Profit (Optional)"
                  sub="Desired profit goal"
                  value={targetProfit}
                  onChange={(v) => {
                    setActivePreset("custom");
                    setTargetProfit(typeof v === "number" ? v : 0);
                  }}
                  prefix={symbol}
                  min={0}
                  max={50000}
                  step={500}
                  sliderStep={500}
                  error={targetProfit < 0 ? "Cannot be negative" : undefined}
                />
              </div>

              {/* Dynamic Contribution Margin Metric Bar */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                    <div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        Contribution Margin
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Price minus Variable Cost
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-bold text-indigo-600 dark:text-indigo-400 font-mono">
                      {calc.valid ? fmt(calc.contributionMargin) : "—"}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      Ratio: {calc.valid ? fmtPct(calc.contributionMarginRatio) : "—"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Sales Volume Simulation Card */}
          <Card>
            <CardHead
              icon="fa-chart-pie"
              title="Sales Volume &amp; Profit Simulator"
              subtitle="Test your actual or planned sales volume to evaluate profitability"
              badge="Interactive"
              color="emerald"
            />

            <div className="p-6 space-y-5">
              <DualInput
                id="salesQuantity"
                label="Planned / Expected Sales Volume"
                sub="Units sold per month"
                value={salesQuantity}
                onChange={(v) => {
                  setActivePreset("custom");
                  setSalesQuantity(v);
                }}
                suffix="units"
                min={0}
                max={Math.max(5000, typeof salesQuantity === "number" ? salesQuantity * 1.5 : 2000)}
                step={10}
                sliderStep={25}
              />

              {typeof salesQuantity === "number" && salesQuantity > 0 && calc.valid && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Projected Revenue
                    </span>
                    <p className="text-base font-bold text-slate-800 dark:text-slate-100 font-mono mt-0.5">
                      {fmt(calc.salesRevenue)}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Total Costs
                    </span>
                    <p className="text-base font-bold text-slate-800 dark:text-slate-100 font-mono mt-0.5">
                      {fmt(calc.salesTotalCosts)}
                    </p>
                  </div>

                  <div
                    className={`p-3.5 rounded-xl border ${
                      calc.profitLoss > 0
                        ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
                        : calc.profitLoss < 0
                        ? "bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 text-slate-700"
                    }`}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider opacity-80">
                      {calc.profitLoss > 0
                        ? "Net Profit"
                        : calc.profitLoss < 0
                        ? "Net Loss"
                        : "Break-Even"}
                    </span>
                    <p className="text-base font-bold font-mono mt-0.5">
                      {calc.profitLoss >= 0 ? "+" : "−"}
                      {fmt(Math.abs(calc.profitLoss))}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Validation Alert */}
          {!validation.valid && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 flex items-start gap-3 text-rose-700 dark:text-rose-300">
              <i className="fas fa-triangle-exclamation text-base flex-shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed">
                <strong className="font-semibold block mb-0.5">Calculation Blocked:</strong>
                {validation.error}
              </div>
            </div>
          )}

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
            >
              <i className="fas fa-rotate-left" />
              Reset Defaults
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopySummary}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 transition"
              >
                <i className="fas fa-copy" />
                Copy Summary
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
              >
                <i className="fas fa-print" />
                Print
              </button>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Results & Chart (5 Cols) ────────────────────────────── */}
        <div className="lg:col-span-5 space-y-5">
          {/* Hero Results Gradient Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 p-6 text-white shadow-xl shadow-indigo-500/10">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-36 h-36 rounded-full bg-white/10 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-200">
                  Break-Even Threshold
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/15 text-white backdrop-blur-sm">
                  Zero Profit Point
                </span>
              </div>

              {/* Primary Large Metric */}
              <div className="mt-4">
                <div className="text-4xl sm:text-5xl font-extrabold tracking-tight font-mono tabular-nums">
                  {calc.valid ? fmtNum(calc.breakEvenUnits, 0) : "—"}
                </div>
                <div className="text-indigo-200 text-xs font-medium mt-1">
                  {calc.valid
                    ? `Units required to cover all expenses`
                    : "Adjust input values to calculate"}
                </div>
              </div>

              {/* Secondary Key Metric Grid */}
              <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-200 block">
                    Break-Even Revenue
                  </span>
                  <span className="text-xl font-bold font-mono tabular-nums">
                    {calc.valid ? fmt(calc.breakEvenRevenue) : "—"}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-200 block">
                    Contribution Margin Ratio
                  </span>
                  <span className="text-xl font-bold font-mono tabular-nums">
                    {calc.valid ? fmtPct(calc.contributionMarginRatio) : "—"}
                  </span>
                </div>
              </div>

              {/* Progress gauge if sales quantity entered */}
              {typeof salesQuantity === "number" && salesQuantity > 0 && calc.valid && (
                <div className="mt-5 pt-4 border-t border-white/15">
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-indigo-200">Plan vs. Break-Even</span>
                    <span className="font-bold">
                      {Math.round((salesQuantity / calc.breakEvenUnits) * 100)}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/25 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        salesQuantity >= calc.breakEvenUnits
                          ? "bg-emerald-400"
                          : "bg-amber-400"
                      }`}
                      style={{
                        width: `${Math.min(
                          (salesQuantity / calc.breakEvenUnits) * 100,
                          100
                        )}%`,
                      }}
                    />
                  </div>
                  <p className="text-[11px] text-indigo-200 mt-1">
                    {salesQuantity >= calc.breakEvenUnits
                      ? `+${fmtNum(salesQuantity - calc.breakEvenUnits, 0)} units above break-even`
                      : `${fmtNum(calc.breakEvenUnits - salesQuantity, 0)} units short of break-even`}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Interactive CVP Visual Chart Card */}
          <Card>
            <CardHead
              icon="fa-chart-line"
              title="Cost-Volume-Profit Graph"
              subtitle="Visual intersection of revenue and total cost curves"
              badge="Live SVG"
              color="violet"
            />
            <div className="p-4 sm:p-5">
              {calc.valid ? (
                <BreakEvenChart
                  fixedCosts={fixedCosts}
                  variableCostPerUnit={variableCostPerUnit}
                  sellingPricePerUnit={sellingPricePerUnit}
                  breakEvenUnits={calc.breakEvenUnits}
                  salesQuantity={salesQuantity}
                  symbol={symbol}
                />
              ) : (
                <div className="py-12 text-center text-xs text-slate-400">
                  Enter valid costs and pricing to render the graph
                </div>
              )}
            </div>
          </Card>

          {/* Target Profit Planning Card */}
          {targetProfit > 0 && calc.valid && (
            <Card>
              <CardHead
                icon="fa-bullseye"
                title="Target Profit Requirements"
                subtitle={`Volume needed to generate ${fmt(targetProfit)} in net profit`}
                badge="Goal"
                color="amber"
              />
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/50">
                  <span className="text-xs font-semibold text-amber-800 dark:text-amber-300">
                    Units for Target Profit
                  </span>
                  <span className="text-base font-bold text-amber-900 dark:text-amber-200 font-mono">
                    {fmtNum(calc.targetUnits, 0)} units
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Target Revenue Needed
                  </span>
                  <span className="text-base font-bold text-slate-900 dark:text-slate-100 font-mono">
                    {fmt(calc.targetRevenue)}
                  </span>
                </div>
              </div>
            </Card>
          )}

          {/* Executive Summary Metrics Card */}
          <Card>
            <CardHead
              icon="fa-list-check"
              title="Financial Summary"
              subtitle="Complete key metrics breakdown"
              color="indigo"
            />
            <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
              {[
                { label: "Total Fixed Costs", val: fmt(fixedCosts) },
                { label: "Variable Cost Per Unit", val: fmt(variableCostPerUnit) },
                { label: "Selling Price Per Unit", val: fmt(sellingPricePerUnit) },
                { label: "Unit Contribution Margin", val: calc.valid ? fmt(calc.contributionMargin) : "—" },
                { label: "Contribution Margin Ratio", val: calc.valid ? fmtPct(calc.contributionMarginRatio) : "—" },
                { label: "Break-Even Units", val: calc.valid ? `${fmtNum(calc.breakEvenUnits, 0)} units` : "—" },
                { label: "Break-Even Revenue", val: calc.valid ? fmt(calc.breakEvenRevenue) : "—" },
                { label: "Total Variable Cost at BE", val: calc.valid ? fmt(calc.totalVariableCostsAtBE) : "—" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-5 py-3 text-slate-700 dark:text-slate-300"
                >
                  <span>{row.label}</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-100 font-mono">
                    {row.val}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* ── Volume Milestone Schedule Table ──────────────────────────────────── */}
      {calc.valid && milestones.length > 0 && (
        <div className="mt-8">
          <Card>
            <CardHead
              icon="fa-table"
              title="Sensitivity &amp; Volume Milestone Schedule"
              subtitle="Projected revenue, expenses, and profit across varying sales volumes"
              badge="Sensitivity Table"
              color="indigo"
            />

            <div className="p-5 overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                    <th className="pb-3 px-3">Volume Level</th>
                    <th className="pb-3 px-3">Units Sold</th>
                    <th className="pb-3 px-3">Total Revenue</th>
                    <th className="pb-3 px-3">Total Costs</th>
                    <th className="pb-3 px-3 text-right">Net Profit / Loss</th>
                    <th className="pb-3 px-3 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 font-mono">
                  {milestones.map((m) => {
                    const isProfit = m.profitLoss > 0;
                    const isLoss = m.profitLoss < 0;

                    return (
                      <tr
                        key={m.percentOfBE}
                        className={`transition-colors ${
                          m.isBE
                            ? "bg-indigo-50/80 dark:bg-indigo-950/40 font-bold"
                            : "hover:bg-slate-50 dark:hover:bg-slate-800/40"
                        }`}
                      >
                        <td className="py-3 px-3 font-sans font-medium text-slate-700 dark:text-slate-300">
                          {m.percentOfBE}% of BEP
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-900 dark:text-slate-100">
                          {fmtNum(m.units, 0)}
                        </td>
                        <td className="py-3 px-3 text-slate-700 dark:text-slate-300">
                          {fmt(m.revenue)}
                        </td>
                        <td className="py-3 px-3 text-slate-700 dark:text-slate-300">
                          {fmt(m.totalCost)}
                        </td>
                        <td
                          className={`py-3 px-3 text-right font-bold ${
                            isProfit
                              ? "text-emerald-600 dark:text-emerald-400"
                              : isLoss
                              ? "text-rose-600 dark:text-rose-400"
                              : "text-slate-600 dark:text-slate-300"
                          }`}
                        >
                          {m.profitLoss >= 0 ? "+" : "−"}
                          {fmt(Math.abs(m.profitLoss))}
                        </td>
                        <td className="py-3 px-3 text-center">
                          {m.isBE ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-sans font-bold bg-indigo-600 text-white">
                              Break-Even
                            </span>
                          ) : isProfit ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                              Profitable
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">
                              Loss
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
