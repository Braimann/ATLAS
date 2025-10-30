import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import CTAButton from "@/components/ui/cta-button";
import FeatureList from "@/components/feature-list";
import FAQBlock from "@/components/faq/faq-block";
import FAQSchema from "@/components/seo/faq-schema";
import OffersSection from "@/components/offers/offers-section";
import InternalLinks from "@/components/internal-links";
import JsonLd from "@/components/seo/json-ld";
import { offers } from "@/content/offers";

export const metadata = {
  title: "Atlas PRO IPTV 4K Francophone – Abonnement Stable et Rapide 2025",
  description:
    "Abonnement Atlas PRO IPTV 4K francophone. Serveur multi-CDN stable, codes certifiés, activation instantanée et support WhatsApp 24/7. Streaming 4K fluide sur Smart TV.",
  openGraph: {
    title: "Atlas PRO IPTV 4K Francophone – Serveur Stable et Fiable 2025",
    description:
      "Profitez d’un abonnement IPTV 4K fiable avec Atlas PRO : serveurs multi-CDN, codes certifiés, support WhatsApp et streaming fluide pour toute la francophonie.",
    images: [
      {
        url: "/images/Atlas4k.webp",
        width: 1200,
        height: 630,
        alt: "Interface Atlas PRO IPTV 4K officielle sur Smart TV",
      },
    ],
  },
};

const heroPoints = [
  "Flux 4K/8K stables grâce à notre réseau multi-CDN",
  "Plus de 25 000 chaînes et 70 000 VOD francophones",
  "Activation instantanée et codes certifiés Atlas PRO",
];

const faqItems = [
  {
    question: "Comment sont livrés les codes Atlas PRO IPTV ?",
    answer:
      "Après validation du paiement, votre identifiant Atlas PRO est généré automatiquement. Il est envoyé par e-mail et disponible dans l’espace client.",
  },
  {
    question: "Puis-je changer de pack en cours d’abonnement ?",
    answer:
      "Oui, vous pouvez passer au Pack Duo ou Famille à tout moment. Le prorata est recalculé et le service reste actif sans interruption.",
  },
  {
    question: "Quels appareils sont compatibles ?",
    answer:
      "Atlas PRO IPTV fonctionne sur Smart TV Samsung, LG, Android TV, Google TV, Fire TV, Windows, macOS, et applications IPTV (TiviMate, IPTV Smarters).",
  },
];

const testimonials = [
  {
    name: "Lucas",
    stars: 5,
    message:
      "Super service, code reçu en 2 minutes et fonctionne parfaitement. Je recommande à 100 % !",
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
      "Service client réactif sur WhatsApp, abonnement stable. Fini les coupures comme avant, bravo.",
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
              Atlas PRO IPTV 2025
            </span>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              L’abonnement IPTV 4K officiel pour la francophonie
            </h1>
            <p className="max-w-xl text-base text-gray-200 sm:text-lg">
              Streaming 4K/8K fluide, codes certifiés et support WhatsApp vérifié 24/7.
              Profitez d’une activation instantanée sur Smart TV, Android TV et Windows.
            </p>
            <FeatureList features={heroPoints} className="text-sm text-gray-200" />
            <div className="flex flex-wrap gap-4">
              <CTAButton href="#offres" trackingLabel="Home Hero - Voir offres">
                Voir les offres
              </CTAButton>
              <CTAButton href="/support" variant="outline" trackingLabel="Home Hero - Support">
                Accéder au support
              </CTAButton>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="glass shadow-soft">
              <Image
                src="/images/Atlas4k.webp"
                alt="Serveur IPTV Atlas 4K – interface officielle sur Smart TV"
                width={960}
                height={640}
                priority
                placeholder="blur"
                blurDataURL="/images/Atlas4k-blur.webp"
                className="rounded-[2.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === POURQUOI CHOISIR (AVANT OFFRES) === */}
      <section className="container py-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          Pourquoi choisir <span className="text-atlas-gold">Atlas PRO IPTV 4K</span> ?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed text-center">
          Atlas PRO IPTV 4K est conçu pour les utilisateurs francophones exigeants.
          Grâce à nos serveurs multi-CDN et à une infrastructure redondante,
          vous profitez d’un flux 4K stable et fluide, accessible partout dans le monde.
          Plus de 25 000 chaînes et 70 000 VOD disponibles sur Smart TV, Android TV et ordinateurs.
        </p>
        <p className="max-w-3xl mx-auto mt-6 text-gray-700 text-lg leading-relaxed text-center">
          Notre service se distingue par son <strong>support WhatsApp 24/7</strong>,
          des <strong>codes IPTV certifiés</strong>, et une <strong>activation instantanée</strong>.
          Atlas PRO IPTV s’impose comme le choix numéro 1 pour un abonnement IPTV 4K fiable,
          stable et compatible avec tous les appareils populaires.
        </p>
      </section>

      {/* === OFFRES SECTION === */}
      <OffersSection
        id="offres"
        offers={offers}
        ctaTrackingPrefix="Offres"
        heading={{
          eyebrow: "Nos offres IPTV",
          title: "Choisissez le pack Atlas PRO adapté à votre foyer",
          description:
            "Solo, Duo ou Famille : chaque formule inclut des codes IPTV certifiés, une garantie de remplacement et un support client réactif.",
        }}
      />

      {/* === SERVEURS IPTV PERFORMANTS (APRÈS OFFRES) === */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Des serveurs IPTV performants pour une{" "}
            <span className="text-atlas-gold">expérience 4K stable</span>
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-gray-700 text-lg leading-relaxed">
            <li>✅ Réseau multi-CDN pour une diffusion ultra-rapide et stable en 4K/8K.</li>
            <li>✅ Disponibilité de 99,9 % grâce à la redondance serveur et au monitoring constant.</li>
            <li>✅ Codes IPTV certifiés Atlas PRO : sécurité, fiabilité et compatibilité universelle.</li>
            <li>✅ Prise en charge native de toutes les Smart TV, Fire TV, Android Box et applications IPTV.</li>
            <li>✅ <strong>Support WhatsApp</strong> francophone disponible 24 h/24 et 7 j/7.</li>
            <li>✅ Mises à jour automatiques et ajout régulier de nouvelles chaînes et VOD.</li>
          </ul>
          <p className="max-w-4xl mx-auto mt-8 text-gray-700 text-lg text-center leading-relaxed">
            En combinant puissance serveur, stabilité réseau et service client humain,
            Atlas PRO IPTV s’impose comme la référence IPTV 4K la plus fiable de la francophonie.
          </p>
        </div>
      </section>

      {/* === TÉMOIGNAGES AVEC VIDÉO (FIX) === */}
<section id="temoignages" className="bg-[#ededf0] py-20 px-4 md:px-0">
  <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
    {/* Video */}
    <div className="flex flex-1 justify-center">
      <div className="relative aspect-[9/16] w-full max-w-[370px] overflow-hidden rounded-3xl bg-black shadow-lg">
        <iframe
          src="https://player.vimeo.com/video/1130221638?title=0&byline=0&portrait=0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Témoignage client Atlas PRO IPTV"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>

    {/* Texte + avis */}
    <div className="flex w-full flex-1 flex-col gap-4">
      <h2 className="text-[15px] font-semibold uppercase tracking-[0.2em] text-gray-500">
        TÉMOIGNAGES
      </h2>
      <h3 className="mb-2 text-4xl font-extrabold italic text-gray-900 md:text-5xl">
        <span className="not-italic font-bold">LEURS MOTS,</span> NOTRE FIERTÉ
      </h3>
      <p className="mb-6 max-w-xl text-gray-700">
        Des centaines de clients francophones font confiance à Atlas PRO IPTV.
        Leur satisfaction et leurs avis positifs confirment la qualité de notre service IPTV 4K.
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
          eyebrow="Pourquoi Atlas PRO IPTV ?"
          title="Une solution IPTV fiable pour l’Europe francophone"
          description="Nous combinons infrastructure multi-CDN, codes certifiés et support proactif pour garantir un streaming 4K fluide sans coupure."
          align="center"
        />
        <FAQBlock items={faqItems} />
        <FAQSchema items={faqItems} canonical="/" />
        <div className="text-center">
          <CTAButton href="/contact" variant="outline" trackingLabel="Home - Contact">
            Contacter l’équipe
          </CTAButton>
        </div>
      </section>

      {/* === SCHEMA === */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Atlas PRO IPTV 4K",
          image: "https://atlaspro4k.net/images/Atlas4k.webp",
          description:
            "Abonnement IPTV Atlas PRO 4K officiel pour la francophonie. Streaming 4K stable, activation instantanée, support 24/7.",
          brand: { "@type": "Brand", name: "Atlas PRO IPTV" },
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "29.99",
            availability: "https://schema.org/InStock",
            url: "https://atlaspro4k.net/offres",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "3" },
        }}
      />
    </>
  );
}
