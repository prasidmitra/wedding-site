import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import { Header } from "@/components/Header";
import { FloatingRSVP } from "@/components/FloatingRSVP";
import { ImageRetry } from "@/components/ImageRetry";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-ebgaramond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanuja & Prasid, 11–12 December 2026",
  description:
    "Join us for our wedding weekend, Sangeet, Haldi, Varmala and the wedding, at Vedic Village, Kolkata on 11–12 December 2026.",
  metadataBase: new URL("https://tanujaandprasid.wedding"),
  openGraph: {
    title: "Tanuja & Prasid, 11–12 December 2026",
    description:
      "A weekend of Sangeet, Haldi and a Bengali wedding at Vedic Village, Kolkata.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanuja & Prasid, 11–12 December 2026",
    description: "A weekend of Sangeet, Haldi and a Bengali wedding in Kolkata.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F0E4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <body>
        <Header />
        <ImageRetry />
        {children}
        <FloatingRSVP />
        <noscript>
          <style>{`[style*="opacity: 0"], [style*="opacity:0"] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </body>
    </html>
  );
}
