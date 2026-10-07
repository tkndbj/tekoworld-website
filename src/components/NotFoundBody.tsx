import Link from "next/link";
import { dictionaries } from "@/i18n/dictionaries";
import { localePath, type Locale } from "@/i18n/locales";
import { gemfire } from "@/lib/site";

/**
 * The 404 page's content. Takes the locale as a prop rather than reading the route, because
 * the global 404 (an address that matched no route at all) has no `[lang]` to read.
 */
export function NotFoundBody({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].notFound;

  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-5 py-28 text-center">
      <div aria-hidden className="grid-floor" />
      <div
        aria-hidden
        className="orb"
        style={{ "--x": "50%", "--y": "40%", "--c": "var(--violet)", "--s": "50rem" } as React.CSSProperties}
      />

      <p className="kicker relative">{t.kicker}</p>
      <h1 className="font-display relative mt-5 text-[6rem] font-bold leading-none sm:text-[9rem]">
        <span className="text-gem">4</span>
        <span className="text-fire">0</span>
        <span className="text-gem">4</span>
      </h1>
      <h2 className="relative mt-4 text-2xl sm:text-3xl">{t.title}</h2>
      <p className="relative mt-4 max-w-md text-lg leading-relaxed text-ink-2">{t.body}</p>
      <div className="relative mt-9 flex flex-wrap justify-center gap-3">
        <Link href={localePath(locale, "/")} className="btn btn-fire">
          {t.home}
        </Link>
        <Link href={localePath(locale, gemfire.path)} className="btn">
          {t.game}
        </Link>
      </div>
    </main>
  );
}
