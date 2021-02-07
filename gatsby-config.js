const tailwindConfig = require("./tailwind.config.js");

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://recouvrementslavallee.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: `Les recouvrements de sols André Lavallée`,
    description: `Installation de planchers souples tels que lattes de vinyle, tapis, prélart, bois d’ingénierie et laminé. Nous nous déplaçons partout sur la Rive-Sud de Montréal. Contactez-nous pour une soumission gratuite.`,
    author: `@apparluk`,
    siteUrl,
    image: `logo.jpg`, //from static folder
  },

  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "uploads",
        path: `${__dirname}/static/uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "realisations",
        path: `${__dirname}/content/realisations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 75,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1024,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [`/dev-404-page`, `/404`, `/404.html`, `/offline-plugin-app-shell-fallback`, `/success`, `/admin`],
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-source-name`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          process.env.NODE_ENV === "production" ? require("autoprefixer") : null,
          process.env.NODE_ENV === "production" ? require("cssnano")({ preset: "default" }) : null,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Les recouvrements de sols André Lavallée`,
        short_name: `Recouvrements-lavallee`,
        start_url: `/`,
        background_color: `#424043`,
        theme_color: `#1874B5`,
        display: `minimal-ui`,
        icon: `src/images/logo_favicon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-XW3833S4ZN", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
