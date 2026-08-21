import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { site } from "@/lib/site";
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
  metadataBase: new URL(site.url),
  title: {
    default: `${site.game} — a cosy puzzle game`,
    template: `%s — ${site.game}`,
  },
  description:
    "Turn the conduits, wake the critters, and build a grove of your own. Free to play on Android and iOS.",
  openGraph: {
    type: "website",
    siteName: site.game,
    url: site.url,
    title: `${site.game} — a cosy puzzle game`,
    description:
      "Turn the conduits, wake the critters, and build a grove of your own.",
  },
  // The site is static and sets no cookies, so there is nothing here to keep out of an
  // index. Everything is meant to be findable — a privacy policy a store reviewer cannot
  // reach is a rejected listing.
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:ring-2 focus:ring-accent"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="content" className="flex flex-1 flex-col">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
