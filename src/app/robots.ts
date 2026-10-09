import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Everything is indexable on purpose. A privacy policy a reviewer or a regulator cannot
 * find is the same as not having one, and app-ads.txt must be fetchable by ad exchanges.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    // The admin pages are the one exception: they are the owner's, and say `noindex` too.
    rules: { userAgent: "*", allow: "/", disallow: "/admin" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
