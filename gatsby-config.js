module.exports = {
  siteMetadata: {
    title: `Deutsche Wohnen & Co. enteignen!`,
    description: `Am 26.9. können die Berliner:innen die Mietenkrise in der Stadt beenden. Erfahre, warum der Volksentscheid "Deutsche Wohnen & Co enteignen!" wichtig ist und stimme mit JA!  `,
    author: `Initiative Deutsche Wohnen & Co. enteignen!`,
    siteUrl: `https://www.dwenteignen.de`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dwe-campaign`,
        short_name: `dwe-campaign`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/dwe-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/data/intl`,
        languages: [`de`],
        defaultLanguage: `de`,
        redirect: true,
      },
    },
  ],
}
