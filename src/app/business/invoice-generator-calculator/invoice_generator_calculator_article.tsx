import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function InvoiceGeneratorCalculatorArticle() {
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
            Invoice Generator: Create Professional Invoices
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for businesses and freelancers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You've completed a web development project for a client. The project involved 40 hours of development at $75 per hour, totaling $3,000. You also charged $200 for domain registration and hosting setup. With a 5% early payment discount ($160), the subtotal is $3,040. Adding 8% sales tax ($243.20) brings the total to $3,283.20. Using an invoice generator, you create a professional invoice with your branding, line items, payment terms, and payment instructions, then send it to the client.
          </p>
          <p className="mb-5">
            Professional invoice generators help you create polished, accurate invoices quickly. A good invoice generator includes your branding, calculates totals automatically, handles taxes and discounts, and produces a professional document that reflects well on your business.
          </p>
          <p className="mb-5">
            But invoice quality affects payment speed and client relationships. Professional, clear invoices get paid faster and reduce disputes. Understanding how to create effective invoices ensures you get paid on time.
          </p>
          <p>
            The invoice generator above helps you create professional invoices with automatic calculations, tax handling, and professional formatting.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Invoice Generation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Invoice generation involves entering business and client information, adding line items for products or services, applying discounts and taxes, and generating a formatted document ready for delivery.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Invoice Generation Process:
          </p>
          <div className="formula-block">
            <pre>1. Enter Business Info → 2. Enter Client Info → 3. Add Line Items → 4. Apply Discounts/Tax → 5. Set Payment Terms → 6. Generate Invoice</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Business Information", "Name, address, logo, contact details"],
              ["Client Information", "Name, address, contact details"],
              ["Line Items", "Description, quantity, unit price, total"],
              ["Calculations", "Subtotal, discounts, tax, total"],
              ["Payment Terms", "Due date, payment methods, early payment discounts"],
              ["Output", "PDF or formatted document ready to send"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            The invoice generator automates calculations and formatting, ensuring accuracy and professionalism. This reduces errors and speeds up the invoicing process, improving cash flow.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── ESSENTIAL ELEMENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Essential Invoice Elements
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            A professional invoice includes specific elements that ensure clarity, compliance, and prompt payment. Understanding these elements helps you create complete invoices.
          </p>

          {[
            {
              heading: "Header Information",
              rows: [
                ["Includes", "Business name, logo, contact info"],
                ["Purpose", "Identify who is sending the invoice"],
                ["Best Practice", "Use consistent branding"],
              ],
              note: "Your business header establishes professionalism. Include your business name, logo, address, phone, email, and website. Consistent branding reinforces your identity and makes invoices easily recognizable.",
            },
            {
              heading: "Client Information",
              rows: [
                ["Includes", "Client name, address, contact person"],
                ["Purpose", "Identify who should receive payment"],
                ["Best Practice", "Verify accuracy before sending"],
              ],
              note: "Client information ensures the invoice reaches the right person and payment is directed correctly. Include the client's business name, billing address, and contact person for any questions.",
            },
            {
              heading: "Invoice Details",
              rows: [
                ["Includes", "Invoice number, date, due date"],
                ["Purpose", "Identify the invoice and payment timeline"],
                ["Best Practice", "Use sequential numbering"],
              ],
              note: "Invoice number, date, and due date are essential for tracking and payment. Use sequential invoice numbers for accounting. Clearly state the due date to avoid payment delays.",
            },
          ].map((element: { heading: string; rows: string[][]; note: string }) => (
            <div key={element.heading} className="state-card">
              <h3>{element.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {element.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{element.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── LINE ITEMS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Creating Effective Line Items
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Line items describe what was provided. Clear, specific line items prevent disputes and ensure clients understand what they're paying for.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Component</th>
                <th className="dark:text-slate-100">Best Practice</th>
                <th className="dark:text-slate-100">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Description", "Be specific and detailed", "Web Development - Homepage Design (10 hours)"],
                ["Quantity", "Use clear units", "10 hours, 5 units, 1 project"],
                ["Unit Price", "Price per unit", "$75/hour, $50/unit, $3,000/project"],
                ["Line Total", "Quantity × Unit Price", "10 × $75 = $750"],
              ].map(([component, practice, example]) => (
                <tr key={component}>
                  <td className="dark:text-slate-100">{component}</td>
                  <td className="dark:text-slate-100">{practice}</td>
                  <td className="dark:text-slate-100">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Specific descriptions prevent disputes. Instead of "Consulting Services," use "Strategic Consulting - Market Analysis and Competitive Research (5 hours)." The more specific, the fewer questions.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── PAYMENT TERMS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Setting Payment Terms
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Clear payment terms specify when and how payment should be made. Well-defined terms improve cash flow and reduce payment delays.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Specify due date clearly",
                body: "State the exact due date (e.g., Due: March 15, 2024) rather than just terms (e.g., Net 30). Clear dates reduce confusion and delays. Include both the date and terms for clarity.",
              },
              {
                n: "2",
                title: "Include payment methods",
                body: "Specify accepted payment methods: bank transfer, credit card, PayPal, check. Include account details for bank transfers. Clear payment instructions make it easy for clients to pay.",
              },
              {
                n: "3",
                title: "Offer early payment discounts",
                body: "Incentivize prompt payment with early payment discounts (e.g., 2% if paid within 10 days). Calculate and display the discount amount. This improves cash flow significantly.",
              },
              {
                n: "4",
                title: "Specify late payment terms",
                body: "Include late payment fees or interest if applicable. Specify the percentage and when it applies (e.g., 1.5% monthly on overdue amounts). This protects against chronic late payers.",
              },
              {
                n: "5",
                title: "Include contact for questions",
                body: "Specify who to contact with invoice questions. Include name, email, and phone. Easy communication prevents delays caused by questions going unanswered.",
              },
              {
                n: "6",
                title: "Reference purchase order if applicable",
                body: "If the client requires PO numbers, include it on the invoice. This ensures the invoice matches their records and speeds up their internal approval process.",
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
            Common Invoice Generation Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Invoice errors lead to payment delays and disputes. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Missing or incorrect contact information",
                body: "Incomplete contact information makes it hard for clients to ask questions or process payment. Always include complete business and client contact details. Verify accuracy before sending.",
              },
              {
                n: "2",
                title: "Vague line item descriptions",
                body: "Unclear descriptions lead to disputes and payment delays. Be specific about what was provided. Include dates, deliverables, and relevant details. Specific descriptions prevent questions.",
              },
              {
                n: "3",
                title: "Incorrect calculations",
                body: "Calculation errors damage credibility and cause disputes. Use an invoice generator with automatic calculations. Double-check totals before sending. Accuracy is essential for professionalism.",
              },
              {
                n: "4",
                title: "Not specifying payment terms",
                body: "Missing payment terms lead to payment delays. Always specify due date, payment methods, and any discount or late fee terms. Clear terms ensure prompt payment.",
              },
              {
                n: "5",
                title: "Not including invoice number",
                body: "Missing invoice numbers make tracking difficult. Use sequential invoice numbers for accounting and reference. This is essential for both your records and the client's.",
              },
              {
                n: "6",
                title: "Sending to wrong person",
                body: "Sending invoices to the wrong contact causes delays. Verify the correct billing contact before sending. For large clients, confirm the specific person or department responsible for invoices.",
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
            Practical Tips for Professional Invoices
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the generator above</strong> — create professional invoices</>],
              [<><strong>Be specific</strong> — clear line item descriptions</>],
              [<><strong>Include all details</strong> — contact info, terms, due date</>],
              [<><strong>Use branding</strong> — logo, colors, consistent format</>],
              [<><strong>Send promptly</strong> — invoice immediately</>],
              [<><strong>Offer multiple payment methods</strong> — make it easy to pay</>],
              [<><strong>Track invoices</strong> — monitor payment status</>],
              [<><strong>Follow up</strong> — polite reminders for overdue invoices</>],
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
                q: "What information must be on an invoice?",
                a: "Include business name and contact info, client name and contact info, invoice number, date, due date, line items with descriptions and prices, subtotal, discounts, tax, total, and payment terms. Complete information ensures prompt payment.",
              },
              {
                q: "How do I number my invoices?",
                a: "Use sequential numbering (e.g., INV-0001, INV-0002). This simplifies accounting and tracking. Never reuse invoice numbers. Sequential numbering is standard practice and required for tax purposes in many jurisdictions.",
              },
              {
                q: "What payment terms should I use?",
                a: "Net 30 is standard for B2B. Use Net 15 for faster payment. Offer 2/10 Net 30 for early payment incentive. Specify the exact due date, not just terms. Clear terms improve payment speed.",
              },
              {
                q: "Should I include my logo on invoices?",
                a: "Yes, including your logo reinforces branding and professionalism. It makes invoices easily recognizable and reinforces your business identity. Use a high-quality logo that displays clearly.",
              },
              {
                q: "How do I handle taxes on invoices?",
                a: "Calculate tax based on your jurisdiction's requirements. Specify the tax rate and amount separately. Some items may be exempt. Verify local tax rules. Tax is typically calculated on the amount after discounts.",
              },
              {
                q: "What file format should I use for invoices?",
                a: "PDF is the standard format for invoices. It preserves formatting and is universally readable. Some clients may accept Word or Google Docs, but PDF is preferred for professionalism and consistency.",
              },
              {
                q: "How do I handle partial payments?",
                a: "Track partial payments against the invoice total. Send updated invoices showing remaining balance. Apply payments to oldest invoices first if multiple invoices exist. Clear records prevent confusion.",
              },
              {
                q: "Should I include purchase order numbers?",
                a: "Yes, if the client requires PO numbers. Include the PO number on the invoice. This ensures the invoice matches their records and speeds up their internal approval process. Ask for PO numbers upfront if required.",
              },
              {
                q: "How do I follow up on overdue invoices?",
                a: "Send polite reminders at 7, 14, and 30 days past due. Escalate from friendly reminders to more formal notices. Include the original invoice for reference. Consistent follow-up improves collection rates.",
              },
              {
                q: "Can I use an invoice generator for international clients?",
                a: "Yes, but ensure you include currency, international payment details, and comply with local invoicing requirements. Some countries have specific invoice format requirements. Research client location requirements.",
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
            Professional invoice generation is essential for getting paid on time and maintaining good client relationships. Accurate calculations, complete information, and clear payment terms ensure smooth transactions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The invoice generator above helps you create professional invoices with automatic calculations and professional formatting. But the real value comes from using these invoices to maintain cash flow and professional relationships.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're a freelancer, small business, or large enterprise, professional invoicing is critical for cash flow. Generate accurately, send promptly, and get paid on time.
          </p>
          <div className="pull-quote mt-8">
            Professional invoices aren't just bills — they're communication tools that reflect your business quality. Generate professionally, send promptly, and build trust.
          </div>
        </section>

      </div>
    </article>
  );
}
