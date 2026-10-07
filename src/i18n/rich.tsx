import Link from "next/link";
import { localePath, type Locale } from "@/i18n/locales";
import type { RichText } from "@/i18n/rich-text";

/** Renders a `RichText` (see rich-text.ts): highlights, bold, line breaks and localised links. */
export function Rich({
  value,
  locale,
  hl = "",
  link = "",
}: {
  value: RichText;
  locale: Locale;
  /** Class for highlighted segments. */
  hl?: string;
  /** Class for links. */
  link?: string;
}) {
  return (
    <>
      {value.map((part, i) => {
        if (typeof part === "string") {
          return part === "\n" ? <br key={i} /> : part;
        }
        if ("hl" in part) {
          return (
            <span key={i} className={hl}>
              {part.hl}
            </span>
          );
        }
        if ("b" in part) return <strong key={i}>{part.b}</strong>;
        return (
          <Link key={i} href={localePath(locale, part.href)} className={link}>
            {part.link}
          </Link>
        );
      })}
    </>
  );
}
