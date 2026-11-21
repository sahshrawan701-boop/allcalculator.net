import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function GiftTaxArticle() {
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
          <span className="meta-tag">Tax · Gift</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Gift Tax Calculator: Calculate Gift Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to gift tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Gift tax is a federal tax on transfers of property or money to others without
            receiving equivalent value in return. The 2024 annual gift tax exclusion is
            $17,000 per recipient. Gifts above this amount may require filing Form 709
            and count toward your lifetime gift tax exemption ($13.61 million for 2024).
            Understanding gift tax helps with estate planning.
          </p>
          <p className="mb-5">
            A Gift Tax Calculator calculates your potential gift tax liability based on
            the amount gifted, number of recipients, and your lifetime exemption usage.
            This tool helps you understand gift tax obligations and plan strategic gifting.
          </p>
          <p>
            Strategic gifting can reduce your taxable estate while staying within gift
            tax exemption limits.
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
                q: "What is the gift tax exclusion for 2024?",
                a: "The annual gift tax exclusion is $17,000 per recipient. You can give up to this amount to any number of people without filing a gift tax return or using your lifetime exemption. Married couples can give $34,000 per recipient through gift splitting.",
              },
              {
                q: "What is the lifetime gift tax exemption?",
                a: "For 2024, the lifetime gift tax exemption is $13.61 million per individual ($27.22 million for married couples). This exemption applies to gifts above the annual exclusion and is shared with the estate tax exemption.",
              },
              {
                q: "Do I owe tax on gifts under the exclusion?",
                a: "No, you owe no gift tax on gifts up to the annual exclusion amount ($17,000 per recipient in 2024). You also owe no gift tax until your cumulative lifetime gifts exceed the lifetime exemption amount.",
              },
              {
                q: "What counts as a gift?",
                a: "A gift is any transfer to an individual where you don't receive full consideration in return. This includes cash, property, stocks, or paying someone's bills directly. Gifts to spouses, charities, and political organizations are generally exempt.",
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
            Use the Gift Tax Calculator to understand your gift tax obligations.
            Strategic gifting within exemption limits can reduce your taxable estate
            without incurring gift tax.
          </p>
        </section>
      </div>
    </article>
  );
}
