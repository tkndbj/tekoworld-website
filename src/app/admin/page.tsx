import { redirect } from "next/navigation";

/** The bare address goes to the dashboard, which links to the other admin pages. */
export default function AdminIndex() {
  redirect("/admin/dashboard");
}
