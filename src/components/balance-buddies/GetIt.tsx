import Image from "next/image";
import banner from "../../../public/balance-buddies/banner-sm.webp";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { getText } from "@/i18n/server";
import { balanceBuddies } from "@/lib/site";

/** The closing call to action: the buddies on their sky, the name and the store buttons beside them. */
export async function GetIt() {
  const { t } = await getText();
  const b = t.balanceBuddies;

  return (
    <section id="get" className="relative scroll-mt-20 overflow-hidden pb-28 sm:pb-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="reveal sky-panel grid items-center lg:grid-cols-[1fr_1fr]">
          <div className="relative order-2 px-6 py-12 sm:px-12 sm:py-16 lg:order-1">
            <p className="kicker" style={{ color: "#0d2b55" }}>
              {b.getIt.kicker}
            </p>
            <h2 className="font-buddies text-buddies mt-4 text-5xl sm:text-7xl">{balanceBuddies.name}</h2>
            <p className="mt-4 max-w-md text-lg font-medium text-[#0d2b55]">
              {b.pitch} {b.getIt.free}
            </p>
            <StoreButtons game={balanceBuddies} className="mt-8" size="btn-lg" />
          </div>
          <div className="relative order-1 aspect-[16/9] lg:order-2 lg:aspect-auto lg:h-full">
            <Image
              src={banner}
              alt=""
              aria-hidden
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="object-cover object-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
