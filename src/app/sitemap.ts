import { MetadataRoute } from 'next';
import { CALCULATORS, PARENT_CATEGORIES } from '@/data/calculators';
import { US_STATES } from '@/data/states';
import { STATE_CALCULATORS } from '@/data/stateCalculators';

const BASE_URL = 'https://www.allcalculator.net';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const uniqueCalcHrefs = [...new Set(CALCULATORS.map((c) => c.href))];

  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/sitemap`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];

  // Category pages
  const categoryPages = PARENT_CATEGORIES.map((category) => ({
    url: `${BASE_URL}${'/' + category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Calculator pages
  const calculatorPages = uniqueCalcHrefs.map((href) => ({
    url: `${BASE_URL}${href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // State × Calculator combination pages
  const stateCalculatorPages = US_STATES.flatMap((state) =>
    STATE_CALCULATORS.map((calc) => ({
      url: `${BASE_URL}/${calc.categorySlug}/${state.id}-${calc.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...categoryPages, ...calculatorPages, ...stateCalculatorPages];
}
