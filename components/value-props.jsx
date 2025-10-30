import clsx from "clsx";

export default function ValueProps({ items, columns = 3 }) {
  if (!items?.length) return null;

  return (
    <div
      className={clsx(
        "grid gap-6",
        columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2",
      )}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="glass relative overflow-hidden p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1"
        >
          <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-atlas-blue/20 blur-3xl" />
          <div className="relative space-y-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-atlas-blue/20 text-atlas-gold">
              {item.icon}
            </span>
            <h3 className="font-heading text-xl text-white">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
            {item.cta && (
              <a
                href={item.cta.href}
                className="text-xs font-semibold uppercase tracking-wide text-atlas-gold hover:text-atlas-gold/80"
              >
                {item.cta.label} →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
