/**
 * The Tekoworld mark: a faceted gem lit from inside, with a T cut through it.
 *
 * Kept to flat facets so it still reads at favicon size. The gradient ids are
 * suffixed so two marks on one page (header and footer) do not fight over them.
 */
export function Mark({
  className = "",
  id = "mark",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd45c" />
          <stop offset="0.55" stopColor="#ff8b1f" />
          <stop offset="1" stopColor="#ff3d5a" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2ee6ff" />
          <stop offset="1" stopColor="#a862ff" />
        </linearGradient>
      </defs>
      {/* gem body */}
      <path d="M10 16 17 7h14l7 9-14 30Z" fill={`url(#${id}-a)`} />
      {/* crown facets */}
      <path d="M17 7 10 16h8l3-9Z" fill="#ffe9a8" opacity="0.65" />
      <path d="M31 7l7 9h-8l-3-9Z" fill="#ff5f43" opacity="0.5" />
      <path d="M21 7h6l3 9H18Z" fill="#fff3c9" opacity="0.7" />
      {/* the T, cut through the gem */}
      <path d="M15 19h18v5h-6.5v12h-5V24H15Z" fill="#06070d" />
      <path d="M15 19h18v5h-6.5v12h-5V24H15Z" fill={`url(#${id}-b)`} opacity="0.9" />
    </svg>
  );
}

export function Wordmark({
  className = "",
  id = "wm",
  small = false,
}: {
  className?: string;
  id?: string;
  small?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark className={small ? "h-8 w-8" : "h-10 w-10"} id={id} />
      <span
        className={`font-display font-bold uppercase leading-none tracking-[0.18em] ${
          small ? "text-base" : "text-lg"
        }`}
      >
        Teko<span className="text-fire">world</span>
      </span>
    </span>
  );
}
