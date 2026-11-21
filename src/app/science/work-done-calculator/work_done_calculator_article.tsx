import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function WorkDoneCalculatorArticle() {
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
          <span className="dropcap">W</span>ork is done when a force causes an object to move in the direction of the force. It's a fundamental concept in physics that describes energy transfer through force and displacement. A Work Done Calculator helps you compute work based on force, distance, and the angle between them.
        </p>
        <p className="mb-5">
          This tool is essential for students, engineers, and anyone working with physics problems involving energy and force. Understanding work helps in analyzing mechanical systems, calculating energy requirements, and solving real-world engineering problems.
        </p>
        <p>
          Work is closely related to energy - work done on an object changes its energy. Positive work increases an object's energy, while negative work decreases it. This relationship is fundamental to understanding energy conservation and transformation.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── THE FORMULA ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          The Work Formula
        </h2>
        <p className="mb-5">
          Work is calculated using a formula that relates force, displacement, and the angle between them. This formula is fundamental to understanding energy transfer in mechanical systems.
        </p>
        <p className="mb-5">
          <strong>W = F × d × cos(θ)</strong>: Where W is work in joules, F is force in newtons, d is displacement in meters, and θ is the angle between force and displacement. When force and displacement are parallel, cos(θ) = 1.
        </p>
        <p className="mb-5">
          <strong>Units</strong>: The standard unit for work is the joule (J), equivalent to one newton-meter (N·m). One joule is the work done by a force of one newton moving an object one meter in the direction of the force.
        </p>
        <p className="mb-5">
          <strong>Scalar Quantity</strong>: Unlike force and displacement, work is a scalar quantity - it has magnitude but no direction. Work can be positive, negative, or zero depending on the angle between force and displacement.
        </p>
        <p>
          <strong>Zero Work</strong>: No work is done if the displacement is zero, the force is zero, or the force is perpendicular to displacement (cos(90°) = 0). This explains why carrying a heavy object horizontally does no work against gravity.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── POSITIVE AND NEGATIVE WORK ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Positive and Negative Work
        </h2>
        <p className="mb-5">
          Work can be positive or negative depending on the direction of force relative to displacement. Understanding this distinction is crucial for analyzing energy transfer in systems.
        </p>
        <p className="mb-5">
          <strong>Positive Work</strong>: When force and displacement are in the same direction (0 degrees to 90 degrees), work is positive. The force adds energy to the object. Examples include pushing a car forward or lifting an object upward.
        </p>
        <p className="mb-5">
          <strong>Negative Work</strong>: When force and displacement are in opposite directions (90 degrees to 180 degrees), work is negative. The force removes energy from the object. Examples include friction, braking forces, and air resistance.
        </p>
        <p className="mb-5">
          <strong>Zero Work</strong>: When force is perpendicular to displacement (theta = 90 degrees), work is zero. The force changes direction but doesn't add or remove energy. Examples include circular motion where centripetal force is perpendicular to velocity.
        </p>
        <p>
          <strong>Energy Implications</strong>: Positive work increases kinetic or potential energy. Negative work decreases kinetic energy (slowing down) or potential energy (lowering). The work-energy theorem directly relates work to energy changes.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── REAL-WORLD EXAMPLES ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Real-World Examples of Work
        </h2>
        <p className="mb-5">
          Work is constantly being done in our daily lives, from simple tasks to complex industrial processes. These examples help connect the abstract concept to practical situations.
        </p>
        <p className="mb-5">
          <strong>Lifting Objects</strong>: When you lift a box, you do positive work against gravity. The work equals the weight (force) times the height lifted. This work is stored as gravitational potential energy.
        </p>
        <p className="mb-5">
          <strong>Pushing a Car</strong>: Pushing a stalled car does positive work, transferring energy from your muscles to the car's kinetic energy. The work depends on the force applied and distance pushed.
        </p>
        <p className="mb-5">
          <strong>Braking</strong>: When brakes are applied, friction does negative work on the vehicle, converting kinetic energy to thermal energy. The work equals the initial kinetic energy when the vehicle stops.
        </p>
        <p className="mb-5">
          <strong>Walking Up Stairs</strong>: Your leg muscles do work against gravity with each step, lifting your body upward. This work increases your gravitational potential energy and is why climbing stairs is physically demanding.
        </p>
        <p>
          <strong>Pulling a Sled</strong>: Pulling a sled at an angle involves both horizontal and vertical force components. Only the horizontal component does work in moving the sled forward, while the vertical component may lift the sled slightly.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── WORK-ENERGY THEOREM ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          The Work-Energy Theorem
        </h2>
        <p className="mb-5">
          The work-energy theorem is a fundamental principle connecting work and kinetic energy. It states that the net work done on an object equals its change in kinetic energy.
        </p>
        <p className="mb-5">
          <strong>W_net = ΔKE</strong>: The net work done by all forces acting on an object equals the change in its kinetic energy (final KE minus initial KE). This theorem is powerful for solving motion problems without analyzing forces directly.
        </p>
        <p className="mb-5">
          <strong>Derivation</strong>: From Newton's second law (F = ma) and kinematic equations, we can derive that work equals change in kinetic energy. This connects force-based and energy-based approaches to mechanics.
        </p>
        <p className="mb-5">
          <strong>Applications</strong>: The work-energy theorem simplifies many problems. Instead of calculating forces and accelerations, you can directly relate work to speed changes. This is especially useful for variable forces.
        </p>
        <p>
          <strong>Conservative Forces</strong>: For conservative forces like gravity, work done is path-independent and equals the negative change in potential energy. This leads to conservation of mechanical energy in the absence of non-conservative forces.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── POWER AND WORK ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Power and Work
        </h2>
        <p className="mb-5">
          Power is the rate at which work is done. While work measures total energy transfer, power measures how quickly that transfer occurs. Understanding both is essential for analyzing performance and efficiency.
        </p>
        <p className="mb-5">
          <strong>P = W/t</strong>: Power equals work divided by time. The standard unit is the watt (W), equivalent to one joule per second. Higher power means work is done more quickly.
        </p>
        <p className="mb-5">
          <strong>Alternative Formula</strong>: Power can also be calculated as P = F × v, where F is force and v is velocity. This is useful when force and velocity are known directly.
        </p>
        <p className="mb-5">
          <strong>Engine Power</strong>: Vehicle engines are rated in horsepower or kilowatts. This indicates how quickly the engine can do work. Higher power allows faster acceleration and higher top speeds.
        </p>
        <p>
          <strong>Efficiency</strong>: No machine is 100% efficient - some input work is always lost to friction, heat, and other inefficiencies. Efficiency equals useful work output divided by total work input, expressed as a percentage.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── PRACTICAL APPLICATIONS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Practical Applications
        </h2>
        <p className="mb-5">
          Understanding work has numerous practical applications across engineering, construction, transportation, and everyday life. These applications demonstrate the importance of this concept.
        </p>
        <p className="mb-5">
          <strong>Construction</strong>: Cranes and elevators do work lifting materials. Engineers calculate required work and power to ensure equipment can handle loads safely and efficiently.
        </p>
        <p className="mb-5">
          <strong>Exercise Science</strong>: Work done during exercise relates to energy expenditure. Treadmills and exercise bikes estimate work and calories burned based on force and distance measurements.
        </p>
        <p className="mb-5">
          <strong>Manufacturing</strong>: Assembly line robots and machines do work moving and processing materials. Calculating work helps optimize energy use and design efficient systems.
        </p>
        <p className="mb-5">
          <strong>Renewable Energy</strong>: Wind turbines do work converting wind kinetic energy to electrical energy. Solar panels do work converting light energy to electrical energy. Understanding work helps optimize these systems.
        </p>
        <p>
          <strong>Transportation</strong>: Vehicle engines do work overcoming friction, air resistance, and gravity. Improving efficiency means doing the same work with less energy input, reducing fuel consumption and emissions.
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
              q: "What is the difference between work and energy?",
              a: "Energy is the capacity to do work, while work is the actual transfer of energy. Work is the process of energy transfer. When work is done on an object, its energy changes by the amount of work done."
            },
            {
              q: "Can work be negative?",
              a: "Yes, work can be negative when force and displacement are in opposite directions. Negative work removes energy from an object, like friction slowing down a moving object or brakes stopping a vehicle."
            },
            {
              q: "Why is no work done when carrying a heavy object horizontally?",
              a: "When carrying horizontally, the force you apply is upward (against gravity), while displacement is horizontal. Since force and displacement are perpendicular (90°), cos(90°) = 0, so no work is done against gravity."
            },
            {
              q: "What is the work-energy theorem?",
              a: "The work-energy theorem states that the net work done on an object equals its change in kinetic energy. This powerful theorem allows solving motion problems by relating work directly to speed changes without analyzing forces."
            },
            {
              q: "How does work relate to power?",
              a: "Power is the rate at which work is done (P = W/t). Work measures total energy transfer, while power measures how quickly that transfer occurs. Higher power means the same work is done in less time."
            },
            {
              q: "What is the unit of work?",
              a: "The standard unit of work is the joule (J), equivalent to one newton-meter (N·m). One joule is the work done by a force of one newton moving an object one meter in the direction of the force."
            },
            {
              q: "How does friction affect work?",
              a: "Friction always does negative work because friction force opposes motion. This negative work converts kinetic energy to thermal energy (heat). Friction reduces the net work done on an object and must be overcome to maintain motion."
            },
            {
              q: "What is conservative work?",
              a: "Work done by conservative forces (like gravity and spring force) is path-independent and can be recovered as potential energy. Work done by non-conservative forces (like friction) is path-dependent and cannot be recovered."
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
