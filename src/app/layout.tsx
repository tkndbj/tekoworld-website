import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Space_Grotesk } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import "./globals.css";

/*
 * Chakra Petch is the squared-off, slightly technical display face the headings
 * and buttons are set in - it carries the futuristic register without tipping
 * into sci-fi costume. Space Grotesk carries body text, because a whole privacy
 * policy set in a display face is a punishment.
 */
const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const description = `${site.company} is an independent mobile game studio. Home of Gemfire, the match-3 tower-defence game where every match fires a turret.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.company} - ${site.tagline}`,
    template: `%s - ${site.company}`,
  },
  description,
  applicationName: site.company,
  keywords: [
    site.company,
    "Gemfire",
    "mobile game studio",
    "match-3 tower defence",
    "mobile games",
    "indie game studio",
  ],
  authors: [{ name: site.company }],
  creator: site.company,
  publisher: site.company,
  openGraph: {
    type: "website",
    siteName: site.company,
    url: site.url,
    locale: "en_GB",
    title: `${site.company} - ${site.tagline}`,
    description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.company}: turrets on a castle wall firing at a skeleton horde over a gem board.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.company} - ${site.tagline}`,
    description,
    images: ["/og.jpg"],
  },
  // The site is static and sets no cookies, so there is nothing here to keep
  // out of an index. Everything is meant to be findable - a privacy policy a
  // store reviewer cannot reach is a rejected listing.
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06070d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${chakra.variable} ${grotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/*
         * Marks the document as scripted before first paint, which is what the
         * scroll-reveal rules key off. Inline and synchronous on purpose: as a
         * deferred module it would run after paint and every section would
         * visibly blink out and back in.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="grain flex min-h-full flex-col font-sans">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:border focus:border-line-2 focus:bg-panel-solid focus:px-4 focus:py-2 focus:font-bold"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="content" className="flex flex-1 flex-col">
          {children}
        </div>
        <SiteFooter />
        <Reveal />
      </body>
    </html>
  );
}
