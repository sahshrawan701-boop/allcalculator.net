import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdSidebarWrapper from "@/components/AdSidebarWrapper";
import { OrganizationSchema, GlobalBreadcrumbs } from "@/components/seo";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SavedCalculatorProvider } from "@/contexts/SavedCalculatorContext";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import GoogleAdBanner from "@/components/GoogleAdBanner";
import GlobalTopBanner from "@/components/GlobalTopBanner";
import { Providers } from "@/components/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#6366f1",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.allcalculator.net"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Free Online Calculators – Finance, Health, Math, Science",
    template: "%s",
  },
  description:
    "250+ free online calculators for finance, health, math, and science. Instant, accurate results for mortgage, BMI, scientific, GPA, and more.",
  keywords:
    "online calculator, free calculator, financial calculator, math calculator, scientific calculator, health calculator, mortgage calculator, tax calculator, salary calculator, BMI calculator",
  authors: [{ name: "Allcalculator.net" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    url: "https://www.allcalculator.net/",
    title: "Allcalculator.net – Free Online Calculators",
    description:
      "250+ free calculators for finance, health, math, and science. Fast, accurate, and always free.",
    siteName: "allcalculator.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allcalculator.net – Free Online Calculators",
    description:
      "250+ free calculators for finance, health, math, and science. Fast, accurate, and always free.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Anti-FOUC: apply saved theme before first paint */}
        <script
          id="theme-script"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        {/* Preconnect to Font Awesome CDN for performance */}
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />
        {/* Font Awesome (Preconnected for performance) */}
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* Favicon - Sigma Icon */}
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9144878288998314"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${poppins.variable} min-h-screen flex flex-col`}>
        <OrganizationSchema />
        <ThemeProvider>
          <Providers>
            <CurrencyProvider>
              <SavedCalculatorProvider>
                <Navbar />
                <div className="flex w-full max-w-[1920px] mx-auto pt-[80px] sm:pt-[100px] md:pt-[125px] justify-center flex-1">
                  <AdSidebarWrapper>
                    <main
                      id="main-content"
                      className="flex-1 min-w-0 w-full flex flex-col"
                    >
                      {/* <GlobalTopBanner /> */}
                      <GlobalBreadcrumbs />
                      {children}
                      {/* <div className="mt-auto px-4 sm:px-8 max-w-[1400px] mx-auto w-full">
                      <GoogleAdBanner />
                    </div> */}
                    </main>
                  </AdSidebarWrapper>
                </div>
                <Footer />

                {/* Vercel Analytics */}
                <Analytics />
                <SpeedInsights />
              </SavedCalculatorProvider>
            </CurrencyProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
