import type { Metadata } from "next";
import { DocPage, docMetadata } from "@/i18n/legal";

/** The text, in every language, lives in src/i18n/legal/credits/. */
export function generateMetadata(): Promise<Metadata> {
  // Deliberately kept out of the search index and out of the sitemap. None of these
  // licences requires this page to exist - it is a courtesy, and a courtesy that ranks
  // above the game itself would be a strange thing to have published.
  return docMetadata("credits", "/credits", { robots: { index: false, follow: true } });
}

export default function Page() {
  return <DocPage name="credits" path="/credits" />;
}
