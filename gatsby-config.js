module.exports = {
  siteMetadata: {
    title: `Just Memories`,
    description: `„Fotografować to znaczy wstrzymać oddech, uruchamiając wszystkie nasze zdolności w obliczu ulotnej rzeczywistości.“ — Henri Cartier-Bresson`,
    author: `Marek Dorosz`,
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
        name: `Just Memories Photography`,
        short_name: `Just Memories`,
        start_url: `/`,
        lang: 'pl',
        display: `standalone`,
        background_color: `#D6F9F5`,
        theme_color: `#D6F9F5`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
