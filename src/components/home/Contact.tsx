import Link from "next/link";
import { Rich } from "@/i18n/rich";
import { localePath } from "@/i18n/locales";
import { getText } from "@/i18n/server";
import { site } from "@/lib/site";

/**
 * The one way to reach the studio. Press, partnership and player support all
 * land in the same inbox on purpose - there is one team, and it reads all of it.
 */
export async function Contact() {
  const { locale, t } = await getText();
  const c = t.home.contact;

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden pb-28 pt-8 sm:pb-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div
          className="reveal panel panel-glow relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <div
            aria-hidden
            className="orb"
            style={{ "--x": "50%", "--y": "50%", "--c": "var(--ember)", "--s": "60rem" } as React.CSSProperties}
          />
          <div
            aria-hidden
            className="orb"
            style={{ "--x": "15%", "--y": "100%", "--c": "var(--cyan)", "--s": "36rem" } as React.CSSProperties}
          />
          <div className="relative">
            <p className="kicker justify-center">{c.kicker}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              <Rich value={c.title} locale={locale} hl="text-gem" />
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-2">{c.body}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="btn btn-fire btn-lg shine"
              >
                {site.email}
              </a>
              <Link href={localePath(locale, "/support")} className="btn btn-lg">
                {c.support}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
