/** @type {import('next-sitemap').IConfig} */
let policy = {
    userAgent: "*"
}

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.iddtstudios.com',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions:{
        policies: [
            policy
        ]
    }
  }