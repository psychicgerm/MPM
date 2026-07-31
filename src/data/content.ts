export const CONTACT = {
  brand: "MPower Minds",
  educator: "Manisha Panicker",
  email: "manishabalagopalan@gmail.com",
  phone: "+91 9833193551",
  phoneTel: "+919833193551",
  whatsapp: "https://wa.link/vjpkqc",
  tagline: "Live Online Coaching",
} as const;

export const STATS = [
  { value: "15+", label: "Years experience" },
  { value: "6–8", label: "Students per batch" },
  { value: "100%", label: "Personalized attention" },
] as const;

export const SUBJECTS = [
  {
    id: "maths",
    title: "Mathematics",
    description: "From foundations to advanced problem-solving for school and entrance tracks.",
  },
  {
    id: "languages",
    title: "Languages",
    description: "French and English at expert level — with special strength in IGCSE French.",
  },
  {
    id: "science",
    title: "Science",
    description: "Physics, Chemistry, and Biology taught with clarity and exam craft.",
  },
] as const;

export const BENEFITS = [
  {
    id: "batches",
    title: "Small batches",
    description:
      "Only 6–8 students per class so every learner gets real attention, feedback, and pace.",
  },
  {
    id: "experience",
    title: "15+ years mentoring",
    description:
      "Proven guidance for Cambridge International students across years of board cycles.",
  },
  {
    id: "french",
    title: "IGCSE French expertise",
    description:
      "Specialized coaching in one of the most demanding language papers students face.",
  },
] as const;

export const CURRICULA = [
  "All International Curriculums",
  "IGCSE, A Levels, IB",
  "VCE, GCSE, O Levels",
  "ICSE / CBSE / State (5th–10th)",
  "XI & XII JEE/NEET (Science & Commerce)",
  "JEE/NEET Entrance Prep",
] as const;

export const HERO = {
  line1: "Small batches.",
  line2: "Unlimited brilliance.",
  subtitle:
    "Expert live online coaching by Manisha Panicker — 15+ years of Cambridge International experience.",
} as const;

export const ABOUT = {
  title: "Meet Manisha Panicker",
  body: "Fifteen years mentoring students of the Cambridge International Curriculum. A renowned IGCSE French specialist and a passionate online educator who keeps classes personal, rigorous, and encouraging.",
} as const;

export const CTA = {
  title: "Ready to MPower your child’s future?",
  body: "Limited small batches are open. Book a free demo class on WhatsApp today.",
  primary: "WhatsApp for free demo",
  secondary: "Explore curricula",
  nav: "WhatsApp now",
  join: "Join limited batches",
} as const;
