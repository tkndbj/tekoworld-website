import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import "./globals.css";

/*
 * Baloo 2 is the chunky rounded face the headings are set in - it matches the
 * moulded, soft-cornered look of the tileset. Nunito carries the body text,
 * because a whole privacy policy set in a display face is a punishment.
 */
const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "A cosy light-puzzle. Turn the conduits, wake the sleeping critters, and build a grove of your own. Free, offline, and free of forced adverts.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.game} - a cosy light-puzzle`,
    template: `%s - ${site.game}`,
  },
  description,
  applicationName: site.game,
  keywords: [
    site.game,
    site.publisher,
    "puzzle game",
    "cosy game",
    "mobile game",
    "offline game",
    "village builder",
  ],
  authors: [{ name: site.publisher }],
  creator: site.publisher,
  publisher: site.publisher,
  openGraph: {
    type: "website",
    siteName: site.game,
    url: site.url,
    locale: "en_GB",
    title: `${site.game} - a cosy light-puzzle`,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.game}: a floating glade with a companion waking beside a pond.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.game} - a cosy light-puzzle`,
    description,
    images: ["/og.png"],
  },
  // The site is static and sets no cookies, so there is nothing here to keep
  // out of an index. Everything is meant to be findable - a privacy policy a
  // store reviewer cannot reach is a rejected listing.
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f0dc" },
    { media: "(prefers-color-scheme: dark)", color: "#16211b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${baloo.variable} ${nunito.variable} h-full antialiased`}
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
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-2xl focus:border-2 focus:border-line focus:bg-panel focus:px-4 focus:py-2 focus:font-bold"
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
