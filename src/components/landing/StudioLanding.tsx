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
  ArrowRight,
  BookOpen,
  FlaskConical,
  Languages,
  Minus,
} from "lucide-react";
import { VariationBar } from "./VariationBar";
import { WhatsAppFab, WhatsAppIcon } from "./WhatsAppFab";

export function StudioLanding() {
  return (
    <div className="studio-grid min-h-dvh font-[family-name:var(--font-dm)] text-neutral-900">
      <VariationBar current="studio" />

      <nav className="border-b border-neutral-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/images/mpm-logo.png" alt="MPower Minds" className="h-8 w-auto" />
            <span className="font-[family-name:var(--font-syne)] text-base font-semibold tracking-tight">
              {CONTACT.brand}
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-neutral-500 md:flex">
            <a href="#subjects" className="hover:text-neutral-900">
              Subjects
            </a>
            <a href="#benefits" className="hover:text-neutral-900">
              Why us
            </a>
            <a href="#curricula" className="hover:text-neutral-900">
              Curricula
            </a>
            <a href="#about" className="hover:text-neutral-900">
              About
            </a>
          </div>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Get started
          </a>
        </div>
      </nav>

      <header id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="mb-4 text-sm font-medium text-teal-700">
              Live online coaching · {CONTACT.educator}
            </p>
            <h1 className="font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {HERO.line1}
              <br />
              <span className="text-teal-700">{HERO.line2}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-500">
              {HERO.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-teal-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
              >
                <WhatsAppIcon className="size-5" />
                Free demo class
              </a>
              <a
                href="#curricula"
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-300"
              >
                View curricula
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/images/hero-studio.jpg"
              alt="Clean modern study desk"
              className="aspect-[5/4] w-full rounded-2xl object-cover ring-1 ring-neutral-200"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white px-4 py-6 text-center sm:px-6 sm:py-8">
              <p className="font-[family-name:var(--font-syne)] text-2xl font-semibold tabular-nums text-neutral-900 sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-neutral-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </header>

      <section id="subjects" className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Subjects
            </h2>
            <p className="max-w-sm text-sm text-neutral-500">
              Focused live classes across maths, science, and languages.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {SUBJECTS.map((s) => {
              const Icon =
                s.id === "maths" ? BookOpen : s.id === "languages" ? Languages : FlaskConical;
              return (
                <article
                  key={s.id}
                  className="group rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-teal-600/40 hover:bg-teal-50/30"
                >
                  <Icon className="size-5 text-teal-700" strokeWidth={1.75} />
                  <h3 className="mt-5 font-[family-name:var(--font-syne)] text-xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">{s.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="benefits" className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
            Built differently
          </h2>
          <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
            {BENEFITS.map((b) => (
              <div
                key={b.id}
                className="grid gap-3 py-6 sm:grid-cols-[200px_1fr] sm:gap-10 sm:py-7"
              >
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-neutral-900">
                  {b.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-teal-700">Educator</p>
            <h2 className="mt-2 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
              {CONTACT.educator}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-500">{ABOUT.body}</p>
          </div>
          <img
            src="/images/about-mentor.jpg"
            alt="Mentoring session"
            className="aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-neutral-200"
          />
        </div>
      </section>

      <section id="curricula" className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
            Curricula
          </h2>
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {CURRICULA.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-4 text-sm font-medium text-neutral-800"
              >
                <Minus className="size-4 shrink-0 text-teal-600" strokeWidth={2.5} />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-900 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Start with a free demo
            </h2>
            <p className="mt-2 max-w-md text-neutral-400">{CTA.body}</p>
          </div>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 shrink-0 items-center gap-2 rounded-lg bg-teal-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-teal-400"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp now
          </a>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-sm text-neutral-500 sm:flex-row sm:items-center sm:px-6">
          <p className="font-[family-name:var(--font-syne)] font-semibold text-neutral-900">
            {CONTACT.brand}
          </p>
          <p>
            <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-neutral-900">
              {CONTACT.phone}
            </a>
            {" · "}
            <a href={`mailto:${CONTACT.email}`} className="hover:text-neutral-900">
              {CONTACT.email}
            </a>
          </p>
        </div>
      </footer>

      <WhatsAppFab />
    </div>
  );
}
