import { createClient } from "@sanity/client";

export const hasSanityConfig = Boolean(
  import.meta.env.SANITY_PROJECT_ID && import.meta.env.SANITY_DATASET
);

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId: import.meta.env.SANITY_PROJECT_ID,
      dataset: import.meta.env.SANITY_DATASET,
      apiVersion: "2026-06-23",
      useCdn: import.meta.env.PROD,
    })
  : null;

export async function fetchSanity<T>(query: string, params: Record<string, unknown> = {}, fallback: T): Promise<T> {
  if (!sanityClient) {
    return fallback;
  }

  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (error) {
    console.warn("Sanity fetch failed. Rendering fallback content.", error);
    return fallback;
  }
}

export function imageUrl(source?: { asset?: { url?: string } } | string): string {
  if (!source) {
    return "";
  }

  if (typeof source === "string") {
    return source;
  }

  return source.asset?.url ?? "";
}

export function formatDate(dateValue: string): string {
  return new Intl.DateTimeFormat("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateValue));
}
