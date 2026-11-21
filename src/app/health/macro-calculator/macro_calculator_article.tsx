import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function MacroArticle() {
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
          <span className="meta-tag">Health · Nutrition</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Macro Calculator: Optimize Your Nutrition
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for macronutrient planning
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You know how many calories to eat, but how should you divide those calories between carbohydrates, proteins, and fats? The right macronutrient balance depends on your goals, activity level, and individual factors. Understanding macros helps you optimize your nutrition for your specific needs.
          </p>
          <p className="mb-5">
            Macronutrients — carbohydrates, proteins, and fats — are the nutrients your body needs in large amounts. Each serves specific functions and provides different amounts of calories per gram. Balancing these macros appropriately supports your health and fitness goals.
          </p>
          <p className="mb-5">
            The macro calculator above determines your optimal macronutrient distribution based on your goals, activity level, and personal preferences. It provides gram targets for each macro based on your total calorie needs.
          </p>
          <p>
            Use the macro calculator to determine your optimal macronutrient split, understand the role of each macro, and create a nutrition plan that supports your goals.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Macro Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator first determines your total daily calorie needs based on your goals and activity level. Then it applies a macronutrient ratio based on your selected goal and calculates the grams of each macro.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Macro Calculation Formula:
          </p>
          <div className="formula-block">
            <pre>Macro Grams = (Total Calories × Macro Percentage) ÷ Calories per Gram</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Calories per gram:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Carbohydrates", "4 calories per gram"],
              ["Proteins", "4 calories per gram"],
              ["Fats", "9 calories per gram"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Different goals require different macro distributions. Weight loss typically emphasizes higher protein, while endurance performance may emphasize higher carbohydrates. The calculator adjusts ratios based on your selected goal.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── MACRO DISTRIBUTIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Macro Distributions by Goal
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different goals require different macronutrient balances. Understanding these distributions helps you choose the right approach for your objectives.
          </p>

          {[
            {
              heading: "Weight Loss: Higher Protein",
              rows: [
                ["Carbs", "30-40%"],
                ["Protein", "30-40%"],
                ["Fat", "30-40%"],
              ],
              note: "Higher protein helps preserve muscle mass during weight loss and increases satiety. Moderate carbs and fats provide energy while maintaining a calorie deficit.",
            },
            {
              heading: "Maintenance: Balanced",
              rows: [
                ["Carbs", "40-50%"],
                ["Protein", "25-30%"],
                ["Fat", "25-30%"],
              ],
              note: "A balanced distribution supports overall health and maintenance. This split provides energy from carbs, muscle maintenance from protein, and hormone support from fats.",
            },
            {
              heading: "Muscle Gain: Higher Protein & Carbs",
              rows: [
                ["Carbs", "45-55%"],
                ["Protein", "30-35%"],
                ["Fat", "15-25%"],
              ],
              note: "Higher carbs provide energy for intense training. Higher protein supports muscle building and repair. Moderate fat supports hormone production.",
            },
            {
              heading: "Ketogenic: Very Low Carb",
              rows: [
                ["Carbs", "5-10%"],
                ["Protein", "20-25%"],
                ["Fat", "70-75%"],
              ],
              note: "The ketogenic diet drastically reduces carbs to induce ketosis. High fat becomes the primary fuel source. This approach requires careful planning and monitoring.",
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

        {/* ── MACRO ROLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Macronutrient Roles
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Each macronutrient serves specific functions in the body. Understanding these roles helps you appreciate why balanced macros are important for health and performance.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Carbohydrates",
                body: "Primary energy source for the body and brain. Carbs are stored as glycogen in muscles and liver for quick energy. They spare protein from being used for energy and support high-intensity exercise.",
              },
              {
                n: "2",
                title: "Proteins",
                body: "Building blocks for muscle, tissue, enzymes, and hormones. Protein supports muscle growth and repair, immune function, and satiety. It has a higher thermic effect, meaning it burns more calories during digestion.",
              },
              {
                n: "3",
                title: "Fats",
                body: "Essential for hormone production, vitamin absorption, and cell membrane function. Fats provide concentrated energy and support brain health. They also provide essential fatty acids that the body cannot produce.",
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

        {/* ── TRACKING MACROS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Track Macros Effectively
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Tracking macros requires attention to detail but becomes easier with practice. Here are strategies for accurate macro tracking.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Strategy</th>
                <th className="dark:text-slate-100">Implementation</th>
                <th className="dark:text-slate-100">Benefit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Use a tracking app", "MyFitnessPal, Cronometer, or similar", "Automated calculation and database"],
                ["Weigh food", "Use a food scale for accuracy", "Most accurate portion measurement"],
                ["Read labels", "Check nutrition facts on packaged foods", "Know exactly what you're consuming"],
                ["Plan meals", "Pre-plan daily macro distribution", "Easier to hit targets consistently"],
                ["Track consistently", "Log everything, even small items", "Awareness of total intake"],
                ["Adjust weekly", "Review progress and adjust as needed", "Fine-tune for your body's response"],
              ].map(([strategy, implementation, benefit]) => (
                <tr key={strategy}>
                  <td className="dark:text-slate-100">{strategy}</td>
                  <td className="dark:text-slate-100">{implementation}</td>
                  <td className="dark:text-slate-100">{benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Don't obsess over hitting exact macro numbers every day. Aim to be within 5-10% of your targets. Consistency over time matters more than daily perfection.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Macro Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — determine your macro targets</>],
              [<><strong>Prioritize protein</strong> — especially for weight loss</>],
              [<><strong>Choose complex carbs</strong> — whole grains, vegetables, fruits</>],
              [<><strong>Include healthy fats</strong> — avocados, nuts, olive oil</>],
              [<><strong>Time your carbs</strong> — around workouts for performance</>],
              [<><strong>Stay flexible</strong> — adjust based on hunger and energy</>],
              [<><strong>Focus on food quality</strong> — nutrient-dense whole foods</>],
              [<><strong>Be patient</strong> — results take time</>],
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
                q: "How are macros calculated?",
                a: "Macros are calculated by determining your total calorie needs, then applying a percentage distribution based on your goal. Each macro is converted to grams using its calorie content: 4 calories/gram for carbs and protein, 9 calories/gram for fat.",
              },
              {
                q: "What is the best macro ratio?",
                a: "There's no single best ratio. The optimal distribution depends on your goals, activity level, and individual response. Weight loss typically benefits from higher protein, while endurance athletes may need higher carbohydrates.",
              },
              {
                q: "Do I need to track macros?",
                a: "Not strictly necessary, but it can be helpful for specific goals. Many people succeed with portion control or intuitive eating. Macro tracking provides awareness and can be particularly useful for athletic performance or body composition goals.",
              },
              {
                q: "What happens if I don't hit my macros exactly?",
                a: "Nothing bad. Aim to be within 5-10% of your targets. Your body doesn't switch metabolic states based on daily macro intake. Consistency over weeks and months matters more than daily precision.",
              },
              {
                q: "Can I build muscle on low carb?",
                a: "Yes, but it may be more challenging. Carbs provide energy for intense training, which supports muscle growth. Low-carb approaches can work but may require careful planning and adaptation.",
              },
              {
                q: "Is high protein bad for kidneys?",
                a: "For healthy individuals, high protein intake is not harmful to kidney function. People with existing kidney issues should consult their doctor about protein intake. Most people can safely consume 1.6-2.2 grams of protein per kg of body weight.",
              },
              {
                q: "Should I count fiber as carbs?",
                a: "Fiber is a carbohydrate but doesn't provide calories because humans can't digest it. Some people track net carbs (total carbs minus fiber), while others track total carbs. Both approaches can work depending on your preferences.",
              },
              {
                q: "How often should I recalculate my macros?",
                a: "Recalculate macros when your goals change, your activity level changes significantly, or you've lost or gained a substantial amount of weight. Your calorie needs change as your weight changes.",
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
            Macronutrient balance is a powerful tool for optimizing your nutrition. The calculator above provides personalized macro targets based on your goals and individual factors.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that macro targets are guidelines, not strict rules. Focus on hitting your targets consistently over time rather than obsessing over daily perfection.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Prioritize whole, nutrient-dense foods that provide not just macros but also micronutrients. Food quality matters as much as macro quantity for overall health and well-being.
          </p>
          <div className="pull-quote mt-8">
            The best macro plan is one you can sustain long-term. Focus on progress, not perfection, and build habits that support your goals for life.
          </div>
        </section>

      </div>
    </article>
  );
}
