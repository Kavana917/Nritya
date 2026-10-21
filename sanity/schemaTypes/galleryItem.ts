import { defineField, defineType } from "sanity";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery Item",
  type: "document",
  fields: [
    defineField({ name: "caption", title: "Caption", type: "string" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Class", value: "class" },
          { title: "Recital", value: "recital" },
          { title: "Stage", value: "stage" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Image / Video Cover Thumbnail",
      type: "image",
      options: { hotspot: true },
      description:
        "Photo or cover thumbnail for videos. Recommended for video items so they display nicely in the gallery grid.",
      validation: (r) =>
        r.custom((image, context) => {
          const doc = context.document as
            | { videoFile?: unknown; videoUrl?: string }
            | undefined;
          if (!image && !doc?.videoFile && !doc?.videoUrl) {
            return "Please provide an image, upload a video file, or add a video URL.";
          }
          return true;
        }),
    }),
    defineField({
      name: "videoFile",
      title: "Direct Video File Upload",
      type: "file",
      options: {
        accept: "video/*",
      },
      description: "Upload a video file directly (MP4, WebM, MOV).",
    }),
    defineField({
      name: "videoUrl",
      title: "External Video URL (YouTube / Vimeo)",
      type: "url",
      description: "Or paste a link to a YouTube or Vimeo video.",
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      initialValue: 0,
      description: "Optional manual order override (lower numbers come first).",
    }),
  ],
  preview: {
    select: {
      title: "caption",
      subtitle: "category",
      media: "image",
      videoUrl: "videoUrl",
      hasVideoFile: "videoFile.asset._ref",
    },
    prepare({ title, subtitle, media, videoUrl, hasVideoFile }) {
      const typeTag = hasVideoFile ? " [Video File]" : videoUrl ? " [Video URL]" : "";
      return {
        title: (title || "Untitled Gallery Item") + typeTag,
        subtitle: subtitle ? `Category: ${subtitle}` : undefined,
        media,
      };
    },
  },
});
