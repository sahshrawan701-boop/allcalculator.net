import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function MarginalTaxArticle() {
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
          <span className="meta-tag">Tax · Marginal Rate</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Marginal Tax Calculator: Calculate Your Marginal Tax Rate
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to marginal tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your marginal tax rate is the rate you pay on your last dollar of income.
            In a progressive tax system, different portions of your income are taxed
            at different rates. Understanding your marginal rate helps with financial
            decisions like bonus timing, retirement contributions, and investment strategy.
            Your marginal rate differs from your effective (average) tax rate.
          </p>
          <p className="mb-5">
            A Marginal Tax Calculator identifies your marginal tax rate based on your
            taxable income and filing status. This tool helps you understand how
            additional income will be taxed and make informed financial decisions.
          </p>
          <p>
            Knowing your marginal tax rate is essential for evaluating the after-tax
            benefit of additional income or the cost of deductions.
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
                q: "What is the difference between marginal and effective tax rate?",
                a: "Marginal rate is the rate on your last dollar of income (your highest bracket). Effective rate is the average rate you pay on all your income after accounting for all brackets and deductions. Effective rate is always lower than marginal rate.",
              },
              {
                q: "Why does marginal tax rate matter?",
                a: "Marginal rate determines the tax impact of additional income or deductions. If you're in the 24% bracket, an extra $1,000 of income costs $240 in tax. A $1,000 deduction saves $240 in tax. This helps evaluate financial decisions.",
              },
              {
                q: "How do I lower my marginal tax rate?",
                a: "You can lower your marginal rate by reducing taxable income through deductions (401k, IRA, HSA contributions), timing income recognition, or using tax credits. Moving to a lower tax bracket requires significant income reduction.",
              },
              {
                q: "What are the 2024 marginal tax brackets?",
                a: "For single filers: 10% (up to $11,600), 12% (up to $47,150), 22% (up to $100,525), 24% (up to $191,950), 32% (up to $243,725), 35% (up to $609,350), 37% (above $609,350). Brackets roughly double for married filing jointly.",
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
            Use the Marginal Tax Calculator to understand your marginal tax rate.
            Knowing your marginal rate helps with strategic financial planning and
            decision-making.
          </p>
        </section>
      </div>
    </article>
  );
}
