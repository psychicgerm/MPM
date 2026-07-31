import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, FolderGit2 } from "lucide-react";
import { DownloadCodeButton } from "@/components/landing/DownloadCodeButton";
import { CONTACT } from "@/data/content";
import { VARIATIONS } from "@/data/variations";

export const Route = createFileRoute("/")({
  component: HubPage,
  head: () => ({
    meta: [
      { title: "MPower Minds — Landing Page Variations" },
      {
        name: "description",
        content:
          "Four professional redesigns of the MPower Minds online coaching landing page.",
      },
    ],
  }),
});

function HubPage() {
  return (
    <div className="min-h-dvh bg-[#0c0c0e] font-[family-name:var(--font-dm)] text-neutral-100">
      <header className="border-b border-white/8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/mpm-logo.png"
              alt="MPower Minds"
              className="h-10 w-auto object-contain"
            />
            <div>
              <p className="text-sm font-semibold tracking-tight">{CONTACT.brand}</p>
              <p className="text-xs text-neutral-500">Landing variations studio</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DownloadCodeButton variant="header" label="Download code" shortLabel="Code" />
            <a
              href="https://github.com/psychicgerm/mpowerminds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/10 px-3.5 text-xs font-medium text-neutral-400 transition-colors hover:border-white/20 hover:text-white"
            >
              GitHub
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-400/90">
            Design studio
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Four ways to present
            <br />
            <span className="text-neutral-400">{CONTACT.brand}</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
            Based on your mother’s original landing page for live online coaching —
            Maths, Science, French & English across international and Indian
            curricula. Each variation keeps the same content and WhatsApp conversion
            path, with a completely different visual language.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {VARIATIONS.map((v, i) => (
            <Link
              key={v.slug}
              to="/v/$slug"
              params={{ slug: v.slug }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={v.heroImage}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/40 to-transparent"
                  aria-hidden
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium tabular-nums text-white/90 backdrop-blur-sm">
                  0{i + 1}
                </span>
                <span
                  className="absolute right-4 top-4 size-3 rounded-full ring-2 ring-white/30"
                  style={{ backgroundColor: v.accent }}
                  aria-hidden
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold tracking-tight">
                      {v.name}
                    </h2>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                      {v.mood}
                    </p>
                  </div>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors group-hover:border-teal-500/40 group-hover:bg-teal-500/10 group-hover:text-teal-300">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{v.pitch}</p>
              </div>
            </Link>
          ))}
        </div>

        <aside className="mt-14 rounded-2xl border border-white/8 bg-white/[0.02] p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xl">
              <div className="mb-3 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-teal-400">
                <FolderGit2 className="size-5" />
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold">
                GitHub-ready codebase
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                Full source for this multi-variation site (React + TanStack Start + Tailwind).
                Push it to{" "}
                <span className="text-neutral-300">psychicgerm/mpowerminds</span> or a new
                repo. Includes README, LICENSE, all four variations, assets, and Vercel notes.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-neutral-500">
                <li>
                  <code className="text-neutral-400">npm install && npm run dev</code>
                </li>
                <li>
                  Edit copy in <code className="text-neutral-400">src/data/content.ts</code>
                </li>
                <li>
                  Designs in <code className="text-neutral-400">src/components/landing/</code>
                </li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-neutral-600">
                If the preview blocks downloads, use{" "}
                <strong className="font-medium text-neutral-400">“Or open zip in a new tab”</strong>{" "}
                below, then Save As from your browser.
              </p>
            </div>
            <DownloadCodeButton variant="primary" label="Download .zip" shortLabel="Download" />
          </div>
        </aside>

        <aside className="mt-5 rounded-2xl border border-white/8 bg-white/[0.02] p-6 sm:p-8">
          <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold">
            What stayed the same
          </h3>
          <ul className="mt-4 grid gap-2 text-sm text-neutral-400 sm:grid-cols-2">
            <li>Educator: {CONTACT.educator}</li>
            <li>WhatsApp: wa.link/vjpkqc</li>
            <li>Phone: {CONTACT.phone}</li>
            <li>Email: {CONTACT.email}</li>
            <li>Subjects: Maths · Science · French & English</li>
            <li>Focus: small batches, 15+ years, IGCSE French</li>
          </ul>
        </aside>
      </main>

      <footer className="border-t border-white/8 py-8 text-center text-xs text-neutral-600">
        Variations inspired by{" "}
        <a
          href="https://github.com/psychicgerm/mpowerminds"
          className="text-neutral-400 underline-offset-2 hover:text-neutral-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          psychicgerm/mpowerminds
        </a>
      </footer>
    </div>
  );
}
