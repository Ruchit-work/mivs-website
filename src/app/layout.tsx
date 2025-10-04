import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import StructuredData from "./components/StructuredData/StructuredData";
import PerformanceMonitor from "./components/PerformanceMonitor/PerformanceMonitor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MIVS Softwares Development | Web, Mobile & Cloud Solutions",
    template: "%s | MIVS Software Development"
  },
  description: "Professional software development services. We build scalable web, mobile, cloud, and AI solutions tailored to your business needs. Expert team, proven process, reliable delivery.",
  keywords: [
    // Primary Services
    "software development", "web development", "mobile app development", "cloud solutions", 
    "AI/ML development", "DevOps services", "custom software", "enterprise solutions",
    
    // Technologies
    "React development", "Node.js development", "Python development", "Next.js development",
    "React Native", "Flutter development", "AWS cloud", "Google Cloud", "Azure cloud",
    
    // Specializations
    "machine learning", "artificial intelligence", "data analytics", "API development",
    "database design", "UI/UX design", "responsive web design", "e-commerce development",
    
    // Location-based Keywords
    "software development company in India", "web development services in Gujarat",
    "mobile app development in Bardoli", "cloud solutions provider in India",
    "AI/ML development company in Gujarat",
    
    // Long-tail Keywords
    "custom software development services", "enterprise software solutions",
    "full-stack development company", "cross-platform mobile app development",
    "cloud migration services",
    
    // Brand & General
    "MIVS", "software company", "tech solutions", "digital transformation"
  ],
  authors: [{ name: "MIVS Software Development", url: "https://mivs.in" }],
  creator: "MIVS Software Development",
  publisher: "MIVS Software Development",
  metadataBase: new URL('https://mivs.in'),
  
  // Enhanced favicon and icons
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: 'any', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/images/logo.png', color: '#7c3aed' },
    ],
  },

  // Enhanced Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mivs.in',
    siteName: 'MIVS Software Development',
    title: 'MIVS Software Development | Web, Mobile & Cloud Solutions',
    description: 'Professional software development services. Expert team, proven process, reliable delivery. Custom web apps, mobile apps, cloud solutions, and AI/ML development.',
    images: [
      {
        url: '/images/MIVS_1.png',
        width: 1200,
        height: 630,
        alt: 'MIVS Software Development - Professional Software Solutions',
        type: 'image/png',
      },
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'MIVS Software Development Logo',
        type: 'image/png',
      },
    ],
  },

  // Enhanced Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@mivs_software',
    creator: '@mivs_software',
    title: 'MIVS Software Development | Web, Mobile & Cloud Solutions',
    description: 'Professional software development services. Expert team, proven process, reliable delivery.',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  
  // App-specific meta
  applicationName: 'MIVS Software Development',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  
  // Additional meta tags
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'MIVS Software',
    'msapplication-TileColor': '#7c3aed',
    'theme-color': '#7c3aed',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="organization" data={{}} />
        <StructuredData type="website" data={{}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PerformanceMonitor />
        <Navbar />
        <main className="page-enter-animate">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
