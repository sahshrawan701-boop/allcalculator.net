import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function KineticEnergyCalculatorArticle() {
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
          <span className="dropcap">K</span>inetic energy is the energy possessed by an object due to its motion. It's one of the most fundamental concepts in physics, explaining everything from the movement of particles to the operation of vehicles and machinery. A Kinetic Energy Calculator helps you compute this energy based on mass and velocity.
        </p>
        <p className="mb-5">
          This tool is essential for students, engineers, and anyone working with physics problems. Understanding kinetic energy helps in analyzing motion, designing efficient systems, and solving real-world problems involving moving objects.
        </p>
        <p>
          The kinetic energy of an object depends on both its mass and its speed. Heavier objects and faster-moving objects have more kinetic energy. This energy can be converted into other forms, such as potential energy or thermal energy, through various processes.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── THE FORMULA ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          The Kinetic Energy Formula
        </h2>
        <p className="mb-5">
          The kinetic energy (KE) of an object is calculated using a simple but powerful formula that relates mass and velocity. This formula is fundamental to classical mechanics.
        </p>
        <p className="mb-5">
          <strong>KE = ½mv²</strong>: Where KE is kinetic energy in joules, m is mass in kilograms, and v is velocity in meters per second. The squared relationship with velocity means that doubling speed quadruples kinetic energy.
        </p>
        <p className="mb-5">
          <strong>Units</strong>: The standard unit for kinetic energy is the joule (J). One joule equals one kilogram-meter squared per second squared (kg·m²/s²). In everyday terms, one joule is approximately the energy required to lift a small apple one meter.
        </p>
        <p className="mb-5">
          <strong>Mass Units</strong>: While kilograms are the standard unit, the formula can be adapted for other mass units. Ensure consistent units throughout your calculation to avoid errors.
        </p>
        <p>
          <strong>Velocity Units</strong>: Velocity must be in meters per second for the standard formula. Convert from other units like kilometers per hour or miles per hour before applying the formula.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── TYPES OF KINETIC ENERGY ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Types of Kinetic Energy
        </h2>
        <p className="mb-5">
          Kinetic energy manifests in various forms depending on the type of motion. Understanding these different types helps in analyzing complex systems and energy transformations.
        </p>
        <p className="mb-5">
          <strong>Translational Kinetic Energy</strong>: Energy due to linear motion from one point to another. This is the most common form, calculated using the standard KE = ½mv² formula. Examples include a car moving down a road or a ball rolling across a floor.
        </p>
        <p className="mb-5">
          <strong>Rotational Kinetic Energy</strong>: Energy due to rotational motion around an axis. Calculated as KE = ½Iω², where I is the moment of inertia and ω is angular velocity. Examples include spinning wheels, rotating turbines, and planets rotating on their axes.
        </p>
        <p className="mb-5">
          <strong>Vibrational Kinetic Energy</strong>: Energy due to vibrational motion of atoms and molecules. Important in thermodynamics and materials science. Examples include vibrating molecules in a gas or atoms in a solid lattice.
        </p>
        <p>
          <strong>Relativistic Kinetic Energy</strong>: At speeds approaching the speed of light, classical mechanics breaks down, and relativistic formulas must be used. This becomes significant in particle physics and astrophysics.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── REAL-WORLD EXAMPLES ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Real-World Examples of Kinetic Energy
        </h2>
        <p className="mb-5">
          Kinetic energy is everywhere in our daily lives. Understanding these examples helps connect the abstract formula to practical situations and applications.
        </p>
        <p className="mb-5">
          <strong>Moving Vehicles</strong>: Cars, trains, and airplanes possess significant kinetic energy due to their mass and speed. This energy must be dissipated safely during braking through friction and heat conversion.
        </p>
        <p className="mb-5">
          <strong>Falling Objects</strong>: As objects fall, potential energy converts to kinetic energy. The speed increases as they fall, and kinetic energy increases quadratically with speed. This principle governs everything from raindrops to skydivers.
        </p>
        <p className="mb-5">
          <strong>Projectiles</strong>: Bullets, arrows, and thrown balls are examples of projectiles with kinetic energy. Their destructive or useful potential depends on this energy, which is why bullet design focuses on maximizing kinetic energy transfer.
        </p>
        <p className="mb-5">
          <strong>Wind and Water</strong>: Moving air and water currents possess kinetic energy that can be harnessed for power generation. Wind turbines and hydroelectric dams convert this kinetic energy into electrical energy.
        </p>
        <p>
          <strong>Thermal Energy</strong>: At the molecular level, temperature is a measure of the average kinetic energy of particles. Hotter substances have particles moving faster with higher kinetic energy.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── ENERGY CONSERVATION ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Kinetic Energy and Conservation of Energy
        </h2>
        <p className="mb-5">
          Kinetic energy is constantly being converted to and from other forms of energy. Understanding these conversions is key to applying energy conservation principles in physics problems.
        </p>
        <p className="mb-5">
          <strong>Potential to Kinetic</strong>: As an object falls, gravitational potential energy converts to kinetic energy. The total mechanical energy (potential + kinetic) remains constant in the absence of friction and air resistance.
        </p>
        <p className="mb-5">
          <strong>Kinetic to Potential</strong>: When an object is thrown upward, kinetic energy converts to potential energy. At the peak of its trajectory, all kinetic energy has converted to potential energy (ignoring air resistance).
        </p>
        <p className="mb-5">
          <strong>Kinetic to Thermal</strong>: Friction converts kinetic energy into thermal energy (heat). This is why brakes get hot when stopping a car and why meteors burn up in the atmosphere due to air friction.
        </p>
        <p className="mb-5">
          <strong>Kinetic to Electrical</strong>: Generators convert kinetic energy from rotating turbines into electrical energy. This is the principle behind hydroelectric, wind, and fossil fuel power plants.
        </p>
        <p>
          <strong>Energy Loss</strong>: In real-world situations, some energy is always lost to friction, air resistance, and other dissipative forces. This means the total mechanical energy decreases over time, converting to thermal energy.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── PRACTICAL APPLICATIONS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Practical Applications
        </h2>
        <p className="mb-5">
          Understanding kinetic energy has numerous practical applications across engineering, transportation, safety, and energy production. These applications demonstrate the importance of this fundamental concept.
        </p>
        <p className="mb-5">
          <strong>Vehicle Safety</strong>: Car designers use kinetic energy calculations to design crumple zones, airbags, and seatbelts that safely dissipate kinetic energy during collisions. This reduces injury risk to occupants.
        </p>
        <p className="mb-5">
          <strong>Transportation Efficiency</strong>: Reducing vehicle mass and optimizing speed reduces kinetic energy requirements, improving fuel efficiency. This is why lightweight materials and aerodynamic designs are important.
        </p>
        <p className="mb-5">
          <strong>Power Generation</strong>: Hydroelectric dams, wind turbines, and tidal power systems harness kinetic energy from moving water and air to generate electricity. This provides renewable energy sources.
        </p>
        <p className="mb-5">
          <strong>Sports Equipment</strong>: Design of sports equipment considers the kinetic energy of balls and players. Tennis rackets, golf clubs, and baseball bats are designed to maximize kinetic energy transfer to the ball.
        </p>
        <p>
          <strong>Space Exploration</strong>: Rockets must overcome Earth's gravity by converting chemical energy to kinetic energy. The enormous kinetic energy required for orbital velocity is a fundamental consideration in space missions.
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
              q: "What is the difference between kinetic and potential energy?",
              a: "Kinetic energy is energy of motion, while potential energy is stored energy based on position or configuration. An object at the top of a hill has potential energy that converts to kinetic energy as it rolls down."
            },
            {
              q: "Why is velocity squared in the kinetic energy formula?",
              a: "Velocity is squared because kinetic energy depends on the work done to accelerate an object. Work equals force times distance, and force depends on acceleration, which relates to velocity squared."
            },
            {
              q: "Can kinetic energy be negative?",
              a: "No, kinetic energy is always positive or zero. Since it depends on mass (always positive) and velocity squared (always positive), kinetic energy can never be negative. Zero kinetic energy means the object is at rest."
            },
            {
              q: "How does mass affect kinetic energy?",
              a: "Kinetic energy is directly proportional to mass. Doubling the mass doubles the kinetic energy, assuming constant velocity. Heavier objects require more energy to accelerate to a given speed."
            },
            {
              q: "What happens to kinetic energy when an object stops?",
              a: "When an object stops, its kinetic energy converts to other forms. In a car, it converts to heat through brakes. In a collision, it can cause deformation. Energy is conserved, not destroyed."
            },
            {
              q: "How is kinetic energy related to momentum?",
              a: "Kinetic energy (KE) and momentum (p) are related by KE = p²/2m. While momentum depends on velocity linearly, kinetic energy depends on velocity squared. Both are conserved in isolated systems."
            },
            {
              q: "Why do lighter cars accelerate faster?",
              a: "Lighter cars have less mass, requiring less force to achieve the same acceleration. Since kinetic energy depends on mass, less energy is needed to reach a given speed, allowing faster acceleration with the same power."
            },
            {
              q: "What is rotational kinetic energy?",
              a: "Rotational kinetic energy is the energy of a rotating object. Calculated as KE = ½Iω², where I is the moment of inertia (resistance to rotational acceleration) and ω is angular velocity."
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
