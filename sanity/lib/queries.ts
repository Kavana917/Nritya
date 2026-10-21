export const pageQuery = `{
  "siteSettings": *[_type == "siteSettings"][0]{
    schoolName,
    "logoUrl": logo.asset->url,
    city,
    tagline,
    phone,
    email,
    whatsapp,
    address,
    mapEmbedUrl,
    instagram,
    youtube,
    facebook,
    seoTitle,
    seoDescription
  },
  "hero": *[_type == "hero"][0]{
    headline,
    subheadline,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
    "imageUrl": image.asset->url,
    "imageAlt": coalesce(image.alt, headline)
  },
  "guru": *[_type == "guru"][0]{
    name,
    title,
    headlineQuote,
    bio,
    secondaryNote,
    lineage,
    yearsPracticing,
    yearsTeaching,
    credentials,
    philosophy,
    readMoreLabel,
    readMoreUrl,
    "imageUrl": image.asset->url,
    "imageAlt": coalesce(image.alt, name)
  },
  "classes": *[_type == "classProgram"] | order(sortOrder asc){
    _id,
    title,
    skillGroup,
    description,
    whatIsTaught,
    format,
    schedule,
    locationNotes
  },
  "gallery": *[_type == "galleryItem"] | order(_createdAt desc){
    _id,
    caption,
    category,
    "imageUrl": image.asset->url,
    "videoFileUrl": videoFile.asset->url,
    videoUrl,
    _createdAt
  },
  "achievements": *[_type == "achievement"] | order(year desc){
    _id,
    title,
    year,
    studentName,
    type,
    notes,
    quote,
    "imageUrl": image.asset->url
  },
  "testimonials": *[_type == "testimonial"] | order(sortOrder asc){
    _id,
    quote,
    name,
    role
  },
  "faqs": *[_type == "faq"] | order(sortOrder asc){
    _id,
    question,
    answer,
    sortOrder
  }
}`;
