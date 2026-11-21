import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PotentialEnergyCalculatorArticle() {
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
          <span className="dropcap">P</span>otential energy is the energy possessed by an object due to its position or configuration. It's stored energy that can be converted into other forms, such as kinetic energy. A Potential Energy Calculator helps you compute this energy based on mass, height, and gravitational acceleration.
        </p>
        <p className="mb-5">
          This tool is essential for students, engineers, and anyone working with physics problems involving energy storage and conversion. Understanding potential energy helps in analyzing systems like dams, springs, and elevated objects.
        </p>
        <p>
          The most common form of potential energy is gravitational potential energy, which depends on an object's height in a gravitational field. Other forms include elastic potential energy in springs and chemical potential energy in fuels and batteries.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── THE FORMULA ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          The Gravitational Potential Energy Formula
        </h2>
        <p className="mb-5">
          Gravitational potential energy is calculated using a straightforward formula that relates mass, height, and gravitational acceleration. This formula is fundamental to understanding energy in gravitational systems.
        </p>
        <p className="mb-5">
          <strong>PE = mgh</strong>: Where PE is potential energy in joules, m is mass in kilograms, g is gravitational acceleration (9.8 m/s² on Earth), and h is height in meters. This formula assumes constant gravitational field.
        </p>
        <p className="mb-5">
          <strong>Units</strong>: The standard unit for potential energy is the joule (J). One joule equals one kilogram-meter squared per second squared (kg·m²/s²). This is the same unit as kinetic energy and work.
        </p>
        <p className="mb-5">
          <strong>Reference Point</strong>: Potential energy is relative to a chosen reference point (usually ground level). The absolute value matters less than the change in potential energy between two positions.
        </p>
        <p>
          <strong>Gravitational Variation</strong>: For very large heights (comparable to Earth's radius), gravitational acceleration varies, and more complex formulas are needed. The simple formula works for everyday heights.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── TYPES OF POTENTIAL ENERGY ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Types of Potential Energy
        </h2>
        <p className="mb-5">
          Potential energy exists in various forms depending on the system. Understanding these different types helps in analyzing energy storage and conversion in diverse applications.
        </p>
        <p className="mb-5">
          <strong>Gravitational Potential Energy</strong>: Energy due to an object's position in a gravitational field. Calculated as PE = mgh for uniform fields. Examples include water behind a dam, a book on a shelf, and a roller coaster at the top of a hill.
        </p>
        <p className="mb-5">
          <strong>Elastic Potential Energy</strong>: Energy stored in elastic materials when stretched or compressed. Calculated as PE = ½kx², where k is the spring constant and x is displacement. Examples include stretched springs, compressed rubber bands, and drawn bows.
        </p>
        <p className="mb-5">
          <strong>Chemical Potential Energy</strong>: Energy stored in chemical bonds. Released during chemical reactions. Examples include fuels, batteries, food, and explosives. This energy powers most of modern civilization.
        </p>
        <p>
          <strong>Electric Potential Energy</strong>: Energy due to electric charge position in an electric field. Important in electronics and electrical systems. Calculated based on charge and electric potential.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── REAL-WORLD EXAMPLES ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Real-World Examples of Potential Energy
        </h2>
        <p className="mb-5">
          Potential energy is all around us, stored in various forms waiting to be converted. These examples help connect the abstract concept to practical, everyday situations.
        </p>
        <p className="mb-5">
          <strong>Hydroelectric Dams</strong>: Water behind a dam has enormous gravitational potential energy. When released, this converts to kinetic energy of flowing water, which turbines convert to electrical energy. This provides renewable power.
        </p>
        <p className="mb-5">
          <strong>Roller Coasters</strong>: At the top of the first hill, a coaster has maximum potential energy. As it descends, this converts to kinetic energy, providing speed. The system design manages energy conversion for thrills and safety.
        </p>
        <p className="mb-5">
          <strong>Bows and Arrows</strong>: Drawing a bow stores elastic potential energy in the bent limbs. When released, this converts to kinetic energy of the arrow. The energy transfer determines arrow speed and range.
        </p>
        <p className="mb-5">
          <strong>Batteries</strong>: Chemical potential energy is stored in the battery's chemical composition. When connected to a circuit, this converts to electrical energy, powering devices. Recharging reverses the process.
        </p>
        <p>
          <strong>Pumped Storage</strong>: Some power plants pump water uphill to a reservoir during low-demand periods (storing potential energy). During high demand, water flows back down, converting potential energy back to electrical energy.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── ENERGY CONSERVATION ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Potential Energy and Conservation of Energy
        </h2>
        <p className="mb-5">
          Potential energy is constantly converting to and from other forms of energy. Understanding these conversions is key to applying energy conservation principles in physics problems and engineering.
        </p>
        <p className="mb-5">
          <strong>Potential to Kinetic</strong>: As an object falls, potential energy converts to kinetic energy. The total mechanical energy (potential + kinetic) remains constant in the absence of friction and air resistance.
        </p>
        <p className="mb-5">
          <strong>Kinetic to Potential</strong>: When an object is thrown upward, kinetic energy converts to potential energy. At the peak of its trajectory, all kinetic energy has converted to potential energy (ignoring air resistance).
        </p>
        <p className="mb-5">
          <strong>Pendulums</strong>: A swinging pendulum continuously converts between potential energy (at the extremes of swing) and kinetic energy (at the bottom of the swing). This demonstrates energy conservation in action.
        </p>
        <p className="mb-5">
          <strong>Energy Loss</strong>: In real systems, some energy is lost to friction, air resistance, and heat. This means total mechanical energy decreases over time, converting to thermal energy. Perfect conservation is an idealization.
        </p>
        <p>
          <strong>Efficiency</strong>: Energy conversion processes are never 100% efficient. Some energy is always lost as waste heat. Understanding this helps design more efficient systems and calculate actual performance.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── PRACTICAL APPLICATIONS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Practical Applications
        </h2>
        <p className="mb-5">
          Understanding potential energy has numerous practical applications across energy production, engineering, transportation, and everyday life. These applications demonstrate the importance of this concept.
        </p>
        <p className="mb-5">
          <strong>Energy Storage</strong>: Potential energy is the basis for most energy storage systems. Batteries store chemical potential energy, pumped hydro stores gravitational potential energy, and compressed air systems store pressure potential energy.
        </p>
        <p className="mb-5">
          <strong>Construction</strong>: Engineers calculate potential energy when designing structures like dams, towers, and bridges. Understanding the energy stored in elevated materials is crucial for safety and stability.
        </p>
        <p className="mb-5">
          <strong>Transportation</strong>: Regenerative braking in electric vehicles converts kinetic energy back to potential energy (in batteries) rather than wasting it as heat. This improves efficiency and range.
        </p>
        <p className="mb-5">
          <strong>Sports Equipment</strong>: Design of sports equipment considers potential energy storage. Tennis rackets, golf clubs, and pole vault poles store and release elastic potential energy to enhance performance.
        </p>
        <p>
          <strong>Renewable Energy</strong>: Wind turbines convert the kinetic energy of moving air to rotational kinetic energy, then to electrical energy. Solar panels convert light energy (a form of potential energy) to electrical energy.
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
              q: "What is the difference between potential and kinetic energy?",
              a: "Potential energy is stored energy based on position or configuration. Kinetic energy is energy of motion. Objects constantly convert between these forms. A ball at the top of a hill has potential energy that converts to kinetic energy as it rolls down."
            },
            {
              q: "Can potential energy be negative?",
              a: "Yes, potential energy can be negative depending on the chosen reference point. What matters is the change in potential energy between positions, not the absolute value. Negative potential energy simply means the object is below the reference level."
            },
            {
              q: "Why is gravitational acceleration constant in the formula?",
              a: "For everyday heights (much smaller than Earth's radius), gravitational acceleration is approximately constant. The simple PE = mgh formula works well for these situations. For very large heights, more complex formulas accounting for gravity's variation are needed."
            },
            {
              q: "What is elastic potential energy?",
              a: "Elastic potential energy is energy stored in elastic materials when deformed. Calculated as PE = ½kx², where k is the spring constant (stiffness) and x is the displacement from equilibrium. Examples include stretched springs and compressed rubber bands."
            },
            {
              q: "How does potential energy relate to work?",
              a: "Work done against a conservative force (like gravity) stores potential energy. Work done by the force releases stored potential energy. The change in potential energy equals the negative of the work done by the conservative force."
            },
            {
              q: "What is zero potential energy?",
              a: "Zero potential energy is an arbitrary reference point chosen for convenience. Common choices include ground level for gravitational potential energy or the natural length of a spring for elastic potential energy. Only differences in potential energy are physically meaningful."
            },
            {
              q: "How is potential energy used in energy storage?",
              a: "Potential energy is the basis for most energy storage. Batteries store chemical potential energy, pumped hydro stores gravitational potential energy, and compressed air systems store pressure potential energy. These stored energies can be released when needed."
            },
            {
              q: "What is the relationship between force and potential energy?",
              a: "Force is the negative gradient of potential energy. For one-dimensional motion, F = -dPE/dx. This means objects naturally move toward lower potential energy states, which is why objects fall toward Earth and springs return to their natural length."
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
