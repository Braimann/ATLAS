const dots = [0, 1, 2];

export default function GlobalLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-atlas-night">
      <div className="flex flex-col items-center gap-6">
        <span className="text-lg font-heading uppercase tracking-[0.6em] text-atlas-gold">
          Atlas PRO IPTV 4K
        </span>
        <div className="flex gap-3">
          {dots.map((dot) => (
            <span
              key={dot}
              className="h-3 w-3 rounded-full bg-gradient-to-r from-atlas-blue to-atlas-gold"
              style={{
                animation: "dotPulse 1.2s ease-in-out infinite",
                animationDelay: `${dot * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
