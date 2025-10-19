/** @type {import('next-sitemap').IConfig} */
const { execSync } = require('child_process');

module.exports = {
  siteUrl: process.env.SITE_URL || "https://daniprograma.vercel.app",
  generateRobotsTxt: true, // Genera robots.txt automáticamente
  generateIndexSitemap: false, // NO generar índice - sitemap directo
  
  // Configuración optimizada para GSC
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000, // Máximo de URLs por sitemap
  
  // Excluir rutas que no queremos en el sitemap
  exclude: [
    '/api/*', // Excluir API routes
    '/404', // Excluir páginas de error
    '/_*', // Excluir páginas internas de Next.js
  ],
  
  // Configuración del robots.txt optimizada para GSC
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/', // Bloquear API routes
          '/_next/', // Bloquear archivos internos de Next.js
          '/admin/', // Bloquear área administrativa
          '/.env*', // Bloquear archivos de configuración
          '/private/', // Bloquear carpeta privada si existe
          '*?utm_*', // Bloquear URLs con parámetros UTM para evitar duplicados
          '*?ref=*', // Bloquear URLs con parámetros de referencia
        ],
        crawlDelay: 1, // Retraso de 1 segundo entre requests (opcional)
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
        // Sin crawlDelay para Googlebot para indexación más rápida
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
        crawlDelay: 1,
      }
    ],
    // No incluir aquí el sitemap principal (evita referencias circulares)
    additionalSitemaps: [
      // Agrega aquí sitemaps externos si los tienes, p. ej.:
      // 'https://otrodominio.com/sitemap.xml'
    ],
    // Agregar comentarios informativos al robots.txt
    transformRobotsTxt: async (_, robotsTxt) => {
      return `# Robots.txt para ${process.env.SITE_URL || "https://daniprograma.vercel.app"}
# Generado automáticamente por next-sitemap
# Última actualización: ${new Date().toISOString().split('T')[0]}

${robotsTxt}

# Sitemap principal
Sitemap: ${process.env.SITE_URL || "https://daniprograma.vercel.app"}/sitemap.xml

# Información adicional
# Este sitio web es desarrollado por DaniDev
# Para más información sobre el rastreo, contacta: danidev@tusitio.com`
    }
  },

  // URLs adicionales que Next.js no puede detectar automáticamente
  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/'),
      await config.transform(config, '/about'),
      await config.transform(config, '/projects'),
      await config.transform(config, '/articles'),
      await config.transform(config, '/contact'),
      await config.transform(config, '/projects/clay-gatsby-theme'),
    ]
  },

  // Transformar URLs para optimización SEO con fechas desde Git
  transform: async (config, path) => {
    // Función para obtener la última modificación desde Git
    const getLastModFromGit = (urlPath) => {
      try {
        // Mapear rutas URL a archivos reales del proyecto
        const fileMap = {
          '/': 'src/pages/index.js',
          '/about': 'src/pages/about.js',
          '/projects': 'src/pages/projects.js',
          '/articles': 'src/pages/articles.js',
          '/contact': 'src/pages/contact.js',
          '/projects/clay-gatsby-theme': 'src/pages/projects/clay-gatsby-theme.js',
        };

        const actualFile = fileMap[urlPath] || 'src/pages/index.js';
        
        // Comando Git para obtener la última modificación del archivo
        const gitCommand = `git log -1 --format=%cI "${actualFile}" 2>nul || echo ""`;
        const lastCommitDate = execSync(gitCommand, { 
          encoding: 'utf8', 
          cwd: process.cwd(),
          stdio: ['pipe', 'pipe', 'ignore'] // Suprimir errores en stderr
        }).trim();
        
        // Si Git devuelve una fecha válida, usarla; sino usar fecha actual
        if (lastCommitDate && lastCommitDate !== '') {
          return lastCommitDate;
        } else {
          // Fallback: usar fecha actual si no hay commits para el archivo
          return new Date().toISOString();
        }
      } catch (error) {
        console.warn(`⚠️  No se pudo obtener fecha Git para ${urlPath}. Usando fecha actual.`);
        return new Date().toISOString(); // Fallback seguro
      }
    };

    // Configuraciones específicas por ruta
    const customConfig = {
      '/': {
        changefreq: 'daily',
        priority: 1.0, // Página principal con máxima prioridad
      },
      '/about': {
        changefreq: 'weekly',
        priority: 0.9,
      },
      '/projects': {
        changefreq: 'weekly',
        priority: 0.9,
      },
      '/articles': {
        changefreq: 'daily',
        priority: 0.8,
      },
      '/contact': {
        changefreq: 'monthly',
        priority: 0.6,
      }
    }

    const routeConfig = customConfig[path] || {
      changefreq: 'weekly',
      priority: 0.7,
    }

    // Asegurar loc absoluto para evitar URLs que empiecen con "//"
    const loc = new URL(path, config.siteUrl).toString();
    return {
      loc, // URL absoluta de la página
      changefreq: routeConfig.changefreq,
      priority: routeConfig.priority,
      lastmod: getLastModFromGit(path), // ✅ Fecha real desde Git
    }
  },
};
