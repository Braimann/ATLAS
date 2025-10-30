"use client";

import Script from "next/script";
import { nanoid } from "nanoid/non-secure";

export default function JsonLd({ data }) {
  if (!data) return null;
  return (
    <Script
      id={`jsonld-${nanoid(6)}`}
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(data)}
    </Script>
  );
}

