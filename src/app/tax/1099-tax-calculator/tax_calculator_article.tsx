import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function Tax1099Article() {
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
          <span className="meta-tag">Tax · 1099 Forms</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            1099 Tax Calculator: Calculate 1099 Tax Liability
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to 1099 form tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Form 1099 is a series of tax forms used to report various types of income
            other than wages, salaries, and tips. Common 1099 forms include 1099-NEC for
            independent contractor income, 1099-INT for interest income, 1099-DIV for
            dividends, and 1099-MISC for miscellaneous income. Understanding your
            1099 forms is crucial for accurate tax filing.
          </p>
          <p className="mb-5">
            A 1099 Tax Calculator helps estimate your tax liability based on income
            reported on various 1099 forms. This tool is essential for freelancers,
            independent contractors, investors, and anyone receiving non-employee
            compensation to understand their tax obligations.
          </p>
          <p>
            Properly reporting 1099 income ensures compliance with IRS requirements
            and helps avoid penalties for underpayment or late filing.
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
                q: "What are the different types of 1099 forms?",
                a: "Common types include 1099-NEC (non-employee compensation), 1099-INT (interest), 1099-DIV (dividends), 1099-MISC (miscellaneous income), 1099-B (broker transactions), and 1099-K (payment card transactions).",
              },
              {
                q: "Do I need to pay taxes on 1099 income?",
                a: "Yes, income reported on 1099 forms is taxable. You're responsible for paying income tax and self-employment tax (15.3%) on 1099-NEC income as an independent contractor.",
              },
              {
                q: "When are 1099 forms due?",
                a: "Payers must file 1099 forms with the IRS by January 31 and provide copies to recipients by January 31. Recipients use these forms to file their tax returns by April 15.",
              },
              {
                q: "How much should I set aside for taxes on 1099 income?",
                a: "A common rule is to set aside 25-30% of 1099-NEC income for taxes (income tax + self-employment tax). Consult a tax professional for guidance based on your specific situation.",
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
            Use the 1099 Tax Calculator to estimate your tax liability on 1099 income.
            Proper tax planning and estimated payments help avoid penalties and ensure
            compliance with IRS requirements.
          </p>
        </section>
      </div>
    </article>
  );
}
