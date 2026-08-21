import Link from "next/link";
import { site } from "@/lib/site";
import { Wordmark } from "@/components/ui/Wordmark";
import { MobileNav } from "@/components/ui/MobileNav";

const NAV = [
  { href: "/#play", label: "Play a glade" },
  { href: "/#companions", label: "Companions" },
  { href: "/#grove", label: "Your grove" },
  { href: "/support", label: "Support" },
] as const;

const LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/delete-account", label: "Delete your data" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-line bg-paper/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${site.game} home`}
        >
          <Wordmark className="h-9 w-9" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-tight">
              {site.game}
            </span>
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-ink-3">
              by {site.publisher}
            </span>
          </span>
        </Link>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-bold text-ink-2 transition-colors hover:bg-panel hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/#get" className="btn btn-primary btn-sm ml-auto lg:ml-2">
          Get the game
        </Link>

        <MobileNav items={[...NAV, ...LEGAL]} />
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-2 border-line bg-panel-2">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Wordmark className="h-9 w-9" />
              <span className="font-display text-lg font-extrabold">
                {site.game}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-2">
              A cosy light-puzzle about waking a forest one glade at a time,
              made and published by {site.publisher}.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-sm font-extrabold uppercase tracking-wide text-ink-3">
              The game
            </h2>
            <ul className="space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-semibold text-ink-2 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-display text-sm font-extrabold uppercase tracking-wide text-ink-3">
              The small print
            </h2>
            <ul className="space-y-2 text-sm">
              {LEGAL.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-semibold text-ink-2 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-ink-2 hover:text-ink"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t-2 border-line pt-6 text-sm text-ink-3">
          <p>
            © {new Date().getFullYear()} {site.entity}, trading as{" "}
            {site.publisher}. {site.game} and its artwork are the property of
            their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * The shell every policy page uses: a title, the date it was last changed, and
 * a measure that keeps long text readable. The date is not decoration — a
 * policy without a visible revision date is one a reader cannot tell has
 * changed.
 */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-6">
      <header className="border-b-2 border-line pb-8">
        <h1 className="text-3xl sm:text-4xl">{title}</h1>
        <p className="mt-3 inline-flex items-center gap-2 rounded-full border-2 border-line bg-panel px-3 py-1 text-sm font-bold text-ink-3">
          <span className="h-2 w-2 rotate-45 rounded-[2px] bg-grass" />
          Last updated {site.updated}
        </p>
        {intro ? (
          <p className="mt-6 text-lg leading-relaxed text-ink-2">{intro}</p>
        ) : null}
      </header>
      <div className="prose-legal mt-10">{children}</div>
    </main>
  );
}

/** A short, plain-words box at the top of a long document. */
export function Summary({ children }: { children: React.ReactNode }) {
  return (
    <aside className="slab not-prose bg-panel-2 p-5">
      <p className="mb-2 font-display text-sm font-extrabold uppercase tracking-wide text-leaf">
        In short
      </p>
      <div className="text-[0.95rem] leading-relaxed text-ink-2">{children}</div>
    </aside>
  );
}
