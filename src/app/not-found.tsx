import Link from "next/link";
import { Fireflies } from "@/components/ui/Fireflies";
import { CritterSprite } from "@/components/ui/Critter";
import { critters } from "@/lib/content";

/* eslint-disable @next/next/no-img-element */

const cap = critters.find((c) => c.id === "cap")!;

export default function NotFound() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-5 py-24 text-center">
      <Fireflies className="-z-10" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 45% at 50% 42%, var(--glow) 0%, transparent 70%)",
        }}
      />

      <div aria-hidden className="relative mb-2 flex items-end justify-center gap-1">
        <img
          src="/art/tiles/pine-a.webp"
          alt=""
          width={195}
          height={313}
          className="anim-sway h-28 w-auto opacity-70"
        />
        <span className="anim-bob block">
          <CritterSprite critter={cap} height="6rem" />
        </span>
        <img
          src="/art/tiles/pine-b.webp"
          alt=""
          width={157}
          height={253}
          className="anim-sway h-24 w-auto opacity-70"
        />
      </div>
      <img
        aria-hidden
        src="/art/tiles/grass-a.webp"
        alt=""
        width={270}
        height={243}
        className="-mt-2 h-24 w-auto"
      />

      <h1 className="mt-8 text-4xl sm:text-5xl">This glade is dark</h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-2">
        There is nothing at that address. Cap has looked, and Cap is very
        thorough about this sort of thing.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          Back to the grove
        </Link>
        <Link href="/support" className="btn">
          Get help
        </Link>
      </div>
    </main>
  );
}
