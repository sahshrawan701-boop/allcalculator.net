import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PersonalLoanArticle() {
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

        .section-label {
          display: block;
          font-family: sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }
        .dark .section-label { color: #64748b; }

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">

        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Personal Finance · Loans</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Personal Loan Calculator: Plan Your Borrowing Wisely
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding personal loans
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You need $15,000 for home improvements. You're offered a personal loan at 10.5% interest for 36 months. The monthly payment is $487. Over three years, you'll pay $17,532 total — $2,532 in interest. Is this the best option? Could a credit card, home equity loan, or saving up be better? The answer depends on your situation.
          </p>
          <p className="mb-5">
            Personal loans are unsecured loans that can be used for almost any purpose: debt consolidation, home improvements, medical expenses, or major purchases. They offer fixed rates and predictable payments, but the interest can be high depending on your credit.
          </p>
          <p className="mb-5">
            But understanding the cost of a personal loan is just the first step. Knowing when personal loans make sense, how to compare them to other options, and how to qualify for the best rates is what actually saves you money and protects your financial future.
          </p>
          <p>
            Personal loans aren't one-size-fits-all. They're powerful tools when used correctly but can become debt traps when misused. Let's break down exactly how personal loans work and how to ensure you're making the right borrowing decision.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS PERSONAL LOAN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Personal Loan?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A personal loan is an unsecured loan that doesn't require collateral. Unlike mortgages or auto loans, personal loans aren't tied to a specific asset. Instead, lenders approve them based on your creditworthiness, income, and debt-to-income ratio.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Personal loans typically have fixed interest rates and fixed repayment terms of 1–5 years. You receive a lump sum upfront and repay it in equal monthly installments. The predictability of fixed payments makes personal loans easier to budget for than credit cards.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Personal loans can be used for almost any purpose: debt consolidation, home improvements, medical expenses, weddings, vacations, or major purchases. However, they're not always the best option — sometimes credit cards, home equity loans, or saving up make more financial sense.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Personal Loans Work
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Personal loans work like other installment loans: you borrow a lump sum, pay interest over time, and repay in fixed monthly installments. The personal loan calculator above helps you understand your monthly payment and total cost before you borrow.
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
              ["Principal (P)", "$15,000"],
              ["Annual interest rate", "10.5%"],
              ["Monthly interest rate (r)", "10.5% / 12 = 0.875%"],
              ["Loan term", "36 months"],
              ["Monthly payment (M)", "$487"],
              ["Total payment", "$487 × 36 = $17,532"],
              ["Total interest", "$17,532 - $15,000 = $2,532"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, you'll pay $2,532 in interest over 3 years — 16.9% of the original loan amount. Personal loans typically have higher rates than secured loans like mortgages or auto loans because they're unsecured and carry more risk for lenders.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── WHEN TO USE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            When Personal Loans Make Sense
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Personal loans aren't always the right choice. Understanding when they make sense — and when they don't — is essential for smart borrowing.
          </p>

          {[
            {
              heading: "Good Uses for Personal Loans",
              rows: [
                ["Debt consolidation", "Combine high-interest credit card debt into one lower-rate loan"],
                ["Home improvements", "Finance renovations that increase home value"],
                ["Medical expenses", "Cover unexpected medical bills with predictable payments"],
                ["Major purchases", "Finance large purchases with fixed rates instead of credit cards"],
                ["Emergency expenses", "Handle unexpected costs without depleting emergency savings"],
              ],
              note: "Personal loans are ideal for consolidating high-interest debt into one lower-rate payment. They also work well for expenses that have long-term value, like home improvements, where the cost can be spread over time.",
            },
            {
              heading: "Bad Uses for Personal Loans",
              rows: [
                ["Discretionary spending", "Vacations, luxury items, or non-essential purchases"],
                ["Investing", "Borrowing to invest is risky and rarely profitable"],
                ["Day-to-day expenses", "Living beyond your means with debt"],
                ["Education", "Student loans typically have lower rates and better terms"],
                ["Business startup", "Business loans or lines of credit are better options"],
              ],
              note: "Avoid using personal loans for discretionary spending or luxuries. Borrowing for vacations or non-essential items creates debt without building value. If you can't afford it without a loan, you probably can't afford it at all.",
            },
          ].map((scenario: { heading: string; rows: string[][]; note: string }) => (
            <div key={scenario.heading} className="state-card">
              <h3>{scenario.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {scenario.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{scenario.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── QUALIFYING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Qualify for the Best Personal Loan Rates
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Personal loan rates vary significantly based on your creditworthiness. Here's how to qualify for the best rates and save thousands in interest.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Improve your credit score",
                body: "Credit scores are the biggest factor in personal loan rates. Pay bills on time, keep credit utilization below 30%, avoid opening too many accounts, and check your credit report for errors. A 100-point score improvement can save 2–3% on loan rates.",
              },
              {
                n: "2",
                title: "Reduce your debt-to-income ratio",
                body: "Lenders prefer DTI below 36%. Pay down existing debt, avoid taking on new debt before applying, and consider increasing your income. Lower DTI signals you can afford payments and qualifies you for better rates.",
              },
              {
                n: "3",
                title: "Shop around and compare",
                body: "Personal loan rates vary significantly between lenders. Get quotes from at least 3–5 lenders including banks, credit unions, and online lenders. Even a 1% difference in rate can save hundreds on a $15,000 loan.",
              },
              {
                n: "4",
                title: "Consider a co-signer",
                body: "If your credit is less than perfect, applying with a co-signer who has excellent credit can help you qualify for better rates. The co-signer's credit strengthens the application, but they're also responsible for the loan if you default.",
              },
              {
                n: "5",
                title: "Choose the right loan term",
                body: "Shorter terms typically have lower rates. If you can afford higher monthly payments, choosing a 3-year term instead of 5-year can save 1–2% in interest rate and significant amounts in total interest.",
              },
              {
                n: "6",
                title: "Avoid unnecessary fees",
                body: "Some lenders charge origination fees, application fees, or prepayment penalties. Compare APRs, which include fees, not just interest rates. Choose loans with no or low fees to minimize total cost.",
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

        {/* ── ALTERNATIVES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Personal Loan Alternatives
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Personal loans aren't always the best option. Depending on your situation, alternatives may offer lower rates, better terms, or more flexibility.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Option</th>
                <th className="dark:text-slate-100">Best For</th>
                <th className="dark:text-slate-100">Pros</th>
                <th className="dark:text-slate-100">Cons</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Credit card", "Short-term borrowing or rewards", "0% intro APR offers, rewards points", "High rates after intro, variable rates"],
                ["Home equity loan", "Homeowners with equity", "Lower rates, tax-deductible interest", "Secured by home, longer application process"],
                ["401(k) loan", "Emergency borrowing", "Low rates, no credit check", "Reduces retirement savings, job loss risk"],
                ["Borrowing from family", "Low-cost, flexible borrowing", "No interest or low interest, flexible terms", "Strains relationships, awkward to discuss"],
                ["Saving up", "Non-urgent purchases", "No interest, no debt", "Delays purchase, requires discipline"],
              ].map(([option, best, pros, cons]) => (
                <tr key={option}>
                  <td className="dark:text-slate-100">{option}</td>
                  <td className="dark:text-slate-100">{best}</td>
                  <td className="dark:text-slate-100">{pros}</td>
                  <td className="dark:text-slate-100">{cons}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Always compare personal loans to alternatives before borrowing. A 0% APR credit card offer might be cheaper than a personal loan for short-term borrowing. A home equity loan might offer lower rates if you're a homeowner. Choose the option with the lowest total cost for your situation.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Personal Loan Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially savvy people make mistakes with personal loans. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Borrowing more than you need",
                body: "Just because you're approved for a higher amount doesn't mean you should borrow it all. Borrow only what you need. Every extra dollar borrowed costs interest over the entire loan term.",
              },
              {
                n: "2",
                title: "Not comparing APRs",
                body: "APR includes interest plus fees, giving you the true annual cost. Always compare APRs when shopping for loans. A loan with a lower interest rate but high fees might have a higher APR.",
              },
              {
                n: "3",
                title: "Choosing the longest term for lower payments",
                body: "Longer terms have lower payments but much higher total costs. If you can afford higher payments, choose a shorter term to save significant interest. The longest term is rarely the best choice.",
              },
              {
                n: "4",
                title: "Ignoring the total cost",
                body: "A $15,000 loan at 10.5% for 5 years costs $19,500 total — $4,500 in interest. That's 30% of the original loan amount. Always calculate the total cost before borrowing.",
              },
              {
                n: "5",
                title: "Using loans for discretionary spending",
                body: "Avoid using personal loans for vacations, luxury items, or non-essential purchases. Borrowing for luxuries creates debt without building value. If you can't afford it without a loan, you probably can't afford it.",
              },
              {
                n: "6",
                title: "Not checking for prepayment penalties",
                body: "Some loans charge fees for paying off early. If you plan to pay extra or refinance, avoid loans with prepayment penalties. The ability to pay off early can save significant interest.",
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
            Practical Tips for Personal Loans
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate monthly payment and total cost before borrowing</>],
              [<><strong>Compare APRs, not just interest rates</strong> — APR includes fees and gives the true cost</>],
              [<><strong>Shop around</strong> — get quotes from at least 3–5 lenders before committing</>],
              [<><strong>Borrow only what you need</strong> — every extra dollar costs interest over the loan term</>],
              [<><strong>Choose the shortest term you can afford</strong> — shorter terms save significant interest</>],
              [<><strong>Avoid prepayment penalties</strong> — ensure you can pay off early without fees</>],
              [<><strong>Consider alternatives</strong> — credit cards, home equity, or saving up might be better</>],
              [<><strong>Improve your credit first</strong> — higher scores qualify for significantly lower rates</>],
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
                q: "What is a personal loan?",
                a: "A personal loan is an unsecured loan that doesn't require collateral. You receive a lump sum upfront and repay it in fixed monthly installments over 1–5 years. Personal loans can be used for almost any purpose: debt consolidation, home improvements, medical expenses, or major purchases.",
              },
              {
                q: "How do I calculate my personal loan payment?",
                a: "Use the formula: M = P × r × (1 + r)^n / [(1 + r)^n – 1], where P is principal, r is monthly interest rate, n is number of payments, and M is monthly payment. The calculator above does this automatically for you.",
              },
              {
                q: "What credit score do I need for a personal loan?",
                a: "Most lenders require a credit score of at least 580–600 for personal loans. However, the best rates (below 10%) typically require scores above 720. Lower scores may still qualify but will pay significantly higher rates (15–36% or more).",
              },
              {
                q: "Should I use a personal loan for debt consolidation?",
                a: "Personal loans are excellent for debt consolidation if you can get a lower rate than your current debts. Consolidating multiple credit cards into one personal loan simplifies payments and can save significant interest if the personal loan rate is lower than your credit card rates.",
              },
              {
                q: "How long does it take to get a personal loan?",
                a: "Personal loan approval times vary by lender. Online lenders can approve and fund loans within 1–3 business days. Banks and credit unions may take 3–7 days. The fastest lenders offer same-day funding for qualified applicants.",
              },
              {
                q: "What fees do personal loans have?",
                a: "Common personal loan fees include origination fees (1–8% of loan amount), application fees, late payment fees, and prepayment penalties. Always compare APRs, which include fees, to get the true cost. Some lenders offer no-fee personal loans.",
              },
              {
                q: "Can I pay off my personal loan early?",
                a: "Most personal loans allow early repayment without penalties. However, some lenders charge prepayment penalties. Check your loan terms before making extra payments. Paying off early saves interest and frees up cash flow.",
              },
              {
                q: "What's the difference between secured and unsecured personal loans?",
                a: "Unsecured personal loans don't require collateral and are approved based on creditworthiness. Secured personal loans require collateral (like a car or savings account) and typically have lower rates but risk losing the collateral if you default.",
              },
              {
                q: "How much can I borrow with a personal loan?",
                a: "Personal loan amounts typically range from $1,000 to $50,000, though some lenders offer up to $100,000. The amount you can borrow depends on your credit score, income, debt-to-income ratio, and the lender's policies.",
              },
              {
                q: "Are personal loans tax deductible?",
                a: "Personal loan interest is generally not tax deductible. However, if you use a personal loan for home improvements, the interest may be tax deductible if you itemize deductions. Consult a tax professional for specific situations.",
              },
              {
                q: "Should I choose a fixed or variable rate personal loan?",
                a: "Most personal loans have fixed rates, which offer predictability. Variable-rate personal loans exist but are rare. If offered, variable rates start lower but can increase over time. Choose fixed rates for predictability unless you can handle potential rate increases.",
              },
              {
                q: "What happens if I can't make my personal loan payment?",
                a: "Missing payments can trigger late fees, damage your credit score, and potentially lead to default. If you're struggling to make payments, contact your lender immediately — they may offer hardship options, payment plans, or loan modifications to help you avoid default.",
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
            Personal loans are powerful financial tools when used correctly. They can consolidate debt, finance home improvements, or cover unexpected expenses with predictable payments. But they can also become debt traps when misused for discretionary spending or luxuries.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you understand the cost of borrowing before you commit. But the real work happens in the details: comparing APRs, shopping around for the best rates, choosing the right term, and ensuring the loan fits your budget.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Personal loans aren't free money — they're a commitment that affects your budget for years. Borrow only what you need, choose the shortest term you can afford, and prioritize paying off debt. Your future self will thank you for the thousands you'll save in interest.
          </p>
          <div className="pull-quote mt-8">
            The best personal loan is the one you don't need. The second best is the one you pay off early.
          </div>
        </section>

      </div>
    </article>
  );
}
