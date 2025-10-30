/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://atlaspro4k.net";
const buildTimestamp = new Date().toISOString();

const routeRules = [
  { pattern: /^\/$/, changefreq: "daily", priority: 1.0 },
  // ❌ /offres retirée du sitemap (non indexée)
  { pattern: /^\/telechargement(?:\/|$)/i, changefreq: "daily", priority: 0.9 },
  { pattern: /^\/blog(?:\/|$)/i, changefreq: "weekly", priority: 0.8 },
  { pattern: /^\/support(?:\/|$)/i, changefreq: "weekly", priority: 0.7 },
  { pattern: /^\/faq(?:\/|$)/i, changefreq: "monthly", priority: 0.6 },
  { pattern: /^\/contact(?:\/|$)/i, changefreq: "monthly", priority: 0.5 },
  { pattern: /^\/legal(?:\/|$)/i, changefreq: "monthly", priority: 0.5 },
];

const resolveRule = (path) =>
  routeRules.find(({ pattern }) => pattern.test(path));

module.exports = {
  siteUrl,
  outDir: "public",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  autoLastmod: true,
  exclude: [
    "/rss",
    "/dl",
    "/feed",
    "/offres", // ❌ exclus ici
    "/blog/rss",
    "/blog/rss.xml",
    "/blog/feed",
    "/blog/feed.xml",
    "/api/*",
    "/404",
    "/500",
    "/_error",
    "/admin/*",
    "/offres-iptv/*",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dl",
          "/feed",
          "/offres-iptv", // 🚫 empêche l’indexation
          "/blog/rss",
          "/blog/rss.xml",
          "/blog/feed",
          "/blog/feed.xml",
          "/api/*",
          "/404",
          "/500",
          "/_error",
          "/admin/*",
          "/offres-iptv/*",
        ],
      },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
  transform: async (config, path) => {
    const matchedRule = resolveRule(path);
    return {
      loc: `${siteUrl}${path}`,
      changefreq: matchedRule?.changefreq ?? "weekly",
      priority: matchedRule?.priority ?? 0.6,
      lastmod: buildTimestamp,
      alternateRefs: [],
    };
  },
};
