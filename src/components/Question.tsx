/** One support question: a native disclosure, so it needs no script and works by keyboard. */
export function Question({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group panel panel-sm not-prose mb-3">
      <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-lg font-semibold marker:content-none">
        {q}
        <span
          aria-hidden
          className="tile h-8 w-8 shrink-0 transition-transform group-open:rotate-45"
        >
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <div className="prose-legal border-t border-line px-5 py-4 text-[0.95rem]">
        {children}
      </div>
    </details>
  );
}
