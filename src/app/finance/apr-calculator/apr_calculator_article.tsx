import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function APRArticle() {
  return (
    <article
      className={`w-full max-w-[75ch] mx-auto px-4 sm:px-6 py-10 sm:py-16 text-[16px] sm:text-[18px] leading-[1.8] font-sans text-slate-800 dark:text-slate-100 ${inter.variable}`}
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

        @media (max-width: 640px) {
          .dropcap::first-letter { font-size: 3.5rem; }
          .formula-block { font-size: 0.85rem; padding: 1rem; }
          .styled-table { font-size: 0.8rem; }
          .styled-table th, .styled-table td { padding: 0.4rem 0.5rem; }
          .pull-quote { font-size: 1.15rem; padding: 1.25rem 1rem; }
          .numbered-section .num { font-size: 1.5rem; min-width: 1.5rem; }
        }
      `}</style>

      <div className="article-root">

        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Personal Finance · Borrowing</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            APR Calculator: The Number That Actually Tells You What a Loan Costs
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for US borrowers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You get approved for a personal loan. The lender says the interest rate is 9.5%. Sounds reasonable, right? Then you
            get the paperwork and notice a $400 origination fee, a $150 processing charge, and a few other line items you
            didn&apos;t expect. Suddenly that 9.5% doesn&apos;t tell the whole story anymore.
          </p>
          <p className="mb-5">
            This is why APR exists. Annual Percentage Rate — APR — is the one number designed to capture the true cost of
            borrowing. It wraps together the interest rate and most of the fees into a single annual figure so you can compare
            loans honestly, side by side.
          </p>
          <p className="mb-5">
            The problem is that most borrowers never actually calculate it. They see a rate, assume it&apos;s the full picture,
            and sign on the dotted line. Then they wonder why the loan cost more than they expected.
          </p>
          <p>
            Using an APR calculator before you borrow — on a credit card, a car loan, a personal loan, or a mortgage — takes the
            guesswork out entirely. Let&apos;s break down exactly how it works.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS AN APR CALCULATOR ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is an APR Calculator?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            An APR calculator is a tool that computes the Annual Percentage Rate on a loan or line of credit, factoring in
            both the stated interest rate and any fees the lender charges. It gives you the real annual cost of borrowing
            expressed as a percentage.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Think of it as a truth-teller for loan offers. A lender can advertise a low interest rate, but if they stack on
            origination fees, closing costs, and broker charges, the APR will always be higher than the rate — sometimes
            significantly so.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            In the United States, lenders are legally required under the Truth in Lending Act (TILA) to disclose the APR before
            you sign any loan agreement. That law exists precisely because the interest rate alone doesn&apos;t tell you enough.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does an APR Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator takes your loan amount, interest rate, loan term, and any associated fees — then works backward to
            find the single annual rate that accounts for all of it. It&apos;s essentially solving for the rate that makes all
            your payments add up correctly when fees are included in the starting balance.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to plug in:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Loan amount", "The total amount you're borrowing"],
              ["Interest rate", "The nominal annual rate the lender quotes you"],
              ["Loan term", "How many months or years you have to repay"],
              ["Origination fee", "A common upfront charge, often 1%–8% of the loan"],
              ["Other fees", "Application fees, underwriting fees, broker fees, etc."],
              ["Compounding period", "Usually monthly for most US consumer loans"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            Feed in those numbers and the calculator spits out your APR — the honest annual cost of that loan.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The APR Formula Explained
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            There are a few ways to calculate APR depending on how complex the loan is. For a standard installment loan with
            upfront fees, the most practical approach uses the effective monthly rate — then annualizes it.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Simplified APR Formula:
          </p>
          <div className="formula-block">
            <pre>APR = [(Fees + Total Interest Paid) / Loan Principal] / Loan Term (years) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            For more precision — especially for loans with monthly compounding — the effective APR uses the iterative
            internal rate of return (IRR) method:
          </p>
          <div className="formula-block">
            <pre>{`Loan Amount (net of fees) = Σ [Payment / (1 + r)^n]

Where:
  r = monthly periodic rate (APR / 12)
  n = payment number (1 through total payments)
  Σ = sum over all payment periods

Solve for r, then: APR = r × 12`}</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            What each piece means:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["r", "The monthly rate you solve for iteratively"],
              ["n", "The payment period number"],
              ["Payment", "Your fixed monthly payment amount"],
              ["Loan Amount", "Principal minus fees paid upfront (fees reduce what you actually receive)"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-20 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            The key insight: fees reduce the effective loan amount you receive, but your payments stay the same — so you end
            up paying more per dollar borrowed. That&apos;s what APR captures.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step APR Calculation Example
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let&apos;s say you take out a $15,000 personal loan at 10% interest for 3 years, and the lender charges a 3%
            origination fee ($450). Here&apos;s how the APR shakes out.
          </p>

          {[
            {
              step: "1",
              title: "Calculate monthly payment (before fees)",
              content: (
                <div>
                  <div className="formula-block mt-2 text-sm">
                    <pre>{`M = 15,000 × [0.00833 × (1.00833)^36] / [(1.00833)^36 - 1]
M ≈ $483.94/month`}</pre>
                  </div>
                </div>
              ),
            },
            {
              step: "2",
              title: "Determine net loan proceeds",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>Loan amount: $15,000</li>
                  <li>Origination fee (3%): $450</li>
                  <li><strong>Net proceeds you receive: $14,550</strong></li>
                </ul>
              ),
            },
            {
              step: "3",
              title: "Solve for the monthly rate using the net proceeds",
              content: (
                <div className="formula-block mt-2 text-sm">
                  <pre>{`$14,550 = Σ [$483.94 / (1 + r)^n] for n = 1 to 36
Solve iteratively: r ≈ 0.9292% per month`}</pre>
                </div>
              ),
            },
            {
              step: "4",
              title: "Annualize to get APR",
              content: (
                <div>
                  <div className="formula-block mt-2 text-sm">
                    <pre>{`APR = 0.9292% × 12 = 11.15%`}</pre>
                  </div>
                  <p className="text-sm text-slate-800 dark:text-slate-100 mt-2">
                    The advertised rate was <strong>10%</strong>. The true APR with fees is <strong>11.15%</strong>.
                  </p>
                </div>
              ),
            },
            {
              step: "5",
              title: "Compare the total cost difference",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>Total paid at 10% rate (no fees): $17,421.84</li>
                  <li>Total paid with 3% origination fee: $17,421.84 + $450 = $17,871.84</li>
                  <li className="font-bold text-indigo-700 dark:text-indigo-400 pt-1">
                    The fee adds $450 to your cost — and the APR exposes it.
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

          <div className="aside-callout">
            A 1.15% difference in APR might not sound huge. But over a multi-year loan or a large balance, it adds up. Always
            run the APR calculation — or let the calculator do it — before you commit.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life APR Examples for US Borrowers
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            APR shows up differently depending on what you&apos;re borrowing for. Here&apos;s how it plays out across three of
            the most common loan types in America.
          </p>

          {[
            {
              heading: "Credit Card — $5,000 Balance, 22.99% APR",
              rows: [
                ["Balance", "$5,000"],
                ["APR", "22.99%"],
                ["Monthly rate", "1.916%"],
                ["Min. payment (2% of balance)", "~$100/month"],
                ["Time to pay off (min. payments)", "~94 months"],
                ["Total interest paid", "~$4,311"],
              ],
              note: "This is why minimum payments are a trap. At 22.99% APR — roughly the national average for credit cards in 2024 — a $5,000 balance paid down with minimums costs you almost as much in interest as the original debt.",
            },
            {
              heading: "Auto Loan — $32,000 Car, 60-Month Loan, 7.5% APR",
              rows: [
                ["Loan amount", "$32,000"],
                ["APR", "7.5%"],
                ["Loan term", "60 months"],
                ["Monthly payment", "$641"],
                ["Total interest paid", "$6,460"],
                ["Total cost", "$38,460"],
              ],
              note: "Auto loans are typically simpler — fees are usually baked in. But even a 1% APR difference on a $32K loan changes your total interest by about $800–$1,000 over the life of the loan. Shopping rates at the dealership vs. your credit union can make a real difference.",
            },
            {
              heading: "Personal Loan — $10,000 at 12.99% APR, 36 Months",
              rows: [
                ["Loan amount", "$10,000"],
                ["Interest rate", "11.5%"],
                ["Origination fee (1.5%)", "$150"],
                ["APR (with fee)", "12.99%"],
                ["Monthly payment", "$336"],
                ["Total interest + fees", "$2,096"],
              ],
              note: "Personal loans from online lenders often carry origination fees of 1%–8%. The interest rate might look competitive but the APR tells the real story. Always compare APR — not just the rate — when evaluating personal loan offers.",
            },
          ].map(({ heading, rows, note }) => (
            <div key={heading} className="state-card">
              <h3>{heading}</h3>
              <div className="overflow-x-auto w-full">
              <table className="styled-table">
                <tbody>
                  {rows.map(([item, val]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── APR VS INTEREST RATE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            APR vs. Interest Rate: What&apos;s the Actual Difference?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            This is one of the most misunderstood concepts in personal finance, and lenders don&apos;t always make it easy to
            understand. Here&apos;s the plain English version.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your <strong>interest rate</strong> is just the cost of borrowing the principal — expressed as an annual
            percentage. It doesn&apos;t include any fees whatsoever.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Your <strong>APR</strong> includes the interest rate <em>plus</em> most lender fees, spread across the loan term
            and expressed as an annual rate. It&apos;s almost always higher than the interest rate — and if it&apos;s exactly the
            same, the loan has no fees at all.
          </p>
          <div className="pull-quote">
            &quot;The interest rate tells you what the lender charges for the money. The APR tells you what the loan
            actually costs.&quot;
          </div>
          <p className="text-base text-slate-800 dark:text-slate-400 mb-3">
            Side-by-side comparison:
          </p>
          <div className="overflow-x-auto w-full">
              <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Feature</th>
                <th className="dark:text-slate-100">Interest Rate</th>
                <th className="dark:text-slate-100">APR</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Includes fees?", "No", "Yes"],
                ["Used for?", "Calculating monthly payment", "Comparing loan true cost"],
                ["Always higher?", "Base figure", "Almost always higher"],
                ["Required disclosure?", "Yes", "Yes (federal law, TILA)"],
                ["Best for comparing?", "Same loan, different rates", "Different loan offers"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="dark:text-slate-100">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The gap between your interest rate and APR signals how fee-heavy a loan is. A big gap — say, 10% rate but 14%
            APR — means the lender is loading up on fees. A tiny gap means the loan is relatively clean.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">
            Fixed APR vs. Variable APR
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A <strong>fixed APR</strong> doesn&apos;t change over the life of the loan. What you start with is what you
            keep. Most personal loans and auto loans are fixed.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A <strong>variable APR</strong> moves with a benchmark rate — typically the Prime Rate or the Secured Overnight
            Financing Rate (SOFR). Credit cards almost always carry variable APRs. HELOCs and ARMs typically do too.
          </p>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 p-4 rounded-sm">
            <p className="font-semibold text-indigo-900 dark:text-indigo-400 mb-2 font-sans text-sm tracking-wide uppercase">
              Quick rule of thumb:
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
              {[
                "Fixed APR → better for planning, stability",
                "Variable APR → can go up or down — great when rates fall, risky when they rise",
                "If rates are currently high and expected to drop, variable might save money long-term",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Using an APR Calculator
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Running the numbers before you borrow isn&apos;t just smart — it can save you hundreds or thousands of dollars.
            Here&apos;s what using a good APR calculator actually gets you.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Apples-to-apples loan comparison",
                body: "Two lenders quote you different rates with different fees. Without APR, you can't compare them fairly. With APR, you can — the higher APR is the more expensive loan, period.",
              },
              {
                n: "2",
                title: "No fee surprises",
                body: "Origination fees, application fees, and underwriting charges get absorbed into the APR. Running the calc before you sign means you know exactly what you're paying for.",
              },
              {
                n: "3",
                title: "Better negotiating position",
                body: "When you walk in knowing the APR, lenders can't hide fees behind a low advertised rate. You can ask them to reduce or waive fees and watch the APR drop in real time.",
              },
              {
                n: "4",
                title: "Accurate total cost projection",
                body: "The calculator doesn't just show you a rate — it shows you total interest paid over the loan term, which is ultimately what matters most for your wallet.",
              },
              {
                n: "5",
                title: "Refinancing clarity",
                body: "Thinking about refinancing? Comparing your current loan's APR against a new offer's APR gives you an immediate picture of whether it's actually worth it.",
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
            APR in America: What You Need to Know by Loan Type
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            APR ranges vary widely in the US depending on the loan type, your credit score, the lender, and current market
            conditions. Here&apos;s a grounded look at what&apos;s realistic.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Credit Card APR in the USA
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Credit card APRs in the US have been climbing. In 2024, the average credit card APR sits above 21% — the highest
            it&apos;s been in decades. Premium rewards cards regularly hit 24%–29.99% for variable APRs.
          </p>
          <div className="overflow-x-auto w-full">
              <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Card Type</th>
                <th className="dark:text-slate-100">Typical APR Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Secured credit card (credit building)", "22%–29%"],
                ["Standard rewards card", "19.99%–26.99%"],
                ["Premium travel/cash back card", "21.99%–29.99%"],
                ["Balance transfer card (intro period)", "0% for 12–21 months"],
                ["Store / retail credit card", "25%–34%"],
                ["Credit union credit card", "10%–18%"],
              ].map(([type, range]) => (
                <tr key={type}>
                  <td className="dark:text-slate-100">{type}</td>
                  <td className="dark:text-slate-100">{range}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          <div className="aside-callout">
            Credit union cards are worth a look if you qualify. Their APRs are often 8–12 percentage points lower than
            big bank cards — and that&apos;s not a small difference on a revolving balance.
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-8">
            Auto Loan APR in the USA
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Auto loan APRs depend heavily on whether you&apos;re buying new or used, your credit score, and your lender.
            Dealer financing and direct bank/credit union loans often have meaningfully different rates — sometimes by 3%–5%.
          </p>
          <div className="overflow-x-auto w-full">
              <table className="styled-table styled-table-plain mb-4">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Credit Score</th>
                <th className="dark:text-slate-100">New Car APR (avg)</th>
                <th className="dark:text-slate-100">Used Car APR (avg)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["781–850 (Super Prime)", "5.2%", "6.8%"],
                ["661–780 (Prime)", "6.9%", "9.6%"],
                ["601–660 (Near Prime)", "9.6%", "13.7%"],
                ["501–600 (Subprime)", "13.1%", "18.9%"],
                ["300–500 (Deep Subprime)", "15.7%+", "21%+"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j} className="dark:text-slate-100">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic mb-4">Approximate averages based on 2024 US market data.</p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-8">
            Personal Loan APR Ranges in the USA
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Personal loans are unsecured — there&apos;s no car or house backing them up — so lenders price in more risk.
            APRs can run anywhere from 6% to 36% depending on your credit profile and the lender type.
          </p>
          <div className="overflow-x-auto w-full">
              <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Lender Type</th>
                <th className="dark:text-slate-100">Typical APR Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Credit union personal loan", "6%–18%"],
                ["Traditional bank personal loan", "8%–24%"],
                ["Online lender (good credit)", "7%–20%"],
                ["Online lender (fair credit)", "18%–32%"],
                ["Payday alternative loan", "28%–36%"],
                ["Payday loan (traditional)", "300%–400%+ APR"],
              ].map(([type, range]) => (
                <tr key={type}>
                  <td className="dark:text-slate-100">{type}</td>
                  <td className="dark:text-slate-100">{range}</td>
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          <div className="aside-callout">
            Payday loans are technically legal in many states but their APRs can top 400%. The CFPB (Consumer Financial
            Protection Bureau) has consistently flagged these as predatory products. If you&apos;re in a cash crunch, a credit
            union payday alternative loan (PAL) — capped at 28% APR — is a dramatically better option.
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-8">
            How Banks in the USA Calculate APR
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            US banks are required to calculate and disclose APR under Regulation Z (which implements the Truth in Lending Act).
            The calculation must include:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              "The stated interest rate",
              "Origination or underwriting fees",
              "Mortgage broker fees (for home loans)",
              "Points paid to reduce the rate",
              "Most required closing costs (for mortgages)",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Notably, APR does <em>not</em> include optional fees like late payment penalties, prepayment fees, or third-party
            charges like title insurance. It&apos;s still the best standardized comparison metric, but it&apos;s not a
            complete accounting of every dollar you might spend.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-8">
            Credit Score Impact on APR
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your FICO score is probably the single biggest driver of the APR you&apos;re offered. Here&apos;s a real-world
            look at how much it matters on a $20,000 personal loan over 3 years:
          </p>
          <div className="overflow-x-auto w-full">
              <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Credit Score</th>
                <th className="dark:text-slate-100">Estimated APR</th>
                <th className="dark:text-slate-100">Monthly Payment</th>
                <th className="dark:text-slate-100">Total Interest</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["760–850", "7.5%", "$621", "$2,356"],
                ["720–759", "10.5%", "$650", "$3,400"],
                ["680–719", "14.9%", "$693", "$4,948"],
                ["640–679", "21%", "$747", "$6,892"],
                ["600–639", "28%", "$809", "$9,124"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j} className="dark:text-slate-100">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            That&apos;s a $6,768 difference in interest between excellent and poor credit on a single $20,000 loan. If your
            score is below 720, it&apos;s almost always worth spending a few months improving it before you apply for any
            major loan.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-8">
            Banks vs. Credit Unions: APR Differences
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Credit unions are member-owned nonprofits. Because they&apos;re not chasing profit margins for shareholders,
            they consistently offer lower APRs across most loan categories.
          </p>
          <div className="overflow-x-auto w-full">
              <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Loan Type</th>
                <th className="dark:text-slate-100">Bank APR (avg)</th>
                <th className="dark:text-slate-100">Credit Union APR (avg)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Credit card", "21%–26%", "11%–17%"],
                ["Personal loan", "11%–20%", "7%–14%"],
                ["New auto loan (60 mo.)", "7%–9%", "5.5%–7.5%"],
                ["Used auto loan (48 mo.)", "9%–12%", "6.5%–9%"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j} className="dark:text-slate-100">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
            </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            You can find a credit union through MyCreditUnion.gov or NCUA.gov. Most have looser membership requirements than
            people think — employer, geography, school affiliation, or even just a small donation to a qualifying organization
            often gets you in.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common APR Mistakes Borrowers Make
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially savvy people slip up here. Here&apos;s what to watch out for:
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Comparing interest rates instead of APRs",
                body: "Lender A quotes 8.9% rate with $600 in fees. Lender B quotes 9.5% with no fees. Many people pick Lender A — but depending on the loan term, Lender B might actually be cheaper. Always compare APRs.",
              },
              {
                n: "2",
                title: "Ignoring the APR on promotional 0% offers",
                body: "Buy-now-pay-later deals and 0% intro APR credit cards sound amazing. But if you don't pay off the balance before the promotional period ends, deferred interest can hit you hard — sometimes retroactively at 26.99% on the original balance.",
              },
              {
                n: "3",
                title: "Assuming a lower APR is always better",
                body: "A longer loan term can come with a higher APR but lower monthly payments. You need both metrics — the APR and the total cost — to make a smart decision.",
              },
              {
                n: "4",
                title: "Not accounting for early payoff",
                body: "APR calculations assume you keep the loan for the full term. If you pay it off early, the effective cost of fees increases per dollar borrowed. Factor this in if you plan to pay early.",
              },
              {
                n: "5",
                title: "Overlooking what APR doesn't include",
                body: "Late fees, prepayment penalties, and optional add-ons (like credit life insurance) usually don't appear in the APR. Read the full loan agreement — not just the APR disclosure.",
              },
              {
                n: "6",
                title: "Accepting the first offer",
                body: "Most lenders run a soft credit pull for pre-qualification that doesn't affect your score. Get quotes from 3–5 lenders before you commit. The spread can be 3%–8% APR on the same loan profile.",
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
            Practical Tips to Lower Your APR
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Improve your credit score first</strong> — even 30–40 points can drop your APR by 2%–5% on personal loans and auto loans</>],
              [<><strong>Shop at least 3 lenders</strong> — rates vary more than most people realize; credit unions are almost always worth including</>],
              [<><strong>Ask for fee waivers</strong> — origination fees are sometimes negotiable, especially with strong credit or existing banking relationships</>],
              [<><strong>Pay down existing debt</strong> — your debt-to-income ratio affects APR alongside your score; lower DTI signals lower risk</>],
              [<><strong>Consider a co-signer</strong> — if your score is weak, a creditworthy co-signer can significantly reduce your APR</>],
              [<><strong>Time your application strategically</strong> — applying when the Fed is cutting rates means you&apos;re likely to see lower variable APRs</>],
              [<><strong>Watch for balance transfer offers</strong> — 0% APR transfers can buy you 12–21 months of interest-free repayment on credit card debt</>],
              [<><strong>Avoid payday loans entirely</strong> — their APRs are predatory; a credit union PAL or personal loan is almost always available and dramatically cheaper</>],
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
                q: "What does APR stand for?",
                a: "APR stands for Annual Percentage Rate. It represents the total yearly cost of borrowing money, expressed as a percentage. Unlike the simple interest rate, APR includes most lender fees and charges, making it the more useful number when comparing different loan offers.",
              },
              {
                q: "Is APR the same as interest rate?",
                a: "No — they're related but different. The interest rate is just the cost of borrowing the principal. APR includes the interest rate plus most associated fees (origination, broker, points, etc.), spread across the loan term. APR is almost always higher than the stated interest rate, except on fee-free loans where they're identical.",
              },
              {
                q: "What is a good APR for a personal loan in the USA?",
                a: "A good personal loan APR for borrowers with excellent credit (750+) is typically 7%–12%. Fair credit borrowers often see 15%–24%. Anything above 28%–30% is considered high-risk territory. For reference, the average personal loan APR in the US in 2024 sits around 12%–14% for well-qualified borrowers.",
              },
              {
                q: "How does APR affect my monthly payment?",
                a: "APR affects your monthly payment indirectly — the underlying interest rate (which APR is built from) is what drives the payment calculation directly. A higher APR means a higher effective interest rate, which means more of each payment goes toward interest rather than principal, increasing the total cost of the loan.",
              },
              {
                q: "What fees are included in APR?",
                a: "Under US law (Regulation Z), APR must include: origination fees, underwriting fees, mortgage broker fees, discount points, and most required prepaid items for mortgages. It does NOT include optional services, late payment fees, prepayment penalties, or third-party charges like title insurance.",
              },
              {
                q: "What is a good APR for a credit card?",
                a: "With excellent credit, 14%–17% is considered good for a credit card in today's market. The national average is above 21%. If you pay your balance in full every month, APR doesn't cost you anything — it only matters if you carry a balance. If you do carry a balance, anything under 20% is preferable.",
              },
              {
                q: "Can APR be lower than the interest rate?",
                a: "In practice, no — APR includes the interest rate plus fees, so it's always equal to or higher than the interest rate. The only case where they'd be identical is a loan with zero lender fees. Some lenders advertise an 'APY' (Annual Percentage Yield) which uses compound interest math and can behave differently, but true APR under TILA is never lower than the rate.",
              },
              {
                q: "How is APR calculated for credit cards?",
                a: "Credit card APR is typically calculated as a daily periodic rate — take the APR and divide by 365 to get the daily rate. That rate is applied to your average daily balance each billing cycle. So a 22% APR means roughly 0.0603% per day. On a $3,000 balance, that's about $1.81 per day in interest, or roughly $55/month.",
              },
              {
                q: "Does APR change over the life of a loan?",
                a: "On fixed-rate installment loans (personal loans, auto loans), APR doesn't change. On variable-rate products (most credit cards, HELOCs, ARMs), APR moves with the benchmark rate — usually the Prime Rate. When the Fed raises rates, variable APRs follow. When rates drop, they fall too.",
              },
              {
                q: "What happens to APR if I pay off a loan early?",
                a: "Paying off a loan early can actually increase your effective APR because you paid the upfront fees over a shorter period. For example, a $500 origination fee on a 3-year loan costs you about $13.89/month. If you pay it off in 18 months, the fee effectively cost you $27.78/month — raising the actual cost rate. This is why shorter loan terms almost always show higher APRs.",
              },
              {
                q: "Is APR or APY more important for savings accounts?",
                a: "For savings accounts and investments, APY (Annual Percentage Yield) is more relevant because it accounts for compound interest. APR is the relevant metric for borrowing — loans, credit cards, and mortgages. When a savings account advertises APY, it's showing you what you'll actually earn. When a loan advertises APR, it's showing you what you'll actually pay.",
              },
              {
                q: "Why do mortgage APRs differ from the rate quoted at pre-approval?",
                a: "Mortgage APR includes origination fees, discount points, mortgage broker fees, and certain prepaid items that get added to the interest rate. At pre-approval, lenders typically quote just the interest rate. When you get the official Loan Estimate, the APR will be slightly higher. That gap — typically 0.1% to 0.5% for conventional loans — reflects the loan's fees.",
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
            Borrowing money is one of the most consequential financial moves you make. Whether it&apos;s a car, a home, a
            consolidation loan, or a credit card balance — the APR determines how much that decision actually costs you over
            time.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The interest rate is what lenders advertise. The APR is what you pay. Once you internalize that distinction, you
            become a much harder borrower to mislead.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the APR calculator at the top of this page every time you&apos;re comparing loan offers. Run the numbers on
            different fee structures. See how your credit score affects the rate you qualify for. And always — always — look
            at the total interest paid over the loan term, not just the monthly payment.
          </p>
          <div className="pull-quote mt-8">
            The monthly payment tells you if you can afford it. The APR tells you what it actually costs. You need both numbers to borrow smart.
          </div>
        </section>

      </div>
    </article>
  );
}