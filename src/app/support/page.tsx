import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/SiteChrome";
import { gemfire, mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Help with ${gemfire.name}: lost progress, purchases, hearts, adverts and accounts.`,
};

function Question({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group panel panel-sm not-prose mb-3">
      <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-lg font-semibold marker:content-none">
        {q}
        <span
          aria-hidden
          className="tile h-8 w-8 shrink-0 transition-transform group-open:rotate-45"
        >
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <div className="prose-legal border-t border-line px-5 py-4 text-[0.95rem]">
        {children}
      </div>
    </details>
  );
}

export default function Support() {
  const game = gemfire.name;
  return (
    <LegalPage
      title="Support"
      intro={`Something not working in ${game}? Write to us. A real person reads it.`}
    >
      <p className="not-prose mb-10">
        <a href={mailto("Support")} className="btn btn-fire">
          Email {site.email}
        </a>
      </p>

      <p>
        We usually answer within a couple of days. It helps enormously if you include your{" "}
        <strong>account identifier</strong> (Profile tab, Account card), your device model,
        and what you expected to happen.
      </p>

      <h2>Common questions</h2>

      <div className="not-prose">
        <Question q="I lost my progress after reinstalling.">
          <p>
            If you never linked an Apple or Google account, the kingdom was tied to an
            anonymous account on that device, and reinstalling can leave it behind. Open the{" "}
            <strong>Profile</strong> tab and sign in with Google or Apple. That is what makes
            progress survive a lost or wiped device in future.
          </p>
          <p>
            If you <em>did</em> link one, sign in with the same provider and your kingdom
            should return. If it does not, email us with the sign-in address.
          </p>
        </Question>

        <Question q="I paid for something and did not receive it.">
          <p>
            First, reopen the game while online. Unfinished purchases are re-delivered
            automatically on launch, and a purchase interrupted by a crash or a dropped
            connection usually resolves itself this way. The <strong>Restore purchases</strong>{" "}
            button in the shop does the same on demand.
          </p>
          <p>
            If it still has not arrived, email us with the store receipt or order number and
            we will sort it out directly. That is faster than a refund.
          </p>
        </Question>

        <Question q="How do I get a refund?">
          <p>
            Refunds are handled by Apple and Google, not by us. We cannot issue one on their
            behalf. Use the store&rsquo;s own refund process from your purchase history.
          </p>
          <p>
            If the problem is that something did not arrive rather than that you changed your
            mind, please write to us first; we can usually fix that in a day.
          </p>
        </Question>

        <Question q="How do hearts work?">
          <p>
            A lost siege costs one heart, and hearts come back on their own over time, up to
            your flask&rsquo;s limit. The first three sieges of every chapter are free to fail
            while you learn it, and a siege you have already won is always free to replay.
          </p>
          <p>
            If you are out, you can wait, watch a video for two, or spend gems. Buying a
            bigger flask raises the limit permanently.
          </p>
        </Question>

        <Question q="The watch-a-video button never finds a video.">
          <p>
            That means no advert was available at that moment. Fill varies by country, by time
            of day, and by how many you have already seen today. The game keeps trying in the
            background, so it usually starts working again on its own.
          </p>
          <p>
            You never need to watch an advert to finish the game. Every one is optional, and
            nothing is locked behind them.
          </p>
        </Question>

        <Question q="How do I stop appearing on the boards?">
          <p>
            Open the <strong>Profile</strong> tab and tap <strong>Hide my groove</strong> in
            the boards section. Your card is withdrawn and your keeper name stops being visible
            to other players. You keep the name inside your own game.
          </p>
        </Question>

        <Question q="How do I change my advertising choice?">
          <p>
            <strong>Settings</strong> (the gear icon on the Home or Profile screen), then{" "}
            <strong>Privacy &amp; ad choices</strong>. On iOS, the separate tracking
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
            A refused name is not taken from you. You keep it inside your own game and appear
            on the boards under a generated handle instead.
          </p>
        </Question>

        <Question q="Another player's name is offensive.">
          <p>
            Open their kingdom from the boards and tap <strong>Report name</strong>. We
            review every report, and a name that breaks the rules is replaced with a generated
            handle. You will not be told who reported it, and they will not be told it was
            you.
          </p>
        </Question>

        <Question q="Does the game work offline?">
          <p>
            Yes. Every siege runs on your phone with no connection. The boards, visiting other
            kingdoms, the shop, rewarded videos, and signing in or deleting your account need
            a connection, and the daily bonuses need you to go online once to unlock them.
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
