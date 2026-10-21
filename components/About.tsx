import Image from "next/image";
import type { GuruContent, SiteSettings } from "@/lib/types";
import { Reveal } from "./Reveal";

export function About({
  guru,
  settings,
}: {
  guru: GuruContent;
  settings: SiteSettings;
}) {
  const readMoreHref =
    guru.readMoreUrl || settings.instagram || "#contact";

  return (
    <section id="about" className="section-pad bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Left-aligned info, headline, bio, stats & CTA */}
          <div className="space-y-6 lg:col-span-7">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                {guru.title || "Artistic Director & Guru"}
              </p>
              {guru.headlineQuote && (
                <h2 className="font-display mt-3 text-3xl leading-[1.18] text-[var(--ink)] sm:text-4xl lg:text-5xl">
                  {guru.headlineQuote}
                </h2>
              )}
            </Reveal>

            <Reveal delayMs={80}>
              <div className="pt-1">
                <h3 className="font-display text-2xl text-[var(--maroon-deep)]">
                  {guru.name}
                </h3>
                {guru.bio && (
                  <p className="mt-3 text-base leading-relaxed text-[var(--ink-muted)]">
                    {guru.bio}
                  </p>
                )}
                {(guru.secondaryNote || guru.lineage) && (
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]/90">
                    {guru.secondaryNote || guru.lineage}
                  </p>
                )}
              </div>
            </Reveal>

            {/* Experience Stats */}
            {(guru.yearsPracticing > 0 || guru.yearsTeaching > 0) && (
              <Reveal delayMs={120}>
                <div className="flex flex-wrap gap-8 border-t border-[var(--maroon)]/15 pt-5">
                  {guru.yearsPracticing > 0 && (
                    <div>
                      <p className="font-display text-3xl font-semibold text-[var(--maroon)]">
                        {guru.yearsPracticing}+
                      </p>
                      <p className="mt-0.5 text-xs uppercase tracking-wider text-[var(--ink-muted)]">
                        Years Practicing
                      </p>
                    </div>
                  )}
                  {guru.yearsTeaching > 0 && (
                    <div>
                      <p className="font-display text-3xl font-semibold text-[var(--maroon)]">
                        {guru.yearsTeaching}+
                      </p>
                      <p className="mt-0.5 text-xs uppercase tracking-wider text-[var(--ink-muted)]">
                        Years Teaching
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            )}

            {/* CTA Button matching the reference image dark pill style */}
            <Reveal delayMs={160}>
              <div className="pt-2">
                <a
                  href={readMoreHref}
                  target={readMoreHref.startsWith("http") ? "_blank" : undefined}
                  rel={
                    readMoreHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2.5 rounded-full bg-[var(--ink)] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:bg-[var(--maroon)] hover:shadow-xl active:scale-95"
                >
                  <span>{guru.readMoreLabel || "Get in Touch"}</span>
                  <span aria-hidden="true" className="text-sm">↗</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Larger prominent portrait image */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <Reveal delayMs={100} className="w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[var(--sand)] shadow-2xl transition duration-500 hover:shadow-3xl">
                {guru.imageUrl && (
                  <Image
                    src={guru.imageUrl}
                    alt={guru.imageAlt || guru.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
