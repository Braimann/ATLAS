import SectionHeading from "@/components/section-heading";
import CTAButton from "@/components/ui/cta-button";

export default function OffersSection({
  id = "offres",
  heading,
  offers,
  ctaTrackingPrefix = "Offres",
}) {
  if (!offers?.length) return null;

  return (
    <section id={id} className="container space-y-12 py-20">
      {heading ? (
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          description={heading.description}
          align={heading.align ?? "center"}
        />
      ) : null}

      <div className="grid gap-8 lg:grid-cols-3">
        {offers.map((offer) => (
          <article
            key={offer.id}
            id={offer.id}
            className="relative flex h-full flex-col gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-left shadow-soft transition-transform duration-200 hover:-translate-y-1"
          >
            {offer.bonus ? (
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-atlas-gold/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-atlas-gold">
                {offer.bonus}
              </span>
            ) : null}

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-atlas-gold">
                {offer.tagline}
              </p>
              <h3 className="font-heading text-2xl text-white">{offer.name}</h3>
            </div>

            <div className="rounded-3xl bg-white/5 p-6 text-center">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                Tarif 12 mois
              </p>
              <p className="mt-2 text-4xl font-semibold text-white">
                {offer.displayPrice}
              </p>
              <p className="text-sm text-gray-400">
                <span className="mr-1 line-through opacity-70">
                  {offer.oldPrice}
                </span>
              </p>
            </div>

            <ul className="space-y-3 text-sm text-gray-200">
              {offer.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-atlas-blue/25 text-xs font-semibold text-atlas-gold">
                    +
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs uppercase tracking-[0.35em] text-atlas-gold">
              Satisfait(e) ou rembourse(e)
            </p>

            <div className="mt-auto">
              <CTAButton
                href={`https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%20IPTV%2C%20je%20souhaite%20acheter%20le%20${encodeURIComponent(
                  offer.name,
                )}.`}
                trackingLabel={`${ctaTrackingPrefix} - ${offer.id}`}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                Profiter de l'offre
              </CTAButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
