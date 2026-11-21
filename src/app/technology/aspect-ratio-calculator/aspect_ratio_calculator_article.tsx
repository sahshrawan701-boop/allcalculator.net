import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function AspectRatioCalculatorArticle() {
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
          <span className="dropcap">A</span>spect ratio is the proportional relationship between the width and height of an image or screen. It's expressed as two numbers separated by a colon (e.g., 16:9). Understanding aspect ratios is crucial for photographers, videographers, designers, and anyone working with visual media.
        </p>
        <p className="mb-5">
          An Aspect Ratio Calculator helps you calculate dimensions, resize images while maintaining proportions, and determine the appropriate aspect ratio for different displays and media formats. This tool is essential for ensuring your content displays correctly across various devices and platforms.
        </p>
        <p>
          Different aspect ratios serve different purposes. Widescreen formats like 16:9 are standard for modern displays, while 4:3 was common in older TVs. Square formats like 1:1 are popular on social media. Choosing the right aspect ratio ensures your content looks professional and fits its intended display.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── COMMON ASPECT RATIOS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Common Aspect Ratios and Their Uses
        </h2>
        <p className="mb-5">
          Various aspect ratios are used for different purposes, from traditional photography to modern video production. Understanding these standard ratios helps you choose the right format for your project.
        </p>
        <p className="mb-5">
          <strong>16:9</strong>: The standard widescreen format for HDTV, most computer monitors, and online video platforms like YouTube. Provides a cinematic feel and is ideal for modern displays.
        </p>
        <p className="mb-5">
          <strong>4:3</strong>: The traditional TV format used by standard definition TVs and older computer monitors. Still used for some photography and retro-style content.
        </p>
        <p className="mb-5">
          <strong>1:1</strong>: Square format popular on social media platforms like Instagram. Creates balanced, symmetrical compositions and works well for profile pictures and certain types of content.
        </p>
        <p className="mb-5">
          <strong>21:9</strong>: Ultra-widescreen format used in cinematic filmmaking and some gaming monitors. Provides an immersive, wide field of view.
        </p>
        <p>
          <strong>3:2</strong>: Traditional 35mm film format, still used in many digital cameras. Provides a natural balance between width and height for photography.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── CALCULATING DIMENSIONS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Calculating Dimensions from Aspect Ratio
        </h2>
        <p className="mb-5">
          When you know the aspect ratio and one dimension, you can calculate the other dimension to maintain the correct proportions. This is essential for resizing images without distortion.
        </p>
        <p className="mb-5">
          <strong>The Formula</strong>: If the aspect ratio is W:H, and you know the width, the height = (H/W) × width. Conversely, if you know the height, the width = (W/H) × height.
        </p>
        <p className="mb-5">
          <strong>Example with 16:9</strong>: If you want a width of 1920 pixels, the height = (9/16) × 1920 = 1080 pixels. This is why 1920×1080 is a standard HD resolution.
        </p>
        <p className="mb-5">
          <strong>Example with 4:3</strong>: If you want a height of 600 pixels, the width = (4/3) × 600 = 800 pixels. This gives you an 800×600 image with the correct 4:3 proportions.
        </p>
        <p>
          <strong>Maintaining Proportions</strong>: Always calculate both dimensions from the aspect ratio when resizing. Changing only one dimension without adjusting the other causes distortion and stretching.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── RESIZING IMAGES ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Resizing Images While Maintaining Aspect Ratio
        </h2>
        <p className="mb-5">
          Resizing images while preserving aspect ratio is crucial for maintaining image quality and preventing distortion. Most image editing software and design tools have options to lock aspect ratio during resizing.
        </p>
        <p className="mb-5">
          <strong>Lock Aspect Ratio</strong>: Enable the "lock aspect ratio" or "constrain proportions" option in your editing software. This automatically adjusts both dimensions when you change one.
        </p>
        <p className="mb-5">
          <strong>Cropping vs. Resizing</strong>: Resizing changes dimensions while maintaining aspect ratio. Cropping changes aspect ratio by removing parts of the image. Choose based on your needs.
        </p>
        <p className="mb-5">
          <strong>Upscaling</strong>: Increasing image size can reduce quality. Use high-quality upscaling algorithms and avoid extreme upscales. Start with the highest resolution possible.
        </p>
        <p className="mb-5">
          <strong>Downscaling</strong>: Reducing image size generally maintains quality. Use appropriate compression settings for web use to balance quality and file size.
        </p>
        <p>
          <strong>Batch Processing</strong>: When resizing multiple images, use batch processing tools to maintain consistent aspect ratios across all images. This ensures uniform presentation.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── VIDEO ASPECT RATIOS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Video Aspect Ratios
        </h2>
        <p className="mb-5">
          Video content uses specific aspect ratios depending on the platform and intended viewing experience. Choosing the right ratio ensures your video displays correctly and engages your audience effectively.
        </p>
        <p className="mb-5">
          <strong>YouTube</strong>: Standard aspect ratio is 16:9. Vertical videos (9:16) are supported but may have black bars on desktop. Square videos (1:1) work for certain content types.
        </p>
        <p className="mb-5">
          <strong>Instagram</strong>: Feed posts support 1:1 (square), 4:5 (portrait), and 16:9 (landscape). Stories and Reels use 9:16 (vertical). Choose based on your content and audience.
        </p>
        <p className="mb-5">
          <strong>TikTok</strong>: Exclusively uses 9:16 vertical format. Content must be optimized for full-screen mobile viewing. Horizontal content is not recommended.
        </p>
        <p className="mb-5">
          <strong>Twitter/X</strong>: Supports various ratios including 16:9, 1:1, and 2:1. Landscape videos (16:9) generally perform better for most content types.
        </p>
        <p>
          <strong>Cinematic</strong>: Films often use wider ratios like 2.39:1 (anamorphic widescreen) for a cinematic look. This creates letterboxing on standard 16:9 displays.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── PHOTOGRAPHY ASPECT RATIOS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Photography Aspect Ratios
        </h2>
        <p className="mb-5">
          Photographers choose aspect ratios based on composition, subject, and intended use. Different ratios create different visual effects and suit various types of photography.
        </p>
        <p className="mb-5">
          <strong>3:2</strong>: The classic 35mm film format, still used by many full-frame cameras. Provides a natural, balanced composition suitable for most subjects.
        </p>
        <p className="mb-5">
          <strong>4:3</strong>: Used by many micro four-thirds cameras and some smartphones. Slightly taller than 3:2, works well for portraits and vertical compositions.
        </p>
        <p className="mb-5">
          <strong>16:9</strong>: Native to many smartphones and video cameras. Ideal for landscape photography and content intended for widescreen displays.
        </p>
        <p className="mb-5">
          <strong>1:1</strong>: Square format popular in medium format photography and social media. Creates symmetrical compositions and works well for centered subjects.
        </p>
        <p>
          <strong>Panoramic</strong>: Ultra-wide ratios like 2:1 or wider used for landscape and architectural photography. Captures expansive scenes and dramatic perspectives.
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
              q: "What is the most common aspect ratio?",
              a: "16:9 is the most common aspect ratio for modern displays, HDTV, and online video. It's the standard for most computer monitors, televisions, and video platforms."
            },
            {
              q: "How do I calculate aspect ratio from dimensions?",
              a: "Divide the width by the height and simplify to the lowest whole numbers. For example, 1920×1080 simplifies to 16:9 (1920/1080 = 1.78, which equals 16/9)."
            },
            {
              q: "What happens if I change aspect ratio?",
              a: "Changing aspect ratio either crops parts of the image or adds padding (black bars). This can affect composition and may remove important elements from the frame."
            },
            {
              q: "Why do videos have black bars?",
              a: "Black bars (letterboxing or pillarboxing) appear when the video's aspect ratio doesn't match the display's aspect ratio. They maintain the original proportions without distortion."
            },
            {
              q: "What aspect ratio should I use for Instagram?",
              a: "Instagram feed posts support 1:1 (square), 4:5 (portrait), and 16:9 (landscape). Stories and Reels require 9:16 vertical format. Choose based on your content type."
            },
            {
              q: "Can I change aspect ratio without cropping?",
              a: "You can add padding to maintain the original content, but this changes the effective display area. True aspect ratio change requires cropping or stretching (which distorts the image)."
            },
            {
              q: "What is the difference between 4:3 and 16:9?",
              a: "4:3 is taller and more square, used by older TVs and some cameras. 16:9 is wider, used by modern HDTVs and most digital content. 16:9 provides a more cinematic viewing experience."
            },
            {
              q: "How does aspect ratio affect print size?",
              a: "Aspect ratio determines the proportional relationship between width and height at any size. A 4:6 print at 4×6 inches maintains the same ratio as an 8×12 print at double the size."
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
