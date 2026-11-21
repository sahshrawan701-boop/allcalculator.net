import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function HalfLifeArticle() {
  return (
    <article
      className={`w-full max-w-[75ch] mx-auto px-6 py-16 text-[18px] leading-[1.8] font-sans text-slate-800 dark:text-slate-100 ${inter.variable}`}
    >
      <style>{`
        .article-root { font-family: var(--font-inter), sans-serif; }
        .display-font { font-family: var(--font-inter), sans-serif; }
        .article-root h2 { font-family: var(--font-inter), sans-serif; }
        .article-root h3 { font-family: var(--font-inter), sans-serif; }

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
        <header className="mb-12 text-center">
          <span className="meta-tag">Math · Exponential Decay</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Half-Life Calculator: Calculate Decay Over Time
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to half-life and exponential decay calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Half-life is the time required for a quantity to decrease to half of its
            initial value. This concept is fundamental in nuclear physics, chemistry,
            pharmacology, and many other fields where exponential decay occurs. Understanding
            half-life helps predict how long substances remain active or radioactive.
          </p>
          <p className="mb-5">
            A Half-Life Calculator calculates the remaining quantity after a given
            time, or the time required to reach a specific remaining quantity. This tool
            is essential for scientists, pharmacists, nuclear engineers, and students
            studying exponential decay.
          </p>
          <p>
            Mastering half-life calculations provides insight into exponential processes
            and helps in planning for radioactive waste management, drug dosing schedules,
            and carbon dating.
          </p>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Half-Life Formula
          </h2>
          <div className="formula-block">
            <pre>{`N(t) = N₀ × (1/2)^(t/t₁/₂)

Where:
N(t) = Remaining quantity after time t
N₀ = Initial quantity
t = Elapsed time
t₁/₂ = Half-life

Example:
Initial: 100g, Half-life: 10 years, Time: 30 years
N(30) = 100 × (1/2)^(30/10) = 100 × (1/2)^3 = 12.5g`}</pre>
          </div>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What is the difference between half-life and mean life?",
                a: "Half-life is the time for quantity to halve. Mean life (average life) is the average time a particle exists before decaying. Mean life = half-life / ln(2) ≈ 1.44 × half-life.",
              },
              {
                q: "Can half-life be used for growth processes?",
                a: "Yes, the concept applies to exponential growth as well. For growth, the quantity doubles in each half-life period rather than halving.",
              },
              {
                q: "How many half-lives until a substance is effectively gone?",
                a: "After 10 half-lives, less than 0.1% remains. After 20 half-lives, less than one millionth remains. Practically, 10 half-lives is often considered effectively zero.",
              },
              {
                q: "Does half-life change with temperature or pressure?",
                a: "For radioactive decay, half-life is constant and unaffected by environmental conditions. For chemical reactions, half-life can vary with temperature and other factors.",
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use the Half-Life Calculator to model exponential decay and predict
            remaining quantities over time. Understanding half-life is essential for
            nuclear physics, chemistry, and pharmacology.
          </p>
        </section>
      </div>
    </article>
  );
}
