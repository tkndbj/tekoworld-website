import type { Metadata } from "next";
import { ShopAdmin } from "@/components/admin/ShopAdmin";

export const metadata: Metadata = {
  title: "Shop",
};

/**
 * Limited-time shop deals for Gemfire: coins sold for gems for a window, shown to every player
 * under the shop's Refer a Friend band. Everything happens in the browser against the game's
 * callables; the page itself is static.
 */
export default function AdminShopPage() {
  return <ShopAdmin />;
}
