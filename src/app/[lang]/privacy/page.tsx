import type { Metadata } from "next";
import { DocPage, docMetadata } from "@/i18n/legal";

/** The text, in every language, lives in src/i18n/legal/privacy/. */
export function generateMetadata(): Promise<Metadata> {
  return docMetadata("privacy", "/privacy");
}

export default function Page() {
  return <DocPage name="privacy" path="/privacy" />;
}
