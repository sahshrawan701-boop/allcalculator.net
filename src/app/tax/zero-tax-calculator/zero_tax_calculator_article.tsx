import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ZeroTaxArticle() {
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
          <span className="meta-tag">Tax · Zero Tax</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Zero Tax Calculator: Calculate Zero Tax Strategies
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to zero tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            While achieving zero tax liability is rare for most taxpayers, there are
            legitimate strategies to minimize taxes significantly. These include
            maximizing deductions and credits, utilizing tax-advantaged accounts,
            strategic investment placement, and timing income recognition. Understanding
            these strategies helps optimize your tax position legally and ethically.
          </p>
          <p className="mb-5">
            A Zero Tax Calculator helps identify strategies to minimize your tax
            liability based on your income, assets, and financial situation. This tool
            is for educational purposes to understand tax optimization strategies.
          </p>
          <p>
            Always consult a qualified tax professional before implementing tax
            strategies to ensure compliance with tax laws.
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
                q: "Is it possible to pay zero taxes legally?",
                a: "For most taxpayers, paying zero federal income tax is difficult but possible in specific situations. This may occur if your income is below the standard deduction, you have significant tax credits, or you have tax-exempt income sources.",
              },
              {
                q: "What strategies can minimize taxes?",
                a: "Strategies include maximizing retirement contributions (401k, IRA), using health savings accounts (HSA), harvesting tax losses, holding investments long-term, and utilizing tax credits like the Earned Income Credit.",
              },
              {
                q: "What are tax-advantaged accounts?",
                a: "Tax-advantaged accounts include 401(k)s, traditional IRAs (tax-deferred), Roth IRAs (tax-free growth), HSAs (triple tax advantage), and 529 plans (education). These accounts offer significant tax benefits.",
              },
              {
                q: "What is tax-loss harvesting?",
                a: "Tax-loss harvesting involves selling investments at a loss to offset capital gains, reducing your tax liability. Losses can offset gains dollar-for-dollar, and up to $3,000 of excess losses can offset ordinary income annually.",
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
            Use the Zero Tax Calculator to understand tax minimization strategies.
            Proper tax planning can significantly reduce your tax liability while
            maintaining full legal compliance.
          </p>
        </section>
      </div>
    </article>
  );
}
