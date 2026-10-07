import type { Locale } from "@/i18n/locales";
import en, { type Dictionary } from "./en";
import es from "./es";
import pt from "./pt";
import fr from "./fr";
import de from "./de";
import it from "./it";
import tr from "./tr";
import pl from "./pl";

export type { Dictionary };

/**
 * Every language's dictionary. A `Record<Locale, Dictionary>`, so a language listed in
 * `locales.ts` without a dictionary, or a dictionary missing a key, does not build.
 */
export const dictionaries: Record<Locale, Dictionary> = { en, es, pt, fr, de, it, tr, pl };
