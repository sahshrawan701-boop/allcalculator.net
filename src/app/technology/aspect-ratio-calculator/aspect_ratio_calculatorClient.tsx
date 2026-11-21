"use client";

import { useState } from "react";
import Link from "next/link";

export default function AspectRatioCalculatorPage() {
  const [w1, setW1] = useState<number>(16);
  const [h1, setH1] = useState<number>(9);
  const [w2, setW2] = useState<number>(1920);
  const [h2, setH2] = useState<number>(1080);

  function handleW1Change(val: number) {
    setW1(val);
    if (h1 > 0 && val > 0) {
      setH2(Math.round((w2 * h1) / val));
    }
  }

  function handleH1Change(val: number) {
    setH1(val);
    if (w1 > 0 && val > 0) {
      setH2(Math.round((w2 * val) / w1));
    }
  }

  function handleW2Change(val: number) {
    setW2(val);
    if (w1 > 0 && h1 > 0) {
      setH2(Math.round((val * h1) / w1));
    }
  }

  function handleH2Change(val: number) {
    setH2(val);
    if (w1 > 0 && h1 > 0) {
      setW2(Math.round((val * w1) / h1));
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
    

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
        {/* Input Panel */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 sm:mb-6 flex items-center gap-2">
            <i className="fas fa-crop-alt text-purple-500" aria-hidden="true" />{" "}
            Set Aspect Ratio
          </h2>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8 border border-slate-200 dark:border-slate-800">
            <label className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4 text-center uppercase tracking-widest">
              Original Ratio
            </label>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="flex-1">
                <input
                  type="number"
                  value={w1}
                  min={1}
                  onChange={(e) => handleW1Change(Number(e.target.value))}
                  className="w-full text-center px-3 sm:px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-base sm:text-lg font-bold"
                />
                <div className="text-center text-xs text-slate-400 mt-2">
                  Width (W1)
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-400">:</div>
              <div className="flex-1">
                <input
                  type="number"
                  value={h1}
                  min={1}
                  onChange={(e) => handleH1Change(Number(e.target.value))}
                  className="w-full text-center px-3 sm:px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-base sm:text-lg font-bold"
                />
                <div className="text-center text-xs text-slate-400 mt-2">
                  Height (H1)
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 sm:mb-6 flex items-center gap-2 mt-6 sm:mt-8">
            <i className="fas fa-expand text-purple-500" aria-hidden="true" />{" "}
            New Dimensions
          </h2>

          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="flex-1">
              <input
                type="number"
                value={w2}
                min={1}
                onChange={(e) => handleW2Change(Number(e.target.value))}
                className="w-full text-center px-3 sm:px-4 py-3 border-2 border-purple-200 dark:border-purple-900/50 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-lg sm:text-xl font-bold"
              />
              <div className="text-center text-xs text-slate-400 mt-2">
                New Width (W2)
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-400">×</div>
            <div className="flex-1">
              <input
                type="number"
                value={h2}
                min={1}
                onChange={(e) => handleH2Change(Number(e.target.value))}
                className="w-full text-center px-3 sm:px-4 py-3 border-2 border-purple-200 dark:border-purple-900/50 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-lg sm:text-xl font-bold"
              />
              <div className="text-center text-xs text-slate-400 mt-2">
                New Height (H2)
              </div>
            </div>
          </div>
        </section>

        {/* Results Panel */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center">
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 sm:mb-6 flex items-center justify-center gap-2">
            <i className="fas fa-eye text-purple-500" aria-hidden="true" />{" "}
            Visual Preview
          </h2>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border-2 border-slate-200 dark:border-slate-800 mb-4 sm:mb-5 w-full flex items-center justify-center min-h-[250px] sm:min-h-[300px]">
            <div
              className="border-2 border-purple-500 bg-purple-500/10 rounded flex items-center justify-center relative overflow-hidden shadow-inner transition-all duration-300"
              style={{
                width: w1 >= h1 ? "100%" : `${(w1 / h1) * 100}%`,
                height: h1 >= w1 ? "100%" : `${(h1 / w1) * 100}%`,
                maxHeight: "200px",
                maxWidth: "200px",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center flex-col opacity-50">
                <span className="text-xs sm:text-sm font-bold text-purple-600 dark:text-purple-400">
                  {w1}:{h1}
                </span>
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 bg-purple-50 dark:bg-purple-900/20 px-3 sm:px-4 py-3 rounded-lg text-left w-full border border-purple-100 dark:border-purple-800">
            <i className="fas fa-info-circle text-purple-500 mr-2"></i>
            Change any of the values in the <strong>New Dimensions</strong>{" "}
            section and the other value will automatically update to maintain
            the perfect{" "}
            <strong>
              {w1}:{h1}
            </strong>{" "}
            aspect ratio!
          </div>
        </section>
      </div>

      {/* Info section */}
      <article className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800 mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4">
          Common Aspect Ratios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm text-slate-800 dark:text-slate-100">
          <div className="bg-slate-50 dark:bg-slate-900 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="font-bold text-slate-800 dark:text-slate-100 mb-1">
              16:9 (Widescreen)
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
              Standard format for HD video, YouTube, and TVs.
            </p>
            <div className="text-xs font-mono bg-white dark:bg-slate-900 px-2 py-1 rounded inline-block border border-slate-200 dark:border-slate-600">
              1920×1080, 3840×2160
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="font-bold text-slate-800 dark:text-slate-100 mb-1">
              4:3 (Standard)
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
              Old TV sets and computer monitors format.
            </p>
            <div className="text-xs font-mono bg-white dark:bg-slate-900 px-2 py-1 rounded inline-block border border-slate-200 dark:border-slate-600">
              1024×768, 1600×1200
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="font-bold text-slate-800 dark:text-slate-100 mb-1">
              1:1 (Square)
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
              Perfect for Instagram posts and profile pictures.
            </p>
            <div className="text-xs font-mono bg-white dark:bg-slate-900 px-2 py-1 rounded inline-block border border-slate-200 dark:border-slate-600">
              1080×1080, 500×500
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="font-bold text-slate-800 dark:text-slate-100 mb-1">
              9:16 (Vertical)
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
              Standard for TikTok, Shorts, and Instagram Reels.
            </p>
            <div className="text-xs font-mono bg-white dark:bg-slate-900 px-2 py-1 rounded inline-block border border-slate-200 dark:border-slate-600">
              1080×1920, 720×1280
            </div>
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
