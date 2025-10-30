"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "userAcceptedAnalytics";

export default function CookieConsentBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let animationFrame;
    const checkConsent = () => {
      try {
        const consent = window.localStorage.getItem(CONSENT_KEY);
        if (consent !== "true") {
          animationFrame = window.requestAnimationFrame(() => setIsOpen(true));
        }
      } catch {
        animationFrame = window.requestAnimationFrame(() => setIsOpen(true));
      }
    };

    checkConsent();
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  if (!isOpen) {
    return null;
  }

  const handleAccept = () => {
    try {
      window.localStorage.setItem(CONSENT_KEY, "true");
    } catch {
      // Ignore failures (e.g., storage disabled)
    }
    window.dispatchEvent(new Event("atlas-consent-granted"));
    setIsOpen(false);
  };

  const handleDecline = () => {
    try {
      window.localStorage.setItem(CONSENT_KEY, "false");
    } catch {
      // Ignore storage errors
    }
    setIsOpen(false);
  };

  return (
    <aside className="pointer-events-auto fixed inset-x-0 bottom-0 z-[60] flex flex-wrap items-center gap-3 bg-atlas-night/95 px-4 py-3 text-sm text-white shadow-[0_-4px_16px_rgba(0,0,0,0.2)] backdrop-blur-sm md:flex-nowrap md:gap-4">
      <span className="flex-1 text-[0.9rem] leading-tight text-gray-100">
        Nous utilisons des outils d'analyse pour ameliorer votre experience et le fonctionnement du site.
        Aucune donnee personnelle n'est collectee.
      </span>
      <div className="flex flex-shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={handleDecline}
          className="inline-flex items-center rounded-full border border-white/40 px-4 py-1.5 text-[0.85rem] font-medium text-white transition hover:border-white/70 hover:bg-white/5"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[0.85rem] font-semibold text-atlas-night transition hover:bg-gray-200"
        >
          Accepter
        </button>
      </div>
    </aside>
  );
}