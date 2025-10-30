import CTAButton from "@/components/ui/cta-button";
import SectionHeading from "@/components/section-heading";

export const dynamic = "force-static";

export const metadata = {
  title: "Atlas PRO IPTV â English Overview",
  description:
    "Learn more about Atlas PRO IPTV in English: 4K streaming, multi-device support and a 7-day money-back guarantee.",
  alternates: {
    canonical: "https://atlaspro4k.net/en/",
  },
};

export default function Page() {
  return (
    <div className="container space-y-10 py-16">
      <h1 className="text-center font-heading text-4xl text-white">Atlas PRO IPTV for English speakers</h1>
      <SectionHeading eyebrow="English version"
        title="Atlas PRO IPTV in a nutshell"
        description="Our service is primarily managed in French, but this page summarises the key advantages for English-speaking visitors."
        align="center"
      />
      <div className="mx-auto max-w-3xl space-y-4 text-sm text-gray-300">
        <p>
          Atlas PRO IPTV delivers more than 25,000 TV channels and 70,000 VOD assets with 4K HDR quality.
          Servers are distributed across France, Belgium, Switzerland and Morocco to ensure low latency for
          European users. Subscriptions are available with one, two or three simultaneous screens and are
          activated instantly after payment.
        </p>
        <p>
          English support is available on demand via WhatsApp or email. If you prefer assistance in French,
          our dedicated team remains online seven days a week from 08:00 to 22:00 CET. You may switch back to
          the French version of the website at any time for the full documentation, tutorials and comparison tables.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <CTAButton href="/offres-iptv/forfait-4k" trackingLabel="EN - Offers 4K">
          View IPTV offers
        </CTAButton>
        <CTAButton href="/contact" variant="outline" trackingLabel="EN - Contact">
          Contact the team
        </CTAButton>
      </div>
    </div>
  );
}

