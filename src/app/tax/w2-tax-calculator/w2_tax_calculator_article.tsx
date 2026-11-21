import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function W2TaxArticle() {
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
          <span className="meta-tag">Tax · W-2</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            W-2 Tax Calculator: Calculate Tax from W-2
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to W-2 tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Form W-2 is the Wage and Tax Statement that employers provide to employees
            annually. It reports your total wages, tips, and other compensation, plus
            the taxes withheld throughout the year. The W-2 is essential for filing your
            tax return and includes information about federal income tax, Social Security
            tax, Medicare tax, and state income tax withholding.
          </p>
          <p className="mb-5">
            A W-2 Tax Calculator helps you understand your tax liability based on the
            information reported on your W-2. This tool allows you to verify that your
            employer withheld the correct amount and estimate your refund or tax owed.
          </p>
          <p>
            Review your W-2 carefully each year to ensure accuracy and catch any
            errors before filing your tax return.
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
                q: "When should I receive my W-2?",
                a: "Employers must provide W-2 forms by January 31st each year. If you haven't received your W-2 by February 14th, contact the IRS. You can file your tax return once you have all necessary documents.",
              },
              {
                q: "What information is on a W-2?",
                a: "W-2 includes wages (Box 1), federal tax withheld (Box 2), Social Security wages (Box 3), Social Security tax withheld (Box 4), Medicare wages (Box 5), Medicare tax withheld (Box 6), state wages and tax (Boxes 15-17), and other information.",
              },
              {
                q: "What if my W-2 is incorrect?",
                a: "Contact your employer immediately to correct errors. Employers can issue W-2c (Corrected Wage and Tax Statement) for corrections. If your employer doesn't correct it, contact the IRS for assistance.",
              },
              {
                q: "How do I use my W-2 to file taxes?",
                a: "Enter the information from your W-2 boxes into your tax return (Form 1040). Most tax software guides you through entering W-2 information. Keep your W-2 with your tax records for at least three years.",
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
            Use the W-2 Tax Calculator to understand your tax liability based on your
            W-2 information. Accurate W-2 data is essential for correct tax filing.
          </p>
        </section>
      </div>
    </article>
  );
}
