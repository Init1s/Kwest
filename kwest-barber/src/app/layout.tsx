import type { Metadata } from "next";
import { Syne, Outfit, Azeret_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { Intro } from "@/components/ui/Intro";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
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
        className={`${syne.variable} ${outfit.variable} ${azeretMono.variable} antialiased`}
      >
        <Intro />
        <Navbar />
        <FloatingCTA />
        {children}
        <Footer />
      </body>
    </html>
  );
}
