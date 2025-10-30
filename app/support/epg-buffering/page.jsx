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
    "Support Atlas PRO IPTV | Résoudre les problèmes d’EPG, de buffering et de latence",
  description:
    "Suivez ce guide pour éliminer le buffering Atlas PRO IPTV, corriger l’EPG et optimiser votre réseau sur Smart TV, Android, Windows et routeurs. Assistance francophone 7j/7 pour l’Europe.",
  alternates: {
    canonical: "/support/epg-buffering",
  },
};

const stats = [
  { value: "99,9 %", label: "Disponibilité serveurs Atlas PRO" },
  { value: "-60 %", label: "Buffering après nos optimisations" },
  { value: "< 12 h", label: "Temps de réponse support" },
  { value: "4 étapes", label: "Plan d’action anti-freeze" },
];

const quickFixes = [
  "Vérifier la date et l’heure automatiques de votre TV/box avant de relancer la synchronisation EPG.",
  "Connecter votre Smart TV ou box Android via Ethernet ou Wi-Fi 5/6 avec priorité QoS sur votre routeur.",
  "Activer le mode AntiFreeze dans Atlas PRO IPTV et sélectionner le serveur recommandé le plus proche (France, Belgique, Suisse, Maroc).",
  "Vider le cache Atlas PRO IPTV (Support > Maintenance) puis redémarrer TV/box et box internet pour renouveler l’adresse IP.",
  "Mettre à jour le firmware de votre Smart TV / box et vérifier que votre antivirus ou firewall autorise Atlas PRO Player.",
];

const diagnosticSteps = [
  {
    title: "Tester le débit et la latence",
    text: "Depuis Atlas PRO IPTV, ouvrez Support > Diagnostic et lancez le test pour vérifier débit, ping et perte de paquets.",
  },
  {
    title: "Analyser le serveur et le routeur",
    text: "Essayez un serveur Atlas PRO alternatif (France, Belgique, Suisse) et vérifiez la QoS, les ports 80/443 et l’UPnP sur votre routeur.",
  },
  {
    title: "Purger cache et DNS",
    text: "Videz le cache Atlas PRO, redémarrez votre TV. Sur Windows, exécutez les scripts `ipconfig /flushdns` et `atlas-diagnostic.ps1` fournis.",
  },
  {
    title: "Ouvrir un ticket support",
    text: "Si le problème persiste, envoyez vos logs via Support > Diagnostic ou contactez-nous via /contact avec votre ID client et votre localisation.",
  },
];

const optimisationTips = [
  "Privilégiez un câble Ethernet ou un adaptateur CPL haut débit plutôt que le Wi-Fi 2.4 GHz.",
  "Activez le mode Game / Faible latence sur votre Smart TV pendant les événements sportifs.",
  "Limitez le nombre de téléchargements simultanés et désactivez le VPN si vous en utilisez un.",
  "Sélectionnez le lecteur interne Atlas PRO ou un lecteur externe optimisé (ExoPlayer sur Android, DirectX sur Windows).",
  "Synchronisez l’EPG une fois par jour et supprimez les doublons de devices depuis votre espace client.",
];

const testimonials = [
  {
    quote:
      "Grâce aux recommandations réseau, j’ai supprimé tous les freezes sur ma LG webOS. L’équipe support a répondu en moins d’une heure.",
    author: "François L.",
    role: "Paris, France",
  },
  {
    quote:
      "Le guide m’a aidée à paramétrer la QoS et à changer de serveur Atlas PRO. L’EPG se synchronise désormais parfaitement.",
    author: "Amina D.",
    role: "Bruxelles, Belgique",
  },
  {
    quote:
      "Support très pro : analyse via les logs envoyés depuis Atlas PRO Player Windows, résolution immédiate d’un souci DNS.",
    author: "Marc G.",
    role: "Genève, Suisse",
  },
];

const faqItems = [
  {
    question: "Pourquoi mon EPG Atlas PRO IPTV est vide ou décalé ?",
    answer:
      "Assurez-vous que la date et l’heure sont réglées sur automatique, puis ouvrez Support > Maintenance > Rafraîchir l’EPG. Si le problème persiste, changez de serveur et contactez notre support avec votre ID client.",
  },
  {
    question: "Comment réduire le buffering sur Atlas PRO IPTV ?",
    answer:
      "Passez sur une connexion Ethernet, activez la QoS, réduisez le buffer à 3 secondes et testez plusieurs serveurs. Les abonnés Premium peuvent demander un routage prioritaire via le support.",
  },
  {
    question: "Atlas PRO IPTV subit-il des coupures serveur ?",
    answer:
      "Nos serveurs affichent un uptime de 99,9 %. En cas de maintenance programmée, une notification est envoyée dans l’application et sur nos canaux officiels.",
  },
  {
    question: "Dois-je utiliser un VPN avec Atlas PRO IPTV ?",
    answer:
      "Un VPN n’est pas nécessaire. Si vous en utilisez un, choisissez un serveur à faible latence. Pour la plupart des utilisateurs, une connexion directe est plus stable.",
  },
  {
    question: "Comment contacter le support Atlas PRO IPTV ?",
    answer:
      "Ouvrez un ticket depuis /contact ou via Support > Diagnostic > Envoyer les logs. Indiquez votre localisation, vos appareils et vos tests de débit pour accélérer la résolution.",
  },
];

export default function Page() {
  return (
    <div className="space-y-16">
      <Breadcrumbs
        items={[
          { label: "Support", href: "/support/epg-buffering" },
          { label: "EPG & Buffering", href: "/support/epg-buffering" },
        ]}
      />

      <PageHero
        badge="Assistance 7j/7"
        title="Résoudre les problèmes d’EPG et de buffering Atlas PRO IPTV"
        description="Suivez nos recommandations pour corriger le buffering, la latence ou l’EPG sur Atlas PRO IPTV. Ce guide s’adresse aux utilisateurs Smart TV, Android, Windows et routeurs."
        primaryCta={{
          label: "Ouvrir un ticket support",
          href: "https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%20IPTV%2C%20je%20souhaite%20acheter%20un%20abonnement.",
          trackingLabel: "Support EPG - Ticket",
        }}
        secondaryCta={{
          label: "Voir nos tutoriels",
          href: "/tutoriels-installation/smart-tv",
          trackingLabel: "Support EPG - Tutoriels",
        }}
        image={{
          src: "/images/support-iptv.webp",
          alt: "Assistance Atlas PRO IPTV pour le buffering et l’EPG",
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
          eyebrow="Diagnostic immédiat"
          title="Check-list pour rétablir un flux 4K stable"
          description="Avant de contacter l’assistance, réalisez ces vérifications pour corriger la majorité des problèmes d’EPG ou de buffering."
        />
        <FeatureList features={quickFixes} />
        <CTAButton
          href="/support/connexion"
          variant="outline"
          trackingLabel="Support EPG - Diagnostic Connexion"
        >
          Diagnostic connexion avancé
        </CTAButton>
      </section>

      <section className="container space-y-10">
        <SectionHeading
          eyebrow="Étapes de dépannage"
          title="Plan d’action anti-buffering Atlas PRO IPTV"
          description="Suivez ces quatre étapes pour analyser votre réseau, purger le cache et contacter le support avec les bonnes informations."
        />
        <HowToSteps
          steps={diagnosticSteps}
          name="Plan anti-buffering Atlas PRO IPTV"
          description="Procédure officielle pour résoudre les coupures et synchroniser l’EPG sur Atlas PRO IPTV."
          canonical="/support/epg-buffering"
        />
      </section>

      <section className="container space-y-10">
        <SectionHeading
          eyebrow="Optimisations réseau"
          title="Paramétrer votre installation pour éviter les coupures"
          description="Appliquez ces optimisations sur votre réseau domestique et vos appareils pour garantir une 4K fluide toute l’année."
        />
        <FeatureList features={optimisationTips} />
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-sm text-gray-300 shadow-soft">
          <p>
            À la recherche d’une configuration avancée ? Consultez notre{" "}
            <a href="/tutoriels-installation/windows" className="text-atlas-gold">
              tutoriel Windows
            </a>{" "}
            et nos guides{" "}
            <a href="/blog/comment-installer-atlaspro" className="text-atlas-gold">
              téléchargement Smart TV
            </a>
            , puis explorez{" "}
            <a href="/blog/iptv-4k-2025" className="text-atlas-gold">
              notre comparatif IPTV 2025
            </a>{" "}
            pour optimiser encore davantage votre installation.
          </p>
        </div>
      </section>

      <section className="container space-y-8">
        <SectionHeading
          eyebrow="Retours utilisateurs"
          title="Ils ont résolu leurs problèmes de buffering"
          description="L’expérience d’abonnés qui ont suivi nos diagnostics et réglages pour une 4K sans coupure."
        />
        <TestimonialsGrid testimonials={testimonials} />
      </section>

      <section className="container space-y-8 pb-20">
        <SectionHeading
          eyebrow="FAQ support Atlas PRO"
          title="Questions fréquentes sur l’EPG et le buffering"
          description="Toutes les réponses pour comprendre et résoudre les incidents réseau ou EPG sur Atlas PRO IPTV."
          align="center"
        />
        <FAQBlock items={faqItems} />
        <FAQSchema items={faqItems} canonical="/support/epg-buffering" />
      </section>
    </div>
  );
}
