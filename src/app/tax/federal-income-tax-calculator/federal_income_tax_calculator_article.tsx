import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function FederalIncomeTaxArticle() {
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
          <span className="meta-tag">Tax · Federal Income</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Federal Income Tax Calculator: Calculate Federal Income Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to federal income tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Federal income tax is a progressive tax on your taxable income, with rates
            ranging from 10% to 37% for 2024. The tax system uses marginal tax brackets,
            meaning only income within each bracket is taxed at that rate. Understanding
            your federal tax liability helps with financial planning and tax optimization.
          </p>
          <p className="mb-5">
            A Federal Income Tax Calculator estimates your tax liability based on income,
            filing status, deductions, and credits. This tool is essential for taxpayers
            to understand their tax obligations and plan for estimated payments or
            withholding adjustments.
          </p>
          <p>
            Proper tax planning helps ensure you pay the right amount throughout the
            year and avoid surprises at tax time.
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
                q: "What are the 2024 federal tax brackets?",
                a: "For 2024, brackets are 10% (up to $11,600 single), 12% (up to $47,150), 22% (up to $100,525), 24% (up to $191,950), 32% (up to $243,725), 35% (up to $609,350), and 37% (above $609,350).",
              },
              {
                q: "How do tax brackets work?",
                a: "Tax brackets are marginal. For example, if you're in the 22% bracket, only income above the 12% bracket threshold is taxed at 22%. Income below that is taxed at lower rates.",
              },
              {
                q: "What filing status should I choose?",
                a: "Options include Single, Married Filing Jointly, Married Filing Separately, Head of Household, and Qualifying Surviving Spouse. Choose the status that best describes your situation for the most favorable tax treatment.",
              },
              {
                q: "What's the difference between standard and itemized deductions?",
                a: "The standard deduction is a fixed amount ($14,600 single, $29,200 married for 2024). Itemizing means listing specific deductions. You should choose whichever gives you the larger deduction.",
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
            Use the Federal Income Tax Calculator to estimate your tax liability and
            plan accordingly. Understanding your tax obligations helps ensure
            compliance and optimize your tax position.
          </p>
        </section>
      </div>
    </article>
  );
}
