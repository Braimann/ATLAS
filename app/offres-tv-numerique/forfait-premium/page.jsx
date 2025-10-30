ï¿½import Breadcrumbs from "@/components/breadcrumbs";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import PricingCard from "@/components/pricing/pricing-card";
import FeatureList from "@/components/feature-list";
import FAQBlock from "@/components/faq/faq-block";
import FAQSchema from "@/components/seo/faq-schema";
import ProductSchema from "@/components/seo/product-schema";
import CTAButton from "@/components/ui/cta-button";
import InternalLinks from "@/components/internal-links";
import StatsStrip from "@/components/stats-strip";
import TestimonialsGrid from "@/components/testimonials-grid";
import { WHATSAPP_SUPPORT_URL } from "@/lib/constants";

export const metadata = {
  title:
    "Atlas PRO TV numï¿½rique Premium | TV numï¿½rique 4K multi-Ã’ï¿½ï¿½Â©crans & options sport en 2025",
  description:
    "DÃ’ï¿½ï¿½Â©couvrez le forfait Atlas PRO TV numï¿½rique Premium : flux prioritaires, 5 Ã’ï¿½ï¿½Â©crans simultanÃ’ï¿½ï¿½Â©s, options sport Ã’ï¿½ï¿½Â©largies, DVR cloud et assistance expert 7j/7 pour la France, la Belgique, la Suisse et le Luxembourg.",
  alternates: {
    canonical: "/offres-tv-numerique/forfait-premium",
  },
};

const stats = [
  { value: "5 Ã’ï¿½ï¿½Â©crans", label: "connexions simultanÃ’ï¿½ï¿½Â©es" },
  { value: "120+", label: "chaÃ’ï¿½ï¿½Â®nes sport & premium" },
  { value: "15 ms", label: "latence moyenne mesurÃ’ï¿½ï¿½Â©e" },
  { value: "PrioritÃ’ï¿½ï¿½Â©", label: "support francophone" },
];

const productSchema = {
  name: "Atlas PRO TV numï¿½rique Ã’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½S Forfait Premium",
  description:
    "Abonnement TV privï¿½ 4K multi-Ã’ï¿½ï¿½Â©crans avec options sport Ã’ï¿½ï¿½Â©largies, VOD exclusives, DVR cloud et assistance prioritaire Atlas PRO TV numï¿½rique pour l'Europe francophone.",
  image: "/images/famille-streaming-4k.webp",
  url: "/offres-tv-numerique/forfait-premium",
  price: "19.90",
  priceValidUntil: "2025-12-31",
  aggregateRating: {
    ratingValue: "4.9",
    reviewCount: "956",
  },
};

const premiumBenefits = [
  "Cinq Ã’ï¿½ï¿½Â©crans simultanÃ’ï¿½ï¿½Â©s + deux connexions voyage dÃ’ï¿½ï¿½Â©diÃ’ï¿½ï¿½Â©es pour rester connectÃ’ï¿½ï¿½Â© en dÃ’ï¿½ï¿½Â©placement.",
  "Flux 4K/8K prioritaires avec rafraÃ’ï¿½ï¿½Â®chissement 50/60 fps pour les grands Ã’ï¿½ï¿½Â©vÃ’ï¿½ï¿½Â©nements sportifs.",
  "AccÃ’ï¿½ï¿½Â¨s aux bouquets Premium (Canal+, beIN SPORTS, RMC Sport, chaÃ’ï¿½ï¿½Â®nes MENA) et VOD exclusives Atlas PRO Max.",
  "Support Expert Premium : rappel en moins de 30 minutes, assistance Ã’ï¿½ï¿½Â  distance, configuration routeur.",
  "Option DVR cloud, enregistrement 7 jours et playlists personnalisÃ’ï¿½ï¿½Â©es pour chaque membre du foyer.",
];

const premiumExtras = [
  {
    title: "Mode Low Latency personnalisÃ’ï¿½ï¿½Â©",
    description:
      "Atlas PRO Premium offre un routage prioritaire sur nos serveurs europÃ’ï¿½ï¿½Â©ens. RÃ’ï¿½ï¿½Â©sultat : un temps de zapping rÃ’ï¿½ï¿½Â©duit et une latence moyenne de 15 ms durant les matchs.",
  },
  {
    title: "PiP et mosaÃ’ï¿½ï¿½Â¯que sport",
    description:
      "Suivez deux rencontres simultanÃ’ï¿½ï¿½Â©ment ou affichez jusquÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã’ï¿½ï¿½Â  quatre flux via la mosaÃ’ï¿½ï¿½Â¯que Premium, disponible sur Smart TV compatibles et boÃ’ï¿½ï¿½Â®tiers Android TV.",
  },
  {
    title: "Assistance dÃ’ï¿½ï¿½Â©diÃ’ï¿½ï¿½Â©e",
    description:
      "Les abonnÃ’ï¿½ï¿½Â©s Premium disposent dÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½un canal de support prioritaire, dÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½un rappel tÃ’ï¿½ï¿½Â©lÃ’ï¿½ï¿½Â©phonique et dÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½un diagnostic rÃ’ï¿½ï¿½Â©seau avancÃ’ï¿½ï¿½Â© avec nos techniciens.",
  },
  {
    title: "Partage familial sÃ’ï¿½ï¿½Â©curisÃ’ï¿½ï¿½Â©",
    description:
      "CrÃ’ï¿½ï¿½Â©ez des profils sÃ’ï¿½ï¿½Â©parÃ’ï¿½ï¿½Â©s, verrouillez les contenus adultes, sauvegardez les favoris dans le cloud et contrÃ’ï¿½ï¿½Â´lez lÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½activitÃ’ï¿½ï¿½Â© depuis lÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½espace client.",
  },
  {
    title: "Offres entreprises & Ã’ï¿½ï¿½Â©vÃ’ï¿½ï¿½Â©nements",
    description:
      "Atlas PRO Premium propose des solutions multi-sites pour les bars, hÃ’ï¿½ï¿½Â´tels et Ã’ï¿½ï¿½Â©vÃ’ï¿½ï¿½Â©nements sportifs avec bande passante garantie et playlists spÃ’ï¿½ï¿½Â©cifiques.",
  },
];

const pricingOptions = [
  "1 mois : 24,90 Ã’Â¢Ã¯Â¿Â½aï¿½Â¬ Ã’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½S idÃ’ï¿½ï¿½Â©al pour tester le service avant un grand Ã’ï¿½ï¿½Â©vÃ’ï¿½ï¿½Â©nement sportif.",
  "3 mois : 22,90 Ã’Â¢Ã¯Â¿Â½aï¿½Â¬ / mois Ã’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½S parfait pour une saison rÃ’ï¿½ï¿½Â©guliÃ’ï¿½ï¿½Â¨re (football, NBA, F1).",
  "6 mois : 21,50 Ã’Â¢Ã¯Â¿Â½aï¿½Â¬ / mois Ã’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½S valeur sÃ’ï¿½ï¿½Â»re pour les familles multi-Ã’ï¿½ï¿½Â©crans.",
  "12 mois : 19,90 Ã’Â¢Ã¯Â¿Â½aï¿½Â¬ / mois Ã’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½S meilleure offre annuelle avec assistance prioritaire incluse.",
];

const testimonials = [
  {
    quote:
      "Avec le Premium, plus aucun freeze pendant les matchs. Le mode mosaÃ’ï¿½ï¿½Â¯que est parfait pour suivre Ligue 1 et Premier League en mÃ’ï¿½ï¿½Âªme temps.",
    author: "RÃ’ï¿½ï¿½Â©mi L.",
    role: "Bordeaux, France",
  },
  {
    quote:
      "Nous sommes cinq Ã’ï¿½ï¿½Â  la maison : chacun a ses favoris et profils. Le support Premium mÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½a aidÃ’ï¿½ï¿½Â© Ã’ï¿½ï¿½Â  optimiser mon routeur en moins de 20 minutes.",
    author: "Khadija A.",
    role: "Bruxelles, Belgique",
  },
  {
    quote:
      "GÃ’ï¿½ï¿½Â©rant dÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½un bar sportif, jÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½apprÃ’ï¿½ï¿½Â©cie le routage prioritaire et la qualitÃ’ï¿½ï¿½Â© 4K mÃ’ï¿½ï¿½Âªme les soirs de Champions League. Les clients adorent la mosaÃ’ï¿½ï¿½Â¯que.",
    author: "Olivier G.",
    role: "Lyon, France",
  },
];

const faqItems = [
  {
    question:
      "Combien dÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã’ï¿½ï¿½Â©crans simultanÃ’ï¿½ï¿½Â©s autorise le forfait Atlas PRO Premium ?",
    answer:
      "Le forfait Premium permet jusquÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã’ï¿½ï¿½Â  cinq Ã’ï¿½ï¿½Â©crans actifs en simultanÃ’ï¿½ï¿½Â©, plus deux connexions voyage temporaires. Vous pouvez gÃ’ï¿½ï¿½Â©rer vos appareils depuis lÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½espace client.",
  },
  {
    question: "Quelles options sport sont incluses ?",
    answer:
      "Atlas PRO Premium donne accÃ’ï¿½ï¿½Â¨s aux chaÃ’ï¿½ï¿½Â®nes sport France et internationales (Canal+, beIN SPORTS, RMC Sport, Eurosport, chaÃ’ï¿½ï¿½Â®nes MENA) avec flux 50/60 fps et mode Low Latency.",
  },
  {
    question: "Puis-je migrer du forfait 4K vers le Premium ?",
    answer:
      "Oui. Contactez le support Premium : nous calculons le prorata, transfÃ’ï¿½ï¿½Â©rons votre historique et activons la nouvelle offre sous 30 minutes sans coupure de service.",
  },
  {
    question: "Le DVR cloud est-il inclus dans le Premium ?",
    answer:
      "Oui. Vous pouvez programmer lÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½enregistrement des chaÃ’ï¿½ï¿½Â®nes principales jusquÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã’ï¿½ï¿½Â  7 jours et consulter vos contenus sur Smart TV, Android ou Windows.",
  },
  {
    question: "Quelle garantie propose Atlas PRO Premium ?",
    answer:
      "Le forfait Premium inclut la garantie satisfait ou remboursÃ’ï¿½ï¿½Â© 7 jours et une assistance prioritaire 7j/7 pour rÃ’ï¿½ï¿½Â©soudre tout incident rÃ’ï¿½ï¿½Â©seau ou technique.",
  },
];

export default function Page() {
  return (
    <div className="space-y-16">
      <ProductSchema product={productSchema} />
      <Breadcrumbs
        items={[
          { label: "Offres TV numï¿½riques", href: "/offres-tv-numerique/forfait-4k" },
          { label: "Forfait Premium", href: "/offres-tv-numerique/forfait-premium" },
        ]}
      />

      <PageHero
        badge="Premium"
        title="Atlas PRO TV numï¿½rique Premium : lÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½offre 4K la plus complÃ’ï¿½ï¿½Â¨te"
        description="AccÃ’ï¿½ï¿½Â©dez Ã’ï¿½ï¿½Â  des flux 4K prioritaires, aux bouquets sport internationaux et Ã’ï¿½ï¿½Â  une assistance expert 7j/7. Le forfait Premium est conÃ’ï¿½ï¿½Â§u pour les foyers multi-Ã’ï¿½ï¿½Â©crans et les passionnÃ’ï¿½ï¿½Â©s de sport."
        primaryCta={{
          label: "Demander lÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½offre Premium",
          href: WHATSAPP_SUPPORT_URL,
          trackingLabel: "Forfait Premium - Contact",
        }}
        secondaryCta={{
          label: "Comparer avec lÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½offre 4K",
          href: "/offres-tv-numerique/forfait-4k",
          trackingLabel: "Forfait Premium - Comparer 4K",
        }}
        image={{
          src: "/images/famille-streaming-4k.webp",
          alt: "Famille utilisant Atlas PRO TV numï¿½rique Premium sur plusieurs Ã’ï¿½ï¿½Â©crans",
          width: 960,
          height: 720,
          priority: true,
        }}
        stats={stats}
      />

      <section className="container py-10">
        <StatsStrip stats={stats} />
      </section>

      <section className="container grid gap-10 pb-6 pt-4 lg:grid-cols-[0.8fr,1fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Avantages Premium"
            title="Le forfait TV numï¿½rique 4K pour passionnÃ’ï¿½ï¿½Â©s de sport et foyers multi-Ã’ï¿½ï¿½Â©crans"
            description="Atlas PRO Premium combine une infrastructure renforcÃ’ï¿½ï¿½Â©e, des options sport exclusives et une assistance prioritaire pour garantir un streaming sans compromis."
          />
          <FeatureList features={premiumBenefits} />
          <div className="flex flex-wrap gap-3">
            <CTAButton
              href="/support/connexion"
              variant="outline"
              trackingLabel="Forfait Premium - Support"
            >
              Assistance prioritaire
            </CTAButton>
            <CTAButton
              href="/blog/comment-installer-atlaspro"
              variant="primary"
              trackingLabel="Forfait Premium - TÃ’ï¿½ï¿½Â©lÃ’ï¿½ï¿½Â©charger"
            >
              TÃ’ï¿½ï¿½Â©lÃ’ï¿½ï¿½Â©charger Atlas PRO Smart TV
            </CTAButton>
          </div>
        </div>
        <PricingCard
          title="Forfait Premium"
          description="Flux Ultra HD prioritaires, options sport Ã’ï¿½ï¿½Â©largies, DVR cloud et support expert en moins de 30 minutes."
          price="19,90"
          features={pricingOptions}
          highlight
          cta={{
            label: "Je rÃ’ï¿½ï¿½Â©serve mon offre Premium",
            href: WHATSAPP_SUPPORT_URL,
          }}
        />
      </section>

      <section className="container space-y-8">
        <SectionHeading
          eyebrow="Modules exclusifs"
          title="Ce que vous obtenez avec Atlas PRO TV numï¿½rique Premium"
          description="DÃ’ï¿½ï¿½Â©couvrez les fonctionnalitÃ’ï¿½ï¿½Â©s avancÃ’ï¿½ï¿½Â©es et les outils professionnels inclus pour chaque abonnÃ’ï¿½ï¿½Â© Premium."
        />
        <FeatureList features={premiumExtras} />
      </section>

      <section className="container space-y-8">
        <SectionHeading
          eyebrow="TÃ’ï¿½ï¿½Â©moignages"
          title="Ils ont choisi Atlas PRO TV numï¿½rique Premium"
          description="Des abonnÃ’ï¿½ï¿½Â©s francophones partagent leur expÃ’ï¿½ï¿½Â©rience aprÃ’ï¿½ï¿½Â¨s avoir migrÃ’ï¿½ï¿½Â© vers le forfait Premium."
        />
        <TestimonialsGrid testimonials={testimonials} />
      </section>

      <InternalLinks
        eyebrow="Optimiser votre offre"
        title="Raccourcis Premium essentiels"
        description="Installez, dï¿½pannez et comparez vos options Atlas PRO TV numï¿½rique en un clin dSil."
        links={[
          {
            href: "/offres-tv-numerique/forfait-4k",
            label: "Comparer avec le forfait 4K Atlas PRO",
            description: "Analysez la formule 4K standard et ses avantages budget.",
            category: "Offres",
          },
          {
            href: "/tutoriels-installation/smart-tv",
            label: "Installer Atlas PRO TV numï¿½rique sur Smart TV",
            description: "Tutoriel dï¿½taillï¿½ pour Smart TV Samsung, LG, Android TV et Fire TV.",
            category: "Tutoriels",
          },
          {
            href: "/tutoriels-installation/windows",
            label: "Configurer Atlas PRO sur Windows",
            description: "Procï¿½dure complï¿½te et optimisations rï¿½seau pour un PC stable.",
            category: "Compatibilitï¿½",
          },
          {
            href: "/support/epg-buffering",
            label: "Rï¿½soudre le buffering et lEPG en Premium",
            description: "Nos conseils avancï¿½s pour sï¿½curiser vos flux sportifs en direct.",
            category: "Support",
          },
          {
            href: "/blog/comment-installer-atlaspro",
            label: "Lire le tutoriel dinstallation Atlas PRO",
            description: "Activez rapidement votre code sur tous les appareils pris en charge.",
            category: "Blog",
          },
        ]}
      />

      <section className="container space-y-8 pb-20">
        <SectionHeading
          eyebrow="FAQ Premium"
          title="Questions frÃ’ï¿½ï¿½Â©quentes sur Atlas PRO TV numï¿½rique Premium"
          description="Toutes les rÃ’ï¿½ï¿½Â©ponses pour comprendre lÃ’Â¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½offre Premium, ses options sport et son support prioritaire."
          align="center"
        />
        <FAQBlock items={faqItems} />
        <FAQSchema items={faqItems} canonical="/offres-tv-numerique/forfait-premium" />
      </section>
    </div>
  );
}






