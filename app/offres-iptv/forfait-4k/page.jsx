import Breadcrumbs from "@/components/breadcrumbs";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import FAQBlock from "@/components/faq/faq-block";
import FAQSchema from "@/components/seo/faq-schema";
import CTAButton from "@/components/ui/cta-button";
import InternalLinks from "@/components/internal-links";

export const metadata = {
  title: "Atlas PRO IPTV - Offres 2025 | Solo, Duo, Famille",
  description:
    "Comparez les offres officielles Atlas PRO IPTV : Solo, Duo et Famille. Streaming 4K stable, activation instantanée et support 24/7.",
  alternates: {
    canonical: "/offres-iptv/forfait-4k",
  },
};

const packs = [
  {
    name: "Pack Duo - 12 Mois",
    price: "59,99 €",
    oldPrice: "90€",
    offer: "OFFRE LIMITÉE ✨",
    features: [
      "2 Codes (2 appareils simultanés)",
      "Codes officiels & certifiés",
      "Garantie de remplacement en cas de souci",
      "Livraison automatique instantanée",
      "Compatible avec toutes les applications",
      "Replay & EPG inclus",
      "Paiement 100% sécurisé",
      "Support WhatsApp vérifié 24/7",
    ],
    gradient: "from-[#7e22ce] to-[#a855f7]",
  },
  {
    name: "Pack Solo - 12 Mois",
    price: "49,99 €",
    oldPrice: "70€",
    offer: "+6 MOIS GRATUITS 🎁",
    features: [
      "1 Code (1 appareil simultané)",
      "Code officiel & certifié",
      "Garantie de remplacement en cas de souci",
      "Livraison automatique instantanée",
      "Compatible avec toutes les applications",
      "Replay & EPG inclus",
      "Paiement 100% sécurisé",
      "Support WhatsApp vérifié 24/7",
    ],
    gradient: "from-gray-900 to-black",
  },
  {
    name: "Pack Famille - 12 Mois",
    price: "68,99 €",
    oldPrice: "120€",
    offer: "OFFRE LIMITÉE ✨",
    features: [
      "3 Codes (3 appareils simultanés)",
      "Codes officiels & certifiés",
      "Garantie de remplacement en cas de souci",
      "Livraison automatique instantanée",
      "Compatible avec toutes les applications",
      "Replay & EPG inclus",
      "Paiement 100% sécurisé",
      "Support WhatsApp vérifié 24/7",
    ],
    gradient: "from-[#7e22ce] to-[#a855f7]",
  },
];

const faqItems = [
  {
    question: "Les codes Atlas PRO IPTV sont-ils officiels ?",
    answer:
      "Oui, tous nos codes proviennent directement des serveurs Atlas PRO et sont livrés instantanément après validation du paiement.",
  },
  {
    question: "Puis-je utiliser un code sur plusieurs appareils ?",
    answer:
      "Cela dépend du pack choisi : Solo (1 appareil), Duo (2 appareils), Famille (3 appareils).",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Visa, Mastercard, PayPal et paiements par lien sécurisé. Chaque transaction est protégée.",
  },
  {
    question: "Quelle est la durée d’activation ?",
    answer:
      "L’activation est automatique et instantanée. Vous recevez vos identifiants et tutoriels par email en moins de 2 minutes.",
  },
];

export default function Page() {
  return (
    <div className="space-y-16">
      <Breadcrumbs items={[{ label: "Forfait 4K", href: "/offres-iptv/forfait-4k" }]} />

      <PageHero
        badge="Offres Atlas PRO IPTV 2025"
        title="Découvrez nos packs officiels Atlas PRO IPTV"
        description="Solo, Duo ou Famille : choisissez votre formule IPTV 4K avec activation instantanée et support prioritaire."
        primaryCta={{
          label: "Commander maintenant",
          href: "https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%20IPTV%2C%20je%20souhaite%20acheter%20un%20abonnement.",
          trackingLabel: "Offres IPTV - WhatsApp Achat",
        }}
        image={{
          src: "/images/abonnement-iptv-france.webp",
          alt: "Packs officiels Atlas PRO IPTV 4K",
          width: 960,
          height: 640,
        }}
      />

<section id="offres" className="relative bg-[#0f0f15] py-20 text-white">
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-atlas-night via-[#12121a] to-[#0f0f15]" />
  <div className="container mx-auto px-4 text-center">
    <SectionHeading
      eyebrow="Nos Offres IPTV Officielles"
      title="Choisissez la formule adaptée à votre foyer"
      description="Solo, Duo ou Famille : toutes nos formules incluent activation instantanée, codes certifiés Atlas PRO et support WhatsApp vérifié 24/7."
      align="center"
    />

    <div className="mt-16 grid gap-8 md:grid-cols-3">
      {/* Pack SOLO */}
      <div className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-gray-900 to-black p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="mb-6 text-center">
          <Image
            src="/images/logo-atlaspro.webp"
            alt="Atlas PRO IPTV"
            width={150}
            height={40}
            className="mx-auto mb-3"
          />
          <h3 className="text-2xl font-bold text-atlas-gold uppercase">
            Pack Solo - 12 Mois
          </h3>
          <p className="mt-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-atlas-gold">
            +6 Mois Gratuits 🎁
          </p>
        </div>

        <div className="mb-4 text-5xl font-extrabold">
          49,99 €{" "}
          <span className="ml-2 text-lg text-gray-400 line-through">70 €</span>
        </div>

        <ul className="mb-8 space-y-2 text-sm text-gray-200 text-left">
          <li>✔️ 1 Code (1 appareil simultané)</li>
          <li>✔️ Code officiel & certifié</li>
          <li>✔️ Livraison instantanée</li>
          <li>✔️ Paiement 100% sécurisé</li>
          <li>✔️ Support WhatsApp vérifié 24/7</li>
        </ul>

        <CTAButton
          href="https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%2C%20je%20souhaite%20acheter%20le%20pack%20Solo."
          variant="gold"
          trackingLabel="Offres - Pack Solo"
        >
          🔥 PROFITER DE L'OFFRE
        </CTAButton>
      </div>

      {/* Pack DUO */}
      <div className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-[#7e22ce] to-[#a855f7] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="mb-6 text-center">
          <Image
            src="/images/logo-atlaspro.webp"
            alt="Atlas PRO IPTV"
            width={150}
            height={40}
            className="mx-auto mb-3"
          />
          <h3 className="text-2xl font-bold uppercase tracking-wide">
            Pack Duo - 12 Mois
          </h3>
          <p className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
            Offre Limitée ✨
          </p>
        </div>

        <div className="mb-4 text-5xl font-extrabold">
          59,99 €{" "}
          <span className="ml-2 text-lg text-gray-200 line-through">90 €</span>
        </div>

        <ul className="mb-8 space-y-2 text-sm text-gray-100 text-left">
          <li>✔️ 2 Codes (2 appareils simultanés)</li>
          <li>✔️ Codes officiels & certifiés</li>
          <li>✔️ Garantie de remplacement</li>
          <li>✔️ Livraison instantanée</li>
          <li>✔️ Support WhatsApp vérifié 24/7</li>
        </ul>

        <CTAButton
          href="https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%2C%20je%20souhaite%20acheter%20le%20pack%20Duo."
          variant="purple"
          trackingLabel="Offres - Pack Duo"
        >
          🚀 COMMANDER LE PACK DUO
        </CTAButton>
      </div>

      {/* Pack FAMILLE */}
      <div className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-[#4f46e5] to-[#3b82f6] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="mb-6 text-center">
          <Image
            src="/images/logo-atlaspro.webp"
            alt="Atlas PRO IPTV"
            width={150}
            height={40}
            className="mx-auto mb-3"
          />
          <h3 className="text-2xl font-bold uppercase tracking-wide">
            Pack Famille - 12 Mois
          </h3>
          <p className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
            Offre Limitée ✨
          </p>
        </div>

        <div className="mb-4 text-5xl font-extrabold">
          68,99 €{" "}
          <span className="ml-2 text-lg text-gray-200 line-through">120 €</span>
        </div>

        <ul className="mb-8 space-y-2 text-sm text-gray-100 text-left">
          <li>✔️ 3 Codes (3 appareils simultanés)</li>
          <li>✔️ Codes officiels & certifiés</li>
          <li>✔️ Garantie de remplacement</li>
          <li>✔️ Livraison instantanée</li>
          <li>✔️ Support WhatsApp vérifié 24/7</li>
        </ul>

        <CTAButton
          href="https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%2C%20je%20souhaite%20acheter%20le%20pack%20Famille."
          variant="purple"
          trackingLabel="Offres - Pack Famille"
        >
          💎 PROFITER DU PACK FAMILLE
        </CTAButton>
      </div>
    </div>
  </div>
</section>

      <InternalLinks
        eyebrow="Aller plus loin"
        title="Ressources pour optimiser votre forfait 4K"
        description="Installation, assistance et comparatifs pour profiter pleinement d'Atlas PRO IPTV."
        links={[
          {
            href: "/offres-iptv/forfait-premium",
            label: "Comparer avec le forfait Premium multi-écrans",
            description: "Accédez aux flux prioritaires, DVR cloud et assistance experte.",
            category: "Offres",
          },
          {
            href: "/tutoriels-installation/smart-tv",
            label: "Installer Atlas PRO IPTV sur Smart TV",
            description: "Tutoriel complet pour Samsung, LG, Android TV et Fire TV Stick.",
            category: "Tutoriels",
          },
          {
            href: "/tutoriels-installation/windows",
            label: "Configurer le lecteur Atlas PRO sur Windows 11",
            description: "Guide d'installation pas à pas et optimisation réseau Windows.",
            category: "Compatibilité",
          },
          {
            href: "/support/connexion",
            label: "Solutionner les erreurs de connexion IPTV",
            description: "Checklist officielle pour débloquer votre compte en quelques minutes.",
            category: "Support",
          },
          {
            href: "/blog/iptv-4k-2025",
            label: "Lire le guide IPTV 4K 2025",
            description: "Analyse des meilleures pratiques pour un streaming 4K fluide en Europe.",
            category: "Blog",
          },
        ]}
      />

      <section className="container space-y-10">
        <SectionHeading
          eyebrow="FAQ Atlas PRO IPTV"
          title="Questions fréquentes sur les packs Atlas PRO IPTV"
          description="Toutes les réponses concernant les codes, activations et compatibilités."
          align="center"
        />
        <FAQBlock items={faqItems} />
        <FAQSchema items={faqItems} canonical="/offres-iptv/forfait-4k" />
      </section>
    </div>
  );
}

