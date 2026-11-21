import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function MortgageAffordabilityArticle() {
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
          <span className="meta-tag">Mortgage · Affordability</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Mortgage Affordability Calculator: How Much Can You Afford?
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to determining your home buying budget
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Determining how much house you can afford is one of the most important
            steps in the home buying process. Lenders use various ratios and guidelines
            to assess affordability, but your personal comfort level with monthly
            payments should also guide your decision. Understanding affordability
            helps you shop within your means and avoid financial stress.
          </p>
          <p className="mb-5">
            A Mortgage Affordability Calculator estimates how much you can borrow based
            on your income, debts, down payment, and other factors. This tool is essential
            for first-time homebuyers establishing a realistic budget and for anyone
            considering a home purchase.
          </p>
          <p>
            Understanding debt-to-income ratios, housing expense guidelines, and the
            total cost of homeownership helps you make a confident decision about your
            home buying budget.
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
                q: "What is the 28/36 rule?",
                a: "The 28/36 rule suggests housing costs shouldn't exceed 28% of gross income, and total debt payments shouldn't exceed 36%. Lenders use these as affordability guidelines.",
              },
              {
                q: "How much should I spend on a house?",
                a: "Financial experts recommend spending no more than 2.5-3 times your annual gross income on a home. However, your specific situation, market conditions, and comfort level should guide your decision.",
              },
              {
                q: "What costs should I consider beyond the mortgage?",
                a: "Consider property taxes, insurance, HOA fees, utilities, maintenance, and repairs. These can add 30-50% to your monthly housing costs.",
              },
              {
                q: "Can I afford a home if I have student loans?",
                a: "Student loans affect your debt-to-income ratio but don't necessarily disqualify you. Lenders look at your overall financial picture, including income, assets, and credit score.",
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
            Use the Mortgage Affordability Calculator to determine a realistic home
            buying budget. Understanding affordability helps you make a confident
            home purchase decision within your financial means.
          </p>
        </section>
      </div>
    </article>
  );
}
