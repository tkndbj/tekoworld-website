"use client";

/**
 * The users admin: every account with a save, newest activity first, twenty-five a page, with a
 * Gift key on each row; and one player's page (`?uid=`), with everything the server knows about
 * the account, the gifts waiting on it, the gifts ever sent, and the same Gift key.
 *
 * One route for both because the site is prerendered: a `[uid]` segment would need a server to
 * render, and a query string keeps every admin page a static shell that asks the functions from
 * the browser. Every number is the server's (`adminListPlayers`, `adminGetPlayer`); nothing here
 * listens, and a page is fetched once on sign-in, after each gift, and when Refresh is pressed.
 */

import Link from "next/link";
import type { User } from "firebase/auth";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AdminFrame, Fact, ago, explain, number, playerLabel, useAdminSession, when } from "./AdminSession";
import { GiftModal } from "./GiftModal";
import {
  getPlayer, listPlayers, playerHref,
  type GiftReply, type PlayerDetail, type PlayerRow, type PlayersPage,
} from "./players";

export function UsersAdmin() {
  const uid = useSearchParams()?.get("uid")?.trim() ?? "";
  return uid ? <PlayerPage key={uid} uid={uid} /> : <PlayersList />;
}

// ------------------------------------------------------------------ the list
function PlayersList() {
  const [page, setPage] = useState<PlayersPage | null>(null);
  const [rows, setRows] = useState<PlayerRow[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gifting, setGifting] = useState<PlayerRow | null>(null);

  // The first page is asked for from the auth subscription (see `useAdminSession`); the loader is
  // kept on a ref so that callback always runs the latest one.
  const loader = useRef<() => void>(() => {});
  const session = useAdminSession(useCallback((user: User | null) => {
    setRows([]);
    setPage(null);
    setError(null);
    if (user) loader.current();
  }, []));
  const { settle } = session;

  const load = useCallback(async (after: PlayersPage["next"]) => {
    setBusy(true);
    setError(null);
    try {
      const reply = await listPlayers(after);
      setPage(reply);
      setRows((shown) => {
        const kept = after ? shown : [];
        const seen = new Set(kept.map((row) => row.uid));
        return [...kept, ...reply.rows.filter((row) => !seen.has(row.uid))];
      });
      settle();
    } catch (e) {
      settle(e);
      setError(explain(e));
    } finally {
      setBusy(false);
    }
  }, [settle]);

  useEffect(() => { loader.current = () => void load(null); }, [load]);

  function sent(target: PlayerRow, reply: GiftReply) {
    setRows((shown) => shown.map((row) => (row.uid === target.uid ? { ...row, pendingGifts: reply.pending } : row)));
  }

  return (
    <AdminFrame title="Users" session={session} wide>
      {error && <p role="alert" className="panel panel-sm mb-6 border-l-2 border-ruby px-5 py-4 text-sm text-ink">{error}</p>}

      <section className="panel px-6 py-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl">
            Players
            {page && <span className="ml-2 text-sm font-normal text-ink-3">{number.format(page.total)} with a save</span>}
          </h2>
          <button className="btn btn-sm" disabled={busy} onClick={() => void load(null)}>Refresh</button>
        </div>
        <p className="mt-2 text-sm text-ink-2">Most recently saved first. Open a player for everything the server knows about them.</p>

        {!page && !error && <p className="mt-4 text-ink-2">Loading...</p>}
        {page && rows.length === 0 && <p className="mt-4 text-ink-2">No player has a save yet.</p>}

        {rows.length > 0 && (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[56rem] text-left text-sm">
              <thead className="text-ink-3">
                <tr className="border-b border-line">
                  <th className="py-2 pr-4 font-normal">Player</th>
                  <th className="py-2 pr-4 text-right font-normal">Level</th>
                  <th className="py-2 pr-4 text-right font-normal">Cleared</th>
                  <th className="py-2 pr-4 text-right font-normal">Stars</th>
                  <th className="py-2 pr-4 text-right font-normal">Coins</th>
                  <th className="py-2 pr-4 text-right font-normal">Gems</th>
                  <th className="py-2 pr-4 font-normal">Last save</th>
                  <th className="py-2 pr-4 text-right font-normal">Gifts waiting</th>
                  <th className="py-2 font-normal"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((row) => (
                  <tr key={row.uid}>
                    <td className="max-w-[18rem] py-3 pr-4">
                      <Link href={playerHref(row.uid)} className="block truncate text-ink hover:text-cyan">
                        {row.name ?? <span className="text-ink-2">(no name)</span>}
                        {row.nameDenied && <span className="ml-2 text-xs text-ruby">hidden</span>}
                      </Link>
                      <span className="block truncate font-mono text-xs text-ink-3">{row.uid}</span>
                    </td>
                    <td className="py-3 pr-4 text-right font-display">{row.level}</td>
                    <td className="py-3 pr-4 text-right">{number.format(row.levelsCleared)}</td>
                    <td className="py-3 pr-4 text-right">{number.format(row.stars)}</td>
                    <td className="py-3 pr-4 text-right text-gold">{number.format(row.credits)}</td>
                    <td className="py-3 pr-4 text-right text-violet">{number.format(row.gems)}</td>
                    <td className="py-3 pr-4 text-ink-2" title={when(row.updatedUnix)}>{page ? ago(row.updatedUnix, page.nowUnix) : ""}</td>
                    <td className="py-3 pr-4 text-right">
                      {row.pendingGifts.length > 0
                        ? <span className="text-emerald">{row.pendingGifts.length}</span>
                        : <span className="text-ink-3">0</span>}
                    </td>
                    <td className="py-3 text-right whitespace-nowrap">
                      <Link href={playerHref(row.uid)} className="btn btn-sm">Open</Link>
                      <button className="btn btn-sm btn-fire ml-2" onClick={() => setGifting(row)}>Gift</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {page?.next && (
          <button className="btn btn-sm mt-5" disabled={busy} onClick={() => void load(page.next)}>
            {busy ? "Loading..." : "Load more"}
          </button>
        )}
      </section>

      {gifting && (
        <GiftModal player={gifting} onClose={() => setGifting(null)} onSent={(reply) => sent(gifting, reply)} />
      )}
    </AdminFrame>
  );
}

// ------------------------------------------------------------------ one player
function PlayerPage({ uid }: { uid: string }) {
  const [detail, setDetail] = useState<PlayerDetail | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gifting, setGifting] = useState(false);

  // Asked for from the auth subscription, for `PlayersList`'s reason.
  const loader = useRef<() => void>(() => {});
  const session = useAdminSession(useCallback((user: User | null) => {
    setDetail(null);
    setError(null);
    if (user) loader.current();
  }, []));
  const { settle } = session;

  const load = useCallback(async () => {
    setBusy(true);
    setError(null);
    try {
      setDetail(await getPlayer(uid));
      settle();
    } catch (e) {
      settle(e);
      setError(explain(e));
    } finally {
      setBusy(false);
    }
  }, [uid, settle]);

  useEffect(() => { loader.current = () => void load(); }, [load]);

  const row = detail?.row;
  const now = detail?.nowUnix ?? 0;

  return (
    <AdminFrame title={row ? playerLabel(row) : "Player"} kicker="Gemfire admin · player" session={session} wide>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link href="/admin/users" className="btn btn-sm">&larr; All users</Link>
        <div className="flex gap-2">
          <button className="btn btn-sm" disabled={busy} onClick={() => void load()}>Refresh</button>
          {row && <button className="btn btn-sm btn-fire" onClick={() => setGifting(true)}>Gift</button>}
        </div>
      </div>

      {error && <p role="alert" className="panel panel-sm mb-6 border-l-2 border-ruby px-5 py-4 text-sm text-ink">{error}</p>}
      {!detail && !error && <p className="text-ink-2">Loading...</p>}

      {detail && row && (
        <div className="grid gap-6">
          <section className="panel px-6 py-6">
            <h2 className="text-xl">Account</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Fact label="uid" mono>{row.uid}</Fact>
              <Fact label="Keeper name">
                {row.name ?? <span className="text-ink-2">none</span>}
                {row.nameDenied && <span className="ml-2 text-xs text-ruby">hidden by moderation</span>}
              </Fact>
              <Fact label="Signed in with">{detail.auth ? (detail.auth.providers.length > 0 ? detail.auth.providers.join(", ") : "anonymous") : "no auth user"}</Fact>
              <Fact label="Email">{detail.auth?.email ?? <span className="text-ink-2">none</span>}</Fact>
              <Fact label="Account created">{detail.auth ? when(detail.auth.createdUnix) : "-"}</Fact>
              <Fact label="Last sign-in">{detail.auth ? when(detail.auth.lastSignInUnix) : "-"}</Fact>
              <Fact label="Language">{row.language || <span className="text-ink-2">device default</span>}</Fact>
              <Fact label="Save">{detail.save ? `v${detail.save.schemaVersion}, revision ${number.format(detail.save.revision)}` : "no save yet"}</Fact>
              <Fact label="Last save">{row.updatedUnix ? `${when(row.updatedUnix)} (${ago(row.updatedUnix, now)})` : "never"}</Fact>
              {detail.auth?.disabled && <Fact label="Status"><span className="text-ruby">disabled</span></Fact>}
            </dl>
          </section>

          <section className="panel px-6 py-6">
            <h2 className="text-xl">Progress</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Fact label="Keeper level">{row.level}{detail.wallet.keeperBought > 0 && <span className="ml-1 text-xs text-ink-3">({row.earnedLevel} earned + {detail.wallet.keeperBought} bought)</span>}</Fact>
              <Fact label="Levels cleared">{number.format(row.levelsCleared)}</Fact>
              <Fact label="Stars">{number.format(row.stars)}</Fact>
              <Fact label="Last played" mono>{row.lastPlayedLevelId ?? "-"}</Fact>
              <Fact label="Rank">{detail.card?.rung ?? <span className="text-ink-2">none</span>}</Fact>
              <Fact label="Endless best wave">{detail.card ? number.format(detail.card.wave) : "-"}</Fact>
              <Fact label="Shuffle best wave">{detail.card ? number.format(detail.card.shuffle) : "-"}</Fact>
              <Fact label="Public card">{detail.card ? `built ${when(detail.card.builtUnix)}` : "not published"}</Fact>
            </dl>
          </section>

          <section className="panel px-6 py-6">
            <h2 className="text-xl">Wallet</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Fact label="Coins"><span className="font-display text-xl text-gold">{number.format(row.credits)}</span></Fact>
              <Fact label="Gems"><span className="font-display text-xl text-violet">{number.format(row.gems)}</span></Fact>
              <Fact label="Coins granted / spent">{number.format(detail.wallet.granted.credits ?? 0)} / {number.format(detail.wallet.spent.credits ?? 0)}</Fact>
              <Fact label="Gems granted / spent">{number.format(detail.wallet.granted.gems ?? 0)} / {number.format(detail.wallet.spent.gems ?? 0)}</Fact>
              <Fact label="Earned floor (coins)">{number.format(detail.wallet.earnedFloor)}</Fact>
              <Fact label="Debits / awards recorded">{number.format(detail.counts.spends)} / {number.format(detail.counts.grants)}</Fact>
              <Fact label="Shop deals bought">{detail.wallet.dealsBought.length > 0 ? detail.wallet.dealsBought.join(", ") : "none"}</Fact>
              <Fact label="Seven-day passes owed">
                {detail.wallet.dailyPasses.length > 0
                  ? detail.wallet.dailyPasses.map((p) => `${p.id} (${p.remaining} left)`).join(", ")
                  : "none"}
              </Fact>
              {detail.wallet.containersRevoked.length > 0 && (
                <Fact label="Refunded containers"><span className="text-ruby">{detail.wallet.containersRevoked.join(", ")}</span></Fact>
              )}
            </dl>
          </section>

          <section className="panel px-6 py-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl">
                Gifts
                {row.pendingGifts.length > 0 && (
                  <span className="ml-2 text-sm font-normal text-emerald">{row.pendingGifts.length} waiting to be claimed</span>
                )}
              </h2>
              <button className="btn btn-sm btn-fire" onClick={() => setGifting(true)}>Gift</button>
            </div>

            {detail.gifts.length === 0 && <p className="mt-4 text-ink-2">No gift has been sent to this player.</p>}
            {detail.gifts.length > 0 && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[40rem] text-left text-sm">
                  <thead className="text-ink-3">
                    <tr className="border-b border-line">
                      <th className="py-2 pr-4 font-normal">Sent</th>
                      <th className="py-2 pr-4 font-normal">Gift</th>
                      <th className="py-2 pr-4 font-normal">By</th>
                      <th className="py-2 font-normal">Claimed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {detail.gifts.map((gift) => (
                      <tr key={gift.id}>
                        <td className="py-3 pr-4 text-ink-2" title={gift.id}>{when(gift.atUnix)}</td>
                        <td className="py-3 pr-4">
                          {gift.credits > 0 && <span className="text-gold">{number.format(gift.credits)} coins</span>}
                          {gift.credits > 0 && gift.gems > 0 && <span className="text-ink-2"> + </span>}
                          {gift.gems > 0 && <span className="text-violet">{number.format(gift.gems)} gems</span>}
                        </td>
                        <td className="py-3 pr-4 text-ink-2">{gift.by ?? "-"}</td>
                        <td className="py-3">
                          {gift.claimedUnix
                            ? <span className="text-emerald">{when(gift.claimedUnix)}</span>
                            : (gift.paidCreditsUnix || gift.paidGemsUnix)
                              ? <span className="text-ember">partly - {gift.paidCreditsUnix ? "coins" : "gems"} taken</span>
                              : <span className="text-ink-3">waiting</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      )}

      {gifting && row && (
        <GiftModal player={row} onClose={() => setGifting(false)} onSent={() => void load()} />
      )}
    </AdminFrame>
  );
}
