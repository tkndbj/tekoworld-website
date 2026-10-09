import { redirect } from "next/navigation";

/** `/admin` has one page so far; the bare address goes to it. */
export default function AdminIndex() {
  redirect("/admin/shop");
}
