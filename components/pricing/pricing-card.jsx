"use client";

import CTAButton from "@/components/ui/cta-button";
import FeatureList from "@/components/feature-list";
import clsx from "clsx";

export default function PricingCard({
  title,
  description,
  price,
  currency = "€",
  frequency = "/mois",
  features,
  highlight = false,
  cta,
}) {
  return (
    <div
      className={clsx(
        "relative rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-soft transition-transform hover:-translate-y-1",
        highlight ? "outline-gradient" : "",
      )}
    >
      {highlight && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-atlas-gold px-4 py-1 text-xs font-semibold uppercase tracking-wide text-atlas-night">
          Meilleur choix
        </span>
      )}
      <div className="space-y-3">
        <h3 className="font-heading text-2xl text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-semibold text-atlas-gold">
            {currency}
            {price}
          </span>
          <span className="text-xs uppercase tracking-wide text-gray-400">
            {frequency}
          </span>
        </div>
      </div>
      <FeatureList features={features} className="mt-6" />
      {cta && (
        <CTAButton
          href={cta.href}
          className="mt-8 w-full"
          variant={highlight ? "gold" : "primary"}
        >
          {cta.label}
        </CTAButton>
      )}
    </div>
  );
}
