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
    "Tutoriel Atlas PRO IPTV Windows | Installation, rÃƒÂ’Ã‚Â©glages 4K et optimisation rÃƒÂ’Ã‚Â©seau",
  description:
    "Apprenez ÃƒÂ’Ã‚Â  installer Atlas PRO IPTV sur Windows 10/11 : tÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©chargement dÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Atlas PRO Player, configuration VLC/TiviMate, rÃƒÂ’Ã‚Â©glages DirectX et astuces anti-buffering pour lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Europe francophone.",
  alternates: {
    canonical: "/tutoriels-installation/windows",
  },
};

const stats = [
  { value: "Windows 10/11", label: "CompatibilitÃƒÂ’Ã‚Â© systÃƒÂ’Ã‚Â¨me" },
  { value: "10 min", label: "Installation moyenne" },
  { value: "4K / HDR", label: "QualitÃƒÂ’Ã‚Â© supportÃƒÂ’Ã‚Â©e" },
  { value: "DirectX 12", label: "AccÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©ration recommandÃƒÂ’Ã‚Â©e" },
];

const howToSteps = [
  {
    title: "TÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©charger Atlas PRO Player",
    text: "Depuis votre espace client, rÃƒÂ’Ã‚Â©cupÃƒÂ’Ã‚Â©rez Atlas PRO Player Windows ou lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½un des lecteurs compatibles (VLC, TiviMate Desktop).",
  },
  {
    title: "Installer le lecteur IPTV",
    text: "Lancez lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½installateur en mode administrateur, acceptez les paramÃƒÂ’Ã‚Â¨tres proposÃƒÂ’Ã‚Â©s et autorisez lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½application dans votre pare-feu.",
  },
  {
    title: "Importer vos identifiants Atlas PRO",
    text: "Renseignez lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½URL M3U sÃƒÂ’Ã‚Â©curisÃƒÂ’Ã‚Â©e ou scannez le QR code afin de synchroniser bouquets, EPG et favoris dans Atlas PRO Player.",
  },
  {
    title: "Optimiser la lecture 4K",
    text: "Activez lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½accÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©ration matÃƒÂ’Ã‚Â©rielle DirectX, dÃƒÂ’Ã‚Â©finissez le buffer ÃƒÂ’Ã‚Â  3 s et sÃƒÂ’Ã‚Â©lectionnez le serveur le plus proche pour rÃƒÂ’Ã‚Â©duire la latence.",
  },
];

const optimisationFeatures = [
  "Mode Haute performance Windows + plan dÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½alimentation ÃƒÂ’Ã‚Â©quilibrÃƒÂ’Ã‚Â© pour stabiliser la lecture.",
  "Activation de lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½accÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©ration GPU (DirectX 12 / DXVA2) dans Atlas PRO Player et VLC.",
  "Scripts PowerShell fournis pour purger DNS, cache rÃƒÂ’Ã‚Â©seau et rÃƒÂ’Ã‚Â©initialiser Winsock.",
  "CompatibilitÃƒÂ’Ã‚Â© manette Xbox/PlayStation et raccourcis clavier personnalisables.",
  "Casting intÃƒÂ’Ã‚Â©grÃƒÂ’Ã‚Â© vers Chromecast, Smart TV ou navigateur via lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½application Companion.",
];

const advancedTips = [
  "Configurer TiviMate Desktop avec Atlas PRO IPTV pour bÃƒÂ’Ã‚Â©nÃƒÂ’Ã‚Â©ficier dÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½un EPG enrichi et du multi-fenÃƒÂ’Ã‚Âªtrage.",
  "Utiliser MPC-HC ou PotPlayer avec dÃƒÂ’Ã‚Â©codage matÃƒÂ’Ã‚Â©riel pour les flux 4K cinÃƒÂ’Ã‚Â©ma Atlas PRO.",
  "Enregistrer vos programmes sur disque (NTFS/SSD) et activer la planification via Atlas PRO Player.",
  "Mettre ÃƒÂ’Ã‚Â  jour les drivers graphiques (NVIDIA/AMD/Intel) et activer le mode faible latence pour lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½esport.",
  "Tester votre dÃƒÂ’Ã‚Â©bit via lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½outil intÃƒÂ’Ã‚Â©grÃƒÂ’Ã‚Â© Atlas PRO puis choisir un serveur secondaire pour la redondance.",
];

const testimonials = [
  {
    quote:
      "Installation ultra rapide sur Windows 11. Le guide DirectX mÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½a permis dÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½ÃƒÂ’Ã‚Â©liminer les micro-freezes et la qualitÃƒÂ’Ã‚Â© 4K est excellente.",
    author: "StÃƒÂ’Ã‚Â©phane C.",
    role: "Paris, France",
  },
  {
    quote:
      "JÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½utilise Atlas PRO Player et TiviMate Desktop selon mes besoins. Le tutoriel dÃƒÂ’Ã‚Â©taille parfaitement les paramÃƒÂ’Ã‚Â¨tres audio/vidÃƒÂ’Ã‚Â©o.",
    author: "Anne L.",
    role: "Luxembourg",
  },
  {
    quote:
      "Le script PowerShell fourni pour rafraÃƒÂ’Ã‚Â®chir le DNS est trÃƒÂ’Ã‚Â¨s utile. Plus aucune coupure pendant les soirÃƒÂ’Ã‚Â©es sportives en streaming.",
    author: "David H.",
    role: "GenÃƒÂ’Ã‚Â¨ve, Suisse",
  },
];

const faqItems = [
  {
    question: "Quelle configuration minimale pour Atlas PRO IPTV sur Windows ?",
    answer:
      "Un PC Windows 10/11 64 bits, processeur double cÃ¯Â¿Â½&Ã¯Â¿Â½Sur, 4 Go de RAM et une connexion stable >25 Mbps suffisent. Un GPU compatible DirectX 11/12 optimise la 4K.",
  },
  {
    question: "Atlas PRO Player Windows est-il inclus dans mon abonnement ?",
    answer:
      "Oui, Atlas PRO Player est fourni avec toutes les formules. Vous pouvez lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½installer librement et enregistrer vos identifiants de maniÃƒÂ’Ã‚Â¨re sÃƒÂ’Ã‚Â©curisÃƒÂ’Ã‚Â©e.",
  },
  {
    question: "Puis-je utiliser VLC, TiviMate ou Kodi avec Atlas PRO ?",
    answer:
      "Bien sÃƒÂ’Ã‚Â»r. Importez lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½URL M3U/EPG dans VLC, TiviMate Desktop, MyIPTV Player ou Kodi (PVR). Les fonctionnalitÃƒÂ’Ã‚Â©s avancÃƒÂ’Ã‚Â©es (EPG enrichi, enregistrement) restent disponibles.",
  },
  {
    question: "Comment ÃƒÂ’Ã‚Â©viter les saccades sur Windows ?",
    answer:
      "Activez lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½accÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©ration matÃƒÂ’Ã‚Â©rielle, fermez les programmes gourmands, privilÃƒÂ’Ã‚Â©giez une connexion Ethernet, dÃƒÂ’Ã‚Â©sactivez les antivirus trop intrusifs et suivez la checklist /support/connexion.",
  },
  {
    question: "Comment contacter le support en cas de problÃƒÂ’Ã‚Â¨me ?",
    answer:
      "Ouvrez un ticket via /support/connexion ou /support/epg-buffering avec vos logs Atlas PRO Player. Notre ÃƒÂ’Ã‚Â©quipe rÃƒÂ’Ã‚Â©pond sous 12 heures et peut intervenir ÃƒÂ’Ã‚Â  distance.",
  },
];

export default function Page() {
  return (
    <div className="space-y-16">
      <Breadcrumbs
        items={[
          { label: "Tutoriels", href: "/tutoriels-installation/smart-tv" },
          { label: "Windows", href: "/tutoriels-installation/windows" },
        ]}
      />

      <PageHero
        badge="Tutoriel PC"
        title="Installer Atlas PRO IPTV 4K sur Windows 10/11"
        description="TÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©chargez Atlas PRO Player, configurez VLC/TiviMate et optimisez votre PC Windows pour une diffusion 4K fluide. Ce guide couvre lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½installation, la connexion et les rÃƒÂ’Ã‚Â©glages avancÃƒÂ’Ã‚Â©s."
        primaryCta={{
          label: "TÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©charger Atlas PRO Player",
          href: "#telechargement-windows",
          trackingLabel: "Tutoriel Windows - TÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©charger",
        }}
        secondaryCta={{
          label: "DÃƒÂ’Ã‚Â©couvrir nos offres IPTV",
          href: "/offres-iptv/forfait-4k",
          trackingLabel: "Tutoriel Windows - Voir offres",
        }}
        image={{
          src: "/images/support-iptv.webp",
          alt: "Installation dÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Atlas PRO IPTV sur ordinateur Windows 11",
          width: 960,
          height: 640,
          priority: true,
        }}
        stats={stats}
      />

      <section className="container py-10">
        <StatsStrip stats={stats} />
      </section>

      <section id="telechargement-windows" className="container space-y-10">
        <SectionHeading
          eyebrow="TÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©chargement"
          title="RÃƒÂ’Ã‚Â©cupÃƒÂ’Ã‚Â©rer Atlas PRO Player Windows officiel"
          description="TÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©chargez lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½installateur Atlas PRO Player depuis nos serveurs sÃƒÂ’Ã‚Â©curisÃƒÂ’Ã‚Â©s ou configurez un lecteur compatible. ÃƒÂ’Ã¢Â¬Â°vitez les sites non officiels pour prÃƒÂ’Ã‚Â©server vos donnÃƒÂ’Ã‚Â©es."
        />
        <div className="rounded-[2.5rem] border border-atlas-blue/40 bg-atlas-slate/70 p-8 shadow-soft">
          <p className="text-sm text-gray-300">
            Le lecteur inclut la connexion automatique ÃƒÂ’Ã‚Â  votre espace Atlas PRO
            IPTV. Vous pouvez aussi utiliser{" "}
            <a
              href="https://apps.microsoft.com/detail/9nblggh4vr1q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-atlas-gold"
            >
              MyIPTV Player
            </a>{" "}
            ou{" "}
            <a
              href="https://www.tivimate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-atlas-gold"
            >
              TiviMate Desktop
            </a>{" "}
            pour des besoins spÃƒÂ’Ã‚Â©cifiques.
          </p>
          <CTAButton
            href="https://cdn.jsdelivr.net/gh/example/atlas-pro-player-win.exe"
            className="mt-6"
            variant="primary"
            trackingLabel="Tutoriel Windows - Atlas PRO Player"
          >
            TÃƒÂ’Ã‚Â©lÃƒÂ’Ã‚Â©charger Atlas PRO Player
          </CTAButton>
        </div>
      </section>

      <section className="container space-y-10">
        <SectionHeading
          eyebrow="Installation pas ÃƒÂ’Ã‚Â  pas"
          title="Configurer Atlas PRO IPTV sur Windows en quatre ÃƒÂ’Ã‚Â©tapes"
          description="Suivez ce tutoriel pour installer, connecter et optimiser Atlas PRO IPTV sur Windows 10/11."
        />
        <HowToSteps
          steps={howToSteps}
          name="Tutoriel Atlas PRO IPTV Windows"
          description="Guide officiel pour installer Atlas PRO IPTV sur PC Windows et configurer les lecteurs compatibles."
          canonical="/tutoriels-installation/windows"
        />
      </section>

      <section className="container space-y-10">
        <SectionHeading
          eyebrow="Optimisations"
          title="ParamÃƒÂ’Ã‚Â©trer Windows pour une lecture 4K ultra fluide"
          description="Appliquez ces recommandations pour tirer le meilleur parti dÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Atlas PRO IPTV sur votre ordinateur Windows."
        />
        <FeatureList features={optimisationFeatures} />
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-sm text-gray-300 shadow-soft">
          <p>
            En cas de coupure, suivez notre{" "}
            <a href="/support/connexion" className="text-atlas-gold">
              procÃƒÂ’Ã‚Â©dure de diagnostic de connexion
            </a>{" "}
            puis consultez le{" "}
            <a href="/support/epg-buffering" className="text-atlas-gold">
              centre de dÃƒÂ’Ã‚Â©pannage Atlas PRO
            </a>{" "}
            pour analyser votre dÃƒÂ’Ã‚Â©bit et vos ports rÃƒÂ’Ã‚Â©seau.
          </p>
        </div>
      </section>

      <section className="container space-y-10">
        <SectionHeading
          eyebrow="FonctionnalitÃƒÂ’Ã‚Â©s avancÃƒÂ’Ã‚Â©es"
          title="Aller plus loin avec Atlas PRO IPTV sur Windows"
          description="DÃƒÂ’Ã‚Â©couvrez les outils avancÃƒÂ’Ã‚Â©s pour personnaliser votre expÃƒÂ’Ã‚Â©rience IPTV : lecteurs alternatifs, enregistrements et diagnostic."
        />
        <FeatureList features={advancedTips} />
      </section>

      <section className="container space-y-8">
        <SectionHeading
          eyebrow="TÃƒÂ’Ã‚Â©moignages"
          title="Ils regardent Atlas PRO IPTV sur Windows"
          description="Des abonnÃƒÂ’Ã‚Â©s partagent leurs astuces pour obtenir le meilleur de leur PC Windows avec Atlas PRO IPTV."
        />
        <TestimonialsGrid testimonials={testimonials} />
      </section>

      <section className="container space-y-8 pb-20">
        <SectionHeading
          eyebrow="FAQ Windows"
          title="Questions frÃƒÂ’Ã‚Â©quentes sur lÃƒÂ¢Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½Ã¯Â¿Â½installation Atlas PRO IPTV sur Windows"
          description="Retrouvez les rÃƒÂ’Ã‚Â©ponses aux problÃƒÂ’Ã‚Â©matiques les plus courantes pour configurer Atlas PRO IPTV sur PC."
          align="center"
        />
        <FAQBlock items={faqItems} />
        <FAQSchema
          items={faqItems}
          canonical="/tutoriels-installation/windows"
        />
      </section>
    </div>
  );
}


