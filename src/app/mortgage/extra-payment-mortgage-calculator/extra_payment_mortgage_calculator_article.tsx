import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ExtraPaymentArticle() {
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
          <span className="meta-tag">Mortgage · Extra Payments</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Extra Payment Mortgage Calculator: Pay Off Faster
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to extra mortgage payments and savings
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Making extra payments on your mortgage is one of the most effective ways
            to build home equity and save on interest. Even small additional payments
            applied to principal can significantly shorten your loan term and reduce
            total interest costs over the life of your mortgage.
          </p>
          <p className="mb-5">
            An Extra Payment Mortgage Calculator shows how additional principal payments
            affect your loan payoff timeline and total interest savings. This tool is
            essential for homeowners planning to accelerate their mortgage payoff or
            evaluating the impact of occasional extra payments.
          </p>
          <p>
            Understanding how extra payments work helps you make strategic decisions
            about allocating extra cash toward your mortgage versus other financial goals.
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
                q: "How much should I pay extra?",
                a: "Any amount helps. Even $50-100 extra monthly can save thousands in interest. Consider your budget and other financial priorities when deciding how much to add.",
              },
              {
                q: "Should I pay extra or invest?",
                a: "Compare your mortgage rate to potential investment returns. If your mortgage rate is higher than expected investment returns, paying extra may be better. Consider tax implications too.",
              },
              {
                q: "Do extra payments go to principal?",
                a: "Yes, when you make extra payments, specify they should go to principal. This reduces your balance faster and saves more interest than applying to future payments.",
              },
              {
                q: "Can I stop making extra payments?",
                a: "Yes, you can stop extra payments anytime. Your required monthly payment remains the same. Extra payments are optional and don't change your contractual obligation.",
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
            Use the Extra Payment Mortgage Calculator to see how additional payments
            can help you pay off your mortgage faster and save on interest. Strategic
            extra payments build equity and financial security.
          </p>
        </section>
      </div>
    </article>
  );
}
