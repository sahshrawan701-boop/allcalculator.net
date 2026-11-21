import type { NextConfig } from "next";

const permanentRedirect = (source: string, destination: string) => ({
  source,
  destination,
  permanent: true,
});

const exactLegacyRedirects = [
  ["/business-calculators/cost-of-living-calculator", "/finance/cost-of-living-calculator"],
  ["/other-calculators/annual-income-calculator", "/salary/annual-income-calculator"],
  ["/other-calculators/job-offer-comparison-calculator", "/salary/job-offer-comparison-calculator"],
  ["/other-calculators/roth-ira-calculator", "/investing/roth-ira-calculator"],
  ["/other-calculators/algebra-calculator", "/math/algebra-calculator"],
  ["/other-calculators/expense-tracker-calculator", "/finance/expense-tracker-calculator"],
  ["/other-calculators/risk-reward-calculator", "/investing/risk-reward-calculator"],
  ["/other-calculators/rank-predictor-calculator", "/education/rank-predictor-calculator"],
  ["/other-calculators/depreciation-calculator", "/business/depreciation-calculator"],
  ["/other-calculators/saas-valuation-calculator", "/business/saas-valuation-calculator"],
  ["/other-calculators/net-worth-calculator", "/finance/net-worth-calculator"],
  ["/other-calculators/commission-calculator", "/salary/commission-calculator"],
  ["/other-calculators/tip-calculator", "/lifestyle/tip-calculator"],
  ["/other-calculators/cpa-calculator", "/business/cpa-calculator"],
  ["/other-calculators/pto-calculator", "/salary/pto-calculator"],
  ["/other-calculators/sales-forecast-calculator", "/business/sales-forecast-calculator"],
  ["/other-calculators/attendance-calculator", "/education/attendance-calculator"],
  ["/mortgage-calculators/ltv-calculator", "/business/ltv-calculator"],
  ["/other-calculators/inflation-calculator", "/finance/inflation-calculator"],
  ["/other-calculators/balance-transfer-calculator", "/finance/balance-transfer-calculator"],
  ["/other-calculators/ethereum-mining-calculator", "/investing/ethereum-mining-calculator"],
  ["/other-calculators/productivity-calculator", "/business/productivity-calculator"],
  ["/finance-calculators/business-loan-calculator", "/business/business-loan-calculator"],
  ["/salary-calculators/payday-loan-calculator", "/finance/payday-loan-calculator"],
  ["/other-calculators/consultant-rate-calculator", "/business/consultant-rate-calculator"],
  ["/other-calculators/fire-calculator", "/investing/fire-calculator"],
  ["/lifestyle/essay-word-counter", "/education/essay-word-counter"],
  ["/other-calculators/401k-calculator", "/investing/401k-calculator"],
  ["/other-calculators/bonus-calculator", "/salary/bonus-calculator"],
  ["/other-calculators/burn-rate-calculator", "/business/burn-rate-calculator"],
  ["/other-calculators/essay-word-counter", "/education/essay-word-counter"],
  ["/other-calculators/acceleration-calculator", "/science/acceleration-calculator"],
  ["/other-calculators/freelance-rate-calculator", "/business/freelance-rate-calculator"],
  ["/other-calculators/rmd-calculator", "/investing/rmd-calculator"],
  ["/finance-calculators/earned-income-credit-calculator", "/tax/earned-income-credit-calculator"],
  ["/other-calculators/bac-calculator", "/health/bac-calculator"],
  ["/other-calculators/financial-freedom-calculator", "/investing/financial-freedom-calculator"],
  ["/salary-calculators/credit-card-payoff-calculator", "/finance/credit-card-payoff-calculator"],
  ["/other-calculators/alimony-calculator", "/lifestyle/alimony-calculator"],
  ["/tax-calculators/salary-after-tax-calculator", "/salary/salary-after-tax-calculator"],
  ["/investing-calculators/roi-calculator", "/business/roi-calculator"],
  ["/other-calculators", "/other"],
  ["/sitemap-page", "/sitemap"],
  ["/compound-interest-calculator.html", "/investing/compound-interest-calculator"],
  ["/south-dakota-sales-tax-calculator", "/tax/south-dakota-sales-tax-calculator"],
  ["/maine-salary-calculator", "/salary/maine-salary-calculator"],
  ["/missouri-business-tax-calculator", "/tax/missouri-business-tax-calculator"],
  ["/nebraska-mortgage-calculator", "/mortgage/nebraska-mortgage-calculator"],
  ["/montana-paycheck-calculator", "/salary/montana-paycheck-calculator"],
  ["/rhode-island-sales-tax-calculator", "/tax/rhode-island-sales-tax-calculator"],
  ["/nevada-sales-tax-calculator", "/tax/nevada-sales-tax-calculator"],
  ["/idaho-payroll-calculator", "/business/idaho-payroll-calculator"],
  ["/washington-mortgage-calculator", "/mortgage/washington-mortgage-calculator"],
  ["/calorie-calculator", "/health/calorie-calculator"],
  ["/zodiac-compatibility.html", "/lifestyle/love-calculator"],
  ["/birthday-compatibility.html", "/lifestyle/love-calculator"],
  ["/limit-calculator.html", "/math"],
  ["/math/distance-calculator", "/math"],
  ["/is-time-zone-calculator-display-and-local-time-the-same", "/lifestyle"],
  ["/your-datas-best-friend-mean-median-mode-range-calculator", "/math"],
  ["/fitness-and-health/body-type-calculator", "/health/body-fat-calculator"],
  ["/math/average-calculator", "/math"],
  ["/make-informed-financial-decisions-with-our-calculator", "/finance"],
  ["/standard-deviation-calculator-step-by-step-guide-to-calculate-the-sd-manually", "/math"],
  ["/calculating-interest-rates-a-step-by-step-guide-to-understanding-and-evaluating-interest-rates", "/finance/interest-rate-calculator"],
  ["/financial-calculator-top-10-cryptocurrencies-in-2023", "/investing/crypto-profit-calculator"],
  ["/triangle-calculator-make-your-calculations-simple-and-quick", "/math"],
  ["/math/permutation-and-combination-calculator", "/math"],
  ["/a-revolutionary-guide-to-unravelling-any-number-sequence-with-this-powerful-calculator", "/math"],
  ["/pythagorean-theorem-calculator-understanding-the-fundamentals-and-how-to-use-i", "/math"],
  ["/math/time-zone-calculator", "/lifestyle"],
  ["/the-easy-calculation-for-mean-median-mode-and-range-calculator", "/math"],
  ["/discover-the-power-of-our-triangle-calculator", "/math"],
  ["/the-easiest-way-to-calculate-triangle-angles", "/math"],
  ["/pythagorass-theorem-discovering-the-amazing-power-of-math", "/math"],
].map(([source, destination]) => permanentRedirect(source, destination));

const legacyCategoryRedirects = [
  ["/business-calculators", "/business"],
  ["/conversion-calculators", "/conversion"],
  ["/education-calculators", "/education"],
  ["/finance-calculators", "/finance"],
  ["/health-and-fitness-calculators", "/health"],
  ["/investing-calculators", "/investing"],
  ["/lifestyle-calculators", "/lifestyle"],
  ["/math-calculators", "/math"],
  ["/mortgage-calculators", "/mortgage"],
  ["/salary-calculators", "/salary"],
  ["/science-calculators", "/science"],
  ["/tax-calculators", "/tax"],
  ["/technology-calculators", "/technology"],
].flatMap(([source, destination]) => [
  permanentRedirect(source, destination),
  permanentRedirect(`${source}/:path*`, `${destination}/:path*`),
]);

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Enable compression
  compress: true,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Turbopack configuration
  turbopack: {
    root: __dirname,
  },

  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "allcalculator.net",
          },
        ],
        destination: "https://www.allcalculator.net/:path*",
        permanent: true,
      },
      // Legacy .html URLs
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value:
              "allcalculator-net-git-main-shrawan-kumar-sahs-projects.vercel.app",
          },
        ],
        destination: "https://www.allcalculator.net/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value:
              "allcalculator-ndyf45ezv-shrawan-kumar-sahs-projects.vercel.app",
          },
        ],
        destination: "https://www.allcalculator.net/:path*",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      ...exactLegacyRedirects,
      ...legacyCategoryRedirects,
      {
        source: "/education-calculators/final-grade-calculator",
        destination: "/education/final-grade-calculator",
        permanent: true,
      },
      {
        source: "/percentage-calculator.html",
        destination: "/math/percentage-calculator",
        permanent: true,
      },
      {
        source: "/momentum-calculator.html",
        destination: "/science/momentum-calculator",
        permanent: true,
      },
      {
        source: "/scientific-calculator.html",
        destination: "/math/scientific-calculator",
        permanent: true,
      },
      {
        source: "/love-calculator.html",
        destination: "/lifestyle/love-calculator",
        permanent: true,
      },
      {
        source: "/mortgage-calculators/mortgage-affordability-calculator",
        destination: "/mortgage/mortgage-affordability-calculator",
        permanent: true,
      },
      {
        source: "/salary-calculators/take-home-pay-calculator",
        destination: "/salary/take-home-pay-calculator",
        permanent: true,
      },
      {
        source: "/salary-calculators/inflation-adjusted-salary-calculator",
        destination: "/salary/inflation-adjusted-salary-calculator",
        permanent: true,
      },
      {
        source: "/salary-calculators/weekly-pay-calculator",
        destination: "/salary/weekly-pay-calculator",
        permanent: true,
      },
      {
        source: "/mortgage-calculator.html",
        destination: "/mortgage/mortgage-calculator",
        permanent: true,
      },
      {
        source: "/potential-energy-calculator.html",
        destination: "/science/potential-energy-calculator",
        permanent: true,
      },
      {
        source: "/calorie-calculator.html",
        destination: "/health/calorie-calculator",
        permanent: true,
      },
      {
        source: "/health-and-fitness-calculators/pace-calculator",
        destination: "/health/pace-calculator",
        permanent: true,
      },
      {
        source: "/pregnancy-calculator.html",
        destination: "/health/pregnancy-calculator",
        permanent: true,
      },
      {
        source: "/integral-calculator.html",
        destination: "/math/integral-calculator",
        permanent: true,
      },
      {
        source: "/gpa-calculator.html",
        destination: "/education/gpa-calculator",
        permanent: true,
      },
      {
        source: "/ovulation-calculator.html",
        destination: "/health/ovulation-calculator",
        permanent: true,
      },
      {
        source: "/tdee-calculator.html",
        destination: "/health/tdee-calculator",
        permanent: true,
      },
      {
        source: "/auto-loan-calculator.html",
        destination: "/finance/auto-loan-calculator",
        permanent: true,
      },
      {
        source: "/acceleration-calculator.html",
        destination: "/science/acceleration-calculator",
        permanent: true,
      },
      {
        source: "/compound-interest-calculator.html",
        destination: "/investing/compound-interest-calculator",
        permanent: true,
      },
      {
        source: "/retirement-calculator.html",
        destination: "/investing/retirement-calculator",
        permanent: true,
      },
      {
        source: "/work-done-calculator.html",
        destination: "/science/work-done-calculator",
        permanent: true,
      },
      {
        source: "/kinetic-energy-calculator.html",
        destination: "/science/kinetic-energy-calculator",
        permanent: true,
      },
      {
        source: "/password-strength-calculator.html",
        destination: "/technology/password-strength-calculator",
        permanent: true,
      },
      {
        source: "/algebra-calculator.html",
        destination: "/math/algebra-calculator",
        permanent: true,
      },
      {
        source: "/grade-calculator.html",
        destination: "/education/grade-calculator",
        permanent: true,
      },
      {
        source: "/age-calculator.html",
        destination: "/lifestyle/age-calculator",
        permanent: true,
      },
      {
        source: "/loan-calculator.html",
        destination: "/finance/loan-calculator",
        permanent: true,
      },

      {
        source: "/tax-calculators/depreciation-tax-calculator",
        destination: "/tax/depreciation-tax-calculator",
        permanent: true,
      },
      {
        source: "/mortgage-calculators/arm-mortgage-calculator",
        destination: "/mortgage/arm-mortgage-calculator",
        permanent: true,
      },
      {
        source: "/scientific-calculator",
        destination: "/math/scientific-calculator",
        permanent: true,
      },
      {
        source: "/mortgage-calculator",
        destination: "/mortgage/mortgage-calculator",
        permanent: true,
      },
      {
        source: "/gpa-calculator",
        destination: "/education/gpa-calculator",
        permanent: true,
      },
      {
        source: "/financial-calculator/percent-error-calculator",
        destination: "/math/percentage-calculator",
        permanent: true,
      },
      {
        source: "/find-your-payable-tax-using-income-tax-calculator",
        destination: "/tax/income-tax-calculator",
        permanent: true,
      },
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/compound-interest-calculator.html",
        destination: "/investing/compound-interest-calculator",
        permanent: true,
      },
      {
        source: "/ditching-the-myths-understanding-the-truth-about-body-fat-percentage-and-health",
        destination: "/health/body-fat-calculator",
        permanent: true,
      },
      {
        source: "/final-grade-calculator.html",
        destination: "/education/final-grade-calculator",
        permanent: true,
      },
      {
        source: "/highly-rated-options-for-calculating-body-mass-index",
        destination: "/health/bmi-calculator",
        permanent: true,
      },
      {
        source: "/investment-calculator-see-how-your-money-can-grow",
        destination: "/investing/investment-calculator",
        permanent: true,
      },
      {
        source: "/understanding-interest-calculator-how-to-estimate-the-interest-rates-easily",
        destination: "/finance/interest-rate-calculator",
        permanent: true,
      },
      {
        source: "/what-factors-does-the-bac-calculator-fail-to-consider-when-calculating-bac",
        destination: "/health/bac-calculator",
        permanent: true,
      },
      {
        source: "/interest-calculator-understanding-interest-rates-in-the-usa-a-comprehensive-guide",
        destination: "/finance/interest-rate-calculator",
        permanent: true,
      },
      {
        source: "/how-much-does-a-car-loan-cost-at-its-highest-interest-rate",
        destination: "/finance/car-loan-calculator",
        permanent: true,
      },
      {
        source: "/using-a-scientific-calculator-is-important-why-is-it-so-explore-its-benefits",
        destination: "/math/scientific-calculator",
        permanent: true,
      },
      {
        source: "/protein-calculator-top-homemade-protein-shakes-for-good-health",
        destination: "/health/protein-intake-calculator",
        permanent: true,
      },
      {
        source: "/body-fat-calculator-to-quickly-measure-the-fat-percentage-in-your-body",
        destination: "/health/body-fat-calculator",
        permanent: true,
      },
      {
        source: "/fitness-and-health/protein-calculator",
        destination: "/health/protein-intake-calculator",
        permanent: true,
      },
      {
        source: "/grade-needed-calculator.html",
        destination: "/education/final-grade-calculator",
        permanent: true,
      },
      {
        source: "/equation-solver.html",
        destination: "/math/equation-solver",
        permanent: true,
      },
      {
        source: "/graphing-calculator.html",
        destination: "/math/graphing-calculator",
        permanent: true,
      },
      {
        source: "/how-accurate-is-a-bac-calculator",
        destination: "/health/bac-calculator",
        permanent: true,
      },
      {
        source: "/financial-calculator/amortization-calculator",
        destination: "/mortgage/amortization-calculator",
        permanent: true,
      },
      {
        source: "/other-calculators/conversion-calculator",
        destination: "/conversion",
        permanent: true,
      },
      {
        source: "/other-calculators/bitcoin-mining-calculator",
        destination: "/investing/bitcoin-mining-calculator",
        permanent: true,
      },
      {
        source: "/finance-calculators/installment-loan-calculator",
        destination: "/finance/installment-loan-calculator",
        permanent: true,
      },
      {
        source: "/tax-calculators/tax-withholding-calculator",
        destination: "/tax/tax-withholding-calculator",
        permanent: true,
      },

      {
        source: "/math/statistics",
        destination: "/math",
        permanent: true,
      },

      // Category Pages
      {
        source: "/math-calculators.html",
        destination: "/math",
        permanent: true,
      },
      {
        source: "/science-calculators.html",
        destination: "/science",
        permanent: true,
      },
      {
        source: "/financial-calculators.html",
        destination: "/finance",
        permanent: true,
      },
      {
        source: "/health-and-fitness-calculators.html",
        destination: "/health",
        permanent: true,
      },
      {
        source: "/other-calculators.html",
        destination: "/other",
        permanent: true,
      },

      // Static Pages
      {
        source: "/about-us.html",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/privacy-policy.html",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-of-use.html",
        destination: "/terms-of-use",
        permanent: true,
      },
      {
        source: "/sitemap.html",
        destination: "/sitemap",
        permanent: true,
      },
    ];
  },

  // Security + caching headers
  async headers() {
    return [
      {
        source:
          "/:path*.(ico|svg|png|jpg|jpeg|gif|webp|avif|woff|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
