import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function MedicareTaxArticle() {
  return (
    <article
      className={`w-full max-w-[75ch] mx-auto px-6 py-16 text-[18px] leading-[1.8] font-sans text-slate-800 dark:text-slate-100 ${inter.variable}`}
    >
      <style>{`
        .article-root { font-family: var(--font-inter), sans-serif; }
        .display-font { font-family: var(--font-inter), sans-serif; }
        .article-root h2 { font-family: var(--font-inter), sans-serif; }
        .article-root h3 { font-family: var(--font-inter), sans-serif; }

        .dropcap::first-letter {
          font-family: var(--font-inter), sans-serif;
          font-size: 4.5rem;
          font-weight: 700;
          float: left;
          line-height: 0.8;
          margin-right: 0.12em;
          margin-top: 0.08em;
          color: var(--primary-dk);
        }
        .dark .dropcap::first-letter { color: var(--primary); }

        .rule-divider {
          border: none;
          border-top: 1px solid #cbd5e1;
          margin: 3rem 0;
        }
        .dark .rule-divider { border-top-color: #475569; }

        .faq-item {
          border-top: 1px solid #e2e8f0;
          padding: 1.25rem 0;
        }
        .dark .faq-item { border-top-color: #334155; }
        .faq-item h3 {
          font-size: 1rem !important;
          margin-bottom: 0.5rem !important;
          color: #1e293b !important;
        }
        .dark .faq-item h3 { color: #e2e8f0 !important; }

        .meta-tag {
          display: inline-block;
          font-size: 0.72rem;
          font-family: sans-serif;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--primary-dk);
          background: #e0e7ff;
          padding: 0.25rem 0.6rem;
          border-radius: 2px;
        }
        .dark .meta-tag {
          color: #a5b4fc;
          background: #312e81;
        }

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">
        <header className="mb-12 text-center">
          <span className="meta-tag">Tax · Medicare</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Medicare Tax Calculator: Calculate Medicare Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to Medicare tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Medicare tax funds the Medicare health insurance program for seniors and
            certain disabled individuals. The standard Medicare tax rate is 2.9% (1.45%
            employee + 1.45% employer) on all earned income. High-income earners pay
            an additional 0.9% Medicare surtax on earnings above certain thresholds.
            Understanding Medicare tax helps with accurate tax planning.
          </p>
          <p className="mb-5">
            A Medicare Tax Calculator calculates your Medicare tax liability including
            the standard 2.9% rate and the additional Medicare tax for high earners.
            This tool is essential for employees and self-employed individuals to
            understand their total Medicare tax obligation.
          </p>
          <p>
            Self-employed individuals pay both the employee and employer portions
            (2.9% total) as self-employment tax.
          </p>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What is the Medicare tax rate?",
                a: "The standard Medicare tax rate is 2.9% (1.45% employee + 1.45% employer). Self-employed individuals pay the full 2.9%. High earners pay an additional 0.9% on income above $200,000 single/$250,000 married.",
              },
              {
                q: "Who pays the additional Medicare tax?",
                a: "The additional 0.9% Medicare tax applies to individuals earning over $200,000 (single filers), $250,000 (married filing jointly), or $125,000 (married filing separately). Employers do not match this additional tax.",
              },
              {
                q: "Is there a wage base limit for Medicare tax?",
                a: "Unlike Social Security tax, there is no wage base limit for Medicare tax. The 2.9% Medicare tax applies to all earned income without limit. The additional 0.9% applies only above the income thresholds.",
              },
              {
                q: "Can I deduct Medicare tax?",
                a: "Self-employed individuals can deduct the employer-equivalent portion of Medicare tax (1.45%) as a business expense on their tax return. Employees cannot deduct Medicare tax withheld from wages.",
              },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.q}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use the Medicare Tax Calculator to understand your Medicare tax obligation.
            Accurate Medicare tax planning helps ensure proper withholding and
            estimated tax payments.
          </p>
        </section>
      </div>
    </article>
  );
}
