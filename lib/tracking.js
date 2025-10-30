"use client";

export const trackEvent = ({ event, category, label, value }) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    event_category: category,
    event_label: label,
    value,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

