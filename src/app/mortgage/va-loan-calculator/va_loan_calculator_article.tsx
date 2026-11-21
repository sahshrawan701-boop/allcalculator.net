import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function VALoanArticle() {
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
          <span className="meta-tag">Mortgage · VA Loans</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            VA Loan Calculator: Veterans Affairs Home Loans
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to VA loans and funding fees
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            VA loans are mortgage programs backed by the Department of Veterans Affairs,
            designed to help veterans, active-duty service members, and eligible surviving
            spouses purchase homes with favorable terms. With no down payment requirement
            (in most cases) and no private mortgage insurance, VA loans offer significant
            advantages for those who qualify.
          </p>
          <p className="mb-5">
            A VA Loan Calculator estimates your monthly payments including the VA funding
            fee, which is a one-time cost that can be rolled into the loan. This tool is
            essential for eligible veterans and service members exploring their home
            financing options.
          </p>
          <p>
            Understanding VA loan eligibility, funding fees, and how they compare to
            conventional and FHA loans helps you make the best financing choice for your
            situation.
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
                q: "Who is eligible for a VA loan?",
                a: "Eligibility includes veterans with at least 90 days of active service during wartime, 181 days during peacetime, or 6 years in the Reserves/National Guard. Surviving spouses of service members who died in service or from service-related disabilities may also qualify.",
              },
              {
                q: "What is the VA funding fee?",
                a: "The VA funding fee is a one-time fee that helps offset the cost of the VA loan program. It ranges from 1.25-3.3% depending on down payment, military status, and whether it's your first VA loan.",
              },
              {
                q: "Can I use a VA loan more than once?",
                a: "Yes, you can use your VA loan benefit multiple times or even simultaneously if you have sufficient entitlement remaining. The funding fee may be lower for subsequent use.",
              },
              {
                q: "Do VA loans require a down payment?",
                a: "No down payment is required for most VA loans, though you can choose to put money down to reduce your funding fee. This is a significant advantage over conventional loans.",
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
            Use the VA Loan Calculator to understand your monthly payments including
            the funding fee. VA loans offer excellent terms for eligible veterans and
            service members pursuing homeownership.
          </p>
        </section>
      </div>
    </article>
  );
}
