import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TrigonometryArticle() {
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
          <span className="meta-tag">Math · Trigonometry</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Trigonometry Calculator: Calculate Trigonometric Functions
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to trigonometric functions and calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Trigonometry is the study of relationships between angles and side lengths
            in triangles. It's fundamental to geometry, physics, engineering, and countless
            applications from navigation to signal processing. Understanding trigonometric
            functions is essential for anyone working with periodic phenomena.
          </p>
          <p className="mb-5">
            A Trigonometry Calculator computes sine, cosine, tangent, and their inverse
            functions, along with other trigonometric values. This tool is essential for
            students learning trigonometry, engineers analyzing waveforms, and scientists
            modeling periodic behavior.
          </p>
          <p>
            Mastering trigonometry provides the foundation for calculus, physics,
            engineering, and understanding the mathematical description of cycles and waves.
          </p>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Trigonometric Identities
          </h2>
          <div className="formula-block">
            <pre>{`Pythagorean Identity:
sin²θ + cos²θ = 1

Reciprocal Identities:
cscθ = 1/sinθ
secθ = 1/cosθ
cotθ = 1/tanθ

Quotient Identity:
tanθ = sinθ/cosθ`}</pre>
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
                q: "What's the difference between degrees and radians?",
                a: "Degrees and radians are angle units. 360° equals 2π radians. Radians are preferred in calculus and higher mathematics because they simplify many formulas.",
              },
              {
                q: "When are trigonometric functions undefined?",
                a: "Tangent and cotangent are undefined at certain angles where cosine or sine equals zero. For example, tan(90°) is undefined because cos(90°) = 0.",
              },
              {
                q: "What are the inverse trigonometric functions?",
                a: "Inverse functions (arcsin, arccos, arctan) find angles given their trigonometric values. They're used to solve for angles in right triangles.",
              },
              {
                q: "How are trigonometric functions used in real life?",
                a: "They're used in navigation, architecture, music, signal processing, physics (waves), engineering (forces), and computer graphics (rotations).",
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
            Use the Trigonometry Calculator for accurate trigonometric function calculations.
            Mastering trigonometry is essential for calculus, physics, and engineering.
          </p>
        </section>
      </div>
    </article>
  );
}
