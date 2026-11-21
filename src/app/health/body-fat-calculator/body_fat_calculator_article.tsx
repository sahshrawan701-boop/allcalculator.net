import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BodyFatArticle() {
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
          <span className="meta-tag">Health · Body Composition</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Body Fat Calculator: Measure Your Body Composition
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for body fat assessment
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You step on the scale and see a number. But that number doesn&apos;t tell you how much of your weight is fat versus muscle. Body fat percentage provides that crucial distinction, giving you a more accurate picture of your health and fitness.
          </p>
          <p className="mb-5">
            Body fat percentage is the proportion of fat mass to total body weight. Unlike BMI, it distinguishes between lean mass (muscle, bone, organs) and fat mass. This makes it a more accurate indicator of health and fitness for many individuals.
          </p>
          <p className="mb-5">
            But measuring body fat accurately can be challenging. Different methods have varying degrees of accuracy, and some are more accessible than others. The calculator above uses the U.S. Navy method, which provides a reasonable estimate based on simple measurements.
          </p>
          <p>
            Use the body fat calculator above to estimate your body fat percentage, understand what your number means, and track changes in your body composition over time.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Body Fat Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses the U.S. Navy method, which estimates body fat percentage based on circumference measurements of the waist, neck, and hips. This method is widely used because it requires only a tape measure and provides reasonable accuracy.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            U.S. Navy Formula (Men):
          </p>
          <div className="formula-block">
            <pre>Body Fat % = 86.010 × log10(waist - neck) - 70.041 × log10(height) + 36.76</pre>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2 mt-4">
            U.S. Navy Formula (Women):
          </p>
          <div className="formula-block">
            <pre>Body Fat % = 163.205 × log10(waist + hip - neck) - 97.684 × log10(height) - 78.387</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here&apos;s what you need to measure:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Height", "Standing straight without shoes"],
              ["Neck", "Below the larynx, sloping slightly downward"],
              ["Waist (men)", "At navel level"],
              ["Waist (women)", "At narrowest point above navel"],
              ["Hips (women)", "At widest point of buttocks"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            For accurate measurements, take them at the same time of day, preferably in the morning before eating. Consistency in measurement technique is key for tracking changes over time.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BODY FAT CATEGORIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Body Fat Percentage Categories
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Body fat percentage categories differ between men and women because women naturally require higher essential fat levels for reproductive health. Understanding these categories helps assess your body composition.
          </p>

          {[
            {
              heading: "Essential Fat: Men 2-5%, Women 10-13%",
              rows: [
                ["Description", "Minimum fat needed for survival"],
                ["Health Implications", "Below this level is dangerous"],
              ],
              note: "Essential fat is the minimum amount required for normal physiological function. Going below essential fat levels is dangerous and can lead to serious health problems.",
            },
            {
              heading: "Athletes: Men 6-13%, Women 14-20%",
              rows: [
                ["Description", "Typical of elite athletes"],
                ["Health Implications", "Excellent fitness level"],
              ],
              note: "This range is typical of competitive athletes and highly fit individuals. It represents excellent body composition achieved through dedicated training and nutrition.",
            },
            {
              heading: "Fitness: Men 14-17%, Women 21-24%",
              rows: [
                ["Description", "Good, healthy body composition"],
                ["Health Implications", "Generally healthy and fit"],
              ],
              note: "This is the ideal range for most people. It represents a healthy balance between fat and lean mass and is associated with good health and fitness.",
            },
            {
              heading: "Average: Men 18-24%, Women 25-31%",
              rows: [
                ["Description", "Typical of general population"],
                ["Health Implications", "Acceptable but could be improved"],
              ],
              note: "This is the average range for most adults. While acceptable, reducing body fat to the fitness range can improve health markers and physical performance.",
            },
            {
              heading: "Obese: Men 25%+, Women 32%+",
              rows: [
                ["Description", "Excess body fat"],
                ["Health Implications", "Increased health risks"],
              ],
              note: "This range indicates excess body fat that may increase health risks. Weight loss through diet and exercise is recommended to reduce health risks.",
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

        {/* ── MEASUREMENT METHODS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Body Fat Measurement Methods
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Various methods exist for measuring body fat, each with different levels of accuracy and accessibility. Understanding these methods helps you choose the right approach for your needs.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Method</th>
                <th className="dark:text-slate-100">Accuracy</th>
                <th className="dark:text-slate-100">Accessibility</th>
                <th className="dark:text-slate-100">Cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["U.S. Navy Method", "Moderate", "High (tape measure)", "Free"],
                ["Skinfold Calipers", "Moderate-High", "Moderate", "Low"],
                ["Bioelectrical Impedance", "Moderate", "High (home scales)", "Low-Moderate"],
                ["DEXA Scan", "Very High", "Low (medical facility)", "High"],
                ["Hydrostatic Weighing", "Very High", "Low (specialized facility)", "High"],
                ["Bod Pod (Air Displacement)", "High", "Low (specialized facility)", "High"],
              ].map(([method, accuracy, accessibility, cost]) => (
                <tr key={method}>
                  <td className="dark:text-slate-100">{method}</td>
                  <td className="dark:text-slate-100">{accuracy}</td>
                  <td className="dark:text-slate-100">{accessibility}</td>
                  <td className="dark:text-slate-100">{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            The U.S. Navy method used by this calculator provides a reasonable estimate for most people. For the most accurate measurement, DEXA scanning is considered the gold standard but requires access to medical facilities.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── REDUCING BODY FAT ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce Body Fat Healthily
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Reducing body fat requires a combination of proper nutrition, regular exercise, and lifestyle habits. Focus on sustainable approaches rather than quick fixes.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Caloric deficit",
                body: "To lose fat, you must consume fewer calories than you burn. A moderate deficit of 300-500 calories per day promotes sustainable fat loss without excessive muscle loss.",
              },
              {
                n: "2",
                title: "Adequate protein",
                body: "Consume enough protein to preserve muscle mass while losing fat. Aim for 0.8-1 gram of protein per pound of body weight. Protein also has a higher thermic effect.",
              },
              {
                n: "3",
                title: "Strength training",
                body: "Build and maintain muscle through resistance training. Muscle tissue burns more calories at rest than fat tissue, helping you maintain a higher metabolic rate.",
              },
              {
                n: "4",
                title: "Cardio exercise",
                body: "Include cardiovascular exercise to increase calorie burn. Aim for 150-300 minutes of moderate-intensity cardio per week for optimal fat loss.",
              },
              {
                n: "5",
                title: "Sleep and stress management",
                body: "Poor sleep and high stress increase cortisol, which can promote fat storage, especially around the midsection. Prioritize 7-9 hours of quality sleep.",
              },
              {
                n: "6",
                title: "Consistency over intensity",
                body: "Sustainable habits beat extreme measures. Focus on consistent nutrition and exercise habits you can maintain long-term rather than short-term crash diets.",
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
            Practical Tips for Body Fat Measurement
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — estimate your body fat accurately</>],
              [<><strong>Measure consistently</strong> — same time, same method</>],
              [<><strong>Track trends</strong> — focus on progress over time</>],
              [<><strong>Don't obsess</strong> — body fat is one metric</>],
              [<><strong>Consider context</strong> — athletes have different ranges</>],
              [<><strong>Combine with other metrics</strong> — use BMI, waist circumference</>],
              [<><strong>Focus on health</strong> — not just the number</>],
              [<><strong>Consult professionals</strong> — for medical concerns</>],
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
                q: "How is body fat percentage calculated?",
                a: "The calculator uses the U.S. Navy method, which estimates body fat based on circumference measurements of the waist, neck, and hips. This method provides a reasonable estimate for most people.",
              },
              {
                q: "What is a healthy body fat percentage?",
                a: "Healthy ranges differ by gender. For men, 14-17% is considered the fitness range. For women, 21-24% is the fitness range. Essential fat levels are 2-5% for men and 10-13% for women.",
              },
              {
                q: "Why do women have higher body fat percentages?",
                a: "Women naturally require higher essential fat levels for reproductive health. Hormonal differences and the need for energy reserves during pregnancy and breastfeeding result in naturally higher body fat percentages.",
              },
              {
                q: "Is body fat percentage better than BMI?",
                a: "Body fat percentage is often more accurate than BMI, especially for athletes and bodybuilders. BMI doesn't distinguish between muscle and fat, while body fat percentage does. However, BMI is easier to calculate.",
              },
              {
                q: "How often should I measure body fat?",
                a: "Measure body fat every 4-8 weeks to track meaningful changes. Body fat changes slowly, and frequent measurements may not show significant progress. Consistency in measurement method is key.",
              },
              {
                q: "Can you have too little body fat?",
                a: "Yes. Going below essential fat levels (2-5% for men, 10-13% for women) is dangerous and can lead to hormonal disruption, organ dysfunction, and other serious health problems.",
              },
              {
                q: "What's the most accurate way to measure body fat?",
                a: "DEXA scanning is considered the gold standard for body fat measurement. It provides very accurate body composition data but requires access to medical facilities and is relatively expensive.",
              },
              {
                q: "Does muscle weigh more than fat?",
                a: "Muscle is denser than fat, meaning a pound of muscle takes up less space than a pound of fat. This is why two people with the same weight can have very different body compositions and appearances.",
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
            Body fat percentage is a valuable metric for assessing body composition and health. It provides insight that BMI alone cannot offer, especially for athletes and those focused on fitness.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that body fat is just one measure of health. Focus on developing sustainable habits that support overall well-being, including proper nutrition, regular exercise, adequate sleep, and stress management.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator above as a tool to track progress, but don't obsess over the number. Focus on how you feel, how your clothes fit, and your overall health markers.
          </p>
          <div className="pull-quote mt-8">
            Body composition matters more than body weight. Focus on building a healthy, strong body rather than chasing a specific number on the scale.
          </div>
        </section>

      </div>
    </article>
  );
}
