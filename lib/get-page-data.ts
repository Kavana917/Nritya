import { client } from "@/sanity/lib/client";
import { pageQuery } from "@/sanity/lib/queries";
import { hasSanityConfig } from "@/sanity/env";
import { fallbackPageData } from "./fallback-data";
import type { Achievement, GuruContent, PageData } from "./types";

function mergeGuru(guru: Partial<GuruContent> | null | undefined): GuruContent {
  return { ...fallbackPageData.guru, ...guru };
}

function mergeAchievements(
  items: Partial<Achievement>[] | null | undefined
): Achievement[] {
  if (!items || items.length === 0) return fallbackPageData.achievements;
  return items.map((item, i) => ({
    _id: item._id || `ach-${i}`,
    title: item.title || "",
    year: item.year || "",
    studentName: item.studentName || "",
    type: item.type || "arangetram",
    notes: item.notes || "",
    quote: item.quote || "",
    imageUrl: item.imageUrl ?? null,
  }));
}

function mergeWithFallback(data: Partial<PageData> | null): PageData {
  if (!data) return fallbackPageData;

  return {
    siteSettings: {
      ...fallbackPageData.siteSettings,
      ...data.siteSettings,
    },
    hero: { ...fallbackPageData.hero, ...data.hero },
    guru: mergeGuru(data.guru),
    classes:
      data.classes && data.classes.length > 0
        ? data.classes
        : fallbackPageData.classes,
    gallery:
      data.gallery && data.gallery.length > 0
        ? data.gallery
        : fallbackPageData.gallery,
    achievements: mergeAchievements(data.achievements),
    testimonials:
      data.testimonials && data.testimonials.length > 0
        ? data.testimonials
        : fallbackPageData.testimonials,
    faqs:
      data.faqs && data.faqs.length > 0 ? data.faqs : fallbackPageData.faqs,
  };
}

export async function getPageData(): Promise<PageData> {
  if (!hasSanityConfig || !client) {
    return fallbackPageData;
  }

  try {
    const data = await client.fetch<Partial<PageData>>(
      pageQuery,
      {},
      {
        next: { revalidate: 60 },
      }
    );
    return mergeWithFallback(data);
  } catch {
    return fallbackPageData;
  }
}
