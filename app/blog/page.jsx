import Breadcrumbs from "@/components/breadcrumbs";
import SectionHeading from "@/components/section-heading";
import BlogCard from "@/components/blog/blog-card";
import FAQBlock from "@/components/faq/faq-block";
import FAQSchema from "@/components/seo/faq-schema";
import CTAButton from "@/components/ui/cta-button";
import { blogPosts } from "@/content/posts";

export const dynamic = "force-static";

export const metadata = {
  title: "Blog Atlas PRO IPTV | Guides, comparatifs et tutoriels 2025",
  description:
    "Guides IPTV 4K, tutoriels d'installation et comparatifs Atlas PRO IPTV pour 2025. Optimisez votre streaming et votre réseau domestique.",
  alternates: {
    canonical: "/blog",
  },
};

const faqItems = [
  {
    question: "Que trouve-t-on sur le blog Atlas PRO IPTV ?",
    answer:
      "Des guides détaillés, des comparatifs d'abonnements IPTV, des tutoriels d'installation pas à pas et des recommandations de configuration réseau pour profiter d'Atlas PRO IPTV en 4K.",
  },
  {
    question: "Les articles sont-ils mis à jour régulièrement ?",
    answer:
      "Chaque mise à jour de nos applications Smart TV, Android ou Windows donne lieu à une révision des articles concernés afin de garantir des instructions à jour et fiables.",
  },
  {
    question: "Comment suivre nos nouvelles publications ?",
    answer:
      "Ajoutez le blog à vos favoris, abonnez-vous à notre newsletter et activez les notifications depuis votre espace client Atlas PRO IPTV pour être alerté en priorité.",
  },
];

export default function Page() {
  return (
    <div className="space-y-16">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

      <section className="container space-y-10 py-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-atlas-gold">
            Guides IPTV 2025
          </p>
          <h1 className="font-heading text-4xl text-white">
            Blog Atlas PRO IPTV : optimiser votre streaming 4K
          </h1>
          <p className="max-w-3xl text-base text-gray-300">
            Ce blog rassemble notre expertise pour vous aider à tirer le meilleur d'Atlas PRO IPTV. Vous y trouverez des analyses de performance, des méthodes pour renforcer votre réseau domestique, des exemples de configuration anti-freeze et des retours d'expérience clients.
          </p>
          <p className="max-w-3xl text-base text-gray-300">
            Nous mettons l’accent sur la pédagogie : captures d'écran, checklists téléchargeables, conseils Core Web Vitals pour vos appareils de streaming et comparatifs chiffrés. Notre objectif est de simplifier la vie des abonnés francophones, qu'ils utilisent Atlas PRO IPTV sur Smart TV, Android TV, Fire TV Stick, Windows ou lecteurs IPTV tiers.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 text-sm text-gray-300 shadow-soft">
          <p>
            En complément des articles, consultez notre centre de support et nos offres 4K pour profiter des dernières optimisations réseau et découvrir nos promotions en cours.
          </p>
        </div>
      </section>

      <section className="container space-y-8 pb-20">
        <SectionHeading
          eyebrow="FAQ Blog"
          title="Questions fréquentes sur le blog Atlas PRO IPTV"
          description="Nous répondons ici aux interrogations courantes concernant nos contenus éditoriaux et leur fréquence de mise à jour."
          align="center"
        />
        <FAQBlock items={faqItems} />
        <FAQSchema items={faqItems} canonical="/blog" />
        <div className="text-center">
          <CTAButton href="/contact" variant="outline" trackingLabel="Blog Index - Contact">
            Proposer un sujet d'article
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
