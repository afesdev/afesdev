import type { APIRoute } from 'astro';

// robots.txt: permite todo y le indica a los buscadores dónde está el mapa del sitio
export const GET: APIRoute = ({ site }) => {
  const mapa = new URL('sitemap-index.xml', site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${mapa.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
