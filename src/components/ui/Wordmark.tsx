/**
 * The mark: one isometric tile from the game with a glimmer hanging over it.
 *
 * Drawn on the same 2:1 lattice as the artwork, so the logo and the dioramas
 * agree about which way the world leans. Kept to four flat shapes and a circle
 * so it still reads at favicon size.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Glimmer Groove"
    >
      <title>Glimmer Groove</title>
      {/* the light itself */}
      <circle cx="24" cy="9" r="7" fill="var(--glimmer)" opacity="0.35" />
      <circle cx="24" cy="9" r="4.6" fill="var(--glimmer)" />
      <circle cx="22.3" cy="7.3" r="1.5" fill="#fff8e2" />
      {/* the tile it is waking */}
      <path d="M24 16 42 26 24 36 6 26Z" fill="var(--grass)" />
      <path d="M6 26 24 36v7L6 33Z" fill="var(--grass-d)" />
      <path d="M24 36 42 26v7L24 43Z" fill="var(--leaf)" />
    </svg>
  );
}
