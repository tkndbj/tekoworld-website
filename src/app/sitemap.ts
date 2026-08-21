import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Small and hand-listed rather than generated from the filesystem: five pages that change
 * rarely, and a store reviewer following a link is the only crawler that really matters.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date(site.updated);

  return ["", "/support", "/privacy", "/terms", "/delete-account"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: updated,
    changeFrequency: "yearly",
    priority: path === "" ? 1 : 0.7,
  }));
}
