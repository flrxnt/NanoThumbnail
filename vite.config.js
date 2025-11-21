import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
  // Par défaut, on utilise le chemin pour GitHub Pages
  let base = '/NanoThumbnail/';

  // Si on détecte qu'on est sur Netlify (via la variable d'env standard NETLIFY=true)
  // OU si on est en mode développement local (command === 'serve')
  // On passe à la racine '/'
  if (process.env.NETLIFY === 'true' || command === 'serve') {
    base = '/';
  }

  return {
    base: base,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  };
});
