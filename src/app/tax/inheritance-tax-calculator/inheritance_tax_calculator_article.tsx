import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function InheritanceTaxArticle() {
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
          <span className="meta-tag">Tax · Inheritance</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Inheritance Tax Calculator: Calculate Inheritance Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to inheritance tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Inheritance tax is a tax on the assets received from a deceased person,
            paid by the beneficiary. Unlike estate tax (paid by the estate), inheritance
            tax is paid by the person receiving the inheritance. Only a few states impose
            inheritance tax, and exemptions vary based on the relationship to the deceased.
            Understanding inheritance tax helps beneficiaries plan for tax obligations.
          </p>
          <p className="mb-5">
            An Inheritance Tax Calculator estimates your inheritance tax liability based
            on the inheritance amount, your relationship to the deceased, and state laws.
            This tool is essential for beneficiaries to understand potential tax burdens
            and plan accordingly.
          </p>
          <p>
            Proper planning can help minimize inheritance tax through strategies like
            trusts and lifetime gifting.
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
                q: "What states have inheritance tax?",
                a: "As of 2024, six states have inheritance tax: Iowa, Kentucky, Maryland, Nebraska, New Jersey, and Pennsylvania. Each has different exemption amounts and rates based on relationship to the deceased.",
              },
              {
                q: "How is inheritance tax different from estate tax?",
                a: "Estate tax is paid by the estate before distribution and is based on the total estate value. Inheritance tax is paid by the beneficiary after receiving assets and depends on the relationship to the deceased.",
              },
              {
                q: "Who is exempt from inheritance tax?",
                a: "Most states exempt spouses entirely. Children and other close relatives often have exemptions or lower rates. Distant relatives and non-relatives typically face higher rates with little or no exemption.",
              },
              {
                q: "What is the inheritance tax rate?",
                a: "Rates vary by state and relationship. Spouses are typically exempt. Children may face rates from 0-18%, while distant relatives and non-relatives may face rates up to 20% with minimal exemptions.",
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
            Use the Inheritance Tax Calculator to understand your potential tax
            liability on inherited assets. Proper planning can help minimize
            inheritance tax burdens.
          </p>
        </section>
      </div>
    </article>
  );
}
