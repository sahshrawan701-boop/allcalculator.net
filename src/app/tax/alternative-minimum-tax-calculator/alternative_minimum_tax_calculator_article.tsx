import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function AlternativeMinimumTaxArticle() {
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
          <span className="meta-tag">Tax · AMT</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Alternative Minimum Tax Calculator: Calculate AMT
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to AMT calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            The Alternative Minimum Tax (AMT) is a parallel tax system designed to ensure
            high-income taxpayers pay a minimum amount of tax. The AMT disallows certain
            deductions and credits allowed under regular tax rules. If your AMT liability
            exceeds your regular tax liability, you must pay the AMT. Understanding the
            AMT helps with tax planning for high-income individuals.
          </p>
          <p className="mb-5">
            An AMT Calculator estimates whether you're subject to the AMT and calculates
            your potential AMT liability. This tool is essential for taxpayers with
            high incomes, significant deductions, or incentive stock options to understand
            their total tax obligation.
          </p>
          <p>
            The AMT exemption phases out at higher income levels, potentially affecting
            taxpayers with incomes above $500,000.
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
                q: "Who is subject to the AMT?",
                a: "The AMT primarily affects high-income taxpayers with large deductions. For 2024, the AMT exemption is $81,300 single ($126,500 married). The exemption phases out above $578,150 single ($1,156,300 married).",
              },
              {
                q: "What deductions are disallowed under AMT?",
                a: "Common disallowed deductions include state and local taxes, miscellaneous itemized deductions, personal exemptions, and certain medical expenses. The AMT also uses a different depreciation method.",
              },
              {
                q: "What is the AMT tax rate?",
                a: "The AMT has two tax rates: 26% on the first $220,700 of AMT income ($110,350 for married filing separately) and 28% on income above that amount. These rates apply to your AMT income after adjustments.",
              },
              {
                q: "How do I calculate AMT?",
                a: "Calculate your regular taxable income, then make AMT adjustments (add back disallowed deductions). Subtract the AMT exemption (phased out at higher incomes). Apply AMT rates. Pay the higher of regular tax or AMT.",
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
            Use the AMT Calculator to determine if you're subject to the Alternative
            Minimum Tax. Understanding the AMT helps with tax planning and avoiding
            surprises at filing time.
          </p>
        </section>
      </div>
    </article>
  );
}
