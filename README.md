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

1. Allez sur [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** ou **Upload assets**.
2. Si **Upload assets** : compressez le contenu du dossier `public` (tous les fichiers **à la racine** du ZIP, pas un sous-dossier `public`), puis uploadez le fichier ZIP.
3. Si **Connect to Git** : branchez votre dépôt et indiquez :
   - **Build command** : vide (site statique)
   - **Build output directory** : `public`

### Méthode 2 : Wrangler (CLI)

```bash
npm install -g wrangler
cd "Kimi_Agent_Site Atlas Pro 4K SEO"
wrangler pages deploy public --project-name=atlas-pro-4k
```

Votre site sera en ligne sur `https://<project-name>.pages.dev` (ou votre domaine personnalisé).

---

**Note** : Vous pouvez supprimer les dossiers `atlas-pro-4k` et `app` après déploiement si vous ne souhaitez garder que la version déployable dans `public`.
