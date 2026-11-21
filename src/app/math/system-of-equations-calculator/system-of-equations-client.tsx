"use client";

import { useState, useCallback } from "react";
import { solveSystem, CalcResult } from "@/lib/algebra-utils";

export default function SystemOfEquationsClient() {
  const [eq1, setEq1] = useState("2x + y = 5");
  const [eq2, setEq2] = useState("x - y = 1");
  const [result, setResult] = useState<CalcResult | null>(null);

  const handleCalculate = useCallback(() => {
    const res = solveSystem(eq1, eq2);
    setResult(res);
  }, [eq1, eq2]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCalculate();
  };

  const examples = [
    ["2x + y = 5", "x - y = 1"],
    ["3x + 2y = 12", "x - y = 1"],
    ["x + y = 7", "2x - y = 2"],
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6">
      <div className="mb-2">
        <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">System of Equations Calculator</div>
        <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">Solve 2×2 linear systems using Cramer&apos;s Rule</div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 flex flex-col gap-4 shadow-sm">
        <div className="flex gap-3.5 items-start">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">Equation 1</label>
            <input
              className="bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-800 dark:text-slate-100 font-mono text-sm w-full outline-none focus:border-purple-500 dark:focus:border-purple-400 placeholder-slate-400"
              value={eq1}
              onChange={(e) => setEq1(e.target.value)}
              onKeyDown={handleKey}
              placeholder="e.g. 2x + y = 5"
            />
          </div>
        </div>
        <div className="flex gap-3.5 items-start">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">Equation 2</label>
            <input
              className="bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-800 dark:text-slate-100 font-mono text-sm w-full outline-none focus:border-purple-500 dark:focus:border-purple-400 placeholder-slate-400"
              value={eq2}
              onChange={(e) => setEq2(e.target.value)}
              onKeyDown={handleKey}
              placeholder="e.g. x - y = 1"
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
                onClick={() => {
                  setEq1(ex[0]);
                  setEq2(ex[1]);
                }}
              >
                {ex[0]} ; {ex[1]}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3.5 items-start justify-end">
          <button className="bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 text-white border-none rounded-xl px-6 py-3 font-display text-sm font-semibold cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap self-end hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0" onClick={handleCalculate}>
            ⟹ Solve System
          </button>
        </div>
      </div>

      <div>
        {!result ? (
          <div className="bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 sm:p-12 md:p-16 text-center flex flex-col items-center gap-3">
            <div className="text-3xl sm:text-4xl text-slate-400 dark:text-slate-500 mb-1">∅</div>
            <div className="text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-300">Enter two equations above</div>
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
                  {result.main && !result.values && (
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
