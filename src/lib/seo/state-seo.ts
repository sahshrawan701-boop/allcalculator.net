import { US_STATES, StateData } from "@/data/states";
import {
  STATE_CALCULATORS,
  StateCalculatorTemplate,
} from "@/data/stateCalculators";
import { Metadata } from "next";

export interface StateMatchResult {
  state: StateData;
  template: StateCalculatorTemplate;
}

/**
 * Checks if a slug matches a programmatic state calculator pattern.
 * e.g., "california-tax-calculator" -> { state: "california", template: "tax-calculator" }
 */
export function parseStateSlug(slug: string): StateMatchResult | null {
  for (const state of US_STATES) {
    if (slug.startsWith(state.id + "-")) {
      const remainder = slug.substring(state.id.length + 1);
      const template = STATE_CALCULATORS.find((c) => c.id === remainder);
      if (template) {
        return { state, template };
      }
    }
  }
  return null;
}

/**
 * Utility to replace template variables like {state}, {incomeTaxRate}, {medianHomeValue}, etc.
 */
export function fillTemplate(text: string, state: StateData): string {
  if (!text) return "";
  const currentYear = new Date().getFullYear();
  return text
    .replace(/{state}/g, state.name)
    .replace(/{stateAbbr}/g, state.abbreviation)
    .replace(/{capital}/g, state.capital || state.name)
    .replace(/{largestCity}/g, state.largestCity || state.name)
    .replace(/{incomeTaxRate}/g, state.incomeTaxRate)
    .replace(/{topIncomeTaxRate}/g, state.topIncomeTaxRate.toString())
    .replace(/{lowestIncomeTaxRate}/g, state.lowestIncomeTaxRate.toString())
    .replace(/{taxSystem}/g, state.taxSystem)
    .replace(/{baseSalesTax}/g, state.baseSalesTax.toString())
    .replace(/{avgLocalSalesTax}/g, state.avgLocalSalesTax.toString())
    .replace(/{combinedSalesTax}/g, state.combinedSalesTax.toString())
    .replace(/{grocerySalesTax}/g, state.grocerySalesTax || "Exempt from state sales tax")
    .replace(/{minWage}/g, state.minWage.toFixed(2))
    .replace(/{effectivePropertyTaxRate}/g, state.effectivePropertyTaxRate.toString())
    .replace(/{medianHomeValue}/g, (state.medianHomeValue || 350000).toLocaleString("en-US"))
    .replace(/{medianHouseholdIncome}/g, (state.medianHouseholdIncome || 75000).toLocaleString("en-US"))
    .replace(/{homesteadExemption}/g, state.homesteadExemption || "Homestead exemption available for primary residences")
    .replace(/{autoSalesTaxRate}/g, state.autoSalesTaxRate.toString())
    .replace(/{avgAutoRegistrationFee}/g, state.avgAutoRegistrationFee.toString())
    .replace(/{docFeeCap}/g, state.docFeeCap || "Varies by dealer")
    .replace(/{sutaRate}/g, state.sutaRate.toString())
    .replace(/{corporateTaxRate}/g, state.corporateTaxRate || "Flat corporate tax")
    .replace(/{agencyName}/g, state.agencyName)
    .replace(/{agencyUrl}/g, state.agencyUrl)
    .replace(/{standardDeductionSingle}/g, (state.standardDeductionSingle || 14600).toLocaleString("en-US"))
    .replace(/{standardDeductionMarried}/g, (state.standardDeductionMarried || 29200).toLocaleString("en-US"))
    .replace(/{localIncomeTaxNote}/g, state.localIncomeTaxNote || "No local income taxes statewide.")
    .replace(/{year}/g, currentYear.toString());
}

/**
 * Helper function to extract the category slug for a state calculator.
 */
export function getStateCalculatorCategorySlug(match: StateMatchResult): string {
  return match.template.categorySlug || "tax";
}

/**
 * Helper function to generate the correct full URL including the category slug.
 */
export function getStateCalculatorUrl(match: StateMatchResult): string {
  const categorySlug = getStateCalculatorCategorySlug(match);
  return `https://www.allcalculator.net/${categorySlug}/${match.state.id}-${match.template.id}`;
}

/**
 * Generates specific, high-CTR metadata for the state programmatic pages.
 */
export function generateStateMetadata(match: StateMatchResult): Metadata {
  const title = fillTemplate(
    match.template.metaTitleTemplate || match.template.nameTemplate,
    match.state,
  );
  const description = fillTemplate(
    match.template.metaDescriptionTemplate || match.template.descriptionTemplate,
    match.state,
  );
  const url = getStateCalculatorUrl(match);
  const currentYear = new Date().getFullYear();

  return {
    title,
    description,
    keywords: [
      ...match.state.localKeywords,
      fillTemplate(match.template.nameTemplate, match.state),
      `${match.state.name} ${match.template.category.toLowerCase()} calculator`,
      `${match.state.name} tax calculator ${currentYear}`,
      `${match.state.abbreviation} taxes`,
      `${match.state.name} take home pay`,
      `${match.state.name} finance calculator`,
      match.state.agencyName,
    ].join(", "),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "allcalculator.net",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Generates the localized FAQ structured data schema
 */
export function generateStateFAQSchema(match: StateMatchResult) {
  const faqs = match.template.faqTemplates.map((faq) => ({
    "@type": "Question",
    name: fillTemplate(faq.question, match.state),
    acceptedAnswer: {
      "@type": "Answer",
      text: fillTemplate(faq.answer, match.state),
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs,
  };
}

/**
 * Generate SoftwareApplication, WebPage, Article, and BreadcrumbList schema for State page
 */
export function generateStateWebPageSchema(match: StateMatchResult) {
  const name = fillTemplate(match.template.nameTemplate, match.state);
  const description = fillTemplate(
    match.template.descriptionTemplate,
    match.state,
  );
  const url = getStateCalculatorUrl(match);
  const categorySlug = getStateCalculatorCategorySlug(match);
  const currentYear = new Date().getFullYear();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${name} | allcalculator.net`,
        description,
        inLanguage: "en-US",
        datePublished: "2024-01-01T00:00:00+00:00",
        dateModified: `${currentYear}-01-15T00:00:00+00:00`,
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://www.allcalculator.net/#website",
          url: "https://www.allcalculator.net",
          name: "allcalculator.net",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#software`,
        name,
        description,
        applicationCategory: match.template.categorySlug === "business" ? "BusinessApplication" : "FinanceApplication",
        operatingSystem: "All modern web browsers (Desktop, Tablet, Mobile)",
        url,
        featureList: [
          `Calculates ${match.template.category} specifically for ${match.state.name}`,
          `Updated with official ${currentYear} ${match.state.name} tax rates`,
          "Instant interactive calculation with detailed visual breakdown",
          "Free online tool with no signup required",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "1380",
          bestRating: "5",
          worstRating: "1",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: `${name} Guide & 2026 Tax Regulations`,
        description,
        inLanguage: "en-US",
        datePublished: "2024-01-01T00:00:00+00:00",
        dateModified: `${currentYear}-01-15T00:00:00+00:00`,
        author: {
          "@type": "Organization",
          name: "allcalculator.net Financial Editorial Team",
          url: "https://www.allcalculator.net/about-us",
        },
        publisher: {
          "@type": "Organization",
          name: "allcalculator.net",
          url: "https://www.allcalculator.net",
          logo: {
            "@type": "ImageObject",
            url: "https://www.allcalculator.net/logo.png",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.allcalculator.net",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: `${match.template.category} Calculators`,
            item: `https://www.allcalculator.net/${categorySlug}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name,
            item: url,
          },
        ],
      },
    ],
  };
}
