import Link from "next/link";
import clsx from "clsx";
import SectionHeading from "@/components/section-heading";

export default function InternalLinks({
  title = "Ressources complémentaires",
  description,
  eyebrow,
  links = [],
  className,
}) {
  if (!links.length) return null;

  return (
    <section className={clsx("container space-y-8", className)}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group block rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-soft transition-transform duration-200 hover:-translate-y-1 hover:border-atlas-gold/60"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-atlas-gold">
              {link.category}
            </p>
            <h3 className="mt-2 text-lg font-medium text-white group-hover:text-atlas-gold">
              {link.label}
            </h3>
            {link.description ? (
              <p className="mt-3 text-sm text-gray-300">{link.description}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
