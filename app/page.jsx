import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import CTAButton from "@/components/ui/cta-button";
import FeatureList from "@/components/feature-list";
import FAQBlock from "@/components/faq/faq-block";
import FAQSchema from "@/components/seo/faq-schema";
import OffersSection from "@/components/offers/offers-section";
import JsonLd from "@/components/seo/json-ld";
import TestimonialsVideo from "@/components/testimonials-video";
import { offers } from "@/content/offers";

export const metadata = {
  title: "ATLAS PRO – Service TV numérique officiel francophone 2025",
  description:
    "ATLAS PRO est le service TV numérique officiel pour la francophonie. Serveur stable multi-CDN, activation instantanée, accès sécurisés et support WhatsApp 24/7.",
  keywords:
    "ATLAS PRO, Atlas PRO TV, service TV numérique, abonnement Atlas PRO, serveur TV stable, Atlas PRO France, Atlas PRO Maroc, Atlas PRO Belgique",
  openGraph: {
    title: "ATLAS PRO – Service TV numérique officiel francophone",
    description:
      "Découvrez ATLAS PRO, le service TV numérique le plus stable et rapide pour la francophonie. Activation instantanée, support 24/7 et accès sécurisés.",
    url: "https://atlaspro4k.net/",
    siteName: "ATLAS PRO",
    images: [
      {
        url: "/images/Atlas.webp",
        width: 1200,
        height: 630,
        alt: "Interface officielle ATLAS PRO sur Smart TV",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATLAS PRO – Service TV numérique officiel francophone",
    description:
      "ATLAS PRO : service TV Premium fiable et fluide. Multi-CDN, support 24/7 et accès instantané.",
    images: ["/images/Atlas.webp"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "/",
  },
};

const heroPoints = [
  "Flux stables grâce à notre réseau multi-CDN",
  "Plus de 25 000 chaînes et 70 000 VOD francophones",
  "Activation instantanée et accès certifiés ATLAS PRO",
];

const faqItems = [
  {
    question: "Comment sont livrés les accès ATLAS PRO ?",
    answer:
      "Après validation du paiement, votre identifiant ATLAS PRO est généré automatiquement. Il est envoyé par e-mail et disponible dans votre espace client.",
  },
  {
    question: "Puis-je changer de pack en cours d’abonnement ?",
    answer:
      "Oui, vous pouvez passer au Pack Duo ou Famille à tout moment. Le prorata est recalculé et le service reste actif sans interruption.",
  },
  {
    question: "Quels appareils sont compatibles ?",
    answer:
      "ATLAS PRO fonctionne sur Smart TV Samsung, LG, Android TV, Google TV, Fire TV, Windows, macOS et applications compatibles (TiviMate, SmartPlayer).",
  },
];

const testimonials = [
  {
    name: "Lucas",
    stars: 5,
    message:
      "Super service, accès reçu en 2 minutes et fonctionne parfaitement. Je recommande à 100 % !",
  },
  {
    name: "Sophie",
    stars: 4,
    message:
      "J’avais peur d’un piège, mais tout est carré et fiable. Aucun souci depuis l’activation. Merci l’équipe !",
  },
  {
    name: "Karim",
    stars: 5,
    message:
      "Service client réactif sur WhatsApp, service TV stable. Fini les coupures comme avant, bravo.",
  },
];

export default function Page() {
  return (
    <>
      {/* === HERO === */}
      <section className="relative overflow-hidden bg-atlas-night pb-20 pt-28 lg:pt-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-atlas-night via-atlas-slate to-atlas-night" />
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-atlas-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-atlas-gold">
              ATLAS PRO • 2025
            </span>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              ATLAS PRO – service TV numérique officiel pour la francophonie
            </h1>
            <p className="max-w-xl text-base text-gray-200 sm:text-lg">
              Profitez d’un service TV fluide, stable et fiable grâce à notre réseau multi-CDN.
              Accès instantanés, support WhatsApp 24/7 et compatibilité universelle.
            </p>
            <FeatureList features={heroPoints} className="text-sm text-gray-200" />
            <div className="flex flex-wrap gap-4">
              <CTAButton href="#offres">Voir les offres</CTAButton>
              <CTAButton href="/support" variant="outline">
                Accéder au support
              </CTAButton>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <Image
              src="/images/Atlas4k.webp"
              alt="ATLAS PRO – interface officielle sur Smart TV"
              width={960}
              height={640}
              priority
              loading="eager"
              fetchPriority="high"
              placeholder="blur"
              blurDataURL="/images/Atlas-blur.webp"
              className="rounded-[2.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* === POURQUOI CHOISIR === */}
      <section className="container py-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          Pourquoi choisir <span className="text-atlas-gold">ATLAS PRO</span> ?
        </h2>
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-atlas-gold/10 via-atlas-gold/5 to-transparent rounded-3xl p-8 shadow-lg border border-atlas-gold/20">
          <p className="text-lg leading-relaxed text-center font-medium text-atlas-gold drop-shadow-sm">
            <span className="font-semibold text-atlas-gold">ATLAS PRO</span> est conçu pour offrir une
            expérience TV fluide et stable à tous les utilisateurs francophones.
            Grâce à nos serveurs <strong>multi-CDN</strong> et à une infrastructure optimisée,
            vous bénéficiez d’un flux constant et de qualité supérieure.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-center font-medium text-atlas-gold drop-shadow-sm">
            Notre service se distingue par son <strong>support WhatsApp 24/7</strong>,
            ses <strong>accès certifiés</strong> et son <strong>activation instantanée</strong>. <br />
            <span className="block mt-2">
              <strong>ATLAS PRO</strong> est le choix n°1 pour une expérience TV Premium fiable,
              stable et compatible avec tous vos appareils.
            </span>
          </p>
        </div>
      </section>

      {/* === OFFRES === */}
      <OffersSection
        id="offres"
        offers={offers}
        heading={{
          eyebrow: "Nos offres TV Premium",
          title: "Choisissez le pack ATLAS PRO adapté à votre foyer",
          description:
            "Solo, Duo ou Famille : chaque formule inclut des accès certifiés, une garantie de remplacement et un support client réactif.",
        }}
      />

      {/* === SERVEURS === */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-atlas-night via-[#0b0b0f] to-atlas-slate" />
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-atlas-gold">
            Des serveurs performants pour une{" "}
            <span className="text-atlas-gold font-extrabold">expérience TV fluide</span>
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-lg leading-relaxed text-atlas-gold/90 font-medium">
            <li>✅ Réseau <strong>multi-CDN</strong> pour une diffusion rapide et stable.</li>
            <li>✅ Disponibilité de <strong>99,9 %</strong> grâce à une redondance serveur complète.</li>
            <li>✅ <strong>Accès certifiés ATLAS PRO</strong> : fiabilité et sécurité garanties.</li>
            <li>✅ Compatibilité Smart TV, Fire TV, Android Box et toutes applications majeures.</li>
            <li>✅ <strong>Support WhatsApp</strong> francophone disponible 24 h/24 et 7 j/7.</li>
          </ul>
        </div>
      </section>

      {/* === TÉMOIGNAGES === */}
      <section id="temoignages" className="bg-[#ededf0] py-20 px-4 md:px-0">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
          <div className="flex flex-1 justify-center">
            <div className="relative aspect-[9/16] w-full max-w-[370px] overflow-hidden rounded-3xl bg-black shadow-lg">
              <TestimonialsVideo className="absolute inset-0 h-full w-full" />
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col gap-4">
            <h2 className="text-[15px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              TÉMOIGNAGES
            </h2>
            <h3 className="mb-2 text-4xl font-extrabold italic text-gray-900 md:text-5xl">
              <span className="not-italic font-bold">LEURS MOTS,</span> NOTRE FIERTÉ
            </h3>
            <p className="mb-6 max-w-xl text-gray-700">
              Des centaines de clients francophones font confiance à ATLAS PRO.
              Leurs retours confirment la qualité d’un service TV numérique stable et fluide.
            </p>
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 rounded-2xl border border-gray-100 bg-white px-6 py-4 text-sm text-gray-700 shadow"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold">{t.name}</span>
                  <span className="ml-2 text-yellow-400">{"★".repeat(t.stars)}</span>
                </div>
                <span>{t.message}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="container space-y-10 pb-20">
        <SectionHeading
          eyebrow="Pourquoi ATLAS PRO ?"
          title="Une solution TV numérique fiable pour l’Europe francophone"
          description="Nous combinons infrastructure multi-CDN, accès certifiés et support proactif pour garantir un streaming fluide sans coupure."
          align="center"
        />
        <FAQBlock items={faqItems} />
        <FAQSchema items={faqItems} canonical="/" />
        <div className="text-center">
          <CTAButton href="/contact" variant="outline">
            Contacter l’équipe
          </CTAButton>
        </div>
      </section>

      {/* === SECTION SEO === */}
      <section className="container py-10 border-t border-gray-800/30 text-gray-400 text-sm leading-relaxed text-center">
        <p>
          <strong>ATLAS PRO</strong> est le <strong>site officiel</strong> d’abonnement TV
          numérique pour la francophonie. Compatible PC, Smart TV, Android, Fire TV et
          applications compatibles, ATLAS PRO offre une expérience fluide, stable et
          certifiée. Découvrez nos offres 2025 et profitez d’un serveur multi-CDN
          parmi les plus rapides.
        </p>
      </section>

      {/* === SCHEMAS === */}
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "ATLAS PRO",
            image: "https://atlaspro4k.net/images/Atlas.webp",
            description:
              "ATLAS PRO : service TV numérique officiel pour la francophonie. Streaming stable, activation instantanée et support 24/7.",
            brand: { "@type": "Brand", name: "ATLAS PRO" },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: "29.99",
              availability: "https://schema.org/InStock",
              url: "https://atlaspro4k.net/offres",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "3",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ATLAS PRO",
            url: "https://atlaspro4k.net/",
            logo: "https://atlaspro4k.net/icons/icon-512x512.png",
          },
        ]}
      />
    </>
  );
}
