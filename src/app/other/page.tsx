import { Metadata } from "next";
import Link from "next/link";
import { generateCategoryMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateCategoryMetadata("other");

export default function OtherPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 pb-16">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          Other Calculators
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Miscellaneous calculators for various needs.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-slate-100 dark:border-slate-800 p-8">
        <p className="text-slate-600 dark:text-slate-400 text-center py-12">
          No calculators available in this category yet.
        </p>
        <div className="text-center mt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <i className="fas fa-home" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
