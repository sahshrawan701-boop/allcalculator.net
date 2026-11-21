"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import CalculatorActions from "@/components/CalculatorActions";

import { useCurrency } from "@/hooks/useCurrency";
// ─── types ────────────────────────────────────────────────────────────────────

interface Factor {
  key: string;
  label: string;
  weight: number; // % of FICO score
  value: number; // 0–100 slider value
  description: string;
  lowLabel: string;
  highLabel: string;
  icon: string;
}

// ─── score helpers ────────────────────────────────────────────────────────────

function computeScore(factors: Factor[]): number {
  // Weighted average of factor values, mapped to 300–850 range
  const weighted = factors.reduce(
    (sum, f) => sum + f.value * (f.weight / 100),
    0,
  );
  return Math.round(300 + (weighted / 100) * 550);
}

function getScoreBand(score: number): {
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  gradient: string;
  description: string;
} {
  if (score >= 800)
    return {
      label: "Exceptional",
      color: "#10b981",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800/50",
      textColor: "text-emerald-600 dark:text-emerald-400",
      gradient: "from-emerald-500 to-teal-500",
      description:
        "You qualify for the best rates on virtually all loan products.",
    };
  if (score >= 740)
    return {
      label: "Very Good",
      color: "#6366f1",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800/50",
      textColor: "text-indigo-600 dark:text-indigo-400",
      gradient: "from-indigo-500 to-violet-500",
      description:
        "Above average — you'll likely receive better-than-average rates.",
    };
  if (score >= 670)
    return {
      label: "Good",
      color: "#3b82f6",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800/50",
      textColor: "text-blue-600 dark:text-blue-400",
      gradient: "from-blue-500 to-indigo-500",
      description:
        "Near or slightly above average — most lenders will approve you.",
    };
  if (score >= 580)
    return {
      label: "Fair",
      color: "#f59e0b",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-800/50",
      textColor: "text-amber-600 dark:text-amber-400",
      gradient: "from-amber-400 to-orange-500",
      description:
        "Below average — approval is possible but rates will be higher.",
    };
  return {
    label: "Poor",
    color: "#f43f5e",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    borderColor: "border-rose-200 dark:border-rose-800/50",
    textColor: "text-rose-600 dark:text-rose-400",
    gradient: "from-rose-500 to-pink-500",
    description:
      "Significant credit risk — focus on rebuilding before applying for new credit.",
  };
}

function getAPREstimate(
  score: number,
  type: "mortgage" | "auto" | "personal",
): string {
  const table: Record<string, [number, number, string][]> = {
    mortgage: [
      [800, 850, "6.5–6.9%"],
      [740, 799, "6.9–7.3%"],
      [670, 739, "7.3–8.0%"],
      [580, 669, "8.0–10.5%"],
      [300, 579, "10.5%+ or denied"],
    ],
    auto: [
      [800, 850, "4.5–5.5%"],
      [740, 799, "5.5–7.0%"],
      [670, 739, "7.0–10.0%"],
      [580, 669, "10.0–15.0%"],
      [300, 579, "15.0–20.0%"],
    ],
    personal: [
      [800, 850, "6.0–9.0%"],
      [740, 799, "9.0–13.0%"],
      [670, 739, "13.0–18.0%"],
      [580, 669, "18.0–25.0%"],
      [300, 579, "25.0–35.9%"],
    ],
  };
  const row = table[type].find(([lo, hi]) => score >= lo && score <= hi);
  return row ? row[2] : "N/A";
}

function fmtScore(n: number) {
  return n.toLocaleString("en-US");
}

// ─── default factors ──────────────────────────────────────────────────────────

const DEFAULT_FACTORS: Factor[] = [
  {
    key: "payment_history",
    label: "Payment History",
    weight: 35,
    value: 75,
    description:
      "Track record of on-time payments. Late or missed payments hurt significantly.",
    lowLabel: "Many late/missed payments",
    highLabel: "Always on time",
    icon: "📅",
  },
  {
    key: "credit_utilization",
    label: "Credit Utilization",
    weight: 30,
    value: 65,
    description:
      "How much of your available revolving credit is in use. Keep below 30%, ideally below 10%.",
    lowLabel: "Very high usage (>90%)",
    highLabel: "Very low usage (<10%)",
    icon: "📊",
  },
  {
    key: "credit_age",
    label: "Length of Credit History",
    weight: 15,
    value: 60,
    description:
      "Average age of all open accounts. Older accounts improve your score.",
    lowLabel: "< 1 year average",
    highLabel: "> 10 years average",
    icon: "⏳",
  },
  {
    key: "credit_mix",
    label: "Credit Mix",
    weight: 10,
    value: 50,
    description:
      "Variety of account types (mortgage, auto, credit cards, installment loans).",
    lowLabel: "Only one account type",
    highLabel: "Diverse mix of accounts",
    icon: "🃏",
  },
  {
    key: "new_credit",
    label: "New Credit & Inquiries",
    weight: 10,
    value: 70,
    description:
      "Recent applications for new credit. Each hard inquiry can temporarily lower your score.",
    lowLabel: "Many recent inquiries",
    highLabel: "No recent inquiries",
    icon: "🔍",
  },
];

// ─── profile presets ──────────────────────────────────────────────────────────

const PROFILES = [
  {
    key: "rebuilding",
    label: "Rebuilding",
    icon: "🔨",
    values: {
      payment_history: 30,
      credit_utilization: 25,
      credit_age: 30,
      credit_mix: 20,
      new_credit: 25,
    },
  },
  {
    key: "average",
    label: "Average",
    icon: "📊",
    values: {
      payment_history: 65,
      credit_utilization: 55,
      credit_age: 55,
      credit_mix: 50,
      new_credit: 60,
    },
  },
  {
    key: "good",
    label: "Good Standing",
    icon: "👍",
    values: {
      payment_history: 80,
      credit_utilization: 75,
      credit_age: 70,
      credit_mix: 65,
      new_credit: 75,
    },
  },
  {
    key: "excellent",
    label: "Excellent",
    icon: "⭐",
    values: {
      payment_history: 97,
      credit_utilization: 95,
      credit_age: 90,
      credit_mix: 85,
      new_credit: 95,
    },
  },
];

// ─── sub-components ───────────────────────────────────────────────────────────

function Label({
  children,
  htmlFor,
  sub,
}: {
  children: React.ReactNode;
  htmlFor?: string;
  sub?: string;
}) {
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

function SectionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHead({
  icon,
  title,
  color = "indigo",
}: {
  icon: string;
  title: string;
  color?: "indigo" | "amber" | "emerald";
}) {
  const colors = {
    indigo:
      "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
    amber:
      "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    emerald:
      "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
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

function StatPill({
  label,
  value,
  sub,
  accent = false,
}: {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
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

function FactorSlider({
  factor,
  onChange,
}: {
  factor: Factor;
  onChange: (key: string, value: number) => void;
}) {
  const pct = factor.value;
  const band = getScoreBand(300 + (factor.value / 100) * 550);

  return (
    <div className="p-5 border-b border-slate-100 dark:border-slate-800/60 last:border-0">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-sm">
            {factor.icon}
          </span>
          <div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              {factor.label}
            </div>
            <div className="text-[10px] text-slate-400 dark:text-slate-400 mt-0.5">
              {factor.weight}% of score
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-sm font-bold ${band.textColor}`}>
            {factor.value}
          </div>
          <div className="text-[10px] text-slate-400">/ 100</div>
        </div>
      </div>

      <div className="relative h-5 flex items-center mb-2">
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-slate-200 dark:bg-slate-900" />
        {/* colored track */}
        <div
          className="absolute left-0 h-1.5 rounded-full transition-all duration-200"
          style={{
            width: `${pct}%`,
            background:
              pct >= 75
                ? "#10b981"
                : pct >= 55
                  ? "#6366f1"
                  : pct >= 35
                    ? "#f59e0b"
                    : "#f43f5e",
          }}
        />
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={factor.value}
          onChange={(e) => onChange(factor.key, Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-label={factor.label}
        />
        <div
          className="absolute w-4 h-4 rounded-full shadow-md border-2 border-white dark:border-slate-900 pointer-events-none transition-all duration-200"
          style={{
            left: `calc(${pct}% - 8px)`,
            background:
              pct >= 75
                ? "#10b981"
                : pct >= 55
                  ? "#6366f1"
                  : pct >= 35
                    ? "#f59e0b"
                    : "#f43f5e",
          }}
        />
      </div>

      <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500">
        <span>{factor.lowLabel}</span>
        <span>{factor.highLabel}</span>
      </div>

      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2 leading-relaxed">
        {factor.description}
      </p>
    </div>
  );
}

function ScoreGauge({ score }: { score: number }) {
  const band = getScoreBand(score);
  const minScore = 300;
  const maxScore = 850;
  const pct = ((score - minScore) / (maxScore - minScore)) * 100;

  // SVG arc gauge
  const r = 70;
  const cx = 100;
  const cy = 100;
  const startAngle = 210; // degrees
  const endAngle = -30;
  const totalArc = 240; // degrees
  const angleDeg = startAngle - (pct / 100) * totalArc;

  function polarToXY(angle: number, radius: number) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad),
    };
  }

  function describeArc(start: number, end: number, radius: number) {
    const s = polarToXY(start, radius);
    const e = polarToXY(end, radius);
    const largeArc = Math.abs(end - start) > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${radius} ${radius} 0 ${largeArc} 0 ${e.x} ${e.y}`;
  }

  const needlePos = polarToXY(angleDeg, r - 8);
  const needleRoot = polarToXY(angleDeg, 12);

  const zones = [
    { lo: 300, hi: 580, color: "#f43f5e" },
    { lo: 580, hi: 670, color: "#f59e0b" },
    { lo: 670, hi: 740, color: "#3b82f6" },
    { lo: 740, hi: 800, color: "#6366f1" },
    { lo: 800, hi: 850, color: "#10b981" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div style={{ width: 200, height: 130 }} className="relative">
        <svg viewBox="0 0 200 130" className="w-full h-full overflow-visible">
          {/* track */}
          <path
            d={describeArc(startAngle, endAngle, r)}
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            className="text-slate-200 dark:text-slate-800"
          />
          {/* colored zone arcs */}
          {zones.map((z) => {
            const s =
              startAngle -
              ((z.lo - minScore) / (maxScore - minScore)) * totalArc;
            const e =
              startAngle -
              ((z.hi - minScore) / (maxScore - minScore)) * totalArc;
            return (
              <path
                key={z.lo}
                d={describeArc(s, e, r)}
                fill="none"
                stroke={z.color}
                strokeWidth="12"
                strokeLinecap="butt"
                opacity="0.25"
              />
            );
          })}
          {/* filled arc up to score */}
          <path
            d={describeArc(startAngle, angleDeg, r)}
            fill="none"
            stroke={band.color}
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* needle */}
          <line
            x1={needleRoot.x}
            y1={needleRoot.y}
            x2={needlePos.x}
            y2={needlePos.y}
            stroke={band.color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx={cx} cy={cy} r="6" fill={band.color} />
          <circle cx={cx} cy={cy} r="3" fill="white" />
          {/* score text */}
          <text
            x={cx}
            y={cy + 26}
            textAnchor="middle"
            fontSize="26"
            fontWeight="800"
            fill={band.color}
            fontFamily="system-ui, sans-serif"
          >
            {fmtScore(score)}
          </text>
          <text
            x={cx}
            y={cy + 38}
            textAnchor="middle"
            fontSize="9"
            fill="#94a3b8"
            fontFamily="system-ui, sans-serif"
            letterSpacing="1"
          >
            OUT OF 850
          </text>
        </svg>
      </div>
    </div>
  );
}

function WeightPieBar({ factors }: { factors: Factor[] }) {
  return (
    <div className="space-y-2">
      {factors.map((f) => {
        const band = getScoreBand(300 + (f.value / 100) * 550);
        return (
          <div key={f.key}>
            <div className="flex justify-between text-xs mb-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-base">{f.icon}</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {f.label}
                </span>
                <span className="text-slate-400 dark:text-slate-500 text-[10px]">
                  ({f.weight}%)
                </span>
              </div>
              <span className={`font-semibold tabular-nums ${band.textColor}`}>
                {f.value}/100
              </span>
            </div>
            <div className="relative h-2 rounded-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${f.value}%`,
                  background: band.color,
                }}
              />
              {/* weight marker */}
              <div
                className="absolute top-0 h-full w-px bg-slate-300 dark:bg-slate-700 opacity-50"
                style={{ left: `${f.weight}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ScoreRangeBar({ score }: { score: number }) {
  const bands = [
    { lo: 300, hi: 579, label: "Poor", color: "bg-rose-500" },
    { lo: 580, hi: 669, label: "Fair", color: "bg-amber-400" },
    { lo: 670, hi: 739, label: "Good", color: "bg-blue-500" },
    { lo: 740, hi: 799, label: "Very Good", color: "bg-indigo-500" },
    { lo: 800, hi: 850, label: "Exceptional", color: "bg-emerald-500" },
  ];
  const total = 850 - 300;
  const marker = ((score - 300) / total) * 100;

  return (
    <div>
      <div className="flex h-4 rounded-full overflow-hidden mb-1.5">
        {bands.map((b) => (
          <div
            key={b.lo}
            className={`${b.color} flex-shrink-0`}
            style={{ width: `${((b.hi - b.lo + 1) / total) * 100}%` }}
          />
        ))}
      </div>
      {/* Marker */}
      <div className="relative h-2" style={{ marginTop: -6 }}>
        <div
          className="absolute -top-0.5 w-3 h-5 flex flex-col items-center pointer-events-none"
          style={{ left: `calc(${marker}% - 6px)` }}
        >
          <div className="w-0.5 h-3 bg-white dark:bg-slate-900 rounded-full" />
          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-white dark:border-t-slate-900" />
        </div>
      </div>
      <div className="flex justify-between text-[9px] text-slate-400 dark:text-slate-500 mt-2 font-medium uppercase tracking-wide">
        {bands.map((b) => (
          <span
            key={b.lo}
            className="text-center"
            style={{ width: `${((b.hi - b.lo + 1) / total) * 100}%` }}
          >
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── main export ──────────────────────────────────────────────────────────────

export default function CreditScoreSimulator() {
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
      if (dataParam) {
        try {
          const data = JSON.parse(decodeURIComponent(dataParam));
          if (data.factors !== undefined) setFactors(data.factors);
          if (data.activeProfile !== undefined) setActiveProfile(data.activeProfile);
          if (data.showTips !== undefined) setShowTips(data.showTips);
          // Remove query param from URL without refreshing
          window.history.replaceState({}, '', window.location.pathname);
        } catch(e) {}
      }
    }
  }, []);

  const { fmt, fmtShort, symbol } = useCurrency();
  const [factors, setFactors] = useState<Factor[]>(DEFAULT_FACTORS);
  const [activeProfile, setActiveProfile] = useState("average");
  const [showTips, setShowTips] = useState(false);

  const applyProfile = useCallback((key: string) => {
    const p = PROFILES.find((pr) => pr.key === key);
    if (!p) return;
    setActiveProfile(key);
    setFactors((prev) =>
      prev.map((f) => ({
        ...f,
        value: p.values[f.key as keyof typeof p.values] ?? f.value,
      })),
    );
  }, []);

  const handleFactorChange = useCallback((key: string, value: number) => {
    setFactors((prev) =>
      prev.map((f) => (f.key === key ? { ...f, value } : f)),
    );
    setActiveProfile("custom");
  }, []);

  const score = useMemo(() => computeScore(factors), [factors]);
  const band = getScoreBand(score);

  const tips = useMemo(() => {
    const sorted = [...factors].sort((a, b) => {
      const impactA = (a.weight / 100) * (100 - a.value);
      const impactB = (b.weight / 100) * (100 - b.value);
      return impactB - impactA;
    });
    return sorted.slice(0, 3).map((f) => {
      const tips: Record<string, string> = {
        payment_history:
          "Set up autopay for at least the minimum payment to avoid late marks. Even one 30-day late can drop your score 50–100 pts.",
        credit_utilization:
          "Pay down balances or request higher credit limits. Each card should ideally stay below 10% usage.",
        credit_age:
          "Keep old accounts open — even if unused. Closing them reduces your average age and available credit.",
        credit_mix:
          "If you only have credit cards, a small installment loan (credit-builder loan) can diversify your mix.",
        new_credit:
          "Space out new credit applications. Multiple hard inquiries within 6 months signal risk to lenders.",
      };
      return { factor: f, tip: tips[f.key] ?? "" };
    });
  }, [factors]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 rounded-xl">
      <div ref={resultRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* ── Profile Tabs ─────────────────────────────────────────── */}
        <div className="mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {PROFILES.map((p) => (
              <button
                key={p.key}
                onClick={() => applyProfile(p.key)}
                aria-pressed={activeProfile === p.key}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  activeProfile === p.key
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/40"
                    : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600"
                }`}
              >
                <span aria-hidden="true">{p.icon}</span>
                {p.label}
              </button>
            ))}
            {activeProfile === "custom" && (
              <span className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/40">
                ✏️ Custom
              </span>
            )}
          </div>
        </div>

        {/* ── Main Grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-5">
          {/* LEFT — Factor Sliders */}
          <div className="space-y-4">
            {/* FICO Factors */}
            <SectionCard>
              <SectionHead
                icon="🎛️"
                title="FICO Score Factors"
                color="indigo"
              />
              <div>
                {factors.map((f) => (
                  <FactorSlider
                    key={f.key}
                    factor={f}
                    onChange={handleFactorChange}
                  />
                ))}
              </div>
            </SectionCard>

            {/* Rate Comparison */}
            <SectionCard>
              <SectionHead
                icon="💳"
                title="Estimated Loan APR Ranges"
                color="emerald"
              />
              <div className="p-5">
                <div className="grid grid-cols-3 gap-3">
                  <StatPill
                    label="Mortgage"
                    value={getAPREstimate(score, "mortgage")}
                    sub="30-yr fixed"
                  />
                  <StatPill
                    label="Auto Loan"
                    value={getAPREstimate(score, "auto")}
                    sub="60-mo new car"
                    accent
                  />
                  <StatPill
                    label="Personal"
                    value={getAPREstimate(score, "personal")}
                    sub="unsecured"
                  />
                </div>
                <p className="mt-3 text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed">
                  Rates are estimates based on typical lender tiers. Actual
                  offers depend on income, debt-to-income ratio, and individual
                  lender criteria.
                </p>
              </div>
            </SectionCard>

            {/* Factor Weight Breakdown */}
            <SectionCard>
              <SectionHead
                icon="⚖️"
                title="Factor Weight Breakdown"
                color="amber"
              />
              <div className="p-5">
                <WeightPieBar factors={factors} />
                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  {[
                    { color: "bg-rose-500", label: "Poor (0–34)" },
                    { color: "bg-amber-400", label: "Fair (35–54)" },
                    { color: "bg-indigo-500", label: "Good (55–74)" },
                    { color: "bg-emerald-500", label: "Excellent (75–100)" },
                  ].map(({ color, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 text-[10px] text-slate-400 dark:text-slate-500"
                    >
                      <span className={`w-2 h-2 rounded-full ${color}`} />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>
          </div>

          {/* RIGHT — Score + Results */}
          <div className="space-y-4">
            {/* Hero Score Card */}
            <div
              className={`rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-violet-700 p-5 text-white shadow-xl shadow-indigo-200 dark:shadow-indigo-950`}
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-2">
                Estimated Credit Score
              </div>

              <ScoreGauge score={score} />

              <div className="mt-3 text-center">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: band.color + "30", color: "white" }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: band.color }}
                  />
                  {band.label}
                </div>
                <p className="mt-2 text-indigo-200 text-xs leading-relaxed px-2">
                  {band.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/15 grid grid-cols-2 gap-3">
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                    Score Range
                  </div>
                  <div className="text-xl font-bold tabular-nums">300–850</div>
                  <div className="text-indigo-200 text-[10px]">FICO® model</div>
                </div>
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-indigo-200 mb-0.5">
                    Percentile (est.)
                  </div>
                  <div className="text-xl font-bold tabular-nums">
                    {Math.round(((score - 300) / 550) * 100)}th
                  </div>
                  <div className="text-indigo-200 text-[10px]">
                    of US adults
                  </div>
                </div>
              </div>
            </div>

            {/* Score Range Bar */}
            <SectionCard>
              <SectionHead icon="📈" title="Score Range" color="indigo" />
              <div className="p-5">
                <ScoreRangeBar score={score} />
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <StatPill
                    label="Your Score"
                    value={fmtScore(score)}
                    sub={band.label}
                    accent
                  />
                  <StatPill label="US Average" value="714" sub="FICO, 2024" />
                </div>
              </div>
            </SectionCard>

            {/* Key Metrics */}
            <SectionCard>
              <SectionHead icon="📐" title="Score Metrics" color="emerald" />
              <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {[
                  {
                    label: "Payment History",
                    value: `${factors.find((f) => f.key === "payment_history")?.value}/100`,
                    bold: false,
                  },
                  {
                    label: "Credit Utilization",
                    value: `${factors.find((f) => f.key === "credit_utilization")?.value}/100`,
                    bold: false,
                  },
                  {
                    label: "Credit Age",
                    value: `${factors.find((f) => f.key === "credit_age")?.value}/100`,
                    bold: false,
                  },
                  {
                    label: "Credit Mix",
                    value: `${factors.find((f) => f.key === "credit_mix")?.value}/100`,
                    bold: false,
                  },
                  {
                    label: "New Credit",
                    value: `${factors.find((f) => f.key === "new_credit")?.value}/100`,
                    bold: false,
                  },
                  {
                    label: "Estimated Score",
                    value: fmtScore(score),
                    bold: true,
                  },
                ].map(({ label, value, bold }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center px-5 py-2.5 text-sm"
                  >
                    <span className="text-slate-500 dark:text-slate-400">
                      {label}
                    </span>
                    <span
                      className={
                        bold
                          ? "font-bold text-indigo-600 dark:text-indigo-400 tabular-nums"
                          : "font-semibold text-slate-800 dark:text-slate-100 tabular-nums"
                      }
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>

        {/* ── Improvement Tips ─────────────────────────────────────── */}
        <div className="mt-5">
          <button
            onClick={() => setShowTips((v) => !v)}
            aria-expanded={showTips}
            className="w-full flex items-center justify-between px-5 py-3.5 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800/80 text-sm font-semibold text-slate-800 dark:text-slate-100 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <span className="flex items-center gap-2">
              <span className="text-indigo-500">◈</span>
              Top Improvement Opportunities
              <span className="text-xs font-normal text-slate-400">
                (personalized to your inputs)
              </span>
            </span>
            <span
              className={`text-slate-400 text-xs transition-transform duration-200 ${showTips ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>

          {showTips && (
            <div className="mt-2 bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800/60">
              {tips.map(({ factor, tip }, idx) => {
                const impact = Math.round(
                  (factor.weight / 100) * (100 - factor.value),
                );
                return (
                  <div key={factor.key} className="flex items-start gap-4 p-5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400 text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span>{factor.icon}</span>
                          <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                            {factor.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                            Potential uplift
                          </span>
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full">
                            +{impact} pts
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {tip}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ── Disclaimer ───────────────────────────────────────────── */}
        <footer className="mt-6 px-5 py-4 bg-slate-50/60 dark:bg-slate-900/40 rounded-2xl border border-slate-200/60 dark:border-slate-800">
          <p className="text-[11px] text-slate-400 dark:text-slate-400 leading-relaxed">
            <strong className="text-slate-500 dark:text-slate-400 font-semibold">
              Disclaimer:
            </strong>{" "}
            For educational use only. Not financial advice. Score estimates use
            a simplified weighted model based on FICO® factor proportions (FICO
            is a registered trademark of Fair Isaac Corporation). Actual scores
            vary by bureau, scoring model version, and data on file. Consult a
            licensed financial advisor or credit counselor for personalized
            guidance.
          </p>
        </footer>
      
        <CalculatorActions
          calculatorId="credit-score-simulator"
          calculatorName="Credit Score Simulator"
          inputData={{ factors, activeProfile, showTips }}
          resultData={{}}
          resultRef={resultRef}
        />
      </div>
    </div>
  );
}