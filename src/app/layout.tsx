import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, SoftwareApplicationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pieceworkpro.com"),
  title: {
    default: "Piece Work Pro — Piece Work Tracking & Payroll Software",
    template: "%s | Piece Work Pro",
  },
  description:
    "Stop chasing your crew for timesheets. Piece Work Pro lets contractors track piece work, run payroll in minutes, and know exactly what every job costs. Free to start.",
  keywords: [
    "piece work tracking",
    "piece rate pay software",
    "construction payroll",
    "roofing piece work",
    "job costing software",
    "crew time tracking",
  ],
  authors: [{ name: "Tyson Faulkner" }],
  creator: "Piece Work Pro LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pieceworkpro.com",
    siteName: "Piece Work Pro",
    title: "Piece Work Pro — Piece Work Tracking & Payroll Software",
    description:
      "Stop chasing your crew for timesheets. Track piece work, run payroll in minutes, and know exactly what every job costs.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Piece Work Pro — Piece Work Tracking Software for Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piece Work Pro — Piece Work Tracking & Payroll Software",
    description:
      "Stop chasing your crew for timesheets. Track piece work, run payroll in minutes, and know exactly what every job costs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/images/favicon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon-192x192.png" />
        <OrganizationJsonLd />
        <SoftwareApplicationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="antialiased">
        <a href="#main" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
