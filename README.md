ï¿½# Atlas PRO IPTV 4K ï¿½ Site Next.js

Site marketing complet pour la marque **Atlas PRO IPTV 4K**, rÃ©alisÃ© avec **Next.js 14**, **Tailwind CSS** et **Framer Motion**.  
Lï¿½"objectif est de fournir un portail SEO-first, responsive et ultra rapide destinÃ© aux audiences France & Maroc.

## ï¿½xaï¿½ Stack & fonctionnalitÃ©s

- **Next.js 14 (App Router)** avec rendu serveur (SSR) et routes dynamiques
- **Tailwind CSS** + **Framer Motion** pour une UI premium, animations fluides et Core Web Vitals optimisÃ©s
- **Gestion SEO avancÃ©e** : metadata complÃ¨tes, schÃ©mas FAQ/HowTo/Product, sitemap, robots, breadcrumbs JSON-LD
- **Images 4K WebP** optimisÃ©es et chargement diffÃ©rÃ©
- **Flux RSS** (`/blog/rss.xml`) et manifest PWA
- **Google Analytics 4** via `NEXT_PUBLIC_GA_ID`
- Contenus rÃ©digÃ©s en franÃ§ais avec maillage interne stratÃ©gique

## ï¿½xï¿½ Installation

```bash
npm install
npm run dev
```

Variables dï¿½"environnement :

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## ï¿½xï¸ Architecture

- `app/` ï¿½ pages SSR (home, offres, tÃ©lÃ©chargement, tutoriels, support, blog, contact, legal, RSS, sitemap, robots)
- `components/` ï¿½ header/footer, CTA, sections animÃ©es, FAQ, schÃ©mas JSON-LD, hero, cartes pricing/blog
- `content/` ï¿½ navigation, articles du blog
- `lib/` ï¿½ constantes globales (URLs, mots-clÃ©s, contacts)
- `public/` ï¿½ favicon, manifest et visuels 4K compressÃ©s
- `scripts/` ï¿½ gÃ©nÃ©ration des visuels WebP 4K

## ï¿½S& Pages principales

| Page                           | Objectif                           | CTA principal                |
| ------------------------------ | ---------------------------------- | ---------------------------- |
| `/`                            | Landing Atlas PRO 4K               | Voir nos forfaits 4K         |
| `/offres-iptv/forfait-4k`      | Offre 4K                           | Je mï¿½"abonne maintenant       |
| `/offres-iptv/forfait-premium` | Offre Premium                      | Je rÃ©serve mon offre Premium |
| `/support`               | Centre de support Atlas PRO          | Accï¿½der au support       |
| `/tutoriels-installation/*`    | Guides HowTo Smart TV & Windows    | Voir les tutoriels           |
| `/support/*`                   | Support EPG, buffering, connexion  | Ouvrir un ticket             |
| `/blog/*`                      | Articles SEO 2025                  | Consulter tous les articles  |
| `/contact`                     | Support & ventes                   | Envoyer ma demande           |

## ï¿½xï¿½ SEO & lÃ©galitÃ©

- Mots-clÃ©s ciblÃ©s : _atlas pro iptv, atlas pro 4k, iptv maroc, abonnement iptv france, tÃ©lÃ©charger atlas pro, installation atlas pro, meilleur iptv 2025_
- Mentions conformitÃ© lÃ©gale, sÃ©curitÃ© des donnÃ©es et assistance 7 j/7
- Liens externes vers WikipÃ©dia (IPTV) et Cloudflare (CDN) pour crÃ©dibilitÃ©

## ï¿½xï¿½ï¿½ Tests recommandÃ©s

- `npm run lint` pour vÃ©rifier les bonnes pratiques Next.js/Tailwind
- Lighthouse (Desktop + Mobile) pour valider les Core Web Vitals
- Test fonctionnel des pages critiques : formulaires, CTA, flux RSS, sitemap

Bonne intÃ©gration !

