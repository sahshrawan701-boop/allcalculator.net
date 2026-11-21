import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function VATArticle() {
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
          <span className="meta-tag">Tax · VAT</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            VAT Calculator: Calculate Value Added Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to VAT calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Value Added Tax (VAT) is a consumption tax levied on the value added at each
            stage of production and distribution. VAT is common in Europe, Canada, and
            many other countries, with rates typically ranging from 5% to 25%. Unlike sales
            tax which is collected only at the final point of sale, VAT is collected
            throughout the supply chain. Understanding VAT helps with international
            business and pricing.
          </p>
          <p className="mb-5">
            A VAT Calculator calculates the VAT amount on goods and services based on
            the applicable rate. This tool is essential for businesses operating in
            VAT jurisdictions and consumers understanding the tax component of purchases.
          </p>
          <p>
            Proper VAT calculation and remittance is essential for business compliance
            in countries with VAT systems.
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
                q: "What is the difference between VAT and sales tax?",
                a: "VAT is collected at each stage of production and distribution, while sales tax is collected only at the final point of sale. VAT is generally considered more efficient and harder to evade than sales tax.",
              },
              {
                q: "What are typical VAT rates?",
                a: "VAT rates vary by country and product type. Standard rates range from 15-25% in most European countries. Reduced rates (5-10%) often apply to essentials like food and medicine. Some services may be exempt.",
              },
              {
                q: "How do businesses handle VAT?",
                a: "Businesses collect VAT on sales and claim credits for VAT paid on purchases. They remit the difference to the government. If VAT paid exceeds VAT collected, businesses may receive a refund.",
              },
              {
                q: "Is VAT refundable for tourists?",
                a: "Many countries offer VAT refunds for tourists who purchase goods and export them. Tourists typically need to present receipts and the goods at customs when leaving the country to claim the refund.",
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
            Use the VAT Calculator to understand VAT on purchases and sales. Proper
            VAT management is essential for businesses operating in VAT jurisdictions.
          </p>
        </section>
      </div>
    </article>
  );
}
