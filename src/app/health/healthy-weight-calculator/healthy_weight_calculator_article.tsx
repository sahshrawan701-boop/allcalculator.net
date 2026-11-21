import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function HealthyWeightArticle() {
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
            Healthy Weight Calculator: Find Your Optimal Range
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for healthy weight calculation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Finding your healthy weight range is an important step in understanding your overall health. The healthy weight calculator above provides a personalized range based on your height, age, and gender using established health guidelines.
          </p>
          <p className="mb-5">
            Healthy weight isn't about a single number on the scale. It's about finding a weight range where your body functions optimally and you feel your best. The calculator uses BMI-based guidelines to estimate this range for you.
          </p>
          <p className="mb-5">
            Understanding your healthy weight range can help you set realistic fitness goals, assess your current health status, and make informed decisions about your lifestyle and nutrition.
          </p>
          <p>
            Use the healthy weight calculator to discover your optimal weight range and use it as a reference point for your health and wellness journey.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Healthy Weight Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses BMI (Body Mass Index) as the foundation for determining healthy weight ranges. BMI is a widely used screening tool that correlates with body fatness and health outcomes.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            BMI Formula:
          </p>
          <div className="formula-block">
            <pre>BMI = Weight (kg) ÷ Height (m)²</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Healthy BMI ranges:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Underweight", "BMI < 18.5"],
              ["Healthy Weight", "BMI 18.5-24.9"],
              ["Overweight", "BMI 25-29.9"],
              ["Obesity", "BMI ≥ 30"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            BMI is a general screening tool and doesn't directly measure body fat. Athletes and people with high muscle mass may have a higher BMI but still be healthy. Consider other health indicators alongside BMI.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BEYOND BMI ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Beyond BMI: Other Health Indicators
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            While BMI is a useful screening tool, it doesn't tell the whole story. Other indicators provide a more complete picture of your health and body composition.
          </p>

          {[
            {
              heading: "Waist Circumference",
              rows: [
                ["What It Measures", "Abdominal fat distribution"],
                ["Healthy Range", "Men < 40in, Women < 35in"],
                ["Significance", "Higher values indicate increased health risk"],
              ],
              note: "Waist circumference measures abdominal fat, which is more metabolically active and linked to health risks than fat stored elsewhere.",
            },
            {
              heading: "Body Fat Percentage",
              rows: [
                ["What It Measures", "Proportion of fat to total body mass"],
                ["Healthy Range", "Men 10-20%, Women 18-28%"],
                ["Significance", "More accurate indicator of body composition"],
              ],
              note: "Body fat percentage provides a more accurate picture of body composition than BMI alone. It accounts for muscle mass and bone density.",
            },
            {
              heading: "Muscle Mass",
              rows: [
                ["What It Measures", "Amount of lean muscle tissue"],
                ["Importance", "Supports metabolism and physical function"],
                ["Consideration", "Higher muscle mass may increase BMI"],
              ],
              note: "People with higher muscle mass may have higher BMI but still be healthy. Muscle is metabolically active and supports overall health.",
            },
            {
              heading: "Overall Health Markers",
              rows: [
                ["Blood Pressure", "Normal: <120/80 mmHg"],
                ["Cholesterol", "Normal: Total <200 mg/dL"],
                ["Blood Sugar", "Normal: Fasting <100 mg/dL"],
              ],
              note: "Blood pressure, cholesterol, blood sugar, and other health indicators provide important context. A person with healthy markers may be healthy even at a higher BMI.",
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

        {/* ── ACHIEVING HEALTHY WEIGHT ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Achieving and Maintaining Healthy Weight
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Reaching and maintaining a healthy weight involves sustainable lifestyle changes rather than quick fixes. Focus on habits you can maintain long-term.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Balanced nutrition",
                body: "Focus on whole foods, adequate protein, fruits, vegetables, and healthy fats. Avoid extreme restrictions that are difficult to maintain long-term.",
              },
              {
                n: "2",
                title: "Regular physical activity",
                body: "Aim for 150 minutes of moderate exercise per week, plus strength training twice weekly. Exercise supports weight management and overall health.",
              },
              {
                n: "3",
                title: "Adequate sleep",
                body: "Poor sleep disrupts hunger hormones and can lead to weight gain. Aim for 7-9 hours of quality sleep per night to support weight management.",
              },
              {
                n: "4",
                title: "Stress management",
                body: "Chronic stress increases cortisol, which can lead to weight gain, particularly around the midsection. Practice stress-reduction techniques regularly.",
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
            Practical Tips for Healthy Weight Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — find your healthy weight range</>],
              [<><strong>Focus on habits</strong> — sustainable changes over quick fixes</>],
              [<><strong>Eat mindfully</strong> — pay attention to hunger and fullness</>],
              [<><strong>Stay hydrated</strong> — water supports metabolism and satiety</>],
              [<><strong>Move regularly</strong> — find activities you enjoy</>],
              [<><strong>Track progress</strong> — but don't obsess over the scale</>],
              [<><strong>Be patient</strong> — sustainable change takes time</>],
              [<><strong>Consult professionals</strong> — for personalized guidance</>],
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
                q: "How is healthy weight calculated?",
                a: "Healthy weight is typically calculated using BMI ranges. The calculator determines the weight range that corresponds to a BMI of 18.5-24.9 for your height, which is considered the healthy weight range according to WHO guidelines.",
              },
              {
                q: "Is BMI accurate for everyone?",
                a: "BMI is a general screening tool and may not be accurate for everyone. Athletes, elderly people, and those with high muscle mass may have a higher BMI but still be healthy. Consider other health indicators alongside BMI.",
              },
              {
                q: "What if I'm outside the healthy weight range?",
                a: "Being outside the healthy weight range doesn&apos;t necessarily mean you&apos;re unhealthy. Consider other factors like waist circumference, body fat percentage, blood pressure, and overall fitness. Consult a healthcare provider for personalized assessment.",
              },
              {
                q: "Should I aim for the middle of the healthy range?",
                a: "The middle of the healthy BMI range (around BMI 21-22) is associated with the lowest health risks for most people. However, individual factors may mean a different weight within the range is optimal for you.",
              },
              {
                q: "How often should I check my weight?",
                a: "For general health monitoring, weighing yourself once a week is sufficient. Daily weight fluctuations are normal and don&apos;t reflect true changes in body composition. Focus on long-term trends rather than daily changes.",
              },
              {
                q: "Can I be healthy at a higher weight?",
                a: "Yes, you can be healthy at a higher weight if you have good muscle mass, healthy blood markers, and good fitness. BMI doesn&apos;t account for body composition. Focus on overall health rather than a specific number on the scale.",
              },
              {
                q: "What's the difference between healthy weight and ideal weight?",
                a: "Healthy weight is based on BMI ranges and general health guidelines. Ideal weight often refers to specific formulas like Devine, Robinson, or Miller that estimate an optimal weight based on height and gender. Both are estimates, not exact targets.",
              },
              {
                q: "Should I lose weight to reach the healthy range?",
                a: "Weight loss decisions should be made in consultation with a healthcare provider. If you&apos;re significantly outside the healthy range and have other risk factors, weight management may be beneficial. Focus on sustainable lifestyle changes rather than rapid weight loss.",
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
            The healthy weight calculator provides a useful reference point for understanding your weight in relation to health guidelines. However, it's just one piece of the health puzzle.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Focus on overall health and well-being rather than a specific number on the scale. Healthy habits, regular physical activity, good nutrition, adequate sleep, and stress management are more important than achieving a particular weight.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your body is unique, and what's healthy for you may differ from general guidelines. Listen to your body, work with healthcare professionals, and focus on sustainable lifestyle changes that support your overall health and happiness.
          </p>
          <div className="pull-quote mt-8">
            Health is not a destination—it's a journey. Focus on building healthy habits that support your well-being for life.
          </div>
        </section>

      </div>
    </article>
  );
}
