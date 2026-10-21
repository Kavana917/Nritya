import Link from "next/link";
import type { SiteSettings } from "@/lib/types";

export function Footer({ settings }: { settings: SiteSettings }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--maroon)]/10 bg-[var(--cream)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center md:px-8">
        <div>
          <p className="site-logo-text text-[var(--maroon-deep)]">
            {settings.schoolName}
          </p>
          <p className="mt-3 text-sm text-[var(--ink-muted)]">
            {settings.tagline}
            {settings.city ? ` · ${settings.city}` : ""}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-[var(--ink-muted)]">
          {settings.instagram && (
            <a
              href={settings.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--maroon)]"
            >
              Instagram
            </a>
          )}
          {settings.youtube && (
            <a
              href={settings.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--maroon)]"
            >
              YouTube
            </a>
          )}
          {settings.facebook && (
            <a
              href={settings.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--maroon)]"
            >
              Facebook
            </a>
          )}

        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-[var(--ink-muted)] md:px-8">
        © {year} {settings.schoolName}. All rights reserved.
      </p>
    </footer>
  );
}
