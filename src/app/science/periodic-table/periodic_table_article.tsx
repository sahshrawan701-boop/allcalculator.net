import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PeriodicTableArticle() {
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
        .dark .faq-item h3 { color: #e2e8f0 !important }
      `}</style>

      {/* ── INTRO ── */}
      <section className="mb-10">
        <p className="mb-5">
          <span className="dropcap">T</span>he periodic table is one of the most important tools in chemistry, organizing all known chemical elements in a systematic way based on their atomic structure and properties. This interactive Periodic Table helps you explore elements, their properties, and relationships.
        </p>
        <p className="mb-5">
          The periodic table arranges elements by increasing atomic number and groups them by similar chemical and physical properties. This organization reveals patterns and trends that help predict element behavior and understand chemical bonding.
        </p>
        <p>
          Understanding the periodic table is essential for students, chemists, and anyone interested in science. It provides a framework for understanding how elements interact, form compounds, and behave under different conditions.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── STRUCTURE ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Structure of the Periodic Table
        </h2>
        <p className="mb-5">
          The periodic table is organized into rows (periods) and columns (groups) that reflect the electronic structure of elements. This arrangement reveals systematic patterns in element properties.
        </p>
        <p className="mb-5">
          <strong>Periods (Rows)</strong>: The seven horizontal rows represent energy levels. Elements in the same period have the same number of electron shells. Properties change gradually across periods from left to right.
        </p>
        <p className="mb-5">
          <strong>Groups (Columns)</strong>: The 18 vertical columns contain elements with similar chemical properties. Elements in the same group have the same number of valence electrons, which determines their chemical behavior.
        </p>
        <p className="mb-5">
          <strong>Blocks</strong>: The table is divided into s-block, p-block, d-block, and f-block based on the subshell being filled. These blocks correspond to different types of orbitals and element categories.
        </p>
        <p>
          <strong>Lanthanides and Actinides</strong>: These two rows are placed below the main table to maintain compactness. They are f-block elements with unique properties and are often shown separately.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── ELEMENT CATEGORIES ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Element Categories
        </h2>
        <p className="mb-5">
          Elements are categorized based on their properties and positions in the periodic table. These categories help understand element behavior and predict chemical reactions.
        </p>
        <p className="mb-5">
          <strong>Alkali Metals (Group 1)</strong>: Highly reactive metals with one valence electron. They are soft, shiny, and react vigorously with water. Examples include lithium, sodium, and potassium.
        </p>
        <p className="mb-5">
          <strong>Alkaline Earth Metals (Group 2)</strong>: Reactive metals with two valence electrons. They are less reactive than alkali metals but still form basic oxides. Examples include magnesium, calcium, and barium.
        </p>
        <p className="mb-5">
          <strong>Transition Metals (Groups 3-12)</strong>: Metals with partially filled d orbitals. They are good conductors, malleable, and often form colored compounds. Examples include iron, copper, and gold.
        </p>
        <p className="mb-5">
          <strong>Post-Transition Metals</strong>: Metals softer and with lower melting points than transition metals. Examples include aluminum, tin, and lead. They have diverse properties and uses.
        </p>
        <p className="mb-5">
          <strong>Metalloids</strong>: Elements with properties between metals and nonmetals. They are semiconductors and crucial for electronics. Examples include silicon, germanium, and arsenic.
        </p>
        <p className="mb-5">
          <strong>Nonmetals</strong>: Elements that lack metallic properties. They are poor conductors and can be gases, liquids, or brittle solids. Examples include oxygen, carbon, and sulfur.
        </p>
        <p className="mb-5">
          <strong>Halogens (Group 17)</strong>: Highly reactive nonmetals with seven valence electrons. They form salts with metals. Examples include fluorine, chlorine, and bromine.
        </p>
        <p>
          <strong>Noble Gases (Group 18)</strong>: Inert gases with full valence shells. They rarely form compounds. Examples include helium, neon, and argon.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── PERIODIC TRENDS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Periodic Trends
        </h2>
        <p className="mb-5">
          Periodic trends are patterns in element properties that repeat across the periodic table. Understanding these trends helps predict element behavior and chemical reactivity.
        </p>
        <p className="mb-5">
          <strong>Atomic Radius</strong>: Decreases from left to right across a period (increasing nuclear charge pulls electrons closer) and increases down a group (adding electron shells). This trend affects bonding and reactivity.
        </p>
        <p className="mb-5">
          <strong>Ionization Energy</strong>: Increases from left to right (harder to remove electrons from smaller atoms with higher nuclear charge) and decreases down a group (outer electrons are farther from nucleus). Affects reactivity and bonding.
        </p>
        <p className="mb-5">
          <strong>Electronegativity</strong>: Increases from left to right (greater attraction for bonding electrons) and decreases down a group (larger atoms have less attraction). Determines bond polarity and chemical behavior.
        </p>
        <p className="mb-5">
          <strong>Metallic Character</strong>: Decreases from left to right (elements become less metallic) and increases down a group (elements become more metallic). Affects physical properties and reactivity.
        </p>
        <p>
          <strong>Electron Affinity</strong>: Generally increases from left to right (greater energy release when gaining electrons) and decreases down a group. Influences anion formation and chemical bonding.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── ATOMIC STRUCTURE ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Atomic Structure and Properties
        </h2>
        <p className="mb-5">
          Each element has unique atomic properties that determine its behavior. Understanding these properties is fundamental to chemistry and materials science.
        </p>
        <p className="mb-5">
          <strong>Atomic Number</strong>: The number of protons in the nucleus, which defines the element. Each element has a unique atomic number. It determines the element's position in the periodic table.
        </p>
        <p className="mb-5">
          <strong>Atomic Mass</strong>: The average mass of atoms of an element, accounting for isotopes. Measured in atomic mass units (amu). It's approximately equal to the number of protons plus neutrons.
        </p>
        <p className="mb-5">
          <strong>Electron Configuration</strong>: The arrangement of electrons in energy levels and orbitals. Determines chemical properties and bonding behavior. Follows specific rules (Aufbau principle, Pauli exclusion, Hund's rule).
        </p>
        <p className="mb-5">
          <strong>Valence Electrons</strong>: Electrons in the outermost shell that participate in chemical bonding. The number of valence electrons determines an element's group and chemical behavior.
        </p>
        <p>
          <strong>Isotopes</strong>: Atoms of the same element with different numbers of neutrons. They have the same chemical properties but different masses. Some isotopes are radioactive.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── CHEMICAL BONDING ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Chemical Bonding and the Periodic Table
        </h2>
        <p className="mb-5">
          The periodic table helps predict how elements will bond based on their electron configurations and positions. Understanding bonding is essential for explaining chemical reactions and material properties.
        </p>
        <p className="mb-5">
          <strong>Ionic Bonding</strong>: Occurs between metals (left side) and nonmetals (right side). Metals lose electrons to form cations, nonmetals gain electrons to form anions. Example: NaCl (sodium chloride).
        </p>
        <p className="mb-5">
          <strong>Covalent Bonding</strong>: Occurs between nonmetals (right side). Atoms share electrons to achieve stable electron configurations. Example: H2O (water), CO2 (carbon dioxide).
        </p>
        <p className="mb-5">
          <strong>Metallic Bonding</strong>: Occurs between metals (left and center). Electrons are delocalized across a metal lattice, giving metals their characteristic properties like conductivity and malleability.
        </p>
        <p className="mb-5">
          <strong>Octet Rule</strong>: Elements tend to gain, lose, or share electrons to achieve eight valence electrons (noble gas configuration). This rule explains many bonding patterns and chemical reactions.
        </p>
        <p>
          <strong>Bond Polarity</strong>: Determined by electronegativity differences between bonded atoms. Large differences create polar bonds (ionic character), small differences create nonpolar covalent bonds.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── FAQ ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {[
            {
              q: "How many elements are in the periodic table?",
              a: "Currently, there are 118 confirmed elements. Elements 1-94 occur naturally, while elements 95-118 are synthetic and created in laboratories. The most recently discovered elements are very unstable and decay quickly."
            },
            {
              q: "Why is the periodic table arranged this way?",
              a: "The periodic table is arranged by increasing atomic number and grouped by similar properties. This arrangement reflects the periodic nature of electron configurations, which determine chemical behavior. Elements in the same group have similar valence electron configurations."
            },
            {
              q: "What are the main groups in the periodic table?",
              a: "The main groups are alkali metals (Group 1), alkaline earth metals (Group 2), transition metals (Groups 3-12), halogens (Group 17), and noble gases (Group 18). Other categories include post-transition metals, metalloids, and nonmetals."
            },
            {
              q: "What is the difference between atomic number and atomic mass?",
              a: "Atomic number is the number of protons in the nucleus and defines the element. Atomic mass is the average mass of atoms, accounting for protons, neutrons, and isotopes. Atomic mass is approximately equal to protons plus neutrons."
            },
            {
              q: "Why are noble gases unreactive?",
              a: "Noble gases have full valence electron shells (octet configuration), making them very stable. They don't need to gain, lose, or share electrons to achieve stability, so they rarely form compounds."
            },
            {
              q: "What are periodic trends?",
              a: "Periodic trends are patterns in element properties that repeat across the periodic table. Key trends include atomic radius, ionization energy, electronegativity, and metallic character. These trends help predict element behavior."
            },
            {
              q: "What are lanthanides and actinides?",
              a: "Lanthanides (elements 57-71) and actinides (elements 89-103) are f-block elements placed below the main table. They have unique properties and complex electron configurations. Actinides are mostly radioactive."
            },
            {
              q: "How does the periodic table help predict chemical reactions?",
              a: "By knowing an element's position, you can predict its valence electrons, electronegativity, and reactivity. This helps determine what types of bonds it will form and how it will react with other elements."
            }
          ].map((item, i) => (
            <div key={i} className="faq-item">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{item.q}</h3>
              <p className="text-slate-700 dark:text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
