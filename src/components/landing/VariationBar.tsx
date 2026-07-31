import { Link } from "@tanstack/react-router";
import { ArrowLeft, LayoutGrid } from "lucide-react";
import { VARIATIONS, type VariationSlug } from "@/data/variations";
import { cn } from "@/lib/utils";

export function VariationBar({
  current,
  tone = "light",
}: {
  current: VariationSlug;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "sticky top-0 z-[60] border-b backdrop-blur-md",
        isDark
          ? "border-white/10 bg-[#0b1220]/90 text-white"
          : "border-black/5 bg-white/90 text-ink",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-6">
        <Link
          to="/"
          className={cn(
            "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full px-3 text-sm font-medium transition-colors",
            isDark
              ? "bg-white/10 hover:bg-white/15"
              : "bg-black/[0.04] hover:bg-black/[0.07]",
          )}
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          <LayoutGrid className="size-3.5 sm:hidden" aria-hidden />
          <span className="hidden sm:inline">All variations</span>
        </Link>

        <div className="min-w-0 flex-1 overflow-x-auto">
          <div className="flex items-center gap-1.5">
            {VARIATIONS.map((v) => {
              const active = v.slug === current;
              return (
                <Link
                  key={v.slug}
                  to="/v/$slug"
                  params={{ slug: v.slug }}
                  className={cn(
                    "inline-flex h-9 shrink-0 items-center rounded-full px-3.5 text-sm font-medium transition-colors",
                    active
                      ? isDark
                        ? "bg-white text-[#0b1220]"
                        : "bg-ink text-white"
                      : isDark
                        ? "text-white/70 hover:bg-white/10 hover:text-white"
                        : "text-ink/60 hover:bg-black/[0.04] hover:text-ink",
                  )}
                >
                  {v.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
