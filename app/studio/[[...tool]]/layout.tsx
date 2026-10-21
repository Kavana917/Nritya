import type { Metadata, Viewport } from "next";
import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Studio | Content Management",
};

export const viewport: Viewport = {
  ...studioViewport,
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        height: "100vh",
        maxHeight: "100dvh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}
