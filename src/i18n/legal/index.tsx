import type { Metadata } from "next";
import { LegalPage } from "@/components/SiteChrome";
import type { Locale } from "@/i18n/locales";
import { pageAlternates, pageOpenGraph } from "@/i18n/metadata";
import { getLocale } from "@/i18n/server";
import type { LegalDoc, LegalDocModule } from "@/i18n/legal/types";

/**
 * Every policy page in every language. A `Record<Locale, ...>` per document, so a language
 * added to `locales.ts` without its translation of each document does not build.
 */
const documents = {
  "privacy": {
    en: () => import("./privacy/en"),
    es: () => import("./privacy/es"),
    pt: () => import("./privacy/pt"),
    fr: () => import("./privacy/fr"),
    de: () => import("./privacy/de"),
    it: () => import("./privacy/it"),
    tr: () => import("./privacy/tr"),
    pl: () => import("./privacy/pl"),
  },
  "terms": {
    en: () => import("./terms/en"),
    es: () => import("./terms/es"),
    pt: () => import("./terms/pt"),
    fr: () => import("./terms/fr"),
    de: () => import("./terms/de"),
    it: () => import("./terms/it"),
    tr: () => import("./terms/tr"),
    pl: () => import("./terms/pl"),
  },
  "support": {
    en: () => import("./support/en"),
    es: () => import("./support/es"),
    pt: () => import("./support/pt"),
    fr: () => import("./support/fr"),
    de: () => import("./support/de"),
    it: () => import("./support/it"),
    tr: () => import("./support/tr"),
    pl: () => import("./support/pl"),
  },
  "delete-account": {
    en: () => import("./delete-account/en"),
    es: () => import("./delete-account/es"),
    pt: () => import("./delete-account/pt"),
    fr: () => import("./delete-account/fr"),
    de: () => import("./delete-account/de"),
    it: () => import("./delete-account/it"),
    tr: () => import("./delete-account/tr"),
    pl: () => import("./delete-account/pl"),
  },
  "credits": {
    en: () => import("./credits/en"),
    es: () => import("./credits/es"),
    pt: () => import("./credits/pt"),
    fr: () => import("./credits/fr"),
    de: () => import("./credits/de"),
    it: () => import("./credits/it"),
    tr: () => import("./credits/tr"),
    pl: () => import("./credits/pl"),
  },
} satisfies Record<string, Record<Locale, () => Promise<LegalDocModule>>>;

export type DocName = keyof typeof documents;

export async function loadDoc(name: DocName, locale: Locale): Promise<LegalDoc> {
  return (await documents[name][locale]()).default;
}

/** The metadata for a policy page: its own title, description and canonical address. */
export async function docMetadata(
  name: DocName,
  path: string,
  extra: Metadata = {}
): Promise<Metadata> {
  const locale = await getLocale();
  const doc = await loadDoc(name, locale);
  return {
    title: doc.title,
    description: doc.description,
    alternates: pageAlternates(locale, path),
    openGraph: {
      ...pageOpenGraph(locale, path),
      title: doc.title,
      description: doc.description,
      images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    },
    ...extra,
  };
}

/** A policy page: the shared shell around one document in the reader's language. */
export async function DocPage({ name, path }: { name: DocName; path: string }) {
  const locale = await getLocale();
  const doc = await loadDoc(name, locale);
  return (
    <LegalPage title={doc.title} intro={doc.intro} path={path}>
      <doc.Body />
    </LegalPage>
  );
}
