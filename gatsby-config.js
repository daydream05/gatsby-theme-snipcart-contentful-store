module.exports = themeOptions => {
  return {
    siteMetadata: {
      title: `Contentful and Snipcart Powered Shop`,
      // will override the default values,
      ...themeOptions.siteMetadata,
      theme: JSON.stringify(themeOptions.theme)
    },
    plugins: [
      {
        resolve: `gatsby-mdx`,
        options: {
          defaultLayouts: {
            default: require.resolve(`./src/components/layout.js`),
          }
        }
      },
      {
        resolve: `gatsby-source-contentful`,
        options: themeOptions.contentfulOptions,
      },
      {
        resolve: 'gatsby-plugin-snipcart',
        options: themeOptions.snipcartOptions,
      },
      `gatsby-plugin-emotion`,
      `gatsby-transformer-remark`,
    ],
  }
}