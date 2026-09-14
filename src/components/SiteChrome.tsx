import Link from "next/link";
import { gemfire, site } from "@/lib/site";
import { Mark, Wordmark } from "@/components/ui/Wordmark";
import { MobileNav } from "@/components/ui/MobileNav";

const NAV = [
  { href: "/#games", label: "Games" },
  { href: gemfire.path, label: gemfire.name },
  { href: "/#studio", label: "Studio" },
  { href: "/support", label: "Support" },
] as const;

const LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/delete-account", label: "Delete your data" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--grad-edge)" }}
      />
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6"
      >
        <Link
          href="/"
          className="shrink-0"
          aria-label={`${site.company} home`}
        >
          <Wordmark id="hdr" />
        </Link>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-display px-3.5 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-ink-2 transition-colors hover:text-cyan"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={`${gemfire.path}#get`}
          className="btn btn-fire btn-sm ml-auto hidden xs:inline-flex lg:ml-3"
        >
          Play {gemfire.name}
        </Link>

        <MobileNav items={[...NAV, ...LEGAL]} />
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line">
      <div className="orb" style={{ "--x": "10%", "--y": "120%", "--c": "var(--violet)", "--s": "50rem" } as React.CSSProperties} />
      <div className="orb" style={{ "--x": "90%", "--y": "110%", "--c": "var(--ember)", "--s": "44rem" } as React.CSSProperties} />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Wordmark id="ftr" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-2">
              An independent mobile game studio. We make small, loud games with
              real mechanics under the sparkle, and we publish them ourselves.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div>
            <h2 className="kicker mb-4 text-ink-3">Studio</h2>
            <ul className="space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-medium text-ink-2 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="kicker mb-4 text-ink-3">The small print</h2>
            <ul className="space-y-2.5 text-sm">
              {LEGAL.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-medium text-ink-2 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/app-ads.txt"
                  className="font-medium text-ink-2 transition-colors hover:text-ink"
                >
                  app-ads.txt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule mt-14" />
        <div className="mt-6 flex flex-col gap-3 text-xs text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.entity}, trading as {site.company}.{" "}
            {gemfire.name} and its artwork are the property of {site.company}.
          </p>
          <p className="inline-flex items-center gap-2">
            <Mark className="h-4 w-4" id="ftr-mini" />
            {site.address}
          </p>
        </div>
      </div>
    </footer>
  );
}

/**
 * The shell every policy page uses: a title, the date it was last changed, and
 * a measure that keeps long text readable. The date is not decoration - a
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
    <main className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] overflow-hidden"
      >
        <div className="orb" style={{ "--x": "20%", "--y": "0%", "--c": "var(--cyan)", "--s": "50rem" } as React.CSSProperties} />
        <div className="orb" style={{ "--x": "85%", "--y": "10%", "--c": "var(--violet)", "--s": "40rem" } as React.CSSProperties} />
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
        <header className="border-b border-line pb-10">
          <p className="kicker mb-5">{site.company}</p>
          <h1 className="text-4xl sm:text-5xl">{title}</h1>
          <p className="chip mt-5">
            <span className="chip-dot" />
            Last updated {site.updated}
          </p>
          {intro ? (
            <p className="mt-6 text-lg leading-relaxed text-ink-2">{intro}</p>
          ) : null}
        </header>
        <div className="prose-legal mt-10">{children}</div>
      </div>
    </main>
  );
}

/** A short, plain-words box at the top of a long document. */
export function Summary({ children }: { children: React.ReactNode }) {
  return (
    <aside className="panel panel-sm panel-glow not-prose p-6">
      <p className="kicker mb-3">In short</p>
      <div className="text-[0.95rem] leading-relaxed text-ink-2">{children}</div>
    </aside>
  );
}
