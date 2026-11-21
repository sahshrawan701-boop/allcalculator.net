/**
 * Calculator page schema component.
 *
 * Server component that injects WebApplication + FAQPage + BreadcrumbList
 * schemas for calculator pages. Fully SSG compatible.
 */

import type { Calculator } from '@/data/calculators';
import {
  generateWebApplicationSchema,
  buildCalculatorBreadcrumbs,
  generateBreadcrumbSchema,
} from '@/lib/seo/schemas';
import { generateFAQsWithSchema } from '@/lib/seo/faq';
import { JsonLd } from './JsonLd';

interface CalculatorSchemaProps {
  calculator: Calculator;
}

export function CalculatorSchema({ calculator }: CalculatorSchemaProps) {
  const webAppSchema = generateWebApplicationSchema(calculator);
  const breadcrumbs = buildCalculatorBreadcrumbs(calculator);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const { schema: faqSchema } = generateFAQsWithSchema(calculator);

  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}
