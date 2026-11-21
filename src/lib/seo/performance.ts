/**
 * Performance SEO utilities.
 *
 * Resource hints and optimization helpers for Core Web Vitals.
 */

// ─── Preconnect Domains ─────────────────────────────────────────────────────

/**
 * External domains that should be preconnected for performance.
 * Use in <head> via Next.js metadata or manual link tags.
 */
export const PRECONNECT_DOMAINS = [
  // Font Awesome CDN (currently used)
  'https://cdnjs.cloudflare.com',
] as const;

// ─── Resource Hints ─────────────────────────────────────────────────────────

/**
 * DNS prefetch domains — low-priority resolution for third-party scripts.
 */
export const DNS_PREFETCH_DOMAINS = [
  'https://www.googletagmanager.com',
  'https://www.google-analytics.com',
  'https://pagead2.googlesyndication.com',
] as const;

// ─── Image Optimization Defaults ────────────────────────────────────────────

/**
 * Default image sizes for responsive images.
 * Use with next/image's `sizes` prop.
 */
export const IMAGE_SIZES = {
  /** Full-width hero images */
  hero: '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
  /** Card thumbnails */
  card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  /** Small icons/avatars */
  icon: '64px',
} as const;

// ─── Script Loading Strategies ──────────────────────────────────────────────

/**
 * Recommended script loading strategies for third-party scripts.
 * Use with next/script's `strategy` prop.
 */
export const SCRIPT_STRATEGIES = {
  /** Analytics — load after page becomes interactive */
  analytics: 'afterInteractive' as const,
  /** Ads — load lazily */
  ads: 'lazyOnload' as const,
  /** Critical scripts — load before interactive */
  critical: 'beforeInteractive' as const,
} as const;

// ─── Cache Headers ──────────────────────────────────────────────────────────

/**
 * Recommended cache-control values for different asset types.
 * Use in next.config.ts headers() or middleware.
 */
export const CACHE_HEADERS = {
  /** Static assets (images, fonts, CSS, JS) — cache for 1 year */
  staticAssets: 'public, max-age=31536000, immutable',
  /** HTML pages — cache briefly, stale-while-revalidate */
  pages: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400',
  /** API responses — short cache */
  api: 'public, max-age=60, s-maxage=300',
} as const;

// ─── Core Web Vitals Thresholds ─────────────────────────────────────────────

/**
 * Google's Core Web Vitals "Good" thresholds for reference.
 */
export const CWV_THRESHOLDS = {
  /** Largest Contentful Paint — under 2.5s */
  LCP: 2500,
  /** Cumulative Layout Shift — under 0.1 */
  CLS: 0.1,
  /** Interaction to Next Paint — under 200ms */
  INP: 200,
  /** Time to First Byte — under 800ms */
  TTFB: 800,
} as const;
