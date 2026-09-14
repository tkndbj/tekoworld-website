import Image from "next/image";
import cover from "../../../public/gemfire/cover-sm.webp";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { gemfire } from "@/lib/site";

/** The closing call to action, on the key art. */
export function GetIt() {
  return (
    <section id="get" className="relative scroll-mt-20 overflow-hidden pb-28 sm:pb-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal panel panel-glow relative overflow-hidden">
          <Image
            src={cover}
            alt=""
            aria-hidden
            fill
            sizes="(min-width: 1280px) 80rem, 100vw"
            className="object-cover object-center opacity-40"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(6,7,13,0.95) 0%, rgba(6,7,13,0.75) 50%, rgba(6,7,13,0.4) 100%)",
            }}
          />
          <div className="relative px-6 py-16 sm:px-12 sm:py-24">
            <p className="kicker">Get the game</p>
            <h2 className="font-display mt-4 text-5xl font-bold uppercase tracking-[0.04em] sm:text-7xl">
              <span className="text-gem">Gem</span>
              <span className="text-fire">fire</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-2">
              {gemfire.pitch} Free on Android and iOS.
            </p>
            <StoreButtons className="mt-8" size="btn-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
