module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start -- --hostname 127.0.0.1 --port 3001",
      startServerReadyPattern: "ready - started server on",
      url: [
        "http://127.0.0.1:3001/",
        "http://127.0.0.1:3001/offres-iptv/forfait-4k",
        "http://127.0.0.1:3001/support/connexion",
      ],
      numberOfRuns: 1,
      settings: {
        preset: "desktop",
        disableFullPageScreenshot: false,
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.92 }],
        "categories:pwa": "off",
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouse",
    },
  },
};
