import type { MetadataRoute } from "next";
import { gemfire, site } from "@/lib/site";

/**
 * Small and hand-listed rather than generated from the filesystem: six pages that change
 * rarely, and a store reviewer following a link is the only crawler that really matters.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(site.updated);

  return ["", gemfire.path, "/support", "/privacy", "/terms", "/delete-account"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: path === "" || path === gemfire.path ? 1 : 0.7,
    })
  );
}
