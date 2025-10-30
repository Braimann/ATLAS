import Image from "next/image";
import CTAButton from "@/components/ui/cta-button";

export default function PageHero({
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  badge,
  stats,
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-atlas-slate via-atlas-night to-atlas-slate-light" />
        <div className="absolute -left-32 top-16 h-64 w-64 rounded-full bg-atlas-blue/30 blur-[160px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-atlas-gold/20 blur-[140px]" />
      </div>

      <div className="container grid items-center gap-12 pb-12 pt-10 lg:grid-cols-2">
        <div className="space-y-6 text-white">
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full bg-atlas-blue/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-atlas-gold">
              {badge}
            </span>
          )}
          <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-base text-gray-200 sm:text-lg">
            {description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            {primaryCta && (
              <CTAButton href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </CTAButton>
            )}
            {secondaryCta && (
              <CTAButton href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </CTAButton>
            )}
          </div>
          {stats && (
            <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className="text-2xl font-semibold text-atlas-gold">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        {image && (
          <div className="relative">
            <div className="glass shadow-soft">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 960}
                height={image.height || 720}
                className="rounded-[2.5rem]"
                priority={image.priority}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
