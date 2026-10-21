import { defineField, defineType } from "sanity";

export const classProgram = defineType({
  name: "classProgram",
  title: "Class / Program",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "skillGroup", title: "Age / Skill Group", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "whatIsTaught",
      title: "What Is Taught",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      description: "e.g. In-person group, Online, Private lessons",
    }),
    defineField({ name: "schedule", title: "Schedule", type: "string" }),
    defineField({ name: "locationNotes", title: "Location Notes", type: "string" }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number", initialValue: 0 }),
  ],
  orderings: [
    {
      title: "Sort Order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "skillGroup" },
  },
});
