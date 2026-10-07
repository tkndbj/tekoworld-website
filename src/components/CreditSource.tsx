/**
 * One supplier: who they are, what of theirs is in the game, and where to find them.
 *
 * A row rather than a paragraph because this is a list that grows every time a pack is
 * bought, and a list somebody has to re-write in prose is a list that goes stale. That is
 * not hypothetical - the credits page exists because the line it replaces, frozen inside the
 * game's own settings panel, went on naming a supplier for five days after the last of
 * their artwork had been cut out of the build, and named none of the four suppliers whose
 * work had replaced it. Here it is one commit and no app update.
 */
export function CreditSource({
  name,
  href,
  used,
}: {
  name: string;
  href?: string;
  used: string;
}) {
  return (
    <li className="border-b border-line py-4 last:border-b-0">
      <p className="font-display text-base font-semibold text-ink">
        {href ? (
          <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className="transition-colors hover:text-cyan"
          >
            {name}
          </a>
        ) : (
          name
        )}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-ink-2">{used}</p>
    </li>
  );
}
