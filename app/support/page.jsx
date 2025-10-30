import Breadcrumbs from "@/components/breadcrumbs";
import SectionHeading from "@/components/section-heading";
import FeatureList from "@/components/feature-list";
import CTAButton from "@/components/ui/cta-button";

export const dynamic = "force-static";

export const metadata = {
  title: "Support Atlas PRO IPTV | Assistance 7j/7 et diagnostics",
  description:
    "Centre de support Atlas PRO IPTV : diagnostics anti-freeze, assistance réseau et contact francophone 7j/7.",
  alternates: {
    canonical: "/support",
  },
};

const assistanceModes = [
  "Chat en direct et WhatsApp francophone disponibles de 8h00 à 22h00 (CET).",
  "Tickets techniques priorisés pour les abonnés Duo et Premium (réponse < 30 min).",
  "Diagnostic réseau à distance : tests de débit, vérification QoS, analyse des flux 4K.",
  "Bibliothèque de scripts anti-freeze et guides Core Web Vitals pour Smart TV, Android et Windows.",
];

const selfHelpLinks = [
  {
    label: "Guide anti-buffering",
    description: "Identifier les causes de freezes et ajuster la mémoire tampon Atlas PRO.",
    href: "/support/epg-buffering",
  },
  {
    label: "Problèmes de connexion",
    description: "Réinitialiser vos identifiants, vérifier votre abonnement et sécuriser vos accès.",
    href: "/support/connexion",
  },
  {
    label: "Tutoriel d'installation",
    description: "Installer Atlas PRO IPTV sur Smart TV, Android TV et Windows pas à pas.",
    href: "/blog/comment-installer-atlaspro",
  },
];

export default function Page() {
  return (
    <div className="space-y-16">
      <Breadcrumbs items={[{ label: "Support", href: "/support" }]} />

      <section className="container space-y-8 py-8">
        <h1 className="font-heading text-4xl text-white">Support Atlas PRO IPTV</h1>
        <SectionHeading
          eyebrow="Assistance 7j/7"
          title="Centre de support Atlas PRO IPTV"
          description="Suivez nos guides, ouvrez un ticket technique ou demandez un rappel téléphonique. Nos experts réseau supervisent la plateforme 24/7 pour maintenir 99,9 % de disponibilité."
        />
        <p className="text-base text-gray-300">
          Chaque abonnement inclut un accompagnement personnalisé. Nous analysons la latence entre vos équipements et nos serveurs, optimisons la configuration anti-freeze et signalons toute anomalie avant qu’elle ne perturbe vos écrans. Les abonnés Premium bénéficient d’un suivi proactif avec rapport trimestriel Core Web Vitals.
        </p>
        <FeatureList features={assistanceModes} />
        <div className="flex flex-wrap gap-4">
          <CTAButton href="https://wa.me/212770303940" trackingLabel="Support - WhatsApp">
            Contacter le support WhatsApp
          </CTAButton>
          <CTAButton href="mailto:support@atlaspro4k.com" variant="outline" trackingLabel="Support - Email">
            Envoyer un e-mail
          </CTAButton>
        </div>
      </section>

      <section className="container space-y-8">
        <SectionHeading
          eyebrow="Guides rapides"
          title="Commencer par les ressources les plus consultées"
          description="Avant d’ouvrir un ticket, consultez ces fiches pratiques pour gagner du temps."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {selfHelpLinks.map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-sm text-gray-300 shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-atlas-gold">Guide</p>
              <h2 className="mt-3 font-heading text-lg text-white">{item.label}</h2>
              <p className="mt-2 text-gray-300">{item.description}</p>
              <CTAButton
                href={item.href}
                variant="ghost"
                className="mt-4 px-0 text-sm"
                trackingLabel={`Support - ${item.label}`}
              >
                Consulter la fiche →
              </CTAButton>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-6 pb-20">
        <SectionHeading
          eyebrow="Bonnes pratiques"
          title="Préparer votre environnement pour éviter les incidents"
          description="Quelques actions simples améliorent immédiatement la stabilité de votre flux 4K."
        />
        <ul className="space-y-3 text-sm text-gray-300">
          <li>• Priorisez votre Smart TV ou votre box Android dans la box opérateur pour garantir un débit constant lors des soirées sportives.</li>
          <li>• Activez l’option anti-freeze Atlas PRO et synchronisez l’EPG toutes les 12 heures pour conserver des programmes fiables.</li>
          <li>• Surveillez la température de vos appareils : une box Android qui surchauffe peut provoquer des micro-coupures. Aérez la zone et nettoyez les grilles.</li>
          <li>• Conservez une copie de vos identifiants et du code de garantie dans un coffre-fort numérique pour reconfigurer rapidement vos appareils.</li>
        </ul>
      </section>
    </div>
  );
}

