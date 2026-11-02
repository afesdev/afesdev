// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio donde se publica el sitio: lo usan el mapa del sitio, el enlace canónico y las imágenes para compartir
  site: 'https://afesdev.site',
  integrations: [
    sitemap({
      filter: (pagina) => !pagina.includes('/404'),
    }),
  ],
});
