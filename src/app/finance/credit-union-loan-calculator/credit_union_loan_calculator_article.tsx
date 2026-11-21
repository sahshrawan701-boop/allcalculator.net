import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CreditUnionLoanCalculatorArticle() {
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
          <span className="meta-tag">Personal Finance · Borrowing</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Credit Union Loan Calculator: Estimate Your Payment and See How Much You Could Save
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for US borrowers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            A friend mentions he just got a personal loan at 8.5% through his credit union. You&apos;re currently paying 17% on a
            loan from your bank. Same credit score. Same income. Same state. Different lender — and a difference of thousands
            of dollars in interest.
          </p>
          <p className="mb-5">
            That&apos;s not a fluke. Credit unions routinely offer lower loan rates, lower fees, and more flexible underwriting
            than traditional banks. And yet millions of Americans still default to big banks simply because they don&apos;t
            realize what they&apos;re missing.
          </p>
          <p className="mb-5">
            Before you borrow anywhere, it&apos;s worth running your numbers through a credit union loan calculator. Plug in your
            loan amount, rate, and term — and see what a credit union&apos;s competitive rates actually do to your monthly
            payment and total cost. The difference might surprise you.
          </p>
          <p>
            Let&apos;s walk through exactly how it works, what affects your payment, and how credit unions stack up against every
            other lending option in the U.S.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS A CREDIT UNION LOAN CALCULATOR ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Credit Union Loan Calculator?
          </h2>
          <div className="aside-callout">
            <strong>A credit union loan calculator is a tool that estimates your monthly loan payment based on the loan
            amount, interest rate, and repayment term — using the same competitive rates credit unions typically offer
            their members.</strong>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            It works the same way as any loan payment calculator, but the goal is to model the specifically favorable rates
            credit unions are known for, so you can compare them directly against bank or online lender quotes.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            You&apos;ll typically input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Loan amount", "How much you want to borrow"],
              ["Annual interest rate (APR)", "The rate your credit union offers"],
              ["Loan term", "Repayment period in months"],
              ["Loan type", "Personal, auto, mortgage, etc. (some calculators offer type-specific presets)"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then outputs:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
            <li>• Your estimated monthly payment</li>
            <li>• Total amount you&apos;ll repay</li>
            <li>• Total interest paid over the loan term</li>
            <li>• Sometimes a full amortization schedule</li>
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            Use it to model different rate scenarios, compare terms, and stress-test whether a payment fits your real budget
            — before you ever submit an application.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS A CREDIT UNION LOAN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Credit Union Loan?
          </h2>
          <div className="aside-callout">
            <strong>A credit union loan is a loan made by a federally or state-chartered credit union to one of its members.
            Because credit unions are nonprofit, member-owned financial cooperatives, they return profits to members through
            lower loan rates, higher savings rates, and reduced fees.</strong>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Credit unions offer virtually every loan type a bank does:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Personal loans", "Unsecured loans for any purpose"],
              ["Auto loans", "New and used vehicle financing"],
              ["Mortgage loans", "Home purchase and refinance"],
              ["Home equity loans and HELOCs", "Secured borrowing against home value"],
              ["Debt consolidation loans", "Combining multiple debts into one payment"],
              ["Credit-builder loans", "Designed to help thin-credit or poor-credit borrowers establish history"],
              ["Emergency loans", "Small, fast-access personal loans for urgent needs"],
            ].map(([type, desc]) => (
              <li key={type} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{type}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            The difference from a bank: credit unions aren&apos;t trying to maximize shareholder returns. Their structure allows
            them to pass savings on to borrowers in the form of lower rates and fees.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does a Credit Union Loan Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The math behind the credit union loan calculator is the same standard amortization formula used across all
            installment lending. The calculation takes your principal, applies your interest rate on a monthly basis, and
            spreads payments evenly across the loan term.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Each payment covers:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>1. <strong>Interest</strong> — The monthly cost of carrying the outstanding balance</li>
            <li>2. <strong>Principal</strong> — The portion that actually reduces what you owe</li>
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Early in the loan, most of each payment goes to interest. Over time, the balance shrinks and more of each payment
            attacks the principal. By the final payment, almost everything goes to principal.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The key variable — the one that sets credit union loans apart — is the interest rate itself. Because credit
            unions cap their rates through regulatory limits (federally chartered credit unions are capped at <strong>18%
            APR</strong>) and because their nonprofit structure incentivizes competitive pricing, the same borrower typically
            gets a meaningfully lower rate at a credit union than at a bank or online lender.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Credit Union Loan Formula Explained
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The formula powering the credit union loan calculator:
          </p>
          <div className="formula-block">
            <pre>M = P × [r(1+r)^n] / [(1+r)^n - 1]</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">Where:</p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-5">
            {[
              ["M", "Monthly payment"],
              ["P", "Loan principal (amount borrowed)"],
              ["r", "Monthly interest rate (annual APR ÷ 12)"],
              ["n", "Total number of monthly payments"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-20 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Quick example:</p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Borrowing $15,000 at <strong>7% APR</strong> from a credit union for <strong>48 months</strong>:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• Monthly rate (r): 7% ÷ 12 = 0.5833% = 0.005833</li>
            <li>• n = 48</li>
            <li>• <strong>M ≈ $358.94/month</strong></li>
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The same loan at <strong>13% APR</strong> through a bank:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• <strong>M ≈ $401.12/month</strong></li>
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            That&apos;s $42 more per month — and <strong>$2,034 more in total interest</strong> over four years. Same borrower. Same
            loan amount. Just a different lender.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP EXAMPLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step Credit Union Loan Calculation Example
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let&apos;s run through a complete example so you can see how the credit union payment calculator works in practice.
          </p>
          <div className="state-card">
            <h3>Scenario</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Angela needs $20,000 to consolidate credit card debt. She&apos;s a member of a local credit union that&apos;s offering
              <strong>8.25% APR</strong> for a <strong>36-month</strong> personal loan. Her bank quoted her <strong>14.99% APR</strong> for the
              same amount and term.
            </p>
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Credit Union Option</h3>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Step 1: Identify inputs</p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• Principal: $20,000</li>
            <li>• Monthly rate: 8.25% ÷ 12 = 0.6875% = 0.006875</li>
            <li>• Term: 36 months</li>
          </ul>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Step 2: Calculate monthly payment</p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• M ≈ <strong>$628.89/month</strong></li>
          </ul>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Step 3: Calculate total cost</p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-6">
            <li>• Total paid: $628.89 × 36 = <strong>$22,640.04</strong></li>
            <li>• Total interest: $22,640.04 – $20,000 = <strong>$2,640.04</strong></li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Bank Option</h3>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-6">
            <li>• Monthly rate: 14.99% ÷ 12 = 1.249% = 0.01249</li>
            <li>• M ≈ <strong>$693.22/month</strong></li>
            <li>• Total paid: $693.22 × 36 = <strong>$24,955.92</strong></li>
            <li>• Total interest: <strong>$4,955.92</strong></li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Side-by-Side Comparison</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th className="dark:text-slate-100"></th>
                <th className="dark:text-slate-100">Credit Union</th>
                <th className="dark:text-slate-100">Bank</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Loan Amount", "$20,000", "$20,000"],
                ["APR", "8.25%", "14.99%"],
                ["Monthly Payment", "$628.89", "$693.22"],
                ["Total Interest", "$2,640.04", "$4,955.92"],
                ["Total Savings", "", "$2,315.88"],
              ].map(([label, cu, bank]) => (
                <tr key={label}>
                  <td className="dark:text-slate-100">{label}</td>
                  <td className="dark:text-slate-100">{cu}</td>
                  <td className="dark:text-slate-100">{bank}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            Angela saves <strong>$2,316</strong> by choosing her credit union. That&apos;s money she can direct to savings, an
            emergency fund, or paying off the loan faster.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── AMORTIZATION TABLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Sample Amortization Table
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Here&apos;s how Angela&apos;s credit union loan breaks down month by month (selected periods):
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
                ["1", "$628.89", "$137.50", "$491.39", "$19,508.61"],
                ["2", "$628.89", "$134.12", "$494.77", "$19,013.84"],
                ["6", "$628.89", "$120.10", "$508.79", "$17,430.00"],
                ["12", "$628.89", "$100.78", "$528.11", "$14,590.00"],
                ["18", "$628.89", "$80.02", "$548.87", "$11,603.00"],
                ["24", "$628.89", "$57.68", "$571.21", "$8,454.00"],
                ["30", "$628.89", "$33.63", "$595.26", "$5,132.00"],
                ["36", "$628.89", "$4.19", "$624.70", "$0.00"],
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
            By month 12, her balance has dropped from $20,000 to about $14,590. The interest portion shrinks steadily with
            every payment.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Borrowing Examples
          </h2>

          <div className="state-card">
            <h3>Example 1: Auto Loan — Derek, Excellent Credit (740 Score)</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Derek is financing a <strong>2023 Honda Accord</strong> at <strong>$31,000</strong> in Columbus, Ohio. He&apos;s shopping
              rates and comparing a bank offer against his credit union.
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-3">
              <li>• Credit union offer: <strong>5.4% APR</strong>, 60 months</li>
              <li>• Bank offer: <strong>7.9% APR</strong>, 60 months</li>
            </ul>
            <table className="styled-table">
              <thead>
                <tr>
                  <th className="dark:text-slate-100"></th>
                  <th className="dark:text-slate-100">Credit Union</th>
                  <th className="dark:text-slate-100">Bank</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Monthly Payment", "$590", "$626"],
                  ["Total Interest", "$4,400", "$6,560"],
                  ["Savings", "", "$2,160"],
                ].map(([label, cu, bank]) => (
                  <tr key={label}>
                    <td className="dark:text-slate-100">{label}</td>
                    <td className="dark:text-slate-100">{cu}</td>
                    <td className="dark:text-slate-100">{bank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              Derek finances through his credit union. Over five years, he saves more than $2,100 in interest — enough to
              cover a year of car insurance.
            </p>
          </div>

          <div className="state-card">
            <h3>Example 2: Personal Loan — Rosa, Average Credit (660 Score)</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Rosa&apos;s furnace quit in January. She needs <strong>$6,500</strong> urgently and has a credit score in the mid-660s.
              Her bank declines her or offers 20%+ APR. Her credit union, which knows her payment history as a member, approves her
              at <strong>11.5% APR</strong> for <strong>36 months</strong>.
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-3">
              <li>• Monthly payment: <strong>$214.28</strong></li>
              <li>• Total interest: <strong>$1,714.08</strong></li>
              <li>• Bank alternative (if approved at 20%): Monthly $242, total interest $2,712</li>
            </ul>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              Rosa&apos;s credit union membership saves her nearly <strong>$1,000</strong> — and gets her an approval the bank
              wouldn&apos;t give her.
            </p>
          </div>

          <div className="state-card">
            <h3>Example 3: Debt Consolidation — Brian, Poor Credit (590 Score)</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Brian has $12,000 in credit card debt at 24% average APR. His score is 590 — below what most banks will touch
              for personal loans. He joins a community credit union through his employer and qualifies for a
              <strong>credit-builder-style consolidation loan at 15.9% APR</strong> for <strong>48 months</strong>.
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-3">
              <li>• Monthly payment: <strong>$337.24</strong></li>
              <li>• Total interest: <strong>$3,787.52</strong></li>
              <li>• Previous credit card minimum payments: <strong>~$450/month</strong> (mostly interest, never shrinking)</li>
            </ul>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              Brian cuts his monthly outflow, stops the credit card interest spiral, and builds installment loan history
              simultaneously. The credit union loan calculator helped him see the full picture before committing.
            </p>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS THAT AFFECT PAYMENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Your Credit Union Loan Payment
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Credit Score</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Credit unions use your credit score — but they often look beyond it. Many will consider your membership tenure,
                direct deposit history, and overall relationship with the institution. That said, a higher score still gets
                you a better rate.
              </p>
              <table className="styled-table styled-table-plain">
                <thead>
                  <tr>
                    <th className="dark:text-slate-100">Credit Score Range</th>
                    <th className="dark:text-slate-100">Typical Credit Union APR (Personal Loan)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["720 – 850", "6% – 10%"],
                    ["680 – 719", "9% – 13%"],
                    ["640 – 679", "12% – 16%"],
                    ["580 – 639", "15% – 18%"],
                    ["Below 580", "May require co-signer or credit-builder loan"],
                  ].map(([range, apr]) => (
                    <tr key={range}>
                      <td className="dark:text-slate-100">{range}</td>
                      <td className="dark:text-slate-100">{apr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
                Note: Federal credit unions are capped at <strong>18% APR</strong> on most loans. That ceiling alone protects
                members from the predatory rates that some banks and nearly all payday lenders charge.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Loan Amount</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Bigger loan = higher payment and more interest over time. Borrow what you need — not what you qualify for.
                The credit union loan calculator makes it easy to test different amounts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Interest Rate</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                The rate reflects your credit risk. Credit unions typically offer lower rates than banks for the same credit
                profile, but your score, income, and DTI ratio all influence the specific offer you receive.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Loan Term</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Longer terms = lower monthly payments, but significantly more total interest. Shorter terms = higher payments,
                but you get out of debt faster and cheaper.
              </p>
              <table className="styled-table styled-table-plain">
                <thead>
                  <tr>
                    <th className="dark:text-slate-100">Loan: $15,000 at 8% APR</th>
                    <th className="dark:text-slate-100">Monthly Payment</th>
                    <th className="dark:text-slate-100">Total Interest</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["24 months", "$678", "$1,272"],
                    ["36 months", "$470", "$1,920"],
                    ["48 months", "$366", "$2,568"],
                    ["60 months", "$304", "$3,240"],
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
                Same loan. The 60-month option costs $1,968 more in interest than the 24-month option. The credit union
                lending calculator makes this comparison instant.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Debt-to-Income Ratio (DTI)</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Like all lenders, credit unions want to know your debt load relative to your income. Most prefer a DTI below
                <strong>40–45%</strong>.
              </p>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Calculate yours: Add up monthly debt payments ÷ gross monthly income × 100.
              </p>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                If you earn $5,000/month and owe $1,800 in monthly debt (including the proposed new loan), your DTI is 36% —
                within acceptable range for most credit unions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Membership Relationship</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Some credit unions factor in how long you&apos;ve been a member, whether you have direct deposit with them, your
                savings account history, and your overall banking relationship. This &quot;soft&quot; underwriting is part of what
                makes credit unions more flexible than algorithmic bank systems.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Using a Credit Union Loan Calculator
          </h2>
          <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              "No hard inquiry required — The calculator is just math. No credit check, no application",
              "See the rate advantage instantly — Compare credit union rates against bank quotes in real time",
              "Total cost transparency — Interest paid over the life of the loan is right there",
              "Loan term optimization — Find the shortest term you can comfortably afford",
              "Scenario planning — Model what happens if you get a rate 2% better than expected",
              "Extra payment impact — Some calculators show how additional payments cut your term and interest",
              "Pre-application confidence — Walk into the credit union knowing exactly what to ask for",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── COMPARISON TABLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Credit Union Loans vs. Bank Loans vs. Online Lenders
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            This is where the credit union advantage gets concrete.
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Feature</th>
                <th className="dark:text-slate-100">Credit Union</th>
                <th className="dark:text-slate-100">Traditional Bank</th>
                <th className="dark:text-slate-100">Online Lender</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ownership Structure", "Nonprofit, member-owned", "For-profit, shareholder-owned", "For-profit"],
                ["Rate Competitiveness", "Excellent", "Moderate", "Varies widely"],
                ["APR Cap (federal CUs)", "18%", "None", "None"],
                ["Fees", "Low to none", "Moderate to high", "Varies"],
                ["Approval Flexibility", "Higher (relationship-based)", "Lower (algorithm-based)", "Varies"],
                ["Membership Required", "Yes", "No", "No"],
                ["Approval Speed", "1–3 days", "1–5 days", "Same day to 3 days"],
                ["Branch Access", "Limited", "Extensive", "Online only"],
                ["Credit Score Flexibility", "More flexible", "Less flexible", "Depends on lender"],
              ].map(([feature, cu, bank, online]) => (
                <tr key={feature}>
                  <td className="dark:text-slate-100">{feature}</td>
                  <td className="dark:text-slate-100">{cu}</td>
                  <td className="dark:text-slate-100">{bank}</td>
                  <td className="dark:text-slate-100">{online}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            Credit unions win on rate and flexibility. Banks win on branch access and brand recognition. Online lenders win on
            speed and accessibility — but sometimes at significantly higher cost.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── ONLINE LENDERS COMPARISON ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Credit Unions vs. Online Lenders: A Closer Look
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Online lenders have exploded in popularity because they&apos;re fast and accessible. But fast doesn&apos;t always mean
            cheap.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Take a $10,000 personal loan over 48 months:
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Lender Type</th>
                <th className="dark:text-slate-100">Typical APR</th>
                <th className="dark:text-slate-100">Monthly Payment</th>
                <th className="dark:text-slate-100">Total Interest</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Credit Union", "8%", "$244", "$1,712"],
                ["National Bank", "13%", "$268", "$2,864"],
                ["Online Lender (good credit)", "10%", "$254", "$2,192"],
                ["Online Lender (fair credit)", "22%", "$299", "$4,352"],
                ["Payday/High-Cost Lender", "300%+", "N/A", "Catastrophic"],
              ].map(([type, apr, monthly, interest]) => (
                <tr key={type}>
                  <td className="dark:text-slate-100">{type}</td>
                  <td className="dark:text-slate-100">{apr}</td>
                  <td className="dark:text-slate-100">{monthly}</td>
                  <td className="dark:text-slate-100">{interest}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            A credit union borrower with good credit pays $1,152 less in interest than a comparable bank borrower and
            $2,640 less than a fair-credit online lender. The credit union loan calculator makes those differences impossible
            to miss.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW TO JOIN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Join a Credit Union
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The old &quot;you have to work for a specific employer&quot; model is largely gone. Most Americans qualify for at
            least one credit union based on:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Employer or industry", "Many companies partner with credit unions"],
              ["Geographic location", "Dozens of community credit unions serve specific cities or counties"],
              ["Family membership", "Many CUs allow immediate family members of existing members to join"],
              ["Association membership", "Churches, schools, professional groups, and alumni associations often affiliate with credit unions"],
              ["Low-cost open membership", "Many credit unions let anyone join by making a small donation to a partner charity or organization ($5–$25 is common)"],
            ].map(([criteria, desc]) => (
              <li key={criteria} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{criteria}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            The Credit Union Locator at MyCreditUnion.gov and the NCUA website can help you find options in your area.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── MEMBERSHIP REQUIREMENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Membership Requirements and Eligibility
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Once you identify a credit union you qualify for, joining is straightforward:
          </p>
          <div className="space-y-3">
            {[
              "Verify eligibility — Confirm the \"field of membership\" includes you",
              "Complete the membership application — Often done online in under 10 minutes",
              "Open a share account — Most require a minimum deposit of $5–$25 to establish membership (this is essentially a savings account that gives you ownership stake)",
              "Apply for your loan — Many allow loan applications immediately; some require a short membership period first",
            ].map((step, i) => (
              <div key={i} className="numbered-section">
                <span className="num">{i + 1}</span>
                <p className="flex-1 text-base text-slate-800 dark:text-slate-100">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            Unlike banks, credit unions can&apos;t reject your membership if you meet their field of membership — it&apos;s a legal
            requirement under their charter.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Loan Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Borrowing More Than You Need</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Credit unions may approve you for more than you asked for. Politely decline the extra. More principal means more
                interest, always.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Ignoring the Total Cost of the Loan</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                The monthly payment is what fits in your budget. The total interest is what the loan actually costs.
                They&apos;re not the same number. The credit union loan calculator shows both — use both.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Not Shopping Rates Even Within Credit Unions</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Different credit unions offer different rates. If you qualify for more than one (common in urban areas),
                compare them. Rate differences of even 1–2% add up fast over multi-year loans.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Skipping the Amortization Schedule</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Ask your credit union for the amortization schedule before you sign. It shows you exactly how much goes to
                interest vs. principal every month — and reveals how much you&apos;d save by paying off early.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Assuming All Credit Unions Have the Same Terms</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                They don&apos;t. Terms, rates, fees, and loan products vary by institution. A federal credit union is capped at 18%
                APR; a state-chartered credit union has different rules depending on the state.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Not Asking About Fees</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Most credit unions are low-fee, but &quot;low&quot; doesn&apos;t mean &quot;none.&quot; Ask specifically about:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
                <li>• Origination fees (many credit unions charge none)</li>
                <li>• Late payment fees</li>
                <li>• Prepayment penalties (rare at credit unions, but confirm)</li>
                <li>• Application fees</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── USA SPECIFIC INFO ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            USA-Specific Credit Union Lending Information
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Regulation and Insurance</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Credit unions in the U.S. are regulated and insured separately from banks:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
                <li>• <strong>Federal credit unions</strong> are chartered and supervised by the <strong>National Credit Union Administration (NCUA)</strong></li>
                <li>• <strong>State-chartered credit unions</strong> are supervised by state regulators and, in most cases, also by the NCUA</li>
                <li>• Deposits are insured up to <strong>$250,000 per member</strong> through the <strong>National Credit Union Share Insurance Fund (NCUSIF)</strong> — equivalent protection to FDIC insurance at banks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">The 18% APR Cap</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Federally chartered credit unions are prohibited from charging more than <strong>18% APR</strong> on most loans.
                This is a hard ceiling set by the NCUA. In an environment where payday lenders can charge 300–400% effective APR
                and some online lenders charge 30%+, this cap is a meaningful consumer protection.
              </p>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                State-chartered credit unions follow their state&apos;s usury laws, which vary — but are typically still more
                favorable than what banks or online lenders charge for comparable borrowers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Credit Union Size and Scope</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                As of 2024, there are approximately <strong>4,600 credit unions</strong> in the U.S. serving over <strong>135
                million members</strong>. They range from tiny community institutions with a few million in assets to large
                national credit unions like Navy Federal Credit Union (the largest, with over $170 billion in assets) and
                PenFed.
              </p>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Larger credit unions often have:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
                <li>• More competitive rates due to economies of scale</li>
                <li>• Better digital tools and online loan applications</li>
                <li>• More loan products (mortgages, HELOCs, investment products)</li>
              </ul>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Smaller community credit unions often have:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
                <li>• More flexible underwriting</li>
                <li>• More personalized service</li>
                <li>• More willingness to work with borrowers who have imperfect credit</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Credit-Builder Loans: A Unique Credit Union Product</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Many credit unions offer <strong>credit-builder loans</strong> specifically designed for borrowers with thin
                credit or damaged credit histories. Here&apos;s how they work:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
                <li>1. You apply for a small loan ($300–$3,000 typically)</li>
                <li>2. The funds are deposited into a locked savings account — you don&apos;t receive them yet</li>
                <li>3. You make monthly payments on the loan for 12–24 months</li>
                <li>4. At the end, you receive the funds and have a full installment loan history on your credit report</li>
              </ul>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                It&apos;s essentially a forced savings plan that also builds credit. Banks rarely offer this product. Credit
                unions do it routinely.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Current Credit Union Lending Trends (2024–2025)</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Several notable trends are shaping credit union lending right now:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
                <li>• <strong>Rate advantage widens during high-rate environments</strong> — When the Fed raises rates, bank loan rates tend to spike faster than credit union rates, making the CU advantage even more pronounced</li>
                <li>• <strong>Digital adoption accelerating</strong> — More credit unions have invested in online and mobile applications, making the membership-required friction much lower than it used to be</li>
                <li>• <strong>Shared branching networks</strong> — Over 5,500 credit union branches participate in shared branching, meaning members of one CU can conduct transactions at another&apos;s branch nationwide</li>
                <li>• <strong>BNPL and fintech competition</strong> — Credit unions are increasingly competing with Buy Now Pay Later services by offering small-dollar personal loans at reasonable rates</li>
                <li>• <strong>EV loan programs</strong> — Several large credit unions have launched specific low-rate programs for electric vehicle purchases, sometimes beating manufacturer financing</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── EXTRA PAYMENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Extra Payments Reduce Your Credit Union Loan Cost
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Making extra payments is one of the simplest ways to slash your total interest — and it&apos;s even more powerful
            when your base rate is already low.
          </p>
          <div className="state-card">
            <h3>Example: $18,000 loan at 7.5% APR, 60-month term</h3>
            <table className="styled-table styled-table-plain">
              <thead>
                <tr>
                  <th className="dark:text-slate-100">Payment Strategy</th>
                  <th className="dark:text-slate-100">Monthly Payment</th>
                  <th className="dark:text-slate-100">Payoff Time</th>
                  <th className="dark:text-slate-100">Total Interest</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Standard", "$360", "60 months", "$3,600"],
                  ["+$50 extra/month", "$410", "~54 months", "~$3,130"],
                  ["+$100 extra/month", "$460", "~49 months", "~$2,730"],
                  ["+$200 extra/month", "$560", "~41 months", "~$2,100"],
                ].map(([strategy, monthly, time, interest]) => (
                  <tr key={strategy}>
                    <td className="dark:text-slate-100">{strategy}</td>
                    <td className="dark:text-slate-100">{monthly}</td>
                    <td className="dark:text-slate-100">{time}</td>
                    <td className="dark:text-slate-100">{interest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            Adding just $100 a month saves $870 in interest and gets you out of debt 11 months early. Always confirm your
            credit union doesn&apos;t charge a prepayment penalty before making extra payments — most don&apos;t, but it&apos;s worth a
            30-second question.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── REFINANCING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Can You Refinance a Loan Through a Credit Union?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Absolutely — and it&apos;s one of the best moves you can make if your credit has improved since you took out your
            original loan.
          </p>
          <div className="aside-callout">
            <strong>Refinancing through a credit union means taking out a new credit union loan to pay off an existing
            higher-rate loan — ideally reducing your interest rate, monthly payment, or both.</strong>
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Auto Loan Refinancing Example</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Kevin financed a car 18 months ago through a dealership at <strong>11% APR</strong> when his credit score was 620.
            He&apos;s been making on-time payments and his score is now 680. He refinances his remaining $14,500 balance through his
            credit union at <strong>6.8% APR</strong> with 36 months remaining.
          </p>
          <table className="styled-table">
            <thead>
              <tr>
                <th className="dark:text-slate-100"></th>
                <th className="dark:text-slate-100">Original Loan</th>
                <th className="dark:text-slate-100">Refinanced Loan</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Balance", "$14,500", "$14,500"],
                ["APR", "11%", "6.8%"],
                ["Monthly Payment", "$474", "$448"],
                ["Total Remaining Interest", "$2,564", "$1,628"],
                ["Savings", "", "$936"],
              ].map(([label, original, refinanced]) => (
                <tr key={label}>
                  <td className="dark:text-slate-100">{label}</td>
                  <td className="dark:text-slate-100">{original}</td>
                  <td className="dark:text-slate-100">{refinanced}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            Kevin saves $936 and $26 per month. Not life-changing, but meaningful — and it took about 15 minutes to
            complete the application online.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">When Refinancing Makes Sense</h3>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• Your credit score has improved significantly</li>
            <li>• Prevailing rates have dropped since your original loan</li>
            <li>• You were stuck with a high dealer-inflated rate</li>
            <li>• You want to shorten your term and pay off faster</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">When It Doesn&apos;t</h3>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
            <li>• The remaining balance is very small (fees may outweigh savings)</li>
            <li>• Your original loan has a prepayment penalty</li>
            <li>• Your credit has gotten worse since the original loan</li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Tips for Getting the Best Credit Union Loan
          </h2>
          <div className="space-y-3">
            {[
              "Become a member before you need a loan — Some credit unions require a short membership period before lending. Join now, even if you&apos;re not borrowing yet.",
              "Set up direct deposit to your credit union account — This often earns you rate discounts (typically 0.25%) and strengthens your membership relationship.",
              "Check for loyalty or relationship discounts — Many credit unions offer rate discounts for having multiple accounts (savings, checking, loan).",
              "Ask about rate-match policies — Some credit unions will match a competitor&apos;s rate if you can show proof of a better offer.",
              "Improve your credit before applying — Even a 20-point score improvement can move you into a better rate tier.",
              "Use the credit union loan calculator to determine the right term — Don&apos;t just pick 60 months by default. Run 36, 48, and 60 month scenarios and pick the shortest you can genuinely manage.",
              "Ask about the full fee structure — Most credit unions have low fees, but \"low\" isn&apos;t zero. Confirm origination fees, late fees, and any other charges upfront.",
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
            FAQs: Credit Union Loan Calculator
          </h2>
          {[
            {
              q: "What is a credit union loan?",
              a: "A credit union loan is an installment or revolving loan made by a nonprofit, member-owned financial cooperative to one of its members. Because credit unions aren&apos;t focused on profit, they typically offer lower interest rates, lower fees, and more flexible underwriting than for-profit banks.",
            },
            {
              q: "How does a credit union loan calculator work?",
              a: "It uses the standard loan amortization formula to calculate your monthly payment based on three inputs: loan amount, interest rate (APR), and loan term in months. It also shows your total repayment amount and total interest charged, helping you compare credit union rates against other lenders.",
            },
            {
              q: "Are credit union loans cheaper than bank loans?",
              a: "In most cases, yes. Credit unions consistently offer lower APRs than banks for personal loans, auto loans, and mortgages. The average credit union personal loan rate runs 2–5 percentage points below comparable bank rates. Over a multi-year loan, that difference translates to hundreds or thousands of dollars in savings.",
            },
            {
              q: "Do you need to be a member to get a credit union loan?",
              a: "Yes. You must be a member to borrow from a credit union. However, membership is often easier to obtain than people realize — eligibility can come through your employer, location, profession, school, family, or a small donation to a partner organization. The application process typically takes 10–15 minutes online.",
            },
            {
              q: "What credit score is needed for a credit union loan?",
              a: "Credit unions are generally more flexible than banks. Many work with scores as low as 580–600, especially for members with an established relationship. Some offer credit-builder loans specifically for borrowers with no credit or damaged credit. That said, higher scores still get better rates.",
            },
            {
              q: "How are credit union loan payments calculated?",
              a: "Using the standard amortization formula: M = P × [r(1+r)^n] / [(1+r)^n – 1], where P is the principal, r is the monthly interest rate (APR ÷ 12), and n is the loan term in months. The credit union loan calculator applies this formula instantly when you enter your numbers.",
            },
            {
              q: "Are credit unions good for auto loans?",
              a: "Excellent, actually. Credit unions consistently offer some of the lowest auto loan rates in the country. Studies from the Consumer Financial Protection Bureau (CFPB) have shown credit union auto loan rates average 1–3% lower than dealership financing for similar borrowers. Getting pre-approved through a credit union before stepping into a dealership is one of the smartest moves a car buyer can make.",
            },
            {
              q: "Can you refinance a loan through a credit union?",
              a: "Yes, and many borrowers use credit unions specifically for refinancing high-rate loans from banks or dealerships. If your credit has improved since your original loan, refinancing through a credit union can cut your rate, lower your payment, and save significantly in total interest.",
            },
            {
              q: "What is the maximum APR a credit union can charge?",
              a: "Federally chartered credit unions are capped at 18% APR on most loans by the NCUA. State-chartered credit unions follow state usury laws, which vary but are generally also capped at reasonable levels. This is meaningfully different from banks and online lenders, which have no federal rate cap on personal loans.",
            },
            {
              q: "What types of loans do credit unions offer?",
              a: "Credit unions offer virtually every loan product a bank does: personal loans, auto loans, mortgages, home equity loans and HELOCs, debt consolidation loans, student loans, emergency loans, and credit-builder loans. Larger credit unions also offer business loans and commercial real estate financing.",
            },
            {
              q: "Do credit unions charge origination fees?",
              a: "Many credit unions charge no origination fees at all — which is a meaningful advantage over some banks and online lenders that charge 1–6% of the loan amount upfront. Always ask specifically about fees, as they vary by institution.",
            },
            {
              q: "How long does it take to get a credit union loan?",
              a: "Approval typically takes 1–3 business days. Many credit unions now offer same-day decisions for existing members with strong profiles. Funding after approval usually takes 1–2 additional business days for electronic transfers.",
            },
            {
              q: "Can a co-signer help me get a better credit union loan rate?",
              a: "Yes. Adding a co-signer with good credit to your application can help you qualify for a lower rate or a loan amount you might not get approved for on your own. The co-signer is equally responsible for repayment, so choose someone who understands the commitment.",
            },
            {
              q: "What is a credit-builder loan at a credit union?",
              a: "A credit-builder loan is a small loan ($300–$3,000) where the funds are held in a savings account while you make payments. Once you&apos;ve repaid the loan, you receive the funds. The on-time payment history is reported to credit bureaus, helping build or rebuild your credit profile. These are almost exclusively a credit union and small community bank product.",
            },
            {
              q: "Should I use a credit union for debt consolidation?",
              a: "Credit unions are often excellent for debt consolidation. Their lower rates mean you&apos;ll pay less interest on the consolidation loan than you were paying on high-rate credit cards. The key is discipline: consolidating credit card debt only helps if you don&apos;t run those cards back up after paying them off.",
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="faq-item">
              <h3>{q}</h3>
              <p className="text-base text-slate-800 dark:text-slate-100">{a}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── FINAL THOUGHTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Final Thoughts
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Credit unions aren&apos;t a secret, but they&apos;re massively underused. Millions of Americans are paying higher interest
            rates, more fees, and dealing with more rigid approval processes than they need to — simply because they&apos;re
            borrowing from a for-profit institution by default.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The credit union loan calculator shows you the numbers directly: what your payment looks like, what you&apos;ll pay in
            total, and how that compares to what another lender might charge. In most cases, the credit union wins.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            If you&apos;re not a member of a credit union yet, there&apos;s a good chance you qualify for one right now. It takes about 15
            minutes to join and costs a few dollars to open your share account. After that, you have access to some of the most
            competitive borrowing rates available to American consumers.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Run your numbers. Find your credit union. And borrow smarter.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── RELATED CALCULATORS ── */}
        <section className="mb-8">
          <p className="text-base text-slate-600 dark:text-slate-400 italic">
            Looking to compare more borrowing options? Check out our standard loan calculator, auto loan calculator, and debt
            consolidation calculator to get the full picture before you apply anywhere.
          </p>
        </section>

      </div>
    </article>
  );
}
