"use client";

import { useState } from "react";
import Link from "next/link";

type SizeUnit = "KB" | "MB" | "GB" | "TB";
type SpeedUnit = "Kbps" | "Mbps" | "Gbps" | "KB/s" | "MB/s";

function calculateTime(
  size: number,
  sizeUnit: SizeUnit,
  speed: number,
  speedUnit: SpeedUnit,
) {
  if (size <= 0 || speed <= 0) return 0;

  // Convert size to bits
  let sizeBits = size * 8;
  if (sizeUnit === "KB") sizeBits *= 1024;
  else if (sizeUnit === "MB") sizeBits *= 1024 * 1024;
  else if (sizeUnit === "GB") sizeBits *= 1024 * 1024 * 1024;
  else if (sizeUnit === "TB") sizeBits *= 1024 * 1024 * 1024 * 1024;

  // Convert speed to bits per second
  let speedBps = speed;
  if (speedUnit === "Kbps") speedBps *= 1000;
  else if (speedUnit === "Mbps") speedBps *= 1000 * 1000;
  else if (speedUnit === "Gbps") speedBps *= 1000 * 1000 * 1000;
  else if (speedUnit === "KB/s") speedBps *= 1024 * 8;
  else if (speedUnit === "MB/s") speedBps *= 1024 * 1024 * 8;

  return sizeBits / speedBps; // in seconds
}

function formatTime(seconds: number) {
  if (seconds === 0) return "--";
  if (!isFinite(seconds)) return "Infinity";

  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const parts = [];
  if (d > 0) parts.push(`${d} days`);
  if (h > 0) parts.push(`${h} hours`);
  if (m > 0) parts.push(`${m} mins`);
  if (s > 0 || parts.length === 0) parts.push(`${s} secs`);

  return parts.join(", ");
}

export default function DownloadTimeCalculatorPage() {
  const [size, setSize] = useState<number>(10);
  const [sizeUnit, setSizeUnit] = useState<SizeUnit>("GB");
  const [speed, setSpeed] = useState<number>(100);
  const [speedUnit, setSpeedUnit] = useState<SpeedUnit>("Mbps");
  const [result, setResult] = useState<string>("14 mins, 18 secs");

  function calculate() {
    const resSecs = calculateTime(size, sizeUnit, speed, speedUnit);
    setResult(formatTime(resSecs));
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
     

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
        {/* Input Panel */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 sm:mb-6 flex items-center gap-2">
            <i className="fas fa-edit text-sky-500" aria-hidden="true" /> Enter
            File & Speed Details
          </h2>

          <div className="grid grid-cols-[2fr_1fr] gap-4 mb-5">
            <div>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                File Size
              </label>
              <input
                type="number"
                value={size}
                min={0}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Unit
              </label>
              <select
                value={sizeUnit}
                onChange={(e) => setSizeUnit(e.target.value as SizeUnit)}
                className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500"
              >
                <option value="KB">KB</option>
                <option value="MB">MB</option>
                <option value="GB">GB</option>
                <option value="TB">TB</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-[2fr_1fr] gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Internet Speed
              </label>
              <input
                type="number"
                value={speed}
                min={0}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Unit
              </label>
              <select
                value={speedUnit}
                onChange={(e) => setSpeedUnit(e.target.value as SpeedUnit)}
                className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500"
              >
                <option value="Kbps">Kbps</option>
                <option value="Mbps">Mbps</option>
                <option value="Gbps">Gbps</option>
                <option value="KB/s">KB/s</option>
                <option value="MB/s">MB/s</option>
              </select>
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full py-3.5 sm:py-4 bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-200 text-sm sm:text-base"
          >
            <i className="fas fa-calculator" aria-hidden="true" /> Calculate
            Time
          </button>
        </section>

        {/* Results Panel */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center">
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 sm:mb-6 flex items-center justify-center gap-2">
            <i className="fas fa-clock text-sky-500" aria-hidden="true" />{" "}
            Estimated Time
          </h2>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-800 mb-4 sm:mb-5">
            <div
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#0ea5e9" }}
            >
              {result}
            </div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              To transfer {size} {sizeUnit} at {speed} {speedUnit}
            </div>
          </div>
        </section>
      </div>

      {/* Info section */}
      <article className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800 mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4">
          Understanding Download Speeds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Bits vs. Bytes
            </h3>
            <p>
              Internet speeds are typically measured in <strong>bits</strong>{" "}
              per second (like Mbps), while file sizes are measured in{" "}
              <strong>bytes</strong> (like MB or GB). There are 8 bits in 1
              byte. That means a 100 Mbps connection translates to a theoretical
              maximum of 12.5 MB/s.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Real-world Speeds
            </h3>
            <p>
              Actual download times are often slower than theoretical times due
              to network overhead, server limits, and routing inefficiencies. It
              is common to experience speeds about 10-20% slower than your
              connection&apos;s maximum capacity.
            </p>
          </div>
        </div>
      </article>

      <div className="text-center">
        <Link
          href="/technology"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" /> All Technology Calculators
        </Link>
      </div>
    </div>
  );
}
