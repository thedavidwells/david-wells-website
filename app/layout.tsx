import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Instrument_Serif } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "David Wells",
    template: "%s | David Wells",
  },
  description:
    "David Wells: software engineer turned sales professional. Work history, writing, and links.",
  openGraph: {
    title: "David Wells",
    description:
      "David Wells: software engineer turned sales professional.",
    url: baseUrl,
    siteName: "David Wells",
    locale: "en_US",
    type: "website",
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

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        serif.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-5xl mx-auto px-4 md:px-8 mt-6">
        <main className="flex-auto min-w-0 flex flex-col">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
