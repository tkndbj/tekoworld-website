import { CreditSource } from "@/components/CreditSource";

/**
 * Who made what is in the game. Names and links are the same in every language; what each
 * supplier's work is used for is written by each translation (`Used`), and the type makes a
 * supplier added here and not described in one language fail the build.
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
} as const satisfies Record<string, { name: string; href?: string }>;

export type SourceId = keyof typeof sources;

export type Used = Record<SourceId, string>;

export const sections = {
  art: ["craftpix", "layerlab", "envato", "kaykit"],
  sound: ["gameburp", "rpgmagic", "craftpixMusic"],
  type: ["titan"],
} as const satisfies Record<string, readonly SourceId[]>;

export function Sources({ ids, used }: { ids: readonly SourceId[]; used: Used }) {
  return (
    <ul className="not-prose">
      {ids.map((id) => {
        const s: { name: string; href?: string } = sources[id];
        return <CreditSource key={id} name={s.name} href={s.href} used={used[id]} />;
      })}
    </ul>
  );
}
