import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import StructuredData from "./components/StructuredData/StructuredData";
import PerformanceMonitor from "./components/PerformanceMonitor/PerformanceMonitor";
import ScrollRevealObserverClient from "./components/ScrollReveal/ScrollRevealObserverClient";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MIVS | Enterprise AI Automation & AI Consulting",
    template: "%s | MIVS"
  },
  description: "Enterprise AI systems and automation. We design and deliver AI architecture, LLM integrations, intelligent workflows, and decision engines for enterprise transformation.",
  keywords: [
    "enterprise AI", "AI automation", "AI consulting", "LLM integration", "intelligent workflow",
    "AI-powered decision engines", "enterprise transformation", "AI systems architecture",
    "workflow automation", "enterprise AI strategy", "MIVS"
  ],
  authors: [{ name: "MIVS", url: "https://mivs.in" }],
  creator: "MIVS",
  publisher: "MIVS",
  metadataBase: new URL('https://mivs.in'),
  
  // Favicon / tab icon – use site logo so it appears in browser tab (URL bar)
  icons: {
    icon: [
      { url: '/images/mivs_black_2.png', sizes: 'any', type: 'image/png' },
      { url: '/images/mivs_black_2.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/mivs_black_2.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/mivs_black_2.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/images/mivs_black_2.png', color: '#0F172A' },
    ],
  },

  // Enhanced Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mivs.in',
    siteName: 'MIVS',
    title: 'MIVS | Enterprise AI Automation & AI Consulting',
    description: 'Enterprise AI automation and AI consulting. AI automation architecture, LLM integrations, intelligent workflow systems.',
    images: [
      {
        url: '/images/MIVS_1.png',
        width: 1200,
        height: 630,
        alt: 'MIVS - Enterprise AI Automation & Consulting',
        type: 'image/png',
      },
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'MIVS Logo',
        type: 'image/png',
      },
    ],
  },

  // Enhanced Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@mivs_software',
    creator: '@mivs_software',
    title: 'MIVS | Enterprise AI Automation & AI Consulting',
    description: 'Enterprise AI automation and AI consulting. LLM integrations, intelligent workflows, AI-powered decision engines.',
    images: ['/images/MIVS_1.png'],
  },

  // Enhanced robots and SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Additional SEO meta tags
  alternates: {
    canonical: 'https://mivs.in',
  },
  
  // Verification tags (add your actual verification codes)
  // Set GOOGLE_SITE_VERIFICATION in .env.local file
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
    yandex: process.env.YANDEX_VERIFICATION || '',
    yahoo: process.env.YAHOO_VERIFICATION || '',
  },
  
  // App-specific meta
  applicationName: 'MIVS',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  
  // Additional meta tags
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'MIVS',
    'msapplication-TileColor': '#FFFFFF',
    'theme-color': '#FFFFFF',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <StructuredData type="organization" data={{}} />
        <StructuredData type="website" data={{}} />
        <PerformanceMonitor />
        <Navbar />
        <main className="page-enter-animate pt-20">
          {children}
          <ScrollRevealObserverClient />
        </main>
        <Footer />
      </body>
    </html>
  );
}
