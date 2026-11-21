import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function AccelerationCalculatorArticle() {
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
          <span className="dropcap">A</span>cceleration is the rate at which an object's velocity changes over time. It's a fundamental concept in physics that describes how quickly something speeds up, slows down, or changes direction. An Acceleration Calculator helps you compute acceleration based on velocity changes and time intervals.
        </p>
        <p className="mb-5">
          This tool is essential for students, engineers, and anyone working with motion problems. Understanding acceleration helps in analyzing vehicle performance, designing transportation systems, and solving real-world physics problems.
        </p>
        <p>
          Acceleration can be positive (speeding up), negative (slowing down, also called deceleration), or zero (constant velocity). It's a vector quantity, meaning it has both magnitude and direction, which is crucial for understanding motion in two or three dimensions.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── THE FORMULA ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          The Acceleration Formula
        </h2>
        <p className="mb-5">
          Acceleration is calculated using a straightforward formula that relates the change in velocity to the time taken for that change. This formula is fundamental to kinematics and motion analysis.
        </p>
        <p className="mb-5">
          <strong>a = Δv/Δt</strong>: Where a is acceleration, Δv is the change in velocity (final velocity minus initial velocity), and Δt is the change in time. This formula gives average acceleration over the time interval.
        </p>
        <p className="mb-5">
          <strong>Units</strong>: The standard unit for acceleration is meters per second squared (m/s²). This means the velocity changes by that many meters per second each second. Other units include km/h², ft/s², and g-force (g).
        </p>
        <p className="mb-5">
          <strong>Instantaneous Acceleration</strong>: For continuously changing acceleration, calculus is used. Instantaneous acceleration is the derivative of velocity with respect to time (a = dv/dt).
        </p>
        <p>
          <strong>Direction</strong>: As a vector, acceleration direction matters. Positive acceleration in the direction of motion increases speed. Negative acceleration (opposite to motion) decreases speed.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── TYPES OF ACCELERATION ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Types of Acceleration
        </h2>
        <p className="mb-5">
          Acceleration manifests in different forms depending on how velocity changes. Understanding these types helps in analyzing complex motion scenarios and designing systems.
        </p>
        <p className="mb-5">
          <strong>Linear Acceleration</strong>: Change in speed along a straight line. This is the most common type, calculated using the standard a = Δv/Δt formula. Examples include a car accelerating on a highway or a falling object.
        </p>
        <p className="mb-5">
          <strong>Angular Acceleration</strong>: Change in rotational speed. Calculated as α = Δω/Δt, where ω is angular velocity. Important for rotating machinery, wheels, and celestial bodies.
        </p>
        <p className="mb-5">
          <strong>Centripetal Acceleration</strong>: Acceleration toward the center of circular motion. Calculated as a = v²/r, where v is velocity and r is radius. Keeps objects moving in circles (e.g., cars turning, satellites orbiting).
        </p>
        <p>
          <strong>Tangential Acceleration</strong>: Component of acceleration tangent to the path of motion. Changes the speed of an object moving along a curved path. Combined with centripetal acceleration for general curved motion.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── REAL-WORLD EXAMPLES ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Real-World Examples of Acceleration
        </h2>
        <p className="mb-5">
          Acceleration is everywhere in our daily lives, from the moment we wake up to when we go to sleep. These examples help connect the abstract concept to practical situations.
        </p>
        <p className="mb-5">
          <strong>Vehicles</strong>: Cars accelerate from 0 to 60 mph in several seconds. Typical acceleration is 3-5 m/s² for normal cars, up to 10+ m/s² for sports cars. Braking involves negative acceleration of 5-8 m/s².
        </p>
        <p className="mb-5">
          <strong>Free Fall</strong>: Objects falling under gravity accelerate at approximately 9.8 m/s² (on Earth). This constant acceleration is called gravitational acceleration (g).
        </p>
        <p className="mb-5">
          <strong>Elevators</strong>: Elevators accelerate upward when starting and downward when stopping. Typical acceleration is 1-2 m/s², designed for passenger comfort. Higher acceleration causes discomfort.
        </p>
        <p className="mb-5">
          <strong>Athletics</strong>: Sprinters accelerate from rest, reaching peak speeds in seconds. Elite sprinters can achieve acceleration over 10 m/s² during the initial phase of a race.
        </p>
        <p>
          <strong>Amusement Rides</strong>: Roller coasters and other rides use controlled acceleration for thrills. Some rides subject passengers to 3-4 g's (3-4 times gravitational acceleration).
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── GRAVITY AND FREE FALL ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Gravity and Free Fall Acceleration
        </h2>
        <p className="mb-5">
          Gravitational acceleration is a special case of acceleration that affects all objects near Earth's surface. Understanding this constant is essential for many physics problems and engineering applications.
        </p>
        <p className="mb-5">
          <strong>Standard Gravity</strong>: On Earth's surface, gravitational acceleration is approximately 9.8 m/s² (32 ft/s²). This value varies slightly with altitude and location but is treated as constant for most calculations.
        </p>
        <p className="mb-5">
          <strong>Free Fall</strong>: Objects in free fall (only gravity acting on them) accelerate downward at g. Air resistance affects actual falling objects, but in vacuum, all objects fall at the same rate regardless of mass.
        </p>
        <p className="mb-5">
          <strong>Terminal Velocity</strong>: With air resistance, falling objects reach a maximum speed where air resistance equals gravitational force. At this point, acceleration becomes zero and velocity is constant.
        </p>
        <p className="mb-5">
          <strong>Other Celestial Bodies</strong>: Gravitational acceleration varies on different planets. Moon: ~1.6 m/s², Mars: ~3.7 m/s², Jupiter: ~24.8 m/s². This affects how objects fall and how much force is needed to lift objects.
        </p>
        <p>
          <strong>g-Force</strong>: Acceleration is often expressed in multiples of g. 1 g = 9.8 m/s². Humans can tolerate sustained acceleration of about 3-4 g's, with higher g's causing discomfort or injury.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── PRACTICAL APPLICATIONS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Practical Applications
        </h2>
        <p className="mb-5">
          Understanding acceleration has numerous practical applications across transportation, engineering, sports, and safety. These applications demonstrate the importance of this concept in everyday life.
        </p>
        <p className="mb-5">
          <strong>Vehicle Design</strong>: Engineers design engines, transmissions, and braking systems to achieve desired acceleration characteristics. Performance cars prioritize high acceleration, while trucks prioritize control and stability.
        </p>
        <p className="mb-5">
          <strong>Traffic Safety</strong>: Understanding stopping distances based on deceleration helps design roads, set speed limits, and develop safety systems. Anti-lock brakes optimize deceleration while maintaining steering control.
        </p>
        <p className="mb-5">
          <strong>Rocketry</strong>: Rockets must achieve sufficient acceleration to overcome gravity and reach orbit. This requires enormous thrust and careful fuel management. Acceleration increases as fuel is consumed and mass decreases.
        </p>
        <p className="mb-5">
          <strong>Robotics</strong>: Robots and automated systems use controlled acceleration for smooth, precise movement. Too much acceleration causes vibration and inaccuracy; too little makes systems sluggish.
        </p>
        <p>
          <strong>Sports Training</strong>: Athletes train to improve acceleration in their respective sports. Sprinters focus on explosive acceleration, while endurance athletes focus on maintaining speed with minimal deceleration.
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
              q: "What is the difference between speed and acceleration?",
              a: "Speed is how fast something is moving (distance per time). Acceleration is how quickly speed is changing (speed change per time). An object can have high speed but zero acceleration if moving at constant velocity."
            },
            {
              q: "Can acceleration be negative?",
              a: "Yes, negative acceleration (deceleration) means slowing down. If acceleration is opposite to the direction of motion, the object slows down. Negative acceleration in the direction of motion means speeding up in the negative direction."
            },
            {
              q: "Why is gravitational acceleration constant?",
              a: "Gravitational acceleration is approximately constant near Earth's surface because the distance to Earth's center changes very little compared to Earth's radius. It only varies significantly at very high altitudes."
            },
            {
              q: "What is centripetal acceleration?",
              a: "Centripetal acceleration is the acceleration toward the center of circular motion that keeps an object moving in a circle. It's calculated as a = v²/r and is always perpendicular to the velocity."
            },
            {
              q: "How does mass affect acceleration?",
              a: "According to Newton's second law (F = ma), for a given force, acceleration is inversely proportional to mass. More massive objects require more force to achieve the same acceleration."
            },
            {
              q: "What is the acceleration of a falling object?",
              a: "In vacuum, all falling objects accelerate at 9.8 m/s² (gravitational acceleration). With air resistance, acceleration decreases as speed increases until terminal velocity is reached."
            },
            {
              q: "How is acceleration measured?",
              a: "Acceleration is measured using accelerometers (devices that measure proper acceleration), by calculating velocity changes over time, or through motion analysis using sensors and cameras."
            },
            {
              q: "What is jerk in physics?",
              a: "Jerk is the rate of change of acceleration (da/dt). While acceleration describes how velocity changes, jerk describes how smoothly acceleration changes. High jerk causes discomfort in vehicles and elevators."
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
