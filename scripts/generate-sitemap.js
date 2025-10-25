#!/usr/bin/env node

/**
 * Script para generar sitemap dinámico - VERSIÓN MEJORADA
 * Mantiene un registro de fechas de modificación por página
 * Solo actualiza la fecha cuando la página realmente cambia
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://danidev.com';
const projectRoot = path.resolve(__dirname, '..');
const SITEMAP_PATH = path.join(projectRoot, 'public', 'sitemap.xml');
const TIMESTAMPS_FILE = path.join(projectRoot, 'scripts', '.sitemap-timestamps.json');

// Mapeo de rutas a archivos/directorios
const pageMap = {
  '/': ['src/app/page.tsx'],
  '/portafolio': ['src/app/portafolio/page.tsx'],
  '/crea-tu-web': ['src/app/crea-tu-web/page.tsx'],
  '/curriculum': ['src/app/curriculum/page.tsx', 'src/app/curriculum/download-button.tsx'],
  '/prueba': ['src/app/prueba/page.tsx'],
};

const pageDefaults = {
  '/': { priority: 1.0, changefreq: 'weekly' },
  '/portafolio': { priority: 0.9, changefreq: 'weekly' },
  '/crea-tu-web': { priority: 0.8, changefreq: 'monthly' },
  '/curriculum': { priority: 0.7, changefreq: 'monthly' },
  '/prueba': { priority: 0.3, changefreq: 'never' },
};

// Cargar timestamps anteriores
function loadTimestamps() {
  try {
    if (fs.existsSync(TIMESTAMPS_FILE)) {
      const data = fs.readFileSync(TIMESTAMPS_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (e) {
    // Archivo no existe o está corrupto
  }
  return {};
}

// Guardar timestamps
function saveTimestamps(timestamps) {
  try {
    fs.writeFileSync(TIMESTAMPS_FILE, JSON.stringify(timestamps, null, 2), 'utf8');
  } catch (e) {
    console.warn('⚠️ No se pudo guardar timestamps:', e.message);
  }
}

// Calcular hash del archivo para detectar cambios
function getFileHash(filePath) {
  try {
    const fullPath = path.join(projectRoot, filePath);
    if (!fs.existsSync(fullPath)) {
      return 'NOT_FOUND';
    }
    const content = fs.readFileSync(fullPath, 'utf8');
    return crypto.createHash('md5').update(content).digest('hex');
  } catch (e) {
    return 'ERROR';
  }
}

// Obtener timestamps de la página
function getPageTimestamp(pagePath, files, oldTimestamps) {
  const currentHashes = {};
  let hasChanged = false;

  // Calcular hashes actuales
  files.forEach(file => {
    const hash = getFileHash(file);
    currentHashes[file] = hash;
  });

  // Comparar con hashes anteriores
  const oldPageData = oldTimestamps[pagePath] || {};
  const oldHashes = oldPageData.hashes || {};

  Object.keys(currentHashes).forEach(file => {
    if (oldHashes[file] !== currentHashes[file]) {
      hasChanged = true;
    }
  });

  // Si cambió, actualizar la fecha
  let timestamp = oldPageData.lastmod || new Date().toISOString();
  if (hasChanged) {
    timestamp = new Date().toISOString();
  }

  return {
    lastmod: timestamp,
    hashes: currentHashes,
    changed: hasChanged,
  };
}

function generateSitemap() {
  const oldTimestamps = loadTimestamps();
  const newTimestamps = {};

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

  // Generar URLs
  Object.entries(pageMap).forEach(([pagePath, files]) => {
    const pageData = getPageTimestamp(pagePath, files, oldTimestamps);
    const { priority, changefreq } = pageDefaults[pagePath];
    
    newTimestamps[pagePath] = pageData;

    const changeIndicator = pageData.changed ? '🔄' : '✓';
    console.log(`  ${changeIndicator} ${pagePath} → ${pageData.lastmod}`);
    
    xml += `
  <url>
    <loc>${BASE_URL}${pagePath}</loc>
    <lastmod>${pageData.lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  // Guardar nuevos timestamps
  saveTimestamps(newTimestamps);

  return xml;
}

try {
  const publicDir = path.dirname(SITEMAP_PATH);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  console.log(`\n📍 Generando sitemap dinámico...`);
  const sitemapContent = generateSitemap();
  fs.writeFileSync(SITEMAP_PATH, sitemapContent, 'utf8');
  console.log(`\n✅ Sitemap generado exitosamente`);
  console.log(`📂 ${SITEMAP_PATH}\n`);
} catch (error) {
  console.error('❌ Error al generar el sitemap:', error.message);
  process.exit(1);
}
