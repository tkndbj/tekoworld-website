"use client";

/**
 * What every admin page shares: the owner's Google sign-in, the three access states, the words a
 * failed call is explained in, the page frame with its navigation, and the small formatters.
 *
 * Access is decided by the server, never here: a page is "allowed" once its first call answered
 * and "denied" when that call said `permission-denied`. The pages only ask and show the answer -
 * the token check in the functions (`requireAdmin`) is the whole of the security.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { webAuth } from "@/lib/firebase-web";

export type Access = "checking" | "signed-out" | "denied" | "allowed";

export const number = new Intl.NumberFormat("en-US");

/** A moment, in the owner's own time zone. */
export function when(unix: number): string {
  if (!unix) return "never";
  return new Date(unix * 1000).toLocaleString(undefined, {
    year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
  });
}

/** "3h ago", "2d ago", "just now" - how long since a unix second, against the server's clock. */
export function ago(unix: number, nowUnix: number): string {
  if (!unix) return "never";
  const s = Math.max(0, nowUnix - unix);
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  if (s < 30 * 86400) return `${Math.floor(s / 86400)}d ago`;
  return `${Math.floor(s / (30 * 86400))}mo ago`;
}

export function isDenied(error: unknown): boolean {
  return (error as { code?: string })?.code === "functions/permission-denied";
}

/** What a failed call says, in words the owner can act on. */
export function explain(error: unknown): string {
  const code = (error as { code?: string })?.code ?? "";
  const message = (error as { message?: string })?.message ?? String(error);
  if (code === "functions/permission-denied") return "This Google account is not allowed to use the admin pages.";
  if (code === "functions/unauthenticated") return "Sign in again.";
  if (code === "functions/not-found") return message || "No such player.";
  if (code === "functions/invalid-argument" || code === "functions/failed-precondition") return message;
  if (code === "functions/unavailable" || code === "functions/deadline-exceeded") {
    return "The server could not be reached. Check the connection and try again.";
  }
  if (code === "functions/internal" && message === "internal") {
    return "The server failed to answer. If this keeps happening, the functions may not be deployed.";
  }
  return message;
}

export interface AdminSession {
  user: User | null;
  access: Access;
  /** A page's first call decides: `settle()` on success, `settle(error)` on failure. */
  settle: (error?: unknown) => void;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  /** The sign-in's own error, if any. */
  error: string | null;
}

/**
 * The owner's sign-in, shared by every admin page.
 *
 * `onAuth` is called from the auth subscription with every account change - a sign-in, a sign-out,
 * a switch - and it is where a page resets what it showed and asks for the new account's data. A
 * subscription callback rather than an effect on `user`, because that is the one place React lets
 * a page set state in answer to an external system (the React compiler's rule); the latest
 * callback is kept on a ref so the page's loader can close over fresh state.
 */
export function useAdminSession(onAuth?: (user: User | null) => void): AdminSession {
  const [user, setUser] = useState<User | null>(null);
  const [access, setAccess] = useState<Access>("checking");
  const [error, setError] = useState<string | null>(null);

  const latest = useRef(onAuth);
  useEffect(() => { latest.current = onAuth; }, [onAuth]);

  useEffect(() => {
    return onAuthStateChanged(webAuth(), (next) => {
      setUser(next);
      setAccess(next ? "checking" : "signed-out");
      latest.current?.(next);
    });
  }, []);

  const settle = useCallback((e?: unknown) => {
    if (e === undefined) setAccess("allowed");
    else setAccess(isDenied(e) ? "denied" : "allowed");
  }, []);

  const signIn = useCallback(async () => {
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
  }, []);

  const out = useCallback(async () => { await signOut(webAuth()); }, []);

  return { user, access, settle, signIn, signOut: out, error };
}

const PAGES = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/shop", label: "Shop deals" },
];

/** The admin pages' navigation. The current page is lit; the others are links. */
export function AdminNav() {
  const pathname = usePathname() ?? "";
  return (
    <nav aria-label="Admin pages" className="mb-8 flex flex-wrap gap-2">
      {PAGES.map((page) => {
        const active = pathname === page.href || pathname.startsWith(page.href + "/");
        return (
          <Link key={page.href} href={page.href} aria-current={active ? "page" : undefined}
                className={active ? "btn btn-sm btn-fire" : "btn btn-sm"}>
            {page.label}
          </Link>
        );
      })}
    </nav>
  );
}

/**
 * The frame every admin page stands in: the title, the navigation, the signed-in account, and the
 * three states a page can be in before it may show anything.
 */
export function AdminFrame({ title, kicker = "Gemfire admin", session, wide = false, children }: {
  title: string;
  kicker?: string;
  session: AdminSession;
  wide?: boolean;
  children: ReactNode;
}) {
  const { user, access, signIn, signOut, error } = session;
  return (
    <main className={`mx-auto w-full flex-1 px-4 py-10 sm:px-6 sm:py-14 ${wide ? "max-w-6xl" : "max-w-3xl"}`}>
      <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="kicker">{kicker}</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">{title}</h1>
        </div>
        {user && (
          <div className="flex items-center gap-3 text-sm text-ink-2">
            <span className="max-w-[16rem] truncate">{user.email}</span>
            <button className="btn btn-sm" onClick={() => void signOut()}>Sign out</button>
          </div>
        )}
      </header>

      <AdminNav />

      {error && (
        <p role="alert" className="panel panel-sm mb-6 border-l-2 border-ruby px-5 py-4 text-sm text-ink">{error}</p>
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
            {user?.email} cannot use the admin pages. Sign out and use one of the owner&apos;s accounts.
          </p>
        </section>
      )}

      {access === "allowed" && children}
    </main>
  );
}

/** A labelled value in a details grid. */
export function Fact({ label, children, mono = false }: { label: string; children: ReactNode; mono?: boolean }) {
  return (
    <div className="min-w-0">
      <dt className="text-xs uppercase tracking-wide text-ink-3">{label}</dt>
      <dd className={`mt-1 truncate text-ink ${mono ? "font-mono text-sm" : ""}`}>{children}</dd>
    </div>
  );
}

/** A player's name, or the uid in its place, the way every list and heading says it. */
export function playerLabel(row: { uid: string; name: string | null }): string {
  return row.name ?? row.uid;
}
