import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import { LanguageProvider } from "@/i18n/LanguageContext";

import "./globals.css";

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
    default: "Yessid Alba | Software Engineer",
    template: "%s | Yessid Alba",
  },

  description:
    "Portfolio de Yessid Alba, Software Engineer y Systems Analyst. Desarrollo de aplicaciones móviles, desktop, web y productos digitales bajo YALBA LABS.",

  applicationName: "Yessid Alba Portfolio",

  authors: [
    {
      name: "Yessid Alba",
    },
  ],

  creator: "Yessid Alba",
  publisher: "YALBA LABS",

  keywords: [
    "Yessid Alba",
    "YALBA LABS",
    "Software Engineer",
    "Systems Analyst",
    "Software Developer",
    "Swift",
    "SwiftUI",
    "iOS",
    "macOS",
    "Android",
    "Kotlin",
    "Python",
    "PyQt6",
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "Bolivia",
  ],

  openGraph: {
    type: "website",
    locale: "es_BO",
    alternateLocale: ["en_US"],
    siteName: "Yessid Alba | YALBA LABS",
    title: "Yessid Alba | Software Engineer",
    description:
      "Software, productos digitales y soluciones multiplataforma desarrolladas por Yessid Alba bajo YALBA LABS.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yessid Alba | Software Engineer",
    description:
      "Software, productos digitales y soluciones multiplataforma desarrolladas por Yessid Alba bajo YALBA LABS.",
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
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
