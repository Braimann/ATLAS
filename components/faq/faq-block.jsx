"use client";

import { useState } from "react";

export default function FAQBlock({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!items?.length) return null;

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const contentId = `faq-panel-${index}`;

        return (
          <div
            key={item.question}
            className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-soft"
          >
            <button
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span className="font-heading text-base text-white">
                {item.question}
              </span>
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-atlas-blue/20 text-atlas-gold"
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div
                id={contentId}
                className="mt-3 text-sm text-gray-300"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
