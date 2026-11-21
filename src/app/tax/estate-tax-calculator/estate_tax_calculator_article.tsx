import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function EstateTaxArticle() {
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
          <span className="meta-tag">Tax · Estate</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Estate Tax Calculator: Calculate Federal Estate Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to estate tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Federal estate tax applies to the transfer of property at death. For 2024,
            the federal estate tax exemption is $13.61 million per individual ($27.22
            million for married couples). Estates exceeding this threshold are taxed at
            rates up to 40%. Understanding estate tax implications is crucial for
            high-net-worth individuals and estate planning.
          </p>
          <p className="mb-5">
            An Estate Tax Calculator estimates your potential estate tax liability based
            on your estate value and applicable exemptions. This tool is essential for
            estate planning, helping individuals understand potential tax burdens and
            explore strategies to minimize estate taxes.
          </p>
          <p>
            Proper estate planning can significantly reduce or eliminate estate tax
            liability through strategies like trusts, gifting, and lifetime transfers.
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
                q: "What is the federal estate tax exemption for 2024?",
                a: "The federal estate tax exemption is $13.61 million per individual for 2024. Married couples can effectively double this to $27.22 million through proper planning and portability of unused exemptions.",
              },
              {
                q: "What is the estate tax rate?",
                a: "Federal estate tax rates range from 18% to 40%, with the highest rate applying to the portion of the estate exceeding the exemption threshold. The tax is progressive, with higher rates on larger estates.",
              },
              {
                q: "What assets are included in an estate?",
                a: "An estate includes all assets owned at death: real estate, investments, retirement accounts, life insurance proceeds (if you own the policy), business interests, and personal property. Jointly owned assets may be included.",
              },
              {
                q: "How can I reduce estate taxes?",
                a: "Strategies include annual gifting up to the exclusion amount ($17,000 per recipient in 2024), establishing trusts, utilizing the marital deduction, charitable giving, and lifetime transfers of appreciated assets.",
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
            Use the Estate Tax Calculator to understand your potential estate tax
            liability. Proper estate planning can help preserve wealth for your
            heirs and minimize tax burdens.
          </p>
        </section>
      </div>
    </article>
  );
}
