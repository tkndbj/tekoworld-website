import Link from "next/link";
import { site } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

function Leaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20 3c0 9-5.4 14-11 14a6.6 6.6 0 0 1-3.6-1C7 11.6 11.4 8.3 17 7.2c-5.9.3-10.2 3.2-12 8.4C3.4 12.9 3 10.6 3.4 8.6 4.3 4.6 9.3 3 20 3Z" />
      <path d="M4 21c.9-2.6 2.2-4.8 3.9-6.7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-10">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4"
      >
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Leaf className="h-5 w-5 text-accent" />
          {site.game}
        </Link>
        <ul className="ml-auto flex items-center gap-5 text-sm">
          {NAV.slice(1).map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-muted hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-3xl px-5 py-10 text-sm text-muted">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/delete-account" className="hover:text-foreground">
              Delete your data
            </Link>
          </li>
        </ul>
        <p className="mt-6">
          © {new Date().getFullYear()} {site.entity}. {site.game} and its artwork are the
          property of their respective owners.
        </p>
        <p className="mt-2">
          Questions?{" "}
          <a href={`mailto:${site.email}`} className="text-accent underline underline-offset-2">
            {site.email}
          </a>
        </p>
      </div>
    </footer>
  );
}

/**
 * The shell every policy page uses: a title, the date it was last changed, and a measure
 * that keeps long text readable. The date is not decoration — a policy without a visible
 * revision date is one a reader cannot tell has changed.
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
    <main className="mx-auto w-full max-w-3xl px-5 py-14">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-muted">Last updated {site.updated}</p>
      {intro ? <p className="mt-6 text-lg text-muted">{intro}</p> : null}
      <div className="prose-legal mt-10">{children}</div>
    </main>
  );
}

/** A short, plain-words box at the top of a long document. */
export function Summary({ children }: { children: React.ReactNode }) {
  return (
    <aside className="rounded-xl border border-border bg-accent-soft p-5 not-prose">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
        In short
      </p>
      <div className="text-[0.95rem] leading-relaxed">{children}</div>
    </aside>
  );
}
