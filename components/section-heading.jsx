import clsx from "clsx";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) {
  return (
    <div
      className={clsx(
        "space-y-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-atlas-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "text-base text-gray-300",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

