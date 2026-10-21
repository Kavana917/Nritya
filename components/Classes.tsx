import type { ClassProgram } from "@/lib/types";
import { Reveal } from "./Reveal";

export function Classes({ classes }: { classes: ClassProgram[] }) {
  return (
    <section id="classes" className="bg-[var(--maroon)] py-12 md:py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Compact Header with reduced vertical gap */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10">
              <svg
                viewBox="0 0 48 48"
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <circle cx="24" cy="14" r="5" />
                <path d="M14 40c2-8 6-12 10-12s8 4 10 12" />
                <path d="M8 28h32" opacity="0.5" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-normal leading-snug text-white sm:text-3xl md:text-4xl">
              Classes shaped by tradition, taught with care
            </h2>
            <p className="mx-auto mt-2.5 max-w-2xl text-xs leading-relaxed text-white/85 sm:text-sm">
              From first adavus to Arangetram preparation — immersive Bharatanatyam
              training for every age and stage. No prior experience needed for
              beginner batches; just come ready to learn, move, and grow.
            </p>
          </Reveal>
        </div>

        {/* 4 Cards Arranged Horizontally in One Shot on Desktop */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          {classes.map((item, i) => (
            <Reveal key={item._id} delayMs={i * 50}>
              <article className="flex h-full flex-col justify-between rounded-2xl bg-[var(--cream)] p-5 text-[var(--ink)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    {item.skillGroup}
                  </p>
                  <h3 className="font-display mt-1 text-xl font-medium leading-snug text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--ink-muted)]">
                    {item.description}
                  </p>

                  <ul className="mt-3.5 space-y-1">
                    {item.whatIsTaught.map((taught) => (
                      <li
                        key={taught}
                        className="flex items-start text-xs text-[var(--ink)] before:mr-1.5 before:font-bold before:text-[var(--maroon)] before:content-['·']"
                      >
                        <span className="line-clamp-1">{taught}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 space-y-1 border-t border-[var(--maroon)]/15 pt-3 text-[11px] text-[var(--ink-muted)]">
                  <p>
                    <span className="font-semibold text-[var(--ink)]">Format: </span>
                    {item.format}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--ink)]">Schedule: </span>
                    {item.schedule}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--ink)]">Where: </span>
                    {item.locationNotes}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
