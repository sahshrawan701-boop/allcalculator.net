import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TaxWithholdingArticle() {
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
          <span className="meta-tag">Tax · Withholding</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Tax Withholding Calculator: Calculate Tax Withholding
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to tax withholding calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Tax withholding is the amount your employer withholds from each paycheck to
            cover your income tax liability. Proper withholding ensures you pay taxes
            throughout the year rather than owing a large amount at filing time. You can
            adjust your withholding by submitting a new W-4 form to your employer.
            Understanding withholding helps manage your cash flow and avoid surprises.
          </p>
          <p className="mb-5">
            A Tax Withholding Calculator helps you determine the right amount to withhold
            based on your income, filing status, deductions, and credits. This tool is
            essential for ensuring you don't overpay (giving the government an interest-free
            loan) or underpay (owing penalties).
          </p>
          <p>
            Adjusting your withholding can help you optimize your take-home pay and
            avoid underpayment penalties.
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
                q: "How do I adjust my tax withholding?",
                a: "Submit a new Form W-4 to your employer. The form asks about your filing status, multiple jobs, dependents, and other income. Use the IRS withholding calculator or consult a tax professional to determine the right amount.",
              },
              {
                q: "What if I withhold too little?",
                a: "Underwithholding can result in owing taxes at filing time and potential underpayment penalties. The safe harbor rule requires paying 90% of current year tax or 100% of last year's tax (110% if AGI over $150,000).",
              },
              {
                q: "What if I withhold too much?",
                a: "Overwithholding means you'll receive a tax refund, but you've given the government an interest-free loan. Consider adjusting your W-4 to increase take-home pay if you consistently receive large refunds.",
              },
              {
                q: "How does the W-4 form work?",
                a: "The W-4 tells your employer how much to withhold. The 2020+ version uses a five-step process: personal info, multiple jobs, dependents, other income, and adjustments. It no longer uses withholding allowances.",
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
            Use the Tax Withholding Calculator to optimize your paycheck withholding.
            Proper withholding ensures you pay the right amount throughout the year
            and avoid surprises at tax time.
          </p>
        </section>
      </div>
    </article>
  );
}
