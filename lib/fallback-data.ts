import type { PageData } from "./types";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1920&q=80";
const GURU_IMAGE =
  "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=800&q=80";
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1514320291840-b9a56dcdbbe5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
];

export const fallbackPageData: PageData = {
  siteSettings: {
    schoolName: "Nritya Kalā Mandir",
    logoUrl: null,
    city: "Chennai",
    tagline: "Preserving tradition, inspiring movement",
    phone: "+91 98765 43210",
    email: "hello@nrityakalamandir.example",
    whatsapp: "919876543210",
    address: "12 Temple Road, Mylapore, Chennai 600004",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.2707!3d13.0339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzAyLjAiTiA4MMKwMTYnMTQuNSJF!5e0!3m2!1sen!2sin!4v1",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
    seoTitle: "Nritya Kalā Mandir | Bharatanatyam Classes in Chennai",
    seoDescription:
      "Authentic Bharatanatyam classes for all ages and skill levels in Chennai. Learn adavus, abhinaya, and prepare for Arangetram with an experienced guru.",
  },
  hero: {
    headline: "Discover the Grace of Bharatanatyam",
    subheadline:
      "Authentic Bharatanatyam classes for all ages and skill levels in Chennai.",
    primaryCtaLabel: "Contact",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "Explore Classes",
    secondaryCtaHref: "#classes",
    imageUrl: HERO_IMAGE,
    imageAlt: "Bharatanatyam dancer in araimandi posture",
  },
  guru: {
    name: "Guru Meenakshi Subramaniam",
    title: "Founder & Principal Instructor",
    headlineQuote:
      "I teach because some things can only be understood once they've been danced into existence.",
    bio: "I'm Guru Meenakshi Subramaniam, a Bharatanatyam artist and teacher. Dance has never just been about creating something beautiful — it's how we process emotion, preserve memory, and find light through life's hardest seasons.",
    secondaryNote:
      "Trained in the Kalakshetra bani, with 28 years of practice and 15 years of teaching.",
    lineage:
      "Trained in the Kalakshetra bani under the late Guru Rukmini Devi tradition lineage, with advanced coaching from senior artists in Chennai.",
    yearsPracticing: 28,
    yearsTeaching: 15,
    credentials: [
      "Arangetram completed at age 14",
      "National scholarship recipient for classical dance",
      "Performances at major sabhas across South India",
      "Certified examiner preparation coach (Annamalai University syllabus)",
    ],
    philosophy:
      "I believe technique and abhinaya must grow together. Classes balance rigorous adavu practice with cultural grounding, so every student—whether preparing for Arangetram or dancing for joy—carries the rasa of the tradition.",
    readMoreLabel: "Read more",
    readMoreUrl: "https://instagram.com",
    imageUrl: GURU_IMAGE,
    imageAlt: "Guru Meenakshi Subramaniam in dance attire",
  },
  classes: [
    {
      _id: "class-kids",
      title: "Little Lotus",
      skillGroup: "Beginners / Kids (5–9)",
      description:
        "A joyful introduction to rhythm, posture, and basic adavus in a nurturing group setting.",
      whatIsTaught: [
        "Basic adavus & araimandi",
        "Simple mudras",
        "Rhythm awareness (tala)",
        "Flexibility & coordination",
      ],
      format: "In-person group classes",
      schedule: "Saturdays 9:00–10:00 AM",
      locationNotes: "Studio Hall A, Mylapore",
    },
    {
      _id: "class-teens",
      title: "Teens Intermediate",
      skillGroup: "Teens (10–16)",
      description:
        "Deepen technique with jathis, short items, and expressive abhinaya.",
      whatIsTaught: [
        "Adavu variations & jathis",
        "Abhinaya fundamentals",
        "Natya Shastra basics",
        "Fitness & stamina",
      ],
      format: "In-person group classes",
      schedule: "Wed & Fri 5:00–6:30 PM",
      locationNotes: "Studio Hall A, Mylapore",
    },
    {
      _id: "class-adults",
      title: "Adult Foundations",
      skillGroup: "Adults (Beginner–Intermediate)",
      description:
        "Start or return to Bharatanatyam at your own pace—no prior experience required.",
      whatIsTaught: [
        "Core adavus",
        "Posture & alignment",
        "Introductory abhinaya",
        "Cultural context",
      ],
      format: "In-person group + optional private lessons",
      schedule: "Sundays 10:00–11:30 AM",
      locationNotes: "Studio Hall B / Online on request",
    },
    {
      _id: "class-advanced",
      title: "Arangetram Track",
      skillGroup: "Advanced / Intermediate",
      description:
        "Intensive repertoire, theory, and stage readiness for solo debut and exams.",
      whatIsTaught: [
        "Full margam items",
        "Advanced abhinaya",
        "Exam syllabus (Annamalai / Prayag)",
        "Performance coaching",
      ],
      format: "Small group + private coaching",
      schedule: "Tue & Thu 6:00–8:00 PM",
      locationNotes: "Studio Hall A, Mylapore",
    },
  ],
  gallery: GALLERY_IMAGES.map((url, i) => {
    const captions = [
      "Morning adavu practice",
      "Student recital — Alarippu",
      "Stage performance with live orchestra",
      "Abhinaya workshop and expressions",
      "Annual day celebrations",
      "Costume & temple jewelry preparation",
      "Guru-shishya coaching session",
      "Varnam performance at Music Academy",
      "Rhythm & Nattuvangam practice",
      "Senior disciples solo presentation",
      "Jathi & footwork synchronization",
      "Graduation recital preparation",
      "Mangalam finale with lamps",
      "Arangetram debut choreography",
      "Summer intensive student showcase",
      "Stage lighting & bhavam rehearsal",
    ];
    const categories: ("class" | "recital" | "stage")[] = [
      "class", "recital", "stage", "class", "recital", "stage",
      "class", "stage", "class", "recital", "class", "stage",
      "recital", "stage", "class", "stage"
    ];
    return {
      _id: `gallery-${i}`,
      caption: captions[i] || `Moments from Nritya Kalā ${i + 1}`,
      category: categories[i] || "recital",
      imageUrl: url,
      // Sample YouTube video on item 2 to showcase video lightbox capability
      videoUrl: i === 2 ? "https://www.youtube.com/watch?v=ScMzIvxBSi4" : undefined,
    };
  }),
  achievements: [
    {
      _id: "ach-1",
      title: "Arangetram",
      year: "2024",
      studentName: "Ananya R.",
      type: "arangetram",
      notes: "Full margam debut at Bharatiya Vidya Bhavan, Chennai.",
      quote:
        "Every rehearsal felt sacred. Guru’s guidance made my solo debut feel like a homecoming.",
      imageUrl: GALLERY_IMAGES[2],
    },
    {
      _id: "ach-2",
      title: "State Youth Festival — Gold",
      year: "2023",
      studentName: "Priya K.",
      type: "competition",
      notes: "Classical dance category, Tamil Nadu Youth Festival.",
      quote:
        "The discipline from class gave me the confidence to perform under pressure.",
      imageUrl: GALLERY_IMAGES[1],
    },
    {
      _id: "ach-3",
      title: "Annamalai University — Grade 5",
      year: "2025",
      studentName: "Exam cohort",
      type: "exam",
      notes: "Exam preparation cohort successfully certified.",
      quote:
        "Theory and practice were woven together — we felt ready for every paper and practical.",
      imageUrl: GALLERY_IMAGES[0],
    },
    {
      _id: "ach-4",
      title: "Adult Foundations Journey",
      year: "2024",
      studentName: "Sarah T.",
      type: "exam",
      notes: "Completed first year of adult beginner training.",
      quote:
        "As an adult beginner I worried I was too late. The class is welcoming, rigorous, and culturally rich.",
      imageUrl: GALLERY_IMAGES[3],
    },
    {
      _id: "ach-5",
      title: "Annual Recital Lead",
      year: "2025",
      studentName: "Meera S.",
      type: "competition",
      notes: "Lead item in the school annual day performance.",
      quote:
        "From shy first steps to holding the stage — patience and technique changed everything.",
      imageUrl: GALLERY_IMAGES[4],
    },
  ],
  testimonials: [],
  faqs: [
    {
      _id: "faq-1",
      question: "What is the recommended starting age for kids?",
      answer:
        "We welcome children from age 5. Younger students join Little Lotus for playful foundations; by age 7–8 most are ready for fuller adavu training.",
      sortOrder: 1,
    },
    {
      _id: "faq-2",
      question: "Do I need prior dance experience for adult classes?",
      answer:
        "No. Adult Foundations is designed for complete beginners and those returning after a break. We adapt pace while keeping classical standards.",
      sortOrder: 2,
    },
    {
      _id: "faq-3",
      question: "What is the appropriate attire for class?",
      answer:
        "Salwar kameez or dance top with leggings, hair tied back, and preferably barefoot. Intermediate and advanced students should bring ghungroos. Practice saree is introduced closer to performance season.",
      sortOrder: 3,
    },
    {
      _id: "faq-4",
      question: "What are the fee structures and payment policies?",
      answer:
        "Fees are billed monthly per batch. A free trial class is available for new students. Payment is due by the 5th of each month; details are shared after enrolment. Private lessons are quoted separately.",
      sortOrder: 4,
    },
  ],
};
