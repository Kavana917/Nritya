"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Achievement } from "@/lib/types";
import { Reveal } from "./Reveal";

const CARD_WIDTH = 280;
const GAP = 20;
const SPEED = 0.45; // px per frame at ~60fps

export function Achievements({ achievements }: { achievements: Achievement[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Triple the list so the loop always has room to wrap
  const loop = [...achievements, ...achievements, ...achievements];
  const setWidth =
    achievements.length > 0
      ? achievements.length * (CARD_WIDTH + GAP)
      : 0;

  useEffect(() => {
    const track = trackRef.current;
    if (!track || setWidth === 0) return;

    const tick = () => {
      if (!pausedRef.current && !draggingRef.current) {
        // Auto-advance + residual fling velocity
        offsetRef.current += SPEED + velocityRef.current;
        velocityRef.current *= 0.95;
        if (Math.abs(velocityRef.current) < 0.02) velocityRef.current = 0;
      }

      // Keep offset in [0, setWidth) for seamless loop
      if (offsetRef.current >= setWidth) {
        offsetRef.current -= setWidth;
      } else if (offsetRef.current < 0) {
        offsetRef.current += setWidth;
      }

      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [setWidth]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || setWidth === 0) return;

    const onWheel = (e: WheelEvent) => {
      // Prefer horizontal; fall back to vertical wheel as sideways scroll
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;
      e.preventDefault();
      pausedRef.current = true;
      offsetRef.current += delta;
      velocityRef.current = delta * 0.08;
      window.clearTimeout((onWheel as unknown as { t?: number }).t);
      (onWheel as unknown as { t?: number }).t = window.setTimeout(() => {
        pausedRef.current = false;
      }, 900);
    };

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      pausedRef.current = true;
      lastXRef.current = e.clientX;
      velocityRef.current = 0;
      track.setPointerCapture(e.pointerId);
      track.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const dx = e.clientX - lastXRef.current;
      lastXRef.current = e.clientX;
      offsetRef.current -= dx;
      velocityRef.current = -dx * 0.35;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      track.releasePointerCapture(e.pointerId);
      track.style.cursor = "grab";
      window.setTimeout(() => {
        if (!draggingRef.current) pausedRef.current = false;
      }, 600);
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);

    return () => {
      track.removeEventListener("wheel", onWheel);
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
    };
  }, [setWidth]);

  if (achievements.length === 0) return null;

  return (
    <section id="achievements" className="section-pad overflow-hidden bg-[var(--cream-warm)]">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="section-eyebrow">Milestones</p>
          <h2 className="section-title mt-2">Achievements & Voices</h2>
          <p className="mt-3 max-w-xl text-[var(--ink-muted)]">
            Arangetrams, competitions, certifications — and the voices of
            students who walked the path. Drag or scroll sideways; it loops
            endlessly.
          </p>
        </Reveal>
      </div>

      <div
        className="relative mt-10 select-none"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          if (!draggingRef.current) pausedRef.current = false;
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max cursor-grab flex-nowrap gap-5 will-change-transform active:cursor-grabbing"
          style={{ gap: GAP }}
        >
          {loop.map((item, i) => (
            <article
              key={`${item._id}-${i}`}
              className="shrink-0 overflow-hidden rounded-2xl bg-[var(--cream)] shadow-sm"
              style={{ width: CARD_WIDTH }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="pointer-events-none object-cover"
                    sizes="280px"
                    draggable={false}
                  />
                )}
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h3 className="font-display text-xl leading-tight text-[var(--ink)]">
                  {item.studentName || item.title}
                </h3>
                <p className="text-sm text-[var(--maroon)]">{item.title}</p>
                {item.quote && (
                  <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                    “{item.quote}”
                  </p>
                )}
                <div className="mt-2 flex items-end justify-between gap-2 border-t border-[var(--ink)]/10 pt-3">
                  <p className="line-clamp-2 text-xs text-[var(--ink-muted)]">
                    {item.notes}
                  </p>
                  <p className="shrink-0 text-sm font-medium tabular-nums text-[var(--ink)]">
                    {item.year}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
