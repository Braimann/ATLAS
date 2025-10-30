import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/json-ld";

export const metadata = {
  title: "ATLAS PRO - Téléchargement officiel (Windows, Android, Mac, iOS)",
  description:
    "Téléchargez les applications officielles ATLAS PRO, IBOPLAYER et HotPlayer pour Windows, Android, Mac, iOS et Smart TV. Versions stables, sécurisées et vérifiées.",
  alternates: {
    canonical: "https://atlaspro4k.net/telechargement",
  },
  openGraph: {
    title: "ATLAS PRO - Téléchargement officiel (Windows, Android, Mac, iOS)",
    description:
      "Téléchargez les versions officielles ATLAS PRO, IBOPLAYER et HotPlayer sur Android, Mac, Windows et iOS. Accès sécurisé et stable.",
    url: "https://atlaspro4k.net/telechargement",
    siteName: "ATLAS PRO",
    images: [
      {
        url: "https://atlaspro4k.net/images/Atlas.webp",
        width: 1200,
        height: 630,
        alt: "Interface officielle ATLAS PRO sur TV et appareils connectés",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATLAS PRO - Téléchargement officiel",
    description:
      "Sélectionnez et téléchargez les applications officielles ATLAS PRO et IBOPLAYER compatibles avec votre appareil.",
    images: ["https://atlaspro4k.net/images/Atlas.webp"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

const downloadOptions = [
  {
    name: "ATLAS PRO Windows",
    tag: "Officiel",
    code: "7003001",
    logo: "/images/atlaspromax.jpg",
    href: "https://atlaspro4k.net/dl/ATLAS-PRO-WINDOWS.exe",
    description:
      "Version ATLAS PRO optimisée pour Windows PC avec lecture fluide et interface moderne.",
  },
  {
    name: "ATLAS PRO Mac",
    tag: "Officiel",
    code: "7003002",
    logo: "/images/atlaspromax.jpg",
    href: "https://atlaspro4k.net/dl/ATLAS-PRO-Mac-os.dmg",
    description:
      "Application ATLAS PRO pour macOS avec support natif M1/M2 et interface intuitive.",
  },
  {
    name: "ATLAS PRO Linux",
    tag: "Officiel",
    code: "7003003",
    logo: "/images/atlaspromax.jpg",
    href: "https://atlaspro4k.net/dl/ATLAS-PRO-Linux.deb",
    description:
      "Version Linux d’ATLAS PRO compatible Ubuntu, Debian et distributions basées sur Linux.",
  },
  {
    name: "IBOPLAYER Android",
    tag: "Recommandé",
    code: "7003101",
    logo: "/images/ibo pro.png",
    href: "https://play.google.com/store/apps/details/Ibo_Pro_Player?id=com.ibopro.player&hl=fr_CH",
    description:
      "Application IBO Player Android compatible Box TV, Smart TV et tablettes.",
  },
  {
    name: "IBOPLAYER iOS",
    tag: "Recommandé",
    code: "7003102",
    logo: "/images/ibo pro.png",
    href: "https://apps.apple.com/us/app/ibo-pro-player/id6449647925",
    description:
      "Version iOS d’IBO Player pour iPhone et iPad avec synchronisation multi-appareils.",
  },
  {
    name: "IBOPLAYER Windows",
    tag: "Recommandé",
    code: "7003103",
    logo: "/images/ibo pro.png",
    href: "https://apps.microsoft.com/detail/9msnk97xpvrk?hl=fr-fr&gl=FR&ocid=pdpshare",
    description:
      "Téléchargez IBO Player sur Windows pour une expérience fluide et rapide sur PC.",
  },
  {
    name: "HotPlayer Android",
    tag: "Alternatif",
    code: "7003201",
    logo: "/images/hot.jpg",
    href: "https://play.google.com/store/apps/details?id=ma.digivibes.hotplayer&pcampaignid=web_share",
    description:
      "Version Android de HotPlayer : rapide, stable et compatible Android TV et smartphones.",
  },
  {
    name: "HotPlayer iOS",
    tag: "Alternatif",
    code: "7003202",
    logo: "/images/hot.jpg",
    href: "https://apps.apple.com/us/app/hot-player/id6695762404",
    description:
      "HotPlayer iOS pour iPhone et iPad avec interface intuitive et haute compatibilité IPTV.",
  },
  {
    name: "HotPlayer Windows",
    tag: "Alternatif",
    code: "7003203",
    logo: "/images/hot.jpg",
    href: "https://apps.microsoft.com/detail/9pl1l6tvq60k?hl=neutral&gl=FR&ocid=pdpshare",
    description:
      "HotPlayer pour Windows : application performante compatible tous formats IPTV.",
  },
  {
    name: "ATLAS PRO ONTV",
    tag: "Recommandé",
    code: "7002101",
    logo: "/images/On TV.png",
    href: "https://atlaspro4k.net/dl/ontv.apk",
    description:
      "Version optimisée pour Android TV et Google TV avec interface fluide et contrôles simplifiés.",
  },
  {
    name: "ATLAS PRO MAX",
    tag: "Nouveauté",
    code: "7002108",
    logo: "/images/atlaspromax.jpg",
    href: "https://atlaspro4k.net/dl/max.apk",
    description:
      "Expérience multi-profils avec gestion avancée des favoris et compatibilité box Android.",
  },
  {
    name: "ATLAS IBO Prime",
    tag: "Premium",
    code: "1282091",
    logo: "/images/ibo pro.png",
    href: "https://atlaspro4k.net/dl/ibo.apk",
    description:
      "Solution dédiée aux Smart TV Samsung et LG pour une installation rapide et sécurisée.",
  },
  {
    name: "ATLAS Pro Prime",
    tag: "Premium",
    code: "7002125",
    logo: "/images/atlaspromax.jpg",
    href: "https://atlaspro4k.net/dl/ibo.apk",
    description:
      "Version stable d’ATLAS Pro Prime pour Android et Smart TV.",
  },
];

const buttonClass =
  "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition hover:from-violet-400 hover:to-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950";

export default function DownloadPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#0b0b0f] to-gray-900">
        <div className="container mx-auto px-4 pb-24 pt-28 text-center lg:text-left">
          <div className="mx-auto max-w-4xl space-y-6">
            <span className="inline-flex items-center justify-center rounded-full bg-atlas-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-atlas-gold">
              Téléchargement officiel
            </span>
            <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              Télécharger ATLAS PRO et Apps Recommandées
            </h1>
            <p className="text-base text-gray-300 sm:text-lg">
              Sélectionnez la version correspondant à votre appareil pour un accès fluide, sécurisé et certifié.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-atlas-night py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
              Sélectionnez votre application
            </h2>
            <p className="mt-3 text-gray-400">
              Chaque version est testée et vérifiée par l’équipe ATLAS PRO pour garantir un accès stable et protégé.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {downloadOptions.map((option) => (
              <article
                key={option.name}
                className="group flex flex-col gap-6 rounded-3xl border border-white/5 bg-gray-900/80 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-purple-900/40"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-black/60 p-2 ring-1 ring-white/10">
                    <Image
                      src={option.logo}
                      alt={`Télécharger ${option.name} - Application IPTV officielle`}
                      fill
                      sizes="56px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-atlas-gold">
                      {option.tag}
                    </p>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {option.name}
                    </h3>
                  </div>
                </div>
                <p className="flex-1 text-sm text-gray-300">{option.description}</p>
                <p className="text-sm font-medium text-orange-400">
                  Code de téléchargement :{" "}
                  <span className="font-mono text-lg text-orange-300">{option.code}</span>
                </p>
                <a
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonClass} justify-center`}
                >
                  Télécharger maintenant
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION FAQ === */}
      <section className="bg-gray-900 py-20 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-semibold text-center text-white mb-10">
            FAQ – Atlas Pro Téléchargement (Version Officielle)
          </h2>

          <div className="space-y-6 text-gray-300">
            <details className="bg-gray-800 p-6 rounded-2xl shadow">
              <summary className="cursor-pointer text-lg font-semibold text-atlas-gold">
                Comment télécharger Atlas Pro ?
              </summary>
              <p className="mt-3 text-gray-300">
                Sélectionnez votre version (Android, Windows, Mac ou Smart TV) dans la section ci-dessus,
                puis cliquez sur “Télécharger maintenant”. L’installation est rapide et sécurisée depuis nos serveurs officiels.
              </p>
            </details>

            <details className="bg-gray-800 p-6 rounded-2xl shadow">
              <summary className="cursor-pointer text-lg font-semibold text-atlas-gold">
                L’application Atlas Pro est-elle gratuite ?
              </summary>
              <p className="mt-3 text-gray-300">
                Oui, le téléchargement de l’application est gratuit. Cependant, pour accéder au contenu IPTV,
                un abonnement actif est nécessaire. Vous pouvez consulter nos offres sur la page <Link href="/" className="text-purple-400 underline">Offres Atlas Pro</Link>.
              </p>
            </details>

            <details className="bg-gray-800 p-6 rounded-2xl shadow">
              <summary className="cursor-pointer text-lg font-semibold text-atlas-gold">
                Atlas Pro fonctionne-t-il sur Smart TV Samsung et LG ?
              </summary>
              <p className="mt-3 text-gray-300">
                Oui, utilisez la version <strong>ATLAS IBO Prime</strong> spécialement conçue pour ces téléviseurs.
                Elle peut être installée directement via un code sur le site officiel.
              </p>
            </details>

            <details className="bg-gray-800 p-6 rounded-2xl shadow">
              <summary className="cursor-pointer text-lg font-semibold text-atlas-gold">
                Mon téléchargement est lent ou bloqué, que faire ?
              </summary>
              <p className="mt-3 text-gray-300">
                Vérifiez votre connexion Internet et réessayez. Si le problème persiste, videz le cache de votre navigateur
                ou contactez le support via la page <Link href="/support" className="text-purple-400 underline">Support Atlas Pro</Link>.
              </p>
            </details>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Comment télécharger Atlas Pro ?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Sélectionnez votre version (Android, Windows, Mac ou Smart TV) puis cliquez sur “Télécharger maintenant”.",
              },
            },
            {
              "@type": "Question",
              name: "L’application Atlas Pro est-elle gratuite ?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Le téléchargement est gratuit, mais un abonnement est requis pour accéder au contenu IPTV.",
              },
            },
            {
              "@type": "Question",
              name: "Atlas Pro fonctionne-t-il sur Smart TV ?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Oui, via la version IBO Prime compatible Samsung et LG Smart TV.",
              },
            },
            {
              "@type": "Question",
              name: "Le téléchargement Atlas Pro est lent, que faire ?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Vérifiez votre connexion Internet ou contactez le support Atlas Pro.",
              },
            },
          ],
        }}
      />
    </>
  );
}
