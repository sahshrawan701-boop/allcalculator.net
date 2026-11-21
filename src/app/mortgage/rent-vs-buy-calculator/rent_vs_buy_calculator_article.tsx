import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RentVsBuyArticle() {
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
          <span className="meta-tag">Mortgage · Rent vs Buy</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Rent vs Buy Calculator: Which is Better for You?
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to the rent vs buy decision
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            The decision to rent or buy a home is one of the most significant financial
            choices you'll make. While homeownership offers potential equity growth
            and stability, renting provides flexibility and lower upfront costs. The
            right choice depends on your financial situation, lifestyle, and long-term
            goals.
          </p>
          <p className="mb-5">
            A Rent vs Buy Calculator compares the total costs of renting versus buying
            over time, factoring in mortgage payments, appreciation, maintenance,
            taxes, and opportunity costs. This tool is essential for anyone trying to
            make an informed housing decision.
          </p>
          <p>
            Understanding the financial implications of both options helps you choose
            the path that aligns with your goals and circumstances.
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
                q: "When does buying make more sense than renting?",
                a: "Buying typically makes sense if you plan to stay in the home 5+ years, can afford the upfront costs, want to build equity, and value stability over flexibility.",
              },
              {
                q: "What costs should I consider beyond the mortgage?",
                a: "Homeownership includes property taxes, insurance, maintenance, repairs, HOA fees, and utilities. These can add 30-50% to your monthly housing costs.",
              },
              {
                q: "How does home appreciation affect the decision?",
                a: "Historical appreciation averages 3-5% annually. If you expect strong appreciation, buying may be more advantageous. However, appreciation isn't guaranteed.",
              },
              {
                q: "What are the advantages of renting?",
                a: "Renting offers flexibility to move, no maintenance responsibility, lower upfront costs, and no risk of declining home values. It's ideal for those with uncertain plans.",
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
            Use the Rent vs Buy Calculator to compare the financial implications of
            renting versus buying. Understanding the costs and benefits of each option
            helps you make a confident housing decision.
          </p>
        </section>
      </div>
    </article>
  );
}
