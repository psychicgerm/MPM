import { useState, type MouseEvent } from "react";
import { Check, Download, Loader2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const ZIP_PATH = "/api/download-codebase";
const ZIP_NAME = "mpowerminds-codebase.zip";

type Props = {
  className?: string;
  variant?: "primary" | "header" | "ghost";
  label?: string;
  shortLabel?: string;
};

async function triggerBlobDownload(url: string, filename: string) {
  const res = await fetch(url, { credentials: "same-origin" });
  if (!res.ok) throw new Error(`Download failed (${res.status})`);
  const blob = await res.blob();
  if (blob.size < 1000 || blob.type.includes("text/html")) {
    throw new Error("Unexpected response — file not found");
  }
  const objectUrl = URL.createObjectURL(blob);
  try {
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = filename;
    a.rel = "noopener";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
  } finally {
    setTimeout(() => URL.revokeObjectURL(objectUrl), 2_000);
  }
}

export function DownloadCodeButton({
  className,
  variant = "primary",
  label = "Download code",
  shortLabel = "Code",
}: Props) {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (state === "loading") return;

    setState("loading");
    setErrorMsg(null);

    try {
      await triggerBlobDownload(ZIP_PATH, ZIP_NAME);
      setState("done");
      setTimeout(() => setState("idle"), 2500);
    } catch (err) {
      try {
        const opened = window.open(ZIP_PATH, "_blank", "noopener,noreferrer");
        if (!opened) {
          window.location.assign(ZIP_PATH);
        }
        setState("done");
        setTimeout(() => setState("idle"), 2500);
      } catch {
        setState("error");
        setErrorMsg(err instanceof Error ? err.message : "Download blocked");
        setTimeout(() => setState("idle"), 4000);
      }
    }
  }

  const styles =
    variant === "header"
      ? "h-9 rounded-full bg-teal-600 px-3.5 text-xs font-semibold text-white hover:bg-teal-500"
      : variant === "ghost"
        ? "h-12 rounded-xl border border-white/15 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10"
        : "h-12 rounded-xl bg-white px-5 text-sm font-semibold text-neutral-900 hover:bg-neutral-100";

  return (
    <div className="inline-flex flex-col items-stretch gap-1">
      <button
        type="button"
        onClick={handleClick}
        disabled={state === "loading"}
        className={cn(
          "inline-flex items-center justify-center gap-1.5 transition-colors disabled:opacity-70",
          styles,
          className,
        )}
      >
        {state === "loading" ? (
          <Loader2 className="size-3.5 animate-spin" aria-hidden />
        ) : state === "done" ? (
          <Check className="size-3.5" aria-hidden />
        ) : (
          <Download className="size-3.5" aria-hidden />
        )}
        <span className="hidden sm:inline">
          {state === "loading"
            ? "Preparing…"
            : state === "done"
              ? "Started"
              : state === "error"
                ? "Retry"
                : label}
        </span>
        <span className="sm:hidden">
          {state === "loading" ? "…" : state === "done" ? "OK" : shortLabel}
        </span>
      </button>
      {errorMsg ? (
        <p className="max-w-[14rem] text-[11px] leading-snug text-red-400">{errorMsg}</p>
      ) : null}
      {variant !== "header" ? (
        <a
          href={ZIP_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center gap-1 text-[11px] text-neutral-500 underline-offset-2 hover:text-neutral-300 hover:underline"
        >
          Or open zip in a new tab
          <ExternalLink className="size-3" />
        </a>
      ) : null}
    </div>
  );
}
