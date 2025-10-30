/** @type {import('next').NextConfig} */
const ONE_DAY_SECONDS = 60 * 60 * 24;
const ONE_YEAR_SECONDS = ONE_DAY_SECONDS * 365;

const STATIC_ASSET_CACHE = `public, max-age=${ONE_YEAR_SECONDS}, s-maxage=${ONE_YEAR_SECONDS}, immutable`;
const HTML_CACHE = "public, max-age=0, must-revalidate";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
  "style-src 'self' 'unsafe-inline' https:",
  "img-src 'self' data: https:",
  "font-src 'self' data: https:",
  "connect-src 'self' https:",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "base-uri 'self'",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  output: "standalone",
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    localeDetection: false,
  },
  headers: async () => [
    {
      source: "/_next/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: STATIC_ASSET_CACHE,
        },
      ],
    },
    {
      source: "/_next/image",
      headers: [
        {
          key: "Cache-Control",
          value: `public, max-age=${ONE_DAY_SECONDS}, must-revalidate`,
        },
      ],
    },
    {
      source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|css|js|woff|woff2)",
      headers: [
        {
          key: "Cache-Control",
          value: STATIC_ASSET_CACHE,
        },
      ],
    },
    {
      source: "/images/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: STATIC_ASSET_CACHE,
        },
      ],
    },
    {
      source: "/((?!_next/static|_next/image|images/).*)",
      headers: [
        {
          key: "Cache-Control",
          value: HTML_CACHE,
        },
        ...securityHeaders,
      ],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
    ],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: ONE_YEAR_SECONDS,
  },
  redirects: async () => [
    {
      source: "/offres-iptv",
      destination: "/offres-iptv/forfait-4k",
      permanent: true,
    },
    {
      source: "/blog/iptv-guide-2025",
      destination: "/blog/iptv-4k-2025",
      permanent: true,
    },
    {
      source: "/blog/guide-iptv-2025",
      destination: "/blog/iptv-4k-2025",
      permanent: true,
    },
  ],
};

export default nextConfig;
