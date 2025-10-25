import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://danidev.com';

  // Intentar leer los timestamps guardados por el script
  let timestamps: Record<string, any> = {};
  try {
    const timestampsPath = path.join(process.cwd(), 'scripts', '.sitemap-timestamps.json');
    if (fs.existsSync(timestampsPath)) {
      const content = fs.readFileSync(timestampsPath, 'utf8');
      timestamps = JSON.parse(content);
    }
  } catch (error) {
    // Si no existe, usar fecha actual para todas
    console.warn('⚠️ No se encontró archivo de timestamps, usando fecha actual');
  }

  // Función para obtener la fecha de una página
  const getPageDate = (pagePath: string): Date => {
    if (timestamps[pagePath]?.lastmod) {
      return new Date(timestamps[pagePath].lastmod);
    }
    return new Date();
  };

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: getPageDate('/'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portafolio`,
      lastModified: getPageDate('/portafolio'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/crea-tu-web`,
      lastModified: getPageDate('/crea-tu-web'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/curriculum`,
      lastModified: getPageDate('/curriculum'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/prueba`,
      lastModified: getPageDate('/prueba'),
      changeFrequency: 'never',
      priority: 0.3,
    },
  ];

  return routes;
}
