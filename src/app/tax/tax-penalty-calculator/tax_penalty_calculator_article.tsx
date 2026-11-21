import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TaxPenaltyArticle() {
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
          <span className="meta-tag">Tax · Penalties</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Tax Penalty Calculator: Calculate Tax Penalties
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to tax penalty calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Tax penalties are additional charges imposed for failing to comply with tax
            laws. Common penalties include failure to file, failure to pay, underpayment
            of estimated tax, accuracy-related penalties, and late payment penalties.
            Understanding potential penalties helps avoid costly mistakes and ensures
            compliance with tax deadlines and requirements.
          </p>
          <p className="mb-5">
            A Tax Penalty Calculator estimates potential penalties based on the type of
            violation, amount owed, and duration of non-compliance. This tool helps
            taxpayers understand the consequences of late filing or payment and plan
            accordingly to avoid penalties.
          </p>
          <p>
            Most penalties can be avoided by filing on time, paying what you owe, and
            requesting extensions when needed.
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
                q: "What is the failure to file penalty?",
                a: "The failure to file penalty is 5% of unpaid taxes for each month or part of a month late, up to 25%. If over 60 days late, the minimum penalty is $485 or 100% of unpaid tax, whichever is less.",
              },
              {
                q: "What is the failure to pay penalty?",
                a: "The failure to pay penalty is 0.5% of unpaid taxes for each month or part of a month late, up to 25%. Both failure to file and failure to pay penalties can apply simultaneously.",
              },
              {
                q: "How can I avoid tax penalties?",
                a: "File your return by the deadline (or request an extension), pay as much as you can by the deadline, make estimated tax payments if required, and respond promptly to IRS notices. Reasonable cause may excuse penalties in some cases.",
              },
              {
                q: "Can tax penalties be waived?",
                a: "The IRS may waive penalties if you show reasonable cause for the failure, such as serious illness, natural disaster, or unavoidable absence. You must request penalty relief and provide documentation supporting your claim.",
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
            Use the Tax Penalty Calculator to understand potential penalties for
            non-compliance. Filing on time and paying what you owe helps avoid
            costly penalties.
          </p>
        </section>
      </div>
    </article>
  );
}
