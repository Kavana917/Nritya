import Image from "next/image";
import type { HeroContent, SiteSettings } from "@/lib/types";

export function Hero({
  hero,
  settings,
}: {
  hero: HeroContent;
  settings: SiteSettings;
}) {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {hero.imageUrl && (
        <Image
          src={hero.imageUrl}
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-5 pb-28 pt-28 text-center md:px-8">
        <h1 className="hero-animate hero-delay-1 font-display max-w-4xl text-4xl leading-[1.1] text-white md:text-6xl lg:text-7xl">
          {hero.headline}
        </h1>

        <p className="hero-animate hero-delay-2 mt-5 text-[0.7rem] font-light uppercase tracking-[0.28em] text-white/85 md:text-xs">
          {settings.city}
          <span className="mx-2 opacity-60">·</span>
          {settings.tagline}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <div className="flex items-end justify-between gap-6 px-5 pb-10 md:px-8 md:pb-12 lg:px-10">
          <p className="hero-animate hero-delay-3 max-w-md text-left text-sm leading-relaxed text-white/90 md:text-base">
            {hero.subheadline}
          </p>

          <a
            href="#contact"
            className="hero-animate hero-delay-4 cta-btn mr-1 inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--maroon)] px-6 py-3 text-sm font-light tracking-wide text-white transition hover:bg-[var(--maroon-deep)] md:mr-2"
          >
            Contact
            <span aria-hidden className="text-base leading-none">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
