import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import { fontClasses } from "../fonts";
import "../globals.css";

/*
 * The admin pages' own root layout.
 *
 * Outside `[lang]` on purpose: these pages are for the owner, in English, and must not pick up
 * the public site's chrome, its language suggestions or its sitemap. A static `admin` segment
 * matches before the `[lang]` rewrites in `next.config.ts` run, so `/admin/shop` is served
 * from here rather than rewritten to `/en/admin/shop`.
 *
 * Never indexed (here and in `robots.ts`). Not a secret either - the page is useless to anyone
 * but the three accounts the server lets through.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `Admin - ${site.company}`, template: `%s - ${site.company} admin` },
  robots: { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  themeColor: "#06070d",
  colorScheme: "dark",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontClasses}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
