module.exports = {
  // add envoirnment variable in .env file and add your website URL

  siteUrl: process.env.SITE_URL || "https://daniprograma.vercel.app/",
  generateRobotsTxt: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
