import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PasswordStrengthCalculatorArticle() {
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
          <span className="dropcap">P</span>assword strength is a critical aspect of online security. Weak passwords are vulnerable to brute-force attacks, dictionary attacks, and social engineering. A Password Strength Calculator evaluates your password based on various criteria including length, character variety, and complexity patterns.
        </p>
        <p className="mb-5">
          This tool provides real-time feedback on password security, helping you identify weak passwords and create stronger credentials. Understanding password strength principles is essential for protecting personal and business accounts from unauthorized access.
        </p>
        <p>
          Strong passwords typically include a mix of uppercase and lowercase letters, numbers, and special characters. They should be at least 12 characters long and avoid common words, predictable patterns, or personal information.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── HOW IT WORKS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          How Password Strength is Calculated
        </h2>
        <p className="mb-5">
          Password strength calculators use various algorithms to estimate how resistant a password is to cracking attempts. The evaluation typically considers multiple factors that contribute to overall security.
        </p>
        <p className="mb-5">
          <strong>Length</strong> is the most important factor. Each additional character exponentially increases the number of possible combinations, making brute-force attacks more difficult. A 12-character password is significantly stronger than an 8-character one.
        </p>
        <p className="mb-5">
          <strong>Character variety</strong> adds complexity. Using uppercase letters, lowercase letters, numbers, and special characters expands the character set from which attackers must guess. A password using all character types is much stronger than one using only letters.
        </p>
        <p className="mb-5">
          <strong>Unpredictability</strong> matters. Avoiding common patterns, dictionary words, keyboard sequences, and personal information makes passwords harder to guess. Random character combinations are generally more secure than meaningful phrases.
        </p>
        <p>
          <strong>Entropy</strong> measures randomness. Higher entropy indicates greater unpredictability and strength. Password strength calculators often estimate entropy based on the character set size and password length.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── PASSWORD CRITERIA ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Essential Password Security Criteria
        </h2>
        <p className="mb-5">
          Creating strong passwords requires attention to several security criteria. Following these guidelines significantly improves password security and reduces vulnerability to common attack methods.
        </p>
        <p className="mb-5">
          <strong>Minimum Length</strong>: Use at least 12-16 characters. Longer passwords provide exponentially more security. Each additional character multiplies the number of possible combinations.
        </p>
        <p className="mb-5">
          <strong>Character Diversity</strong>: Include uppercase letters, lowercase letters, numbers, and special characters. This expands the character set and increases complexity.
        </p>
        <p className="mb-5">
          <strong>Avoid Common Patterns</strong>: Don't use sequential characters (123456), keyboard patterns (qwerty), or repeated characters (aaaaaa). These are easily guessed by attackers.
        </p>
        <p className="mb-5">
          <strong>No Personal Information</strong>: Avoid names, birthdays, addresses, or other personal details. Social engineering attacks often exploit personal information.
        </p>
        <p className="mb-5">
          <strong>No Dictionary Words</strong>: Avoid common words or phrases, even with character substitutions. Dictionary attacks use word lists to crack passwords.
        </p>
        <p>
          <strong>Unique for Each Account</strong>: Use different passwords for different accounts. This prevents credential stuffing attacks where compromised passwords are used on multiple sites.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── COMMON MISTAKES ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Common Password Mistakes to Avoid
        </h2>
        <p className="mb-5">
          Many people make predictable mistakes when creating passwords, leaving their accounts vulnerable. Understanding these common errors helps you avoid them and create more secure credentials.
        </p>
        <p className="mb-5">
          <strong>Using Personal Information</strong>: Including names, birthdays, or addresses makes passwords guessable through social engineering. Attackers can research targets to find personal details.
        </p>
        <p className="mb-5">
          <strong>Simple Substitutions</strong>: Replacing letters with similar numbers (e.g., "password" to "p@ssw0rd") doesn't significantly improve security. Attackers know these common substitutions.
        </p>
        <p className="mb-5">
          <strong>Reusing Passwords</strong>: Using the same password across multiple sites is dangerous. If one site is compromised, attackers can use the same credentials on other sites.
        </p>
        <p className="mb-5">
          <strong>Writing Passwords Down</strong>: Storing passwords physically or digitally without encryption exposes them to theft. If you must store passwords, use a secure password manager.
        </p>
        <p className="mb-5">
          <strong>Sharing Passwords</strong>: Never share passwords via email, chat, or other unsecured methods. If sharing is necessary, use secure password sharing features.
        </p>
        <p>
          <strong>Ignoring Security Warnings</strong>: When a password strength calculator indicates weakness, take it seriously. Weak passwords are easily compromised and put your accounts at risk.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── PASSWORD MANAGERS ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Using Password Managers Effectively
        </h2>
        <p className="mb-5">
          Password managers are essential tools for maintaining strong, unique passwords across all accounts. They generate, store, and autofill complex passwords, making security manageable.
        </p>
        <p className="mb-5">
          <strong>Generate Random Passwords</strong>: Password managers can create long, random passwords that meet all security criteria. These are much stronger than most manually created passwords.
        </p>
        <p className="mb-5">
          <strong>Secure Storage</strong>: Passwords are encrypted and stored securely. You only need to remember one master password to access all your credentials.
        </p>
        <p className="mb-5">
          <strong>Auto-fill Convenience</strong>: Password managers automatically enter credentials, reducing the risk of keyloggers capturing your keystrokes and making login easier.
        </p>
        <p className="mb-5">
          <strong>Cross-Device Sync</strong>: Many password managers sync across devices, ensuring you have access to your passwords wherever you need them while maintaining security.
        </p>
        <p>
          <strong>Breach Monitoring</strong>: Some password managers monitor for data breaches and alert you if your credentials have been compromised, allowing you to change passwords quickly.
        </p>
      </section>

      <hr className="rule-divider" />

      {/* ── TWO-FACTOR AUTHENTICATION ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
          Two-Factor Authentication (2FA)
        </h2>
        <p className="mb-5">
          Two-factor authentication adds an extra layer of security beyond passwords. Even if a password is compromised, 2FA prevents unauthorized access by requiring a second verification method.
        </p>
        <p className="mb-5">
          <strong>SMS Codes</strong>: Receive a one-time code via text message. While convenient, SMS can be vulnerable to SIM swapping attacks. Use when better options aren't available.
        </p>
        <p className="mb-5">
          <strong>Authenticator Apps</strong>: Generate time-based codes using apps like Google Authenticator or Authy. More secure than SMS and doesn't require cellular service.
        </p>
        <p className="mb-5">
          <strong>Hardware Keys</strong>: Physical devices like YubiKey provide the strongest 2FA protection. They require physical possession and are resistant to phishing.
        </p>
        <p className="mb-5">
          <strong>Biometric Authentication</strong>: Fingerprint, facial recognition, or other biometrics provide convenient 2FA. However, biometrics can't be changed if compromised.
        </p>
        <p>
          <strong>Backup Codes</strong>: Generate and store backup codes for 2FA. These allow account recovery if you lose access to your primary 2FA method.
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
              q: "What makes a password strong?",
              a: "A strong password is at least 12 characters long, includes uppercase and lowercase letters, numbers, and special characters, avoids common words and patterns, and is unique to each account."
            },
            {
              q: "How often should I change my passwords?",
              a: "Change passwords immediately if you suspect a breach. Otherwise, regular changes aren't necessary if you use strong, unique passwords and enable 2FA. Focus on password quality over frequency."
            },
            {
              q: "Are password managers safe?",
              a: "Yes, reputable password managers use strong encryption to protect your passwords. The security risk of using a password manager is much lower than reusing weak passwords across multiple sites."
            },
            {
              q: "What is password entropy?",
              a: "Password entropy measures randomness and unpredictability. Higher entropy means a password is more resistant to guessing and brute-force attacks. Entropy depends on password length and character set size."
            },
            {
              q: "Should I write down my passwords?",
              a: "Writing passwords on paper is risky if not stored securely. Use a password manager instead. If you must write passwords, store the paper in a secure location and never carry it with you."
            },
            {
              q: "What is a brute-force attack?",
              a: "A brute-force attack systematically tries every possible password combination until the correct one is found. Longer passwords with more character types take exponentially longer to crack."
            },
            {
              q: "Why shouldn't I use dictionary words?",
              a: "Dictionary attacks use word lists to quickly guess passwords. Even with character substitutions, dictionary words are easier to crack than random character combinations."
            },
            {
              q: "Is 2FA necessary if I have strong passwords?",
              a: "Yes, 2FA provides essential protection even with strong passwords. If a password is somehow compromised, 2FA prevents unauthorized access by requiring a second verification factor."
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
