/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [{
    resolve: `gatsby-plugin-create-client-paths`,
    options:{
      prefixes: [`/app/*`]
    }
  },
  {
    resolve: `gatsby-plugin-apollo`,
    options:{
      uri: `/.netlify/functions/getTodos`
    }
  }
],
}
