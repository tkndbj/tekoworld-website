import type { Metadata } from "next";
import { Suspense } from "react";
import { UsersAdmin } from "@/components/admin/UsersAdmin";

export const metadata: Metadata = {
  title: "Users",
};

/**
 * Every player, and one player (`?uid=`): the account, its progress, its wallet, its gifts, and a
 * Gift key. A query string rather than a `[uid]` segment so the page stays a static shell (see
 * `UsersAdmin`); `useSearchParams` needs the Suspense boundary to prerender.
 */
export default function AdminUsersPage() {
  return (
    <Suspense fallback={<main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14"><p className="text-ink-2">Loading...</p></main>}>
      <UsersAdmin />
    </Suspense>
  );
}
