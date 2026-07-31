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
  HeartHandshake,
  Languages,
  Leaf,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { VariationBar } from "./VariationBar";
import { WhatsAppFab, WhatsAppIcon } from "./WhatsAppFab";

export function AtelierLanding() {
  return (
    <div className="atelier-paper min-h-dvh font-[family-name:var(--font-nunito)] text-stone-800">
      <VariationBar current="atelier" />

      <nav className="border-b border-stone-200/70 bg-[#faf6f0]/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/images/mpm-logo.png" alt="MPower Minds" className="h-10 w-auto object-contain" />
            <div className="leading-tight">
              <p className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-stone-900">
                {CONTACT.brand}
              </p>
              <p className="text-xs text-stone-500">A calm place to learn</p>
            </div>
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#3f6212] px-5 text-sm font-semibold text-[#faf6f0] shadow-sm transition-colors hover:bg-[#365314]"
          >
            <WhatsAppIcon className="size-5" />
            Book a chat
          </a>
        </div>
      </nav>

      <header id="top" className="mx-auto max-w-5xl px-4 pb-8 pt-12 sm:px-6 sm:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3f6212]/20 bg-[#3f6212]/8 px-3 py-1 text-xs font-semibold text-[#3f6212]">
              <Leaf className="size-3.5" />
              Trusted by families worldwide
            </span>
            <h1 className="mt-5 font-[family-name:var(--font-fraunces)] text-4xl font-semibold leading-[1.12] tracking-tight text-stone-900 sm:text-5xl">
              Learning that feels
              <br />
              <em className="not-italic text-[#3f6212]">personal again.</em>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-600">
              {HERO.subtitle} Gentle structure, rigorous standards, and room for
              every child to be heard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#3f6212] px-6 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Free demo on WhatsApp
              </a>
              <a
                href="#how"
                className="inline-flex h-12 items-center rounded-full border border-stone-300 bg-white/60 px-5 text-sm font-semibold text-stone-700 transition-colors hover:bg-white"
              >
                How it works
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[1.75rem] bg-[#d6d3c8]/50" aria-hidden />
            <img
              src="/images/hero-french.jpg"
              alt="French study materials in warm natural light"
              className="relative aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-3 rounded-[1.5rem] border border-stone-200/80 bg-white/70 p-4 sm:p-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-[family-name:var(--font-fraunces)] text-2xl font-semibold text-[#3f6212] sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-stone-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </header>

      <section id="how" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-stone-900 sm:text-4xl">
            Why parents choose us
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-stone-600">
            Not a factory of worksheets — a small atelier of focused, live classes.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const Icon = i === 0 ? HeartHandshake : i === 1 ? ShieldCheck : Sparkles;
            return (
              <article
                key={b.id}
                className="rounded-[1.5rem] border border-stone-200/80 bg-white/80 p-6 shadow-sm"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-[#3f6212]/10 text-[#3f6212]">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-xl font-semibold text-stone-900">
                  {b.title}
                </h3>
                <p className="mt-2 leading-relaxed text-stone-600">{b.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="bg-white/50 py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
          <img
            src="/images/about-mentor.jpg"
            alt="Careful mentoring over student work"
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-md"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3f6212]">
              Your mentor
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-stone-900 sm:text-4xl">
              {ABOUT.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">{ABOUT.body}</p>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-[#3f6212] px-5 text-sm font-semibold text-[#3f6212] transition-colors hover:bg-[#3f6212] hover:text-white"
            >
              Message Manisha
            </a>
          </div>
        </div>
      </section>

      <section id="subjects" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-stone-900 sm:text-4xl">
          Subjects we nurture
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {SUBJECTS.map((s) => {
            const Icon =
              s.id === "maths" ? BookOpen : s.id === "languages" ? Languages : FlaskConical;
            return (
              <article
                key={s.id}
                className="rounded-[1.5rem] bg-[#3f6212] p-7 text-[#faf6f0] shadow-md"
              >
                <Icon className="size-6 opacity-90" strokeWidth={1.5} />
                <h3 className="mt-5 font-[family-name:var(--font-fraunces)] text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#faf6f0]/85">{s.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="curricula" className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold text-stone-900">
          Curricula we support
        </h2>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {CURRICULA.map((c) => (
            <span
              key={c}
              className="rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 shadow-sm"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-4 mb-16 rounded-[1.75rem] bg-[#3f6212] px-6 py-14 text-center text-[#faf6f0] sm:mx-auto sm:max-w-5xl sm:px-10">
        <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-semibold sm:text-4xl">
          A free demo, no pressure
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[#faf6f0]/85">{CTA.body}</p>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#faf6f0] px-7 text-sm font-semibold text-[#3f6212] transition-transform hover:scale-[1.02]"
        >
          <WhatsAppIcon className="size-5" />
          {CTA.primary}
        </a>
        <p className="mt-5 text-sm text-[#faf6f0]/70">
          {CONTACT.phone} · {CONTACT.email}
        </p>
      </section>

      <footer className="border-t border-stone-200/80 py-10 text-center text-sm text-stone-500">
        <p className="font-[family-name:var(--font-fraunces)] text-base font-semibold text-stone-800">
          {CONTACT.brand}
        </p>
        <p className="mt-1">
          {CONTACT.educator} · {CONTACT.tagline}
        </p>
      </footer>

      <WhatsAppFab />
    </div>
  );
}
