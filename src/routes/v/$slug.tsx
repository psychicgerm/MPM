import { createFileRoute, notFound } from "@tanstack/react-router";
import { AtelierLanding } from "@/components/landing/AtelierLanding";
import { EditorialLanding } from "@/components/landing/EditorialLanding";
import { HeritageLanding } from "@/components/landing/HeritageLanding";
import { StudioLanding } from "@/components/landing/StudioLanding";
import { CONTACT } from "@/data/content";
import { getVariation, type VariationSlug } from "@/data/variations";

export const Route = createFileRoute("/v/$slug")({
  loader: ({ params }) => {
    const variation = getVariation(params.slug);
    if (!variation) throw notFound();
    return { variation };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.variation.name ?? "Variation"} · ${CONTACT.brand}`,
      },
      {
        name: "description",
        content:
          loaderData?.variation.pitch ??
          "MPower Minds online coaching landing page variation.",
      },
    ],
  }),
  component: VariationPage,
  notFoundComponent: () => (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-neutral-950 px-4 text-center text-white">
      <p className="text-lg font-medium">Variation not found</p>
      <a href="/" className="text-sm text-teal-400 underline-offset-2 hover:underline">
        Back to gallery
      </a>
    </div>
  ),
});

function VariationPage() {
  const { variation } = Route.useLoaderData();
  const slug = variation.slug as VariationSlug;

  switch (slug) {
    case "heritage":
      return <HeritageLanding />;
    case "editorial":
      return <EditorialLanding />;
    case "kindred":
      return <AtelierLanding />;
    case "studio":
      return <StudioLanding />;
    default:
      return null;
  }
}
