import clsx from "clsx";

export default function FeatureList({ features, className }) {
  if (!features?.length) return null;

  return (
    <ul className={clsx("space-y-4", className)}>
      {features.map((feature, index) => {
        const isObject = feature && typeof feature === "object";
        const key = isObject ? (feature.title ?? index) : feature;

        return (
          <li
            key={key}
            className="flex items-start gap-3 text-sm text-gray-200 transition-transform duration-200 hover:translate-x-1"
          >
            <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-atlas-blue/25 text-xs font-semibold text-atlas-gold">
              ✓
            </span>
            <span>
              <span className="font-semibold text-white">
                {isObject ? feature.title : feature}
              </span>
              {isObject && feature.description ? (
                <span className="block text-sm text-gray-300">
                  {feature.description}
                </span>
              ) : null}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
