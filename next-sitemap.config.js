/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://daniprograma.vercel.app",
  generateRobotsTxt: true, // Genera robots.txt automáticamente
  generateIndexSitemap: true, // Genera sitemap index
  
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
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://daniprograma.vercel.app"}/sitemap.xml`,
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

  // Transformar URLs para optimización SEO
  transform: async (config, path) => {
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

    return {
      loc: path, // URL de la página
      changefreq: routeConfig.changefreq,
      priority: routeConfig.priority,
      lastmod: new Date().toISOString(),
    }
  },
};
