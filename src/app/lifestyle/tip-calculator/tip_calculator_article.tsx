import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TipArticle() {
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

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">
        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Lifestyle · Dining & Etiquette</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Tip Calculator: Calculate Tips & Split Bills Easily
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to tipping etiquette and bill splitting
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Tipping is a universal practice in dining culture, yet calculating the
            right amount can be surprisingly complex. Between figuring out the
            appropriate percentage, splitting bills among friends, and handling
            various service scenarios, many diners find themselves reaching for
            their phones to do the math.
          </p>
          <p className="mb-5">
            A Tip Calculator eliminates the mental math and social awkwardness of
            determining gratuities. Whether you're dining alone, splitting a check
            with a large group, or trying to figure out how much to leave for exceptional
            service, this tool provides instant, accurate calculations.
          </p>
          <p>
            Beyond the convenience, understanding tipping etiquette and how to calculate
            tips properly is an essential social skill. This guide covers everything
            from standard tipping percentages to special scenarios, helping you
            navigate dining situations with confidence.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Tip Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator takes your bill amount and applies a selected tip percentage
            to determine the gratuity. It then adds the tip to the original bill to
            calculate the total amount, and if you're splitting the bill, it divides
            the total evenly among the specified number of people.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To use the tip calculator:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                "Enter Bill Amount",
                "Input the total bill amount before tip (the subtotal from your receipt).",
              ],
              [
                "Select Tip Percentage",
                "Choose from common tipping percentages (10%, 12%, 15%, 18%, 20%, 25%) or enter a custom amount.",
              ],
              [
                "Specify Number of People",
                "Indicate how many people are splitting the bill (defaults to 1 for individual payment).",
              ],
              [
                "View Calculated Results",
                "See the tip amount, total bill with tip, and amount per person if splitting.",
              ],
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
            The results are displayed clearly, showing exactly how much to tip and
            what each person owes when splitting the bill, making payment smooth
            and confusion-free.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Tipping Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Understanding the math behind tipping can help you appreciate the
            calculation process and even do mental math when needed.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Basic Tip Formula:
          </p>
          <div className="formula-block">
            <pre>{`Tip Amount = Bill Amount × (Tip Percentage / 100)
Total Amount = Bill Amount + Tip Amount
Per Person = Total Amount / Number of People

Example:
Bill: $50, Tip: 20%, 2 People
Tip Amount = $50 × 0.20 = $10
Total Amount = $50 + $10 = $60
Per Person = $60 / 2 = $30`}</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-5">
            For quick mental math, remember that 10% is simply moving the decimal
            point one place left. 20% is double that amount, and 15% is 10% plus
            half of 10%.
          </p>
          <div className="aside-callout">
            <strong>Mental Math Tip:</strong> For a $45 bill with 20% tip: 10% is $4.50,
            so 20% is $9.00. Total is $54. This quick calculation can help you verify
            calculator results or estimate tips on the fly.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPPING ETIQUETTE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Standard Tipping Guidelines
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Tipping practices vary by country and service type, but here are the
            generally accepted standards in the United States:
          </p>
          
          {[
            {
              heading: "Restaurants (Full Service)",
              percentage: "15-20%",
              description: "Standard for sit-down restaurants with table service. 15% for adequate service, 18-20% for good to excellent service.",
            },
            {
              heading: "Restaurants (Counter Service)",
              percentage: "10-15%",
              description: "For cafes, fast casual, or places where you order at a counter. 10% is acceptable, 15% for exceptional service.",
            },
            {
              heading: "Bars",
              percentage: "$1-2 per drink or 15-20%",
              description: "Tip $1-2 per drink or 15-20% of the total tab. Bartenders rely heavily on tips for income.",
            },
            {
              heading: "Food Delivery",
              percentage: "15-20%",
              description: "Standard for delivery drivers. Consider tipping more for difficult weather, large orders, or long distances.",
            },
            {
              heading: "Taxi/Rideshare",
              percentage: "15-20%",
              description: "Standard for taxi and rideshare services. Round up to the nearest dollar for short trips.",
            },
            {
              heading: "Hair Salon/Spa",
              percentage: "15-20%",
              description: "Standard for hair stylists, barbers, and spa services. Tip more for complex services or exceptional results.",
            },
            {
              heading: "Hotel Housekeeping",
              percentage: "$2-5 per night",
              description: "Leave $2-5 per night in an envelope marked for housekeeping. Tip daily rather than at the end of your stay.",
            },
            {
              heading: "Valet Parking",
              percentage: "$2-5",
              description: "Standard when retrieving your car. Tip more if the valet provides exceptional service or handles special requests.",
            },
          ].map(({ heading, percentage, description }) => (
            <div key={heading} className="state-card">
              <h3>{heading} <span className="text-sm font-normal text-slate-500 dark:text-slate-400 ml-2">({percentage})</span></h3>
              <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── BILL SPLITTING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Split Bills Fairly
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Splitting bills can be tricky, especially when orders vary significantly.
            Here are common approaches:
          </p>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100">
            <li>
              <strong>Even Split:</strong> Divide the total (including tip) equally
              among all diners. Simplest method, works best when everyone ordered
              similar-priced items.
            </li>
            <li>
              <strong>Itemized Split:</strong> Each person pays for exactly what they
              ordered plus their share of the tip. Most fair but requires more
              calculation.
            </li>
            <li>
              <strong>Proportional Split:</strong> Calculate each person's percentage
              of the subtotal and apply that to the total. Good for groups with
              varying order sizes.
            </li>
            <li>
              <strong>Separate Checks:</strong> Request separate checks from the
              beginning. Eliminates splitting math entirely but may not be possible
              at all restaurants.
            </li>
          </ul>
          <div className="aside-callout mt-5">
            <strong>Pro Tip:</strong> When using the tip calculator for splitting,
            calculate the tip on the total bill first, then divide by the number of
            people. This ensures the tip percentage is applied correctly to the
            entire bill.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── SPECIAL SCENARIOS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Special Tipping Scenarios
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Some situations require special consideration when determining tips:
          </p>
          <ul className="space-y-3 text-slate-800 dark:text-slate-100 text-base">
            <li>
              <strong>Bad Service:</strong> If service was genuinely poor, it's
              acceptable to tip less (10% or less) or speak to a manager. However,
              consider whether the issue was the server's fault or beyond their control.
            </li>
            <li>
              <strong>Large Parties:</strong> Many restaurants automatically add
              gratuity (usually 18-20%) for parties of 6 or more. Check your bill
              before adding additional tip.
            </li>
            <li>
              <strong>Using Coupons/Discounts:</strong> Tip on the pre-discount amount
              (what the bill would have been) to ensure the server is compensated
              for the full service provided.
            </li>
            <li>
              <strong>Complimentary Meals:</strong> If you received a complimentary
              meal or significant discount, tip as if you paid full price. The server
              still provided the same service.
            </li>
            <li>
              <strong>Buffets:</strong> Even though you serve yourself, staff still
              clear tables and refill drinks. Tip 10-15% for buffet service.
            </li>
            <li>
              <strong>Takeout:</strong> Tipping for takeout is optional but appreciated.
              Consider 10% if the restaurant prepared complex orders or provided
              exceptional service.
            </li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What is the standard tipping percentage in the US?",
                a: "The standard tip for full-service restaurants in the United States is 15-20%. 15% is considered adequate, while 18-20% is appropriate for good to excellent service.",
              },
              {
                q: "Should I tip on tax?",
                a: "It's acceptable to tip on either the pre-tax or post-tax amount. Most people tip on the total bill including tax, but tipping on the subtotal is also correct.",
              },
              {
                q: "How do I handle tipping with a gift card?",
                a: "Tip on the full amount before the gift card is applied. You can leave the tip in cash or ask to add it to a separate payment method.",
              },
              {
                q: "What if the service was terrible?",
                a: "If service was genuinely poor, you can tip less (10% or less) or not tip at all. However, consider speaking to a manager about the issue rather than just reducing the tip.",
              },
              {
                q: "Do I need to tip at coffee shops?",
                a: "Tipping at coffee shops is optional but appreciated. A small tip (5-10% or rounding up) is appreciated if the barista provides friendly service or makes a complex drink.",
              },
              {
                q: "How should I handle tipping when using a delivery app?",
                a: "Most delivery apps allow you to tip digitally. Tip 15-20% of the order total, or more for difficult weather conditions, large orders, or exceptional service.",
              },
              {
                q: "What if I can't afford to tip?",
                a: "If you can't afford to tip, consider ordering takeout or dining at establishments where tipping isn't expected. If you must dine out, tip what you can afford, even if it's less than standard.",
              },
              {
                q: "Is tipping expected in other countries?",
                a: "Tipping customs vary widely. In some countries (like Japan), tipping can be considered rude. In Europe, smaller tips (5-10%) are common. Research local customs before traveling.",
              },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.q}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CONCLUSION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Tipping is more than just a mathematical calculation—it's a social
            convention that shows appreciation for good service. Using a tip calculator
            ensures you're tipping accurately and fairly, whether you're dining alone
            or splitting a bill with a large group.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Understanding standard tipping practices and special scenarios helps you
            navigate dining situations with confidence. Remember that tips are a
            significant portion of service workers' income, and fair compensation
            reflects the value of the service provided.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use the tip calculator above for quick, accurate calculations, and always
            tip based on the quality of service received. When in doubt, err on the
            side of generosity—it's always appreciated.
          </p>
        </section>
      </div>
    </article>
  );
}
