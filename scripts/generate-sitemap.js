#!/usr/bin/env node

/**
 * Script para generar sitemap dinámico
 * Se ejecuta después de cada build (npm run build)
 * Actualiza automáticamente la fecha de lastModified
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://danidev.com';
const SITEMAP_PATH = path.join(__dirname, 'public', 'sitemap.xml');

const pages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/portafolio', priority: 0.9, changefreq: 'weekly' },
  { path: '/crea-tu-web', priority: 0.8, changefreq: 'monthly' },
  { path: '/curriculum', priority: 0.7, changefreq: 'monthly' },
  { path: '/prueba', priority: 0.3, changefreq: 'never' },
];

function generateSitemap() {
  const lastModified = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

  pages.forEach((page) => {
    xml += `
  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return xml;
}

try {
  const sitemapContent = generateSitemap();
  fs.writeFileSync(SITEMAP_PATH, sitemapContent, 'utf8');
  console.log(`✅ Sitemap generado exitosamente: ${SITEMAP_PATH}`);
  console.log(`📅 Última actualización: ${new Date().toISOString()}`);
} catch (error) {
  console.error('❌ Error al generar el sitemap:', error);
  process.exit(1);
}
