"use client";

import Link from "next/link";
import clsx from "clsx";
import { trackEvent } from "@/lib/tracking";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-gradient-to-r from-atlas-blue via-blue-500 to-atlas-gold text-white shadow-soft hover:scale-[1.02] focus-visible:outline-atlas-blue",
  gold: "bg-gradient-to-r from-atlas-gold to-yellow-400 text-atlas-night shadow-soft hover:scale-[1.02] focus-visible:outline-atlas-gold",
  outline:
    "outline-gradient text-white hover:scale-[1.02] focus-visible:outline-atlas-gold",
  ghost: "text-atlas-gold hover:text-atlas-gold/80 hover:scale-[1.01]",
};

export default function CTAButton({
  children,
  variant = "primary",
  className,
  icon: Icon,
  trackingLabel,
  href,
  type = "button",
  onClick,
  ...rest
}) {
  const label =
    trackingLabel || (typeof children === "string" ? children : undefined);

  const classes = clsx(baseClasses, variants[variant], className);

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }

    if (label) {
      trackEvent({
        event: "cta_click",
        category: "engagement",
        label,
      });
    }
  };

  const content = (
    <span className="flex items-center gap-2">
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    const isCommunication = href.startsWith("mailto:") || href.startsWith("tel:");

    if (isExternal || isCommunication) {
      const externalProps = isExternal
        ? {
            target: rest.target ?? "_blank",
            rel: rest.rel ?? "noopener noreferrer",
          }
        : {};

      return (
        <a
          href={href}
          className={classes}
          onClick={handleClick}
          {...externalProps}
          {...rest}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={handleClick} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={handleClick} {...rest}>
      {content}
    </button>
  );
}
