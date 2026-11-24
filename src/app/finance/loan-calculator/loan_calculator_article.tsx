export default function LoanCalculatorArticle() {
  return (
    <article className="w-full max-w-[75ch] mx-auto px-6 py-16 text-[18px] leading-[1.8] font-sans text-slate-800 dark:text-slate-100">
      <style>{`
        .article-root { font-family: var(--font-poppins), 'Poppins', sans-serif; }
        .display-font { font-family: var(--font-poppins), 'Poppins', sans-serif; }
        .article-root h2 { font-family: var(--font-poppins), 'Poppins', sans-serif; }
        .article-root h3 { font-family: var(--font-poppins), 'Poppins', sans-serif; }
        .article-root h4 { font-family: var(--font-poppins), 'Poppins', sans-serif; }

        .dropcap::first-letter {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
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
          font-family: &apos;Courier New&apos;, monospace;
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
          font-family: var(--font-poppins), 'Poppins', sans-serif;
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
          font-family: var(--font-poppins), 'Poppins', sans-serif;
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
          font-family: var(--font-poppins), 'Poppins', sans-serif;
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
          content: &apos;→&apos;;
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
          font-family: var(--font-poppins), 'Poppins', sans-serif;
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
          font-family: var(--font-poppins), 'Poppins', sans-serif;
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
            Loan Calculator: Figure Out Your Monthly Payments Before You Borrow
            a Dime
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for US borrowers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You&apos;ve found a great deal on a used car. Or maybe a medical
            bill just showed up out of nowhere. Or perhaps you&apos;ve been
            putting off fixing your roof for two years because you just
            don&apos;t have $8,000 sitting around. Whatever brought you here,
            you&apos;re probably asking the same question millions of Americans
            ask every day:
            <em>How much is this loan actually going to cost me each month?</em>
          </p>
          <p className="mb-5">
            That&apos;s exactly what a loan calculator is for — and it&apos;s
            one of the smartest tools you can use before signing anything.
          </p>
          <p className="mb-5">
            Most lenders won&apos;t hand you a full breakdown of what
            you&apos;ll pay over three or five years until you&apos;re halfway
            through the application. By then, you&apos;re kind of committed.
            Running your numbers through a loan calculator
            <em>before</em> you apply gives you the power to compare options,
            avoid surprises, and borrow smarter.
          </p>
          <p>
            Let&apos;s break down everything you need to know — from how the
            calculator works to real borrowing examples, common mistakes, and
            what the lending landscape looks like in the U.S. right now.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS A LOAN CALCULATOR ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Loan Calculator?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A loan calculator is a digital tool that estimates your monthly
            payment based on three main inputs: how much you want to borrow, the
            interest rate, and the loan term (how long you&apos;ll take to pay
            it back).
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            It sounds simple — and it is. But the math behind it can save you
            thousands of dollars if you use it right.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            These calculators work for almost any type of installment loan:
            personal loans, auto loans, home improvement loans, debt
            consolidation loans, and more. You punch in the numbers, and within
            seconds you&apos;ll see your estimated monthly payment, total
            interest paid, and the total cost of borrowing.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Some advanced versions will even generate a full{" "}
            <strong>loan amortization schedule</strong> — a month-by-month
            breakdown of how your payments split between principal and interest
            over the life of the loan.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Loan Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The loan payment calculator does the heavy lifting with a standard
            financial formula that lenders themselves use. Here&apos;s the short
            version of what happens behind the scenes:
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            When you borrow money, the lender charges you interest. That
            interest gets spread across your payments. In the early months, most
            of your payment goes toward interest. As time goes on, more of it
            chips away at the principal — the actual amount you borrowed.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            This process is called <strong>amortization</strong>, and it&apos;s
            why paying off a loan early can save you a surprising amount of
            money.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            All you need to plug into the calculator:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Loan amount", "How much you&apos;re borrowing"],
              [
                "Annual interest rate (APR)",
                "The yearly rate the lender charges",
              ],
              [
                "Loan term",
                "Usually expressed in months (e.g., 36 months = 3 years)",
              ],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">
                  ◆
                </span>
                <span>
                  <strong>{label}</strong> — {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            Hit calculate and you&apos;ll get your monthly payment instantly.
            It&apos;s that straightforward.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Formula Behind the Calculation
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            If you&apos;re curious about the math, here&apos;s the standard loan
            payment formula used by banks, credit unions, and online lenders:
          </p>
          <div className="formula-block">
            <pre>M = P × [r(1+r)^n] / [(1+r)^n - 1]</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["M", "Monthly payment"],
              ["P", "Principal loan amount"],
              ["r", "Monthly interest rate (annual rate ÷ 12)"],
              ["n", "Total number of payments (loan term in months)"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-20 shrink-0">
                  {sym}
                </span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Don&apos;t worry — you don&apos;t need to calculate this by hand.
            That&apos;s what the calculator is for. But understanding the
            formula helps you see <em>why</em> a higher interest rate or longer
            loan term increases what you end up paying.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP EXAMPLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step Calculation Example
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let&apos;s say you want to borrow <strong>$10,000</strong> for a
            home improvement project. You&apos;ve been offered an interest rate
            of <strong>8% APR</strong> and a loan term of{" "}
            <strong>36 months</strong>.
          </p>

          {[
            {
              step: "1",
              title: "Convert annual rate to monthly rate",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>8% ÷ 12 = 0.667% per month = 0.00667</li>
                </ul>
              ),
            },
            {
              step: "2",
              title: "Plug into the formula",
              content: (
                <div className="formula-block mt-2 text-sm">
                  <pre>{`M = 10,000 × [0.00667 × (1.00667)^36] / [(1.00667)^36 - 1]
M ≈ $313.36 per month`}</pre>
                </div>
              ),
            },
            {
              step: "3",
              title: "Calculate total paid",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>
                    $313.36 × 36 = <strong>$11,280.96</strong>
                  </li>
                </ul>
              ),
            },
            {
              step: "4",
              title: "Calculate total interest",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>
                    $11,280.96 – $10,000 ={" "}
                    <strong>$1,280.96 in interest</strong>
                  </li>
                </ul>
              ),
            },
          ].map(({ step, title, content }) => (
            <div key={step} className="numbered-section">
              <span className="num">{step}</span>
              <div className="flex-1 bg-stone-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-sm">
                <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm uppercase tracking-wide font-sans">
                  Step {step}: {title}
                </p>
                {content}
              </div>
            </div>
          ))}

          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            So you&apos;d pay roughly $1,281 in interest to borrow $10,000 over
            three years at 8%. Not bad. Now imagine what happens if that rate
            jumps to 18% or the term stretches to 60 months. The calculator lets
            you see that instantly.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Borrowing Examples
          </h2>

          <div className="state-card">
            <h3>
              Example 1: Sarah&apos;s Debt Consolidation Loan (Good Credit)
            </h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Sarah has about $15,000 in credit card debt spread across four
              cards, each charging 20–24% APR. She qualifies for a{" "}
              <strong>debt consolidation loan at 9% APR</strong> for 48 months.
            </p>
            <table className="styled-table">
              <thead>
                <tr>
                  <th className="dark:text-slate-100"></th>
                  <th className="dark:text-slate-100">Credit Cards</th>
                  <th className="dark:text-slate-100">Consolidation Loan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Balance", "$15,000", "$15,000"],
                  ["Interest Rate", "~22% avg", "9%"],
                  ["Monthly Payment", "~$500+", "$373"],
                  ["Total Interest Paid", "$6,000+", "$2,904"],
                ].map(([label, cc, loan]) => (
                  <tr key={label}>
                    <td className="dark:text-slate-100">{label}</td>
                    <td className="dark:text-slate-100">{cc}</td>
                    <td className="dark:text-slate-100">{loan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              Sarah saves over <strong>$3,000 in interest</strong> and
              simplifies her payments from four to one. That&apos;s why using a
              loan repayment calculator before consolidating is so valuable.
            </p>
          </div>

          <div className="state-card">
            <h3>Example 2: Marcus&apos;s Emergency Loan (Average Credit)</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Marcus&apos;s HVAC system died in August. He needs $4,000 fast.
              With a credit score in the mid-600s, he qualifies for a personal
              loan at <strong>16% APR</strong> over 24 months.
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
              <li>
                • Monthly payment: <strong>$196.47</strong>
              </li>
              <li>
                • Total paid: <strong>$4,715.28</strong>
              </li>
              <li>
                • Total interest: <strong>$715.28</strong>
              </li>
            </ul>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              Not ideal, but manageable — and way cheaper than putting it on a
              high-interest credit card.
            </p>
          </div>

          <div className="state-card">
            <h3>Example 3: Danielle&apos;s Car Repair Loan (Poor Credit)</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Danielle&apos;s credit score is around 580. She&apos;s approved
              for a $2,500 loan at <strong>28% APR</strong> for 18 months.
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
              <li>
                • Monthly payment: <strong>$173.20</strong>
              </li>
              <li>
                • Total paid: <strong>$3,117.60</strong>
              </li>
              <li>
                • Total interest: <strong>$617.60</strong>
              </li>
            </ul>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              She pays nearly 25% extra in interest. This is where the loan
              interest calculator becomes a reality check — and motivation to
              build credit before borrowing big.
            </p>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── AMORTIZATION TABLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Sample Amortization Table
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Here&apos;s how an $8,000 loan at 10% APR over 24 months breaks down
            in the early months:
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Month</th>
                <th className="dark:text-slate-100">Payment</th>
                <th className="dark:text-slate-100">Principal</th>
                <th className="dark:text-slate-100">Interest</th>
                <th className="dark:text-slate-100">Balance Remaining</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "$369.00", "$302.33", "$66.67", "$7,697.67"],
                ["2", "$369.00", "$304.85", "$64.15", "$7,392.82"],
                ["3", "$369.00", "$307.39", "$61.61", "$7,085.43"],
                ["6", "$369.00", "$315.10", "$53.90", "$6,142.31"],
                ["12", "$369.00", "$331.54", "$37.46", "$4,169.01"],
                ["18", "$369.00", "$349.13", "$19.87", "$2,038.99"],
                ["24", "$369.00", "$366.93", "$2.07", "$0.00"],
              ].map(([month, payment, principal, interest, balance]) => (
                <tr key={month}>
                  <td className="dark:text-slate-100">{month}</td>
                  <td className="dark:text-slate-100">{payment}</td>
                  <td className="dark:text-slate-100">{principal}</td>
                  <td className="dark:text-slate-100">{interest}</td>
                  <td className="dark:text-slate-100">{balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            Notice how in month 1, nearly $67 goes to interest. By month 24,
            it&apos;s just $2. That&apos;s amortization at work.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS THAT AFFECT PAYMENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Your Loan Payments
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            A loan payment calculator is only as useful as the numbers you feed
            it. Here are the big factors that shape what you&apos;ll pay:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                1. Loan Amount (Principal)
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                The more you borrow, the higher your monthly payment — and the
                more you pay in interest overall. Borrow only what you actually
                need.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                2. Interest Rate
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                This is probably the biggest variable. Even a few percentage
                points can cost you hundreds or thousands more. Borrowers with
                excellent credit (720+) can often score rates in the 6–12%
                range. Those with fair credit might see 15–25%. And subprime
                borrowers can face rates pushing 30% or higher.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                3. Loan Term
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Longer terms = lower monthly payments, but more interest over
                time. Shorter terms = higher payments, but you pay the loan off
                faster and cheaper.
              </p>
              <table className="styled-table styled-table-plain">
                <thead>
                  <tr>
                    <th className="dark:text-slate-100">
                      Loan: $12,000 at 10% APR
                    </th>
                    <th className="dark:text-slate-100">Monthly Payment</th>
                    <th className="dark:text-slate-100">Total Interest</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["24 months", "$553.17", "$1,276.08"],
                    ["36 months", "$387.21", "$1,939.56"],
                    ["48 months", "$304.35", "$2,608.80"],
                    ["60 months", "$254.96", "$3,297.60"],
                  ].map(([term, payment, interest]) => (
                    <tr key={term}>
                      <td className="dark:text-slate-100">{term}</td>
                      <td className="dark:text-slate-100">{payment}</td>
                      <td className="dark:text-slate-100">{interest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
                A 60-month loan is $2,000+ more expensive in interest than a
                24-month one — even though the monthly payment looks lower.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                4. APR vs. Interest Rate — What&apos;s the Difference?
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                This one trips people up constantly. The{" "}
                <strong>interest rate</strong> is what the lender charges on the
                principal. The <strong>APR (Annual Percentage Rate)</strong>{" "}
                includes the interest rate <em>plus</em> any fees — like
                origination fees, processing fees, or prepaid interest.
              </p>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                APR is the true cost of borrowing. Always compare APRs when
                shopping for loans, not just interest rates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                5. Credit Score
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Your credit score is the single biggest factor in what rate
                you&apos;ll be offered. Here&apos;s a rough guide:
              </p>
              <table className="styled-table styled-table-plain">
                <thead>
                  <tr>
                    <th className="dark:text-slate-100">Credit Score Range</th>
                    <th className="dark:text-slate-100">Rating</th>
                    <th className="dark:text-slate-100">Typical APR Range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["720 – 850", "Excellent", "6% – 12%"],
                    ["680 – 719", "Good", "10% – 18%"],
                    ["640 – 679", "Fair", "15% – 24%"],
                    ["580 – 639", "Poor", "22% – 35%"],
                    ["Below 580", "Very Poor", "36%+ or denied"],
                  ].map(([range, rating, apr]) => (
                    <tr key={range}>
                      <td className="dark:text-slate-100">{range}</td>
                      <td className="dark:text-slate-100">{rating}</td>
                      <td className="dark:text-slate-100">{apr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                6. Fixed vs. Variable Interest Rates
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Most personal loans come with <strong>fixed rates</strong> —
                your payment stays the same every month, which makes budgeting
                simple. Variable rates fluctuate with the market index and can
                creep up on you. For personal loans, fixed is almost always the
                safer bet.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                7. Debt-to-Income Ratio (DTI)
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Lenders don&apos;t just look at your credit score. They want to
                know how much of your monthly income is already going toward
                debt. Most prefer a DTI below 36%. If half your paycheck is
                already spoken for, lenders get nervous.
              </p>
              <div className="aside-callout">
                <strong>Calculate your DTI:</strong> Add up your monthly debt
                payments ÷ your gross monthly income × 100.
              </div>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
                If you earn $4,000/month and owe $1,200 in monthly debt
                payments, your DTI is 30% — generally acceptable.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TYPES OF LOANS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Types of Loans You Can Calculate
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Personal Loans",
                desc: "Unsecured loans you can use for almost anything — medical bills, vacations, weddings, or unexpected expenses. No collateral needed. Rates typically run from 6% to 36%, depending on your credit.",
              },
              {
                title: "Debt Consolidation Loans",
                desc: "You use one loan to pay off multiple debts — usually high-interest credit cards. The goal is a lower combined rate and one simple payment. Our loan calculator can help you compare your current payments to what a consolidation loan would look like.",
              },
              {
                title: "Home Improvement Loans",
                desc: "Remodeling the kitchen? Replacing the deck? Home improvement loans are usually unsecured personal loans with terms of 2–7 years. Some homeowners use HELOCs (home equity lines of credit) instead, which have lower rates but use your home as collateral.",
              },
              {
                title: "Emergency Loans",
                desc: "When life gets expensive fast — car repairs, emergency travel, urgent medical bills — a personal loan from a bank or online lender can be a smarter choice than draining your savings or maxing out a credit card.",
              },
              {
                title: "Installment Loans",
                desc: "Any loan you pay back in equal monthly installments over a set period. Personal loans, auto loans, and student loans all fall into this category. The monthly payment calculator handles all of these the same way.",
              },
            ].map(({ title, desc }) => (
              <div key={title}>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {title}
                </h3>
                <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── WHERE TO GET A LOAN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Where to Get a Loan in the USA
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Banks
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Traditional banks (Chase, Bank of America, Wells Fargo) offer
                personal loans to existing customers with good credit. Rates are
                often competitive, but the approval process can be slower and
                requirements stricter.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Credit Unions
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Credit unions are member-owned and tend to offer lower rates
                than banks — especially for borrowers with average credit. You
                typically need to be a member to apply, but many credit unions
                have easy eligibility requirements.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Online Lenders
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Companies like SoFi, LightStream, LendingClub, and Upgrade have
                changed the lending game. They often approve borrowers faster,
                sometimes within 24–48 hours, and many work with a wider range
                of credit profiles. Some specialize in borrowers with fair or
                poor credit.
              </p>
            </div>
          </div>
          <table className="styled-table styled-table-plain mt-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Lender Type</th>
                <th className="dark:text-slate-100">Best For</th>
                <th className="dark:text-slate-100">Typical APR</th>
                <th className="dark:text-slate-100">Funding Speed</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Banks", "Good-to-excellent credit", "7% – 18%", "3–7 days"],
                [
                  "Credit Unions",
                  "Average-to-good credit",
                  "6% – 18%",
                  "2–5 days",
                ],
                ["Online Lenders", "All credit types", "6% – 36%", "1–3 days"],
                ["Payday Lenders", "Emergency only", "300%+", "Same day"],
              ].map(([type, best, apr, speed]) => (
                <tr key={type}>
                  <td className="dark:text-slate-100">{type}</td>
                  <td className="dark:text-slate-100">{best}</td>
                  <td className="dark:text-slate-100">{apr}</td>
                  <td className="dark:text-slate-100">{speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout mt-4">
            Stay far away from payday loans unless you&apos;re truly out of
            options. The effective APR can be 300–400%. A loan estimator will
            show you just how brutal that math gets.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── SECURED VS UNSECURED ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Secured vs. Unsecured Loans
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            <strong>Secured loans</strong> require collateral — something of
            value (your car, home, savings account) that the lender can take if
            you stop paying. Lower rates, but higher stakes.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            <strong>Unsecured loans</strong> don&apos;t need collateral. You
            qualify based on your creditworthiness alone. Most personal loans
            are unsecured. Rates are higher because the lender takes on more
            risk.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── EXTRA PAYMENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Extra Payments Can Save You Big Money
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s something most borrowers don&apos;t think about: making
            even one extra payment per year — or just adding $50–$100 extra to
            your monthly payment — can cut your loan term and save a meaningful
            amount in interest.
          </p>
          <div className="state-card">
            <h3>Example: $15,000 loan at 12% APR over 60 months</h3>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-3">
              <li>• Standard payment: $333.67/month</li>
              <li>• Total interest paid: $5,020</li>
            </ul>
            <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Add just $100/month extra:
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
              <li>• Loan pays off in ~44 months (16 months earlier)</li>
              <li>• Total interest saved: ~$1,100</li>
            </ul>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            Use a loan amortization calculator to model this yourself. It&apos;s
            eye-opening.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Using a Loan Calculator
          </h2>
          <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              "No commitment required — Run as many scenarios as you want before applying",
              "Instant results — No waiting, no forms, no credit check",
              "Comparison shopping — See how different lenders&apos; rates affect your payment",
              "Budget planning — Make sure the monthly payment fits your actual income",
              "Early payoff modeling — See how much extra payments save",
              "Amortization visibility — Understand how your money is being applied each month",
              "Avoiding over-borrowing — It&apos;s easy to borrow more than you need; the calculator keeps you honest",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Loan Mistakes to Avoid
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Borrowing More Than You Need
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Lenders often approve you for more than you asked for. It feels
                like a win. It&apos;s not. More principal = more interest.
                Always borrow the minimum you actually need.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Only Looking at Monthly Payments
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                A $200/month payment sounds affordable. But if that loan runs 84
                months, you might pay $5,000 in interest on a $10,000 loan. The
                bank loan calculator shows you the <em>total</em> cost — use it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Ignoring the APR
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Some lenders advertise a low interest rate but load up the loan
                with origination fees (typically 1–8% of the loan amount). That
                bumps the APR significantly. Always compare APRs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Skipping the Fine Print on Fees
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Watch out for:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
                <li>
                  • <strong>Origination fees</strong> (charged upfront or rolled
                  into the loan)
                </li>
                <li>
                  • <strong>Prepayment penalties</strong> (charged if you pay
                  off early)
                </li>
                <li>
                  • <strong>Late payment fees</strong> (usually $25–$50 or a %
                  of the payment)
                </li>
                <li>
                  • <strong>Returned payment fees</strong>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Applying for Too Many Loans at Once
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Each hard credit inquiry can drop your score by 5–10 points. If
                you&apos;re shopping rates, many lenders now offer{" "}
                <strong>soft pull pre-qualification</strong> — it doesn&apos;t
                affect your credit. Use that first.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Skipping the Credit Union Option
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Lots of Americans automatically go to a big bank or Google
                &quot;loans near me&quot; and end up with an online lender.
                Credit unions often have the best rates and more flexible
                underwriting. They&apos;re worth checking first.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── IMPROVE APPROVAL CHANCES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve Your Loan Approval Chances
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            If your credit isn&apos;t where you want it:
          </p>
          <div className="space-y-3">
            {[
              "Check your credit report for errors — About 1 in 4 Americans has an error on their credit report. Dispute anything inaccurate at AnnualCreditReport.com.",
              "Pay down credit card balances — Your credit utilization ratio (how much of your available credit you&apos;re using) makes up 30% of your FICO score.",
              "Don&apos;t close old accounts — Length of credit history matters.",
              "Add a co-signer — A co-signer with good credit can help you qualify for a better rate. They&apos;re equally responsible for the loan, though, so choose carefully.",
              "Apply with a credit union — They often give more weight to your relationship history and income, not just your score.",
            ].map((item, i) => (
              <div key={i} className="numbered-section">
                <span className="num">{i + 1}</span>
                <p className="flex-1 text-base text-slate-800 dark:text-slate-100">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── PREDATORY LENDING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Predatory Lending: Warning Signs to Know
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Not every lender plays fair. Here&apos;s how to spot trouble:
          </p>
          <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              "Guaranteed approval, no credit check — Legitimate lenders check your creditworthiness",
              "Pressure to sign quickly — Take your time; any deal that expires in hours is suspicious",
              "No physical address or contact information — A red flag for online scams",
              "Vague loan terms — If they can&apos;t clearly show you the APR and full repayment schedule, walk away",
              "Upfront fees before you receive funds — Real lenders don&apos;t charge fees before disbursement",
              "Extremely high APR — If your APR is over 36%, look harder for alternatives",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            The Consumer Financial Protection Bureau (CFPB) and your state
            attorney general&apos;s office are good resources if you think
            you&apos;ve been targeted.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── CURRENT TRENDS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Current Lending Trends in the USA
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            As of 2024-2025, personal loan rates have been elevated compared to
            earlier years, following the Federal Reserve&apos;s interest rate
            hiking cycle that began in 2022. The average personal loan rate for
            borrowers with good credit has been hovering between{" "}
            <strong>10% and 15%</strong>, while those with fair or poor credit
            continue to face rates in the 20–30%+ range.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Online lenders have gained significant market share, with many
            borrowers now getting funded entirely through apps. Buy Now, Pay
            Later (BNPL) services have also become popular for smaller
            purchases, though they carry their own risks when overused.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            One encouraging trend: more lenders are offering{" "}
            <strong>soft-pull pre-qualification</strong>, letting you see your
            rate before a hard inquiry. This is good news for consumers who want
            to shop around without damaging their credit.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQs ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            FAQs: Loan Calculator
          </h2>
          {[
            {
              q: "What information do I need to use the loan calculator?",
              a: "You need three things: the loan amount (principal), the annual interest rate or APR, and the loan term in months. That&apos;s it. The calculator does the rest.",
            },
            {
              q: "Does using the loan calculator affect my credit score?",
              a: "Absolutely not. The calculator is just a math tool — it doesn&apos;t contact any lender or run any credit check. Only a formal loan application (which triggers a hard inquiry) can affect your score.",
            },
            {
              q: "What&apos;s the difference between APR and interest rate?",
              a: "The interest rate is the cost of borrowing the principal. The APR includes the interest rate plus any fees the lender charges (origination fees, closing costs, etc.). APR is the more complete number and what you should use to compare loans.",
            },
            {
              q: "How do I get the best interest rate on a personal loan?",
              a: "The best rates go to borrowers with credit scores of 720 or higher, low debt-to-income ratios, and stable income. Beyond that, comparing multiple lenders — banks, credit unions, and online lenders — is the fastest way to find the best deal.",
            },
            {
              q: "Is a shorter loan term always better?",
              a: "Financially, yes — you pay less total interest. But shorter terms mean higher monthly payments. The smart move is to use the monthly payment calculator to find the shortest term you can comfortably afford based on your actual monthly budget.",
            },
            {
              q: "Can I pay off a personal loan early?",
              a: "Most personal loans allow early payoff with no penalty — but check before you sign. Some lenders charge a prepayment penalty (usually 1–3% of the remaining balance) to recoup lost interest income. If you plan to pay aggressively, look for loans without this fee.",
            },
            {
              q: "How much can I borrow with a personal loan?",
              a: "Most personal loans range from $1,000 to $50,000, though some lenders go up to $100,000 for highly qualified borrowers. The amount you&apos;re approved for depends on your income, credit score, and existing debt obligations.",
            },
            {
              q: "What is a good monthly payment for a personal loan?",
              a: "That depends entirely on your income. A common guideline: your total monthly debt payments (including the new loan) shouldn&apos;t exceed 36% of your gross monthly income. Use the loan payment calculator to test whether a given payment fits comfortably in your budget.",
            },
            {
              q: "How does a debt consolidation loan work?",
              a: "You take out a new loan — ideally at a lower interest rate — and use it to pay off multiple existing debts. You&apos;re then left with a single monthly payment. It works best when the new loan&apos;s rate is lower than your existing debts&apos; average rate, and when you commit to not piling up new credit card debt.",
            },
            {
              q: "What&apos;s an amortization schedule?",
              a: "It&apos;s a complete month-by-month breakdown of your loan payments. Each row shows how much of that month&apos;s payment goes to interest, how much reduces your principal, and what your remaining balance is. It&apos;s a great tool for seeing exactly how much you owe at any point in time.",
            },
            {
              q: "What&apos;s a typical origination fee?",
              a: "Origination fees typically range from 1% to 8% of the loan amount. On a $10,000 loan, that&apos;s $100–$800, often deducted from your funds before disbursement. Always factor this in when calculating the real cost of a loan.",
            },
            {
              q: "What if I get a loan offer with a variable rate?",
              a: "For short-term loans (12–24 months), variable rates might not matter much since rates don&apos;t shift dramatically in that time. For longer-term loans, a variable rate introduces uncertainty — your payment could rise. A fixed-rate loan gives you predictable payments, which is usually worth a slightly higher starting rate.",
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="faq-item">
              <h3 className="font-bold">{q}</h3>
              <p className="text-base text-slate-800 dark:text-slate-100">
                {a}
              </p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS FOR REDUCING COST ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Tips for Reducing Your Total Loan Cost
          </h2>
          <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              "Negotiate your rate — It doesn&apos;t hurt to ask, especially if you have competing offers",
              "Make biweekly payments — Paying half your monthly amount every two weeks results in 13 full payments per year instead of 12",
              "Round up your payments — If your payment is $347, pay $400. That extra $53 goes straight to principal",
              "Use windfalls wisely — Tax refunds, bonuses, or birthday money applied to your loan balance can shave months off the term",
              "Refinance if rates drop — If your credit improves or market rates fall, refinancing can get you a lower rate on the remaining balance",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── FINAL THOUGHTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Final Thoughts
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Borrowing money is a normal part of American financial life. The key
            isn&apos;t avoiding loans entirely — it&apos;s borrowing smart.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            A loan calculator is one of the simplest, most powerful tools in
            your financial toolkit. It takes the guesswork out of borrowing,
            helps you compare options side by side, and keeps you from getting
            blindsided by a payment you can&apos;t handle.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Before you apply for your next loan, run the numbers. Try different
            loan amounts, rates, and terms. See what a few extra dollars per
            month does to your payoff timeline. Look at the total interest, not
            just the monthly payment.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Knowledge is leverage — and when it comes to borrowing money, the
            more you know going in, the better the deal you&apos;ll walk out
            with.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── RELATED CALCULATORS ── */}
        <section className="mb-8">
          <p className="text-base text-slate-600 dark:text-slate-400 italic">
            Need more help? Check out our related calculators for auto loans,
            mortgage payments, and debt payoff planning.
          </p>
        </section>
      </div>
    </article>
  );
}
