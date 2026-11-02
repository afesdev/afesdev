# afesdev · sitio web

Sitio personal hecho con [Astro](https://astro.build): servicios, información y
una página por cada app con funciones, capturas y videos.

## Comandos

```bash
npm install        # la primera vez
npm run dev        # http://localhost:4321
npm run build      # genera el sitio en dist/
npm run preview    # revisa lo que quedó en dist/
```

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Nombre, correo, redes, servicios, pasos y tecnologías | `src/data/sitio.ts` |
| Textos, capturas, videos y cifras de cada app | `src/content/apps/<app>.md` |
| Política de privacidad de cada app (`/apps/<app>/privacidad`) | `src/content/privacidad/<app>.md` |
| Número de WhatsApp del botón flotante | `src/data/sitio.ts` → `whatsapp.numero` |
| Imágenes de las apps (se optimizan solas) | `src/assets/apps/<app>/` |
| Videos (con su portada .jpg) | `public/videos/<app>/` |
| Colores y estilos generales | `src/styles/global.css` |
| Cabecera y pie de página | `src/layouts/Base.astro` |

## Agregar una app nueva

1. Pon sus imágenes en `src/assets/apps/<app>/` (icono, destacado, capturas y pantallas).
2. Pon sus videos en `public/videos/<app>/`, cada `.mp4` con un `.jpg` del mismo nombre.
3. Copia `src/content/apps/financially.md` como `<app>.md` y cambia los datos.
   La página queda en `/apps/<app>`.

`scripts/copiar-medios.sh` vuelve a copiar las imágenes y videos de Aprende C# y
Financially desde las carpetas `store/` de cada proyecto.

## SEO

- **Dominio:** `site` en `astro.config.mjs` (`https://afesdev.site`). Si cambias de dominio, cámbialo ahí.
- **Mapa del sitio y robots.txt:** se generan solos al compilar (`sitemap-index.xml`, `robots.txt`).
- **Título y descripción en Google:** portada en `src/data/sitio.ts`; cada app en el campo `seo` de su `.md`.
- **Imagen al compartir:** la portada usa `public/og-sitio.png` (`bash scripts/generar-og.sh` la regenera desde `scripts/og-sitio.html`); cada app usa su gráfico destacado.
- **Datos estructurados:** se arman en `src/layouts/Base.astro` (sitio y desarrollador) y en `src/pages/apps/[id].astro` (app y migas de pan).

## Actualizar las cifras

En Play Console → la app → **Producción**, el "Resumen del canal" muestra las
descargas y los países. Copia esos números en `cifras` del `.md` de la app y
cambia `cifrasActualizadas` en `src/data/sitio.ts`. Las descargas se muestran
redondeadas hacia abajo (71 → "+70").

## Financially en producción

Cuando salga de prueba, en `src/content/apps/financially.md` cambia
`estado: en-prueba` por `estado: publicada` y descomenta `playUrl`.
