import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Suspense } from "react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import AnalyticsScript from "@/components/analytics-script";
import JsonLd from "@/components/seo/json-ld";
import DefaultSeoConfig from "@/components/seo/default-seo";
import TagManagerNoScript from "@/components/tag-manager-noscript";
import WhatsAppButton from "@/components/whatsapp-button";
import ClarityProvider from "@/components/analytics/ClarityProvider";
import CookieConsentBanner from "@/components/analytics/CookieConsentBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://atlaspro4k.net";
const defaultImages = [
  {
    url: `${siteUrl}/logo.webp`,
    width: 1200,
    height: 630,
    alt: "Atlas Pro 4K logo",
  },
];

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atlas Pro 4K - Abonnement IPTV 4K francophone",
    template: "%s | Atlas Pro 4K",
  },
  description:
    "Streaming haute qualite, activation instantanee, support 24/7. Disponible en France, Belgique, Suisse, Maroc et Canada.",
  keywords: [
    "abonnement IPTV",
    "Atlas PRO IPTV",
    "Atlas Pro 4K",
    "IPTV francophone",
    "IPTV 4K France",
    "IPTV Suisse Belgique Luxembourg",
  ],
  applicationName: "Atlas Pro 4K",
  authors: [{ name: "Atlas Pro 4K" }],
  creator: "Atlas Pro 4K",
  publisher: "Atlas Pro 4K",
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": `${siteUrl}/`,
      "fr-BE": `${siteUrl}/`,
      "fr-MA": `${siteUrl}/`,
      "en-US": `${siteUrl}/en/`,
      "x-default": `${siteUrl}/`,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Atlas Pro 4K",
    title: "Atlas Pro 4K - Service de streaming 4K stable et rapide",
    description:
      "Streaming haute qualite, activation instantanee, support 24/7. Disponible en France, Belgique, Suisse, Maroc et Canada.",
    images: defaultImages,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Atlas Pro 4K - Abonnements streaming 4K",
    description:
      "Fiabilite, vitesse et qualite d'image incomparables. Decouvrez nos offres officielles.",
    images: defaultImages.map((img) => img.url),
    creator: "@atlaspro4k",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "IPTV",
};

export const viewport = {
  themeColor: "#05060F",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Atlas PRO IPTV",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  sameAs: [
    "https://www.linkedin.com/company/atlas-pro-iptv/",
    "https://www.facebook.com/AtlasPro4K",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+33-1-86-95-12-45",
      contactType: "customer support",
      areaServed: ["FR", "BE", "CH", "LU"],
      availableLanguage: ["French", "English"],
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Atlas PRO IPTV",
  image: `${siteUrl}/images/abonnement-iptv-france.webp`,
  "@id": `${siteUrl}#localbusiness`,
  url: siteUrl,
  telephone: "+33-7-70-30-39-40",
  address: {
    "@type": "PostalAddress",
    streetAddress: "45 Avenue de la Fibre",
    addressLocality: "Paris",
    postalCode: "75010",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8769,
    longitude: 2.3574,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  priceRange: "€€",
  paymentAccepted: "Visa, Mastercard, PayPal",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <DefaultSeoConfig />
      </head>
      <body className="relative min-h-screen bg-atlas-night text-gray-100">
        <TagManagerNoScript />
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Atlas PRO IPTV",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+212770303940",
              contactType: "customer service",
              availableLanguage: "French",
            },
          }}
        />
        <SiteHeader />
        <main className="relative overflow-hidden pb-24 pt-[5.25rem]">
          {children}
        </main>
        <SiteFooter />
        <Suspense fallback={null}>
          <AnalyticsScript />
        </Suspense>
        <WhatsAppButton />
        <ClarityProvider />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
