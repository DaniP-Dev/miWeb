import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://danidev.com';

  // Mapeo de rutas a archivos
  const pageFiles = {
    '/': 'src/app/page.tsx',
    '/portafolio': 'src/app/portafolio/page.tsx',
    '/crea-tu-web': 'src/app/crea-tu-web/page.tsx',
    '/curriculum': 'src/app/curriculum/page.tsx',
    '/prueba': 'src/app/prueba/page.tsx',
  };

  const pageConfig = {
    '/': { priority: 1.0, changefreq: 'weekly' as const },
    '/portafolio': { priority: 0.9, changefreq: 'weekly' as const },
    '/crea-tu-web': { priority: 0.8, changefreq: 'monthly' as const },
    '/curriculum': { priority: 0.7, changefreq: 'monthly' as const },
    '/prueba': { priority: 0.3, changefreq: 'never' as const },
  };

  // Función para obtener la fecha del último cambio de un archivo
  function getFileLastModified(filePath: string): Date {
    try {
      const fullPath = path.join(process.cwd(), filePath);
      if (fs.existsSync(fullPath)) {
        const stat = fs.statSync(fullPath);
        // Retorna la fecha de última modificación del archivo
        return new Date(stat.mtime);
      }
    } catch (error) {
      console.warn(`⚠️ No se pudo leer archivo: ${filePath}`);
    }
    // Fallback: fecha actual
    return new Date();
  }

  const routes: MetadataRoute.Sitemap = [];

  // Generar rutas dinámicamente
  Object.entries(pageConfig).forEach(([path, config]) => {
    const lastModified = getFileLastModified(pageFiles[path as keyof typeof pageFiles]);
    
    routes.push({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: config.changefreq,
      priority: config.priority,
    });
  });

  return routes;
}
