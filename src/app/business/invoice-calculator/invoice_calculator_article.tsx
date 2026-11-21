import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function InvoiceCalculatorArticle() {
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
          <span className="meta-tag">Business · Invoicing & Billing</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Invoice Calculator: Calculate Invoice Totals and Taxes
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for businesses and freelancers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You provide consulting services for 20 hours at $100 per hour, totaling $2,000. You also charge $500 for materials. The subtotal is $2,500. With a 10% discount ($250), the discounted subtotal is $2,250. Adding 8% sales tax ($180) brings the total to $2,430. If the client pays within 10 days, they receive a 2% early payment discount ($48.60), reducing the final amount to $2,381.40.
          </p>
          <p className="mb-5">
            Invoice calculation involves summing line items, applying discounts, calculating taxes, and adding any fees or shipping charges. Accurate invoicing ensures you get paid correctly and maintains professional relationships with clients.
          </p>
          <p className="mb-5">
            But invoice requirements vary by jurisdiction, industry, and client preferences. Understanding how to calculate subtotals, taxes, discounts, and totals ensures your invoices are accurate and compliant.
          </p>
          <p>
            The invoice calculator above helps you calculate invoice totals, apply discounts, calculate taxes, and generate professional invoices.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Invoice Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Invoice calculation starts with line items, applies discounts, calculates taxes on the taxable amount, and adds any additional charges. The final total is what the client owes.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Invoice Total Formula:
          </p>
          <div className="formula-block">
            <pre>Total = (Subtotal - Discount) × (1 + Tax Rate) + Fees + Shipping</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Line Items", "$2,000 (services) + $500 (materials)"],
              ["Subtotal", "$2,500"],
              ["Discount (10%)", "$250"],
              ["Discounted Subtotal", "$2,250"],
              ["Tax (8%)", "$180"],
              ["Shipping", "$50"],
              ["Total", "$2,480"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, the total invoice amount is $2,480. Tax is calculated on the discounted subtotal, not the original amount. This ensures the client pays tax only on the amount they actually pay.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── INVOICE COMPONENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Invoice Components
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            A professional invoice includes multiple components beyond just the total. Understanding each component ensures your invoices are complete and professional.
          </p>

          {[
            {
              heading: "Line Items",
              rows: [
                ["Includes", "Description, quantity, unit price"],
                ["Purpose", "Detail what was provided"],
                ["Best Practice", "Be specific and clear"],
              ],
              note: "Line items describe each product or service provided. Include quantity, unit price, and total per line. Clear descriptions prevent disputes and help clients understand what they're paying for.",
            },
            {
              heading: "Subtotal",
              rows: [
                ["Includes", "Sum of all line items"],
                ["Purpose", "Base amount before adjustments"],
                ["Calculation", "Quantity × Unit Price per line"],
              ],
              note: "The subtotal is the sum of all line item totals before discounts, taxes, and fees. This provides a clear base amount and makes it easy to verify calculations.",
            },
            {
              heading: "Discounts",
              rows: [
                ["Includes", "Percentage or fixed amount"],
                ["Purpose", "Reduce invoice total"],
                ["Types", "Early payment, volume, promotional"],
              ],
              note: "Discounts can be percentage-based or fixed amounts. Common types include early payment discounts (e.g., 2/10 net 30), volume discounts, and promotional discounts. Clearly state discount terms.",
            },
          ].map((component: { heading: string; rows: string[][]; note: string }) => (
            <div key={component.heading} className="state-card">
              <h3>{component.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {component.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{component.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── TAX CALCULATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Tax Calculation on Invoices
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Sales tax calculation varies by jurisdiction and product type. Understanding tax rules ensures compliance and accurate invoicing.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Tax Type</th>
                <th className="dark:text-slate-100">Rate Range</th>
                <th className="dark:text-slate-100">Application</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sales Tax", "4-10%", "Applied to taxable goods/services"],
                ["VAT", "15-25%", "Included in price (EU, UK, etc.)"],
                ["GST", "5-15%", "Applied to taxable transactions (Canada, etc.)"],
                ["Exempt", "0%", "No tax applied (food, medicine, etc.)"],
              ].map(([type, range, application]) => (
                <tr key={type}>
                  <td className="dark:text-slate-100">{type}</td>
                  <td className="dark:text-slate-100">{range}</td>
                  <td className="dark:text-slate-100">{application}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Tax rates and rules vary significantly by location. Some jurisdictions tax services, others don't. Some items are exempt. Always verify your local tax requirements and apply taxes correctly to avoid compliance issues.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── PAYMENT TERMS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Invoice Payment Terms
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Payment terms specify when payment is due and any discounts for early payment. Clear terms improve cash flow and reduce payment delays.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Net 30",
                body: "Payment due within 30 days of invoice date. This is the most common payment term for B2B transactions. Provides clients reasonable time to process payment while maintaining predictable cash flow.",
              },
              {
                n: "2",
                title: "2/10 Net 30",
                body: "2% discount if paid within 10 days, otherwise full amount due in 30 days. Early payment discounts incentivize prompt payment and improve cash flow. Clearly calculate the discount amount.",
              },
              {
                n: "3",
                title: "Due on Receipt",
                body: "Payment due immediately upon receipt of invoice. Common for one-time services or small transactions. Ensures prompt payment but may be less flexible for clients.",
              },
              {
                n: "4",
                title: "Milestone Payments",
                body: "Payment due at project milestones rather than completion. Common for long-term projects. Reduces risk for both parties and improves cash flow throughout the project.",
              },
              {
                n: "5",
                title: "Progress Billing",
                body: "Regular invoices based on work completed. Similar to milestone payments but on a scheduled basis (e.g., monthly). Provides predictable cash flow for ongoing projects.",
              },
              {
                n: "6",
                title: "Deposit Required",
                body: "Upfront payment before work begins. Common for custom work or new clients. Reduces risk and ensures commitment. Balance due upon completion or per agreed terms.",
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
            Common Invoicing Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Invoicing errors lead to payment delays and disputes. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Vague line item descriptions",
                body: "Unclear descriptions lead to disputes and payment delays. Be specific about what was provided. Include dates, deliverables, and any relevant details. Clear descriptions prevent questions.",
              },
              {
                n: "2",
                title: "Incorrect tax calculation",
                body: "Applying tax incorrectly leads to compliance issues and disputes. Verify tax rates for your jurisdiction and product types. Some items are exempt. Calculate tax on the correct amount (after discounts).",
              },
              {
                n: "3",
                title: "Missing payment terms",
                body: "Not specifying when payment is due leads to delays. Always include clear payment terms. Specify due date, early payment discounts, and late payment penalties if applicable.",
              },
              {
                n: "4",
                title: "Not including contact information",
                body: "Missing contact information makes it hard for clients to ask questions. Include your business name, address, phone, email, and payment details. Easy communication speeds payment.",
              },
              {
                n: "5",
                title: "Calculating tax on original amount",
                body: "Tax should be calculated on the discounted amount, not the original subtotal. Calculate tax after applying discounts to ensure accuracy. This is a common error that overcharges clients.",
              },
              {
                n: "6",
                title: "Not sending invoices promptly",
                body: "Delayed invoicing leads to delayed payment. Send invoices immediately upon work completion or milestone achievement. Prompt invoicing improves cash flow and professional relationships.",
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
            Practical Tips for Professional Invoicing
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate accurate totals</>],
              [<><strong>Be specific</strong> — clear line item descriptions</>],
              [<><strong>Include all details</strong> — contact info, terms, due date</>],
              [<><strong>Calculate tax correctly</strong> — on discounted amounts</>],
              [<><strong>Send promptly</strong> — invoice immediately</>],
              [<><strong>Offer early payment discounts</strong> — incentivize prompt payment</>],
              [<><strong>Use professional templates</strong> — consistent branding</>],
              [<><strong>Track aging</strong> — follow up on overdue invoices</>],
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
                q: "How do I calculate invoice total?",
                a: "Invoice Total = (Subtotal - Discount) × (1 + Tax Rate) + Fees + Shipping. Calculate subtotal from line items, apply discounts, calculate tax on the discounted amount, then add any fees or shipping. The calculator above automates this.",
              },
              {
                q: "When should I apply sales tax?",
                a: "Sales tax applies based on your jurisdiction's rules. Some locations tax services, others only goods. Some items are exempt (food, medicine). Verify local requirements. Tax is typically calculated on the amount after discounts.",
              },
              {
                q: "What is the difference between subtotal and total?",
                a: "Subtotal is the sum of line items before discounts, taxes, and fees. Total is the final amount due after all adjustments, taxes, and additional charges. Subtotal includes the base amount; total includes everything.",
              },
              {
                q: "How do early payment discounts work?",
                a: "Early payment discounts (e.g., 2/10 Net 30) offer a percentage discount if paid within a specified period. Calculate the discount amount and subtract from the total if paid early. This incentivizes prompt payment.",
              },
              {
                q: "What payment terms should I use?",
                a: "Net 30 is standard for B2B. Use Net 15 or Net 30 for most clients. Offer 2/10 Net 30 for early payment incentive. Use Due on Receipt for small transactions or one-time services.",
              },
              {
                q: "Should I include shipping on invoices?",
                a: "Include shipping as a separate line item if you charge for it. Calculate shipping based on actual cost or flat rate. Specify if shipping is included or additional. Clear shipping terms prevent disputes.",
              },
              {
                q: "How do I handle partial payments?",
                a: "Track partial payments against the invoice total. Show remaining balance on updated invoices. Apply payments to oldest invoices first if multiple invoices exist. Clear records prevent confusion.",
              },
              {
                q: "What information must be on an invoice?",
                a: "Include business name and contact info, client name and contact info, invoice number, date, due date, line items with descriptions, subtotal, discounts, tax, total, and payment terms. Complete information ensures prompt payment.",
              },
              {
                q: "How do I calculate tax on discounted invoices?",
                a: "Calculate tax on the discounted subtotal, not the original amount. For example, if subtotal is $1,000 with 10% discount ($100), tax is calculated on $900, not $1,000. This is the correct and legal method.",
              },
              {
                q: "How often should I send invoices?",
                a: "Send invoices immediately upon work completion or milestone achievement. For ongoing work, invoice monthly or per agreed schedule. Prompt invoicing improves cash flow and reduces payment delays.",
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
            Professional invoicing is essential for getting paid on time and maintaining good client relationships. Accurate calculations, clear descriptions, and proper payment terms ensure smooth transactions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate invoice totals, apply discounts, and calculate taxes. But the real value comes from using these calculations to create professional, accurate invoices that get paid promptly.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're a freelancer, small business, or large enterprise, accurate invoicing is critical for cash flow. Calculate precisely, invoice promptly, and get paid on time.
          </p>
          <div className="pull-quote mt-8">
            Professional invoices aren't just bills — they're communication tools that reflect your business quality. Invoice accurately, professionally, and consistently.
          </div>
        </section>

      </div>
    </article>
  );
}
