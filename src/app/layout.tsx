import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getHomeJsonLd, SITE_CONFIG } from "@/config/site";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/theme/ThemeContext";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var mode = (saved === 'dark' || saved === 'light' || saved === 'system') ? saved : 'dark';
    var resolved = mode;
    if (mode === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.dataset.theme = resolved;
    document.documentElement.style.colorScheme = resolved;
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title.es,
    template: "%s | Yessid Alba Labs",
  },

  description: SITE_CONFIG.description.es,

  applicationName: "Yessid Alba Labs Portfolio",

  authors: [
    {
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
  ],

  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.shortName,

  verification: {
    google: SITE_CONFIG.googleVerification,
  },

  keywords: [
    "Yessid Alba",
    "Yessid Alba Labs",
    "YALBA LABS",
    "Software Engineer",
    "Systems Analyst",
    "Software Architect",
    "Technology Innovator",
    "Rust",
    "Python",
    "PyQt6",
    "PySide6",
    "Swift",
    "SwiftUI",
    "iOS",
    "macOS",
    "Android",
    "Kotlin",
    "Jetpack Compose",
    "SQLite",
    "Database Engineering",
    "Reverse Engineering",
    "Mach-O",
    "MREL",
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "Bolivia",
  ],

  alternates: {
    canonical: "/",
    languages: {
      "es-BO": "/",
      "en-US": "/",
    },
  },

  openGraph: {
    type: "website",
    url: SITE_CONFIG.url,
    locale: "es_BO",
    alternateLocale: ["en_US"],
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title.es,
    description: SITE_CONFIG.description.es,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Yessid Alba — Software Engineer & Technology Innovator · Yessid Alba Labs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title.es,
    description: SITE_CONFIG.description.es,
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const homeJsonLd = getHomeJsonLd();

  return (
    <html
      lang="es"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitScript,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeJsonLd),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-canvas text-fg-primary">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
