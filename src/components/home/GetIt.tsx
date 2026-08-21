import Link from "next/link";
import { faq } from "@/lib/content";
import { site } from "@/lib/site";
import { StoreButtons } from "@/components/ui/StoreButtons";
import { Fireflies } from "@/components/ui/Fireflies";

/* eslint-disable @next/next/no-img-element */

export function GetIt() {
  return (
    <section
      id="get"
      className="reveal relative overflow-hidden border-t-2 border-line py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, var(--glow) 0%, transparent 70%)",
        }}
      />
      <Fireflies className="-z-10" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <img
            src="/art/tiles/coins.webp"
            alt=""
            width={161}
            height={158}
            loading="lazy"
            decoding="async"
            className="anim-bob mx-auto mb-6 h-20 w-auto"
          />
          <h2 className="text-3xl sm:text-4xl">Come and wake the grove</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-2">
            Free, offline, and free of adverts you did not ask for. Build a
            village for a crowd of small creatures who will never thank you for
            it.
          </p>
          <StoreButtons className="mt-8 flex justify-center" />
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="mb-6 text-center text-2xl">Before you ask</h3>
          <ul className="space-y-3">
            {faq.map((item) => (
              <li key={item.q} className="slab p-0">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-lg font-extrabold">
                    {item.q}
                    <span
                      aria-hidden
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-line bg-panel-2 transition-transform group-open:rotate-45"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14">
                        <path
                          d="M7 2v10M2 7h10"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="border-t-2 border-line px-5 py-4 leading-relaxed text-ink-2">
                    {item.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-ink-2">
            Anything else at all —{" "}
            <Link
              href="/support"
              className="font-bold text-leaf underline decoration-2 underline-offset-4"
            >
              the support page
            </Link>{" "}
            or{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-bold text-leaf underline decoration-2 underline-offset-4"
            >
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
