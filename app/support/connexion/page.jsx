import Breadcrumbs from "@/components/breadcrumbs";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import FeatureList from "@/components/feature-list";
import FAQBlock from "@/components/faq/faq-block";
import FAQSchema from "@/components/seo/faq-schema";
import CTAButton from "@/components/ui/cta-button";
import StatsStrip from "@/components/stats-strip";
import TestimonialsGrid from "@/components/testimonials-grid";
import HowToSteps from "@/components/howto-steps";

export const metadata = {
  title:
    "Support Atlas PRO IPTV | Problèmes de connexion, identifiants et IP bloquée",
  description:
    "Résolvez les erreurs de connexion Atlas PRO IPTV : identifiants perdus, IP bloquée, sessions multiples, VPN, DNS ou firewall. Accédez à un plan d’action rapide et à notre assistance francophone 7j/7.",
  alternates: {
    canonical: "/support/connexion",
  },
};

const stats = [
  { value: "< 5 min", label: "Temps moyen de reconnexion" },
  { value: "3 écrans", label: "Tolérance simultanée forfait 4K" },
  { value: "12 h", label: "Temps de réponse support" },
  { value: "24/7", label: "Surveillance serveurs" },
];

const quickChecklist = [
  "Vérifiez l’orthographe de votre identifiant et la validité de votre abonnement dans l’espace client.",
  "Fermez les sessions ouvertes sur les autres appareils depuis Paramètres > Sécurité (application) ou espace client.",
  "Redémarrez votre routeur/box internet, désactivez temporairement VPN/Proxy et testez un second appareil.",
  "Remplacez vos DNS par 1.1.1.1 ou 8.8.8.8 et assurez-vous que les ports 80/443 ne sont pas filtrés.",
  "Contactez le support avec votre ID client pour réinitialiser votre session Atlas PRO IPTV si nécessaire.",
];

const troubleshootingSteps = [
  {
    title: "Identifier le message d’erreur",
    text: "Notez le message exact (IP bloquée, identifiants invalides, session expirée) et l’appareil concerné (Smart TV, Android, Windows).",
  },
  {
    title: "Tester la connexion réseau",
    text: "Vérifiez votre débit, désactivez le VPN, changez de réseau Wi-Fi ou passez temporairement en partage 4G pour isoler le problème.",
  },
  {
    title: "Réinitialiser les sessions Atlas PRO",
    text: "Depuis l’application : Paramètres > Sécurité > Fermer toutes les sessions. Depuis l’espace client : onglet Gestion des appareils > Réinitialiser mes écrans.",
  },
  {
    title: "Contacter l’assistance",
    text: "Si le problème persiste, ouvrez un ticket sur /contact avec votre ID client, votre IP publique (whatismyip.com) et vos tests réseau.",
  },
];

const bestPractices = [
  "Limiter le nombre d’appareils connectés simultanément selon votre forfait (3 écrans en 4K, 5 écrans en Premium).",
  "Éviter les VPN trop chargés ou éloignés : privilégiez un serveur proche de votre localisation si le VPN est obligatoire.",
  "Ajouter Atlas PRO IPTV à la liste blanche de votre antivirus, pare-feu ou box opérateur.",
  "Mettre à jour régulièrement l’application Atlas PRO, les firmwares Smart TV et le système Android / Windows.",
  "Changer de serveur Atlas PRO depuis Paramètres > Avancé lorsque vous voyagez ou rencontrez une saturation locale.",
];

const testimonials = [
  {
    quote:
      "J’avais une IP bloquée après plusieurs connexions. Le guide m’a aidée à fermer les sessions et le support a débloqué mon compte en moins d’une heure.",
    author: "Nathalie F.",
    role: "Nantes, France",
  },
  {
    quote:
      "Le problème venait de mon VPN. Après avoir suivi les recommandations DNS et QoS, l’accès à Atlas PRO IPTV est redevenu instantané.",
    author: "Yanis B.",
    role: "Casablanca, Maroc",
  },
  {
    quote:
      "Le support Atlas PRO m’a guidé pour autoriser l’application dans mon pare-feu Windows. Depuis, plus aucune coupure d’authentification.",
    author: "Camille S.",
    role: "Bruxelles, Belgique",
  },
];

const faqItems = [
  {
    question: "Que signifie le message « IP bloquée » dans Atlas PRO IPTV ?",
    answer:
      "Le système a détecté trop de connexions simultanées ou un partage non autorisé. Déconnectez vos appareils, attendez 30 minutes et reconnectez-vous. Contactez le support avec votre ID client si l’IP reste bloquée.",
  },
  {
    question:
      "Comment récupérer ou réinitialiser mes identifiants Atlas PRO IPTV ?",
    answer:
      "Utilisez le lien « Mot de passe oublié » sur l’espace client ou contactez le support. Vous recevrez un email sécurisé pour définir un nouveau mot de passe.",
  },
  {
    question: "Puis-je utiliser Atlas PRO IPTV avec un VPN ?",
    answer:
      "Atlas PRO IPTV fonctionne avec certains VPN, mais la latence peut augmenter. Choisissez un serveur proche de votre localisation, sinon désactivez le VPN pour retrouver une connexion optimale.",
  },
  {
    question: "Pourquoi mon compte se déconnecte automatiquement ?",
    answer:
      "Cela se produit lorsqu’un autre appareil se connecte avec vos identifiants ou si la limite d’écrans est atteinte. Gérez vos sessions via Paramètres > Sécurité ou via l’espace client.",
  },
  {
    question: "Quel délai pour obtenir de l’aide du support Atlas PRO ?",
    answer:
      "Notre équipe répond sous 12 heures maximum. Fournissez votre ID client, vos horaires d’incident, votre localisation et vos tests de débit pour une résolution rapide.",
  },
];

export default function Page() {
  return (
    <div className="space-y-16">
      <Breadcrumbs
        items={[
          { label: "Support", href: "/support/epg-buffering" },
          { label: "Connexion", href: "/support/connexion" },
        ]}
      />

      <PageHero
        badge="Assistance compte"
        title="Résoudre les problèmes de connexion Atlas PRO IPTV"
        description="Identifiants incorrects, IP bloquée, sessions multiples ou VPN : suivez ce plan d’action pour rétablir votre accès Atlas PRO IPTV 4K en quelques minutes."
        primaryCta={{
          label: "Contacter le support Atlas PRO",
          href: "https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%20IPTV%2C%20je%20souhaite%20acheter%20un%20abonnement.",
          trackingLabel: "Support Connexion - Ticket",
        }}
        secondaryCta={{
          label: "Consulter le guide anti-buffering",
          href: "/support/epg-buffering",
          trackingLabel: "Support Connexion - Anti Buffering",
        }}
        image={{
          src: "/images/atlas-pro-iptv-4k.webp",
          alt: "Support Atlas PRO IPTV pour problèmes de connexion",
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
          eyebrow="Checklist connexion"
          title="Étapes clés avant d’ouvrir un ticket"
          description="Ces vérifications résolvent 80 % des incidents de connexion Atlas PRO IPTV, que vous soyez sur Smart TV, Android ou Windows."
        />
        <FeatureList features={quickChecklist} />
      </section>

      <section className="container space-y-10">
        <SectionHeading
          eyebrow="Plan d’action"
          title="Procédure rapide pour rétablir l’accès Atlas PRO IPTV"
          description="Suivez ces étapes pour identifier l’erreur, réinitialiser vos sessions et contacter le support avec les bonnes informations."
        />
        <HowToSteps
          steps={troubleshootingSteps}
          name="Plan de dépannage connexion Atlas PRO IPTV"
          description="Guide officiel pour résoudre les problèmes d’authentification Atlas PRO IPTV."
          canonical="/support/connexion"
        />
      </section>

      <section className="container space-y-10">
        <SectionHeading
          eyebrow="Bonnes pratiques"
          title="Prévenir les blocages de compte et les déconnexions"
          description="Adoptez ces bonnes pratiques pour garantir un accès stable et sécurisé à Atlas PRO IPTV."
        />
        <FeatureList features={bestPractices} />
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-sm text-gray-300 shadow-soft">
          <p>
            Pour aller plus loin, consultez{" "}
            <a href="/blog/comment-installer-atlaspro" className="text-atlas-gold">
              nos applications officielles
            </a>
            , explorez{" "}
            <a href="/tutoriels-installation/windows" className="text-atlas-gold">
              les tutoriels Windows
            </a>{" "}
            et découvrez les avantages du{" "}
            <a href="/offres-iptv/forfait-premium" className="text-atlas-gold">
              forfait Premium Atlas PRO IPTV
            </a>
            .
          </p>
        </div>
      </section>

      <section className="container space-y-8">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ils ont retrouvé l’accès à Atlas PRO IPTV"
          description="Des abonnés francophones partagent leur expérience après avoir suivi nos recommandations de dépannage."
        />
        <TestimonialsGrid testimonials={testimonials} />
      </section>

      <section className="container space-y-8 pb-20">
        <SectionHeading
          eyebrow="FAQ connexion"
          title="Questions fréquentes sur l’authentification Atlas PRO IPTV"
          description="Réponses détaillées pour identifier et résoudre les principales erreurs de connexion."
          align="center"
        />
        <FAQBlock items={faqItems} />
        <FAQSchema items={faqItems} canonical="/support/connexion" />
      </section>
    </div>
  );
}
