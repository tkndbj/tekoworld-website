import type { Metadata } from "next";
import { DocPage, docMetadata } from "@/i18n/legal";

/** The text, in every language, lives in src/i18n/legal/delete-account/. */
export function generateMetadata(): Promise<Metadata> {
  return docMetadata("delete-account", "/delete-account");
}

export default function Page() {
  return <DocPage name="delete-account" path="/delete-account" />;
}
