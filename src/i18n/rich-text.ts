/**
 * A sentence with a little markup in it, kept as data so a translation can move the
 * highlighted word wherever its own grammar puts it.
 *
 * "One title. All in." highlights its second half in English; in Turkish the highlighted
 * word may come first. Splitting a heading into fixed `before` / `highlight` / `after`
 * slots would force English word order on every language, so a translation lists its own
 * segments instead:
 *
 *   rich("We make games", "\n", "with ", { hl: "fire" }, " in them.")
 *
 * "\n" is a line break. `link` hrefs are locale-free ("/support") and are localised when
 * rendered (`Rich` in rich.tsx).
 */
export type RichPart = string | { hl: string } | { b: string } | { link: string; href: string };

export type RichText = readonly RichPart[];

export function rich(...parts: RichPart[]): RichText {
  return parts;
}

/** The same sentence as plain text, for metadata and structured data. */
export function plain(value: RichText): string {
  return value
    .map((part) =>
      typeof part === "string"
        ? part === "\n"
          ? " "
          : part
        : "hl" in part
          ? part.hl
          : "b" in part
            ? part.b
            : part.link
    )
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}
