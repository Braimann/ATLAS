import Breadcrumbs from "@/components/breadcrumbs";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import FeatureList from "@/components/feature-list";
import FAQBlock from "@/components/faq/faq-block";
import FAQSchema from "@/components/seo/faq-schema";
import CTAButton from "@/components/ui/cta-button";
import StatsStrip from "@/components/stats-strip";
import TestimonialsGrid from "@/components/testimonials-grid";

export const metadata = {
  title: "Contact Atlas PRO IPTV | Support WhatsApp 7j/7",
  description:
    "Contactez Atlas PRO IPTV via WhatsApp pour toute question technique, commerciale ou partenariat. Support francophone disponible 7 j/7 en France, Belgique, Suisse, Luxembourg et Maroc.",
  alternates: {
    canonical: "/contact",
  },
};

const stats = [
  { value: "< 5 min", label: "Temps de réponse moyen sur WhatsApp" },
  { value: "7 j/7", label: "Support francophone" },
  { value: "3 langues", label: "Français, anglais, arabe" },
  { value: "100 %", label: "Demandes traitées via WhatsApp" },
];

const reasons = [
  "Réponse en direct par un conseiller Atlas PRO IPTV, sans file d’attente ni formulaire complexe.",
  "Partage facile d’informations (captures d’écran, diagnostics, vidéos) pour résoudre vos incidents plus vite.",
  "Suivi de commande, renouvellement d’abonnement et conseils personnalisés sur l’offre 4K ou Premium.",
  "Support centralisé : une seule conversation pour la facturation, la technique et les partenariats.",
  "Notifications instantanées sur les mises à jour Atlas PRO IPTV, les nouveautés VOD et les opérations spéciales.",
];

const faqItems = [
  {
    question: "Quel est le numéro WhatsApp officiel d’Atlas PRO IPTV ?",
    answer:
      "Toutes vos demandes passent par le +212770303940. Utilisez le bouton “Contacter sur WhatsApp” pour ouvrir directement la conversation.",
  },
  {
    question: "Quels types de demandes puis-je envoyer sur WhatsApp ?",
    answer:
      "Installation Smart TV/Android/Windows, renouvellement d’abonnement, suivi de commande, questions facturation, partenariats B2B, assistance Premium : tout est géré sur WhatsApp.",
  },
  {
    question: "Quel est le délai de réponse ?",
    answer:
      "Notre équipe répond en moyenne sous 5 minutes de 08h00 à 22h00 (CET), 7 jours sur 7. En dehors de ces horaires, le délai peut atteindre 12 heures.",
  },
  {
    question: "Puis-je partager des captures ou des vidéos ?",
    answer:
      "Oui. Envoyez vos captures d’écran, vidéos ou logs directement dans la conversation WhatsApp pour accélérer le diagnostic.",
  },
  {
    question: "Comment suivre ma demande ou obtenir un suivi ?",
    answer:
      "Toutes les réponses sont centralisées dans votre fil WhatsApp. Nos conseillers peuvent également programmer un rappel vocal si nécessaire.",
  },
];

const testimonials = [
  {
    quote:
      "Réponse immédiate via WhatsApp : mes identifiants ont été réactivés en 3 minutes et j’ai reçu le tutoriel Smart TV directement dans la conversation.",
    author: "Lucas G.",
    role: "Strasbourg, France",
  },
  {
    quote:
      "Le support Atlas PRO IPTV m’a aidée à régler un souci de buffering sur LG webOS en quelques échanges sur WhatsApp. Rapide et efficace.",
    author: "Sabrina T.",
    role: "Bruxelles, Belgique",
  },
  {
    quote:
      "Notre bar sportif a configuré 5 écrans Premium grâce au support WhatsApp. Diagnostic réseau et playlist sport envoyés instantanément.",
    author: "Jean-Philippe R.",
    role: "Lyon, France",
  },
];

export default function Page() {
  return (
    <div className="space-y-16">
      <Breadcrumbs items={[{ label: "Contact", href: "https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%20IPTV%2C%20je%20souhaite%20acheter%20un%20abonnement." }]} />

      <PageHero
        badge="Support WhatsApp"
        title="Contactez Atlas PRO IPTV sur WhatsApp"
        description="Tous vos échanges se font désormais sur WhatsApp : assistance technique, renouvellement, partenariats et suivi d’abonnement. Cliquez sur le bouton ci-dessous pour démarrer la conversation."
        primaryCta={{
          label: "Contacter sur WhatsApp",
          trackingLabel: "Contact - WhatsApp Hero",
        }}
          secondaryCta={{
            label: "Consulter nos offres IPTV",
            href: "/offres-iptv/forfait-4k",
            trackingLabel: "Contact - Offres 4K",
          }}
        image={{
          src: "/images/famille-streaming-4k.webp",
          alt: "Conseiller Atlas PRO IPTV répondant via WhatsApp",
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
          eyebrow="Pourquoi WhatsApp ?"
          title="Un support 100 % WhatsApp pour une réponse plus rapide"
          description="WhatsApp centralise toutes vos demandes Atlas PRO IPTV : assistance, renouvellement, offres Premium et partenariats, avec un suivi personnalisé."
        />
        <FeatureList features={reasons} />
        <div className="flex flex-col gap-3 sm:flex-row">
          <CTAButton variant="gold" trackingLabel="Contact - WhatsApp CTA" href="https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%20IPTV%2C%20je%20souhaite%20acheter%20un%20abonnement.">
            Démarrer la conversation
          </CTAButton>
          <CTAButton
            variant="outline"
            trackingLabel="Contact - Email"
            href="mailto:support@atlaspro4k.com"
          >
            Écrire un e-mail
          </CTAButton>
        </div>
      </section>

      <section className="container space-y-8">
        <SectionHeading
          eyebrow="Retours clients"
          title="Ils ont apprécié notre support WhatsApp"
          description="Des abonnés Atlas PRO IPTV témoignent de la rapidité et de l’efficacité de notre assistance WhatsApp."
        />
        <TestimonialsGrid testimonials={testimonials} />
      </section>

      <section className="container space-y-8 pb-20">
        <SectionHeading
          eyebrow="FAQ WhatsApp"
          title="Questions fréquentes sur le support Atlas PRO IPTV"
          description="Avant de nous écrire, consultez ces réponses pour gagner du temps."
          align="center"
        />
        <FAQBlock items={faqItems} />
        <FAQSchema items={faqItems} canonical="/contact" />
      </section>

      <section className="container space-y-6 pb-20">
        <SectionHeading
          eyebrow="Centre d’assistance"
          title="Préparer votre demande avant de contacter le support"
          description="Ces informations accélèrent la prise en charge par nos conseillers Atlas PRO IPTV."
        />
        <div className="space-y-4 text-sm text-gray-300">
          <p>
            Avant d’ouvrir un ticket, notez votre numéro d’abonné, l’appareil concerné (Smart TV, Android TV, Windows)
            et l’horaire d’apparition du souci. Ces éléments nous aident à analyser les journaux Atlas PRO IPTV et à
            comparer la latence entre votre foyer et nos serveurs.
          </p>
          <p>
            Pour les demandes commerciales, précisez la formule souhaitée, le nombre d’écrans et le pays d’utilisation.
            Nous pouvons ainsi recommander l’offre la plus adaptée et programmer un rappel téléphonique si nécessaire.
          </p>
        </div>
      </section>
    </div>
  );
}

