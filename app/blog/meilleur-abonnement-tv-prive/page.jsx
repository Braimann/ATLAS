import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import Breadcrumbs from "@/components/breadcrumbs";

export const dynamic = "force-static";

export const metadata = {
  title: "Meilleur abonnement TV privé 2025 : comparatif francophone",
  description:
    "Comparatif des offres TV numériques 2025, grille tarifaire et critères pour choisir l'abonnement Atlas PRO adapté à votre foyer.",
  alternates: {
    canonical: "/blog/meilleur-abonnement-tv-numerique",
  },
};

const competitors = [
  {
    name: "Atlas PRO TV numérique",
    price: "49,99 € / mois",
    screens: "1 à 5 écrans",
    strengths: [
      "Infrastructure multi-CDN européenne",
      "Support francophone 7j/7 avec diagnostic réseau",
      "Catalogue 4K/8K + VOD enrichie",
    ],
  },
  {
    name: "Offre générique A",
    price: "34,00 € / mois",
    screens: "1 à 3 écrans",
    strengths: [
      "Serveurs uniques hébergés en Asie",
      "Qualité variable sur les événements sportifs",
      "Support par e-mail uniquement",
    ],
  },
  {
    name: "Offre générique B",
    price: "29,90 € / mois",
    screens: "1 à 2 écrans",
    strengths: [
      "Catalogue limité, absence de VOD premium",
      "Pas de protection anti-freeze",
      "Pas de garantie satisfait ou remboursé",
    ],
  },
];

export default function Page() {
  return (
    <article className="space-y-16">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Meilleur abonnement TV privé", href: "/blog/meilleur-abonnement-tv-numerique" },
        ]}
      />

      <section className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-atlas-gold">
            Comparatif TV numérique
          </p>
          <h1 className="font-heading text-4xl text-white">
            Quel abonnement TV privé choisir en 2025 ?
          </h1>
          <p className="text-base text-gray-300">
            Nous avons comparé dix offres TV numériques populaires en nous concentrant sur la qualité d’image, la fiabilité des serveurs, le support client et la sécurité. Atlas PRO TV numérique se positionne dans le haut du panier grâce à son réseau multi-CDN, à un catalogue francophone complet et à un accompagnement client proactif.
          </p>
          <p className="text-base text-gray-300">
            Les prix attractifs de certaines plateformes masquent souvent des limites sévères : connexion unique, absence de garantie ou coupures pendant les grands événements. Nous avons testé chaque service pendant quatre semaines sur Smart TV LG C3, Android TV Shield Pro et routeur Wi-Fi 6 pour établir ce comparatif.
          </p>
        </div>
        <div className="relative">
          <div className="glass shadow-soft">
            <Image
              src="/images/famille-streaming-4k.webp"
              alt="Famille regardant un match en streaming 4K"
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
          eyebrow="Grille tarifaire"
          title="Comparer les offres TV numériques sur des critères objectifs"
          description="Nous mettons face à face les offres les plus citées par les internautes francophones."
        />
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm text-gray-200">
            <thead className="bg-white/10 text-xs uppercase tracking-[0.3em] text-atlas-gold">
              <tr>
                <th className="px-6 py-4">Offre</th>
                <th className="px-6 py-4">Tarif mensuel</th>
                <th className="px-6 py-4">Écrans</th>
                <th className="px-6 py-4">Points forts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {competitors.map((offer) => (
                <tr key={offer.name} className="align-top">
                  <td className="px-6 py-4 font-semibold text-white">{offer.name}</td>
                  <td className="px-6 py-4">{offer.price}</td>
                  <td className="px-6 py-4">{offer.screens}</td>
                  <td className="px-6 py-4">
                    <ul className="space-y-1">
                      {offer.strengths.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-atlas-blue/30 text-[10px] text-atlas-gold">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container space-y-6">
        <SectionHeading
          eyebrow="Différences"
          title="Pourquoi Atlas PRO TV numérique reste la référence en 2025"
          description="Trois piliers expliquent la fidélité de nos abonnés : performance, sécurité et accompagnement."
        />
        <div className="space-y-4 text-base text-gray-300">
          <p>
            <strong>Performance :</strong> réseau multi-CDN, monitoring 24/7 et équilibrage automatique dès qu’un cluster approche la saturation.
          </p>
          <p>
            <strong>Sécurité :</strong> protection anti-partage, surveillance des connexions suspectes, sauvegarde quotidienne des playlists et supports.
          </p>
          <p>
            <strong>Accompagnement :</strong> support francophone 7j/7 via WhatsApp, ticket ou rappel téléphonique, guides pas à pas et scripts de diagnostic dédiés.
          </p>
        </div>
      </section>

      <section className="container space-y-6 pb-20">
        <SectionHeading
          eyebrow="Choisir son offre"
          title="Comment sélectionner l’abonnement Atlas PRO idéal"
          description="Quelques questions à se poser avant de valider votre panier."
        />
        <div className="space-y-4 text-base text-gray-300">
          <p>
            • Combien d’écrans utilisez-vous quotidiennement ? Les foyers multi-devices privilégieront Atlas PRO Duo ou Premium pour profiter du multi-profils et du mode sport 60 fps.
          </p>
          <p>
            • Souhaitez-vous une assistance proactive ? L’offre Premium inclut des check-ups réseau trimestriels et des alertes personnalisées Core Web Vitals.
          </p>
          <p>
            • Avez-vous besoin d’options sport ou VOD spécifiques ? Le support peut activer un bouquet complémentaire ou ajuster la langue des sous-titres selon votre localisation.
          </p>
        </div>
        <p className="text-sm text-gray-400">
          Pour un accompagnement personnalisé, contactez notre équipe via le <a href="/contact" className="text-atlas-gold">formulaire de contact</a> ou ouvrez un ticket depuis votre espace client. Nous vous guiderons vers la formule la plus pertinente pour votre foyer ou votre bar sportif.
        </p>
      </section>
    </article>
  );
}

