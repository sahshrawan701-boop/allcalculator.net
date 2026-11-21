/**
 * Programmatic keyword generation for calculator pages.
 *
 * Generates relevant, category-specific keyword strings
 * from calculator data without any runtime fetching.
 */

import type { Calculator } from '@/data/calculators';

// ─── Category Keyword Banks ────────────────────────────────────────────────

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  Mortgage: [
    'mortgage calculator',
    'home loan calculator',
    'monthly payment calculator',
    'mortgage rate calculator',
    'house payment calculator',
    'home buying calculator',
    'mortgage amortization',
    'mortgage interest calculator',
    'home affordability',
    'real estate calculator',
  ],
  Finance: [
    'financial calculator',
    'loan calculator',
    'interest calculator',
    'savings calculator',
    'investment calculator',
    'budget calculator',
    'debt calculator',
    'personal finance tools',
    'money calculator',
    'financial planning',
  ],
  Tax: [
    'tax calculator',
    'income tax calculator',
    'tax estimator',
    'tax refund calculator',
    'tax bracket calculator',
    'state tax calculator',
    'federal tax calculator',
    'tax planning',
    'tax deduction calculator',
    'payroll tax calculator',
  ],
  Salary: [
    'salary calculator',
    'paycheck calculator',
    'hourly to salary',
    'take home pay',
    'net pay calculator',
    'gross pay calculator',
    'wage calculator',
    'income calculator',
    'pay calculator',
    'compensation calculator',
  ],
  Investing: [
    'investment calculator',
    'compound interest calculator',
    'stock return calculator',
    'ROI calculator',
    'dividend calculator',
    'retirement calculator',
    '401k calculator',
    'investment growth',
    'portfolio calculator',
    'wealth calculator',
  ],
  Business: [
    'business calculator',
    'profit calculator',
    'margin calculator',
    'break even calculator',
    'revenue calculator',
    'business valuation',
    'startup calculator',
    'ROI calculator',
    'markup calculator',
    'business planning tools',
  ],
  Health: [
    'health calculator',
    'BMI calculator',
    'calorie calculator',
    'fitness calculator',
    'body fat calculator',
    'TDEE calculator',
    'weight loss calculator',
    'nutrition calculator',
    'BMR calculator',
    'health tools',
  ],
  Education: [
    'GPA calculator',
    'grade calculator',
    'education calculator',
    'college calculator',
    'exam score calculator',
    'academic calculator',
    'study tools',
    'student calculator',
    'scholarship calculator',
    'school calculator',
  ],
  Math: [
    'math calculator',
    'scientific calculator',
    'fraction calculator',
    'percentage calculator',
    'algebra calculator',
    'calculus calculator',
    'math solver',
    'equation calculator',
    'math tools',
    'online calculator',
  ],
  Technology: [
    'technology calculator',
    'crypto calculator',
    'bitcoin calculator',
    'mining calculator',
    'data calculator',
    'tech tools',
    'digital calculator',
    'online tools',
  ],
  Conversion: [
    'unit converter',
    'conversion calculator',
    'measurement converter',
    'unit calculator',
    'metric converter',
    'conversion tools',
    'online converter',
  ],
  Lifestyle: [
    'lifestyle calculator',
    'love calculator',
    'age calculator',
    'date calculator',
    'pregnancy calculator',
    'sleep calculator',
    'daily life calculator',
    'personal calculator',
  ],
  Science: [
    'science calculator',
    'physics calculator',
    'energy calculator',
    'force calculator',
    'velocity calculator',
    'scientific tools',
    'physics formulas',
    'science tools',
  ],
  Other: [
    'online calculator',
    'free calculator',
    'calculator tool',
    'online tools',
    'calculation tool',
    'web calculator',
  ],
};

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Generate a keyword string for a calculator page.
 * Combines the calculator name-derived keywords with category-specific keywords.
 */
export function generateCalculatorKeywords(calc: Calculator): string {
  const nameKeywords = extractKeywordsFromName(calc.name);
  const categoryKws = CATEGORY_KEYWORDS[calc.parentCategoryId] ?? CATEGORY_KEYWORDS.Other;

  // Combine: name-derived first, then category, deduplicated
  const all = [...nameKeywords, ...categoryKws];
  const unique = [...new Set(all.map((k) => k.toLowerCase()))];

  return unique.slice(0, 15).join(', ');
}

/**
 * Get category-specific keywords.
 */
export function getCategoryKeywords(category: string): string {
  const kws = CATEGORY_KEYWORDS[category] ?? CATEGORY_KEYWORDS.Other;
  return kws.join(', ');
}

// ─── Internal Helpers ───────────────────────────────────────────────────────

function extractKeywordsFromName(name: string): string[] {
  const lower = name.toLowerCase();
  const keywords: string[] = [lower];

  // Add "free {name}" variant
  keywords.push(`free ${lower}`);

  // Add "online {name}" variant
  keywords.push(`online ${lower}`);

  // Extract the subject (e.g., "Mortgage" from "Mortgage Calculator")
  const subject = lower.replace(/\s*calculator\s*/gi, '').trim();
  if (subject && subject !== lower) {
    keywords.push(`${subject} calculator`);
    keywords.push(`calculate ${subject}`);
    keywords.push(`how to calculate ${subject}`);
    keywords.push(`${subject} formula`);
  }

  return keywords;
}
