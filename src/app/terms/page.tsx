import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, Summary } from "@/components/SiteChrome";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The rules for playing ${site.game}.`,
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`These are the terms you agree to by playing ${site.game}.`}
    >
      <Summary>
        <p className="mb-2">
          Play the game, do not cheat it, and do not pretend to be someone else on the
          boards. Anything you buy is a licence to use it inside the game — coins and gems
          are not money and cannot be cashed out.
        </p>
        <p>
          Refunds are handled by Apple and Google, not by us. If something goes wrong, write
          to us before leaving a one-star review — we would rather fix it.
        </p>
      </Summary>

      <h2 id="agreement">1. The agreement</h2>
      <p>
        These terms are between you and {site.entity}, trading as {site.publisher}, of{" "}
        {site.address} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). By downloading or playing {site.game} you accept them. If you do
        not accept them, please do not play.
      </p>
      <p>
        Your app store has its own terms as well, and where they apply to your purchase from
        that store, they apply alongside these.
      </p>

      <h2 id="licence">2. Your licence</h2>
      <p>
        We give you a personal, non-exclusive, non-transferable, revocable licence to install
        and play {site.game} on devices you control, for your own entertainment. We keep
        ownership of the game, its artwork, its music, its puzzles and its code.
      </p>
      <p>You agree not to:</p>
      <ul>
        <li>
          modify, reverse engineer or decompile the game, except where law expressly permits
          it;
        </li>
        <li>
          use cheats, automation, modified clients or memory editors, or otherwise interfere
          with the in-game economy;
        </li>
        <li>
          sell, rent or transfer your account, or the currency and items in it, to anyone
          else;
        </li>
        <li>attack, overload or probe our servers.</li>
      </ul>

      <h2 id="account">3. Your account</h2>
      <p>
        An anonymous account is created for you on first launch so your progress can be
        saved. You may link it to an Apple or Google account so that it survives losing your
        device.
      </p>
      <p>
        You are responsible for keeping any linked sign-in secure. If you lose access to an
        unlinked anonymous account — by deleting the app without linking, for example — the
        progress may not be recoverable, and we may not be able to identify it as yours.
      </p>
      <p>
        A sign-in already attached to another grove cannot be merged with yours, because
        currency was earned and spent separately in each. The game warns you before anything
        is replaced.
      </p>

      <h2 id="virtual-items">4. Coins, gems, hearts and items</h2>
      <p>
        Everything you collect or buy inside the game — coins, gems, hearts, boosts,
        companions, grove pieces and land — is a <strong>limited licence to use it inside{" "}
        {site.game}</strong>. It is not money, not a security, and not property.
        Specifically:
      </p>
      <ul>
        <li>it has no value outside the game and cannot be exchanged for cash;</li>
        <li>it cannot be transferred, sold or given to another player;</li>
        <li>
          it may be rebalanced, retuned or discontinued as the game is developed, and prices
          and rewards may change;
        </li>
        <li>
          it does not survive the closure of your account or the discontinuation of the game,
          except where law says otherwise.
        </li>
      </ul>
      <p>
        Rewards from adverts, daily chests and streaks are granted by our servers. Where a
        reward cannot be verified — for example because a save file was modified — it may be
        declined or reversed.
      </p>

      <h2 id="purchases">5. Purchases and refunds</h2>
      <p>
        Purchases are made through Apple&rsquo;s App Store or Google Play, and those stores
        take the payment. We never see your card details.
      </p>
      <p>
        <strong>Refunds are handled by the store</strong>, under the store&rsquo;s own policy.
        We cannot issue a refund on their behalf. If a purchase was taken and you did not
        receive what you paid for, write to us first — that is usually something we can fix
        directly, and faster.
      </p>
      <p>
        If you are a consumer in the EU or the UK, you normally have a 14-day right to
        withdraw from a digital purchase — but that right is lost once delivery begins with
        your consent, which is what happens the moment currency lands in your balance. This
        does not affect your statutory rights where a product is faulty.
      </p>
      <p>
        Where a purchase is refunded or charged back after the currency has been granted, we
        may reduce your balance by the corresponding amount.
      </p>

      <h2 id="boards">6. Names and the public boards</h2>
      <p>
        If you choose a keeper name and leave the boards enabled, that name, your grove score
        and the arrangement of your grove are visible to other players. Choose accordingly.
      </p>
      <p>We may refuse, change or remove a name that:</p>
      <ul>
        <li>impersonates another person, a company, or us;</li>
        <li>is offensive, or is likely to be read as harassment;</li>
        <li>contains characters that break the display of other players&rsquo; entries.</li>
      </ul>
      <p>
        A refused name is not taken away from you: you keep it inside your own game and are
        shown on the boards under a generated handle instead. You can leave the boards
        entirely from the settings screen.
      </p>

      <h2 id="availability">7. The game may change</h2>
      <p>
        We add chapters, retune difficulty and rewards, fix defects and occasionally remove
        things that are not working. We may suspend the service for maintenance, and we may
        eventually discontinue the game — in which case we will give reasonable notice
        through the game or this site where we can.
      </p>
      <p>
        We do not promise the game will be uninterrupted or error-free, and some features
        need a working internet connection.
      </p>

      <h2 id="suspension">8. Suspension</h2>
      <p>
        We may suspend or close an account that breaks these terms — in particular one used
        to cheat, to defraud the economy, or to harass other players. Where it is
        proportionate we will warn first. You may stop playing at any time and delete your
        data as described on the{" "}
        <Link href="/delete-account">deletion page</Link>.
      </p>

      <h2 id="liability">9. Disclaimers and liability</h2>
      <p>
        The game is provided &ldquo;as is&rdquo;. To the fullest extent the law allows, we
        exclude implied warranties of merchantability and fitness for a particular purpose.
      </p>
      <p>
        Nothing here limits liability for death or personal injury caused by negligence, for
        fraud, or for anything else that cannot lawfully be limited. Subject to that, our
        total liability to you is limited to the greater of the amount you paid us in the
        twelve months before the claim, or €50.
      </p>
      <p>
        <strong>If you are a consumer, your statutory rights are not affected by anything in
        these terms.</strong>
      </p>

      <h2 id="law">10. Governing law</h2>
      <p>
        These terms are governed by the laws of {site.jurisdiction}. If you are a consumer,
        you also keep the protection of the mandatory laws of the country you live in, and
        you may bring proceedings there.
      </p>

      <h2 id="apple">11. A note required by Apple</h2>
      <p>
        This agreement is between you and us, not with Apple, and Apple is not responsible for
        the game or its content. Apple has no obligation to provide support for it. If the app
        fails to conform to any applicable warranty, you may notify Apple and Apple will
        refund the purchase price; to the maximum extent permitted by law, Apple has no other
        warranty obligation. Apple and its subsidiaries are third-party beneficiaries of these
        terms and may enforce them against you.
      </p>

      <h2 id="contact">12. Contact</h2>
      <p>
        {site.entity}
        <br />
        {site.address}
        <br />
        <a href={mailto("Terms question")}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
