import type { Metadata } from "next";
import {
  Knewave,
  Permanent_Marker,
  Outfit,
  Azeret_Mono,
} from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Intro } from "@/components/ui/Intro";
import "./globals.css";

// Brushed/painted display face — channels the hand-painted album-jacket
// lettering of "The Low End Theory."
const knewave = Knewave({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

// Hand-script accent for the "Kwest" wordmark and brush moments.
const permanentMarker = Permanent_Marker({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const azeretMono = Azeret_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kwestthebarber.com";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kwest The Barber | Barber in Boca Raton near FAU",
    template: "%s · Kwest The Barber",
  },
  description:
    "Precision cuts, clean fades, and hot-towel shaves in Boca Raton, FL — near FAU. 18+ years in the chair, 2,400+ regulars. Book through Squire.",
  applicationName: "Kwest The Barber",
  authors: [{ name: "Kwest The Barber" }],
  creator: "Kwest The Barber",
  publisher: "Kwest The Barber",
  keywords: [
    "barber",
    "Boca Raton barber",
    "barber near FAU",
    "haircut",
    "fade",
    "hot towel shave",
    "Kwest the Barber",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kwest The Barber | Barber in Boca Raton near FAU",
    description:
      "Sharp. Clean. Precise. 18+ years cutting in Boca Raton, FL — near FAU.",
    url: SITE_URL,
    siteName: "Kwest The Barber",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${BASE}/images/og-kwest.jpg`,
        width: 1200,
        height: 630,
        alt: "Kwest The Barber — Boca Raton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwest The Barber | Barber in Boca Raton near FAU",
    description:
      "Sharp. Clean. Precise. 18+ years cutting in Boca Raton, FL — near FAU.",
    images: [`${BASE}/images/og-kwest.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
        className={`${knewave.variable} ${permanentMarker.variable} ${outfit.variable} ${azeretMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Intro />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
