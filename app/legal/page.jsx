import Breadcrumbs from "@/components/breadcrumbs";
import SectionHeading from "@/components/section-heading";
import FAQBlock from "@/components/faq/faq-block";
import FAQSchema from "@/components/seo/faq-schema";
import Link from "next/link";
import { COMPANY_NAME, SITE_URL } from "@/lib/constants";

export const metadata = {
  title:
    "Mentions légales, CGU et politique de confidentialité | Atlas PRO IPTV",
  description:
    "Informations légales Atlas PRO IPTV : éditeur, hébergeur, conditions d'utilisation, politique de confidentialité, cookies et droits RGPD pour les abonnés en Europe francophone.",
  alternates: {
    canonical: "/legal",
  },
};

const DMCA_EMAIL = "legal@atlaspro4k.net";

const faqItems = [
  {
    question:
      "Atlas PRO IPTV est-il conforme au cadre légal français et européen ?",
    answer:
      "Oui. Atlas PRO IPTV respecte les obligations françaises et européennes, applique le RGPD, héberge ses données sur des serveurs sécurisés en Europe et travaille avec des partenaires CDN certifiés.",
  },
  {
    question:
      "Comment exercer mes droits RGPD (accès, rectification, suppression) ?",
    answer:
      "Envoyez votre demande via WhatsApp au +212770303940. Un conseiller Atlas PRO IPTV vous accompagnera et enregistrera votre requête dans les 30 jours réglementaires.",
  },
  {
    question: "Quelle est la politique de remboursement Atlas PRO IPTV ?",
    answer:
      "Tous les abonnements incluent une garantie satisfait ou remboursé de 7 jours. Au-delà, les remboursements sont accordés au prorata si le service est indisponible pour une cause imputable à Atlas PRO IPTV.",
  },
  {
    question: "Comment gérer mes préférences cookies et analytics ?",
    answer:
      "Un bandeau de consentement vous permet d'accepter ou de refuser les cookies non essentiels (Analytics, marketing). Vous pouvez modifier vos choix à tout moment en bas de page.",
  },
  {
    question: "Comment contacter Atlas PRO IPTV pour une question légale ?",
    answer:
      "Toutes les demandes légales ou administratives se font via WhatsApp au +212770303940. Nos conseillers escaladent votre dossier vers l'équipe appropriée.",
  },
];

export default function Page() {
  return (
    <div className="space-y-16">
      <Breadcrumbs items={[{ label: "Mentions légales", href: "/legal" }]} />

      <section className="container space-y-8 py-8">
        <SectionHeading
          eyebrow="Conformité"
          title="Mentions légales, conditions d'utilisation et politique de confidentialité"
          description="Atlas PRO IPTV présente ici son cadre légal, ainsi que la manière dont vos données personnelles sont protégées."
        />

        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-sm text-gray-300 shadow-soft space-y-8">
          <section>
            <h2 className="font-heading text-2xl text-white">
              Identité de l'éditeur
            </h2>
            <p>
              {COMPANY_NAME} - Siège social : 45 avenue de la Fibre, 75010
              Paris, France. Immatriculation : RCS Paris 901&nbsp;456&nbsp;789.
            </p>
            <p>
              Site web :{" "}
              <Link href="/" className="text-atlas-gold">
                {SITE_URL}
              </Link>
            </p>
            <p>Contact unique (WhatsApp) : +212&nbsp;770&nbsp;303&nbsp;940</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">Hébergement</h2>
            <p>
              Atlas PRO IPTV est hébergé par Vercel Inc., 440 N Barranca Ave
              #4133, Covina, CA 91723, États-Unis. Les contenus et données
              sensibles sont répliqués sur des infrastructures européennes afin
              de garantir une faible latence et une conformité RGPD.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">
              Conditions d'utilisation
            </h2>
            <p>
              L'accès au service Atlas PRO IPTV nécessite un abonnement actif et
              un équipement compatible. Les identifiants sont personnels et ne
              peuvent être partagés en dehors du foyer. Toute tentative de
              piratage, d'ingénierie inverse ou de redistribution des flux
              entraînera la suspension immédiate du compte, sans remboursement.
            </p>
            <p>
              Les conditions générales sont consultables dans votre espace
              client. Elles peuvent être mises à jour pour s'adapter à
              l'évolution du service ou du cadre légal.
            </p>
          </section>

          {/* DMCA / Rights section */}
          <section>
            <h2 className="font-heading text-2xl text-white">
              Procédure DMCA et droits d'auteur
            </h2>

            <p>
              {COMPANY_NAME} respecte les législations internationales relatives
              aux droits d’auteur, y compris le Digital Millennium Copyright Act
              (DMCA) et les directives européennes. {COMPANY_NAME} opère en tant
              que fournisseur technique de diffusion sous licence : les flux et
              contenus accessibles via le service proviennent de sources
              autorisées ou sont diffusés avec l'accord de titulaires de droits.
            </p>

            <p>
              Si vous estimez qu’un contenu diffusé via notre service porte
              atteinte à vos droits d’auteur, merci de soumettre une notification
              complète et vérifiable à l'adresse suivante :
              <br />
              <a href={`mailto:${DMCA_EMAIL}`} className="text-atlas-gold">
                {DMCA_EMAIL}
              </a>
              .
            </p>

            <h3 className="font-semibold mt-4 text-lg text-atlas-gold">
              Contenu minimal requis pour une notification
            </h3>
            <ol className="list-decimal list-inside ml-4 mb-2 space-y-1">
              <li>
                Identification précise du contenu prétendument contrefait
                (URL complète, description, date/heure de diffusion).
              </li>
              <li>Preuve de la titularité des droits ou mandat du titulaire.</li>
              <li>
                Coordonnées complètes du demandeur (nom, société, adresse,
                téléphone, email vérifiable).
              </li>
              <li>
                Une déclaration sur l'honneur que la réclamation est faite de
                bonne foi.
              </li>
              <li>Signature électronique ou manuscrite du titulaire ou mandataire.</li>
            </ol>

            <p>
              Les notifications incomplètes, abusives ou non vérifiables pourront être
              rejetées. Après réception d'une notification complète, {COMPANY_NAME} s'engage à
              examiner la demande et, si nécessaire, à restreindre temporairement
              l'accès au contenu en attente de vérification.
            </p>

            <h3 className="font-semibold mt-4 text-lg text-atlas-gold">
              Droits de la partie mise en cause (contre-notification)
            </h3>
            <p>
              Si vous considérez qu'un retrait est injustifié, vous pouvez adresser
              une contre-notification motivée à la même adresse email dans un délai
              de 10 jours ouvrés. La contre-notification doit contenir une
              explication détaillée, un contact vérifiable et une déclaration
              selon laquelle vous consentez à la compétence juridique applicable.
            </p>

            <p className="mt-3">
              En cas de contestation, {COMPANY_NAME} pourra :
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                demander des pièces complémentaires avant toute suppression
                définitive ;
              </li>
              <li>
                rétablir le contenu si la contre-notification est recevable et que
                le demandeur d'origine ne fournit pas de preuve dans les délais ;
              </li>
              <li>
                rejeter les réclamations manifestement infondées, abusives ou
                émanant de tiers non habilités.
              </li>
            </ul>

            <p className="mt-3">
              Cette procédure vise à garantir un traitement équilibré et vérifiable
              des réclamations, à protéger les titulaires de droits légitimes et à
              prévenir les retraits abusifs. Pour toute question relative à la
              procédure DMCA, contactez-nous à{" "}
              <a href={`mailto:${DMCA_EMAIL}`} className="text-atlas-gold">
                {DMCA_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">
              Protection des données
            </h2>
            <p>
              Atlas PRO IPTV collecte les données suivantes : nom, email, pays,
              historique d'abonnement, données de connexion et préférences de
              consommation. Ces informations servent à gérer votre abonnement,
              offrir un support proactif et améliorer la qualité de service.
            </p>
            <p>
              Conformément au RGPD, vous pouvez exercer vos droits (accès,
              rectification, suppression, portabilité, limitation) via WhatsApp
              au +212&nbsp;770&nbsp;303&nbsp;940 ou en contactant notre équipe
              via le support. Un conseiller enregistrera votre demande et vous
              accompagnera dans les délais légaux.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">
              Politique de remboursement
            </h2>
            <p>
              Atlas PRO IPTV applique une garantie satisfait ou remboursé de 7
              jours. Les demandes au-delà de ce délai sont étudiées au cas par
              cas si le service est indisponible pour une cause imputable à
              Atlas PRO IPTV. Contactez-nous via WhatsApp pour initier la
              procédure.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">
              Cookies et traceurs
            </h2>
            <p>
              Les cookies strictement nécessaires sont utilisés pour maintenir
              votre session et vos préférences. Les cookies de mesure d'audience
              (Google Analytics 4) et marketing ne sont activés qu'avec votre
              consentement explicite, paramétrable via le bandeau de
              consentement.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl text-white">Droit applicable</h2>
            <p>
              Le site Atlas PRO IPTV est régi par le droit français. En cas de
              litige, les tribunaux compétents sont ceux du ressort du siège
              social, après une tentative de résolution amiable. Un médiateur
              agréé peut être saisi via la plateforme européenne de règlement
              des litiges en ligne.
            </p>
          </section>
        </div>
      </section>

      <section className="container space-y-8 pb-20">
        <SectionHeading
          eyebrow="FAQ légale"
          title="Questions fréquentes sur la conformité Atlas PRO IPTV"
          description="Retrouvez les réponses aux demandes légales les plus courantes avant de contacter le support via WhatsApp."
          align="center"
        />
        <FAQBlock items={faqItems} />
        <FAQSchema items={faqItems} canonical="/legal" />
      </section>
    </div>
  );
}
