export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-atlas-gold">
        Page introuvable
      </p>
      <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl">
        Oups ! Cette page nâexiste plus
      </h1>
      <p className="max-w-xl text-sm text-gray-300 sm:text-base">
        Le lien que vous avez suivi est peut-Ãªtre obsolÃ¨te ou a Ã©tÃ© dÃ©placÃ©. Utilisez la navigation principale ou retournez vers lâaccueil pour continuer votre visite.
      </p>
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-atlas-blue via-blue-500 to-atlas-gold px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue"
      >
        Retourner Ã  lâaccueil
      </a>
    </div>
  );
}

