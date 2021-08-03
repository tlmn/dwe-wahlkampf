module.exports = {
  siteMetadata: {
    title: `Deutsche Wohnen & Co. enteignen!`,
    description: ``,
    author: ``,
    siteUrl: `https://www.dwenteignen.de`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dwe-campaign`,
        short_name: `dwe-campaign`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/data/intl`,
        languages: [`de`, `en`, `tr`],
        defaultLanguage: `de`,
        redirect: true,
      },
    },
  ],
}
