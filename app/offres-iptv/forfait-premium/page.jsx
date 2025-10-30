import Breadcrumbs from "@/components/breadcrumbs";
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

export const metadata = {
  title:
    "Atlas PRO IPTV Premium | IPTV 4K multi-ÃƒÂ’Ã‚Â©crans & options sport en 2025",
  description:
    "DÃƒÂ’Ã‚Â©couvrez le forfait Atlas PRO IPTV Premium : flux prioritaires, 5 ÃƒÂ’Ã‚Â©crans simultanÃƒÂ’Ã‚Â©s, options sport ÃƒÂ’Ã‚Â©largies, DVR cloud et assistance expert 7j/7 pour la France, la Belgique, la Suisse et le Luxembourg.",
  alternates: {
    canonical: "/offres-iptv/forfait-premium",
  },
};

const stats = [
  { value: "5 ÃƒÂ’Ã‚Â©crans", label: "connexions simultanÃƒÂ’Ã‚Â©es" },
  { value: "120+", label: "chaÃƒÂ’Ã‚Â®nes sport & premium" },
  { value: "15 ms", label: "latence moyenne mesurÃƒÂ’Ã‚Â©e" },
  { value: "PrioritÃƒÂ’Ã‚Â©", label: "support francophone" },
];

const productSchema = {
  name: "Atlas PRO IPTV ÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½S Forfait Premium",
  description:
    "Abonnement IPTV 4K multi-ÃƒÂ’Ã‚Â©crans avec options sport ÃƒÂ’Ã‚Â©largies, VOD exclusives, DVR cloud et assistance prioritaire Atlas PRO IPTV pour l'Europe francophone.",
  image: "/images/famille-streaming-4k.webp",
  url: "/offres-iptv/forfait-premium",
  price: "19.90",
  priceValidUntil: "2025-12-31",
  aggregateRating: {
    ratingValue: "4.9",
    reviewCount: "956",
  },
};

const premiumBenefits = [
  "Cinq ÃƒÂ’Ã‚Â©crans simultanÃƒÂ’Ã‚Â©s + deux connexions voyage dÃƒÂ’Ã‚Â©diÃƒÂ’Ã‚Â©es pour rester connectÃƒÂ’Ã‚Â© en dÃƒÂ’Ã‚Â©placement.",
  "Flux 4K/8K prioritaires avec rafraÃƒÂ’Ã‚Â®chissement 50/60 fps pour les grands ÃƒÂ’Ã‚Â©vÃƒÂ’Ã‚Â©nements sportifs.",
  "AccÃƒÂ’Ã‚Â¨s aux bouquets Premium (Canal+, beIN SPORTS, RMC Sport, chaÃƒÂ’Ã‚Â®nes MENA) et VOD exclusives Atlas PRO Max.",
  "Support Expert Premium : rappel en moins de 30 minutes, assistance ÃƒÂ’Ã‚Â  distance, configuration routeur.",
  "Option DVR cloud, enregistrement 7 jours et playlists personnalisÃƒÂ’Ã‚Â©es pour chaque membre du foyer.",
];

const premiumExtras = [
  {
    title: "Mode Low Latency personnalisÃƒÂ’Ã‚Â©",
    description:
      "Atlas PRO Premium offre un routage prioritaire sur nos serveurs europÃƒÂ’Ã‚Â©ens. RÃƒÂ’Ã‚Â©sultat : un temps de zapping rÃƒÂ’Ã‚Â©duit et une latence moyenne de 15 ms durant les matchs.",
  },
  {
    title: "PiP et mosaÃƒÂ’Ã‚Â¯que sport",
    description:
      "Suivez deux rencontres simultanÃƒÂ’Ã‚Â©ment ou affichez jusquÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½ÃƒÂ’Ã‚Â  quatre flux via la mosaÃƒÂ’Ã‚Â¯que Premium, disponible sur Smart TV compatibles et boÃƒÂ’Ã‚Â®tiers Android TV.",
  },
  {
    title: "Assistance dÃƒÂ’Ã‚Â©diÃƒÂ’Ã‚Â©e",
    description:
      "Les abonnÃƒÂ’Ã‚Â©s Premium disposent dÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½un canal de support prioritaire, dÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½un rappel tÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©phonique et dÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½un diagnostic rÃƒÂ’Ã‚Â©seau avancÃƒÂ’Ã‚Â© avec nos techniciens.",
  },
  {
    title: "Partage familial sÃƒÂ’Ã‚Â©curisÃƒÂ’Ã‚Â©",
    description:
      "CrÃƒÂ’Ã‚Â©ez des profils sÃƒÂ’Ã‚Â©parÃƒÂ’Ã‚Â©s, verrouillez les contenus adultes, sauvegardez les favoris dans le cloud et contrÃƒÂ’Ã‚Â´lez lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½activitÃƒÂ’Ã‚Â© depuis lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½espace client.",
  },
  {
    title: "Offres entreprises & ÃƒÂ’Ã‚Â©vÃƒÂ’Ã‚Â©nements",
    description:
      "Atlas PRO Premium propose des solutions multi-sites pour les bars, hÃƒÂ’Ã‚Â´tels et ÃƒÂ’Ã‚Â©vÃƒÂ’Ã‚Â©nements sportifs avec bande passante garantie et playlists spÃƒÂ’Ã‚Â©cifiques.",
  },
];

const pricingOptions = [
  "1 mois : 24,90 ÃƒÂ¢Ã¯Â¿Â½aÃ‚Â¬ ÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½S idÃƒÂ’Ã‚Â©al pour tester le service avant un grand ÃƒÂ’Ã‚Â©vÃƒÂ’Ã‚Â©nement sportif.",
  "3 mois : 22,90 ÃƒÂ¢Ã¯Â¿Â½aÃ‚Â¬ / mois ÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½S parfait pour une saison rÃƒÂ’Ã‚Â©guliÃƒÂ’Ã‚Â¨re (football, NBA, F1).",
  "6 mois : 21,50 ÃƒÂ¢Ã¯Â¿Â½aÃ‚Â¬ / mois ÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½S valeur sÃƒÂ’Ã‚Â»re pour les familles multi-ÃƒÂ’Ã‚Â©crans.",
  "12 mois : 19,90 ÃƒÂ¢Ã¯Â¿Â½aÃ‚Â¬ / mois ÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½S meilleure offre annuelle avec assistance prioritaire incluse.",
];

const testimonials = [
  {
    quote:
      "Avec le Premium, plus aucun freeze pendant les matchs. Le mode mosaÃƒÂ’Ã‚Â¯que est parfait pour suivre Ligue 1 et Premier League en mÃƒÂ’Ã‚Âªme temps.",
    author: "RÃƒÂ’Ã‚Â©mi L.",
    role: "Bordeaux, France",
  },
  {
    quote:
      "Nous sommes cinq ÃƒÂ’Ã‚Â  la maison : chacun a ses favoris et profils. Le support Premium mÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½a aidÃƒÂ’Ã‚Â© ÃƒÂ’Ã‚Â  optimiser mon routeur en moins de 20 minutes.",
    author: "Khadija A.",
    role: "Bruxelles, Belgique",
  },
  {
    quote:
      "GÃƒÂ’Ã‚Â©rant dÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½un bar sportif, jÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½apprÃƒÂ’Ã‚Â©cie le routage prioritaire et la qualitÃƒÂ’Ã‚Â© 4K mÃƒÂ’Ã‚Âªme les soirs de Champions League. Les clients adorent la mosaÃƒÂ’Ã‚Â¯que.",
    author: "Olivier G.",
    role: "Lyon, France",
  },
];

const faqItems = [
  {
    question:
      "Combien dÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½ÃƒÂ’Ã‚Â©crans simultanÃƒÂ’Ã‚Â©s autorise le forfait Atlas PRO Premium ?",
    answer:
      "Le forfait Premium permet jusquÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½ÃƒÂ’Ã‚Â  cinq ÃƒÂ’Ã‚Â©crans actifs en simultanÃƒÂ’Ã‚Â©, plus deux connexions voyage temporaires. Vous pouvez gÃƒÂ’Ã‚Â©rer vos appareils depuis lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½espace client.",
  },
  {
    question: "Quelles options sport sont incluses ?",
    answer:
      "Atlas PRO Premium donne accÃƒÂ’Ã‚Â¨s aux chaÃƒÂ’Ã‚Â®nes sport France et internationales (Canal+, beIN SPORTS, RMC Sport, Eurosport, chaÃƒÂ’Ã‚Â®nes MENA) avec flux 50/60 fps et mode Low Latency.",
  },
  {
    question: "Puis-je migrer du forfait 4K vers le Premium ?",
    answer:
      "Oui. Contactez le support Premium : nous calculons le prorata, transfÃƒÂ’Ã‚Â©rons votre historique et activons la nouvelle offre sous 30 minutes sans coupure de service.",
  },
  {
    question: "Le DVR cloud est-il inclus dans le Premium ?",
    answer:
      "Oui. Vous pouvez programmer lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½enregistrement des chaÃƒÂ’Ã‚Â®nes principales jusquÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½ÃƒÂ’Ã‚Â  7 jours et consulter vos contenus sur Smart TV, Android ou Windows.",
  },
  {
    question: "Quelle garantie propose Atlas PRO Premium ?",
    answer:
      "Le forfait Premium inclut la garantie satisfait ou remboursÃƒÂ’Ã‚Â© 7 jours et une assistance prioritaire 7j/7 pour rÃƒÂ’Ã‚Â©soudre tout incident rÃƒÂ’Ã‚Â©seau ou technique.",
  },
];

export default function Page() {
  return (
    <div className="space-y-16">
      <ProductSchema product={productSchema} />
      <Breadcrumbs
        items={[
          { label: "Offres IPTV", href: "/offres-iptv/forfait-4k" },
          { label: "Forfait Premium", href: "/offres-iptv/forfait-premium" },
        ]}
      />

      <PageHero
        badge="Premium"
        title="Atlas PRO IPTV Premium : lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½offre 4K la plus complÃƒÂ’Ã‚Â¨te"
        description="AccÃƒÂ’Ã‚Â©dez ÃƒÂ’Ã‚Â  des flux 4K prioritaires, aux bouquets sport internationaux et ÃƒÂ’Ã‚Â  une assistance expert 7j/7. Le forfait Premium est conÃƒÂ’Ã‚Â§u pour les foyers multi-ÃƒÂ’Ã‚Â©crans et les passionnÃƒÂ’Ã‚Â©s de sport."
        primaryCta={{
          label: "Demander lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½offre Premium",
          href: "https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%20IPTV%2C%20je%20souhaite%20acheter%20un%20abonnement.",
          trackingLabel: "Forfait Premium - Contact",
        }}
        secondaryCta={{
          label: "Comparer avec lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½offre 4K",
          href: "/offres-iptv/forfait-4k",
          trackingLabel: "Forfait Premium - Comparer 4K",
        }}
        image={{
          src: "/images/famille-streaming-4k.webp",
          alt: "Famille utilisant Atlas PRO IPTV Premium sur plusieurs ÃƒÂ’Ã‚Â©crans",
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
            title="Le forfait IPTV 4K pour passionnÃƒÂ’Ã‚Â©s de sport et foyers multi-ÃƒÂ’Ã‚Â©crans"
            description="Atlas PRO Premium combine une infrastructure renforcÃƒÂ’Ã‚Â©e, des options sport exclusives et une assistance prioritaire pour garantir un streaming sans compromis."
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
              trackingLabel="Forfait Premium - TÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©charger"
            >
              TÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©charger Atlas PRO Smart TV
            </CTAButton>
          </div>
        </div>
        <PricingCard
          title="Forfait Premium"
          description="Flux Ultra HD prioritaires, options sport ÃƒÂ’Ã‚Â©largies, DVR cloud et support expert en moins de 30 minutes."
          price="19,90"
          features={pricingOptions}
          highlight
          cta={{
            label: "Je rÃƒÂ’Ã‚Â©serve mon offre Premium",
            href: "https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%20IPTV%2C%20je%20souhaite%20acheter%20un%20abonnement.",
          }}
        />
      </section>

      <section className="container space-y-8">
        <SectionHeading
          eyebrow="Modules exclusifs"
          title="Ce que vous obtenez avec Atlas PRO IPTV Premium"
          description="DÃƒÂ’Ã‚Â©couvrez les fonctionnalitÃƒÂ’Ã‚Â©s avancÃƒÂ’Ã‚Â©es et les outils professionnels inclus pour chaque abonnÃƒÂ’Ã‚Â© Premium."
        />
        <FeatureList features={premiumExtras} />
      </section>

      <section className="container space-y-8">
        <SectionHeading
          eyebrow="TÃƒÂ’Ã‚Â©moignages"
          title="Ils ont choisi Atlas PRO IPTV Premium"
          description="Des abonnÃƒÂ’Ã‚Â©s francophones partagent leur expÃƒÂ’Ã‚Â©rience aprÃƒÂ’Ã‚Â¨s avoir migrÃƒÂ’Ã‚Â© vers le forfait Premium."
        />
        <TestimonialsGrid testimonials={testimonials} />
      </section>

      <InternalLinks
        eyebrow="Optimiser votre offre"
        title="Raccourcis Premium essentiels"
        description="Installez, dépannez et comparez vos options Atlas PRO IPTV en un clin d’œil."
        links={[
          {
            href: "/offres-iptv/forfait-4k",
            label: "Comparer avec le forfait 4K Atlas PRO",
            description: "Analysez la formule 4K standard et ses avantages budget.",
            category: "Offres",
          },
          {
            href: "/tutoriels-installation/smart-tv",
            label: "Installer Atlas PRO IPTV sur Smart TV",
            description: "Tutoriel détaillé pour Smart TV Samsung, LG, Android TV et Fire TV.",
            category: "Tutoriels",
          },
          {
            href: "/tutoriels-installation/windows",
            label: "Configurer Atlas PRO sur Windows",
            description: "Procédure complète et optimisations réseau pour un PC stable.",
            category: "Compatibilité",
          },
          {
            href: "/support/epg-buffering",
            label: "Résoudre le buffering et l’EPG en Premium",
            description: "Nos conseils avancés pour sécuriser vos flux sportifs en direct.",
            category: "Support",
          },
          {
            href: "/blog/comment-installer-atlaspro",
            label: "Lire le tutoriel d’installation Atlas PRO",
            description: "Activez rapidement votre code sur tous les appareils pris en charge.",
            category: "Blog",
          },
        ]}
      />

      <section className="container space-y-8 pb-20">
        <SectionHeading
          eyebrow="FAQ Premium"
          title="Questions frÃƒÂ’Ã‚Â©quentes sur Atlas PRO IPTV Premium"
          description="Toutes les rÃƒÂ’Ã‚Â©ponses pour comprendre lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½offre Premium, ses options sport et son support prioritaire."
          align="center"
        />
        <FAQBlock items={faqItems} />
        <FAQSchema items={faqItems} canonical="/offres-iptv/forfait-premium" />
      </section>
    </div>
  );
}




