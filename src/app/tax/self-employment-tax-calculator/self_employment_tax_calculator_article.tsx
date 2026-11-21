import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SelfEmploymentTaxArticle() {
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
          <span className="meta-tag">Tax · Self-Employment</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Self-Employment Tax Calculator: Calculate Self-Employment Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to self-employment tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Self-employment tax is the Social Security and Medicare tax primarily for
            individuals who work for themselves. It consists of a 12.4% Social Security
            tax (up to the wage base limit) and a 2.9% Medicare tax (no limit), totaling
            15.3%. Self-employed individuals pay both the employee and employer portions,
            unlike employees who split these taxes with their employers.
          </p>
          <p className="mb-5">
            A Self-Employment Tax Calculator calculates your self-employment tax based
            on your net earnings from self-employment. This tool is essential for
            freelancers, independent contractors, and business owners to understand
            their tax obligations and plan for estimated payments.
          </p>
          <p>
            Self-employed individuals can deduct the employer-equivalent portion of
            self-employment tax when calculating income tax.
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
                q: "What is the self-employment tax rate?",
                a: "The self-employment tax rate is 15.3% (12.4% for Social Security + 2.9% for Medicare). Social Security tax applies to earnings up to $168,600 (2024). Medicare tax applies to all earnings with no limit.",
              },
              {
                q: "How do I calculate self-employment tax?",
                a: "Self-employment tax is calculated as 92.35% of your net earnings from self-employment multiplied by 15.3%. The 92.35% factor accounts for the employer-equivalent portion being deductible for income tax purposes.",
              },
              {
                q: "Can I deduct self-employment tax?",
                a: "Yes, you can deduct the employer-equivalent portion (7.65%) of self-employment tax when calculating your adjusted gross income for income tax purposes. This deduction is taken on Schedule SE.",
              },
              {
                q: "Who must pay self-employment tax?",
                a: "You must pay self-employment tax if your net earnings from self-employment were $400 or more. This includes freelancers, independent contractors, sole proprietors, and partners in partnerships.",
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
            Use the Self-Employment Tax Calculator to understand your Social Security
            and Medicare tax obligations. Proper planning helps ensure you set aside
            enough money for taxes.
          </p>
        </section>
      </div>
    </article>
  );
}
