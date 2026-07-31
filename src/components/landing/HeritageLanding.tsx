import {
  ABOUT,
  BENEFITS,
  CONTACT,
  CTA,
  CURRICULA,
  HERO,
  STATS,
  SUBJECTS,
} from "@/data/content";
import {
  BookOpen,
  FlaskConical,
  Languages,
  MessageCircle,
  Users,
  Award,
  Globe2,
} from "lucide-react";
import { VariationBar } from "./VariationBar";
import { WhatsAppFab, WhatsAppIcon } from "./WhatsAppFab";

const subjectIcons = {
  maths: BookOpen,
  languages: Languages,
  science: FlaskConical,
} as const;

const benefitIcons = {
  batches: Users,
  experience: Award,
  french: Globe2,
} as const;

export function HeritageLanding() {
  return (
    <div className="min-h-dvh bg-white font-[family-name:var(--font-dm)] text-stone-800">
      <VariationBar current="heritage" />

      <nav className="sticky top-[52px] z-50 border-b border-stone-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/images/mpm-logo.png" alt="MPower Minds" className="h-10 w-auto object-contain" />
            <span className="hidden font-[family-name:var(--font-playfair)] text-lg font-semibold text-stone-900 sm:inline">
              {CONTACT.brand}
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-stone-600 md:flex">
            <a href="#subjects" className="transition-colors hover:text-orange-600">
              Subjects
            </a>
            <a href="#benefits" className="transition-colors hover:text-orange-600">
              Benefits
            </a>
            <a href="#curricula" className="transition-colors hover:text-orange-600">
              Curricula
            </a>
            <a href="#about" className="transition-colors hover:text-orange-600">
              About
            </a>
          </div>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-2xl bg-orange-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-orange-600 sm:px-5"
          >
            <WhatsAppIcon className="size-5" />
            <span className="hidden sm:inline">{CTA.nav}</span>
            <span className="sm:hidden">Chat</span>
          </a>
        </div>
      </nav>

      <header id="top" className="heritage-hero text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="space-y-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-100/90">
              {CONTACT.tagline}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              {HERO.line1}
              <br />
              <span className="text-amber-100">{HERO.line2}</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-amber-50/95 sm:text-xl">
              {HERO.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2.5 rounded-2xl bg-white px-6 text-base font-semibold text-orange-600 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="size-5" />
                {CTA.join}
              </a>
              <a
                href="#curricula"
                className="inline-flex h-12 items-center rounded-2xl border-2 border-white/80 px-6 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                {CTA.secondary}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[1.75rem] bg-white/15 blur-sm" aria-hidden />
            <img
              src="/images/hero-warm.jpg"
              alt="Live online tutoring session at a home study desk"
              className="relative aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-2xl shadow-black/25"
            />
          </div>
        </div>
      </header>

      <section id="about" className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <img
              src="/images/about-mentor.jpg"
              alt="One-to-one mentoring over written work"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-xl shadow-stone-200/80"
            />
          </div>
          <div className="space-y-7 md:col-span-7">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
              {ABOUT.title}
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 sm:text-xl">{ABOUT.body}</p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={
                    i === 0
                      ? "rounded-2xl bg-orange-50 p-4 text-center sm:p-5"
                      : i === 1
                        ? "rounded-2xl bg-teal-50 p-4 text-center sm:p-5"
                        : "rounded-2xl bg-amber-50 p-4 text-center sm:p-5"
                  }
                >
                  <div
                    className={
                      i === 0
                        ? "font-[family-name:var(--font-playfair)] text-2xl font-bold text-orange-600 sm:text-3xl"
                        : i === 1
                          ? "font-[family-name:var(--font-playfair)] text-2xl font-bold text-teal-600 sm:text-3xl"
                          : "font-[family-name:var(--font-playfair)] text-2xl font-bold text-amber-700 sm:text-3xl"
                    }
                  >
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-stone-600 sm:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="subjects" className="bg-stone-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-10 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900 sm:text-4xl">
            Subjects we master
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {SUBJECTS.map((s) => {
              const Icon = subjectIcons[s.id as keyof typeof subjectIcons];
              return (
                <article
                  key={s.id}
                  className="rounded-[1.5rem] border border-stone-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone-600">{s.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-10 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900 sm:text-4xl">
            Why families choose {CONTACT.brand}
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {BENEFITS.map((b) => {
              const Icon = benefitIcons[b.id as keyof typeof benefitIcons];
              return (
                <article key={b.id} className="text-center">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                    <Icon className="size-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900">{b.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone-600">{b.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="curricula" className="bg-stone-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-10 text-center font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900 sm:text-4xl">
            Admissions open for
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CURRICULA.map((c) => (
              <div
                key={c}
                className="rounded-2xl border border-stone-100 bg-white px-6 py-5 text-base font-medium text-stone-800 shadow-sm"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="mb-8 font-[family-name:var(--font-playfair)] text-3xl font-bold text-stone-900 sm:text-4xl">
            Real students, real results
          </h2>
          <img
            src="/images/hero-french.jpg"
            alt="French language study materials prepared for class"
            className="mx-auto aspect-[2/1] w-full max-w-4xl rounded-[1.5rem] object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="heritage-cta py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold sm:text-4xl md:text-5xl">
            {CTA.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">{CTA.body}</p>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-14 items-center gap-3 rounded-2xl bg-white px-8 text-lg font-semibold text-orange-600 transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="size-6" />
            {CTA.primary}
          </a>
          <p className="mt-6 text-sm text-white/85">
            <a href={`tel:${CONTACT.phoneTel}`} className="underline-offset-2 hover:underline">
              {CONTACT.phone}
            </a>
            {" · "}
            <a href={`mailto:${CONTACT.email}`} className="underline-offset-2 hover:underline">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </section>

      <footer className="bg-stone-900 py-12 text-center text-stone-300">
        <div className="mx-auto max-w-6xl px-4">
          <p className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-white">
            {CONTACT.brand}
          </p>
          <p className="mt-2 text-sm">{CONTACT.educator} · Expert online coaching</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              WhatsApp
            </a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
              Email
            </a>
            <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-white">
              Call
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppFab />
    </div>
  );
}
