import type { Metadata } from "next";
import { Barlow_Condensed, Barlow, Space_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
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
        className={`${barlowCondensed.variable} ${barlow.variable} ${spaceMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
