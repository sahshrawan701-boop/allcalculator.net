"use client";

import { useState, useCallback } from "react";
import { solveQuadratic, CalcResult, RootValue, fmtNum } from "@/lib/algebra-utils";

export default function QuadraticSolverClient() {
  const [expression, setExpression] = useState("x^2 + 5x + 6");
  const [result, setResult] = useState<CalcResult | null>(null);

  const handleCalculate = useCallback(() => {
    const res = solveQuadratic(expression);
    setResult(res);
  }, [expression]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCalculate();
  };

  const examples = [
    "x^2 + 5x + 6",
    "x^2 - 4",
    "2x^2 + 3x - 2",
    "x^2 + x + 1",
    "3x^2 - 12",
  ];

  const isComplex = (r: number | RootValue): r is RootValue =>
    typeof r === "object" && r !== null && "im" in r;

  const renderRoot = (root: number | RootValue, i: number, varName?: string) => {
    let val: string, sub: string;
    if (isComplex(root)) {
      if (Math.abs(root.im) < 1e-10) {
        val = fmtNum(root.re);
        sub = "Real root";
      } else {
        const sign = root.im >= 0 ? "+" : "-";
        val = `${fmtNum(root.re)} ${sign} ${fmtNum(Math.abs(root.im))}i`;
        sub = "Complex root";
      }
    } else {
      val = fmtNum(root);
      sub = "Real root";
    }
    return (
      <div key={i} className="py-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3 last:border-b-0 last:pb-0">
        <div>
          <div className="text-purple-600 dark:text-purple-400 font-medium">
            {varName || "x"}₍{i + 1}₎ = {val}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{sub}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6">
      <div className="mb-2">
        <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Quadratic Solver</div>
        <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">Solve ax² + bx + c = 0 — find real and complex roots, discriminant, vertex</div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 flex flex-col gap-4 shadow-sm">
        <div className="flex gap-3.5 items-start">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">Quadratic Expression (= 0 implied)</label>
            <input
              className="bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-800 dark:text-slate-100 font-mono text-sm w-full outline-none focus:border-purple-500 dark:focus:border-purple-400 placeholder-slate-400"
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              onKeyDown={handleKey}
              placeholder="e.g. x^2 + 5x + 6"
            />
          </div>
        </div>
        <div className="flex gap-3.5 items-start">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono self-center flex-shrink-0">Examples:</span>
          <div className="flex flex-wrap gap-2 pt-1">
            {examples.map((ex, i) => (
              <button
                key={i}
                className="font-mono text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2.5 py-1 cursor-pointer transition-all hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                onClick={() => setExpression(ex)}
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3.5 items-start justify-end">
          <button className="bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 text-white border-none rounded-xl px-6 py-3 font-display text-sm font-semibold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap self-end hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0" onClick={handleCalculate}>
            ⟹ Solve Quadratic
          </button>
        </div>
      </div>

      <div>
        {!result ? (
          <div className="bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 sm:p-12 md:p-16 text-center flex flex-col items-center gap-3">
            <div className="text-3xl sm:text-4xl text-slate-400 dark:text-slate-500 mb-1">∅</div>
            <div className="text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-300">Enter a quadratic expression above</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Results and step-by-step solution will appear here
            </div>
          </div>
        ) : result.error ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-600 dark:text-red-400 font-mono text-sm flex items-center gap-2.5">⚠ {result.error}</div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">{result.type || "Result"}</span>
                <span className={`text-xs font-mono px-2 py-1 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 ${
                  result.status === "success" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" : 
                  result.status === "warning" ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400" : 
                  result.status === "error" ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" : ""
                }`}>
                  {result.statusLabel || "Computed"}
                </span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 sm:p-5">
                <div className="font-mono text-xl sm:text-2xl text-slate-800 dark:text-slate-100 leading-relaxed break-all">
                  {result.roots &&
                    result.roots.map((root, i) =>
                      renderRoot(root, i, result.varName),
                    )}
                  {result.values &&
                    result.values.map((v, i) => (
                      <div key={i} className="py-2 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3 last:border-b-0 last:pb-0">
                        <div>
                          <div className="text-purple-600 dark:text-purple-400 font-medium">
                            {v.label} = {v.value}
                          </div>
                          {v.sub && <div className="text-xs text-slate-500 dark:text-slate-400">{v.sub}</div>}
                        </div>
                      </div>
                    ))}
                  {result.main && !result.roots && !result.values && (
                    <span className="text-purple-600 dark:text-purple-400 font-medium whitespace-pre-line">
                      {result.main}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {result.info && result.info.length > 0 && (
              <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
                {result.info.map((card, i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">{card.label}</div>
                    <div className="font-mono text-sm text-slate-800 dark:text-slate-100 font-medium">{card.value}</div>
                    {card.sub && <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{card.sub}</div>}
                  </div>
                ))}
              </div>
            )}

            {result.steps && result.steps.length > 0 && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Step-by-step solution</span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{result.steps.length} steps</span>
                </div>
                <div className="p-1">
                  {result.steps.map((s, i) => (
                    <div key={i} className="flex gap-3.5 p-3 border-b border-slate-200 dark:border-slate-700 items-start last:border-b-0">
                      <div className="w-[22px] h-[22px] rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-mono font-medium flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                      <div className="flex-1">
                        <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-0.5">{s.title || ""}</div>
                        <div className="font-mono text-sm text-slate-800 dark:text-slate-100 leading-relaxed whitespace-pre-line">
                          {s.expr}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
