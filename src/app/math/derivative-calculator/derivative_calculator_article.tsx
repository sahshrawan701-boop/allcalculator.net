import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DerivativeArticle() {
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
          <span className="meta-tag">Math · Calculus & Analysis</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Derivative Calculator: Calculate Derivatives
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to calculating derivatives and understanding calculus
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Derivatives are fundamental to calculus, representing the rate of change of
            a function with respect to its variable. They measure how a function changes
            at any given point, providing insights into slopes, velocities, and rates
            of change in countless applications.
          </p>
          <p className="mb-5">
            A Derivative Calculator computes derivatives of mathematical functions,
            showing both the result and the step-by-step process. This tool is essential
            for students learning calculus, engineers analyzing rates of change, and
            scientists modeling dynamic systems.
          </p>
          <p>
            Understanding derivatives helps you analyze function behavior, find maximum
            and minimum values, and solve optimization problems across physics, economics,
            engineering, and many other fields.
          </p>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Derivative Rules
          </h2>
          <div className="formula-block">
            <pre>{`Power Rule: d/dx(x^n) = nx^(n-1)

Constant Rule: d/dx(c) = 0

Sum Rule: d/dx(f + g) = f' + g'

Product Rule: d/dx(fg) = f'g + fg'

Chain Rule: d/dx(f(g(x))) = f'(g(x)) · g'(x)

Example:
d/dx(3x² + 2x + 1) = 6x + 2`}</pre>
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
                q: "What does a derivative represent?",
                a: "A derivative represents the instantaneous rate of change of a function. Geometrically, it's the slope of the tangent line at a point on the function's graph.",
              },
              {
                q: "When do I use the chain rule?",
                a: "Use the chain rule when differentiating composite functions—functions within functions. It's essential for functions like sin(x²) or e^(3x).",
              },
              {
                q: "What's the difference between first and second derivatives?",
                a: "The first derivative gives the rate of change (velocity). The second derivative gives the rate of change of the rate of change (acceleration), indicating concavity.",
              },
              {
                q: "Can all functions be differentiated?",
                a: "Most functions can be differentiated, but some have points where the derivative doesn't exist (corners, cusps, discontinuities). These are called non-differentiable points.",
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
            Use the Derivative Calculator to compute derivatives accurately and understand
            the step-by-step process. Mastering derivatives is essential for calculus
            and its applications in science and engineering.
          </p>
        </section>
      </div>
    </article>
  );
}
