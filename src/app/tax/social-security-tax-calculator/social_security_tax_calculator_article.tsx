import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SocialSecurityTaxArticle() {
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
          <span className="meta-tag">Tax · Social Security</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Social Security Tax Calculator: Calculate Social Security Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to Social Security tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Social Security tax funds the Social Security program, which provides
            retirement, disability, and survivor benefits. The tax rate is 12.4% split
            equally between employees and employers (6.2% each). There's an annual
            wage base limit ($168,600 for 2024) beyond which no Social Security tax
            is withheld. Understanding Social Security tax helps with financial planning.
          </p>
          <p className="mb-5">
            A Social Security Tax Calculator calculates your Social Security tax based
            on your earned income. This tool is essential for employees and
            self-employed individuals to understand their Social Security tax
            obligation and how it affects their take-home pay.
          </p>
          <p>
            Self-employed individuals pay both the employee and employer portions
            (12.4% total) but can deduct the employer-equivalent portion for income
            tax purposes.
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
                q: "What is the Social Security tax rate?",
                a: "The Social Security tax rate is 12.4% total (6.2% employee + 6.2% employer). Self-employed individuals pay the full 12.4% but can deduct half (6.2%) for income tax purposes.",
              },
              {
                q: "What is the Social Security wage base limit?",
                a: "For 2024, the Social Security wage base limit is $168,600. No Social Security tax is withheld on earnings above this amount. The limit adjusts annually for inflation.",
              },
              {
                q: "Do high earners pay more Social Security tax?",
                a: "No, Social Security tax is capped at the wage base limit. Earnings above $168,600 (2024) are not subject to Social Security tax. However, Medicare tax (2.9%) applies to all earnings without limit.",
              },
              {
                q: "Can I get a refund on excess Social Security tax?",
                a: "Yes, if you worked multiple jobs and your total wages exceeded the wage base limit, resulting in excess Social Security tax withheld, you can claim a refund on your tax return using Form 1040, Schedule 3.",
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
            Use the Social Security Tax Calculator to understand your Social Security
            tax obligation. Accurate planning helps ensure proper withholding and
            estimated tax payments.
          </p>
        </section>
      </div>
    </article>
  );
}
