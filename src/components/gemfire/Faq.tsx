import Link from "next/link";
import { faq } from "@/lib/content";

/** The short answers. Native disclosure elements: no script, keyboard-operable by default. */
export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="reveal">
            <p className="kicker">Questions</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              The short <span className="text-gem">answers.</span>
            </h2>
            <p className="mt-5 text-ink-2">
              The longer ones, and the ones about purchases and accounts, are on
              the <Link href="/support" className="text-cyan underline underline-offset-4">support page</Link>.
            </p>
          </div>

          <div className="space-y-3">
            {faq.map((item, i) => (
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
