/**
 * FAQ section component with JSON-LD schema.
 *
 * Server component — renders FAQ content in accessible HTML
 * and injects matching FAQPage structured data.
 */

import type { Calculator } from '@/data/calculators';
import { generateCalculatorFAQs } from '@/lib/seo/faq';
import { generateFAQSchema, type FAQItem } from '@/lib/seo/schemas';
import { JsonLd } from './JsonLd';

interface FAQSectionProps {
  /** Pass a calculator to auto-generate FAQs */
  calculator?: Calculator;
  /** Or pass custom FAQ items directly */
  faqs?: FAQItem[];
  /** Section heading — defaults to "Frequently Asked Questions" */
  heading?: string;
}

export function FAQSection({
  calculator,
  faqs: customFaqs,
  heading = 'Frequently Asked Questions',
}: FAQSectionProps) {
  const faqs = customFaqs ?? (calculator ? generateCalculatorFAQs(calculator) : []);

  if (faqs.length === 0) return null;

  const schema = generateFAQSchema(faqs);

  return (
    <section aria-labelledby="faq-heading" className="mt-10">
      <JsonLd data={schema} />

      <h2
        id="faq-heading"
        className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2"
      >
        <i className="fas fa-circle-question text-indigo-500 text-lg" aria-hidden="true" />
        {heading}
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-600"
          >
            <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-slate-800 dark:text-slate-100 select-none list-none [&::-webkit-details-marker]:hidden">
              <span className="pr-4">{faq.question}</span>
              <i
                className="fas fa-chevron-down text-xs text-slate-400 dark:text-slate-400 transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
                aria-hidden="true"
              />
            </summary>
            <div className="px-5 pb-4 text-sm text-slate-800 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
