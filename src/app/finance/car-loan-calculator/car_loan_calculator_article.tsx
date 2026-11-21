import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CarLoanCalculatorArticle() {
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
          <span className="meta-tag">Personal Finance · Auto Loans</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Car Loan Calculator: Figure Out Your Monthly Payment Before You Step Into the Dealership
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for US car buyers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You&apos;ve found the truck. It&apos;s the right color, the right trim, and the salesperson is telling you it&apos;s
            only $489 a month. Sounds reasonable — until you realize that&apos;s a 72-month loan at 9% APR, and you&apos;ll end
            up paying nearly $6,000 in interest on a truck that&apos;ll be worth half what you paid by the time you&apos;re
            done.
          </p>
          <p className="mb-5">
            This happens constantly at dealerships across America. The monthly payment gets all the attention, and the
            total cost of the loan gets buried.
          </p>
          <p className="mb-5">
            A car loan calculator flips that script. You control the numbers. You can test different loan amounts,
            interest rates, and term lengths in seconds — before anyone hands you a pen. It&apos;s one of the smartest things
            you can do before walking onto a lot, calling a lender, or clicking &quot;apply&quot; on an auto financing website.
          </p>
          <p>
            Let&apos;s break it all down.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS A CAR LOAN CALCULATOR ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Car Loan Calculator?
          </h2>
          <div className="aside-callout">
            <strong>A car loan calculator is a digital tool that estimates your monthly car payment based on the vehicle
            price, down payment, trade-in value, interest rate, and loan term. It also shows you the total amount you&apos;ll
            pay and how much of that goes to interest.</strong>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Most car payment calculators let you adjust:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Vehicle price", "The sticker price or agreed-upon purchase price"],
              ["Down payment", "Cash you pay upfront"],
              ["Trade-in value", "What your current car is worth as a credit toward the new one"],
              ["Sales tax", "Added to the loan in most states"],
              ["Loan term", "Usually 36, 48, 60, 72, or 84 months"],
              ["Annual interest rate (APR)", "What the lender charges to finance your purchase"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            Hit calculate and you&apos;ll see your estimated monthly payment, total amount paid, and total interest charged.
            Some calculators also generate a month-by-month amortization schedule.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does a Car Loan Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The car loan payment calculator uses a standard loan amortization formula that banks and auto lenders use
            every day. Here&apos;s the short version:
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your loan amount (principal) is spread across equal monthly payments over the loan term. Each payment covers
            some interest and some principal. Early payments are mostly interest. Later payments chip away more at what
            you actually owe.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The formula calculates the fixed monthly payment that — when made consistently — zeros out your balance by the
            final month.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            To use the calculator, you need:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
            <li>1. The <strong>loan amount</strong> (vehicle price minus down payment and trade-in, plus tax/fees)</li>
            <li>2. The <strong>annual interest rate</strong></li>
            <li>3. The <strong>loan term in months</strong></li>
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            That&apos;s it. The math happens automatically.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Car Loan Formula Explained
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            For anyone curious about the math behind the calculator:
          </p>
          <div className="formula-block">
            <pre>M = P × [r(1+r)^n] / [(1+r)^n - 1]</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">Where:</p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-5">
            {[
              ["M", "Monthly payment"],
              ["P", "Loan principal (amount financed)"],
              ["r", "Monthly interest rate (annual APR ÷ 12)"],
              ["n", "Number of monthly payments (loan term in months)"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-20 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Example quick math:</p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Borrowing $25,000 at 7% APR for 60 months:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• Monthly rate: 7% ÷ 12 = 0.5833% = 0.005833</li>
            <li>• Monthly payment: ≈ <strong>$495.03</strong></li>
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Again — you don&apos;t have to do this by hand. The car loan calculator runs it instantly. But understanding the
            formula shows you exactly why interest rate and term length matter so much.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP EXAMPLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step Car Loan Calculation Example
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let&apos;s walk through a realistic purchase from start to finish.
          </p>
          <div className="state-card">
            <h3>Scenario</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Kelsey is buying a used 2022 Honda CR-V in Atlanta, Georgia for <strong>$28,000</strong>. She puts
              <strong>$3,000 down</strong> and has a trade-in worth <strong>$4,000</strong>. Georgia sales tax is
              <strong>7%</strong>, and she&apos;s been offered a <strong>6.5% APR</strong> for <strong>60 months</strong> through her credit union.
            </p>
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Step 1: Calculate the Amount Financed</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th className="dark:text-slate-100"></th>
                <th className="dark:text-slate-100"></th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Vehicle Price", "$28,000"],
                ["Minus Down Payment", "–$3,000"],
                ["Minus Trade-In Value", "–$4,000"],
                ["Subtotal", "$21,000"],
                ["Plus Sales Tax (7%)", "+$1,470"],
                ["Amount Financed", "$22,470"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="dark:text-slate-100">{label}</td>
                  <td className="dark:text-slate-100">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Step 2: Calculate Monthly Payment</h3>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• Monthly rate: 6.5% ÷ 12 = 0.5417% = 0.005417</li>
            <li>• n = 60 months</li>
            <li>• <strong>Monthly payment ≈ $438.73</strong></li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">Step 3: Calculate Total Cost</h3>
          <table className="styled-table">
            <thead>
              <tr>
                <th className="dark:text-slate-100"></th>
                <th className="dark:text-slate-100"></th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Monthly Payment", "$438.73"],
                ["× 60 Months", "× 60"],
                ["Total Paid", "$26,323.80"],
                ["Minus Amount Financed", "–$22,470"],
                ["Total Interest Paid", "$3,853.80"],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="dark:text-slate-100">{label}</td>
                  <td className="dark:text-slate-100">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            Kelsey&apos;s total out-of-pocket for the vehicle (including her $3,000 down and $4,000 trade-in): about
            <strong> $33,300</strong> all-in.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── AMORTIZATION TABLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Sample Amortization Table
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Here&apos;s how the early months of Kelsey&apos;s loan break down:
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
                ["1", "$438.73", "$121.71", "$317.02", "$22,152.98"],
                ["2", "$438.73", "$119.99", "$318.74", "$21,834.24"],
                ["6", "$438.73", "$114.17", "$324.56", "$20,744.00"],
                ["12", "$438.73", "$106.81", "$331.92", "$19,439.00"],
                ["24", "$438.73", "$91.62", "$347.11", "$16,615.00"],
                ["36", "$438.73", "$75.28", "$363.45", "$13,534.00"],
                ["48", "$438.73", "$57.63", "$381.10", "$10,172.00"],
                ["60", "$438.73", "$2.37", "$436.36", "$0.00"],
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
            Month 1: $122 goes to interest, $317 to principal. By month 60, almost everything goes to principal.
            That&apos;s amortization in action.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Car Financing Examples
          </h2>

          <div className="state-card">
            <h3>Example 1: New SUV, Excellent Credit — David in Texas</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              David has a 760 credit score and is buying a <strong>2024 Toyota RAV4</strong> in Houston for
              <strong>$34,500</strong>. He puts <strong>$5,000 down</strong> and qualifies for <strong>5.2% APR</strong> on a
              <strong>48-month</strong> loan. Texas has no state income tax but charges <strong>6.25% sales tax</strong>.
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-3">
              <li>• Amount financed: $34,500 – $5,000 + $2,156 (tax) = <strong>$31,656</strong></li>
              <li>• Monthly payment: <strong>$729.58</strong></li>
              <li>• Total interest paid: <strong>$3,420</strong></li>
            </ul>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              Clean deal. Good credit gets him a competitive rate and saves him thousands compared to what someone with
              average credit would pay.
            </p>
          </div>

          <div className="state-card">
            <h3>Example 2: Used Sedan, Average Credit — Tanya in Florida</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Tanya&apos;s credit score is 660. She&apos;s buying a <strong>2020 Toyota Camry</strong> for <strong>$19,500</strong> in
              Orlando. She has <strong>$1,500 down</strong> and no trade-in. Florida sales tax is <strong>6%</strong>. Her bank
              offers her <strong>9.9% APR</strong> for <strong>60 months</strong>.
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-3">
              <li>• Amount financed: $19,500 – $1,500 + $1,170 = <strong>$19,170</strong></li>
              <li>• Monthly payment: <strong>$407.52</strong></li>
              <li>• Total interest paid: <strong>$5,281.20</strong></li>
            </ul>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              Tanya pays $5,281 in interest on a $19,500 car. That&apos;s a 27% markup in financing costs alone. Her
              monthly payment looks manageable — but the total cost stings.
            </p>
          </div>

          <div className="state-card">
            <h3>Example 3: Truck, Poor Credit — Marcus in California</h3>
            <p className="text-base text-slate-800 dark:text-slate-100 mb-3">
              Marcus has a 590 credit score and needs a <strong>2019 Ram 1500</strong> for his contracting work. The truck
              costs <strong>$27,000</strong> in Sacramento. He puts <strong>$2,000 down</strong>, has no trade-in, and
              qualifies only for <strong>16.9% APR</strong> through a subprime lender on a <strong>72-month</strong> loan.
              California sales tax is <strong>8.25%</strong>.
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-3">
              <li>• Amount financed: $27,000 – $2,000 + $2,228 = <strong>$27,228</strong></li>
              <li>• Monthly payment: <strong>$593.64</strong></li>
              <li>• Total interest paid: <strong>$15,534</strong></li>
            </ul>
            <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
              Marcus pays more than <strong>57%</strong> extra in interest costs. That $27,000 truck ends up costing over
              $44,700 all-in. This is exactly why the auto financing calculator is so valuable — it makes those true
              costs impossible to ignore.
            </p>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── LOAN TERM COMPARISON ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Loan Term Comparison: How Length Affects Your Payment and Total Cost
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Same vehicle ($25,000 financed), same interest rate (7% APR):
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Loan Term</th>
                <th className="dark:text-slate-100">Monthly Payment</th>
                <th className="dark:text-slate-100">Total Paid</th>
                <th className="dark:text-slate-100">Total Interest</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["36 months", "$772", "$27,792", "$2,792"],
                ["48 months", "$597", "$28,656", "$3,656"],
                ["60 months", "$495", "$29,700", "$4,700"],
                ["72 months", "$427", "$30,744", "$5,744"],
                ["84 months", "$378", "$31,752", "$6,752"],
              ].map(([term, monthly, total, interest]) => (
                <tr key={term}>
                  <td className="dark:text-slate-100">{term}</td>
                  <td className="dark:text-slate-100">{monthly}</td>
                  <td className="dark:text-slate-100">{total}</td>
                  <td className="dark:text-slate-100">{interest}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            The 84-month loan feels affordable at $378/month. But you pay <strong>$6,752 in interest</strong> — nearly 2.5x
            what you&apos;d pay on a 36-month loan. Worse, a car depreciates fast, and long loans risk putting you
            upside-down (owing more than the car is worth).
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS THAT AFFECT PAYMENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Your Car Loan Payment
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">1. Vehicle Price (Principal)</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                The sticker price isn&apos;t necessarily your loan amount. You still subtract your down payment and trade-in.
                Always negotiate the purchase price <em>before</em> discussing financing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">2. Down Payment</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Bigger down payment = smaller loan = lower payment = less interest. Every $1,000 extra you put down
                typically reduces your monthly payment by $15–$25 and saves meaningfully in interest.
              </p>
              <div className="aside-callout">
                <strong>Rule of thumb:</strong> Aim for at least 10–20% down on a new car, 10–15% on a used car. Zero down
                is possible but risky.
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">3. Trade-In Value</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Your trade-in functions like a down payment. If your current car is worth $8,000, that&apos;s $8,000 off
                your loan. Check your trade-in value at Kelley Blue Book (KBB), Edmunds, or Carvana <em>before</em> you walk
                into a dealership.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">4. Interest Rate (APR)</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                The single biggest variable after loan amount. Your credit score is the primary determinant. Here&apos;s what
                to expect in 2024–2025:
              </p>
              <table className="styled-table styled-table-plain">
                <thead>
                  <tr>
                    <th className="dark:text-slate-100">Credit Score Range</th>
                    <th className="dark:text-slate-100">Rating</th>
                    <th className="dark:text-slate-100">Typical New Car APR</th>
                    <th className="dark:text-slate-100">Typical Used Car APR</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["720 – 850", "Excellent", "5% – 7%", "6% – 9%"],
                    ["660 – 719", "Good", "7% – 10%", "9% – 13%"],
                    ["620 – 659", "Fair", "10% – 15%", "13% – 18%"],
                    ["580 – 619", "Poor", "15% – 20%", "18% – 22%"],
                    ["Below 580", "Very Poor", "20%+", "22%+"],
                  ].map(([range, rating, newCar, usedCar]) => (
                    <tr key={range}>
                      <td className="dark:text-slate-100">{range}</td>
                      <td className="dark:text-slate-100">{rating}</td>
                      <td className="dark:text-slate-100">{newCar}</td>
                      <td className="dark:text-slate-100">{usedCar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
                These ranges shift with the broader interest rate environment — rates have been elevated since the Fed&apos;s
                rate hiking cycle. Always check current rates before assuming any number.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">5. Loan Term</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                We covered this in the comparison table above. Shorter is cheaper overall. Longer is easier on the monthly
                budget. The right answer depends on your situation — just use the car loan estimator to see the full
                picture before deciding.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">6. Sales Tax and Fees</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                These are real costs that get rolled into the loan in most states. Sales tax alone can add $1,000–$3,000+
                depending on the vehicle price and your state&apos;s rate. Registration, title, and dealer doc fees (which
                can be $100–$700+) also add up.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">7. Credit Score</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                It affects your rate, your approval odds, and sometimes your available loan term. Build credit before you
                need a car loan — not after.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">8. Debt-to-Income Ratio (DTI)</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Lenders want to know you can actually afford the payment. Most prefer your total monthly debt obligations
                stay under 40–45% of gross monthly income. A $600 car payment on a $3,000/month income is a red flag for
                most lenders.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── NEW VS USED ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            New Car vs. Used Car Financing
          </h2>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Feature</th>
                <th className="dark:text-slate-100">New Car</th>
                <th className="dark:text-slate-100">Used Car</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Purchase Price", "Higher", "Lower"],
                ["Interest Rate", "Usually lower", "Usually higher"],
                ["Depreciation", "Hits hardest in year 1", "Already depreciated"],
                ["Loan Term Available", "Up to 84 months", "Often capped at 72 months"],
                ["Warranty", "Full manufacturer warranty", "Limited or none"],
                ["Financing Options", "Dealer, bank, credit union, OEM", "Bank, credit union, some dealers"],
              ].map(([feature, newCar, usedCar]) => (
                <tr key={feature}>
                  <td className="dark:text-slate-100">{feature}</td>
                  <td className="dark:text-slate-100">{newCar}</td>
                  <td className="dark:text-slate-100">{usedCar}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            New cars often carry lower APRs because they&apos;re better collateral. Used cars may have higher rates but lower
            prices — a used car loan calculator helps you figure out whether the numbers actually work in your favor.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHERE TO GET A CAR LOAN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Where to Get a Car Loan in the USA
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Dealer Financing</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Convenient — sometimes very. The dealer submits your application to multiple lenders and presents you with
                an offer. But dealers can mark up the interest rate (called a &quot;dealer reserve&quot; or &quot;dealer
                participation&quot;) and pocket the difference. Always get a pre-approval from your bank or credit union first
                so you have a rate to compare against.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Banks</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Major banks (Chase Auto, Bank of America, Wells Fargo) offer competitive auto loans, especially for existing
                customers. Approval can be quick, and you&apos;ll get a concrete rate to bring to the dealer.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Credit Unions</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Credit unions consistently offer some of the best auto loan rates available. If you&apos;re a member of a
                credit union — or can join one — check their rates before going anywhere else. Many offer pre-approval in
                24–48 hours.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Online Lenders</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Companies like LightStream, Capital One Auto Finance, PenFed, and MyAutoLoan let you get pre-approved
                entirely online. Rates are often competitive, and they typically allow you to shop at any dealership once
                approved.
              </p>
            </div>
            <table className="styled-table styled-table-plain">
              <thead>
                <tr>
                  <th className="dark:text-slate-100">Lender Type</th>
                  <th className="dark:text-slate-100">Best For</th>
                  <th className="dark:text-slate-100">Speed</th>
                  <th className="dark:text-slate-100">Rate Competitiveness</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Dealer", "Convenience, 0% deals (new cars)", "Fast", "Varies widely"],
                  ["Bank", "Existing customers, competitive rates", "1–3 days", "Good"],
                  ["Credit Union", "Best overall rates", "1–3 days", "Excellent"],
                  ["Online Lenders", "All credit types, shopping flexibility", "24–48 hours", "Good to excellent"],
                ].map(([type, best, speed, rate]) => (
                  <tr key={type}>
                    <td className="dark:text-slate-100">{type}</td>
                    <td className="dark:text-slate-100">{best}</td>
                    <td className="dark:text-slate-100">{speed}</td>
                    <td className="dark:text-slate-100">{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 mt-6">Manufacturer Financing (OEM)</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Ford Motor Credit, Toyota Financial Services, GM Financial, and similar captive lenders often run promotional
                rates — sometimes 0% APR for 36–60 months on new vehicles. These deals are almost exclusively for buyers
                with excellent credit (720+). If you qualify, they&apos;re hard to beat.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── LEASING VS FINANCING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Leasing vs. Financing: What&apos;s the Difference?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            This isn&apos;t a lease guide, but the comparison matters when you&apos;re using a car loan calculator:
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100"></th>
                <th className="dark:text-slate-100">Financing</th>
                <th className="dark:text-slate-100">Leasing</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ownership", "You own it", "You don&apos;t own it"],
                ["Monthly Payments", "Higher", "Lower"],
                ["Mileage Limits", "None", "Usually 10,000–15,000/yr"],
                ["Customization", "Yes", "Limited"],
                ["End of Term", "You keep the car", "Return or buy out"],
                ["Equity Built", "Yes", "None"],
              ].map(([feature, financing, leasing]) => (
                <tr key={feature}>
                  <td className="dark:text-slate-100">{feature}</td>
                  <td className="dark:text-slate-100">{financing}</td>
                  <td className="dark:text-slate-100">{leasing}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            Financing builds equity. Leasing gives you lower payments but nothing at the end. Most financial advisors lean
            toward financing for long-term value — especially if you keep your vehicles for 8–10 years.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── DEPRECIATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Vehicle Depreciation and Why It Matters
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            New cars lose roughly <strong>20% of their value in the first year</strong> and about <strong>50% in five
            years</strong>. That depreciation curve is the reason long loan terms are dangerous.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            If you finance $35,000 over 84 months and the car loses $15,000 in value over the first two years, you could
            easily owe $30,000+ on a car worth $20,000. That&apos;s <strong>negative equity</strong> — also called being
            &quot;upside-down&quot; on your loan.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Negative equity creates problems when you want to sell, trade in, or if the car gets totaled. The auto financing
            calculator can&apos;t show you depreciation directly, but understanding it changes how you think about term
            length.
          </p>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">GAP Insurance</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            If you&apos;re upside-down or have a small down payment, GAP (Guaranteed Asset Protection) insurance covers the
            difference between what you owe and what insurance pays if the car is totaled. It typically costs $200–$500
            and is worth it if you&apos;re financing a new car with little money down.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Using a Car Loan Calculator
          </h2>
          <ul className="tip-list space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              "No dealership pressure — Run numbers at home, on your terms",
              "Instant comparisons — Test 48 vs. 60 vs. 72 months in seconds",
              "Total cost visibility — See interest costs, not just monthly payments",
              "Down payment optimization — Find out how much more down actually helps",
              "Rate shopping leverage — Come in with numbers so dealers can&apos;t blindside you",
              "Trade-in clarity — Model how different trade-in values affect your payment",
              "Budget alignment — Make sure the payment fits your real monthly budget, not just your hopeful one",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Car Loan Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Negotiating From the Monthly Payment</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                This is one of dealerships&apos; favorite tricks. &quot;What payment are you looking for?&quot; sounds helpful
                — but when the focus stays on monthly payment, the dealer can stretch the loan term, inflate the rate, or
                roll in extras that cost you thousands. Negotiate the total vehicle price first, always.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Skipping Pre-Approval</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Walking in without a pre-approved rate hands negotiating power to the dealer. Spend 20 minutes getting
                pre-approved from your bank or credit union. That number becomes your benchmark.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Ignoring the Total Cost</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                A $150 difference in monthly payment between a 48-month and 72-month loan sounds like a no-brainer — until
                you realize the 72-month loan costs $3,000 more in interest. The vehicle loan calculator shows you this in
                seconds.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Rolling Negative Equity Into a New Loan</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                If you owe $14,000 on a car worth $10,000, that $4,000 in negative equity can be rolled into a new loan.
                But now you&apos;re starting $4,000 behind. That&apos;s a cycle that traps a lot of buyers in perpetual
                negative equity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Financing Add-Ons You Don&apos;t Need</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Extended warranties, paint protection, tire and wheel insurance, credit life insurance — dealers make good
                money on these products. Some are useful; many are overpriced. Never finance optional add-ons you haven&apos;t
                researched and priced elsewhere.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Applying to Too Many Lenders at Once</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Multiple hard inquiries hurt your credit score. But the good news: the credit bureaus treat multiple auto loan
                inquiries made within a 14–45 day window as a single inquiry for scoring purposes. Shop aggressively, but
                do it within a concentrated time frame.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Ignoring Credit Union Options</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Countless Americans walk into dealerships without realizing their credit union might offer a rate 2–3
                percentage points lower. On a $25,000 loan over 60 months, 2 percentage points is roughly $1,500 in savings.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── USA SPECIFIC INFO ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            USA-Specific Car Financing Information
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">State Sales Tax Differences</h3>
              <table className="styled-table styled-table-plain">
                <thead>
                  <tr>
                    <th className="dark:text-slate-100">State</th>
                    <th className="dark:text-slate-100">Sales Tax on Vehicles</th>
                    <th className="dark:text-slate-100">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["California", "7.25% – 10.25%", "Varies by county"],
                    ["Texas", "6.25%", "Flat statewide"],
                    ["Florida", "6% + county", "Can reach 7.5%+"],
                    ["New York", "4% + local", "NYC area can hit 8.875%"],
                    ["Oregon", "0%", "No sales tax"],
                    ["Montana", "0%", "No sales tax"],
                    ["New Hampshire", "0%", "No sales tax"],
                  ].map(([state, tax, notes]) => (
                    <tr key={state}>
                      <td className="dark:text-slate-100">{state}</td>
                      <td className="dark:text-slate-100">{tax}</td>
                      <td className="dark:text-slate-100">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
                Sales tax is a real cost. On a $35,000 vehicle in Los Angeles, you could owe $3,500+ in tax alone. Your
                car loan calculator should always include tax in the amount financed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Doc Fees by State</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                Dealer documentation fees (doc fees) are often non-negotiable but vary wildly by state. Florida caps them
                at $169. California caps them around $85. Texas has no cap — some Texas dealers charge $600–$800.
                Always ask about doc fees before finalizing any deal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Current Financing Trends (2024–2025)</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Auto loan interest rates have remained elevated compared to the low-rate environment of 2020–2021. The
                average new car loan rate for borrowers with good credit has been in the <strong>7–9% range</strong>, with
                used car loans running <strong>9–13%</strong> for similar credit profiles.
              </p>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Several trends worth noting:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
                <li>• <strong>EV financing incentives</strong> — Federal tax credits (up to $7,500 for new EVs, $4,000 for used) can significantly lower the effective purchase price and loan amount</li>
                <li>• <strong>Longer loan terms becoming more common</strong> — 72- and 84-month loans now account for a growing share of auto financing, raising total interest costs for American buyers</li>
                <li>• <strong>Online lenders gaining ground</strong> — Pre-approval through apps and websites has become standard practice for savvy car shoppers</li>
                <li>• <strong>Certified Pre-Owned (CPO) financing</strong> — Many OEMs offer lower CPO rates than standard used car rates; worth asking about</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Electric Vehicle Financing</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                For EVs, the federal Clean Vehicle Credit (up to <strong>$7,500</strong> for qualifying new EVs) can be taken
                as a point-of-sale discount since 2024, reducing the amount financed directly. Used EVs may qualify for a
                credit up to <strong>$4,000</strong>. Not all vehicles qualify — income limits and MSRP caps apply. Factor the
                credit into your car affordability calculator inputs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">First-Time Buyer Programs</h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
                Several manufacturers and credit unions offer first-time buyer programs for buyers with limited or no credit
                history. These typically require:
              </p>
              <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
                <li>• Proof of income (usually $1,500–$2,000/month minimum)</li>
                <li>• A reasonable down payment (10–20%)</li>
                <li>• No prior repossessions or major derogatory marks</li>
              </ul>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
                Programs vary by lender and region. Credit unions are often the most flexible for first-time buyers.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── LOWER MONTHLY PAYMENT ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Lower Your Monthly Car Payment
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            These actually work:
          </p>
          <div className="space-y-3">
            {[
              "Put more money down — Every $1,000 extra saves $15–$25/month",
              "Trade in your current vehicle — Free up equity you&apos;ve already built",
              "Improve your credit score before applying — Even 20–30 points can change your rate",
              "Choose a less expensive vehicle — The most effective lever; no financing trick beats a lower price",
              "Shop rates at multiple lenders — Rates vary; credit unions especially",
              "Negotiate the vehicle price, not the payment — Get the best price first, then discuss financing",
              "Consider a shorter loan with a used vehicle — Lower price + shorter term can beat a long-term new car loan",
              "Look for manufacturer incentive rates — 0% or low promotional APR deals are real, if you qualify",
            ].map((item, i) => (
              <div key={i} className="numbered-section">
                <span className="num">{i + 1}</span>
                <p className="flex-1 text-base text-slate-800 dark:text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── EXTRA PAYMENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Extra Payments Save You Money
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Even $50 extra per month on a car loan adds up.
          </p>
          <div className="state-card">
            <h3>Example: $25,000 loan at 7% APR, 60 months</h3>
            <table className="styled-table styled-table-plain">
              <thead>
                <tr>
                  <th className="dark:text-slate-100">Scenario</th>
                  <th className="dark:text-slate-100">Monthly Payment</th>
                  <th className="dark:text-slate-100">Payoff Time</th>
                  <th className="dark:text-slate-100">Total Interest</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Standard", "$495", "60 months", "$4,700"],
                  ["+$50/month", "$545", "~55 months", "~$4,040"],
                  ["+$100/month", "$595", "~51 months", "~$3,440"],
                  ["+$200/month", "$695", "~44 months", "~$2,540"],
                ].map(([scenario, payment, time, interest]) => (
                  <tr key={scenario}>
                    <td className="dark:text-slate-100">{scenario}</td>
                    <td className="dark:text-slate-100">{payment}</td>
                    <td className="dark:text-slate-100">{time}</td>
                    <td className="dark:text-slate-100">{interest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            Adding $200/month saves you $2,160 in interest and pays off the car 16 months early. Use your lender&apos;s
            online portal or the extra payment feature in the car loan calculator to model this for your own numbers.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── REFINANCING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Car Loan Refinancing
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Already locked into a high-rate car loan? Refinancing could cut your payment and total interest significantly.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">When to Refinance:</h3>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• Your credit score has improved since you got the original loan</li>
            <li>• Interest rates have dropped</li>
            <li>• You&apos;re stuck in a dealer-inflated rate</li>
            <li>• You want to shorten your loan term</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">When Not to Refinance:</h3>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li>• Your loan has less than 12 months remaining (fees may outweigh savings)</li>
            <li>• Your car&apos;s value has dropped below the loan balance (negative equity complicates refinancing)</li>
            <li>• The new loan comes with a prepayment penalty from the original lender</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Example:</h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Tony financed $22,000 at <strong>12% APR</strong> for 60 months through a dealer 18 months ago. His balance is
            now $17,200. His credit score has jumped from 620 to 690. He refinances at <strong>7.5% APR</strong> for 42
            months.
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
            <li>• Old monthly payment: <strong>$489</strong></li>
            <li>• New monthly payment: <strong>$460</strong></li>
            <li>• Interest saved: <strong>~$2,100</strong></li>
          </ul>
          <p className="text-base text-slate-800 dark:text-slate-400 mt-3 italic">
            That&apos;s real money — and a great reason to check refinancing options if your original loan was at a high rate.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQs ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            FAQs: Car Loan Calculator
          </h2>
          {[
            {
              q: "What is a car loan calculator?",
              a: "A car loan calculator estimates your monthly car payment and total financing costs based on the vehicle price, down payment, trade-in value, interest rate, and loan term. It helps you plan before you apply for financing.",
            },
            {
              q: "How do you calculate a car loan payment?",
              a: "Car loan payments use the standard amortization formula: M = P × [r(1+r)^n] / [(1+r)^n – 1], where P is the loan principal, r is the monthly interest rate, and n is the number of payments. The car loan calculator does this instantly — no math required.",
            },
            {
              q: "What credit score is needed for a car loan?",
              a: "There&apos;s no hard minimum for all lenders. Most traditional lenders prefer a score of 620 or above. Credit unions and some online lenders work with scores as low as 580. Scores above 720 qualify for the best rates. Below 580, you&apos;ll either need a co-signer or a subprime lender with high rates.",
            },
            {
              q: "Is a longer car loan term better?",
              a: "Not financially — but it can help short-term cash flow. A 72-month loan has lower monthly payments than a 48-month loan on the same vehicle, but you&apos;ll pay significantly more in total interest. You&apos;ll also be more likely to go upside-down on the loan as the car depreciates. Shorter is almost always better if you can manage the payment.",
            },
            {
              q: "How much car can I afford?",
              a: "A commonly used guideline: keep your total car costs (payment + insurance + fuel + maintenance) under 15–20% of your monthly take-home pay. If you bring home $4,500/month, aim for total car costs under $675–$900. Use the car affordability calculator to see where different prices land in your budget.",
            },
            {
              q: "How does a down payment affect a car loan?",
              a: "Every dollar you put down reduces the amount financed — which lowers your monthly payment, reduces total interest paid, and protects you from negative equity. A 20% down payment on a $30,000 vehicle ($6,000) can save $1,500–$2,500 in interest over a 60-month loan compared to zero down.",
            },
            {
              q: "Should I finance through a dealer or a bank?",
              a: "Get pre-approved by your bank or credit union first, then compare that rate to what the dealer offers. If the dealer beats it, great — take it. If not, use your pre-approval. This approach always works in your favor.",
            },
            {
              q: "How can I lower my monthly car payment?",
              a: "The most effective options: put more money down, trade in a vehicle with equity, choose a less expensive car, improve your credit before applying, or extend the loan term (though this increases total interest). Shopping multiple lenders for the best rate also helps significantly.",
            },
            {
              q: "What is a good interest rate for a car loan?",
              a: "It depends on your credit and whether the vehicle is new or used. For excellent credit (720+), good rates in the current market run 5–7% for new cars and 7–10% for used. Anything above 15% is high and worth shopping around aggressively to avoid.",
            },
            {
              q: "Can I get a car loan with no credit history?",
              a: "Yes, but it&apos;s harder. Some lenders — particularly credit unions and certain OEM finance arms — offer first-time buyer programs. You&apos;ll typically need a solid income, a reasonable down payment (15–20%), and possibly a co-signer. Expect higher rates until you build a credit history.",
            },
            {
              q: "How does trade-in value affect my car loan?",
              a: "Trade-in value reduces your loan amount directly. A $6,000 trade-in on a $28,000 car means you&apos;re financing $22,000 instead of $28,000 (before tax). That saves you roughly $900–$1,200 in interest over a 60-month loan at a typical rate.",
            },
            {
              q: "What is negative equity on a car loan?",
              a: "Negative equity (being \"upside-down\") means you owe more on your loan than the car is worth. If you financed $30,000 on a car now worth $22,000, you have $8,000 in negative equity. It creates problems if you want to sell, trade in, or if the car gets totaled. Long loan terms and small down payments are the main culprits.",
            },
            {
              q: "Does getting pre-approved hurt my credit?",
              a: "A pre-approval typically involves a hard inquiry, which may drop your score by 5–10 points temporarily. But if you apply to multiple auto lenders within a 14–45 day window, the credit bureaus count all those auto loan inquiries as a single hit. Shop freely within that window.",
            },
            {
              q: "Is 0% APR financing actually free?",
              a: "Sometimes yes, sometimes no. Manufacturers that offer 0% APR often don&apos;t also offer cash back rebates. You might get $2,000 cash back if you finance at the market rate — and that $2,000 might be worth more than what you&apos;d save at 0%. Run both scenarios through the vehicle loan calculator.",
            },
            {
              q: "What fees should I add to my car loan calculation?",
              a: "Beyond sales tax: doc fees ($100–$800 depending on state), title and registration ($50–$300+), dealer prep fees (sometimes negotiable), and GAP insurance if applicable. Some dealers also roll extended warranties into the loan. Know every line item before you sign.",
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
            Car buying is one of the biggest financial decisions most Americans make — often multiple times in their lives.
            The difference between a smart deal and an expensive one usually comes down to how well you understand the
            financing.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            A car loan calculator doesn&apos;t replace the negotiation, but it makes you a much sharper negotiator. When you
            know your real monthly payment, your true total cost, and the interest you&apos;ll pay at different rates and
            terms — you walk into the dealership (or the lender&apos;s website) with something most buyers don&apos;t have:
            a clear picture.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Run the numbers before you fall in love with the car. Know your rate, your down payment, and your term before
            anyone in a showroom asks you what payment you&apos;re &quot;comfortable with.&quot;
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The calculator is free. The information is immediate. Use both.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── RELATED CALCULATORS ── */}
        <section className="mb-8">
          <p className="text-base text-slate-600 dark:text-slate-400 italic">
            Want to dig deeper? Check out our loan calculator, refinance calculator, and affordability calculator to cover
            every angle of your car-buying decision.
          </p>
        </section>

      </div>
    </article>
  );
}
