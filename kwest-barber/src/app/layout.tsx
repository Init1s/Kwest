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

export const metadata: Metadata = {
  title: "Kwest The Barber | Boca Raton",
  description:
    "Sharp. Clean. Precise. Premium cuts and fades in Boca Raton, FL. Book your appointment with Kwest The Barber.",
  openGraph: {
    title: "Kwest The Barber | Boca Raton",
    description:
      "Sharp. Clean. Precise. Premium cuts and fades in Boca Raton, FL.",
    url: "https://kwestthebarber.com",
    siteName: "Kwest The Barber",
    type: "website",
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
        <Intro />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
