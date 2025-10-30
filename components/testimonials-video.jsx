"use client";

import { useMemo } from "react";
import { useInView } from "react-intersection-observer";

const VIMEO_URL =
  "https://player.vimeo.com/video/1130221638?title=0&byline=0&portrait=0";

export default function TestimonialsVideo({ className = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const iframe = useMemo(() => {
    if (!inView) {
      return null;
    }

    return (
      <iframe
        src={VIMEO_URL}
        title="Temoignage client Atlas PRO IPTV"
        loading="lazy"
        fetchPriority="low"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  }, [inView]);

  return (
    <div ref={ref} className={className}>
      {iframe || (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-xs uppercase tracking-[0.3em] text-white/60">
          Loading video...
        </div>
      )}
    </div>
  );
}
