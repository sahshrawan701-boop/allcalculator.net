import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BackupWithholdingArticle() {
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
            Backup Withholding Calculator: Calculate Backup Withholding
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to backup withholding calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Backup withholding is a federal tax withholding of 24% on certain payments
            when the payer doesn't have the recipient's correct taxpayer identification
            number (TIN) or the IRS has notified the payer to withhold. It applies to
            interest, dividends, rents, royalties, and certain other payments. Backup
            withholding ensures tax collection when regular withholding isn't possible.
          </p>
          <p className="mb-5">
            A Backup Withholding Calculator estimates the backup withholding amount on
            various types of payments. This tool helps payers understand their
            withholding obligations and recipients understand why backup withholding
            may apply to their payments.
          </p>
          <p>
            Providing your correct TIN to payers prevents backup withholding on your
            payments.
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
                q: "What triggers backup withholding?",
                a: "Backup withholding is triggered when: you don't provide your TIN, the IRS notifies the payer your TIN is incorrect, you underreport interest/dividends, or you don't certify you're not subject to backup withholding.",
              },
              {
                q: "What is the backup withholding rate?",
                a: "The backup withholding rate is 24% as of 2024. This rate applies to the full payment amount, not just the portion subject to withholding. The rate is set by the IRS and can change.",
              },
              {
                q: "How do I stop backup withholding?",
                a: "Provide your correct TIN to the payer using Form W-9. If the IRS notified you of underreporting, resolve the issue with the IRS and request a determination that backup withholding should stop.",
              },
              {
                q: "Can I claim backup withholding as a credit?",
                a: "Yes, backup withholding is credited against your tax liability on your tax return. Report the amount withheld on the appropriate line of Form 1040. If withholding exceeds your tax liability, you'll receive a refund.",
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
            Use the Backup Withholding Calculator to understand withholding obligations.
            Providing correct TIN information prevents backup withholding on your
            payments.
          </p>
        </section>
      </div>
    </article>
  );
}
