import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PropertyTaxArticle() {
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
          <span className="meta-tag">Tax · Property</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Property Tax Calculator: Calculate Property Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to property tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Property tax is an annual tax on real estate based on the assessed value of
            the property. Local governments use property taxes to fund schools, police,
            fire departments, and other public services. Property tax rates vary
            significantly by location, typically expressed as a percentage of assessed
            value or per $1,000 of assessed value. Understanding property tax helps
            homeowners budget for ongoing ownership costs.
          </p>
          <p className="mb-5">
            A Property Tax Calculator estimates your annual property tax based on the
            assessed value and local tax rate. This tool is essential for homeowners
            and prospective buyers to understand their ongoing tax obligations and
            budget accordingly.
          </p>
          <p>
            Property tax is often one of the largest ongoing costs of homeownership,
            making accurate estimation crucial for financial planning.
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
                q: "How is property tax calculated?",
                a: "Property tax is calculated by multiplying the assessed value of your property by the local tax rate. For example, a $300,000 home with a 1.5% tax rate would owe $4,500 annually in property tax.",
              },
              {
                q: "What is the difference between assessed value and market value?",
                a: "Market value is what your home would sell for on the open market. Assessed value is the value determined by the local tax assessor for tax purposes, which may be lower than market value depending on local assessment practices.",
              },
              {
                q: "Can I deduct property tax on my tax return?",
                a: "Yes, you can deduct up to $10,000 in state and local property taxes (combined with sales tax or income tax) if you itemize deductions instead of claiming the standard deduction.",
              },
              {
                q: "What if I think my property tax assessment is too high?",
                a: "Most jurisdictions allow you to appeal your property tax assessment. You'll need to provide evidence that your home's assessed value is incorrect, such as recent comparable sales or an independent appraisal.",
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
            Use the Property Tax Calculator to estimate your annual property tax
            obligation. Understanding property tax helps budget for homeownership
            and make informed real estate decisions.
          </p>
        </section>
      </div>
    </article>
  );
}
