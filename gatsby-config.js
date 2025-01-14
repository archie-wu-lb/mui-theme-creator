require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  pathPrefix: `/mui-theme-creator`,
  siteMetadata: {
    title: `Material-UI Theme Creator`,
    description: `Kick off your next, great Material-UI project with a customized theme.`,
    author: `@archie-wu-lb`,
    url: "https://github.com/archie-wu-lb/mui-theme-creator",
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons", "roboto:300,400,500,700"],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mui_theme_creator_logo.webp`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-root-import`,
  ],
}
