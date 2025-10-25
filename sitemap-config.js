/**
 * Configuración de Sitemap Dinámico
 * Este archivo se ejecuta durante el build y genera un sitemap.xml optimizado
 */

const path = require('path');
const fs = require('fs');

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://danidev.com';

const pages = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/portafolio',
    priority: 0.9,
    changefreq: 'weekly',
  },
  {
    path: '/crea-tu-web',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/curriculum',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/prueba',
    priority: 0.3,
    changefreq: 'never',
  },
];

// Función para generar el sitemap
function generateSitemap() {
  const lastModified = new Date().toISOString();

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

  pages.forEach((page) => {
    sitemapXml += `
  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemapXml += `
</urlset>`;

  return sitemapXml;
}

// Exportar la configuración
module.exports = {
  generateSitemap,
  BASE_URL,
  pages,
};
