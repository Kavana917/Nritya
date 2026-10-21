import { defineField, defineType } from "sanity";

export const guru = defineType({
  name: "guru",
  title: "Guru / Instructor",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Title / Role", type: "string" }),
    defineField({
      name: "headlineQuote",
      title: "Headline Quote",
      type: "text",
      rows: 3,
      description: "Large statement shown at the top of the About section",
    }),
    defineField({ name: "bio", title: "Bio / Story", type: "text", rows: 5 }),
    defineField({
      name: "secondaryNote",
      title: "Secondary Note",
      type: "text",
      rows: 2,
      description: "Short side note (e.g. lineage highlight or book/credit)",
    }),
    defineField({ name: "lineage", title: "Lineage / Bani", type: "text", rows: 3 }),
    defineField({ name: "yearsPracticing", title: "Years Practicing", type: "number" }),
    defineField({ name: "yearsTeaching", title: "Years Teaching", type: "number" }),
    defineField({
      name: "credentials",
      title: "Credentials & Achievements",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "philosophy", title: "Teaching Philosophy", type: "text", rows: 4 }),
    defineField({
      name: "readMoreLabel",
      title: "Read More Button Label",
      type: "string",
      initialValue: "Read more",
    }),
    defineField({
      name: "readMoreUrl",
      title: "Read More URL",
      type: "url",
      description: "Usually the guru’s Instagram profile",
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "title", media: "image" },
  },
});
