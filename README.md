# Atlas Pro 4K – Site SEO

Site statique prêt pour **Cloudflare Pages**.

## Déploiement sur Cloudflare Pages

### Dossier à déployer

Tout le site se trouve dans **un seul dossier** : `public/`

- Pages : `index.html`, `abonnement.html`, `contact.html`, `faq.html`, `404.html`
- Blog : `blog/index.html` + articles
- Assets : `style.css`, `script.js`
- SEO : `sitemap.xml`, `robots.txt`
- Redirections : `_redirects` (géré par Cloudflare Pages)

### Méthode 1 : Dashboard Cloudflare

1. Allez sur [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** (ou **Workers**) → **Connect to Git**.
2. **Option A – Pages (recommandé)** : branche **`main`**, **Build command** = vide, **Build output directory** = `public`.
3. **Option B – avec Wrangler** : **Build command** = `npx wrangler deploy`, pas de sortie build à renseigner ; `wrangler.toml` envoie le dossier `public` comme assets.

### Méthode 2 : Wrangler (CLI)

```bash
npm install -g wrangler
cd "Kimi_Agent_Site Atlas Pro 4K SEO"
wrangler pages deploy public --project-name=atlas-pro-4k
```

Votre site sera en ligne sur `https://<project-name>.pages.dev` (ou votre domaine personnalisé).

### Sitemap et Google Search Console

Le `sitemap.xml` et le `robots.txt` utilisent le domaine **atlaspro4k.net**. Pour que Google accepte le sitemap sans erreur « Cette URL n'est pas autorisée pour un sitemap situé à cet emplacement » :

1. **Ajoutez le domaine personnalisé** dans Cloudflare : Workers & Pages → votre projet → **Custom domains** → **Set up a custom domain** → `atlaspro4k.net` (et `www.atlaspro4k.net` si vous l’utilisez).
2. Une fois le site servi sur **https://atlaspro4k.net**, soumettez dans Search Console (propriété **atlaspro4k.net**) l’URL du sitemap : **https://atlaspro4k.net/sitemap.xml**.

Le sitemap doit être **hébergé sur le même domaine** que les URL qu’il liste (règle Google).

---

**Note** : Vous pouvez supprimer les dossiers `atlas-pro-4k` et `app` après déploiement si vous ne souhaitez garder que la version déployable dans `public`.
