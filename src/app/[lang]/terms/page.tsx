import type { Metadata } from "next";
import { DocPage, docMetadata } from "@/i18n/legal";

/** The text, in every language, lives in src/i18n/legal/terms/. */
export function generateMetadata(): Promise<Metadata> {
  return docMetadata("terms", "/terms");
}

export default function Page() {
  return <DocPage name="terms" path="/terms" />;
}
