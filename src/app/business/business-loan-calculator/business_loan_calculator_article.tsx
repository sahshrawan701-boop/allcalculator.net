import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BusinessLoanArticle() {
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
          <span className="meta-tag">Business · Financing</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Business Loan Calculator: Plan Your Borrowing Strategy
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for business owners and entrepreneurs
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You need $100,000 to expand your business. The bank offers a 7% interest rate over 5 years. Monthly payments would be $1,980, and total interest would be $18,800. But what if you could secure 6%? Payments drop to $1,933 and total interest to $15,996. That small rate difference saves nearly $3,000 over the loan term.
          </p>
          <p className="mb-5">
            Business loans are powerful tools for growth, but they come with costs that significantly impact profitability. Understanding the true cost of borrowing — monthly payments, total interest, and cash flow impact — is essential for making informed financing decisions.
          </p>
          <p className="mb-5">
            But business loans aren't one-size-fits-all. Term loans, SBA loans, lines of credit, and equipment financing each have different terms, rates, and requirements. Choosing the right option and understanding the costs is what separates successful borrowing from debt traps.
          </p>
          <p>
            The business loan calculator above helps you compare loan options, understand monthly obligations, and plan cash flow. Use it to evaluate different scenarios before committing to borrowing.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Business Loan Calculations Work
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Business loans use amortization to calculate monthly payments. Each payment covers both principal and interest, with the interest portion decreasing over time as the principal balance declines.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Monthly Payment Formula:
          </p>
          <div className="formula-block">
            <pre>M = P × r × (1 + r)^n / [(1 + r)^n – 1]</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where M = monthly payment, P = principal, r = monthly interest rate, n = number of payments
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Principal (P)", "$100,000"],
              ["Annual interest rate", "7%"],
              ["Monthly interest rate (r)", "7% / 12 = 0.583%"],
              ["Loan term", "5 years (60 months)"],
              ["Monthly payment (M)", "$1,980"],
              ["Total payment", "$1,980 × 60 = $118,800"],
              ["Total interest", "$118,800 - $100,000 = $18,800"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, you'll pay $18,800 in interest over 5 years — 18.8% of the original loan amount. This is typical for business loans, which often have higher rates than personal loans but lower than credit cards. Shopping around for better rates can save thousands.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── LOAN TYPES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Types of Business Loans
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding the different types of business loans helps you choose the right financing option for your needs. Each type has distinct terms, rates, and use cases.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Loan Type</th>
                <th className="dark:text-slate-100">Typical Terms</th>
                <th className="dark:text-slate-100">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Term Loan", "1-10 years, 5-30% APR", "Large purchases, expansion, working capital"],
                ["SBA Loan", "5-25 years, 6-13% APR", "Long-term financing, real estate, equipment"],
                ["Line of Credit", "Revolving, 7-25% APR", "Ongoing working capital, cash flow management"],
                ["Equipment Financing", "1-5 years, 5-20% APR", "Purchasing equipment, vehicles, machinery"],
                ["Invoice Financing", "30-90 days, 1-5% monthly fee", "Cash flow gaps, waiting on invoice payments"],
              ].map(([type, terms, best]) => (
                <tr key={type}>
                  <td className="dark:text-slate-100">{type}</td>
                  <td className="dark:text-slate-100">{terms}</td>
                  <td className="dark:text-slate-100">{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            SBA loans offer the best rates and terms but have strict requirements and longer approval times. Term loans provide flexibility but may have higher rates. Lines of credit offer access to capital when needed but require discipline to avoid overuse.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── SBA LOANS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding SBA Loans
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Small Business Administration (SBA) loans are government-backed loans that offer favorable terms to qualified businesses. They're among the most affordable financing options but come with strict requirements.
          </p>

          {[
            {
              heading: "SBA 7(a) Loan",
              rows: [
                ["Loan Amount", "Up to $5 million"],
                ["Term", "5-25 years"],
                ["Interest Rate", "Prime + 2.25-4.75%"],
                ["Down Payment", "10-20%"],
              ],
              note: "The most popular SBA loan program, 7(a) loans can be used for working capital, equipment, real estate, and business acquisition. They offer competitive rates and long terms but require extensive documentation.",
            },
            {
              heading: "SBA 504 Loan",
              rows: [
                ["Loan Amount", "Up to $5.5 million"],
                ["Term", "10-20 years"],
                ["Interest Rate", "Fixed, typically below market"],
                ["Down Payment", "10-20%"],
              ],
              note: "504 loans are specifically for purchasing fixed assets like real estate and equipment. They offer below-market fixed rates and long terms, making them ideal for major asset purchases with predictable payments.",
            },
            {
              heading: "SBA Microloan",
              rows: [
                ["Loan Amount", "Up to $50,000"],
                ["Term", "Up to 6 years"],
                ["Interest Rate", "8-13%"],
                ["Down Payment", "None required"],
              ],
              note: "Microloans are designed for small businesses and startups that need smaller amounts. They're easier to qualify for but have higher rates and shorter terms. Ideal for businesses that don't qualify for larger SBA loans.",
            },
          ].map((loan: { heading: string; rows: string[][]; note: string }) => (
            <div key={loan.heading} className="state-card">
              <h3>{loan.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {loan.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{loan.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── QUALIFYING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Qualify for a Business Loan
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Lenders evaluate multiple factors when deciding whether to approve a business loan. Understanding these requirements helps you prepare and improve your chances of approval.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Credit score",
                body: "Both personal and business credit scores matter. Most lenders require a minimum personal credit score of 680, though SBA loans may accept lower scores with strong compensating factors. Improve your credit before applying for better rates.",
              },
              {
                n: "2",
                title: "Time in business",
                body: "Most lenders require at least 2 years in business, though some work with startups. Longer business history demonstrates stability and reduces lender risk. SBA loans typically require 2+ years.",
              },
              {
                n: "3",
                title: "Annual revenue",
                body: "Lenders typically require minimum annual revenue, often $100,000-$250,000. Higher revenue demonstrates ability to repay. Some lenders work with newer businesses with lower revenue if other factors are strong.",
              },
              {
                n: "4",
                title: "Debt-to-income ratio",
                body: "Your debt-to-income ratio should typically be below 50%. Lower ratios show you have capacity to take on additional debt. Pay down existing debt before applying to improve this ratio.",
              },
              {
                n: "5",
                title: "Collateral",
                body: "Many loans require collateral — business assets, real estate, or personal guarantees. SBA loans require collateral for loans over $25,000. Having strong collateral improves approval chances and rates.",
              },
              {
                n: "6",
                title: "Business plan",
                body: "A solid business plan demonstrates how you'll use the loan and generate repayment. Include financial projections, market analysis, and growth strategy. This is especially important for startups and SBA loans.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="numbered-section">
                <span className="num">{n}</span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{title}</p>
                  <p className="text-base leading-relaxed text-slate-800 dark:text-slate-100">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Business Loan Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even experienced business owners make mistakes with business loans that cost thousands in unnecessary interest or create cash flow problems. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not shopping around",
                body: "Accepting the first loan offer without comparing options can cost thousands in interest. Get quotes from multiple lenders including banks, online lenders, and credit unions. Compare rates, terms, and fees.",
              },
              {
                n: "2",
                title: "Borrowing more than needed",
                body: "Only borrow what you need for specific purposes. Every extra dollar borrowed costs interest over the entire loan term. Overborrowing creates unnecessary debt and reduces profitability.",
              },
              {
                n: "3",
                title: "Ignoring the total cost",
                body: "Focus on total cost including interest and fees, not just monthly payments. A longer term lowers payments but increases total cost. Use the calculator to compare total costs across different terms.",
              },
              {
                n: "4",
                title: "Not understanding fees",
                body: "Origination fees, application fees, and prepayment penalties add significant cost. Factor all fees into your total cost calculation. Some lenders advertise low rates but charge high fees.",
              },
              {
                n: "5",
                title: "Choosing the wrong loan type",
                body: "Using a short-term loan for long-term needs creates cash flow pressure. Match loan terms to your use case — long-term loans for assets, lines of credit for working capital.",
              },
              {
                n: "6",
                title: "Missing the fine print",
                body: "Read all terms carefully before signing. Understand prepayment penalties, late fees, default conditions, and collateral requirements. Hidden terms can create unexpected costs or risks.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="numbered-section">
                <span className="num">{n}</span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{title}</p>
                  <p className="text-base leading-relaxed text-slate-800 dark:text-slate-100">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Business Borrowing
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — compare loan options and understand total costs</>],
              [<><strong>Shop around</strong> — get quotes from multiple lenders before deciding</>],
              [<><strong>Improve your credit</strong> — better credit means lower rates</>],
              [<><strong>Prepare documentation</strong> — have financial statements and business plan ready</>],
              [<><strong>Consider SBA loans</strong> — they offer the best rates and terms</>],
              [<><strong>Match loan to use</strong> — choose the right loan type for your needs</>],
              [<><strong>Factor all fees</strong> — include origination fees and closing costs</>],
              [<><strong>Plan cash flow</strong> — ensure you can handle monthly payments</>],
            ].map((item, i) => (
              <li key={i}>{item[0]}</li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQ ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="mt-4">
            {[
              {
                q: "How do I calculate business loan payments?",
                a: "Use the formula: M = P × r × (1 + r)^n / [(1 + r)^n – 1], where P is principal, r is monthly interest rate, n is number of payments, and M is monthly payment. The calculator above performs this calculation automatically.",
              },
              {
                q: "What is a good interest rate for a business loan?",
                a: "Good rates vary by loan type and business qualifications. SBA 7(a) loans typically offer 6-13%. Traditional bank loans range 5-15%. Online lenders may charge 7-30%. Your credit score, time in business, and revenue affect the rate you qualify for.",
              },
              {
                q: "How long does it take to get a business loan?",
                a: "Traditional bank loans take 2-6 weeks. SBA loans take 30-90 days due to extensive documentation. Online lenders can approve in 1-7 days but charge higher rates. Plan ahead and allow sufficient time for approval.",
              },
              {
                q: "What credit score do I need for a business loan?",
                a: "Most lenders require a minimum personal credit score of 680. SBA loans may accept scores as low as 620 with strong compensating factors. Online lenders may work with scores below 600 but charge significantly higher rates.",
              },
              {
                q: "Should I choose a short-term or long-term loan?",
                a: "Match the loan term to your use case. Short-term loans (1-3 years) work for immediate needs with quick repayment. Long-term loans (5-10 years) work for major purchases with extended payoff. Longer terms have lower payments but higher total interest.",
              },
              {
                q: "What collateral do I need for a business loan?",
                a: "Collateral requirements vary by loan type and amount. SBA loans require collateral for loans over $25,000. Traditional banks may require business assets, real estate, or personal guarantees. Some online lenders offer unsecured loans but charge higher rates.",
              },
              {
                q: "Can I pay off a business loan early?",
                a: "Most business loans allow early repayment, but some have prepayment penalties. Check your loan terms before making extra payments. SBA loans typically don't have prepayment penalties, making early payoff attractive.",
              },
              {
                q: "How much can I borrow with a business loan?",
                a: "Loan amounts vary by lender and program. SBA 7(a) loans go up to $5 million. Traditional bank loans typically range $25,000-$500,000. Online lenders may offer $5,000-$500,000. The amount depends on your revenue, credit, and business needs.",
              },
              {
                q: "What documents do I need for a business loan?",
                a: "Typical requirements include business tax returns (2 years), personal tax returns (2 years), business financial statements, bank statements (6 months), business plan, and legal documents. SBA loans require additional documentation including detailed financial projections.",
              },
              {
                q: "Should I use a business loan or line of credit?",
                a: "Use a term loan for specific, one-time needs like equipment purchases or expansion. Use a line of credit for ongoing working capital needs or cash flow management. Lines of credit offer flexibility but require discipline to avoid overuse.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3>{q}</h3>
                <p className="text-base leading-relaxed text-slate-800 dark:text-slate-400">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FINAL THOUGHTS ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Final Thoughts
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Business loans are powerful tools for growth when used strategically. Understanding the true cost of borrowing, choosing the right loan type, and qualifying for favorable terms can save thousands and set your business up for success.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you compare loan options and understand monthly obligations. But the real work happens in preparation — improving credit, building business history, and creating a solid business plan that demonstrates repayment ability.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're expanding, purchasing equipment, or managing cash flow, the right business loan can accelerate growth. Use this calculator to make informed decisions and choose financing that supports rather than hinders your business success.
          </p>
          <div className="pull-quote mt-8">
            The best business loan is the one that advances your goals without compromising your cash flow. Calculate carefully, compare thoroughly, and borrow strategically.
          </div>
        </section>

      </div>
    </article>
  );
}
