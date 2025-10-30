import JsonLd from "@/components/seo/json-ld";

export default function FAQSchema({ items, canonical }) {
  if (!items?.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={data} canonical={canonical} />;
}

