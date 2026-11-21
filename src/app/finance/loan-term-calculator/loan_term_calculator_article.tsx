import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function LoanTermArticle() {
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
            Loan Term Calculator: Find Your Perfect Repayment Timeline
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding loan terms
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You have a $25,000 loan at 7.5% interest. You can afford $500/month. How long will it take to pay off? The answer: 5.8 years. But what if you could afford $600/month? You'd pay it off in 4.7 years and save $1,500 in interest. The difference is significant — both in time and money.
          </p>
          <p className="mb-5">
            Loan term is the length of time you have to repay a loan. It's determined by your loan amount, interest rate, and monthly payment. The loan term calculator above helps you find the perfect term based on what you can afford to pay each month.
          </p>
          <p className="mb-5">
            But understanding your loan term is just the first step. Knowing how different terms affect your total cost, how to choose the right term for your budget, and how to optimize your repayment strategy is what actually saves you money and gets you debt-free faster.
          </p>
          <p>
            Loan term is a trade-off between monthly payment affordability and total cost. Shorter terms cost less overall but require higher payments. Longer terms have lower payments but cost more in interest. Finding the right balance is key to smart borrowing.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS LOAN TERM ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is Loan Term?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Loan term is the length of time you have to repay a loan, typically expressed in months or years. It's the period over which you'll make regular payments until the loan balance reaches zero. Loan terms vary by loan type: mortgages typically have 15–30 year terms, auto loans 3–7 years, and personal loans 1–5 years.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The loan term is determined by three factors: loan amount, interest rate, and monthly payment. Higher payments shorten the term, lower payments lengthen it. The loan term calculator above uses these inputs to calculate exactly how long it will take to pay off your loan.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Loan term affects both your monthly payment and total cost. Shorter terms have higher monthly payments but lower total interest. Longer terms have lower monthly payments but higher total interest. Choosing the right term requires balancing affordability with total cost.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT'S CALCULATED ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Loan Term Is Calculated
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Loan term is calculated using a logarithmic formula that accounts for principal, interest rate, and monthly payment. Understanding this formula helps you see how different variables affect your payoff timeline.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Loan Term Formula:
          </p>
          <div className="formula-block">
            <pre>n = -log(1 - (r × P) / M) / log(1 + r)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where n = number of months, P = principal, r = monthly interest rate, M = monthly payment
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Principal (P)", "$25,000"],
              ["Annual interest rate", "7.5%"],
              ["Monthly interest rate (r)", "7.5% / 12 = 0.625%"],
              ["Monthly payment (M)", "$500"],
              ["Loan term (n)", "-log(1 - (0.00625 × 25000) / 500) / log(1.00625) = 70 months"],
              ["Years", "70 / 12 = 5.8 years"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            If your monthly payment is less than or equal to the monthly interest charge (P × r), the loan will never be paid off. The interest alone will exceed your payment, causing the balance to grow indefinitely. Always ensure your payment exceeds the monthly interest charge.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TERM VS COST ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Loan Term Affects Total Cost
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Loan term has a dramatic impact on both your monthly payment and total cost. Here's how different terms compare for the same loan.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Monthly Payment</th>
                <th className="dark:text-slate-100">Loan Term</th>
                <th className="dark:text-slate-100">Total Interest</th>
                <th className="dark:text-slate-100">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["$400", "7.8 years", "$12,400", "$37,400"],
                ["$500", "5.8 years", "$9,800", "$34,800"],
                ["$600", "4.7 years", "$8,300", "$33,300"],
                ["$700", "4.0 years", "$7,200", "$32,200"],
                ["$800", "3.5 years", "$6,400", "$31,400"],
              ].map(([payment, term, interest, total]) => (
                <tr key={payment}>
                  <td className="dark:text-slate-100">{payment}</td>
                  <td className="dark:text-slate-100">{term}</td>
                  <td className="dark:text-slate-100">{interest}</td>
                  <td className="dark:text-slate-100">{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            For a $25,000 loan at 7.5% interest, paying $800/month instead of $400/month saves 4.3 years and $6,000 in interest. That's $6,000 that could be invested, saved, or used for other goals. Higher payments dramatically reduce total cost.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CHOOSING RIGHT TERM ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Choose the Right Loan Term
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Choosing the right loan term requires balancing monthly payment affordability against total cost. Here's a systematic approach to making the best decision.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Calculate your budget",
                body: "Determine how much you can afford to pay monthly without straining your budget. A good rule of thumb: keep total debt payments (including mortgage, auto loans, and other debt) below 36% of your gross monthly income.",
              },
              {
                n: "2",
                title: "Compare total costs across payment levels",
                body: "Use the calculator above to compare total costs across different monthly payment amounts. Don't let a lower payment blind you to higher total cost. The difference between $400 and $600 monthly can be thousands in interest.",
              },
              {
                n: "3",
                title: "Consider your future plans",
                body: "If you plan to stay in your home for a long time, a shorter term makes sense. If you might move or refinance within 5–10 years, a longer term with the option to pay extra may be more flexible.",
              },
              {
                n: "4",
                title: "Factor in interest rate differences",
                body: "Some loans offer lower rates for shorter terms. A 15-year mortgage typically has a lower rate than a 30-year mortgage. This rate difference compounds the savings from the shorter term.",
              },
              {
                n: "5",
                title: "Consider prepayment flexibility",
                body: "If you choose a longer term for lower payments, make extra principal payments when possible. This reduces total interest without committing to higher mandatory payments.",
              },
              {
                n: "6",
                title: "Align with your financial goals",
                body: "If your goal is to minimize total cost and become debt-free quickly, choose the shortest term you can afford. If your goal is to maximize cash flow for other investments, a longer term may make sense.",
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

        {/* ── REDUCING TERM ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce Your Loan Term
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Once you have a loan, there are strategies to reduce your loan term and total cost. Here's how to pay off your loan faster.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Make extra principal payments",
                body: "Every extra dollar toward principal reduces future interest and shortens your loan term. Even small extra payments add up. Paying an extra $100/month on a $25,000 loan can save over $2,000 in interest and pay off the loan 2 years early.",
              },
              {
                n: "2",
                title: "Refinance if rates drop",
                body: "If interest rates fall significantly after you take your loan, refinancing can save money. Consider refinancing if you can reduce your rate by at least 1–2 percentage points. Factor in refinancing costs to ensure it's worthwhile.",
              },
              {
                n: "3",
                title: "Switch from monthly to biweekly payments",
                body: "Paying half your monthly payment every two weeks results in 26 half-payments (13 full payments) per year instead of 12. This extra payment per year can shave years off your loan and save significant interest.",
              },
              {
                n: "4",
                title: "Apply windfalls to principal",
                body: "Tax refunds, bonuses, gifts, and inheritance money should go directly to loan principal. Windfalls are the fastest way to reduce your loan term without affecting your monthly budget.",
              },
              {
                n: "5",
                title: "Round up your payments",
                body: "If your payment is $500, round up to $550. The extra $50/month adds up to $600/year and reduces principal faster. Small increases in payments compound into significant interest savings.",
              },
              {
                n: "6",
                title: "Increase payments when income rises",
                body: "When you get a raise, bonus, or increase income, apply the extra to loan payments. Lifestyle creep is tempting, but directing income increases to debt payoff accelerates your path to freedom.",
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
            Common Loan Term Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially savvy people make mistakes with loan term decisions. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Focusing only on monthly payment",
                body: "A lower monthly payment often means a longer term and higher total interest. Always calculate the total cost before committing to a loan. Use the calculator above to compare total costs across different payment amounts.",
              },
              {
                n: "2",
                title: "Choosing the longest term for lower payments",
                body: "Longer terms have lower payments but much higher total costs. If you can afford higher payments, choose a shorter term to save significant interest. The longest term is rarely the best choice.",
              },
              {
                n: "3",
                title: "Not considering prepayment penalties",
                body: "Some loans charge fees for paying off early. If you plan to pay extra or refinance, avoid loans with prepayment penalties. The ability to pay off early can save significant interest.",
              },
              {
                n: "4",
                title: "Ignoring the total cost",
                body: "A $25,000 loan at 7.5% for 7.8 years costs $37,400 total — $12,400 in interest. That's nearly half the original loan amount. Always calculate the total cost before borrowing.",
              },
              {
                n: "5",
                title: "Not shopping around for rates",
                body: "Interest rates vary significantly between lenders. Get quotes from multiple lenders before committing. Even a 0.5% difference in rate can save thousands on a large loan.",
              },
              {
                n: "6",
                title: "Not adjusting term when refinancing",
                body: "When refinancing, consider a shorter term if you can afford higher payments. Refinancing into a 15-year mortgage instead of 30-year saves massive interest. Use the calculator to compare total costs.",
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
            Practical Tips for Managing Loan Term
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate loan term and total costs before borrowing to ensure affordability</>],
              [<><strong>Choose the shortest term you can afford</strong> — shorter terms save significant interest</>],
              [<><strong>Compare total costs, not just payments</strong> — don't let lower payments blind you to higher total cost</>],
              [<><strong>Make extra payments when possible</strong> — even small extra payments reduce total interest and term</>],
              [<><strong>Avoid prepayment penalties</strong> — ensure you can pay off early without fees</>],
              [<><strong>Shop around for rates</strong> — get quotes from multiple lenders before committing</>],
              [<><strong>Consider biweekly payments</strong> — 26 half-payments per year equals 13 full payments</>],
              [<><strong>Refinance when rates drop</strong> — refinancing can save thousands if rates fall significantly</>],
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
                q: "How do I calculate my loan term?",
                a: "Use the formula: n = -log(1 - (r × P) / M) / log(1 + r), where P is principal, r is monthly interest rate, M is monthly payment, and n is number of months. The calculator above does this automatically for you.",
              },
              {
                q: "What happens if my payment is too low?",
                a: "If your monthly payment is less than or equal to the monthly interest charge (principal × monthly interest rate), the loan will never be paid off. The interest alone will exceed your payment, causing the balance to grow indefinitely. Always ensure your payment exceeds the monthly interest charge.",
              },
              {
                q: "Should I choose a shorter or longer loan term?",
                a: "Choose the shortest term you can afford. Shorter terms have higher monthly payments but lower total interest. Longer terms have lower monthly payments but higher total interest. If you can afford higher payments, choose the shorter term to save money.",
              },
              {
                q: "How much does loan term affect total cost?",
                a: "Loan term has a dramatic impact on total cost. For a $25,000 loan at 7.5% interest, a 3.5-year term costs $31,400 total, while a 7.8-year term costs $37,400 — a $6,000 difference. Longer terms significantly increase total interest.",
              },
              {
                q: "Can I reduce my loan term after taking a loan?",
                a: "Yes, you can reduce your loan term by making extra principal payments, refinancing to a lower rate, or switching to biweekly payments. Making extra payments is the most flexible option — it reduces term without changing your mandatory payment.",
              },
              {
                q: "What's the difference between loan term and loan maturity?",
                a: "Loan term and loan maturity are essentially the same thing — both refer to the length of time you have to repay a loan. \"Term\" is more commonly used for consumer loans, while \"maturity\" is more common in mortgage and commercial lending.",
              },
              {
                q: "How does interest rate affect loan term?",
                a: "Higher interest rates increase the time required to pay off a loan with the same monthly payment. For a $25,000 loan with $500 monthly payment, at 5% interest the term is 4.9 years, while at 10% interest it's 6.8 years. Higher rates significantly extend the term.",
              },
              {
                q: "Should I use a loan term calculator before applying for a loan?",
                a: "Absolutely. Use the calculator to determine what monthly payment you can afford and how long different payment amounts will take to pay off the loan. This helps you choose a loan that fits your budget and minimizes total cost.",
              },
              {
                q: "What's the minimum payment to pay off a loan?",
                a: "The minimum payment must exceed the monthly interest charge (principal × monthly interest rate). For a $25,000 loan at 7.5% interest, the monthly interest charge is $156.25. Any payment above $156.25 will eventually pay off the loan, though it may take a very long time.",
              },
              {
                q: "How does biweekly payment affect loan term?",
                a: "Biweekly payments (half your monthly payment every two weeks) result in 26 half-payments (13 full payments) per year instead of 12. This extra payment per year can shave years off your loan and save significant interest without dramatically increasing your monthly budget.",
              },
              {
                q: "Should I extend my loan term to lower payments?",
                a: "Extending your loan term lowers monthly payments but increases total interest significantly. Only extend your term if you're struggling to make payments and have no other options. If you can afford current payments, keep the shorter term to save money.",
              },
              {
                q: "How do I know if my loan term is too long?",
                a: "If your total interest paid exceeds 50% of the original loan amount, your term is likely too long. For example, if you borrow $25,000 and pay $15,000 in interest, you're paying 60% in interest. Consider refinancing to a shorter term or making extra payments.",
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
            Loan term is the bridge between what you can afford monthly and what you'll pay overall. Shorter terms save money but require higher payments. Longer terms offer lower payments but cost significantly more. Finding the right balance is key to smart borrowing.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you understand your loan term based on your payment capacity. But the real work happens before you borrow: choosing the right term, shopping for the best rate, and ensuring the payment fits your budget. These steps ensure you don't overpay for credit.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Loan term isn't just a number — it's a commitment that affects your budget for years. Choose wisely, pay extra when possible, and become debt-free faster. Your future self will thank you for the thousands you'll save in interest.
          </p>
          <div className="pull-quote mt-8">
            The best loan term is the one you can afford without stress. The second best is the one you pay off early.
          </div>
        </section>

      </div>
    </article>
  );
}
