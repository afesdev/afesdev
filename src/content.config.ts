import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada app es un archivo .md en src/content/apps. El nombre del archivo es la URL: /apps/<archivo>
const apps = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/apps' }),
  schema: ({ image }) =>
    z.object({
      nombre: z.string(),
      eslogan: z.string(),
      resumen: z.string(),
      categoria: z.string(),
      orden: z.number(),
      // Windows usa capturas horizontales sin marco de celular y no habla de Google Play
      plataforma: z.enum(['Android', 'Windows']).default('Android'),
      // 'publicada' muestra el botón de Google Play; 'en-prueba' muestra "Muy pronto"
      estado: z.enum(['publicada', 'en-prueba']),
      playUrl: z.string().optional(),
      // Cuándo se cumplen los 14 días de prueba cerrada: muestra un temporizador en la página de la app
      pruebaTermina: z.coerce.date().optional(),
      colores: z.object({ principal: z.string(), oscuro: z.string(), suave: z.string() }),
      icono: image(),
      destacado: image(),
      pantallas: z.array(image()).min(2),
      capturas: z.array(z.object({ src: image(), titulo: z.string() })),
      funciones: z.array(z.object({ titulo: z.string(), texto: z.string() })),
      // Situaciones concretas en las que sirve la app. Si no hay, no se muestra la sección.
      ejemplos: z.array(z.object({ titulo: z.string(), texto: z.string() })).default([]),
      // Archivos en public/videos/<app>/ (cada .mp4 con su .jpg de portada)
      videos: z.array(z.object({ archivo: z.string(), titulo: z.string(), vertical: z.boolean().default(false) })),
      tecnologias: z.array(z.string()),
      // Cifras de Play Console (se actualizan a mano). Si no hay, no se muestran.
      cifras: z.object({ descargas: z.number(), paises: z.number() }).optional(),
      // Lo que se ve en Google: título (máx. ~60 caracteres) y descripción (máx. ~155)
      seo: z.object({ titulo: z.string(), descripcion: z.string() }),
      // Categoría de la app para Google (applicationCategory): EducationalApplication, FinanceApplication, etc.
      tipoSchema: z.string(),
    }),
});

// Política de privacidad de cada app: src/content/privacidad/<app>.md → /apps/<app>/privacidad
const privacidad = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/privacidad' }),
  schema: z.object({
    actualizada: z.string(),
  }),
});

export const collections = { apps, privacidad };
