import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Hero")
        .id("hero")
        .child(S.document().schemaType("hero").documentId("hero")),
      S.listItem()
        .title("Guru / Instructor")
        .id("guru")
        .child(S.document().schemaType("guru").documentId("guru")),
      S.divider(),
      S.documentTypeListItem("classProgram").title("Classes & Programs"),
      S.documentTypeListItem("galleryItem").title("Gallery"),
      S.documentTypeListItem("achievement").title("Achievements"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.documentTypeListItem("faq").title("FAQs"),
    ]);
