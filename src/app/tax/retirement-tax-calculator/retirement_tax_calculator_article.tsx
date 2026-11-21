import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RetirementTaxArticle() {
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
          <span className="meta-tag">Tax · Retirement</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Retirement Tax Calculator: Calculate Retirement Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to retirement tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Retirement income from various sources is taxed differently. Traditional
            401(k) and IRA withdrawals are taxed as ordinary income, Roth withdrawals are
            tax-free, Social Security benefits may be partially taxable, and pension income
            is generally taxable. Understanding how your retirement income is taxed helps
            plan for sustainable withdrawals and minimize tax liability.
          </p>
          <p className="mb-5">
            A Retirement Tax Calculator estimates your tax liability on retirement
            income from various sources. This tool is essential for retirees and those
            planning retirement to understand their after-tax income and plan
            withdrawals strategically.
          </p>
          <p>
            Strategic withdrawal planning can significantly reduce your lifetime tax
            burden and extend your retirement savings.
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
                q: "Is Social Security taxable?",
                a: "Up to 85% of Social Security benefits may be taxable depending on your combined income. If your combined income is under $25,000 ($32,000 married), benefits are generally not taxable. Above $34,000 ($44,000 married), up to 85% may be taxable.",
              },
              {
                q: "How are 401(k) withdrawals taxed?",
                a: "Traditional 401(k) withdrawals are taxed as ordinary income at your current tax rate. Roth 401(k) withdrawals are tax-free if the account is at least 5 years old and you're 59½ or older.",
              },
              {
                q: "What is the required minimum distribution (RMD)?",
                a: "RMDs are required from traditional IRAs and 401(k)s starting at age 73 (75 for those born after 1959). You must withdraw a calculated amount annually or face a 25% penalty. Roth IRAs have no RMDs during your lifetime.",
              },
              {
                q: "How can I minimize taxes in retirement?",
                a: "Strategies include Roth conversions in low-income years, strategic withdrawal order (taxable accounts first, then traditional, then Roth), delaying Social Security to maximize benefits, and managing taxable income to stay in lower brackets.",
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
            Use the Retirement Tax Calculator to understand your tax liability on
            retirement income. Strategic withdrawal planning can minimize taxes and
            maximize your retirement savings.
          </p>
        </section>
      </div>
    </article>
  );
}
