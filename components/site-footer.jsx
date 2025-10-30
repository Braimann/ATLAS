"use client";

import Link from "next/link";
import CTAButton from "@/components/ui/cta-button";
import { footerNavigation } from "@/content/navigation";
import {
  HIGH_AUTHORITY_LINKS,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_FR,
  SUPPORT_PHONE_MA,
} from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-atlas-night">
      <div className="container space-y-12 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl text-white">
              Atlas PRO IPTV : service francophone 4K sans compromis
            </h2>
            <p className="text-sm text-gray-300">
              Atlas PRO IPTV propose un streaming 4K stable, des codes certifiés et un support francophone 7 j/7. Tests
              de débit, anti-freeze intelligent et livraison instantanée garantissent une expérience fluide en France,
              Belgique, Suisse et Maroc.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-gray-500">
              <span>Horaires : 08h00 - 22h00 CET</span>
              <span>Support WhatsApp vérifié</span>
              <span>99,9 % de disponibilité</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/" trackingLabel="Footer - Offres">
                Voir les offres
              </CTAButton>
              <CTAButton
                href="/support"
                variant="outline"
                className="px-5 py-2 text-xs"
                trackingLabel="Footer - Centre support"
              >
                Accéder au support
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {footerNavigation.map((section) => (
              <div key={section.title} className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-atlas-gold">
                  {section.title}
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {section.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="transition-colors hover:text-atlas-gold">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-2 text-sm text-gray-300">
            <p>
              Contact France :{" "}
              <a href={`tel:${SUPPORT_PHONE_FR}`} className="text-atlas-gold hover:text-atlas-gold/80">
                {SUPPORT_PHONE_FR}
              </a>
            </p>
            <p>
              Contact Maroc :{" "}
              <a href={`tel:${SUPPORT_PHONE_MA}`} className="text-atlas-gold hover:text-atlas-gold/80">
                {SUPPORT_PHONE_MA}
              </a>
            </p>
            <p>
              Email :{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-atlas-gold hover:text-atlas-gold/80">
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
          <div className="space-y-2 text-sm text-gray-400">
            {HIGH_AUTHORITY_LINKS.map((item) => (
              <p key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-atlas-gold hover:text-atlas-gold/80"
                >
                  {item.label}
                </a>
              </p>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs text-gray-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>
              © {new Date().getFullYear()} Atlas PRO IPTV — Tous droits réservés. Propulsé depuis Paris.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/legal" className="hover:text-atlas-gold">
                Mentions légales & RGPD
              </Link>
              <Link href="/support" className="hover:text-atlas-gold">
                Centre d’assistance
              </Link>
              <Link href="/blog/rss.xml" className="hover:text-atlas-gold">
                Flux RSS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
