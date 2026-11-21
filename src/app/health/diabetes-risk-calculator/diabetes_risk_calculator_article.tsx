import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DiabetesRiskArticle() {
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
          <span className="meta-tag">Health · Disease Prevention</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Diabetes Risk Calculator: Assess Your Risk
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for diabetes risk assessment
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Diabetes is a growing health concern affecting millions of people worldwide. Many people have prediabetes or type 2 diabetes without knowing it. Understanding your risk factors is the first step toward prevention and early intervention.
          </p>
          <p className="mb-5">
            Type 2 diabetes develops gradually, and risk factors include age, weight, family history, and lifestyle. The good news is that many risk factors are modifiable. Knowing your risk empowers you to take action before diabetes develops.
          </p>
          <p className="mb-5">
            The diabetes risk calculator above evaluates your personal risk factors and provides an assessment of your likelihood of developing type 2 diabetes. This is a screening tool, not a diagnostic test.
          </p>
          <p>
            Use the diabetes risk calculator to understand your risk factors, learn about prevention strategies, and take proactive steps toward better health.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Diabetes Risk Assessment Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator evaluates multiple risk factors associated with type 2 diabetes. Each factor contributes to your overall risk score. The assessment is based on established clinical guidelines and research.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Key risk factors evaluated:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Age", "Risk increases with age, especially after 45"],
              ["Weight/BMI", "Overweight and obesity significantly increase risk"],
              ["Family History", "Having a parent or sibling with diabetes increases risk"],
              ["Physical Activity", "Sedentary lifestyle increases risk"],
              ["Blood Pressure", "High blood pressure is associated with diabetes risk"],
              ["Gestational Diabetes", "History of gestational diabetes increases risk"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            This calculator is a screening tool, not a diagnostic test. Only a healthcare provider can diagnose diabetes through blood tests. If you have concerns, consult your doctor.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── RISK CATEGORIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Risk Categories
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Risk assessment results are typically categorized as low, moderate, or high risk. Each category indicates different levels of concern and recommended actions.
          </p>

          {[
            {
              heading: "Low Risk",
              rows: [
                ["Score Range", "Below established threshold"],
                ["Risk Level", "Below average for developing diabetes"],
                ["Recommended Action", "Maintain healthy lifestyle, regular checkups"],
              ],
              note: "Low risk doesn't mean no risk. Continue healthy habits and get regular checkups. Risk can change over time as you age or lifestyle factors change.",
            },
            {
              heading: "Moderate Risk",
              rows: [
                ["Score Range", "Elevated but not high risk"],
                ["Risk Level", "Above average for developing diabetes"],
                ["Recommended Action", "Lifestyle modifications, regular monitoring"],
              ],
              note: "Moderate risk indicates you have several risk factors. This is an opportunity to take action. Lifestyle changes can significantly reduce your risk of developing diabetes.",
            },
            {
              heading: "High Risk",
              rows: [
                ["Score Range", "Significantly elevated risk"],
                ["Risk Level", "High likelihood of developing diabetes"],
                ["Recommended Action", "Medical consultation, intensive lifestyle changes"],
              ],
              note: "High risk doesn't mean you will definitely develop diabetes, but it indicates significant risk factors. Consult your healthcare provider for personalized guidance and possibly blood glucose testing.",
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

        {/* ── MODIFIABLE FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Modifiable Risk Factors
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many diabetes risk factors are within your control. Addressing these modifiable factors can significantly reduce your risk of developing type 2 diabetes.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Weight management",
                body: "Losing 5-7% of body weight can significantly reduce diabetes risk. Even modest weight loss provides substantial benefits. Focus on sustainable changes rather than rapid weight loss.",
              },
              {
                n: "2",
                title: "Physical activity",
                body: "Regular exercise improves insulin sensitivity and helps with weight management. Aim for at least 150 minutes of moderate-intensity activity per week, plus strength training twice weekly.",
              },
              {
                n: "3",
                title: "Healthy diet",
                body: "Focus on whole foods, vegetables, fruits, lean proteins, and whole grains. Limit processed foods, sugary beverages, and refined carbohydrates. A Mediterranean-style diet is particularly beneficial.",
              },
              {
                n: "4",
                title: "Blood pressure control",
                body: "High blood pressure is associated with increased diabetes risk. Manage blood pressure through diet, exercise, stress management, and medication if prescribed by your doctor.",
              },
              {
                n: "5",
                title: "Cholesterol management",
                body: "Abnormal cholesterol levels are linked to diabetes risk. Regular exercise, a healthy diet, and medication if needed can help maintain healthy cholesterol levels.",
              },
              {
                n: "6",
                title: "Smoking cessation",
                body: "Smoking increases insulin resistance and diabetes risk. Quitting smoking provides immediate and long-term health benefits beyond diabetes prevention.",
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

        {/* ── NON-MODIFIABLE FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Non-Modifiable Risk Factors
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Some risk factors cannot be changed. However, knowing these factors helps you understand your baseline risk and the importance of addressing modifiable factors.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Factor</th>
                <th className="dark:text-slate-100">Why It Matters</th>
                <th className="dark:text-slate-100">What You Can Do</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Age", "Risk increases with age", "Focus on modifiable factors"],
                ["Family History", "Genetics play a role", "Be extra vigilant with prevention"],
                ["Ethnicity", "Some groups have higher risk", "Earlier and more frequent screening"],
                ["Gestational Diabetes", "History increases future risk", "Regular monitoring after pregnancy"],
                ["Polycystic Ovary Syndrome", "Associated with insulin resistance", "Work with healthcare provider"],
              ].map(([factor, why, action]) => (
                <tr key={factor}>
                  <td className="dark:text-slate-100">{factor}</td>
                  <td className="dark:text-slate-100">{why}</td>
                  <td className="dark:text-slate-100">{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Having non-modifiable risk factors means you need to be even more diligent about addressing modifiable factors. You can't change your genetics, but you can influence your lifestyle.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Diabetes Prevention
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — assess your diabetes risk</>],
              [<><strong>Maintain healthy weight</strong> — even modest loss helps</>],
              [<><strong>Exercise regularly</strong> — aim for 150 minutes weekly</>],
              [<><strong>Eat whole foods</strong> — limit processed and sugary foods</>],
              [<><strong>Stay hydrated</strong> — choose water over sugary drinks</>],
              [<><strong>Get regular checkups</strong> — monitor blood glucose</>],
              [<><strong>Manage stress</strong> — stress affects blood sugar</>],
              [<><strong>Get enough sleep</strong> — poor sleep increases risk</>],
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
                q: "How is diabetes risk calculated?",
                a: "Diabetes risk is calculated by evaluating multiple risk factors including age, weight, family history, activity level, and other health indicators. Each factor contributes to an overall risk score based on established clinical guidelines.",
              },
              {
                q: "Can diabetes be prevented?",
                a: "Yes, type 2 diabetes can often be prevented or delayed through lifestyle changes. Studies show that losing 5-7% of body weight and increasing physical activity can reduce risk by more than 50%.",
              },
              {
                q: "What are the warning signs of diabetes?",
                a: "Common warning signs include increased thirst, frequent urination, unexplained weight loss, increased hunger, fatigue, blurred vision, and slow-healing sores. However, many people have no symptoms in early stages.",
              },
              {
                q: "How often should I be screened for diabetes?",
                a: "Adults over 35 should be screened every 3 years, or more frequently if they have risk factors. People with prediabetes should be screened annually. Consult your doctor for personalized recommendations.",
              },
              {
                q: "What is prediabetes?",
                a: "Prediabetes means blood sugar levels are higher than normal but not high enough to be diagnosed as diabetes. It's a warning sign that you're at increased risk. Lifestyle changes can often return blood sugar to normal levels.",
              },
              {
                q: "Does family history guarantee I'll get diabetes?",
                a: "No. Family history increases risk but doesn't guarantee you'll develop diabetes. Addressing modifiable risk factors through lifestyle changes can significantly reduce your risk even with a family history.",
              },
              {
                q: "Can thin people get type 2 diabetes?",
                a: "Yes. While weight is a major risk factor, thin people can develop type 2 diabetes due to genetics, age, ethnicity, or other factors. Everyone should be aware of diabetes risk regardless of weight.",
              },
              {
                q: "When should I see a doctor about diabetes risk?",
                a: "Consult your doctor if you have multiple risk factors, symptoms of diabetes, or if your risk assessment shows moderate to high risk. Your doctor can order blood tests to diagnose diabetes or prediabetes.",
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
            Understanding your diabetes risk is the first step toward prevention. The calculator above provides an assessment based on your individual risk factors, but it's only a screening tool.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that many risk factors are modifiable. Lifestyle changes can significantly reduce your risk of developing type 2 diabetes, even if you have non-modifiable risk factors.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            If you have concerns about your diabetes risk, consult your healthcare provider. They can provide personalized guidance, order appropriate tests, and help you develop a prevention plan.
          </p>
          <div className="pull-quote mt-8">
            Diabetes prevention is possible. Understanding your risk and taking action today can protect your health for years to come.
          </div>
        </section>

      </div>
    </article>
  );
}
