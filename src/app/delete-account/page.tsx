import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, Summary } from "@/components/SiteChrome";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete your account and data",
  description: `How to delete your ${site.game} account and the data held with it.`,
};

/**
 * Google Play requires a publicly reachable URL where a player can request deletion of
 * their account and data, and it must be reachable without installing the app or signing
 * in. That is why this is its own page with its own link in the footer rather than a
 * paragraph inside the privacy policy.
 *
 * It has to say what is deleted AND what is kept, which is the part most deletion pages
 * skip: purchase records cannot lawfully be destroyed on request, and a page that implies
 * otherwise is a promise that will be broken.
 */
export default function DeleteAccount() {
  return (
    <LegalPage
      title="Delete your account and data"
      intro="You can have everything we hold about your grove erased. Here is exactly what happens."
    >
      <Summary>
        <p className="mb-2">
          Email <a href={mailto("Delete my account")}>{site.email}</a> with your account
          identifier and we will delete your account and saved progress within 30 days.
        </p>
        <p>
          Deleting the app on its own does <strong>not</strong> delete the data on our
          servers — it only removes the copy on that device.
        </p>
      </Summary>

      <h2 id="find-id">1. Find your account identifier</h2>
      <p>
        Accounts are anonymous, so we cannot look you up by name or email unless you have
        linked a sign-in. To make sure we delete the right grove, we need the identifier the
        game holds:
      </p>
      <ol>
        <li>
          Open {site.game} and go to the <strong>Profile</strong> tab.
        </li>
        <li>
          Open the <strong>account</strong> section. Your account identifier is shown there.
        </li>
        <li>Copy it, or take a screenshot.</li>
      </ol>
      <p>
        If you have linked an Apple or Google account, you can skip this and simply send the
        request from that email address instead.
      </p>

      <h2 id="request">2. Send the request</h2>
      <p>
        Write to <a href={mailto("Delete my account")}>{site.email}</a> from any address, with
        the subject <strong>Delete my account</strong>, and include your account identifier
        or the linked sign-in address.
      </p>
      <p>
        We will confirm receipt, verify that the account is yours, and complete the deletion
        within <strong>30 days</strong>. We will tell you when it is done.
      </p>

      <h2 id="what-goes">3. What gets deleted</h2>
      <ul>
        <li>Your anonymous account and any linked Apple or Google sign-in.</li>
        <li>
          Your saved progress: cleared glades, best moves and times, hearts, streak, currency
          ledgers, companions, and your whole grove.
        </li>
        <li>Your public grove card, which is removed from the boards.</li>
        <li>Your keeper name reservation, which is released for anyone else to claim.</li>
      </ul>
      <p>This is irreversible. There is no way for us to restore a deleted grove.</p>

      <h2 id="what-stays">4. What we have to keep</h2>
      <p>
        Two things survive deletion, and we would rather say so plainly than surprise you
        later:
      </p>
      <ul>
        <li>
          <strong>Purchase records</strong> — the store transaction identifier and the amount,
          kept for as long as tax and accounting law requires (generally seven years). We are
          not permitted to destroy these on request. They are not linked to your gameplay
          after deletion.
        </li>
        <li>
          <strong>Records of the deletion request itself</strong>, so we can show we acted on
          it.
        </li>
      </ul>
      <p>
        Apple and Google keep their own records of your purchases independently of us. If you
        want those removed, you will need to ask them.
      </p>

      <h2 id="less">If you want less than full deletion</h2>
      <p>You may not need to delete everything. From inside the game you can:</p>
      <ul>
        <li>
          <strong>Leave the public boards</strong> — Settings, then turn off the boards. Your
          card is withdrawn and your name is no longer visible to anyone.
        </li>
        <li>
          <strong>Withdraw advertising consent</strong> — Settings, then{" "}
          <strong>Privacy &amp; ad choices</strong>.
        </li>
        <li>
          <strong>Change your keeper name</strong> — Profile, then rename.
        </li>
      </ul>
      <p>
        See the <Link href="/privacy">privacy policy</Link> for what each of those covers.
      </p>
    </LegalPage>
  );
}
