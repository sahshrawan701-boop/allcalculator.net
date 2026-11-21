import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DownPaymentArticle() {
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
          <span className="meta-tag">Mortgage · Down Payment</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Down Payment Calculator: Plan Your Home Purchase
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to down payments and home buying
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            The down payment is the upfront cash you pay when purchasing a home, typically
            expressed as a percentage of the purchase price. A larger down payment reduces
            your loan amount, monthly payments, and may help you avoid private mortgage
            insurance (PMI). Planning your down payment is a crucial step in home buying.
          </p>
          <p className="mb-5">
            A Down Payment Calculator helps you determine how much you need to save based
            on your target home price and desired down payment percentage. This tool is
            essential for first-time homebuyers planning their savings strategy and
            understanding their purchasing power.
          </p>
          <p>
            Understanding down payment requirements, PMI thresholds, and savings strategies
            helps you make informed decisions about timing your home purchase and choosing
            the right mortgage.
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
                q: "What is the minimum down payment required?",
                a: "Conventional loans typically require 3-20% down. FHA loans require as little as 3.5%. VA and USDA loans offer 0% down payment options for eligible borrowers.",
              },
              {
                q: "When can I avoid PMI?",
                a: "Most conventional loans require 20% down to avoid PMI. Some lenders offer programs that eliminate PMI with less than 20% down, but these may have higher rates.",
              },
              {
                q: "Should I put 20% down?",
                a: "Putting 20% down avoids PMI and gets better rates, but tying up cash in your home reduces liquidity. Consider your overall financial situation and goals.",
              },
              {
                q: "Can I use gift funds for my down payment?",
                a: "Yes, many loan programs allow gift funds from family members. Documentation is required, and the donor typically must provide a gift letter stating the funds don't need repayment.",
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
            Use the Down Payment Calculator to plan your home purchase savings strategy.
            Understanding down payment requirements helps you prepare for homeownership
            and make informed financial decisions.
          </p>
        </section>
      </div>
    </article>
  );
}
