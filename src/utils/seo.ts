// src/utils/seo.ts
import { SITE } from "@/config/site";

export type Breadcrumb = { name: string; url: string };

export type DatasetDownload = {
  contentUrl: string;
  encodingFormat: string;
};

export type SeoDataset = {
  name: string;
  description?: string;
  url: string;
  sameAs?: string[];
  keywords?: string[];
  distribution?: DatasetDownload[];
};

export type SeoArticle = {
  headline?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
};

export type SeoFaqItem = {
  question: string;
  answer: string;
};

export type SeoAlternate = {
  hreflang: string;
  href: string;
};

export type SeoInput = {
  title?: string; // Page title (without suffix)
  description?: string;
  keywords?: string[]; // Meta keywords array
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  canonical?: string; // absolute or relative
  alternates?: SeoAlternate[];
  robots?: string; // "index,follow" etc
  ogImage?: string; // absolute or relative
  lang?: string;
  type?: "website" | "article";
  breadcrumbs?: Breadcrumb[];
  dataset?: SeoDataset;
  article?: SeoArticle;
  faq?: SeoFaqItem[];
};

export function absUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return SITE.url;

  try {
    return new URL(pathOrUrl).toString();
  } catch {
    return new URL(pathOrUrl.replace(/^\//, "/"), SITE.url).toString();
  }
}

export function pageTitle(title?: string) {
  const brand = SITE.displayUrl || SITE.shortName || SITE.name;
  if (!title) return brand;

  // If the caller already provided a full title containing the brand, don't append.
  if (title.includes(brand)) return title;

  return `${title} | ${brand}`;
}

export function canonicalUrl(canonical?: string, pathname?: string) {
  if (canonical) return absUrl(canonical);
  if (pathname) return absUrl(pathname);
  return SITE.url;
}

export function ogImageUrl(ogImage?: string) {
  return absUrl(ogImage || SITE.defaultOgImage);
}

export function defaultDescription(desc?: string) {
  return (
    desc ||
    "GayJustice.org is an initiative of Stichting Vrijheid & Gelijkheid (STVG), focused on legal protection, equal treatment, and justice for gay people where discrimination and exclusion persist."
  );
}
