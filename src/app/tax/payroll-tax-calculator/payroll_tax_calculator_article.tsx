import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PayrollTaxArticle() {
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
          <span className="meta-tag">Tax · Payroll</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Payroll Tax Calculator: Calculate Payroll Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to payroll tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Payroll taxes are taxes on employee wages and salaries to fund social
            insurance programs. In the U.S., payroll taxes include Social Security tax
            (6.2% employee + 6.2% employer) and Medicare tax (1.45% employee + 1.45%
            employer). Employers also pay federal and state unemployment taxes.
            Understanding payroll taxes is essential for both employers and employees.
          </p>
          <p className="mb-5">
            A Payroll Tax Calculator calculates the total payroll tax liability for
            both employers and employees. This tool is essential for employers to
            understand their tax obligations and for employees to understand their
            take-home pay.
          </p>
          <p>
            Proper payroll tax calculation and withholding ensures compliance with
            federal and state requirements.
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
                q: "What are the payroll tax rates for 2024?",
                a: "Social Security tax is 12.4% total (6.2% employee + 6.2% employer) on wages up to $168,600. Medicare tax is 2.9% total (1.45% each) with no wage limit. Additional Medicare tax of 0.9% applies to high earners.",
              },
              {
                q: "What is FUTA tax?",
                a: "FUTA (Federal Unemployment Tax Act) tax is 6% on the first $7,000 of each employee's wages. Employers can receive a credit of up to 5.4% for paying state unemployment tax, typically resulting in a 0.6% effective rate.",
              },
              {
                q: "Do employees pay FUTA tax?",
                a: "No, FUTA tax is paid solely by employers. Employees do not have FUTA tax withheld from their paychecks. However, employees may contribute to state unemployment insurance in some states.",
              },
              {
                q: "What is the difference between payroll tax and income tax?",
                a: "Payroll tax funds Social Security and Medicare and is a flat percentage on wages. Income tax funds general government operations and uses progressive tax brackets based on total income.",
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
            Use the Payroll Tax Calculator to understand employer and employee payroll
            tax obligations. Accurate payroll tax calculation is essential for
            compliance and financial planning.
          </p>
        </section>
      </div>
    </article>
  );
}
