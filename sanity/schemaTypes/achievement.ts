import { defineField, defineType } from "sanity";

export const achievement = defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "studentName", title: "Student Name", type: "string" }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Arangetram", value: "arangetram" },
          { title: "Competition", value: "competition" },
          { title: "Exam", value: "exam" },
        ],
      },
    }),
    defineField({ name: "notes", title: "Achievement Notes", type: "text", rows: 3 }),
    defineField({
      name: "quote",
      title: "Voice / Quote",
      type: "text",
      rows: 3,
      description: "Student or parent voice about the experience",
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "year", media: "image" },
  },
});
