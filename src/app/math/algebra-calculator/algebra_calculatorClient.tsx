"use client";

import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type OpKey =
  | "solve"
  | "quadratic"
  | "polynomial"
  | "simplify"
  | "factor"
  | "evaluate"
  | "system"
  | "derivative"
  | "integral"
  | "matrix"
  | "trig"
  | "graph";

// ─── Op Definitions ───────────────────────────────────────────────────────────

interface OpDef {
  title: string;
  desc: string;
  icon: string;
  badge: string;
  route: string;
}

const opDefs: Record<OpKey, OpDef> = {
  solve: {
    title: "Solve Equations",
    desc: "Linear, cubic, and general equations — isolate any variable",
    icon: "⊜",
    badge: "ax+b=c",
    route: "/math/equation-solver",
  },
  quadratic: {
    title: "Quadratic Solver",
    desc: "ax² + bx + c = 0 — find real and complex roots, discriminant, vertex",
    icon: "∩",
    badge: "ax²+bx+c",
    route: "/math/quadratic-solver",
  },
  polynomial: {
    title: "Polynomial Roots",
    desc: "Find all roots of any polynomial using numerical methods",
    icon: "∿",
    badge: "nth deg",
    route: "/math/polynomial-roots-calculator",
  },
  simplify: {
    title: "Simplify Expression",
    desc: "Algebraic simplification, numeric evaluation, and expression reduction",
    icon: "≈",
    badge: "algebra",
    route: "/math/simplify-calculator",
  },
  factor: {
    title: "Factor Expression",
    desc: "Factor quadratics, identify roots, and show factored form with multiplicity",
    icon: "⊗",
    badge: "quad",
    route: "/math/factor-calculator",
  },
  evaluate: {
    title: "Evaluate Function",
    desc: "Substitute a value and compute f(x) for any algebraic expression",
    icon: "ƒ",
    badge: "f(x)",
    route: "/math/evaluate-expression-calculator",
  },
  system: {
    title: "System of Equations",
    desc: "Solve 2×2 linear systems using Cramer's Rule",
    icon: "⊞",
    badge: "2×2",
    route: "/math/system-of-equations-calculator",
  },
  derivative: {
    title: "Derivative",
    desc: "Symbolic differentiation — d/dx of any expression",
    icon: "∂",
    badge: "d/dx",
    route: "/math/derivative-calculator",
  },
  integral: {
    title: "Integral",
    desc: "Symbolic antiderivatives and definite integration",
    icon: "∫",
    badge: "∫f dx",
    route: "/math/integral-calculator",
  },
  matrix: {
    title: "Matrix Operations",
    desc: "Determinant, inverse, transpose, and eigenvalues",
    icon: "⊡",
    badge: "det/inv",
    route: "/math/matrix-calculator",
  },
  trig: {
    title: "Trig & Logarithm",
    desc: "Evaluate sin, cos, tan, ln, log, and inverse trig functions",
    icon: "∿",
    badge: "sin cos",
    route: "/math/trigonometry-calculator",
  },
  graph: {
    title: "Graph Function",
    desc: "Plot f(x) over a range with roots and key features marked",
    icon: "📈",
    badge: "plot",
    route: "/math/graphing-calculator",
  },
};

// ─── Main Component ───────────────────────────────────────────────────────────

const opKeys = Object.keys(opDefs) as OpKey[];

export default function AlgCalc() {
  return (
    <main className="p-4 sm:p-8 flex flex-col gap-6">
      <div>
        <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
          Algebra Calculators
        </div>
        <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">
          Select a calculator below to get started
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 text-center shadow-sm">
        <div className="text-5xl mb-4">🧮</div>
        <div className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
          Welcome to Algebra Engine
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Choose a calculator below to get started. Each
          calculator provides step-by-step solutions for algebraic
          operations.
        </div>
      </div>

      {/* Quick-access card grid */}
      <div>
        <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
          Operations
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {opKeys.map((op) => {
            const d = opDefs[op];
            return (
              <Link
                key={op}
                href={d.route}
                className="flex items-center gap-2.5 px-3.5 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="w-7 h-7 rounded-md flex items-center justify-center text-xs flex-shrink-0 bg-slate-100 dark:bg-slate-800">
                  {d.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium text-slate-700 dark:text-slate-300 truncate leading-tight">
                    {d.title}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 dark:text-slate-500 mt-0.5">
                    {d.badge}
                  </p>
                </div>
                <i
                  className="fas fa-arrow-right text-[10px] text-slate-300 dark:text-slate-600 flex-shrink-0 ml-1"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}