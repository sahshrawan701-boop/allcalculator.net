import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ColorPickerArticle() {
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
          <span className="dropcap">C</span>olor is a fundamental aspect of design, branding, and visual communication. A Color Picker tool helps designers, developers, and artists select, convert, and work with colors across different color formats. Understanding color theory and color systems is essential for creating visually appealing and effective designs.
        </p>
        <p className="mb-5">
          This Color Picker provides functionality to select colors visually, convert between different color formats (HEX, RGB, HSL), and explore color relationships. It's useful for web design, graphic design, UI/UX work, and any project requiring precise color selection.
        </p>
        <p>
          Colors can be represented in various formats depending on the use case. Web design typically uses HEX codes, while print design may use CMYK. Understanding these formats and how to convert between them is crucial for consistent color reproduction across different media.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── COLOR FORMATS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Understanding Color Formats
        </h2>
        <p className="mb-5">
          Different color formats serve different purposes and are used in various contexts. Understanding these formats helps you work effectively with colors across different platforms and applications.
        </p>
        <p className="mb-5">
          <strong>HEX (Hexadecimal)</strong>: A six-digit code representing RGB values in hexadecimal format. Commonly used in web design (e.g., #FF5733). Each pair of digits represents red, green, and blue values from 00 to FF.
        </p>
        <p className="mb-5">
          <strong>RGB (Red, Green, Blue)</strong>: Represents colors as combinations of red, green, and blue light values. Each component ranges from 0-255. Used in digital displays and web design (e.g., rgb(255, 87, 51)).
        </p>
        <p className="mb-5">
          <strong>HSL (Hue, Saturation, Lightness)</strong>: Describes colors in terms of hue (0-360 degrees), saturation (0-100%), and lightness (0-100%). More intuitive for human color perception and useful for color adjustments.
        </p>
        <p>
          <strong>CMYK (Cyan, Magenta, Yellow, Key)</strong>: Used in print design. Represents colors as combinations of cyan, magenta, yellow, and black inks. Each component ranges from 0-100%. Essential for printing but not used in digital displays.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── COLOR THEORY ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Color Theory Basics
        </h2>
        <p className="mb-5">
          Color theory provides guidelines for color combinations and relationships. Understanding these principles helps create harmonious color schemes and effective visual communication.
        </p>
        <p className="mb-5">
          <strong>Primary Colors</strong>: Red, yellow, and blue (in traditional color theory) or red, green, and blue (in additive color theory for light). These cannot be created by mixing other colors.
        </p>
        <p className="mb-5">
          <strong>Secondary Colors</strong>: Created by mixing two primary colors. In traditional theory: orange (red + yellow), green (yellow + blue), and purple (blue + red).
        </p>
        <p className="mb-5">
          <strong>Tertiary Colors</strong>: Created by mixing a primary color with a secondary color. These include red-orange, yellow-orange, yellow-green, blue-green, blue-purple, and red-purple.
        </p>
        <p className="mb-5">
          <strong>Complementary Colors</strong>: Colors opposite each other on the color wheel. These create high contrast and vibrant combinations (e.g., red and green, blue and orange).
        </p>
        <p>
          <strong>Analogous Colors</strong>: Colors adjacent to each other on the color wheel. These create harmonious, low-contrast combinations (e.g., blue, blue-green, green).
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── COLOR HARMONIES ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Color Harmonies and Schemes
        </h2>
        <p className="mb-5">
          Color harmonies are combinations of colors that are aesthetically pleasing. Using established color schemes ensures your designs look professional and cohesive.
        </p>
        <p className="mb-5">
          <strong>Monochromatic</strong>: Uses variations of a single hue. Creates a unified, cohesive look. Includes the base color plus tints (lighter) and shades (darker).
        </p>
        <p className="mb-5">
          <strong>Analogous</strong>: Uses colors adjacent to each other on the color wheel. Creates a harmonious, natural feel. Often found in nature and creates serene designs.
        </p>
        <p className="mb-5">
          <strong>Complementary</strong>: Uses colors opposite each other on the color wheel. Creates high contrast and dynamic designs. Good for highlighting and call-to-action elements.
        </p>
        <p className="mb-5">
          <strong>Split Complementary</strong>: Uses a base color plus the two colors adjacent to its complement. Provides high contrast while being less tense than pure complementary schemes.
        </p>
        <p className="mb-5">
          <strong>Triadic</strong>: Uses three colors evenly spaced on the color wheel. Creates vibrant, balanced designs. Good for creating visual interest while maintaining harmony.
        </p>
        <p>
          <strong>Tetradic</strong>: Uses two complementary color pairs. Creates rich, complex schemes. Requires careful balance to avoid overwhelming the design.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── COLOR PSYCHOLOGY ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Color Psychology in Design
        </h2>
        <p className="mb-5">
          Colors evoke emotional responses and convey meaning. Understanding color psychology helps you choose colors that support your design goals and communicate the right message.
        </p>
        <p className="mb-5">
          <strong>Red</strong>: Associated with passion, energy, urgency, and danger. Used for call-to-action buttons, warnings, and creating excitement. Can increase heart rate and create urgency.
        </p>
        <p className="mb-5">
          <strong>Blue</strong>: Conveys trust, professionalism, calm, and reliability. Commonly used by technology companies, financial institutions, and healthcare providers. Creates a sense of security.
        </p>
        <p className="mb-5">
          <strong>Green</strong>: Represents nature, growth, health, and money. Used for environmental causes, health products, and financial applications. Associated with balance and harmony.
        </p>
        <p className="mb-5">
          <strong>Yellow</strong>: Evokes optimism, happiness, and attention. Used for warnings, highlights, and creating cheerful designs. Can be difficult to read on white backgrounds.
        </p>
        <p className="mb-5">
          <strong>Purple</strong>: Associated with luxury, creativity, and wisdom. Used by premium brands, beauty products, and creative industries. Conveys sophistication and mystery.
        </p>
        <p>
          <strong>Orange</strong>: Combines energy of red with happiness of yellow. Used for call-to-action, food, and playful designs. Creates enthusiasm and excitement.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── COLOR ACCESSIBILITY ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Color Accessibility Guidelines
        </h2>
        <p className="mb-5">
          Ensuring color accessibility makes your designs usable for everyone, including people with color vision deficiencies. Following accessibility guidelines is essential for inclusive design.
        </p>
        <p className="mb-5">
          <strong>Color Contrast</strong>: Ensure sufficient contrast between text and background. WCAG guidelines recommend a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.
        </p>
        <p className="mb-5">
          <strong>Don't Rely on Color Alone</strong>: Use additional indicators beyond color to convey information. Icons, patterns, or text labels ensure meaning is conveyed to colorblind users.
        </p>
        <p className="mb-5">
          <strong>Test for Color Blindness</strong>: Simulate how your design appears to people with different types of color vision deficiency. Tools can help identify accessibility issues.
        </p>
        <p className="mb-5">
          <strong>Use Descriptive Labels</strong>: When using color-coded information, provide text descriptions or legends. This ensures information is accessible to screen readers and colorblind users.
        </p>
        <p>
          <strong>Consider Dark Mode</strong>: Ensure your color scheme works in both light and dark modes. Colors that work well on light backgrounds may not be visible on dark backgrounds.
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
              q: "What is the difference between HEX and RGB?",
              a: "HEX is a hexadecimal representation of RGB values, commonly used in web design. RGB uses decimal values (0-255) for each color channel. They represent the same colors but in different formats."
            },
            {
              q: "How do I choose a color scheme?",
              a: "Start with your brand or project goals. Use color theory principles like complementary or analogous schemes. Consider your audience and the emotions you want to evoke. Test combinations for accessibility."
            },
            {
              q: "What is color contrast ratio?",
              a: "Color contrast ratio measures the difference in luminance between two colors. Higher ratios indicate better contrast and readability. WCAG guidelines specify minimum ratios for accessibility compliance."
            },
            {
              q: "How does HSL differ from RGB?",
              a: "HSL describes colors in terms of hue (color type), saturation (intensity), and lightness (brightness). RGB describes colors as combinations of red, green, and blue light. HSL is often more intuitive for color adjustments."
            },
            {
              q: "What are tints and shades?",
              a: "Tints are created by adding white to a color, making it lighter. Shades are created by adding black to a color, making it darker. Tints and shades create monochromatic color schemes."
            },
            {
              q: "Why is color accessibility important?",
              a: "Color accessibility ensures your designs are usable by people with color vision deficiencies and other visual impairments. It's essential for inclusive design and often required by accessibility laws and guidelines."
            },
            {
              q: "How do I convert between color formats?",
              a: "Use color picker tools or conversion formulas. For example, to convert RGB to HEX, convert each RGB value to two-digit hexadecimal numbers and concatenate them. Many tools automate this conversion."
            },
            {
              q: "What is the 60-30-10 rule in color design?",
              a: "The 60-30-10 rule suggests using a dominant color for 60% of your design, a secondary color for 30%, and an accent color for 10%. This creates balanced, harmonious color schemes."
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
