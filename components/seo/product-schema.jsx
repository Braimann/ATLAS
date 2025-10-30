import JsonLd from "@/components/seo/json-ld";
import { SITE_URL, COMPANY_NAME } from "@/lib/constants";

export default function ProductSchema({ product }) {
  if (!product) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image ? `${SITE_URL}${product.image}` : undefined,
    brand: {
      "@type": "Brand",
      name: COMPANY_NAME,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency || "EUR",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}${product.url}`,
      priceValidUntil: product.priceValidUntil,
    },
    aggregateRating: product.aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: product.aggregateRating.ratingValue,
          reviewCount: product.aggregateRating.reviewCount,
        }
      : undefined,
  };

  return <JsonLd data={data} />;
}

