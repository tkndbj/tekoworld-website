"use client";

/**
 * The gift dialog: coins, gems or both, an amount for each, one confirmation, and the server's
 * answer. Everything it sends is checked again by `adminGiftPlayer`; the limits here only stop a
 * request the server would refuse from being sent.
 *
 * A gift cannot be taken back once sent (see `gifts.ts`), so the confirmation names the player and
 * the amounts in full, and the dialog stays up after a success to say what was sent.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { explain, number, playerLabel } from "./AdminSession";
import { GIFT_LIMITS, giftPlayer, type GiftReply, type PlayerRow } from "./players";

export function GiftModal({ player, onClose, onSent }: {
  player: Pick<PlayerRow, "uid" | "name" | "pendingGifts">;
  onClose: () => void;
  /** The server's answer, so the page behind can repaint without another read. */
  onSent: (reply: GiftReply) => void;
}) {
  const [coinsOn, setCoinsOn] = useState(true);
  const [gemsOn, setGemsOn] = useState(false);
  const [coins, setCoins] = useState("");
  const [gems, setGems] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState<GiftReply | null>(null);
  const first = useRef<HTMLInputElement>(null);

  useEffect(() => {
    first.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape" && !busy) onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [busy, onClose]);

  const coinsValue = coinsOn ? Number(coins) : 0;
  const gemsValue = gemsOn ? Number(gems) : 0;

  const problem = useMemo(() => {
    if (!coinsOn && !gemsOn) return "Choose coins, gems or both.";
    if (coinsOn && (coins === "" || !Number.isInteger(coinsValue) || coinsValue < 1 || coinsValue > GIFT_LIMITS.maxCredits)) {
      return `Coins must be a whole number from 1 to ${number.format(GIFT_LIMITS.maxCredits)}.`;
    }
    if (gemsOn && (gems === "" || !Number.isInteger(gemsValue) || gemsValue < 1 || gemsValue > GIFT_LIMITS.maxGems)) {
      return `Gems must be a whole number from 1 to ${number.format(GIFT_LIMITS.maxGems)}.`;
    }
    if (player.pendingGifts.length >= GIFT_LIMITS.maxPending) {
      return `This player already has ${GIFT_LIMITS.maxPending} unclaimed gifts, the most at once.`;
    }
    return null;
  }, [coinsOn, gemsOn, coins, gems, coinsValue, gemsValue, player.pendingGifts.length]);

  const summary = [
    coinsValue > 0 ? `${number.format(coinsValue)} coins` : null,
    gemsValue > 0 ? `${number.format(gemsValue)} gems` : null,
  ].filter(Boolean).join(" and ");

  async function send() {
    if (problem || busy) return;
    const ok = window.confirm(
      `Send ${summary} to ${playerLabel(player)}?\n\n` +
      `uid ${player.uid}\n\n` +
      `The gift appears on their hub the next time the game talks to the server. It cannot be taken back.`
    );
    if (!ok) return;

    setBusy(true);
    setError(null);
    try {
      const reply = await giftPlayer(player.uid, coinsValue, gemsValue);
      setSent(reply);
      onSent(reply);
    } catch (e) {
      setError(explain(e));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
         onMouseDown={(e) => { if (e.target === e.currentTarget && !busy) onClose(); }}>
      <div role="dialog" aria-modal="true" aria-labelledby="gift-title"
           className="panel w-full max-w-md px-6 py-7">
        <p className="kicker">Gift</p>
        <h2 id="gift-title" className="mt-2 truncate text-2xl">{playerLabel(player)}</h2>
        <p className="mt-1 truncate font-mono text-xs text-ink-3">{player.uid}</p>

        {sent ? (
          <div className="mt-6">
            <p role="status" className="text-emerald">
              Sent {number.format(sent.gift.credits)} coins and {number.format(sent.gift.gems)} gems.
            </p>
            <p className="mt-2 text-sm text-ink-2">
              Gift <span className="font-mono text-xs text-ink-3">{sent.gift.id}</span>. The player now has{" "}
              {sent.pending.length} unclaimed {sent.pending.length === 1 ? "gift" : "gifts"}; they see them on the hub
              the next time the game talks to the server, and claim them with one tap.
            </p>
            <div className="mt-6 flex justify-end">
              <button className="btn btn-fire" onClick={onClose}>Done</button>
            </div>
          </div>
        ) : (
          <form className="mt-6 grid gap-5" onSubmit={(e) => { e.preventDefault(); void send(); }}>
            <Choice label="Coins" on={coinsOn} setOn={setCoinsOn} value={coins} setValue={setCoins}
                    inputRef={first} tone="text-gold" />
            <Choice label="Gems" on={gemsOn} setOn={setGemsOn} value={gems} setValue={setGems} tone="text-violet" />

            {error && <p role="alert" className="text-sm text-ruby">{error}</p>}
            {!error && problem && (coins !== "" || gems !== "" || (!coinsOn && !gemsOn)) && (
              <p className="text-sm text-ember">{problem}</p>
            )}
            {!problem && <p className="text-sm text-ink-2">Sends {summary}. You will be asked to confirm.</p>}

            <div className="flex justify-end gap-3">
              <button type="button" className="btn" disabled={busy} onClick={onClose}>Cancel</button>
              <button type="submit" className="btn btn-fire" disabled={busy || !!problem}>
                {busy ? "Sending..." : "Send gift"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Choice({ label, on, setOn, value, setValue, inputRef, tone }: {
  label: string;
  on: boolean;
  setOn: (v: boolean) => void;
  value: string;
  setValue: (v: string) => void;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  tone: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="flex items-center gap-3 text-sm text-ink-2">
        <input type="checkbox" className="h-4 w-4 accent-[var(--accent)]" checked={on}
               onChange={(e) => setOn(e.target.checked)} />
        <span className={`font-display text-lg ${tone}`}>{label}</span>
      </label>
      <input
        ref={inputRef}
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder={on ? "Amount" : "Not included"}
        disabled={!on}
        className="w-full border border-line-2 bg-panel-solid px-4 py-3 font-display text-lg text-ink outline-none focus:border-cyan disabled:opacity-40"
        value={value}
        onChange={(e) => setValue(e.target.value.replace(/[^\d]/g, ""))}
      />
    </div>
  );
}
