import Image from "next/image";
import banner from "../../../public/balance-buddies/banner.webp";
import { Tilt } from "@/components/ui/Tilt";
import { getText } from "@/i18n/server";

/** The key art, full width on its own sky: the buddies are the game's mascots and its weights. */
export async function Showcase() {
  const { t } = await getText();

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Tilt className="reveal" max={4}>
          <div className="sky-panel">
            <span className="tilt-light" />
            <Image
              src={banner}
              alt={t.balanceBuddies.hero.bannerAlt}
              sizes="(min-width: 1280px) 80rem, 100vw"
              className="block h-auto w-full"
            />
          </div>
        </Tilt>
      </div>
    </section>
  );
}
