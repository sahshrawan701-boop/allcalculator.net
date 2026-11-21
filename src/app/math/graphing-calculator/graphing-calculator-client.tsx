"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { graphFunction, CalcResult, GraphData, fmtNum } from "@/lib/algebra-utils";

function GraphCanvas({ data }: { data: GraphData }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.clientWidth,
      H = 240;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    const pad = { top: 20, right: 20, bottom: 40, left: 52 };
    const pw = W - pad.left - pad.right,
      ph = H - pad.top - pad.bottom;
    const validYs = data.ys.filter(
      (y): y is number => y !== null && isFinite(y),
    );
    if (!validYs.length) return;
    let yMin = Math.min(...validYs),
      yMax = Math.max(...validYs);
    const yRange = yMax - yMin || 2;
    yMin -= yRange * 0.1;
    yMax += yRange * 0.1;
    const toX = (x: number) =>
      pad.left + ((x - data.xMin) / (data.xMax - data.xMin)) * pw;
    const toY = (y: number) => pad.top + (1 - (y - yMin) / (yMax - yMin)) * ph;
    
    // Detect theme
    const isDark = document.documentElement.classList.contains('dark');
    
    // Theme-aware colors
    const bgColor = isDark ? '#111118' : '#ffffff';
    const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
    const axisColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)';
    const textColor = isDark ? 'rgba(160,156,200,0.7)' : 'rgba(71,85,105,0.8)';
    
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 6; i++) {
      const x = pad.left + (i * pw) / 6;
      ctx.beginPath();
      ctx.moveTo(x, pad.top);
      ctx.lineTo(x, pad.top + ph);
      ctx.stroke();
    }
    for (let i = 0; i <= 5; i++) {
      const y = pad.top + (i * ph) / 5;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(pad.left + pw, y);
      ctx.stroke();
    }
    ctx.strokeStyle = axisColor;
    ctx.lineWidth = 1;
    const y0 = Math.max(pad.top, Math.min(pad.top + ph, toY(0)));
    const x0 = Math.max(pad.left, Math.min(pad.left + pw, toX(0)));
    ctx.beginPath();
    ctx.moveTo(pad.left, y0);
    ctx.lineTo(pad.left + pw, y0);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x0, pad.top);
    ctx.lineTo(x0, pad.top + ph);
    ctx.stroke();
    ctx.fillStyle = textColor;
    ctx.font = "10px DM Mono, monospace";
    ctx.textAlign = "center";
    for (let i = 0; i <= 6; i++) {
      const xVal = data.xMin + (i * (data.xMax - data.xMin)) / 6;
      ctx.fillText(
        fmtNum(parseFloat(xVal.toFixed(2))),
        pad.left + (i * pw) / 6,
        H - 6,
      );
    }
    ctx.textAlign = "right";
    for (let i = 0; i <= 5; i++) {
      const yVal = yMin + (1 - i / 5) * (yMax - yMin);
      ctx.fillText(
        fmtNum(parseFloat(yVal.toFixed(2))),
        pad.left - 4,
        pad.top + (i * ph) / 5 + 4,
      );
    }
    const grad = ctx.createLinearGradient(pad.left, 0, pad.left + pw, 0);
    grad.addColorStop(0, "#7c6af7");
    grad.addColorStop(0.5, "#38bdf8");
    grad.addColorStop(1, "#a599ff");
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2.5;
    ctx.lineJoin = "round";
    ctx.beginPath();
    let drawing = false;
    for (let i = 0; i < data.xs.length; i++) {
      const y = data.ys[i];
      if (y === null || !isFinite(y)) {
        drawing = false;
        continue;
      }
      const px = toX(data.xs[i]),
        py = toY(y);
      if (!drawing) {
        ctx.moveTo(px, py);
        drawing = true;
      } else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.fillStyle = "#3ecf8e";
    data.roots.forEach((r) => {
      const px = toX(r);
      if (px < pad.left || px > pad.left + pw) return;
      ctx.beginPath();
      ctx.arc(px, y0, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = textColor;
      ctx.font = "9px DM Mono, monospace";
      ctx.textAlign = "center";
      ctx.fillText(fmtNum(r), px, y0 + 14);
      ctx.fillStyle = "#3ecf8e";
    });
  }, [data]);
  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-[240px] bg-white dark:bg-slate-900"
    />
  );
}

export default function GraphingCalculatorClient() {
  const [expression, setExpression] = useState("x^2 - 4");
  const [xMin, setXMin] = useState("-10");
  const [xMax, setXMax] = useState("10");
  const [result, setResult] = useState<CalcResult | null>(null);

  const handleCalculate = useCallback(() => {
    const res = graphFunction(expression, parseFloat(xMin), parseFloat(xMax));
    setResult(res);
  }, [expression, xMin, xMax]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCalculate();
  };

  const examples = [
    "x^2 - 4",
    "sin(x)",
    "x^3 - 3*x",
    "1/(1+e^(-x))",
    "cos(x) * x",
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6">
      <div className="mb-2">
        <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Graphing Calculator</div>
        <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">Plot f(x) over a range with roots and key features marked</div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 flex flex-col gap-4 shadow-sm">
        <div className="flex gap-3.5 items-start">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">f(x) expression</label>
            <input
              className="bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-800 dark:text-slate-100 font-mono text-sm w-full outline-none focus:border-purple-500 dark:focus:border-purple-400 placeholder-slate-400"
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              onKeyDown={handleKey}
              placeholder="e.g. x^2 - 4"
            />
          </div>
          <div className="flex flex-col gap-2 w-24 sm:w-28">
            <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">x min</label>
            <input
              className="bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-800 dark:text-slate-100 font-mono text-sm w-full outline-none focus:border-purple-500 dark:focus:border-purple-400 placeholder-slate-400"
              value={xMin}
              onChange={(e) => setXMin(e.target.value)}
              onKeyDown={handleKey}
            />
          </div>
          <div className="flex flex-col gap-2 w-24 sm:w-28">
            <label className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">x max</label>
            <input
              className="bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-xl p-3 text-slate-800 dark:text-slate-100 font-mono text-sm w-full outline-none focus:border-purple-500 dark:focus:border-purple-400 placeholder-slate-400"
              value={xMax}
              onChange={(e) => setXMax(e.target.value)}
              onKeyDown={handleKey}
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
            ⟹ Plot Graph
          </button>
        </div>
      </div>

      <div>
        {!result ? (
          <div className="bg-white dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 sm:p-12 md:p-16 text-center flex flex-col items-center gap-3">
            <div className="text-3xl sm:text-4xl text-slate-400 dark:text-slate-500 mb-1">∅</div>
            <div className="text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-300">Enter an expression above</div>
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
                  {result.main && (
                    <span className="text-purple-600 dark:text-purple-400 font-medium">{result.main}</span>
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

            {result.graphData && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Graph: {result.graphData.expr}</span>
                </div>
                <GraphCanvas data={result.graphData} />
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
                        <div className="font-mono text-sm text-slate-800 dark:text-slate-100 leading-relaxed">
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
