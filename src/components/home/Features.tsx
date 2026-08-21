import { features } from "@/lib/content";

/* eslint-disable @next/next/no-img-element */

export function Features() {
  return (
    <section className="reveal mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl">Small game, stubborn principles</h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-2">
          It is a puzzle game about light and a village you tend between runs.
          Here is what it will and will not do to you.
        </p>
      </div>

      <ul className="grid gap-5 sm:grid-cols-2">
        {features.map((f) => (
          <li key={f.title} className="slab slab-lift p-6 sm:p-7">
            <span
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2"
              style={{
                background: `color-mix(in srgb, ${f.accent} 16%, var(--panel))`,
                borderColor: `color-mix(in srgb, ${f.accent} 45%, var(--line))`,
              }}
            >
              <img
                src={`/art/icons/${f.icon}.webp`}
                alt=""
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-8 w-8 object-contain"
              />
            </span>
            <h3 className="text-xl">{f.title}</h3>
            <p className="mt-2.5 leading-relaxed text-ink-2">{f.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
