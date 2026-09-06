import { siteConfig } from "@/lib/site-config";

/** Fixed call + Telegram buttons, visible on every page. */
export function FloatingContact() {
  return (
    <div className="fixed bottom-5 z-40 flex flex-col gap-3 end-5">
      <a
        href={siteConfig.phoneHref}
        aria-label={`اتصل بنا: ${siteConfig.phone}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-ink-950 shadow-raised transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" />
        </svg>
      </a>
      <a
        href={siteConfig.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر تيليجرام"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-950 text-white shadow-raised-dark ring-1 ring-gold-500/40 transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M21.7 3.5 2.9 10.9c-1.2.5-1.2 1.2-.2 1.5l4.8 1.5 1.8 5.6c.2.6.4.8.8.8.4 0 .6-.2.8-.5l2.1-2.6 4.7 3.5c.9.5 1.5.2 1.7-.8l3-14.4c.3-1.2-.4-1.7-1.7-1Zm-3.3 3.4L8.9 13.3l-.4 3.3-.9-3.4 10.8-6.7c.2-.1.4 0 .3.2l-.3.2Z" />
        </svg>
      </a>
    </div>
  );
}
