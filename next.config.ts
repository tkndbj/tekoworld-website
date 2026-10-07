import type { NextConfig } from "next";
import { defaultLocale, locales } from "./src/i18n/locales";

/*
 * Every page lives under `src/app/[lang]`, and English is served without the prefix.
 *
 * The English addresses (/privacy, /terms, /support, /delete-account, /gemfire) are written
 * into both store listings, the AdMob consent message and the game binary, so they must keep
 * answering 200 at exactly those paths: no redirect, which a crawler or a store review may
 * not follow. A rewrite maps them onto `/en/...` inside the server; the reader never sees it.
 *
 * Rewrites returned as an array run after public files and static routes (app-ads.txt,
 * sitemap.xml, the icons) and before dynamic ones, which is the order wanted here. The
 * internal `/en/...` spelling redirects back to the public one, so English has exactly one
 * address per page.
 */
const others = locales.filter((l) => l !== defaultLocale).join("|");

const nextConfig: NextConfig = {
  experimental: {
    // An unmatched address has no `[lang]` and so no root layout; app/global-not-found.tsx
    // draws the whole 404 document instead of Next's unstyled default.
    globalNotFound: true,
  },
  async rewrites() {
    return [
      { source: "/", destination: `/${defaultLocale}` },
      {
        source: `/:path((?!(?:${others}|${defaultLocale})(?:/|$)).+)`,
        destination: `/${defaultLocale}/:path`,
      },
    ];
  },
  async redirects() {
    return [
      { source: `/${defaultLocale}`, destination: "/", permanent: true },
      { source: `/${defaultLocale}/:path*`, destination: "/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
