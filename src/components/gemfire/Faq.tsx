import { Rich } from "@/i18n/rich";
import { getText } from "@/i18n/server";

/** The short answers. Native disclosure elements: no script, keyboard-operable by default. */
export async function Faq() {
  const { locale, t } = await getText();
  const f = t.gemfire.faq;

  return (
    <section id="faq" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal">
            <p className="kicker">{f.kicker}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              <Rich value={f.title} locale={locale} hl="text-gem" />
            </h2>
            <p className="mt-5 text-ink-2">
              <Rich value={f.body} locale={locale} link="text-cyan underline underline-offset-4" />
            </p>
          </div>

          <div className="space-y-3">
            {f.items.map((item, i) => (
              <details
                key={item.q}
                className="reveal group panel panel-sm"
                style={{ "--delay": `${i * 60}ms` } as React.CSSProperties}
              >
                <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-lg font-semibold marker:content-none">
                  {item.q}
                  <span
                    aria-hidden
                    className="tile h-8 w-8 shrink-0 transition-transform group-open:rotate-45"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14">
                      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="border-t border-line px-5 py-4 text-[0.95rem] leading-relaxed text-ink-2">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
