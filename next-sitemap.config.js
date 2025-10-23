module.exports = {
  siteUrl: process.env.SITE_URL || 'https://daniprograma.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*', '/404', '/_*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
  },
};
