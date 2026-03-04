# Atlas Pro 4K - Site Web Officiel

Site web statique ultra-optimisé SEO pour le service IPTV Atlas Pro 4K.

## 🚀 Déploiement sur Cloudflare Pages

### Méthode 1 : Déploiement via Git (Recommandé)

1. **Créer un dépôt Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Pousser sur GitHub/GitLab**
   ```bash
   git remote add origin https://github.com/votre-compte/atlaspro4k.git
   git push -u origin main
   ```

3. **Connecter à Cloudflare Pages**
   - Connectez-vous à [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Allez dans **Pages** > **Create a project**
   - Connectez votre compte GitHub/GitLab
   - Sélectionnez le dépôt `atlaspro4k`
   - Configuration :
     - **Framework preset** : None
     - **Build command** : (laisser vide)
     - **Build output directory** : (laisser vide - racine)
   - Cliquez sur **Save and Deploy**

### Méthode 2 : Déploiement direct (Drag & Drop)

1. **Compresser les fichiers**
   ```bash
   zip -r atlaspro4k.zip . -x "*.git*" -x "README.md"
   ```

2. **Uploader sur Cloudflare**
   - Allez sur [Cloudflare Pages](https://dash.cloudflare.com)
   - Cliquez sur **Upload assets**
   - Glissez-déposez le fichier `atlaspro4k.zip`
   - Attendez le déploiement

### Méthode 3 : Wrangler CLI

1. **Installer Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Authentification**
   ```bash
   wrangler login
   ```

3. **Déployer**
   ```bash
   wrangler pages deploy . --project-name=atlaspro4k
   ```

## 📁 Structure du projet

```
├── index.html              # Landing page principale
├── abonnement.html         # Page offres & tarifs
├── faq.html                # Page FAQ
├── contact.html            # Page contact
├── 404.html                # Page erreur personnalisée
├── style.css               # CSS global
├── script.js               # JavaScript principal
├── sitemap.xml             # Sitemap SEO
├── robots.txt              # Instructions robots
├── _redirects              # Redirections Cloudflare
├── README.md               # Ce fichier
└── blog/
    ├── index.html          # Liste des articles
    ├── atlas-pro-4k-avis.html
    ├── meilleur-iptv-2026.html
    ├── atlas-pro-vs-concurrents.html
    └── atlas-pro-maroc.html
```

## 🔧 Configuration DNS (après déploiement)

1. **Ajouter un domaine personnalisé**
   - Dans Cloudflare Pages, allez dans **Custom domains**
   - Cliquez sur **Set up a custom domain**
   - Entrez : `atlaspro4k.net`
   - Suivez les instructions pour configurer les DNS

2. **Configuration DNS recommandée**
   ```
   Type    Nom              Valeur
   A       @                192.0.2.1 (Cloudflare)
   CNAME   www              atlaspro4k.pages.dev
   ```

## 📊 SEO & Performance

Le site est optimisé pour :
- **Core Web Vitals** : CSS critique inline, lazy loading images
- **SEO Technique** : Schema.org, Open Graph, Twitter Cards
- **Mobile-first** : Design responsive
- **Accessibilité** : ARIA labels, contrastes

## 🔒 Sécurité

- HTTPS forcé (Cloudflare)
- Headers de sécurité configurés
- Pas de données sensibles en dur

## 📝 Mise à jour du contenu

Pour modifier le contenu :
1. Éditez les fichiers HTML directement
2. Mettez à jour les prix dans `abonnement.html`
3. Ajoutez des articles dans le dossier `blog/`
4. Redéployez sur Cloudflare Pages

## 🆘 Support

En cas de problème :
- Email : support@atlaspro4k.net
- Telegram : @atlaspro4k

---

© 2026 Atlas Pro 4K - Tous droits réservés
