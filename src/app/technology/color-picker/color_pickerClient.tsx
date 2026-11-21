// color_pickerClient.tsx
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface HSL {
  h: number; // 0–360
  s: number; // 0–100
  l: number; // 0–100
  a: number; // 0–1
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

type TabId = "harmonies" | "palettes" | "formats";

interface HarmonyColor {
  h: number;
  s: number;
  l: number;
  label: string;
}

interface HarmonyGroup {
  label: string;
  colors: HarmonyColor[];
}

// ─── Color Utilities ──────────────────────────────────────────────────────────

function hslToRgb(h: number, s: number, l: number): RGB {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return {
    r: Math.round(f(0) * 255),
    g: Math.round(f(8) * 255),
    b: Math.round(f(4) * 255),
  };
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hexToRgb(hex: string): RGB {
  let h = hex.replace("#", "");
  if (h.length === 3)
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  const n = parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")
  );
}

function hslStr(h: number, s: number, l: number): string {
  return `hsl(${h},${s}%,${l}%)`;
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v));
}

// HSL → HSV for spectrum positioning
function hslToHsv(s: number, l: number): { sv: number; v: number } {
  const sl = s / 100;
  const ll = l / 100;
  const v = ll + sl * Math.min(ll, 1 - ll);
  const sv = v ? 2 * (1 - ll / v) : 0;
  return { sv, v };
}

// HSV → HSL for spectrum picking
function hsvToHsl(sv: number, v: number): [number, number] {
  const l = ((2 - sv) * v) / 2;
  const s = l && l < 1 ? (sv * v) / (l < 0.5 ? 2 * l : 2 - 2 * l) : sv;
  return [Math.round(s * 100), Math.round(l * 100)];
}

// ─── Sub-components ───────────────────────────────────────────────────────────

// Checkerboard background for alpha
function CheckerPattern({ size = 8 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{ position: "absolute", inset: 0, borderRadius: "inherit" }}
    >
      <defs>
        <pattern
          id="checker"
          x="0"
          y="0"
          width={size * 2}
          height={size * 2}
          patternUnits="userSpaceOnUse"
        >
          <rect width={size} height={size} fill="#aaa" />
          <rect x={size} y={size} width={size} height={size} fill="#aaa" />
          <rect x={size} width={size} height={size} fill="#eee" />
          <rect y={size} width={size} height={size} fill="#eee" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#checker)" />
    </svg>
  );
}

// ─── Spectrum Canvas ──────────────────────────────────────────────────────────

interface SpectrumProps {
  hsl: HSL;
  onChange: (s: number, l: number) => void;
}

function Spectrum({ hsl, onChange }: SpectrumProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;

    const gS = ctx.createLinearGradient(0, 0, W, 0);
    gS.addColorStop(0, "#fff");
    gS.addColorStop(1, hslStr(hsl.h, 100, 50));
    ctx.fillStyle = gS;
    ctx.fillRect(0, 0, W, H);

    const gL = ctx.createLinearGradient(0, 0, 0, H);
    gL.addColorStop(0, "rgba(0,0,0,0)");
    gL.addColorStop(1, "#000");
    ctx.fillStyle = gL;
    ctx.fillRect(0, 0, W, H);
  }, [hsl.h]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    canvas.width = wrap.offsetWidth;
    canvas.height = wrap.offsetHeight;
    setCanvasSize({ width: canvas.width, height: canvas.height });
    draw();
  }, [draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ro = new ResizeObserver(() => {
      canvas.width = wrap.offsetWidth;
      canvas.height = wrap.offsetHeight;
      setCanvasSize({ width: canvas.width, height: canvas.height });
      draw();
    });
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [draw]);

  const pick = useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      const wrap = wrapRef.current;
      const canvas = canvasRef.current;
      if (!wrap || !canvas) return;
      const rect = wrap.getBoundingClientRect();
      const px = clamp(e.clientX - rect.left, 0, canvas.width);
      const py = clamp(e.clientY - rect.top, 0, canvas.height);
      const sv = clamp(px / canvas.width, 0, 1);
      const v = clamp(1 - py / canvas.height, 0, 1);
      const [s, l] = hsvToHsl(sv, v);
      onChange(s, l);
    },
    [onChange],
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (isDragging) pick(e);
    };
    const onUp = () => {
      setIsDragging(false);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [pick, isDragging]);

  const { sv, v } = hslToHsv(hsl.s, hsl.l);
  const thumbX = sv * canvasSize.width;
  const thumbY = (1 - v) * canvasSize.height;

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden cursor-crosshair shadow-inner"
      style={{ border: "2px solid var(--border-color)" }}
      onMouseDown={(e) => {
        setIsDragging(true);
        pick(e);
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
      {/* Thumb */}
      <div
        className="absolute w-6 h-6 rounded-full pointer-events-none shadow-2xl"
        style={{
          left: thumbX,
          top: thumbY,
          border: "3px solid #fff",
          boxShadow: "0 0 0 2px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.4)",
          transform: "translate(-50%,-50%)",
          transition: isDragging ? "none" : "left .1s, top .1s",
        }}
      />
    </div>
  );
}

// ─── Slider ───────────────────────────────────────────────────────────────────

interface SliderProps {
  type: "hue" | "sat" | "lit" | "alpha";
  hsl: HSL;
  onChange: (val: number) => void;
}

function Slider({ type, hsl, onChange }: SliderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [trackWidth, setTrackWidth] = useState(0);

  const drawTrack = useCallback(() => {
    const canvas = canvasRef.current;
    const track = trackRef.current;
    if (!canvas || !track) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = (canvas.width = track.offsetWidth);
    const H = (canvas.height = track.offsetHeight);
    setTrackWidth(track.offsetWidth);

    if (type === "alpha") {
      // Checker
      const cs = 5;
      for (let x = 0; x < W; x += cs)
        for (let y = 0; y < H; y += cs) {
          ctx.fillStyle =
            (Math.floor(x / cs) + Math.floor(y / cs)) % 2 === 0
              ? "#aaa"
              : "#eee";
          ctx.fillRect(x, y, cs, cs);
        }
    }

    let g: CanvasGradient;
    if (type === "hue") {
      g = ctx.createLinearGradient(0, 0, W, 0);
      for (let i = 0; i <= 12; i++)
        g.addColorStop(i / 12, `hsl(${i * 30},100%,50%)`);
    } else if (type === "sat") {
      g = ctx.createLinearGradient(0, 0, W, 0);
      g.addColorStop(0, hslStr(hsl.h, 0, hsl.l));
      g.addColorStop(1, hslStr(hsl.h, 100, hsl.l));
    } else if (type === "lit") {
      g = ctx.createLinearGradient(0, 0, W, 0);
      g.addColorStop(0, "#000");
      g.addColorStop(0.5, hslStr(hsl.h, hsl.s, 50));
      g.addColorStop(1, "#fff");
    } else {
      const { r, g: gv, b } = hslToRgb(hsl.h, hsl.s, hsl.l);
      g = ctx.createLinearGradient(0, 0, W, 0);
      g.addColorStop(0, `rgba(${r},${gv},${b},0)`);
      g.addColorStop(1, `rgba(${r},${gv},${b},1)`);
    }
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }, [type, hsl]);

  useEffect(() => {
    drawTrack();
  }, [drawTrack]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const ro = new ResizeObserver(drawTrack);
    ro.observe(track);
    return () => ro.disconnect();
  }, [drawTrack]);

  const pick = useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      const track = trackRef.current;
      const canvas = canvasRef.current;
      if (!track || !canvas) return;
      const rect = track.getBoundingClientRect();
      const pct = clamp((e.clientX - rect.left) / rect.width, 0, 1);
      if (type === "hue") onChange(Math.round(pct * 360));
      else if (type === "sat") onChange(Math.round(pct * 100));
      else if (type === "lit") onChange(Math.round(pct * 100));
      else onChange(Math.round(pct * 100) / 100);
    },
    [type, onChange],
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dragging.current) pick(e);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [pick]);

  let pct = 0;
  if (type === "hue") pct = hsl.h / 360;
  else if (type === "sat") pct = hsl.s / 100;
  else if (type === "lit") pct = hsl.l / 100;
  else pct = hsl.a;

  const thumbX = pct * trackWidth;

  const { r, g, b } = hslToRgb(hsl.h, hsl.s, hsl.l);
  let thumbBg = hslStr(hsl.h, hsl.s, hsl.l);
  if (type === "hue") thumbBg = hslStr(hsl.h, 100, 50);
  else if (type === "alpha") thumbBg = `rgba(${r},${g},${b},${hsl.a})`;

  const labels = { hue: "H", sat: "S", lit: "L", alpha: "A" };
  const valLabels: Record<string, string> = {
    hue: `${Math.round(hsl.h)}°`,
    sat: `${Math.round(hsl.s)}%`,
    lit: `${Math.round(hsl.l)}%`,
    alpha: `${Math.round(hsl.a * 100)}%`,
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] tracking-[0.1em] w-6 uppercase text-slate-500 dark:text-slate-400 font-mono font-medium">
        {labels[type]}
      </span>
      <div
        ref={trackRef}
        className="flex-1 relative h-4 rounded-full overflow-hidden cursor-pointer shadow-inner"
        onMouseDown={(e) => {
          dragging.current = true;
          pick(e);
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%", display: "block" }}
        />
        <div
          className="absolute top-1/2 w-5 h-5 rounded-full pointer-events-none shadow-lg"
          style={{
            left: thumbX,
            transform: "translate(-50%, -50%)",
            border: "2.5px solid #fff",
            boxShadow: "0 0 0 1.5px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.4)",
            background: thumbBg,
          }}
        />
      </div>
      <span className="text-[11px] tracking-[0.06em] w-10 text-right text-slate-800 dark:text-slate-400 font-mono font-semibold">
        {valLabels[type]}
      </span>
    </div>
  );
}

// ─── Copy Button ──────────────────────────────────────────────────────────────

function CopyButton({
  value,
  label = "copy",
  onCopied,
  className = "",
}: {
  value: string;
  label?: string;
  onCopied?: () => void;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).catch(() => {});
    setCopied(true);
    onCopied?.();
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-[0.06em] transition-all duration-150 ${
        copied
          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-800"
          : "bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
      } ${className}`}
    >
      {copied ? "copied!" : label}
    </button>
  );
}

// ─── Harmonies Tab ────────────────────────────────────────────────────────────

function HarmoniesTab({
  hsl,
  onPick,
}: {
  hsl: HSL;
  onPick: (h: number, s: number, l: number) => void;
}) {
  const { h, s, l } = hsl;
  const groups: HarmonyGroup[] = [
    {
      label: "Complementary",
      colors: [
        { h, s, l, label: "base" },
        { h: (h + 180) % 360, s, l, label: "comp" },
      ],
    },
    {
      label: "Split Complement",
      colors: [
        { h, s, l, label: "base" },
        { h: (h + 150) % 360, s, l, label: "−150°" },
        { h: (h + 210) % 360, s, l, label: "+150°" },
      ],
    },
    {
      label: "Analogous",
      colors: [
        { h: (h + 330) % 360, s, l, label: "−30°" },
        { h, s, l, label: "base" },
        { h: (h + 30) % 360, s, l, label: "+30°" },
      ],
    },
    {
      label: "Triadic",
      colors: [
        { h, s, l, label: "base" },
        { h: (h + 120) % 360, s, l, label: "+120°" },
        { h: (h + 240) % 360, s, l, label: "+240°" },
      ],
    },
    {
      label: "Tetradic",
      colors: [
        { h, s, l, label: "base" },
        { h: (h + 90) % 360, s, l, label: "+90°" },
        { h: (h + 180) % 360, s, l, label: "+180°" },
        { h: (h + 270) % 360, s, l, label: "+270°" },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {groups.map((group) => (
        <div key={group.label}>
          <div className="text-[10px] tracking-[0.08em] uppercase mb-3 text-slate-500 dark:text-slate-400 font-mono font-medium">
            {group.label}
          </div>
          <div className="flex gap-2">
            {group.colors.map((col, i) => {
              const hex = rgbToHex(
                ...(Object.values(hslToRgb(col.h, col.s, col.l)) as [
                  number,
                  number,
                  number,
                ]),
              );
              return (
                <div
                  key={i}
                  title={hex.toUpperCase()}
                  onClick={() => onPick(col.h, col.s, col.l)}
                  className="flex-1 h-10 rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg flex-shrink-0 relative group"
                  style={{
                    background: hslStr(col.h, col.s, col.l),
                    border:
                      i === 0
                        ? "2px solid rgba(255,255,255,0.4)"
                        : "1px solid var(--border-color)",
                  }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl" />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Palettes Tab ─────────────────────────────────────────────────────────────

function PalettesTab({
  hsl,
  onPick,
}: {
  hsl: HSL;
  onPick: (h: number, s: number, l: number) => void;
}) {
  const palettes = [
    {
      name: "Tints",
      colors: Array.from({ length: 9 }, (_, i) => ({
        h: hsl.h,
        s: hsl.s,
        l: 10 + i * 10,
      })),
    },
    {
      name: "Shades",
      colors: Array.from({ length: 9 }, (_, i) => ({
        h: hsl.h,
        s: Math.max(0, hsl.s * (1 - i * 0.1)),
        l: Math.max(0, hsl.l * (1 - i * 0.1)),
      })),
    },
    {
      name: "Muted",
      colors: Array.from({ length: 7 }, (_, i) => ({
        h: (hsl.h + i * 15) % 360,
        s: Math.max(10, hsl.s - 40),
        l: hsl.l,
      })),
    },
    {
      name: "Vivid",
      colors: Array.from({ length: 7 }, (_, i) => ({
        h: (hsl.h + i * 20) % 360,
        s: 100,
        l: 55,
      })),
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {palettes.map((p) => (
        <div key={p.name}>
          <div className="text-[10px] tracking-[0.08em] uppercase mb-3 text-slate-500 dark:text-slate-400 font-mono font-medium">
            {p.name}
          </div>
          <div className="flex gap-2 flex-wrap">
            {p.colors.map((col, i) => (
              <div
                key={i}
                title={rgbToHex(
                  ...(Object.values(hslToRgb(col.h, col.s, col.l)) as [
                    number,
                    number,
                    number,
                  ]),
                ).toUpperCase()}
                onClick={() => onPick(col.h, col.s, col.l)}
                className="w-8 h-8 rounded-xl cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg flex-shrink-0 relative group"
                style={{
                  background: hslStr(col.h, col.s, col.l),
                  border: "1.5px solid transparent",
                }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Formats Tab ──────────────────────────────────────────────────────────────

function FormatsTab({ hsl }: { hsl: HSL }) {
  const { h, s, l, a } = hsl;
  const { r, g, b } = hslToRgb(h, s, l);
  const hex = rgbToHex(r, g, b);
  const hex8 =
    hex +
    Math.round(a * 255)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase();

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const formats = [
    { key: "HEX", value: hex.toUpperCase() },
    { key: "HEX8", value: hex8.toUpperCase() },
    { key: "RGB", value: `rgb(${r}, ${g}, ${b})` },
    { key: "RGBA", value: `rgba(${r}, ${g}, ${b}, ${a})` },
    { key: "HSL", value: `hsl(${h}, ${s}%, ${l}%)` },
    { key: "HSLA", value: `hsla(${h}, ${s}%, ${l}%, ${a})` },
    { key: "CSS var", value: `--color: ${hex.toUpperCase()}` },
    {
      key: "HSB/V",
      value: (() => {
        const { sv: sv2, v: v2 } = hslToHsv(s, l);
        return `hsb(${h}, ${Math.round(sv2 * 100)}%, ${Math.round(v2 * 100)}%)`;
      })(),
    },
    {
      key: "OKLCH",
      value: (() => {
        const nr = r / 255;
        const ng = g / 255;
        const nb = b / 255;
        const L2 = Math.cbrt(0.4122 * nr + 0.5363 * ng + 0.0514 * nb);
        const a2 = Math.cbrt(0.2119 * nr + 0.6807 * ng + 0.1074 * nb);
        const b2 = Math.cbrt(0.0883 * nr + 0.2817 * ng + 0.6299 * nb);
        const L3 = 0.2104 * L2 + 0.7936 * a2 - 0.004 * b2;
        const A = 1.9779 * L2 - 2.4285 * a2 + 0.4505 * b2;
        const B = 0.0259 * L2 + 0.7827 * a2 - 0.8086 * b2;
        const C = Math.sqrt(A * A + B * B);
        const H2 = ((Math.atan2(B, A) * 180) / Math.PI + 360) % 360;
        return `oklch(${(L3 * 100).toFixed(1)}% ${C.toFixed(3)} ${H2.toFixed(1)})`;
      })(),
    },
  ];

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value).catch(() => {});
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
      {formats.map((f, i) => (
        <div
          key={f.key}
          className={`flex justify-between items-center px-4 py-3 gap-3 transition-colors hover:bg-white/50 dark:hover:bg-slate-700/30 ${
            i < formats.length - 1
              ? "border-b border-slate-200 dark:border-slate-800"
              : ""
          }`}
        >
          <span className="text-[10px] tracking-[0.08em] text-slate-500 dark:text-slate-400 font-mono flex-shrink-0 font-medium w-12">
            {f.key}
          </span>
          <span className="text-[12px] text-slate-800 dark:text-slate-100 font-mono overflow-hidden text-ellipsis whitespace-nowrap flex-1">
            {f.value}
          </span>
          <button
            onClick={() => handleCopy(f.key, f.value)}
            aria-label={`Copy ${f.key} format`}
            className={`bg-transparent border-none cursor-pointer font-mono text-lg px-2 py-1 rounded-xl transition-all duration-200 flex-shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center ${
              copiedKey === f.key
                ? "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30"
                : "text-slate-400 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-800 dark:hover:text-slate-300"
            }`}
          >
            {copiedKey === f.key ? "✓" : "⎘"}
          </button>
        </div>
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ColorPickerPage() {
  const [hsl, setHsl] = useState<HSL>({ h: 240, s: 100, l: 80, a: 1 });
  const [tab, setTab] = useState<TabId>("harmonies");
  const [history, setHistory] = useState<string[]>([]);
  const [hexInput, setHexInput] = useState("#C8B8FF");
  const isHexInputFocused = useRef(false);

  // Derived
  const { r, g, b } = hslToRgb(hsl.h, hsl.s, hsl.l);
  const currentHex = rgbToHex(r, g, b).toUpperCase();

  // Sync hex input when color changes externally (not from hex input itself)
  useEffect(() => {
    if (!isHexInputFocused.current) {
      setHexInput(currentHex);
    }
  }, [currentHex]);

  const updateHsl = useCallback((updates: Partial<HSL>) => {
    setHsl((prev) => ({ ...prev, ...updates }));
  }, []);

  const addHistory = useCallback((hex: string) => {
    setHistory((prev) => {
      const filtered = prev.filter((h) => h !== hex);
      return [hex, ...filtered].slice(0, 14);
    });
  }, []);

  const pickFromHistory = (hex: string) => {
    const { r, g, b } = hexToRgb(hex);
    const [h, s, l] = rgbToHsl(r, g, b);
    setHsl((prev) => ({ ...prev, h, s, l }));
  };

  const handleHexInput = (val: string) => {
    setHexInput(val);
    let v = val.trim();
    if (!v.startsWith("#")) v = "#" + v;
    if (/^#[0-9a-fA-F]{6}$/.test(v)) {
      const { r, g, b } = hexToRgb(v);
      const [h, s, l] = rgbToHsl(r, g, b);
      setHsl((prev) => ({ ...prev, h, s, l }));
    }
  };

  const handleHexFocus = () => {
    isHexInputFocused.current = true;
  };

  const handleHexBlur = () => {
    isHexInputFocused.current = false;
    setHexInput(currentHex);
  };

  const handleEyedropper = async () => {
    const EyeDropper = (
      window as unknown as {
        EyeDropper?: new () => { open: () => Promise<{ sRGBHex: string }> };
      }
    ).EyeDropper;
    if (!EyeDropper) {
      alert("EyeDropper API not supported in this browser.");
      return;
    }
    try {
      const dropper = new EyeDropper();
      const result = await dropper.open();
      const { r, g, b } = hexToRgb(result.sRGBHex);
      const [h, s, l] = rgbToHsl(r, g, b);
      setHsl((prev) => ({ ...prev, h, s, l }));
      addHistory(rgbToHex(r, g, b).toUpperCase());
    } catch {
      // User cancelled
    }
  };

  const swatchBg = hsl.a < 1 ? undefined : `rgb(${r}, ${g}, ${b})`;

  const tabs: { id: TabId; label: string }[] = [
    { id: "harmonies", label: "Harmonies" },
    { id: "palettes", label: "Palettes" },
    { id: "formats", label: "Formats" },
  ];

  // CSS custom properties for dynamic border colors
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--border-color", "#e2e8f0");
    const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const updateBorder = () => {
      if (
        darkMedia.matches ||
        document.documentElement.classList.contains("dark")
      ) {
        root.style.setProperty("--border-color", "#334155");
      } else {
        root.style.setProperty("--border-color", "#e2e8f0");
      }
    };
    updateBorder();
    const observer = new MutationObserver(updateBorder);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    darkMedia.addEventListener("change", updateBorder);
    return () => {
      observer.disconnect();
      darkMedia.removeEventListener("change", updateBorder);
    };
  }, []);

  return (
    <>
      {/* Inject CSS custom properties and font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300&display=swap');
        :root { 
          --cp-mono: 'DM Mono', monospace; 
          --cp-serif: 'Fraunces', serif;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero */}
        <section
          className="rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-10 text-white py-8 sm:py-12 px-6 sm:px-8 md:px-12 relative group"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.15),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,.1),transparent_50%)]" />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-white/80">Professional Tool</span>
            </div>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>HEX, RGB, HSL</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Color Harmonies</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Instant Copy</span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {/* ── LEFT ── */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-sm">
            {/* Spectrum */}
            <Spectrum hsl={hsl} onChange={(s, l) => updateHsl({ s, l })} />

            {/* Sliders */}
            <div className="flex flex-col gap-4 mt-6">
              {(["hue", "sat", "lit", "alpha"] as const).map((type) => (
                <Slider
                  key={type}
                  type={type}
                  hsl={hsl}
                  onChange={(val) => {
                    if (type === "hue") updateHsl({ h: val });
                    else if (type === "sat") updateHsl({ s: val });
                    else if (type === "lit") updateHsl({ l: val });
                    else updateHsl({ a: val });
                  }}
                />
              ))}
            </div>

            {/* Hex input + eyedropper */}
            <div className="flex gap-3 items-center mt-6">
              <input
                value={hexInput}
                onChange={(e) => handleHexInput(e.target.value)}
                onFocus={handleHexFocus}
                onBlur={handleHexBlur}
                className="flex-1 bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 font-mono text-sm py-3 px-4 rounded-2xl outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                spellCheck={false}
                placeholder="#000000"
              />
              <button
                onClick={handleEyedropper}
                title="Eyedropper"
                className="bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 px-4 rounded-2xl cursor-pointer text-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 flex-shrink-0 border border-transparent"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>

            {/* History */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] tracking-[0.1em] uppercase text-slate-500 dark:text-slate-400 font-mono">
                  Recent Colors
                </div>
                {history.length > 0 && (
                  <button
                    onClick={() => setHistory([])}
                    className="text-[10px] text-slate-400 hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className="flex gap-2 flex-wrap">
                {history.map((hex) => (
                  <div
                    key={hex}
                    title={hex.toUpperCase()}
                    onClick={() => pickFromHistory(hex)}
                    className="w-8 h-8 rounded-xl cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg flex-shrink-0 border border-slate-200 dark:border-slate-800"
                    style={{ background: hex }}
                  />
                ))}
                {history.length === 0 && (
                  <span className="text-[11px] text-slate-400 dark:text-slate-400 py-1">
                    Pick a color to save history
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex flex-col gap-5">
            {/* Main swatch */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 overflow-hidden">
              <div className="h-40 relative" style={{ background: swatchBg }}>
                {hsl.a < 1 && (
                  <>
                    <CheckerPattern />
                    <div
                      className="absolute inset-0"
                      style={{ background: `rgba(${r},${g},${b},${hsl.a})` }}
                    />
                  </>
                )}
              </div>
              <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-800 p-5 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl border-2 border-slate-200 dark:border-slate-800 flex-shrink-0" style={{ background: currentHex }} />
                  <div className="flex-1">
                    <div className="text-[10px] tracking-[0.1em] uppercase text-slate-500 dark:text-slate-400 font-mono mb-1">
                      HEX
                    </div>
                    <div className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-[0.05em] font-mono">
                      {currentHex}
                    </div>
                  </div>
                  <CopyButton
                    value={currentHex}
                    onCopied={() => addHistory(currentHex)}
                    className="px-4 py-2.5"
                  />
                </div>
              </div>
            </div>

            {/* RGB + HSL values */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 p-5">
              <div className="grid grid-cols-6 gap-2">
                {[
                  { k: "R", v: r },
                  { k: "G", v: g },
                  { k: "B", v: b },
                  { k: "H", v: `${hsl.h}°` },
                  { k: "S", v: `${hsl.s}%` },
                  { k: "L", v: `${hsl.l}%` },
                ].map(({ k, v }) => (
                  <div
                    key={k}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="text-[9px] tracking-[0.12em] uppercase mb-1.5 text-slate-500 dark:text-slate-400 font-mono">
                      {k}
                    </div>
                    <div className="text-sm font-bold text-slate-800 dark:text-slate-100 font-mono">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1.5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-1.5 border border-slate-200 dark:border-slate-800">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex-1 py-2.5 text-[10px] tracking-[0.06em] uppercase text-center rounded-xl cursor-pointer transition-all duration-200 font-mono font-medium ${
                    tab === t.id
                      ? "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 shadow-md border border-slate-200 dark:border-slate-600"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-700/50 border border-transparent"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 p-5 min-h-[300px]">
              {tab === "harmonies" && (
                <HarmoniesTab
                  hsl={hsl}
                  onPick={(h, s, l) => {
                    updateHsl({ h, s, l });
                    addHistory(
                      rgbToHex(
                        ...(Object.values(hslToRgb(h, s, l)) as [
                          number,
                          number,
                          number,
                        ]),
                      ).toUpperCase(),
                    );
                  }}
                />
              )}
              {tab === "palettes" && (
                <PalettesTab
                  hsl={hsl}
                  onPick={(h, s, l) => {
                    updateHsl({ h, s, l });
                    addHistory(
                      rgbToHex(
                        ...(Object.values(hslToRgb(h, s, l)) as [
                          number,
                          number,
                          number,
                        ]),
                      ).toUpperCase(),
                    );
                  }}
                />
              )}
              {tab === "formats" && <FormatsTab hsl={hsl} />}
            </div>
          </div>
        </div>

        {/* Info section */}
        <article className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/60 dark:border-slate-800/60">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              About Color Harmonies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-800 dark:text-slate-400 leading-relaxed">
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                What are Color Harmonies?
              </h3>
              <p>
                Color harmonies are combinations of colors that create visual
                balance and are pleasing to the eye. They&apos;re based on the
                color wheel and mathematical relationships between hues.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Harmony Types
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                  <span><span className="font-semibold text-slate-800 dark:text-slate-100">Complementary:</span> Colors opposite each other (180° apart)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 flex-shrink-0" />
                  <span><span className="font-semibold text-slate-800 dark:text-slate-100">Analogous:</span> Colors adjacent to each other (30° apart)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                  <span><span className="font-semibold text-slate-800 dark:text-slate-100">Triadic:</span> Three evenly spaced colors (120° apart)</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
