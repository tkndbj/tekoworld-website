import Link from "next/link";
import { formatDate, gemfire, site } from "@/lib/site";
import { Mark, Wordmark } from "@/components/ui/Wordmark";
import { MobileNav } from "@/components/ui/MobileNav";
import { LanguageMenu } from "@/components/ui/LanguageMenu";
import { dictionaries, type Dictionary } from "@/i18n/dictionaries";
import { defaultLocale, localeInfo, localePath, type Locale } from "@/i18n/locales";
import { getText } from "@/i18n/server";

function nav(t: Dictionary, locale: Locale) {
  return [
    { href: localePath(locale, "/#games"), label: t.nav.games },
    { href: localePath(locale, gemfire.path), label: gemfire.name },
    { href: localePath(locale, "/#studio"), label: t.nav.studio },
    { href: localePath(locale, "/support"), label: t.nav.support },
  ];
}

function legal(t: Dictionary, locale: Locale) {
  return [
    { href: localePath(locale, "/privacy"), label: t.nav.privacy },
    { href: localePath(locale, "/terms"), label: t.nav.terms },
    { href: localePath(locale, "/delete-account"), label: t.nav.deleteData },
  ];
}

/**
 * Header and footer take the locale as a prop rather than reading the route, because the
 * global 404 (an address that matched no route, so has no `[lang]`) draws them too.
 */
export function SiteHeader({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const NAV = nav(t, locale);
  const LEGAL = legal(t, locale);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--grad-edge)" }}
      />
      <nav
        aria-label={t.nav.main}
        className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6"
      >
        <Link href={localePath(locale, "/")} className="shrink-0" aria-label={t.nav.home}>
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

        <div className="hidden lg:block">
          <LanguageMenu current={locale} label={t.nav.language} />
        </div>

        <Link
          href={localePath(locale, `${gemfire.path}#get`)}
          className="btn btn-fire btn-sm ml-auto hidden xs:inline-flex lg:ml-0"
        >
          {t.nav.play}
        </Link>

        <MobileNav
          items={[...NAV, ...LEGAL]}
          current={locale}
          words={{
            menu: t.nav.menu,
            open: t.nav.openMenu,
            close: t.nav.closeMenu,
            language: t.nav.language,
          }}
        />
      </nav>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const NAV = nav(t, locale);
  const LEGAL = legal(t, locale);

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line">
      <div className="orb" style={{ "--x": "10%", "--y": "120%", "--c": "var(--violet)", "--s": "50rem" } as React.CSSProperties} />
      <div className="orb" style={{ "--x": "90%", "--y": "110%", "--c": "var(--ember)", "--s": "44rem" } as React.CSSProperties} />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">
          <div>
            <Wordmark id="ftr" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-2">{t.footer.blurb}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div>
            <h2 className="kicker mb-4 text-ink-3">{t.footer.studio}</h2>
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
            <h2 className="kicker mb-4 text-ink-3">{t.footer.smallPrint}</h2>
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
              {/*
                Credits and app-ads.txt sit here rather than in LEGAL, which is spread into
                the mobile menu as well as the footer. Neither is something a player is
                looking for: the credits list is a courtesy no licence obliges us to publish,
                and putting it two taps from the front page would give it more prominence
                than the games have.
              */}
              <li>
                <Link
                  href={localePath(locale, "/credits")}
                  className="font-medium text-ink-2 transition-colors hover:text-ink"
                >
                  {t.nav.credits}
                </Link>
              </li>
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

          <div>
            <h2 className="kicker mb-4 text-ink-3">{t.nav.language}</h2>
            <LanguageMenu current={locale} label={t.nav.language} variant="list" />
          </div>
        </div>

        <div className="rule mt-14" />
        <div className="mt-6 flex flex-col gap-3 text-xs text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright(new Date().getFullYear())}</p>
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
export async function LegalPage({
  title,
  intro,
  path,
  children,
}: {
  title: string;
  intro?: string;
  /** The page's locale-free address, for the link to the English original. */
  path: string;
  children: React.ReactNode;
}) {
  const { locale, t } = await getText();

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
            {t.legal.lastUpdated} {formatDate(site.updated, localeInfo[locale].tag)}
          </p>
          {intro ? (
            <p className="mt-6 text-lg leading-relaxed text-ink-2">{intro}</p>
          ) : null}
          {/*
            A translated policy says that it is one, and points at the original. The policies
            are legal documents written in English; a translation is there to be understood,
            and where the two differ the English text is the one that was agreed.
          */}
          {locale !== defaultLocale ? (
            <p className="mt-6 border-l-2 border-line-2 pl-4 text-sm leading-relaxed text-ink-3">
              {t.legal.translated}{" "}
              <a
                href={localePath(defaultLocale, path)}
                hrefLang={localeInfo[defaultLocale].tag}
                className="text-cyan underline underline-offset-4"
              >
                {t.legal.original}
              </a>
            </p>
          ) : null}
        </header>
        <div className="prose-legal mt-10">{children}</div>
      </div>
    </main>
  );
}

/** A short, plain-words box at the top of a long document. */
export async function Summary({ children }: { children: React.ReactNode }) {
  const { t } = await getText();

  return (
    <aside className="panel panel-sm panel-glow not-prose p-6">
      <p className="kicker mb-3">{t.legal.inShort}</p>
      <div className="text-[0.95rem] leading-relaxed text-ink-2">{children}</div>
    </aside>
  );
}
