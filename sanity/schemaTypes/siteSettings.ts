import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "schoolName", title: "School Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "logo",
      title: "Header Logo Image",
      type: "image",
      description:
        "Optional. Upload a logo for the top-left header. If empty, the school name text is used instead (no border).",
      options: { hotspot: true },
    }),
    defineField({ name: "city", title: "City", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
      description: "Digits only with country code, e.g. 919876543210",
    }),
    defineField({ name: "address", title: "Studio Address", type: "text", rows: 2 }),
    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps Embed URL",
      type: "url",
      description: "Paste the iframe src from Google Maps → Share → Embed",
    }),
    defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
    defineField({ name: "youtube", title: "YouTube URL", type: "url" }),
    defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text", rows: 3 }),
  ],
  preview: {
    select: { title: "schoolName", subtitle: "city" },
  },
});
