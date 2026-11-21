/**
 * SEO Library — barrel export.
 *
 * Import everything from '@/lib/seo' for convenience.
 */

// Configuration
export {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE_SUFFIX,
  DEFAULT_OG_IMAGE,
  METADATA_BASE,
  ORGANIZATION,
  DEFAULT_ROBOTS,
  NOINDEX_ROBOTS,
  DEFAULT_AUTHORS,
  CATEGORY_SLUGS,
  REVALIDATION,
} from './seo.config';

// Metadata Generators
export {
  generateCalculatorMetadata,
  generateCategoryMetadata,
  generateArticleMetadata,
  generateStatePageMetadata,
} from './metadata';

// JSON-LD Schema Generators
export {
  generateWebApplicationSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateHowToSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateWebPageSchema,
  buildCalculatorBreadcrumbs,
  buildCategoryBreadcrumbs,
} from './schemas';
export type { BreadcrumbItem, FAQItem, ArticleData, HowToStep } from './schemas';

// FAQ Generation
export { generateCalculatorFAQs, generateFAQsWithSchema } from './faq';

// Keywords
export { generateCalculatorKeywords, getCategoryKeywords } from './keywords';



// State Data
export {
  US_STATES,
  getStateBySlug,
  getStateByAbbr,
  getIncomeTaskStates,
  getNoIncomeTaxStates,
} from './states';
export type { USState } from './states';

// Performance
export {
  PRECONNECT_DOMAINS,
  DNS_PREFETCH_DOMAINS,
  IMAGE_SIZES,
  SCRIPT_STRATEGIES,
  CACHE_HEADERS,
  CWV_THRESHOLDS,
} from './performance';
