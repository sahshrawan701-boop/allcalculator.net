import { Playfair_Display, Source_Serif_4 } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-source-serif",
});

export default function MortgageArticle() {
  return (
    <article
      className={`w-full mx-auto px-6 py-16 font-serif text-slate-800 dark:text-slate-100 ${playfair.variable} ${sourceSerif.variable}`}
    >
      {/* Google Fonts */}
      <style>{`
        
        .article-root { font-family: var(--font-source-serif), Georgia, serif; }
        .display-font { font-family: var(--font-playfair), Georgia, serif; }
        .article-root h2 { font-family: var(--font-playfair), Georgia, serif; }
        .article-root h3 { font-family: var(--font-playfair), Georgia, serif; }
        .article-root h4 { font-family: var(--font-playfair), Georgia, serif; }

        .dropcap::first-letter {
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 4.5rem;
          font-weight: 700;
          float: left;
          line-height: 0.8;
          margin-right: 0.12em;
          margin-top: 0.08em;
          color: var(--primary-dk);
        }

                .dark .dropcap::first-letter {
        color: var(--primary);

        }

        .rule-divider {
          border: none;
          border-top: 1px solid #cbd5e1;
          margin: 3rem 0;
        }

                .dark .rule-divider {
        border-top-color: #475569;

        }

        .ornament {
          display: block;
          text-align: center;
          color: #94a3b8;
          letter-spacing: 0.5em;
          font-size: 0.75rem;
          margin: 2.5rem 0;
        }

                .dark .ornament {
        color: #64748b;

        }

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

                .dark .state-card h3 {
        color: #a5b4fc !important;

        }

        .styled-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          margin: 1rem 0;
        }

        .styled-table th {
          text-align: left;
          font-family: var(--font-playfair), serif;
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

        .styled-table-plain th {
          background: #f1f5f9;
        }

                .dark .styled-table-plain th {
        background: #334155;

        }

        .pull-quote {
          border-top: 1px solid #cbd5e1;
          border-bottom: 1px solid #cbd5e1;
          padding: 1.5rem 2rem;
          margin: 2.5rem 0;
          font-family: var(--font-playfair), Georgia, serif;
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
          font-family: var(--font-playfair), serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #cbd5e1;
          line-height: 1;
          min-width: 2rem;
          padding-top: 0.1rem;
        }

                .dark .numbered-section .num {
        color: #475569;

        }

        .tip-list li {
          padding: 0.6rem 0;
          border-bottom: 1px solid #f1f5f9;
          padding-left: 1.25rem;
          position: relative;
        }

                .dark .tip-list li {
        border-bottom-color: #334155;

        }

        .tip-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-style: normal;
        }

                .dark .tip-list li::before {
        color: #818cf8;

        }

        .faq-item {
          border-top: 1px solid #e2e8f0;
          padding: 1.25rem 0;
        }

                .dark .faq-item {
        border-top-color: #334155;

        }

        .faq-item h3 {
          font-size: 1rem !important;
          margin-bottom: 0.5rem !important;
          color: #1e293b !important;
        }

                .dark .faq-item h3 {
        color: #e2e8f0 !important;

        }

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

                .dark .section-label {
        color: #64748b;

        }

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">
        {/* Header */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Personal Finance · Homebuying</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Mortgage Calculator: Figure Out Your Monthly Payment Before You Fall
            in Love with a House
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for US homebuyers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* Intro */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You find a house you love. The listing says $485,000. Your stomach
            drops — not because it&apos;s out of reach, but because you
            genuinely have no idea if it is or isn&apos;t. Sound familiar?
          </p>
          <p className="mb-5">
            Most people go house shopping with only a vague sense of what they
            can afford. They rely on gut feelings, rough guesses from friends,
            or a five-second glance at the listing price. Then they get
            pre-approved, see the actual monthly number, and suddenly that dream
            house feels a whole lot less dreamy.
          </p>
          <p className="mb-5">
            That&apos;s exactly why using a mortgage calculator before you start
            touring open houses can save you a ton of heartbreak — and time.
          </p>
          <p className="mb-5">
            A good mortgage calculator doesn&apos;t just spit out a payment. It
            helps you understand <em>why</em> your payment is what it is, what
            levers you can pull to change it, and whether that home fits your
            actual financial life — not just your wishful thinking.
          </p>
          <p>Let&apos;s dig in.</p>
        </section>

        <hr className="rule-divider" />

        {/* What Is a Mortgage Calculator */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Mortgage Calculator?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A mortgage calculator is a tool that estimates your monthly home
            loan payment based on a few key inputs: the home price, your down
            payment, the loan term, and the interest rate.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The better ones also factor in property taxes, homeowners insurance,
            private mortgage insurance (PMI), and HOA fees — because your actual
            monthly housing cost is almost always higher than just principal and
            interest.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Think of it as a financial sandbox. You can play with different
            scenarios before you&apos;re locked into anything. What if you put
            10% down instead of 20%? What if you go with a 15-year loan instead
            of 30? What does a 0.5% difference in interest rate actually cost
            you? A mortgage calculator answers all of that in seconds.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* How Does It Work */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does a Mortgage Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            At its core, a mortgage calculator takes your loan details and runs
            them through a standard amortization formula. Each monthly payment
            you make covers two things: a portion of the principal (the amount
            you borrowed) and the interest the lender charges for lending it.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            In the early years of your loan, most of your payment goes toward
            interest. Over time, more of it chips away at the principal.
            That&apos;s how amortization works — your payment stays the same
            every month, but the split between interest and principal shifts
            gradually in your favor.
          </p>
          <p className="text-base text-slate-800 dark:text-slate-400 mb-3 font-sans font-semibold tracking-wide">
            Here&apos;s what most mortgage calculators ask for:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Home price", "The purchase price of the property"],
              [
                "Down payment",
                "Either a dollar amount or percentage (typically 3%–20%)",
              ],
              ["Loan term", "Usually 15 or 30 years"],
              ["Interest rate", "The annual rate your lender quotes you"],
              [
                "Property taxes",
                "Often estimated as a percentage of home value (varies by state)",
              ],
              [
                "Homeowners insurance",
                "Your annual premium, divided into monthly amounts",
              ],
              ["PMI", "Required if your down payment is under 20%"],
              ["HOA fees", "If applicable to your neighborhood or building"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">
                  ◆
                </span>
                <span>
                  <strong>{label}</strong> – {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            Enter those numbers and the calculator handles the rest.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* Formula */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Mortgage Payment Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The math behind your monthly payment uses what&apos;s called the
            fixed-rate mortgage formula. If numbers make your eyes glaze over,
            stick with me — the formula makes sense once you see what each piece
            means.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Monthly Payment Formula:
          </p>
          <div className="formula-block">
            <pre>M = P × [r(1 + r)^n] / [(1 + r)^n - 1]</pre>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2 mt-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["M", "Monthly payment (principal + interest)"],
              ["P", "Principal loan amount (home price minus down payment)"],
              ["r", "Monthly interest rate (annual rate ÷ 12)"],
              ["n", "Total number of payments (loan term in years × 12)"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-4">
                  {sym}
                </span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            So for a 30-year loan, <strong>n = 360</strong>. For a 15-year loan,{" "}
            <strong>n = 180</strong>.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-3">
            This formula only calculates principal and interest. Property taxes,
            insurance, PMI, and HOA fees get added on top.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* Step-by-Step Example */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step Mortgage Calculation Example
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let&apos;s walk through a real example. Say you&apos;re buying a
            $400,000 home in Texas, putting 10% down, with a 30-year fixed
            mortgage at 6.8% interest.
          </p>

          {[
            {
              step: "Step 1",
              title: "Calculate the loan amount",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>Home price: $400,000</li>
                  <li>Down payment (10%): $40,000</li>
                  <li>
                    <strong>Loan amount (P): $360,000</strong>
                  </li>
                </ul>
              ),
            },
            {
              step: "Step 2",
              title: "Convert interest rate to monthly",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>Annual rate: 6.8%</li>
                  <li>
                    <strong>
                      Monthly rate (r): 6.8% ÷ 12 = 0.5667% = 0.005667
                    </strong>
                  </li>
                </ul>
              ),
            },
            {
              step: "Step 3",
              title: "Calculate total payments",
              content: (
                <p className="text-slate-800 dark:text-slate-100 text-sm mt-2">
                  <strong>30 years × 12 months = 360 payments (n)</strong>
                </p>
              ),
            },
            {
              step: "Step 4",
              title: "Plug into the formula",
              content: (
                <div className="formula-block mt-2 text-sm">
                  <pre>{`M = 360,000 × [0.005667 × (1.005667)^360] / [(1.005667)^360 - 1]\nM ≈ $2,344/month (principal + interest only)`}</pre>
                </div>
              ),
            },
            {
              step: "Step 5",
              title: "Add monthly extras",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>
                    Property taxes (Texas avg ~1.8% of value): ~$600/month
                  </li>
                  <li>Homeowners insurance: ~$150/month</li>
                  <li>PMI (since down payment &lt; 20%): ~$180/month</li>
                  <li>HOA: $0 (standalone home)</li>
                  <li className="font-bold text-indigo-700 dark:text-indigo-400 pt-1">
                    Total estimated monthly payment: ~$3,274
                  </li>
                </ul>
              ),
            },
          ].map(({ step, title, content }) => (
            <div key={step} className="numbered-section">
              <span className="num">{step.replace("Step ", "")}</span>
              <div className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-sm">
                <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm uppercase tracking-wide font-sans">
                  {step}: {title}
                </p>
                {content}
              </div>
            </div>
          ))}

          <div className="aside-callout">
            That&apos;s a meaningful difference from the $2,344
            principal-and-interest figure alone. This is exactly why mortgage
            calculators that include taxes and insurance give you a much more
            accurate picture.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* Real-Life Examples */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Examples by State
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Home prices, property taxes, and insurance rates vary a lot
            depending on where you buy. Here&apos;s how the numbers play out in
            four major US states.
          </p>

          {[
            {
              heading:
                "California — $750,000 Home, 20% Down, 30-Year Fixed at 7%",
              rows: [
                ["Principal & Interest", "$3,992"],
                ["Property Tax (0.75% avg)", "$469"],
                ["Homeowners Insurance", "$220"],
                ["PMI", "$0 (20% down)"],
                ["Total", "~$4,681/month"],
              ],
              note: "California has relatively low property tax rates (thanks to Prop 13), but home prices are high enough that your payment still hits hard. In the Bay Area, that $750K might get you a two-bedroom condo.",
            },
            {
              heading: "Texas — $380,000 Home, 5% Down, 30-Year Fixed at 6.9%",
              rows: [
                ["Principal & Interest", "$2,390"],
                ["Property Tax (1.8% avg)", "$570"],
                ["Homeowners Insurance", "$175"],
                ["PMI (~0.5%)", "$158"],
                ["Total", "~$3,293/month"],
              ],
              note: "Texas has no state income tax, but property taxes are steep — often 1.6%–2.5% of home value annually. That adds hundreds to your monthly payment that people sometimes forget to budget for.",
            },
            {
              heading:
                "Florida — $450,000 Home, 10% Down, 30-Year Fixed at 7.1%",
              rows: [
                ["Principal & Interest", "$2,723"],
                ["Property Tax (0.97% avg)", "$363"],
                ["Homeowners Insurance", "$300+"],
                ["PMI (~0.5%)", "$188"],
                ["Total", "~$3,574/month"],
              ],
              note: "Florida's big wildcard is homeowners insurance. Thanks to hurricane risk and a stressed insurance market in recent years, premiums in South Florida can run $4,000–$8,000+ annually — sometimes more. That alone can make or break affordability.",
            },
            {
              heading:
                "New York — $600,000 Home, 20% Down, 30-Year Fixed at 7%",
              rows: [
                ["Principal & Interest", "$3,193"],
                ["Property Tax (1.72% avg)", "$860"],
                ["Homeowners Insurance", "$180"],
                ["PMI", "$0"],
                ["Total", "~$4,233/month"],
              ],
              note: "Outside of NYC, New York has some of the highest property tax rates in the country. In Long Island and Westchester, taxes on a $600K home could easily top $1,200–$1,500/month. Always check local tax rates, not just statewide averages.",
            },
          ].map(({ heading, rows, note }) => (
            <div key={heading} className="state-card">
              <h3>{heading}</h3>
              <table className="styled-table">
                <tbody>
                  {rows.map(([item, cost]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
                {note}
              </p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* 15 vs 30 Year */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            15-Year vs. 30-Year Mortgage: Which One&apos;s Right for You?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            This is one of the most common questions people ask. There&apos;s no
            universal right answer — it depends on your income, other financial
            goals, and how long you plan to stay in the home.
          </p>
          <p className="text-base text-slate-800 dark:text-slate-400 mb-3">
            Here&apos;s a straight comparison using a $350,000 loan at 6.5%
            (15-year) vs. 7.0% (30-year):
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th></th>
                <th className="dark:text-slate-100">15-Year Fixed</th>
                <th className="dark:text-slate-100">30-Year Fixed</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Monthly Payment (P&I)", "$3,051", "$2,329"],
                ["Total Interest Paid", "$199,180", "$488,440"],
                ["Equity After 5 Years", "~$100K", "~$25K"],
                ["Flexibility", "Lower", "Higher"],
              ].map(([label, a, b]) => (
                <tr key={label}>
                  <td className="font-medium dark:text-slate-100">{label}</td>
                  <td className="dark:text-slate-100">{a}</td>
                  <td className="dark:text-slate-100">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The 30-year gives you a lower monthly payment and more cash flow
            flexibility. The 15-year saves you nearly $290,000 in interest and
            builds equity dramatically faster. If you can afford the higher
            payment, the 15-year is hard to beat financially. But if the extra
            $700/month is tight, forcing it can create stress — and lower
            payments give you room to invest the difference elsewhere.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* Fixed vs ARM */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Fixed-Rate vs. Adjustable-Rate Mortgages (ARM)
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A <strong>fixed-rate mortgage</strong> keeps your interest rate the
            same for the entire loan term. Your principal and interest payment
            never changes. Predictable, simple, and what most American
            homebuyers choose.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            An <strong>adjustable-rate mortgage (ARM)</strong> starts with a
            fixed rate for an initial period — typically 5, 7, or 10 years —
            then adjusts annually based on a market index. So a 7/1 ARM has a
            fixed rate for seven years, then adjusts every year after that.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            ARMs usually start with a lower rate than fixed mortgages.
            That&apos;s the appeal. The risk is that when rates adjust, your
            payment can jump significantly.
          </p>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 p-4 rounded-sm">
            <p className="font-semibold text-indigo-900 dark:text-indigo-400 mb-2 font-sans text-sm tracking-wide uppercase">
              When an ARM might make sense:
            </p>
            <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base">
              {[
                "You're planning to sell or refinance within 5–7 years",
                "You expect interest rates to fall significantly",
                "You want a lower payment now and are comfortable with future uncertainty",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            For most buyers — especially first-timers — a fixed-rate mortgage is
            safer and easier to plan around.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* PMI */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is PMI (Private Mortgage Insurance)?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            PMI is insurance you pay to protect the <em>lender</em> — not
            yourself — if you default on the loan. It&apos;s typically required
            when your down payment is less than 20% of the home&apos;s purchase
            price.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            PMI usually costs between 0.5% and 1.5% of your original loan amount
            annually, broken into monthly payments.
          </p>
          <div className="aside-callout">
            <strong>Example:</strong> On a $350,000 loan with 0.8% PMI,
            you&apos;d pay about $233/month until your loan-to-value ratio (LTV)
            drops to 80%.
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            You can cancel PMI once you&apos;ve built enough equity. Under
            federal law (the Homeowners Protection Act), your lender must
            automatically cancel PMI when your loan balance hits 78% of the
            original purchase price — assuming you&apos;re current on payments.
            You can also request cancellation at 80% LTV.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Ways to avoid PMI:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              "Put down 20% or more",
              'Get a "piggyback" loan (80/10/10 — first mortgage, second mortgage, and 10% down)',
              "Look into lender-paid PMI (LPMI), where the rate is slightly higher but there's no separate PMI charge",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* Escrow */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Escrow
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            When you hear &quot;escrow,&quot; it usually refers to an account
            your lender manages to collect and pay your property taxes and
            homeowners insurance.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Each month, your mortgage payment includes a portion for property
            taxes and insurance that goes into this escrow account. When those
            bills come due — taxes twice a year, insurance annually — the lender
            pays them from escrow on your behalf.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Escrow keeps you from having to save up a large lump sum for those
            bills. It also gives lenders assurance that these obligations are
            being met (since their collateral — your house — needs to stay
            insured and tax-current).
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Your monthly escrow payment can change annually, usually in January,
            after the lender does a review. If taxes or insurance went up, your
            payment adjusts to match.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* APR vs Interest Rate */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            APR vs. Interest Rate: They&apos;re Not the Same Thing
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your <strong>interest rate</strong> is the baseline cost of
            borrowing the loan principal — expressed annually.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your <strong>APR (Annual Percentage Rate)</strong> includes the
            interest rate <em>plus</em> most of the fees associated with getting
            the loan: origination fees, discount points, mortgage broker fees,
            and certain closing costs. APR is almost always higher than the
            interest rate.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            <strong>Why it matters:</strong> When comparing loan offers, a lower
            interest rate can sometimes come with higher fees that make it more
            expensive overall. Comparing APRs gives you a cleaner
            apples-to-apples comparison between lenders.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Quick example:
          </p>
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-2 text-base text-slate-800 dark:text-slate-100">
            <p>
              Lender A: 6.75% interest rate, $2,000 in fees →{" "}
              <strong>APR: 6.92%</strong>
            </p>
            <p>
              Lender B: 7.0% interest rate, $0 in fees →{" "}
              <strong>APR: 7.0%</strong>
            </p>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            In this case, Lender A is actually cheaper despite the fees — but
            only if you keep the loan long enough to recoup them. If you&apos;re
            planning to sell in three years, Lender B might cost less overall.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* Amortization Schedule */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Mortgage Amortization Schedule?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            An amortization schedule is a full table showing every single
            payment over the life of your loan — how much goes to interest, how
            much to principal, and what your remaining balance is after each
            payment.
          </p>
          <p className="text-base text-slate-800 dark:text-slate-400 mb-3">
            Here&apos;s a simplified look at the first few months of a $300,000
            loan at 7%, 30-year fixed:
          </p>
          <div className="overflow-x-auto">
            <table className="styled-table styled-table-plain">
              <thead>
                <tr>
                  {["Month", "Payment", "Interest", "Principal", "Balance"].map(
                    (h) => (
                      <th key={h} className="dark:text-slate-100">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "$1,996", "$1,750", "$246", "$299,754"],
                  ["2", "$1,996", "$1,748", "$248", "$299,506"],
                  ["3", "$1,996", "$1,747", "$249", "$299,257"],
                  ["...", "...", "...", "...", "..."],
                  ["180", "$1,996", "$1,400", "$596", "$239,744"],
                  ["360", "$1,996", "$12", "$1,984", "$0"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="dark:text-slate-100">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            Notice how in Month 1, nearly 88% of the payment is interest. By the
            final payment, it&apos;s almost entirely principal. This is the
            &quot;front-loaded&quot; nature of amortized loans — and why extra
            payments early in the loan have such a dramatic impact.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* Extra Payments */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Power of Extra Payments
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Making even one extra payment per year can shave years off your loan
            and save tens of thousands in interest. Here&apos;s the math on that
            $300,000 loan at 7%:
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Strategy</th>
                <th className="dark:text-slate-100">Payoff Time</th>
                <th className="dark:text-slate-100">Total Interest</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Standard payments", "30 years", "~$418,500"],
                ["$100 extra/month", "26 years", "~$355,000"],
                ["$200 extra/month", "23 years", "~$305,000"],
                ["Biweekly payments", "26 years", "~$355,000"],
              ].map(([strat, time, interest]) => (
                <tr key={strat}>
                  <td className="dark:text-slate-100">{strat}</td>
                  <td className="dark:text-slate-100">{time}</td>
                  <td className="dark:text-slate-100">{interest}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The <strong>biweekly payment strategy</strong> works like this:
            instead of 12 monthly payments, you make 26 half-payments. That
            works out to one full extra payment per year — same effect as the
            $100/month extra strategy, just automatic.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-3">
            Check if your lender applies biweekly payments correctly (to
            principal immediately, not held until the end of the month). Some
            lenders charge a fee for this program when you could just make an
            extra payment yourself for free.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* Affordability */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Mortgage Affordability: How Much House Can You Really Afford?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            This is where people get tripped up most. Lenders will approve you
            for the <em>maximum</em> they&apos;re willing to lend — not
            necessarily the amount that&apos;s comfortable for your lifestyle.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            The 28/36 Rule
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A traditional guideline for mortgage affordability:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base mb-5">
            <li className="flex gap-2">
              <span className="text-indigo-600 dark:text-indigo-500">◆</span>
              <span>
                <strong>28% rule:</strong> Your monthly housing costs (mortgage,
                taxes, insurance) shouldn&apos;t exceed 28% of your gross
                monthly income.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-600 dark:text-indigo-500">◆</span>
              <span>
                <strong>36% rule:</strong> Your total debt payments (mortgage +
                car loans + student loans + credit cards) shouldn&apos;t exceed
                36% of gross monthly income.
              </span>
            </li>
          </ul>
          <div className="aside-callout">
            <strong>Example:</strong> If your household earns $120,000/year
            ($10,000/month gross): Max housing payment: $10,000 × 28% =
            $2,800/month. Max total debt: $10,000 × 36% = $3,600/month. If
            you&apos;re already paying $600/month on a car and $300 on student
            loans, your max comfortable mortgage payment might be closer to
            $2,700 — not $2,800.
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">
            Debt-to-Income Ratio (DTI)
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Lenders calculate your <strong>DTI</strong> by dividing your total
            monthly debt payments by your gross monthly income.
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li className="flex gap-2">
              <span className="text-indigo-600 dark:text-indigo-500">◆</span>
              <span>
                <strong>Front-end DTI:</strong> Just your housing payment ÷
                gross income
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-600 dark:text-indigo-500">◆</span>
              <span>
                <strong>Back-end DTI:</strong> All monthly debts ÷ gross income
              </span>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Most conventional loan programs prefer a back-end DTI below 43%. FHA
            loans can go up to 50% in some cases, though a lower DTI almost
            always means better terms.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* Loan Types */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            FHA Loans, VA Loans, and Conventional Loans: What&apos;s the
            Difference?
          </h2>

          {[
            {
              title: "Conventional Loans",
              body: "These are standard mortgages not backed by the government. They generally require stronger credit (620+ minimum, though 700+ gets better rates) and a down payment of at least 3%–5% for first-time buyers.",
            },
            {
              title: "FHA Loans",
              body: "Backed by the Federal Housing Administration. They're popular with first-time buyers because the credit requirements are more forgiving (as low as 580 with 3.5% down, or 500 with 10% down). The catch: FHA loans come with both upfront and annual mortgage insurance premiums (MIP) that can last the life of the loan.",
            },
            {
              title: "VA Loans",
              body: "Available to eligible veterans, active-duty service members, and surviving spouses. VA loans have zero down payment required, no PMI, and competitive interest rates. There's a VA funding fee (usually 2.15%–3.3% for first use) that can be rolled into the loan. For those who qualify, it's hard to beat.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="mb-5">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
                {title}
              </h3>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                {body}
              </p>
            </div>
          ))}

          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">
            Quick Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="styled-table styled-table-plain">
              <thead>
                <tr>
                  {["Feature", "Conventional", "FHA", "VA"].map((h) => (
                    <th key={h} className="dark:text-slate-100">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Min. Down Payment", "3%–5%", "3.5%", "0%"],
                  ["Min. Credit Score", "620", "580", "No official minimum"],
                  ["PMI/MIP", "PMI if < 20% down", "Yes (MIP)", "No PMI"],
                  [
                    "Loan Limits",
                    "Varies by county",
                    "$498,257 (most areas, 2024)",
                    "Varies",
                  ],
                  [
                    "Who Qualifies",
                    "Most buyers",
                    "Low-to-moderate income",
                    "Military/veterans",
                  ],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="dark:text-slate-100">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr className="rule-divider" />

        {/* Closing Costs */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Closing Costs: The Hidden Expense Nobody Talks About Enough
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            One of the most common shock moments in homebuying is closing day.
            You&apos;ve budgeted for the down payment. You&apos;ve planned for
            the monthly payment. Then someone hands you a closing disclosure
            showing you owe another $8,000–$15,000 or more.
          </p>
          <div className="pull-quote">
            &quot;Closing costs typically run 2%–5% of the loan amount. On a
            $400,000 purchase, that&apos;s $8,000–$20,000 due at closing.&quot;
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-3">
            Common closing costs include:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base mb-5">
            {[
              "Loan origination fees",
              "Appraisal fee ($300–$600)",
              "Title insurance",
              "Home inspection ($300–$500)",
              "Attorney fees (some states require one)",
              "Prepaid interest (interest from closing date to end of month)",
              "Escrow setup (initial deposits for taxes and insurance)",
              "Recording fees",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Some of these are negotiable. You can also ask the seller to cover
            part of the closing costs — especially in a buyer&apos;s market.
            Lenders sometimes offer &quot;no-closing-cost&quot; mortgages where
            the fees are rolled into the rate or loan balance. That&apos;s not
            always a bad deal, but know what you&apos;re agreeing to.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* Refinancing */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Refinancing: When Does It Make Sense?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Refinancing means replacing your current mortgage with a new one —
            usually to get a lower interest rate, change your loan term, or tap
            equity.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The classic rule of thumb is: refinancing makes sense if you can
            drop your rate by 1% or more and plan to stay in the home long
            enough to recoup the closing costs.
          </p>
          <div className="formula-block">
            <pre>{`Break-even calculation:
New closing costs: $5,000
Monthly savings from lower rate: $150
Break-even: $5,000 ÷ $150 = 33 months (~2.75 years)`}</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            If you plan to stay longer than 33 months, refinancing saves you
            money. If you&apos;re moving in two years, it probably doesn&apos;t.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Common reasons to refinance:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              "Rates have dropped significantly since you bought",
              "You want to switch from ARM to fixed rate",
              "You want to shorten your loan term",
              "You want to consolidate debt (cash-out refinance)",
              "You've hit 20% equity and want to drop PMI faster",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* Credit Score */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Credit Score Impact on Your Mortgage Rate
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Your credit score is one of the biggest factors in the rate
            you&apos;re offered. Even a 40-point difference can cost (or save)
            you tens of thousands over the life of a loan.
          </p>
          <table className="styled-table styled-table-plain">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Credit Score Range</th>
                <th className="dark:text-slate-100">Typical Rate Impact</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["760+", "Best available rates"],
                ["720–759", "Near-best rates"],
                ["680–719", "Slightly higher rate (~0.25%–0.5% more)"],
                ["640–679", "Noticeably higher rates"],
                ["580–639", "FHA territory; rates significantly higher"],
                ["Below 580", "Very limited conventional options"],
              ].map(([range, impact]) => (
                <tr key={range}>
                  <td className="font-mono font-semibold text-slate-800 dark:text-slate-100">
                    {range}
                  </td>
                  <td className="dark:text-slate-100">{impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout mt-5">
            <strong>Example:</strong> On a $350,000 loan, the difference between
            a 760 credit score and a 680 might be 0.5% in rate — which
            translates to about $30,000 more in interest over 30 years.
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            Before applying for a mortgage, it&apos;s worth pulling your credit
            reports (free at AnnualCreditReport.com), disputing any errors, and
            paying down revolving debt to improve your score. Even a few months
            of preparation can meaningfully improve your rate.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* Pre-Approval */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Mortgage Pre-Approval: Do This Before You Shop
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Pre-approval is when a lender reviews your income, assets, credit,
            and debts and issues a letter stating the loan amount they&apos;re
            willing to give you.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            It&apos;s different from pre-qualification, which is a looser
            estimate based on self-reported information.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Why pre-approval matters:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base mb-5">
            {[
              "Sellers take your offer more seriously",
              "You shop with confidence knowing your real budget",
              "It speeds up the closing process",
              "You spot any credit or documentation issues early",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Pre-approval typically involves submitting pay stubs, W-2s, bank
            statements, tax returns, and authorizing a hard credit pull.
            It&apos;s good for 60–90 days at most lenders.
          </p>
          <div className="pull-quote">
            Get pre-approved <em>before</em> you fall in love with a house.
            Trust me on this one.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* Tax Deductions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Tax Deductions for US Homeowners
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Owning a home comes with some tax advantages worth knowing about.
          </p>
          {[
            {
              title: "Mortgage Interest Deduction",
              body: "You can deduct interest paid on mortgage debt up to $750,000 (for loans taken out after December 15, 2017). This can be a meaningful deduction in the early years when most of your payment is interest.",
            },
            {
              title: "Property Tax Deduction",
              body: "You can deduct up to $10,000 per year ($5,000 if married filing separately) in state and local taxes — which includes property taxes. This is capped by the SALT deduction limit.",
            },
            {
              title: "Points Deduction",
              body: "If you paid discount points to lower your mortgage rate, those may be deductible in the year of purchase.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="mb-4">
              <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                {title}:
              </p>
              <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
                {body}
              </p>
            </div>
          ))}
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            Note: These deductions only help you if you itemize on Schedule A,
            rather than taking the standard deduction. With the standard
            deduction at $14,600 for single filers and $29,200 for married
            filers (2024), many homeowners — especially newer ones — don&apos;t
            itemize until their mortgage interest is substantial.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-3">
            Talk to a tax professional about how homeownership affects your
            specific situation.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Mortgage Mistakes to Avoid
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even smart people make these. Here&apos;s what to watch out for:
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Shopping based on payment alone",
                body: "A lower monthly payment isn't always the better deal. A longer loan term or rolled-in fees can cost you significantly more over time.",
              },
              {
                n: "2",
                title: "Not shopping multiple lenders",
                body: "Getting quotes from just one lender — or going with whoever your real estate agent suggests — can cost you. Even a 0.25% rate difference on a $350,000 loan is worth about $18,000 over 30 years. Get at least three quotes.",
              },
              {
                n: "3",
                title: "Making big purchases before closing",
                body: "Buying a new car or furniture after pre-approval but before closing can change your DTI and jeopardize your loan. Lenders often pull credit again right before closing.",
              },
              {
                n: "4",
                title: "Skipping the home inspection",
                body: "In competitive markets, some buyers waive inspections to win. That's a gamble with potentially serious financial consequences. A $400 inspection could reveal a $30,000 foundation problem.",
              },
              {
                n: "5",
                title: "Not budgeting for closing costs",
                body: "Many first-time buyers are genuinely caught off guard. Make sure you've got the down payment plus closing costs covered before you're under contract.",
              },
              {
                n: "6",
                title: "Confusing pre-qualification with pre-approval",
                body: "Pre-qual is a soft estimate. Pre-approval is what sellers want to see. They're not interchangeable.",
              },
              {
                n: "7",
                title: "Forgetting about maintenance costs",
                body: "Your mortgage payment is just part of homeownership's true cost. Budget 1%–2% of your home's value annually for maintenance and repairs.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="numbered-section">
                <span className="num">{n}</span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    {title}
                  </p>
                  <p className="text-base leading-relaxed text-slate-800 dark:text-slate-100">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* Tips for First-Time Buyers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Tips for First-Time Home Buyers
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                <>
                  <strong>Know your real budget</strong> — run the full numbers
                  through a mortgage calculator, not just the listing price
                </>,
              ],
              [
                <>
                  <strong>
                    Check your credit at least 6 months before buying
                  </strong>{" "}
                  — gives you time to fix issues
                </>,
              ],
              [
                <>
                  <strong>
                    Don&apos;t drain your savings entirely for the down payment
                  </strong>{" "}
                  — keep 3–6 months of expenses as an emergency fund
                </>,
              ],
              [
                <>
                  <strong>Look into first-time buyer programs</strong> — many
                  states offer down payment assistance or lower rates; check
                  HUD.gov for your state
                </>,
              ],
              [
                <>
                  <strong>Understand the total cost of ownership</strong> —
                  mortgage + taxes + insurance + maintenance + utilities
                </>,
              ],
              [
                <>
                  <strong>Don&apos;t skip the home inspection</strong> — ever
                </>,
              ],
              [
                <>
                  <strong>Get pre-approved, not just pre-qualified</strong>
                </>,
              ],
              [
                <>
                  <strong>
                    Lock your rate once you&apos;re under contract
                  </strong>{" "}
                  — don&apos;t try to time the market if you need certainty
                </>,
              ],
              [
                <>
                  <strong>Ask about points</strong> — sometimes paying upfront
                  points to lower your rate makes financial sense if you plan to
                  stay long-term
                </>,
              ],
            ].map((item, i) => (
              <li key={i}>{item[0]}</li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="mt-4">
            {[
              {
                q: "What is a mortgage calculator used for?",
                a: "A mortgage calculator estimates your monthly home loan payment based on inputs like home price, down payment, loan term, and interest rate. More advanced calculators also include property taxes, homeowners insurance, PMI, and HOA fees to give you a more accurate total monthly cost.",
              },
              {
                q: "How do I calculate my monthly mortgage payment?",
                a: "Use the formula: M = P × [r(1+r)^n] / [(1+r)^n - 1], where P is the loan amount, r is the monthly interest rate (annual rate ÷ 12), and n is the number of payments. Or just use the mortgage calculator at the top of this page — it does all of that instantly.",
              },
              {
                q: "What credit score do I need to get a mortgage?",
                a: "For a conventional loan, you'll generally need a minimum score of 620, though you'll get the best rates with 740+. FHA loans accept scores as low as 580 (with 3.5% down) or 500 (with 10% down). VA loans don't have an official minimum but most lenders want 620+.",
              },
              {
                q: "How much should I put down on a house?",
                a: "There's no one-size-fits-all answer. A 20% down payment eliminates PMI and gives you lower monthly payments. But 3%–10% down lets you get in sooner and keep cash reserves. Several first-time buyer programs allow 3%–3.5% down. What matters most is having a stable financial cushion after the down payment.",
              },
              {
                q: "What is PMI and how do I get rid of it?",
                a: "PMI (Private Mortgage Insurance) protects the lender if you default, and it's required when you put down less than 20%. Once your loan balance drops to 80% of the home's original purchase price, you can request cancellation. It's automatically removed at 78% LTV (if you're current on payments). You can also reach that threshold faster by making extra principal payments or if your home appreciates significantly.",
              },
              {
                q: "Is a 15-year or 30-year mortgage better?",
                a: "It depends on your priorities. A 15-year mortgage has higher monthly payments but dramatically lower total interest — often $150,000–$300,000 less. A 30-year mortgage offers lower payments and more financial flexibility. Many financial advisors recommend 30-year mortgages if the payment difference would stretch your budget, since you can always make extra payments voluntarily.",
              },
              {
                q: "What's the difference between APR and interest rate?",
                a: "The interest rate is the basic cost of borrowing the money. APR (Annual Percentage Rate) includes the interest rate plus most lender fees, giving you a more complete picture of the loan's true cost. When comparing loan offers from multiple lenders, compare APRs for a more accurate comparison.",
              },
              {
                q: "What is an escrow account?",
                a: "An escrow account is managed by your lender and used to collect and pay your property taxes and homeowners insurance. Each month, part of your mortgage payment goes into escrow. When those annual bills come due, the lender pays them on your behalf. It ensures you don't face a large surprise bill and keeps your home protected.",
              },
              {
                q: "Can I get a mortgage with a lot of student loan debt?",
                a: "Yes, but your debt-to-income ratio will matter. Lenders look at all monthly debt obligations — including student loans — relative to your gross income. If your back-end DTI (all debts combined) exceeds 43%–50%, it becomes harder to qualify. Income-driven repayment (IDR) plans may help, as lenders often calculate student loan payments based on the current IDR amount.",
              },
              {
                q: "What are mortgage points?",
                a: "One discount point equals 1% of the loan amount and is paid upfront at closing to permanently lower your interest rate — usually by 0.25% per point. Whether buying points makes sense depends on how long you plan to keep the loan. Calculate your break-even: divide the upfront cost by the monthly savings. If you'll stay past that break-even, buying points saves money long-term.",
              },
              {
                q: "How does refinancing work?",
                a: "Refinancing replaces your current mortgage with a new loan — often with different terms or a lower rate. You go through the application process again, and there are new closing costs (typically 2%–5% of the loan). The decision usually comes down to whether your monthly savings over your remaining time in the home outweigh those upfront costs.",
              },
              {
                q: "What are closing costs and who pays them?",
                a: "Closing costs are fees associated with finalizing your home purchase, typically 2%–5% of the loan amount. They include things like appraisal, title insurance, origination fees, and prepaid expenses. The buyer generally pays most closing costs, though you can negotiate for the seller to cover some — or choose a lender that offers to roll them into the loan.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3>{q}</h3>
                <p className="text-base leading-relaxed text-slate-800 dark:text-slate-400">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* Final Thoughts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Final Thoughts
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Buying a home is probably the biggest financial decision you&apos;ll
            make. Getting your numbers right before you start — before you get
            emotionally attached to a specific house — gives you a massive
            advantage.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the mortgage calculator at the top of this page to run your own
            scenarios. Play with down payment amounts, loan terms, and interest
            rates until you find a payment that genuinely fits your budget — not
            just one that barely works.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Know your credit score. Get pre-approved. Factor in taxes,
            insurance, and maintenance. And don&apos;t let anyone — a lender, a
            realtor, or your own excitement — push you into a payment
            that&apos;s going to stress you out every single month.
          </p>
          <div className="pull-quote mt-8">
            The right home isn&apos;t just one you love. It&apos;s one you can
            afford comfortably. Those two things can absolutely exist together —
            you just need the right tools and the right numbers to find them.
          </div>
        </section>
      </div>
    </article>
  );
}
