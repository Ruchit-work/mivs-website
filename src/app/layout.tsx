import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MIVS Softwares Development | Web, Mobile & Cloud Solutions",
  description: "Professional software development services. We build scalable web, mobile, cloud, and AI solutions tailored to your business needs. Expert team, proven process, reliable delivery.",
  keywords: ["software development", "web development", "mobile apps", "cloud solutions", "AI/ML", "DevOps", "MIVS"],
  authors: [{ name: "MIVS Software Development" }],
  creator: "MIVS Software Development",
  publisher: "MIVS Software Development",
  metadataBase: new URL('https://mivs.in'),
  
  // Favicon and icons
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: 'any' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/images/logo.png',
  },

  // Open Graph (for social media sharing)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mivs.in',
    siteName: 'MIVS Software Development',
    title: 'MIVS Software Development | Web, Mobile & Cloud Solutions',
    description: 'Professional software development services. Expert team, proven process, reliable delivery.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'MIVS Software Development',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'MIVS Software Development',
    description: 'Professional software development services. Expert team, proven process, reliable delivery.',
    images: ['/images/logo.png'],
  },

  // Verification and other meta
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="page-enter-animate">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
