import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DebtConsolidationCalculatorArticle() {
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
          <span className="meta-tag">Personal Finance · Debt Management</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Debt Consolidation Calculator: See Exactly How Much You Could Save Before You Consolidate
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for US borrowers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Four credit cards. A personal loan. A medical bill in collections. Minimum payments scattered across six different
            due dates, and the feeling that no matter how much you pay, the balances barely move.
          </p>
          <p className="mb-5">
            That&apos;s not a personal failure. It&apos;s the math of high-interest revolving debt — and it traps millions of Americans
            every year.
          </p>
          <p className="mb-5">
            Debt consolidation is one of the most practical ways out. Instead of juggling multiple payments at varying rates,
            you roll everything into a single loan — ideally at a lower interest rate — with one predictable monthly payment
            and a clear payoff date.
          </p>
          <p className="mb-5">
            The debt consolidation calculator shows you whether that move actually makes sense <em>for your numbers</em>. It
            compares what you&apos;re paying now against what a consolidation loan would cost, calculates your total interest
            savings, and tells you how much faster you&apos;d become debt-free.
          </p>
          <p>
            Let&apos;s dig into how it works — and whether it&apos;s the right call for you.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS A DEBT CONSOLIDATION CALCULATOR ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Debt Consolidation Calculator?
          </h2>
          <div className="aside-callout">
            <strong>A debt consolidation calculator is a financial tool that compares your current debt situation — multiple
            balances, rates, and payments — against a proposed consolidation loan, showing you monthly savings, total interest
            saved, and how your payoff timeline changes.</strong>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Unlike a standard loan calculator, which only looks at a new loan, a debt consolidation calculator factors in your
            <em>existing</em> debt load. You enter:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Current balances and interest rates for each debt"],
              ["Current minimum (or actual) monthly payments"],
              ["Proposed consolidation loan amount, APR, and term"],
            ].map(([item]) => (
              <li key={item} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The tool outputs:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
            <li>• Your current total monthly payment</li>
            <li>• Your proposed consolidated monthly payment</li>
            <li>• Monthly cash flow savings</li>
            <li>• Total interest paid under each scenario</li>
            <li>• <strong>Net savings from consolidating</strong></li>
            <li>• Payoff timeline comparison</li>
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            It&apos;s the difference between guessing consolidation will help and <em>knowing</em> by how much.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS DEBT CONSOLIDATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is Debt Consolidation?
          </h2>
          <div className="aside-callout">
            <strong>Debt consolidation is the process of combining multiple debts — typically high-interest credit cards or
            personal loans — into a single new loan with one monthly payment, usually at a lower interest rate and with a fixed
            payoff date.</strong>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            There&apos;s an important distinction to make upfront: debt consolidation doesn&apos;t eliminate what you owe. Your
            total balance stays the same (or close to it). What changes is the interest rate, the payment structure, and your
            ability to see a light at the end of the tunnel.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The three main methods Americans use to consolidate debt:
          </p>
          <div className="space-y-3">
            {[
              ["1", "Personal consolidation loan", "An unsecured installment loan from a bank, credit union, or online lender used to pay off multiple debts"],
              ["2", "Balance transfer credit card", "Moving high-interest card balances to a new card with a 0% promotional APR period (usually 12–21 months)"],
              ["3", "Home equity loan or HELOC", "Borrowing against your home&apos;s equity at a lower secured rate to pay off unsecured debt"],
            ].map(([num, title, desc]) => (
              <div key={num} className="numbered-section">
                <span className="num">{num}</span>
                <div className="flex-1">
                  <p className="text-base text-slate-800 dark:text-slate-100 font-semibold mb-1">{title}</p>
                  <p className="text-base text-slate-800 dark:text-slate-100">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            Each has different advantages, risks, and eligibility requirements. The debt consolidation calculator helps you
            model any of these scenarios.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does a Debt Consolidation Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator runs two sets of math side by side.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            <strong>Side A — Your Current Debt Situation:</strong>
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            It adds up your total balance, your total monthly payments, and calculates the total interest you&apos;ll pay if you
            continue your current payment plan at current rates.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            <strong>Side B — The Consolidation Loan:</strong>
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            It applies the standard loan amortization formula to the new loan amount, rate, and term — showing your new
            single monthly payment and total interest under the consolidation plan.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            <strong>The Gap Between A and B = Your Savings</strong>
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The result shows you whether consolidation makes financial sense — and by exactly how much.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Debt Consolidation Formula Explained
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Two formulas power the calculator.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">1. Loan Payment Formula (for the consolidation loan)</h3>
          <div className="formula-block">
            <pre>M = P × [r(1+r)^n] / [(1+r)^n - 1]</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">Where:</p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-5">
            {[
              ["M", "Monthly payment"],
              ["P", "Total consolidated loan amount"],
              ["r", "Monthly interest rate (APR ÷ 12)"],
              ["n", "Loan term in months"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-20 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">2. Total Interest Calculation</h3>
          <div className="formula-block">
            <pre>Total Interest = (M × n) - P</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            This shows the real cost of carrying the loan to its natural payoff.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">3. Current Debt Payoff Comparison</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            For each existing debt, the calculator estimates how long it would take to pay off at your current payment rate
            and what you&apos;d pay in total interest. It then compares that cumulative number to the consolidation loan&apos;s
            total interest.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            The difference is your potential savings.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP EXAMPLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step Debt Consolidation Calculation Example
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let&apos;s walk through a realistic scenario.
          </p>
          <div className="state-card">
            <h3>Situation</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Michelle has four debts she&apos;s been struggling to manage:
            </p>
            <table className="styled-table styled-table-plain">
              <thead>
                <tr>
                  <th className="dark:text-slate-100">Debt</th>
                  <th className="dark:text-slate-100">Balance</th>
                  <th className="dark:text-slate-100">APR</th>
                  <th className="dark:text-slate-100">Monthly Payment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Visa Credit Card", "$6,200", "22.99%", "$150"],
                  ["Mastercard", "$3,800", "19.99%", "$100"],
                  ["Personal Loan", "$4,500", "15.5%", "$135"],
                  ["Medical Bill", "$2,100", "0% (18mo) then 24%", "$90"],
                  ["Total", "$16,600", "Avg ~19.5%", "$475/month"],
                ].map(([debt, balance, apr, payment]) => (
                  <tr key={debt}>
                    <td className="dark:text-slate-100">{debt}</td>
                    <td className="dark:text-slate-100">{balance}</td>
                    <td className="dark:text-slate-100">{apr}</td>
                    <td className="dark:text-slate-100">{payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Step 1: Calculate Current Total Interest</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            At current payment rates, Michelle&apos;s debt payoff timeline stretches 4–6 years depending on the account. Her estimated
            total interest: approximately <strong>$6,800</strong> over that period.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Step 2: Model the Consolidation Loan</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A credit union offers her <strong>$16,600</strong> at <strong>9.5% APR</strong> for <strong>48 months</strong>.
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-6">
            <li>• Monthly rate: 9.5% ÷ 12 = 0.792% = 0.00792</li>
            <li>• Monthly payment: M ≈ <strong>$420.33</strong></li>
            <li>• Total paid: $420.33 × 48 = <strong>$20,175.84</strong></li>
            <li>• Total interest: <strong>$3,575.84</strong></li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Step 3: Compare</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th className="dark:text-slate-100"></th>
                <th className="dark:text-slate-100">Current Debts</th>
                <th className="dark:text-slate-100">Consolidation Loan</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Monthly Payment", "$475", "$420"],
                ["Monthly Savings", "", "$55"],
                ["Total Interest", "~$6,800", "$3,576"],
                ["Interest Savings", "", "~$3,224"],
                ["Payoff Timeline", "4–6 years (varies)", "Exactly 48 months"],
              ].map(([label, current, consolidation]) => (
                <tr key={label}>
                  <td className="dark:text-slate-100">{label}</td>
                  <td className="dark:text-slate-100">{current}</td>
                  <td className="dark:text-slate-100">{consolidation}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            Michelle saves <strong>$55 per month</strong>, <strong>$3,224 in total interest</strong>, and knows her exact debt-free
            date: 4 years from now. That predictability alone has serious psychological value.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── AMORTIZATION TABLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Sample Debt Payoff Comparison Table
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Here&apos;s how Michelle&apos;s consolidated loan amortizes over the first year:
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Month</th>
                <th className="dark:text-slate-100">Payment</th>
                <th className="dark:text-slate-100">Interest</th>
                <th className="dark:text-slate-100">Principal</th>
                <th className="dark:text-slate-100">Balance</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "$420.33", "$131.47", "$288.86", "$16,311.14"],
                ["2", "$420.33", "$129.19", "$291.14", "$16,020.00"],
                ["6", "$420.33", "$119.88", "$300.45", "$15,074.00"],
                ["12", "$420.33", "$108.27", "$312.06", "$13,572.00"],
                ["24", "$420.33", "$83.31", "$337.02", "$10,373.00"],
                ["36", "$420.33", "$55.36", "$364.97", "$6,750.00"],
                ["48", "$420.33", "$3.29", "$417.04", "$0.00"],
              ].map(([month, payment, interest, principal, balance]) => (
                <tr key={month}>
                  <td className="dark:text-slate-100">{month}</td>
                  <td className="dark:text-slate-100">{payment}</td>
                  <td className="dark:text-slate-100">{interest}</td>
                  <td className="dark:text-slate-100">{principal}</td>
                  <td className="dark:text-slate-100">{balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            By month 12, her balance has dropped over $3,000. By month 24, she&apos;s paid off more than $6,200. She sees real
            progress every single month — something that minimum credit card payments rarely deliver.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Debt Consolidation Examples
          </h2>

          <div className="state-card">
            <h3>Example 1: High-Interest Credit Cards — James, Good Credit (700 Score)</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              James has <strong>$22,000 in credit card debt</strong> across three cards at an average of <strong>21% APR</strong>. He&apos;s
              making $550/month in combined minimum payments — barely covering interest.
            </p>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              He qualifies for a personal consolidation loan at <strong>11.5% APR</strong> for <strong>60 months</strong>.
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
                  ["Total Balance", "$22,000", "$22,000"],
                  ["Monthly Payment", "$550", "$483"],
                  ["Time to Pay Off", "7+ years", "5 years"],
                  ["Total Interest", "~$14,200", "~$6,980"],
                  ["Savings", "", "~$7,220"],
                ].map(([label, cards, loan]) => (
                  <tr key={label}>
                    <td className="dark:text-slate-100">{label}</td>
                    <td className="dark:text-slate-100">{cards}</td>
                    <td className="dark:text-slate-100">{loan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              James saves over <strong>$7,200 in interest</strong> and gets out of debt two years earlier. This is debt consolidation
              working exactly as intended.
            </p>
          </div>

          <div className="state-card">
            <h3>Example 2: Balance Transfer — Sandra, Excellent Credit (750 Score)</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Sandra has <strong>$8,500 in credit card debt</strong> at <strong>23% APR</strong>. She qualifies for a balance transfer card
              with <strong>0% APR for 18 months</strong> and a <strong>3% transfer fee</strong>.
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-3">
              <li>• Transfer fee: $8,500 × 3% = <strong>$255</strong></li>
              <li>• Total to pay off: <strong>$8,755</strong></li>
              <li>• Monthly payment needed to clear in 18 months: <strong>~$486</strong></li>
            </ul>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              If she pays $486 consistently, she pays off $8,755 with zero interest — compared to $3,200+ in interest on the
              original card if she just made minimum payments. Total savings: roughly <strong>$3,000 net</strong> (after the
              transfer fee).
            </p>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              <strong>The catch:</strong> If she doesn&apos;t pay off the full balance in 18 months, the remaining balance typically
              gets hit with the card&apos;s standard APR (often 24–29%). Discipline is non-negotiable with balance transfers.
            </p>
          </div>

          <div className="state-card">
            <h3>Example 3: Poor Credit Consolidation — Tony, Fair Credit (610 Score)</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Tony has <strong>$9,000 in debt</strong> at an average of <strong>24% APR</strong>. His credit score limits him to a
              consolidation loan at <strong>19.9% APR</strong> for <strong>36 months</strong>.
            </p>
            <table className="styled-table">
              <thead>
                <tr>
                  <th className="dark:text-slate-100"></th>
                  <th className="dark:text-slate-100">Current Debts</th>
                  <th className="dark:text-slate-100">Consolidation Loan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Monthly Payment", "~$300", "$338"],
                  ["Total Interest", "~$4,800", "~$3,168"],
                  ["Payoff Timeline", "4+ years", "3 years"],
                  ["Savings", "", "~$1,632"],
                ].map(([label, current, consolidation]) => (
                  <tr key={label}>
                    <td className="dark:text-slate-100">{label}</td>
                    <td className="dark:text-slate-100">{current}</td>
                    <td className="dark:text-slate-100">{consolidation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              Tony&apos;s monthly payment actually goes <em>up</em> slightly — but he saves $1,632 in interest and pays off 12+
              months earlier. For poor-credit borrowers, consolidation may not lower the monthly payment, but it can still save
              significantly on total interest and establish a fixed payoff date.
            </p>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS THAT AFFECT SAVINGS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Debt Consolidation Savings
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Your Current Interest Rates</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                The bigger the gap between your current rates and the consolidation loan rate, the more you save. If you&apos;re
                paying 22–25% on credit cards and you can consolidate at 10%, the math is overwhelmingly in your favor. If your
                current debts are already at 8%, consolidation makes much less sense.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Your Credit Score</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Your credit score determines what consolidation rate you qualify for. Here&apos;s a realistic picture:
              </p>
              <table className="styled-table styled-table-plain">
                <thead>
                  <tr>
                    <th className="dark:text-slate-100">Credit Score</th>
                    <th className="dark:text-slate-100">Consolidation Loan APR Range</th>
                    <th className="dark:text-slate-100">Good Candidate for Consolidation?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["720+", "6% – 12%", "Excellent — maximum savings"],
                    ["680–719", "10% – 16%", "Yes — likely saves meaningfully"],
                    ["640–679", "14% – 20%", "Possibly — depends on current rates"],
                    ["600–639", "18% – 24%", "Marginal — calculate carefully"],
                    ["Below 600", "24%+ or denied", "May need other options"],
                  ].map(([score, range, candidate]) => (
                    <tr key={score}>
                      <td className="dark:text-slate-100">{score}</td>
                      <td className="dark:text-slate-100">{range}</td>
                      <td className="dark:text-slate-100">{candidate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Loan Term Length</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Longer terms = lower monthly payments, but more total interest. This is the classic tradeoff.
              </p>
              <table className="styled-table styled-table-plain">
                <thead>
                  <tr>
                    <th className="dark:text-slate-100">Consolidation: $20,000 at 10% APR</th>
                    <th className="dark:text-slate-100">Monthly Payment</th>
                    <th className="dark:text-slate-100">Total Interest</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["36 months", "$645", "$3,220"],
                    ["48 months", "$507", "$4,336"],
                    ["60 months", "$425", "$5,496"],
                    ["72 months", "$370", "$6,640"],
                  ].map(([term, monthly, interest]) => (
                    <tr key={term}>
                      <td className="dark:text-slate-100">{term}</td>
                      <td className="dark:text-slate-100">{monthly}</td>
                      <td className="dark:text-slate-100">{interest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
                The 36-month loan costs $3,420 less in interest than the 72-month option. Use the debt repayment calculator to
                find the shortest term that fits your real budget.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Origination Fees</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Some lenders charge origination fees of 1–6% of the loan amount. On a $15,000 loan, that&apos;s $150–$900. Always
                factor this into your savings calculation. If the fee wipes out your first year of interest savings, it might not
                be worth consolidating with that particular lender.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Debt-to-Income Ratio (DTI)</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Lenders evaluate your DTI to determine eligibility. If your monthly debt obligations already consume 45%+ of
                your gross income, qualifying for a consolidation loan at a good rate becomes difficult. Reducing one or two
                debts before applying can help.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Whether You Stop Using Credit Cards</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                This one&apos;s behavioral, not mathematical — but it&apos;s critical. Consolidating credit card debt only to run
                those cards back up is one of the most common (and expensive) debt mistakes Americans make. The consolidation
                loan pays off the cards; it doesn&apos;t close them. Discipline is required.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Using a Debt Consolidation Calculator
          </h2>
          <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              "Reality check before you commit — See whether consolidation genuinely saves you money, not just shifts it",
              "Instant comparison — Current debt scenario vs. consolidation side by side in seconds",
              "Interest savings visibility — Total cost of each option, not just the monthly number",
              "Payoff date clarity — Know exactly when you&apos;ll be debt-free",
              "Term optimization — Test 36, 48, and 60-month scenarios to find your sweet spot",
              "Multiple strategy comparison — Model a personal loan, balance transfer, AND a debt management plan",
              "Confidence before applying — No hard credit inquiry needed to run the numbers",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── COMPARISON WITH OTHER OPTIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Debt Consolidation vs. Other Debt Relief Options
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Not every debt situation calls for consolidation. Here&apos;s how it compares to the alternatives:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Debt Consolidation Loan</h3>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Best for:</strong> Borrowers with good-to-excellent credit who qualify for a meaningfully lower interest rate than their current debt.</p>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Pros:</strong> Fixed payments, fixed payoff date, potential significant interest savings, simple one-payment structure.</p>
              <p className="text-base text-slate-800 dark:text-slate-100"><strong>Cons:</strong> Requires good credit for best rates, origination fees possible, doesn&apos;t reduce total debt owed, risk of running up credit cards again.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Balance Transfer Credit Card</h3>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Best for:</strong> Borrowers with excellent credit who can realistically pay off the balance within the promotional period.</p>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Pros:</strong> 0% APR promotional period can be powerful, minimal fees (3–5% transfer fee), no fixed term requirement.</p>
              <p className="text-base text-slate-800 dark:text-slate-100"><strong>Cons:</strong> Promotional period ends (often 12–21 months), remaining balance hit with high standard APR, requires discipline, balance transfer fees add up.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Home Equity Loan or HELOC</h3>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Best for:</strong> Homeowners with significant equity who need to consolidate large amounts of debt and can handle the additional risk.</p>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Pros:</strong> Lowest interest rates available (often 7–9%), large amounts possible, tax-deductible interest in some cases.</p>
              <p className="text-base text-slate-800 dark:text-slate-100"><strong>Cons:</strong> Your home is collateral — default means foreclosure, closing costs can be $2,000–$5,000, turns unsecured debt into secured debt.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Debt Management Plan (DMP)</h3>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Best for:</strong> Borrowers who don&apos;t qualify for a consolidation loan at a reasonable rate but have steady income.</p>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Pros:</strong> Non-profit credit counseling agencies negotiate reduced rates with creditors, structured repayment plan, no new loan needed.</p>
              <p className="text-base text-slate-800 dark:text-slate-100"><strong>Cons:</strong> Takes 3–5 years, requires closing credit card accounts (temporarily hurts credit score), monthly agency fee ($25–$75), creditors must agree.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Debt Settlement</h3>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Best for:</strong> Borrowers already behind on payments, facing collections, and with no path to full repayment.</p>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Pros:</strong> Can reduce total balance owed, avoids bankruptcy.</p>
              <p className="text-base text-slate-800 dark:text-slate-100"><strong>Cons:</strong> Severely damages credit score, settled debt is often taxable as income, no guarantee creditors will accept, some settlement companies are predatory.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Bankruptcy</h3>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Best for:</strong> Borrowers with overwhelming debt and no realistic path to repayment.</p>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Pros:</strong> Legal discharge of qualifying debts, immediate relief from collection calls, fresh start.</p>
              <p className="text-base text-slate-800 dark:text-slate-100"><strong>Cons:</strong> Stays on credit report 7–10 years, major credit score damage, affects ability to get loans/housing/jobs, not all debts are dischargeable.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Quick Comparison Table</h3>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Option</th>
                <th className="dark:text-slate-100">Credit Required</th>
                <th className="dark:text-slate-100">Risk to Assets</th>
                <th className="dark:text-slate-100">Credit Score Impact</th>
                <th className="dark:text-slate-100">Best Use Case</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Consolidation Loan", "Good–Excellent", "None", "Minimal (if paid on time)", "High-rate unsecured debt"],
                ["Balance Transfer", "Excellent", "None", "Minimal", "Credit card debt, short payoff window"],
                ["Home Equity Loan", "Good + Equity", "Home", "Minimal", "Large debt, homeowners only"],
                ["Debt Management Plan", "Any", "None", "Moderate (short-term)", "Can&apos;t qualify for loan"],
                ["Debt Settlement", "Poor OK", "None", "Severe", "Collections, can&apos;t repay in full"],
                ["Bankruptcy", "N/A", "Varies", "Severe", "Overwhelming, unmanageable debt"],
              ].map(([option, credit, risk, impact, use]) => (
                <tr key={option}>
                  <td className="dark:text-slate-100">{option}</td>
                  <td className="dark:text-slate-100">{credit}</td>
                  <td className="dark:text-slate-100">{risk}</td>
                  <td className="dark:text-slate-100">{impact}</td>
                  <td className="dark:text-slate-100">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <hr className="rule-divider" />

        {/* ── SNOWBALL VS AVALANCHE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Debt Repayment Strategies: Snowball vs. Avalanche
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            If you&apos;re not consolidating — or while you wait to qualify — these two methods are worth knowing.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Debt Snowball Method</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-2">
                Pay minimums on everything. Put any extra money toward the <strong>smallest balance first</strong>. When that&apos;s paid
                off, roll that payment to the next smallest.
              </p>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Why it works:</strong> Quick wins build momentum and keep you motivated.</p>
              <p className="text-base text-slate-800 dark:text-slate-100"><strong>Mathematical downside:</strong> You may pay more in total interest because you&apos;re ignoring rates.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Debt Avalanche Method</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-2">
                Pay minimums on everything. Put any extra money toward the <strong>highest-interest debt first</strong>. When that&apos;s
                paid off, attack the next highest rate.
              </p>
              <p className="text-base text-slate-800 dark:text-slate-100 mb-2"><strong>Why it works:</strong> Mathematically optimal — you pay the least total interest.</p>
              <p className="text-base text-slate-800 dark:text-slate-100"><strong>Behavioral downside:</strong> If the highest-rate debt has a large balance, you might not see results quickly, making it hard to stick with.</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            <strong>Which is &quot;better&quot;?</strong> The one you&apos;ll actually follow. Many people start with the avalanche for large,
            high-rate debts and use snowball psychology for smaller remaining balances.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            A debt payoff calculator can model both methods for your specific debt mix and show you the total cost difference.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Debt Consolidation Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Consolidating Without Fixing the Spending Pattern</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                The #1 mistake. If overspending or financial emergencies caused the debt, consolidation buys time but doesn&apos;t
                fix the root problem. Without a budget or emergency fund, the credit cards get maxed out again within a year or
                two.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Choosing a Longer Term Just for a Lower Monthly Payment</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                A 72-month consolidation loan has a lower payment than a 48-month one — but could cost $2,000–$4,000 more in
                interest. Pick the shortest term your budget can genuinely handle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Not Shopping Multiple Lenders</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Consolidation loan rates vary significantly. A borrower with a 700 score might get 9% from a credit union and 15%
                from an online lender. That 6% gap on a $20,000 loan over 5 years is roughly $3,600 in additional interest. Shop at
                least three lenders, including credit unions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Ignoring Fees</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Origination fees of 3–6% on a large loan are real money. A $500 origination fee on a loan where you&apos;re saving
                $400/year in interest means you don&apos;t break even for 15 months. Calculate the <em>net</em> savings after fees.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Using Home Equity to Pay Off Credit Cards Without Changing Behavior</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Home equity loans convert unsecured debt into debt secured by your house. If you run up the credit cards again
                after consolidating, you now have <em>two</em> debt problems — and one of them risks your home. This is a serious
                risk that gets underestimated.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Applying for Multiple Loans Simultaneously</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Each hard credit inquiry drops your score a few points. Too many in a short window signals financial distress to
                lenders. Do your research first, identify your top two or three options, then apply within a focused window.
                Most credit bureaus treat multiple loan inquiries within 14–45 days as a single inquiry for scoring purposes.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── USA SPECIFIC INFO ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            USA-Specific Debt Consolidation Information
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">American Debt Landscape (2024–2025)</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                The average American household carries significant debt across multiple categories:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
                <li>• <strong>Credit card debt:</strong> The average credit card balance for U.S. households with debt has been above $6,000, with average APRs pushing 20–22%</li>
                <li>• <strong>Personal loan debt:</strong> Growing category, with average balances around $11,000–$14,000</li>
                <li>• <strong>Medical debt:</strong> Estimated 1 in 10 Americans carry some form of medical debt; a uniquely American burden that&apos;s a top reason for debt consolidation inquiries</li>
                <li>• <strong>Student loan debt:</strong> Often consolidatable separately through federal programs; private student loans can sometimes be included in personal consolidation</li>
              </ul>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Total consumer debt in the U.S. exceeded <strong>$17 trillion</strong> in 2024 — a record. High credit card rates
                (averaging above 20% following the Fed&apos;s rate hikes) have made interest costs punishing for revolving debt holders.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Consumer Protections</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                The Consumer Financial Protection Bureau (CFPB) regulates the personal lending industry and provides resources for
                borrowers. Key protections include:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
                <li>• <strong>Truth in Lending Act (TILA)</strong> — Lenders must disclose the APR, total interest, and total repayment amount before you sign</li>
                <li>• <strong>Fair Debt Collection Practices Act (FDCPA)</strong> — Protects you from abusive collection practices if debts are already in collections</li>
                <li>• <strong>State usury laws</strong> — Vary by state; some states cap personal loan rates, which affects what consolidation loans look like from state-chartered lenders</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Nonprofit Credit Counseling</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                If you&apos;re struggling to qualify for a consolidation loan, a <strong>nonprofit credit counseling agency</strong> can help.
                Organizations accredited by the <strong>National Foundation for Credit Counseling (NFCC)</strong> offer free or low-cost
                debt management plans, budgeting help, and financial coaching.
              </p>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Avoid for-profit debt settlement companies that advertise aggressively — their fee structures can leave you worse
                off than you started.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Tax Implications</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Consolidation loan interest is generally <strong>not tax-deductible</strong> for unsecured personal loans. However:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
                <li>• <strong>Home equity loan interest</strong> may be deductible if the loan is used for qualified home improvements (not general debt payoff, under current tax law)</li>
                <li>• <strong>Forgiven debt</strong> in a settlement may be reported as taxable income on a 1099-C form</li>
              </ul>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
                Consult a tax professional if you&apos;re considering home equity consolidation or debt settlement with significant
                amounts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">What Debts Can Be Consolidated?</h3>
              <div className="aside-callout">
                <strong>Most unsecured debts can be included in a personal consolidation loan: credit cards, personal loans, medical
                bills, utility arrears, and sometimes payday loans. Secured debts like mortgages and auto loans generally cannot
                be included unless you&apos;re using a home equity product.</strong>
              </div>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                What typically can&apos;t be consolidated into a standard personal loan:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
                <li>• Federal student loans (use federal consolidation programs instead)</li>
                <li>• Back taxes (IRS installment plans are separate)</li>
                <li>• Child support or alimony arrears</li>
                <li>• Secured auto or mortgage loans</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── IMPROVE CHANCES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve Your Chances of Qualifying for a Consolidation Loan
          </h2>
          <div className="space-y-3">
            {[
              "Know your credit score before applying — Use a free service like Credit Karma or your bank&apos;s credit score tool to see where you stand",
              "Check your credit report for errors — Dispute any inaccuracies at AnnualCreditReport.com before applying",
              "Lower your credit utilization — Pay down card balances if possible; utilization above 30% drags your score",
              "Consider a co-signer — A creditworthy co-signer can help you qualify for a lower rate",
              "Try a credit union first — They&apos;re more flexible on underwriting, especially for existing members",
              "Get pre-qualified with a soft pull — Many lenders offer rate estimates without a hard inquiry, letting you shop without score damage",
            ].map((tip, i) => (
              <div key={i} className="numbered-section">
                <span className="num">{i + 1}</span>
                <p className="flex-1 text-base text-slate-800 dark:text-slate-100">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQs ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            FAQs: Debt Consolidation Calculator
          </h2>
          {[
            {
              q: "What is debt consolidation?",
              a: "Debt consolidation is combining multiple debts — usually high-interest credit cards or personal loans — into a single new loan with one monthly payment. The goal is typically a lower interest rate, simplified payments, and a fixed payoff timeline.",
            },
            {
              q: "How does a debt consolidation calculator work?",
              a: "You enter your current debts (balances, rates, monthly payments) and the proposed consolidation loan details (amount, APR, term). The calculator compares your current total interest costs against the consolidation loan&apos;s total interest, showing you your net savings and how much faster you&apos;d be debt-free.",
            },
            {
              q: "Is debt consolidation a good idea?",
              a: "It depends on two things: whether you qualify for a meaningfully lower rate, and whether you&apos;ll change the behavior that created the debt. If you can consolidate 20%+ credit card debt into a 10% personal loan, the math strongly favors consolidation. If the new rate is close to your current rate, or if you&apos;ll run up the credit cards again, the benefit shrinks fast.",
            },
            {
              q: "Does debt consolidation hurt your credit score?",
              a: "Initially, applying for a consolidation loan causes a small, temporary dip from the hard inquiry (typically 5–10 points). But the long-term effect is usually positive: on-time payments build positive history, and paying off multiple credit cards reduces your credit utilization ratio — one of the most impactful factors in your score.",
            },
            {
              q: "How much can debt consolidation save?",
              a: "It varies dramatically by situation. On $20,000 in credit card debt at 22% consolidated into a 48-month personal loan at 10%, you could save $7,000+ in interest. On smaller amounts or smaller rate differences, savings are proportionally smaller. The debt savings calculator shows your specific numbers in seconds.",
            },
            {
              q: "What debts can be consolidated?",
              a: "Most unsecured debts — credit cards, personal loans, medical bills, payday loans — can be included in a personal consolidation loan. Federal student loans have their own consolidation programs. Secured debts like mortgages and car loans typically can&apos;t be included in a personal consolidation loan.",
            },
            {
              q: "Is a balance transfer better than a consolidation loan?",
              a: "It depends on your credit, your balance, and your ability to pay it off quickly. If you have excellent credit, a balance under $15,000–$20,000, and can pay it off within 12–18 months, a 0% balance transfer card can save more than a consolidation loan. If you need longer to pay off, or if you don&apos;t qualify for a 0% card, a consolidation loan is typically the better choice.",
            },
            {
              q: "How do I qualify for a debt consolidation loan?",
              a: "Lenders evaluate your credit score, income, debt-to-income ratio, and payment history. Most traditional lenders prefer a score of 640 or above for personal consolidation loans. Credit unions and some online lenders work with lower scores. Having a steady income, low DTI, and few recent delinquencies all improve your chances.",
            },
            {
              q: "What is the difference between debt consolidation and debt settlement?",
              a: "Debt consolidation restructures your debt through a new loan — you still pay the full balance, just at a lower rate. Debt settlement involves negotiating with creditors to accept less than you owe. Settlement can reduce your total debt but severely damages your credit score and may leave you with a tax liability on forgiven amounts.",
            },
            {
              q: "Can debt consolidation get me out of debt faster?",
              a: "Yes — in most cases. Because more of each payment goes to principal (rather than interest), you build equity faster and pay off the debt sooner. In the earlier example, Michelle went from a 4–6 year unclear timeline to a fixed 48-month payoff. That clarity and speed is one of consolidation&apos;s real benefits.",
            },
            {
              q: "What is a debt management plan?",
              a: "A debt management plan (DMP) is an alternative to a consolidation loan, administered by a nonprofit credit counseling agency. They negotiate reduced interest rates with your creditors and set up a 3–5 year repayment plan. You make a single payment to the agency, which distributes funds to creditors. There&apos;s usually a small monthly fee, and you typically must close the credit card accounts involved.",
            },
            {
              q: "Should I use home equity to consolidate credit card debt?",
              a: "Only with significant caution. Home equity loans or HELOCs offer the lowest rates — but they convert unsecured debt (credit cards) into debt secured by your house. If you can&apos;t make the payments, you risk foreclosure. This option makes sense only if you have disciplined spending habits and a clear repayment plan.",
            },
            {
              q: "How does consolidation affect my credit utilization?",
              a: "Paying off credit cards with a consolidation loan drops your credit utilization ratio — the percentage of available revolving credit you&apos;re using — often dramatically. Since utilization accounts for about 30% of your FICO score, this can produce a meaningful credit score boost within 1–2 billing cycles.",
            },
            {
              q: "Are there fees to watch out for in debt consolidation?",
              a: "Yes. Common fees include origination fees (1–6% of the loan), balance transfer fees (3–5% of transferred amount), and prepayment penalties (rare but check). Always calculate your net savings after fees — not just the rate difference — to confirm consolidation is worth it.",
            },
            {
              q: "What&apos;s the best way to avoid getting into debt again after consolidating?",
              a: "Build an emergency fund of $1,000–$3,000 before you&apos;re tempted to fall back on credit cards for unexpected expenses. Create a real monthly budget. Consider freezing or cutting up the credit cards whose balances you just paid off — keep the accounts open for credit score purposes, but remove the temptation. Automate your consolidation loan payment so you never miss one.",
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="faq-item">
              <h3>{q}</h3>
              <p className="text-base text-slate-800 dark:text-slate-100">{a}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Tips for Getting Out of Debt Faster After Consolidating
          </h2>
          <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              "Set up autopay — Most lenders offer 0.25% rate discounts for autopay, and it eliminates missed payment risk",
              "Round up your payment — If your payment is $420, pay $450 or $500. That extra goes straight to principal",
              "Put windfalls toward the balance — Tax refunds, bonuses, gifts. Even one extra $500 payment per year can shave months off a 48-month loan",
              "Don&apos;t add new debt — Leave the paid-off credit card accounts open (for score purposes) but stop using them",
              "Track your progress — Watching your balance drop is motivating. Check your amortization schedule monthly",
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
            Debt consolidation isn&apos;t magic. It doesn&apos;t reduce what you owe, and it doesn&apos;t fix a spending problem by itself.
            But for millions of Americans carrying high-interest debt across multiple accounts, it&apos;s one of the most practical
            and financially effective tools available.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The debt consolidation calculator takes the guesswork out of the decision. You can see in 60 seconds whether
            consolidation saves you $500 or $7,000, whether your payoff date moves from 2030 to 2027, and whether a balance
            transfer or personal loan serves you better given your specific balances and credit profile.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Run your own numbers. Compare your options. And if consolidation makes sense — it does for a lot of people — go
            into it with a clear budget and a commitment to not building the same debt back up again.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            That&apos;s how it becomes a turning point instead of just a reshuffling of numbers.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── RELATED CALCULATORS ── */}
        <section className="mb-8">
          <p className="text-base text-slate-600 dark:text-slate-400 italic">
            Want to explore all your options? Check out our standard loan calculator, credit union loan calculator, and debt
            payoff planner to build a complete picture of your path to being debt-free.
          </p>
        </section>

      </div>
    </article>
  );
}
