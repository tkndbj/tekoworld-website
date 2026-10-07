import type { Metadata } from "next";
import { DocPage, docMetadata } from "@/i18n/legal";

/** The text, in every language, lives in src/i18n/legal/support/. */
export function generateMetadata(): Promise<Metadata> {
  return docMetadata("support", "/support");
}

export default function Page() {
  return <DocPage name="support" path="/support" />;
}
