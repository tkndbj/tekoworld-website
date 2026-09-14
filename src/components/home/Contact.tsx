import Link from "next/link";
import { site } from "@/lib/site";

/**
 * The one way to reach the studio. Press, partnership and player support all
 * land in the same inbox on purpose - there is one team, and it reads all of it.
 */
export function Contact() {
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
            <p className="kicker justify-center">Contact</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Say hello. <span className="text-gem">We read everything.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-2">
              Players, press, platforms and partners all reach the same inbox.
              Support questions get an answer within a couple of days.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="btn btn-fire btn-lg shine"
              >
                {site.email}
              </a>
              <Link href="/support" className="btn btn-lg">
                Player support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
