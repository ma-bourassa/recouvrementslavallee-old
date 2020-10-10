const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Les recouvrements de sols André Lavallée`,
    description: `Entreprise familiale spécialisée en installation de plancher pour qui la satisfaction de la clientèle et la finition sont prioritaires.`,
    author: `mabourassa`,
    siteUrl: `https://frosty-shockley-759a6c.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
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
        path: `${__dirname}/src/pages/realisations/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "promotions",
        path: `${__dirname}/src/pages/promotions/`,
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
        name: "assets",
        path: `${__dirname}/static/assets/`,
      },
    },
  ],
};
