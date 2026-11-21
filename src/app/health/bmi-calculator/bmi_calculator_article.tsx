import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BMIArticle() {
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
          <span className="meta-tag">Health · Weight Management</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            BMI Calculator: Understand Your Body Mass Index
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for healthy weight assessment
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You step on the scale and see a number. But what does that number really mean about your health? Your weight alone doesn&apos;t tell the whole story. Body Mass Index (BMI) provides a more complete picture by considering your height along with your weight.
          </p>
          <p className="mb-5">
            BMI is a screening tool used to identify possible weight problems in adults. It&apos;s a simple calculation based on height and weight that categorizes individuals as underweight, normal weight, overweight, or obese. While not perfect, BMI is widely used by healthcare professionals.
          </p>
          <p className="mb-5">
            But BMI has limitations. It doesn&apos;t distinguish between muscle and fat, and it may not be accurate for athletes, elderly individuals, or pregnant women. Understanding these limitations is important for interpreting your BMI correctly.
          </p>
          <p>
            Use the BMI calculator above to calculate your Body Mass Index, understand what your number means, and learn how to achieve and maintain a healthy weight.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How BMI Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            BMI is calculated by dividing your weight in kilograms by your height in meters squared. For imperial units, the formula includes a conversion factor. The result is a number that places you in a weight category.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Metric Formula:
          </p>
          <div className="formula-block">
            <pre>BMI = Weight (kg) / [Height (m)]²</pre>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2 mt-4">
            Imperial Formula:
          </p>
          <div className="formula-block">
            <pre>BMI = [Weight (lbs) / (Height (in))²] × 703</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here&apos;s a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Weight", "150 lbs"],
              ["Height", "5'6\" (66 inches)"],
              ["Calculation", "(150 / 66²) × 703"],
              ["BMI", "24.2"],
              ["Category", "Normal weight"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            A BMI of 24.2 falls in the normal weight range (18.5-24.9). This person is at a healthy weight for their height. Regular BMI monitoring helps track weight changes over time.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BMI CATEGORIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            BMI Categories and What They Mean
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            BMI is divided into categories that indicate whether a person is at a healthy weight. These categories are standardized by the World Health Organization and used globally for screening purposes.
          </p>

          {[
            {
              heading: "Underweight: BMI < 18.5",
              rows: [
                ["Health Risks", "Malnutrition, osteoporosis, weakened immune system"],
                ["Recommendation", "Consult healthcare provider, increase caloric intake"],
              ],
              note: "Being underweight can be as unhealthy as being overweight. It may indicate malnutrition, eating disorders, or underlying health conditions. Medical evaluation is recommended.",
            },
            {
              heading: "Normal Weight: BMI 18.5 - 24.9",
              rows: [
                ["Health Risks", "Minimal for most people"],
                ["Recommendation", "Maintain current weight with balanced diet and exercise"],
              ],
              note: "This is the ideal BMI range for most adults. People in this range generally have the lowest risk of weight-related health problems. Maintain healthy habits to stay in this range.",
            },
            {
              heading: "Overweight: BMI 25.0 - 29.9",
              rows: [
                ["Health Risks", "Increased risk of heart disease, diabetes, high blood pressure"],
                ["Recommendation", "Adopt healthier diet, increase physical activity"],
              ],
              note: "Being overweight increases the risk of several chronic diseases. Lifestyle changes can often help reduce BMI to the normal range. Even modest weight loss provides health benefits.",
            },
            {
              heading: "Obesity Class I: BMI 30.0 - 34.9",
              rows: [
                ["Health Risks", "High risk of diabetes, heart disease, certain cancers"],
                ["Recommendation", "Medical consultation, structured weight loss program"],
              ],
              note: "Obesity significantly increases health risks. Medical supervision is recommended for weight loss. A combination of diet, exercise, and sometimes medication is often needed.",
            },
            {
              heading: "Obesity Class II: BMI 35.0 - 39.9",
              rows: [
                ["Health Risks", "Very high risk of serious health complications"],
                ["Recommendation", "Comprehensive medical weight management"],
              ],
              note: "Severe obesity requires comprehensive medical management. The risks of serious health complications are very high. Bariatric surgery may be considered in some cases.",
            },
            {
              heading: "Obesity Class III: BMI ≥ 40.0",
              rows: [
                ["Health Risks", "Extreme risk of life-threatening conditions"],
                ["Recommendation", "Intensive medical intervention, possible surgery"],
              ],
              note: "This is also called morbid obesity. The health risks are extreme and life-threatening. Intensive medical intervention, including bariatric surgery, is often necessary.",
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
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── LIMITATIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            BMI Limitations and Considerations
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            BMI is a useful screening tool, but it has important limitations. Understanding these limitations helps you interpret your BMI correctly and avoid misinterpreting your health status.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Muscle vs. fat",
                body: "BMI doesn't distinguish between muscle and fat. Athletes and bodybuilders may have high BMI due to muscle mass, not excess fat. For these individuals, BMI may overestimate body fat.",
              },
              {
                n: "2",
                title: "Age considerations",
                body: "BMI may not be accurate for elderly individuals who have lost muscle mass. Older adults may have normal BMI but still have excess body fat. Other measures may be more appropriate.",
              },
              {
                n: "3",
                title: "Ethnicity differences",
                body: "BMI cutoffs may not apply equally to all ethnic groups. Some populations have higher health risks at lower BMI levels. Ethnicity-specific adjustments may be needed.",
              },
              {
                n: "4",
                title: "Pregnancy",
                body: "BMI is not appropriate for pregnant women. Weight gain during pregnancy is normal and necessary. Postpartum BMI should be assessed after recovery.",
              },
              {
                n: "5",
                title: "Children and teens",
                body: "BMI is interpreted differently for children and teens. Age and gender-specific percentiles are used instead of adult categories. Pediatric BMI charts are used.",
              },
              {
                n: "6",
                title: "Fat distribution",
                body: "BMI doesn't account for where fat is stored. Abdominal fat (visceral fat) is more harmful than fat stored elsewhere. Waist circumference provides additional information.",
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

        {/* ── ALTERNATIVE MEASURES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Alternative Measures to BMI
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Because BMI has limitations, healthcare providers often use additional measures to assess body composition and health risks. These measures provide a more complete picture.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Measure</th>
                <th className="dark:text-slate-100">What It Measures</th>
                <th className="dark:text-slate-100">Advantages</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Waist Circumference", "Abdominal fat", "Assesses visceral fat risk"],
                ["Waist-to-Hip Ratio", "Fat distribution", "Indicates health risk pattern"],
                ["Body Fat Percentage", "Actual fat mass", "Distinguishes fat from muscle"],
                ["Skinfold Measurements", "Subcutaneous fat", "Estimates body composition"],
                ["Bioelectrical Impedance", "Body composition", "Quick and non-invasive"],
                ["DEXA Scan", "Bone and body composition", "Most accurate measure"],
              ].map(([measure, what, advantages]) => (
                <tr key={measure}>
                  <td className="dark:text-slate-100">{measure}</td>
                  <td className="dark:text-slate-100">{what}</td>
                  <td className="dark:text-slate-100">{advantages}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Waist circumference is particularly important because abdominal fat is metabolically active and increases health risks more than fat stored elsewhere. A waist measurement over 40 inches for men or 35 inches for women indicates higher risk.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Healthy Weight Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track your BMI regularly</>],
              [<><strong>Eat balanced diet</strong> — focus on whole foods</>],
              [<><strong>Exercise regularly</strong> — aim for 150 minutes weekly</>],
              [<><strong>Stay hydrated</strong> — drink enough water</>],
              [<><strong>Get enough sleep</strong> — 7-9 hours nightly</>],
              [<><strong>Manage stress</strong> — stress affects weight</>],
              [<><strong>Measure waist</strong> — track abdominal fat</>],
              [<><strong>Consult doctor</strong> — before major changes</>],
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
                q: "How is BMI calculated?",
                a: "BMI is calculated by dividing weight in kilograms by height in meters squared. For imperial units, multiply the result by 703. The calculator above performs this calculation automatically.",
              },
              {
                q: "What is a healthy BMI?",
                a: "A healthy BMI is between 18.5 and 24.9 for most adults. This range is associated with normal weight and the lowest risk of weight-related health problems.",
              },
              {
                q: "Is BMI accurate for everyone?",
                a: "No. BMI doesn't distinguish between muscle and fat, so it may not be accurate for athletes, bodybuilders, elderly individuals, or pregnant women. Other measures may be needed for these groups.",
              },
              {
                q: "Why is BMI used if it has limitations?",
                a: "BMI is simple, inexpensive, and non-invasive. It's a good screening tool for large populations. For individuals, it's a starting point that may be followed by more detailed assessments.",
              },
              {
                q: "How often should I check my BMI?",
                a: "Check your BMI periodically, especially if you're actively trying to change your weight. Monthly checks can help track progress. Annual checks are sufficient for weight maintenance.",
              },
              {
                q: "Can I have a normal BMI and still be unhealthy?",
                a: "Yes. Normal BMI doesn't guarantee good health. You can have normal weight but poor diet, lack of exercise, or other risk factors. BMI is just one measure of health.",
              },
              {
                q: "What should I do if my BMI is high?",
                a: "Consult your healthcare provider for personalized advice. Generally, increasing physical activity, improving diet, and making lifestyle changes can help reduce BMI. Medical supervision is recommended for significant weight loss.",
              },
              {
                q: "Is BMI different for men and women?",
                a: "The BMI calculation is the same for men and women, but health risks may differ at the same BMI. Women naturally have higher body fat percentages than men, which may affect health risk assessment.",
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
            BMI is a useful screening tool for assessing weight status, but it's not a perfect measure of health. Use it as a starting point, not the final word on your health.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            If your BMI is outside the normal range, consult your healthcare provider for personalized advice. They can help you understand your specific situation and develop a plan to achieve a healthy weight.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that health is about more than just a number. Focus on developing healthy habits that you can maintain long-term, rather than obsessing over a specific BMI target.
          </p>
          <div className="pull-quote mt-8">
            BMI is a tool, not a judgment. Use it to inform your health decisions, but remember that overall health includes physical, mental, and emotional well-being.
          </div>
        </section>

      </div>
    </article>
  );
}
