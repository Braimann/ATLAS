"use client";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function TagManagerNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        title="GTM"
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

