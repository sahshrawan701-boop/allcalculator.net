import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BalloonLoanCalculatorArticle() {
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
            Balloon Loan Calculator: Estimate Your Monthly Payments and That Big Final Payment
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for US borrowers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Picture this: you&apos;re buying a commercial property for your small business, and the bank hands you a payment
            quote that&apos;s $800 a month lower than a conventional loan. It sounds almost too good. You wonder what the
            catch is.
          </p>
          <p className="mb-5">
            There is one. In five years, you owe a single lump-sum payment of $180,000.
          </p>
          <p className="mb-5">
            That&apos;s a balloon loan. The lower monthly payments are real. So is that massive final bill. Before you sign
            anything, you need to understand exactly what you&apos;re agreeing to — and that&apos;s precisely where a balloon
            loan calculator earns its keep.
          </p>
          <p>
            This calculator lets you punch in your loan amount, interest rate, term, and balloon percentage, and it&apos;ll
            show you both what you&apos;ll pay every month <em>and</em> what you&apos;ll owe at the end. Running those numbers
            takes about 30 seconds. Skipping them can cost you your property, your car, or your business.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS A BALLOON LOAN CALCULATOR ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Balloon Loan Calculator?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A balloon loan calculator is a financial tool that estimates two things most traditional loan calculators
            don&apos;t show together: your regular monthly payment <em>and</em> the large lump-sum payment due at the end of
            the loan term.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Standard loan calculators assume you&apos;ll gradually pay the loan down to zero over time. A balloon loan
            calculator factors in that a chunk of the principal — sometimes a very big chunk — gets deferred to the final
            payment.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            You&apos;ll typically input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Loan amount", "How much you&apos;re borrowing"],
              ["Annual interest rate", "The rate the lender charges"],
              ["Loan term", "How long until the loan matures (often 3–7 years)"],
              ["Amortization period", "The longer schedule your payments are based on (often 15–30 years)"],
              ["Balloon payment percentage", "The share of the original balance due at maturity"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then outputs your monthly payment, the balloon amount due at maturity, and often a full
            amortization schedule showing your remaining balance month by month.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS A BALLOON LOAN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Balloon Loan?
          </h2>
          <div className="aside-callout">
            <strong>A balloon loan is a short-term loan where monthly payments are calculated based on a longer
            amortization schedule, but the remaining unpaid balance becomes due in full at the end of the shorter loan
            term.</strong>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            In plain English: you make small monthly payments for a few years, then you have to pay off whatever&apos;s
            left — all at once.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The &quot;balloon&quot; refers to that final payment swelling up relative to your regular installments. It can
            range from a modest bump (say, 20% of the original loan) to almost the entire principal if the loan is
            structured as nearly interest-only.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Balloon loans are common in:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Commercial real estate", "Office buildings, retail spaces, multi-family properties"],
              ["Auto financing", "Especially through dealerships or for business fleets"],
              ["Business loans", "Short-term working capital or equipment financing"],
              ["Residential mortgages", "Less common since the 2008 housing crisis, but still used in some markets"],
            ].map(([category, examples]) => (
              <li key={category} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{category}</strong> — {examples}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The appeal is simple: lower monthly payments free up cash flow. The risk is equally simple: you need a plan
            for that final payment.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does a Balloon Loan Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses two separate calculations and combines them.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Part 1 — Monthly Payment:</p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your monthly payment is calculated <em>as if</em> the loan were fully amortized over a longer period (like 30
            years for a mortgage). This is what keeps payments low.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Part 2 — Balloon Payment:</p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            After the shorter loan term expires (say, 5 years), the calculator finds your remaining balance — the amount
            left as if you&apos;d been making payments on that 30-year schedule. That remaining balance is your balloon
            payment.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            So you&apos;re essentially borrowing on a 30-year payment plan but only making 5 years of payments before the
            bill comes due in full.
          </p>
          <p className="text-base text-slate-800 dark:text-slate-100 mb-3">Here&apos;s a quick visual of the structure:</p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Phase</th>
                <th className="dark:text-slate-100">What Happens</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Months 1–60", "Pay regular monthly installments (based on 30-year amortization)"],
                ["Month 61", "Entire remaining loan balance is due in one payment"],
              ].map(([phase, what]) => (
                <tr key={phase}>
                  <td className="dark:text-slate-100">{phase}</td>
                  <td className="dark:text-slate-100">{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            The gap between your low monthly payments and the loan&apos;s total payoff is the balloon. That gap can be
            surprisingly large — and the balloon loan calculator makes that visible <em>before</em> you commit.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Balloon Loan Formula Explained
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            There are two formulas at work.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Monthly Payment Formula</h3>
          <div className="formula-block">
            <pre>M = P × [r(1+r)^n] / [(1+r)^n - 1]</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">Where:</p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-5">
            {[
              ["M", "Monthly payment"],
              ["P", "Loan principal"],
              ["r", "Monthly interest rate (annual rate ÷ 12)"],
              ["n", "Amortization period in months (e.g., 360 for 30 years)"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-20 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            This formula treats the loan as if it&apos;ll be fully paid off over the full amortization schedule.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Balloon Payment (Remaining Balance) Formula</h3>
          <div className="formula-block">
            <pre>B = P × [(1+r)^n - (1+r)^p] / [(1+r)^n - 1]</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">Where:</p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-5">
            {[
              ["B", "Balloon payment (remaining balance)"],
              ["P", "Original loan principal"],
              ["r", "Monthly interest rate"],
              ["n", "Total amortization period in months"],
              ["p", "Number of payments actually made (loan term in months)"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-20 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            This calculates the outstanding balance on the amortization schedule after the loan term ends.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            You don&apos;t need to do this math yourself — the balloon payment calculator handles it instantly. But
            understanding the formula helps you see <em>why</em> a longer amortization period with a short term produces a
            massive balloon.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP EXAMPLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step Balloon Loan Calculation Example
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let&apos;s work through a real example.
          </p>
          <div className="state-card">
            <h3>Scenario</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              You&apos;re borrowing <strong>$200,000</strong> for a commercial property. The lender offers a <strong>6%
              annual interest rate</strong>, with payments based on a <strong>30-year amortization</strong> but a <strong>5-year
              balloon term</strong>.
            </p>
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Step 1: Calculate the Monthly Payment</h3>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• Monthly rate (r): 6% ÷ 12 = 0.5% = 0.005</li>
            <li>• Amortization period (n): 30 years × 12 = 360 months</li>
          </ul>
          <div className="formula-block">
            <pre>{`M = 200,000 × [0.005 × (1.005)^360] / [(1.005)^360 – 1]
M ≈ $1,199.10 per month`}</pre>
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Step 2: Calculate the Balloon Payment (Remaining Balance After 5 Years)</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            After 60 payments of $1,199.10:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• Total paid: $71,946</li>
            <li>• Interest paid: ~$59,003</li>
            <li>• Principal paid: ~$12,943</li>
            <li>• <strong>Remaining balance (balloon payment): ~$187,057</strong></li>
          </ul>
          <p className="text-base text-slate-800 dark:text-slate-400 italic">
            You made 5 years of payments, but your balance barely moved. That&apos;s the reality of a 30-year amortization
            on a 5-year balloon loan.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Step 3: Total Cost Summary</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th className="dark:text-slate-100"></th>
                <th className="dark:text-slate-100">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Loan Amount", "$200,000"],
                ["Monthly Payment", "$1,199.10"],
                ["Payments Made (60 months)", "$71,946"],
                ["Balloon Payment Due", "$187,057"],
                ["Total Cost of Loan", "$258,003"],
                ["Total Interest (if held to maturity)", "~$59,003"],
              ].map(([label, amount]) => (
                <tr key={label}>
                  <td className="dark:text-slate-100">{label}</td>
                  <td className="dark:text-slate-100">{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            And that assumes you pay off the balloon in cash. If you refinance at that point, you&apos;re borrowing again
            and paying more interest on top.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── AMORTIZATION TABLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Sample Amortization Table
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Here&apos;s how the first several months and the final months of that $200,000 loan look:
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
                ["1", "$1,199.10", "$1,000.00", "$199.10", "$199,800.90"],
                ["2", "$1,199.10", "$999.00", "$200.10", "$199,600.80"],
                ["6", "$1,199.10", "$995.00", "$204.10", "$198,798.00"],
                ["12", "$1,199.10", "$990.00", "$209.10", "$197,803.00"],
                ["36", "$1,199.10", "$970.00", "$229.10", "$193,600.00"],
                ["60", "$1,199.10", "$935.00", "$264.10", "$187,057.00 ← Balloon Due"],
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
            Notice how slowly the balance drops. After 5 full years of payments, you&apos;ve barely made a dent.
            That&apos;s the math working against you in a balloon structure.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── COMPARISON TABLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Balloon Payment vs. Traditional Loan: Side-by-Side
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Same $200,000 loan, same 6% APR. Here&apos;s how balloon loans stack up against fully amortized alternatives:
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Feature</th>
                <th className="dark:text-slate-100">Balloon Loan (5yr/30yr)</th>
                <th className="dark:text-slate-100">Traditional 15-Year</th>
                <th className="dark:text-slate-100">Traditional 30-Year</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Monthly Payment", "$1,199", "$1,688", "$1,199"],
                ["Balloon Payment Due", "$187,057", "None", "None"],
                ["Total Paid (to payoff)", "$258,003+", "$303,840", "$431,676"],
                ["Interest Paid", "$59,003 (to maturity)", "$103,840", "$231,676"],
                ["Cash Flow Friendly?", "✅ Yes", "❌ Higher monthly", "✅ Yes"],
                ["Risk at Term End", "⚠️ High", "✅ None", "✅ None"],
              ].map(([feature, balloon, fifteen, thirty]) => (
                <tr key={feature}>
                  <td className="dark:text-slate-100">{feature}</td>
                  <td className="dark:text-slate-100">{balloon}</td>
                  <td className="dark:text-slate-100">{fifteen}</td>
                  <td className="dark:text-slate-100">{thirty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            The balloon loan&apos;s monthly payment matches the 30-year loan, but it forces a reckoning at year 5. The
            15-year loan costs more monthly but far less overall. The 30-year is cash-flow friendly with no balloon risk
            — just a lot more interest over time.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── BALLOON VS INTEREST ONLY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Balloon Loan vs. Interest-Only Loan
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            These two are often confused. Here&apos;s the key difference:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            <li>
              <strong>Interest-only loan:</strong> Your monthly payment covers <em>only</em> interest — no principal at
              all. The entire original balance is due at the end.
            </li>
            <li>
              <strong>Balloon loan:</strong> Your monthly payment covers some principal, but not enough to fully pay off
              the loan. The remaining balance (which is most of it) comes due at maturity.
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            With a balloon loan, you at least chip away at the principal slightly. With an interest-only loan, you owe
            exactly what you borrowed when the term ends.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Both carry lump-sum risk. Balloon loans are slightly more borrower-friendly in that you&apos;ve reduced the
            principal a little.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Balloon Loan Examples
          </h2>

          <div className="state-card">
            <h3>Example 1: Commercial Real Estate — Maria&apos;s Retail Space</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Maria owns a small boutique and needs to purchase her retail space. She borrows <strong>$350,000</strong> at
              <strong>7% APR</strong>, with payments based on a 25-year amortization and a <strong>7-year balloon term</strong>.
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-3">
              <li>• Monthly payment: <strong>$2,474</strong></li>
              <li>• Balloon payment at year 7: <strong>~$308,000</strong></li>
              <li>• Total paid before balloon: $207,816</li>
            </ul>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              Maria&apos;s plan: sell the property or refinance before year 7. She&apos;s betting that property values will
              rise and she&apos;ll have equity to work with. It&apos;s a reasonable bet — if the market cooperates.
            </p>
          </div>

          <div className="state-card">
            <h3>Example 2: Auto Balloon Loan — Javier&apos;s Truck Purchase</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Javier needs a work truck for his landscaping business. The dealer offers a <strong>$45,000</strong> balloon
              loan at <strong>5.9% APR</strong>, with a 3-year term and a <strong>30% balloon</strong> (meaning 30% of the
              original price is due at the end).
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-3">
              <li>• Balloon amount: $13,500</li>
              <li>• Monthly payment (based on $31,500 amortized over 36 months): <strong>~$1,020</strong></li>
              <li>• Compared to a standard 60-month loan at the same rate: <strong>~$869/month</strong></li>
            </ul>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              Wait — the balloon payment loan is <em>more</em> expensive per month in this case, but Javier owns the
              truck outright after 3 years (assuming he pays the balloon). Many auto balloon deals save on monthly
              payments by stretching the term further. Always run the numbers with the actual calculator.
            </p>
          </div>

          <div className="state-card">
            <h3>Example 3: Small Business Loan — Priya&apos;s Equipment Financing</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Priya needs $80,000 in industrial kitchen equipment for her catering business. She gets a <strong>5-year
              balloon loan at 8.5%</strong> with payments based on a 10-year amortization.
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-3">
              <li>• Monthly payment: <strong>~$990</strong></li>
              <li>• Balloon payment at year 5: <strong>~$47,800</strong></li>
              <li>• Her plan: By year 5, the equipment will have paid for itself through revenue. She&apos;ll use business cash flow to pay off the balloon.</li>
            </ul>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              This is actually a smart use of balloon financing — short-term cash flow management with a clear repayment
              strategy. The risk? Business slows down and year 5 arrives without the cash.
            </p>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BALLOON PERCENTAGE COMPARISON ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Balloon Payment Percentage Comparison
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The balloon percentage dramatically changes the math. Here&apos;s the same $100,000 loan at 6.5% APR, 5-year
            term, 20-year amortization:
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Balloon %</th>
                <th className="dark:text-slate-100">Monthly Payment</th>
                <th className="dark:text-slate-100">Balloon Due</th>
                <th className="dark:text-slate-100">Total Paid</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0% (fully amortized)", "$745", "$0", "$44,700 (5 yr)"],
                ["20%", "$745*", "$20,000", "$64,700"],
                ["40%", "$745*", "$40,000", "$84,700"],
                ["60%", "$745*", "$60,000", "$104,700"],
                ["100% (interest-only)", "$542", "$100,000", "$132,520"],
              ].map(([percent, monthly, balloon, total]) => (
                <tr key={percent}>
                  <td className="dark:text-slate-100">{percent}</td>
                  <td className="dark:text-slate-100">{monthly}</td>
                  <td className="dark:text-slate-100">{balloon}</td>
                  <td className="dark:text-slate-100">{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 italic">
            *Monthly payment stays similar because it&apos;s based on the amortization schedule, not the balloon
            percentage directly. The balloon percentage represents what portion of the original balance is reserved as a
            final lump sum.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            The higher the balloon percentage, the lower your monthly obligation — and the bigger the cliff at the end.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS THAT AFFECT PAYMENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Your Balloon Loan Payments
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Loan Amount</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                More principal = higher monthly payments and a larger balloon. Straightforward, but worth running through
                the balloon loan estimator for every dollar amount you&apos;re considering.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Interest Rate</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Even half a percentage point matters over years of payments. At $300,000, the difference between 6% and
                7% APR adds roughly $150/month <em>and</em> increases the balloon because the balance shrinks more slowly
                with higher interest eating each payment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Amortization Period</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                This is the hidden lever. A 30-year amortization produces very low monthly payments — and a balloon
                that&apos;s barely smaller than what you borrowed. A 10-year amortization produces higher monthly payments
                but a much smaller balloon because you&apos;re paying down principal faster.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Loan Term (Balloon Maturity)</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                The shorter the term, the sooner your balloon comes due. A 3-year balloon hits faster than a 7-year one,
                leaving less time to refinance or save up.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Balloon Percentage</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Some lenders specify the balloon as a flat percentage of the original loan (say, 30%). Others build it
                naturally as the remaining amortization balance. Know which you&apos;re dealing with.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Credit Score and Qualification</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Your creditworthiness determines what rate you qualify for — and sometimes whether you qualify at all.
                Most balloon loans are commercial or non-standard products, so lender requirements vary more than they do
                for conventional mortgages.
              </p>
              <table className="styled-table styled-table-plain">
                <thead>
                  <tr>
                    <th className="dark:text-slate-100">Credit Profile</th>
                    <th className="dark:text-slate-100">Likely Rate Range</th>
                    <th className="dark:text-slate-100">Balloon Access</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Excellent (720+)", "5% – 8%", "Most lenders"],
                    ["Good (680–719)", "7% – 11%", "Many lenders"],
                    ["Fair (640–679)", "10% – 15%", "Some lenders"],
                    ["Poor (below 640)", "15%+ or denied", "Hard to qualify"],
                  ].map(([profile, rate, access]) => (
                    <tr key={profile}>
                      <td className="dark:text-slate-100">{profile}</td>
                      <td className="dark:text-slate-100">{rate}</td>
                      <td className="dark:text-slate-100">{access}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Using a Balloon Loan Calculator
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Using this tool <em>before</em> you sign anything gives you a real edge:
          </p>
          <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              "Clarity on the final payment — No surprises at maturity",
              "Cash flow planning — Know whether you can handle both the monthly and final payments",
              "Scenario modeling — Test different balloon percentages, terms, and rates",
              "Refinancing decisions — See how much you&apos;ll owe when it&apos;s time to refi",
              "Comparison shopping — Pit balloon offers against traditional loan quotes",
              "Business planning — Build the balloon payoff into your 3- or 5-year financial projections",
              "Lender negotiation — Walk in knowing your numbers, not guessing",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── RISKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Risks of Balloon Loans
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Let&apos;s be direct: balloon loans are riskier than traditional loans. Here&apos;s why that matters.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">The Refinancing Risk</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Most balloon borrowers plan to refinance before the final payment comes due. That plan depends on:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• Lenders still being willing to refinance you</li>
            <li>• Interest rates not having jumped significantly</li>
            <li>• Your credit still being in good shape</li>
            <li>• Your property or asset having maintained (or gained) value</li>
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            If any of those factors shifts, you could arrive at your balloon date without a refinancing option.
            That&apos;s a serious problem.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Negative Equity Risk</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            For real estate balloon loans, if property values have declined since you purchased, you might owe more than
            the property is worth. That makes refinancing nearly impossible through conventional channels. You&apos;d
            either need to bring cash to closing or negotiate a workout with the lender.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Market Rate Risk</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            You locked in your original balloon loan at 6%. Five years later, rates are 9%. Your refinance will cost
            significantly more — raising your monthly payments and your total interest cost considerably. The monthly
            payment calculator for the new loan might surprise you.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">The &quot;I&apos;ll Have the Money&quot; Assumption</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Some borrowers plan to sell the asset or use business revenue to cover the balloon. Those plans don&apos;t
            always materialize on schedule. Delays, market downturns, or business slowdowns can leave you holding a
            massive payment you can&apos;t make.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">What Happens If You Can&apos;t Pay?</h3>
          <div className="aside-callout">
            <strong>If you can&apos;t make the balloon payment and can&apos;t refinance, you risk defaulting on the loan. For
            secured loans — including mortgages and auto loans — the lender can foreclose or repossess the asset. For
            commercial properties, that could mean losing your business location. For auto loans, losing your vehicle.</strong>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            This is why having a concrete exit strategy before you take a balloon loan is non-negotiable.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── PROS AND CONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Pros and Cons at a Glance
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Pros</h3>
              <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
                {[
                  "Lower monthly payments than traditional loans",
                  "Better short-term cash flow for businesses and investors",
                  "Useful for borrowers expecting higher income or asset sale proceeds at term end",
                  "Can make expensive assets accessible with less monthly commitment",
                  "Flexible structures for commercial deals",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Cons</h3>
              <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
                {[
                  "Large lump-sum payment creates serious end-of-term risk",
                  "Refinancing isn&apos;t guaranteed",
                  "Rising rates can make the refi much more expensive",
                  "Negative equity can trap borrowers",
                  "Not suitable for borrowers without a clear exit strategy",
                  "Slower principal paydown means more interest over time if you refinance",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Balloon Loan Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Assuming Refinancing Is Guaranteed</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                It isn&apos;t. Lenders can tighten standards. Your credit can dip. Rates can rise. Never take a balloon loan
                assuming refinancing will be automatic.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Ignoring the Amortization Period</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                A lot of borrowers focus on the monthly payment and the loan term — and forget to ask what amortization
                schedule the payment is based on. A 7-year balloon based on a 30-year amortization leaves a much bigger
                balloon than one based on a 15-year amortization.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Not Having an Exit Strategy</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Before signing, you should be able to clearly answer: <em>How will I handle the balloon payment?</em> If
                the answer is &quot;I&apos;ll figure it out,&quot; that&apos;s not a strategy. That&apos;s a risk.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Underestimating Refinancing Costs</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Refinancing isn&apos;t free. Closing costs, origination fees, and appraisal fees can add thousands to your
                total cost. Factor that into your balloon loan calculations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Ignoring Rate Changes</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Your refi will happen at whatever rate the market offers at that time. Run the numbers on what a 2–3 point
                rate increase would mean for your new monthly payment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Taking a Balloon Loan Without Understanding the Terms</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Some balloon loan agreements are straightforward. Others include prepayment penalties, adjustable rates, or
                conversion clauses. Read everything — and if it&apos;s a large loan, have a real estate attorney or
                financial advisor review it.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── USA SPECIFIC INFO ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            USA-Specific Balloon Loan Information
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Balloon Mortgages</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Balloon mortgages were common before the 2008 housing crisis. Post-crisis lending reforms — particularly the
                Qualified Mortgage (QM) rules from the Dodd-Frank Act — effectively eliminated most balloon mortgages from
                the residential lending market.
              </p>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                That said, balloon mortgages still exist:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
                <li>• <strong>Rural housing lenders</strong> can still offer balloon loans under certain exemptions</li>
                <li>• <strong>Small creditors</strong> (lenders originating fewer than 2,000 mortgages per year) can qualify to originate balloon loans under QM rules if they meet specific conditions</li>
                <li>• <strong>Portfolio lenders</strong> (banks holding their own loans rather than selling them on the secondary market) sometimes offer balloon products</li>
              </ul>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                If a residential lender is aggressively pushing a balloon mortgage today, ask why — and what exemption
                they&apos;re operating under.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Commercial Balloon Loans</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                These are extremely common. Most commercial real estate financing in the U.S. is balloon-structured. Five,
                seven, and ten-year balloons with 20–25 year amortization are standard. The commercial lending market is
                less regulated than residential, so terms vary widely.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Auto Balloon Financing</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Auto dealers — particularly for luxury vehicles and commercial fleets — sometimes offer balloon financing,
                often branded as &quot;guaranteed future value&quot; or &quot;GFV&quot; programs. The balloon is preset at the
                estimated future residual value of the vehicle. At term end, you can:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
                <li>1. Pay the balloon and own the car outright</li>
                <li>2. Trade the car in and apply any equity to a new loan</li>
                <li>3. Return the car (if the program allows it)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Business Equipment and Working Capital Loans</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Small business lenders (including SBA-affiliated lenders) sometimes use balloon structures for equipment
                financing or short-term capital loans. These typically run 3–7 years and require a clear business plan for
                balloon repayment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Current Lending Trends (2024–2025)</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                With interest rates elevated from the Federal Reserve&apos;s hiking cycle, balloon loans have seen renewed
                interest among commercial borrowers who are banking on rates falling before their balloon comes due. The
                logic: lock in with lower monthly payments now, refinance at (hopefully) lower rates in 5–7 years.
              </p>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
                It&apos;s a reasonable gamble if rates do come down. It&apos;s a painful one if they don&apos;t.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── REFINANCING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Balloon Loan Refinancing: What You Need to Know
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Refinancing a balloon loan before maturity is often the plan — but it requires preparation.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">When to Start the Refinancing Process</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Don&apos;t wait until month 59 of a 60-month balloon loan. Start exploring refinancing options <strong>at
            least 6–12 months before your balloon date</strong>. This gives you time to:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• Shop multiple lenders</li>
            <li>• Improve your credit score if needed</li>
            <li>• Get a property appraisal</li>
            <li>• Compare rates and terms</li>
            <li>• Handle any issues that might slow approval</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">What Lenders Look For</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            When refinancing a balloon loan, lenders evaluate the same factors as any new loan:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• Current credit score and history</li>
            <li>• Current income and debt-to-income ratio</li>
            <li>• Property or asset value (current, not what you paid)</li>
            <li>• Loan-to-value ratio (LTV)</li>
            <li>• Payment history on the existing balloon loan</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Refinancing Costs to Budget</h3>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Cost</th>
                <th className="dark:text-slate-100">Typical Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Origination fee", "0.5% – 2% of loan amount"],
                ["Appraisal", "$300 – $600 (residential), $1,500+ (commercial)"],
                ["Title/escrow fees", "$500 – $2,500"],
                ["Application fee", "$0 – $500"],
                ["Attorney fees (commercial)", "$1,000 – $5,000+"],
              ].map(([cost, range]) => (
                <tr key={cost}>
                  <td className="dark:text-slate-100">{cost}</td>
                  <td className="dark:text-slate-100">{range}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            On a $200,000 commercial loan, refinancing could easily cost $3,000–$8,000. That&apos;s money that should be
            factored into your total cost of ownership when evaluating whether a balloon loan makes sense up front.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHEN IT MAKES SENSE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            When a Balloon Loan Makes Sense — and When It Doesn&apos;t
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">It Makes Sense When:</h3>
              <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
                {[
                  "You&apos;re a business owner who needs to preserve cash flow and has a clear revenue projection that supports balloon payoff",
                  "You&apos;re a real estate investor who plans to sell the property before the balloon comes due",
                  "You&apos;re expecting a large sum of money (inheritance, business sale, contract payout) before maturity",
                  "You&apos;re confident rates will fall, and you plan to refinance at better terms",
                  "You&apos;re financing commercial property and understand the standard structure",
                ].map((item) => (
                  <li key={item}>✅ {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">It Doesn&apos;t Make Sense When:</h3>
              <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
                {[
                  "You&apos;re counting on refinancing with no backup plan",
                  "You&apos;re a first-time borrower unfamiliar with the repayment structure",
                  "Your income is unstable or likely to decrease before the balloon date",
                  "Property values in your area are declining",
                  "You&apos;re close to retirement with limited ability to requalify for a new loan",
                  "You haven&apos;t modeled what a 2–3% rate increase would do to your refinanced payment",
                ].map((item) => (
                  <li key={item}>❌ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQs ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            FAQs: Balloon Loan Calculator
          </h2>
          {[
            {
              q: "What is a balloon loan?",
              a: "A balloon loan is a type of financing where monthly payments are smaller than they&apos;d be on a fully amortized loan, but the remaining balance becomes due in full at the end of the loan term. The final payment — the \"balloon\" — is typically much larger than regular monthly installments.",
            },
            {
              q: "What is a balloon payment?",
              a: "A balloon payment is the large lump-sum amount due at the end of a balloon loan&apos;s term. It represents the remaining unpaid principal on the loan — essentially everything that wasn&apos;t paid down during the regular payment period.",
            },
            {
              q: "How is a balloon payment calculated?",
              a: "The balloon payment equals the remaining principal balance after all regular payments have been made. A balloon loan calculator determines this by applying the amortization formula over the full amortization period, then finding the balance at the point when the shorter loan term ends.",
            },
            {
              q: "Are balloon loans a good idea?",
              a: "They can be, but only with a clear exit strategy. Balloon loans offer lower monthly payments, which benefits cash flow. But the large final payment introduces real risk if you can&apos;t refinance, sell the asset, or come up with the cash. They&apos;re most appropriate for sophisticated borrowers — investors, business owners, and commercial real estate buyers — who understand the structure.",
            },
            {
              q: "What happens if you can&apos;t pay the balloon payment?",
              a: "If you can&apos;t make the balloon payment and can&apos;t refinance, you&apos;re in default. For secured loans, the lender can foreclose on real estate or repossess a vehicle. Some lenders will negotiate a modification or extension, but that&apos;s not guaranteed. This is why having a backup plan matters.",
            },
            {
              q: "Can a balloon loan be refinanced?",
              a: "Yes, and many borrowers do exactly that. But refinancing depends on your creditworthiness at the time, the property or asset value, prevailing interest rates, and lender availability. None of those are guaranteed. Always have a Plan B.",
            },
            {
              q: "What is the difference between a balloon loan and a traditional loan?",
              a: "A traditional fully amortized loan is paid down to zero through regular payments over the full loan term. A balloon loan uses the same payment structure temporarily but requires the remaining balance to be paid in full on a set date, creating that large final payment.",
            },
            {
              q: "Why are balloon loan monthly payments lower?",
              a: "Because they&apos;re calculated as if the loan would be paid off over a much longer period (like 30 years), even though the loan actually matures in 5–7 years. The monthly payment is just the installment for that longer amortization schedule — not a payment that would fully retire the debt by the actual due date.",
            },
            {
              q: "What&apos;s the difference between a balloon loan and an interest-only loan?",
              a: "With an interest-only loan, monthly payments cover only interest — no principal — and the entire original balance is due at maturity. With a balloon loan, payments include some principal, so the final balance is slightly less than what was originally borrowed. Both carry large final payments, but the structure differs.",
            },
            {
              q: "How long are balloon loan terms typically?",
              a: "Most balloon loans run between 3 and 10 years. Common structures include 5-year/20-year (payments based on a 20-year schedule, balloon due in 5) and 7-year/30-year (payments based on a 30-year schedule, balloon due in 7). The specific structure depends on the lender and loan type.",
            },
            {
              q: "Do balloon loans have prepayment penalties?",
              a: "Some do, some don&apos;t. Commercial loans are more likely to include prepayment penalties or yield maintenance clauses that make early payoff expensive. Always ask your lender about prepayment terms before signing, especially if you plan to sell the property or pay off the loan early.",
            },
            {
              q: "Are balloon mortgages legal in the U.S.?",
              a: "Yes, but they&apos;re highly regulated in residential lending post-2008. The Qualified Mortgage rules under Dodd-Frank largely eliminated balloon mortgages from mainstream residential lending. They&apos;re still legal and common in commercial real estate, and they&apos;re available from some small creditors and portfolio lenders in rural areas.",
            },
            {
              q: "Can balloon loans help my credit score?",
              a: "Making consistent on-time payments on a balloon loan helps your credit just like any other installment loan. Missing payments — or defaulting on the balloon — will significantly damage your credit. There&apos;s nothing uniquely beneficial about a balloon loan for your credit profile.",
            },
            {
              q: "What&apos;s a good balloon loan strategy for commercial real estate?",
              a: "Most commercial real estate investors treat the balloon loan as a 5–7 year bridge. They buy, improve, lease, or reposition the property during the balloon term, then either sell at a profit or refinance based on the property&apos;s improved value and income. The balloon deadline actually creates useful discipline for executing the business plan.",
            },
            {
              q: "How much should I have saved before a balloon payment comes due?",
              a: "At minimum, have enough liquid savings to cover 3–6 months of your refinancing runway if lenders are slow. Even better, begin setting aside money specifically for the balloon payment from day one — treat it like a savings goal, not an afterthought.",
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
            Tips for Managing Balloon Loan Risk
          </h2>
          <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              "Model multiple scenarios — Use the balloon loan estimator to see what happens if you refinance at 2% higher than today&apos;s rate",
              "Track your loan balance regularly — Know your remaining balance at least once a year, not just at maturity",
              "Improve your credit before the balloon date — A better score = better refi terms",
              "Watch property values — For real estate, negative equity is the biggest refinancing obstacle",
              "Consult a CPA or financial advisor — Especially for commercial deals, a second set of eyes on your balloon strategy is worth it",
              "Ask about extension options — Some lenders will extend the term if you&apos;re in good standing and can&apos;t immediately refinance",
              "Consider making extra payments — Even a few hundred extra per month chips away at your principal and reduces the balloon amount",
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
            Balloon loans aren&apos;t bad. They&apos;re a tool — and like any tool, they work great in the right hands and
            create serious problems in the wrong ones.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The right hands belong to borrowers who understand exactly what they&apos;re signing, have a concrete plan for
            the final payment, and have stress-tested that plan against realistic scenarios like higher refi rates or a
            slower-than-expected asset sale.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Before you commit to any balloon financing, run every scenario through the balloon loan calculator. Change the
            amortization period. Try different balloon percentages. See what your remaining balance looks like at year 3,
            5, and 7. Compare that against a traditional fixed loan. Then decide whether the lower monthly payments are
            worth the lump-sum risk at the end.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The calculator is free and takes 60 seconds. The decision it helps you make could be worth tens of thousands of
            dollars — or protect you from a mistake that costs just as much.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── RELATED CALCULATORS ── */}
        <section className="mb-8">
          <p className="text-base text-slate-600 dark:text-slate-400 italic">
            Looking for more borrowing tools? Check out our standard loan calculator, mortgage payment estimator, and debt
            payoff planner to build a complete picture of your financing options.
          </p>
        </section>

      </div>
    </article>
  );
}
