import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";
import { blogPosts } from "@/content/posts";

export async function GET() {
  const feedItems = blogPosts
    .map((post) => {
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${SITE_URL}/blog/${post.slug}</link>
          <guid>${SITE_URL}/blog/${post.slug}</guid>
          <description><![CDATA[${post.description}]]></description>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
          <lastBuildDate>${new Date(post.updatedAt ?? post.publishedAt).toUTCString()}</lastBuildDate>
        </item>
      `;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title><![CDATA[Atlas PRO IPTV 4K ï¿½ Blog]]></title>
      <link>${SITE_URL}/blog</link>
      <description><![CDATA[ActualitÃ©s, comparatifs et guides IPTV premium France & Maroc.]]></description>
      <language>fr-fr</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      ${feedItems}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=UTF-8",
      "Cache-Control": "public, s-maxage=3600, max-age=3600",
    },
  });
}

