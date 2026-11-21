/**
 * Type-safe JSON-LD schema generators.
 *
 * All functions return plain objects suitable for JSON.stringify().
 * These are injected server-side via the JsonLd component — fully SSG compatible.
 */

import type { Calculator } from '@/data/calculators';
import { SITE_URL, SITE_NAME, ORGANIZATION, CATEGORY_SLUGS } from './seo.config';


const WEBSITE_ID = `${SITE_URL}/#website`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// ─── Schema Types ───────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleData {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  image?: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

// ─── WebApplication / SoftwareApplication Schema ────────────────────────────

export function generateWebApplicationSchema(calc: Calculator) {
  const url = `${SITE_URL}${calc.href}`;

  return {
    '@context': 'https://schema.org',

    '@type': 'WebApplication',
    '@id': `${url}#calculator`,

    name: calc.name,

    url,

    description:
      calc.description ??
      `Free online ${calc.name.toLowerCase()} calculator with instant and accurate results.`,

    featureList: [
      `Free ${calc.name}`,
      'Instant calculations',
      'Mobile friendly',
      'No registration required',
    ],

    applicationCategory: 'CalculatorApplication',

    operatingSystem: 'Any',

    browserRequirements: 'Requires JavaScript',

    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },

    provider: {
      '@id': ORGANIZATION_ID,
    },
  };
}

// ─── FAQPage Schema ─────────────────────────────────────────────────────────

export function generateFAQSchema(faqs: FAQItem[]) {
  if (faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ─── BreadcrumbList Schema ──────────────────────────────────────────────────

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',

    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}/#breadcrumb`,

    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,

      name: item.name,

      item: item.href.startsWith('http')
        ? item.href
        : `${SITE_URL}${item.href}`,
    })),
  };
}

/**
 * Build breadcrumb items for a calculator page.
 */
export function buildCalculatorBreadcrumbs(calc: Calculator): BreadcrumbItem[] {
  const categoryHref = CATEGORY_SLUGS[calc.parentCategoryId] ?? '/';
  return [
    { name: 'Home', href: '/' },
    { name: `${calc.parentCategoryId} Calculators`, href: categoryHref },
    { name: calc.name, href: calc.href },
  ];
}

/**
 * Build breadcrumb items for a category page.
 */
export function buildCategoryBreadcrumbs(
  categoryName: string,
  categoryHref: string
): BreadcrumbItem[] {
  return [
    { name: 'Home', href: '/' },
    { name: categoryName, href: categoryHref },
  ];
}

// ─── Article Schema ─────────────────────────────────────────────────────────

export function generateArticleSchema(article: ArticleData) {
  const articleUrl =
    article.url.startsWith('http')
      ? article.url
      : `${SITE_URL}${article.url}`;

  return {
    '@context': 'https://schema.org',

    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,

    headline: article.title,

    description: article.description,

    url: articleUrl,

    datePublished: article.datePublished,

    dateModified: article.dateModified,

    author: {
      '@type': 'Person',
      name: article.authorName ?? 'Shrawan Sah',
    },

    publisher: {
      '@id': ORGANIZATION_ID,
    },

    mainEntityOfPage: {
      '@id': `${articleUrl}#webpage`,
    },

    ...(article.image && {
      image: {
        '@type': 'ImageObject',
        url: article.image,
      }
    }),
  };
}

// ─── HowTo Schema ───────────────────────────────────────────────────────────

export function generateHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

// ─── Organization Schema ────────────────────────────────────────────────────

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,

    name: ORGANIZATION.name,
    url: ORGANIZATION.url,

    logo: {
      '@type': 'ImageObject',
      url: ORGANIZATION.logo,
    },

    description: ORGANIZATION.description,

    ...(ORGANIZATION.sameAs.length > 0 && {
      sameAs: ORGANIZATION.sameAs,
    }),
  };
}

// ─── WebSite Schema (with SearchAction) ─────────────────────────────────────

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',

    '@type': 'WebSite',
    '@id': WEBSITE_ID,

    url: SITE_URL,
    name: SITE_NAME,

    publisher: {
      '@id': ORGANIZATION_ID,
      '@type': 'Organization',
    },
  };
}

// ─── WebPage Schema ─────────────────────────────────────────────────────────

export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
}) {
  const pageUrl =
    page.url.startsWith('http')
      ? page.url
      : `${SITE_URL}${page.url}`;

  return {
    '@context': 'https://schema.org',

    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,

    url: pageUrl,

    name: page.name,
    description: page.description,

    isPartOf: {
      '@id': WEBSITE_ID,
    },

    about: {
      '@id': ORGANIZATION_ID,
    },
  };
}
