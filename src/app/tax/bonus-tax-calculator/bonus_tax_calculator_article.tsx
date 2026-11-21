import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BonusTaxArticle() {
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
          <span className="meta-tag">Tax · Bonuses</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Bonus Tax Calculator: Calculate Tax on Bonuses
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to bonus tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Bonuses are considered supplemental income by the IRS and are subject to
            special tax withholding rules. Unlike regular wages, bonuses are typically
            taxed at a flat 22% supplemental withholding rate, though this can vary
            based on the bonus amount and your overall tax situation. Understanding
            bonus taxation helps you plan for your actual take-home amount.
          </p>
          <p className="mb-5">
            A Bonus Tax Calculator estimates the taxes withheld from your bonus and
            your net take-home amount. This tool is essential for employees expecting
            performance bonuses, signing bonuses, or holiday bonuses to understand
            their actual compensation.
          </p>
          <p>
            Planning for bonus taxation helps you make informed decisions about using
            your bonus for savings, debt repayment, or discretionary spending.
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
                q: "Why are bonuses taxed at 22%?",
                a: "The IRS requires a flat 22% supplemental withholding rate for bonuses under $1 million. This simplifies withholding but may result in over-withholding, which you can recover when filing your tax return.",
              },
              {
                q: "What if my bonus is over $1 million?",
                a: "Bonuses over $1 million are subject to 37% withholding on the amount exceeding $1 million, plus 22% on the first $1 million. This aligns with the highest marginal tax bracket.",
              },
              {
                q: "Can I get a refund on bonus over-withholding?",
                a: "Yes, if your bonus is over-withheld, you may receive a refund when you file your annual tax return. The withholding is just an estimate of your tax liability.",
              },
              {
                q: "How can I reduce taxes on my bonus?",
                a: "Options include contributing to pre-tax retirement accounts (401k, IRA), using a health savings account (HSA), or timing bonus receipt strategically. Consult a tax professional for personalized advice.",
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
            Use the Bonus Tax Calculator to understand your take-home bonus after
            taxes. Planning for bonus taxation helps you make smart financial
            decisions with your extra compensation.
          </p>
        </section>
      </div>
    </article>
  );
}
