const siteUrl = "https://atlaspro4k.net";

const defaultSEOConfig = {
  titleTemplate: "%s | Atlas Pro 4K",
  defaultTitle: "Atlas Pro 4K - Abonnement IPTV 4K francophone",
  description:
    "Streaming haute qualite, activation instantanee, support 24/7. Disponible en France, Belgique, Suisse, Maroc et Canada.",
  canonical: siteUrl,
  openGraph: {
    url: siteUrl,
    type: "website",
    locale: "fr_FR",
    siteName: "Atlas Pro 4K",
    title: "Atlas Pro 4K - Service de streaming 4K stable et rapide",
    description:
      "Streaming haute qualite, activation instantanee, support 24/7. Disponible en France, Belgique, Suisse, Maroc et Canada.",
    images: [
      {
        url: `${siteUrl}/logo.webp`,
        width: 1200,
        height: 630,
        alt: "Atlas Pro 4K logo",
      },
    ],
  },
  twitter: {
    handle: "@atlaspro4k",
    site: "@atlaspro4k",
    cardType: "summary_large_image",
    title: "Atlas Pro 4K - Abonnements streaming 4K",
    description:
      "Fiabilite, vitesse et qualite d'image incomparables. Decouvrez nos offres officielles.",
    images: [`${siteUrl}/logo.webp`],
  },
  additionalMetaTags: [
    {
      name: "application-name",
      content: "Atlas PRO IPTV 4K",
    },
    {
      name: "keywords",
      content:
        "abonnement IPTV, Atlas PRO IPTV, Atlas Pro 4K, IPTV francophone, IPTV 4K France, IPTV Suisse Belgique Luxembourg",
    },
    {
      property: "article:publisher",
      content: "https://www.facebook.com/AtlasPro4K",
    },
    {
      property: "og:url",
      content: "https://atlaspro4k.net/",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: "Atlas Pro 4K - Service de streaming 4K stable et rapide",
    },
    {
      property: "og:description",
      content:
        "Streaming haute qualite, activation instantanee, support 24/7. Disponible en France, Belgique, Suisse, Maroc et Canada.",
    },
    {
      property: "og:image",
      content: "https://atlaspro4k.net/logo.webp",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      name: "twitter:title",
      content: "Atlas Pro 4K - Abonnements streaming 4K",
    },
    {
      name: "twitter:description",
      content:
        "Fiabilite, vitesse et qualite d'image incomparables. Decouvrez nos offres officielles.",
    },
    {
      name: "twitter:image",
      content: "https://atlaspro4k.net/logo.webp",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg+xml",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "me",
      href: "https://www.facebook.com/AtlasPro4K",
    },
  ],
};

export default defaultSEOConfig;
