import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ARMMortgageArticle() {
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
          <span className="meta-tag">Mortgage · Adjustable Rate</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            ARM Mortgage Calculator: Adjustable Rate Mortgage
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to adjustable rate mortgages and rate adjustments
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Adjustable Rate Mortgages (ARMs) offer an initial fixed-rate period followed by
            periodic rate adjustments based on market indices. ARMs can provide lower
            initial rates than fixed-rate mortgages, but payments may change over time.
            Understanding how ARMs work is crucial for managing payment uncertainty.
          </p>
          <p className="mb-5">
            An ARM Mortgage Calculator helps estimate payments under different rate
            adjustment scenarios, showing worst-case and best-case payment scenarios.
            This tool is essential for anyone considering an ARM or trying to understand
            potential payment changes.
          </p>
          <p>
            Understanding ARM terms like adjustment periods, caps, and margins helps
            you make informed decisions about whether an ARM fits your financial situation.
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
                q: "What are ARM caps?",
                a: "Caps limit how much your rate can increase. Periodic caps limit each adjustment, lifetime caps limit total increase, and payment caps limit monthly payment changes.",
              },
              {
                q: "How often do ARM rates adjust?",
                a: "Adjustment frequency varies by loan. Common periods are annually, every 6 months, or monthly. The initial fixed period can range from 1 to 10 years.",
              },
              {
                q: "What index do ARMs use?",
                a: "Common indices include the Secured Overnight Financing Rate (SOFR), Treasury yields, or the Cost of Funds Index (COFI). Your rate equals index plus margin.",
              },
              {
                q: "Should I choose an ARM or fixed-rate mortgage?",
                a: "Consider your time horizon, risk tolerance, and rate outlook. ARMs may save money if you plan to move before the first adjustment or if rates stay low.",
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
            Use the ARM Mortgage Calculator to understand potential payment changes
            and evaluate whether an adjustable rate mortgage fits your financial goals.
          </p>
        </section>
      </div>
    </article>
  );
}
