import { NotFoundBody } from "@/components/NotFoundBody";
import { getLocale } from "@/i18n/server";

/** A 404 inside a language (`notFound()` from a page), drawn in that language's chrome. */
export default async function NotFound() {
  return <NotFoundBody locale={await getLocale()} />;
}
