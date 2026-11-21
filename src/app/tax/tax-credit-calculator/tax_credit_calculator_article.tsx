import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TaxCreditArticle() {
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
          <span className="meta-tag">Tax · Credits</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Tax Credit Calculator: Calculate Tax Credits
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to tax credit calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Tax credits directly reduce your tax liability dollar-for-dollar, making them
            more valuable than deductions which only reduce taxable income. Common tax credits
            include the Child Tax Credit, Earned Income Credit, American Opportunity Credit,
            and various energy credits. Some credits are refundable, meaning you can receive
            a refund even if you owe no taxes.
          </p>
          <p className="mb-5">
            A Tax Credit Calculator helps you identify and calculate eligible tax credits
            based on your income, family situation, and other factors. This tool is
            essential for maximizing your tax savings and ensuring you claim all credits
            you're entitled to.
          </p>
          <p>
            Tax credits can significantly reduce your tax liability or provide a refund,
            making them an important part of tax planning.
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
                q: "What's the difference between a tax credit and a tax deduction?",
                a: "Tax credits reduce your tax liability dollar-for-dollar. Tax deductions reduce your taxable income, saving you a percentage equal to your tax bracket. A $1,000 credit saves $1,000 in taxes; a $1,000 deduction saves $220 if you're in the 22% bracket.",
              },
              {
                q: "What are refundable tax credits?",
                a: "Refundable credits can result in a refund even if you owe no taxes. Examples include the Earned Income Credit, Child Tax Credit (up to $1,600 refundable), and American Opportunity Credit. Non-refundable credits can only reduce your tax liability to zero.",
              },
              {
                q: "What are common tax credits for individuals?",
                a: "Common credits include Child Tax Credit ($2,000 per child), Earned Income Credit (up to $7,830), American Opportunity Credit ($2,500 for education), Lifetime Learning Credit ($2,000), and Saver's Credit ($1,000 for retirement contributions).",
              },
              {
                q: "How do I claim tax credits?",
                a: "Claim tax credits on Form 1040. Some credits require additional forms or schedules (e.g., Schedule 8812 for Child Tax Credit, Form 8863 for education credits). Keep documentation to support your eligibility.",
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
            Use the Tax Credit Calculator to identify eligible credits and maximize
            your tax savings. Tax credits are one of the most effective ways to
            reduce your tax liability.
          </p>
        </section>
      </div>
    </article>
  );
}
