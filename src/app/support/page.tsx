import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/SiteChrome";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Help with ${site.game} - lost progress, purchases, adverts and accounts.`,
};

function Question({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group slab not-prose mb-3 p-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display font-extrabold marker:content-none">
        {q}
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
      <div className="prose-legal border-t-2 border-line px-5 py-4 text-[0.95rem]">
        {children}
      </div>
    </details>
  );
}

export default function Support() {
  return (
    <LegalPage
      title="Support"
      intro="Something not working? Write to us - a real person reads it."
    >
      <p className="not-prose mb-10">
        <a href={mailto("Support")} className="btn btn-primary no-underline">
          Email {site.email}
        </a>
      </p>

      <p>
        We usually answer within a couple of days. It helps enormously if you include your{" "}
        <strong>account identifier</strong> (Profile tab, account section), your device model,
        and what you expected to happen.
      </p>

      <h2>Common questions</h2>

      <div className="not-prose">
        <Question q="I lost my progress after reinstalling.">
          <p>
            If you never linked an Apple or Google account, the grove was tied to an anonymous
            account on that device, and reinstalling can leave it behind. Open the{" "}
            <strong>Profile</strong> tab and link a sign-in - that is what makes progress
            survive a lost or wiped device in future.
          </p>
          <p>
            If you <em>did</em> link one, sign in with the same provider and your grove should
            return. If it does not, email us with the sign-in address.
          </p>
        </Question>

        <Question q="I paid for something and did not receive it.">
          <p>
            First, reopen the game while online - unfinished purchases are re-delivered
            automatically on launch, and a purchase interrupted by a crash or a dropped
            connection usually resolves itself this way.
          </p>
          <p>
            If it still has not arrived, email us with the store receipt or order number and
            we will sort it out directly. That is faster than a refund.
          </p>
        </Question>

        <Question q="How do I get a refund?">
          <p>
            Refunds are handled by Apple and Google, not by us - we cannot issue one on their
            behalf. Use the store&rsquo;s own refund process from your purchase history.
          </p>
          <p>
            If the problem is that something did not arrive rather than that you changed your
            mind, please write to us first; we can usually fix that in a day.
          </p>
        </Question>

        <Question q="The watch-a-video button says 'finding a video' and never works.">
          <p>
            That means no advert was available at that moment. Fill varies by country, by time
            of day, and by how many you have already seen. The game keeps trying in the
            background, so it usually starts working again on its own.
          </p>
          <p>
            You never need to watch an advert to finish the game - every one is optional, and
            nothing is locked behind them.
          </p>
        </Question>

        <Question q="How do I stop my grove appearing on the boards?">
          <p>
            Open <strong>Settings</strong> and turn the boards off. Your card is withdrawn and
            your keeper name stops being visible to other players. You keep the name inside
            your own game.
          </p>
        </Question>

        <Question q="How do I change my advertising choice?">
          <p>
            <strong>Settings › Privacy &amp; ad choices</strong>. On iOS, the separate tracking
            permission lives in <strong>iOS Settings › Privacy &amp; Security › Tracking</strong>.
          </p>
        </Question>

        <Question q="How do I delete everything?">
          <p>
            See <Link href="/delete-account">deleting your account and data</Link>. Note that
            deleting the app alone does not delete what is on our servers.
          </p>
        </Question>

        <Question q="My keeper name was refused.">
          <p>
            Names have to be unique, and we filter ones that impersonate someone, read as
            harassment, or contain characters that break other players&rsquo; entries on the
            board.
          </p>
          <p>
            A refused name is not taken from you - you keep it inside your own game and appear
            on the boards under a generated handle instead.
          </p>
        </Question>
      </div>

      <h2>Reporting a security problem</h2>
      <p>
        If you have found a way to break the economy, read another player&rsquo;s save, or
        otherwise get at something you should not, please tell us at{" "}
        <a href={mailto("Security")}>{site.email}</a> before telling anyone else. We will not
        take action against you for reporting something in good faith.
      </p>
    </LegalPage>
  );
}
