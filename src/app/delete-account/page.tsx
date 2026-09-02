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
 *
 * The in-app route is named FIRST and the email route second, because the in-app control
 * is the one that actually exists and finishes in seconds. A deletion page whose only
 * answer is "write to us" reads as a form put up to satisfy a store review, and it also
 * hides the better route from the people looking for it. The same URL is given to Play as
 * both the "delete account" and the "delete data" link, which is why the partial-deletion
 * section at the bottom is not optional.
 */
export default function DeleteAccount() {
  return (
    <LegalPage
      title="Delete your account and data"
      intro="You can have everything we hold about your grove erased. Here is exactly what happens."
    >
      <Summary>
        <p className="mb-2">
          The fastest way is inside the game: <strong>Profile</strong>, then the{" "}
          <strong>account</strong> section, then <strong>Delete account</strong>. It takes
          effect immediately.
        </p>
        <p className="mb-2">
          If you can no longer open the game, email{" "}
          <a href={mailto("Delete my account")}>{site.email}</a> instead and we will do it
          for you within 30 days.
        </p>
        <p>
          Deleting the app on its own does <strong>not</strong> delete the data on our
          servers - it only removes the copy on that device.
        </p>
      </Summary>

      <h2 id="in-app">1. Delete it from inside the game</h2>
      <p>
        This is the real deletion, not a request for one. Nobody reads it, nobody has to
        approve it, and it does not wait 30 days.
      </p>
      <ol>
        <li>
          Open {site.game} and go to the <strong>Profile</strong> tab.
        </li>
        <li>
          Scroll to the <strong>account</strong> section.
        </li>
        <li>
          Tap <strong>Delete account</strong>, the red button at the bottom of that section.
        </li>
        <li>
          Read what it lists, then tap <strong>Delete everything</strong> and confirm once
          more.
        </li>
      </ol>
      <p>
        If you have linked an Apple or Google sign-in, you will be asked to sign in once
        more first, so that we know it is really you. You need an internet connection: the
        button is hidden while the game cannot reach our servers, because a deletion we
        cannot carry out is not one we will claim to have done.
      </p>

      <h2 id="request">2. Or write to us</h2>
      <p>
        Use this if you have already uninstalled the game, lost the device, or cannot reach
        the button for any other reason.
      </p>
      <p>
        Accounts are anonymous, so we cannot look you up by name or email unless you have
        linked a sign-in. If you can still open the game, your account identifier is shown
        in the <strong>account</strong> section of the <strong>Profile</strong> tab - copy
        it or take a screenshot. If you have linked an Apple or Google account, you can skip
        that and simply write from that email address instead.
      </p>
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
          <strong>Purchase records</strong> - the store transaction identifier and the amount,
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
      <p>
        You may not need to delete everything. Each of these takes effect straight away, and
        none of them touches the rest of your account:
      </p>
      <ul>
        <li>
          <strong>Leave the public boards</strong> - <strong>Profile</strong>, then{" "}
          <strong>Hide my groove</strong> in the boards section. Your published card is taken
          down and your keeper name is no longer visible to anyone. Your progress, purchases
          and grove are untouched.
        </li>
        <li>
          <strong>Withdraw advertising consent</strong> - <strong>Settings</strong>, then{" "}
          <strong>Privacy &amp; ad choices</strong>.
        </li>
        <li>
          <strong>Change your keeper name</strong> - <strong>Profile</strong>, then tap your
          name. The old name is released and the boards show the new one.
        </li>
      </ul>
      <p>
        If you would rather we did one of these for you, write to{" "}
        <a href={mailto("Delete some of my data")}>{site.email}</a> and say which. See the{" "}
        <Link href="/privacy">privacy policy</Link> for what each of those covers.
      </p>
    </LegalPage>
  );
}
