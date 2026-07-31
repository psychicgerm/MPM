export type VariationSlug = "heritage" | "editorial" | "atelier" | "studio";

export type VariationMeta = {
  slug: VariationSlug;
  name: string;
  mood: string;
  pitch: string;
  heroImage: string;
  aboutImage: string;
  accent: string;
  surface: string;
};

export const VARIATIONS: VariationMeta[] = [
  {
    slug: "heritage",
    name: "Heritage",
    mood: "Brand-true · Warm & energetic",
    pitch:
      "A refined take on the original orange & teal identity : confident, conversion focused, and unmistakably MPower Minds.",
    heroImage: "/images/hero-warm.jpg",
    aboutImage: "/images/about-mentor.jpg",
    accent: "#ea580c",
    surface: "#fff7ed",
  },
  {
    slug: "editorial",
    name: "Editorial",
    mood: "Academic prestige · Quiet authority",
    pitch:
      "Ink and paper sophistication for families who choose tutors the way they choose universities : with care and trust.",
    heroImage: "/images/hero-editorial.jpg",
    aboutImage: "/images/about-mentor.jpg",
    accent: "#0f766e",
    surface: "#0b1220",
  },
  {
    slug: "atelier",
    name: "Atelier",
    mood: "Warm trust · Parent-first",
    pitch:
      "Soft cream and forest tones that feel like a calm study at home : designed for parents seeking safety and results.",
    heroImage: "/images/hero-french.jpg",
    aboutImage: "/images/about-mentor.jpg",
    accent: "#3f6212",
    surface: "#faf6f0",
  },
  {
    slug: "studio",
    name: "Studio",
    mood: "Modern minimal · Crystal clear",
    pitch:
      "Swiss clean whitespace and a single teal accent : sharp, contemporary, and effortless on devices.",
    heroImage: "/images/hero-studio.jpg",
    aboutImage: "/images/about-mentor.jpg",
    accent: "#0d9488",
    surface: "#fafafa",
  },
];

export function getVariation(slug: string): VariationMeta | undefined {
  return VARIATIONS.find((v) => v.slug === slug);
}
