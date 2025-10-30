import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import Breadcrumbs from "@/components/breadcrumbs";

export const dynamic = "force-static";

export const metadata = {
  title: "Installer Atlas PRO IPTV : tutoriel pas à pas",
  description:
    "Guide complet pour installer Atlas PRO IPTV sur Smart TV, Android TV et Windows avec optimisation réseau.",
  alternates: {
    canonical: "/blog/comment-installer-atlaspro",
  },
};

const smartTvSteps = [
  "Mettre à jour votre téléviseur (Samsung Tizen 5+, LG webOS 4+, Android TV 9+).",
  "Autoriser l'installation de sources approuvées Atlas PRO dans les paramètres de sécurité.",
  "Scanner le QR code fourni dans l’espace client pour télécharger l’application officielle.",
  "Renseigner l’identifiant Atlas PRO IPTV et sélectionner le serveur recommandé.",
];

const androidSteps = [
  "Télécharger l’APK Atlas PRO depuis l’espace client via smartphone ou box Android.",
  "Activer l’option “Sources inconnues” uniquement pour l’application Fichiers.",
  "Installer l’APK, lancer l’application puis accepter les permissions réseau.",
  "Coller l’identifiant Atlas PRO IPTV (format M3U ou Xtream) reçu par e-mail.",
];

const windowsSteps = [
  "Installer VLC ou un lecteur IPTV compatible (TiviMate Desktop, MyIPTV Player).",
  "Vérifier la présence du pack codecs HEVC dans les fonctionnalités Windows.",
  "Importer l’URL M3U Atlas PRO ou le fichier local depuis l’espace client.",
  "Activer l’accélération matérielle et fixer la mise en cache à 3 secondes.",
];

export default function Page() {
  return (
    <article className="space-y-16">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Installer Atlas PRO", href: "/blog/comment-installer-atlaspro" },
        ]}
      />

      <section className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-atlas-gold">
            Tutoriel officiel
          </p>
          <h1 className="font-heading text-4xl text-white">
            Installer Atlas PRO IPTV sur tous vos appareils
          </h1>
          <p className="text-base text-gray-300">
            Ce guide regroupe les instructions essentielles pour installer Atlas PRO IPTV sur Smart TV Samsung, LG, Android TV, Fire TV Stick et PC Windows. Suivez chaque étape avant d’activer votre abonnement : vous éviterez les erreurs de lecture et bénéficierez d’une image 4K stable dès le premier lancement.
          </p>
          <p className="text-base text-gray-300">
            Gardez sous la main votre identifiant Atlas PRO, les serveurs de secours, ainsi que votre code de garantie. Chaque section est dédiée à un type d’appareil ; vérifiez vos réglages anti-freeze et QoS avant de passer à la suivante.
          </p>
        </div>
        <div className="relative">
          <div className="glass shadow-soft">
            <Image
              src="/images/installation-smart-tv-4k.webp"
              alt="Installation Atlas PRO IPTV sur Smart TV"
              width={960}
              height={640}
              priority
              className="rounded-[2.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <SectionHeading
          eyebrow="Smart TV"
          title="Installer Atlas PRO IPTV sur Samsung ou LG"
          description="Suivez ces étapes pour profiter d’une interface 4K fluide sur votre Smart TV."
        />
        <ol className="grid gap-3 text-sm text-gray-200 sm:grid-cols-2">
          {smartTvSteps.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-atlas-blue/25 text-xs font-semibold text-atlas-gold">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-gray-300">
          Astuce : sur LG webOS, désactivez “Quick Start” pour éviter les redémarrages partiels ; sur Samsung Tizen, videz le cache Smart Hub après chaque mise à jour majeure.
        </p>
      </section>

      <section className="container space-y-6">
        <SectionHeading
          eyebrow="Android TV et boîtiers"
          title="Configurer Atlas PRO IPTV sur box Android et Fire TV"
          description="Android offre des réglages avancés pour la 4K et le multiécran."
        />
        <ol className="grid gap-3 text-sm text-gray-200 sm:grid-cols-2">
          {androidSteps.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-atlas-blue/25 text-xs font-semibold text-atlas-gold">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-gray-300">
          Activez le mode développeur et forcez le décodage matériel. Sur Fire TV Stick, placez l’appareil sur le port HDMI le plus proche de la box pour limiter les pertes Wi-Fi.
        </p>
      </section>

      <section className="container space-y-6">
        <SectionHeading
          eyebrow="Windows"
          title="Lire Atlas PRO IPTV sur PC"
          description="Idéal pour enregistrer ou caster vos flux IPTV."
        />
        <ol className="grid gap-3 text-sm text-gray-200 sm:grid-cols-2">
          {windowsSteps.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-atlas-blue/25 text-xs font-semibold text-atlas-gold">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm text-gray-300">
          Installez les codecs HEVC officiels Microsoft et planifiez une synchronisation EPG toutes les 6 heures pour éviter les décalages de programmes.
        </p>
      </section>

      <section className="container space-y-6 pb-20">
        <SectionHeading
          eyebrow="Support"
          title="Besoin d’aide supplémentaire ?"
          description="Nos techniciens restent disponibles 7j/7 pour finaliser votre installation."
        />
        <p className="text-base text-gray-300">
          Si une étape vous semble complexe, ouvrez un ticket depuis votre espace client ou rendez-vous sur le <a href="/support" className="text-atlas-gold">centre de support Atlas PRO</a>. Joignez une capture d’écran du message d’erreur et votre numéro d’abonné : un conseiller répond en moyenne sous 10 minutes.
        </p>
        <p className="text-base text-gray-300">
          Pour sécuriser votre compte, changez votre mot de passe tous les trois mois et activez la protection anti-partage si plusieurs appareils se connectent. Atlas PRO IPTV surveille en temps réel les connexions suspectes et vous alerte par e-mail.
        </p>
      </section>
    </article>
  );
}
