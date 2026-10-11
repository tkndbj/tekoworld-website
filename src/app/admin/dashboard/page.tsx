import type { Metadata } from "next";
import { DashboardAdmin } from "@/components/admin/DashboardAdmin";

export const metadata: Metadata = {
  title: "Dashboard",
};

/**
 * The admin front door: find a player, see who is active, and reach the users list and the shop.
 * Everything happens in the browser against the game's callables; the page itself is static.
 */
export default function AdminDashboardPage() {
  return <DashboardAdmin />;
}
