import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function AutoInsuranceArticle() {
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
        .formula-block pre { margin: 0; font-family: inherit; white-space: pre-wrap; }

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

        .styled-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; margin: 1rem 0; }
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
        .dark .styled-table th { border-bottom-color: #475569; color: #cbd5e1; }
        .styled-table td {
          padding: 0.5rem 0.75rem;
          border-bottom: 1px solid #e2e8f0;
          color: #1e293b;
        }
        .dark .styled-table td { border-bottom-color: #334155; color: #e2e8f0; }
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
        .dark .pull-quote { border-color: #475569; color: #cbd5e1; }

        .numbered-section { display: flex; gap: 1rem; margin-bottom: 1.5rem; align-items: flex-start; }
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
          <span className="meta-tag">Insurance · Personal Finance</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Auto Insurance Calculator: Find Out What You Should Actually Be
            Paying
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for US drivers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── META ── */}
        <div className="mb-10">
          <table className="styled-table">
            <tbody>
              <tr>
                <td>
                  <span className="font-semibold text-slate-800 dark:text-slate-100 not-italic">
                    Meta Description:{" "}
                  </span>
                  <span className="italic">
                    Use our free auto insurance calculator to estimate your car
                    insurance cost by coverage type, state, driver profile, and
                    vehicle. Built for US drivers.
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your renewal notice lands in the mail. Your car insurance premium
            jumped $40 a month — again — and the letter offers exactly zero
            explanation for why. You haven&apos;t had a single accident. Your
            car is two years older. And somehow you&apos;re paying more. Sound
            familiar?
          </p>
          <p className="mb-5">
            Car insurance pricing is one of the most opaque systems in American
            consumer finance. Insurers use dozens of variables — your ZIP code,
            your credit score, the color of your driving record, even your job
            title in some states — to arrive at a number that feels completely
            arbitrary. And most drivers just pay it because they don&apos;t know
            what else to do.
          </p>
          <p className="mb-5">
            An auto insurance calculator changes that. It helps you understand
            what factors actually drive your premium, estimate what a fair rate
            looks like for your profile, and spot when you&apos;re being
            overcharged. It&apos;s not a magic quote machine — nothing replaces
            shopping real insurers — but it gives you the context you need to
            walk into that conversation informed.
          </p>
          <p>
            Let&apos;s break down how it works and what every American driver
            should understand about how their premium gets calculated.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS IT ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is an Auto Insurance Calculator?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            An auto insurance calculator is a tool that estimates your expected
            car insurance premium based on your personal profile, vehicle
            details, coverage choices, and location. It uses weighted inputs —
            similar to the factors real insurers use — to generate a realistic
            monthly or annual cost range.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            It&apos;s different from getting an actual quote from an insurer.
            The calculator gives you a benchmark — a reasonableness check —
            before you start shopping. If every quote you&apos;re getting is 40%
            higher than the calculator estimates, something&apos;s worth
            investigating. If they&apos;re close, you&apos;re probably in a
            normal range for your profile.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Think of it the way a mortgage calculator works. It doesn&apos;t
            replace your lender — but it tells you what ballpark to expect, and
            whether the offer on the table makes sense.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does an Auto Insurance Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator collects inputs across several categories — driver
            profile, vehicle, coverage level, and location — then applies
            weighted multipliers derived from actuarial data to estimate a base
            premium. Each factor adds or subtracts risk, which adjusts the final
            number up or down.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what most auto insurance calculators factor in:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base mb-5">
            {[
              [
                "Driver age",
                "Younger and older drivers pay significantly more",
              ],
              [
                "Driving record",
                "Accidents, DUIs, and violations raise rates substantially",
              ],
              [
                "Credit score",
                "Allowed in most US states; can swing premiums by 30%–60%",
              ],
              ["Annual mileage", "More miles = more exposure = higher premium"],
              [
                "Vehicle make and model",
                "Repair cost, theft rate, and safety rating all matter",
              ],
              [
                "Vehicle age",
                "Newer cars cost more to insure; old beaters may not need full coverage",
              ],
              [
                "Coverage type",
                "Liability-only vs. full coverage (collision + comprehensive) varies significantly",
              ],
              [
                "Deductible amount",
                "Higher deductible = lower premium; lower deductible = higher premium",
              ],
              [
                "Location (ZIP code)",
                "Urban areas, high-theft regions, and no-fault states cost more",
              ],
              [
                "Marital status",
                "Married drivers statistically file fewer claims",
              ],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span>
                  <strong>{label}</strong> — {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The calculator weights each of these against national average data
            and state-specific baselines to produce an estimated premium range.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Auto Insurance Premiums Are Calculated
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Insurers don&apos;t publish a simple formula — their rating engines
            are proprietary. But the underlying logic follows a consistent
            structure used across the industry. Here&apos;s a simplified version
            of how actuaries build a premium:
          </p>

          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Simplified Premium Formula:
          </p>
          <div className="formula-block">
            <pre>{`Base Premium
  × Age Factor
  × Driving Record Factor
  × Credit Score Factor
  × Vehicle Risk Factor
  × Coverage Factor
  × Location Factor
  × Mileage Factor
  − Discounts
= Estimated Annual Premium`}</pre>
          </div>

          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-4">
            Each factor is a multiplier anchored to 1.0 (average). A clean
            driving record might carry a 0.85 multiplier (15% below average). A
            DUI within the past 3 years might be 2.1 (110% above average). They
            all compound together.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Example factor multipliers:
          </p>
          <div className="overflow-x-auto">
            <table className="styled-table styled-table-plain">
              <thead>
                <tr>
                  <th className="dark:text-slate-100">Factor</th>
                  <th className="dark:text-slate-100">Low Risk</th>
                  <th className="dark:text-slate-100">Average</th>
                  <th className="dark:text-slate-100">High Risk</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Age",
                    "0.85 (35–55 yr)",
                    "1.00 (26–34 yr)",
                    "2.20 (16–19 yr)",
                  ],
                  [
                    "Driving record",
                    "0.80 (clean 5+ yr)",
                    "1.00 (1 minor)",
                    "2.00+ (DUI/major)",
                  ],
                  [
                    "Credit score",
                    "0.75 (750+)",
                    "1.00 (670–699)",
                    "1.55 (below 580)",
                  ],
                  [
                    "Mileage",
                    "0.85 (<7,500/yr)",
                    "1.00 (12,000)",
                    "1.20 (20,000+)",
                  ],
                  [
                    "Vehicle risk",
                    "0.90 (sedan, safe)",
                    "1.00 (midsize)",
                    "1.40 (sports/luxury)",
                  ],
                  [
                    "Location",
                    "0.80 (rural)",
                    "1.00 (suburban)",
                    "1.50 (dense urban)",
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
          <div className="aside-callout mt-4">
            These aren&apos;t exact insurer figures — those are trade secrets —
            but they reflect the relative magnitude of each factor based on
            published actuarial research and consumer data from NAIC (National
            Association of Insurance Commissioners).
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step Insurance Cost Calculation Example
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Meet Marcus — 32 years old, suburban Texas driver, clean record, 680
            credit score, 2019 Honda Civic, 14,000 miles/year, full coverage
            with a $500 deductible.
          </p>

          {[
            {
              step: "1",
              title: "Start with the state base premium",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>
                    Texas average full-coverage base:{" "}
                    <strong>$1,650/year</strong>
                  </li>
                </ul>
              ),
            },
            {
              step: "2",
              title: "Apply driver profile factors",
              content: (
                <div className="formula-block mt-2 text-sm">
                  <pre>{`Age 32 factor:          × 0.92 (below avg risk)
Clean record 4 yrs:    × 0.88
Credit score 680:      × 1.05 (slightly above avg)
Running total: $1,650 × 0.92 × 0.88 × 1.05 ≈ $1,402`}</pre>
                </div>
              ),
            },
            {
              step: "3",
              title: "Apply vehicle and usage factors",
              content: (
                <div className="formula-block mt-2 text-sm">
                  <pre>{`2019 Honda Civic:       × 0.92 (low theft, safe)
14,000 miles/year:     × 1.05 (slightly above avg)
Running total: $1,402 × 0.92 × 1.05 ≈ $1,354`}</pre>
                </div>
              ),
            },
            {
              step: "4",
              title: "Apply coverage and deductible",
              content: (
                <div className="formula-block mt-2 text-sm">
                  <pre>{`Full coverage (vs liability):  × 1.85
$500 deductible:               × 1.00 (baseline)
Running total: $1,354 × 1.85 ≈ $2,505`}</pre>
                </div>
              ),
            },
            {
              step: "5",
              title: "Subtract discounts",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>Safe driver discount: −$125</li>
                  <li>Paperless/auto-pay discount: −$60</li>
                  <li className="font-bold text-indigo-700 dark:text-indigo-400 pt-1">
                    Estimated annual premium: ~$2,320 (~$193/month)
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
            This matches closely with what major insurers typically quote for
            this profile in Texas. Marcus should shop 3–4 insurers — he might
            find rates ranging from $175 to $220/month, and the cheapest
            reputable option is worth choosing.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Auto Insurance Cost Examples by State
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Where you live matters enormously for what you pay. State laws,
            litigation climates, traffic density, and uninsured motorist rates
            all feed into the baseline. Here&apos;s a grounded look at four of
            the most populated states.
          </p>

          {[
            {
              heading:
                "California — 28-Year-Old Female, Good Record, 2021 Toyota Camry, Los Angeles",
              rows: [
                ["Coverage type", "Full coverage"],
                ["Deductible", "$500"],
                ["Estimated annual premium", "$2,840"],
                ["Monthly premium", "~$237"],
                ["State avg (full coverage)", "$2,290"],
                ["LA surcharge", "+~24% urban uplift"],
              ],
              note: "California is a no-credit-score state for insurance — insurers can't use your FICO score here. But LA's traffic density, high claim frequency, and expensive labor/parts push premiums well above the state average. San Jose or Sacramento would run noticeably cheaper for the same driver.",
            },
            {
              heading:
                "Texas — 45-Year-Old Male, One At-Fault Accident (3 yrs ago), 2018 F-150, Houston",
              rows: [
                ["Coverage type", "Full coverage"],
                ["Deductible", "$1,000"],
                ["Estimated annual premium", "$3,150"],
                ["Monthly premium", "~$263"],
                ["Impact of at-fault accident", "+ ~$700/year vs clean record"],
                ["Notes", "Pickup truck surcharge; Houston hail/flood risk"],
              ],
              note: "Texas has some of the highest full-coverage premiums nationally, partly due to severe weather exposure and a high uninsured motorist rate (~20%). That one at-fault accident adds roughly $700 per year — and it typically stays on your record for 3–5 years depending on the insurer.",
            },
            {
              heading:
                "Florida — 19-Year-Old Male, Clean Record, 2020 Honda Accord, Miami",
              rows: [
                ["Coverage type", "Full coverage"],
                ["Deductible", "$500"],
                ["Estimated annual premium", "$5,200+"],
                ["Monthly premium", "~$433"],
                ["Teen surcharge", "+80%–120% above adult baseline"],
                ["Florida no-fault impact", "PIP required; adds to base cost"],
              ],
              note: "This is one of the most expensive driver profiles in the country. Florida's no-fault insurance law requires Personal Injury Protection (PIP), and Miami's fraud rate drives up every premium in the metro. A 19-year-old male in Miami is statistically the highest-risk driver segment — insurers price accordingly.",
            },
            {
              heading:
                "New York — 38-Year-Old Female, Clean Record, 2022 Subaru Outback, Manhattan",
              rows: [
                ["Coverage type", "Full coverage"],
                ["Deductible", "$500"],
                ["Estimated annual premium", "$4,100"],
                ["Monthly premium", "~$342"],
                ["NYC surcharge", "+45% vs upstate New York"],
                ["Required PIP", "Yes — $50K minimum in New York"],
              ],
              note: "New York requires among the highest minimum coverage in the nation, and NYC ZIP codes carry some of the steepest urban surcharges in the country. The same driver in Buffalo or Albany would pay roughly $1,400–$1,800/year for identical coverage — less than half the Manhattan rate.",
            },
          ].map(({ heading, rows, note }) => (
            <div key={heading} className="state-card">
              <h3>{heading}</h3>
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
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
                {note}
              </p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Your Auto Insurance Rate
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Insurance companies are essentially betting on how likely you are to
            file a claim and how expensive that claim might be. Every factor
            below feeds into that probability calculation.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Age and Driving Experience
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Teen drivers (16–19) are involved in crashes at three times the rate
            of adults 20 and over, according to the CDC. That actuarial reality
            means premiums for young drivers can be 80%–200% higher than for a
            35-year-old with the same record and car.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The rate curve flattens significantly by the mid-20s and reaches its
            lowest point for drivers in their 40s and early 50s. After 70, rates
            start creeping back up as reaction time and physical factors
            increase accident rates again.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Driver Age</th>
                <th className="dark:text-slate-100">
                  Avg Annual Full Coverage
                </th>
                <th className="dark:text-slate-100">
                  vs. 35-Year-Old Baseline
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["16", "$4,800+", "+180%"],
                ["18", "$3,900", "+128%"],
                ["25", "$2,100", "+23%"],
                ["35", "$1,710", "baseline"],
                ["45", "$1,650", "−3.5%"],
                ["55", "$1,680", "−1.8%"],
                ["70+", "$2,050", "+20%"],
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

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Driving Record
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Nothing moves your premium faster than what&apos;s on your driving
            record. A single at-fault accident can raise your annual premium by
            $500–$1,000 for 3–5 years. A DUI is worse — often doubling your
            premium — and some insurers will drop you entirely.
          </p>
          <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Incident</th>
                <th className="dark:text-slate-100">
                  Average Annual Premium Increase
                </th>
                <th className="dark:text-slate-100">Stays on Record</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Speeding ticket (1–14 mph over)", "+$250–$400", "3–5 years"],
                ["At-fault accident", "+$600–$1,100", "3–5 years"],
                ["Reckless driving", "+$1,000–$1,800", "5–7 years"],
                ["DUI / DWI", "+$1,500–$3,500", "5–10 years"],
                ["Hit-and-run", "+$1,800–$4,000", "5–10 years"],
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

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Credit Score
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            In 46 US states, insurers use a credit-based insurance score —
            different from your FICO score but derived from similar data — to
            price your premium. Studies consistently show that lower credit
            correlates with higher claim frequency, which is why the industry
            uses it.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Only California, Hawaii, Massachusetts, and Michigan prohibit the
            use of credit scores in auto insurance pricing. If you live in one
            of those states, a credit score clean-up won&apos;t help your
            premium. Everywhere else, it&apos;s one of the highest-leverage
            improvements you can make.
          </p>
          <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Credit Score Range</th>
                <th className="dark:text-slate-100">
                  Avg Annual Full Coverage
                </th>
                <th className="dark:text-slate-100">
                  vs. Good Credit Baseline
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["800+", "$1,450", "−15%"],
                ["740–799", "$1,590", "−7%"],
                ["670–739", "$1,710", "baseline"],
                ["580–669", "$2,260", "+32%"],
                ["Below 580", "$2,900", "+70%"],
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

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Coverage Type and Deductibles
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The coverage level you choose is one of the biggest controllable
            levers in your premium. State minimum (liability only) is
            dramatically cheaper than full coverage — but it leaves you exposed
            to large out-of-pocket costs if you cause a serious accident or your
            car gets damaged.
          </p>
          <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Coverage Type</th>
                <th className="dark:text-slate-100">Avg Annual Cost (US)</th>
                <th className="dark:text-slate-100">What It Covers</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "State minimum liability",
                  "$600–$900",
                  "Damage/injury to others you cause",
                ],
                [
                  "Liability + collision",
                  "$1,200–$1,700",
                  "Above + your car if you crash it",
                ],
                [
                  "Full coverage (+ comprehensive)",
                  "$1,700–$2,500",
                  "Above + theft, weather, non-collision damage",
                ],
                [
                  "Liability + roadside + rental",
                  "$900–$1,200",
                  "Liability + minor add-ons",
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

          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your deductible — the amount you pay out-of-pocket before insurance
            kicks in — directly inversely affects your premium. Here&apos;s the
            typical relationship on full coverage for a midsize sedan:
          </p>
          <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Deductible</th>
                <th className="dark:text-slate-100">Annual Premium Impact</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["$250", "+~$200–$350 vs. $500 baseline"],
                ["$500", "Baseline"],
                ["$1,000", "−$200–$400 vs. $500 baseline"],
                ["$2,000", "−$400–$700 vs. $500 baseline"],
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
          <div className="aside-callout">
            Raising your deductible from $500 to $1,000 typically saves
            $200–$400/year. The math works in your favor if you have the savings
            to cover the higher deductible without financial stress — and you
            don&apos;t have a history of frequent small claims.
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">
            Vehicle Type and Value
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your car&apos;s make, model, age, and market value all feed into the
            premium calculation. More expensive cars cost more to repair or
            replace. High-theft vehicles carry higher comprehensive premiums.
            Sports cars and high-horsepower vehicles are associated with
            higher-risk driving.
          </p>
          <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Vehicle Type</th>
                <th className="dark:text-slate-100">
                  Avg Full Coverage Adjustment
                </th>
                <th className="dark:text-slate-100">Reason</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Honda Civic / Toyota Corolla",
                  "−10% to −15%",
                  "Low repair cost, low theft, safe",
                ],
                [
                  "Ford F-150 / Chevrolet Silverado",
                  "Neutral to +10%",
                  "High theft rate; expensive parts",
                ],
                [
                  "BMW 3 Series / Audi A4",
                  "+20% to +30%",
                  "Expensive parts, high labor cost",
                ],
                [
                  "Dodge Challenger / Mustang GT",
                  "+25% to +40%",
                  "High-performance, higher claim rate",
                ],
                [
                  "Tesla Model 3",
                  "+25% to +50%",
                  "High repair cost; specialized labor",
                ],
                [
                  "15-year-old paid-off car",
                  "Collision optional",
                  "Low ACV; may not justify full coverage",
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
        </section>

        <hr className="rule-divider" />

        {/* ── USA SPECIFIC ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            US Auto Insurance: What You Need to Know Legally
          </h2>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            State Minimum Requirements
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Every state except New Hampshire requires some minimum level of auto
            insurance. Requirements vary significantly — and carrying only the
            minimum is almost always inadequate for real-world accident costs.
          </p>
          <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">State</th>
                <th className="dark:text-slate-100">Minimum Liability</th>
                <th className="dark:text-slate-100">PIP Required?</th>
                <th className="dark:text-slate-100">Avg Min Coverage Cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["California", "15/30/5", "No", "~$620/yr"],
                ["Texas", "30/60/25", "No", "~$720/yr"],
                ["Florida", "10/20/10", "Yes ($10K PIP)", "~$1,060/yr"],
                ["New York", "25/50/10", "Yes ($50K PIP)", "~$1,340/yr"],
                ["Ohio", "25/50/25", "No", "~$510/yr"],
                ["Michigan", "250/500/10", "Yes", "~$1,600/yr"],
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
          <p className="text-xs text-slate-400 dark:text-slate-400 italic mb-5">
            Liability limits shown as Bodily Injury per person / per accident /
            Property Damage (in thousands). Costs are approximate 2024 averages.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            No-Fault vs. At-Fault States
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Twelve states plus D.C. operate under no-fault insurance systems:
            Florida, Michigan, New York, New Jersey, Pennsylvania, Hawaii,
            Kansas, Kentucky, Massachusetts, Minnesota, North Dakota, and Utah.
            In no-fault states, your own insurance pays your medical bills after
            an accident regardless of who caused it — up to the PIP limit.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            No-fault states generally have higher minimum required coverage and
            higher base premiums because both parties&apos; insurers have to pay
            out — not just the at-fault driver&apos;s carrier. Michigan is the
            most expensive no-fault state in the country, though reforms in 2020
            gave drivers more options.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            SR-22 Insurance
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            An SR-22 isn&apos;t an insurance type — it&apos;s a certificate
            filed by your insurer with the state certifying you carry the
            minimum required coverage. It&apos;s required after serious
            violations like DUIs, reckless driving, driving uninsured, or
            accumulating too many points.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Needing an SR-22 signals high risk to insurers, which is why
            premiums spike dramatically. Expect to carry SR-22 status for 2–5
            years depending on the violation and state. Not all insurers file
            SR-22s — you may need to switch carriers.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-5">
            Gap Insurance
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Gap insurance covers the difference between your car&apos;s actual
            cash value (ACV) and the amount you still owe on your loan or lease
            if the car is totaled. New cars depreciate 15%–25% in the first year
            — which means if you put minimal money down and finance, you can
            easily owe more than the car is worth.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Gap coverage typically costs $20–$40/year added to your
            comprehensive/collision policy — or $400–$900 as a lump sum from the
            dealership (the dealership version is almost always overpriced). If
            you&apos;re financing a new or nearly-new vehicle, it&apos;s usually
            worth adding until your loan balance drops below the car&apos;s
            market value.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Using an Auto Insurance Calculator
          </h2>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Know your baseline before you shop",
                body: "Walking into insurance quotes without any context means you can't tell a fair offer from an inflated one. The calculator gives you a reference point so you can evaluate every quote intelligently.",
              },
              {
                n: "2",
                title: "See exactly which factors hurt you most",
                body: "By adjusting individual inputs — your deductible, your mileage, your coverage level — you can see which variables are costing you the most and prioritize what to address.",
              },
              {
                n: "3",
                title: "Model coverage trade-offs honestly",
                body: "Liability only vs. full coverage isn't just about price — it's about the financial risk you're taking on. The calculator makes that trade-off concrete with real numbers.",
              },
              {
                n: "4",
                title: "Estimate teen driver costs before they hit",
                body: "Adding a 17-year-old to your policy is a financial shock for most families. Running the estimate in advance lets you budget and prepare — and potentially shop better options before renewal.",
              },
              {
                n: "5",
                title: "Check if your current rate is competitive",
                body: "If your estimate is significantly below what you're paying, it's a clear signal to shop your policy. Loyalty rarely pays in car insurance — switching and re-shopping every 1–2 years is consistently how drivers save the most.",
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

        {/* ── MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Auto Insurance Mistakes That Cost Americans Real Money
          </h2>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Carrying only state minimum coverage",
                body: "State minimums were set decades ago and haven't kept pace with medical costs or lawsuit settlements. California's 15/30/5 minimum means your insurer pays at most $15,000 for one person's injuries — a serious accident can easily exceed $200,000. Minimum coverage leaves you personally liable for the difference.",
              },
              {
                n: "2",
                title: "Never shopping your policy",
                body: "Insurance loyalty is a one-way street. Most insurers raise prices at renewal regardless of claims — a phenomenon called 'price optimization.' Re-shopping every 1–2 years consistently saves drivers $300–$800 annually according to J.D. Power research.",
              },
              {
                n: "3",
                title: "Insuring an old, paid-off car for full coverage",
                body: "If your car's ACV is $4,000 and you're paying $1,400/year for collision and comprehensive, the math doesn't work. The standard rule: if your annual collision/comprehensive premium exceeds 10% of the car's market value, dropping those coverages is usually the right financial move.",
              },
              {
                n: "4",
                title: "Not asking about discounts",
                body: "Most insurers have 10–15 discount categories — but they don't proactively apply all of them. Good student, safe driver, telematics, alumni association, occupational, and multi-policy discounts often require you to ask or submit documentation.",
              },
              {
                n: "5",
                title: "Setting a deductible you can't actually pay",
                body: "A $2,000 deductible saves you premium dollars — but if you'd struggle to cover $2,000 out of pocket after a fender bender, it's the wrong choice. Your deductible should equal money you can realistically put your hands on within a few days.",
              },
              {
                n: "6",
                title: "Lapsing coverage — even briefly",
                body: "A coverage gap — even 30 days — marks you as higher risk in the eyes of every insurer you apply to afterward. Insurers view uninsured periods as a signal of financial instability. The premium bump from a gap can cost more than the lapse saved you.",
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

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Proven Ways to Lower Your Car Insurance Premium
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                <>
                  <strong>Shop at least 3 insurers every renewal</strong> —
                  rates for the same profile vary by 30%–50% across carriers;
                  use independent agents or comparison sites
                </>,
              ],
              [
                <>
                  <strong>Raise your deductible if you have the savings</strong>{" "}
                  — going from $250 to $1,000 can save $300–$600/year on full
                  coverage
                </>,
              ],
              [
                <>
                  <strong>
                    Bundle auto with homeowners or renters insurance
                  </strong>{" "}
                  — multi-policy discounts typically run 5%–15%
                </>,
              ],
              [
                <>
                  <strong>Try a telematics/safe driver program</strong> — apps
                  like Progressive&apos;s Snapshot or Allstate&apos;s Drivewise
                  can save low-mileage or safe drivers 10%–30%
                </>,
              ],
              [
                <>
                  <strong>
                    Drop collision/comprehensive on old low-value cars
                  </strong>{" "}
                  — if the car is worth less than 10× your annual collision
                  premium, it&apos;s probably not worth it
                </>,
              ],
              [
                <>
                  <strong>
                    Ask specifically about every discount category
                  </strong>{" "}
                  — good student, distant student, military, professional
                  association, paperless billing, autopay, loyalty
                </>,
              ],
              [
                <>
                  <strong>Improve your credit score before renewal</strong> —
                  going from fair (620) to good (720) credit can cut your
                  premium by 20%–35% in states that allow credit scoring
                </>,
              ],
              [
                <>
                  <strong>Reduce your mileage if you can</strong> — many
                  insurers offer low-mileage discounts at under 7,500
                  miles/year; some offer pay-per-mile programs
                </>,
              ],
              [
                <>
                  <strong>Take a defensive driving course</strong> — many states
                  require insurers to offer a discount for completing an
                  approved course; typically saves $50–$150/year
                </>,
              ],
              [
                <>
                  <strong>Review coverage when a car is paid off</strong> —
                  lenders require full coverage; once you own the car outright,
                  reassess whether collision/comprehensive makes sense
                </>,
              ],
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
                q: "What is the average car insurance cost in the USA?",
                a: "The national average for full coverage auto insurance in the US in 2024 is approximately $2,150 per year, or about $179/month. Liability-only coverage averages around $620–$720/year. These figures vary widely by state — Michigan, Florida, and Louisiana are the most expensive states, while Ohio, Idaho, and Vermont are among the cheapest.",
              },
              {
                q: "What's the difference between full coverage and liability-only insurance?",
                a: "Liability-only insurance pays for damage and injuries you cause to others — it doesn't cover your own vehicle. Full coverage adds collision (damage to your car from an accident, regardless of fault) and comprehensive (theft, weather, fire, hitting an animal). Full coverage is typically required by lenders when financing a vehicle.",
              },
              {
                q: "How does my credit score affect my car insurance?",
                a: "In 46 US states, insurers use a credit-based insurance score to help set premiums. Drivers with poor credit (below 580) often pay 50%–70% more than drivers with excellent credit (750+) for the same coverage. California, Hawaii, Massachusetts, and Michigan prohibit the use of credit scores in auto insurance pricing.",
              },
              {
                q: "How much does adding a teen driver cost?",
                a: "Adding a 16–18-year-old to an existing policy typically raises the annual premium by $1,500–$3,000 depending on the state, vehicle, and the teen's gender. Male teen drivers cost more than female teens. The cost gradually decreases as the teen builds a clean record. Having the teen complete a driver's ed course, maintain a 3.0+ GPA (for good student discount), and drive a safe sedan rather than an SUV or sports car can meaningfully reduce the surcharge.",
              },
              {
                q: "What is a deductible and how should I choose mine?",
                a: "Your deductible is the amount you pay out-of-pocket when you file a claim before your insurer covers the rest. A $500 deductible means if you have $3,000 in damage, you pay $500 and insurance pays $2,500. Higher deductibles reduce your premium but increase your exposure. The right deductible is the highest amount you could comfortably pay from savings if you had to file a claim tomorrow.",
              },
              {
                q: "Does where I live really affect my insurance rate that much?",
                a: "Significantly. The same driver and car in Miami pays roughly 3–4× what they'd pay in rural Iowa. Urban areas have higher accident rates, more theft, higher medical costs, and more litigation — all of which feed into the premium. Even within the same city, your ZIP code matters: insuring in a high-theft or high-accident ZIP can cost $300–$800 more per year than a neighboring ZIP code with better loss statistics.",
              },
              {
                q: "What is SR-22 insurance and do I need it?",
                a: "SR-22 is not a type of insurance — it's a state-required certificate that your insurer files confirming you carry minimum coverage. You're required to have one after serious violations like DUI, reckless driving, driving uninsured, or accumulating excessive points. SR-22 status typically lasts 2–5 years and substantially increases your premium. Not all insurers offer SR-22 filing; you may need to shop specialty high-risk carriers.",
              },
              {
                q: "Is it worth getting gap insurance?",
                a: "Gap insurance makes financial sense when you owe more on your vehicle loan or lease than the car is currently worth — which commonly happens when you put less than 20% down on a new vehicle. New cars depreciate 15%–25% in the first year, so a totaled car can leave you owing $5,000–$15,000 more than the insurance payout. Gap insurance typically costs $20–$40/year added to your policy and is usually worth it for financed vehicles in the first 2–3 years.",
              },
              {
                q: "What discounts should I always ask about?",
                a: "The discounts most commonly missed include: good student (3.0+ GPA, up to 15%), distant student (college student away without a car), safe driver/telematics (10%–30% for low-mileage or safe driving data), multi-policy bundling (5%–15%), defensive driving course, paperless billing, autopay, military/veteran, and professional/alumni association discounts. Always ask — they're rarely applied automatically.",
              },
              {
                q: "What happens if I drive without insurance in the USA?",
                a: "Penalties vary by state but typically include fines ($100–$5,000), license suspension, vehicle impoundment, and SR-22 filing requirements for 1–3 years afterward. More critically, if you cause an accident without insurance, you're personally liable for all damages and injuries — which can result in lawsuits and wage garnishment. About 13% of US drivers are uninsured, which is partly why uninsured motorist coverage is worth adding to your policy.",
              },
              {
                q: "How often should I shop my car insurance?",
                a: "Most financial experts recommend getting fresh quotes every 12–18 months — typically at renewal. Major life changes also warrant a re-shop: moving, getting married, turning 25, buying a new car, or significantly improving your credit score. Loyalty rarely earns you better pricing; switching carriers is one of the most reliable ways American drivers cut their premiums.",
              },
              {
                q: "Should I file a claim for minor damage?",
                a: "Not always. If the damage is $800 and your deductible is $500, you'd receive only $300 from insurance — but your premium could increase $400–$600/year for 3–5 years afterward. For minor damages near or not far above your deductible, paying out of pocket often costs less over time. Save claims for significant damage well above your deductible, or when the other driver is at fault and it won't affect your rate.",
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

        {/* ── FINAL ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Final Thoughts
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Car insurance is one of those bills most Americans pay on autopilot
            — set up automatic renewal, ignore the rate increase, repeat. But
            it&apos;s also one of the few recurring expenses where a few hours
            of active effort can realistically save $400–$1,000 per year, every
            year.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the auto insurance calculator at the top of this page to build a
            realistic sense of what your profile should cost. Then take that
            benchmark into the market — get quotes from at least three insurers,
            ask about every discount, and don&apos;t be afraid to switch.
            Insurance loyalty is a bill, not a virtue.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            And if your premium feels way off — for better or worse — now you
            know exactly which factors to look at. Your age you can&apos;t
            change. Your driving record takes time. But your coverage level,
            your deductible, your credit score, and the insurer you choose?
            Those are all controllable right now.
          </p>
          <div className="pull-quote mt-8">
            The best car insurance isn&apos;t the cheapest policy. It&apos;s the
            right coverage for your actual risk, at the best available price for
            your profile.
          </div>
        </section>
      </div>
    </article>
  );
}
