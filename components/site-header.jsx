"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import CTAButton from "@/components/ui/cta-button";
import { mainNavigation } from "@/content/navigation";

const announcementText =
  "Service TV francophone le plus rapide d’Europe – Livraison instantanée – Garantie satisfait ou remboursé 7 jours";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="nav-blur fixed inset-x-0 top-0 z-50 border-b border-white/10">
      <div className="border-b border-white/10 bg-white/5 text-[11px] uppercase tracking-[0.35em] text-gray-300 sm:text-xs">
        <div className="container flex flex-col items-center justify-between gap-2 py-2 sm:flex-row">
          <span>{announcementText}</span>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] sm:text-[11px]">
              99,9 % disponibilité
            </span>
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">
              <span>FR</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400">EN (bientôt)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between gap-6 py-3 sm:py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold text-white"
          aria-label="Accueil Atlas PRO TV 4K"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-gradient-to-br from-atlas-blue via-blue-600 to-atlas-gold text-base font-bold text-white shadow-soft">
            AP
          </span>
          <span className="hidden font-heading text-lg sm:inline-flex">Atlas PRO TV 4K</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-200 xl:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm transition-colors duration-200 hover:text-atlas-gold",
                isActive(item.href) ? "text-atlas-gold" : "text-gray-300",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <CTAButton href="/" variant="gold" trackingLabel="Header - Offres 4K">
            Voir les offres
          </CTAButton>
          <CTAButton href="/support" variant="primary" trackingLabel="Header - Centre de support">
            Accéder au support
          </CTAButton>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white xl:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label="Ouvrir le menu de navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-white/5 xl:hidden">
          <div className="container flex flex-col gap-4 pb-6 pt-4">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold tracking-wide text-gray-200 transition-colors hover:text-atlas-gold",
                  isActive(item.href) ? "text-atlas-gold" : "",
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="grid gap-3">
              <CTAButton href="/" className="w-full" variant="gold" trackingLabel="Mobile Header - Offres 4K">
                Voir les offres
              </CTAButton>
              <CTAButton href="/support" className="w-full" trackingLabel="Mobile Header - Centre de support">
                Accéder au support
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
