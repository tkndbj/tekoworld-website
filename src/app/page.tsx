import Link from "next/link";
import { site } from "@/lib/site";

function StoreButtons() {
  const { android, ios } = site.stores;

  // Nothing is listed yet, so rather than shipping two dead buttons the page says so. A
  // "Download" that goes nowhere is worse than an honest "coming soon" — and this disappears
  // by itself the moment the URLs are filled in.
  if (!android && !ios) {
    return (
      <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
        <span className="h-2 w-2 rounded-full bg-accent" />
        Coming soon to Android and iOS
      </p>
    );
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {android ? (
        <a
          href={android}
          className="rounded-xl bg-accent px-5 py-3 font-medium text-white hover:opacity-90 dark:text-[#12170f]"
        >
          Get it on Google Play
        </a>
      ) : null}
      {ios ? (
        <a
          href={ios}
          className="rounded-xl border border-border bg-surface px-5 py-3 font-medium hover:border-accent"
        >
          Download on the App Store
        </a>
      ) : null}
    </div>
  );
}

function Feature({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-16">
      <section>
        <p className="text-sm font-medium uppercase tracking-wider text-accent">
          A cosy puzzle game
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {site.game}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          Turn the conduits until the light reaches every sleeping critter. Wake the grove,
          rescue its companions, and build a home for them — one tile at a time.
        </p>
        <StoreButtons />
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-2">
        <Feature title="One idea, many shapes">
          Every glade is the same simple verb — turn a piece, light a path — and no two ask the
          same question. Brittle stone, bound roots, sleeping duskcaps and crossings that carry
          two flows through one tile.
        </Feature>
        <Feature title="No forced adverts">
          Not one advert between levels, ever. Every video in the game is one you choose to
          watch in exchange for something, and the whole game can be finished without seeing a
          single one.
        </Feature>
        <Feature title="A grove of your own">
          Earn companions, buy land, and arrange a village across a field of tiles. It is the
          one part of the game two players at the same progress never share.
        </Feature>
        <Feature title="Plays offline">
          Puzzles work with no connection at all. Sign in only if you want your progress to
          survive a lost phone.
        </Feature>
      </section>

      <section className="mt-16 rounded-xl border border-border bg-surface p-6">
        <h2 className="font-semibold">Need something?</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/support" className="text-accent underline underline-offset-2">
              Support and common questions
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-accent underline underline-offset-2">
              Privacy policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-accent underline underline-offset-2">
              Terms of service
            </Link>
          </li>
          <li>
            <Link href="/delete-account" className="text-accent underline underline-offset-2">
              Delete your account and data
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
