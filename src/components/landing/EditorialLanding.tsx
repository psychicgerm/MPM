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
  ArrowUpRight,
  BookOpen,
  Check,
  FlaskConical,
  Languages,
  Quote,
} from "lucide-react";
import { VariationBar } from "./VariationBar";
import { WhatsAppFab, WhatsAppIcon } from "./WhatsAppFab";

export function EditorialLanding() {
  return (
    <div className="min-h-dvh bg-[#0b1220] font-[family-name:var(--font-source)] text-stone-200">
      <VariationBar current="editorial" tone="dark" />

      <nav className="border-b border-white/8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/mpm-logo.png"
              alt="MPower Minds"
              className="h-9 w-auto brightness-0 invert opacity-90"
            />
            <div>
              <p className="font-[family-name:var(--font-libre)] text-base font-bold tracking-tight text-white">
                {CONTACT.brand}
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-teal-300/80">
                Online coaching
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm text-stone-400 md:flex">
            <a href="#about" className="transition-colors hover:text-white">
              Educator
            </a>
            <a href="#subjects" className="transition-colors hover:text-white">
              Subjects
            </a>
            <a href="#curricula" className="transition-colors hover:text-white">
              Curricula
            </a>
          </div>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Enquire
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </nav>

      <header className="editorial-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-24 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-teal-300/90">
              Cambridge · IGCSE · IB · JEE/NEET
            </p>
            <h1 className="font-[family-name:var(--font-libre)] text-[2.35rem] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              Mentorship measured
              <br />
              <span className="text-teal-200/95">in quiet excellence.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-400">
              {HERO.subtitle} Small cohorts. Precise feedback. Results that hold
              under exam pressure.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-teal-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
              >
                <WhatsAppIcon className="size-5" />
                Request a demo class
              </a>
              <a
                href="#about"
                className="inline-flex h-12 items-center rounded-full px-5 text-sm font-medium text-stone-300 underline-offset-4 hover:text-white hover:underline"
              >
                Meet the educator
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-[family-name:var(--font-libre)] text-2xl font-bold text-white sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-stone-500 sm:text-sm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-8 hidden h-24 w-px bg-gradient-to-b from-teal-400/60 to-transparent md:block" />
            <img
              src="/images/hero-editorial.jpg"
              alt="Evening study lamp and academic notes"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-2xl shadow-black/50 ring-1 ring-white/10"
            />
            <blockquote className="absolute bottom-5 left-5 right-5 rounded-sm border border-white/10 bg-[#0b1220]/85 p-4 backdrop-blur-md sm:p-5">
              <Quote className="mb-2 size-4 text-teal-400" />
              <p className="font-[family-name:var(--font-libre)] text-sm italic leading-relaxed text-stone-200">
                “Small batches. Unlimited brilliance.”
              </p>
              <footer className="mt-2 text-xs text-stone-500">— {CONTACT.brand}</footer>
            </blockquote>
          </div>
        </div>
      </header>

      <section id="about" className="border-t border-white/8 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-400">
              The educator
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-libre)] text-3xl font-bold text-white sm:text-4xl">
              {CONTACT.educator}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-400">{ABOUT.body}</p>
            <ul className="mt-8 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b.id} className="flex gap-3 text-stone-300">
                  <Check className="mt-0.5 size-4 shrink-0 text-teal-400" strokeWidth={2.25} />
                  <span>
                    <strong className="font-semibold text-white">{b.title}.</strong>{" "}
                    {b.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/about-mentor.jpg"
            alt="Mentoring session focused on written work"
            className="aspect-[5/4] w-full rounded-sm object-cover ring-1 ring-white/10"
          />
        </div>
      </section>

      <section id="subjects" className="border-t border-white/8 bg-[#0e1628] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-400">
              Disciplines
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-libre)] text-3xl font-bold text-white sm:text-4xl">
              Subjects taught with precision
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-3">
            {SUBJECTS.map((s, i) => {
              const Icon =
                s.id === "maths" ? BookOpen : s.id === "languages" ? Languages : FlaskConical;
              return (
                <article key={s.id} className="bg-[#0e1628] p-8">
                  <Icon className="size-6 text-teal-400" strokeWidth={1.5} />
                  <h3 className="mt-5 font-[family-name:var(--font-libre)] text-xl font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-stone-400">{s.description}</p>
                  <p className="mt-6 text-xs tabular-nums text-stone-600">0{i + 1}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="curricula" className="border-t border-white/8 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-libre)] text-3xl font-bold text-white sm:text-4xl">
            Admissions open for
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {CURRICULA.map((c) => (
              <div
                key={c}
                className="flex items-center justify-between gap-4 border-b border-white/8 py-4"
              >
                <span className="text-base text-stone-200">{c}</span>
                <span className="text-xs uppercase tracking-wider text-teal-500/80">Open</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-teal-950/40 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-[family-name:var(--font-libre)] text-3xl font-bold text-white sm:text-4xl">
            {CTA.title}
          </h2>
          <p className="mt-4 text-lg text-stone-400">{CTA.body}</p>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#0b1220] transition-colors hover:bg-teal-50"
          >
            <WhatsAppIcon className="size-5" />
            {CTA.primary}
          </a>
          <p className="mt-6 text-sm text-stone-500">
            {CONTACT.phone} · {CONTACT.email}
          </p>
        </div>
      </section>

      <footer className="border-t border-white/8 py-10 text-center text-sm text-stone-500">
        <p className="font-[family-name:var(--font-libre)] text-white">{CONTACT.brand}</p>
        <p className="mt-1">
          {CONTACT.educator} · {CONTACT.tagline}
        </p>
      </footer>

      <WhatsAppFab />
    </div>
  );
}
