"use client";

import Link from "next/link";
import { useEffect } from "react";

const WHATSAPP_URL =
  "https://wa.me/212770303940?text=Bonjour%20Atlas%20PRO%20IPTV%2C%20je%20souhaite%20acheter%20un%20abonnement.";

const CTAS_KEYWORDS = [
  "acheter",
  "commander",
  "souscrire",
  "essayer",
  "abonnement",
  "essayer maintenant",
];

export default function WhatsAppButton() {
  useEffect(() => {
    const handler = (event) => {
      const element = event.target.closest("a, button");
      if (!element) return;
      const text = (
        element.innerText ||
        element.getAttribute("aria-label") ||
        ""
      ).toLowerCase();
      const href = element.getAttribute("href") || "";

      const shouldRedirect =
        CTAS_KEYWORDS.some((keyword) => text.includes(keyword)) ||
        /\/contact/.test(href || "") ||
        href?.includes("mailto:") ||
        href?.includes("/offres-iptv");

      if (shouldRedirect) {
        event.preventDefault();
        window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <Link
      href={WHATSAPP_URL}
      className="whatsapp-float"
      aria-label="Contact via WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span aria-hidden="true">
        <svg
          width="30"
          height="30"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.004 3C8.834 3 3 8.834 3 16.004c0 2.577.67 4.951 1.84 7.022L3 29l6.153-1.802a12.918 12.918 0 0 0 6.851 1.941C23.174 29.139 29 23.305 29 16.135 29 8.965 23.174 3 16.004 3Zm0 23.594c-2.32 0-4.472-.671-6.278-1.824l-.447-.282-3.453 1.012 1.101-3.371-.292-.505a10.27 10.27 0 0 1-1.564-5.42c0-5.692 4.624-10.355 10.333-10.355s10.333 4.664 10.333 10.354c0 5.69-4.624 10.391-10.333 10.391Z"
            fill="#fff"
          />
          <path
            d="M21.472 18.839c-.322-.161-1.906-.937-2.2-1.042-.294-.109-.509-.161-.727.162-.215.32-.835 1.042-1.022 1.254-.188.215-.376.242-.698.082-.322-.162-1.36-.501-2.59-1.597-.956-.858-1.602-1.919-1.787-2.242-.188-.322-.02-.497.141-.657.143-.14.322-.376.482-.562.162-.186.215-.322.322-.538.107-.215.053-.402-.026-.562-.08-.161-.728-1.757-1.001-2.409-.262-.637-.524-.551-.728-.561-.188-.009-.402-.013-.618-.013s-.564.081-.858.402c-.294.322-1.125 1.101-1.125 2.689s1.152 3.121 1.31 3.338c.161.215 2.27 3.468 5.498 4.862.768.331 1.368.53 1.836.679.772.246 1.473.211 2.03.13.62-.092 1.906-.78 2.176-1.537.268-.756.268-1.403.188-1.54-.08-.14-.294-.215-.62-.376Z"
            fill="#fff"
          />
        </svg>
      </span>
    </Link>
  );
}

