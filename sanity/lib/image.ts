import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId, hasSanityConfig } from "../env";

const builder = hasSanityConfig
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) return null;
  return builder.image(source);
}

export function imageUrl(
  source: SanityImageSource | undefined | null,
  width = 1200
): string | null {
  if (!source || !builder) return null;
  return builder.image(source).width(width).auto("format").url();
}
