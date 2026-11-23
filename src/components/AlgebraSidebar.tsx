"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

interface OpDef {
  title: string;
  desc: string;
  icon: string;
  badge: string;
  route: string;
  group: "algebra" | "calculus" | "advanced";
}

const opDefs: Record<OpKey, OpDef> = {
  solve: {
    title: "Solve Equations",
    desc: "Linear, cubic, and general equations — isolate any variable",
    icon: "⊜",
    badge: "ax+b=c",
    route: "/math/equation-solver",
    group: "algebra",
  },
  quadratic: {
    title: "Quadratic Solver",
    desc: "ax² + bx + c = 0 — real and complex roots, discriminant, vertex",
    icon: "∩",
    badge: "ax²+bx+c",
    route: "/math/quadratic-solver",
    group: "algebra",
  },
  polynomial: {
    title: "Polynomial Roots",
    desc: "Find all roots of any polynomial using numerical methods",
    icon: "∿",
    badge: "nth deg",
    route: "/math/polynomial-roots-calculator",
    group: "algebra",
  },
  simplify: {
    title: "Simplify Expression",
    desc: "Algebraic simplification, numeric evaluation, expression reduction",
    icon: "≈",
    badge: "algebra",
    route: "/math/simplify-calculator",
    group: "algebra",
  },
  factor: {
    title: "Factor Expression",
    desc: "Factor quadratics, identify roots, and show factored form",
    icon: "⊗",
    badge: "quad",
    route: "/math/factor-calculator",
    group: "algebra",
  },
  evaluate: {
    title: "Evaluate Function",
    desc: "Substitute a value and compute f(x) for any expression",
    icon: "ƒ",
    badge: "f(x)",
    route: "/math/evaluate-expression-calculator",
    group: "algebra",
  },
  system: {
    title: "System of Equations",
    desc: "Solve 2×2 linear systems using Cramer's Rule",
    icon: "⊞",
    badge: "2×2",
    route: "/math/system-of-equations-calculator",
    group: "algebra",
  },
  derivative: {
    title: "Derivative",
    desc: "Symbolic differentiation — d/dx of any expression",
    icon: "∂",
    badge: "d/dx",
    route: "/math/derivative-calculator",
    group: "calculus",
  },
  integral: {
    title: "Integral",
    desc: "Symbolic antiderivatives and definite integration",
    icon: "∫",
    badge: "∫f dx",
    route: "/math/integral-calculator",
    group: "calculus",
  },
  matrix: {
    title: "Matrix Operations",
    desc: "Determinant, inverse, transpose, and eigenvalues",
    icon: "⊡",
    badge: "det/inv",
    route: "/math/matrix-calculator",
    group: "advanced",
  },
  trig: {
    title: "Trig & Logarithm",
    desc: "Evaluate sin, cos, tan, ln, log, and inverse trig functions",
    icon: "~",
    badge: "sin cos",
    route: "/math/trigonometry-calculator",
    group: "advanced",
  },
  graph: {
    title: "Graph Function",
    desc: "Plot f(x) over a range with roots and key features marked",
    icon: "↗",
    badge: "plot",
    route: "/math/graphing-calculator",
    group: "advanced",
  },
};

const GROUPS: { key: OpDef["group"]; label: string }[] = [
  { key: "algebra", label: "Algebra" },
  { key: "calculus", label: "Calculus" },
  { key: "advanced", label: "Advanced" },
];

const opKeys = Object.keys(opDefs) as OpKey[];

export default function AlgebraSidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside
      className={`
      w-64 flex-shrink-0
      border-r border-slate-100 dark:border-slate-800
      flex flex-col
      sticky top-0 h-screen overflow-y-auto
      bg-white dark:bg-slate-950
      scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800
      ${className || ""}
    `}
    >
      {/* ——— Brand header ——— */}
      <Link
        href="/math/algebra-calculator"
        className="
          flex items-center gap-3 px-5 py-5
          border-b border-slate-100 dark:border-slate-800
          hover:bg-slate-50 dark:hover:bg-slate-900/60
          transition-colors duration-150 group flex-shrink-0
        "
      >
        {/* Icon */}
        <div
          className="
          w-9 h-9 rounded-xl flex-shrink-0
          bg-gradient-to-br from-violet-600 to-indigo-600
          dark:from-violet-500 dark:to-indigo-500
          flex items-center justify-center
          text-white text-base font-semibold
          shadow-sm shadow-violet-200 dark:shadow-violet-950
          group-hover:shadow-md group-hover:shadow-violet-200 dark:group-hover:shadow-violet-900
          transition-shadow duration-200
        "
        >
          ∑
        </div>

        {/* Title block */}
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-slate-800 dark:text-slate-100 leading-tight truncate">
            Algebra Engine
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium mt-0.5 truncate">
            12 operations
          </p>
        </div>

        {/* Chevron */}
        <i
          className="fas fa-chevron-right text-[9px] text-slate-300 dark:text-slate-600 ml-auto flex-shrink-0 group-hover:text-slate-400 transition-colors"
          aria-hidden="true"
        />
      </Link>

      {/* ——— Operations list grouped ——— */}
      <nav className="flex-1 py-3 px-2.5" aria-label="Algebra operations">
        {GROUPS.map((group) => {
          const groupOps = opKeys.filter((k) => opDefs[k].group === group.key);
          return (
            <div key={group.key} className="mb-1">
              {/* Group label */}
              <div
                className="
                px-3 py-2 mb-0.5
                text-[10px] font-semibold tracking-[0.1em] uppercase
                text-slate-400 dark:text-slate-500
              "
              >
                {group.label}
              </div>

              {/* Group items */}
              {groupOps.map((op) => {
                const d = opDefs[op];
                const isActive =
                  pathname === d.route || pathname === d.route + "/";

                return (
                  <Link
                    key={op}
                    href={d.route}
                    title={d.desc}
                    className={`
                      relative flex items-center gap-3 px-3 py-2.5 rounded-xl
                      text-sm font-medium w-full
                      transition-all duration-150 group/item
                      ${
                        isActive
                          ? "bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100"
                      }
                    `}
                  >
                    {/* Active left indicator */}
                    {isActive && (
                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-violet-500 dark:bg-violet-400"
                        aria-hidden="true"
                      />
                    )}

                    {/* Icon chip */}
                    <div
                      className={`
                      w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center
                      text-sm font-mono leading-none
                      transition-colors duration-150
                      ${
                        isActive
                          ? "bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-300"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-700 group-hover/item:text-slate-700 dark:group-hover/item:text-slate-300"
                      }
                    `}
                    >
                      {d.icon}
                    </div>

                    {/* Label */}
                    <span className="flex-1 min-w-0 truncate text-[13px]">
                      {d.title}
                    </span>

                    {/* Badge */}
                    <span
                      className={`
                      flex-shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded-md
                      transition-colors duration-150
                      ${
                        isActive
                          ? "bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-700"
                      }
                    `}
                    >
                      {d.badge}
                    </span>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </nav>

      {/* ——— Footer ——— */}
      <div
        className="
        px-5 py-4 mt-auto flex-shrink-0
        border-t border-slate-100 dark:border-slate-800
      "
      >
        <Link
          href="/math"
          className="
            flex items-center gap-2 text-[12px] font-medium
            text-slate-400 dark:text-slate-500
            hover:text-slate-600 dark:hover:text-slate-300
            transition-colors duration-150
          "
        >
          <i className="fas fa-arrow-left text-[10px]" aria-hidden="true" />
          All Math Calculators
        </Link>
      </div>
    </aside>
  );
}
