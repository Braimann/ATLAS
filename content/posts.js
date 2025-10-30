import { SITE_URL } from "@/lib/constants";

export const blogPosts = [
  {
    slug: "iptv-4k-2025",
    title: "IPTV 4K 2025 : le guide définitif Atlas PRO",
    description:
      "Panorama complet des tendances IPTV 2025, critères de choix, infrastructure Atlas PRO et conseils pour un streaming 4K stable.",
    publishedAt: "2025-01-05",
    updatedAt: "2025-01-05",
    image: "/images/atlas-pro-iptv-4k.webp",
    alt: "Salon moderne regardant Atlas PRO IPTV 4K",
  },
  {
    slug: "comment-installer-atlaspro",
    title: "Installer Atlas PRO IPTV : tutoriel pas à pas",
    description:
      "Procédure détaillée pour installer Atlas PRO IPTV sur Smart TV, Android TV et Windows, avec astuces anti-freeze et réglages QoS.",
    publishedAt: "2025-01-12",
    updatedAt: "2025-01-12",
    image: "/images/installation-smart-tv-4k.webp",
    alt: "Installation d'Atlas PRO IPTV sur Smart TV",
  },
  {
    slug: "meilleur-abonnement-iptv",
    title: "Meilleur abonnement IPTV 2025 : notre comparatif",
    description:
      "Comparaison des offres IPTV populaires en Europe francophone, analyse des prix, du support et de la qualité d'image.",
    publishedAt: "2025-01-19",
    updatedAt: "2025-01-19",
    image: "/images/famille-streaming-4k.webp",
    alt: "Famille profitant d'un streaming IPTV 4K",
  },
];

export const getPostBySlug = (slug) => blogPosts.find((post) => post.slug === slug);

export const buildCanonical = (path) => `${SITE_URL}${path}`;
