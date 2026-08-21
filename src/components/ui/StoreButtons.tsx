import { site } from "@/lib/site";

function GooglePlay() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden>
      <path d="M1.6.7a1.7 1.7 0 0 0-.6 1.3v18c0 .5.2 1 .6 1.3L11.3 11 1.6.7Z" fill="#34C6F4" />
      <path d="m15.2 7.2-3.9 3.8 3.9 3.9 4-2.3c.8-.5.8-1.7 0-2.2l-4-3.2Z" fill="#FFD400" />
      <path d="M1.6 21.3c.5.4 1.2.5 1.9.1l11.7-6.5-3.9-3.9-9.7 10.3Z" fill="#FF3333" />
      <path d="M15.2 7.2 3.5.6C2.8.2 2.1.3 1.6.7L11.3 11l3.9-3.8Z" fill="#48FF48" />
    </svg>
  );
}

function AppStore() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden fill="currentColor">
      <path d="M14.6 11.6c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.1-1.5 2.6-.4 6.6 1.1 8.7.7 1.1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.2 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.5-.1 0-2.2-.9-2.2-3.3ZM12.4 4.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-1 2.6 1 .1 2-.5 2.7-1.2Z" />
    </svg>
  );
}

/**
 * Nothing is listed yet, so rather than shipping two dead buttons the page says
 * so. A "Download" that goes nowhere is worse than an honest "coming soon" -
 * and this disappears by itself the moment the store URLs are filled in.
 */
export function StoreButtons({ className = "" }: { className?: string }) {
  const { android, ios } = site.stores;

  if (!android && !ios) {
    return (
      <div className={className}>
        <p className="inline-flex items-center gap-2.5 rounded-2xl border-2 border-line bg-panel px-4 py-3 text-sm font-bold text-ink-2 shadow-[0_4px_0_var(--line)]">
          <span className="anim-glow h-2.5 w-2.5 rounded-full bg-glimmer shadow-[0_0_10px_var(--glimmer)]" />
          Coming soon to Android and iOS
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {android ? (
        <a href={android} className="btn btn-primary">
          <GooglePlay />
          Get it on Google Play
        </a>
      ) : null}
      {ios ? (
        <a href={ios} className="btn btn-wood">
          <AppStore />
          Download on the App Store
        </a>
      ) : null}
    </div>
  );
}
