"use client";

/**
 * The shop admin: make a limited-time deal (coins for gems, for a duration) and end one early.
 *
 * Every number and every rule is the server's - `adminListDeals`, `adminCreateDeal` and
 * `adminEndDeal` in the game's functions, which check the caller is one of the owner's Google
 * accounts, validate the request, and write the one public document the game reads
 * (`config/deals`). This page only asks and shows the answer. Nothing here listens: the list
 * is fetched once on sign-in, after each change, and when Refresh is pressed; the countdowns
 * tick on the browser's clock, corrected by the server's.
 *
 * The history is every deal that has ended, twenty a page, newest first, fetched only when asked
 * for (Load more). Buyer counts come from the server's index (`adminDealHistory`), and an ended
 * deal's count is stored once it can no longer change, so paging back through old deals costs
 * the reads of the page and nothing more.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { webAuth, webFunctions } from "@/lib/firebase-web";
import { AdminNav, explain } from "./AdminSession";

interface ShopDeal {
  id: string;
  credits: number;
  gems: number;
  startUnix: number;
  endUnix: number;
}

interface Limits {
  minSeconds: number;
  maxSeconds: number;
  maxCredits: number;
  maxGems: number;
  maxLive: number;
  graceSeconds: number;
}

interface DealsReply {
  nowUnix: number;
  deals: ShopDeal[];
  limits: Limits;
}

/** A deal with how many accounts bought it; `settled` once no purchase can still land. */
interface DealRow extends ShopDeal {
  buyers: number;
  settled: boolean;
}

interface HistoryCursor {
  endUnix: number;
  id: string;
}

interface HistoryReply {
  nowUnix: number;
  rows: DealRow[];
  next: HistoryCursor | null;
}

type Access = "checking" | "signed-out" | "denied" | "allowed";

const number = new Intl.NumberFormat("en-US");

/** A wait, the way the game writes one: "2d 4h", "3h 07m", "12:05". */
function countdown(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  if (s >= 86400) return `${Math.floor(s / 86400)}d ${Math.floor((s % 86400) / 3600)}h`;
  if (s >= 3600) return `${Math.floor(s / 3600)}h ${String(Math.floor((s % 3600) / 60)).padStart(2, "0")}m`;
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

function when(unix: number): string {
  return new Date(unix * 1000).toLocaleString(undefined, {
    weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
  });
}

export function ShopAdmin() {
  const [user, setUser] = useState<User | null>(null);
  const [access, setAccess] = useState<Access>("checking");
  const [reply, setReply] = useState<DealsReply | null>(null);
  const [buyers, setBuyers] = useState<Record<string, number>>({});
  const [history, setHistory] = useState<DealRow[]>([]);
  const [cursor, setCursor] = useState<HistoryCursor | null>(null);
  const [historyDone, setHistoryDone] = useState(false);
  const [historyBusy, setHistoryBusy] = useState(false);
  const [skew, setSkew] = useState(0);
  const [now, setNow] = useState(() => Math.floor(Date.now() / 1000));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [credits, setCredits] = useState("26000");
  const [gems, setGems] = useState("");
  const [days, setDays] = useState("1");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");

  // The page's own clock, for the countdowns only. Corrected by the server's on every reply,
  // so a laptop whose clock is wrong still shows the time a player's phone will.
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const serverNow = now + skew;

  const adopt = useCallback((data: DealsReply) => {
    setReply(data);
    setSkew(data.nowUnix - Math.floor(Date.now() / 1000));
  }, []);

  const load = useCallback(async () => {
    setError(null);
    try {
      const call = httpsCallable<void, DealsReply & { rows: DealRow[] }>(webFunctions(), "adminListDeals");
      const result = await call();
      adopt(result.data);
      setBuyers(Object.fromEntries((result.data.rows ?? []).map((row) => [row.id, row.buyers])));
      setAccess("allowed");
    } catch (e) {
      if ((e as { code?: string })?.code === "functions/permission-denied") setAccess("denied");
      else setAccess("allowed");
      setError(explain(e));
    }
  }, [adopt]);

  /** One page of ended deals: the first when `fresh`, else the one after the last shown. */
  const loadHistory = useCallback(async (fresh: boolean, after: HistoryCursor | null) => {
    setHistoryBusy(true);
    try {
      const call = httpsCallable<{ after?: HistoryCursor }, HistoryReply>(webFunctions(), "adminDealHistory");
      const result = await call(fresh || !after ? {} : { after });
      setHistory((shown) => {
        const rows = fresh ? [] : shown;
        const seen = new Set(rows.map((row) => row.id));
        return [...rows, ...result.data.rows.filter((row) => !seen.has(row.id))];
      });
      setCursor(result.data.next);
      setHistoryDone(result.data.next === null);
    } catch (e) {
      setError(explain(e));
    } finally {
      setHistoryBusy(false);
    }
  }, []);

  useEffect(() => {
    return onAuthStateChanged(webAuth(), (next) => {
      setUser(next);
      setReply(null);
      setNotice(null);
      setHistory([]);
      setCursor(null);
      setHistoryDone(false);
      if (!next) {
        setAccess("signed-out");
        return;
      }
      setAccess("checking");
      void load();
      void loadHistory(true, null);
    });
  }, [load, loadHistory]);

  async function signIn() {
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      await signInWithPopup(webAuth(), provider);
    } catch (e) {
      const code = (e as { code?: string })?.code ?? "";
      if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") return;
      setError(code === "auth/popup-blocked"
        ? "The browser blocked the sign-in window. Allow pop-ups for this site and try again."
        : explain(e));
    }
  }

  const limits = reply?.limits;
  const durationSeconds =
    (Number(days) || 0) * 86400 + (Number(hours) || 0) * 3600 + (Number(minutes) || 0) * 60;
  const creditsValue = Number(credits);
  const gemsValue = Number(gems);

  const live = useMemo(
    () => (reply?.deals ?? []).filter((d) => serverNow >= d.startUnix && serverNow < d.endUnix),
    [reply, serverNow]
  );

  const problem = useMemo(() => {
    if (!limits) return null;
    if (!Number.isInteger(creditsValue) || creditsValue < 1 || creditsValue > limits.maxCredits) {
      return `Coins must be a whole number from 1 to ${number.format(limits.maxCredits)}.`;
    }
    if (!Number.isInteger(gemsValue) || gemsValue < 1 || gemsValue > limits.maxGems) {
      return `Gems must be a whole number from 1 to ${number.format(limits.maxGems)}.`;
    }
    if (![days, hours, minutes].every((v) => /^\d+$/.test(v.trim()))) {
      return "Days, hours and minutes must be whole numbers.";
    }
    if (durationSeconds < limits.minSeconds || durationSeconds > limits.maxSeconds) {
      return `The duration must be between ${limits.minSeconds / 60} minutes and ${limits.maxSeconds / 86400} days.`;
    }
    if (live.length >= limits.maxLive) {
      return `${limits.maxLive} deals are already on sale, the most at once. End one to make another.`;
    }
    return null;
  }, [limits, creditsValue, gemsValue, days, hours, minutes, durationSeconds, live.length]);

  async function create() {
    if (problem || busy) return;
    const ends = when(serverNow + durationSeconds);
    const ok = window.confirm(
      `Start this deal for every player now?\n\n` +
      `${number.format(creditsValue)} coins for ${number.format(gemsValue)} gems\n` +
      `Runs ${countdown(durationSeconds)}, until ${ends}.\n\n` +
      `It cannot be edited once it starts, only ended early.`
    );
    if (!ok) return;

    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const call = httpsCallable<{ credits: number; gems: number; durationSeconds: number }, DealsReply & { deal: ShopDeal }>(
        webFunctions(), "adminCreateDeal");
      const result = await call({ credits: creditsValue, gems: gemsValue, durationSeconds });
      adopt(result.data);
      void load();
      setGems("");
      setNotice(`Deal ${result.data.deal.id} is on sale. Players see it within 15 minutes, or at their next launch.`);
    } catch (e) {
      setError(explain(e));
    } finally {
      setBusy(false);
    }
  }

  async function end(deal: ShopDeal) {
    if (busy) return;
    const ok = window.confirm(
      `End this deal now?\n\n${number.format(deal.credits)} coins for ${number.format(deal.gems)} gems\n\n` +
      `Players who bought it keep it. It leaves the shop at each player's next refresh.`
    );
    if (!ok) return;

    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      const call = httpsCallable<{ id: string }, DealsReply & { deal: ShopDeal }>(webFunctions(), "adminEndDeal");
      const result = await call({ id: deal.id });
      adopt(result.data);
      void load();
      void loadHistory(true, null);
      setNotice(`Deal ${deal.id} has ended.`);
    } catch (e) {
      setError(explain(e));
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="kicker">Gemfire admin</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">Shop deals</h1>
        </div>
        {user && (
          <div className="flex items-center gap-3 text-sm text-ink-2">
            <span className="max-w-[16rem] truncate">{user.email}</span>
            <button className="btn btn-sm" onClick={() => void signOut(webAuth())}>Sign out</button>
          </div>
        )}
      </header>

      <AdminNav />

      {error && (
        <p role="alert" className="panel panel-sm mb-6 border-l-2 border-ruby px-5 py-4 text-sm text-ink">
          {error}
        </p>
      )}
      {notice && (
        <p role="status" className="panel panel-sm mb-6 px-5 py-4 text-sm text-emerald">
          {notice}
        </p>
      )}

      {access === "checking" && <p className="text-ink-2">Checking your account...</p>}

      {access === "signed-out" && (
        <section className="panel px-6 py-8">
          <h2 className="text-xl">Sign in</h2>
          <p className="mt-3 text-ink-2">Use one of the owner&apos;s Google accounts.</p>
          <button className="btn btn-fire mt-6" onClick={() => void signIn()}>Sign in with Google</button>
        </section>
      )}

      {access === "denied" && (
        <section className="panel px-6 py-8">
          <h2 className="text-xl">Not allowed</h2>
          <p className="mt-3 text-ink-2">
            {user?.email} cannot manage the shop. Sign out and use one of the owner&apos;s accounts.
          </p>
        </section>
      )}

      {access === "allowed" && (
        <div className="flex flex-col gap-8">
          <section className="panel px-6 py-7">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl">
                On sale now
                {limits && <span className="ml-2 text-sm font-normal text-ink-3">{live.length} of {limits.maxLive}</span>}
              </h2>
              <button className="btn btn-sm" disabled={busy}
                      onClick={() => { void load(); void loadHistory(true, null); }}>Refresh</button>
            </div>
            {!reply && <p className="mt-4 text-ink-2">Loading...</p>}
            {reply && live.length === 0 && <p className="mt-4 text-ink-2">No deal is on sale.</p>}
            {live.map((deal) => (
              <div key={deal.id} className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
                <div>
                  <p className="font-display text-2xl text-gold">
                    {number.format(deal.credits)} coins <span className="text-ink-2">for</span>{" "}
                    <span className="text-violet">{number.format(deal.gems)} gems</span>
                  </p>
                  <p className="mt-1 text-sm text-ink-2">
                    Ends in <span className="font-display text-ink">{countdown(deal.endUnix - serverNow)}</span>
                    {" "}({when(deal.endUnix)}) &middot; <span className="font-mono text-xs text-ink-3">{deal.id}</span>
                  </p>
                  <p className="mt-1 text-sm text-ink-2">
                    Bought by <span className="font-display text-emerald">{buyers[deal.id] === undefined ? "..." : number.format(buyers[deal.id])}</span>
                    {buyers[deal.id] === 1 ? " player" : " players"} so far
                  </p>
                </div>
                <button className="btn btn-sm" disabled={busy} onClick={() => void end(deal)}>End now</button>
              </div>
            ))}
          </section>

          <section className="panel px-6 py-7">
            <h2 className="text-xl">New limited-time deal</h2>
            <p className="mt-2 text-sm text-ink-2">
              Coins, bought with gems, once per player. Several can run at once. It starts the moment you create it and shows in
              the shop under Refer a Friend with a countdown, and as a purple badge on the Shop button.
            </p>

            <form
              className="mt-6 grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                void create();
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Coins the player gets" value={credits} onChange={setCredits} />
                <Field label="Price in gems" value={gems} onChange={setGems} />
              </div>

              <fieldset className="grid grid-cols-3 gap-4">
                <legend className="mb-2 text-sm text-ink-2">Duration</legend>
                <Field label="Days" value={days} onChange={setDays} />
                <Field label="Hours" value={hours} onChange={setHours} />
                <Field label="Minutes" value={minutes} onChange={setMinutes} />
              </fieldset>

              <div className="text-sm text-ink-2">
                {!problem && (
                  <p>
                    Runs <span className="text-ink">{countdown(durationSeconds)}</span>, until{" "}
                    <span className="text-ink">{when(serverNow + durationSeconds)}</span> (your time).{" "}
                    {gemsValue > 0 && (
                      <>That is {number.format(Math.round(creditsValue / gemsValue))} coins per gem.</>
                    )}
                  </p>
                )}
                {problem && (gems !== "" || (limits && live.length >= limits.maxLive)) && (
                  <p className="text-ember">{problem}</p>
                )}
              </div>

              <div>
                <button type="submit" className="btn btn-fire" disabled={busy || !!problem}>
                  {busy ? "Working..." : "Create deal"}
                </button>
              </div>
            </form>
          </section>

          <section className="panel px-6 py-7">
            <h2 className="text-xl">History</h2>
            <p className="mt-2 text-sm text-ink-2">Every deal that has ended, newest first.</p>
            {history.length === 0 && !historyBusy && <p className="mt-4 text-ink-2">No deal has ended yet.</p>}
            {history.length > 0 && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[34rem] text-left text-sm">
                  <thead className="text-ink-3">
                    <tr className="border-b border-line">
                      <th className="py-2 pr-4 font-normal">Deal</th>
                      <th className="py-2 pr-4 font-normal">Ran</th>
                      <th className="py-2 text-right font-normal">Buyers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {history.map((deal) => (
                      <tr key={deal.id}>
                        <td className="py-3 pr-4">
                          <span className="text-gold">{number.format(deal.credits)} coins</span>
                          <span className="text-ink-2"> for </span>
                          <span className="text-violet">{number.format(deal.gems)} gems</span>
                        </td>
                        <td className="py-3 pr-4 text-ink-2">
                          {when(deal.startUnix)} to {when(deal.endUnix)}
                          <span className="text-ink-3"> ({countdown(deal.endUnix - deal.startUnix)})</span>
                        </td>
                        <td className="py-3 text-right font-display text-lg text-emerald">
                          {number.format(deal.buyers)}
                          {!deal.settled && <span className="ml-1 text-xs text-ink-3" title="Purchases made in the last minutes may still land">so far</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {!historyDone && (
              <button className="btn btn-sm mt-5" disabled={historyBusy} onClick={() => void loadHistory(false, cursor)}>
                {historyBusy ? "Loading..." : "Load more"}
              </button>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="grid gap-2 text-sm text-ink-2">
      {label}
      <input
        inputMode="numeric"
        pattern="[0-9]*"
        className="w-full border border-line-2 bg-panel-solid px-4 py-3 font-display text-lg text-ink outline-none focus:border-cyan"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^\d]/g, ""))}
      />
    </label>
  );
}
