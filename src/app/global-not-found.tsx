import type { Metadata, Viewport } from "next";
import { NotFoundBody } from "@/components/NotFoundBody";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { dictionaries } from "@/i18n/dictionaries";
import { defaultLocale, localeInfo } from "@/i18n/locales";
import { site } from "@/lib/site";
import { fontClasses, markScripted } from "./fonts";
import "./globals.css";

/*
 * The 404 for an address no route matches at all (`/nope`, `/es/nope`, `/xx`).
 *
 * The root layout lives under `[lang]`, so an unmatched address has no layout to render in;
 * this file draws the whole document instead. It is static and cannot see the address it is
 * answering, so it is in English, the language every unprefixed address is in, with the
 * language menu in the header for anyone who came from another.
 */
const t = dictionaries[defaultLocale];

export const metadata: Metadata = {
  title: `${t.notFound.meta} - ${site.company}`,
  robots: { index: false, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06070d",
  colorScheme: "dark",
};

export default function GlobalNotFound() {
  return (
    <html lang={localeInfo[defaultLocale].tag} className={fontClasses} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: markScripted }} />
      </head>
      <body className="grain flex min-h-full flex-col font-sans">
        <SiteHeader locale={defaultLocale} />
        <div id="content" className="flex flex-1 flex-col">
          <NotFoundBody locale={defaultLocale} />
        </div>
        <SiteFooter locale={defaultLocale} />
      </body>
    </html>
  );
}
