#!/usr/bin/env node

/**
 * Script para generar sitemap dinámico
 * Se ejecuta después de cada build (npm run build)
 * Actualiza automáticamente la fecha de lastModified SOLO de páginas que cambiaron
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://danidev.com';
const projectRoot = path.resolve(__dirname, '..');
const SITEMAP_PATH = path.join(projectRoot, 'public', 'sitemap.xml');

// Mapeo de rutas a archivos/directorios
const pageMap = {
  '/': ['src/app/page.tsx', 'src/app/layout.tsx'],
  '/portafolio': ['src/app/portafolio/page.tsx'],
  '/crea-tu-web': ['src/app/crea-tu-web/page.tsx'],
  '/curriculum': ['src/app/curriculum/page.tsx'],
  '/prueba': ['src/app/prueba/page.tsx'],
};

const pageDefaults = {
  '/': { priority: 1.0, changefreq: 'weekly' },
  '/portafolio': { priority: 0.9, changefreq: 'weekly' },
  '/crea-tu-web': { priority: 0.8, changefreq: 'monthly' },
  '/curriculum': { priority: 0.7, changefreq: 'monthly' },
  '/prueba': { priority: 0.3, changefreq: 'never' },
};

/**
 * Obtiene la fecha del último commit que modificó un archivo
 */
function getLastModifiedDate(filePath) {
  try {
    const timestamp = execSync(`git log -1 --format=%aI "${filePath}" 2>/dev/null || echo ""`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    }).trim();
    
    if (timestamp) {
      return new Date(timestamp).toISOString();
    }
  } catch (e) {
    // Git no disponible o archivo no está en control de versiones
  }
  
  // Fallback: retorna la fecha actual
  return new Date().toISOString();
}

/**
 * Obtiene la fecha más reciente entre múltiples archivos
 */
function getPageLastModified(files) {
  if (!files || files.length === 0) {
    return new Date().toISOString();
  }
  
  const dates = files
    .map(file => {
      const fullPath = path.join(projectRoot, file);
      return getLastModifiedDate(fullPath);
    })
    .map(dateStr => new Date(dateStr).getTime());
  
  if (dates.length === 0) {
    return new Date().toISOString();
  }
  
  const maxTime = Math.max(...dates);
  return new Date(maxTime).toISOString();
}

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

  // Generar URLs
  Object.entries(pageMap).forEach(([path, files]) => {
    const lastModified = getPageLastModified(files);
    const { priority, changefreq } = pageDefaults[path];
    
    xml += `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return xml;
}

try {
  const publicDir = path.dirname(SITEMAP_PATH);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const sitemapContent = generateSitemap();
  fs.writeFileSync(SITEMAP_PATH, sitemapContent, 'utf8');
  console.log(`✅ Sitemap generado exitosamente`);
  console.log(`📂 Ubicación: ${SITEMAP_PATH}`);
  console.log(`🌐 URL base: ${BASE_URL}`);
  console.log(`📅 Fechas actualizadas desde Git commit history`);
} catch (error) {
  console.error('❌ Error al generar el sitemap:', error.message);
  process.exit(1);
}
