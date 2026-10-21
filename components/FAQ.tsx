import type { FaqItem } from "@/lib/types";
import { Reveal } from "./Reveal";

export function FAQ({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section id="faq" className="section-pad bg-[var(--cream)]">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="section-eyebrow">Got Questions?</p>
          <h2 className="section-title mt-2">Frequently Asked Questions</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-[var(--maroon)]/10">
          {faqs.map((item, i) => (
            <Reveal key={item._id} delayMs={i * 40}>
              <details className="group py-5">
                <summary className="cursor-pointer list-none font-medium text-[var(--ink)] marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span className="mt-0.5 shrink-0 text-[var(--maroon)] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-[var(--ink-muted)]">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
