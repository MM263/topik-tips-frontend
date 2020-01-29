module.exports = {
  siteMetadata: {
    title: `Topik Tips`,
    description: `Learn Korean and pass the Korean language with flying colors`,
    author: `MM263`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFE197`,
        theme_color: `#FFE197`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-typescript",
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "STRAPI",
        fieldName: "strapi",
        url: process.env.PROD_URL
          ? process.env.PROD_URL
          : "http://localhost:1337/graphql",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Jost, GothicA1"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
  ],
};
