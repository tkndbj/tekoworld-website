import type { ReactNode } from "react";

/**
 * One policy page in one language.
 *
 * A policy is translated as a whole document rather than key by key: legal sentences do not
 * survive being cut into fragments and reassembled in another word order, and a reviewer has
 * to be able to read one file top to bottom and compare it with the English one.
 */
export type LegalDoc = {
  /** The page heading, and the browser title. */
  title: string;
  /** The search-result description. */
  description: string;
  /** The line under the heading. */
  intro: string;
  Body: () => ReactNode;
};

export type LegalDocModule = { default: LegalDoc };
