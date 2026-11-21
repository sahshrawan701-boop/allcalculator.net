'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSavedCalculators } from '@/contexts/SavedCalculatorContext';

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return date.toLocaleDateString();
}

export default function SavedCalculatorsPanel() {
  const { savedCalculators, removeCalculator, clearAllCalculators } = useSavedCalculators();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Saved calculators"
        aria-expanded={isOpen}
        className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-200 flex-shrink-0 relative"
      >
        <i className="fas fa-bookmark text-sm" aria-hidden="true" />
        {savedCalculators.length > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">
            {savedCalculators.length}
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[90]"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="absolute right-0 top-full mt-2 w-96 max-h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-[100]">
            {/* Header */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Saved Calculators
              </h3>
              {savedCalculators.length > 0 && (
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to clear all saved calculators?')) {
                      clearAllCalculators();
                    }
                  }}
                  className="text-xs text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[400px]">
              {savedCalculators.length === 0 ? (
                <div className="p-8 text-center">
                  <i className="fas fa-bookmark text-4xl text-slate-300 dark:text-slate-800 mb-3" />
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    No saved calculators yet
                  </p>
                  <p className="text-slate-400 dark:text-slate-400 text-xs mt-1">
                    Save your calculations for quick access
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-slate-200 dark:divide-slate-700">
                  {savedCalculators.map((calc) => (
                    <div
                      key={calc.id}
                      className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <Link
                          href={calc.calculatorHref}
                          onClick={() => setIsOpen(false)}
                          className="flex-1 min-w-0"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <i
                              className={`fas ${calc.calculatorIcon} text-indigo-600 dark:text-indigo-400 text-sm`}
                              aria-hidden="true"
                            />
                            <span className="font-medium text-slate-900 dark:text-white text-sm truncate">
                              {calc.calculatorName}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                            {(calc as any).parentCategoryId}
                          </p>
                          <p className="text-xs text-slate-400 dark:text-slate-400">
                            Saved {formatTimeAgo(calc.savedAt)}
                          </p>
                        </Link>
                        <button
                          onClick={() => removeCalculator(calc.id)}
                          className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-all"
                          aria-label="Remove saved calculator"
                        >
                          <i className="fas fa-trash-alt text-xs" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
