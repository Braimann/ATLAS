"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import JsonLd from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";
import clsx from "clsx";

export default function Breadcrumbs({ items }) {
  const pathname = usePathname();
  const crumbs = items?.length
    ? items
    : pathname
        .split("/")
        .filter(Boolean)
        .map((segment, index, arr) => {
          const href = `/${arr.slice(0, index + 1).join("/")}`;
          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());
          return { label, href };
        });

  const breadcrumbItems = [{ label: "Accueil", href: "/" }, ...(crumbs || [])];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <nav
      aria-label="Fil d'Ariane"
      className="my-4 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-gray-400"
    >
      <JsonLd data={jsonLd} />
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          {index > 0 && <span className="text-gray-500">/</span>}
          <Link
            href={item.href}
            className={clsx(
              "hover:text-atlas-gold",
              index === breadcrumbItems.length - 1
                ? "text-gray-200"
                : "text-gray-400",
            )}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
