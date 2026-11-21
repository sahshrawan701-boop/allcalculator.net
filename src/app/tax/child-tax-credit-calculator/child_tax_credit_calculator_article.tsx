import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ChildTaxCreditArticle() {
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
          <span className="meta-tag">Tax · Credits</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Child Tax Credit Calculator: Calculate Child Tax Credit
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to child tax credit calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            The Child Tax Credit (CTC) is a tax credit designed to help families with
            qualifying children. For 2024, the credit provides up to $2,000 per qualifying
            child under age 17, with up to $1,600 being refundable. The credit phases
            out at higher income levels. Understanding your eligibility and credit amount
            helps with tax planning and budgeting.
          </p>
          <p className="mb-5">
            A Child Tax Credit Calculator estimates your credit based on your income,
            filing status, and number of qualifying children. This tool is essential
            for families to understand their potential tax savings and plan their
            finances accordingly.
          </p>
          <p>
            The Child Tax Credit can significantly reduce your tax liability or provide
            a refund, making it an important benefit for eligible families.
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
                q: "Who qualifies for the Child Tax Credit?",
                a: "Children must be under age 17 at the end of the tax year, be claimed as your dependent, have a valid Social Security number, and be related to you (child, sibling, foster child, etc.).",
              },
              {
                q: "What are the income limits for the Child Tax Credit?",
                a: "The full $2,000 credit is available for single filers earning up to $200,000 and married couples up to $400,000. The credit phases out by $50 for each $1,000 above these thresholds.",
              },
              {
                q: "What is the refundable portion of the Child Tax Credit?",
                a: "For 2024, up to $1,600 per child is refundable, meaning you can receive it as a refund even if you owe no taxes. The remaining $400 is non-refundable.",
              },
              {
                q: "How do I claim the Child Tax Credit?",
                a: "Claim the Child Tax Credit on Form 1040, Schedule 8812. You'll need each child's name, Social Security number, and relationship to you. The credit is automatically calculated based on your income.",
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
            Use the Child Tax Credit Calculator to estimate your potential tax savings.
            Understanding this credit helps families maximize their tax benefits and
            plan their finances effectively.
          </p>
        </section>
      </div>
    </article>
  );
}
