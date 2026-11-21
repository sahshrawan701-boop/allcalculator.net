import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DebtToIncomeArticle() {
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
          <span className="meta-tag">Personal Finance · Borrowing</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Debt-to-Income Calculator: The Number That Determines Whether You Get That Loan
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for US borrowers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You earn $6,000 a month. Between your mortgage, car payment, student loans, and credit card minimums, you owe
            $2,400 every month before you even buy groceries. That&apos;s a 40% debt-to-income ratio — and in the eyes of most
            mortgage lenders, that&apos;s too high to qualify for a conventional loan.
          </p>
          <p className="mb-5">
            Debt-to-income ratio, or DTI, is one of the most important numbers in your financial life. It&apos;s not about how
            much you earn or how much you owe — it&apos;s about the relationship between the two. Lenders use DTI to assess
            whether you can comfortably take on new debt without becoming a repayment risk.
          </p>
          <p className="mb-5">
            The DTI calculator above gives you your ratio in seconds. But understanding what that number means — and how to
            improve it — is what actually helps you qualify for loans, get better interest rates, and build long-term financial
            stability.
          </p>
          <p>
            Your DTI isn&apos;t just a calculation — it&apos;s a snapshot of your financial flexibility. Let&apos;s break down exactly how
            it works, what lenders consider acceptable, and how to move your number in the right direction.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS DTI ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is Debt-to-Income Ratio?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Debt-to-income ratio is the percentage of your monthly gross income that goes toward debt payments. It&apos;s calculated
            by dividing your total monthly debt payments by your monthly gross income (before taxes) and multiplying by 100.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Think of DTI as a measure of how stretched your finances are. A low DTI means you have room in your budget for new
            debt. A high DTI means a significant portion of your income is already committed to existing obligations — which
            makes lenders nervous.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Unlike credit scores, which reflect your payment history across years, DTI is a current snapshot. It can change
            month to month as your income or debt payments change — which is why lenders recalculate it every time you apply for
            a loan.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does DTI Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Lenders calculate DTI in two ways: front-end DTI and back-end DTI. Both matter, but back-end DTI is the one most
            people talk about.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you need to understand:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Front-end DTI", "Housing costs only (mortgage/rent, property taxes, insurance, HOA fees) ÷ gross income"],
              ["Back-end DTI", "All debt payments (housing + all other debts) ÷ gross income"],
              ["Gross income", "Income before taxes, deductions, or withholdings"],
              ["Monthly debt payments", "Minimum required payments, not optional extra payments"],
              ["Lender preference", "Most lenders focus on back-end DTI for loan decisions"],
              ["Update frequency", "DTI is recalculated with every new loan application"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The key insight: DTI uses gross income, not take-home pay. This is important because your actual budget is based on
            net income — but lenders evaluate you on what you earn before taxes. A DTI that looks manageable on paper might feel
            much tighter in reality.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The DTI Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The DTI formula is straightforward. The complexity comes from identifying which payments count as debt and which
            don&apos;t.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Back-End DTI Formula:
          </p>
          <div className="formula-block">
            <pre>DTI % = (Total Monthly Debt Payments ÷ Monthly Gross Income) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Front-end DTI (for mortgage lending):
          </p>
          <div className="formula-block">
            <pre>Front-End DTI % = (Monthly Housing Costs ÷ Monthly Gross Income) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here&apos;s a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Monthly gross income", "$6,000"],
              ["Mortgage (principal + interest)", "$1,500"],
              ["Property taxes & insurance", "$400"],
              ["Car loan", "$350"],
              ["Student loans", "$250"],
              ["Credit card minimums", "$200"],
              ["Total monthly debt", "$2,700"],
              ["Back-end DTI", "$2,700 ÷ $6,000 = 45%"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            At 45% DTI, this borrower would struggle to qualify for most conventional mortgages. Paying down the credit card
            balance to reduce minimums from $200 to $100 would lower DTI to 43.3% — still high, but moving in the right
            direction.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── IDEAL RANGE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Good Debt-to-Income Ratio?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The ideal DTI depends on the type of loan you&apos;re applying for and the lender&apos;s requirements. Generally, lower
            is always better — but different loan products have different thresholds.
          </p>

          {[
            {
              heading: "0–15%: Excellent",
              rows: [
                ["Lender view", "Very low risk, excellent financial flexibility"],
                ["Mortgage approval", "Easily qualifies for best rates"],
                ["Loan options", "Access to premium loan products"],
                ["Recommendation", "Maintain this level if possible"],
              ],
              note: "This is the gold standard. At under 15% DTI, you have significant room in your budget for new debt while maintaining financial stability. Most lenders view this as minimal risk.",
            },
            {
              heading: "15–20%: Good",
              rows: [
                ["Lender view", "Low risk, manageable debt load"],
                ["Mortgage approval", "Qualifies for conventional loans"],
                ["Loan options", "Most loan products accessible"],
                ["Recommendation", "Healthy target for most borrowers"],
              ],
              note: "This is a comfortable range for most households. You're using debt responsibly without overextending. Lenders view this as a strong candidate for most loan types.",
            },
            {
              heading: "20–30%: Fair",
              rows: [
                ["Lender view", "Moderate risk, acceptable debt load"],
                ["Mortgage approval", "May qualify with some restrictions"],
                ["Loan options", "Standard loan products available"],
                ["Recommendation", "Consider reducing debt before major applications"],
              ],
              note: "You're in acceptable territory but approaching the upper limit for many lenders. For mortgages, you may need stronger compensating factors like a higher credit score or larger down payment.",
            },
            {
              heading: "30–40%: Poor",
              rows: [
                ["Lender view", "Elevated risk, stretched finances"],
                ["Mortgage approval", "Difficult to qualify for conventional loans"],
                ["Loan options", "Limited to higher-rate products"],
                ["Recommendation", "Prioritize debt reduction before new borrowing"],
              ],
              note: "At this level, many lenders will decline applications or require significant compensating factors. FHA loans may still be an option for mortgages, but conventional loans become difficult.",
            },
            {
              heading: "40%+: Very Poor",
              rows: [
                ["Lender view", "High risk, financially overextended"],
                ["Mortgage approval", "Unlikely to qualify without major changes"],
                ["Loan options", "Very limited, subprime products only"],
                ["Recommendation", "Aggressive debt reduction required"],
              ],
              note: "Most lenders consider 43% the absolute maximum DTI for qualified mortgages. Above this, approval is unlikely without exceptional circumstances. Focus on paying down debt before applying for new credit.",
            },
          ].map((range: { heading: string; rows: string[][]; note: string }) => (
            <div key={range.heading} className="state-card">
              <h3>{range.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {range.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{range.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life DTI Scenarios
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding the formula is one thing. Seeing how DTI plays out in real situations is another. Here are three
            scenarios that illustrate how DTI affects actual borrowing decisions.
          </p>

          {[
            {
              heading: "Scenario 1: The Mortgage Applicant",
              rows: [
                ["Monthly income", "$8,000"],
                ["Current DTI", "28% (mortgage + car + student loans)"],
                ["Desired mortgage", "$2,500/month payment"],
                ["New DTI with mortgage", "28% + 31% = 59%"],
                ["Lender decision", "Denied — exceeds 43% QM limit"],
              ],
              note: "James earns good money but his existing debt pushes him over the limit when adding a new mortgage. He needs to either increase his income, pay down existing debt, or look for a less expensive home to qualify.",
            },
            {
              heading: "Scenario 2: The Debt Paydown Success",
              rows: [
                ["Starting point", "$5,000 income, $2,500 debt = 50% DTI"],
                ["Credit score", "720 (Good)"],
                ["Action", "Paid off $10,000 in credit card debt over 6 months"],
                ["New monthly debt", "$1,800 (reduced minimums)"],
                ["New DTI", "$1,800 ÷ $5,000 = 36%"],
              ],
              note: "Maria's DTI dropped from 50% to 36% by paying down credit card debt. She went from being declined for personal loans to qualifying at competitive rates. Her income didn't change — only her debt did.",
            },
            {
              heading: "Scenario 3: The Income Increase",
              rows: [
                ["Starting point", "$4,000 income, $1,600 debt = 40% DTI"],
                ["Credit score", "680 (Fair)"],
                ["Action", "Promotion increased income to $5,500/month"],
                ["New DTI", "$1,600 ÷ $5,500 = 29%"],
                ["Result", "Now qualifies for conventional mortgage"],
              ],
              note: "Alex didn't pay down a single dollar of debt — he increased his income. His DTI dropped from 40% to 29%, moving him from poor to fair territory. This illustrates why income growth is as powerful as debt reduction for DTI.",
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

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Managing Your DTI
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Keeping DTI in check isn&apos;t just about loan approval — it&apos;s about financial flexibility and peace of mind. Here&apos;s
            what good DTI management actually gets you.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Easier loan approval",
                body: "Most lenders have maximum DTI thresholds. Keeping yours low means you qualify for a wider range of loan products at better rates. You're not fighting to get under the limit — you're comfortably below it.",
              },
              {
                n: "2",
                title: "Lower interest rates",
                body: "Lenders price risk into interest rates. Lower DTI signals lower risk, which translates to better rates. The difference between a 30% and 40% DTI can be 0.5–1% APR on a mortgage — thousands of dollars over the life of the loan.",
              },
              {
                n: "3",
                title: "More financial flexibility",
                body: "When less of your income is committed to debt payments, you have more room for savings, emergencies, and opportunities. You're not living paycheck to paycheck servicing debt.",
              },
              {
                n: "4",
                title: "Better stress tolerance",
                body: "High DTI means any income disruption — job loss, reduced hours, medical issue — can quickly become a crisis. Low DTI gives you a buffer to weather financial storms without defaulting on obligations.",
              },
              {
                n: "5",
                title: "Stronger negotiating position",
                body: "When you apply for credit with a low DTI, lenders compete for your business. You can shop rates, negotiate fees, and choose the best offer rather than accepting whatever you can get.",
              },
              {
                n: "6",
                title: "Faster debt payoff",
                body: "Low DTI often means you're not adding new debt. This allows you to direct more income toward paying off existing debt faster, creating a virtuous cycle of improving financial health.",
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

        {/* ── USA SECTION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            DTI in America: What You Need to Know
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            DTI requirements vary by loan type and lender, but there are some standard thresholds in the US lending market.
            Understanding these can help you plan your borrowing strategy.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Mortgage DTI Requirements
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            For mortgages, DTI is one of the most critical qualifying factors. Different loan programs have different limits.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Loan Type</th>
                <th className="dark:text-slate-100">Maximum DTI</th>
                <th className="dark:text-slate-100">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Conventional loan (Fannie/Freddie)", "43% (QM limit)", "May go higher with strong compensating factors"],
                ["FHA loan", "43% (typically)", "Can go to 50% with strong credit and reserves"],
                ["VA loan", "41% (typically)", "More flexible with residual income analysis"],
                ["USDA loan", "41% (typically)", "Must also meet strict income limits"],
                ["Jumbo loan", "38–43%", "Stricter than conventional loans"],
              ].map(([type, max, notes]) => (
                <tr key={type}>
                  <td className="dark:text-slate-100">{type}</td>
                  <td className="dark:text-slate-100">{max}</td>
                  <td className="dark:text-slate-100">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-8">
            Personal Loan DTI Requirements
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Personal loan lenders are generally more flexible than mortgage lenders, but they still have DTI thresholds.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Lender Type</th>
                <th className="dark:text-slate-100">Typical DTI Limit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Banks and credit unions", "40–45%"],
                ["Online lenders (prime)", "40–50%"],
                ["Online lenders (subprime)", "50%+"],
                ["Payday alternative loans", "Varies widely"],
              ].map(([type, limit]) => (
                <tr key={type}>
                  <td className="dark:text-slate-100">{type}</td>
                  <td className="dark:text-slate-100">{limit}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-8">
            Qualified Mortgage Rules
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Under the Consumer Financial Protection Bureau's Qualified Mortgage (QM) rules, most mortgages must have a DTI
            below 43%. This is a regulatory threshold designed to prevent lenders from making loans to borrowers who can't
            afford them.
          </p>
          <div className="aside-callout">
            The 43% QM limit isn't absolute — lenders can exceed it with strong compensating factors like high credit scores,
            substantial cash reserves, or significant down payments. But doing so requires additional documentation and
            underwriting scrutiny.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common DTI Mistakes Borrowers Make
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially responsible people make DTI mistakes. Here&apos;s what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Using net income instead of gross income",
                body: "DTI calculations use gross income (before taxes). Using take-home pay will give you an artificially high DTI and may cause you to overestimate your borrowing capacity.",
              },
              {
                n: "2",
                title: "Including expenses that aren't debt payments",
                body: "Utilities, groceries, insurance, and other living expenses don't count in DTI. Only minimum required debt payments are included. Don't let budget expenses confuse your DTI calculation.",
              },
              {
                n: "3",
                title: "Forgetting to include all debt payments",
                body: "It's easy to overlook smaller debts like store cards, personal loans, or payment plans. Every minimum payment counts. Use the calculator above to ensure you're capturing everything.",
              },
              {
                n: "4",
                title: "Assuming DTI doesn't matter with good credit",
                body: "Even with excellent credit, high DTI can disqualify you from loans. Lenders look at both — you can't compensate for a 50% DTI with a 800 credit score alone.",
              },
              {
                n: "5",
                title: "Not calculating DTI before applying",
                body: "Finding out your DTI is too high after a credit inquiry and application denial is frustrating and can hurt your credit. Calculate your DTI before you apply so you know where you stand.",
              },
              {
                n: "6",
                title: "Ignoring front-end DTI for mortgages",
                body: "While back-end DTI is more important overall, front-end DTI (housing costs only) matters for mortgages. Lenders typically want front-end DTI under 28–31%.",
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
            Practical Tips to Lower Your DTI
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Pay down high-balance debt first</strong> — reducing principal lowers minimum payments and DTI faster than paying extra on low-balance accounts</>],
              [<><strong>Increase your income</strong> — a raise, side hustle, or second job can lower DTI without reducing debt at all</>],
              [<><strong>Refinance to lower payments</strong> — refinancing high-rate debt to lower rates can reduce monthly payments and DTI</>],
              [<><strong>Avoid taking on new debt</strong> — every new loan payment increases DTI, so pause borrowing while working to lower your ratio</>],
              [<><strong>Consider debt consolidation</strong> — combining multiple debts into one with a lower payment can reduce total monthly obligations</>],
              [<><strong>Pay off small balances completely</strong> — eliminating small debts removes their minimum payments from your DTI calculation entirely</>],
              [<><strong>Extend loan terms strategically</strong> — longer terms mean lower monthly payments (but more total interest), which can help DTI for short-term goals</>],
              [<><strong>Calculate DTI before major applications</strong> — know your number before you apply for mortgages or large loans so you can address issues proactively</>],
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
                q: "What is a good debt-to-income ratio?",
                a: "A good DTI is generally under 36% for most loans. For mortgages, under 28% front-end DTI and under 36% back-end DTI is ideal. Under 20% is excellent and gives you maximum flexibility. Above 43% makes qualifying for most conventional loans difficult.",
              },
              {
                q: "Does DTI affect my credit score?",
                a: "No — DTI does not directly affect your credit score. Credit bureaus don't calculate DTI and it doesn't appear on your credit report. However, high DTI can lead to missed payments, which do hurt your score. Lenders consider both DTI and credit score when evaluating applications.",
              },
              {
                q: "What debts are included in DTI?",
                a: "DTI includes minimum required payments on: mortgages/rent, car loans, student loans, credit card minimums, personal loans, and other installment debts. It does NOT include: utilities, groceries, insurance, taxes (unless included in mortgage), or discretionary spending.",
              },
              {
                q: "Is DTI calculated monthly or annually?",
                a: "DTI is calculated using monthly figures — monthly gross income and monthly debt payments. Annual income is divided by 12, and annual debt payments are divided by 12 to get monthly equivalents for the calculation.",
              },
              {
                q: "What is the difference between front-end and back-end DTI?",
                a: "Front-end DTI only includes housing costs (mortgage/rent, property taxes, insurance, HOA fees). Back-end DTI includes housing costs plus all other debt payments. Mortgage lenders look at both, but back-end DTI carries more weight in approval decisions.",
              },
              {
                q: "Can I get a mortgage with 50% DTI?",
                a: "It's very difficult. The Qualified Mortgage limit is 43% for conventional loans. FHA loans may go to 50% with strong compensating factors (high credit score, cash reserves, low LTV). Above 50%, approval is unlikely except in special circumstances.",
              },
              {
                q: "How can I lower my DTI quickly?",
                a: "The fastest ways are: pay down debt to reduce minimum payments, increase your income through a raise or side work, or refinance existing debt to lower monthly payments. Avoid taking on new debt while working to lower your DTI.",
              },
              {
                q: "Does rent count in DTI?",
                a: "Yes — rent is included in DTI calculations just like a mortgage payment. For renters, DTI is calculated using rent as the housing cost. This can make qualifying for mortgages harder for renters with high rent relative to income.",
              },
              {
                q: "What is the maximum DTI for a VA loan?",
                a: "VA loans typically have a maximum DTI of 41%, though this can vary by lender. The VA uses a residual income analysis in addition to DTI, which considers your remaining income after all expenses. This can provide more flexibility than the DTI limit alone.",
              },
              {
                q: "Does DTI include student loan deferment?",
                a: "If student loans are in deferment or forbearance, lenders may use 1% of the outstanding balance as a monthly payment for DTI calculation, or they may use the actual payment that would be due once repayment begins. Policies vary by lender and loan type.",
              },
              {
                q: "How does DTI affect interest rates?",
                a: "Higher DTI typically means higher interest rates. Lenders price risk into rates, and high DTI signals higher risk. The difference between a 30% and 40% DTI can mean 0.5–1% higher APR on a mortgage, which adds up to thousands of dollars over the loan term.",
              },
              {
                q: "Can I qualify for a loan with high DTI but high income?",
                a: "High income alone doesn't offset high DTI — it's the ratio that matters. However, high income with high DTI may indicate large debt balances that could be paid down to improve the ratio. Lenders may work with you if you can demonstrate a plan to reduce DTI.",
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
            Debt-to-income ratio is one of the most important metrics in your financial life. It determines whether you qualify
            for loans, what interest rates you pay, and how much financial flexibility you have. Unlike your credit score,
            which reflects history, DTI reflects your current reality.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page gives you your DTI in seconds. But the real value comes from understanding what
            that number means and knowing how to move it in the right direction.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            If your DTI is above 36%, make reducing it a priority before applying for major loans. If it&apos;s already under
            30%, you&apos;re in good shape — focus on maintaining that level while building other aspects of financial health.
          </p>
          <div className="pull-quote mt-8">
            Your DTI tells lenders whether you can afford the loan you're asking for. Keep it low, and you'll have options. Let it climb, and those options disappear.
          </div>
        </section>

      </div>
    </article>
  );
}
