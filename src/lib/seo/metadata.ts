/**
 * Reusable metadata generators for all page types.
 *
 * Returns Metadata objects compatible with Next.js Metadata API.
 * All functions are pure — no headers(), cookies(), or runtime fetching.
 * Fully compatible with SSG and ISR.
 */

import type { Metadata } from 'next';
import type { Calculator } from '@/data/calculators';
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE_SUFFIX,
  DEFAULT_OG_IMAGE,
  METADATA_BASE,
  DEFAULT_ROBOTS,
  DEFAULT_AUTHORS,
  CATEGORY_SLUGS,
} from './seo.config';
import { generateCalculatorKeywords, getCategoryKeywords } from './keywords';

// ─── Calculator Page Metadata ───────────────────────────────────────────────

export function generateCalculatorMetadata(calc: Calculator): Metadata {
  const canonicalUrl = `${SITE_URL}${calc.href}`;
  const title = `${calc.name} — Free Online ${extractSubject(calc.name)} Tool`;
  const description =
    calc.description ??
    `Use our free ${calc.name.toLowerCase()} for instant, accurate results. No signup required — calculate ${extractSubject(calc.name).toLowerCase()} online.`;

  return {
    metadataBase: METADATA_BASE,
    title,
    description,
    keywords: generateCalculatorKeywords(calc),
    authors: DEFAULT_AUTHORS,
    robots: DEFAULT_ROBOTS,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${calc.name} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

// ─── Category Page Metadata ─────────────────────────────────────────────────

type CategorySlug = 
  | 'finance'
  | 'mortgage'
  | 'tax'
  | 'salary'
  | 'investing'
  | 'business'
  | 'health'
  | 'education'
  | 'math'
  | 'technology'
  | 'conversion'
  | 'lifestyle'
  | 'science'
  | 'other';

interface CategoryMetadataConfig {
  title: string;
  description: string;
  keywords: string;
  href: string;
}

const CATEGORY_METADATA: Record<CategorySlug, CategoryMetadataConfig> = {
  finance: {
    title: 'Finance Calculators — Loan, Interest & APR Tools',
    description: 'Free online finance calculators for loan payments, interest rates, APR calculations, and financial planning. Get instant accurate results without signup.',
    keywords: 'loan calculator, interest calculator, APR calculator, finance calculators, financial planning tools, loan payment calculator, compound interest calculator, amortization calculator',
    href: '/finance',
  },
  mortgage: {
    title: 'Mortgage Calculators — Payment, Refinance & Affordability Tools',
    description: 'Calculate mortgage payments, estimate refinance savings, and determine home affordability with our free mortgage calculators. Instant results for homebuyers and homeowners.',
    keywords: 'mortgage calculator, mortgage payment calculator, refinance calculator, home affordability calculator, mortgage rate calculator, amortization schedule, FHA calculator, VA loan calculator',
    href: '/mortgage',
  },
  tax: {
    title: 'Tax Calculators — Income Tax, Property Tax & Tax Planning Tools',
    description: 'Free tax calculators for income tax estimates, property tax calculations, and tax planning. Calculate your tax liability and deductions instantly with our online tools.',
    keywords: 'tax calculator, income tax calculator, property tax calculator, tax estimator, tax bracket calculator, deduction calculator, capital gains tax calculator, sales tax calculator',
    href: '/tax',
  },
  salary: {
    title: 'Salary Calculators — Paycheck, Hourly Wage & Income Tools',
    description: 'Calculate take-home pay, convert hourly to salary, and estimate net income with our free salary calculators. Understand your paycheck and compensation instantly.',
    keywords: 'salary calculator, paycheck calculator, hourly to salary calculator, net income calculator, wage calculator, gross pay calculator, after-tax income calculator, salary comparison tool',
    href: '/salary',
  },
  investing: {
    title: 'Investing Calculators — ROI, Compound Interest & Investment Tools',
    description: 'Calculate investment returns, compound interest growth, and ROI with our free investing calculators. Plan your financial future with accurate investment projections.',
    keywords: 'investment calculator, ROI calculator, compound interest calculator, investment return calculator, dividend calculator, stock calculator, portfolio calculator, investment growth calculator',
    href: '/investing',
  },
  business: {
    title: 'Business Calculators — Profit Margin, Break-Even & Financial Tools',
    description: 'Free business calculators for profit margins, break-even analysis, and business financial planning. Calculate startup costs, pricing, and profitability instantly.',
    keywords: 'business calculator, profit margin calculator, break-even calculator, startup cost calculator, ROI calculator, business valuation calculator, pricing calculator, cash flow calculator',
    href: '/business',
  },
  health: {
    title: 'Health Calculators — BMI, Calories & Body Composition Tools',
    description: 'Free health calculators for BMI, calorie needs, body fat percentage, and health metrics. Track your fitness goals with accurate health calculations instantly.',
    keywords: 'BMI calculator, calorie calculator, body fat calculator, health calculator, BMR calculator, TDEE calculator, weight loss calculator, body composition calculator',
    href: '/health',
  },
  education: {
    title: 'Education Calculators — GPA, Grade & Academic Planning Tools',
    description: 'Calculate GPA, convert grades, and plan your academic path with our free education calculators. Instant results for students, teachers, and academic planning.',
    keywords: 'GPA calculator, grade calculator, education calculator, academic planning tools, grade point average calculator, final grade calculator, weighted GPA calculator, college GPA calculator',
    href: '/education',
  },
  math: {
    title: 'Math Calculators — Algebra, Geometry & Percentage Tools',
    description: 'Free online math calculators for algebra, geometry, percentages, and complex equations. Solve mathematical problems instantly with step-by-step solutions.',
    keywords: 'algebra calculator, geometry calculator, percentage calculator, math calculator, equation solver, quadratic calculator, fraction calculator, scientific calculator',
    href: '/math',
  },
  technology: {
    title: 'Technology Calculators — Bandwidth, Data Storage & Programming Tools',
    description: 'Calculate bandwidth needs, data storage requirements, and programming metrics with our free technology calculators. Instant results for IT professionals and developers.',
    keywords: 'bandwidth calculator, data storage calculator, technology calculators, programming calculators, data transfer calculator, IP calculator, subnet calculator, conversion tools',
    href: '/technology',
  },
  conversion: {
    title: 'Unit Conversion Calculators — Metric, Imperial & Measurement Tools',
    description: 'Convert units between metric and imperial systems with our free conversion calculators. Instant accurate conversions for length, weight, temperature, and more.',
    keywords: 'unit converter, conversion calculator, metric converter, imperial converter, length converter, weight converter, temperature converter, measurement converter',
    href: '/conversion',
  },
  lifestyle: {
    title: 'Lifestyle Calculators — Time, Age & Daily Planning Tools',
    description: 'Calculate age differences, time durations, and plan your daily activities with our free lifestyle calculators. Instant results for everyday planning and organization.',
    keywords: 'age calculator, time calculator, date calculator, lifestyle calculators, days between dates calculator, time zone calculator, work hours calculator, life planning tools',
    href: '/lifestyle',
  },
  science: {
    title: 'Science Calculators — Physics, Chemistry & Scientific Tools',
    description: 'Calculate scientific formulas, physics equations, and chemistry problems with our free science calculators. Instant accurate results for students and professionals.',
    keywords: 'science calculator, physics calculator, chemistry calculator, scientific calculator, molecular weight calculator, density calculator, force calculator, energy calculator',
    href: '/science',
  },
  other: {
    title: 'Other Calculators — Specialized Tools & Unique Calculations',
    description: 'Explore our collection of specialized calculators for unique calculations and niche applications. Free online tools for specific needs and custom calculations.',
    keywords: 'specialized calculators, unique calculators, custom calculators, niche calculators, miscellaneous calculators, specialized tools, custom calculation tools',
    href: '/other',
  },
};

export function generateCategoryMetadata(categorySlug: CategorySlug): Metadata {
  const config = CATEGORY_METADATA[categorySlug];
  const canonicalUrl = `${SITE_URL}${config.href}`;

  return {
    metadataBase: METADATA_BASE,
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: DEFAULT_AUTHORS,
    robots: DEFAULT_ROBOTS,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: config.title,
      description: config.description,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${config.title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

// ─── Article Page Metadata ──────────────────────────────────────────────────

export function generateArticleMetadata(article: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}): Metadata {
  const canonicalUrl = `${SITE_URL}/articles/${article.slug}`;
  const ogImage = article.image ?? DEFAULT_OG_IMAGE;

  return {
    metadataBase: METADATA_BASE,
    title: article.title,
    description: article.description,
    authors: article.authors
      ? article.authors.map((name) => ({ name }))
      : DEFAULT_AUTHORS,
    robots: DEFAULT_ROBOTS,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: article.title,
      description: article.description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      ...(article.publishedTime && { publishedTime: article.publishedTime }),
      ...(article.modifiedTime && { modifiedTime: article.modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [ogImage],
    },
  };
}

// ─── State-Based Page Metadata ──────────────────────────────────────────────

export function generateStatePageMetadata(
  stateName: string,
  stateAbbr: string,
  calculatorType: string,
  slug: string,
  customDescription?: string
): Metadata {
  const canonicalUrl = `${SITE_URL}/${slug}`;
  const title = `${stateName} ${calculatorType} Calculator — Free ${stateAbbr} ${calculatorType} Tool`;
  const description =
    customDescription ??
    `Calculate your ${stateName} ${calculatorType.toLowerCase()} with our free online calculator. Get accurate ${stateAbbr} ${calculatorType.toLowerCase()} estimates instantly.`;

  return {
    metadataBase: METADATA_BASE,
    title,
    description,
    keywords: `${stateName} ${calculatorType.toLowerCase()} calculator, ${stateAbbr} ${calculatorType.toLowerCase()}, ${stateName} ${calculatorType.toLowerCase()} rates, calculate ${calculatorType.toLowerCase()} in ${stateName}`,
    authors: DEFAULT_AUTHORS,
    robots: DEFAULT_ROBOTS,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${stateName} ${calculatorType} Calculator — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function extractSubject(name: string): string {
  return name
    .replace(/\s*calculator\s*/gi, '')
    .replace(/\s*&\s*schedule\s*generator\s*/gi, '')
    .trim() || name;
}
