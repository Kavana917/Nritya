export type SiteSettings = {
  schoolName: string;
  logoUrl?: string | null;
  city: string;
  tagline: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  mapEmbedUrl: string;
  instagram?: string;
  youtube?: string;
  facebook?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type HeroContent = {
  headline: string;
  subheadline: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  imageUrl: string | null;
  imageAlt: string;
};

export type GuruContent = {
  name: string;
  title: string;
  headlineQuote: string;
  bio: string;
  secondaryNote: string;
  lineage: string;
  yearsPracticing: number;
  yearsTeaching: number;
  credentials: string[];
  philosophy: string;
  readMoreLabel: string;
  readMoreUrl: string;
  imageUrl: string | null;
  imageAlt: string;
};

export type ClassProgram = {
  _id: string;
  title: string;
  skillGroup: string;
  description: string;
  whatIsTaught: string[];
  format: string;
  schedule: string;
  locationNotes: string;
};

export type GalleryItem = {
  _id: string;
  caption?: string;
  category?: "class" | "recital" | "stage" | string;
  imageUrl?: string | null;
  videoFileUrl?: string | null;
  videoUrl?: string | null;
  _createdAt?: string;
};

export type Achievement = {
  _id: string;
  title: string;
  year: string;
  studentName: string;
  type: "arangetram" | "competition" | "exam";
  notes: string;
  quote: string;
  imageUrl: string | null;
};

export type Testimonial = {
  _id: string;
  quote: string;
  name: string;
  role: string;
};

export type FaqItem = {
  _id: string;
  question: string;
  answer: string;
  sortOrder: number;
};

export type PageData = {
  siteSettings: SiteSettings;
  hero: HeroContent;
  guru: GuruContent;
  classes: ClassProgram[];
  gallery: GalleryItem[];
  achievements: Achievement[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
};
