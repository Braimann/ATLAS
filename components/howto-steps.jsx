import JsonLd from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";

export default function HowToSteps({ steps, name, description, canonical }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime: "PT10M",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
      url: `${SITE_URL}${canonical}#step-${index + 1}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            id={`step-${index + 1}`}
            className="glass rounded-3xl border border-white/10 p-6"
          >
            <div className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-atlas-blue/25 text-base font-semibold text-atlas-gold">
                {index + 1}
              </span>
              <div className="space-y-2">
                <h3 className="font-heading text-lg text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-300">{step.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

