import type { MetadataRoute } from "next";
import { languageAlternates, localePath, locales } from "@/i18n/locales";
import { gemfire, site } from "@/lib/site";

/**
 * Small and hand-listed rather than generated from the filesystem: six pages that change
 * rarely, and a store reviewer following a link is the only crawler that really matters.
 * Each page is listed once per language, and each entry names all its translations so a
 * search engine shows a reader the one in their language.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(`${site.updated}T00:00:00Z`);
  const paths = ["/", gemfire.path, "/support", "/privacy", "/terms", "/delete-account"];
  const absolute = (alternates: Record<string, string>) =>
    Object.fromEntries(
      Object.entries(alternates).map(([tag, path]) => [tag, `${site.url}${path === "/" ? "" : path}`])
    );

  return paths.flatMap((path) =>
    locales.map((locale) => {
      const href = localePath(locale, path);
      return {
        url: `${site.url}${href === "/" ? "" : href}`,
        lastModified: updated,
        changeFrequency: "monthly" as const,
        priority: path === "/" || path === gemfire.path ? 1 : 0.7,
        alternates: { languages: absolute(languageAlternates(path)) },
      };
    })
  );
}
