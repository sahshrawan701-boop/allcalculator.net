/**
 * Global SEO configuration constants for allcalculator.net
 *
 * Single source of truth for site-wide SEO values.
 * All values are static — safe for SSG/ISR.
 */

// ─── Site Identity ──────────────────────────────────────────────────────────

export const SITE_URL = 'https://www.allcalculator.net';
export const SITE_NAME = 'allcalculator.net';
export const SITE_TITLE_SUFFIX = 'allcalculator.net';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/Icons/og-image.png`;
export const FAVICON_URL = '/favicon.svg';

// ─── Metadata Base ──────────────────────────────────────────────────────────

export const METADATA_BASE = new URL(SITE_URL);

// ─── Organization Info ──────────────────────────────────────────────────────

export const ORGANIZATION = {
  name: 'allcalculator.net',
  url: SITE_URL,
  logo: `${SITE_URL}/Icons/og-image.png`,
  description:
    'Free online calculators for finance, health, math, science, and daily life. Instant, accurate results with zero cost.',
  sameAs: [] as string[], // Add social media URLs when available
} as const;

// ─── Default Robots ─────────────────────────────────────────────────────────

export const DEFAULT_ROBOTS = {
  index: true,
  follow: true,
  'max-image-preview': 'large' as const,
  'max-snippet': -1,
  'max-video-preview': -1,
};

export const NOINDEX_ROBOTS = {
  index: false,
  follow: true,
};

// ─── Default Authors ────────────────────────────────────────────────────────

export const DEFAULT_AUTHORS = [{ name: 'Allcalculator.net' }];

// ─── Category → Slug Mapping ────────────────────────────────────────────────

export const CATEGORY_SLUGS: Record<string, string> = {
  Mortgage: '/mortgage',
  Finance: '/finance',
  Tax: '/tax',
  Salary: '/salary',
  Investing: '/investment',
  Business: '/business',
  Health: '/health',
  Education: '/education',
  Math: '/math',
  Technology: '/technology',
  Conversion: '/conversion',
  Lifestyle: '/lifestyle',
  Science: '/science',
  Other: '/other',
};

// ─── ISR Revalidation Intervals ────────────────────────────────────────────

export const REVALIDATION = {
  /** Static pages — no revalidation needed */
  STATIC: false as const,
  /** Articles — revalidate every hour */
  ARTICLES: 3600,
  /** Category pages — revalidate daily */
  CATEGORIES: 86400,
} as const;
