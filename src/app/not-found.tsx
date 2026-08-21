import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">This glade is dark</h1>
      <p className="mt-4 text-muted">
        There is nothing at that address. The light may have moved.
      </p>
      <p className="mt-6">
        <Link href="/" className="text-accent underline underline-offset-2">
          Back to the grove
        </Link>
      </p>
    </main>
  );
}
