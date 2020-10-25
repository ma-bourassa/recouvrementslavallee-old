const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);
module.exports = {
  siteMetadata: {
    title: `Les recouvrements de sols André Lavallée`,
    description: `Entreprise familiale spécialisée en vente et installation de plancher.`,
    author: `mabourassa`,
    siteUrl: `https://recouvrementslavallee.com`,
    image: `logo.jpg`, //from static folder
  },
  plugins: [
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/success`, `/admin`],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Les recouvrements de sols André Lavallée.inc`,
        short_name: `recouvrements-lavalle`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/logo_favicon.png`,
      },
    },

    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "products",
        path: `${__dirname}/src/images/products/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "realisations",
        path: `${__dirname}/content/realisations/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "promotions",
        path: `${__dirname}/content/promotions/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/static/assets/`,
      },
    },

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          "gatsby-remark-normalize-paths",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
