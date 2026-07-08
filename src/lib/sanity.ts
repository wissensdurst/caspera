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

type ImageUrlOptions = {
  width?: number;
  height?: number;
  fit?: "crop" | "max";
};

export function imageUrl(source?: { asset?: { url?: string } } | string, options: ImageUrlOptions = {}): string {
  if (!source) {
    return "";
  }

  const rawUrl = typeof source === "string" ? source : source.asset?.url ?? "";

  if (!rawUrl || !rawUrl.includes("cdn.sanity.io")) {
    return rawUrl;
  }

  const url = new URL(rawUrl);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", options.fit ?? "max");

  if (options.width) {
    url.searchParams.set("w", String(options.width));
  }

  if (options.height) {
    url.searchParams.set("h", String(options.height));
  }

  return url.toString();
}

export function formatDate(dateValue: string): string {
  return new Intl.DateTimeFormat("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateValue));
}

type PortableTextBlock = {
  children?: Array<{ text?: string }>;
};

export function portableTextToPlainText(value?: PortableTextBlock[] | string): string {
  if (typeof value === "string") {
    return value;
  }

  if (!Array.isArray(value)) {
    return "";
  }

  return value
    .map((block) => block.children?.map((child) => child.text ?? "").join("") ?? "")
    .filter(Boolean)
    .join(" ");
}

export function truncateText(value = "", maxLength = 155): string {
  const normalized = value.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}

const escapeHtml = (value = "") =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export function portableTextToHtml(value?: PortableTextBlock[] | string): string {
  if (typeof value === "string") {
    return value
      .split(/\r?\n+/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");
  }

  if (!Array.isArray(value)) {
    return "";
  }

  return value
    .map((block) => block.children?.map((child) => child.text ?? "").join("") ?? "")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}
