import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BonusArticle() {
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
          <span className="meta-tag">Salary · Bonuses</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Bonus Calculator: Calculate Your Bonus After Taxes
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to bonus calculations and tax implications
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Bonuses are additional compensation beyond regular salary, often tied to
            performance, company profits, or signing incentives. While exciting,
            bonuses are typically taxed at higher rates than regular pay. Understanding
            how your bonus is taxed helps you plan for the actual amount you'll receive.
          </p>
          <p className="mb-5">
            A Bonus Calculator estimates your take-home bonus after federal, state,
            and other taxes. This tool is essential for employees expecting performance
            bonuses, signing bonuses, or holiday bonuses to understand their net amount.
          </p>
          <p>
            Understanding bonus taxation helps you make informed decisions about how
            to use your bonus—whether for savings, debt repayment, or discretionary spending.
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
                q: "Why are bonuses taxed higher?",
                a: "Bonuses are often taxed at a flat 22% supplemental withholding rate rather than your regular tax bracket. This is because they're considered supplemental income.",
              },
              {
                q: "Can I get a tax refund on bonus over-withholding?",
                a: "Yes, if your bonus is over-withheld, you may receive a refund when you file your annual tax return. The withholding is just an estimate.",
              },
              {
                q: "What types of bonuses are common?",
                a: "Common types include performance bonuses, signing bonuses, referral bonuses, retention bonuses, holiday bonuses, and profit-sharing bonuses.",
              },
              {
                q: "Should I ask for a higher bonus or higher salary?",
                a: "Salary is guaranteed and affects long-term earnings like raises and retirement contributions. Bonuses are variable. Consider your risk tolerance and financial goals.",
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
            Use the Bonus Calculator to understand your take-home bonus after taxes.
            Planning for bonus taxation helps you make smart financial decisions with
            your extra compensation.
          </p>
        </section>
      </div>
    </article>
  );
}
