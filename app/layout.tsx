import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/resume";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yuvarajgovindarajan.com"),
  title: `${profile.name} — ${profile.title}`,
  description: profile.summary[0],
  keywords: [
    "Yuvaraj Govindarajan",
    "Sales Manager",
    "B2B Software Sales",
    "CRM",
    "Account Management",
    "Chennai",
  ],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary[0],
    images: [profile.photo],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.summary[0],
    images: [profile.photo],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-void">{children}</body>
    </html>
  );
}
