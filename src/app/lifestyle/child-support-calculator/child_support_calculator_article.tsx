import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ChildSupportArticle() {
  return (
    <article
      className={`w-full max-w-[75ch] mx-auto px-6 py-16 text-[18px] leading-[1.8] font-sans text-slate-800 dark:text-slate-100 ${inter.variable}`}
    >
      <style>{`
        .article-root { font-family: var(--font-inter), sans-serif; }
        .display-font { font-family: var(--font-inter), sans-serif; }
        .article-root h2 { font-family: var(--font-inter), sans-serif; }
        .article-root h3 { font-family: var(--font-inter), sans-serif; }
        .article-root h4 { font-family: var(--font-inter), sans-serif; }

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

        .ornament {
          display: block;
          text-align: center;
          color: #94a3b8;
          letter-spacing: 0.5em;
          font-size: 0.75rem;
          margin: 2.5rem 0;
        }
        .dark .ornament { color: #64748b; }

        .formula-block {
          font-family: 'Courier New', monospace;
          background: #f8fafc;
          border-left: 3px solid var(--primary-dk);
          padding: 1.25rem 1.5rem;
          margin: 1.5rem 0;
          font-size: 1rem;
          color: #1e293b;
          overflow-x: auto;
        }
        .dark .formula-block {
          background: #1e293b;
          border-left-color: var(--primary);
          color: #e2e8f0;
        }
        .formula-block pre {
          margin: 0;
          font-family: inherit;
          white-space: pre-wrap;
        }

        .aside-callout {
          border-left: 3px solid var(--primary);
          padding: 1rem 1.25rem;
          background: #eef2ff;
          margin: 1.5rem 0;
          font-size: 0.95rem;
          font-style: italic;
          color: var(--primary-dk);
        }
        .dark .aside-callout {
          background: #312e81;
          color: #a5b4fc;
        }

        .state-card {
          border: 1px solid #e2e8f0;
          border-top: 3px solid var(--primary-dk);
          padding: 1.5rem;
          margin: 1.5rem 0;
          background: #f8fafc;
        }
        .dark .state-card {
          border-color: #475569;
          border-top-color: var(--primary);
          background: #1e293b;
        }
        .state-card h3 {
          font-size: 1.05rem !important;
          margin-bottom: 0.75rem !important;
          color: var(--primary-dk) !important;
          letter-spacing: 0.02em;
        }
        .dark .state-card h3 { color: #a5b4fc !important; }

        .styled-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          margin: 1rem 0;
        }
        .styled-table th {
          text-align: left;
          font-family: var(--font-inter), sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.5rem 0.75rem;
          border-bottom: 2px solid #cbd5e1;
          color: #475569;
        }
        .dark .styled-table th {
          border-bottom-color: #475569;
          color: #cbd5e1;
        }
        .styled-table td {
          padding: 0.5rem 0.75rem;
          border-bottom: 1px solid #e2e8f0;
          color: #1e293b;
        }
        .dark .styled-table td {
          border-bottom-color: #334155;
          color: #e2e8f0;
        }
        .styled-table tr:last-child td {
          border-bottom: none;
          font-weight: 600;
          color: var(--primary-dk);
          background: #e0e7ff;
        }
        .dark .styled-table tr:last-child td {
          color: #a5b4fc;
          background: #312e81;
        }

        .styled-table-plain tr:last-child td {
          font-weight: inherit;
          color: inherit;
          background: none;
          border-bottom: 1px solid #e2e8f0;
        }
        .dark .styled-table-plain tr:last-child td {
          border-bottom-color: #334155;
        }
        .styled-table-plain th { background: #f1f5f9; }
        .dark .styled-table-plain th { background: #334155; }

        .pull-quote {
          border-top: 1px solid #cbd5e1;
          border-bottom: 1px solid #cbd5e1;
          padding: 1.5rem 2rem;
          margin: 2.5rem 0;
          font-family: var(--font-inter), sans-serif;
          font-size: 1.4rem;
          font-style: italic;
          line-height: 1.5;
          color: #334155;
          text-align: center;
        }
        .dark .pull-quote {
          border-color: #475569;
          color: #cbd5e1;
        }

        .numbered-section {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          align-items: flex-start;
        }
        .numbered-section .num {
          font-family: var(--font-inter), sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #cbd5e1;
          line-height: 1;
          min-width: 2rem;
          padding-top: 0.1rem;
        }
        .dark .numbered-section .num { color: #475569; }

        .tip-list li {
          padding: 0.6rem 0;
          border-bottom: 1px solid #f1f5f9;
          padding-left: 1.25rem;
          position: relative;
        }
        .dark .tip-list li { border-bottom-color: #334155; }
        .tip-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-style: normal;
        }
        .dark .tip-list li::before { color: #818cf8; }

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
        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Lifestyle · Legal & Family</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Child Support Calculator: Estimate Child Support Payments
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to understanding child support calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Child support is a legal obligation that ensures children receive
            financial support from both parents after separation or divorce.
            The goal is to maintain the child's standard of living and cover
            essential expenses including housing, food, clothing, education,
            and healthcare. Calculating child support involves complex formulas
            that vary by jurisdiction and consider multiple factors.
          </p>
          <p className="mb-5">
            A Child Support Calculator provides estimates based on common guidelines,
            helping parents understand potential payment obligations before court
            proceedings. While these calculations are not legally binding, they
            offer valuable insight into what to expect and help parents prepare
            for financial planning.
          </p>
          <p>
            Understanding how child support is calculated is essential for both
            parents. This guide explains the key factors, common formulas, and
            important considerations in child support determination to help you
            navigate this important aspect of family law.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── DISCLAIMER ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Important Legal Disclaimer
          </h2>
          <div className="aside-callout">
            <strong>This calculator provides estimates only and is not legal advice.</strong>
            Child support calculations vary significantly by state and country.
            Actual payments are determined by courts based on numerous factors
            including income, number of children, custody arrangements, and
            individual circumstances. Always consult with a qualified family
            law attorney for accurate calculations specific to your situation.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Child Support Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses simplified formulas based on common guidelines to
            estimate potential child support payments. It considers the incomes
            of both parents and the number of children to provide a rough estimate
            of monthly support obligations.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To use the calculator:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                "Non-Custodial Parent Income",
                "Input the monthly income of the parent who will pay support (typically the non-custodial parent).",
              ],
              [
                "Custodial Parent Income",
                "Input the monthly income of the parent who has primary custody of the children.",
              ],
              [
                "Number of Children",
                "Select the total number of children requiring support.",
              ],
              [
                "View Estimate",
                "See the estimated monthly support amount, percentage applied, and per-child breakdown.",
              ],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">
                  ◆
                </span>
                <span>
                  <strong>{label}</strong> – {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator applies standard percentage guidelines based on the
            number of children to estimate the support amount as a percentage of
            the non-custodial parent's income.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── KEY FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Key Factors in Child Support Determination
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Courts consider multiple factors when determining child support:
          </p>
          
          {[
            {
              heading: "Parental Income",
              description: "The income of both parents is the primary factor. This includes wages, salaries, bonuses, self-employment income, and sometimes investment income.",
            },
            {
              heading: "Number of Children",
              description: "More children typically result in higher total support amounts, though the percentage per child may decrease as the number increases.",
            },
            {
              heading: "Custody Arrangement",
              description: "The amount of time each parent spends with the child affects support. Shared custody arrangements often result in different calculations than sole custody.",
            },
            {
              heading: "Child's Needs",
              description: "Special needs, medical conditions, educational expenses, and extracurricular activities can increase support requirements.",
            },
            {
              heading: "Standard of Living",
              description: "Courts aim to help the child maintain a standard of living similar to what they would have enjoyed if the parents remained together.",
            },
            {
              heading: "Healthcare Costs",
              description: "Health insurance premiums and uninsured medical expenses are typically factored into support calculations.",
            },
          ].map(({ heading, description }) => (
            <div key={heading} className="state-card">
              <h3>{heading}</h3>
              <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── PERCENTAGE GUIDELINES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Percentage Guidelines
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            While guidelines vary by jurisdiction, common percentage ranges include:
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Number of Children</th>
                <th className="dark:text-slate-100">Typical Percentage</th>
                <th className="dark:text-slate-100">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1 child", "17-25%", "Base percentage for single child support"],
                ["2 children", "23-31%", "Increased percentage for two children"],
                ["3 children", "27-35%", "Higher percentage for three children"],
                ["4 children", "30-39%", "Significant increase for four children"],
                ["5+ children", "33-43%", "Maximum percentages for larger families"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="dark:text-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            These percentages are applied to the non-custodial parent's income
            and vary significantly by state and individual circumstances.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What income is included in child support calculations?",
                a: "Most forms of income are included: wages, salaries, bonuses, commissions, self-employment income, overtime, and sometimes investment income. Some jurisdictions also consider potential earning capacity.",
              },
              {
                q: "Can child support be modified later?",
                a: "Yes, child support can be modified if there's a significant change in circumstances such as job loss, income change, or changes in the child's needs. Most jurisdictions allow reviews every few years or upon substantial change.",
              },
              {
                q: "How does shared custody affect child support?",
                a: "Shared custody arrangements often result in different calculations. The more time a child spends with each parent, the more the support obligation may be adjusted to reflect actual expenses incurred.",
              },
              {
                q: "Does child support end automatically?",
                a: "Child support typically ends when the child reaches the age of majority (usually 18), graduates from high school, or becomes emancipated. However, support for disabled children may continue indefinitely.",
              },
              {
                q: "What if the paying parent loses their job?",
                a: "The paying parent should immediately petition the court for a modification based on changed circumstances. Support obligations continue until officially modified by the court.",
              },
              {
                q: "Are college expenses included in child support?",
                a: "Standard child support typically covers expenses through high school. College expenses are often handled separately and may require additional agreements or court orders depending on jurisdiction.",
              },
              {
                q: "How accurate is this calculator?",
                a: "This calculator provides rough estimates based on common guidelines. Actual child support is determined by courts based on numerous factors, local guidelines, and varies significantly by jurisdiction.",
              },
              {
                q: "Should I hire a lawyer for child support issues?",
                a: "Absolutely. Child support calculations have long-term financial implications for both parents and children. A qualified family law attorney can ensure fair calculations and protect your rights.",
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

        {/* ── CONCLUSION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Child support calculations are complex and highly dependent on individual
            circumstances, local guidelines, and court decisions. While this calculator
            provides helpful estimates, it should only serve as a starting point
            for understanding potential financial obligations.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The most important step is to consult with a qualified family law
            attorney who can provide accurate calculations based on your specific
            situation and jurisdiction. Professional legal guidance is essential
            for ensuring fair outcomes that prioritize the best interests of the
            child.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use this calculator as an educational tool to understand the factors
            involved in child support determination, but always rely on professional
            legal advice for actual court proceedings and financial planning.
          </p>
        </section>
      </div>
    </article>
  );
}
