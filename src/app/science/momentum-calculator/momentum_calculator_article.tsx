import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function MomentumCalculatorArticle() {
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
          <span className="dropcap">M</span>omentum is a fundamental concept in physics that describes the quantity of motion an object possesses. It's the product of an object's mass and velocity, making it a crucial quantity for understanding collisions, forces, and motion. A Momentum Calculator helps you compute momentum based on mass and velocity.
        </p>
        <p className="mb-5">
          This tool is essential for students, engineers, and anyone working with physics problems involving motion and collisions. Understanding momentum helps in analyzing vehicle safety, designing sports equipment, and solving real-world engineering problems.
        </p>
        <p>
          Momentum is a vector quantity, meaning it has both magnitude and direction. This directional nature is crucial for understanding how objects interact during collisions and how forces change motion over time.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── THE FORMULA ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          The Momentum Formula
        </h2>
        <p className="mb-5">
          Momentum is calculated using a simple but powerful formula that relates mass and velocity. This formula is fundamental to understanding motion and interactions between objects.
        </p>
        <p className="mb-5">
          <strong>p = mv</strong>: Where p is momentum in kilogram-meters per second (kg·m/s), m is mass in kilograms, and v is velocity in meters per second. The formula shows that momentum increases linearly with both mass and velocity.
        </p>
        <p className="mb-5">
          <strong>Units</strong>: The standard unit for momentum is kilogram-meter per second (kg·m/s). This unit reflects that momentum is mass times velocity. In some contexts, other units like gram-centimeters per second are used.
        </p>
        <p className="mb-5">
          <strong>Vector Nature</strong>: Since velocity is a vector, momentum is also a vector. The direction of momentum is the same as the direction of velocity. This directional aspect is crucial for collision analysis.
        </p>
        <p>
          <strong>Relation to Force</strong>: Newton's second law can be expressed in terms of momentum: F = dp/dt. Force equals the rate of change of momentum. This formulation is more general than F = ma and applies to systems with changing mass.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── CONSERVATION OF MOMENTUM ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Conservation of Momentum
        </h2>
        <p className="mb-5">
          The law of conservation of momentum states that the total momentum of an isolated system remains constant. This principle is fundamental to understanding collisions and interactions between objects.
        </p>
        <p className="mb-5">
          <strong>Isolated Systems</strong>: In systems with no external forces, total momentum before an interaction equals total momentum after. This applies to collisions, explosions, and other interactions.
        </p>
        <p className="mb-5">
          <strong>Elastic Collisions</strong>: In perfectly elastic collisions, both momentum and kinetic energy are conserved. Objects bounce off each other with no energy loss. Examples include billiard balls and atomic particles.
        </p>
        <p className="mb-5">
          <strong>Inelastic Collisions</strong>: In inelastic collisions, momentum is conserved but kinetic energy is not. Some energy converts to other forms like heat or sound. Objects may stick together or deform.
        </p>
        <p>
          <strong>Perfectly Inelastic</strong>: In perfectly inelastic collisions, objects stick together after collision. Momentum is still conserved, but maximum kinetic energy is lost. This occurs in car crashes and some industrial processes.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── REAL-WORLD EXAMPLES ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Real-World Examples of Momentum
        </h2>
        <p className="mb-5">
          Momentum is everywhere in our daily lives, from sports to transportation. These examples help connect the abstract concept to practical situations we encounter regularly.
        </p>
        <p className="mb-5">
          <strong>Vehicle Collisions</strong>: Car crashes involve large momentum changes. Safety features like airbags and crumple zones extend the time of impact, reducing the force experienced by occupants (since F = dp/dt, longer time means less force).
        </p>
        <p className="mb-5">
          <strong>Sports</strong>: In sports like football and hockey, players use momentum to their advantage. A heavier player moving fast has more momentum and is harder to stop. Coaches use momentum principles for strategy and player selection.
        </p>
        <p className="mb-5">
          <strong>Firearms</strong>: Bullets have small mass but high velocity, giving them significant momentum. The recoil of a gun is due to conservation of momentum - the gun gains momentum opposite to the bullet.
        </p>
        <p className="mb-5">
          <strong>Rocket Propulsion</strong>: Rockets work by expelling gas at high velocity. The momentum of the expelled gas in one direction gives the rocket momentum in the opposite direction, propelling it forward.
        </p>
        <p>
          <strong>Everyday Objects</strong>: Catching a ball requires absorbing its momentum. The force you feel depends on how quickly you stop the ball. Catching with your hands moving backward reduces the force by extending the stopping time.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── IMPULSE AND MOMENTUM ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Impulse and Momentum Change
        </h2>
        <p className="mb-5">
          Impulse is the change in momentum resulting from a force applied over time. Understanding impulse helps explain how forces affect motion and why certain techniques reduce impact forces.
        </p>
        <p className="mb-5">
          <strong>J = FΔt = Δp</strong>: Impulse (J) equals force times time interval, which equals the change in momentum. This relationship shows that the same momentum change can be achieved with large force over short time or small force over long time.
        </p>
        <p className="mb-5">
          <strong>Reducing Impact Force</strong>: By extending the time of impact, you reduce the force for a given momentum change. This is why airbags, padded surfaces, and rolling with falls reduce injury - they increase impact time.
        </p>
        <p className="mb-5">
          <strong>Sports Applications</strong>: In sports like baseball and tennis, players follow through with their swing. This extends the contact time with the ball, increasing impulse and thus the momentum change imparted to the ball.
        </p>
        <p>
          <strong>Vehicle Safety</strong>: Crumple zones in cars extend collision time, reducing the force on occupants. Seatbelts also extend stopping time and distribute force over larger areas, further reducing injury risk.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── ANGULAR MOMENTUM ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Angular Momentum
        </h2>
        <p className="mb-5">
          Angular momentum is the rotational analog of linear momentum. It describes the quantity of rotational motion and is conserved in isolated systems, just like linear momentum.
        </p>
        <p className="mb-5">
          <strong>L = Iω</strong>: Angular momentum (L) equals moment of inertia (I) times angular velocity (ω). Moment of inertia depends on mass distribution around the rotation axis.
        </p>
        <p className="mb-5">
          <strong>Conservation</strong>: Angular momentum is conserved in systems with no external torque. This explains why spinning ice skaters spin faster when they pull their arms in - reducing moment of inertia increases angular velocity.
        </p>
        <p className="mb-5">
          <strong>Applications</strong>: Angular momentum is crucial in understanding gyroscopes, planetary motion, and rotating machinery. It's also important in quantum mechanics, where it's quantized.
        </p>
        <p>
          <strong>Everyday Examples</strong>: Bicycle wheels maintain stability due to angular momentum. Figure skaters control spin speed by changing body position. Satellites use reaction wheels to change orientation without thrusters.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── PRACTICAL APPLICATIONS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Practical Applications
        </h2>
        <p className="mb-5">
          Understanding momentum has numerous practical applications across transportation, sports, engineering, and safety. These applications demonstrate the importance of this concept in everyday life.
        </p>
        <p className="mb-5">
          <strong>Vehicle Design</strong>: Engineers design cars with crumple zones, airbags, and seatbelts to manage momentum changes during collisions. These features extend impact time and distribute forces, improving occupant safety.
        </p>
        <p className="mb-5">
          <strong>Sports Equipment</strong>: Design of sports equipment considers momentum transfer. Tennis rackets, golf clubs, and baseball bats are designed to maximize momentum transfer to the ball while controlling vibration.
        </p>
        <p className="mb-5">
          <strong>Rocketry</strong>: Rockets use momentum conservation for propulsion. By expelling mass at high velocity in one direction, they gain momentum in the opposite direction. This principle enables space travel.
        </p>
        <p className="mb-5">
          <strong>Industrial Processes</strong>: Manufacturing processes involving moving parts must account for momentum. Conveyor belts, robotic arms, and assembly lines use momentum principles for efficient operation.
        </p>
        <p>
          <strong>Particle Physics</strong>: Particle accelerators use momentum conservation to analyze collision products. By measuring momentum before and after collisions, scientists discover new particles and fundamental laws.
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
              q: "What is the difference between momentum and kinetic energy?",
              a: "Momentum (p = mv) is a vector quantity with direction, while kinetic energy (KE = ½mv²) is a scalar. Momentum is conserved in all collisions, while kinetic energy is only conserved in elastic collisions."
            },
            {
              q: "Why is momentum conserved?",
              a: "Momentum conservation follows from Newton's third law - forces between objects are equal and opposite. Since these forces act for equal times, the momentum changes are equal and opposite, keeping total momentum constant."
            },
            {
              q: "Can momentum be negative?",
              a: "Yes, momentum can be negative depending on the chosen coordinate system. Since momentum is a vector, its sign indicates direction. What matters is the total momentum vector, not individual signs."
            },
            {
              q: "What is impulse?",
              a: "Impulse is the change in momentum (J = Δp) and equals force times time (J = FΔt). It describes how forces change momentum over time. Extending impact time reduces force for the same momentum change."
            },
            {
              q: "How does mass affect momentum?",
              a: "Momentum is directly proportional to mass. Doubling mass doubles momentum at constant velocity. This is why heavy vehicles are harder to stop - they have more momentum at the same speed."
            },
            {
              q: "What is angular momentum?",
              a: "Angular momentum is the rotational analog of linear momentum, calculated as L = Iω where I is moment of inertia and ω is angular velocity. It's conserved in systems with no external torque."},
            {
              q: "Why do airbags reduce injury?",
              a: "Airbags extend the stopping time during a collision. Since impulse J = FΔt = Δp, longer time means less force for the same momentum change. Reduced force means less injury to occupants."
            },
            {
              q: "How is momentum used in rocket propulsion?",
              a: "Rockets expel gas at high velocity in one direction. By conservation of momentum, the rocket gains equal momentum in the opposite direction. This thrust propels the rocket forward without needing external atmosphere."
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
