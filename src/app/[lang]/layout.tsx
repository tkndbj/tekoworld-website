import type { Metadata, Viewport } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { LanguageSuggestion } from "@/components/ui/LanguageSuggestion";
import { Reveal } from "@/components/ui/Reveal";
import { dictionaries, type Dictionary } from "@/i18n/dictionaries";
import { languageAlternates, localeInfo, localePath, locales, type Locale } from "@/i18n/locales";
import { getLocale } from "@/i18n/server";
import { gemfire, site } from "@/lib/site";
import { fontClasses, markScripted } from "../fonts";
import "../globals.css";

/** Every language is prerendered; any other first segment is a 404, never a render. */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = dictionaries[locale];
  const title = `${site.company} - ${t.site.tagline}`;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s - ${site.company}`,
    },
    description: t.site.description,
    applicationName: site.company,
    alternates: {
      canonical: localePath(locale, "/"),
      languages: languageAlternates("/"),
    },
    // Meta Business domain verification. Removing it un-verifies the domain.
    other: {
      "facebook-domain-verification": "bvtibmwkcp8wiubgnkhil0mi14ol3y",
    },
    keywords: [site.company, gemfire.name, ...t.site.keywords],
    authors: [{ name: site.company }],
    creator: site.company,
    publisher: site.company,
    openGraph: {
      type: "website",
      siteName: site.company,
      url: localePath(locale, "/"),
      locale: localeInfo[locale].og,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeInfo[l].og),
      title,
      description: t.site.description,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: t.site.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t.site.description,
      images: ["/og.jpg"],
    },
    // The site is static and sets no cookies, so there is nothing here to keep
    // out of an index. Everything is meant to be findable - a privacy policy a
    // store reviewer cannot reach is a rejected listing.
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#06070d",
  colorScheme: "dark",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const locale = await getLocale();
  const t = dictionaries[locale];

  return (
    <html
      lang={localeInfo[locale].tag}
      className={fontClasses}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: markScripted }} />
      </head>
      <body className="grain flex min-h-full flex-col font-sans">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:border focus:border-line-2 focus:bg-panel-solid focus:px-4 focus:py-2 focus:font-bold"
        >
          {t.site.skip}
        </a>
        <LanguageSuggestion
          current={locale}
          offers={
            Object.fromEntries(locales.map((l) => [l, dictionaries[l].suggest])) as Record<
              Locale,
              Dictionary["suggest"]
            >
          }
        />
        <SiteHeader locale={locale} />
        <div id="content" className="flex flex-1 flex-col">
          {children}
        </div>
        <SiteFooter locale={locale} />
        <Reveal />
      </body>
    </html>
  );
}
