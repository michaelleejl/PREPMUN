/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `PREPMUN`,
    titleTemplate: `PREPMUN | %s`,
    description: `The home of PREPMUN`,
    author: `Michael Lee`,
    url: `https://www.prepmun.sg`,
    image: `/favIcon.png`,
    siteLanguage: `en`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/` } },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit:{
          id: 'xsm6uvu',
        },
        custom: {
          families: ['Helvetica Neue', 'Montserrat'],
          urls: ['/static/fonts/fonts.css']
        }
      }
    },
  ]
}
