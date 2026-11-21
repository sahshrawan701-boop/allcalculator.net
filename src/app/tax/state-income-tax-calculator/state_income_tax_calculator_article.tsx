import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function StateIncomeTaxArticle() {
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
          <span className="meta-tag">Tax · State Income</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            State Income Tax Calculator: Calculate State Income Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to state income tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            State income tax is levied by most states on your taxable income, with rates
            and structures varying significantly. Some states have flat tax rates, while
            others use progressive brackets. Seven states have no income tax: Alaska,
            Florida Nevada, South Dakota, Texas, Washington, and Wyoming. Understanding
            your state income tax helps with total tax planning.
          </p>
          <p className="mb-5">
            A State Income Tax Calculator estimates your state tax liability based on
            your income, filing status, and state of residence. This tool is essential
            for understanding your total tax burden and comparing tax situations across
            different states.
          </p>
          <p>
            State income tax is an important consideration when planning relocations or
            comparing job offers in different states.
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
                q: "What states have no income tax?",
                a: "Seven states have no income tax: Alaska, Florida, Nevada, South Dakota, Texas, Washington, and Wyoming. New Hampshire and Tennessee tax only interest and dividends, not wages.",
              },
              {
                q: "What states have the highest income tax rates?",
                a: "California has the highest top rate at 13.3%. Other high-tax states include New York (10.9%), Hawaii (11%), New Jersey (10.75%), and Oregon (9.9%). Rates apply to high-income earners.",
              },
              {
                q: "How do state income tax brackets work?",
                a: "States with progressive tax systems use marginal brackets similar to federal taxes. Some states have flat rates (e.g., Colorado 4.4%, Illinois 4.95%). Check your state's specific tax structure.",
              },
              {
                q: "Can I deduct state income tax on my federal return?",
                a: "Yes, you can deduct up to $10,000 in state and local income tax (combined with sales tax or property tax) if you itemize deductions instead of claiming the standard deduction.",
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
            Use the State Income Tax Calculator to understand your state tax liability.
            State income tax significantly impacts your total tax burden and should
            be considered in financial planning.
          </p>
        </section>
      </div>
    </article>
  );
}
