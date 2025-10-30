import Breadcrumbs from "@/components/breadcrumbs";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import HowToSteps from "@/components/howto-steps";
import FeatureList from "@/components/feature-list";
import FAQBlock from "@/components/faq/faq-block";
import FAQSchema from "@/components/seo/faq-schema";
import CTAButton from "@/components/ui/cta-button";
import StatsStrip from "@/components/stats-strip";
import TestimonialsGrid from "@/components/testimonials-grid";
import InternalLinks from "@/components/internal-links";

export const metadata = {
  title:
    "Tutoriel : installer Atlas PRO IPTV 4K sur Smart TV Samsung, LG et Android TV",
  description:
    "Guide détaillé pour configurer Atlas PRO IPTV 4K sur Smart TV Tizen, webOS, Android TV et Fire TV : étapes pas à pas, optimisation réseau, réglages d’image et FAQ pour l’Europe francophone.",
  alternates: {
    canonical: "/tutoriels-installation/smart-tv",
  },
};

const stats = [
  { value: "15 min", label: "Temps moyen d’installation" },
  { value: "4 étapes", label: "Procédure complète" },
  { value: "100 %", label: "Compatibilité Samsung / LG / Android TV" },
  { value: "7 j/7", label: "Support expert" },
];

const howToSteps = [
  {
    title: "Préparer votre Smart TV",
    text: "Mettez à jour le firmware de la TV, connectez-la en Ethernet ou Wi-Fi 5/6 et libérez de l’espace (500 Mo) pour l’installation.",
  },
  {
    title: "Installer Atlas PRO IPTV",
    text: "Téléchargez Atlas PRO IPTV depuis le store officiel ou le package signé, puis autorisez les permissions réseau lors du premier lancement.",
  },
  {
    title: "Activer votre accès",
    text: "Saisissez vos identifiants Atlas PRO IPTV, sélectionnez la région (France, Belgique, Suisse, Maroc) et synchronisez l’EPG multi-pays.",
  },
  {
    title: "Optimiser la diffusion 4K",
    text: "Choisissez le serveur recommandé, activez le mode anti-freeze et vérifiez le test de débit intégré. Ajustez ensuite les paramètres d’image de la TV.",
  },
];

const installationChecklist = [
  "TV Samsung Tizen 5.0+, LG webOS 4.0+, Android TV 9+ ou Fire TV Stick 4K à jour.",
  "Connexion fibre ou câble stable (>25 Mbps par flux 4K) et QoS activée sur votre box.",
  "Identifiants Atlas PRO IPTV actifs (forfait 4K ou Premium).",
  "Télécommande ou clavier Bluetooth pour faciliter la saisie.",
  "Serveur Atlas PRO sélectionné au plus proche de votre localisation (Paris, Bruxelles, Genève, Casablanca).",
];

const optimisationTips = [
  "Mode image : activez Filmmaker / Cinéma pour respecter la colorimétrie, désactivez l’overscan et le motion smoothing pour le sport.",
  "Réseau : privilégiez un câble Ethernet ou un Wi-Fi 5 GHz dédié, avec priorisation QoS sur la box opérateur.",
  "Audio : activez le passthrough Dolby Digital / Atmos pour profiter de la bande son des films et événements sportifs.",
  "EPG : rafraîchissez l’EPG en fin d’installation puis planifiez une synchronisation automatique toutes les 12 heures.",
  "Redondance : configurez un deuxième serveur Atlas PRO dans vos favoris pour basculer instantanément en cas de saturation locale.",
];

const advancedFeatures = [
  "Mode multi-profils : créez des profils Adultes / Enfants avec restrictions d’âge et favoris dédiés.",
  "Mosaïque & PiP : sur les TV compatibles, affichez deux flux 4K simultanés (match + multiplex).",
  "Enregistrement cloud : programmez l’enregistrement de vos programmes depuis l’application Smart TV.",
  "Télécommande virtuelle : pilotez Atlas PRO depuis l’application mobile Android en mode remote.",
  "Diagnostic avancé : envoyez les logs réseau à notre support directement depuis le menu Assistance.",
];

const testimonials = [
  {
    quote:
      "Installation sur ma Samsung Neo QLED en moins de 10 minutes. La 4K d’Atlas PRO est stable et le guide TV très lisible.",
    author: "Audrey B.",
    role: "Lyon, France",
  },
  {
    quote:
      "Sur LG webOS, la navigation est fluide avec la Magic Remote. Les conseils QoS de ce tutoriel ont éliminé les derniers freezes.",
    author: "Hicham E.",
    role: "Casablanca, Maroc",
  },
  {
    quote:
      "Android TV + Atlas PRO IPTV = combo parfait. J’apprécie la mosaïque et le support francophone pour les réglages avancés.",
    author: "Pierre G.",
    role: "Bruxelles, Belgique",
  },
];

const faqItems = [
  {
    question: "Quelles Smart TV sont compatibles avec Atlas PRO IPTV ?",
    answer:
      "Atlas PRO IPTV est compatible avec Samsung Tizen 2018+, LG webOS 4+, Android TV / Google TV (Sony, Philips, TCL, Xiaomi), Fire TV Stick 4K et boîtiers HDMI Android. Pour les modèles plus anciens, utilisez un boîtier Android TV externe.",
  },
  {
    question: "Comment éviter le buffering sur Smart TV ?",
    answer:
      "Utilisez un câble Ethernet ou un Wi-Fi 5/6 dédié, activez la QoS sur votre routeur, choisissez un serveur Atlas PRO proche et consultez /support/epg-buffering pour la configuration avancée.",
  },
  {
    question: "Puis-je installer Atlas PRO IPTV via clé USB ?",
    answer:
      "Oui. Téléchargez le package Atlas PRO, copiez-le sur une clé USB FAT32 et utilisez le gestionnaire de fichiers de votre TV. Activez les sources inconnues si le store officiel n’est pas disponible.",
  },
  {
    question: "Comment profiter de la 4K sur ma Smart TV ?",
    answer:
      "Vérifiez votre abonnement, votre débit (> 25 Mbps), sélectionnez un flux 4K dans Atlas PRO et activez les modes HDR10+ / Dolby Vision si votre téléviseur le supporte.",
  },
  {
    question: "Que faire si l’EPG ne se synchronise pas ?",
    answer:
      "Vérifiez l’heure automatique de la TV, relancez la synchronisation via Menu > Maintenance > Rafraîchir l’EPG, puis consultez /support/epg-buffering ou contactez le support Atlas PRO IPTV.",
  },
];

export default function Page() {
  return (
    <div className="space-y-16">
      <Breadcrumbs
        items={[
          { label: "Tutoriels", href: "/tutoriels-installation/smart-tv" },
          { label: "Smart TV", href: "/tutoriels-installation/smart-tv" },
        ]}
      />

      <PageHero
        badge="Tutoriel complet"
        title="Installer Atlas PRO IPTV 4K sur votre Smart TV"
        description="Suivez ce guide officiel pour configurer Atlas PRO IPTV sur Smart TV Samsung, LG, Android TV et Fire TV. Optimisez votre réseau, vos réglages d’image et profitez d’une expérience 4K fluide."
        primaryCta={{
          label: "Lire le guide complet",
          href: "/blog/comment-installer-atlaspro",
          trackingLabel: "Tutoriel SmartTV - Guide blog",
        }}
        secondaryCta={{
          label: "Voir nos offres 4K",
          href: "/offres-iptv/forfait-4k",
          trackingLabel: "Tutoriel SmartTV - Voir offres",
        }}
        image={{
          src: "/images/installation-smart-tv-4k.webp",
          alt: "Installation Atlas PRO IPTV sur une Smart TV 4K",
          width: 960,
          height: 640,
          priority: true,
        }}
        stats={stats}
      />

      <section className="container py-10">
        <StatsStrip stats={stats} />
      </section>

      <section className="container space-y-10">
        <SectionHeading
          eyebrow="Checklist installation"
          title="Préparer votre Smart TV avant d’installer Atlas PRO IPTV"
          description="Assurez-vous que votre configuration réseau et votre téléviseur sont prêts pour profiter d’Atlas PRO IPTV dans les meilleures conditions."
        />
        <FeatureList features={installationChecklist} />
      </section>

      <section className="container space-y-10">
        <SectionHeading
          eyebrow="Étapes d’installation"
          title="Configurer Atlas PRO IPTV sur Smart TV en quatre étapes"
          description="Suivez pas à pas ce tutoriel pour installer, activer et optimiser Atlas PRO IPTV sur votre téléviseur connecté."
        />
        <HowToSteps
          steps={howToSteps}
          name="Tutoriel Atlas PRO IPTV Smart TV"
          description="Étapes détaillées pour installer Atlas PRO IPTV sur Smart TV Samsung, LG, Android TV et Fire TV."
          canonical="/tutoriels-installation/smart-tv"
        />
      </section>

      <section className="container space-y-10">
        <SectionHeading
          eyebrow="Optimisations 4K"
          title="Réglages recommandés pour une qualité d’image optimale"
          description="Appliquez ces recommandations pour tirer le meilleur de votre TV 4K et de votre abonnement Atlas PRO IPTV."
        />
        <FeatureList features={optimisationTips} />
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-sm text-gray-300 shadow-soft">
          <p>
            Pour aller plus loin, consultez nos guides{" "}
            <a href="/blog/comment-installer-atlaspro" className="text-atlas-gold">
              téléchargement Smart TV
            </a>{" "}
            et{" "}
            <a href="/support/epg-buffering" className="text-atlas-gold">
              dépannage EPG & buffering
            </a>
            , puis découvrez l’offre{" "}
            <a href="/offres-iptv/forfait-premium" className="text-atlas-gold">
              Atlas PRO Premium
            </a>{" "}
            si vous souhaitez connecter davantage d’écrans.
          </p>
        </div>
      </section>

      <section className="container space-y-10">
        <SectionHeading
          eyebrow="Fonctionnalités avancées"
          title="Exploiter tout le potentiel d’Atlas PRO IPTV sur Smart TV"
          description="Atlas PRO IPTV regorge de fonctionnalités pour les utilisateurs avancés : profils, enregistrements cloud, diagnostic et assistance à distance."
        />
        <FeatureList features={advancedFeatures} />
      </section>

      <section className="container space-y-8">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ils ont réussi leur installation Atlas PRO IPTV"
          description="Les abonnés francophones partagent leurs retours après l’installation sur Smart TV."
        />
        <TestimonialsGrid testimonials={testimonials} />
      </section>

      <InternalLinks
        eyebrow="Prochaines étapes"
        title="Poursuivre avec Atlas PRO IPTV"
        description="Accédez rapidement aux offres officielles, aux autres tutoriels et au support technique."
        links={[
          {
            href: "/offres-iptv/forfait-4k",
            label: "Découvrir le forfait 4K Atlas PRO",
            description: "Activation instantanée, codes certifiés et support prioritaire 24/7.",
            category: "Offres",
          },
          {
            href: "/offres-iptv/forfait-premium",
            label: "Comparer avec le forfait Premium multi-écrans",
            description: "Flux prioritaires, DVR cloud et assistance experte.",
            category: "Offres",
          },
          {
            href: "/tutoriels-installation/windows",
            label: "Installer Atlas PRO IPTV sur Windows",
            description: "Guide complet pour lecteur Atlas PRO et optimisation réseau PC.",
            category: "Tutoriels",
          },
          {
            href: "/support/epg-buffering",
            label: "Résoudre le buffering et l’EPG sur Smart TV",
            description: "Conseils avancés pour un streaming fluide sur Smart TV.",
            category: "Support",
          },
          {
            href: "/blog/comment-installer-atlaspro",
            label: "Lire le tutoriel d’installation Atlas PRO complet",
            description: "Suivez les étapes officielles pour activer votre abonnement partout.",
            category: "Blog",
          },
        ]}
      />

      <section className="container space-y-8 pb-20">
        <SectionHeading
          eyebrow="FAQ installation Smart TV"
          title="Questions fréquentes avant d’installer Atlas PRO IPTV"
          description="Des réponses claires sur la compatibilité, le réseau et les réglages indispensables pour votre Smart TV."
          align="center"
        />
        <FAQBlock items={faqItems} />
        <FAQSchema
          items={faqItems}
          canonical="/tutoriels-installation/smart-tv"
        />
        <div className="text-center text-sm text-gray-400">
          Encore une question ?{" "}
          <a
            href="https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%20IPTV%2C%20je%20souhaite%20acheter%20un%20abonnement."
            className="text-atlas-gold"
          >
            Contactez notre support 7j/7
          </a>{" "}
          ou ouvrez un billet via{" "}
          <a href="/support/connexion" className="text-atlas-gold">
            le centre d’assistance Atlas PRO
          </a>
          .
        </div>
      </section>
    </div>
  );
}
