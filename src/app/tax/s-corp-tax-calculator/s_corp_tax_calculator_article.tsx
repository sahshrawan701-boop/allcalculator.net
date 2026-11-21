import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SCorpTaxArticle() {
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
          <span className="meta-tag">Tax · S Corporation</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            S Corp Tax Calculator: Calculate S Corporation Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to S corporation tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            S corporations are pass-through entities that avoid double taxation by
            passing income, losses, deductions, and credits to shareholders. S corp
            shareholders pay income tax on their share of profits but can save on
            self-employment tax by taking a reasonable salary and receiving remaining
            profits as distributions. Understanding S corp taxation helps optimize
            business structure.
          </p>
          <p className="mb-5">
            An S Corp Tax Calculator estimates your tax liability as an S corporation
            compared to other entity types. This tool helps business owners understand
            potential tax savings and determine if S corp status is beneficial for
            their situation.
          </p>
          <p>
            Proper S corp tax planning can significantly reduce self-employment tax
            on business profits.
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
                q: "How are S corporations taxed?",
                a: "S corporations are pass-through entities. The corporation files Form 1120-S but generally pays no income tax. Income, losses, and deductions pass through to shareholders who report them on their personal tax returns.",
              },
              {
                q: "What is reasonable compensation for S corp owners?",
                a: "Reasonable compensation is what the IRS considers a fair salary for the work you perform. It should be comparable to what other businesses pay for similar services. Taking too low a salary can trigger IRS scrutiny.",
              },
              {
                q: "How does S corp status save on taxes?",
                a: "S corp status can save self-employment tax (15.3%) on distributions taken as profit rather than wages. Only your salary is subject to payroll taxes. This benefit is most significant for profitable businesses.",
              },
              {
                q: "Who can elect S corporation status?",
                a: "Eligible entities include domestic corporations with only one class of stock, no more than 100 shareholders, and only allowable shareholders (individuals, estates, certain trusts). Partnerships and LLCs can also elect S corp status.",
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
            Use the S Corp Tax Calculator to compare S corp taxation with other entity
            types. S corp status can provide significant tax savings for eligible
            businesses.
          </p>
        </section>
      </div>
    </article>
  );
}
