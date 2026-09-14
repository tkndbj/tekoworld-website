import Link from "next/link";
import { gemfire } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-5 py-28 text-center">
      <div aria-hidden className="grid-floor" />
      <div
        aria-hidden
        className="orb"
        style={{ "--x": "50%", "--y": "40%", "--c": "var(--violet)", "--s": "50rem" } as React.CSSProperties}
      />

      <p className="kicker relative">Error 404</p>
      <h1 className="font-display relative mt-5 text-[6rem] font-bold leading-none sm:text-[9rem]">
        <span className="text-gem">4</span>
        <span className="text-fire">0</span>
        <span className="text-gem">4</span>
      </h1>
      <h2 className="relative mt-4 text-2xl sm:text-3xl">The wall has no gate here.</h2>
      <p className="relative mt-4 max-w-md text-lg leading-relaxed text-ink-2">
        There is nothing at that address. The raiders looked, and they are very
        thorough about this sort of thing.
      </p>
      <div className="relative mt-9 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-fire">
          Back to the studio
        </Link>
        <Link href={gemfire.path} className="btn">
          See {gemfire.name}
        </Link>
      </div>
    </main>
  );
}
