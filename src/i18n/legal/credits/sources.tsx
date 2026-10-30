import { CreditSource } from "@/components/CreditSource";

/**
 * Who made what is in the games. Names and links are the same in every language; what each
 * supplier's work is used for is written by each translation, per game (`Used`,
 * `BuddiesUsed`), and the types make a supplier listed for a game and not described in one
 * language fail the build.
 */
export const sources = {
  craftpix: { name: "CraftPix", href: "https://craftpix.net/" },
  layerlab: { name: "Layer Lab", href: "https://assetstore.unity.com/publishers/38912" },
  envato: { name: "Envato — GraphicRiver", href: "https://graphicriver.net/" },
  kaykit: { name: "KayKit, by Kay Lousberg", href: "https://kaylousberg.itch.io/" },
  gameburp: { name: "GameBurp — 2000 Game Sound FX Collection" },
  rpgmagic: { name: "RPG Magic Sound Effects Pack" },
  craftpixMusic: { name: "CraftPix", href: "https://craftpix.net/" },
  titan: { name: "Titan One, by Rodrigo Fuenzalida", href: "https://fonts.google.com/specimen/Titan+One" },
  lilita: { name: "Lilita One, by Juan Montoreano", href: "https://fonts.google.com/specimen/Lilita+One" },
} as const satisfies Record<string, { name: string; href?: string }>;

export type SourceId = keyof typeof sources;

/** Gemfire's suppliers, by section. */
export const sections = {
  art: ["craftpix", "layerlab", "envato", "kaykit"],
  sound: ["gameburp", "rpgmagic", "craftpixMusic"],
  type: ["titan"],
} as const satisfies Record<string, readonly SourceId[]>;

/** Balance Buddies' suppliers, by section. */
export const buddiesSections = {
  art: ["craftpix", "envato"],
  sound: ["gameburp"],
  type: ["lilita"],
} as const satisfies Record<string, readonly SourceId[]>;

export type Used = Record<(typeof sections)[keyof typeof sections][number], string>;

export type BuddiesUsed = Record<(typeof buddiesSections)[keyof typeof buddiesSections][number], string>;

export function Sources<T extends SourceId>({ ids, used }: { ids: readonly T[]; used: Record<T, string> }) {
  return (
    <ul className="not-prose">
      {ids.map((id) => {
        const s: { name: string; href?: string } = sources[id];
        return <CreditSource key={id} name={s.name} href={s.href} used={used[id]} />;
      })}
    </ul>
  );
}
