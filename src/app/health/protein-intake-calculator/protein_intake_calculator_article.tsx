import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ProteinIntakeArticle() {
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
            Protein Intake Calculator: Optimize Your Protein Needs
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for protein intake calculation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Protein is essential for building and repairing tissues, making enzymes and hormones, and supporting overall health. But how much protein do you actually need? The answer depends on your goals, activity level, and individual factors.
          </p>
          <p className="mb-5">
            Protein requirements vary significantly between sedentary individuals, athletes, and people with specific health goals. Understanding your optimal protein intake helps you support muscle growth, maintain muscle mass during weight loss, and achieve your fitness goals.
          </p>
          <p className="mb-5">
            The protein intake calculator above determines your daily protein needs based on your body weight, activity level, and goals. It provides gram targets to help you plan your nutrition effectively.
          </p>
          <p>
            Use the protein intake calculator to determine your optimal protein needs, understand protein's role in your diet, and plan your meals to meet your goals.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Protein Intake Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses established guidelines to determine protein needs based on body weight and activity level. Different goals require different protein intakes, from basic maintenance to muscle building.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Protein Calculation Formula:
          </p>
          <div className="formula-block">
            <pre>Daily Protein (g) = Body Weight (kg) × Protein Multiplier</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Protein multipliers by goal:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Sedentary", "0.8-1.0 g per kg"],
              ["Active", "1.2-1.6 g per kg"],
              ["Muscle Building", "1.6-2.2 g per kg"],
              ["Weight Loss", "1.8-2.4 g per kg"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            These are general guidelines. Individual needs may vary based on age, health status, and other factors. Athletes and older adults may benefit from higher protein intakes.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── PROTEIN NEEDS BY GOAL ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Protein Needs by Goal
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different goals require different protein intakes. Understanding these differences helps you choose the right target for your objectives.
          </p>

          {[
            {
              heading: "Maintenance: Basic Health",
              rows: [
                ["Protein Target", "0.8-1.0 g per kg body weight"],
                ["Purpose", "Maintain muscle and overall health"],
                ["Best For", "Sedentary individuals, general health"],
              ],
              note: "This is the minimum recommended intake for basic health. It's sufficient for sedentary individuals but may not be optimal for active people or those with specific fitness goals.",
            },
            {
              heading: "Active: Regular Exercise",
              rows: [
                ["Protein Target", "1.2-1.6 g per kg body weight"],
                ["Purpose", "Support activity and recovery"],
                ["Best For", "Regular exercisers, active lifestyle"],
              ],
              note: "Higher protein supports recovery from exercise and maintains muscle mass. This range is appropriate for people who exercise regularly but aren't training intensely.",
            },
                {
              heading: "Muscle Building: Hypertrophy",
              rows: [
                ["Protein Target", "1.6-2.2 g per kg body weight"],
                ["Purpose", "Maximize muscle growth and repair"],
                ["Best For", "Strength training, bodybuilding"],
              ],
              note: "Higher protein provides the building blocks for muscle growth. This range supports intense training and maximizes muscle protein synthesis.",
            },
            {
              heading: "Weight Loss: Preserve Muscle",
              rows: [
                ["Protein Target", "1.8-2.4 g per kg body weight"],
                ["Purpose", "Preserve muscle during calorie deficit"],
                ["Best For", "Fat loss, cutting phases"],
              ],
              note: "Higher protein during weight loss helps preserve muscle mass while losing fat. It also increases satiety, making it easier to stick to a calorie deficit.",
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

        {/* ── PROTEIN SOURCES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Protein Sources
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Protein comes from both animal and plant sources. Understanding the differences helps you plan a balanced diet that meets your protein needs.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Animal proteins",
                body: "Meat, poultry, fish, eggs, and dairy are complete proteins containing all essential amino acids. They're typically high-quality and easily absorbed. Lean options are preferred for health.",
              },
              {
                n: "2",
                title: "Plant proteins",
                body: "Legumes, nuts, seeds, and grains provide protein. Most plant proteins are incomplete but can be combined to provide all essential amino acids. Some like soy and quinoa are complete.",
              },
              {
                n: "3",
                title: "Protein supplements",
                body: "Whey, casein, and plant-based protein powders can help meet protein needs conveniently. They're useful for post-workout nutrition or when whole food protein isn't practical.",
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

        {/* ── TIMING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Protein Timing and Distribution
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            While total daily protein intake is most important, how you distribute that protein throughout the day can optimize results.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Timing Strategy</th>
                <th className="dark:text-slate-100">Implementation</th>
                <th className="dark:text-slate-100">Benefit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Even Distribution", "Spread protein across 3-5 meals", "Optimizes muscle protein synthesis"],
                ["Post-Workout", "20-40g within 2 hours of training", "Supports recovery and muscle building"],
                ["Pre-Sleep", "20-40g casein before bed", "Reduces muscle breakdown overnight"],
                ["First Meal", "Include protein in breakfast", "Breaks overnight fast, supports muscle"],
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
            Don't stress about perfect timing. Total daily intake is most important. If you can distribute protein evenly and include post-workout protein, that's great, but hitting your daily target is the priority.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Meeting Protein Needs
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — determine your protein target</>],
              [<><strong>Prioritize protein</strong> — include it in every meal</>],
              [<><strong>Choose lean sources</strong> — minimize saturated fat</>],
              [<><strong>Plan ahead</strong> — prep protein-rich meals</>],
              [<><strong>Use supplements wisely</strong> — whole foods first</>],
              [<><strong>Track intake</strong> — ensure you hit targets</>],
              [<><strong>Vary sources</strong> — mix animal and plant proteins</>],
              [<><strong>Adjust as needed</strong> — based on progress and goals</>],
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
                q: "How much protein do I need?",
                a: "Protein needs depend on your goals and activity level. Sedentary individuals need about 0.8-1.0 g per kg, while athletes and those building muscle may need 1.6-2.2 g per kg. The calculator provides personalized recommendations.",
              },
              {
                q: "Can you eat too much protein?",
                a: "For healthy individuals, high protein intake (up to 2-3 g per kg) is generally safe. People with kidney issues should consult their doctor. Excess protein is simply used for energy or excreted.",
              },
              {
                q: "Is animal or plant protein better?",
                a: "Both can be part of a healthy diet. Animal proteins are complete and easily absorbed. Plant proteins can be combined to provide all essential amino acids. A mix of both is often optimal.",
              },
              {
                q: "Do I need protein supplements?",
                a: "Not necessarily. You can meet protein needs through whole foods. Supplements can be convenient for post-workout nutrition or when whole food protein isn't practical, but they're not required.",
              },
              {
                q: "Does protein timing matter?",
                a: "Total daily intake is most important. However, distributing protein evenly across meals and including post-workout protein can optimize muscle protein synthesis. Don't stress about perfect timing.",
              },
              {
                q: "Can I build muscle on plant protein?",
                a: "Yes. Plant protein can support muscle building effectively when total protein intake is adequate. Combining different plant proteins ensures you get all essential amino acids.",
              },
              {
                q: "How do I know if I'm getting enough protein?",
                a: "Track your intake for a few days to see if you're hitting your target. Signs of adequate protein include good recovery from workouts, stable muscle mass, and feeling satisfied after meals.",
              },
              {
                q: "Should I increase protein as I age?",
                a: "Yes. Older adults may benefit from higher protein intake (1.2-1.5 g per kg) to combat age-related muscle loss (sarcopenia). Protein becomes more important for maintaining muscle as we age.",
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
            Protein is a crucial nutrient for health, fitness, and body composition. The calculator above provides personalized protein targets based on your goals and individual factors.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that total daily protein intake is the most important factor. While timing and protein quality matter, hitting your daily target consistently is the key to seeing results.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Focus on including protein in every meal, choosing high-quality sources, and adjusting your intake based on your progress and changing goals.
          </p>
          <div className="pull-quote mt-8">
            Protein is the foundation of a healthy nutrition plan. Get enough of it, and you'll be amazed at how your body responds.
          </div>
        </section>

      </div>
    </article>
  );
}
