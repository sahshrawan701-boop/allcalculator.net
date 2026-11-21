import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SbaLoanCalculatorArticle() {
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
          <span className="meta-tag">Business · Small Business Finance</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            SBA Loan Calculator: Calculate SBA Loan Payments
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for SBA loan analysis and planning
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You're considering a $500,000 SBA 7(a) loan with a 10-year term and 8.5% interest rate. Your monthly payment would be approximately $6,189. Over the life of the loan, you'll pay $742,680 total, including $242,680 in interest. The SBA guarantee fee of 2% ($10,000) may be added to the loan amount or paid upfront. This loan could help you purchase equipment, expand operations, or acquire real estate.
          </p>
          <p className="mb-5">
            SBA loans are government-backed loans designed to help small businesses access financing with favorable terms. Understanding SBA loan calculations, terms, and requirements helps you make informed borrowing decisions.
          </p>
          <p className="mb-5">
            But SBA loans come with specific requirements, fees, and approval processes. Understanding the different SBA loan programs, eligibility criteria, and application process helps determine if an SBA loan is right for your business.
          </p>
          <p>
            The SBA loan calculator above helps you calculate monthly payments, total interest, and evaluate loan affordability.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How SBA Loan Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            SBA loan payments are calculated using standard amortization formulas. The monthly payment depends on loan amount, interest rate, and term. SBA loans may also include guarantee fees and packaging fees that affect total cost.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Monthly Payment Formula:
          </p>
          <div className="formula-block">
            <pre>Monthly Payment = P × [r(1+r)^n] / [(1+r)^n - 1]</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Loan Amount", "$500,000"],
              ["Interest Rate", "8.5% annual (0.708% monthly)"],
              ["Term", "10 years (120 months)"],
              ["Monthly Payment", "$6,189"],
              ["Total Payments", "$6,189 × 120 = $742,680"],
              ["Total Interest", "$742,680 - $500,000 = $242,680"],
              ["SBA Guarantee Fee", "$500,000 × 2% = $10,000"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, the SBA guarantee fee of $10,000 (2% of loan amount) may be financed or paid upfront. Total cost includes both interest and fees. Always calculate total cost when evaluating loan options.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── SBA LOAN PROGRAMS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            SBA Loan Programs
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The SBA offers several loan programs for different business needs. Understanding each program helps choose the right financing option.
          </p>

          {[
            {
              heading: "SBA 7(a) Loan",
              rows: [
                ["Max Amount", "$5 million"],
                ["Term", "Up to 25 years for real estate"],
                ["Best For", "General business purposes"],
              ],
              note: "SBA 7(a) is the most common SBA loan program. Can be used for working capital, equipment, real estate, and business acquisition. Offers competitive rates and longer terms than conventional loans.",
            },
            {
              heading: "SBA 504 Loan",
              rows: [
                ["Max Amount", "$5 million+ (project based)"],
                ["Term", "10-20 years (fixed rate)"],
                ["Best For", "Real estate and equipment"],
              ],
              note: "SBA 504 is for major fixed assets like real estate and equipment. Offers below-market fixed rates and longer terms. Requires 10% down payment and is used with conventional lender financing.",
            },
            {
              heading: "SBA Microloan",
              rows: [
                ["Max Amount", "$50,000"],
                ["Term", "Up to 6 years"],
                ["Best For", "Startups and small needs"],
              ],
              note: "SBA Microloans are for smaller financing needs. Targeted to startups and businesses needing smaller amounts. Offered through nonprofit intermediaries. Good for working capital and equipment.",
            },
          ].map((program: { heading: string; rows: string[][]; note: string }) => (
            <div key={program.heading} className="state-card">
              <h3>{program.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {program.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{program.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── FEES AND COSTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            SBA Loan Fees and Costs
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            SBA loans come with various fees that affect total cost. Understanding these fees helps calculate true borrowing costs.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Fee Type</th>
                <th className="dark:text-slate-100">Amount</th>
                <th className="dark:text-slate-100">When Charged</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Guarantee Fee", "0-3.75% of guaranteed portion", "At closing"],
                ["Packaging Fee", "$0-$2,500", "At closing"],
                ["Closing Costs", "2-5% of loan amount", "At closing"],
                ["Prepayment Penalty", "None for terms under 15 years", "On early payoff"],
              ].map(([fee, amount, when]) => (
                <tr key={fee}>
                  <td className="dark:text-slate-100">{fee}</td>
                  <td className="dark:text-slate-100">{amount}</td>
                  <td className="dark:text-slate-100">{when}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            SBA guarantee fees vary by loan size and term. Loans under $150,000 have no guarantee fee. Loans over $150,000 have fees ranging from 2-3.75%. These fees can be financed or paid upfront.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── ELIGIBILITY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            SBA Loan Eligibility Requirements
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            SBA loans have specific eligibility requirements. Understanding these requirements helps determine if you qualify.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Business size",
                body: "Must meet SBA size standards. Generally, businesses with fewer than 500 employees or under specified revenue limits qualify. Size standards vary by industry.",
              },
              {
                n: "2",
                title: "For-profit business",
                body: "Must be a for-profit business operating in the United States. Non-profit organizations don't qualify for SBA loans. Must have reasonable invested equity.",
              },
              {
                n: "3",
                title: "Credit requirements",
                body: "Owner's personal credit score typically needs to be above 680. Business should demonstrate ability to repay. Strong credit history improves approval chances.",
              },
              {
                n: "4",
                title: "Time in business",
                body: "Most SBA loans require at least 2 years in business. Some programs like Microloans may accept startups. Longer business history improves approval odds.",
              },
              {
                n: "5",
                title: "Collateral",
                body: "SBA requires collateral for loans over $25,000. Business assets, real estate, or personal guarantees may be required. Collateral secures the loan.",
              },
              {
                n: "6",
                title: "Owner investment",
                body: "Owners must have invested their own time or money. Shows commitment to business success. Typically requires owner equity injection of 10-20%.",
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

        {/* ── APPLICATION PROCESS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            SBA Loan Application Process
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The SBA loan application process involves several steps and can take 30-90 days. Understanding the process helps prepare and expedite approval.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Prepare documentation",
                body: "Gather financial statements, tax returns, business plan, and personal financial information. Complete documentation speeds up the process. Lenders require comprehensive information.",
              },
              {
                n: "2",
                title: "Find SBA lender",
                body: "Not all banks offer SBA loans. Find an SBA-approved lender in your area. Some lenders specialize in SBA loans and have more experience with the process.",
              },
              {
                n: "3",
                title: "Submit application",
                body: "Submit loan application to SBA lender with all required documentation. Lender reviews application and makes initial decision. Complete applications process faster.",
              },
              {
                n: "4",
                title: "Lender review",
                body: "Lender reviews creditworthiness, collateral, and business viability. May request additional information. Be responsive to lender requests to avoid delays.",
              },
              {
                n: "5",
                title: "SBA approval",
                body: "Lender submits to SBA for guarantee approval. SBA reviews and issues guarantee. This step can take additional time depending on SBA workload.",
              },
              {
                n: "6",
                title: "Closing and funding",
                body: "Once approved, complete closing documents and pay fees. Loan funds are disbursed after closing. Timeline from approval to funding varies.",
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
            Common SBA Loan Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many businesses make mistakes when applying for or managing SBA loans. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Underestimating total cost",
                body: "Focus only on interest rate and ignore fees. Calculate total cost including guarantee fees, closing costs, and interest. Total cost includes all fees over the loan life.",
              },
              {
                n: "2",
                title: "Not checking eligibility first",
                body: "Applying without confirming eligibility wastes time. Review SBA eligibility requirements before applying. Ensure you meet size, credit, and business requirements.",
              },
              {
                n: "3",
                title: "Incomplete documentation",
                body: "Incomplete applications delay processing. Gather all required documentation before applying. Complete applications process faster and have better approval chances.",
              },
              {
                n: "4",
                title: "Borrowing more than needed",
                body: "Borrowing more than necessary increases costs. Borrow only what you need for the specific purpose. Over-borrowing leads to unnecessary interest expense.",
              },
              {
                n: "5",
                title: "Not comparing lenders",
                body: "Different SBA lenders offer different rates and terms. Compare multiple lenders before choosing. Shop around for the best deal for your situation.",
              },
              {
                n: "6",
                title: "Ignoring repayment ability",
                body: "Borrow without confirming ability to repay. Calculate monthly payments and ensure cash flow can handle them. Default damages credit and business reputation.",
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
            Practical Tips for SBA Loans
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate payments accurately</>],
              [<><strong>Check eligibility</strong> — before applying</>],
              [<><strong>Calculate total cost</strong> — include all fees</>],
              [<><strong>Compare lenders</strong> — rates and terms</>],
              [<><strong>Prepare documentation</strong> — complete application</>],
              [<><strong>Confirm repayment ability</strong> — cash flow analysis</>],
              [<><strong>Choose right program</strong> — 7(a), 504, or Microloan</>],
              [<><strong>Plan for timeline</strong> — 30-90 day process</>],
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
                q: "How do I calculate SBA loan payments?",
                a: "Use the standard loan amortization formula: Monthly Payment = P × [r(1+r)^n] / [(1+r)^n - 1]. The calculator above automates this calculation for SBA loans with specific terms and rates.",
              },
              {
                q: "What is the SBA guarantee fee?",
                a: "The SBA guarantee fee is 0-3.75% of the guaranteed portion of the loan. Loans under $150,000 have no fee. Loans over $150,000 have fees ranging from 2-3.75% depending on loan size and term.",
              },
              {
                q: "What is the difference between SBA 7(a) and 504 loans?",
                a: "SBA 7(a) is for general business purposes with variable rates. SBA 504 is for real estate and equipment with fixed rates. 7(a) is more flexible; 504 offers better rates for major fixed assets.",
              },
              {
                q: "What are SBA loan interest rates?",
                a: "SBA 7(a) rates are typically Prime + 2.25-4.75% (currently 8.5-11%). SBA 504 rates are fixed and typically below-market. Rates vary by lender and market conditions.",
              },
              {
                q: "How long does SBA loan approval take?",
                a: "SBA loan approval typically takes 30-90 days. Factors include application completeness, lender workload, and SBA processing time. Complete applications with strong documentation process faster.",
              },
              {
                q: "What credit score do I need for an SBA loan?",
                a: "Most SBA lenders require a personal credit score above 680. Some may accept scores as low as 650 with compensating factors. Strong credit history improves approval chances and rates.",
              },
              {
                q: "Can startups get SBA loans?",
                a: "Most SBA loans require 2+ years in business. SBA Microloans may accept startups. Startups may also qualify if they have strong collateral, management experience, or personal guarantees.",
              },
              {
                q: "What collateral do I need for an SBA loan?",
                a: "SBA requires collateral for loans over $25,000. Business assets, real estate, or personal guarantees may be required. Collateral value should typically be at least equal to the loan amount.",
              },
              {
                q: "Can I pay off an SBA loan early?",
                a: "Yes, SBA loans can be paid early. Prepayment penalties may apply for loans over 15 years. Loans under 15 years typically have no prepayment penalty. Check your loan agreement.",
              },
              {
                q: "What can I use an SBA loan for?",
                a: "SBA 7(a) loans can be used for working capital, equipment, real estate, business acquisition, debt refinancing, and more. SBA 504 is specifically for real estate and major equipment.",
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
            SBA loans provide favorable financing for small businesses that may not qualify for conventional loans. Understanding SBA loan programs, calculating total costs, and preparing thoroughly helps secure financing on favorable terms.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate SBA loan payments and evaluate affordability. But the real value comes from using this information to make informed borrowing decisions and secure the right financing for your business.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're expanding operations, purchasing equipment, or acquiring real estate, SBA loans can provide the capital you need. Calculate precisely, prepare thoroughly, and borrow wisely.
          </p>
          <div className="pull-quote mt-8">
            SBA loans are a powerful tool for small business growth. Use them strategically, repay responsibly, and build a stronger business.
          </div>
        </section>

      </div>
    </article>
  );
}
