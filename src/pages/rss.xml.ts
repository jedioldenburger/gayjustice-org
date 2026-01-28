import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime()
  );

  const site = "https://www.gayjustice.org";
  const feedTitle = "GayJustice.org Blog";
  const feedDescription =
    "Artikelen over rechtsbescherming, gelijke behandeling en mensenrechten.";

  const lastBuildDate =
    sortedPosts.length > 0
      ? sortedPosts[0].data.pubDatetime.toUTCString()
      : new Date().toUTCString();

  function getPostUrl(post: any): string {
    if (post.data.lang === "en") {
      return `${site}/en/blog/${post.slug}/`;
    }
    return `${site}/blog/${post.slug}/`;
  }

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(feedTitle)}</title>
    <link>${site}/blog/</link>
    <description>${escapeXml(feedDescription)}</description>
    <language>nl</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml"/>
    <generator>Astro</generator>
    <copyright>Stichting Vrijheid &amp; Gelijkheid (STVG)</copyright>${sortedPosts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${getPostUrl(post)}</link>
      <guid isPermaLink="true">${getPostUrl(post)}</guid>
      <description>${escapeXml(post.data.description)}</description>
      <pubDate>${post.data.pubDatetime.toUTCString()}</pubDate>
      <author>info@gayjustice.org (${escapeXml(post.data.author)})</author>${
        post.data.tags
          ?.map((tag: string) => `
      <category>${escapeXml(tag)}</category>`)
          .join("") || ""
      }
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xmlContent, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};
