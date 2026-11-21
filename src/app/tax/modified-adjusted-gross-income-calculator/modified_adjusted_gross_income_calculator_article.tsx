import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ModifiedAdjustedGrossIncomeArticle() {
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
          <span className="meta-tag">Tax · MAGI</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Modified Adjusted Gross Income Calculator: Calculate Your MAGI
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to MAGI calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Modified Adjusted Gross Income (MAGI) is your AGI plus certain deductions that
            were added back. MAGI is used to determine eligibility for specific tax
            benefits, including IRA contributions, education credits, premium tax credits,
            and the Net Investment Income Tax. Common additions back include student
            loan interest, IRA deductions, and tuition deductions.
          </p>
          <p className="mb-5">
            A MAGI Calculator calculates your modified adjusted gross income based on
            your AGI and the specific deductions that must be added back. This tool
            helps you understand your eligibility for tax benefits that use MAGI
            thresholds.
          </p>
          <p>
            Understanding your MAGI is essential for planning IRA contributions and
            eligibility for various tax credits.
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
                q: "What is added back to AGI to calculate MAGI?",
                a: "Common additions include traditional IRA deductions, student loan interest deduction, tuition and fees deduction, foreign earned income exclusion, foreign housing exclusion, and half of self-employment tax.",
              },
              {
                q: "Why is MAGI important?",
                a: "MAGI determines eligibility for IRA contributions (phase-out starts at $129,000 for married filing jointly), education credits, premium tax credits (ACA), and the Net Investment Income Tax (thresholds at $200,000/$250,000).",
              },
              {
                q: "How does MAGI differ from AGI?",
                a: "MAGI is generally higher than AGI because it adds back certain deductions. For example, if your AGI is $100,000 and you deducted $5,000 in student loan interest, your MAGI would be $105,000.",
              },
              {
                q: "How can I lower my MAGI?",
                a: "Strategies include avoiding above-the-line deductions that are added back (like traditional IRA contributions if you're near phase-out limits), using Roth accounts instead of traditional, and managing income timing to stay below MAGI thresholds.",
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
            Use the MAGI Calculator to understand your modified adjusted gross income.
            MAGI determines eligibility for important tax benefits like IRA
            contributions and education credits.
          </p>
        </section>
      </div>
    </article>
  );
}
