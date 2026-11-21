import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function GSTArticle() {
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
          <span className="meta-tag">Tax · GST</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            GST Calculator: Calculate Goods and Services Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to GST calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Goods and Services Tax (GST) is a value-added tax levied on most goods and
            services sold for domestic consumption. GST is commonly used in Canada,
            Australia, India, and other countries. The tax is typically included in the
            final price paid by consumers, and businesses collect and remit GST to the
            government. Understanding GST helps with pricing and compliance.
          </p>
          <p className="mb-5">
            A GST Calculator calculates the GST amount on goods and services based on
            the applicable rate. This tool is essential for businesses to calculate
            tax on sales, and for consumers to understand the tax component of their
            purchases.
          </p>
          <p>
            Proper GST calculation and remittance is essential for business compliance
            and accurate pricing strategies.
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
                q: "What are common GST rates?",
                a: "GST rates vary by country. Canada has 5% federal GST (plus provincial HST/PST). Australia has 10% GST. India has multiple rates: 5%, 12%, 18%, and 28% depending on the product.",
              },
              {
                q: "How do I calculate GST from a total price?",
                a: "To calculate GST from a total price, divide the total by (1 + GST rate as decimal). For example, with 10% GST: $110 ÷ 1.10 = $100 pre-GST amount. GST = $110 - $100 = $10.",
              },
              {
                q: "Who pays GST?",
                a: "Consumers ultimately pay GST through the price of goods and services. Businesses collect GST from customers and remit it to the government, minus any GST paid on business inputs.",
              },
              {
                q: "What is the difference between GST and VAT?",
                a: "GST and VAT are essentially the same concept - a consumption tax on goods and services. The terminology varies by country. GST is used in Canada, Australia, and India, while VAT is used in Europe and other regions.",
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
            Use the GST Calculator to calculate GST on goods and services. Accurate
            GST calculation is essential for business compliance and consumer awareness.
          </p>
        </section>
      </div>
    </article>
  );
}
