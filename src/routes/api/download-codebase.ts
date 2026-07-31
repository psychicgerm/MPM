import { createFileRoute } from "@tanstack/react-router";
import { readFile } from "node:fs/promises";
import path from "node:path";

const FILENAME = "mpowerminds-codebase.zip";

async function loadZip(): Promise<Buffer> {
  const candidates = [
    path.resolve(process.cwd(), "public", FILENAME),
    path.resolve("/workspace/public", FILENAME),
  ];

  let lastError: unknown;
  for (const filePath of candidates) {
    try {
      return await readFile(filePath);
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError instanceof Error ? lastError : new Error("Zip not found");
}

export const Route = createFileRoute("/api/download-codebase")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const data = await loadZip();
          return new Response(new Uint8Array(data), {
            status: 200,
            headers: {
              "Content-Type": "application/zip",
              "Content-Length": String(data.byteLength),
              "Content-Disposition": `attachment; filename="${FILENAME}"`,
              "Cache-Control": "no-store",
              "X-Content-Type-Options": "nosniff",
            },
          });
        } catch {
          return new Response(
            JSON.stringify({
              error: "Codebase archive not found. Rebuild with: git archive -o public/mpowerminds-codebase.zip HEAD",
            }),
            {
              status: 404,
              headers: { "Content-Type": "application/json" },
            },
          );
        }
      },
    },
  },
});
