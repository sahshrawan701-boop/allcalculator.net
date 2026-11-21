import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TaxableEquivalentYieldArticle() {
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
          <span className="meta-tag">Tax · Yield</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Taxable Equivalent Yield Calculator: Calculate Taxable Equivalent Yield
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to taxable equivalent yield calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Taxable equivalent yield converts tax-free investment returns to their taxable
            equivalent, allowing fair comparison with taxable investments. This is the
            inverse of tax-equivalent yield. It shows what a tax-free investment would
            yield if it were taxable, helping you understand the tax advantage of
            tax-free investments like municipal bonds.
          </p>
          <p className="mb-5">
            A Taxable Equivalent Yield Calculator converts tax-free yields to their
            taxable equivalent based on your tax bracket. This tool helps investors
            understand the tax benefit of tax-free investments and make informed
            investment decisions.
          </p>
          <p>
            Higher tax brackets make tax-free investments more valuable because the
            taxable equivalent yield increases with your marginal rate.
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
                q: "How is taxable equivalent yield calculated?",
                a: "Taxable equivalent yield = Tax-free yield × (1 - Marginal tax rate). For example, a 3% tax-free yield for someone in the 24% bracket equals 2.28% taxable equivalent yield (3% × 0.76 = 2.28%).",
              },
              {
                q: "Why is taxable equivalent yield useful?",
                a: "It shows the after-tax value of tax-free investments in taxable terms. A 3% tax-free yield equals a 2.28% taxable yield for someone in the 24% bracket, meaning you'd need a taxable investment yielding 2.28% to match the after-tax return.",
              },
              {
                q: "What investments are tax-free?",
                a: "Common tax-free investments include municipal bonds (interest exempt from federal tax and often state tax if you live in the issuing state), Treasury securities (exempt from state tax), and certain money market funds holding these securities.",
              },
              {
                q: "Should I consider state taxes in taxable equivalent yield?",
                a: "Yes, if comparing municipal bonds to other investments. Municipal bond interest is typically exempt from state tax if you live in the issuing state. Calculate separate taxable equivalent yields for federal and state taxes for accurate comparison.",
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
            Use the Taxable Equivalent Yield Calculator to understand the after-tax
            value of tax-free investments. This calculation helps make informed
            investment decisions based on your tax situation.
          </p>
        </section>
      </div>
    </article>
  );
}
