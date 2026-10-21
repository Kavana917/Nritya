"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryItem } from "@/lib/types";
import { Reveal } from "./Reveal";

const INITIAL_BATCH_SIZE = 12;
const LOAD_MORE_STEP = 12;

function parseVideoEmbed(url: string): string | null {
  try {
    const u = new URL(url);

    // YouTube: youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
    }

    // YouTube: youtube.com/watch?v=<id> or /shorts/<id> or /embed/<id>
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}?autoplay=1`;
      if (u.pathname.startsWith("/shorts/")) {
        const id = u.pathname.replace("/shorts/", "");
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
      }
      if (u.pathname.startsWith("/embed/")) {
        return `${url}?autoplay=1`;
      }
    }

    // Vimeo: vimeo.com/<id>
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      if (id && !isNaN(Number(id))) {
        return `https://player.vimeo.com/video/${id}?autoplay=1`;
      }
    }
  } catch {
    return null;
  }
  return null;
}

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_BATCH_SIZE);

  const visible = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  // Close modal with Escape key and lock body scroll
  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_STEP);
  };

  return (
    <section id="gallery" className="section-pad bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="section-eyebrow">Visual Showcase</p>
          <h2 className="section-title mt-2">Gallery</h2>
          <p className="mt-3 max-w-xl text-[var(--ink-muted)]">
            Moments from class, recitals, and the stage — shown in their natural
            proportions.
          </p>
        </Reveal>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((item, i) => {
            const isVideo = Boolean(item.videoFileUrl || item.videoUrl);

            return (
              <Reveal
                key={item._id}
                delayMs={(i % 3) * 40}
                className="mb-4 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  className="group relative block w-full overflow-hidden rounded-none border border-[var(--maroon)]/20 bg-white/80 text-left shadow-sm transition-all duration-300 hover:border-[var(--maroon)]/60 hover:shadow-md"
                >
                  {/* Media Preview: Image or Video with Straight Borders */}
                  {item.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.imageUrl}
                      alt={item.caption || "Gallery moment"}
                      className="h-auto w-full rounded-none transition duration-500 group-hover:scale-[1.02]"
                      loading={i < 4 ? "eager" : "lazy"}
                    />
                  ) : item.videoFileUrl ? (
                    <video
                      src={item.videoFileUrl}
                      preload="metadata"
                      muted
                      playsInline
                      className="h-auto w-full rounded-none object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex aspect-video w-full items-center justify-center rounded-none bg-[var(--maroon)]/10 text-sm text-[var(--ink-muted)]">
                      View Moment
                    </div>
                  )}

                  {/* Video Indicator Badge - Straight rectangular tag */}
                  {isVideo && (
                    <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-none bg-black/75 px-2.5 py-1 text-xs font-medium text-white shadow-md backdrop-blur-md transition group-hover:bg-[var(--maroon)]">
                      <svg
                        className="h-3 w-3 fill-current text-[var(--gold)]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span>{item.videoFileUrl ? "Video" : "Watch"}</span>
                    </div>
                  )}

                  {/* Play icon overlay on hover for video items */}
                  {isVideo && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-none bg-black/60 text-white shadow-lg backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-[var(--maroon)]">
                        <svg
                          className="ml-0.5 h-5 w-5 fill-current text-[var(--gold)]"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Caption & Category */}
                  {(item.caption || item.category) && (
                    <div className="border-t border-[var(--maroon)]/10 bg-white/90 p-3">
                      {item.category && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--gold)]">
                          {item.category}
                        </span>
                      )}
                      {item.caption && (
                        <p className="mt-0.5 line-clamp-2 text-sm text-[var(--ink)]">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2.5 rounded-full border border-[var(--gold)]/40 bg-[var(--maroon)] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:bg-[#520d18] hover:shadow-xl active:scale-95"
            >
              <span>Load More Moments</span>
              <span className="rounded-full bg-black/20 px-2 py-0.5 text-xs text-[var(--gold)]">
                +{Math.min(LOAD_MORE_STEP, items.length - visibleCount)}
              </span>
            </button>
            <p className="mt-3 text-xs text-[var(--ink-muted)]">
              Showing {visible.length} of {items.length} items
            </p>
          </div>
        )}

        {!hasMore && items.length > INITIAL_BATCH_SIZE && (
          <p className="mt-12 text-center text-xs uppercase tracking-widest text-[var(--ink-muted)]">
            All {items.length} moments loaded
          </p>
        )}
      </div>

      {/* Lightbox Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-none border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-white/20"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <div
            className="relative max-h-[92vh] max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Direct Video File */}
            {active.videoFileUrl ? (
              <video
                src={active.videoFileUrl}
                controls
                autoPlay
                playsInline
                className="aspect-video max-h-[80vh] w-full min-w-[min(90vw,52rem)] rounded-none border border-white/20 bg-black shadow-2xl"
              >
                Your browser does not support video playback.
              </video>
            ) : active.videoUrl && parseVideoEmbed(active.videoUrl) ? (
              /* 2. External Video (YouTube / Vimeo) */
              <iframe
                src={parseVideoEmbed(active.videoUrl)!}
                title={active.caption || "Video player"}
                className="aspect-video w-full min-w-[min(90vw,52rem)] rounded-none border border-white/20 bg-black shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              /* 3. Image Photo */
              active.imageUrl && (
                <div className="flex justify-center">
                  <Image
                    src={active.imageUrl}
                    alt={active.caption || "Gallery photo"}
                    width={1400}
                    height={1000}
                    className="max-h-[80vh] w-auto rounded-none border border-white/20 object-contain shadow-2xl"
                  />
                </div>
              )
            )}

            {/* Modal Caption & Details */}
            {(active.caption || active.category) && (
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-white">
                {active.caption && (
                  <p className="text-sm font-medium text-white/95 md:text-base">
                    {active.caption}
                  </p>
                )}
                {active.category && (
                  <span className="rounded-none border border-[var(--gold)]/40 bg-black/40 px-3 py-1 text-xs uppercase tracking-wider text-[var(--gold)]">
                    {active.category}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
