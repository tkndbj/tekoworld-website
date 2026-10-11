"use client";

/**
 * The admin dashboard: find a player (by uid, by the email a linked provider gave, or by keeper
 * name) and land on their page; how many players have a save and who saved most recently; and
 * the doors to the users list and the shop deals.
 *
 * Every answer is the server's (`adminFindPlayers`, `adminListPlayers`). The search runs on
 * submit, never per keystroke: a name lookup is a document read and an email lookup is an Auth
 * call, and a dashboard should not pay for either while the owner is still typing.
 */

import Link from "next/link";
import type { User } from "firebase/auth";
import { useCallback, useEffect, useRef, useState } from "react";
import { AdminFrame, ago, explain, number, playerLabel, useAdminSession, when } from "./AdminSession";
import { GiftModal } from "./GiftModal";
import { findPlayers, listPlayers, playerHref, type FoundRow, type GiftReply, type PlayerRow, type PlayersPage } from "./players";

const HOW = { uid: "by uid", email: "by email", name: "by keeper name" } as const;

export function DashboardAdmin() {
  const [recent, setRecent] = useState<PlayersPage | null>(null);
  const [query, setQuery] = useState("");
  const [found, setFound] = useState<FoundRow[] | null>(null);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gifting, setGifting] = useState<PlayerRow | null>(null);

  // The recent page is asked for from the auth subscription (see `useAdminSession`); the loader is
  // kept on a ref so that callback always runs the latest one.
  const loader = useRef<() => void>(() => {});
  const session = useAdminSession(useCallback((user: User | null) => {
    setRecent(null);
    setFound(null);
    setError(null);
    if (user) loader.current();
  }, []));
  const { settle } = session;

  const load = useCallback(async () => {
    setError(null);
    try {
      setRecent(await listPlayers(null));
      settle();
    } catch (e) {
      settle(e);
      setError(explain(e));
    }
  }, [settle]);

  useEffect(() => { loader.current = () => void load(); }, [load]);

  async function search() {
    const q = query.trim();
    if (!q || searching) return;
    setSearching(true);
    setError(null);
    try {
      setFound((await findPlayers(q)).rows);
    } catch (e) {
      setError(explain(e));
    } finally {
      setSearching(false);
    }
  }

  function sent(target: PlayerRow, reply: GiftReply) {
    const patch = (row: PlayerRow) => (row.uid === target.uid ? { ...row, pendingGifts: reply.pending } : row);
    setFound((rows) => rows ? rows.map((row) => ({ ...patch(row), how: row.how })) : rows);
    setRecent((page) => page ? { ...page, rows: page.rows.map(patch) } : page);
  }

  const now = recent?.nowUnix ?? 0;
  const latest = recent?.rows.slice(0, 10) ?? [];

  return (
    <AdminFrame title="Dashboard" session={session} wide>
      {error && <p role="alert" className="panel panel-sm mb-6 border-l-2 border-ruby px-5 py-4 text-sm text-ink">{error}</p>}

      <div className="grid gap-6">
        <section className="panel px-6 py-7">
          <h2 className="text-xl">Find a player</h2>
          <p className="mt-2 text-sm text-ink-2">A uid, the email of a linked Google or Apple account, or a keeper name as it appears on the boards.</p>
          <form className="mt-5 flex flex-wrap gap-3" onSubmit={(e) => { e.preventDefault(); void search(); }}>
            <input
              className="min-w-0 flex-1 border border-line-2 bg-panel-solid px-4 py-3 font-display text-lg text-ink outline-none focus:border-cyan"
              placeholder="uid, email or keeper name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <button type="submit" className="btn btn-fire" disabled={searching || !query.trim()}>
              {searching ? "Searching..." : "Search"}
            </button>
          </form>

          {found && found.length === 0 && <p className="mt-4 text-ink-2">Nobody matches that.</p>}
          {found && found.length > 0 && (
            <ul className="mt-5 divide-y divide-line border-t border-line">
              {found.map((row) => (
                <li key={row.uid} className="flex flex-wrap items-center justify-between gap-3 py-4">
                  <div className="min-w-0">
                    <Link href={playerHref(row.uid)} className="block truncate font-display text-lg text-ink hover:text-cyan">
                      {playerLabel(row)}
                    </Link>
                    <p className="truncate text-sm text-ink-2">
                      found {HOW[row.how]} &middot; level {row.level} &middot;{" "}
                      <span className="text-gold">{number.format(row.credits)} coins</span>,{" "}
                      <span className="text-violet">{number.format(row.gems)} gems</span>
                      {row.pendingGifts.length > 0 && <span className="text-emerald"> &middot; {row.pendingGifts.length} gift(s) waiting</span>}
                    </p>
                    <p className="truncate font-mono text-xs text-ink-3">{row.uid}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link href={playerHref(row.uid)} className="btn btn-sm">Open</Link>
                    <button className="btn btn-sm btn-fire" onClick={() => setGifting(row)}>Gift</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className="grid gap-6 sm:grid-cols-3">
          <section className="panel px-6 py-6">
            <p className="text-xs uppercase tracking-wide text-ink-3">Players with a save</p>
            <p className="mt-2 font-display text-4xl text-ink">{recent ? number.format(recent.total) : "..."}</p>
            <Link href="/admin/users" className="btn btn-sm mt-4">All users</Link>
          </section>
          <section className="panel px-6 py-6 sm:col-span-2">
            <p className="text-xs uppercase tracking-wide text-ink-3">Pages</p>
            <p className="mt-2 text-sm text-ink-2">The users list carries a Gift key on every row; the shop page runs the limited-time deals.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/admin/users" className="btn btn-sm">Users</Link>
              <Link href="/admin/shop" className="btn btn-sm">Shop deals</Link>
            </div>
          </section>
        </div>

        <section className="panel px-6 py-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl">Recently active</h2>
            <button className="btn btn-sm" onClick={() => void load()}>Refresh</button>
          </div>
          {!recent && !error && <p className="mt-4 text-ink-2">Loading...</p>}
          {recent && latest.length === 0 && <p className="mt-4 text-ink-2">No player has a save yet.</p>}
          {latest.length > 0 && (
            <ul className="mt-4 divide-y divide-line border-t border-line">
              {latest.map((row) => (
                <li key={row.uid} className="flex flex-wrap items-center justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <Link href={playerHref(row.uid)} className="block truncate text-ink hover:text-cyan">{playerLabel(row)}</Link>
                    <p className="truncate text-xs text-ink-3">
                      <span title={when(row.updatedUnix)}>saved {ago(row.updatedUnix, now)}</span> &middot; level {row.level} &middot; {number.format(row.levelsCleared)} cleared
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link href={playerHref(row.uid)} className="btn btn-sm">Open</Link>
                    <button className="btn btn-sm btn-fire" onClick={() => setGifting(row)}>Gift</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {gifting && (
        <GiftModal player={gifting} onClose={() => setGifting(null)} onSent={(reply) => sent(gifting, reply)} />
      )}
    </AdminFrame>
  );
}
