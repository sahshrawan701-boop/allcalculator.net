import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CarTaxArticle() {
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
          <span className="meta-tag">Tax · Vehicle</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Car Tax Calculator: Calculate Vehicle Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to vehicle tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Car taxes include sales tax when purchasing a vehicle, annual property tax
            or registration fees, and potentially luxury taxes for high-value vehicles.
            These taxes vary significantly by state, county, and vehicle type. Understanding
            car taxes helps you budget for vehicle ownership and make informed purchasing
            decisions.
          </p>
          <p className="mb-5">
            A Car Tax Calculator estimates the various taxes associated with vehicle
            purchase and ownership. This tool is essential for car buyers to understand
            the total cost of ownership beyond the sticker price.
          </p>
          <p>
            Factoring in all vehicle taxes helps you avoid surprises and plan your
            budget accurately for car purchases and ongoing ownership costs.
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
                q: "What taxes do I pay when buying a car?",
                a: "You typically pay state sales tax (varies by state, 0-10%+), county or local taxes, documentation fees, and potentially luxury taxes for vehicles above certain value thresholds.",
              },
              {
                q: "Do I pay taxes on a used car?",
                a: "Yes, most states charge sales tax on used car purchases. The tax is usually based on the purchase price or the vehicle's fair market value, whichever is higher.",
              },
              {
                q: "What is annual vehicle property tax?",
                a: "Some states charge annual property tax based on your vehicle's value. This tax typically decreases as the vehicle depreciates. Check your state's DMV website for specific rates.",
              },
              {
                q: "Can I deduct car taxes on my tax return?",
                a: "You may deduct state and local sales tax on vehicle purchases if you itemize deductions instead of claiming the standard deduction. This is subject to the $10,000 SALT deduction cap.",
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
            Use the Car Tax Calculator to estimate taxes on vehicle purchases and
            ownership. Understanding all vehicle taxes helps you budget accurately
            and make informed car-buying decisions.
          </p>
        </section>
      </div>
    </article>
  );
}
